/* Pinyin-Pfad – Spaced Repetition, Tagespensum, Statistik
 *
 * Verfahren: Leitner mit SM-2-Anleihe. Sieben Fächer (0–6) mit festen Abständen;
 * eine richtige Antwort schiebt eine Stufe hoch, eine falsche zwei Stufen zurück
 * (nicht ganz auf 0 – wer eine Vokabel viermal sicher hatte und einmal patzt, soll
 * nicht bei null anfangen müssen).
 *
 * Alles liegt in `localStorage`. Drei Schlüssel, damit ein Zurücksetzen des
 * Fortschritts die Einstellungen nicht mitnimmt.
 */
(function (global) {
  'use strict';

  var K_PROGRESS = 'pinyin-pfad-progress';
  var K_SETTINGS = 'pinyin-pfad-settings';
  var K_STATS    = 'pinyin-pfad-stats';

  /* Abstand in Tagen je Leitner-Fach. Fach 0 heißt „heute noch einmal“. */
  var ABSTAND = [0, 1, 2, 4, 8, 16, 32];
  var MAX_STUFE = ABSTAND.length - 1;

  var STANDARD_EINST = {
    dailyNewVocab: 10,
    dailyNewGrammar: 1,
    dailyReviewLimit: 30,
    showHanzi: true,
    currentLevel: 'A1',
    mutedTopicIds: [],
    sound: true
  };

  var progress = {};
  var einst = null;
  var stats = null;

  /* ---------- Speicher ---------- */

  function lesen(key, fallback) {
    try {
      var roh = localStorage.getItem(key);
      if (!roh) return fallback;
      var obj = JSON.parse(roh);
      return obj && typeof obj === 'object' ? obj : fallback;
    } catch (e) {
      console.warn('[SRS] konnte', key, 'nicht lesen:', e);
      return fallback;
    }
  }

  function schreiben(key, wert) {
    try { localStorage.setItem(key, JSON.stringify(wert)); }
    catch (e) { console.warn('[SRS] konnte', key, 'nicht schreiben:', e); }
  }

  function laden() {
    progress = lesen(K_PROGRESS, {});
    einst = Object.assign({}, STANDARD_EINST, lesen(K_SETTINGS, {}));
    if (!Array.isArray(einst.mutedTopicIds)) einst.mutedTopicIds = [];
    stats = lesen(K_STATS, { done: {}, streak: 0, longestStreak: 0, lastDay: null });
    if (!stats.done) stats.done = {};
    streakPruefen();
  }

  /* ---------- Datum ---------- */

  /** "YYYY-MM-DD" in Ortszeit – nicht über toISOString, das rechnet in UTC um
   *  und verschiebt den Tageswechsel je nach Zeitzone um Stunden. */
  function tag(d) {
    d = d || new Date();
    var m = String(d.getMonth() + 1);
    var t = String(d.getDate());
    return d.getFullYear() + '-' + (m.length < 2 ? '0' + m : m) + '-' + (t.length < 2 ? '0' + t : t);
  }

  function tagPlus(n) {
    var d = new Date();
    d.setDate(d.getDate() + n);
    return tag(d);
  }

  function heute() { return tag(); }

  /** Differenz in Tagen zwischen zwei "YYYY-MM-DD" (b - a). */
  function tageZwischen(a, b) {
    var da = new Date(a + 'T00:00:00');
    var db = new Date(b + 'T00:00:00');
    return Math.round((db - da) / 86400000);
  }

  /* ---------- Fortschritt ---------- */

  function eintrag(itemId) { return progress[itemId] || null; }

  function neuerEintrag(itemId, itemType) {
    return {
      itemId: itemId,
      itemType: itemType,
      srsLevel: 0,
      nextReviewDate: heute(),
      correctStreak: 0,
      lastReviewedAt: null,
      seen: 0,
      correct: 0
    };
  }

  /**
   * Eine Antwort verbuchen.
   * @param {'gut'|'schlecht'|'nochmal'} bewertung – `nochmal` ist die
   *        Selbsteinschätzung der Karteikarte („wusste ich nicht“) und wirkt
   *        wie `schlecht`, zählt aber nicht als Fehler in der Trefferquote.
   */
  function bewerten(itemId, itemType, bewertung) {
    var p = progress[itemId] || (progress[itemId] = neuerEintrag(itemId, itemType));
    p.seen = (p.seen || 0) + 1;
    p.lastReviewedAt = new Date().toISOString();

    if (bewertung === 'gut') {
      p.correct = (p.correct || 0) + 1;
      p.correctStreak = (p.correctStreak || 0) + 1;
      p.srsLevel = Math.min(MAX_STUFE, p.srsLevel + 1);
    } else {
      p.correctStreak = 0;
      p.srsLevel = Math.max(0, p.srsLevel - 2);
    }

    var abstand = ABSTAND[p.srsLevel];
    /* Fach 0 heißt „heute noch einmal“ – das Fällige bleibt fällig, damit die
       Karte in derselben Sitzung wiederkommt. */
    p.nextReviewDate = abstand === 0 ? heute() : tagPlus(abstand);
    schreiben(K_PROGRESS, progress);
    return p;
  }

  /** Ist das Element fällig (oder überfällig)? */
  function faellig(itemId) {
    var p = progress[itemId];
    if (!p) return false;
    return tageZwischen(p.nextReviewDate, heute()) >= 0;
  }

  function gesehen(itemId) { return !!progress[itemId]; }

  /** Gilt als gelernt, sobald es Fach 3 erreicht hat (Abstand ≥ 4 Tage). */
  function gelernt(itemId) {
    var p = progress[itemId];
    return !!p && p.srsLevel >= 3;
  }

  /* ---------- Tagespensum ---------- */

  /** Alle Vokabeln, die für das eingestellte Niveau in Frage kommen. */
  function vokabelPool() {
    var levels = Daten.bisLevel(einst.currentLevel);
    var stumm = einst.mutedTopicIds || [];
    return Daten.nachLevel(levels).filter(function (v) {
      return stumm.indexOf(v.topicId) < 0;
    });
  }

  function grammatikPool() {
    return Grammatik.reihenfolge(Daten.bisLevel(einst.currentLevel));
  }

  /**
   * Die Tagesauswahl: erst Fälliges, dann Neues bis zum Limit.
   * Gibt Listen von {id, type, item} zurück – die Übungsformen wählt `uebungen.js`.
   */
  function tagesplan() {
    var vPool = vokabelPool();
    var gPool = grammatikPool();

    var faelligeV = [];
    var faelligeG = [];
    var neueV = [];
    var neueG = [];

    vPool.forEach(function (v) {
      if (gesehen(v.id)) { if (faellig(v.id)) faelligeV.push(v); }
      else neueV.push(v);
    });
    gPool.forEach(function (l) {
      if (gesehen(l.id)) { if (faellig(l.id)) faelligeG.push(l); }
      else neueG.push(l);
    });

    /* Am längsten Überfälliges zuerst, bei Gleichstand das niedrigere Fach –
       was oft danebenging, kommt früher dran. */
    function dringlichkeit(a, b) {
      var pa = progress[a.id], pb = progress[b.id];
      var d = tageZwischen(pb.nextReviewDate, pa.nextReviewDate);
      if (d !== 0) return d;
      return pa.srsLevel - pb.srsLevel;
    }
    faelligeV.sort(dringlichkeit);
    faelligeG.sort(dringlichkeit);

    var limit = Math.max(0, einst.dailyReviewLimit | 0);
    /* Fällige Grammatik hat Vorrang: es gibt viel weniger davon, und sie fällt
       sonst hinter der Vokabelmenge hinten runter. */
    var wdhG = faelligeG.slice(0, Math.min(faelligeG.length, limit));
    var wdhV = faelligeV.slice(0, Math.max(0, limit - wdhG.length));

    return {
      wiederholungVokabeln: wdhV,
      wiederholungGrammatik: wdhG,
      neueVokabeln: neueV.slice(0, Math.max(0, einst.dailyNewVocab | 0)),
      neueGrammatik: neueG.slice(0, Math.max(0, einst.dailyNewGrammar | 0)),
      offenWiederholung: faelligeV.length + faelligeG.length - wdhV.length - wdhG.length,
      vorratVokabeln: neueV.length,
      vorratGrammatik: neueG.length
    };
  }

  /* ---------- Statistik und Streak ---------- */

  function heuteErledigt() { return stats.done[heute()] || 0; }

  function erledigtPlus(n) {
    var t = heute();
    stats.done[t] = (stats.done[t] || 0) + (n || 1);
    if (stats.lastDay !== t) {
      /* Erster erledigter Zug heute: Streak fortschreiben oder neu beginnen. */
      var luecke = stats.lastDay ? tageZwischen(stats.lastDay, t) : null;
      stats.streak = (luecke === 1) ? (stats.streak + 1) : 1;
      stats.lastDay = t;
      if (stats.streak > (stats.longestStreak || 0)) stats.longestStreak = stats.streak;
    }
    schreiben(K_STATS, stats);
  }

  /** Beim Laden prüfen, ob der Streak gerissen ist (mehr als ein Tag Pause). */
  function streakPruefen() {
    if (!stats.lastDay) return;
    var d = tageZwischen(stats.lastDay, heute());
    if (d > 1) stats.streak = 0;
  }

  /** Erledigte Karten der letzten `n` Tage, ältester zuerst. */
  function verlauf(n) {
    var out = [];
    for (var i = n - 1; i >= 0; i--) {
      var d = new Date();
      d.setDate(d.getDate() - i);
      var t = tag(d);
      out.push({ tag: t, anzahl: stats.done[t] || 0 });
    }
    return out;
  }

  /** Übersicht für den Statistik-Bildschirm. */
  function uebersicht() {
    var levels = Daten.bisLevel(einst.currentLevel);
    var proLevel = {};
    var proThema = {};

    Daten.alle().forEach(function (v) {
      var l = proLevel[v.level] || (proLevel[v.level] = { gesamt: 0, angefangen: 0, gelernt: 0 });
      l.gesamt++;
      if (gesehen(v.id)) l.angefangen++;
      if (gelernt(v.id)) l.gelernt++;

      var t = proThema[v.topicId] || (proThema[v.topicId] = { gesamt: 0, angefangen: 0, gelernt: 0, imZiel: 0 });
      t.gesamt++;
      if (levels.indexOf(v.level) >= 0) t.imZiel++;
      if (gesehen(v.id)) t.angefangen++;
      if (gelernt(v.id)) t.gelernt++;
    });

    var gram = { gesamt: 0, angefangen: 0, gelernt: 0 };
    Grammatik.alle().forEach(function (l) {
      gram.gesamt++;
      if (gesehen(l.id)) gram.angefangen++;
      if (gelernt(l.id)) gram.gelernt++;
    });

    var faecher = [0, 0, 0, 0, 0, 0, 0];
    var gesehenGesamt = 0, richtigGesamt = 0;
    Object.keys(progress).forEach(function (id) {
      var p = progress[id];
      faecher[Math.min(MAX_STUFE, Math.max(0, p.srsLevel))]++;
      gesehenGesamt += p.seen || 0;
      richtigGesamt += p.correct || 0;
    });

    return {
      proLevel: proLevel,
      proThema: proThema,
      grammatik: gram,
      faecher: faecher,
      trefferquote: gesehenGesamt ? richtigGesamt / gesehenGesamt : null,
      antworten: gesehenGesamt,
      streak: stats.streak || 0,
      longestStreak: stats.longestStreak || 0,
      heute: heuteErledigt(),
      verlauf: verlauf(14)
    };
  }

  /* ---------- Einstellungen ---------- */

  function einstellungen() { return einst; }

  function setzeEinstellung(schluessel, wert) {
    einst[schluessel] = wert;
    schreiben(K_SETTINGS, einst);
  }

  /** Wiederholungsdaten und Streak löschen – die Einstellungen bleiben absichtlich
   *  stehen. Wer zurücksetzt, will neu anfangen, nicht sein Tagespensum neu einstellen. */
  function fortschrittLoeschen() {
    progress = {};
    stats = { done: {}, streak: 0, longestStreak: 0, lastDay: null };
    schreiben(K_PROGRESS, progress);
    schreiben(K_STATS, stats);
  }

  global.SRS = {
    ABSTAND: ABSTAND,
    MAX_STUFE: MAX_STUFE,
    STANDARD_EINST: STANDARD_EINST,
    laden: laden,
    heute: heute,
    tageZwischen: tageZwischen,
    eintrag: eintrag,
    bewerten: bewerten,
    faellig: faellig,
    gesehen: gesehen,
    gelernt: gelernt,
    vokabelPool: vokabelPool,
    grammatikPool: grammatikPool,
    tagesplan: tagesplan,
    heuteErledigt: heuteErledigt,
    erledigtPlus: erledigtPlus,
    uebersicht: uebersicht,
    verlauf: verlauf,
    einstellungen: einstellungen,
    setzeEinstellung: setzeEinstellung,
    fortschrittLoeschen: fortschrittLoeschen
  };
})(window);
