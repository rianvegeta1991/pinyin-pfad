/* Pinyin-Trainer – Grammatik-Registry
 *
 * Die Lektionen selbst stehen in `grammatik-a1.js` … `grammatik-b2.js` und melden sich
 * hier über `GrammatikDaten.add(liste)` an. Aufbau einer Lektion siehe typen.d.ts.
 *
 * Zu jeder Lektion gehören `drills` – Roh-Vorlagen, aus denen `uebungen.js` die
 * Exercise-Objekte baut. Sechs Formen sind vorgesehen (Abschnitt 6 der Aufgabe):
 *   fillBlank        Lücke ergänzen; mit `options` wird daraus eine Auswahl,
 *                    ohne `options` ein Eingabefeld
 *   sentenceOrder    `options` = durcheinandergewürfelte Bausteine,
 *                    `answer` = Liste in der richtigen Reihenfolge
 *   errorCorrection  `prompt` enthält den fehlerhaften Satz, `answer` die Berichtigung
 *   transformation   `prompt` nennt Satz + Umformungsauftrag
 *   multipleChoice   Verständnisfrage zur Regel
 *   typing           deutscher Satz -> Pinyin-Satz; `answer` darf eine Liste
 *                    gleichwertiger Lösungen sein
 */
(function (global) {
  'use strict';

  var LEKTIONEN = [];
  var nachId = null;

  var GrammatikDaten = {
    add: function (liste) {
      liste.forEach(function (l) { LEKTIONEN.push(l); });
      nachId = null;
    }
  };

  function index() {
    if (!nachId) {
      nachId = {};
      LEKTIONEN.forEach(function (l) { nachId[l.id] = l; });
    }
    return nachId;
  }

  function alle() { return LEKTIONEN; }

  function lektion(id) { return index()[id] || null; }

  function nachLevel(levels) {
    return LEKTIONEN.filter(function (l) { return levels.indexOf(l.level) >= 0; });
  }

  /** Reihenfolge zum Lernen: erst nach Niveau, innerhalb des Niveaus wie notiert. */
  function reihenfolge(levels) {
    var rang = { A1: 0, A2: 1, B1: 2, B2: 3 };
    return nachLevel(levels).slice().sort(function (a, b) {
      return rang[a.level] - rang[b.level];
    });
  }

  function zaehlung() {
    var out = { A1: 0, A2: 0, B1: 0, B2: 0, gesamt: 0 };
    LEKTIONEN.forEach(function (l) { out[l.level]++; out.gesamt++; });
    return out;
  }

  global.GrammatikDaten = GrammatikDaten;
  global.Grammatik = {
    alle: alle,
    lektion: lektion,
    nachLevel: nachLevel,
    reihenfolge: reihenfolge,
    zaehlung: zaehlung
  };
})(window);
