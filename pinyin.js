/* Pinyin-Pfad – Pinyin-Werkzeuge
 *
 * Der Grundsatz der App: Töne werden angezeigt, aber nie eingefordert. Alles, was
 * hier steht, dient diesem einen Zweck – eine Eingabe so weit zu entschärfen, dass
 * "Ni3 Hao3", "nǐ hǎo" und "nihao" dieselbe Antwort sind.
 */
(function (global) {
  'use strict';

  /* Tonzeichen -> Grundbuchstabe. ü wird zu u, damit "lüshi", "lvshi" und "lushi"
     zusammenfallen; die Verwechslungsgefahr nehmen wir bewusst in Kauf, weil hier
     niemand auf eine Umlaut-Taste angewiesen sein soll. */
  var TON_MAP = {
    'ā': 'a', 'á': 'a', 'ǎ': 'a', 'à': 'a', 'a': 'a',
    'ē': 'e', 'é': 'e', 'ě': 'e', 'è': 'e', 'ê': 'e',
    'ī': 'i', 'í': 'i', 'ǐ': 'i', 'ì': 'i',
    'ō': 'o', 'ó': 'o', 'ǒ': 'o', 'ò': 'o',
    'ū': 'u', 'ú': 'u', 'ǔ': 'u', 'ù': 'u',
    'ǖ': 'u', 'ǘ': 'u', 'ǚ': 'u', 'ǜ': 'u', 'ü': 'u',
    'ń': 'n', 'ň': 'n', 'ǹ': 'n', 'ḿ': 'm'
  };

  /** Nimmt einer Silbe die Tondiakritika, lässt aber Leerzeichen und Satzbau stehen.
   *  Für Anzeigezwecke (z. B. die Lückentext-Vorlage), nicht für den Vergleich. */
  function ohneTon(text) {
    if (!text) return '';
    var out = '';
    for (var i = 0; i < text.length; i++) {
      var c = text[i];
      var klein = c.toLowerCase();
      var ers = TON_MAP[klein];
      if (ers === undefined) { out += c; continue; }
      out += (c === klein) ? ers : ers.toUpperCase();
    }
    return out;
  }

  /** Die Vergleichsform: klein, ohne Ton, ohne Tonziffern, ohne alles Trennende.
   *  "Nǐ hǎo!" -> "nihao"; "ni3 hao3" -> "nihao"; "nǚ'ér" -> "nuer" */
  function norm(text) {
    if (!text) return '';
    var roh = ohneTon(String(text)).toLowerCase();
    var out = '';
    for (var i = 0; i < roh.length; i++) {
      var c = roh[i];
      if (c >= 'a' && c <= 'z') { out += (c === 'v' ? 'u' : c); }
      /* Ziffern 1–5 sind Tonangaben und fliegen raus; andere Ziffern gibt es im
         Pinyin nicht, also darf die Regel grob sein. Alles Übrige (Apostroph,
         Bindestrich, Leerzeichen, Satzzeichen) entfällt ebenfalls. */
    }
    return out;
  }

  /** Wie `norm`, aber Wortgrenzen bleiben als einzelnes Leerzeichen erhalten.
   *  Für ganze Sätze, wo die Wortfolge zählt, die Schreibweise der Lücken aber nicht. */
  function normSatz(text) {
    if (!text) return '';
    var roh = ohneTon(String(text)).toLowerCase();
    var out = '';
    var luecke = false;
    for (var i = 0; i < roh.length; i++) {
      var c = roh[i];
      if (c >= 'a' && c <= 'z') {
        if (luecke && out) { out += ' '; }
        luecke = false;
        out += (c === 'v' ? 'u' : c);
      } else if (c === ' ' || c === '\t' || c === '\n') {
        luecke = true;
      }
      /* Ziffern, Apostrophe, Bindestriche und Satzzeichen verschwinden spurlos –
         ein Bindestrich trennt also nicht, "yi-ge" ist "yige". */
    }
    return out;
  }

  /** Einzelwort-Abgleich. `erwartet` darf ein String oder eine Liste von Varianten sein. */
  function gleich(eingabe, erwartet) {
    var e = norm(eingabe);
    if (!e) return false;
    var liste = Array.isArray(erwartet) ? erwartet : [erwartet];
    for (var i = 0; i < liste.length; i++) {
      if (norm(liste[i]) === e) return true;
    }
    return false;
  }

  /** Satz-Abgleich: zusätzlich toleranter, weil die Worttrennung im Pinyin
   *  uneinheitlich ist. Erst mit Wortgrenzen prüfen, dann ohne. */
  function gleichSatz(eingabe, erwartet) {
    var liste = Array.isArray(erwartet) ? erwartet : [erwartet];
    var mitL = normSatz(eingabe);
    var ohneL = norm(eingabe);
    if (!ohneL) return false;
    for (var i = 0; i < liste.length; i++) {
      if (normSatz(liste[i]) === mitL) return true;
      if (norm(liste[i]) === ohneL) return true;
    }
    return false;
  }

  /** Wie nah dran war die Eingabe? 0..1, Levenshtein auf der Vergleichsform.
   *  Damit kann die Rückmeldung „fast richtig“ sagen, statt nur „falsch“. */
  function naehe(eingabe, erwartet) {
    var liste = Array.isArray(erwartet) ? erwartet : [erwartet];
    var a = norm(eingabe);
    var best = 0;
    for (var i = 0; i < liste.length; i++) {
      var b = norm(liste[i]);
      if (!a && !b) { best = Math.max(best, 1); continue; }
      var d = levenshtein(a, b);
      var max = Math.max(a.length, b.length) || 1;
      best = Math.max(best, 1 - d / max);
    }
    return best;
  }

  function levenshtein(a, b) {
    if (a === b) return 0;
    if (!a.length) return b.length;
    if (!b.length) return a.length;
    var vorher = new Array(b.length + 1);
    var jetzt = new Array(b.length + 1);
    for (var j = 0; j <= b.length; j++) vorher[j] = j;
    for (var i = 0; i < a.length; i++) {
      jetzt[0] = i + 1;
      for (var k = 0; k < b.length; k++) {
        var kosten = a[i] === b[k] ? 0 : 1;
        jetzt[k + 1] = Math.min(jetzt[k] + 1, vorher[k + 1] + 1, vorher[k] + kosten);
      }
      var t = vorher; vorher = jetzt; jetzt = t;
    }
    return vorher[b.length];
  }

  /** Zerlegt einen Pinyin-Satz in Wörter (an Leerzeichen), Satzzeichen bleiben am Wort. */
  function worte(satz) {
    return String(satz || '').trim().split(/\s+/).filter(Boolean);
  }

  global.Pinyin = {
    ohneTon: ohneTon,
    norm: norm,
    normSatz: normSatz,
    gleich: gleich,
    gleichSatz: gleichSatz,
    naehe: naehe,
    worte: worte
  };
})(window);
