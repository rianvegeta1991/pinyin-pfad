/* Pinyin-Pfad – Grammatik A1 */
GrammatikDaten.add([

{
  id: 'a1-pronomen',
  title: 'Personalpronomen',
  level: 'A1',
  relatedTopicIds: ['begruessung', 'familie'],
  explanation:
    'Chinesische Personalpronomen sind denkbar einfach: Sie verändern sich **nie**. ' +
    'Es gibt keinen Unterschied zwischen „ich“ und „mich“, zwischen „er“ und „ihm“ – ' +
    '`wǒ` bleibt `wǒ`, egal an welcher Stelle im Satz es steht.\n\n' +
    'Einzahl: `wǒ` (ich), `nǐ` (du), `nín` (Sie, höflich), `tā` (er/sie/es).\n\n' +
    'Die Mehrzahl entsteht durch Anhängen von `-men`: `wǒmen` (wir), `nǐmen` (ihr), ' +
    '`tāmen` (sie). Das gilt nur für Personen, nicht für Dinge.\n\n' +
    'Achtung beim Hören: „er“, „sie“ und „es“ klingen alle gleich – `tā`. Nur die ' +
    'Schriftzeichen unterscheiden sie (他 / 她 / 它). Wer ohne Zeichen lernt, erschließt ' +
    'sich das Geschlecht aus dem Zusammenhang; das ist kein Mangel, sondern Alltag.\n\n' +
    'Der Besitz wird mit `de` gebildet: `wǒ de` (mein), `nǐ de` (dein). Bei Familie und ' +
    'engen Beziehungen lässt man das `de` meist weg: `wǒ māma` statt `wǒ de māma`.',
  examples: [
    { pinyin: 'Wǒ shì xuésheng.', de: 'Ich bin Schüler.', hanzi: '我是学生。' },
    { pinyin: 'Nǐ hǎo ma?', de: 'Wie geht es dir?', hanzi: '你好吗？' },
    { pinyin: 'Tā shì wǒ de lǎoshī.', de: 'Er ist mein Lehrer.', hanzi: '他是我的老师。' },
    { pinyin: 'Wǒmen dōu shì Déguó rén.', de: 'Wir sind alle Deutsche.', hanzi: '我们都是德国人。' },
    { pinyin: 'Tāmen bú rènshi wǒ.', de: 'Sie kennen mich nicht.', hanzi: '他们不认识我。' },
    { pinyin: 'Nín guìxìng?', de: 'Wie ist Ihr werter Name?', hanzi: '您贵姓？' }
  ],
  drills: [
    { type: 'fillBlank',
      prompt: '___ shì xuésheng. (Ich bin Schüler.)',
      options: ['wǒ', 'nǐ', 'tā', 'wǒmen'],
      answer: 'wǒ',
      note: '`wǒ` heißt „ich“ und steht als Subjekt ganz vorn.' },
    { type: 'fillBlank',
      prompt: 'Wǒ___ dōu shì xuésheng. (Wir sind alle Schüler.)',
      answer: ['men'],
      note: 'Die Mehrzahl entsteht durch die Endung `-men`: wǒ → wǒmen.' },
    { type: 'multipleChoice',
      prompt: 'Warum klingen „er“ und „sie“ im Chinesischen gleich?',
      options: [
        'Beide werden `tā` ausgesprochen; nur die Schriftzeichen unterscheiden sich.',
        'Weil Chinesisch kein Geschlecht kennt und stattdessen Namen benutzt.',
        'Weil „sie“ immer durch den Plural `tāmen` ersetzt wird.',
        'Weil das Geschlecht durch den Ton ausgedrückt wird.'
      ],
      answer: 'Beide werden `tā` ausgesprochen; nur die Schriftzeichen unterscheiden sich.',
      note: '他 (er) und 她 (sie) klingen beide `tā`. Gesprochen erschließt der Zusammenhang das Geschlecht.' },
    { type: 'sentenceOrder',
      prompt: 'Er ist mein Lehrer.',
      options: ['lǎoshī', 'tā', 'wǒ de', 'shì'],
      answer: ['tā', 'shì', 'wǒ de', 'lǎoshī'],
      hanzi: '他是我的老师。' },
    { type: 'errorCorrection',
      prompt: 'Wǒmen de shì xuésheng.',
      answer: ['Wǒmen shì xuésheng.'],
      note: 'Nach dem Subjekt darf kein `de` stehen. `de` bildet Besitz („unser“), nicht das Subjekt.' },
    { type: 'typing',
      prompt: 'Sie kennen mich nicht.',
      answer: ['Tāmen bú rènshi wǒ.', 'Tāmen bù rènshi wǒ.'],
      note: 'Wort für Wort: tāmen – bù – rènshi – wǒ. Vor dem 4. Ton wird `bù` zu `bú`.' }
  ]
},

{
  id: 'a1-shi',
  title: '是-Sätze: X ist Y',
  level: 'A1',
  relatedTopicIds: ['begruessung', 'arbeit'],
  explanation:
    '`shì` ist das Verb „sein“ – aber nur, wenn zwei **Substantive** gleichgesetzt werden: ' +
    'X ist Y. Das Muster ist starr:\n\n' +
    '`Subjekt + shì + Substantiv`\n\n' +
    '`Wǒ shì lǎoshī.` – Ich bin Lehrer.\n\n' +
    '**Der häufigste Anfängerfehler:** `shì` vor einem Adjektiv. `Wǒ shì gāoxìng` ist falsch. ' +
    'Adjektive brauchen kein „sein“, sie sind selbst das Prädikat – dazu mehr in der ' +
    'Lektion über `hěn`.\n\n' +
    'Verneint wird mit `bù` davor: `Wǒ bú shì lǎoshī.` (Ich bin kein Lehrer.) ' +
    'Weil `shì` im 4. Ton steht, wird `bù` hier zu `bú`.\n\n' +
    'Die Herkunft läuft ebenfalls über `shì`: `Wǒ shì Déguó rén.` – wörtlich „ich bin ' +
    'Deutschland-Mensch“. Das Land steht vor `rén`, es gibt kein eigenes Wort für ' +
    '„deutsch“ als Nationalität.',
  examples: [
    { pinyin: 'Wǒ shì lǎoshī.', de: 'Ich bin Lehrer.', hanzi: '我是老师。' },
    { pinyin: 'Zhè shì wǒ de shū.', de: 'Das ist mein Buch.', hanzi: '这是我的书。' },
    { pinyin: 'Tā bú shì xuésheng.', de: 'Er ist kein Schüler.', hanzi: '他不是学生。' },
    { pinyin: 'Nǐ shì Zhōngguó rén ma?', de: 'Bist du Chinese?', hanzi: '你是中国人吗？' },
    { pinyin: 'Nà bú shì wǒ de shǒujī.', de: 'Das ist nicht mein Handy.', hanzi: '那不是我的手机。' },
    { pinyin: 'Wǒmen shì tóngshì.', de: 'Wir sind Kollegen.', hanzi: '我们是同事。' }
  ],
  drills: [
    { type: 'fillBlank',
      prompt: 'Wǒ ___ Déguó rén. (Ich bin Deutscher.)',
      options: ['shì', 'hěn', 'yǒu', 'zài'],
      answer: 'shì',
      note: 'Zwei Substantive werden mit `shì` gleichgesetzt.' },
    { type: 'multipleChoice',
      prompt: 'Welcher Satz ist falsch?',
      options: [
        'Wǒ shì gāoxìng.',
        'Wǒ shì lǎoshī.',
        'Wǒ hěn gāoxìng.',
        'Wǒ bú shì lǎoshī.'
      ],
      answer: 'Wǒ shì gāoxìng.',
      note: '`gāoxìng` ist ein Adjektiv. Vor Adjektiven steht nie `shì`, sondern `hěn`.' },
    { type: 'errorCorrection',
      prompt: 'Wǒ shì hěn máng.',
      answer: ['Wǒ hěn máng.'],
      note: 'Adjektiv-Prädikat: `shì` fällt weg, `hěn` bleibt.' },
    { type: 'transformation',
      prompt: 'Verneine: Tā shì wǒ de tóngshì.',
      answer: ['Tā bú shì wǒ de tóngshì.', 'Tā bù shì wǒ de tóngshì.'],
      note: '`bù` steht direkt vor `shì` und wird davor zu `bú`.' },
    { type: 'sentenceOrder',
      prompt: 'Das ist nicht mein Handy.',
      options: ['wǒ de', 'nà', 'shǒujī', 'bú shì'],
      answer: ['nà', 'bú shì', 'wǒ de', 'shǒujī'],
      hanzi: '那不是我的手机。' },
    { type: 'typing',
      prompt: 'Wir sind Kollegen.',
      answer: ['Wǒmen shì tóngshì.'],
      note: 'wǒmen – shì – tóngshì.' }
  ]
},

{
  id: 'a1-fragen',
  title: 'Fragen mit 吗 und Fragewörtern',
  level: 'A1',
  relatedTopicIds: ['begruessung', 'richtungen'],
  explanation:
    'Chinesische Fragen stellen den Satz **nicht um**. Das ist die gute Nachricht: Wer den ' +
    'Aussagesatz kann, kann auch die Frage.\n\n' +
    '**Ja/Nein-Fragen** entstehen, indem man `ma` ans Ende hängt:\n' +
    '`Nǐ shì lǎoshī.` → `Nǐ shì lǎoshī ma?`\n\n' +
    '**W-Fragen** ersetzen einfach das gesuchte Wort an Ort und Stelle – die Wortstellung ' +
    'bleibt gleich. Wo im Deutschen das Fragewort nach vorn rückt, bleibt es im Chinesischen ' +
    'genau dort stehen, wo die Antwort stehen würde:\n\n' +
    '`Tā shì lǎoshī.` → `Tā shì shéi?` (Wer ist er?)\n' +
    '`Wǒ qù Běijīng.` → `Nǐ qù nǎr?` (Wohin gehst du?)\n\n' +
    'Die wichtigsten Fragewörter: `shéi` (wer), `shénme` (was), `nǎ` (welcher), ' +
    '`nǎr` (wo), `zěnme` (wie), `wèishénme` (warum), `jǐ` / `duōshao` (wie viele).\n\n' +
    '**Wichtig:** `ma` und ein Fragewort schließen sich aus. `Nǐ qù nǎr ma?` ist falsch – ' +
    'ein Fragewort macht den Satz schon zur Frage.',
  examples: [
    { pinyin: 'Nǐ shì lǎoshī ma?', de: 'Bist du Lehrer?', hanzi: '你是老师吗？' },
    { pinyin: 'Tā shì shéi?', de: 'Wer ist er?', hanzi: '他是谁？' },
    { pinyin: 'Nǐ jiào shénme míngzi?', de: 'Wie heißt du?', hanzi: '你叫什么名字？' },
    { pinyin: 'Nǐ qù nǎr?', de: 'Wohin gehst du?', hanzi: '你去哪儿？' },
    { pinyin: 'Nǐ wèishénme bù chī?', de: 'Warum isst du nicht?', hanzi: '你为什么不吃？' },
    { pinyin: 'Zhè ge duōshao qián?', de: 'Was kostet das?', hanzi: '这个多少钱？' }
  ],
  drills: [
    { type: 'transformation',
      prompt: 'Mache eine Ja/Nein-Frage daraus: Nǐ shì xuésheng.',
      answer: ['Nǐ shì xuésheng ma?', 'Nǐ shì xuésheng ma'],
      note: 'Einfach `ma` anhängen – die Wortstellung bleibt unverändert.' },
    { type: 'fillBlank',
      prompt: 'Nǐ qù ___? (Wohin gehst du?)',
      options: ['nǎr', 'shéi', 'shénme', 'zěnme'],
      answer: 'nǎr',
      note: '`nǎr` steht genau dort, wo im Antwortsatz der Ort stünde.' },
    { type: 'errorCorrection',
      prompt: 'Nǐ qù nǎr ma?',
      answer: ['Nǐ qù nǎr?', 'Nǐ qù nǎr'],
      note: 'Fragewort und `ma` zusammen geht nicht – eines von beiden reicht.' },
    { type: 'multipleChoice',
      prompt: 'Wie fragt man „Wer ist er?“',
      options: ['Tā shì shéi?', 'Shéi tā shì?', 'Shéi shì tā ma?', 'Tā shéi shì?'],
      answer: 'Tā shì shéi?',
      note: 'Das Fragewort bleibt an der Stelle der Antwort: Tā shì [lǎoshī / shéi].' },
    { type: 'sentenceOrder',
      prompt: 'Warum isst du nicht?',
      options: ['bù', 'nǐ', 'chī', 'wèishénme'],
      answer: ['nǐ', 'wèishénme', 'bù', 'chī'],
      hanzi: '你为什么不吃？' },
    { type: 'typing',
      prompt: 'Was kostet das?',
      answer: ['Zhè ge duōshao qián?', 'Zhège duōshao qián?', 'Zhè ge duōshao qián'],
      note: 'Wörtlich: „dieses – wie viel – Geld“.' }
  ]
},

{
  id: 'a1-zaehlwoerter',
  title: 'Zahlen und Zähleinheitswörter (量词)',
  level: 'A1',
  relatedTopicIds: ['zahlen', 'einkaufen'],
  explanation:
    'Zahlen sind im Chinesischen erfreulich regelmäßig. `shí` ist zehn, `shí’èr` ist zwölf ' +
    '(„zehn-zwei“), `èrshí` ist zwanzig („zwei-zehn“), `èrshíwǔ` fünfundzwanzig. Keine ' +
    'Ausnahmen, kein „siebzehn“ gegen „siebenundzwanzig“.\n\n' +
    '**Die Hürde ist das Zähleinheitswort.** Zwischen Zahl und Substantiv muss ein ' +
    'Zwischenwort stehen, so wie im Deutschen „drei **Blatt** Papier“ oder „zwei **Tassen** ' +
    'Kaffee“ – nur eben immer:\n\n' +
    '`Zahl + Zähleinheitswort + Substantiv`\n\n' +
    '`sān ge rén` (drei Personen), `yì běn shū` (ein Buch), `liǎng zhī māo` (zwei Katzen).\n\n' +
    '`ge` ist der Allzweckbegleiter und passt notfalls fast überall – wer unsicher ist, ' +
    'nimmt `ge` und wird verstanden. Häufige Sonderfälle: `běn` für Bücher, `zhī` für Tiere, ' +
    '`jiàn` für Kleidung, `bēi` für Getränke, `zhāng` für Flaches (Tisch, Papier, Ticket).\n\n' +
    '**`èr` oder `liǎng`?** Vor einem Zähleinheitswort heißt „zwei“ immer `liǎng`, nie `èr`. ' +
    '`liǎng ge rén`, aber `èrshí` (zwanzig) und `èr hào` (der Zweite).',
  examples: [
    { pinyin: 'Wǒ yǒu sān ge péngyou.', de: 'Ich habe drei Freunde.', hanzi: '我有三个朋友。' },
    { pinyin: 'Tā mǎi le liǎng běn shū.', de: 'Sie hat zwei Bücher gekauft.', hanzi: '她买了两本书。' },
    { pinyin: 'Wǒ jiā yǒu yì zhī gǒu.', de: 'Wir haben einen Hund.', hanzi: '我家有一只狗。' },
    { pinyin: 'Qǐng gěi wǒ yì bēi chá.', de: 'Bitte geben Sie mir eine Tasse Tee.', hanzi: '请给我一杯茶。' },
    { pinyin: 'Zhè jiàn yīfu hěn guì.', de: 'Dieses Kleidungsstück ist teuer.', hanzi: '这件衣服很贵。' },
    { pinyin: 'Wǒ mǎi le èrshíwǔ zhāng piào.', de: 'Ich habe 25 Tickets gekauft.', hanzi: '我买了二十五张票。' }
  ],
  drills: [
    { type: 'fillBlank',
      prompt: 'Wǒ yǒu sān ___ péngyou. (Ich habe drei Freunde.)',
      options: ['ge', 'běn', 'zhī', 'bēi'],
      answer: 'ge',
      note: '`ge` ist das allgemeine Zähleinheitswort und steht bei Personen.' },
    { type: 'fillBlank',
      prompt: 'Wǒ mǎi le ___ běn shū. (Ich habe zwei Bücher gekauft.)',
      options: ['liǎng', 'èr', 'liǎng ge', 'èr ge'],
      answer: 'liǎng',
      note: 'Vor einem Zähleinheitswort heißt „zwei“ immer `liǎng`, nicht `èr`.' },
    { type: 'errorCorrection',
      prompt: 'Wǒ yǒu sān péngyou.',
      answer: ['Wǒ yǒu sān ge péngyou.'],
      note: 'Zwischen Zahl und Substantiv fehlt das Zähleinheitswort.' },
    { type: 'multipleChoice',
      prompt: 'Welches Zähleinheitswort gehört zu `shū` (Buch)?',
      options: ['běn', 'zhī', 'jiàn', 'bēi'],
      answer: 'běn',
      note: '`běn` ist das Zähleinheitswort für Gebundenes: Bücher, Hefte, Zeitschriften.' },
    { type: 'sentenceOrder',
      prompt: 'Bitte geben Sie mir eine Tasse Tee.',
      options: ['chá', 'qǐng', 'yì bēi', 'gěi wǒ'],
      answer: ['qǐng', 'gěi wǒ', 'yì bēi', 'chá'],
      hanzi: '请给我一杯茶。' },
    { type: 'typing',
      prompt: 'Ich habe zwei Katzen.',
      answer: ['Wǒ yǒu liǎng zhī māo.', 'Wǒ jiā yǒu liǎng zhī māo.'],
      note: '`zhī` ist das Zähleinheitswort für Tiere.' }
  ]
},

{
  id: 'a1-zai',
  title: 'Zeit und Ort: die Präposition 在',
  level: 'A1',
  relatedTopicIds: ['richtungen', 'wohnen'],
  explanation:
    'Die chinesische Wortstellung folgt einer strengen Regel: **vom Großen zum Kleinen, ' +
    'vom Rahmen zur Handlung.** Zeit und Ort stehen deshalb **vor** dem Verb, nie dahinter.\n\n' +
    '`Subjekt + Zeit + Ort + Verb + Objekt`\n\n' +
    '`Wǒ míngtiān zài jiā xuéxí.` – Ich lerne morgen zu Hause.\n\n' +
    'Im Deutschen sagt man „Ich lerne morgen zu Hause“ – die Ortsangabe kommt hinten. ' +
    'Auf Chinesisch wäre das falsch. Erst wird der Rahmen gesteckt (wann, wo), dann ' +
    'passiert etwas.\n\n' +
    '`zài` hat zwei Rollen:\n\n' +
    '1. **als Präposition** vor einer Ortsangabe: `zài jiā` (zu Hause), `zài xuéxiào` ' +
    '(in der Schule). Dann folgt noch ein Verb.\n' +
    '2. **als eigenständiges Verb** „sich befinden“: `Wǒ zài jiā.` (Ich bin zu Hause.) ' +
    'Hier steht kein weiteres Verb mehr.\n\n' +
    'Die Zeitangabe darf auch ganz vorn stehen, vor dem Subjekt: `Míngtiān wǒ zài jiā ' +
    'xuéxí.` Das betont die Zeit etwas stärker. Ans Satzende gehört sie nie.',
  examples: [
    { pinyin: 'Wǒ zài jiā.', de: 'Ich bin zu Hause.', hanzi: '我在家。' },
    { pinyin: 'Wǒ zài jiā xuéxí.', de: 'Ich lerne zu Hause.', hanzi: '我在家学习。' },
    { pinyin: 'Tā míngtiān zài Běijīng kāihuì.', de: 'Er hat morgen in Peking eine Besprechung.', hanzi: '他明天在北京开会。' },
    { pinyin: 'Wǒmen qī diǎn zài fànguǎn chīfàn.', de: 'Wir essen um sieben im Restaurant.', hanzi: '我们七点在饭馆吃饭。' },
    { pinyin: 'Shū zài zhuōzi shàng.', de: 'Das Buch liegt auf dem Tisch.', hanzi: '书在桌子上。' },
    { pinyin: 'Yínháng zài nǎr?', de: 'Wo ist die Bank?', hanzi: '银行在哪儿？' }
  ],
  drills: [
    { type: 'errorCorrection',
      prompt: 'Wǒ xuéxí zài jiā.',
      answer: ['Wǒ zài jiā xuéxí.'],
      note: 'Die Ortsangabe steht vor dem Verb, nicht dahinter.' },
    { type: 'fillBlank',
      prompt: 'Wǒ ___ xuéxiào gōngzuò. (Ich arbeite an der Schule.)',
      options: ['zài', 'shì', 'yǒu', 'qù'],
      answer: 'zài',
      note: '`zài` leitet die Ortsangabe ein.' },
    { type: 'sentenceOrder',
      prompt: 'Wir essen um sieben Uhr im Restaurant.',
      options: ['chīfàn', 'wǒmen', 'zài fànguǎn', 'qī diǎn'],
      answer: ['wǒmen', 'qī diǎn', 'zài fànguǎn', 'chīfàn'],
      hanzi: '我们七点在饭馆吃饭。' },
    { type: 'multipleChoice',
      prompt: 'In welchem Satz ist `zài` das Hauptverb (ohne weiteres Verb dahinter)?',
      options: [
        'Wǒ zài jiā.',
        'Wǒ zài jiā xuéxí.',
        'Wǒ zài fànguǎn chīfàn.',
        'Wǒ zài xuéxiào gōngzuò.'
      ],
      answer: 'Wǒ zài jiā.',
      note: 'Ohne folgendes Verb bedeutet `zài` selbst „sich befinden“.' },
    { type: 'transformation',
      prompt: 'Stelle die Zeitangabe nach vorn: Wǒ míngtiān zài jiā xuéxí.',
      answer: ['Míngtiān wǒ zài jiā xuéxí.'],
      note: 'Die Zeit darf vor oder nach dem Subjekt stehen – nur nie am Satzende.' },
    { type: 'typing',
      prompt: 'Wo ist die Bank?',
      answer: ['Yínháng zài nǎr?', 'Yínháng zài nǎli?', 'Yínháng zài nǎr'],
      note: 'Hier ist `zài` das Verb: „Die Bank befindet sich wo?“' }
  ]
},

{
  id: 'a1-verben',
  title: 'Verben ohne Zeitform',
  level: 'A1',
  relatedTopicIds: ['zahlen', 'freizeit'],
  explanation:
    'Chinesische Verben werden **nicht gebeugt** – weder nach Person noch nach Zeit. ' +
    '`chī` heißt „essen“, „isst“, „aß“, „gegessen“, „werde essen“. Immer `chī`.\n\n' +
    'Das klingt erst nach einem Mangel, ist aber eine Erleichterung: Es gibt keine ' +
    'unregelmäßigen Verben, keine Konjugationstabellen, keine Partizipien.\n\n' +
    '**Woher weiß man dann, wann etwas passiert?** Aus einem Zeitwort im Satz:\n\n' +
    '`Wǒ zuótiān qù Běijīng.` – Ich fuhr gestern nach Peking.\n' +
    '`Wǒ míngtiān qù Běijīng.` – Ich fahre morgen nach Peking.\n\n' +
    'Dasselbe `qù`, zwei verschiedene Zeiten. Das Zeitwort trägt die Information, das ' +
    'Verb bleibt unangetastet.\n\n' +
    'Steht kein Zeitwort da, gilt der Zusammenhang – oder die Gegenwart als Standard. ' +
    'Erst wenn man betonen will, dass eine Handlung **abgeschlossen** ist, kommt die ' +
    'Partikel `le` ins Spiel (Lektion A2). Das ist aber kein Tempus, sondern ein Aspekt: ' +
    'Es geht nicht um „wann“, sondern um „fertig oder nicht“.',
  examples: [
    { pinyin: 'Wǒ měi tiān hē kāfēi.', de: 'Ich trinke jeden Tag Kaffee.', hanzi: '我每天喝咖啡。' },
    { pinyin: 'Wǒ zuótiān qù Běijīng.', de: 'Ich fuhr gestern nach Peking.', hanzi: '我昨天去北京。' },
    { pinyin: 'Wǒ míngtiān qù Běijīng.', de: 'Ich fahre morgen nach Peking.', hanzi: '我明天去北京。' },
    { pinyin: 'Tā xiànzài chīfàn.', de: 'Er isst gerade.', hanzi: '他现在吃饭。' },
    { pinyin: 'Wǒmen xīngqītiān bú shàngkè.', de: 'Sonntags haben wir keinen Unterricht.', hanzi: '我们星期天不上课。' },
    { pinyin: 'Qùnián wǒ xuéxí Hànyǔ.', de: 'Letztes Jahr lernte ich Chinesisch.', hanzi: '去年我学习汉语。' }
  ],
  drills: [
    { type: 'multipleChoice',
      prompt: 'Woran erkennt man im Chinesischen, wann eine Handlung stattfindet?',
      options: [
        'An einem Zeitwort im Satz – das Verb selbst ändert sich nicht.',
        'An der Endung des Verbs.',
        'An der Tonhöhe des Verbs.',
        'An der Stellung des Verbs im Satz.'
      ],
      answer: 'An einem Zeitwort im Satz – das Verb selbst ändert sich nicht.',
      note: 'Chinesische Verben sind unveränderlich; die Zeit steckt in Wörtern wie `zuótiān` oder `míngtiān`.' },
    { type: 'transformation',
      prompt: 'Setze in die Vergangenheit (nur das Zeitwort ändern): Wǒ míngtiān qù Běijīng.',
      answer: ['Wǒ zuótiān qù Běijīng.'],
      note: 'Nur `míngtiān` wird zu `zuótiān` – `qù` bleibt unverändert.' },
    { type: 'fillBlank',
      prompt: 'Wǒ ___ hē kāfēi. (Ich trinke jeden Tag Kaffee.)',
      options: ['měi tiān', 'zuótiān', 'míngtiān', 'xiànzài'],
      answer: 'měi tiān',
      note: '`měi tiān` heißt „jeden Tag“ und steht vor dem Verb.' },
    { type: 'errorCorrection',
      prompt: 'Wǒ qù zuótiān Běijīng.',
      answer: ['Wǒ zuótiān qù Běijīng.'],
      note: 'Die Zeitangabe steht vor dem Verb.' },
    { type: 'sentenceOrder',
      prompt: 'Sonntags haben wir keinen Unterricht.',
      options: ['shàngkè', 'wǒmen', 'bù', 'xīngqītiān'],
      answer: ['wǒmen', 'xīngqītiān', 'bù', 'shàngkè'],
      hanzi: '我们星期天不上课。' },
    { type: 'typing',
      prompt: 'Er isst gerade.',
      answer: ['Tā xiànzài chīfàn.', 'Tā xiànzài chī fàn.'],
      note: '`xiànzài` (jetzt) genügt – das Verb bleibt `chīfàn`.' }
  ]
},

{
  id: 'a1-de-besitz',
  title: '的 als Possessivpartikel',
  level: 'A1',
  relatedTopicIds: ['familie', 'wohnen'],
  explanation:
    '`de` ist die vielleicht meistgebrauchte Silbe des Chinesischen. In ihrer ersten Rolle ' +
    'verbindet sie Besitzer und Besitz:\n\n' +
    '`Besitzer + de + Sache`\n\n' +
    '`wǒ de shū` (mein Buch), `lǎoshī de chē` (das Auto des Lehrers), ' +
    '`péngyou de māma` (die Mutter des Freundes).\n\n' +
    'Die Reihenfolge ist immer dieselbe wie im Deutschen bei „**des Lehrers** Auto“ – ' +
    'der Besitzer zuerst.\n\n' +
    '**Wann `de` wegfällt:** Bei Familie, engen Personen und der eigenen Zugehörigkeit ' +
    'lässt man es meist weg, weil die Beziehung ohnehin eindeutig ist:\n' +
    '`wǒ māma` (meine Mutter), `wǒ jiā` (mein Zuhause), `wǒmen gōngsī` (unsere Firma).\n' +
    'Mit `de` wäre es nicht falsch, nur umständlich.\n\n' +
    '`de` verbindet auch Eigenschaft und Substantiv: `hóng de yīfu` (rote Kleidung). ' +
    'Bei einsilbigen Adjektiven entfällt es oft: `hóng yīfu`. Ausführlich in B1.\n\n' +
    'Steht klar, worum es geht, darf das Substantiv wegfallen: `Zhè shì wǒ de.` – ' +
    'Das ist meins.',
  examples: [
    { pinyin: 'Zhè shì wǒ de shū.', de: 'Das ist mein Buch.', hanzi: '这是我的书。' },
    { pinyin: 'Nà shì lǎoshī de chē.', de: 'Das ist das Auto des Lehrers.', hanzi: '那是老师的车。' },
    { pinyin: 'Wǒ māma shì yīshēng.', de: 'Meine Mutter ist Ärztin.', hanzi: '我妈妈是医生。' },
    { pinyin: 'Zhè shì wǒ de.', de: 'Das ist meins.', hanzi: '这是我的。' },
    { pinyin: 'Tā de míngzi hěn hǎotīng.', de: 'Ihr Name klingt schön.', hanzi: '她的名字很好听。' },
    { pinyin: 'Wǒmen gōngsī hěn dà.', de: 'Unsere Firma ist groß.', hanzi: '我们公司很大。' }
  ],
  drills: [
    { type: 'fillBlank',
      prompt: 'Zhè shì wǒ ___ shū. (Das ist mein Buch.)',
      answer: ['de'],
      note: '`de` verbindet Besitzer und Sache.' },
    { type: 'multipleChoice',
      prompt: 'In welchem Fall lässt man `de` üblicherweise weg?',
      options: [
        'wǒ (de) māma – bei Familienangehörigen',
        'wǒ (de) shū – bei Gegenständen',
        'lǎoshī (de) chē – bei fremdem Besitz',
        'nie – `de` ist immer Pflicht'
      ],
      answer: 'wǒ (de) māma – bei Familienangehörigen',
      note: 'Bei Familie und engen Beziehungen ist `de` entbehrlich: `wǒ māma`.' },
    { type: 'sentenceOrder',
      prompt: 'Das ist das Auto des Lehrers.',
      options: ['chē', 'nà', 'lǎoshī de', 'shì'],
      answer: ['nà', 'shì', 'lǎoshī de', 'chē'],
      hanzi: '那是老师的车。' },
    { type: 'errorCorrection',
      prompt: 'Zhè shì shū wǒ de.',
      answer: ['Zhè shì wǒ de shū.'],
      note: 'Der Besitzer steht vorn: `wǒ de shū`, nicht `shū wǒ de`.' },
    { type: 'transformation',
      prompt: 'Lasse das Substantiv weg: Zhè shì wǒ de shǒujī.',
      answer: ['Zhè shì wǒ de.'],
      note: 'Ist klar, wovon die Rede ist, genügt `wǒ de` – „meins“.' },
    { type: 'typing',
      prompt: 'Ihr Name klingt schön.',
      answer: ['Tā de míngzi hěn hǎotīng.'],
      note: 'tā de – míngzi – hěn – hǎotīng.' }
  ]
},

{
  id: 'a1-verneinung',
  title: 'Verneinung mit 不 und 没(有)',
  level: 'A1',
  relatedTopicIds: ['essen', 'freizeit'],
  explanation:
    'Chinesisch hat **zwei** Verneinungen, und die Wahl zwischen ihnen ist keine ' +
    'Geschmacksfrage.\n\n' +
    '**`bù`** verneint Gegenwart, Zukunft, Gewohnheiten, Wünsche und Eigenschaften – ' +
    'alles, was nicht abgeschlossen ist:\n' +
    '`Wǒ bù chī ròu.` – Ich esse kein Fleisch (grundsätzlich).\n' +
    '`Wǒ bù qù.` – Ich gehe nicht.\n' +
    '`Tā bù gāo.` – Er ist nicht groß.\n\n' +
    '**`méi` / `méiyǒu`** verneint **Vergangenes**, also: etwas ist nicht geschehen:\n' +
    '`Wǒ méi chī.` – Ich habe nicht gegessen.\n' +
    '`Tā méi qù.` – Er ist nicht hingegangen.\n\n' +
    '**Zwei feste Regeln:**\n\n' +
    '1. Das Verb `yǒu` (haben) wird **immer** mit `méi` verneint, nie mit `bù`. ' +
    '`méiyǒu` – niemals `bù yǒu`.\n' +
    '2. Nach `méi` fällt die Abschlusspartikel `le` weg. `Wǒ méi chī le` ist falsch; ' +
    'richtig ist `Wǒ méi chī.`\n\n' +
    '**Tonwandel:** Vor einer Silbe im 4. Ton wird `bù` zu `bú`: `bú shì`, `bú qù`, ' +
    '`bú duì`. In der tonlosen Schreibweise fällt das nicht auf – gesprochen schon.',
  examples: [
    { pinyin: 'Wǒ bù chī ròu.', de: 'Ich esse kein Fleisch.', hanzi: '我不吃肉。' },
    { pinyin: 'Wǒ méi chī fàn.', de: 'Ich habe nicht gegessen.', hanzi: '我没吃饭。' },
    { pinyin: 'Tā bú qù xuéxiào.', de: 'Er geht nicht zur Schule.', hanzi: '他不去学校。' },
    { pinyin: 'Wǒ méiyǒu qián.', de: 'Ich habe kein Geld.', hanzi: '我没有钱。' },
    { pinyin: 'Zhè ge bù guì.', de: 'Das ist nicht teuer.', hanzi: '这个不贵。' },
    { pinyin: 'Tā zuótiān méi lái.', de: 'Er ist gestern nicht gekommen.', hanzi: '他昨天没来。' }
  ],
  drills: [
    { type: 'fillBlank',
      prompt: 'Wǒ ___ yǒu qián. (Ich habe kein Geld.)',
      options: ['méi', 'bù', 'bú', 'bié'],
      answer: 'méi',
      note: '`yǒu` wird immer mit `méi` verneint – `bù yǒu` gibt es nicht.' },
    { type: 'fillBlank',
      prompt: 'Wǒ ___ chī ròu. (Ich esse grundsätzlich kein Fleisch.)',
      options: ['bù', 'méi', 'méiyǒu', 'bié'],
      answer: 'bù',
      note: 'Gewohnheiten und Grundsätze werden mit `bù` verneint.' },
    { type: 'multipleChoice',
      prompt: 'Wann benutzt man `méi` statt `bù`?',
      options: [
        'Wenn etwas in der Vergangenheit nicht geschehen ist.',
        'Wenn der Satz ein Adjektiv enthält.',
        'Wenn man besonders höflich sein will.',
        'Wenn das Verb einsilbig ist.'
      ],
      answer: 'Wenn etwas in der Vergangenheit nicht geschehen ist.',
      note: '`méi` verneint Geschehenes, `bù` alles Übrige.' },
    { type: 'errorCorrection',
      prompt: 'Wǒ méi chī le.',
      answer: ['Wǒ méi chī.'],
      note: 'Nach `méi` fällt `le` weg – beides zusammen geht nicht.' },
    { type: 'transformation',
      prompt: 'Verneine für die Vergangenheit: Tā zuótiān lái le.',
      answer: ['Tā zuótiān méi lái.'],
      note: '`le` verschwindet, `méi` tritt vor das Verb.' },
    { type: 'typing',
      prompt: 'Das ist nicht teuer.',
      answer: ['Zhè ge bù guì.', 'Zhège bù guì.', 'Zhè bù guì.'],
      note: '`guì` ist ein Adjektiv – verneint mit `bù`, ohne `shì`.' }
  ]
},

{
  id: 'a1-you',
  title: '有: haben und es gibt',
  level: 'A1',
  relatedTopicIds: ['familie', 'wohnen'],
  explanation:
    '`yǒu` deckt zwei deutsche Wörter ab: „haben“ und „es gibt“.\n\n' +
    '**Besitz:** `Wǒ yǒu yí ge dìdi.` – Ich habe einen jüngeren Bruder.\n\n' +
    '**Existenz:** Hier steht der **Ort vorn**, nicht wie im Deutschen ein Platzhalter ' +
    '„es“:\n' +
    '`Zhuōzi shàng yǒu yì běn shū.` – Auf dem Tisch liegt ein Buch. ' +
    '(wörtlich: „Tisch oben gibt ein Buch“)\n' +
    '`Wǒ jiā yǒu sì ge rén.` – Wir sind vier in der Familie.\n\n' +
    'Die Struktur ist immer: `Ort + yǒu + Ding`. Wer aus dem Deutschen kommt, will hier ' +
    'gern ein „es“ einsetzen – das gibt es nicht.\n\n' +
    '**Verneinung nur mit `méi`:** `méiyǒu`, niemals `bù yǒu`. Das ist die wichtigste ' +
    'Einzelregel zu diesem Verb.\n\n' +
    '**Frage:** entweder `yǒu ... ma?` oder die A-nicht-A-Form `yǒu méiyǒu ...?` – ' +
    'beides ist üblich: `Nǐ yǒu méiyǒu shíjiān?` (Hast du Zeit?)\n\n' +
    '`yǒu` bildet außerdem feste Wendungen: `yǒu yìsi` (interessant), `yǒu yòng` ' +
    '(nützlich), `yǒu míng` (berühmt).',
  examples: [
    { pinyin: 'Wǒ yǒu yí ge dìdi.', de: 'Ich habe einen jüngeren Bruder.', hanzi: '我有一个弟弟。' },
    { pinyin: 'Wǒ jiā yǒu sì ge rén.', de: 'Wir sind vier in der Familie.', hanzi: '我家有四个人。' },
    { pinyin: 'Zhuōzi shàng yǒu yì běn shū.', de: 'Auf dem Tisch liegt ein Buch.', hanzi: '桌子上有一本书。' },
    { pinyin: 'Wǒ méiyǒu shíjiān.', de: 'Ich habe keine Zeit.', hanzi: '我没有时间。' },
    { pinyin: 'Nǐ yǒu méiyǒu wèntí?', de: 'Hast du Fragen?', hanzi: '你有没有问题？' },
    { pinyin: 'Zhè běn shū hěn yǒu yìsi.', de: 'Dieses Buch ist sehr interessant.', hanzi: '这本书很有意思。' }
  ],
  drills: [
    { type: 'errorCorrection',
      prompt: 'Wǒ bù yǒu shíjiān.',
      answer: ['Wǒ méiyǒu shíjiān.', 'Wǒ méi yǒu shíjiān.'],
      note: '`yǒu` wird ausschließlich mit `méi` verneint.' },
    { type: 'sentenceOrder',
      prompt: 'Auf dem Tisch liegt ein Buch.',
      options: ['yǒu', 'zhuōzi shàng', 'shū', 'yì běn'],
      answer: ['zhuōzi shàng', 'yǒu', 'yì běn', 'shū'],
      hanzi: '桌子上有一本书。' },
    { type: 'multipleChoice',
      prompt: 'Wie sagt man „Es gibt hier ein Restaurant“?',
      options: [
        'Zhèr yǒu yí ge fànguǎn.',
        'Yǒu yí ge fànguǎn zhèr.',
        'Tā yǒu zhèr fànguǎn.',
        'Zhèr shì yí ge fànguǎn yǒu.'
      ],
      answer: 'Zhèr yǒu yí ge fànguǎn.',
      note: 'Die Struktur lautet `Ort + yǒu + Ding`; der Ort steht vorn.' },
    { type: 'fillBlank',
      prompt: 'Nǐ ___ méiyǒu shíjiān? (Hast du Zeit?)',
      answer: ['yǒu'],
      note: 'Die A-nicht-A-Frage wiederholt das Verb: `yǒu méiyǒu`.' },
    { type: 'transformation',
      prompt: 'Mache eine A-nicht-A-Frage: Nǐ yǒu wèntí ma?',
      answer: ['Nǐ yǒu méiyǒu wèntí?', 'Nǐ yǒu méiyǒu wèntí'],
      note: 'Statt `ma` wird das Verb bejaht und verneint wiederholt.' },
    { type: 'typing',
      prompt: 'Wir sind vier in der Familie.',
      answer: ['Wǒ jiā yǒu sì ge rén.'],
      note: 'Wörtlich: „Mein Zuhause hat vier Personen.“' }
  ]
},

{
  id: 'a1-hen',
  title: 'Adjektiv-Prädikate mit 很',
  level: 'A1',
  relatedTopicIds: ['gefuehle', 'farben'],
  explanation:
    'Das ist die Regel, die fast jeden Anfänger einmal stolpern lässt: ' +
    '**Vor einem Adjektiv steht kein `shì`.**\n\n' +
    'Chinesische Adjektive sind selbst das Prädikat. Sie verhalten sich wie Verben: ' +
    '`gāo` heißt nicht nur „hoch“, sondern „hoch sein“.\n\n' +
    '`Tā hěn gāo.` – Er ist groß. (nicht: `Tā shì gāo.`)\n\n' +
    '**Warum steht dann überall `hěn`?** Weil ein nacktes Adjektiv im Chinesischen ' +
    'automatisch als **Vergleich** gelesen wird. `Tā gāo.` klingt nach „Er ist groß ' +
    '(im Gegensatz zu anderen)“. Um diesen Beiklang zu vermeiden, setzt man `hěn` davor – ' +
    'als bedeutungsarmen Füller. Übersetzt wird es dann gar nicht:\n\n' +
    '`Tā hěn gāo.` = „Er ist groß.“ — nicht zwingend „sehr groß“.\n\n' +
    'Wer wirklich „sehr“ sagen will, betont `hěn` oder greift zu `fēicháng` (äußerst), ' +
    '`tài ... le` (zu sehr), `zhēn` (wirklich).\n\n' +
    '**Verneint** fällt `hěn` weg, denn `bù` füllt seinen Platz: `Tā bù gāo.` ' +
    '(Er ist nicht groß.) `Tā bù hěn gāo` wäre ungewöhnlich.\n\n' +
    'Vor einem Substantiv braucht das Adjektiv `de`: `gāo de rén` (ein großer Mensch). ' +
    'Bei kurzen, häufigen Adjektiven entfällt es: `hǎo rén` (ein guter Mensch).',
  examples: [
    { pinyin: 'Tā hěn gāo.', de: 'Er ist groß.', hanzi: '他很高。' },
    { pinyin: 'Jīntiān hěn lěng.', de: 'Heute ist es kalt.', hanzi: '今天很冷。' },
    { pinyin: 'Zhè ge cài bù là.', de: 'Dieses Gericht ist nicht scharf.', hanzi: '这个菜不辣。' },
    { pinyin: 'Hànyǔ fēicháng yǒu yìsi.', de: 'Chinesisch ist äußerst interessant.', hanzi: '汉语非常有意思。' },
    { pinyin: 'Tài guì le!', de: 'Das ist zu teuer!', hanzi: '太贵了！' },
    { pinyin: 'Wǒ hěn máng, tā bù máng.', de: 'Ich bin beschäftigt, er nicht.', hanzi: '我很忙，他不忙。' }
  ],
  drills: [
    { type: 'errorCorrection',
      prompt: 'Jīntiān shì hěn lěng.',
      answer: ['Jīntiān hěn lěng.'],
      note: 'Vor einem Adjektiv steht nie `shì`.' },
    { type: 'multipleChoice',
      prompt: 'Warum steht `hěn` in `Tā hěn gāo`?',
      options: [
        'Als bedeutungsarmer Füller – sonst klänge der Satz nach einem Vergleich.',
        'Weil `hěn` das Verb „sein“ ersetzt.',
        'Weil jedes Adjektiv im Chinesischen ein Vorwort braucht.',
        'Weil `hěn` die Vergangenheit anzeigt.'
      ],
      answer: 'Als bedeutungsarmer Füller – sonst klänge der Satz nach einem Vergleich.',
      note: '`Tā gāo` allein liest sich als Gegenüberstellung. `hěn` nimmt diesen Beiklang weg.' },
    { type: 'fillBlank',
      prompt: 'Zhè ge cài ___ là. (Dieses Gericht ist nicht scharf.)',
      options: ['bù', 'hěn bù', 'bù hěn', 'méi'],
      answer: 'bù',
      note: 'Verneint fällt `hěn` weg – `bù` übernimmt seinen Platz.' },
    { type: 'transformation',
      prompt: 'Verneine: Jīntiān hěn lěng.',
      answer: ['Jīntiān bù lěng.'],
      note: '`hěn` verschwindet, `bù` tritt an seine Stelle.' },
    { type: 'sentenceOrder',
      prompt: 'Chinesisch ist äußerst interessant.',
      options: ['yǒu yìsi', 'Hànyǔ', 'fēicháng'],
      answer: ['Hànyǔ', 'fēicháng', 'yǒu yìsi'],
      hanzi: '汉语非常有意思。' },
    { type: 'typing',
      prompt: 'Heute ist es kalt.',
      answer: ['Jīntiān hěn lěng.'],
      note: 'Ohne `shì`, mit `hěn` als Füller.' }
  ]
}

]);
