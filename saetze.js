/* Pinyin-Trainer – Satzbestand für Lückentexte
 *
 * Warum es diese Datei gibt: Ein Lückentext braucht einen Satz, der die gesuchte
 * Vokabel enthält. Jeder Vokabel einen eigenen Satz mitzugeben wäre doppelte Arbeit –
 * ein guter Satz bedient vier bis sechs Wörter auf einmal. `uebungen.js` legt deshalb
 * einen Index über ALLE Sätze der App (Vokabel-Beispiele, Grammatik-Beispiele und
 * diese hier) und sucht sich zu jeder Vokabel einen passenden heraus.
 *
 * Die Sätze hier sind bewusst **dicht gepackt**: möglichst viele Wörter des
 * Zielniveaus in einem natürlichen Satz. Wer neue schreibt, sollte es genauso halten.
 *
 * Format: [pinyin, deutsch, hanzi]
 */
SatzDaten.add([

  /* ---- Alltag, Begrüßung, Höflichkeit ---- */
  ['Huānyíng nǐ lái, qǐng jìnlái zuò yíhuìr.', 'Willkommen, komm herein und setz dich einen Moment.', '欢迎你来，请进来坐一会儿。'],
  ['Wǒ jièshào yíxià, zhè shì wǒ de tóngshì.', 'Darf ich vorstellen, das ist mein Kollege.', '我介绍一下，这是我的同事。'],
  ['Hǎojiǔ bú jiàn, nǐ zuìjìn zěnmeyàng?', 'Lange nicht gesehen, wie geht es dir in letzter Zeit?', '好久不见，你最近怎么样？'],
  ['Máfan nǐ le, zhēn bù hǎoyìsi.', 'Entschuldige die Umstände, das ist mir wirklich peinlich.', '麻烦你了，真不好意思。'],
  ['Tā rén hěn rèqíng, yě hěn yǒu lǐmào.', 'Er ist sehr herzlich und außerdem sehr höflich.', '他人很热情，也很有礼貌。'],
  ['Wǒmen bǎochí liánxì, yǒu shì gěi wǒ dǎ diànhuà.', 'Bleiben wir in Kontakt, ruf mich an, wenn etwas ist.', '我们保持联系，有事给我打电话。'],
  ['Zhè shì yí ge wùhuì, wǒ yīnggāi dàoqiàn.', 'Das ist ein Missverständnis, ich sollte mich entschuldigen.', '这是一个误会，我应该道歉。'],
  ['Tā yāoqǐng wǒ qù, kěshì wǒ jùjué le.', 'Er hat mich eingeladen, aber ich habe abgelehnt.', '他邀请我去，可是我拒绝了。'],
  ['Zài zhèngshì chǎnghé shuōhuà yào zhùyì fēncùn.', 'Bei offiziellen Anlässen muss man beim Reden das rechte Maß wahren.', '在正式场合说话要注意分寸。'],
  ['Tā hěn qiānxū, cónglái bù chēngzàn zìjǐ.', 'Er ist sehr bescheiden und lobt sich nie selbst.', '他很谦虚，从来不称赞自己。'],
  ['Zhōngguó rén hěn zàiyì miànzi hé rénmài.', 'Chinesen legen großen Wert auf Gesicht und Beziehungsnetz.', '中国人很在意面子和人脉。'],
  ['Tā shuōhuà hěn wěiwǎn, bù xiàng wǒ zhème zhíshuài.', 'Er drückt sich sehr behutsam aus, nicht so direkt wie ich.', '他说话很委婉，不像我这么直率。'],

  /* ---- Zeit, Zahlen, Häufigkeit ---- */
  ['Yǐqián wǒ chángcháng chídào, xiànzài zǒngshì ànshí dào.', 'Früher kam ich oft zu spät, jetzt bin ich immer pünktlich da.', '以前我常常迟到，现在总是按时到。'],
  ['Huìyì tuīchí le, xīn de rìqī hái méi dìng.', 'Die Besprechung wurde verschoben, das neue Datum steht noch nicht fest.', '会议推迟了，新的日期还没定。'],
  ['Wǒ yǐjīng děng le bàn ge xiǎoshí, tā mǎshàng jiù dào.', 'Ich warte schon eine halbe Stunde, er kommt gleich.', '我已经等了半个小时，他马上就到。'],
  ['Zhōumò wǒ yǒu shíjiān, wǒmen tíqián ānpái ba.', 'Am Wochenende habe ich Zeit, lass es uns vorziehen.', '周末我有时间，我们提前安排吧。'],
  ['Zhè jiàn shì zhìshǎo yào liǎng tiān, zuìduō yí ge xīngqī.', 'Das dauert mindestens zwei Tage, höchstens eine Woche.', '这件事至少要两天，最多一个星期。'],
  ['Gāngcái tā hái zài, wǒ yíhuìr zài qù zhǎo tā.', 'Eben war er noch da, ich suche ihn gleich noch mal.', '刚才他还在，我一会儿再去找他。'],
  ['Píngjūn měi tiān dàyuē sān xiǎoshí, zhōngyú wánchéng le.', 'Im Schnitt etwa drei Stunden am Tag, endlich ist es fertig.', '平均每天大约三小时，终于完成了。'],
  ['Jiàgé zēngzhǎng le bǎifēnzhī èrshí, zhè shì chángqī qūshì.', 'Der Preis ist um 20 Prozent gestiegen, das ist ein langfristiger Trend.', '价格增长了百分之二十，这是长期趋势。'],
  ['Shēnqǐng jiézhǐ dào xià ge yuè dǐ, bié cuòguò.', 'Die Bewerbungsfrist endet Ende nächsten Monats, verpass sie nicht.', '申请截止到下个月底，别错过。'],

  /* ---- Familie und Beziehungen ---- */
  ['Wǒ de qīnqi zhù zài nóngcūn, měi nián qù kàn tāmen yí cì.', 'Meine Verwandten wohnen auf dem Land, ich besuche sie einmal im Jahr.', '我的亲戚住在农村，每年去看他们一次。'],
  ['Tā zhàogù shēngbìng de fùmǔ, hěn xīnkǔ.', 'Sie kümmert sich um ihre kranken Eltern, das ist mühsam.', '她照顾生病的父母，很辛苦。'],
  ['Wǒmen chǎojià le, dàn dì-èr tiān jiù héhǎo le.', 'Wir haben gestritten, aber am nächsten Tag versöhnt.', '我们吵架了，但第二天就和好了。'],
  ['Zhàngfu hé qīzi yào hùxiāng xìnrèn hé zhīchí.', 'Mann und Frau müssen einander vertrauen und sich unterstützen.', '丈夫和妻子要互相信任和支持。'],
  ['Tā hé nǚpéngyou fēnshǒu le, xiànzài hěn nánguò.', 'Er hat sich von seiner Freundin getrennt und ist jetzt sehr traurig.', '他和女朋友分手了，现在很难过。'],
  ['Liǎng dài rén zhī jiān de dàigōu shì hěn chángjiàn de xiànxiàng.', 'Die Generationenkluft ist ein ganz alltägliches Phänomen.', '两代人之间的代沟是很常见的现象。'],
  ['Hěn duō niánqīngrén xiǎng dúlì, bù xiǎng yīlài fùmǔ.', 'Viele junge Leute wollen selbstständig sein und nicht von den Eltern abhängen.', '很多年轻人想独立，不想依赖父母。'],
  ['Shèhuì lǎolínghuà ràng shànyǎng lǎorén chéngwéi wèntí.', 'Die Überalterung der Gesellschaft macht die Versorgung alter Menschen zum Problem.', '社会老龄化让赡养老人成为问题。'],

  /* ---- Essen ---- */
  ['Fúwùyuán, qǐng gěi wǒmen càidān hé liǎng bēi yǐnliào.', 'Bedienung, bitte die Speisekarte und zwei Getränke.', '服务员，请给我们菜单和两杯饮料。'],
  ['Zhè dào cài wèidào bú cuò, jiù shì yǒudiǎnr xián.', 'Dieses Gericht schmeckt nicht schlecht, nur etwas salzig.', '这道菜味道不错，就是有点儿咸。'],
  ['Wǒ chī bǎo le, shèngxià de dǎbāo ba, bié làngfèi.', 'Ich bin satt, lass den Rest einpacken, verschwende nichts.', '我吃饱了，剩下的打包吧，别浪费。'],
  ['Xiān bǎ shūcài qiē hǎo, ránhòu chǎo wǔ fēnzhōng.', 'Erst das Gemüse schneiden, dann fünf Minuten pfannenrühren.', '先把蔬菜切好，然后炒五分钟。'],
  ['Zhè jiā cāntīng de tèsè cài yào tíqián yùdìng.', 'Die Spezialität dieses Restaurants muss man vorbestellen.', '这家餐厅的特色菜要提前预订。'],
  ['Tā chī sùshí, kǒuwèi yě hěn qīngdàn.', 'Sie isst vegetarisch und mag es außerdem mild.', '她吃素食，口味也很清淡。'],
  ['Chīfàn hòu wǒmen jiézhàng, jīntiān wǒ qǐngkè.', 'Nach dem Essen zahlen wir, heute lade ich ein.', '吃饭后我们结账，今天我请客。'],
  ['Zhǔ jīdàn bǐ kǎo ròu jiǎndān duō le.', 'Eier kochen ist viel einfacher als Fleisch grillen.', '煮鸡蛋比烤肉简单多了。'],
  ['Jiànkāng de yǐnshí yīnggāi jiézhì rèliàng de shèrù.', 'Eine gesunde Ernährung sollte die Kalorienaufnahme begrenzen.', '健康的饮食应该节制热量的摄入。'],
  ['Mǎi shíwù yào kàn bǎozhìqī hé tiānjiājì.', 'Beim Einkauf von Lebensmitteln sollte man Haltbarkeit und Zusatzstoffe beachten.', '买食物要看保质期和添加剂。'],

  /* ---- Einkaufen und Geld ---- */
  ['Zhè jiā shāngchǎng zài cùxiāo, hěn duō dōngxi dǎzhé.', 'Dieses Einkaufszentrum hat eine Verkaufsaktion, vieles ist reduziert.', '这家商场在促销，很多东西打折。'],
  ['Wǒ xiǎng shì yíxià, kěyǐ shuākǎ ma?', 'Ich möchte es anprobieren, kann ich mit Karte zahlen?', '我想试一下，可以刷卡吗？'],
  ['Zhìliàng bù hǎo jiù tuì, bié pà máfan.', 'Wenn die Qualität schlecht ist, gib es zurück, scheu die Mühe nicht.', '质量不好就退，别怕麻烦。'],
  ['Wǎnggòu fāngbiàn, kuàidì liǎng tiān jiù dào.', 'Online einkaufen ist praktisch, das Paket ist in zwei Tagen da.', '网购方便，快递两天就到。'],
  ['Wǒ de yùsuàn bù gāo, suǒyǐ xuǎnzé le piányi de.', 'Mein Budget ist nicht hoch, deshalb habe ich das billige gewählt.', '我的预算不高，所以选择了便宜的。'],
  ['Zài shìchǎng kěyǐ tǎojià huánjià, zài chāoshì bù xíng.', 'Auf dem Markt kann man feilschen, im Supermarkt nicht.', '在市场可以讨价还价，在超市不行。'],
  ['Tā qù yínháng cún qián, wǒ qù qǔ qián.', 'Er geht zur Bank, um Geld einzuzahlen, ich hebe welches ab.', '他去银行存钱，我去取钱。'],
  ['Dàikuǎn de lìxī tài gāo, wǒ hái shì fàngqì le.', 'Die Kreditzinsen sind zu hoch, ich habe es doch gelassen.', '贷款的利息太高，我还是放弃了。'],
  ['Lǐxìng xiāofèi bǐ chōngdòng gòuwù huásuàn de duō.', 'Vernünftiger Konsum lohnt sich viel mehr als Impulskäufe.', '理性消费比冲动购物划算得多。'],

  /* ---- Wohnen ---- */
  ['Wǒ zū le yí tào gōngyù, fángzū bāokuò shuǐdiànfèi.', 'Ich habe eine Wohnung gemietet, die Miete schließt Wasser und Strom ein.', '我租了一套公寓，房租包括水电费。'],
  ['Fángdōng yāoqiú xiān fù yājīn, ránhòu qiān hétong.', 'Der Vermieter verlangt zuerst die Kaution, dann wird der Vertrag unterschrieben.', '房东要求先付押金，然后签合同。'],
  ['Zhè ge xiǎoqū hěn ānjìng, jiāotōng yě fāngbiàn.', 'Dieses Viertel ist sehr ruhig und verkehrsgünstig gelegen.', '这个小区很安静，交通也方便。'],
  ['Wǒ měi ge zhōumò dǎsǎo fángjiān, bǎ lājī fēnlèi.', 'Jedes Wochenende putze ich das Zimmer und trenne den Müll.', '我每个周末打扫房间，把垃圾分类。'],
  ['Wòshì hěn kuānchang, yángtái shàng hái néng zhòng huā.', 'Das Schlafzimmer ist geräumig, auf dem Balkon kann man sogar Blumen pflanzen.', '卧室很宽敞，阳台上还能种花。'],
  ['Diàntī huài le, wǒmen zhǐ néng zǒu lóutī shàngqù.', 'Der Aufzug ist kaputt, wir müssen die Treppe hochgehen.', '电梯坏了，我们只能走楼梯上去。'],
  ['Dà chéngshì de fángjià tài gāo, niánqīngrén mǎi bu qǐ.', 'Die Immobilienpreise in Großstädten sind zu hoch, junge Leute können sie sich nicht leisten.', '大城市的房价太高，年轻人买不起。'],
  ['Zhè tào fángzi cháoxiàng hǎo, cǎiguāng hé géyīn dōu bú cuò.', 'Diese Wohnung ist gut ausgerichtet, Licht und Schallschutz sind ordentlich.', '这套房子朝向好，采光和隔音都不错。'],

  /* ---- Körper und Gesundheit ---- */
  ['Wǒ gǎnmào le, tóu téng yě fāshāo.', 'Ich habe mich erkältet, mein Kopf schmerzt und ich habe Fieber.', '我感冒了，头疼也发烧。'],
  ['Yīshēng gěi wǒ jiǎnchá le shēntǐ, ràng wǒ duō xiūxi.', 'Der Arzt hat mich untersucht und mir gesagt, ich solle mich mehr ausruhen.', '医生给我检查了身体，让我多休息。'],
  ['Tā késou le yí ge xīngqī, zuótiān qù le yàodiàn.', 'Er hustet seit einer Woche und war gestern in der Apotheke.', '他咳嗽了一个星期，昨天去了药店。'],
  ['Duànliàn shēntǐ bǐ chī yào gèng zhòngyào.', 'Sich zu bewegen ist wichtiger als Medikamente zu nehmen.', '锻炼身体比吃药更重要。'],
  ['Wǒ duì huāfěn guòmǐn, chūntiān zǒngshì nánshòu.', 'Ich bin gegen Pollen allergisch, im Frühling geht es mir immer schlecht.', '我对花粉过敏，春天总是难受。'],
  ['Zhè zhǒng yào yǒu fùzuòyòng, xūyào yīshēng de chǔfāng.', 'Dieses Medikament hat Nebenwirkungen und braucht ein ärztliches Rezept.', '这种药有副作用，需要医生的处方。'],
  ['Gōngzuò yālì dà, tā shīmián yě jiāolǜ.', 'Der Arbeitsdruck ist groß, er schläft schlecht und ist ängstlich.', '工作压力大，他失眠也焦虑。'],
  ['Guīlǜ de zuòxī duì xīnlǐ jiànkāng hěn yǒu bāngzhù.', 'Ein regelmäßiger Tagesrhythmus hilft der psychischen Gesundheit sehr.', '规律的作息对心理健康很有帮助。'],

  /* ---- Kleidung ---- */
  ['Zhè jiàn chènshān hé nà tiáo niúzǎikù hěn dāpèi.', 'Dieses Hemd und die Jeans passen gut zusammen.', '这件衬衫和那条牛仔裤很搭配。'],
  ['Nín chuān duō dà chǐmǎ? Zhè jiàn héshì ma?', 'Welche Größe tragen Sie? Passt dieses hier?', '您穿多大尺码？这件合适吗？'],
  ['Tiān lěng le, jìde dài shǒutào hé wéijīn.', 'Es ist kalt geworden, denk an Handschuhe und Schal.', '天冷了，记得戴手套和围巾。'],
  ['Jìnrù fángjiān qǐng tuō xié, chuān tuōxié.', 'Beim Betreten des Zimmers bitte die Schuhe ausziehen und Hausschuhe anziehen.', '进入房间请脱鞋，穿拖鞋。'],
  ['Tā chuānyī pǔsù, dàn hěn yǒu pǐnwèi.', 'Er kleidet sich schlicht, aber mit viel Geschmack.', '他穿衣朴素，但很有品位。'],
  ['Zhè zhǒng miànliào shūfu, jiǎncái yě hěn zhèngshì.', 'Dieser Stoff ist angenehm und der Schnitt sehr formell.', '这种面料舒服，剪裁也很正式。'],

  /* ---- Wetter ---- */
  ['Tiānqì yùbào shuō míngtiān yīn, hòutiān qíng.', 'Die Wettervorhersage sagt, morgen ist es bewölkt, übermorgen sonnig.', '天气预报说明天阴，后天晴。'],
  ['Jīntiān qìwēn língxià wǔ dù, bǐ zuótiān lěng.', 'Heute sind es minus fünf Grad, kälter als gestern.', '今天气温零下五度，比昨天冷。'],
  ['Chūntiān nuǎnhuo, qiūtiān liángkuai, wǒ dōu xǐhuan.', 'Der Frühling ist mild, der Herbst angenehm kühl, ich mag beide.', '春天暖和，秋天凉快，我都喜欢。'],
  ['Zuótiān guāfēng xià bàoyǔ, lùshang hěn nán zǒu.', 'Gestern war es stürmisch und es gab Starkregen, die Straßen waren schwer begehbar.', '昨天刮风下暴雨，路上很难走。'],
  ['Qìhòu biànhuà dǎozhì jíduān tiānqì yuè lái yuè duō.', 'Der Klimawandel führt zu immer mehr Extremwetter.', '气候变化导致极端天气越来越多。'],
  ['Quánqiú biànnuǎn ràng bīngchuān rónghuà, hǎipíngmiàn shàngshēng.', 'Die globale Erwärmung lässt Gletscher schmelzen und den Meeresspiegel steigen.', '全球变暖让冰川融化，海平面上升。'],

  /* ---- Verkehr und Reisen ---- */
  ['Zuò dìtiě qù jīchǎng bǐ dǎchē kuài, yě bú dǔchē.', 'Mit der U-Bahn zum Flughafen ist schneller als mit dem Taxi und es gibt keinen Stau.', '坐地铁去机场比打车快，也不堵车。'],
  ['Qǐng zài hónglǜdēng nàr wǎng yòu guǎi, ránhòu yìzhí zǒu.', 'Bitte an der Ampel rechts abbiegen und dann geradeaus.', '请在红绿灯那儿往右拐，然后一直走。'],
  ['Wǒ de hángbān wùdiǎn le, xíngli hái méi tuōyùn.', 'Mein Flug hat Verspätung und das Gepäck ist noch nicht aufgegeben.', '我的航班误点了，行李还没托运。'],
  ['Bàn qiānzhèng xūyào hùzhào hé liǎng zhāng zhàopiàn.', 'Für das Visum braucht man den Reisepass und zwei Fotos.', '办签证需要护照和两张照片。'],
  ['Wǒmen zài bīnguǎn rùzhù, míngtiān zǎoshang tuìfáng.', 'Wir checken im Hotel ein und morgen früh wieder aus.', '我们在宾馆入住，明天早上退房。'],
  ['Dǎoyóu dài wǒmen cānguān le sān ge jǐngdiǎn.', 'Der Reiseführer hat uns drei Sehenswürdigkeiten gezeigt.', '导游带我们参观了三个景点。'],
  ['Wǒ mílù le, hái hǎo dǎoháng gàosu wǒ fāngxiàng.', 'Ich habe mich verlaufen, zum Glück hat mir das Navi die Richtung gesagt.', '我迷路了，还好导航告诉我方向。'],
  ['Gāofēngqī yōngdǔ yánzhòng, zhèngfǔ xiǎng bànfǎ shūdǎo.', 'Zur Stoßzeit ist der Stau schlimm, die Behörden versuchen, den Verkehr zu entzerren.', '高峰期拥堵严重，政府想办法疏导。'],
  ['Xīn néngyuán chē xūyào gèng duō chōngdiànzhuāng.', 'Fahrzeuge mit alternativem Antrieb brauchen mehr Ladesäulen.', '新能源车需要更多充电桩。'],

  /* ---- Richtungen und Orte ---- */
  ['Yánzhe zhè tiáo lù zǒu, chāoshì jiù zài lùkǒu duìmiàn.', 'Geh diese Straße entlang, der Supermarkt ist gegenüber der Kreuzung.', '沿着这条路走，超市就在路口对面。'],
  ['Chūkǒu zài dàlóu de dōngběi jiǎo, lí zhèr bù yuǎn.', 'Der Ausgang ist an der Nordostecke des Gebäudes, nicht weit von hier.', '出口在大楼的东北角，离这儿不远。'],
  ['Fùjìn yǒu yí ge gōngyuán, zhōuwéi hěn ānjìng.', 'In der Nähe ist ein Park, die Umgebung ist sehr ruhig.', '附近有一个公园，周围很安静。'],
  ['Cóng zhèr dào chēzhàn de jùlí dàyuē yì gōnglǐ.', 'Von hier bis zur Haltestelle ist es etwa ein Kilometer.', '从这儿到车站的距离大约一公里。'],

  /* ---- Schule und Lernen ---- */
  ['Lǎoshī jiěshì le yǔfǎ, ránhòu ràng wǒmen liànxí fāyīn.', 'Der Lehrer hat die Grammatik erklärt und uns dann die Aussprache üben lassen.', '老师解释了语法，然后让我们练习发音。'],
  ['Wǒ měi tiān bèi èrshí ge dāncí, fùxí yǐqián de kè.', 'Ich lerne täglich zwanzig Vokabeln und wiederhole den früheren Stoff.', '我每天背二十个单词，复习以前的课。'],
  ['Kǎoshì chéngjì bú cuò, wǒ jígé le.', 'Das Prüfungsergebnis ist nicht schlecht, ich habe bestanden.', '考试成绩不错，我及格了。'],
  ['Tā shēnqǐng le jiǎngxuéjīn, xiǎng qù Zhōngguó liúxué.', 'Er hat ein Stipendium beantragt und will in China studieren.', '他申请了奖学金，想去中国留学。'],
  ['Zhǐyǒu nǔlì liànxí, Hànyǔ shuǐpíng cái néng tígāo.', 'Nur durch fleißiges Üben kann sich das Chinesischniveau verbessern.', '只有努力练习，汉语水平才能提高。'],
  ['Xiě lùnwén yào yǐnyòng wénxiàn, hái yào zǒngjié.', 'Für eine wissenschaftliche Arbeit muss man Quellen zitieren und zusammenfassen.', '写论文要引用文献，还要总结。'],
  ['Tā zhǎngwò le jīběn de lǐlùn, dàn quēfá shíjiàn.', 'Er beherrscht die Grundtheorie, aber es fehlt ihm die Praxis.', '他掌握了基本的理论，但缺乏实践。'],
  ['Zàixiàn kèchéng ràng zhōngshēn xuéxí biàn de róngyì.', 'Onlinekurse machen lebenslanges Lernen leicht.', '在线课程让终身学习变得容易。'],

  /* ---- Arbeit ---- */
  ['Wǒ míngtiān yǒu miànshì, jiǎnlì yǐjīng zhǔnbèi hǎo le.', 'Ich habe morgen ein Vorstellungsgespräch, der Lebenslauf ist fertig.', '我明天有面试，简历已经准备好了。'],
  ['Zhè ge yuè jīnglǐ ràng wǒmen jiābān, rènwu tài duō.', 'Diesen Monat lässt uns der Chef Überstunden machen, es gibt zu viele Aufgaben.', '这个月经理让我们加班，任务太多。'],
  ['Wǒ yào qǐngjià sān tiān, xià zhōu qù chūchāi.', 'Ich nehme mir drei Tage frei und mache nächste Woche eine Dienstreise.', '我要请假三天，下周去出差。'],
  ['Tuánduì hézuò hǎo, xiàolǜ jiù gāo.', 'Wenn das Team gut zusammenarbeitet, ist die Effizienz hoch.', '团队合作好，效率就高。'],
  ['Tā cízhí le, yīnwèi zhǎodào le gèng hǎo de zhíwèi.', 'Er hat gekündigt, weil er eine bessere Stelle gefunden hat.', '他辞职了，因为找到了更好的职位。'],
  ['Zhè ge wèntí hěn nán chǔlǐ, wǒmen xūyào yí ge xīn fāng’àn.', 'Dieses Problem ist schwer zu bearbeiten, wir brauchen ein neues Konzept.', '这个问题很难处理，我们需要一个新方案。'],
  ['Gōngsī àn jìxiào kǎohé, jiǎngjīn hé xīnshuǐ guà gōu.', 'Die Firma bewertet nach Leistung, Bonus und Gehalt hängen daran.', '公司按绩效考核，奖金和薪水挂钩。'],
  ['Yuǎnchéng bàngōng gǎishàn le gōngzuò yǔ shēnghuó pínghéng.', 'Fernarbeit hat die Work-Life-Balance verbessert.', '远程办公改善了工作与生活平衡。'],

  /* ---- Freizeit und Sport ---- */
  ['Zhōumò wǒmen qù páshān, ránhòu zài húbiān sànbù.', 'Am Wochenende gehen wir bergsteigen und danach am See spazieren.', '周末我们去爬山，然后在湖边散步。'],
  ['Tā xǐhuan pāizhào, yě xǐhuan huàhuàr.', 'Sie fotografiert gern und malt auch gern.', '她喜欢拍照，也喜欢画画儿。'],
  ['Zhè běn xiǎoshuō de qíngjié hěn xīyǐn rén, zuòzhě hěn yǒumíng.', 'Die Handlung dieses Romans ist fesselnd, der Autor ist sehr bekannt.', '这本小说的情节很吸引人，作者很有名。'],
  ['Wǒ cānjiā le yí ge jùhuì, fēicháng rènao.', 'Ich war auf einem Treffen, es war sehr lebhaft.', '我参加了一个聚会，非常热闹。'],
  ['Tā huì tán gāngqín, hái huì lā xiǎotíqín.', 'Sie kann Klavier spielen und außerdem Geige.', '她会弹钢琴，还会拉小提琴。'],
  ['Wǒmen duì shū le bǐsài, dàn jiàoliàn shuō yào jiānchí.', 'Unsere Mannschaft hat das Spiel verloren, aber der Trainer sagt, wir sollen durchhalten.', '我们队输了比赛，但教练说要坚持。'],
  ['Tā zài jiànshēnfáng xùnliàn, tǐlì yuè lái yuè hǎo.', 'Er trainiert im Fitnessstudio, seine Kondition wird immer besser.', '他在健身房训练，体力越来越好。'],
  ['Nà ge yùndòngyuán dǎpò le jìlù, ná le guànjūn.', 'Dieser Sportler hat den Rekord gebrochen und ist Meister geworden.', '那个运动员打破了纪录，拿了冠军。'],

  /* ---- Natur und Umwelt ---- */
  ['Sēnlín lǐ de kōngqì hěn xīnxiān, yě yǒu hěn duō dòngwù.', 'Die Luft im Wald ist sehr frisch, und es gibt viele Tiere.', '森林里的空气很新鲜，也有很多动物。'],
  ['Bǎohù huánjìng yào cóng jiéyuē néngyuán kāishǐ.', 'Umweltschutz beginnt beim Energiesparen.', '保护环境要从节约能源开始。'],
  ['Lājī huíshōu hé fēnlèi shì měi ge jūmín de zérèn.', 'Mülltrennung und Recycling sind die Pflicht jedes Bewohners.', '垃圾回收和分类是每个居民的责任。'],
  ['Xǔduō yěshēng wùzhǒng yīnwèi qīxīdì pòhuài ér bīnwēi.', 'Viele Wildarten sind bedroht, weil ihr Lebensraum zerstört wird.', '许多野生物种因为栖息地破坏而濒危。'],
  ['Tàiyángnéng hé fēngnéng shì kě chíxù de xuǎnzé.', 'Solar- und Windenergie sind nachhaltige Optionen.', '太阳能和风能是可持续的选择。'],
  ['Zhè ge dìqū fāshēng le dìzhèn, sǔnshī hěn dà.', 'In dieser Region gab es ein Erdbeben, der Schaden ist groß.', '这个地区发生了地震，损失很大。'],

  /* ---- Technik und Medien ---- */
  ['Wǒ wàngjì le mìmǎ, dēnglù bù liǎo zhànghào.', 'Ich habe das Passwort vergessen und komme nicht ins Konto.', '我忘记了密码，登录不了账号。'],
  ['Ruǎnjiàn xūyào gēngxīn, jìde xiān zuò bèifèn.', 'Die Software muss aktualisiert werden, denk vorher an die Sicherungskopie.', '软件需要更新，记得先做备份。'],
  ['Zhè ge wǎngzhàn de jièmiàn jiǎndān, gōngnéng què hěn duō.', 'Die Oberfläche dieser Webseite ist schlicht, hat aber viele Funktionen.', '这个网站的界面简单，功能却很多。'],
  ['Tā zài shèjiāo méitǐ shàng fēnxiǎng le zhàopiàn hé pínglùn.', 'Sie hat in den sozialen Medien Fotos und Kommentare geteilt.', '她在社交媒体上分享了照片和评论。'],
  ['Réngōng zhìnéng huì qǔdài yìxiē gōngzuò, dàn yě chuàngzào xīn de.', 'Künstliche Intelligenz wird manche Jobs ersetzen, aber auch neue schaffen.', '人工智能会取代一些工作，但也创造新的。'],
  ['Bǎohù yǐnsī hěn zhòngyào, xìnxī róngyì xièlòu.', 'Der Schutz der Privatsphäre ist wichtig, Daten sickern leicht durch.', '保护隐私很重要，信息容易泄露。'],
  ['Dà shùjù hé suànfǎ zhèngzài gǎibiàn zhěnggè hángyè.', 'Big Data und Algorithmen verändern gerade die ganze Branche.', '大数据和算法正在改变整个行业。'],
  ['Háizi de píngmù shíjiān tài cháng, róngyì chénmí.', 'Die Bildschirmzeit der Kinder ist zu lang, sie verfallen leicht.', '孩子的屏幕时间太长，容易沉迷。'],

  /* ---- Gefühle und Charakter ---- */
  ['Tā xìnggé lèguān, yù dào kùnnan yě bú huì shīwàng.', 'Er ist optimistisch, selbst bei Schwierigkeiten wird er nicht enttäuscht.', '他性格乐观，遇到困难也不会失望。'],
  ['Wǒ hěn dānxīn, xīnqíng yìzhí hěn jǐnzhāng.', 'Ich mache mir Sorgen und bin die ganze Zeit angespannt.', '我很担心，心情一直很紧张。'],
  ['Lǎoshī gǔlì wǒmen, tóngxué ānwèi wǒ.', 'Der Lehrer ermutigt uns, die Mitschüler trösten mich.', '老师鼓励我们，同学安慰我。'],
  ['Tā hěn nàixīn yě hěn chéngshí, wǒ fēicháng pèifú.', 'Er ist geduldig und ehrlich, ich bewundere ihn sehr.', '他很耐心也很诚实，我非常佩服。'],
  ['Nèixiàng de rén bù yídìng hàixiū, zhǐ shì xǐhuan ānjìng.', 'Introvertierte Menschen sind nicht unbedingt schüchtern, sie mögen nur Ruhe.', '内向的人不一定害羞，只是喜欢安静。'],
  ['Chéngshú de rén huì kèfú qíngxù, bú huì bàoyuàn.', 'Reife Menschen beherrschen ihre Gefühle und beschweren sich nicht.', '成熟的人会克服情绪，不会抱怨。'],
  ['Bǎochí liánghǎo de xīntài xūyào yìlì hé lěngjìng.', 'Eine gute innere Haltung zu bewahren braucht Willenskraft und Besonnenheit.', '保持良好的心态需要毅力和冷静。'],

  /* ---- Farben und Formen ---- */
  ['Wǒ xǐhuan shēn lán sè, bù xǐhuan qiǎn fěnhóng.', 'Ich mag Dunkelblau, kein helles Rosa.', '我喜欢深蓝色，不喜欢浅粉红。'],
  ['Zhè fú huà de sècǎi xiānyàn, gòutú yě hěn duìchèn.', 'Die Farben dieses Bildes sind kräftig und der Bildaufbau symmetrisch.', '这幅画的色彩鲜艳，构图也很对称。'],
  ['Fángjiān de miànjī bú dà, dàn bǐlì hěn hǎo.', 'Die Fläche des Zimmers ist nicht groß, aber die Proportionen sind gut.', '房间的面积不大，但比例很好。'],

  /* ---- Stadt und Gesellschaft ---- */
  ['Wǒ qù zhèngfǔ bànlǐ shǒuxù, dài le suǒyǒu zhèngjiàn.', 'Ich erledige die Formalitäten bei der Behörde und habe alle Dokumente dabei.', '我去政府办理手续，带了所有证件。'],
  ['Shìzhōngxīn de jiànzhù hěn xiàndài, jiāoqū bǐjiào ānjìng.', 'Die Gebäude im Zentrum sind sehr modern, der Vorort ist ruhiger.', '市中心的建筑很现代，郊区比较安静。'],
  ['Túshūguǎn hé bówùguǎn shì zhòngyào de gōnggòng shèshī.', 'Bibliothek und Museum sind wichtige öffentliche Einrichtungen.', '图书馆和博物馆是重要的公共设施。'],
  ['Páiduì děng le bàn tiān, dēngjì cái wánchéng.', 'Wir haben lange Schlange gestanden, erst dann war die Registrierung fertig.', '排队等了半天，登记才完成。'],
  ['Chéngshìhuà dàilái le rénkǒu liúdòng hé zhùfáng wèntí.', 'Die Urbanisierung hat Migration und Wohnraumprobleme gebracht.', '城市化带来了人口流动和住房问题。'],
  ['Zhèngfǔ chūtái le xīn zhèngcè, mùbiāo shì suōxiǎo pínfù chājù.', 'Die Regierung hat eine neue Politik erlassen, Ziel ist die Verringerung der Kluft zwischen Arm und Reich.', '政府出台了新政策，目标是缩小贫富差距。'],

  /* ---- Feste und Kultur ---- */
  ['Chūnjié de shíhou, quánjiā tuánjù, háizi shōu hóngbāo.', 'Zum Frühlingsfest kommt die ganze Familie zusammen, die Kinder bekommen rote Umschläge.', '春节的时候，全家团聚，孩子收红包。'],
  ['Zhōngqiūjié wǒmen chī yuèbǐng, kàn yuèliang.', 'Zum Mondfest essen wir Mondkuchen und schauen den Mond an.', '中秋节我们吃月饼，看月亮。'],
  ['Měi ge dìfang de fēngsú hé xísú dōu bù yíyàng.', 'Bräuche und Gepflogenheiten sind überall anders.', '每个地方的风俗和习俗都不一样。'],
  ['Gānbēi! Zhù nǐ shēntǐ jiànkāng, gōngzuò shùnlì.', 'Prost! Ich wünsche dir Gesundheit und Erfolg bei der Arbeit.', '干杯！祝你身体健康，工作顺利。'],
  ['Zhè xiàng chuántǒng shǒuyì shì fēiwùzhì wénhuà yíchǎn.', 'Dieses traditionelle Handwerk ist immaterielles Kulturerbe.', '这项传统手艺是非物质文化遗产。'],

  /* ---- Meinung und Diskussion ---- */
  ['Wǒ tóngyì nǐ de guāndiǎn, dàn yǒu yì diǎn yào bǔchōng.', 'Ich stimme deinem Standpunkt zu, muss aber etwas ergänzen.', '我同意你的观点，但有一点要补充。'],
  ['Tā fǎnduì zhè ge jiànyì, lǐyóu shì fēngxiǎn tài dà.', 'Er lehnt diesen Vorschlag ab, mit der Begründung, das Risiko sei zu groß.', '他反对这个建议，理由是风险太大。'],
  ['Zhè zhǒng zuòfǎ yǒu yōudiǎn yě yǒu quēdiǎn, yào quánmiàn bǐjiào.', 'Dieses Vorgehen hat Vor- und Nachteile, man muss umfassend vergleichen.', '这种做法有优点也有缺点，要全面比较。'],
  ['Qíshí yuányīn hěn jiǎndān, zhǐshì hěn duō rén hūshì le.', 'Eigentlich ist die Ursache ganz einfach, viele übersehen sie nur.', '其实原因很简单，只是很多人忽视了。'],
  ['Zǒngzhī, wǒmen yīnggāi shíshìqiúshì, bù néng tài piànmiàn.', 'Kurzum, wir sollten sachlich bleiben und nicht zu einseitig sein.', '总之，我们应该实事求是，不能太片面。'],
  ['Tā chéngrèn le cuòwù, dàn fǒurèn shì gùyì de.', 'Er hat den Fehler zugegeben, bestreitet aber, dass es Absicht war.', '他承认了错误，但否认是故意的。'],
  ['Zhè ge lùndiǎn quēshǎo lùnjù, hěn nán shuōfú biérén.', 'Dieser These fehlen Belege, sie überzeugt kaum jemanden.', '这个论点缺少论据，很难说服别人。'],

  /* ---- Nachrichten und Wirtschaft ---- */
  ['Jìzhě cǎifǎng le fāyánrén, bàodào le zhè jiàn shìjiàn.', 'Der Journalist hat den Sprecher interviewt und über den Vorfall berichtet.', '记者采访了发言人，报道了这件事件。'],
  ['Diàochá shùjù xiǎnshì, zhè ge qūshì hái zài jìxù.', 'Die Untersuchungsdaten zeigen, dass sich dieser Trend fortsetzt.', '调查数据显示，这个趋势还在继续。'],
  ['Zhèngfǔ cǎiqǔ le cuòshī, xiàoguǒ hái xūyào pínggū.', 'Die Regierung hat Maßnahmen ergriffen, die Wirkung muss noch bewertet werden.', '政府采取了措施，效果还需要评估。'],
  ['Zhè jiàn shì yǐnqǐ le zhēngyì, yúlùn fēnqí hěn dà.', 'Diese Sache hat eine Kontroverse ausgelöst, die Meinungen gehen weit auseinander.', '这件事引起了争议，舆论分歧很大。'],
  ['Qǐyè de chéngběn shàngshēng, lìrùn xiàjiàng le.', 'Die Kosten des Unternehmens sind gestiegen, der Gewinn gesunken.', '企业的成本上升，利润下降了。'],
  ['Shuāngfāng tánpàn le sān tiān, zuìhòu qiānyuē le.', 'Beide Seiten haben drei Tage verhandelt und schließlich unterschrieben.', '双方谈判了三天，最后签约了。'],
  ['Shìchǎng jìngzhēng jīliè, chǎnpǐn bìxū bùduàn chuàngxīn.', 'Der Marktwettbewerb ist hart, Produkte müssen ständig erneuert werden.', '市场竞争激烈，产品必须不断创新。'],
  ['Gòngyìngliàn chūxiàn wèntí, jìnkǒu hé chūkǒu dōu shòu yǐngxiǎng.', 'In der Lieferkette gibt es Probleme, Import und Export sind betroffen.', '供应链出现问题，进口和出口都受影响。'],
  ['Tóuzī yǒu fēngxiǎn, shōuyì hé bōdòng yào yìqǐ kàn.', 'Investitionen bergen Risiken, Rendite und Schwankung muss man zusammen betrachten.', '投资有风险，收益和波动要一起看。'],
  ['Zhè jiā gōngsī yào shàngshì, zhèngzài róngzī.', 'Diese Firma will an die Börse und beschafft gerade Kapital.', '这家公司要上市，正在融资。']

]);
