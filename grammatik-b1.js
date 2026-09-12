/* Pinyin-Trainer – Grammatik B1 */
GrammatikDaten.add([

{
  id: 'b1-de-grad',
  title: 'Gradkomplement mit 得',
  level: 'B1',
  relatedTopicIds: ['sport', 'schule'],
  explanation:
    'Wie **gut** jemand etwas tut, sagt das Gradkomplement mit `de` (得). Es beschreibt ' +
    'nicht die Handlung selbst, sondern ihre Ausführung.\n\n' +
    '`Verb + de + Adjektiv`\n\n' +
    '`Tā shuō de hěn hǎo.` – Er spricht sehr gut.\n' +
    '`Nǐ lái de tài wǎn le.` – Du bist zu spät gekommen.\n\n' +
    'Beachte: Vor dem Adjektiv steht wieder `hěn` – es ist ja ein Adjektiv-Prädikat.\n\n' +
    '**Der Stolperstein: das Objekt.** Steht ein Objekt im Satz, muss das Verb ' +
    '**wiederholt** werden:\n\n' +
    '`Tā shuō Hànyǔ shuō de hěn hǎo.` – Er spricht sehr gut Chinesisch.\n\n' +
    'Ohne Wiederholung geht es nicht: `Tā shuō Hànyǔ de hěn hǎo` ist falsch. Alternativ ' +
    'zieht man das Objekt nach vorn: `Tā Hànyǔ shuō de hěn hǎo.`\n\n' +
    '**Verneint** wird das Adjektiv, nicht das Verb:\n' +
    '`Tā shuō de bù hǎo.` – Er spricht nicht gut. (nicht `Tā bù shuō de hǎo`)\n\n' +
    '**Frage:** `Tā shuō de zěnmeyàng?` – Wie spricht er? Oder A-nicht-A am Adjektiv: ' +
    '`Tā shuō de hǎo bù hǎo?`\n\n' +
    '**Drei verschiedene `de`:** `的` (Besitz/Attribut), `得` (Gradkomplement), ' +
    '`地` (vor Verben, adverbial). Alle klingen gleich – in der tonlosen Schreibweise ' +
    'unterscheidet sie nur der Satzbau.',
  examples: [
    { pinyin: 'Tā shuō de hěn hǎo.', de: 'Er spricht sehr gut.', hanzi: '他说得很好。' },
    { pinyin: 'Tā shuō Hànyǔ shuō de hěn hǎo.', de: 'Er spricht sehr gut Chinesisch.', hanzi: '他说汉语说得很好。' },
    { pinyin: 'Nǐ lái de tài wǎn le.', de: 'Du bist zu spät gekommen.', hanzi: '你来得太晚了。' },
    { pinyin: 'Tā pǎo de bú kuài.', de: 'Er läuft nicht schnell.', hanzi: '他跑得不快。' },
    { pinyin: 'Nǐ chī de zěnmeyàng?', de: 'Wie hat es dir geschmeckt?', hanzi: '你吃得怎么样？' },
    { pinyin: 'Duìyuán pèihé de hěn hǎo.', de: 'Die Teamkollegen spielen sehr gut zusammen.', hanzi: '队员配合得很好。' }
  ],
  drills: [
    { type: 'errorCorrection',
      prompt: 'Tā shuō Hànyǔ de hěn hǎo.',
      answer: ['Tā shuō Hànyǔ shuō de hěn hǎo.', 'Tā Hànyǔ shuō de hěn hǎo.'],
      note: 'Mit Objekt muss das Verb wiederholt werden – oder das Objekt rückt nach vorn.' },
    { type: 'fillBlank',
      prompt: 'Tā pǎo ___ hěn kuài. (Er läuft sehr schnell.)',
      answer: ['de'],
      note: 'Das Gradkomplement hängt mit `de` (得) am Verb.' },
    { type: 'multipleChoice',
      prompt: 'Wie verneint man `Tā shuō de hěn hǎo`?',
      options: [
        'Tā shuō de bù hǎo.',
        'Tā bù shuō de hǎo.',
        'Tā méi shuō de hǎo.',
        'Tā shuō bù de hǎo.'
      ],
      answer: 'Tā shuō de bù hǎo.',
      note: 'Verneint wird das Adjektiv nach `de`, nicht das Verb davor.' },
    { type: 'transformation',
      prompt: 'Füge das Objekt `Hànyǔ` ein: Tā shuō de hěn hǎo.',
      answer: ['Tā shuō Hànyǔ shuō de hěn hǎo.', 'Tā Hànyǔ shuō de hěn hǎo.'],
      note: 'Beide Lösungen sind üblich: Verb verdoppeln oder Objekt vorziehen.' },
    { type: 'sentenceOrder',
      prompt: 'Du bist zu spät gekommen.',
      options: ['tài wǎn le', 'nǐ', 'de', 'lái'],
      answer: ['nǐ', 'lái', 'de', 'tài wǎn le'],
      hanzi: '你来得太晚了。' },
    { type: 'typing',
      prompt: 'Er läuft nicht schnell.',
      answer: ['Tā pǎo de bú kuài.', 'Tā pǎo de bù kuài.'],
      note: 'Das `bù` steht hinter `de`, direkt vor dem Adjektiv.' }
  ]
},

{
  id: 'b1-ba',
  title: 'Die 把-Konstruktion',
  level: 'B1',
  relatedTopicIds: ['wohnen', 'arbeit'],
  explanation:
    'Die `bǎ`-Konstruktion zieht das Objekt **vor das Verb** und sagt damit: An diesem ' +
    'Objekt ist etwas **geschehen**, es hat sich dadurch verändert.\n\n' +
    '`Subjekt + bǎ + Objekt + Verb + Ergänzung`\n\n' +
    '`Wǒ bǎ mén guān shàng le.` – Ich habe die Tür zugemacht.\n' +
    '`Qǐng bǎ shū fàng zài zhuōzi shàng.` – Legen Sie das Buch bitte auf den Tisch.\n\n' +
    '**Drei Bedingungen, ohne die der Satz falsch wird:**\n\n' +
    '1. **Das Objekt muss bestimmt sein.** Nicht „ein Buch“, sondern „das Buch“ – der ' +
    'Hörer muss wissen, welches gemeint ist.\n' +
    '2. **Das Verb darf nicht allein stehen.** Es braucht eine Ergänzung: `le`, ein ' +
    'Ergebnis- oder Richtungskomplement, ein Ziel. `Wǒ bǎ mén guān` ist unvollständig.\n' +
    '3. **Das Verb muss etwas bewirken.** Verben der Wahrnehmung oder des Empfindens ' +
    '(`kàn jiàn`, `xǐhuan`, `zhīdào`, `yǒu`) gehen nicht – sie verändern nichts.\n\n' +
    '**Verneinung und Modalverben** stehen **vor** `bǎ`:\n' +
    '`Wǒ méi bǎ mén guān shàng.` – Ich habe die Tür nicht zugemacht.\n' +
    '`Nǐ yīnggāi bǎ chuānghu dǎkāi.` – Du solltest das Fenster öffnen.\n\n' +
    '**Warum überhaupt?** Ohne `bǎ` betont der Satz die Handlung, mit `bǎ` das Ergebnis ' +
    'am Objekt. Bei komplizierten Ergänzungen (Ort, Richtung, Empfänger) ist `bǎ` ' +
    'außerdem die einzige saubere Lösung.',
  examples: [
    { pinyin: 'Wǒ bǎ mén guān shàng le.', de: 'Ich habe die Tür zugemacht.', hanzi: '我把门关上了。' },
    { pinyin: 'Qǐng bǎ shū fàng zài zhuōzi shàng.', de: 'Legen Sie das Buch bitte auf den Tisch.', hanzi: '请把书放在桌子上。' },
    { pinyin: 'Tā bǎ zuòyè zuò wán le.', de: 'Er hat die Hausaufgaben fertig gemacht.', hanzi: '他把作业做完了。' },
    { pinyin: 'Wǒ méi bǎ yàoshi dài lái.', de: 'Ich habe den Schlüssel nicht mitgebracht.', hanzi: '我没把钥匙带来。' },
    { pinyin: 'Nǐ yīnggāi bǎ chuānghu dǎkāi.', de: 'Du solltest das Fenster öffnen.', hanzi: '你应该把窗户打开。' },
    { pinyin: 'Qǐng bǎ zhè jù huà fānyì chéng Déyǔ.', de: 'Übersetzen Sie diesen Satz bitte ins Deutsche.', hanzi: '请把这句话翻译成德语。' }
  ],
  drills: [
    { type: 'errorCorrection',
      prompt: 'Wǒ bǎ mén guān.',
      answer: ['Wǒ bǎ mén guān shàng le.', 'Wǒ bǎ mén guān le.'],
      note: 'Nach `bǎ` darf das Verb nicht nackt stehen – es braucht eine Ergänzung.' },
    { type: 'fillBlank',
      prompt: 'Qǐng ___ shū fàng zài zhuōzi shàng. (Legen Sie das Buch bitte auf den Tisch.)',
      options: ['bǎ', 'bèi', 'gěi', 'zài'],
      answer: 'bǎ',
      note: '`bǎ` zieht das Objekt vor das Verb, wenn ein Ziel folgt.' },
    { type: 'multipleChoice',
      prompt: 'Welcher Satz kann NICHT mit `bǎ` gebildet werden?',
      options: [
        'Wǒ kàn jiàn tā le.',
        'Wǒ guān shàng le mén.',
        'Wǒ zuò wán le zuòyè.',
        'Wǒ fàng le shū zài zhuōzi shàng.'
      ],
      answer: 'Wǒ kàn jiàn tā le.',
      note: '`kàn jiàn` verändert nichts am Objekt – Wahrnehmungsverben vertragen kein `bǎ`.' },
    { type: 'transformation',
      prompt: 'Baue mit `bǎ` um: Tā zuò wán le zuòyè.',
      answer: ['Tā bǎ zuòyè zuò wán le.'],
      note: 'Das Objekt rückt hinter `bǎ`, die Ergänzung bleibt am Verb.' },
    { type: 'sentenceOrder',
      prompt: 'Ich habe den Schlüssel nicht mitgebracht.',
      options: ['dài lái', 'wǒ méi', 'yàoshi', 'bǎ'],
      answer: ['wǒ méi', 'bǎ', 'yàoshi', 'dài lái'],
      hanzi: '我没把钥匙带来。' },
    { type: 'typing',
      prompt: 'Du solltest das Fenster öffnen.',
      answer: ['Nǐ yīnggāi bǎ chuānghu dǎkāi.'],
      note: 'Das Modalverb steht vor `bǎ`, nicht dahinter.' }
  ]
},

{
  id: 'b1-bei',
  title: 'Das 被-Passiv',
  level: 'B1',
  relatedTopicIds: ['nachrichten', 'stadt'],
  explanation:
    'Das Passiv bildet man mit `bèi`:\n\n' +
    '`Empfänger + bèi (+ Handelnder) + Verb + Ergänzung`\n\n' +
    '`Wǒ de shǒujī bèi tōu le.` – Mein Handy wurde gestohlen.\n' +
    '`Tā bèi lǎobǎn pīpíng le.` – Er wurde vom Chef kritisiert.\n\n' +
    'Der Handelnde darf wegfallen, wenn er unbekannt oder unwichtig ist.\n\n' +
    '**Was Deutschsprachige überrascht:** Das chinesische Passiv trägt traditionell einen ' +
    '**negativen Beiklang**. Es wird für Unangenehmes benutzt – bestohlen werden, ' +
    'kritisiert werden, entlassen werden. Wo im Deutschen ganz neutral „Das Buch wurde ' +
    'übersetzt“ steht, sagt man auf Chinesisch lieber aktiv: `Zhè běn shū fānyì chéng ' +
    'Déyǔ le.` – ohne `bèi`, mit dem Objekt als Thema vorn.\n\n' +
    'In moderner Schriftsprache und unter westlichem Einfluss verblasst dieser Beiklang ' +
    'zunehmend, aber in der gesprochenen Sprache gilt er noch.\n\n' +
    '**Wie bei `bǎ` braucht das Verb eine Ergänzung.** `Tā bèi pīpíng` ist unvollständig; ' +
    'mit `le` wird es richtig.\n\n' +
    '**Verneinung** vor `bèi`: `Wǒ méi bèi pīpíng.`\n\n' +
    '**Umgangssprachliche Varianten:** `ràng`, `jiào` und `gěi` können `bèi` ersetzen – ' +
    'dann muss der Handelnde aber genannt werden: `Wǒ de bēizi ràng tā dǎpò le.`',
  examples: [
    { pinyin: 'Wǒ de shǒujī bèi tōu le.', de: 'Mein Handy wurde gestohlen.', hanzi: '我的手机被偷了。' },
    { pinyin: 'Tā bèi lǎobǎn pīpíng le.', de: 'Er wurde vom Chef kritisiert.', hanzi: '他被老板批评了。' },
    { pinyin: 'Nà běn shū bèi jièzǒu le.', de: 'Das Buch wurde ausgeliehen.', hanzi: '那本书被借走了。' },
    { pinyin: 'Wǒ méi bèi pīpíng.', de: 'Ich wurde nicht kritisiert.', hanzi: '我没被批评。' },
    { pinyin: 'Wǒ de bēizi ràng tā dǎpò le.', de: 'Meine Tasse wurde von ihm zerbrochen.', hanzi: '我的杯子让他打破了。' },
    { pinyin: 'Zhè jiàn shì bèi méitǐ bàodào le.', de: 'Über diese Sache wurde in den Medien berichtet.', hanzi: '这件事被媒体报道了。' }
  ],
  drills: [
    { type: 'fillBlank',
      prompt: 'Wǒ de shǒujī ___ tōu le. (Mein Handy wurde gestohlen.)',
      options: ['bèi', 'bǎ', 'gěi le', 'zài'],
      answer: 'bèi',
      note: '`bèi` macht den Empfänger der Handlung zum Subjekt.' },
    { type: 'multipleChoice',
      prompt: 'Welchen Beiklang hat das `bèi`-Passiv traditionell?',
      options: [
        'Einen negativen – es steht meist für Unangenehmes.',
        'Einen höflichen.',
        'Einen förmlichen, nur in Verträgen.',
        'Gar keinen, es ist völlig neutral.'
      ],
      answer: 'Einen negativen – es steht meist für Unangenehmes.',
      note: 'Neutrale Sachverhalte formuliert man lieber aktiv, mit dem Objekt als Thema vorn.' },
    { type: 'errorCorrection',
      prompt: 'Tā bèi lǎobǎn pīpíng.',
      answer: ['Tā bèi lǎobǎn pīpíng le.'],
      note: 'Wie bei `bǎ` braucht das Verb im `bèi`-Satz eine Ergänzung, hier `le`.' },
    { type: 'transformation',
      prompt: 'Forme ins Passiv um: Lǎobǎn pīpíng le tā.',
      answer: ['Tā bèi lǎobǎn pīpíng le.'],
      note: 'Der Empfänger rückt nach vorn, der Handelnde hinter `bèi`.' },
    { type: 'sentenceOrder',
      prompt: 'Über diese Sache wurde in den Medien berichtet.',
      options: ['bàodào le', 'zhè jiàn shì', 'méitǐ', 'bèi'],
      answer: ['zhè jiàn shì', 'bèi', 'méitǐ', 'bàodào le'],
      hanzi: '这件事被媒体报道了。' },
    { type: 'typing',
      prompt: 'Ich wurde nicht kritisiert.',
      answer: ['Wǒ méi bèi pīpíng.', 'Wǒ méiyǒu bèi pīpíng.'],
      note: 'Die Verneinung steht vor `bèi`.' }
  ]
},

{
  id: 'b1-dauer',
  title: 'Zeitdauer und Häufigkeit',
  level: 'B1',
  relatedTopicIds: ['zahlen', 'schule'],
  explanation:
    'Eine **Zeitdauer** steht **hinter** dem Verb – im Gegensatz zum Zeitpunkt, der davor ' +
    'steht. Das ist der häufigste Fehler in diesem Bereich.\n\n' +
    '`Wǒ qī diǎn qǐchuáng.` – Zeitpunkt, vor dem Verb.\n' +
    '`Wǒ shuì le bā ge xiǎoshí.` – Dauer, hinter dem Verb.\n\n' +
    '**Mit Objekt wird es kniffliger.** Drei zulässige Bauweisen:\n\n' +
    '1. Verb wiederholen: `Wǒ xué Hànyǔ xué le sān nián.`\n' +
    '2. Dauer zwischen Verb und Objekt, mit `de`: `Wǒ xué le sān nián de Hànyǔ.`\n' +
    '3. Objekt vorziehen: `Hànyǔ wǒ xué le sān nián.`\n\n' +
    'Falsch wäre `Wǒ xué le Hànyǔ sān nián.`\n\n' +
    '**Häufigkeit** funktioniert genauso – `cì` (Mal) steht hinter dem Verb:\n' +
    '`Wǒ qù guo sān cì.` – Ich war dreimal dort.\n' +
    'Bei einem Ortsobjekt darf die Angabe davor stehen: `Wǒ qù guo sān cì Běijīng.`\n\n' +
    '**Andauernd bis jetzt:** Mit `le` am Satzende wird aus der abgeschlossenen Dauer eine ' +
    'laufende:\n' +
    '`Wǒ xué le sān nián Hànyǔ.` – Ich habe drei Jahre Chinesisch gelernt (und aufgehört).\n' +
    '`Wǒ xué le sān nián Hànyǔ le.` – Ich lerne seit drei Jahren Chinesisch (und lerne weiter).',
  examples: [
    { pinyin: 'Wǒ shuì le bā ge xiǎoshí.', de: 'Ich habe acht Stunden geschlafen.', hanzi: '我睡了八个小时。' },
    { pinyin: 'Wǒ xué Hànyǔ xué le sān nián.', de: 'Ich habe drei Jahre Chinesisch gelernt.', hanzi: '我学汉语学了三年。' },
    { pinyin: 'Wǒ xué le sān nián de Hànyǔ.', de: 'Ich habe drei Jahre Chinesisch gelernt.', hanzi: '我学了三年的汉语。' },
    { pinyin: 'Wǒ xué le sān nián Hànyǔ le.', de: 'Ich lerne seit drei Jahren Chinesisch.', hanzi: '我学了三年汉语了。' },
    { pinyin: 'Wǒ qù guo sān cì Běijīng.', de: 'Ich war dreimal in Peking.', hanzi: '我去过三次北京。' },
    { pinyin: 'Zhè bù diànyǐng wǒ kàn le liǎng biàn.', de: 'Diesen Film habe ich zweimal ganz gesehen.', hanzi: '这部电影我看了两遍。' }
  ],
  drills: [
    { type: 'errorCorrection',
      prompt: 'Wǒ xué le Hànyǔ sān nián.',
      answer: ['Wǒ xué Hànyǔ xué le sān nián.', 'Wǒ xué le sān nián de Hànyǔ.',
               'Hànyǔ wǒ xué le sān nián.'],
      note: 'Mit Objekt braucht es eine der drei Bauweisen – die Dauer darf nicht einfach hinten stehen.' },
    { type: 'multipleChoice',
      prompt: 'Wo steht eine Zeitdauer im Verhältnis zum Verb?',
      options: [
        'Dahinter – im Gegensatz zum Zeitpunkt, der davor steht.',
        'Davor, genau wie der Zeitpunkt.',
        'Immer am Satzanfang.',
        'Immer am Satzende, nach dem Objekt.'
      ],
      answer: 'Dahinter – im Gegensatz zum Zeitpunkt, der davor steht.',
      note: 'Zeitpunkt vor dem Verb, Zeitdauer dahinter.' },
    { type: 'fillBlank',
      prompt: 'Wǒ shuì ___ bā ge xiǎoshí. (Ich habe acht Stunden geschlafen.)',
      answer: ['le'],
      note: '`le` markiert den Abschluss, die Dauer folgt dahinter.' },
    { type: 'transformation',
      prompt: 'Drücke aus, dass du weiterlernst: Wǒ xué le sān nián Hànyǔ.',
      answer: ['Wǒ xué le sān nián Hànyǔ le.'],
      note: 'Ein zweites `le` am Satzende macht aus der abgeschlossenen Dauer eine andauernde.' },
    { type: 'sentenceOrder',
      prompt: 'Diesen Film habe ich zweimal ganz gesehen.',
      options: ['liǎng biàn', 'zhè bù diànyǐng', 'kàn le', 'wǒ'],
      answer: ['zhè bù diànyǐng', 'wǒ', 'kàn le', 'liǎng biàn'],
      hanzi: '这部电影我看了两遍。' },
    { type: 'typing',
      prompt: 'Ich war dreimal in Peking.',
      answer: ['Wǒ qù guo sān cì Běijīng.', 'Wǒ qù guo Běijīng sān cì.'],
      note: 'Bei Ortsnamen darf die Häufigkeit vor dem Objekt stehen.' }
  ]
},

{
  id: 'b1-you-you',
  title: '又…又… und 一边…一边…',
  level: 'B1',
  relatedTopicIds: ['gefuehle', 'freizeit'],
  explanation:
    'Zwei Paare, die beide „und“ heißen – aber Verschiedenes tun.\n\n' +
    '**`yòu … yòu …` – zwei Eigenschaften gleichzeitig**\n' +
    '`Zhè ge cài yòu piányi yòu hǎochī.` – Dieses Gericht ist billig und lecker.\n' +
    'Beide Teile müssen dieselbe Wortart haben, meist Adjektive, und dieselbe Richtung: ' +
    'entweder beide positiv oder beide negativ. `yòu piányi yòu guì` wäre unsinnig.\n\n' +
    '**`yībiān … yībiān …` – zwei Handlungen gleichzeitig**\n' +
    '`Tā yībiān chīfàn yībiān kàn diànshì.` – Er isst und sieht dabei fern.\n' +
    'Hier stehen Verben, und die Handlungen laufen wirklich parallel. Umgangssprachlich ' +
    'oft verkürzt zu `biān … biān …`.\n\n' +
    '**Verwandte Paare:**\n\n' +
    '`yě … yě …` – auch … auch (neutraler als `yòu … yòu …`)\n' +
    '`bù dàn … érqiě …` – nicht nur … sondern auch (Steigerung, B2)\n' +
    '`yīmiàn … yīmiàn …` – schriftsprachliche Variante von `yībiān`\n\n' +
    '**Der Test:** Beschreibe ich, **wie etwas ist** → `yòu … yòu …`. Beschreibe ich, ' +
    '**was jemand tut** → `yībiān … yībiān …`.',
  examples: [
    { pinyin: 'Zhè ge cài yòu piányi yòu hǎochī.', de: 'Dieses Gericht ist billig und lecker.', hanzi: '这个菜又便宜又好吃。' },
    { pinyin: 'Tā yòu cōngming yòu nǔlì.', de: 'Sie ist klug und fleißig.', hanzi: '她又聪明又努力。' },
    { pinyin: 'Tā yībiān chīfàn yībiān kàn diànshì.', de: 'Er isst und sieht dabei fern.', hanzi: '他一边吃饭一边看电视。' },
    { pinyin: 'Wǒ yībiān gōngzuò yībiān xuéxí.', de: 'Ich arbeite und studiere nebenher.', hanzi: '我一边工作一边学习。' },
    { pinyin: 'Zhè tiáo lù yòu zhǎi yòu jǐ.', de: 'Diese Straße ist eng und überfüllt.', hanzi: '这条路又窄又挤。' },
    { pinyin: 'Háizi yībiān kū yībiān pǎo.', de: 'Das Kind weint und läuft dabei.', hanzi: '孩子一边哭一边跑。' }
  ],
  drills: [
    { type: 'fillBlank',
      prompt: 'Zhè ge cài ___ piányi ___ hǎochī. (billig und lecker)',
      options: ['yòu … yòu', 'yībiān … yībiān', 'yě … yě', 'bù dàn … érqiě'],
      answer: 'yòu … yòu',
      note: 'Zwei Eigenschaften nebeneinander: `yòu … yòu …`.' },
    { type: 'fillBlank',
      prompt: 'Tā ___ chīfàn ___ kàn diànshì. (isst und sieht dabei fern)',
      options: ['yībiān … yībiān', 'yòu … yòu', 'yīnwèi … suǒyǐ', 'suīrán … dànshì'],
      answer: 'yībiān … yībiān',
      note: 'Zwei gleichzeitige Handlungen: `yībiān … yībiān …`.' },
    { type: 'multipleChoice',
      prompt: 'Warum ist `Zhè ge cài yòu piányi yòu guì` unsinnig?',
      options: [
        'Beide Teile müssen in dieselbe Richtung weisen – billig und teuer widersprechen sich.',
        'Weil `guì` kein Adjektiv ist.',
        'Weil `yòu` nur einmal im Satz stehen darf.',
        'Weil bei Essen nur `hǎochī` möglich ist.'
      ],
      answer: 'Beide Teile müssen in dieselbe Richtung weisen – billig und teuer widersprechen sich.',
      note: '`yòu … yòu …` reiht gleichgerichtete Eigenschaften auf.' },
    { type: 'errorCorrection',
      prompt: 'Tā yòu chīfàn yòu kàn diànshì.',
      answer: ['Tā yībiān chīfàn yībiān kàn diànshì.'],
      note: 'Bei parallelen Handlungen steht `yībiān … yībiān …`, nicht `yòu … yòu …`.' },
    { type: 'sentenceOrder',
      prompt: 'Ich arbeite und studiere nebenher.',
      options: ['yībiān xuéxí', 'wǒ', 'yībiān gōngzuò'],
      answer: ['wǒ', 'yībiān gōngzuò', 'yībiān xuéxí'],
      hanzi: '我一边工作一边学习。' },
    { type: 'typing',
      prompt: 'Sie ist klug und fleißig.',
      answer: ['Tā yòu cōngming yòu nǔlì.'],
      note: 'Zwei positive Eigenschaften – `yòu … yòu …`.' }
  ]
},

{
  id: 'b1-yuelaiyue',
  title: '越来越 und 越…越…',
  level: 'B1',
  relatedTopicIds: ['wetter', 'natur'],
  explanation:
    'Zwei Muster für Steigerung – ähnlich geschrieben, aber klar unterschieden.\n\n' +
    '**`yuè lái yuè + Adjektiv` – „immer …er“**\n' +
    'Etwas nimmt mit der Zeit zu:\n' +
    '`Tiānqì yuè lái yuè lěng.` – Das Wetter wird immer kälter.\n' +
    '`Hànyǔ yuè lái yuè yǒu yìsi.` – Chinesisch wird immer interessanter.\n\n' +
    'Wörtlich heißt `yuè lái yuè` „je mehr es kommt, desto …“ – die Zeit ist der Maßstab.\n\n' +
    '**`yuè A yuè B` – „je …, desto …“**\n' +
    'Hier hängt eine Größe von einer anderen ab:\n' +
    '`Yuè duō yuè hǎo.` – Je mehr, desto besser.\n' +
    '`Wǒ yuè xué yuè xǐhuan.` – Je mehr ich lerne, desto lieber mag ich es.\n\n' +
    '**Wichtig:** Kein `hěn` bei diesen Mustern. `yuè lái yuè hěn lěng` ist falsch – ' +
    'die Steigerung ersetzt den Füller.\n\n' +
    '**Verwandtes:**\n\n' +
    '`gèng` – noch mehr, im Vergleich: `Jīntiān gèng lěng.` (Heute ist es noch kälter.)\n' +
    '`zuì` – am meisten: `Zhè ge zuì hǎo.` (Das ist am besten.)\n' +
    '`bǐjiào` – ziemlich, vergleichsweise: `Zhè ge bǐjiào guì.`',
  examples: [
    { pinyin: 'Tiānqì yuè lái yuè lěng.', de: 'Das Wetter wird immer kälter.', hanzi: '天气越来越冷。' },
    { pinyin: 'Kōngqì wūrǎn yuè lái yuè yánzhòng.', de: 'Die Luftverschmutzung wird immer schlimmer.', hanzi: '空气污染越来越严重。' },
    { pinyin: 'Yuè duō yuè hǎo.', de: 'Je mehr, desto besser.', hanzi: '越多越好。' },
    { pinyin: 'Wǒ yuè xué yuè xǐhuan Hànyǔ.', de: 'Je mehr ich lerne, desto lieber mag ich Chinesisch.', hanzi: '我越学越喜欢汉语。' },
    { pinyin: 'Tā yuè shuō yuè kuài.', de: 'Je länger er spricht, desto schneller wird er.', hanzi: '他越说越快。' },
    { pinyin: 'Jīntiān bǐ zuótiān gèng lěng.', de: 'Heute ist es noch kälter als gestern.', hanzi: '今天比昨天更冷。' }
  ],
  drills: [
    { type: 'fillBlank',
      prompt: 'Tiānqì ___ lěng. (Das Wetter wird immer kälter.)',
      options: ['yuè lái yuè', 'yuè … yuè', 'gèng', 'zuì'],
      answer: 'yuè lái yuè',
      note: '`yuè lái yuè` heißt „immer …er“ mit der Zeit als Maßstab.' },
    { type: 'errorCorrection',
      prompt: 'Tiānqì yuè lái yuè hěn lěng.',
      answer: ['Tiānqì yuè lái yuè lěng.'],
      note: 'Bei `yuè lái yuè` steht kein `hěn` – die Steigerung ersetzt den Füller.' },
    { type: 'multipleChoice',
      prompt: 'Was heißt `Wǒ yuè xué yuè xǐhuan`?',
      options: [
        'Je mehr ich lerne, desto lieber mag ich es.',
        'Ich lerne immer mehr.',
        'Ich mag Lernen am meisten.',
        'Ich habe schon viel gelernt.'
      ],
      answer: 'Je mehr ich lerne, desto lieber mag ich es.',
      note: '`yuè A yuè B` koppelt zwei Größen aneinander: je …, desto …' },
    { type: 'sentenceOrder',
      prompt: 'Je länger er spricht, desto schneller wird er.',
      options: ['yuè kuài', 'tā', 'yuè shuō'],
      answer: ['tā', 'yuè shuō', 'yuè kuài'],
      hanzi: '他越说越快。' },
    { type: 'transformation',
      prompt: 'Drücke mit `yuè lái yuè` aus: Kōngqì wūrǎn hěn yánzhòng. (immer schlimmer)',
      answer: ['Kōngqì wūrǎn yuè lái yuè yánzhòng.'],
      note: '`hěn` fällt weg, `yuè lái yuè` tritt an seine Stelle.' },
    { type: 'typing',
      prompt: 'Je mehr, desto besser.',
      answer: ['Yuè duō yuè hǎo.'],
      note: 'Die knappste Form des Musters – ganz ohne Subjekt.' }
  ]
},

{
  id: 'b1-ruguo',
  title: 'Konditionalsätze: 如果…就…',
  level: 'B1',
  relatedTopicIds: ['meinung', 'arbeit'],
  explanation:
    'Bedingungssätze folgen demselben Paarprinzip wie `yīnwèi … suǒyǐ …`:\n\n' +
    '`rúguǒ + Bedingung, (Subjekt) + jiù + Folge`\n\n' +
    '`Rúguǒ míngtiān xià yǔ, wǒ jiù bú qù le.` – Wenn es morgen regnet, gehe ich nicht.\n\n' +
    '**Die Stellung von `jiù` ist streng:** Es steht **direkt vor dem Verb**, nie am ' +
    'Satzanfang. `Rúguǒ xià yǔ, jiù wǒ bú qù` ist falsch – das Subjekt kommt zuerst.\n\n' +
    '**`rúguǒ` darf wegfallen**, `jiù` allein trägt die Bedingung schon:\n' +
    '`Míngtiān xià yǔ, wǒ jiù bú qù le.`\n\n' +
    '**Varianten:**\n\n' +
    '`yàoshi` – umgangssprachlich für `rúguǒ`\n' +
    '`de huà` – nachgestellt, oft zusätzlich: `Rúguǒ nǐ yǒu shíjiān de huà, …`\n' +
    '`zhǐyào … jiù …` – solange nur …, dann …\n' +
    '`zhǐyǒu … cái …` – nur wenn …, erst dann …\n' +
    '`jíshǐ … yě …` – selbst wenn …, trotzdem …\n\n' +
    '**`jiù` gegen `cái`:** `jiù` heißt „dann schon“, `cái` heißt „erst dann“. ' +
    '`Tā liù diǎn jiù lái le.` (Er kam schon um sechs.) gegen `Tā liù diǎn cái lái.` ' +
    '(Er kam erst um sechs.) Dasselbe Uhrzeitwort, entgegengesetzte Wertung.',
  examples: [
    { pinyin: 'Rúguǒ míngtiān xià yǔ, wǒ jiù bú qù le.', de: 'Wenn es morgen regnet, gehe ich nicht.', hanzi: '如果明天下雨，我就不去了。' },
    { pinyin: 'Rúguǒ nǐ yǒu shíjiān, jiù lái wǒ jiā ba.', de: 'Wenn du Zeit hast, komm doch zu mir.', hanzi: '如果你有时间，就来我家吧。' },
    { pinyin: 'Yàoshi tài guì, wǒ jiù bù mǎi.', de: 'Wenn es zu teuer ist, kaufe ich es nicht.', hanzi: '要是太贵，我就不买。' },
    { pinyin: 'Zhǐyào nǔlì, jiù yǒu jīhuì.', de: 'Solange man sich anstrengt, gibt es eine Chance.', hanzi: '只要努力，就有机会。' },
    { pinyin: 'Zhǐyǒu duō liànxí, cái néng jìnbù.', de: 'Nur wer viel übt, kann Fortschritte machen.', hanzi: '只有多练习，才能进步。' },
    { pinyin: 'Jíshǐ hěn nán, wǒ yě yào shìshi.', de: 'Selbst wenn es schwer ist, will ich es versuchen.', hanzi: '即使很难，我也要试试。' }
  ],
  drills: [
    { type: 'fillBlank',
      prompt: 'Rúguǒ míngtiān xià yǔ, wǒ ___ bú qù le.',
      options: ['jiù', 'suǒyǐ', 'dànshì', 'cái'],
      answer: 'jiù',
      note: '`rúguǒ` verlangt `jiù` vor dem Verb der Folge.' },
    { type: 'errorCorrection',
      prompt: 'Rúguǒ xià yǔ, jiù wǒ bú qù.',
      answer: ['Rúguǒ xià yǔ, wǒ jiù bú qù.'],
      note: '`jiù` steht direkt vor dem Verb – das Subjekt kommt davor.' },
    { type: 'multipleChoice',
      prompt: 'Was unterscheidet `Tā liù diǎn jiù lái le` von `Tā liù diǎn cái lái`?',
      options: [
        '`jiù` wertet als früh („schon um sechs“), `cái` als spät („erst um sechs“).',
        '`jiù` ist Vergangenheit, `cái` Zukunft.',
        '`cái` ist höflicher.',
        'Es gibt keinen Unterschied.'
      ],
      answer: '`jiù` wertet als früh („schon um sechs“), `cái` als spät („erst um sechs“).',
      note: 'Beide stehen vor dem Verb, tragen aber gegensätzliche Wertungen.' },
    { type: 'transformation',
      prompt: 'Lasse `rúguǒ` weg: Rúguǒ míngtiān xià yǔ, wǒ jiù bú qù le.',
      answer: ['Míngtiān xià yǔ, wǒ jiù bú qù le.'],
      note: '`jiù` allein trägt die Bedingung bereits.' },
    { type: 'sentenceOrder',
      prompt: 'Nur wer viel übt, kann Fortschritte machen.',
      options: ['cái néng jìnbù', 'zhǐyǒu', 'duō liànxí'],
      answer: ['zhǐyǒu', 'duō liànxí', 'cái néng jìnbù'],
      hanzi: '只有多练习，才能进步。' },
    { type: 'typing',
      prompt: 'Wenn es zu teuer ist, kaufe ich es nicht.',
      answer: ['Rúguǒ tài guì, wǒ jiù bù mǎi.', 'Yàoshi tài guì, wǒ jiù bù mǎi.',
               'Rúguǒ tài guì le, wǒ jiù bù mǎi.'],
      note: '`rúguǒ` und `yàoshi` sind gleichwertig; `jiù` steht vor `bù mǎi`.' }
  ]
},

{
  id: 'b1-attribut',
  title: 'Komplexe Attribute mit 的',
  level: 'B1',
  relatedTopicIds: ['stadt', 'technik'],
  explanation:
    'Im Deutschen steht der Relativsatz **hinter** dem Bezugswort: „das Buch, **das ich ' +
    'gestern gekauft habe**“. Im Chinesischen steht er **davor** – die gesamte ' +
    'Beschreibung wird vor das Substantiv gezogen und mit `de` angeknüpft:\n\n' +
    '`Beschreibung + de + Substantiv`\n\n' +
    '`wǒ zuótiān mǎi de shū` – das Buch, das ich gestern gekauft habe\n' +
    '(wörtlich: „ich gestern gekauft **de** Buch“)\n\n' +
    'Das ist die größte Umstellung, die das Chinesische von Deutschsprachigen verlangt. ' +
    'Je länger die Beschreibung, desto ungewohnter fühlt es sich an – und desto wichtiger ' +
    'ist es, `de` als Scharnier zu erkennen: **Alles vor `de` beschreibt, was nach `de` kommt.**\n\n' +
    '`zài Běijīng gōngzuò de péngyou` – der Freund, der in Peking arbeitet\n' +
    '`nà ge chuān hóng yīfu de rén` – die Person, die rote Kleidung trägt\n\n' +
    '**Wann `de` wegfällt:** bei einsilbigen, geläufigen Adjektiven (`hǎo rén`, `xīn chē`), ' +
    'bei Familienbezügen (`wǒ māma`) und bei festen Fügungen (`Zhōngguó cài`).\n\n' +
    '**Wann `de` bleiben muss:** bei zweisilbigen Adjektiven (`piàoliang de fángzi`), ' +
    'bei Verbalphrasen und immer, wenn davor mehr als ein Wort steht.\n\n' +
    '**Ohne Substantiv:** `Zuótiān mǎi de hěn guì.` – Das gestern Gekaufte war teuer. ' +
    'Ist klar, wovon die Rede ist, endet der Ausdruck einfach bei `de`.',
  examples: [
    { pinyin: 'Zhè shì wǒ zuótiān mǎi de shū.', de: 'Das ist das Buch, das ich gestern gekauft habe.', hanzi: '这是我昨天买的书。' },
    { pinyin: 'Zài Běijīng gōngzuò de péngyou hěn duō.', de: 'Ich habe viele Freunde, die in Peking arbeiten.', hanzi: '在北京工作的朋友很多。' },
    { pinyin: 'Nà ge chuān hóng yīfu de rén shì shéi?', de: 'Wer ist die Person in der roten Kleidung?', hanzi: '那个穿红衣服的人是谁？' },
    { pinyin: 'Wǒ xǐhuan piàoliang de fángzi.', de: 'Ich mag schöne Häuser.', hanzi: '我喜欢漂亮的房子。' },
    { pinyin: 'Zuótiān mǎi de hěn guì.', de: 'Das gestern Gekaufte war teuer.', hanzi: '昨天买的很贵。' },
    { pinyin: 'Tā shì yí ge hěn yǒu jīngyàn de yīshēng.', de: 'Er ist ein sehr erfahrener Arzt.', hanzi: '他是一个很有经验的医生。' }
  ],
  drills: [
    { type: 'sentenceOrder',
      prompt: 'Das ist das Buch, das ich gestern gekauft habe.',
      options: ['shū', 'zhè shì', 'de', 'wǒ zuótiān mǎi'],
      answer: ['zhè shì', 'wǒ zuótiān mǎi', 'de', 'shū'],
      hanzi: '这是我昨天买的书。' },
    { type: 'multipleChoice',
      prompt: 'Wo steht die Beschreibung („das ich gestern gekauft habe“) im Chinesischen?',
      options: [
        'Vor dem Substantiv, mit `de` angeknüpft.',
        'Hinter dem Substantiv, wie im Deutschen.',
        'Am Satzende, abgetrennt durch ein Komma.',
        'Vor dem Subjekt des Hauptsatzes.'
      ],
      answer: 'Vor dem Substantiv, mit `de` angeknüpft.',
      note: 'Alles, was vor `de` steht, beschreibt das Wort dahinter.' },
    { type: 'errorCorrection',
      prompt: 'Zhè shì shū de wǒ zuótiān mǎi.',
      answer: ['Zhè shì wǒ zuótiān mǎi de shū.'],
      note: 'Die Beschreibung gehört vor `de`, das Substantiv dahinter.' },
    { type: 'fillBlank',
      prompt: 'Nà ge chuān hóng yīfu ___ rén shì shéi? (Wer ist die Person in Rot?)',
      answer: ['de'],
      note: '`de` verbindet die Beschreibung mit dem Substantiv.' },
    { type: 'transformation',
      prompt: 'Lasse das Substantiv weg: Zuótiān mǎi de shū hěn guì.',
      answer: ['Zuótiān mǎi de hěn guì.'],
      note: 'Ist klar, wovon die Rede ist, endet der Ausdruck bei `de`.' },
    { type: 'typing',
      prompt: 'Ich habe viele Freunde, die in Peking arbeiten.',
      answer: ['Zài Běijīng gōngzuò de péngyou hěn duō.',
               'Wǒ yǒu hěn duō zài Běijīng gōngzuò de péngyou.'],
      note: 'Die ganze Beschreibung `zài Běijīng gōngzuò` steht vor `de`.' }
  ]
},

{
  id: 'b1-shi-de',
  title: 'Die 是…的-Hervorhebung',
  level: 'B1',
  relatedTopicIds: ['verkehr', 'begruessung'],
  explanation:
    'Wenn feststeht, **dass** etwas geschehen ist, und es nur noch um die **Umstände** ' +
    'geht – wann, wo, wie, mit wem, warum –, benutzt man `shì … de`.\n\n' +
    '`Subjekt + shì + hervorgehobener Teil + Verb + de`\n\n' +
    '`Wǒ shì zuótiān lái de.` – Ich bin **gestern** gekommen.\n' +
    '`Tā shì zuò fēijī lái de.` – Er ist **mit dem Flugzeug** gekommen.\n' +
    '`Nǐ shì zài nǎr xué de Hànyǔ?` – **Wo** hast du Chinesisch gelernt?\n\n' +
    '**Der Unterschied zu `le`:**\n\n' +
    '`Wǒ zuótiān lái le.` – Ich bin gestern gekommen. (Mitteilung: ich bin da)\n' +
    '`Wǒ shì zuótiān lái de.` – Ich bin **gestern** gekommen. (Dass ich kam, ist bekannt; ' +
    'betont wird der Zeitpunkt)\n\n' +
    'Das ist der ganze Zweck: Die Tatsache ist unstrittig, ein Umstand wird ins Licht ' +
    'gerückt. Im Deutschen leistet das die Betonung, im Chinesischen dieser Rahmen.\n\n' +
    '**Nur für Vergangenes.** Für Zukünftiges gibt es diese Konstruktion nicht.\n\n' +
    '**Wo steht `de`?** Am Satzende – bei einem Objekt darf es aber auch davor stehen: ' +
    '`Wǒ shì zài Běijīng xué de Hànyǔ.` = `… xué Hànyǔ de.`\n\n' +
    '**Verneint:** `Wǒ bú shì zuótiān lái de.` – Das `shì` wird verneint, nicht das Verb.\n\n' +
    '`shì` darf im Aussagesatz wegfallen: `Wǒ zuótiān lái de.` – In der Verneinung und ' +
    'in der Frage bleibt es stehen.',
  examples: [
    { pinyin: 'Wǒ shì zuótiān lái de.', de: 'Ich bin gestern gekommen.', hanzi: '我是昨天来的。' },
    { pinyin: 'Tā shì zuò fēijī lái de.', de: 'Er ist mit dem Flugzeug gekommen.', hanzi: '他是坐飞机来的。' },
    { pinyin: 'Nǐ shì zài nǎr xué de Hànyǔ?', de: 'Wo hast du Chinesisch gelernt?', hanzi: '你是在哪儿学的汉语？' },
    { pinyin: 'Wǒ shì hé péngyou yìqǐ qù de.', de: 'Ich bin zusammen mit Freunden hingegangen.', hanzi: '我是和朋友一起去的。' },
    { pinyin: 'Wǒ bú shì zuótiān lái de.', de: 'Ich bin nicht gestern gekommen.', hanzi: '我不是昨天来的。' },
    { pinyin: 'Zhè běn shū shì wǒ māma sòng de.', de: 'Dieses Buch hat mir meine Mutter geschenkt.', hanzi: '这本书是我妈妈送的。' }
  ],
  drills: [
    { type: 'multipleChoice',
      prompt: 'Wann benutzt man `shì … de`?',
      options: [
        'Wenn feststeht, dass etwas geschah, und nur ein Umstand hervorgehoben wird.',
        'Wenn etwas in der Zukunft geschehen wird.',
        'Wenn man besonders höflich sein will.',
        'Wenn das Verb ein Objekt hat.'
      ],
      answer: 'Wenn feststeht, dass etwas geschah, und nur ein Umstand hervorgehoben wird.',
      note: 'Die Tatsache ist bekannt; betont werden Zeit, Ort, Art oder Begleitung.' },
    { type: 'fillBlank',
      prompt: 'Wǒ ___ zuótiān lái ___. (Ich bin GESTERN gekommen.)',
      options: ['shì … de', 'zài … le', 'bǎ … le', 'bèi … de'],
      answer: 'shì … de',
      note: 'Der hervorgehobene Teil steht zwischen `shì` und dem Verb, `de` schließt ab.' },
    { type: 'transformation',
      prompt: 'Hebe den Zeitpunkt hervor: Wǒ zuótiān lái le.',
      answer: ['Wǒ shì zuótiān lái de.', 'Wǒ zuótiān lái de.'],
      note: '`le` weicht dem Rahmen `shì … de`.' },
    { type: 'errorCorrection',
      prompt: 'Wǒ shì zuótiān lái de le.',
      answer: ['Wǒ shì zuótiān lái de.'],
      note: '`shì … de` und `le` schließen einander aus.' },
    { type: 'sentenceOrder',
      prompt: 'Er ist mit dem Flugzeug gekommen.',
      options: ['lái de', 'tā', 'zuò fēijī', 'shì'],
      answer: ['tā', 'shì', 'zuò fēijī', 'lái de'],
      hanzi: '他是坐飞机来的。' },
    { type: 'typing',
      prompt: 'Wo hast du Chinesisch gelernt?',
      answer: ['Nǐ shì zài nǎr xué de Hànyǔ?', 'Nǐ shì zài nǎr xué Hànyǔ de?',
               'Nǐ shì zài nǎli xué de Hànyǔ?', 'Nǐ shì zài nǎr xué de Hànyǔ'],
      note: 'Bei einem Objekt darf `de` vor oder hinter ihm stehen.' }
  ]
},

{
  id: 'b1-serialverb',
  title: 'Serialverbkonstruktionen',
  level: 'B1',
  relatedTopicIds: ['verkehr', 'freizeit'],
  explanation:
    'Chinesisch reiht Verben einfach aneinander – ohne „und“, ohne „um zu“, ohne Komma. ' +
    'Die **Reihenfolge im Satz ist die Reihenfolge in der Wirklichkeit.**\n\n' +
    '`Wǒ qù shāngdiàn mǎi dōngxi.` – Ich gehe in den Laden, um einzukaufen.\n' +
    '(erst gehen, dann kaufen – genau in dieser Folge)\n\n' +
    '`Wǒ zuò chē qù xuéxiào.` – Ich fahre mit dem Bus zur Schule.\n' +
    '(erst einsteigen, dann fahren)\n\n' +
    '**Drei typische Muster:**\n\n' +
    '1. **Zweck:** `Verb1 + Verb2` – das zweite Verb nennt den Zweck des ersten.\n' +
    '`Tā lái wǒ jiā chīfàn.` – Er kommt zu mir zum Essen.\n\n' +
    '2. **Mittel:** `yòng / zuò / qí + Mittel + Verb`\n' +
    '`Wǒ yòng kuàizi chīfàn.` – Ich esse mit Stäbchen.\n' +
    '`Wǒ qí zìxíngchē shàngbān.` – Ich fahre mit dem Rad zur Arbeit.\n\n' +
    '3. **Verb-Objekt-Verb (兼语):** Das Objekt des ersten Verbs ist Subjekt des zweiten.\n' +
    '`Lǎoshī ràng wǒmen duō liànxí.` – Der Lehrer lässt uns viel üben.\n' +
    '`Wǒ qǐng nǐ chīfàn.` – Ich lade dich zum Essen ein.\n\n' +
    '**Die Verneinung steht vor dem ersten Verb**, das die ganze Kette trägt:\n' +
    '`Wǒ bú qù shāngdiàn mǎi dōngxi.`\n\n' +
    '**Der häufigste Fehler** ist, ein deutsches „um zu“ übersetzen zu wollen. Es gibt ' +
    'dafür kein Wort – die bloße Reihenfolge genügt.',
  examples: [
    { pinyin: 'Wǒ qù shāngdiàn mǎi dōngxi.', de: 'Ich gehe in den Laden, um einzukaufen.', hanzi: '我去商店买东西。' },
    { pinyin: 'Wǒ zuò chē qù xuéxiào.', de: 'Ich fahre mit dem Bus zur Schule.', hanzi: '我坐车去学校。' },
    { pinyin: 'Wǒ yòng kuàizi chīfàn.', de: 'Ich esse mit Stäbchen.', hanzi: '我用筷子吃饭。' },
    { pinyin: 'Lǎoshī ràng wǒmen duō liànxí.', de: 'Der Lehrer lässt uns viel üben.', hanzi: '老师让我们多练习。' },
    { pinyin: 'Wǒ qǐng nǐ chīfàn.', de: 'Ich lade dich zum Essen ein.', hanzi: '我请你吃饭。' },
    { pinyin: 'Tā qí zìxíngchē qù shàngbān.', de: 'Er fährt mit dem Rad zur Arbeit.', hanzi: '他骑自行车去上班。' }
  ],
  drills: [
    { type: 'multipleChoice',
      prompt: 'Wie übersetzt man „um zu“ ins Chinesische?',
      options: [
        'Gar nicht – die Reihenfolge der Verben genügt.',
        'Mit `wèile` vor dem zweiten Verb, immer.',
        'Mit `de` zwischen den Verben.',
        'Mit `jiù` vor dem zweiten Verb.'
      ],
      answer: 'Gar nicht – die Reihenfolge der Verben genügt.',
      note: 'Verben werden schlicht aneinandergereiht; die Abfolge trägt den Zweck.' },
    { type: 'sentenceOrder',
      prompt: 'Ich gehe in den Laden, um einzukaufen.',
      options: ['mǎi dōngxi', 'wǒ', 'shāngdiàn', 'qù'],
      answer: ['wǒ', 'qù', 'shāngdiàn', 'mǎi dōngxi'],
      hanzi: '我去商店买东西。' },
    { type: 'errorCorrection',
      prompt: 'Wǒ mǎi dōngxi qù shāngdiàn.',
      answer: ['Wǒ qù shāngdiàn mǎi dōngxi.'],
      note: 'Die Reihenfolge im Satz muss der Reihenfolge in der Wirklichkeit entsprechen.' },
    { type: 'fillBlank',
      prompt: 'Wǒ ___ kuàizi chīfàn. (Ich esse mit Stäbchen.)',
      options: ['yòng', 'zuò', 'qí', 'gěi'],
      answer: 'yòng',
      note: '`yòng` nennt das Werkzeug und steht vor dem Hauptverb.' },
    { type: 'transformation',
      prompt: 'Verneine: Wǒ qù shāngdiàn mǎi dōngxi.',
      answer: ['Wǒ bú qù shāngdiàn mǎi dōngxi.', 'Wǒ bù qù shāngdiàn mǎi dōngxi.'],
      note: 'Die Verneinung steht vor dem ersten Verb der Kette.' },
    { type: 'typing',
      prompt: 'Der Lehrer lässt uns viel üben.',
      answer: ['Lǎoshī ràng wǒmen duō liànxí.'],
      note: '`wǒmen` ist Objekt von `ràng` und zugleich Subjekt von `liànxí`.' }
  ]
}

]);
