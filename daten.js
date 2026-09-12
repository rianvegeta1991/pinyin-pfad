/* Pinyin-Trainer – Themen und Vokabel-Registry
 *
 * Die Vokabeln selbst stehen in `vokabeln-a1.js` … `vokabeln-b2.js` und melden sich
 * hier über `VokabelDaten.add(level, map)` an. Erst `Daten.bauen()` macht daraus die
 * fertigen VocabItem-Objekte (siehe typen.d.ts).
 *
 * Kompaktformat je Eintrag – eine Liste, keine Objekte, sonst wäre die Datei dreimal
 * so groß und beim Schreiben dreimal so fehleranfällig:
 *
 *   [ hanzi, pinyin, deutsch, wortart?, beispielPinyin?, beispielDeutsch?, beispielHanzi? ]
 *
 * `pinyinPlain` wird NICHT geschrieben, sondern aus `pinyin` abgeleitet – doppelt
 * gepflegte Felder laufen früher oder später auseinander.
 *
 * Wortart-Kürzel: n=Nomen · v=Verb · a=Adjektiv · d=Adverb · p=Partikel · s=Sonstiges
 */
(function (global) {
  'use strict';

  var LEVELS = ['A1', 'A2', 'B1', 'B2'];

  var WORTART = {
    n: 'Nomen', v: 'Verb', a: 'Adjektiv',
    d: 'Adverb', p: 'Partikel', s: 'Sonstiges'
  };

  var THEMEN = [
    { id: 'begruessung', name: 'Begrüßung & Small Talk', level: 'A1',
      description: 'Sich vorstellen, grüßen, verabschieden, höflich sein.' },
    { id: 'zahlen', name: 'Zahlen & Zeit', level: 'A1',
      description: 'Zählen, Uhrzeit, Wochentage, Datum, Häufigkeit.' },
    { id: 'familie', name: 'Familie & Beziehungen', level: 'A1',
      description: 'Verwandtschaft, Freunde, Partnerschaft.' },
    { id: 'essen', name: 'Essen & Trinken', level: 'A1',
      description: 'Lebensmittel, Gerichte, Restaurant, Geschmack.' },
    { id: 'einkaufen', name: 'Einkaufen & Geld', level: 'A1',
      description: 'Preise, Bezahlen, Mengen, Handeln.' },
    { id: 'wohnen', name: 'Wohnen & Zuhause', level: 'A1',
      description: 'Zimmer, Möbel, Haushalt, Miete.' },
    { id: 'koerper', name: 'Körper & Gesundheit', level: 'A2',
      description: 'Körperteile, Beschwerden, Arzt, Apotheke.' },
    { id: 'kleidung', name: 'Kleidung', level: 'A2',
      description: 'Kleidungsstücke, Größen, Anziehen, Stil.' },
    { id: 'wetter', name: 'Wetter & Jahreszeiten', level: 'A2',
      description: 'Wetterlagen, Temperatur, Jahreszeiten, Klima.' },
    { id: 'verkehr', name: 'Verkehr & Reisen', level: 'A2',
      description: 'Verkehrsmittel, Fahrkarten, Hotel, Gepäck.' },
    { id: 'richtungen', name: 'Richtungen & Orte', level: 'A1',
      description: 'Links, rechts, oben, unten, Wegbeschreibungen.' },
    { id: 'schule', name: 'Schule & Bildung', level: 'A2',
      description: 'Unterricht, Fächer, Prüfungen, Universität.' },
    { id: 'arbeit', name: 'Arbeit & Beruf', level: 'A2',
      description: 'Berufe, Büro, Bewerbung, Arbeitsalltag.' },
    { id: 'freizeit', name: 'Freizeit & Hobbys', level: 'A2',
      description: 'Musik, Lesen, Reisen, Ausgehen, Spiele.' },
    { id: 'sport', name: 'Sport', level: 'A2',
      description: 'Sportarten, Training, Wettkampf, Fitness.' },
    { id: 'natur', name: 'Natur & Tiere', level: 'A2',
      description: 'Landschaft, Pflanzen, Tiere, Umwelt.' },
    { id: 'technik', name: 'Technik & Medien', level: 'B1',
      description: 'Computer, Handy, Internet, Fernsehen, Daten.' },
    { id: 'gefuehle', name: 'Gefühle & Charaktereigenschaften', level: 'B1',
      description: 'Stimmungen, Wesenszüge, zwischenmenschliches Verhalten.' },
    { id: 'farben', name: 'Farben & Formen', level: 'A1',
      description: 'Farbtöne, geometrische Formen, Größe und Maß.' },
    { id: 'stadt', name: 'Stadt, Land & öffentliche Einrichtungen', level: 'B1',
      description: 'Behörden, Post, Bank, Stadtviertel, Land und Provinz.' },
    { id: 'feste', name: 'Feste & Traditionen', level: 'B1',
      description: 'Feiertage, Bräuche, Geschenke, Höflichkeitsformeln.' },
    { id: 'meinung', name: 'Meinungen äußern & Diskutieren', level: 'B1',
      description: 'Zustimmen, widersprechen, begründen, abwägen.' },
    { id: 'nachrichten', name: 'Nachrichten & Gesellschaft', level: 'B2',
      description: 'Politik, Medien, soziale Themen, Statistik.' },
    { id: 'wirtschaft', name: 'Wirtschaft & Beruf vertieft', level: 'B2',
      description: 'Markt, Vertrag, Verhandlung, Management, Finanzen.' }
  ];

  /* Rohdaten sammeln sich hier, bevor `bauen()` läuft. */
  var ROH = { A1: {}, A2: {}, B1: {}, B2: {} };

  var VokabelDaten = {
    add: function (level, map) {
      if (!ROH[level]) { ROH[level] = {}; }
      Object.keys(map).forEach(function (topicId) {
        var ziel = ROH[level][topicId] || (ROH[level][topicId] = []);
        map[topicId].forEach(function (eintrag) { ziel.push(eintrag); });
      });
    }
  };

  var vokabeln = null;
  var nachId = null;

  function bauen() {
    if (vokabeln) return vokabeln;
    vokabeln = [];
    nachId = {};
    var gesehen = {};
    var bekannteThemen = {};
    THEMEN.forEach(function (t) { bekannteThemen[t.id] = true; });

    LEVELS.forEach(function (level) {
      var proThema = ROH[level] || {};
      Object.keys(proThema).forEach(function (topicId) {
        if (!bekannteThemen[topicId]) {
          console.warn('[Daten] unbekanntes Thema:', topicId);
          return;
        }
        proThema[topicId].forEach(function (e) {
          var pinyin = e[1];
          var plain = global.Pinyin.norm(pinyin);
          /* Stabile ID aus Thema + Vergleichsform: bleibt gleich, auch wenn die
             Reihenfolge in der Datei sich ändert – sonst verlöre der Lernfortschritt
             bei jeder Datenpflege seinen Bezug. */
          var id = 'v-' + topicId + '-' + plain;
          if (gesehen[id]) {
            var n = 2;
            while (gesehen[id + '-' + n]) n++;
            id = id + '-' + n;
          }
          gesehen[id] = true;

          var item = {
            id: id,
            hanzi: e[0] || undefined,
            pinyin: pinyin,
            pinyinPlain: plain,
            translationDe: e[2],
            level: level,
            topicId: topicId,
            wordType: WORTART[e[3]] || undefined,
            exampleSentencePinyin: e[4] || undefined,
            exampleSentenceDe: e[5] || undefined,
            exampleSentenceHanzi: e[6] || undefined
          };
          vokabeln.push(item);
          nachId[id] = item;
        });
      });
    });
    return vokabeln;
  }

  function alle() { return bauen(); }

  function vokabel(id) { bauen(); return nachId[id] || null; }

  function thema(id) {
    for (var i = 0; i < THEMEN.length; i++) {
      if (THEMEN[i].id === id) return THEMEN[i];
    }
    return null;
  }

  /** Alle Vokabeln eines Themas, wahlweise auf Niveaus eingeschränkt. */
  function nachThema(topicId, levels) {
    return bauen().filter(function (v) {
      if (v.topicId !== topicId) return false;
      return !levels || levels.indexOf(v.level) >= 0;
    });
  }

  function nachLevel(levels) {
    return bauen().filter(function (v) { return levels.indexOf(v.level) >= 0; });
  }

  /** Alle Niveaus bis einschließlich `level` – „B1“ heißt A1+A2+B1. */
  function bisLevel(level) {
    var idx = LEVELS.indexOf(level);
    return LEVELS.slice(0, idx < 0 ? LEVELS.length : idx + 1);
  }

  /** Zählung je Thema/Niveau für Statistik und Themenliste. */
  function zaehlung() {
    var out = {};
    bauen().forEach(function (v) {
      var t = out[v.topicId] || (out[v.topicId] = { gesamt: 0, A1: 0, A2: 0, B1: 0, B2: 0 });
      t.gesamt++;
      t[v.level]++;
    });
    return out;
  }

  /* ---------- Satzbestand ----------
     Sätze, die keiner einzelnen Vokabel gehören, sondern dem Lückentext-Index
     in `uebungen.js` zuarbeiten. Siehe Kopf von saetze.js. */
  var SAETZE = [];
  var SatzDaten = {
    add: function (liste) {
      liste.forEach(function (s) {
        SAETZE.push({ pinyin: s[0], de: s[1], hanzi: s[2] || undefined });
      });
    }
  };

  global.VokabelDaten = VokabelDaten;
  global.SatzDaten = SatzDaten;
  global.Saetze = { alle: function () { return SAETZE; } };
  global.Daten = {
    LEVELS: LEVELS,
    THEMEN: THEMEN,
    alle: alle,
    vokabel: vokabel,
    thema: thema,
    nachThema: nachThema,
    nachLevel: nachLevel,
    bisLevel: bisLevel,
    zaehlung: zaehlung
  };
})(window);
