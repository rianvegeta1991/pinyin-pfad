# Pinyin-Trainer

## ▶ App starten: **https://rianvegeta1991.github.io/pinyin-pfad/**

Diese Seite hier (`github.com/…`) zeigt nur den Quellcode. Gelernt wird unter der
Adresse oben (`github.io/…`).

---

Mandarin-Chinesisch von **A1 bis B2** lernen – **auf Pinyin-Basis, ohne
Schriftzeichen-Pflicht**.

## Der Grundsatz

Wer Chinesisch sprechen will, muss nicht erst zweitausend Zeichen malen können.
Diese App dreht die übliche Reihenfolge um:

- **Alles steht in Pinyin**, mit korrekten Tondiakritika: `nǐ hǎo`, `xièxie`.
- **Töne muss niemand eintippen.** Bei Eingabeübungen wird tonlos verglichen –
  `ni hao`, `Ni Hao`, `ni3 hao3` und `nǐ hǎo` gelten alle als richtig.
  Auch Leerzeichen und Bindestriche sind egal.
- **Schriftzeichen sind eine Zugabe.** Sie stehen überall dabei, lassen sich in
  den Einstellungen ausblenden und sind an keiner Stelle Eingabe.
- **Jeder chinesische Satz in einer Aufgabe wird übersetzt.** Man rät nie, worum
  es geht. Ausgenommen sind Übersetzungsaufgaben – dort ist der deutsche Satz die
  Aufgabe und die chinesische Fassung die Lösung.

## Was drin ist

| | |
|---|---|
| Vokabeln | **1561** in **24 Themengebieten** (A1 365 · A2 316 · B1 444 · B2 436) |
| Grammatik | **40 Lektionen** mit Erklärung auf Deutsch, je 6 Beispielsätzen und 6 Übungen |
| Übungsformen | 6 für Vokabeln, 6 für Grammatik |
| Sätze | 165 eigene Beispielsätze plus die aus Vokabeln und Grammatik |

Alle Inhalte sind für diese App geschrieben – kein Lehrwerk als Vorlage. Die
Wortschatzgrößen orientieren sich an den gängigen HSK-Richtwerten.

### Themengebiete

Begrüßung & Small Talk · Zahlen & Zeit · Familie & Beziehungen · Essen & Trinken ·
Einkaufen & Geld · Wohnen & Zuhause · Körper & Gesundheit · Kleidung ·
Wetter & Jahreszeiten · Verkehr & Reisen · Richtungen & Orte · Schule & Bildung ·
Arbeit & Beruf · Freizeit & Hobbys · Sport · Natur & Tiere · Technik & Medien ·
Gefühle & Charaktereigenschaften · Farben & Formen · Stadt, Land & öffentliche
Einrichtungen · Feste & Traditionen · Meinungen äußern & Diskutieren (ab B1) ·
Nachrichten & Gesellschaft (B2) · Wirtschaft & Beruf vertieft (B2)

### Übungsformen

**Vokabeln:** Multiple Choice (in beide Richtungen) · Karteikarten mit
Selbsteinschätzung · Lückentext im Beispielsatz · Zuordnung mehrerer Begriffe ·
Eintippen auf Pinyin · Wahr/Falsch

**Grammatik:** Lückentext für Partikel und Strukturen · Satzumstellung aus
Bausteinen · Fehlerkorrektur · Satztransformation · Multiple Choice zum
Regelverständnis · freie Übersetzung

## Wie gelernt wird

**Spaced Repetition nach Leitner**, sieben Fächer mit den Abständen
0 · 1 · 2 · 4 · 8 · 16 · 32 Tage. Eine richtige Antwort schiebt ein Fach vor, eine
falsche zwei zurück – wer eine Vokabel fünfmal sicher hatte und einmal patzt, fängt
nicht wieder bei null an.

Daraus baut die App jeden Tag eine Sitzung: **zuerst das Fällige** (am längsten
Überfälliges zuerst), **dann Neues** bis zum eingestellten Tageslimit. Einstellbar
sind neue Vokabeln pro Tag, neue Grammatikpunkte pro Tag und eine Obergrenze für
Wiederholungen. Dazu Fortschrittsring, Tages-Streak und ein Hinweisbanner, wenn am
Abend noch etwas offen ist.

## Aufs Handy holen

1. Die Adresse oben im Handy-Browser öffnen.
2. Im Browser-Menü **„Zum Startbildschirm hinzufügen"** wählen – oder den
   Knopf **Installieren** in den Einstellungen.
3. Ab jetzt startet Pinyin-Trainer über ein eigenes Icon im Vollbild und
   funktioniert auch ohne Internet.

Der Lernfortschritt liegt ausschließlich auf dem Gerät (`localStorage`). Es gibt
kein Konto, keinen Server und keine Übertragung nach außen.

## Technik

Statische Seite ohne Baukette: HTML, CSS und ein paar JavaScript-Dateien, dazu
Service Worker und Manifest für den Offline-Betrieb. Kein Node, kein Framework,
keine Abhängigkeiten.

| Datei | Rolle |
|---|---|
| `index.html` | Markup + CSS, keine Logik |
| `pinyin.js` | Ton-Normalisierung und Antwortvergleich |
| `daten.js` | Themen, Vokabel- und Satz-Registry |
| `vokabeln-a1.js` … `-b2.js` | Wortschatz je Niveau |
| `saetze.js` | Satzbestand für Lückentexte |
| `grammatik.js` + `grammatik-a1.js` … `-b2.js` | Lektionen und Übungsvorlagen |
| `srs.js` | Spaced Repetition, Tagespensum, Statistik |
| `uebungen.js` | Übungsgenerator und Antwortprüfung |
| `app.js` | Ansichten, Navigation, Übungsbühne |
| `typen.d.ts` | Datenmodell (Doku, wird nicht kompiliert) |
| `icons.ps1` | zeichnet die PNG-Icons aus dem SVG-Motiv nach |

Lokal ausprobieren:

```bash
powershell -NoProfile -ExecutionPolicy Bypass -File serve.ps1 -Port 8795
```
