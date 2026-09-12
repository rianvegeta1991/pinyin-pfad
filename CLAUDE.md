# Pinyin-Pfad

Browser-App (PWA) zum Lernen von Mandarin-Chinesisch, Niveau **A1 bis B2**.
**Deutsch ist die Quellsprache** (Code, Kommentare, Commits, Oberfläche).

## Live

- **Gelernt wird hier:** https://rianvegeta1991.github.io/pinyin-pfad/
- **Repo:** https://github.com/rianvegeta1991/pinyin-pfad
- Deploy = `git push origin main` → Workflow `.github/workflows/pages.yml`
  („Seite veroeffentlichen"). Von Hand: `gh workflow run pages.yml`.
- Pages läuft über **GitHub Actions** (`build_type=workflow`), nicht über
  „Deploy from a branch" – siehe Fallstricke im Schwesterprojekt `rule-detection`.

## Der eine wichtige Grundsatz

**Pinyin ist die Lernsprache, Töne sind nie Pflicht, Zeichen sind nie Eingabe.**
Daran hängt die ganze App, und das darf nicht aufgeweicht werden:

- Anzeigetexte tragen **korrekte Tondiakritika** (`nǐ hǎo`, `xièxie`).
- Der Abgleich läuft **immer** über `Pinyin.gleich` / `Pinyin.gleichSatz`. Die
  Vergleichsform ist kleingeschrieben, ohne Tonzeichen, ohne Tonziffern, ohne
  Leerzeichen, `ü`/`v` → `u`. `Nǐ hǎo!`, `ni3 hao3` und `NIHAO` fallen zusammen.
- `pinyinPlain` wird **abgeleitet**, nicht geschrieben (`Daten.bauen`). Zwei
  gepflegte Felder laufen sonst auseinander.
- Hanzi sind optional (`showHanzi`, CSS-Klasse `body.ohne-hanzi`) und erscheinen
  nirgends als Eingabefeld.

## Dateien

| Datei | Rolle |
|---|---|
| `index.html` | Markup + CSS, keine Logik (außer dem PWA-Mitschnitt im Kopf) |
| `pinyin.js` | `norm`/`normSatz`/`gleich`/`gleichSatz`/`naehe` – die Tonlosigkeit |
| `daten.js` | Themenliste, Vokabel-Registry, Satz-Registry, `Daten.bauen()` |
| `vokabeln-a1.js` … `-b2.js` | Wortschatz, kompaktes Listenformat |
| `saetze.js` | Satzbestand für Lückentexte |
| `grammatik.js` | Lektions-Registry |
| `grammatik-a1.js` … `-b2.js` | 10 Lektionen je Niveau, mit `drills` |
| `srs.js` | Leitner, Tagesplan, Streak, Statistik, `localStorage` |
| `uebungen.js` | Übungsgenerator, Satzindex, Antwortprüfung |
| `app.js` | Ansichten, Navigation, Übungsbühne, Einstellungen, PWA |
| `typen.d.ts` | Datenmodell. **Wird nicht kompiliert** (kein Node auf dem Rechner), ist aber die verbindliche Beschreibung – Datenform ändern heißt hier mitändern. |
| `icons.ps1` | zeichnet die PNGs aus dem SVG-Motiv nach |

## Version

`APP_VERSION` in `app.js`. **Die minor-Zahl zählt als ganze Zahl weiter, nicht als
Nachkommastelle:** auf 1.9 folgt 1.10, dann 1.11 – wie in `rule-detection` und
`soundcape`. Bei jedem veröffentlichten Update um eins erhöhen, major nur bei
großem Umbau.

Bei Dateiänderungen zusätzlich die `CACHE`-Version in `sw.js` hochzählen
(`pinyin-pfad-vN`), sonst holt die installierte PWA die alten Dateien aus dem Cache.
Neue Dateien gehören außerdem in die `ASSETS`-Liste **und** in die Skript-Liste
am Ende von `index.html`.

## Datenformat

Vokabeln stehen als **Listen, nicht als Objekte** – das spart zwei Drittel der
Zeichen und damit Tippfehler:

```
[ hanzi, pinyin, deutsch, wortart?, beispielPinyin?, beispielDeutsch?, beispielHanzi? ]
```

Wortart-Kürzel: `n` Nomen · `v` Verb · `a` Adjektiv · `d` Adverb · `p` Partikel ·
`s` Sonstiges.

**Die ID wird aus Thema + Vergleichsform gebildet** (`v-essen-jiaozi`), nicht aus
dem Listenindex. So überlebt der Lernfortschritt eine Umsortierung der Datei.
Wer eine Vokabel umschreibt, bricht ihren Fortschritt – das ist der Preis dafür
und in Ordnung.

**Fallstrick beim Schreiben neuer Vokabeln:** Hanzi und Pinyin gehören zusammen.
Beim Zusammenstellen sind mehrfach Einträge entstanden, bei denen das Hanzi vom
Nachbareintrag stehen geblieben war (`['关系', 'rénmài', …]` statt `['人脉', …]`).
Nach größeren Ergänzungen stichprobenartig gegenprüfen.

## Grammatik

Je Lektion: `explanation` (Deutsch, einfaches Markdown – Absätze, `**fett**`,
`` `code` ``), mindestens **5 Beispielsätze** und **6 `drills`**. Die Drills sind
Vorlagen, aus denen `uebungen.js` die Exercise-Objekte baut:

`fillBlank` (mit `options` wird daraus eine Auswahl, ohne ein Eingabefeld) ·
`sentenceOrder` (`options` = Bausteine, `answer` = richtige Reihenfolge) ·
`errorCorrection` · `transformation` · `multipleChoice` · `typing`.

Bei den drei Tippformen darf `answer` eine **Liste gleichwertiger Lösungen** sein –
das ist wichtig, weil `bù`/`bú` und Wortstellungsvarianten beide richtig sind.

## Der Satzindex (wichtig)

Lückentexte brauchen einen Satz, der die gesuchte Vokabel enthält. Jeder Vokabel
einen eigenen Satz mitzugeben wäre doppelte Arbeit – ein guter Satz bedient vier
bis sechs Wörter. Deshalb legt `uebungen.js` **einen Index über alle Sätze der App**
(Vokabel-Beispiele + Grammatik-Beispiele + `saetze.js`) und sucht sich zu jeder
Vokabel den kürzesten passenden heraus.

Das hat die Abdeckung von **9 % auf 52 %** gehoben (A1: 74 %), ohne einen einzigen
Satz doppelt zu schreiben. **Diese Bauart nicht auflösen.** Wer die Abdeckung
weiter heben will, schreibt neue **dicht gepackte** Sätze in `saetze.js`, statt
einzelne Beispielsätze an Vokabeln zu hängen.

## Spaced Repetition

Leitner, sieben Fächer, Abstände `[0, 1, 2, 4, 8, 16, 32]` Tage.
Richtig → ein Fach vor. Falsch → **zwei** Fächer zurück, nicht auf null.
Fach 0 heißt „heute noch einmal", die Karte bleibt also in derselben Sitzung fällig.
Als **gefestigt** gilt eine Einheit ab Fach 3 (Abstand vier Tage).

Tagesplan: erst Fälliges (am längsten Überfälliges zuerst, bei Gleichstand das
niedrigere Fach), dann Neues bis zum Limit. **Fällige Grammatik hat Vorrang vor
fälligen Vokabeln** – es gibt viel weniger davon, sonst fällt sie hinten runter.

Datum immer über `SRS.heute()` / `tag()`, **nie über `toISOString()`** – das rechnet
in UTC um und verschiebt den Tageswechsel je nach Zeitzone um Stunden.

Drei `localStorage`-Schlüssel (`-progress`, `-settings`, `-stats`), damit ein
Zurücksetzen des Fortschritts die Einstellungen nicht mitnimmt.

## Entwicklungsumgebung

- **Kein Node, kein Python.** Lokaler Server ist `serve.ps1`
  (PowerShell-`HttpListener`), Port **8795** in `.claude/launch.json`.
- GitHub CLI liegt unter `C:\Program Files\GitHub CLI\gh.exe`, Konto `rianvegeta1991`.
- git-Identität ist **repo-lokal** gesetzt (global ist keine konfiguriert).
- PNG-Icons entstehen mit `System.Drawing` in `icons.ps1` – es gibt keinen
  SVG-Renderer auf dem Rechner. **Bei Logoänderungen `icon.svg`,
  `icon-maskable.svg` und `icons.ps1` zusammen nachziehen.**

## Testen

Verifizieren statt hoffen: Server starten (`preview_start`), im mobilen Viewport
(375×812) prüfen, Konsole auf Fehler checken, Zustand per DOM auslesen.

Der lohnendste Test ist ein **Regressionslauf über den ganzen Datenbestand** im
Browser: für jede Vokabel jede Übungsform erzeugen und prüfen, ob
`Uebungen.pruefen(ex, ex.correctAnswer)` die eigene Lösung akzeptiert und die
richtige Antwort in `options` steht. Dasselbe für alle Grammatik-Drills. Das hat
beim Aufbau mehrere Datenfehler gefunden, die in der Oberfläche nie aufgefallen
wären.

Die Übungsbühne lässt sich auch von außen durchklicken (`#ses-fuss .knopf`,
`#ses-buehne .wahl button`, `.bau`, `.zuord-rechts`) – so läuft eine ganze
Sitzung automatisch durch.
