/**
 * Pinyin-Trainer – Datenmodell
 *
 * Diese Datei wird nicht ausgeliefert und nicht kompiliert (auf dem Rechner gibt es
 * kein Node). Sie ist die verbindliche Beschreibung der Strukturen, die `daten.js`,
 * `grammatik.js`, `uebungen.js` und `srs.js` zur Laufzeit als einfache Objekte bauen.
 * Wer die Datenform ändert, ändert sie hier mit.
 */

export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2';

export type WordType =
  | 'Nomen'
  | 'Verb'
  | 'Adjektiv'
  | 'Adverb'
  | 'Partikel'
  | 'Sonstiges';

export interface VocabItem {
  id: string;
  /** Optional – Schriftzeichen sind in der Oberfläche nirgends Pflicht. */
  hanzi?: string;
  /** Mit Tondiakritika, z. B. "xièxie". Das ist die Anzeigeform. */
  pinyin: string;
  /** Ohne Diakritika, klein, ohne Leerzeichen – für den Eingabe-Abgleich: "xiexie". */
  pinyinPlain: string;
  translationDe: string;
  level: CEFRLevel;
  /** Verweis auf Topic.id */
  topicId: string;
  exampleSentencePinyin?: string;
  exampleSentenceDe?: string;
  exampleSentenceHanzi?: string;
  wordType?: WordType;
}

export interface Topic {
  id: string;
  name: string;
  /** Haupt-Einstufung; die Vokabeln darin können über mehrere Niveaus laufen. */
  level: CEFRLevel;
  description?: string;
}

export interface GrammarExample {
  pinyin: string;
  de: string;
  hanzi?: string;
}

export interface GrammarLesson {
  id: string;
  title: string;
  level: CEFRLevel;
  /** Erklärung auf Deutsch, einfaches Markdown (Absätze, **fett**, `code`). */
  explanation: string;
  examples: GrammarExample[];
  relatedTopicIds?: string[];
  /** Roh-Vorlagen, aus denen `uebungen.js` die Exercise-Objekte baut. */
  drills?: GrammarDrill[];
}

export type ExerciseType =
  | 'multipleChoice'
  | 'flashcard'
  | 'fillBlank'
  | 'matching'
  | 'sentenceOrder'
  | 'typing'
  | 'errorCorrection'
  | 'transformation'
  | 'trueFalse';

export interface Exercise {
  id: string;
  type: ExerciseType;
  refType: 'vocab' | 'grammar';
  /** vocabItem.id oder grammarLesson.id */
  refId: string;
  prompt: string;
  /** für multipleChoice / matching / sentenceOrder / trueFalse */
  options?: string[];
  correctAnswer: string | string[];
  /** Zusatzanzeige (Hanzi, Hinweis, Musterlösung) – rein für die Oberfläche. */
  hint?: string;
  hanzi?: string;
  /** Erläuterung, die nach dem Auflösen erscheint. */
  solutionNote?: string;
  /** Bei matching: die Paare in Reihenfolge der options. */
  pairs?: { left: string; right: string }[];
}

/** Vorlage für eine Grammatikübung, so wie sie in grammatik-*.js steht. */
export interface GrammarDrill {
  type: Exclude<ExerciseType, 'flashcard' | 'matching'>;
  prompt: string;
  options?: string[];
  answer: string | string[];
  note?: string;
  hanzi?: string;
}

export interface UserProgress {
  itemId: string;
  itemType: 'vocab' | 'grammar';
  /** Leitner-Box 0–6 */
  srsLevel: number;
  /** ISO-Datum, "YYYY-MM-DD" */
  nextReviewDate: string;
  correctStreak: number;
  lastReviewedAt?: string;
  /** Zähler über die gesamte Lebensdauer – nur für die Statistik. */
  seen?: number;
  correct?: number;
}

export interface UserSettings {
  dailyNewVocab: number;
  dailyNewGrammar: number;
  dailyReviewLimit: number;
  showHanzi: boolean;
  currentLevel: CEFRLevel;
  /** Themen, die aus dem Tagespensum ausgeklammert sind (Topic.id). */
  mutedTopicIds?: string[];
  sound?: boolean;
}

export interface DailyStats {
  /** "YYYY-MM-DD" -> erledigte Karten an diesem Tag */
  done: Record<string, number>;
  streak: number;
  longestStreak: number;
  lastDay?: string;
}
