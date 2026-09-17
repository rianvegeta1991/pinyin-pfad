/* Pinyin-Trainer – Übungsgenerator und Antwortprüfung
 *
 * Übungen werden **nicht gespeichert**, sondern bei jedem Aufruf neu erzeugt. Der
 * Grund ist Abwechslung: dieselbe Vokabel soll mal als Multiple Choice, mal als
 * Tippübung, mal als Lückentext kommen. Erzeugt werden dabei echte Exercise-Objekte
 * nach typen.d.ts – die Struktur ist also dieselbe, als lägen sie fest im Datenbestand.
 *
 * Der Abgleich läuft immer über `Pinyin.gleich` bzw. `gleichSatz`: tonlos,
 * Groß-/Kleinschreibung egal, Tonziffern erlaubt, Leerzeichen großzügig.
 */
(function (global) {
  'use strict';

  var VOKABEL_FORMEN = ['multipleChoice', 'flashcard', 'fillBlank', 'typing', 'trueFalse'];

  var lfd = 0;
  function neueId(praefix) { return praefix + '-' + (++lfd); }

  function zufall(n) { return Math.floor(Math.random() * n); }

  function mischen(liste) {
    var a = liste.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = zufall(i + 1);
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  /* ---------- Hilfen ---------- */

  /** Ablenker aus dem Pool: andere Vokabeln, bevorzugt aus demselben Thema. */
  function ablenker(ziel, pool, anzahl, feld) {
    var gleicheThema = [];
    var rest = [];
    pool.forEach(function (v) {
      if (v.id === ziel.id) return;
      if (v[feld] === ziel[feld]) return;      // identischer Text taugt nicht als Ablenker
      (v.topicId === ziel.topicId ? gleicheThema : rest).push(v);
    });
    var quelle = mischen(gleicheThema).concat(mischen(rest));
    var out = [];
    var gesehen = {};
    gesehen[ziel[feld]] = true;
    for (var i = 0; i < quelle.length && out.length < anzahl; i++) {
      var w = quelle[i][feld];
      if (gesehen[w]) continue;
      gesehen[w] = true;
      out.push(w);
    }
    return out;
  }

  /**
   * Sucht die Vokabel im Beispielsatz und ersetzt sie durch eine Lücke.
   * Sucht über ein Schiebefenster von einem bis drei Wörtern, weil mehrsilbige
   * Wörter im Pinyin mal zusammen und mal getrennt geschrieben werden.
   * @returns {{luecke:string, loesung:string}|null}
   */
  function luecke(satz, plain) {
    var worte = Pinyin.worte(satz);
    for (var breite = 1; breite <= 3; breite++) {
      for (var i = 0; i + breite <= worte.length; i++) {
        var stueck = worte.slice(i, i + breite).join(' ');
        if (Pinyin.norm(stueck) !== plain) continue;
        var kopie = worte.slice();
        /* Satzzeichen am Ende des letzten Wortes stehen lassen – sonst
           verschwindet der Punkt mit in der Lücke. */
        var letztes = worte[i + breite - 1];
        var schwanz = letztes.replace(/[A-Za-zÀ-ſĀ-ǿ]+/g, '');
        kopie.splice(i, breite, '_____' + schwanz);
        return { luecke: kopie.join(' '), loesung: stueck.replace(/[^A-Za-zÀ-ſĀ-ǿ\s]/g, '') };
      }
    }
    return null;
  }

  /* ---------- Satzindex für Lückentexte ----------
   *
   * Ein Lückentext braucht einen Satz, der die gesuchte Vokabel enthält. Jeder
   * Vokabel einen eigenen Satz mitzugeben wäre doppelte Arbeit – ein guter Satz
   * bedient vier bis sechs Wörter. Deshalb wird hier EIN Index über alle Sätze
   * der App gelegt (Vokabel-Beispiele, Grammatik-Beispiele, Satzbestand) und je
   * Vokabel der passende herausgesucht. Das verdreifacht die Abdeckung, ohne
   * dass ein einziger Satz doppelt geschrieben werden muss.
   */
  var satzIndex = null;

  function indexBauen() {
    if (satzIndex) return satzIndex;
    satzIndex = {};

    function aufnehmen(pinyin, de, hanzi) {
      if (!pinyin) return;
      var satz = { pinyin: pinyin, de: de, hanzi: hanzi };
      var w = Pinyin.worte(pinyin);
      /* Fenster über ein bis drei Wörter – mehrsilbige Vokabeln werden im Pinyin
         mal zusammen-, mal getrennt geschrieben. */
      for (var breite = 1; breite <= 3; breite++) {
        for (var i = 0; i + breite <= w.length; i++) {
          var key = Pinyin.norm(w.slice(i, i + breite).join(' '));
          if (!key) continue;
          (satzIndex[key] || (satzIndex[key] = [])).push(satz);
        }
      }
    }

    global.Daten.alle().forEach(function (v) {
      aufnehmen(v.exampleSentencePinyin, v.exampleSentenceDe, v.exampleSentenceHanzi);
    });
    if (global.Grammatik) {
      global.Grammatik.alle().forEach(function (l) {
        l.examples.forEach(function (b) { aufnehmen(b.pinyin, b.de, b.hanzi); });
      });
    }
    if (global.Saetze) {
      global.Saetze.alle().forEach(function (s) { aufnehmen(s.pinyin, s.de, s.hanzi); });
    }
    return satzIndex;
  }

  /** Ein Satz, der `plain` enthält – der eigene Beispielsatz hat Vorrang. */
  function satzFuer(v) {
    if (v.exampleSentencePinyin) {
      return { pinyin: v.exampleSentencePinyin, de: v.exampleSentenceDe,
               hanzi: v.exampleSentenceHanzi };
    }
    var treffer = indexBauen()[v.pinyinPlain];
    if (!treffer || !treffer.length) return null;
    /* Der kürzeste Satz ist als Lücke am klarsten – weniger Ablenkung. */
    return treffer.reduce(function (a, b) {
      return b.pinyin.length < a.pinyin.length ? b : a;
    });
  }

  /* ---------- Vokabelübungen ---------- */

  function mcPinyinNachDe(v, pool) {
    var falsche = ablenker(v, pool, 3, 'translationDe');
    if (falsche.length < 3) return null;
    return {
      id: neueId('ex'),
      type: 'multipleChoice',
      refType: 'vocab',
      refId: v.id,
      prompt: 'Was bedeutet <b>' + v.pinyin + '</b>?',
      options: mischen(falsche.concat([v.translationDe])),
      correctAnswer: v.translationDe,
      hanzi: v.hanzi,
      solutionNote: v.exampleSentencePinyin
        ? v.exampleSentencePinyin + ' – ' + v.exampleSentenceDe : null
    };
  }

  function mcDeNachPinyin(v, pool) {
    var falsche = ablenker(v, pool, 3, 'pinyin');
    if (falsche.length < 3) return null;
    return {
      id: neueId('ex'),
      type: 'multipleChoice',
      refType: 'vocab',
      refId: v.id,
      prompt: 'Wie heißt <b>' + v.translationDe + '</b> auf Chinesisch?',
      options: mischen(falsche.concat([v.pinyin])),
      correctAnswer: v.pinyin,
      hanzi: v.hanzi,
      solutionNote: v.exampleSentencePinyin
        ? v.exampleSentencePinyin + ' – ' + v.exampleSentenceDe : null
    };
  }

  function flashcard(v) {
    return {
      id: neueId('ex'),
      type: 'flashcard',
      refType: 'vocab',
      refId: v.id,
      prompt: v.pinyin,
      correctAnswer: v.translationDe,
      hanzi: v.hanzi,
      hint: v.wordType || null,
      solutionNote: v.exampleSentencePinyin
        ? v.exampleSentencePinyin + ' – ' + v.exampleSentenceDe : null
    };
  }

  function lueckentext(v) {
    var satz = satzFuer(v);
    if (!satz) return null;
    var l = luecke(satz.pinyin, v.pinyinPlain);
    if (!l) return null;
    return {
      id: neueId('ex'),
      type: 'fillBlank',
      refType: 'vocab',
      refId: v.id,
      prompt: l.luecke,
      correctAnswer: l.loesung,
      hint: satz.de,
      hanzi: satz.hanzi,
      solutionNote: v.pinyin + ' – ' + v.translationDe
    };
  }

  function tippen(v) {
    return {
      id: neueId('ex'),
      type: 'typing',
      refType: 'vocab',
      refId: v.id,
      prompt: v.translationDe,
      correctAnswer: v.pinyin,
      hint: v.wordType || null,
      hanzi: v.hanzi,
      solutionNote: v.exampleSentencePinyin
        ? v.exampleSentencePinyin + ' – ' + v.exampleSentenceDe : null
    };
  }

  function wahrFalsch(v, pool) {
    var stimmt = Math.random() < 0.5;
    var gezeigt = v.translationDe;
    if (!stimmt) {
      var falsche = ablenker(v, pool, 1, 'translationDe');
      if (!falsche.length) stimmt = true;
      else gezeigt = falsche[0];
    }
    return {
      id: neueId('ex'),
      type: 'trueFalse',
      refType: 'vocab',
      refId: v.id,
      prompt: '<b>' + v.pinyin + '</b> heißt „' + gezeigt + '“.',
      options: ['Stimmt', 'Stimmt nicht'],
      correctAnswer: stimmt ? 'Stimmt' : 'Stimmt nicht',
      hanzi: v.hanzi,
      solutionNote: v.pinyin + ' heißt „' + v.translationDe + '“.'
    };
  }

  /** Zuordnungsübung über mehrere Vokabeln auf einmal. */
  function zuordnung(items) {
    var paare = items.map(function (v) {
      return { left: v.pinyin, right: v.translationDe };
    });
    return {
      id: neueId('ex'),
      type: 'matching',
      refType: 'vocab',
      refId: items[0].id,
      refIds: items.map(function (v) { return v.id; }),
      prompt: 'Ordne die Begriffe einander zu.',
      options: mischen(paare.map(function (p) { return p.right; })),
      correctAnswer: paare.map(function (p) { return p.right; }),
      pairs: paare
    };
  }

  /**
   * Eine Übung zu einer Vokabel – die Form wird zufällig gewählt, unbrauchbare
   * Formen (z. B. Lückentext ohne Beispielsatz) fallen automatisch heraus.
   * @param {object} opts – {formen: [...], neu: bool}
   */
  function fuerVokabel(v, pool, opts) {
    opts = opts || {};
    var erlaubt = opts.formen || VOKABEL_FORMEN;
    /* Bei einer neuen Vokabel zuerst die Karteikarte: erst zeigen, dann abfragen. */
    if (opts.neu) return flashcard(v);

    var kandidaten = mischen(erlaubt);
    for (var i = 0; i < kandidaten.length; i++) {
      var ex = null;
      switch (kandidaten[i]) {
        case 'multipleChoice':
          ex = Math.random() < 0.5 ? mcPinyinNachDe(v, pool) : mcDeNachPinyin(v, pool);
          break;
        case 'flashcard':  ex = flashcard(v); break;
        case 'fillBlank':  ex = lueckentext(v); break;
        case 'typing':     ex = tippen(v); break;
        case 'trueFalse':  ex = wahrFalsch(v, pool); break;
      }
      if (ex) return ex;
    }
    return flashcard(v);
  }

  /* ---------- Grammatikübungen ---------- */

  /** Baut aus einer Drill-Vorlage ein Exercise-Objekt. */
  function ausDrill(lektion, drill) {
    var ex = {
      id: neueId('gx'),
      type: drill.type,
      refType: 'grammar',
      refId: lektion.id,
      prompt: drill.prompt,
      correctAnswer: drill.answer,
      solutionNote: drill.note || null,
      hanzi: drill.hanzi || null,
      /* Deutsche Bedeutung des chinesischen Satzes in der Aufgabe. Fehlt bei
         Übersetzungsaufgaben absichtlich – dort wäre sie die Lösung. */
      de: drill.de || null
    };
    if (drill.type === 'sentenceOrder') {
      ex.options = mischen(drill.options || drill.answer);
    } else if (drill.options) {
      ex.options = mischen(drill.options);
    }
    return ex;
  }

  /** Alle Übungen einer Lektion, in zufälliger Reihenfolge. */
  function fuerGrammatik(lektion) {
    if (!lektion.drills || !lektion.drills.length) return [];
    return mischen(lektion.drills).map(function (d) { return ausDrill(lektion, d); });
  }

  /* ---------- Antwortprüfung ---------- */

  /**
   * @param {object} ex – das Exercise
   * @param {*} antwort – String, Array (sentenceOrder) oder Objekt (matching)
   * @returns {{richtig:boolean, nah:boolean, loesung:string}}
   */
  function pruefen(ex, antwort) {
    var loesung = Array.isArray(ex.correctAnswer)
      ? ex.correctAnswer.join(' ') : String(ex.correctAnswer);

    switch (ex.type) {
      case 'multipleChoice':
      case 'trueFalse':
        return { richtig: antwort === ex.correctAnswer, nah: false, loesung: loesung };

      case 'flashcard':
        /* Selbsteinschätzung: die Oberfläche meldet 'gut' oder 'nochmal'. */
        return { richtig: antwort === 'gut', nah: false, loesung: loesung };

      case 'matching': {
        var alle = true;
        (ex.pairs || []).forEach(function (p) {
          if (!antwort || antwort[p.left] !== p.right) alle = false;
        });
        return { richtig: alle, nah: false, loesung: loesung };
      }

      case 'sentenceOrder': {
        var ist = Array.isArray(antwort) ? antwort.join(' ') : String(antwort || '');
        var soll = Array.isArray(ex.correctAnswer)
          ? ex.correctAnswer.join(' ') : String(ex.correctAnswer);
        return {
          richtig: Pinyin.normSatz(ist) === Pinyin.normSatz(soll),
          nah: false,
          loesung: soll
        };
      }

      case 'fillBlank':
        /* Mit Auswahlmöglichkeiten zählt der exakte Eintrag, ohne wird getippt. */
        if (ex.options) {
          return { richtig: antwort === ex.correctAnswer, nah: false, loesung: loesung };
        }
        return tippPruefung(ex, antwort, false);

      case 'typing':
      case 'errorCorrection':
      case 'transformation':
        return tippPruefung(ex, antwort, true);

      default:
        return { richtig: false, nah: false, loesung: loesung };
    }
  }

  function tippPruefung(ex, antwort, alsSatz) {
    var soll = ex.correctAnswer;
    var richtig = alsSatz ? Pinyin.gleichSatz(antwort, soll) : Pinyin.gleich(antwort, soll);
    var loesung = Array.isArray(soll) ? soll[0] : String(soll);
    /* „Fast richtig“ ab 80 % Ähnlichkeit – das fängt einen verrutschten
       Buchstaben ab, ohne eine völlig andere Vokabel durchgehen zu lassen. */
    var nah = !richtig && Pinyin.naehe(antwort, soll) >= 0.8;
    return { richtig: richtig, nah: nah, loesung: loesung };
  }

  /* ---------- Sitzung zusammenstellen ---------- */

  /**
   * Baut die Kartenfolge für „Heute lernen“ aus einem Tagesplan.
   * Karten sind {itemId, itemType, neu, uebung} bzw. {intro: lektion} für den
   * Erklärteil einer neuen Grammatiklektion.
   */
  function sessionAusPlan(plan, pool) {
    var karten = [];

    /* Neue Grammatik: Erklärung, dann zwei Übungen daraus. */
    plan.neueGrammatik.forEach(function (l) {
      karten.push({ itemId: l.id, itemType: 'grammar', neu: true, intro: l, uebung: null });
      fuerGrammatik(l).slice(0, 2).forEach(function (ex) {
        karten.push({ itemId: l.id, itemType: 'grammar', neu: true, uebung: ex });
      });
    });

    /* Fällige Grammatik: je zwei Übungen, ohne Erklärung. */
    plan.wiederholungGrammatik.forEach(function (l) {
      fuerGrammatik(l).slice(0, 2).forEach(function (ex) {
        karten.push({ itemId: l.id, itemType: 'grammar', neu: false, uebung: ex });
      });
    });

    /* Neue Vokabeln: erst als Karteikarte zeigen. */
    plan.neueVokabeln.forEach(function (v) {
      karten.push({ itemId: v.id, itemType: 'vocab', neu: true,
                    uebung: fuerVokabel(v, pool, { neu: true }) });
    });

    /* Wiederholungen: gemischte Formen. */
    plan.wiederholungVokabeln.forEach(function (v) {
      karten.push({ itemId: v.id, itemType: 'vocab', neu: false,
                    uebung: fuerVokabel(v, pool) });
    });

    return karten;
  }

  /**
   * Freie Übungssitzung über eine Vokabelliste (Vokabeltrainer).
   * Alle paar Karten wird eine Zuordnungsübung eingestreut, weil sie mehrere
   * Wörter auf einmal abfragt und den Ablauf auflockert.
   */
  function sessionAusVokabeln(items, opts) {
    opts = opts || {};
    var pool = opts.pool || items;
    var formen = opts.formen || null;
    var karten = [];
    var rest = mischen(items);

    var zuordnungAlle = opts.zuordnung === false ? 0 : 5;
    var seitZuordnung = 0;
    var puffer = [];

    rest.forEach(function (v) {
      karten.push({ itemId: v.id, itemType: 'vocab', neu: !SRS.gesehen(v.id),
                    uebung: fuerVokabel(v, pool, { formen: formen }) });
      puffer.push(v);
      seitZuordnung++;
      if (zuordnungAlle && seitZuordnung >= zuordnungAlle && puffer.length >= 4) {
        var gruppe = puffer.slice(-4);
        karten.push({ itemId: gruppe[0].id, itemType: 'vocab', neu: false,
                      mehrere: gruppe.map(function (x) { return x.id; }),
                      uebung: zuordnung(gruppe) });
        seitZuordnung = 0;
      }
    });

    return karten;
  }

  function sessionAusGrammatik(lektion) {
    return fuerGrammatik(lektion).map(function (ex) {
      return { itemId: lektion.id, itemType: 'grammar', neu: !SRS.gesehen(lektion.id), uebung: ex };
    });
  }

  global.Uebungen = {
    VOKABEL_FORMEN: VOKABEL_FORMEN,
    mischen: mischen,
    fuerVokabel: fuerVokabel,
    fuerGrammatik: fuerGrammatik,
    zuordnung: zuordnung,
    pruefen: pruefen,
    sessionAusPlan: sessionAusPlan,
    sessionAusVokabeln: sessionAusVokabeln,
    sessionAusGrammatik: sessionAusGrammatik
  };
})(window);
