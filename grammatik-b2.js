/* Pinyin-Trainer – Grammatik B2 */
GrammatikDaten.add([

{
  id: 'b2-potential',
  title: 'Potentielle Komplemente: 得 / 不',
  level: 'B2',
  relatedTopicIds: ['schule', 'arbeit'],
  explanation:
    'Das potentielle Komplement sagt, ob ein Ergebnis **erreichbar** ist. Es entsteht, ' +
    'indem man `de` oder `bù` **zwischen** Verb und Ergebniskomplement schiebt:\n\n' +
    '`kàn wán` (zu Ende lesen) → `kàn de wán` (schaffen zu lesen) / `kàn bù wán` ' +
    '(nicht schaffen)\n' +
    '`tīng dǒng` (verstehen) → `tīng de dǒng` / `tīng bù dǒng`\n' +
    '`zhǎo dào` (finden) → `zhǎo de dào` / `zhǎo bù dào`\n\n' +
    '`Zhè běn shū tài hòu le, wǒ kàn bù wán.` – Das Buch ist zu dick, ich schaffe es nicht.\n\n' +
    '**Der Unterschied zu `néng`:** `néng` spricht von äußerer Erlaubnis oder Gelegenheit, ' +
    'das potentielle Komplement von der inneren Machbarkeit.\n\n' +
    '`Wǒ bù néng qù.` – Ich darf/kann nicht hin (Termin, Verbot).\n' +
    '`Wǒ qù bu liǎo.` – Ich schaffe es nicht hin (zu weit, zu spät, keine Kraft).\n\n' +
    '**Die verneinte Form ist im Alltag viel häufiger** als die bejahte. `tīng bù dǒng` ' +
    'hört man ständig, `tīng de dǒng` seltener – meist als Antwort auf eine Frage.\n\n' +
    '**Frage:** A-nicht-A über beide Formen: `Nǐ tīng de dǒng tīng bù dǒng?` (Verstehst du es?)\n\n' +
    '**Nützliche feste Wendungen:**\n' +
    '`lái de jí` – es zeitlich schaffen · `lái bu jí` – zu spät sein\n' +
    '`shòu de liǎo` – ertragen können · `shòu bu liǎo` – nicht aushalten\n' +
    '`chī de xià` – noch essen können · `chī bu xià` – nichts mehr hinunterbekommen\n' +
    '`mǎi de qǐ` – sich leisten können · `mǎi bu qǐ` – zu teuer für einen',
  examples: [
    { pinyin: 'Wǒ tīng bù dǒng tā shuō de huà.', de: 'Ich verstehe nicht, was er sagt.', hanzi: '我听不懂他说的话。' },
    { pinyin: 'Zhè běn shū tài hòu le, wǒ kàn bù wán.', de: 'Das Buch ist zu dick, ich schaffe es nicht zu Ende.', hanzi: '这本书太厚了，我看不完。' },
    { pinyin: 'Nǐ tīng de dǒng ma?', de: 'Verstehst du es?', hanzi: '你听得懂吗？' },
    { pinyin: 'Wǒ zhǎo bù dào wǒ de yàoshi.', de: 'Ich kann meinen Schlüssel nicht finden.', hanzi: '我找不到我的钥匙。' },
    { pinyin: 'Kuài diǎnr, yào lái bu jí le.', de: 'Schnell, sonst kommen wir zu spät.', hanzi: '快点儿，要来不及了。' },
    { pinyin: 'Zhè ge fángzi wǒ mǎi bu qǐ.', de: 'Dieses Haus kann ich mir nicht leisten.', hanzi: '这个房子我买不起。' }
  ],
  drills: [
    { type: 'transformation',
      prompt: 'Mache daraus ein verneintes potentielles Komplement: tīng dǒng',
      de: 'tīng dǒng = verstanden haben (beim Hören).',
      answer: ['tīng bù dǒng', 'tīng bu dǒng'],
      note: '`bù` rutscht zwischen Verb und Ergebnis.' },
    { type: 'multipleChoice',
      prompt: 'Was unterscheidet `Wǒ bù néng qù` von `Wǒ qù bu liǎo`?',
      options: [
        '`bù néng` meint Erlaubnis oder Gelegenheit, `qù bu liǎo` die tatsächliche Machbarkeit.',
        '`bù néng` ist Vergangenheit, `qù bu liǎo` Gegenwart.',
        '`qù bu liǎo` ist höflicher.',
        'Es gibt keinen Unterschied.'
      ],
      answer: '`bù néng` meint Erlaubnis oder Gelegenheit, `qù bu liǎo` die tatsächliche Machbarkeit.',
      note: 'Das Modalverb spricht von äußeren Umständen, das Komplement von der Durchführbarkeit.' },
    { type: 'fillBlank',
      prompt: 'Zhè běn shū tài hòu le, wǒ kàn ___ wán. (ich schaffe es nicht)',
      options: ['bù', 'de', 'méi', 'bié'],
      answer: 'bù',
      note: '`kàn bù wán` – das Ergebnis ist nicht erreichbar.' },
    { type: 'errorCorrection',
      prompt: 'Wǒ méi tīng dǒng tā shuō de huà.',
      de: 'Ich verstehe grundsätzlich nicht, was er sagt.',
      answer: ['Wǒ tīng bù dǒng tā shuō de huà.'],
      note: '`méi tīng dǒng` heißt „habe es nicht verstanden“ (einmalig); die Unfähigkeit ist `tīng bù dǒng`.' },
    { type: 'sentenceOrder',
      prompt: 'Dieses Haus kann ich mir nicht leisten.',
      options: ['mǎi bu qǐ', 'zhè ge fángzi', 'wǒ'],
      answer: ['zhè ge fángzi', 'wǒ', 'mǎi bu qǐ'],
      hanzi: '这个房子我买不起。' },
    { type: 'typing',
      prompt: 'Ich kann meinen Schlüssel nicht finden.',
      answer: ['Wǒ zhǎo bù dào wǒ de yàoshi.', 'Wǒ zhǎo bu dào wǒ de yàoshi.',
               'Wǒ zhǎo bù dào yàoshi.'],
      note: '`zhǎo bù dào` – das Finden gelingt nicht.' }
  ]
},

{
  id: 'b2-lian',
  title: '连…都/也…: sogar',
  level: 'B2',
  relatedTopicIds: ['meinung', 'gefuehle'],
  explanation:
    '`lián … dōu/yě …` hebt einen **äußersten Fall** hervor: „sogar …“, „nicht einmal …“.\n\n' +
    '`lián + Hervorgehobenes + dōu / yě + Prädikat`\n\n' +
    '`Tā lián Hànzì dōu bú rènshi.` – Er kennt nicht einmal die Schriftzeichen.\n' +
    '`Lián háizi dōu zhīdào.` – Sogar Kinder wissen das.\n\n' +
    'Die Logik: Wenn schon der extremste Fall zutrifft, gilt es erst recht für alle ' +
    'anderen. Das macht die Wendung zu einem starken Argument – und deshalb ist sie in ' +
    'Diskussionen so häufig.\n\n' +
    '**`dōu` oder `yě`?** Beide gehen, `dōu` ist etwas geläufiger. Eines von beiden ' +
    '**muss** stehen – `lián` allein ist unvollständig.\n\n' +
    '**Bei einem Objekt** rückt dieses nach vorn hinter `lián`:\n' +
    '`Wǒ lián zhè ge zì dōu bú huì xiě.` – Nicht mal dieses Zeichen kann ich schreiben.\n\n' +
    '**Bei einem Verb** wird dieses oft verdoppelt, mit `yí` oder `yě` dazwischen:\n' +
    '`Tā lián kàn yě méi kàn.` – Er hat nicht einmal hingeschaut.\n\n' +
    '**Verwandte Verstärkungen:**\n' +
    '`shènzhì` – sogar, ja gar (förmlicher, kein Partner nötig)\n' +
    '`yìdiǎnr yě bù …` – nicht das Geringste\n' +
    '`yí ge … yě méiyǒu` – nicht ein einziger',
  examples: [
    { pinyin: 'Tā lián Hànzì dōu bú rènshi.', de: 'Er kennt nicht einmal die Schriftzeichen.', hanzi: '他连汉字都不认识。' },
    { pinyin: 'Lián háizi dōu zhīdào zhè jiàn shì.', de: 'Sogar Kinder wissen von dieser Sache.', hanzi: '连孩子都知道这件事。' },
    { pinyin: 'Wǒ lián yì fēn qián dōu méiyǒu.', de: 'Ich habe keinen einzigen Cent.', hanzi: '我连一分钱都没有。' },
    { pinyin: 'Tā máng de lián fàn dōu méi chī.', de: 'Er war so beschäftigt, dass er nicht einmal gegessen hat.', hanzi: '他忙得连饭都没吃。' },
    { pinyin: 'Tā lián kàn yě méi kàn wǒ.', de: 'Er hat mich nicht einmal angesehen.', hanzi: '他连看也没看我。' },
    { pinyin: 'Zhè ge wèntí shènzhì zhuānjiā yě huídá bù liǎo.', de: 'Diese Frage können sogar Fachleute nicht beantworten.', hanzi: '这个问题甚至专家也回答不了。' }
  ],
  drills: [
    { type: 'fillBlank',
      prompt: 'Tā lián Hànzì ___ bú rènshi. (Er kennt nicht einmal die Schriftzeichen.)',
      options: ['dōu', 'hěn', 'jiù', 'cái'],
      answer: 'dōu',
      note: '`lián` verlangt `dōu` oder `yě` im zweiten Teil.' },
    { type: 'errorCorrection',
      prompt: 'Tā lián Hànzì bú rènshi.',
      de: 'Er kennt nicht einmal die Schriftzeichen.',
      answer: ['Tā lián Hànzì dōu bú rènshi.', 'Tā lián Hànzì yě bú rènshi.'],
      note: '`lián` allein genügt nicht – `dōu` oder `yě` muss folgen.' },
    { type: 'multipleChoice',
      prompt: 'Was bewirkt `lián … dōu …` in einer Diskussion?',
      options: [
        'Es nennt den äußersten Fall – gilt der, gilt alles andere erst recht.',
        'Es schwächt die Aussage ab.',
        'Es stellt eine höfliche Rückfrage.',
        'Es drückt eine Bedingung aus.'
      ],
      answer: 'Es nennt den äußersten Fall – gilt der, gilt alles andere erst recht.',
      note: 'Deshalb wirkt die Wendung als Argument so stark.' },
    { type: 'transformation',
      prompt: 'Verstärke mit `lián … dōu …`: Wǒ méiyǒu qián.  (nicht einen Cent)',
      de: 'Ich habe kein Geld.',
      answer: ['Wǒ lián yì fēn qián dōu méiyǒu.', 'Wǒ lián yì fēn qián yě méiyǒu.'],
      note: 'Das Hervorgehobene rückt hinter `lián`, `dōu` steht vor dem Prädikat.' },
    { type: 'sentenceOrder',
      prompt: 'Sogar Kinder wissen von dieser Sache.',
      options: ['zhīdào zhè jiàn shì', 'lián', 'háizi', 'dōu'],
      answer: ['lián', 'háizi', 'dōu', 'zhīdào zhè jiàn shì'],
      hanzi: '连孩子都知道这件事。' },
    { type: 'typing',
      prompt: 'Er hat mich nicht einmal angesehen.',
      answer: ['Tā lián kàn yě méi kàn wǒ.', 'Tā lián kàn dōu méi kàn wǒ.'],
      note: 'Beim Verb wird dieses verdoppelt: `lián kàn yě méi kàn`.' }
  ]
},

{
  id: 'b2-budan',
  title: '不但…而且…: nicht nur, sondern auch',
  level: 'B2',
  relatedTopicIds: ['meinung', 'wirtschaft'],
  explanation:
    '`bù dàn … érqiě …` steigert: Der zweite Teil geht über den ersten hinaus.\n\n' +
    '`Tā bù dàn huì Hànyǔ, érqiě huì Rìyǔ.` – Er kann nicht nur Chinesisch, sondern auch ' +
    'Japanisch.\n\n' +
    '**Die Regel zur Wortstellung, die oft falsch gemacht wird:**\n\n' +
    '- **Gleiches Subjekt** in beiden Teilen → `bù dàn` steht **hinter** dem Subjekt:\n' +
    '  `Tā bù dàn cōngming, érqiě hěn nǔlì.` (Er ist nicht nur klug, sondern auch fleißig.)\n' +
    '- **Verschiedene Subjekte** → `bù dàn` steht **vor** dem ersten Subjekt:\n' +
    '  `Bù dàn tā qù le, érqiě tā de jiārén yě qù le.` (Nicht nur er ging hin, auch seine Familie.)\n\n' +
    'Im zweiten Fall steht im Folgeteil zusätzlich `yě` oder `dōu`.\n\n' +
    '**Varianten:**\n' +
    '`bù jǐn … érqiě …` – schriftsprachlicher\n' +
    '`… , hái …` – knapper: `Tā huì Hànyǔ, hái huì Rìyǔ.` (Er kann Chinesisch und außerdem Japanisch.)\n' +
    '`bù dàn bù … fǎn’ér …` – nicht nur nicht …, sondern im Gegenteil …\n' +
    '  `Tā bù dàn bù shēngqì, fǎn’ér xiào le.` – Er wurde nicht einmal böse, sondern lachte.\n\n' +
    '**Abgrenzung zu `yòu … yòu …`:** Dieses reiht gleichrangig auf, `bù dàn … érqiě …` ' +
    'steigert. `yòu piányi yòu hǎochī` – beides gleich wichtig. ' +
    '`bù dàn piányi, érqiě hǎochī` – und obendrein schmeckt es auch noch.',
  examples: [
    { pinyin: 'Tā bù dàn huì Hànyǔ, érqiě huì Rìyǔ.', de: 'Er kann nicht nur Chinesisch, sondern auch Japanisch.', hanzi: '他不但会汉语，而且会日语。' },
    { pinyin: 'Zhè ge fāng\'àn bù dàn shěng qián, érqiě shěng shíjiān.', de: 'Dieses Konzept spart nicht nur Geld, sondern auch Zeit.', hanzi: '这个方案不但省钱，而且省时间。' },
    { pinyin: 'Bù dàn tā qù le, érqiě tā de jiārén yě qù le.', de: 'Nicht nur er ging hin, auch seine Familie.', hanzi: '不但他去了，而且他的家人也去了。' },
    { pinyin: 'Tā bù dàn bù shēngqì, fǎn\'ér xiào le.', de: 'Er wurde nicht einmal böse, sondern lachte.', hanzi: '他不但不生气，反而笑了。' },
    { pinyin: 'Zhè zhǒng chǎnpǐn bù jǐn zhìliàng hǎo, érqiě jiàgé hélǐ.', de: 'Dieses Produkt hat nicht nur gute Qualität, sondern auch einen fairen Preis.', hanzi: '这种产品不仅质量好，而且价格合理。' },
    { pinyin: 'Tā huì Hànyǔ, hái huì Rìyǔ.', de: 'Er kann Chinesisch und außerdem Japanisch.', hanzi: '他会汉语，还会日语。' }
  ],
  drills: [
    { type: 'fillBlank',
      prompt: 'Tā bù dàn huì Hànyǔ, ___ huì Rìyǔ. (Er kann nicht nur Chinesisch, sondern auch Japanisch.)',
      options: ['érqiě', 'dànshì', 'suǒyǐ', 'kěshì'],
      answer: 'érqiě',
      note: '`bù dàn` gehört mit `érqiě` zusammen.' },
    { type: 'multipleChoice',
      prompt: 'Wo steht `bù dàn`, wenn beide Satzteile verschiedene Subjekte haben?',
      options: [
        'Vor dem ersten Subjekt.',
        'Hinter dem ersten Subjekt.',
        'Am Satzende.',
        'Direkt vor `érqiě`.'
      ],
      answer: 'Vor dem ersten Subjekt.',
      note: 'Gleiches Subjekt → `bù dàn` dahinter; verschiedene Subjekte → davor.' },
    { type: 'errorCorrection',
      prompt: 'Tā bù dàn qù le, érqiě tā de jiārén yě qù le.',
      de: 'Nicht nur er ging hin, auch seine Familie.',
      answer: ['Bù dàn tā qù le, érqiě tā de jiārén yě qù le.'],
      note: 'Bei verschiedenen Subjekten rückt `bù dàn` vor das erste Subjekt.' },
    { type: 'transformation',
      prompt: 'Verbinde mit `bù dàn … érqiě …`: Zhè ge fāng\'àn shěng qián. Zhè ge fāng\'àn shěng shíjiān.',
      de: 'Dieses Konzept spart Geld. Dieses Konzept spart Zeit.',
      answer: ['Zhè ge fāng\'àn bù dàn shěng qián, érqiě shěng shíjiān.'],
      note: 'Gleiches Subjekt – `bù dàn` steht dahinter, im zweiten Teil entfällt die Wiederholung.' },
    { type: 'sentenceOrder',
      prompt: 'Er wurde nicht einmal böse, sondern lachte.',
      options: ['xiào le', 'tā bù dàn', 'fǎn\'ér', 'bù shēngqì'],
      answer: ['tā bù dàn', 'bù shēngqì', 'fǎn\'ér', 'xiào le'],
      hanzi: '他不但不生气，反而笑了。' },
    { type: 'typing',
      prompt: 'Dieses Produkt hat nicht nur gute Qualität, sondern auch einen fairen Preis.',
      answer: ['Zhè zhǒng chǎnpǐn bù jǐn zhìliàng hǎo, érqiě jiàgé hélǐ.',
               'Zhè zhǒng chǎnpǐn bù dàn zhìliàng hǎo, érqiě jiàgé hélǐ.'],
      note: '`bù jǐn` und `bù dàn` sind gleichwertig, `bù jǐn` klingt schriftsprachlicher.' }
  ]
},

{
  id: 'b2-jinguan',
  title: '尽管…还是… und weitere Einräumungen',
  level: 'B2',
  relatedTopicIds: ['meinung', 'nachrichten'],
  explanation:
    'Neben `suīrán … dànshì …` (A2) gibt es eine Reihe feinerer Einräumungen.\n\n' +
    '**`jǐnguǎn … háishi …` – obwohl … trotzdem**\n' +
    '`Jǐnguǎn hěn lèi, tā háishi jiānchí wánchéng le.` – Obwohl er sehr müde war, hat er ' +
    'es trotzdem zu Ende gebracht.\n\n' +
    '`jǐnguǎn` ist schriftsprachlicher als `suīrán` und betont stärker, dass der ' +
    'Widerstand überwunden wurde. `háishi` heißt hier „dennoch“, nicht „oder“.\n\n' +
    '**`jíshǐ … yě …` – selbst wenn … trotzdem**\n' +
    '`Jíshǐ shībài le, wǒ yě bú hòuhuǐ.` – Selbst wenn es scheitert, bereue ich es nicht.\n' +
    'Anders als `jǐnguǎn` bezieht sich `jíshǐ` auf einen **angenommenen**, nicht auf einen ' +
    'tatsächlichen Fall. Das ist der entscheidende Unterschied.\n\n' +
    '**`wúlùn / bùguǎn … dōu/yě …` – ganz gleich, ob …**\n' +
    '`Wúlùn fāshēng shénme, wǒ dōu zhīchí nǐ.` – Ganz gleich was passiert, ich stehe zu dir.\n' +
    'Im ersten Teil steht ein Fragewort (`shénme`, `shéi`, `zěnme`) oder eine Alternative ' +
    '(`A háishi B`) – nie eine einfache Aussage.\n\n' +
    '**`què` – doch, dennoch (nachgestellt, vor dem Verb)**\n' +
    '`Tā hěn nǔlì, chéngjì què bù hǎo.` – Er strengt sich an, die Noten sind dennoch schlecht.\n\n' +
    '**Die Abstufung:** `dànshì` ist neutral, `què` leiser und literarischer, ' +
    '`háishi` betont die Beharrlichkeit, `fǎn\'ér` kehrt die Erwartung sogar um.',
  examples: [
    { pinyin: 'Jǐnguǎn hěn lèi, tā háishi jiānchí wánchéng le.', de: 'Obwohl er müde war, hat er es trotzdem zu Ende gebracht.', hanzi: '尽管很累，他还是坚持完成了。' },
    { pinyin: 'Jíshǐ shībài le, wǒ yě bú hòuhuǐ.', de: 'Selbst wenn es scheitert, bereue ich es nicht.', hanzi: '即使失败了，我也不后悔。' },
    { pinyin: 'Wúlùn fāshēng shénme, wǒ dōu zhīchí nǐ.', de: 'Ganz gleich was passiert, ich stehe zu dir.', hanzi: '无论发生什么，我都支持你。' },
    { pinyin: 'Bùguǎn nǐ tóngyì bù tóngyì, wǒ dōu yào shìshi.', de: 'Ob du zustimmst oder nicht, ich will es versuchen.', hanzi: '不管你同意不同意，我都要试试。' },
    { pinyin: 'Tā hěn nǔlì, chéngjì què bù hǎo.', de: 'Er strengt sich an, die Noten sind dennoch schlecht.', hanzi: '他很努力，成绩却不好。' },
    { pinyin: 'Jǐnguǎn yǒu fēngxiǎn, gōngsī háishi juédìng tóuzī.', de: 'Trotz des Risikos hat die Firma beschlossen zu investieren.', hanzi: '尽管有风险，公司还是决定投资。' }
  ],
  drills: [
    { type: 'fillBlank',
      prompt: 'Jǐnguǎn hěn lèi, tā ___ jiānchí wánchéng le. (Obwohl er müde war, hat er es trotzdem zu Ende gebracht.)',
      options: ['háishi', 'jiù', 'cái', 'yīnwèi'],
      answer: 'háishi',
      note: 'Hier heißt `háishi` „dennoch“, nicht „oder“.' },
    { type: 'multipleChoice',
      prompt: 'Was unterscheidet `jǐnguǎn` von `jíshǐ`?',
      options: [
        '`jǐnguǎn` nennt eine tatsächliche Lage, `jíshǐ` eine angenommene.',
        '`jǐnguǎn` ist umgangssprachlich, `jíshǐ` förmlich.',
        '`jíshǐ` steht nur in Fragen.',
        'Es gibt keinen Unterschied.'
      ],
      answer: '`jǐnguǎn` nennt eine tatsächliche Lage, `jíshǐ` eine angenommene.',
      note: '„Obwohl er müde war“ (tatsächlich) gegen „selbst wenn es scheitern sollte“ (angenommen).' },
    { type: 'errorCorrection',
      prompt: 'Wúlùn hěn lèi, wǒ dōu yào qù.',
      de: 'Obwohl ich müde bin, will ich trotzdem hin.',
      answer: ['Jǐnguǎn hěn lèi, wǒ háishi yào qù.', 'Suīrán hěn lèi, dànshì wǒ yào qù.'],
      note: 'Nach `wúlùn` muss ein Fragewort oder eine Alternative folgen, keine einfache Aussage.' },
    { type: 'fillBlank',
      prompt: '___ fāshēng shénme, wǒ dōu zhīchí nǐ. (Ganz gleich was passiert …)',
      options: ['Wúlùn', 'Jǐnguǎn', 'Yīnwèi', 'Rúguǒ'],
      answer: 'Wúlùn',
      note: '`wúlùn` steht mit einem Fragewort im ersten Teil und `dōu`/`yě` im zweiten.' },
    { type: 'sentenceOrder',
      prompt: 'Er strengt sich an, die Noten sind dennoch schlecht.',
      options: ['bù hǎo', 'tā hěn nǔlì', 'chéngjì', 'què'],
      answer: ['tā hěn nǔlì', 'chéngjì', 'què', 'bù hǎo'],
      hanzi: '他很努力，成绩却不好。' },
    { type: 'typing',
      prompt: 'Selbst wenn es scheitert, bereue ich es nicht.',
      answer: ['Jíshǐ shībài le, wǒ yě bú hòuhuǐ.', 'Jíshǐ shībài le, wǒ yě bù hòuhuǐ.'],
      note: '`jíshǐ` verlangt `yě` im zweiten Teil.' }
  ]
},

{
  id: 'b2-nominalisierung',
  title: 'Nominalisierung mit 的',
  level: 'B2',
  relatedTopicIds: ['meinung', 'schule'],
  explanation:
    'Ein Ausdruck, der mit `de` endet und **kein Substantiv** hinter sich hat, wird selbst ' +
    'zum Substantiv. Das ist eine der wirtschaftlichsten Konstruktionen des Chinesischen.\n\n' +
    '`chī de` – das Essbare, Essen\n' +
    '`hóng de` – das Rote\n' +
    '`wǒ shuō de` – das, was ich gesagt habe\n' +
    '`mài shū de` – der, der Bücher verkauft (Buchhändler)\n' +
    '`kāichē de` – der Fahrer\n\n' +
    '`Wǒ shuō de nǐ dǒng le ma?` – Hast du verstanden, was ich gesagt habe?\n\n' +
    'Im Deutschen braucht man dafür Relativsätze oder abgeleitete Substantive; im ' +
    'Chinesischen reicht `de`.\n\n' +
    '**Als Personenbezeichnung** ist die Form außerordentlich produktiv: Fast jede ' +
    'Tätigkeit lässt sich so in eine Berufsbezeichnung verwandeln. Umgangssprachlich ' +
    'klingt das oft beiläufig bis abschätzig – `jiāoshū de` für einen Lehrer ist salopp, ' +
    '`lǎoshī` ist die respektvolle Form. Diesen Unterschied sollte man kennen, bevor man ' +
    'die Konstruktion frei benutzt.\n\n' +
    '**Mit `suǒ`** entsteht eine gehobene Variante: `wǒ suǒ zhīdào de` – das, was ich weiß. ' +
    '`suǒ` ist reine Schriftsprache und ändert die Bedeutung kaum, hebt aber den Ton.\n\n' +
    '**Abgrenzung zu `shì … de`:** Dort ist `de` Teil eines Rahmens, der Umstände ' +
    'hervorhebt. Hier steht `de` allein und macht aus dem Vorangehenden ein Ding.',
  examples: [
    { pinyin: 'Wǒ shuō de nǐ dǒng le ma?', de: 'Hast du verstanden, was ich gesagt habe?', hanzi: '我说的你懂了吗？' },
    { pinyin: 'Zhuōzi shàng yǒu hěn duō chī de.', de: 'Auf dem Tisch steht viel zu essen.', hanzi: '桌子上有很多吃的。' },
    { pinyin: 'Wǒ yào hóng de, bú yào lán de.', de: 'Ich will das rote, nicht das blaue.', hanzi: '我要红的，不要蓝的。' },
    { pinyin: 'Nà ge kāichē de shì wǒ shūshu.', de: 'Der Fahrer dort ist mein Onkel.', hanzi: '那个开车的是我叔叔。' },
    { pinyin: 'Zhè shì wǒ suǒ zhīdào de quánbù.', de: 'Das ist alles, was ich weiß.', hanzi: '这是我所知道的全部。' },
    { pinyin: 'Tā shuō de hé zuò de bù yíyàng.', de: 'Was er sagt und was er tut, ist nicht dasselbe.', hanzi: '他说的和做的不一样。' }
  ],
  drills: [
    { type: 'multipleChoice',
      prompt: 'Was bedeutet `chī de`?',
      options: [
        'Das Essbare, etwas zu essen.',
        'Er hat gegessen.',
        'Beim Essen.',
        'Das Essen ist fertig.'
      ],
      answer: 'Das Essbare, etwas zu essen.',
      note: '`de` ohne folgendes Substantiv macht aus dem Ausdruck selbst ein Substantiv.' },
    { type: 'transformation',
      prompt: 'Lasse das Substantiv weg: Wǒ yào hóng de yīfu.',
      de: 'Ich will das rote Kleidungsstück.',
      answer: ['Wǒ yào hóng de.'],
      note: 'Der Ausdruck endet bei `de` und meint „das rote“.' },
    { type: 'fillBlank',
      prompt: 'Nà ge kāichē ___ shì wǒ shūshu. (Der Fahrer dort ist mein Onkel.)',
      answer: ['de'],
      note: '`kāichē de` – „der, der Auto fährt“.' },
    { type: 'sentenceOrder',
      prompt: 'Was er sagt und was er tut, ist nicht dasselbe.',
      options: ['bù yíyàng', 'tā shuō de', 'zuò de', 'hé'],
      answer: ['tā shuō de', 'hé', 'zuò de', 'bù yíyàng'],
      hanzi: '他说的和做的不一样。' },
    { type: 'errorCorrection',
      prompt: 'Wǒ shuō nǐ dǒng le ma?',
      de: 'Hast du verstanden, was ich gesagt habe?',
      answer: ['Wǒ shuō de nǐ dǒng le ma?'],
      note: 'Ohne `de` fehlt die Nominalisierung – der Satz hieße „Habe ich gesagt, dass du verstanden hast?“' },
    { type: 'typing',
      prompt: 'Auf dem Tisch steht viel zu essen.',
      answer: ['Zhuōzi shàng yǒu hěn duō chī de.'],
      note: '`chī de` = „Essbares“; die Ortsangabe steht wie immer vorn.' }
  ]
},

{
  id: 'b2-passiv-varianten',
  title: 'Passiv-Varianten: 让 / 叫 / 给',
  level: 'B2',
  relatedTopicIds: ['nachrichten', 'arbeit'],
  explanation:
    'Neben `bèi` (B1) gibt es drei umgangssprachliche Passivzeichen. Sie bedeuten dasselbe, ' +
    'klingen aber lockerer.\n\n' +
    '**`ràng`** – am häufigsten im Alltag:\n' +
    '`Wǒ de bēizi ràng tā dǎpò le.` – Meine Tasse wurde von ihm zerbrochen.\n\n' +
    '**`jiào`** – gleichbedeutend, noch umgangssprachlicher:\n' +
    '`Qián jiào xiǎotōu tōuzǒu le.` – Das Geld wurde vom Dieb gestohlen.\n\n' +
    '**`gěi`** – am saloppsten, oft zusätzlich zu `bèi`:\n' +
    '`Shū gěi tā ná zǒu le.` – Das Buch hat er mitgenommen.\n' +
    '`Wǒ de chē bèi rén gěi zhuàng le.` – Mein Auto wurde angefahren. (`bèi … gěi …` ' +
    'verstärkt, ohne die Bedeutung zu ändern)\n\n' +
    '**Der wichtige Unterschied zu `bèi`:** Bei `ràng` und `jiào` **muss der Handelnde ' +
    'genannt werden**. `Wǒ de bēizi ràng dǎpò le` ist falsch. Ist der Urheber unbekannt, ' +
    'behilft man sich mit `rén` („jemand“): `ràng rén dǎpò le`. Nur `bèi` darf allein stehen.\n\n' +
    '**Verwechslungsgefahr:** `ràng` und `jiào` heißen auch **„lassen“ bzw. „heißen/rufen“** ' +
    '– und dann ist der Satz aktiv:\n' +
    '`Lǎoshī ràng wǒmen liànxí.` – Der Lehrer lässt uns üben. (aktiv)\n' +
    '`Wǒ ràng tā pīpíng le.` – Ich wurde von ihm kritisiert. (passiv)\n\n' +
    'Woran man es erkennt: Steht am Ende eine **Ergänzung** (`le`, ein Ergebnis), ist es ' +
    'Passiv; folgt ein zweites Verb als Auftrag, ist es der Veranlassungssatz.',
  examples: [
    { pinyin: 'Wǒ de bēizi ràng tā dǎpò le.', de: 'Meine Tasse wurde von ihm zerbrochen.', hanzi: '我的杯子让他打破了。' },
    { pinyin: 'Qián jiào xiǎotōu tōuzǒu le.', de: 'Das Geld wurde vom Dieb gestohlen.', hanzi: '钱叫小偷偷走了。' },
    { pinyin: 'Shū gěi tā ná zǒu le.', de: 'Das Buch hat er mitgenommen.', hanzi: '书给他拿走了。' },
    { pinyin: 'Wǒ de chē bèi rén gěi zhuàng le.', de: 'Mein Auto wurde angefahren.', hanzi: '我的车被人给撞了。' },
    { pinyin: 'Lǎoshī ràng wǒmen duō liànxí.', de: 'Der Lehrer lässt uns viel üben.', hanzi: '老师让我们多练习。' },
    { pinyin: 'Dōngxi ràng rén ná zǒu le.', de: 'Die Sachen hat jemand mitgenommen.', hanzi: '东西让人拿走了。' }
  ],
  drills: [
    { type: 'multipleChoice',
      prompt: 'Welcher Unterschied besteht zwischen `bèi` und `ràng` im Passiv?',
      options: [
        'Bei `ràng` muss der Handelnde genannt werden, bei `bèi` darf er fehlen.',
        '`ràng` steht nur in der Schriftsprache.',
        '`bèi` bildet kein echtes Passiv.',
        '`ràng` erfordert immer ein Modalverb.'
      ],
      answer: 'Bei `ràng` muss der Handelnde genannt werden, bei `bèi` darf er fehlen.',
      note: 'Ist der Urheber unbekannt, hilft `rén`: `ràng rén ná zǒu le`.' },
    { type: 'errorCorrection',
      prompt: 'Wǒ de bēizi ràng dǎpò le.',
      de: 'Meine Tasse wurde zerbrochen.',
      answer: ['Wǒ de bēizi ràng rén dǎpò le.', 'Wǒ de bēizi bèi dǎpò le.'],
      note: '`ràng` braucht einen Handelnden – entweder `rén` einsetzen oder auf `bèi` ausweichen.' },
    { type: 'multipleChoice',
      prompt: 'Welcher Satz ist AKTIV (Veranlassung), nicht Passiv?',
      options: [
        'Lǎoshī ràng wǒmen duō liànxí.',
        'Wǒ ràng tā pīpíng le.',
        'Qián jiào xiǎotōu tōuzǒu le.',
        'Shū gěi tā ná zǒu le.'
      ],
      answer: 'Lǎoshī ràng wǒmen duō liànxí.',
      note: 'Folgt ein zweites Verb als Auftrag, ist es Veranlassung; endet der Satz mit einer Ergänzung, Passiv.' },
    { type: 'transformation',
      prompt: 'Ersetze `bèi` durch die umgangssprachliche Variante `ràng`: Wǒ de bēizi bèi tā dǎpò le.',
      de: 'Meine Tasse wurde von ihm zerbrochen.',
      answer: ['Wǒ de bēizi ràng tā dǎpò le.'],
      note: 'Der Handelnde `tā` ist genannt, also ist `ràng` möglich.' },
    { type: 'sentenceOrder',
      prompt: 'Das Geld wurde vom Dieb gestohlen.',
      options: ['tōuzǒu le', 'qián', 'xiǎotōu', 'jiào'],
      answer: ['qián', 'jiào', 'xiǎotōu', 'tōuzǒu le'],
      hanzi: '钱叫小偷偷走了。' },
    { type: 'typing',
      prompt: 'Die Sachen hat jemand mitgenommen.',
      answer: ['Dōngxi ràng rén ná zǒu le.', 'Dōngxi bèi rén ná zǒu le.'],
      note: '`rén` steht als unbestimmter Handelnder – bei `ràng` ist er Pflicht.' }
  ]
},

{
  id: 'b2-konnektoren',
  title: 'Konnektoren für zusammenhängende Texte',
  level: 'B2',
  relatedTopicIds: ['meinung', 'nachrichten'],
  explanation:
    'Auf B2 entscheidet sich nicht mehr, ob ein Satz richtig ist, sondern ob mehrere Sätze ' +
    '**zusammenhängen**. Dafür braucht es Gelenkwörter.\n\n' +
    '**Aufzählen und gliedern:**\n' +
    '`shǒuxiān` (zuerst) · `qícì` (als Nächstes) · `zuìhòu` (zuletzt) · ' +
    '`yì fāngmiàn … lìng yì fāngmiàn …` (einerseits … andererseits)\n\n' +
    '**Ergänzen:**\n' +
    '`cǐwài` (darüber hinaus) · `lìngwài` (außerdem) · `érqiě` (und zudem) · ' +
    '`tóngshí` (zugleich)\n\n' +
    '**Einschränken und gegenüberstellen:**\n' +
    '`rán\'ér` (jedoch – schriftsprachlich) · `búguò` (allerdings – gesprochen) · ' +
    '`xiāngfǎn` (im Gegenteil) · `xiāngbǐ zhī xià` (im Vergleich dazu)\n\n' +
    '**Folgern:**\n' +
    '`yīncǐ` (daher) · `yúshì` (daraufhin) · `kějiàn` (daran sieht man) · ' +
    '`zǒngzhī` (kurzum)\n\n' +
    '**Beispiele geben und erläutern:**\n' +
    '`lìrú` / `bǐrú` (zum Beispiel) · `yě jiù shì shuō` (das heißt) · ' +
    '`jùtǐ lái shuō` (konkret gesagt)\n\n' +
    '**Registerfrage:** `rán\'ér`, `yīncǐ`, `cǐwài` und `zǒngzhī` gehören in geschriebene ' +
    'Texte und Vorträge. Im Gespräch klingen sie steif – dort sagt man `búguò`, `suǒyǐ`, ' +
    '`lìngwài`, `fǎnzhèng`. Wer die Register mischt, wird verstanden, wirkt aber ' +
    'ungelenk – genau wie jemand, der auf Deutsch „mithin“ in eine Unterhaltung streut.',
  examples: [
    { pinyin: 'Shǒuxiān, wǒmen yào liǎojiě wèntí de yuányīn.', de: 'Zuerst müssen wir die Ursache des Problems verstehen.', hanzi: '首先，我们要了解问题的原因。' },
    { pinyin: 'Yì fāngmiàn jiàgé gāo, lìng yì fāngmiàn zhìliàng yě bù hǎo.', de: 'Einerseits ist der Preis hoch, andererseits ist auch die Qualität schlecht.', hanzi: '一方面价格高，另一方面质量也不好。' },
    { pinyin: 'Rán\'ér, zhè zhǒng zuòfǎ yě yǒu fēngxiǎn.', de: 'Jedoch birgt dieses Vorgehen auch Risiken.', hanzi: '然而，这种做法也有风险。' },
    { pinyin: 'Yīncǐ, wǒmen jiànyì tuīchí zhè ge jìhuà.', de: 'Daher schlagen wir vor, diesen Plan zu verschieben.', hanzi: '因此，我们建议推迟这个计划。' },
    { pinyin: 'Cǐwài, hái yǒu yí ge wèntí xūyào tǎolùn.', de: 'Darüber hinaus gibt es noch ein Problem zu besprechen.', hanzi: '此外，还有一个问题需要讨论。' },
    { pinyin: 'Zǒngzhī, zhè shì yí ge zhídé guānzhù de xiànxiàng.', de: 'Kurzum, das ist ein beachtenswertes Phänomen.', hanzi: '总之，这是一个值得关注的现象。' }
  ],
  drills: [
    { type: 'fillBlank',
      prompt: '___, wǒmen jiànyì tuīchí zhè ge jìhuà. (Daher schlagen wir vor …)',
      options: ['Yīncǐ', 'Cǐwài', 'Rán\'ér', 'Shǒuxiān'],
      answer: 'Yīncǐ',
      note: '`yīncǐ` leitet eine Folgerung ein.' },
    { type: 'fillBlank',
      prompt: '___, zhè zhǒng zuòfǎ yě yǒu fēngxiǎn. (Jedoch …)',
      options: ['Rán\'ér', 'Yīncǐ', 'Tóngshí', 'Qícì'],
      answer: 'Rán\'ér',
      note: '`rán\'ér` stellt schriftsprachlich einen Gegensatz her.' },
    { type: 'multipleChoice',
      prompt: 'Welcher Konnektor passt NICHT in ein lockeres Gespräch?',
      options: ['rán\'ér', 'búguò', 'suǒyǐ', 'lìngwài'],
      answer: 'rán\'ér',
      note: '`rán\'ér` gehört in geschriebene Texte; gesprochen sagt man `búguò`.' },
    { type: 'sentenceOrder',
      prompt: 'Einerseits ist der Preis hoch, andererseits ist auch die Qualität schlecht.',
      options: ['zhìliàng yě bù hǎo', 'yì fāngmiàn', 'lìng yì fāngmiàn', 'jiàgé gāo'],
      answer: ['yì fāngmiàn', 'jiàgé gāo', 'lìng yì fāngmiàn', 'zhìliàng yě bù hǎo'],
      hanzi: '一方面价格高，另一方面质量也不好。' },
    { type: 'transformation',
      prompt: 'Ersetze den gesprochenen Konnektor durch den schriftsprachlichen: Búguò, zhè yě yǒu fēngxiǎn.',
      de: 'Allerdings birgt das auch Risiken.',
      answer: ['Rán\'ér, zhè yě yǒu fēngxiǎn.'],
      note: '`búguò` (gesprochen) und `rán\'ér` (geschrieben) bedeuten dasselbe.' },
    { type: 'typing',
      prompt: 'Kurzum, das ist ein beachtenswertes Phänomen.',
      answer: ['Zǒngzhī, zhè shì yí ge zhídé guānzhù de xiànxiàng.',
               'Zǒngzhī, zhè shì yí ge zhídé guānzhù de xiànxiàng'],
      note: '`zǒngzhī` fasst zusammen und steht am Anfang des Schlusssatzes.' }
  ]
},

{
  id: 'b2-chengyu',
  title: 'Chengyu: die Viererformeln',
  level: 'B2',
  relatedTopicIds: ['feste', 'meinung'],
  explanation:
    'Chengyu (`chéngyǔ`) sind feste Wendungen aus meist **vier Silben**. Sie stammen ' +
    'überwiegend aus klassischen Texten und verdichten eine ganze Geschichte oder ein ' +
    'Sprichwort in vier Zeichen.\n\n' +
    'Ein Chengyu ist **nicht** aus seinen Einzelteilen erschließbar. `mǎmǎhūhū` heißt ' +
    'wörtlich „Pferd-Pferd-Tiger-Tiger“ und bedeutet „so lala“ – die Bedeutung muss man ' +
    'lernen, nicht ableiten.\n\n' +
    '**Im Satz** verhalten sie sich meist wie Adjektive oder Adverbien:\n' +
    '`Tā de Hànyǔ mǎmǎhūhū.` – Sein Chinesisch ist mittelmäßig.\n' +
    '`Wǒmen yīnggāi shíshìqiúshì.` – Wir sollten sachlich bleiben.\n\n' +
    '**Ein Wort zur Vorsicht:** Chengyu wirken gebildet – aber falsch eingesetzt wirken ' +
    'sie auffällig falsch. Wenige sicher zu beherrschen ist besser, als viele zu streuen. ' +
    'Im Zweifel lieber einfach formulieren.\n\n' +
    '**Ein Anfangsvorrat, der im Alltag wirklich vorkommt:**\n\n' +
    '`mǎmǎhūhū` – so lala, mittelmäßig\n' +
    '`luànqībāzāo` – heilloses Durcheinander\n' +
    '`bùhǎoyìsi` – peinlich berührt (streng genommen kein Chengyu, aber genauso fest)\n' +
    '`yìjǔliǎngdé` – zwei Fliegen mit einer Klappe\n' +
    '`quánlìyǐfù` – mit aller Kraft\n' +
    '`bùkěsīyì` – unfassbar, undenkbar\n' +
    '`pòbùdéyǐ` – notgedrungen, es half nichts\n' +
    '`shíshìqiúshì` – den Tatsachen entsprechend, sachlich\n' +
    '`yìfānfēngshùn` – möge alles glattgehen (Glückwunsch)\n' +
    '`gōngxǐfācái` – viel Glück und Reichtum (Neujahrsgruß)',
  examples: [
    { pinyin: 'Tā de Hànyǔ mǎmǎhūhū.', de: 'Sein Chinesisch ist mittelmäßig.', hanzi: '他的汉语马马虎虎。' },
    { pinyin: 'Fángjiān luànqībāzāo.', de: 'Das Zimmer ist ein heilloses Durcheinander.', hanzi: '房间乱七八糟。' },
    { pinyin: 'Zhè yàng zuò kěyǐ yìjǔliǎngdé.', de: 'So schlägt man zwei Fliegen mit einer Klappe.', hanzi: '这样做可以一举两得。' },
    { pinyin: 'Wǒmen huì quánlìyǐfù de bāngzhù nǐ.', de: 'Wir werden dir mit aller Kraft helfen.', hanzi: '我们会全力以赴地帮助你。' },
    { pinyin: 'Zhè jiàn shì zhēnshi bùkěsīyì.', de: 'Diese Sache ist wirklich unfassbar.', hanzi: '这件事真是不可思议。' },
    { pinyin: 'Gōngxǐfācái! Zhù nǐ yìfānfēngshùn.', de: 'Viel Glück und Erfolg! Möge alles glattgehen.', hanzi: '恭喜发财！祝你一帆风顺。' }
  ],
  drills: [
    { type: 'multipleChoice',
      prompt: 'Was bedeutet `mǎmǎhūhū`?',
      options: [
        'So lala, mittelmäßig.',
        'Sehr gut.',
        'Sehr schnell.',
        'Völlig falsch.'
      ],
      answer: 'So lala, mittelmäßig.',
      note: 'Wörtlich „Pferd-Pferd-Tiger-Tiger“ – die Bedeutung ist nicht ableitbar.' },
    { type: 'fillBlank',
      prompt: 'Fángjiān ___. (Das Zimmer ist ein heilloses Durcheinander.)',
      options: ['luànqībāzāo', 'mǎmǎhūhū', 'shíshìqiúshì', 'yìfānfēngshùn'],
      answer: 'luànqībāzāo',
      note: '`luànqībāzāo` beschreibt ein völliges Durcheinander.' },
    { type: 'multipleChoice',
      prompt: 'Welcher Rat gilt für den Gebrauch von Chengyu?',
      options: [
        'Lieber wenige sicher beherrschen als viele unsicher streuen.',
        'In jedem zweiten Satz einen verwenden.',
        'Nur in der gesprochenen Sprache benutzen.',
        'Die Einzelzeichen übersetzen und daraus die Bedeutung ableiten.'
      ],
      answer: 'Lieber wenige sicher beherrschen als viele unsicher streuen.',
      note: 'Falsch eingesetzte Chengyu fallen stärker auf als gar keine.' },
    { type: 'fillBlank',
      prompt: 'Wǒmen yīnggāi ___, bù néng zhǐ kào cāicè. (Wir sollten sachlich bleiben.)',
      options: ['shíshìqiúshì', 'luànqībāzāo', 'mǎmǎhūhū', 'bùkěsīyì'],
      answer: 'shíshìqiúshì',
      note: '`shíshìqiúshì` heißt „den Tatsachen entsprechend“.' },
    { type: 'sentenceOrder',
      prompt: 'Diese Sache ist wirklich unfassbar.',
      options: ['bùkěsīyì', 'zhè jiàn shì', 'zhēnshi'],
      answer: ['zhè jiàn shì', 'zhēnshi', 'bùkěsīyì'],
      hanzi: '这件事真是不可思议。' },
    { type: 'typing',
      prompt: 'Sein Chinesisch ist mittelmäßig.',
      answer: ['Tā de Hànyǔ mǎmǎhūhū.'],
      note: 'Das Chengyu steht hier wie ein Adjektiv – ohne `hěn`.' }
  ]
},

{
  id: 'b2-indirekte-rede',
  title: 'Indirekte Rede',
  level: 'B2',
  relatedTopicIds: ['nachrichten', 'meinung'],
  explanation:
    'Die indirekte Rede ist im Chinesischen **einfacher als im Deutschen** – es gibt ' +
    'keinen Konjunktiv, keine Zeitenverschiebung, keine Modusänderung. Der Inhalt wird ' +
    'unverändert angehängt:\n\n' +
    '`Tā shuō tā míngtiān lái.` – Er sagt, er komme morgen.\n\n' +
    'Wörtlich steht da „Er sagt, er kommt morgen“. Das ist die ganze Umformung.\n\n' +
    '**Was sich ändert, sind nur die Pronomen** – und zwar nach derselben Logik wie im ' +
    'Deutschen:\n' +
    '`„Wǒ míngtiān lái.“` (Ich komme morgen.) → `Tā shuō tā míngtiān lái.` (Er sagt, er komme morgen.)\n\n' +
    '**Zeitwörter müssen mitgedacht werden.** Da es keine Zeitenfolge gibt, kann `míngtiān` ' +
    'mehrdeutig werden: morgen von wann aus? In sorgfältigen Texten ersetzt man es durch ' +
    'einen festen Bezug: `Tā shuō tā dì-èr tiān lái.` – Er sagte, er komme am nächsten Tag.\n\n' +
    '**Indirekte Fragen** behalten die Fragewortstellung, verlieren aber das `ma`:\n' +
    '`Tā wèn wǒ shénme shíhou lái.` – Er fragte mich, wann ich komme.\n' +
    '`Tā wèn wǒ qù bú qù.` – Er fragte, ob ich hingehe. (A-nicht-A statt „ob“)\n\n' +
    'Für „ob“ gibt es außerdem `shìfǒu` (schriftsprachlich): `Tā wèn wǒ shìfǒu tóngyì.` (Er fragte mich, ob ich zustimme.)\n\n' +
    '**Redeeinleitende Verben:** `shuō` (sagen) · `gàosu` (mitteilen) · `wèn` (fragen) · ' +
    '`rènwéi` (der Ansicht sein) · `biǎoshì` (erklären, offiziell) · `zhǐchū` (darauf ' +
    'hinweisen) · `chēng` (bezeichnen als, in Nachrichten).\n\n' +
    'In Nachrichtentexten ist `jùshuō` (es heißt) die übliche Quellenangabe, wenn niemand ' +
    'namentlich zitiert wird.',
  examples: [
    { pinyin: 'Tā shuō tā míngtiān lái.', de: 'Er sagt, er komme morgen.', hanzi: '他说他明天来。' },
    { pinyin: 'Tā gàosu wǒ tā yǐjīng dào le.', de: 'Er teilte mir mit, dass er schon angekommen sei.', hanzi: '他告诉我他已经到了。' },
    { pinyin: 'Tā wèn wǒ shénme shíhou lái.', de: 'Er fragte mich, wann ich komme.', hanzi: '他问我什么时候来。' },
    { pinyin: 'Tā wèn wǒ qù bú qù.', de: 'Er fragte, ob ich hingehe.', hanzi: '他问我去不去。' },
    { pinyin: 'Fāyánrén biǎoshì zhèngfǔ huì cǎiqǔ cuòshī.', de: 'Der Sprecher erklärte, die Regierung werde Maßnahmen ergreifen.', hanzi: '发言人表示政府会采取措施。' },
    { pinyin: 'Jùshuō zhè jiā gōngsī yào shàngshì.', de: 'Es heißt, diese Firma wolle an die Börse gehen.', hanzi: '据说这家公司要上市。' }
  ],
  drills: [
    { type: 'transformation',
      prompt: 'Forme in indirekte Rede um: Tā shuō: „Wǒ míngtiān lái.“',
      de: 'Er sagt: „Ich komme morgen.“',
      answer: ['Tā shuō tā míngtiān lái.'],
      note: 'Nur das Pronomen ändert sich – kein Konjunktiv, keine Zeitenverschiebung.' },
    { type: 'multipleChoice',
      prompt: 'Was ändert sich bei der Umformung in die indirekte Rede?',
      options: [
        'Nur die Pronomen – Verbform und Zeitwörter bleiben.',
        'Das Verb wird in den Konjunktiv gesetzt.',
        'Die Zeitform rückt eine Stufe zurück.',
        'Die Wortstellung wird umgekehrt.'
      ],
      answer: 'Nur die Pronomen – Verbform und Zeitwörter bleiben.',
      note: 'Chinesische Verben sind unveränderlich, es gibt weder Konjunktiv noch Zeitenfolge.' },
    { type: 'errorCorrection',
      prompt: 'Tā wèn wǒ shénme shíhou lái ma.',
      de: 'Er fragte mich, wann ich komme.',
      answer: ['Tā wèn wǒ shénme shíhou lái.'],
      note: 'In der indirekten Frage fällt `ma` weg; das Fragewort bleibt an seinem Platz.' },
    { type: 'fillBlank',
      prompt: 'Tā wèn wǒ ___ tóngyì. (Er fragte mich, ob ich zustimme – schriftsprachlich)',
      options: ['shìfǒu', 'ma', 'ne', 'ba'],
      answer: 'shìfǒu',
      note: '`shìfǒu` ist das schriftsprachliche „ob“.' },
    { type: 'sentenceOrder',
      prompt: 'Er teilte mir mit, dass er schon angekommen sei.',
      options: ['yǐjīng dào le', 'tā gàosu wǒ', 'tā'],
      answer: ['tā gàosu wǒ', 'tā', 'yǐjīng dào le'],
      hanzi: '他告诉我他已经到了。' },
    { type: 'typing',
      prompt: 'Es heißt, diese Firma wolle an die Börse gehen.',
      answer: ['Jùshuō zhè jiā gōngsī yào shàngshì.'],
      note: '`jùshuō` ist die übliche Quellenangabe ohne namentliches Zitat.' }
  ]
},

{
  id: 'b2-modalpartikeln',
  title: 'Modalpartikeln: 呢 吧 啊 im Zusammenhang',
  level: 'B2',
  relatedTopicIds: ['begruessung', 'gefuehle'],
  explanation:
    'Modalpartikeln tragen keine eigene Bedeutung – sie färben den Satz. Wer sie weglässt, ' +
    'wird verstanden, klingt aber schroff. Wer sie falsch setzt, klingt seltsam. Sie sind ' +
    'der Unterschied zwischen korrektem und natürlichem Chinesisch.\n\n' +
    '**`ne`** – hält den Satz in der Schwebe.\n' +
    '- Rückfrage: `Wǒ hěn hǎo, nǐ ne?` – Mir geht\'s gut, und dir?\n' +
    '- Andauern: `Tā zài kàn shū ne.` – Er liest gerade (noch).\n' +
    '- Frage nach Ort/Verbleib: `Wǒ de yàoshi ne?` – Wo ist mein Schlüssel?\n' +
    '- milde Nachdrücklichkeit: `Hái zǎo ne.` – Es ist doch noch früh.\n\n' +
    '**`ba`** – nimmt dem Satz die Härte.\n' +
    '- Vorschlag: `Wǒmen zǒu ba.` – Gehen wir doch.\n' +
    '- weicher Auftrag: `Nǐ xiūxi yíxià ba.` – Ruh dich ein wenig aus.\n' +
    '- Vermutung mit Zustimmungswunsch: `Nǐ shì Déguó rén ba?` – Du bist doch Deutscher, ' +
    'oder? (anders als `ma`, das offen fragt)\n' +
    '- widerwillige Zustimmung: `Hǎo ba.` – Na gut.\n\n' +
    '**`a` / `ya`** – Gefühl, Nachdruck, Wärme.\n' +
    '- Ausruf: `Zhēn piàoliang a!` – Wie schön!\n' +
    '- freundliche Aufforderung: `Kuài lái a!` – Komm doch schnell!\n' +
    '- Erstaunen: `Shì nǐ a!` – Ach, du bist es!\n\n' +
    'Die Silbe verändert sich lautlich nach dem vorangehenden Laut (`ya`, `wa`, `na`) – ' +
    'in der tonlosen Schreibweise sieht man das als `ya` oder `a`.\n\n' +
    '**Der entscheidende Kontrast:** Alle drei sagen „Du bist Deutscher“ – `Nǐ shì Déguó rén ma?` fragt echt. ' +
    '`Nǐ shì Déguó rén ba?` vermutet und sucht Bestätigung. ' +
    '`Nǐ shì Déguó rén a!` ist Erstaunen, keine Frage.',
  examples: [
    { pinyin: 'Wǒ hěn hǎo, nǐ ne?', de: 'Mir geht es gut, und dir?', hanzi: '我很好，你呢？' },
    { pinyin: 'Wǒmen zǒu ba.', de: 'Gehen wir doch.', hanzi: '我们走吧。' },
    { pinyin: 'Nǐ shì Déguó rén ba?', de: 'Du bist doch Deutscher, oder?', hanzi: '你是德国人吧？' },
    { pinyin: 'Zhēn piàoliang a!', de: 'Wie schön!', hanzi: '真漂亮啊！' },
    { pinyin: 'Wǒ de yàoshi ne?', de: 'Wo ist mein Schlüssel?', hanzi: '我的钥匙呢？' },
    { pinyin: 'Hǎo ba, wǒ tóngyì.', de: 'Na gut, ich stimme zu.', hanzi: '好吧，我同意。' }
  ],
  drills: [
    { type: 'multipleChoice',
      prompt: 'Was unterscheidet `Nǐ shì Déguó rén ba?` von `Nǐ shì Déguó rén ma?`',
      options: [
        '`ba` vermutet und sucht Bestätigung, `ma` fragt offen.',
        '`ba` ist höflicher, sonst gleich.',
        '`ba` steht nur in der Vergangenheit.',
        'Es gibt keinen Unterschied.'
      ],
      answer: '`ba` vermutet und sucht Bestätigung, `ma` fragt offen.',
      note: 'Mit `ba` rechnet der Sprecher bereits mit einem Ja.' },
    { type: 'fillBlank',
      prompt: 'Wǒmen zǒu ___. (Gehen wir doch.)',
      options: ['ba', 'ma', 'ne', 'le'],
      answer: 'ba',
      note: '`ba` macht aus der Aussage einen weichen Vorschlag.' },
    { type: 'fillBlank',
      prompt: 'Wǒ hěn hǎo, nǐ ___? (Mir geht es gut, und dir?)',
      options: ['ne', 'ba', 'a', 'ma'],
      answer: 'ne',
      note: '`ne` bildet die kurze Rückfrage.' },
    { type: 'multipleChoice',
      prompt: 'Welche Partikel drückt Erstaunen oder einen Ausruf aus?',
      options: ['a', 'ne', 'ba', 'ma'],
      answer: 'a',
      note: '`Zhēn piàoliang a!` – die Partikel trägt das Gefühl.' },
    { type: 'errorCorrection',
      prompt: 'Wǒmen zǒu ma.',
      de: 'Gehen wir doch.',
      answer: ['Wǒmen zǒu ba.'],
      note: '`ma` würde daraus eine echte Frage machen; der Vorschlag braucht `ba`.' },
    { type: 'typing',
      prompt: 'Wo ist mein Schlüssel?',
      answer: ['Wǒ de yàoshi ne?', 'Wǒ de yàoshi ne'],
      note: '`ne` nach einem Substantiv fragt nach dem Verbleib – ganz ohne Verb.' }
  ]
}

]);
