/* Pinyin-Trainer – Bedienung, Ansichten, Übungsbühne
 *
 * Version: die minor-Zahl zählt als ganze Zahl weiter (nach 1.9 kommt 1.10),
 * genau wie in den Schwesterprojekten rule-detection und soundcape.
 */
(function () {
  'use strict';

  var APP_VERSION = '1.2';

  /* ---------- kleine Helfer ---------- */

  function $(sel, wurzel) { return (wurzel || document).querySelector(sel); }
  function $$(sel, wurzel) {
    return Array.prototype.slice.call((wurzel || document).querySelectorAll(sel));
  }

  function el(tag, klasse, text) {
    var n = document.createElement(tag);
    if (klasse) n.className = klasse;
    if (text != null) n.textContent = text;
    return n;
  }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  var toastTimer = null;
  function toast(text) {
    var t = $('#toast');
    t.textContent = text;
    t.classList.add('an');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove('an'); }, 2200);
  }

  /** Sehr einfaches Markdown für die Grammatik-Erklärungen:
   *  Absätze, **fett** und `code`. Mehr braucht es nicht, und mehr soll es
   *  auch nicht können – der Text wird vorher escaped. */
  function markdown(text) {
    return esc(text)
      .split(/\n\n+/)
      .map(function (absatz) {
        var h = absatz.replace(/\n/g, '<br>');
        h = h.replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>');
        h = h.replace(/`([^`]+)`/g, '<code>$1</code>');
        return '<p>' + h + '</p>';
      })
      .join('');
  }

  /** `_____` in einem Lückentext sichtbar machen, alles andere escapen. */
  function mitLuecke(text) {
    return esc(text).replace(/_{3,}/g, '<span style="color:var(--gold);letter-spacing:1px">_____</span>');
  }

  function proz(a, b) { return b ? Math.round(a / b * 100) : 0; }

  /** „1 Tag“ / „3 Tage“ – ohne das steht überall „1 Tage“. */
  function anzahl(n, einzahl, mehrzahl) { return n + ' ' + (n === 1 ? einzahl : mehrzahl); }

  /* ---------- Navigation ---------- */

  var aktuelleAnsicht = 'heute';
  var rueckkehr = 'heute';      // wohin die Sitzung zurückführt

  function zeige(name) {
    $$('.ansicht').forEach(function (a) { a.classList.remove('an'); });
    var ziel = $('#v-' + name);
    if (ziel) ziel.classList.add('an');
    aktuelleAnsicht = name;

    $$('#fuss button[data-view]').forEach(function (b) {
      if (b.dataset.view === name) b.setAttribute('aria-current', 'page');
      else b.removeAttribute('aria-current');
    });
    document.body.classList.toggle('in-session', name === 'session');
    window.scrollTo(0, 0);

    kopfZeichnen();
    if (name === 'heute') dashboardZeichnen();
    if (name === 'vokabeln') themenZeichnen();
    if (name === 'grammatik') grammatikZeichnen();
    if (name === 'statistik') statistikZeichnen();
  }

  /* ---------- Dashboard ---------- */

  /** Streak und Niveau im Kopf. Läuft bei jedem Ansichtswechsel, nicht nur im
   *  Dashboard – sonst zeigt der Chip nach einer Sitzung noch den alten Stand. */
  function kopfZeichnen() {
    var u = SRS.uebersicht();
    $('#chip-streak').textContent = anzahl(u.streak, 'Tag', 'Tage');
    $('#chip-level').textContent = SRS.einstellungen().currentLevel;
  }

  var WOCHENTAG = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
  var MONAT = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
               'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];

  function dashboardZeichnen() {
    var d = new Date();
    $('#dash-datum').textContent =
      WOCHENTAG[d.getDay()] + ', ' + d.getDate() + '. ' + MONAT[d.getMonth()];

    var plan = SRS.tagesplan();
    var wdh = plan.wiederholungVokabeln.length + plan.wiederholungGrammatik.length;
    var neu = plan.neueVokabeln.length + plan.neueGrammatik.length;
    var ziel = wdh + neu;
    var fertig = SRS.heuteErledigt();
    var anteil = ziel ? Math.min(1, fertig / ziel) : (fertig ? 1 : 0);

    $('#ring-bogen').style.strokeDashoffset = String(264 - 264 * anteil);
    $('#ring-prozent').textContent = Math.round(anteil * 100) + '%';
    $('#ring-unter').textContent = fertig + ' / ' + (ziel || fertig);

    var titel = $('#dash-titel'), text = $('#dash-text'), knopf = $('#btn-heute-start');
    if (ziel === 0) {
      titel.textContent = fertig ? 'Pensum geschafft' : 'Nichts fällig';
      text.textContent = fertig
        ? 'Heute schon ' + fertig + ' Karten erledigt. Freies Üben geht jederzeit.'
        : 'Für heute steht nichts an. Du kannst trotzdem frei üben.';
      knopf.textContent = 'Frei üben';
      knopf.onclick = function () { zeige('vokabeln'); };
    } else {
      titel.textContent = fertig >= ziel ? 'Pensum geschafft' : (ziel - fertig) + ' Einheiten offen';
      text.textContent = wdh + ' zur Wiederholung, ' + neu + ' neu' +
        (plan.offenWiederholung > 0 ? ' · ' + plan.offenWiederholung + ' über der Obergrenze' : '');
      knopf.textContent = fertig > 0 ? 'Weitermachen' : 'Los geht’s';
      knopf.onclick = heuteStarten;
    }

    var hinweis = $('#dash-hinweis');
    if (ziel > 0 && fertig === 0 && d.getHours() >= 18) {
      hinweis.style.display = 'block';
      hinweis.textContent = 'Der Tag neigt sich – das Pensum steht noch aus. ' +
        (SRS.uebersicht().streak > 0 ? 'Dein Streak wartet.' : '');
    } else {
      hinweis.style.display = 'none';
    }

    var u = SRS.uebersicht();
    $('#kachel-wdh').textContent = String(wdh);
    $('#kachel-neu').textContent = String(neu);
    $('#kachel-streak').textContent = String(u.streak);
    var gefestigt = 0;
    Object.keys(u.proLevel).forEach(function (k) { gefestigt += u.proLevel[k].gelernt; });
    $('#kachel-gelernt').textContent = String(gefestigt);

    var zaehlung = Daten.zaehlung();
    var gesamtVok = 0;
    Object.keys(zaehlung).forEach(function (k) { gesamtVok += zaehlung[k].gesamt; });
    $('#kurz-vokabeln').textContent =
      Daten.THEMEN.length + ' Themen · ' + gesamtVok + ' Vokabeln';
    var gz = Grammatik.zaehlung();
    $('#kurz-grammatik').textContent =
      gz.gesamt + ' Lektionen · A1 ' + gz.A1 + ' · A2 ' + gz.A2 + ' · B1 ' + gz.B1 + ' · B2 ' + gz.B2;
  }

  function heuteStarten() {
    var plan = SRS.tagesplan();
    var karten = Uebungen.sessionAusPlan(plan, SRS.vokabelPool());
    if (!karten.length) { toast('Für heute ist nichts offen'); return; }
    rueckkehr = 'heute';
    sessionStarten(karten, 'Tagespensum');
  }

  /* ---------- Vokabeln ---------- */

  var vokFilter = null;   // Liste der aktiven Niveaus

  function filterInit() {
    if (!vokFilter) vokFilter = Daten.bisLevel(SRS.einstellungen().currentLevel);
  }

  /** Baut eine Reihe Niveau-Pillen. `beiAenderung` bekommt die neue Liste. */
  function pillenBauen(behaelter, aktiv, beiAenderung) {
    behaelter.innerHTML = '';
    Daten.LEVELS.forEach(function (lv) {
      var b = el('button', 'pille', lv);
      b.setAttribute('aria-pressed', aktiv.indexOf(lv) >= 0 ? 'true' : 'false');
      b.onclick = function () {
        var i = aktiv.indexOf(lv);
        if (i >= 0) {
          if (aktiv.length === 1) { toast('Mindestens ein Niveau muss aktiv bleiben'); return; }
          aktiv.splice(i, 1);
        } else {
          aktiv.push(lv);
        }
        b.setAttribute('aria-pressed', aktiv.indexOf(lv) >= 0 ? 'true' : 'false');
        beiAenderung(aktiv);
      };
      behaelter.appendChild(b);
    });
  }

  function themenZeichnen() {
    filterInit();
    pillenBauen($('#vok-filter'), vokFilter, function () { themenListe(); });
    themenListe();
  }

  function themenListe() {
    var ziel = $('#themen-liste');
    ziel.innerHTML = '';
    var leer = true;

    Daten.THEMEN.forEach(function (t) {
      var worte = Daten.nachThema(t.id, vokFilter);
      if (!worte.length) return;
      leer = false;

      var gelernt = 0, angefangen = 0, faellig = 0;
      worte.forEach(function (v) {
        if (SRS.gelernt(v.id)) gelernt++;
        if (SRS.gesehen(v.id)) { angefangen++; if (SRS.faellig(v.id)) faellig++; }
      });

      var zeile = el('button', 'liste-zeile');
      var punkt = el('span', 'punkt ' + (faellig ? 'faellig'
        : gelernt === worte.length ? 'fertig' : angefangen ? 'laeuft' : 'offen'));
      var mitte = el('span', 'wachsen');
      var titel = el('span', 'titel', t.name);
      var unter = el('span', 'unter');
      unter.textContent = worte.length + ' Wörter · ' + gelernt + ' gefestigt' +
        (faellig ? ' · ' + faellig + ' fällig' : '');

      var bal = el('div', 'balken');
      bal.style.marginTop = '7px';
      var fuell = el('i');
      fuell.style.width = proz(gelernt, worte.length) + '%';
      bal.appendChild(fuell);

      mitte.appendChild(titel); mitte.appendChild(unter); mitte.appendChild(bal);
      var rechts = el('span', 'rechts');
      rechts.appendChild(el('span', 'lvl ' + t.level, t.level));

      zeile.appendChild(punkt); zeile.appendChild(mitte); zeile.appendChild(rechts);
      zeile.onclick = function () { themaOeffnen(t); };
      ziel.appendChild(zeile);
    });

    if (leer) {
      ziel.appendChild(el('p', 'leise', 'Für die gewählten Niveaus gibt es keine Themen.'));
    }
  }

  var themaAktiv = null;
  var themaFilter = null;

  function themaOeffnen(t) {
    themaAktiv = t;
    themaFilter = vokFilter.slice();
    $('#th-titel').textContent = t.name;
    $('#th-text').textContent = t.description || '';
    $('#th-liste').style.display = 'none';
    $('#btn-th-liste').textContent = 'Wortliste ansehen';
    pillenBauen($('#th-filter'), themaFilter, themaZahl);
    themaZahl();
    blattAuf('bl-thema');
  }

  function themaWorte() { return Daten.nachThema(themaAktiv.id, themaFilter); }

  function themaZahl() {
    var w = themaWorte();
    var gelernt = w.filter(function (v) { return SRS.gelernt(v.id); }).length;
    var neu = w.filter(function (v) { return !SRS.gesehen(v.id); }).length;
    $('#th-zahl').textContent = w.length + ' Wörter · ' + gelernt + ' gefestigt · ' + neu + ' noch nie gesehen';
    $('#btn-th-start').disabled = w.length === 0;
    if ($('#th-liste').style.display !== 'none') themaListe();
  }

  function themaListe() {
    var ziel = $('#th-liste');
    ziel.innerHTML = '';
    var zeigeHanzi = SRS.einstellungen().showHanzi;
    themaWorte().forEach(function (v) {
      var z = el('div');
      z.style.cssText = 'display:flex;gap:10px;align-items:baseline;padding:7px 0;border-bottom:1px solid var(--linie)';
      var links = el('div');
      links.style.cssText = 'flex:0 0 42%';
      links.innerHTML = '<b>' + esc(v.pinyin) + '</b>' +
        (zeigeHanzi && v.hanzi ? ' <span style="color:var(--dimmer)">' + esc(v.hanzi) + '</span>' : '');
      var rechts = el('div', 'leise', v.translationDe);
      rechts.style.flex = '1';
      var lv = el('span', 'lvl ' + v.level, v.level);
      z.appendChild(links); z.appendChild(rechts); z.appendChild(lv);
      ziel.appendChild(z);
    });
  }

  /* ---------- Grammatik ---------- */

  var gramFilter = null;
  var lektionAktiv = null;

  function grammatikZeichnen() {
    if (!gramFilter) gramFilter = Daten.bisLevel(SRS.einstellungen().currentLevel);
    pillenBauen($('#gram-filter'), gramFilter, grammatikListe);
    grammatikListe();
  }

  function grammatikListe() {
    var ziel = $('#gram-liste');
    ziel.innerHTML = '';
    var lektionen = Grammatik.reihenfolge(gramFilter);
    if (!lektionen.length) {
      ziel.appendChild(el('p', 'leise', 'Für die gewählten Niveaus gibt es keine Lektionen.'));
      return;
    }
    var letztesLevel = null;
    lektionen.forEach(function (l) {
      if (l.level !== letztesLevel) {
        letztesLevel = l.level;
        var h = el('h2', null, 'Niveau ' + l.level);
        ziel.appendChild(h);
      }
      var zustand = SRS.faellig(l.id) ? 'faellig'
        : SRS.gelernt(l.id) ? 'fertig'
        : SRS.gesehen(l.id) ? 'laeuft' : 'offen';
      var beschriftung = { faellig: 'zu wiederholen', fertig: 'gelernt', laeuft: 'angefangen', offen: 'offen' };

      var zeile = el('button', 'liste-zeile');
      zeile.appendChild(el('span', 'punkt ' + zustand));
      var mitte = el('span', 'wachsen');
      mitte.appendChild(el('span', 'titel', l.title));
      mitte.appendChild(el('span', 'unter',
        beschriftung[zustand] + ' · ' + (l.drills ? l.drills.length : 0) + ' Übungen'));
      zeile.appendChild(mitte);
      var rechts = el('span', 'rechts');
      rechts.appendChild(el('span', 'lvl ' + l.level, l.level));
      zeile.appendChild(rechts);
      zeile.onclick = function () { lektionOeffnen(l); };
      ziel.appendChild(zeile);
    });
  }

  function lektionOeffnen(l) {
    lektionAktiv = l;
    $('#lek-titel').textContent = l.title;
    var lv = $('#lek-level');
    lv.textContent = l.level;
    lv.className = 'lvl ' + l.level;
    $('#lek-text').innerHTML = markdown(l.explanation);

    var bsp = $('#lek-beispiele');
    bsp.innerHTML = '';
    l.examples.forEach(function (b) {
      var d = el('div', 'beispiel');
      d.appendChild(el('div', 'py', b.pinyin));
      if (b.hanzi) d.appendChild(el('div', 'hz', b.hanzi));
      d.appendChild(el('div', 'de', b.de));
      bsp.appendChild(d);
    });

    var p = SRS.eintrag(l.id);
    $('#lek-status').textContent = p
      ? 'Wiederholungsfach ' + p.srsLevel + ' von ' + SRS.MAX_STUFE +
        ' · nächste Wiederholung ' + (SRS.faellig(l.id) ? 'jetzt' : 'am ' + p.nextReviewDate)
      : 'Noch nicht geübt.';

    $('#btn-lek-ueben').onclick = function () {
      var karten = Uebungen.sessionAusGrammatik(l);
      if (!karten.length) { toast('Zu dieser Lektion gibt es keine Übungen'); return; }
      rueckkehr = 'lektion';
      sessionStarten(karten, l.title);
    };

    zeige('lektion');
  }

  /* ---------- Statistik ---------- */

  function statistikZeichnen() {
    var u = SRS.uebersicht();

    $('#stat-kopf').textContent = u.antworten
      ? u.antworten + ' Antworten insgesamt · ' +
        (u.trefferquote != null ? Math.round(u.trefferquote * 100) + ' % richtig · ' : '') +
        'längster Streak: ' + anzahl(u.longestStreak, 'Tag', 'Tage')
      : 'Noch keine Antworten – die Statistik füllt sich mit der ersten Übung.';

    /* Verlauf */
    var vz = $('#verlauf');
    vz.innerHTML = '';
    var max = Math.max.apply(null, u.verlauf.map(function (t) { return t.anzahl; }).concat([1]));
    u.verlauf.forEach(function (t, i) {
      var b = el('div');
      b.style.height = Math.max(3, Math.round(t.anzahl / max * 76)) + 'px';
      if (t.anzahl > 0) b.classList.add('hat');
      if (i === u.verlauf.length - 1) b.classList.add('heute');
      b.title = t.tag + ': ' + t.anzahl;
      vz.appendChild(b);
    });
    var summe = u.verlauf.reduce(function (s, t) { return s + t.anzahl; }, 0);
    var aktiveTage = u.verlauf.filter(function (t) { return t.anzahl > 0; }).length;
    $('#verlauf-text').textContent = summe + ' Karten an ' + aktiveTage + ' von 14 Tagen · heute ' + u.heute;

    /* Nach Niveau */
    var zl = $('#stat-level');
    zl.innerHTML = '';
    Daten.LEVELS.forEach(function (lv) {
      var d = u.proLevel[lv] || { gesamt: 0, angefangen: 0, gelernt: 0 };
      zl.appendChild(statZeile(lv, d.gelernt, d.angefangen, d.gesamt));
    });
    zl.appendChild(legende());

    /* Fächer */
    var fz = $('#stat-faecher');
    fz.innerHTML = '';
    u.faecher.forEach(function (n, i) {
      var d = el('div');
      var i2 = el('i', null, String(n));
      d.appendChild(i2);
      d.appendChild(document.createTextNode(String(i)));
      fz.appendChild(d);
    });

    /* Nach Thema – nur was angefangen ist, sonst 24 leere Zeilen */
    var tz = $('#stat-thema');
    tz.innerHTML = '';
    var gab = false;
    Daten.THEMEN.forEach(function (t) {
      var d = u.proThema[t.id];
      if (!d || !d.angefangen) return;
      gab = true;
      tz.appendChild(statZeile(t.name, d.gelernt, d.angefangen, d.gesamt));
    });
    if (!gab) tz.appendChild(el('p', 'leise', 'Noch kein Thema angefangen.'));
    else tz.appendChild(legende());

    /* Grammatik */
    var gz = $('#stat-gram');
    gz.innerHTML = '';
    gz.appendChild(statZeile('Lektionen', u.grammatik.gelernt, u.grammatik.angefangen,
      u.grammatik.gesamt));
    gz.appendChild(el('p', 'mini',
      u.grammatik.angefangen + ' von ' + u.grammatik.gesamt + ' Lektionen angefangen, ' +
      u.grammatik.gelernt + ' gefestigt. Als gefestigt zählt eine Einheit ab ' +
      'Wiederholungsfach 3 – also einem Abstand von vier Tagen.'));
  }

  /** Zwei Werte in einem Balken: angefangen als Grund, gefestigt darüber. */
  function statZeile(name, gefestigt, angefangen, gesamt) {
    var z = el('div', 'stat-zeile');
    z.appendChild(el('span', 'name', name));
    var b = el('div', 'balken zwei');
    var a = el('i', 'angefangen');
    a.style.width = proz(angefangen, gesamt) + '%';
    var g = el('i', 'gefestigt');
    g.style.width = proz(gefestigt, gesamt) + '%';
    b.appendChild(a); b.appendChild(g);
    z.appendChild(b);
    z.appendChild(el('span', 'wert', gefestigt + ' / ' + gesamt));
    return z;
  }

  function legende() {
    var l = el('div', 'legende');
    [['gefestigt', 'gefestigt'], ['angefangen', 'angefangen']].forEach(function (p) {
      var s = el('span');
      var i = el('i');
      i.style.background = p[0] === 'gefestigt' ? 'var(--gruen)' : '#4a5270';
      s.appendChild(i);
      s.appendChild(document.createTextNode(p[1]));
      l.appendChild(s);
    });
    return l;
  }

  /* ---------- Übungsbühne ---------- */

  var ses = null;

  function sessionStarten(karten, titel) {
    ses = { karten: karten, idx: 0, richtig: 0, falsch: 0, erledigt: 0, titel: titel, beantwortet: false };
    zeige('session');
    karteZeichnen();
  }

  function sessionBeenden() {
    zeige(rueckkehr === 'lektion' && lektionAktiv ? 'lektion' : rueckkehr);
    if (rueckkehr === 'lektion' && lektionAktiv) lektionOeffnen(lektionAktiv);
    ses = null;
  }

  function karteZeichnen() {
    var buehne = $('#ses-buehne'), rueck = $('#ses-rueck'), fuss = $('#ses-fuss');
    buehne.innerHTML = ''; fuss.innerHTML = '';
    rueck.className = ''; rueck.innerHTML = '';
    ses.beantwortet = false;

    $('#ses-balken').style.width = proz(ses.idx, ses.karten.length) + '%';
    $('#ses-zaehler').textContent = Math.min(ses.idx + 1, ses.karten.length) + '/' + ses.karten.length;

    if (ses.idx >= ses.karten.length) { abschluss(); return; }

    var karte = ses.karten[ses.idx];
    if (karte.intro) { introZeichnen(karte); return; }
    uebungZeichnen(karte, karte.uebung);
  }

  function introZeichnen(karte) {
    var l = karte.intro;
    var buehne = $('#ses-buehne');
    buehne.appendChild(frageKopf('Neue Lektion · ' + l.level));
    buehne.appendChild(el('div', 'aufgabe gross', l.title));

    var box = el('div', 'karte');
    box.style.marginTop = '14px';
    box.innerHTML = markdown(l.explanation);
    box.querySelectorAll('p').forEach(function (p) { p.style.fontSize = '15px'; });
    buehne.appendChild(box);

    var bsp = el('div', 'karte');
    l.examples.slice(0, 4).forEach(function (b) {
      var d = el('div', 'beispiel');
      d.appendChild(el('div', 'py', b.pinyin));
      if (b.hanzi) d.appendChild(el('div', 'hz', b.hanzi));
      d.appendChild(el('div', 'de', b.de));
      bsp.appendChild(d);
    });
    buehne.appendChild(bsp);

    var weiter = el('button', 'knopf', 'Verstanden – üben');
    weiter.onclick = function () { ses.idx++; karteZeichnen(); };
    $('#ses-fuss').appendChild(weiter);
  }

  function frageKopf(text) { return el('div', 'frage', text); }

  var FRAGE_TITEL = {
    multipleChoice: 'Auswahl',
    flashcard: 'Karteikarte',
    fillBlank: 'Lücke ergänzen',
    matching: 'Zuordnung',
    sentenceOrder: 'Satz ordnen',
    typing: 'Eintippen',
    errorCorrection: 'Fehler berichtigen',
    transformation: 'Umformen',
    trueFalse: 'Stimmt das?'
  };

  function uebungZeichnen(karte, ex) {
    var buehne = $('#ses-buehne');
    buehne.appendChild(frageKopf(
      (FRAGE_TITEL[ex.type] || 'Übung') + (karte.neu ? ' · neu' : '')));

    switch (ex.type) {
      case 'flashcard':                 karteikarte(karte, ex); break;
      case 'multipleChoice':
      case 'trueFalse':                 auswahl(karte, ex); break;
      case 'fillBlank':                 luecke(karte, ex); break;
      case 'matching':                  zuordnung(karte, ex); break;
      case 'sentenceOrder':             satzOrdnen(karte, ex); break;
      default:                          tippen(karte, ex); break;
    }
  }

  /* --- Karteikarte --- */
  function karteikarte(karte, ex) {
    var buehne = $('#ses-buehne'), fuss = $('#ses-fuss');
    var v = Daten.vokabel(ex.refId);

    var kk = el('div', 'kk');
    kk.appendChild(el('div', 'py', ex.prompt));
    if (ex.hanzi) kk.appendChild(el('div', 'hz', ex.hanzi));
    var rueckseite = el('div');
    rueckseite.style.display = 'none';
    rueckseite.appendChild(el('div', 'de', ex.correctAnswer));
    if (v && v.exampleSentencePinyin) {
      var b = el('div', 'bsp');
      b.innerHTML = esc(v.exampleSentencePinyin) + '<br><span style="color:var(--dimmer)">' +
        esc(v.exampleSentenceDe || '') + '</span>';
      rueckseite.appendChild(b);
    }
    kk.appendChild(rueckseite);
    buehne.appendChild(kk);

    if (v && v.wordType) {
      var h = el('p', 'hinweis-zeile', v.wordType);
      h.style.marginTop = '10px';
      buehne.appendChild(h);
    }

    var umdrehen = el('button', 'knopf', 'Umdrehen');
    umdrehen.onclick = function () {
      rueckseite.style.display = '';
      fuss.innerHTML = '';
      var reihe = el('div', 'knopf-reihe');
      var nein = el('button', 'knopf zweit', 'Wusste ich nicht');
      var ja = el('button', 'knopf', 'Wusste ich');
      nein.onclick = function () { antwortVerbuchen(karte, ex, 'nochmal', false); };
      ja.onclick = function () { antwortVerbuchen(karte, ex, 'gut', true); };
      reihe.appendChild(nein); reihe.appendChild(ja);
      fuss.appendChild(reihe);
    };
    fuss.appendChild(umdrehen);
  }

  /* --- Auswahl (Multiple Choice, Wahr/Falsch) --- */
  function auswahl(karte, ex) {
    var buehne = $('#ses-buehne');
    var frage = el('div', 'aufgabe');
    frage.innerHTML = ex.prompt;
    buehne.appendChild(frage);
    if (ex.hanzi) buehne.appendChild(el('div', 'hanzi', ex.hanzi));

    var box = el('div', 'wahl');
    ex.options.forEach(function (opt) {
      var b = el('button', null, opt);
      b.onclick = function () {
        if (ses.beantwortet) return;
        var e = Uebungen.pruefen(ex, opt);
        $$('#ses-buehne .wahl button').forEach(function (x) {
          x.disabled = true;
          if (x.textContent === ex.correctAnswer) x.classList.add('richtig');
        });
        if (!e.richtig) b.classList.add('falsch');
        antwortVerbuchen(karte, ex, e.richtig ? 'gut' : 'schlecht', e.richtig, e);
      };
      box.appendChild(b);
    });
    buehne.appendChild(box);
  }

  /* --- Lückentext --- */
  function luecke(karte, ex) {
    var buehne = $('#ses-buehne');
    var frage = el('div', 'aufgabe');
    frage.innerHTML = mitLuecke(ex.prompt);
    buehne.appendChild(frage);
    if (ex.hanzi) buehne.appendChild(el('div', 'hanzi', ex.hanzi));
    /* Beim Vokabel-Lückentext ist `hint` die Übersetzung des Satzes – sie bekommt
       deshalb dieselbe Auszeichnung wie bei den Grammatikaufgaben. */
    if (ex.hint) buehne.appendChild(el('div', 'uebersetzung', ex.hint));
    uebersetzungZeigen(ex);

    if (ex.options) { auswahlKnoepfe(karte, ex); return; }
    eingabefeld(karte, ex, 'Fehlendes Wort …');
  }

  function auswahlKnoepfe(karte, ex) {
    var box = el('div', 'wahl');
    ex.options.forEach(function (opt) {
      var b = el('button', null, opt);
      b.onclick = function () {
        if (ses.beantwortet) return;
        var e = Uebungen.pruefen(ex, opt);
        $$('#ses-buehne .wahl button').forEach(function (x) {
          x.disabled = true;
          if (x.textContent === ex.correctAnswer) x.classList.add('richtig');
        });
        if (!e.richtig) b.classList.add('falsch');
        antwortVerbuchen(karte, ex, e.richtig ? 'gut' : 'schlecht', e.richtig, e);
      };
      box.appendChild(b);
    });
    $('#ses-buehne').appendChild(box);
  }

  /* --- Tippübungen (typing, errorCorrection, transformation) --- */

  /* Ohne eigene Ansage ist bei diesen drei Formen nicht klar, was verlangt wird –
     der Prompt ist mal ein deutsches Wort, mal ein fehlerhafter Satz. */
  var TIPP_ANSAGE = {
    typing: 'Wie heißt das auf Chinesisch?',
    errorCorrection: 'In diesem Satz steckt ein Fehler. Schreibe ihn richtig.',
    transformation: 'Forme um wie angegeben.'
  };

  function tippen(karte, ex) {
    var buehne = $('#ses-buehne');
    var ansage = TIPP_ANSAGE[ex.type];
    if (ansage && ex.type !== 'transformation') {
      buehne.appendChild(el('div', 'hinweis-zeile', ansage));
    }
    var frage = el('div', 'aufgabe');
    frage.innerHTML = esc(ex.prompt);
    buehne.appendChild(frage);
    if (ex.hanzi) buehne.appendChild(el('div', 'hanzi', ex.hanzi));
    uebersetzungZeigen(ex);
    if (ex.hint) buehne.appendChild(el('div', 'hinweis-zeile', ex.hint));
    eingabefeld(karte, ex, 'Antwort auf Pinyin …');
  }

  /** Die deutsche Bedeutung des chinesischen Satzes in der Aufgabe.
   *  Bei Übersetzungsaufgaben ist `ex.de` leer – dort wäre sie die Lösung. */
  function uebersetzungZeigen(ex) {
    if (!ex.de) return;
    var d = el('div', 'uebersetzung');
    d.textContent = (ex.type === 'errorCorrection' ? 'Gemeint ist: ' : '') + ex.de;
    $('#ses-buehne').appendChild(d);
  }

  function eingabefeld(karte, ex, platzhalter) {
    var feld = el('input', 'eingabe');
    feld.type = 'text';
    feld.placeholder = platzhalter;
    feld.autocapitalize = 'off';
    feld.autocomplete = 'off';
    feld.spellcheck = false;
    $('#ses-buehne').appendChild(feld);

    var knopf = el('button', 'knopf', 'Prüfen');
    function pruefen() {
      if (ses.beantwortet) return;
      if (!feld.value.trim()) { feld.focus(); return; }
      var e = Uebungen.pruefen(ex, feld.value);
      feld.disabled = true;
      feld.classList.add(e.richtig ? 'richtig' : 'falsch');
      antwortVerbuchen(karte, ex, e.richtig ? 'gut' : 'schlecht', e.richtig, e);
    }
    knopf.onclick = pruefen;
    feld.addEventListener('keydown', function (e2) {
      if (e2.key === 'Enter') { e2.preventDefault(); pruefen(); }
    });
    $('#ses-fuss').appendChild(knopf);
    setTimeout(function () { feld.focus(); }, 60);
  }

  /* --- Satz ordnen --- */
  function satzOrdnen(karte, ex) {
    var buehne = $('#ses-buehne');
    var frage = el('div', 'aufgabe');
    frage.innerHTML = esc(ex.prompt);
    buehne.appendChild(frage);
    buehne.appendChild(el('div', 'hinweis-zeile',
      'Bausteine antippen, um sie zu setzen – noch einmal antippen nimmt sie zurück.'));

    var ziel = el('div', 'bau-ziel');
    var quelle = el('div', 'bau-quelle');
    buehne.appendChild(ziel);
    buehne.appendChild(quelle);

    var gesetzt = [];

    ex.options.forEach(function (wort, i) {
      var b = el('button', 'bau', wort);
      b.dataset.i = String(i);
      b.onclick = function () {
        if (ses.beantwortet) return;
        b.classList.add('weg');
        var k = el('button', 'bau', wort);
        k.onclick = function () {
          if (ses.beantwortet) return;
          ziel.removeChild(k);
          b.classList.remove('weg');
          gesetzt.splice(gesetzt.indexOf(k), 1);
        };
        ziel.appendChild(k);
        gesetzt.push(k);
      };
      quelle.appendChild(b);
    });

    var knopf = el('button', 'knopf', 'Prüfen');
    knopf.onclick = function () {
      if (ses.beantwortet) return;
      if (!gesetzt.length) { toast('Setze zuerst die Bausteine'); return; }
      var folge = gesetzt.map(function (k) { return k.textContent; });
      var e = Uebungen.pruefen(ex, folge);
      ziel.style.borderColor = e.richtig ? 'var(--gruen)' : 'var(--falsch)';
      ziel.style.borderStyle = 'solid';
      antwortVerbuchen(karte, ex, e.richtig ? 'gut' : 'schlecht', e.richtig, e);
    };
    $('#ses-fuss').appendChild(knopf);
  }

  /* --- Zuordnung ---
     Bedienung: erst eine Übersetzung antippen (sie wird hervorgehoben), dann den
     Platz daneben. Ein belegter Platz gibt sein Wort per Tipp wieder frei.
     Die frühere Fassung setzte automatisch in den nächsten freien Platz – damit
     ließ sich die Reihenfolge nicht steuern. */
  function zuordnung(karte, ex) {
    var buehne = $('#ses-buehne');
    buehne.appendChild(el('div', 'aufgabe', ex.prompt));
    buehne.appendChild(el('div', 'hinweis-zeile',
      'Erst die Übersetzung antippen, dann den Platz daneben.'));

    var zuord = el('div', 'zuord');
    var vorrat = el('div', 'zuord-vorrat');
    var belegung = {};
    var slots = [];
    var gewaehlt = null;      // der gerade markierte Vorrats-Knopf

    function auswahlLoesen() {
      if (gewaehlt) gewaehlt.classList.remove('gewaehlt');
      gewaehlt = null;
    }

    ex.pairs.forEach(function (p) {
      var zeile = el('div', 'zuord-zeile');
      zeile.appendChild(el('div', 'zuord-links', p.left));
      var slot = el('button', 'zuord-rechts', '—');
      slot.dataset.left = p.left;
      slot.onclick = function () {
        if (ses.beantwortet) return;
        var wert = belegung[p.left];
        if (wert) {                       // belegt: Wort zurück in den Vorrat
          delete belegung[p.left];
          slot.textContent = '—';
          slot.classList.remove('belegt');
          vorratZeigen(wert);
          return;
        }
        if (!gewaehlt) { toast('Zuerst eine Übersetzung antippen'); return; }
        var text = gewaehlt.textContent;
        belegung[p.left] = text;
        slot.textContent = text;
        slot.classList.add('belegt');
        vorrat.removeChild(gewaehlt);
        auswahlLoesen();
      };
      slots.push(slot);
      zeile.appendChild(slot);
      zuord.appendChild(zeile);
    });
    buehne.appendChild(zuord);
    buehne.appendChild(vorrat);

    function vorratZeigen(text) {
      var b = el('button', 'bau', text);
      b.onclick = function () {
        if (ses.beantwortet) return;
        if (gewaehlt === b) { auswahlLoesen(); return; }
        auswahlLoesen();
        gewaehlt = b;
        b.classList.add('gewaehlt');
      };
      vorrat.appendChild(b);
    }
    ex.options.forEach(vorratZeigen);

    var knopf = el('button', 'knopf', 'Prüfen');
    knopf.onclick = function () {
      if (ses.beantwortet) return;
      if (Object.keys(belegung).length < ex.pairs.length) {
        toast('Noch nicht alle zugeordnet'); return;
      }
      var e = Uebungen.pruefen(ex, belegung);
      ex.pairs.forEach(function (p, i) {
        slots[i].classList.add(belegung[p.left] === p.right ? 'richtig' : 'falsch');
        if (belegung[p.left] !== p.right) slots[i].textContent = belegung[p.left] + ' → ' + p.right;
      });
      antwortVerbuchen(karte, ex, e.richtig ? 'gut' : 'schlecht', e.richtig, e);
    };
    $('#ses-fuss').appendChild(knopf);
  }

  /* --- Auswerten und weiter --- */

  function antwortVerbuchen(karte, ex, bewertung, richtig, ergebnis) {
    ses.beantwortet = true;
    ses.erledigt++;
    if (richtig) ses.richtig++; else ses.falsch++;

    /* Bei der Zuordnung hängen mehrere Vokabeln an einer Karte. */
    var ids = karte.mehrere || [karte.itemId];
    ids.forEach(function (id) { SRS.bewerten(id, karte.itemType, bewertung); });
    SRS.erledigtPlus(1);

    rueckmeldung(ex, richtig, ergebnis, bewertung);

    var fuss = $('#ses-fuss');
    fuss.innerHTML = '';
    var weiter = el('button', 'knopf', ses.idx + 1 >= ses.karten.length ? 'Abschließen' : 'Weiter');
    weiter.onclick = function () { ses.idx++; karteZeichnen(); };
    fuss.appendChild(weiter);
    weiter.focus();
  }

  function rueckmeldung(ex, richtig, ergebnis, bewertung) {
    var r = $('#ses-rueck');
    var nah = ergebnis && ergebnis.nah;
    r.className = 'an ' + (richtig ? 'gut' : nah ? 'nah' : 'schlecht');

    var kopf = richtig
      ? (bewertung === 'gut' && ex.type === 'flashcard' ? 'Gemerkt' : 'Richtig')
      : nah ? 'Fast' : (ex.type === 'flashcard' ? 'Kommt wieder' : 'Nicht ganz');

    var html = '<b>' + kopf + '</b>';
    if (!richtig && ex.type !== 'flashcard') {
      var loesung = ergebnis ? ergebnis.loesung
        : (Array.isArray(ex.correctAnswer) ? ex.correctAnswer.join(' ') : ex.correctAnswer);
      html += 'Richtig wäre: <span class="loesung">' + esc(loesung) + '</span><br>';
    }
    /* Die Zeichen als Zugabe – sie sind nirgends Eingabe, aber wer sie eingeblendet
       hat, sieht hier, wie der Satz geschrieben aussieht. */
    if (ex.hanzi && SRS.einstellungen().showHanzi && ex.type !== 'flashcard') {
      html += '<span style="color:var(--dim);letter-spacing:1px">' + esc(ex.hanzi) + '</span><br>';
    }
    if (ex.solutionNote) html += esc(ex.solutionNote);
    r.innerHTML = html;
  }

  function abschluss() {
    var buehne = $('#ses-buehne');
    buehne.innerHTML = '';
    $('#ses-fuss').innerHTML = '';
    $('#ses-rueck').className = '';
    $('#ses-balken').style.width = '100%';

    var quote = ses.erledigt ? Math.round(ses.richtig / ses.erledigt * 100) : 0;
    var box = el('div', 'ses-ende');
    box.id = 'ses-ende';
    box.appendChild(el('div', 'zahl', quote + '%'));
    box.appendChild(el('p', 'leise',
      ses.richtig + ' von ' + ses.erledigt + ' richtig · ' + ses.titel));

    var u = SRS.uebersicht();
    var plan = SRS.tagesplan();
    var offen = plan.wiederholungVokabeln.length + plan.wiederholungGrammatik.length +
                plan.neueVokabeln.length + plan.neueGrammatik.length;
    box.appendChild(el('p', 'mini',
      'Heute insgesamt ' + u.heute + ' Karten · ' + u.streak + ' Tage in Folge' +
      (offen ? ' · noch ' + offen + ' offen' : ' · Tagespensum erledigt')));
    buehne.appendChild(box);

    var reihe = el('div', 'knopf-reihe');
    var fertig = el('button', 'knopf zweit', 'Fertig');
    fertig.onclick = sessionBeenden;
    reihe.appendChild(fertig);
    if (offen > 0 && rueckkehr === 'heute') {
      var weiter = el('button', 'knopf', 'Weitermachen');
      weiter.onclick = heuteStarten;
      reihe.appendChild(weiter);
    }
    $('#ses-fuss').appendChild(reihe);
  }

  /* ---------- Blätter ---------- */

  function blattAuf(id) { $('#' + id).classList.add('an'); }
  function blattZu(id) { $('#' + id).classList.remove('an'); }

  /* ---------- Einstellungen ---------- */

  function einstellungenFuellen() {
    var e = SRS.einstellungen();
    $('#opt-level').value = e.currentLevel;
    $('#opt-neu-vok').value = e.dailyNewVocab;
    $('#out-neu-vok').textContent = e.dailyNewVocab;
    $('#opt-neu-gram').value = e.dailyNewGrammar;
    $('#out-neu-gram').textContent = e.dailyNewGrammar;
    $('#opt-wdh').value = e.dailyReviewLimit;
    $('#out-wdh').textContent = e.dailyReviewLimit;
    $('#opt-hanzi').setAttribute('aria-checked', e.showHanzi ? 'true' : 'false');
    document.body.classList.toggle('ohne-hanzi', !e.showHanzi);
  }

  function einstellungenVerdrahten() {
    $('#opt-level').onchange = function () {
      SRS.setzeEinstellung('currentLevel', this.value);
      vokFilter = Daten.bisLevel(this.value);
      gramFilter = Daten.bisLevel(this.value);
      $('#chip-level').textContent = this.value;
      toast('Zielniveau: ' + this.value);
      neuZeichnen();
    };

    function regler(id, out, schluessel) {
      var r = $(id);
      r.oninput = function () { $(out).textContent = this.value; };
      r.onchange = function () {
        SRS.setzeEinstellung(schluessel, parseInt(this.value, 10));
        neuZeichnen();
      };
    }
    regler('#opt-neu-vok', '#out-neu-vok', 'dailyNewVocab');
    regler('#opt-neu-gram', '#out-neu-gram', 'dailyNewGrammar');
    regler('#opt-wdh', '#out-wdh', 'dailyReviewLimit');

    $('#opt-hanzi').onclick = function () {
      var an = this.getAttribute('aria-checked') !== 'true';
      this.setAttribute('aria-checked', an ? 'true' : 'false');
      SRS.setzeEinstellung('showHanzi', an);
      document.body.classList.toggle('ohne-hanzi', !an);
    };

    $('#opt-reset').onclick = function () {
      if (!confirm('Wirklich den gesamten Lernfortschritt löschen? Das lässt sich nicht rückgängig machen.')) return;
      SRS.fortschrittLoeschen();
      einstellungenFuellen();
      neuZeichnen();
      toast('Fortschritt zurückgesetzt');
    };

    $('#opt-pwa').onclick = function () { blattZu('bl-einst'); pwaBlattAuf(); };
  }

  function neuZeichnen() {
    if (aktuelleAnsicht === 'heute') dashboardZeichnen();
    if (aktuelleAnsicht === 'vokabeln') themenZeichnen();
    if (aktuelleAnsicht === 'grammatik') grammatikZeichnen();
    if (aktuelleAnsicht === 'statistik') statistikZeichnen();
  }

  /* ---------- Installieren ---------- */

  var pwaMoeglich = false;

  function pwaIst_iOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) ||
           (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  }

  function pwaBlattAuf() {
    var dialog = window.__pwaPrompt;
    $('#pwa-direkt').style.display = dialog ? 'block' : 'none';
    $('#pwa-ios').style.display = (!dialog && pwaIst_iOS()) ? 'block' : 'none';
    $('#pwa-allg').style.display = (!dialog && !pwaIst_iOS()) ? 'block' : 'none';
    blattAuf('bl-pwa');
  }

  function pwaVerdrahten() {
    /* Ein Dialog gilt genau einmal: nach `prompt()` ist er verbraucht, auch wenn
       abgelehnt wurde. `pwaMoeglich` merkt sich, dass es ihn gab. */
    window.addEventListener('pwa-bereit', function () { pwaMoeglich = true; });
    if (window.__pwaPrompt) pwaMoeglich = true;

    $('#pwa-jetzt').onclick = function () {
      var d = window.__pwaPrompt;
      if (!d) { pwaBlattAuf(); return; }
      d.prompt();
      d.userChoice.then(function (w) {
        window.__pwaPrompt = null;
        blattZu('bl-pwa');
        if (w && w.outcome === 'accepted') toast('Wird installiert');
      });
    };
  }

  /* ---------- Start ---------- */

  function start() {
    SRS.laden();
    $('#app-version').textContent = 'v' + APP_VERSION;

    var zaehlung = Daten.zaehlung();
    var gesamt = 0;
    Object.keys(zaehlung).forEach(function (k) { gesamt += zaehlung[k].gesamt; });
    $('#opt-umfang').textContent = gesamt + ' Vokabeln, ' + Grammatik.zaehlung().gesamt + ' Lektionen';

    /* Navigation */
    $$('#fuss button[data-view]').forEach(function (b) {
      b.onclick = function () { zeige(b.dataset.view); };
    });
    $$('[data-springe]').forEach(function (b) {
      b.onclick = function () { zeige(b.dataset.springe); };
    });
    $$('[data-zu]').forEach(function (b) {
      b.onclick = function () { blattZu(b.dataset.zu); };
    });
    $$('.blende').forEach(function (bl) {
      bl.onclick = function (e) { if (e.target === bl) bl.classList.remove('an'); };
    });

    /* Das Logo führt von jeder Ansicht zurück auf den Startbildschirm und räumt
       dabei ein offenes Blatt weg – sonst bliebe es über dem Dashboard liegen. */
    $('#marke').onclick = function () {
      $$('.blende').forEach(function (bl) { bl.classList.remove('an'); });
      zeige('heute');
    };

    $('#btn-zahnrad').onclick = function () { einstellungenFuellen(); blattAuf('bl-einst'); };
    $('#btn-ses-ende').onclick = function () {
      if (ses && ses.erledigt > 0 && ses.idx < ses.karten.length) {
        if (!confirm('Sitzung abbrechen? Der bisherige Fortschritt ist gespeichert.')) return;
      }
      sessionBeenden();
    };

    $('#btn-th-start').onclick = function () {
      var w = themaWorte();
      if (!w.length) return;
      blattZu('bl-thema');
      rueckkehr = 'vokabeln';
      sessionStarten(Uebungen.sessionAusVokabeln(w, { pool: SRS.vokabelPool() }), themaAktiv.name);
    };
    $('#btn-th-liste').onclick = function () {
      var l = $('#th-liste');
      var auf = l.style.display === 'none';
      l.style.display = auf ? 'block' : 'none';
      this.textContent = auf ? 'Wortliste ausblenden' : 'Wortliste ansehen';
      if (auf) themaListe();
    };

    /* Tastatur: Enter/Leertaste bringt in der Sitzung weiter. */
    document.addEventListener('keydown', function (e) {
      if (aktuelleAnsicht !== 'session' || !ses) return;
      if (e.target && /INPUT|TEXTAREA/.test(e.target.tagName)) return;
      if (e.key === 'Enter' || e.key === ' ') {
        var k = $('#ses-fuss .knopf');
        if (k) { e.preventDefault(); k.click(); }
      } else if (e.key === 'Escape') {
        $('#btn-ses-ende').click();
      }
    });

    einstellungenFuellen();
    einstellungenVerdrahten();
    pwaVerdrahten();
    zeige('heute');

    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('sw.js').catch(function (e) {
          console.warn('[App] Service Worker nicht registriert:', e);
        });
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
