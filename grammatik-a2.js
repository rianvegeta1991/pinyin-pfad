/* Pinyin-Trainer – Grammatik A2 */
GrammatikDaten.add([

{
  id: 'a2-le-verb',
  title: 'Aspektpartikel 了: abgeschlossene Handlung',
  level: 'A2',
  relatedTopicIds: ['zahlen', 'einkaufen'],
  explanation:
    '`le` ist **keine Vergangenheitsform**. Das ist der entscheidende Punkt, und wer ihn ' +
    'überliest, setzt `le` jahrelang an falsche Stellen.\n\n' +
    '`le` sagt: **diese Handlung ist abgeschlossen** – abgehakt, zu Ende gebracht. Das ' +
    'passiert meistens in der Vergangenheit, aber eben nicht immer.\n\n' +
    '`Verb + le (+ Objekt)`\n\n' +
    '`Wǒ chī le fàn.` – Ich habe gegessen.\n' +
    '`Tā mǎi le yí jiàn yīfu.` – Sie hat ein Kleidungsstück gekauft.\n\n' +
    '**Auch in der Zukunft:** `Wǒ chī le fàn jiù qù.` – Wenn ich gegessen habe, gehe ich. ' +
    'Hier liegt nichts in der Vergangenheit; `le` markiert nur, dass das Essen vor dem ' +
    'Gehen abgeschlossen sein wird.\n\n' +
    '**Wann `le` gerade nicht steht:**\n\n' +
    '- bei Gewohnheiten: `Wǒ měi tiān hē kāfēi.` (kein `le`)\n' +
    '- bei Zuständen und Gefühlen: `Wǒ xǐhuan tā.` (kein `le`)\n' +
    '- **nach `méi`**: `Wǒ méi chī.` – niemals `méi chī le`\n\n' +
    '**Frage:** `Nǐ chī le ma?` oder `Nǐ chī le méiyǒu?` – beides: Hast du gegessen?\n\n' +
    'Ein bloßes `Wǒ chī le` klingt oft unfertig – erwartet wird eine Ergänzung: eine Menge ' +
    '(`chī le liǎng wǎn`), ein Objekt (`chī le fàn`) oder ein Folgesatz.',
  examples: [
    { pinyin: 'Wǒ chī le fàn.', de: 'Ich habe gegessen.', hanzi: '我吃了饭。' },
    { pinyin: 'Tā mǎi le yí jiàn yīfu.', de: 'Sie hat ein Kleidungsstück gekauft.', hanzi: '她买了一件衣服。' },
    { pinyin: 'Wǒ zuótiān kàn le yí ge diànyǐng.', de: 'Ich habe gestern einen Film gesehen.', hanzi: '我昨天看了一个电影。' },
    { pinyin: 'Wǒ méi chī fàn.', de: 'Ich habe nicht gegessen.', hanzi: '我没吃饭。' },
    { pinyin: 'Nǐ chī le méiyǒu?', de: 'Hast du gegessen?', hanzi: '你吃了没有？' },
    { pinyin: 'Wǒ xià le kè jiù huí jiā.', de: 'Nach dem Unterricht gehe ich gleich heim.', hanzi: '我下了课就回家。' }
  ],
  drills: [
    { type: 'fillBlank',
      prompt: 'Wǒ zuótiān mǎi ___ yì běn shū. (Ich habe gestern ein Buch gekauft.)',
      answer: ['le'],
      note: '`le` steht direkt hinter dem Verb und markiert den Abschluss.' },
    { type: 'errorCorrection',
      prompt: 'Wǒ méi chī le fàn.',
      de: 'Ich habe nicht gegessen.',
      answer: ['Wǒ méi chī fàn.'],
      note: 'Nach `méi` fällt `le` immer weg.' },
    { type: 'multipleChoice',
      prompt: 'Was drückt `le` hinter dem Verb aus?',
      options: [
        'Dass die Handlung abgeschlossen ist – nicht zwingend, dass sie in der Vergangenheit liegt.',
        'Dass die Handlung in der Vergangenheit liegt.',
        'Dass die Handlung gerade abläuft.',
        'Dass die Handlung regelmäßig stattfindet.'
      ],
      answer: 'Dass die Handlung abgeschlossen ist – nicht zwingend, dass sie in der Vergangenheit liegt.',
      note: '`le` ist ein Aspekt, kein Tempus: es geht um „fertig“, nicht um „wann“.' },
    { type: 'transformation',
      prompt: 'Verneine: Tā mǎi le yí jiàn yīfu.',
      de: 'Sie hat ein Kleidungsstück gekauft.',
      answer: ['Tā méi mǎi yīfu.', 'Tā méi mǎi yí jiàn yīfu.'],
      note: '`méi` tritt vor das Verb, `le` verschwindet.' },
    { type: 'sentenceOrder',
      prompt: 'Ich habe gestern einen Film gesehen.',
      options: ['yí ge diànyǐng', 'wǒ', 'kàn le', 'zuótiān'],
      answer: ['wǒ', 'zuótiān', 'kàn le', 'yí ge diànyǐng'],
      hanzi: '我昨天看了一个电影。' },
    { type: 'typing',
      prompt: 'Hast du gegessen?',
      answer: ['Nǐ chī le ma?', 'Nǐ chī le méiyǒu?', 'Nǐ chī fàn le ma?', 'Nǐ chī le ma'],
      note: 'Beide Fragefomen sind üblich: mit `ma` oder mit `méiyǒu` am Ende.' }
  ]
},

{
  id: 'a2-guo',
  title: 'Aspektpartikel 过: die Erfahrung',
  level: 'A2',
  relatedTopicIds: ['verkehr', 'freizeit'],
  explanation:
    '`guo` beantwortet eine ganz bestimmte Frage: **Hast du das schon einmal gemacht?**\n\n' +
    'Es geht nicht darum, wann etwas geschah, sondern darum, dass es in der Lebenserfahrung ' +
    'vorkommt – wie das deutsche „schon mal“.\n\n' +
    '`Verb + guo`\n\n' +
    '`Wǒ qù guo Zhōngguó.` – Ich war schon mal in China.\n' +
    '`Nǐ chī guo jiǎozi ma?` – Hast du schon mal Teigtaschen gegessen?\n\n' +
    '**Der Unterschied zu `le`:**\n\n' +
    '`Wǒ qù le Zhōngguó.` – Ich bin nach China gefahren. (eine bestimmte Reise, vielleicht ' +
    'bin ich noch dort)\n' +
    '`Wǒ qù guo Zhōngguó.` – Ich war schon mal in China. (Erfahrung, ich bin zurück)\n\n' +
    '**Verneinung mit `méi`, und `guo` bleibt stehen** – anders als bei `le`:\n' +
    '`Wǒ méi qù guo Zhōngguó.` – Ich war noch nie in China.\n\n' +
    'Das ist der auffälligste Unterschied: `méi chī le` ist falsch, `méi chī guo` richtig.\n\n' +
    'Die Häufigkeit hängt man mit `cì` an: `Wǒ qù guo sān cì.` – Ich war dreimal dort.\n\n' +
    'Verstärken lässt sich das Ganze mit `cónglái méi ... guo` – „noch nie im Leben“.',
  examples: [
    { pinyin: 'Wǒ qù guo Zhōngguó.', de: 'Ich war schon mal in China.', hanzi: '我去过中国。' },
    { pinyin: 'Nǐ chī guo jiǎozi ma?', de: 'Hast du schon mal Teigtaschen gegessen?', hanzi: '你吃过饺子吗？' },
    { pinyin: 'Wǒ méi kàn guo zhè ge diànyǐng.', de: 'Diesen Film habe ich noch nie gesehen.', hanzi: '我没看过这个电影。' },
    { pinyin: 'Tā xué guo sān nián Hànyǔ.', de: 'Er hat drei Jahre lang Chinesisch gelernt.', hanzi: '他学过三年汉语。' },
    { pinyin: 'Wǒ qù guo sān cì Běijīng.', de: 'Ich war dreimal in Peking.', hanzi: '我去过三次北京。' },
    { pinyin: 'Wǒ cónglái méi zuò guo fēijī.', de: 'Ich bin noch nie geflogen.', hanzi: '我从来没坐过飞机。' }
  ],
  drills: [
    { type: 'fillBlank',
      prompt: 'Nǐ chī ___ jiǎozi ma? (Hast du schon mal Teigtaschen gegessen?)',
      options: ['guo', 'le', 'zài', 'zhe'],
      answer: 'guo',
      note: '`guo` fragt nach der Erfahrung: „schon mal“.' },
    { type: 'errorCorrection',
      prompt: 'Wǒ méi qù Zhōngguó guo le.',
      de: 'Ich war noch nie in China.',
      answer: ['Wǒ méi qù guo Zhōngguó.'],
      note: '`guo` steht direkt hinter dem Verb, und nach `méi` fällt `le` weg.' },
    { type: 'multipleChoice',
      prompt: 'Welcher Satz heißt „Ich war schon mal in China“?',
      options: [
        'Wǒ qù guo Zhōngguó.',
        'Wǒ qù le Zhōngguó.',
        'Wǒ zài qù Zhōngguó.',
        'Wǒ qù Zhōngguó le.'
      ],
      answer: 'Wǒ qù guo Zhōngguó.',
      note: '`le` bezeichnet eine bestimmte abgeschlossene Reise, `guo` die Erfahrung an sich.' },
    { type: 'transformation',
      prompt: 'Verneine: Wǒ kàn guo zhè ge diànyǐng.',
      de: 'Ich habe diesen Film schon mal gesehen.',
      answer: ['Wǒ méi kàn guo zhè ge diànyǐng.', 'Wǒ méiyǒu kàn guo zhè ge diànyǐng.'],
      note: 'Anders als bei `le` bleibt `guo` in der Verneinung stehen.' },
    { type: 'sentenceOrder',
      prompt: 'Ich bin noch nie geflogen.',
      options: ['fēijī', 'wǒ', 'zuò guo', 'cónglái méi'],
      answer: ['wǒ', 'cónglái méi', 'zuò guo', 'fēijī'],
      hanzi: '我从来没坐过飞机。' },
    { type: 'typing',
      prompt: 'Ich war dreimal in Peking.',
      answer: ['Wǒ qù guo sān cì Běijīng.', 'Wǒ qù guo Běijīng sān cì.'],
      note: 'Die Häufigkeit steht mit `cì` hinter dem Verb.' }
  ]
},

{
  id: 'a2-zai-verlauf',
  title: 'Verlaufsform mit 在 / 正在',
  level: 'A2',
  relatedTopicIds: ['arbeit', 'freizeit'],
  explanation:
    'Um zu sagen, dass etwas **gerade** abläuft, stellt man `zài` vor das Verb:\n\n' +
    '`Subjekt + zài + Verb`\n\n' +
    '`Wǒ zài chīfàn.` – Ich esse gerade.\n' +
    '`Tā zài kàn shū.` – Er liest gerade.\n\n' +
    '**Drei Stufen der Betonung:**\n\n' +
    '- `zài` – neutral: „gerade“\n' +
    '- `zhèngzài` – nachdrücklich: „genau in diesem Moment“\n' +
    '- `ne` am Satzende – umgangssprachlich, oft zusätzlich: `Tā zài kàn shū ne.` (Er liest gerade.)\n\n' +
    '**Verwechslungsgefahr:** Dasselbe `zài` bedeutet auch „sich befinden in“ ' +
    '(Lektion A1). Unterscheiden lässt sich das an dem, was folgt:\n\n' +
    '`Wǒ zài jiā.` – Ich bin zu Hause. (danach ein **Ort**)\n' +
    '`Wǒ zài chīfàn.` – Ich esse gerade. (danach ein **Verb**)\n' +
    '`Wǒ zài jiā chīfàn.` – Ich esse zu Hause. (Ort **und** Verb – hier ist `zài` ' +
    'wieder Präposition)\n\n' +
    '**Verneint** wird mit `méi(yǒu)`: `Wǒ méi zài kàn diànshì.` – Ich sehe gerade nicht fern.\n\n' +
    '**Nicht verwechseln mit `zhe`:** `zài` beschreibt eine laufende **Handlung**, ' +
    '`zhe` einen andauernden **Zustand** (`Mén kāi zhe.` – Die Tür steht offen).',
  examples: [
    { pinyin: 'Wǒ zài chīfàn.', de: 'Ich esse gerade.', hanzi: '我在吃饭。' },
    { pinyin: 'Tā zhèngzài kāihuì.', de: 'Er ist gerade in einer Besprechung.', hanzi: '他正在开会。' },
    { pinyin: 'Háizi zài wánr ne.', de: 'Die Kinder spielen gerade.', hanzi: '孩子在玩儿呢。' },
    { pinyin: 'Nǐ zài zuò shénme?', de: 'Was machst du gerade?', hanzi: '你在做什么？' },
    { pinyin: 'Wǒ méi zài kàn diànshì.', de: 'Ich sehe gerade nicht fern.', hanzi: '我没在看电视。' },
    { pinyin: 'Wǒ zài jiā chīfàn.', de: 'Ich esse zu Hause.', hanzi: '我在家吃饭。' }
  ],
  drills: [
    { type: 'fillBlank',
      prompt: 'Wǒ ___ chīfàn. (Ich esse gerade.)',
      options: ['zài', 'le', 'guo', 'yào'],
      answer: 'zài',
      note: '`zài` vor dem Verb macht die Verlaufsform.' },
    { type: 'multipleChoice',
      prompt: 'Was unterscheidet `Wǒ zài jiā` von `Wǒ zài chīfàn`?',
      options: [
        'Nach `zài` folgt einmal ein Ort (befinden), einmal ein Verb (Verlauf).',
        'Der erste Satz ist Vergangenheit, der zweite Gegenwart.',
        'Der zweite Satz ist höflicher.',
        'Es gibt keinen Unterschied.'
      ],
      answer: 'Nach `zài` folgt einmal ein Ort (befinden), einmal ein Verb (Verlauf).',
      note: 'Ort danach = „sich befinden“; Verb danach = „gerade dabei sein“.' },
    { type: 'transformation',
      prompt: 'Verneine: Wǒ zài kàn diànshì.',
      de: 'Ich sehe gerade fern.',
      answer: ['Wǒ méi zài kàn diànshì.', 'Wǒ méiyǒu zài kàn diànshì.'],
      note: 'Die Verlaufsform wird mit `méi(yǒu)` verneint, nicht mit `bù`.' },
    { type: 'sentenceOrder',
      prompt: 'Er ist gerade in einer Besprechung.',
      options: ['kāihuì', 'tā', 'zhèngzài'],
      answer: ['tā', 'zhèngzài', 'kāihuì'],
      hanzi: '他正在开会。' },
    { type: 'errorCorrection',
      prompt: 'Wǒ bù zài kàn diànshì.',
      de: 'Ich sehe gerade nicht fern.',
      answer: ['Wǒ méi zài kàn diànshì.', 'Wǒ méiyǒu zài kàn diànshì.'],
      note: 'Laufende Handlungen verneint `méi`, nicht `bù`.' },
    { type: 'typing',
      prompt: 'Was machst du gerade?',
      answer: ['Nǐ zài zuò shénme?', 'Nǐ zhèngzài zuò shénme?', 'Nǐ zài zuò shénme'],
      note: '`zài` + `zuò shénme` – das Fragewort bleibt an der Objektstelle.' }
  ]
},

{
  id: 'a2-modalverben',
  title: 'Modalverben: 想 要 能 可以 应该',
  level: 'A2',
  relatedTopicIds: ['arbeit', 'freizeit'],
  explanation:
    'Modalverben stehen **vor dem Hauptverb** und werden alle mit `bù` verneint.\n\n' +
    '`xiǎng` – möchte, hätte Lust. Der weiche Wunsch.\n' +
    '`Wǒ xiǎng qù Zhōngguó.` – Ich möchte nach China.\n\n' +
    '`yào` – will, werde. Entschlossener als `xiǎng`, oft mit festem Vorsatz.\n' +
    '`Wǒ yào qù Zhōngguó.` – Ich werde nach China fahren.\n' +
    'Verneint wird `yào` **nicht** mit `bù yào` (das heißt „tu das nicht!“), sondern mit ' +
    '`bù xiǎng`.\n\n' +
    '`néng` – können im Sinne von **möglich sein**: Umstände erlauben es.\n' +
    '`Wǒ jīntiān bù néng lái.` – Ich kann heute nicht kommen.\n\n' +
    '`kěyǐ` – dürfen, erlaubt sein.\n' +
    '`Wǒ kěyǐ jìnlái ma?` – Darf ich hereinkommen?\n\n' +
    '`huì` – können im Sinne von **gelernt haben** (A1) und außerdem „werden“ für ' +
    'Vorhersagen: `Míngtiān huì xià yǔ.` (Morgen wird es regnen.)\n\n' +
    '`yīnggāi` – sollen, sich gehören.\n' +
    '`Nǐ yīnggāi duō xiūxi.` – Du solltest dich mehr ausruhen.\n\n' +
    '**Der klassische Stolperstein:** `huì` und `néng` heißen beide „können“. ' +
    '`Wǒ huì yóuyǒng` heißt „Ich kann schwimmen (habe es gelernt)“. ' +
    '`Wǒ bù néng yóuyǒng` heißt „Ich kann heute nicht schwimmen (erkältet, kein Becken frei)“.',
  examples: [
    { pinyin: 'Wǒ xiǎng qù Zhōngguó.', de: 'Ich möchte nach China.', hanzi: '我想去中国。' },
    { pinyin: 'Wǒ yào mǎi yí ge shǒujī.', de: 'Ich will ein Handy kaufen.', hanzi: '我要买一个手机。' },
    { pinyin: 'Wǒ jīntiān bù néng lái.', de: 'Ich kann heute nicht kommen.', hanzi: '我今天不能来。' },
    { pinyin: 'Wǒ kěyǐ jìnlái ma?', de: 'Darf ich hereinkommen?', hanzi: '我可以进来吗？' },
    { pinyin: 'Nǐ yīnggāi duō xiūxi.', de: 'Du solltest dich mehr ausruhen.', hanzi: '你应该多休息。' },
    { pinyin: 'Wǒ huì shuō yìdiǎnr Hànyǔ.', de: 'Ich kann ein bisschen Chinesisch.', hanzi: '我会说一点儿汉语。' }
  ],
  drills: [
    { type: 'multipleChoice',
      prompt: 'Welches Modalverb passt zu „Ich kann schwimmen (habe es gelernt)“?',
      options: ['huì', 'néng', 'kěyǐ', 'yīnggāi'],
      answer: 'huì',
      note: '`huì` = erlernte Fähigkeit; `néng` = Umstände erlauben es.' },
    { type: 'fillBlank',
      prompt: 'Wǒ jīntiān bù ___ lái. (Ich kann heute nicht kommen.)',
      options: ['néng', 'huì', 'xiǎng', 'yīnggāi'],
      answer: 'néng',
      note: 'Hier verhindern äußere Umstände das Kommen – das ist `néng`.' },
    { type: 'errorCorrection',
      prompt: 'Wǒ bù yào qù, wǒ hěn lèi.',
      de: 'Ich möchte nicht gehen, ich bin müde.',
      answer: ['Wǒ bù xiǎng qù, wǒ hěn lèi.'],
      note: '`bù yào` heißt „tu das nicht!“. Den eigenen Unwillen drückt `bù xiǎng` aus.' },
    { type: 'sentenceOrder',
      prompt: 'Du solltest dich mehr ausruhen.',
      options: ['xiūxi', 'nǐ', 'duō', 'yīnggāi'],
      answer: ['nǐ', 'yīnggāi', 'duō', 'xiūxi'],
      hanzi: '你应该多休息。' },
    { type: 'transformation',
      prompt: 'Mache eine Erlaubnisfrage daraus: Wǒ jìnlái.',
      de: 'Ich komme herein.',
      answer: ['Wǒ kěyǐ jìnlái ma?', 'Wǒ kěyǐ jìnlái ma'],
      note: '`kěyǐ` fragt nach Erlaubnis, `ma` macht die Frage.' },
    { type: 'typing',
      prompt: 'Ich möchte nach China fahren.',
      answer: ['Wǒ xiǎng qù Zhōngguó.'],
      note: '`xiǎng` steht vor dem Hauptverb `qù`.' }
  ]
},

{
  id: 'a2-bi',
  title: 'Vergleichen mit 比',
  level: 'A2',
  relatedTopicIds: ['farben', 'verkehr'],
  explanation:
    'Der Vergleich läuft über `bǐ`, und das Muster ist streng:\n\n' +
    '`A + bǐ + B + Adjektiv`\n\n' +
    '`Wǒ bǐ tā gāo.` – Ich bin größer als er.\n\n' +
    '**Die wichtigste Regel: kein `hěn`.** `Wǒ bǐ tā hěn gāo` ist falsch. Der Vergleich ' +
    'selbst liefert schon den Maßstab, ein Füllwort wäre überflüssig – und `hěn` würde ' +
    'zudem seine eigene Bedeutung mitbringen.\n\n' +
    '**Den Abstand angeben** – die Angabe steht **hinter** dem Adjektiv:\n' +
    '`Wǒ bǐ tā gāo yìdiǎnr.` – Ich bin etwas größer als er.\n' +
    '`Wǒ bǐ tā gāo hěn duō.` – Ich bin viel größer als er.\n' +
    '`Wǒ bǐ tā dà sān suì.` – Ich bin drei Jahre älter als er.\n\n' +
    '**Verneinung:** `A méiyǒu B + Adjektiv` – „A ist nicht so … wie B“:\n' +
    '`Wǒ méiyǒu tā gāo.` – Ich bin nicht so groß wie er.\n' +
    '`bù bǐ` gibt es zwar, heißt aber „nicht unbedingt mehr als“ und ist seltener.\n\n' +
    '**Gleichheit:** `A gēn B yíyàng + Adjektiv`\n' +
    '`Wǒ gēn tā yíyàng gāo.` – Ich bin genauso groß wie er.',
  examples: [
    { pinyin: 'Wǒ bǐ tā gāo.', de: 'Ich bin größer als er.', hanzi: '我比他高。' },
    { pinyin: 'Zuò dìtiě bǐ kāichē kuài.', de: 'Mit der U-Bahn ist es schneller als mit dem Auto.', hanzi: '坐地铁比开车快。' },
    { pinyin: 'Jīntiān bǐ zuótiān lěng yìdiǎnr.', de: 'Heute ist es etwas kälter als gestern.', hanzi: '今天比昨天冷一点儿。' },
    { pinyin: 'Wǒ bǐ tā dà sān suì.', de: 'Ich bin drei Jahre älter als er.', hanzi: '我比他大三岁。' },
    { pinyin: 'Wǒ méiyǒu tā gāo.', de: 'Ich bin nicht so groß wie er.', hanzi: '我没有他高。' },
    { pinyin: 'Wǒ gēn tā yíyàng gāo.', de: 'Ich bin genauso groß wie er.', hanzi: '我跟他一样高。' }
  ],
  drills: [
    { type: 'errorCorrection',
      prompt: 'Wǒ bǐ tā hěn gāo.',
      de: 'Ich bin größer als er.',
      answer: ['Wǒ bǐ tā gāo.'],
      note: 'Im `bǐ`-Satz steht nie `hěn` vor dem Adjektiv.' },
    { type: 'fillBlank',
      prompt: 'Jīntiān ___ zuótiān lěng. (Heute ist es kälter als gestern.)',
      options: ['bǐ', 'gēn', 'méiyǒu', 'hé'],
      answer: 'bǐ',
      note: '`bǐ` steht zwischen den beiden Verglichenen.' },
    { type: 'multipleChoice',
      prompt: 'Wie sagt man „Ich bin nicht so groß wie er“?',
      options: [
        'Wǒ méiyǒu tā gāo.',
        'Wǒ bù bǐ tā hěn gāo.',
        'Wǒ bǐ tā bù gāo.',
        'Wǒ gēn tā bù yíyàng.'
      ],
      answer: 'Wǒ méiyǒu tā gāo.',
      note: 'Die übliche Verneinung des Vergleichs lautet `A méiyǒu B + Adjektiv`.' },
    { type: 'transformation',
      prompt: 'Drücke Gleichheit aus: Wǒ bǐ tā gāo.',
      de: 'Ich bin größer als er.',
      answer: ['Wǒ gēn tā yíyàng gāo.', 'Wǒ hé tā yíyàng gāo.'],
      note: '`gēn ... yíyàng` heißt „genauso … wie“.' },
    { type: 'sentenceOrder',
      prompt: 'Ich bin drei Jahre älter als er.',
      options: ['dà', 'wǒ', 'sān suì', 'bǐ tā'],
      answer: ['wǒ', 'bǐ tā', 'dà', 'sān suì'],
      hanzi: '我比他大三岁。' },
    { type: 'typing',
      prompt: 'Mit der U-Bahn ist es schneller als mit dem Auto.',
      answer: ['Zuò dìtiě bǐ kāichē kuài.'],
      note: 'A = `zuò dìtiě`, B = `kāichē`, Adjektiv = `kuài` – ohne `hěn`.' }
  ]
},

{
  id: 'a2-richtung',
  title: 'Richtungskomplemente mit 来 und 去',
  level: 'A2',
  relatedTopicIds: ['richtungen', 'verkehr'],
  explanation:
    'An ein Bewegungsverb kann man `lái` oder `qù` anhängen, um die Richtung **relativ zum ' +
    'Sprecher** anzugeben:\n\n' +
    '`lái` – hierher, zum Sprecher hin\n' +
    '`qù` – dorthin, vom Sprecher weg\n\n' +
    '`Tā jìnlái le.` – Er ist hereingekommen (ich bin drinnen).\n' +
    '`Tā jìnqù le.` – Er ist hineingegangen (ich bin draußen).\n\n' +
    'Dasselbe Geschehen, zwei Standpunkte. Im Deutschen steckt der Unterschied in ' +
    '„her-“ und „hin-“ – genau dieselbe Logik.\n\n' +
    '**Die gängigen Paare:**\n\n' +
    '`shànglái / shàngqù` (herauf / hinauf) · `xiàlái / xiàqù` (herunter / hinunter) · ' +
    '`jìnlái / jìnqù` (herein / hinein) · `chūlái / chūqù` (heraus / hinaus) · ' +
    '`huílái / huíqù` (zurück her / zurück hin) · `guòlái / guòqù` (herüber / hinüber)\n\n' +
    '**Wo steht das Objekt?** Bei einem Ort **zwischen** Verb und `lái`/`qù`:\n' +
    '`Tā huí jiā qù le.` – Er ist nach Hause gegangen. (nicht `huíqù jiā`)\n\n' +
    'Bei einem Gegenstand ist beides möglich: `Tā ná chūlái yì běn shū.` oder ' +
    '`Tā ná chū yì běn shū lái.` – beides: Er holte ein Buch heraus.',
  examples: [
    { pinyin: 'Qǐng jìnlái.', de: 'Kommen Sie bitte herein.', hanzi: '请进来。' },
    { pinyin: 'Tā jìnqù le.', de: 'Er ist hineingegangen.', hanzi: '他进去了。' },
    { pinyin: 'Wǒ huí jiā qù le.', de: 'Ich bin nach Hause gegangen.', hanzi: '我回家去了。' },
    { pinyin: 'Nǐ shàng lóu lái ba.', de: 'Komm doch herauf.', hanzi: '你上楼来吧。' },
    { pinyin: 'Tā ná chūlái yì běn shū.', de: 'Er holte ein Buch heraus.', hanzi: '他拿出来一本书。' },
    { pinyin: 'Wǒ míngtiān huílái.', de: 'Ich komme morgen zurück.', hanzi: '我明天回来。' }
  ],
  drills: [
    { type: 'fillBlank',
      prompt: 'Qǐng jìn___. (Kommen Sie bitte herein – ich bin drinnen.)',
      options: ['lái', 'qù', 'le', 'zài'],
      answer: 'lái',
      note: 'Die Bewegung geht auf den Sprecher zu: `lái`.' },
    { type: 'multipleChoice',
      prompt: 'Du stehst draußen und siehst jemanden ins Haus gehen. Was sagst du?',
      options: ['Tā jìnqù le.', 'Tā jìnlái le.', 'Tā chūlái le.', 'Tā huílái le.'],
      answer: 'Tā jìnqù le.',
      note: 'Vom Sprecher weg: `qù`. Die vier Sätze heißen: `jìnqù` hineingehen · ' +
            '`jìnlái` hereinkommen · `chūlái` herauskommen · `huílái` zurückkommen.' },
    { type: 'errorCorrection',
      prompt: 'Tā huíqù jiā le.',
      de: 'Er ist nach Hause gegangen.',
      answer: ['Tā huí jiā qù le.'],
      note: 'Eine Ortsangabe steht zwischen Verb und `lái`/`qù`.' },
    { type: 'sentenceOrder',
      prompt: 'Ich bin nach Hause gegangen.',
      options: ['qù le', 'wǒ', 'jiā', 'huí'],
      answer: ['wǒ', 'huí', 'jiā', 'qù le'],
      hanzi: '我回家去了。' },
    { type: 'transformation',
      prompt: 'Ändere den Standpunkt (der Sprecher ist jetzt drinnen): Tā jìnqù le.',
      de: 'Er ist hineingegangen.',
      answer: ['Tā jìnlái le.'],
      note: '`qù` wird zu `lái`, wenn die Bewegung auf den Sprecher zuläuft.' },
    { type: 'typing',
      prompt: 'Ich komme morgen zurück.',
      answer: ['Wǒ míngtiān huílái.', 'Wǒ míngtiān huí lái.'],
      note: '`huílái` – zurück zum Sprecher.' }
  ]
},

{
  id: 'a2-ergebnis',
  title: 'Ergebniskomplemente: Grundlagen',
  level: 'A2',
  relatedTopicIds: ['schule', 'essen'],
  explanation:
    'Im Chinesischen sagt ein Verb allein oft nur, **dass** etwas versucht wurde – nicht, ' +
    'dass es geklappt hat. Das Ergebnis hängt man als zweite Silbe an:\n\n' +
    '`Verb + Ergebnis`\n\n' +
    '`Wǒ kàn shū.` – Ich lese ein Buch.\n' +
    '`Wǒ kàn wán le.` – Ich habe es zu Ende gelesen.\n' +
    '`Wǒ kàn dǒng le.` – Ich habe es verstanden.\n\n' +
    '**Die wichtigsten Ergebnissilben:**\n\n' +
    '`wán` – fertig, zu Ende (`chī wán` aufgegessen)\n' +
    '`dǒng` – verstanden (`tīng dǒng` verstanden beim Hören)\n' +
    '`dào` – erreicht, erlangt (`mǎi dào` erfolgreich gekauft, `zhǎo dào` gefunden)\n' +
    '`jiàn` – wahrgenommen (`kàn jiàn` gesehen, `tīng jiàn` gehört)\n' +
    '`hǎo` – gut zu Ende gebracht (`zuò hǎo` fertiggestellt)\n' +
    '`cuò` – falsch (`shuō cuò` sich versprochen)\n' +
    '`zháo` – erfolgreich (`shuì zháo` eingeschlafen)\n\n' +
    '**Feiner Unterschied, der oft übersehen wird:** `kàn` heißt „schauen“, `kàn jiàn` ' +
    'heißt „sehen“. `tīng` heißt „zuhören“, `tīng jiàn` heißt „hören“. Das eine ist die ' +
    'Absicht, das andere das Ergebnis.\n\n' +
    '**Verneint** wird mit `méi`, und dann fällt `le` weg:\n' +
    '`Wǒ méi kàn wán.` – Ich habe es nicht zu Ende gelesen.',
  examples: [
    { pinyin: 'Wǒ kàn wán le.', de: 'Ich habe es zu Ende gelesen.', hanzi: '我看完了。' },
    { pinyin: 'Wǒ tīng dǒng le.', de: 'Ich habe es verstanden.', hanzi: '我听懂了。' },
    { pinyin: 'Wǒ méi zhǎo dào wǒ de yàoshi.', de: 'Ich habe meinen Schlüssel nicht gefunden.', hanzi: '我没找到我的钥匙。' },
    { pinyin: 'Nǐ kàn jiàn tā le ma?', de: 'Hast du ihn gesehen?', hanzi: '你看见他了吗？' },
    { pinyin: 'Wǒ shuō cuò le.', de: 'Ich habe mich versprochen.', hanzi: '我说错了。' },
    { pinyin: 'Zuòyè wǒ hái méi zuò wán.', de: 'Die Hausaufgaben bin ich noch nicht fertig.', hanzi: '作业我还没做完。' }
  ],
  drills: [
    { type: 'fillBlank',
      prompt: 'Wǒ kàn ___ le, zhè běn shū hěn hǎo. (Ich habe es zu Ende gelesen.)',
      options: ['wán', 'dǒng', 'jiàn', 'cuò'],
      answer: 'wán',
      note: '`wán` bedeutet „fertig, zu Ende“.' },
    { type: 'multipleChoice',
      prompt: 'Was unterscheidet `tīng` von `tīng dǒng`?',
      options: [
        '`tīng` ist die Absicht (zuhören), `tīng dǒng` das Ergebnis (verstanden haben).',
        '`tīng dǒng` ist höflicher.',
        '`tīng dǒng` ist die Vergangenheitsform von `tīng`.',
        'Es gibt keinen Unterschied.'
      ],
      answer: '`tīng` ist die Absicht (zuhören), `tīng dǒng` das Ergebnis (verstanden haben).',
      note: 'Das Ergebniskomplement sagt, ob die Handlung ihr Ziel erreicht hat.' },
    { type: 'errorCorrection',
      prompt: 'Wǒ méi zhǎo dào le wǒ de yàoshi.',
      de: 'Ich habe meinen Schlüssel nicht gefunden.',
      answer: ['Wǒ méi zhǎo dào wǒ de yàoshi.'],
      note: 'Nach `méi` fällt `le` weg, das Ergebniskomplement bleibt.' },
    { type: 'transformation',
      prompt: 'Verneine: Wǒ zuò wán le zuòyè.',
      de: 'Ich habe die Hausaufgaben fertig gemacht.',
      answer: ['Wǒ méi zuò wán zuòyè.', 'Wǒ hái méi zuò wán zuòyè.'],
      note: '`méi` vor das Verb, `le` streichen.' },
    { type: 'sentenceOrder',
      prompt: 'Hast du ihn gesehen?',
      options: ['le ma', 'nǐ', 'tā', 'kàn jiàn'],
      answer: ['nǐ', 'kàn jiàn', 'tā', 'le ma'],
      hanzi: '你看见他了吗？' },
    { type: 'typing',
      prompt: 'Ich habe mich versprochen.',
      answer: ['Wǒ shuō cuò le.'],
      note: '`cuò` als Ergebnis heißt „falsch“ – `shuō cuò` also „falsch gesagt“.' }
  ]
},

{
  id: 'a2-le-satzende',
  title: '了 am Satzende: die Veränderung',
  level: 'A2',
  relatedTopicIds: ['wetter', 'gefuehle'],
  explanation:
    'Es gibt ein zweites `le`, und es macht etwas ganz anderes als das erste.\n\n' +
    'Steht `le` **am Satzende**, sagt es: **die Lage hat sich geändert**, ein neuer Zustand ' +
    'ist eingetreten.\n\n' +
    '`Xià yǔ le.` – Es hat angefangen zu regnen. (vorher regnete es nicht)\n' +
    '`Wǒ è le.` – Ich bin (jetzt) hungrig geworden.\n' +
    '`Tā bìng le.` – Er ist krank geworden.\n\n' +
    '**Der Unterschied auf einen Blick:**\n\n' +
    '`Wǒ chī le fàn.` – Ich habe gegessen. (`le` hinter dem Verb: Handlung abgeschlossen)\n' +
    '`Wǒ chī fàn le.` – Jetzt esse ich / ich habe schon gegessen. (`le` am Ende: neuer Stand)\n\n' +
    'Besonders klar wird es bei Adjektiven und Zuständen, wo das erste `le` gar nicht ' +
    'möglich ist: `Tiānqì lěng le.` – Es ist kalt geworden.\n\n' +
    '**Mit `bù ... le`: etwas hört auf.**\n' +
    '`Wǒ bù chī le.` – Ich esse nicht mehr. (ich höre auf zu essen)\n' +
    '`Wǒ bú qù le.` – Ich gehe doch nicht. (ich hatte es vor, jetzt nicht mehr)\n\n' +
    'Das ist eine der nützlichsten Wendungen überhaupt – sie drückt aus, dass ein Vorsatz ' +
    'oder eine Gewohnheit endet.\n\n' +
    '**Mit Zahlen:** `Wǒ èrshí suì le.` – Ich bin jetzt zwanzig (geworden).',
  examples: [
    { pinyin: 'Xià yǔ le.', de: 'Es hat angefangen zu regnen.', hanzi: '下雨了。' },
    { pinyin: 'Wǒ è le.', de: 'Ich bin hungrig geworden.', hanzi: '我饿了。' },
    { pinyin: 'Tiānqì lěng le.', de: 'Es ist kalt geworden.', hanzi: '天气冷了。' },
    { pinyin: 'Wǒ bù chī le.', de: 'Ich esse nicht mehr.', hanzi: '我不吃了。' },
    { pinyin: 'Wǒ bú qù le.', de: 'Ich gehe doch nicht.', hanzi: '我不去了。' },
    { pinyin: 'Tā èrshí suì le.', de: 'Er ist jetzt zwanzig.', hanzi: '他二十岁了。' }
  ],
  drills: [
    { type: 'multipleChoice',
      prompt: 'Was bedeutet `Wǒ bù chī le`?',
      options: [
        'Ich esse nicht mehr – ich höre jetzt auf.',
        'Ich habe nicht gegessen.',
        'Ich esse grundsätzlich nicht.',
        'Ich werde nie wieder essen.'
      ],
      answer: 'Ich esse nicht mehr – ich höre jetzt auf.',
      note: '`bù ... le` markiert das Ende eines Zustands oder Vorhabens.' },
    { type: 'fillBlank',
      prompt: 'Xià yǔ ___. (Es hat angefangen zu regnen.)',
      answer: ['le'],
      note: 'Das `le` am Satzende zeigt die eingetretene Veränderung an.' },
    { type: 'multipleChoice',
      prompt: 'Welcher Satz betont, dass ein neuer Zustand eingetreten ist?',
      options: [
        'Tiānqì lěng le.',
        'Tiānqì hěn lěng.',
        'Tiānqì bù lěng.',
        'Tiānqì lěng ma?'
      ],
      answer: 'Tiānqì lěng le.',
      note: 'Ohne `le` beschreibt der Satz nur einen Zustand, mit `le` dessen Eintreten: ' +
            '„Es ist kalt geworden" gegen „Es ist kalt", „Es ist nicht kalt", „Ist es kalt?"' },
    { type: 'transformation',
      prompt: 'Drücke aus, dass du deinen Plan aufgibst: Wǒ qù.',
      de: 'Ich gehe hin.',
      answer: ['Wǒ bú qù le.', 'Wǒ bù qù le.'],
      note: '`bù ... le` heißt „doch nicht mehr“.' },
    { type: 'errorCorrection',
      prompt: 'Wǒ méi qù le.',
      de: 'Ich bin nicht hingegangen.',
      answer: ['Wǒ méi qù.'],
      note: '`méi` und `le` vertragen sich nicht – bei der Verneinung fällt `le` weg.' },
    { type: 'typing',
      prompt: 'Es ist kalt geworden.',
      answer: ['Tiānqì lěng le.', 'Lěng le.'],
      note: 'Adjektiv + `le` = der Zustand ist neu eingetreten.' }
  ]
},

{
  id: 'a2-a-nicht-a',
  title: 'A-nicht-A-Fragen',
  level: 'A2',
  relatedTopicIds: ['begruessung', 'essen'],
  explanation:
    'Neben `ma` gibt es eine zweite Art, Ja/Nein-Fragen zu stellen: Man **wiederholt das ' +
    'Verb**, einmal bejaht und einmal verneint.\n\n' +
    '`Nǐ qù bú qù?` – Gehst du (oder nicht)?\n' +
    '`Zhè ge guì bú guì?` – Ist das teuer?\n' +
    '`Nǐ yǒu méiyǒu shíjiān?` – Hast du Zeit?\n\n' +
    'Beachte: `yǒu` wird mit `méiyǒu` gespiegelt, nicht mit `bù yǒu`.\n\n' +
    '**Bei zweisilbigen Verben** kann man abkürzen – die erste Silbe genügt:\n' +
    '`Nǐ xǐ bù xǐhuan?` = `Nǐ xǐhuan bù xǐhuan?` – Magst du es?\n\n' +
    '**Klang und Wirkung:** `ma` und A-nicht-A bedeuten dasselbe, aber A-nicht-A klingt ' +
    'etwas direkter und neutraler. `ma` kann je nach Betonung eine Erwartung mittragen ' +
    '(„du kommst doch, oder?“), A-nicht-A stellt die Frage offen.\n\n' +
    '**Zwei Verbote:**\n\n' +
    '1. **Kein `ma` dazu.** `Nǐ qù bú qù ma?` (Gehst du?) ist falsch – eine Frageform reicht.\n' +
    '2. **Kein `hěn`.** `Zhè ge hěn guì bú guì?` (Ist das teuer?) ist falsch. In der Frage fällt der Füller weg.\n\n' +
    'Mit Modalverben wird das Modalverb gespiegelt, nicht das Hauptverb: ' +
    '`Nǐ néng bù néng lái?` (Kannst du kommen?)',
  examples: [
    { pinyin: 'Nǐ qù bú qù?', de: 'Gehst du?', hanzi: '你去不去？' },
    { pinyin: 'Zhè ge guì bú guì?', de: 'Ist das teuer?', hanzi: '这个贵不贵？' },
    { pinyin: 'Nǐ yǒu méiyǒu shíjiān?', de: 'Hast du Zeit?', hanzi: '你有没有时间？' },
    { pinyin: 'Nǐ xǐ bù xǐhuan Zhōngguó cài?', de: 'Magst du chinesisches Essen?', hanzi: '你喜不喜欢中国菜？' },
    { pinyin: 'Nǐ néng bù néng lái?', de: 'Kannst du kommen?', hanzi: '你能不能来？' },
    { pinyin: 'Tā shì bú shì lǎoshī?', de: 'Ist er Lehrer?', hanzi: '他是不是老师？' }
  ],
  drills: [
    { type: 'transformation',
      prompt: 'Mache eine A-nicht-A-Frage: Nǐ qù ma?',
      de: 'Gehst du?',
      answer: ['Nǐ qù bú qù?', 'Nǐ qù bù qù?', 'Nǐ qù bú qù'],
      note: 'Das Verb wird bejaht und verneint wiederholt, `ma` entfällt.' },
    { type: 'errorCorrection',
      prompt: 'Nǐ qù bú qù ma?',
      de: 'Gehst du?',
      answer: ['Nǐ qù bú qù?', 'Nǐ qù ma?', 'Nǐ qù bú qù'],
      note: 'A-nicht-A und `ma` schließen einander aus.' },
    { type: 'fillBlank',
      prompt: 'Nǐ yǒu ___ shíjiān? (Hast du Zeit?)',
      options: ['méiyǒu', 'bù yǒu', 'bú yǒu', 'bù'],
      answer: 'méiyǒu',
      note: '`yǒu` wird immer mit `méiyǒu` gespiegelt.' },
    { type: 'multipleChoice',
      prompt: 'Wie fragt man mit A-nicht-A „Kannst du kommen?“',
      options: [
        'Nǐ néng bù néng lái?',
        'Nǐ néng lái bù lái?',
        'Nǐ lái bù lái néng?',
        'Nǐ néng bù lái ma?'
      ],
      answer: 'Nǐ néng bù néng lái?',
      note: 'Bei Modalverben wird das Modalverb gespiegelt, nicht das Hauptverb.' },
    { type: 'errorCorrection',
      prompt: 'Zhè ge hěn guì bú guì?',
      de: 'Ist das teuer?',
      answer: ['Zhè ge guì bú guì?', 'Zhè ge guì bù guì?'],
      note: 'In der A-nicht-A-Frage fällt `hěn` weg.' },
    { type: 'typing',
      prompt: 'Magst du chinesisches Essen? (A-nicht-A)',
      answer: ['Nǐ xǐ bù xǐhuan Zhōngguó cài?', 'Nǐ xǐhuan bù xǐhuan Zhōngguó cài?',
               'Nǐ xǐ bù xǐhuan Zhōngguó cài'],
      note: 'Bei zweisilbigen Verben darf die erste Silbe die Rolle des „A“ übernehmen.' }
  ]
},

{
  id: 'a2-satzverbindung',
  title: 'Satzpaare: 因为…所以… und 虽然…但是…',
  level: 'A2',
  relatedTopicIds: ['meinung', 'schule'],
  explanation:
    'Chinesische Bindewörter treten **paarweise** auf. Wo im Deutschen ein Wort genügt ' +
    '(„weil“), setzt das Chinesische gern beide Hälften.\n\n' +
    '**Grund und Folge: `yīnwèi … suǒyǐ …`**\n' +
    '`Yīnwèi xià yǔ, suǒyǐ wǒ méi qù.` – Weil es regnete, bin ich nicht gegangen.\n\n' +
    'Im Deutschen wäre „Weil es regnete, **so** bin ich nicht gegangen“ falsch – auf ' +
    'Chinesisch ist genau das die Normalform. Eine Hälfte darf wegfallen (`Xià yǔ le, suǒyǐ ' +
    'wǒ méi qù.`), beide zusammen sind aber nicht doppelt gemoppelt.\n\n' +
    '**Einräumung: `suīrán … dànshì …`**\n' +
    '`Suīrán hěn lèi, dànshì wǒ hěn gāoxìng.` – Obwohl ich müde bin, freue ich mich.\n\n' +
    'Statt `dànshì` geht auch `kěshì` – gleichbedeutend, etwas umgangssprachlicher.\n\n' +
    '**Wo steht das Bindewort?** Vor **oder** hinter dem Subjekt, beides ist richtig:\n' +
    '`Yīnwèi tā bìng le, …` = `Tā yīnwèi bìng le, …`\n\n' +
    '**Weitere häufige Paare:**\n\n' +
    '`bù dàn … érqiě …` – nicht nur … sondern auch\n' +
    '`rúguǒ … jiù …` – wenn … dann (B1)\n' +
    '`xiān … ránhòu …` – zuerst … dann\n' +
    '`yībiān … yībiān …` – gleichzeitig (B1)',
  examples: [
    { pinyin: 'Yīnwèi xià yǔ, suǒyǐ wǒ méi qù.', de: 'Weil es regnete, bin ich nicht gegangen.', hanzi: '因为下雨，所以我没去。' },
    { pinyin: 'Suīrán hěn lèi, dànshì wǒ hěn gāoxìng.', de: 'Obwohl ich müde bin, freue ich mich.', hanzi: '虽然很累，但是我很高兴。' },
    { pinyin: 'Yīnwèi tā bìng le, suǒyǐ méi lái shàngkè.', de: 'Weil er krank war, kam er nicht zum Unterricht.', hanzi: '因为他病了，所以没来上课。' },
    { pinyin: 'Suīrán zhè ge cài hěn là, kěshì hěn hǎochī.', de: 'Obwohl das Gericht scharf ist, schmeckt es gut.', hanzi: '虽然这个菜很辣，可是很好吃。' },
    { pinyin: 'Wǒ xiān chīfàn, ránhòu qù gōngzuò.', de: 'Erst esse ich, dann gehe ich arbeiten.', hanzi: '我先吃饭，然后去工作。' },
    { pinyin: 'Tā bù dàn huì Hànyǔ, érqiě huì Yīngyǔ.', de: 'Er kann nicht nur Chinesisch, sondern auch Englisch.', hanzi: '他不但会汉语，而且会英语。' }
  ],
  drills: [
    { type: 'fillBlank',
      prompt: 'Yīnwèi xià yǔ, ___ wǒ méi qù. (Weil es regnete, bin ich nicht gegangen.)',
      options: ['suǒyǐ', 'dànshì', 'kěshì', 'érqiě'],
      answer: 'suǒyǐ',
      note: '`yīnwèi` verlangt als Gegenstück `suǒyǐ`.' },
    { type: 'fillBlank',
      prompt: 'Suīrán hěn lèi, ___ wǒ hěn gāoxìng. (Obwohl ich müde bin, freue ich mich.)',
      options: ['dànshì', 'suǒyǐ', 'yīnwèi', 'ránhòu'],
      answer: 'dànshì',
      note: '`suīrán` gehört mit `dànshì` oder `kěshì` zusammen.' },
    { type: 'multipleChoice',
      prompt: 'Was ist an `Yīnwèi xià yǔ, suǒyǐ wǒ méi qù` bemerkenswert?',
      options: [
        'Beide Bindewörter stehen gleichzeitig – im Deutschen wäre das falsch.',
        'Das Subjekt fehlt im ersten Teil.',
        'Die Reihenfolge von Grund und Folge ist vertauscht.',
        'Das Verb ist unverneint.'
      ],
      answer: 'Beide Bindewörter stehen gleichzeitig – im Deutschen wäre das falsch.',
      note: 'Chinesische Bindewörter treten paarweise auf; im Deutschen genügt eines.' },
    { type: 'sentenceOrder',
      prompt: 'Erst esse ich, dann gehe ich arbeiten.',
      options: ['qù gōngzuò', 'wǒ xiān', 'ránhòu', 'chīfàn'],
      answer: ['wǒ xiān', 'chīfàn', 'ránhòu', 'qù gōngzuò'],
      hanzi: '我先吃饭，然后去工作。' },
    { type: 'errorCorrection',
      prompt: 'Suīrán hěn lèi, suǒyǐ wǒ hěn gāoxìng.',
      de: 'Obwohl ich müde bin, freue ich mich.',
      answer: ['Suīrán hěn lèi, dànshì wǒ hěn gāoxìng.', 'Suīrán hěn lèi, kěshì wǒ hěn gāoxìng.'],
      note: 'Die Paare dürfen nicht gemischt werden: `suīrán` gehört zu `dànshì`/`kěshì`.' },
    { type: 'typing',
      prompt: 'Weil er krank war, kam er nicht zum Unterricht.',
      answer: ['Yīnwèi tā bìng le, suǒyǐ méi lái shàngkè.',
               'Yīnwèi tā bìng le, suǒyǐ tā méi lái shàngkè.'],
      note: 'Grund zuerst mit `yīnwèi`, Folge mit `suǒyǐ`.' }
  ]
}

]);
