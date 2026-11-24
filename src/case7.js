// ===== 7. ÜGY: KÖD =====
CASES.c7 = {
id:"c7", num:"7. ügy ·", title:"Köd", tagline:"November. Köd ül a Dunán. Vámos Gergő, akit egy éve te juttattál börtönbe, reggel holtan lógott a cellája ablakrácsán.",
date:[2027,10,29], par:4, variants:["a","b"],
order:["fazekas","rigo","lajos"],
start:{t:420, loc:"otthon"},
onStart:function(S,A){S.f.body=1;S.alc=S.f.aa_beszed?0:15;S.fat=30;S.crave=S.f.aa_beszed?30:35;A.addEv("vamos_halal")},
intro:function(S,A){
  let t="<p>Hétfő, november 29., 07:00. Köd. Az ablakból nem látszik a szemközti ház, csak a gesztenyefa csupasz ágai.</p>";
  t+="<p>Dr. Szép Viktória: „A Kozma utcai börtönből hívtak. Vámos Gergő. Hajnalban a reggeli létszámellenőrzésnél találták meg, a cellája ablakrácsán, lepedőcsíkon.” Szünet. „A parancsnok szerint öngyilkosság. Én szeretném, ha maga is ezt mondaná, Mátrai. Csak előbb nézze meg.”</p>";
  t+="<p>Vámos Gergő. A Révész-ügy, egy éve. Halmi Zsófia, az ápolónő a kikötőben. Te ültetted le, tizenkét évre. A tárgyaláson az apja, Vámos Lajos végig a hátsó sorban ült, és egyszer sem nézett rád.</p>";
  if(S.f.foto1994)t+="<p>Apád jegyzetfüzetében, az 1994-es lapok között ott a fénykép a Révész fedélzetéről. A kivágott arc. Vámos Lajos a bal szélen áll rajta.</p>";
  if(S.f.anna_pecs_igen||S.f.anna_pecs_rossz)t+="<p>Detti három hete Pécsett van. A konyhában még ott a bögréje, amit nem mostál el.</p>";
  if(S.f.bodnar_vad)t+="<p>Bodnár Feri ugyanabban a börtönben ül, a harmadik emeleten. Tizennégy évet kapott. Nem látogattad meg egyszer sem.</p>";
  return t;
},

suspects:{
 fazekas:{name:"Fazekas Zoltán", short:"Fazekas", reveal:["met_fazekas"]},
 rigo:{name:"Rigó Attila", short:"Rigó", reveal:["met_rigo"]},
 lajos:{name:"Vámos Lajos", short:"Lajos", reveal:["met_lajos"]}
},
solution:{$v:{a:{main:"fazekas"},b:{main:"rigo"}}},
bossLine:"„A börtönparancsnok naponta kétszer hív, főhadnagy. Vagy öngyilkosság, vagy hozzon nevet.”",

ev:{
 vamos_halal:{n:"Halál a 214-esben", d:"Vámos Gergő, 41, elítélt. Hétfő 05:40-kor a reggeli létszámellenőrzésnél találták meg a cellája ablakrácsán, lepedőcsíkra akasztva. Cellatársa, Rigó Attila azt állítja, egész éjjel aludt."},
 level_gergo:{n:"Gergő levele", d:"Pénteken feladott levél, neked címezve: „Apám tudja, ki ölte meg Szabó kapitányt 1994-ben. Én is tudom. Valaki megtudta, hogy beszélni akarok veled. Ha ezt olvasod, már nem tudom elmondani.”"},
 fojtas:{n:"Két barázda", d:"Gergő nyakán két fojtási barázda: egy vízszintes, mély, a gégeporc törésével, és egy ferde, felfelé futó, halvány. Előbb megfojtották, aztán felakasztották."},
 zolpidem_gergo:{n:"Altató Gergő vérében", d:"Gergő vérében magas szintű zolpidem, egy erős altató. Nem írták fel neki soha."},
 csomo:{n:"A csomó", d:"A lepedőcsíkot a rácson egy hajóskötéssel rögzítették, egy kettős bakcsomóval, amit a dunai hajósok kötnek. Gyorsan, gyakorlott kézzel, a sötétben."},
 fazekas_ugyelet:{n:"Egyedül az emeleten", d:"Vasárnap éjjel 22:00 és reggel 06:00 között a második emeleten Fazekas Zoltán főtörzsőrmester volt szolgálatban, egyedül. A cellakulcsok és a kártya nála.", sup:[["fazekas","A"]]},
 fazekas_tea:{n:"Az esti tea", d:"Vasárnap este 22:00-kor Fazekas osztotta ki a teát a második emeleten. A 214-esbe két bögrét adott be az ajtónyíláson.", sup:[["fazekas","A"]]},
 fazekas_adossag:{n:"Fazekas adóssága", d:"Fazekas két éve kártyázik és fogad. Csurgó Bélának, egy józsefvárosi uzsorásnak kétmillió forinttal tartozik. A felesége szerint októberben megfenyegették.", sup:[["fazekas","I"]]},
 fazekas_hajos:{n:"Fazekas a folyón", d:"Fazekas 1991 és 2002 között a vízirendészetnél szolgált, járőrhajón, mielőtt a büntetés-végrehajtáshoz ment.", sup:[["fazekas","M"]]},
 rigo_cella:{n:"Egy cellában", d:"Rigó Attila, 34, rablásért ül. Három hónapja Gergő cellatársa. Egész éjjel a cellában volt, két méterre Gergőtől.", sup:[["rigo","A"]]},
 rigo_besugas:{n:"Gergő feljelentette", d:"Októberben Gergő jelentette az őröknek, hogy Rigó telefont csempész be. Rigó elvesztette a feltételes szabadlábra helyezés esélyét. Azt mondta: „Ezt még megfizeted, nővérgyilkos.”", sup:[["rigo","I"]]},
 rigo_uszaly:{n:"Rigó az uszályon", d:"Rigó a börtön előtt tíz évig matrózként dolgozott dunai uszályokon, Mohácstól Bécsig.", sup:[["rigo","M"]]},
 lajos_latogatas:{n:"Szombati látogatás", d:"Vámos Lajos szombaton 14:00-kor meglátogatta a fiát. Az őr szerint veszekedtek, az öreg azt kiabálta: „Ne merészeld! Nem érted, kikkel játszol!”", sup:[["lajos","A"]]},
 lajos_inditek:{n:"Az apa titka", d:"Gergő el akarta mondani, mi történt 1994-ben a Révész fedélzetén. Az apja ott volt. Ha Gergő beszél, Vámos Lajos harminchárom év után börtönbe kerülhet.", sup:[["lajos","I"]]},
 lajos_reves:{n:"A révész csomója", d:"Vámos Lajos negyven évig vezette a Révészt. A kettős bakcsomót ő tanította a fiának, gyerekkorában, a komp korlátján.", sup:[["lajos","M"]]},
 lajos_kapu:{n:"A kapunapló", d:"A börtön kapunaplója szerint Vámos Lajos szombaton 15:20-kor távozott, és nem tért vissza. Éjjel a börtönbe kívülről senki nem léphet be.", clears:"lajos"},
 megbizo:{n:"Valaki fizetett", d:"Bodnár szerint a börtönben mindenki tudja: valaki pénzt küldött be azért, hogy Vámos Gergő ne beszéljen. A pénz a kikötőből jött, régi pénz, régi emberektől."},
 // A változat
 ajto_nyitas:{var:"a", n:"02:47", d:"A 214-es cella elektronikus zárját vasárnap éjjel 02:47-kor nyitották ki, Fazekas Zoltán szolgálati kártyájával. 02:53-kor zárták vissza.", sup:[["fazekas","A"]]},
 kamera_kies:{var:"a", n:"Kiesett kamera", d:"A második emeleti folyosókamera 02:40 és 03:00 között nem rögzített. A naplóban: „karbantartás, újraindítás – F. Z.”", sup:[["fazekas","A"]]},
 rigo_kabitva:{var:"a", n:"Rigót is elaltatták", d:"Rigó vérében is zolpidem volt, Gergőéhez hasonló szinten. Tényleg aludt, és nem önszántából.", clears:"rigo"},
 tea_zolpidem:{var:"a", n:"Két bögre", d:"A 214-es cella mindkét teásbögréjének alján beszáradt zolpidem. Valaki mindkettőjüknek beletett.", sup:[["fazekas","M"]]},
 adossag_kifizetve:{var:"a", n:"Hétfő délben, készpénzben", d:"Csurgó szerint Fazekas hétfőn délben egy borítékban kifizette a teljes, kétmilliós tartozását. Ötezresekben. A borítékon egy pecsét: egy horgony.", sup:[["fazekas","I"]]},
 fazekas_bent:{var:"a", n:"Hat perc a cellában", d:"02:47-kor Fazekas kártyája nyitotta az ajtót, a kamera előtte hét perccel elsötétült. Hat perc. Két elaltatott ember. Egy hajóskötés.", sup:[["fazekas","A"]], ded:true},
 fazekas_kabitas:{var:"a", n:"Az altatós tea", d:"Mindkét bögrében zolpidem volt, és mindkettőt Fazekas adta be este tízkor. Mindketten aludtak, amikor bement.", sup:[["fazekas","M"]], ded:true},
 fazekas_penz:{var:"a", n:"Kétmillió, egy horgonnyal", d:"Kétmillió forint tartozás, fenyegetés októberben, és hétfőn délben egy boríték készpénz. Valaki kifizette Fazekast. Fazekas kifizette Csurgót.", sup:[["fazekas","I"]], ded:true},
 // B változat
 ajto_zarva:{var:"b", n:"Zárt ajtó", d:"A 214-es cella ajtaját vasárnap 21:04 és hétfő 05:40 között senki nem nyitotta ki. Se kártyával, se kulccsal.", clears:"fazekas"},
 kamera_ures:{var:"b", n:"Üres folyosó", d:"A második emeleti folyosókamera egész éjjel rögzített. 22:10 után senki nem járt a 214-es előtt, Fazekas sem."},
 matrac_tabletta:{var:"b", n:"Tabletták a matracban", d:"Rigó matracába varrva egy fóliacsomag: tizenkét darab 10 mg-os zolpidem tabletta, egy csomagolásból, amiből hiányzik kettő.", sup:[["rigo","M"]]},
 rigo_tiszta:{var:"b", n:"Rigó nem aludt", d:"Rigó azt állította, altatót vett be és átaludta az éjszakát. A vérében nincs zolpidem, se más altató.", sup:[["rigo","A"]]},
 bogre_egy:{var:"b", n:"Egy bögre", d:"A 214-es cella két bögréje közül csak Gergőéban volt zolpidem. Rigóé tiszta."},
 szandra_penz:{var:"b", n:"Szandra új autója", d:"Rigó élettársa, Szandra szombaton másfél millió forintot kapott készpénzben egy idős férfitól a csepeli piacon. Hétfőn befizetett egy használt autóra.", sup:[["rigo","I"]]},
 rigo_penz:{var:"b", n:"Másfél millió egy besúgóért", d:"Gergő feljelentette Rigót, és elvette tőle a szabadulást. Szombaton Rigó élettársa másfél milliót kapott. Vasárnap éjjel Gergő meghalt.", sup:[["rigo","I"]], ded:true},
 rigo_kabitas:{var:"b", n:"A matrac altatója", d:"Gergő vérében zolpidem, a bögréjében zolpidem, Rigó matracában ugyanabból a csomagolásból tizenkét tabletta. Kettő hiányzik.", sup:[["rigo","M"]], ded:true},
 rigo_egyedul:{var:"b", n:"Senki más", d:"Az ajtót egész éjjel senki nem nyitotta ki. Rigó azt mondta, aludt, de nem aludt. A cellában ketten voltak, és reggel csak egyikük élt.", sup:[["rigo","A"]], ded:true},
 // közös
 gyilkossag:{n:"Nem öngyilkosság", d:"Előbb megfojtották, aztán felakasztották, egy hajóskötéssel. Vámos Gergőt megölték.", ded:true},
 elhallgattattak:{n:"Elhallgattatták", d:"Gergő pénteken megírta, hogy beszélni akar 1994-ről. Vasárnap éjjel meghalt. Valaki tudta, hogy írt neked.", ded:true, f:"gergo_elhallgattatva"},
 pap_vallomas:{n:"A szomszéd cella", d:{$v:{a:"Pap Ernő a 213-asból: „Háromnegyed háromkor zümmögött a zár. Kulcscsomó csörgött, egy bakancs. Hat-hét perc. Aztán megint a zár. Senki nem kiabált. Ez volt a legrosszabb.”",b:"Pap Ernő a 213-asból: „Az ajtó nem nyílt ki egész éjjel, arra felébredek. Rigó beszélt. Halkan, sokáig. Aztán egy puffanás, mintha egy zsák esne le. Aztán Rigó sírt. Egy órán át.”"}}, sup:{$v:{a:[["fazekas","A"]],b:[["rigo","A"]]}}}
},

ded:[
 {a:"fojtas", b:"csomo", g:"gyilkossag", t:"Egy vízszintes barázda, egy ferde. Előbb fojtás, aztán akasztás. És egy csomó, amit nem egy kétségbeesett ember köt a sötétben, hanem egy hajós."},
 {a:"level_gergo", b:"vamos_halal", g:"elhallgattattak", t:"Pénteken megírta, hogy beszélni akar. Vasárnap éjjel meghalt. A levél hétfőn érkezett. Valaki gyorsabb volt a postánál."},
 {var:"a", a:"ajto_nyitas", b:"fojtas", g:"fazekas_bent", t:"02:47, Fazekas kártyája. Hat perc. Egy fojtás, egy akasztás, egy kötés. Hat perc elég, ha az ember tudja, mit csinál."},
 {var:"a", a:"kamera_kies", b:"fazekas_ugyelet", g:"fazekas_bent", t:"A kamera 02:40-kor elsötétült, „karbantartás, F. Z.”. Az emeleten egyetlen ember volt szolgálatban."},
 {var:"a", a:"tea_zolpidem", b:"fazekas_tea", g:"fazekas_kabitas", t:"Mindkét bögrében altató. Mindkét bögrét Fazekas adta be, este tízkor, az ajtónyíláson."},
 {var:"a", a:"rigo_kabitva", b:"fazekas_tea", g:"fazekas_kabitas", t:"Rigót is elaltatták. Ő nem tehette. Aki mindkettőjüknek teát adott, az tehette."},
 {var:"a", a:"fazekas_adossag", b:"adossag_kifizetve", g:"fazekas_penz", t:"Kétmillió tartozás és egy fenyegetés októberben. Hétfő délben egy boríték, egy horgonnyal. Valaki nagyon gyorsan fizetett."},
 {var:"b", a:"matrac_tabletta", b:"zolpidem_gergo", g:"rigo_kabitas", t:"Zolpidem Gergő vérében. Zolpidem Rigó matracában, kettő hiányzik. Egy cellában senki nem kölcsönöz altatót."},
 {var:"b", a:"rigo_tiszta", b:"ajto_zarva", g:"rigo_egyedul", t:"Az ajtó egész éjjel zárva. Rigó azt mondta, aludt, de nem aludt. Ketten voltak a cellában."},
 {var:"b", a:"rigo_tiszta", b:"pap_vallomas", g:"rigo_egyedul", t:"Rigó nem aludt. A szomszéd hallotta, ahogy egy órán át sír. Aki alszik, nem sír."},
 {var:"b", a:"szandra_penz", b:"rigo_besugas", g:"rigo_penz", t:"Gergő elvette tőle a szabadulást. Szombaton valaki másfél milliót adott a nőjének. A bosszút is meg lehet venni, ha valaki már amúgy is akarja."}
],

docs:{
 boncolas7:{t:"Boncolási jegyzőkönyv – Vámos Gergő", b:"IGAZSÁGÜGYI ORVOSTANI INTÉZET\nBoncolt: dr. Keleti Mária\n\nNév: Vámos Gergő, 41 é., elítélt.\nA halál ideje: vasárnap 02:30 és 03:30 között.\n[[fojtas|A nyakon két barázda. Az egyik vízszintes, mély, körkörös, a pajzsporc szarvának törésével: fojtás, kézzel vagy szalaggal, hátulról. A másik ferde, felfelé futó, halvány, vérbeszűrődés nélkül: a halál után keletkezett, akasztásból.]]\nA körmök alatt idegen hámsejt nincs. Védekezésre utaló sérülés nincs.\n[[zolpidem_gergo|Toxikológia: zolpidem 410 ng/ml. Ez az altató mérgező szintje, mély, kábult alvás.]]\n\n— K. M., kézzel: „Nem védekezett, Dénes. Nem tudott. Aludt, amikor megfojtották.”"},
 ajtonaplo:{t:"Elektronikus zárnapló – II. emelet, 214-es zárka", b:{$v:{
  a:"KOZMA UTCAI BV. INTÉZET – beléptetőrendszer\nIdőszak: 2027. 11. 28. 18:00 – 11. 29. 06:00\n\n21:04  214 – zárás (Fazekas Z., kártya 0417)\n22:01  214 – etetőnyílás nyitva (Fazekas Z.)\n[[ajto_nyitas|02:47  214 – AJTÓ NYITVA (Fazekas Z., kártya 0417)\n02:53  214 – zárás (Fazekas Z., kártya 0417)]]\n05:40  214 – ajtó nyitva (Kerekes I., kártya 0388) – riasztás",
  b:"KOZMA UTCAI BV. INTÉZET – beléptetőrendszer\nIdőszak: 2027. 11. 28. 18:00 – 11. 29. 06:00\n\n21:04  214 – zárás (Fazekas Z., kártya 0417)\n22:01  214 – etetőnyílás nyitva (Fazekas Z.)\n[[ajto_zarva|22:02 – 05:40 között a 214-es zárkán nyitási esemény nincs rögzítve.]]\n05:40  214 – ajtó nyitva (Kerekes I., kártya 0388) – riasztás"}}},
 kamera7:{t:"Kameranapló – II. emeleti folyosó", b:{$v:{
  a:"KOZMA UTCAI BV. INTÉZET – videórendszer, 2. emelet, K-07\n\n22:00–22:10 Fazekas a tálcás kocsival, teaosztás.\n23:00, 00:00, 01:00, 02:00 Fazekas óránkénti körei.\n[[kamera_kies|02:40:12 – 03:00:47 rögzítés megszakadt. Rendszernapló: „Karbantartás, kézi újraindítás – F. Z.”]]\n03:01 Fazekas a kamera alatt, a nővérszoba felé megy. Lassan.",
  b:"KOZMA UTCAI BV. INTÉZET – videórendszer, 2. emelet, K-07\n\n22:00–22:10 Fazekas a tálcás kocsival, teaosztás.\n23:00, 00:00, 01:00, 02:00, 03:00, 04:00, 05:00 Fazekas óránkénti körei, mindig a folyosó közepén, egyik ajtónál sem áll meg.\n[[kamera_ures|A rögzítés folyamatos. 22:10 és 05:38 között a 214-es ajtaja előtt senki nem áll meg.]]"}}},
 bogre:{t:"Laborjelentés – teásbögrék, 214-es zárka", b:{$v:{
  a:"BŰNÜGYI TECHNIKAI LABOR\nVizsgálta: Halász Tamás\n\nMinta: két fehér műanyag bögre, a 214-es zárka asztaláról.\n[[tea_zolpidem|Mindkét bögre alján beszáradt teamaradék, mindkettőben zolpidem, oldott tablettából.]]\nUjjnyomatok: Vámos G., Rigó A., és mindkettőn részleges: Fazekas Z.\n\n— H. T.: „Kettőnek adta be. Nem akart tanút.”",
  b:"BŰNÜGYI TECHNIKAI LABOR\nVizsgálta: Halász Tamás\n\nMinta: két fehér műanyag bögre, a 214-es zárka asztaláról.\n[[bogre_egy|A V. G. jelzésű bögrében beszáradt teamaradék és zolpidem. A másik bögre tiszta.]]\nUjjnyomatok: Vámos G., Rigó A., Fazekas Z. (füleken).\n\n— H. T.: „Csak az egyiket. Aki ezt tette, azt akarta, hogy a másik ébren legyen.”"}}},
 rigo_ver:{t:"Toxikológia – Rigó Attila vérmintája", b:{$v:{
  a:"IGAZSÁGÜGYI ORVOSTANI INTÉZET\nVizsgálta: dr. Keleti Mária\nMintavétel: hétfő 09:20\n\n[[rigo_kabitva|Zolpidem: 290 ng/ml. A mintavétel idején is erős szedáció. Az éjszaka folyamán mély, kábult alvás valószínű.]]\n\n— K. M.: „Ez a fiú nem ölt meg senkit vasárnap éjjel. Járni is alig tudott reggel.”",
  b:"IGAZSÁGÜGYI ORVOSTANI INTÉZET\nVizsgálta: dr. Keleti Mária\nMintavétel: hétfő 09:20\n\n[[rigo_tiszta|Zolpidem, benzodiazepinek, egyéb altatók: nem kimutatható. Alkohol: negatív.]]\n\n— K. M.: „Azt mondta, bevett egy altatót? Akkor hazudik. Ez a vér egész éjjel ébren volt.”"}}},
 level:{t:"Vámos Gergő levele", b:"Kockás füzetlap, golyóstoll, gondos, kicsit dőlt betűk. Pénteki postabélyegző.\n\nMátrai!\n\nTudom, hogy utálsz. Én is utállak, de te vagy az egyetlen rendőr, akiről tudom, hogy nem vették meg.\n[[level_gergo|Apám tudja, ki ölte meg Szabó kapitányt 1994-ben, a Révészen. Én is tudom, kilencéves voltam, és ott aludtam a kormányállásban. Valaki itt bent megtudta, hogy beszélni akarok veled. Ha ezt olvasod, már nem tudom elmondani.]]\n\nApa, ha te is olvasod: mondd el neki. Elég volt.\n\nV. G."}
},

locs:{
 otthon:{m:"Lakás", n:"Lakás a Körúton", x:612, y:338, side:"P", d:"Harmadik emelet, udvari szoba. A radiátor kopog. A konyhaasztalon apád régi jegyzetfüzete, nyitva, mintha valaki olvasta volna.", hs:[
   {id:"posta", l:"A postaláda", req:["posta_jott"], t:"A postaládában egy boríték, a címzés kézírással, a feladó: Vámos G., Kozma utca. A bélyegző pénteki. Leülsz a lépcsőre, és ott olvasod el.", ev:"level_gergo", doc:"level"}
 ]},
 kapitanysag:{m:"Kapitányság", n:"Főkapitányság", x:705, y:196, side:"P", d:"A folyosón novemberi szürke fény. Szép Viktória ajtaja nyitva, a laborban Halász rádiója szól. Az ablakokban áll a köd.", hs:[]},
 hordo:{m:"Hordó", n:"Hordó", x:648, y:462, side:"P", open:[15,3], d:"A Hordóban égnek a karácsonyi égők, korán. Laci szerint így kevésbé depressziós a november. A sarokasztal üres.", hs:[]},
 intezet:{m:"Intézet", n:"Orvostani Intézet", x:792, y:474, side:"P", open:[7,19], d:"Keleti doktornő az íróasztalánál ül, egy régi, sárga aktát lapoz, és amikor belépsz, becsukja.", hs:[]},
 borton:{la:1, m:"Börtön", n:"Kozma utcai börtön, Kőbánya", x:900, y:540, side:"P", crime:1, d:"Szürke falak, szögesdrót, köd. A beléptetőnél három ajtó, három zár, három őr, aki mind ugyanúgy néz rád: mint egy rendőrre, aki egy rabért jött. A második emeleten a 214-es ajtaján rendőrségi szalag.", hs:[
   {id:"rac", l:"Az ablakrács", t:"A rácson még ott a lepedőcsík vége, levágva. A csomót a helyszínelők nem bontották ki. Kettős bakcsomó: a dunai hajósok kötik így a kötelet a bakhoz, egyetlen mozdulattal, hogy bármikor ki lehessen oldani, de magától soha ne engedjen. Láttad már ezt a csomót. A Révész korlátján.", ev:"csomo"},
   {id:"asztal", l:"A zárka asztala", t:"Két fehér műanyag bögre, az alján beszáradt tea. Egy pakli kártya, egy imakönyv, amit valaki használt könyvjelzőnek. Becsomagolod a bögréket.", f:"bogrek"},
   {id:"matrac", var:"b", l:"Rigó matraca", req:["met_rigo"], t:"Rigó matracának varrása egy helyen frissebb. Felvágod. Fóliába csomagolva tizenkét fehér tabletta, egy gyári levélből kivágva: Zolpidem 10 mg. A levélen tizennégy hely, kettő üres.", ev:"matrac_tabletta"},
   {id:"matrac", var:"a", l:"Rigó matraca", req:["met_rigo"], t:"Rigó matraca kemény, öreg, a varrás mindenütt egyforma. Egy pornóújság, három szál cigaretta, egy fénykép egy szőke nőről egy csepeli presszó előtt. Semmi más."},
   {id:"fal", l:"Gergő ágya fölötti fal", t:"A falon karcolások, napok, hetek, egy év. Egy helyen, a párna magasságában, ceruzával, kicsi betűkkel: RÉVÉSZ 94 – 4. Alatta valaki többször áthúzta. Nem Gergő írása.", f:"fal_negy"},
   {id:"orszoba", l:"Az őrszoba", req:["met_bakonyi"], t:"Az őrszobán a monitorok, a kulcstábla, a beléptetőrendszer terminálja. Bakonyi engedélyével kikérheted a zárnaplót és a kamerafelvételt. Az ügyeletes őr nem néz fel. Fazekas Zoltán ma szabadnapos.", f:"naplo_kerheto"},
   {id:"kapu", l:"A kapunapló", req:["met_bakonyi"], t:"A portán a látogatási napló. Szombat, 14:00: Vámos Lajos, belépett. 15:20: távozott. Aláírás, remegő kézzel. Vasárnap éjjel kívülről senki nem lépett be.", ev:"lajos_kapu"}
 ]},
 reves7:{m:"Révész", n:"A Révész, Déli kikötő", x:548, y:618, side:"P", d:"A régi komp a mólónál, rozsdás, félig kiemelve, mintha a folyó már nem tartaná meg. A kormányállásban ég a villany. Vámos Lajos ott él, mióta kivonták a forgalomból.", hs:[
   {id:"korlat", l:"A korlát", t:"A korláton kötelek, mind ugyanazzal a csomóval a bakokhoz kötve. Kettős bakcsomó. Ugyanaz, mint a börtönrácson.", ev:"lajos_reves"},
   {id:"kormany", l:"A kormányállás", req:["met_lajos"], t:"Egy priccs, egy vaskályha, egy fénykép a falon: egy kilencéves fiú a kormánykeréknél, nevet. 1994 nyara. Alatta, szögre akasztva, egy horgonyos kulcstartó, amilyet a kikötő régi kompsofőrjei kaptak. Lajosé megvan. Nem tudod, hány ilyen volt még."}
 ]},
 fazekashaz:{la:1, m:"Fazekas-lakás", n:"Fazekas-lakás, Kispest", x:900, y:650, side:"P", vis:"met_fazekas|fazekas_ugyelet", d:"Lakótelepi kétszoba a negyediken. Az előszobában egy horgászbot, egy kiskutya, egy feleség, aki nem kérdezi, mit akarsz, mert már napok óta várja.", hs:[]},
 fogado:{m:"Fogadóiroda", n:"Csurgó fogadóirodája, Józsefváros", x:560, y:420, side:"P", vis:"fazekas_adossag", open:[10,23], d:"Sportfogadás a földszinten, a falon monitorok, lóverseny Ausztráliából. Hátul egy ajtó, előtte egy kopasz férfi, aki nem a lovakat nézi.", hs:[]},
 szandra:{m:"Szandra", n:"Szandra lakása, Csepel", x:600, y:700, side:"P", vis:"rigo_szandra", open:[9,22], d:"Panelház a Csepeli úton. Szandra a lépcsőházban dohányzik, mert a gyerek bent alszik.", hs:[]},
 korhaz7:{la:1, m:"Kórház", n:"Szent János Kórház", x:250, y:220, side:"B", vis:"pap_korhaz|anna_met", d:"A traumatológián karácsonyi papírcsillagok az ablakon. Egy rab is fekszik itt, két őr ül az ajtaja előtt.", hs:[]},
 temeto7:{la:1, m:"Temető", n:"Csepeli temető", x:470, y:690, side:"P", vis:"temetes_hiv", open:[10,12], day:5, d:"Szombat délelőtt, köd, egy frissen ásott sír a temető szélén. Öt ember áll körülötte. Az egyik Vámos Lajos.", hs:[]},
 zeneakademia7:{la:1, m:"Zeneakadémia", n:"Zeneakadémia, Solti terem", x:640, y:246, side:"P", vis:"lili_marad", open:[18,21], day:3, d:"Csütörtök este, elsőévesek hangversenye. A teremben szülők, egy-két tanár, és hátul egy zenekritikus, aki minden évben eljön, hátha.", hs:[]},
 keleti7:{la:1, m:"Keleti", n:"Keleti pályaudvar", x:840, y:380, side:"P", vis:"anna_pecs_igen|anna_pecs_rossz", open:[16,21], day:4, d:"Péntek este, a pécsi InterCity a 9-es vágányról. A peronon diákok, katonák, egy nő egy macskával egy kosárban.", hs:[]},
 aa:{la:1, m:"NA-gyűlés", n:"NA-gyűlés, templomalagsor", x:760, y:296, side:"P", vis:"aa1", open:[18,21], d:"Összecsukható székek, filterkávé, a falon egy adventi koszorú, amit valaki a szomszéd plébániáról hozott.", hs:[]}
},

people:{
 bakonyi:{n:"Bakonyi Tibor bv. ezredes", r:"börtönparancsnok", loc:"borton", h:[8,17], bio:"59 éves, huszonnyolc éve a büntetés-végrehajtásnál. Vasalt egyenruha, fáradt szem, és egy íróasztal, amin minden irat egyenesen áll. Azt akarja, hogy ez öngyilkosság legyen. Nem azért, mert hazudik. Azért, mert a másik változat rosszabb.", topics:[
  {id:"mi", l:"Mi történt?", t:"„Reggeli létszámellenőrzés, 05:40. Kerekes őrmester nyitotta a zárkát. Vámos a rácson, Rigó az ágyán, félálomban.” Leteszi a tollat. „Vámos depressziós volt, főhadnagy. Két hete kérte, hogy pszichológushoz mehessen. Én ezt írnám a jelentésbe.”", f:"met_bakonyi"},
  {id:"szolgalat", l:"Ki volt szolgálatban?", t:"„A második emeleten Fazekas Zoltán főtörzsőrmester. Egyedül, ahogy vasárnap éjjel mindig, mert kevesen vagyunk.” Felnéz. „Huszonöt éve szolgál. Tíz évig a vízirendészetnél volt, hajón. Megbízható ember.”", ev:["fazekas_ugyelet","fazekas_hajos"]},
  {id:"tea", l:"Az esti rend", t:"„Este tízkor teaosztás, a szolgálatos őr viszi körbe a kocsival, az etetőnyíláson adja be.” Megvonja a vállát. „Vasárnap is így volt. Fazekas osztotta.”", ev:"fazekas_tea"},
  {id:"rigo", l:"A cellatársról", t:"„Rigó Attila. Rablás, hat év. Októberben Vámos jelentette, hogy telefont csempész. Rigó elvesztette a feltételes esélyét.” Bakonyi összeráncolja a homlokát. „Azt mondta Vámosnak: ezt még megfizeted. Itt bent ezt mindenki mondja mindenkinek.”", ev:"rigo_besugas"},
  {id:"latogatas", l:"Kik látogatták Gergőt?", t:"„Csak az apja. Szombaton, délután kettőkor. Az őr szerint veszekedtek, az öreg kiabált.” Előkeres egy lapot. „»Ne merészeld! Nem érted, kikkel játszol!« Ezt írta be az őr.”", ev:"lajos_latogatas"},
  {id:"nyomas", l:"Mit akar a jelentésbe?", sober:1, t:"Sokáig hallgat. „Főhadnagy. Ha ez gyilkosság, akkor az én börtönömben, az én őrömmel vagy az én rabommal ölték meg. Akkor jönnek az újságírók, a minisztérium, a vizsgálat.” Kinéz a ködbe. „De ha gyilkosság, akkor tudni akarom. Ezt nem írom be sehova.”"}
 ]},
 fazekas:{n:"Fazekas Zoltán", r:"főtörzsőrmester", loc:"fazekashaz", h:[9,21], suspect:1, bio:"52 éves börtönőr, szabadnapos. Szürke melegítő, borostás arc, a kezében egy szál cigaretta, amit nem gyújt meg. Nagy, lassú ember, a keze olyan, mint egy hajókötél.", topics:[
  {id:"ejjel", l:"Vasárnap éjjel", t:"„Szolgálatban voltam. Teát osztottam, köröztem, óránként. Semmit nem hallottam.” Megforgatja a cigarettát. „Vámos csendes rab volt. Olvasott. Nem gondoltam volna, hogy ezt csinálja.”"},
  {id:"kamera", l:"A kamera és a zár", req:["kamera_kies|ajto_nyitas|ajto_zarva|kamera_ures"], sober:1, t:{$v:{a:"Hosszan néz. „A K-07 gyakran lefagy. Újraindítottam.” A felesége a konyhaajtóból figyel. „És a zárka? Azt is én nyitottam? Háromkor?” Megnyalja a száját. „Lehet, hogy benéztem. Láttam, hogy… hogy furcsán fekszik. És nem volt semmi. Visszazártam.” Ezt most találja ki, és mindketten tudjátok.",b:"„Nézze meg a kamerát, főhadnagy. Óránként egy kör, a folyosó közepén. Egyik ajtót se nyitottam ki.” Végre meggyújtja a cigarettát. „Én tudom, mit mondanak rólam a börtönben. Hogy tartozom. Igaz. De azért még nem vagyok gyilkos.”"}}},
  {id:"hajo", l:"A vízirendészetről", t:"„Tizenegy év a Dunán. Járőrhajó, Mohácstól Szobig.” Elmosolyodik, először. „A legszebb évek. Aztán összevontak minket, és ide kerültem, rácsok közé.” Rád néz. „Miért kérdezi?”"}
 ]},
 fazekasne:{n:"Fazekasné Ildikó", r:"Fazekas felesége", loc:"fazekashaz", h:[9,21], bio:"49 éves bolti eladó. Két műszakban dolgozik, hogy a férje tartozását fizesse. Nem sír. Elfogyott.", topics:[
  {id:"tartozas", l:"A férje tartozásáról", t:"„Kétmillió. Csurgó Bélának, a fogadóirodásnak.” Leül. „Októberben két ember megállt a lépcsőházban, és megkérdezték, milyen szép a kutyánk. Csak ennyit. Hogy milyen szép a kutyánk.” Megsimogatja a kiskutyát.", ev:"fazekas_adossag"},
  {id:"hetfo", l:"Mi történt hétfőn?", sober:1, t:{$v:{a:"„Hétfőn délben elment, és amikor hazajött, azt mondta: vége. Kifizette. Megkérdeztem, miből. Azt mondta, ne kérdezzem.” Elhallgat. „Huszonöt év alatt egyszer se mondta, hogy ne kérdezzem.”",b:"„Hétfőn? Aludt. Reggel hazajött, lefeküdt, délután felkelt, és megint kiment a fogadóba.” Megrázza a fejét. „Semmi nem változott, főhadnagy. Csak a kutya lett idegesebb.”"}}}
 ]},
 rigo:{n:"Rigó Attila", r:"elítélt, cellatárs", loc:"borton", h:[8,16], suspect:1, bio:"34 éves, rablásért ül. Szikár, tetovált, a bal kezén hiányzik egy ujjperc. Hétfő óta elkülönítőben, magánzárkában. Amikor belépsz, nem áll fel.", topics:[
  {id:"ejjel", l:"Mi történt éjjel?", ev:"rigo_cella", t:"„Aludtam. Bevettem egy altatót, mert Vámos horkolt.” Vállat von. „Reggel arra ébredtem, hogy kiabálnak. Ott lógott.” Nem néz rád. „Sajnálom? Nem sajnálom. De nem én voltam.”"},
  {id:"besugas", l:"A telefon miatt", req:["rigo_besugas"], sober:1, t:"„Igen, feljelentett. Elvesztettem két évet miatta.” Előrehajol. „És igen, megmondtam neki, hogy megfizet. Itt mindenki ezt mondja. Ha mindenki megölné, akit megfenyeget, nem maradna rab a börtönben.”"},
  {id:"uszaly", l:"Mit csinált, mielőtt bekerült?", t:"„Matróz voltam. Uszályon, tíz évig, Mohácstól Bécsig.” Felnéz. „Szép munka volt. Aztán az uszályt eladták, és engem is.”", ev:"rigo_uszaly"},
  {id:"szandra", l:"Van valakije kint?", t:"„Szandra. Meg a gyerek.” Most először lágyul az arca. „Csepelen laknak. Ne bántsa őket. Ők semmiről nem tudnak.”", f:"rigo_szandra"}
 ]},
 pap:{n:"Pap Ernő", r:"elítélt, a 213-asból", loc:"borton", h:[8,16], gone:"pap_korhaz|pap_vedett", bio:"63 éves, csalásért ül, harmadszor. Kis, szemüveges ember, könyvtáros a börtönben. Minden hangot hall a falon át, és ez nem mindig jó.", topics:[
  {id:"hallott", l:"Hallott valamit éjjel?", t:"Körülnéz. „Itt a falnak füle van, főhadnagy úr. És keze is.” Leveszi a szemüvegét. „Ha beszélek, holnap én lógok. Ha nem beszélek, talán nem.” Visszateszi. „Talán.”", f:"pap_fel"},
  {id:"athelyez", l:"Áthelyezteted a fogdára, védelem alatt", req:["pap_fel"], excl:"nyomas", t:"Felhívod Szép Viktóriát. Fél óra vita, két aláírás, Bakonyi ezredes dühös arca. Délután Pap Ernő egy rendőrautó hátsó ülésén ül, a kapitányság felé. Az autóban leveszi a szemüvegét, és elkezd beszélni. Nem hagyja abba a Teve utcáig.", pat:-10, f:"pap_vedett", ev:"pap_vallomas"},
  {id:"nyomas", l:"Megszorongatod", req:["pap_fel"], excl:"athelyez", t:"Közel hajolsz hozzá, és halkan elmondod, mi vár egy háromszoros csalóra, ha a rendőrség nem segít neki a következő tárgyalásán. Pap Ernő hosszan néz. „Holnap” — mondja. „Holnap elmondom. Ma este még gondolkodom.” A folyosón egy rab figyel benneteket, egy őr mellett.", f:"pap_holnap"}
 ]},
 pap2:{n:"Pap Ernő", r:"beteg, őrizet alatt", loc:"korhaz7", h:[10,18], vis:"pap_ebren", bio:"63 éves. Kedd éjjel a zuhanyzóban megverték. Eltört az állkapcsa, két bordája, a szemüvege. Az ágy mellett két őr. Amikor meglát, lassan felemeli a kezét.", topics:[
  {id:"vallomas", l:"Leülsz mellé", sober:1, t:"Drótozott állkapoccsal beszél, lassan, egy füzetbe írja, amit nem tud kimondani. Amikor végez, átadja. Az utolsó sor: „Holnap lett volna. Most is holnap van.”", ev:"pap_vallomas"}
 ]},
 bodnar_rab:{n:"Bodnár Feri", r:"elítélt", loc:"borton", h:[8,16], vis:"bodnar_vad", bio:"58 éves. Tizennégy évet kapott Gál Eszter meggyilkolásáért. Lefogyott, a bajusza ősz. A börtönkönyvtárban dolgozik Pap Ernő mellett. Amikor meglát, nem áll fel, de nem is fordul el.", topics:[
  {id:"mit", l:"Mit hallottál?", t:"„Itt minden hallatszik, Dénes. Csak senki nem mondja el.” Összekulcsolja a kezét. „Két hete pénz jött be. Nem drogra, nem telefonra. Azért, hogy Vámos ne beszéljen.” Rád néz. „A pénz a kikötőből jött. Régi pénz, régi emberektől. Ezt mondják.”", ev:"megbizo", f:"megbizo_kikoto"},
  {id:"hogy", l:"Hogy vagy?", t:"„Hogy lennék.” Sokáig hallgat. „Halász írt. Egyszer. Azt írta, a pogácsát hiányolja.” A hangja elcsuklik. „Mondd meg neki, hogy… semmit. Ne mondj neki semmit.”"}
 ]},
 lajos:{n:"Vámos Lajos", r:"Gergő apja, egykori révész", loc:"reves7", h:[7,22], suspect:1, bio:"74 éves. Negyven évig vezette a Révészt, a kompot a Déli kikötő és Csepel között. Széles váll, görbe hát, olyan kéz, ami ezer kötelet kötött. A kormányállásban él, egy priccsen, egy vaskályha mellett.", topics:[
  {id:"gergo", l:"Gergőről", t:"„Tudom, miért jött.” Nem kínál hellyel. „Szombaton voltam nála. Veszekedtünk. Azt mondta, beszélni fog. Magának.” Kinéz a ködbe. „Megmondtam neki: ne merészelje. Nem érti, kikkel játszik.” Hosszú csend. „Most már nem kell megértenie.”", ev:"lajos_latogatas"},
  {id:"1994", l:"1994-ről", req:["level_gergo"], sober:1, t:"Lajos a kályhába néz. „Szabó kapitány a vízbe esett, és megfulladt. Ezt írta az apja, főhadnagy, a jegyzőkönyvbe.” Rád néz. „Kérdezze meg őt.” Apád két éve halott. Lajos tudja. „Akkor már késő kérdezni, nem igaz? Nekem is.”", ev:"lajos_inditek"},
  {id:"level", l:"Megmutatod neki Gergő levelét", req:["level_gergo"], t:"Sokáig olvassa. A levél remeg a kezében, pedig a keze negyven évig nem remegett a kormányon. Az utolsó sornál megáll. „Apa, mondd el neki.” Összehajtja a lapot, és nem adja vissza. „A temetés szombaton lesz. Tízkor, Csepelen.” Nem néz rád. „Jöjjön el. Ott majd… majd meglátjuk.”", f:["lajos_olvasta","temetes_hiv"]},
  {id:"csomo", l:"A kettős bakcsomóról", req:["csomo"], t:"Elmosolyodik, keserűen. „Az én csomóm. Én tanítottam Gergőnek, hatévesen, a korláton.” Felemeli a kezét. „Meg mindenkinek, aki valaha ezen a kompon dolgozott. Meg a vízirendőröknek, akik ellenőriztek minket. Meg a matrózoknak az uszályokon.” Leengedi. „Fél Duna ezt a csomót köti, főhadnagy.”"}
 ]},
 lajos_t:{n:"Vámos Lajos", r:"a sír mellett", loc:"temeto7", h:[10,12], vis:"temetes_hiv", bio:"Fekete öltöny, ami harminc éve volt utoljára rajta, és azóta nőtt rá. A kezében egy kötél, egyetlen kettős bakcsomóval, és azt teszi rá a koporsóra, virág helyett.", topics:[
  {id:"negyen", l:"Megállsz mellette", req:["lajos_olvasta"], mins:60, sober:1, dyn:"lajosTemetes"}
 ]},
 szandra:{n:"Szandra", r:"Rigó élettársa", loc:"szandra", h:[9,22], bio:"29 éves pénztáros, egy négyéves kisfiú anyja. Fáradt, és dacos, mint aki már tudja, mit fogsz kérdezni.", topics:[
  {id:"attila", l:"Attiláról", t:"„Attila nem bánt senkit. Rabolt, igen. De nem bánt.” Elnyomja a cigarettát. „Vámos? Azt mondta, Vámos egy nővérgyilkos, és egy besúgó. De azt is mondta, hogy nem éri meg.”"},
  {id:"penz", l:"Az új autóról", sober:1, t:{$v:{a:"„Milyen autó?” Kinéz a parkolóba, ahol egy rozsdás Suzuki áll, három kerékkel. „Ez az autóm, főhadnagy. Két éve nem indul.” Nevet, aztán elsírja magát. „Ha lenne pénzem, nem itt laknék.”",b:"Elsápad. „Megnyertem.” Nem néz rád. Aztán: „Szombaton a piacon odajött egy öregember. Kalapban, bottal. Adott egy borítékot. Azt mondta: Attila tudja, miért.” Remeg a keze. „Másfél millió. A gyerek cipőt kapott. Nem kérdeztem semmit.”"}}, ev:{$v:{a:[],b:["szandra_penz"]}}}
 ]},
 csurgo:{n:"Csurgó Béla", r:"fogadóiroda-tulajdonos", loc:"fogado", h:[10,23], bio:"61 éves, aranylánc, tweedzakó, a mosolya olyan, mint egy rossz biztosítási ajánlat. Nem uzsorás, mondja. Csak segít az embereknek.", topics:[
  {id:"fazekas", l:"Fazekas tartozásáról", sober:1, t:{$v:{a:"„Fazekas úr? Rendezte.” Csurgó elővesz egy füzetet, megnyalja az ujját, lapoz. „Hétfőn délben, készpénzben, kétmillió. Ötezresekben, egy borítékban.” Elmosolyodik. „A borítékot megtartottam. Szép boríték, horgony van rajta. Régi kikötői pecsét. Ilyet ma már nem csinálnak.”",b:"„Fazekas úr?” Csurgó elővesz egy füzetet, lapoz. „Kétmillió-kétszázezer, kamatokkal. Hétfőn itt volt, könyörgött még egy hónapért.” Elmosolyodik. „Kapott. Én nem vagyok szörnyeteg, főhadnagy. Csak türelmes.”"}}, ev:{$v:{a:["adossag_kifizetve"],b:[]}}}
 ]},
 // kórház, Detti
 anna_korhaz7:{n:"Dr. Kerekes Bernadett", r:"traumatológus", loc:"korhaz7", h:[8,20], vis:"!anna_pecs_igen", gone:"anna_pecs_igen|anna_pecs_rossz", bio:"41 éves traumatológus. A haja lófarokban, a köpenyén kávéfolt. Pap Ernőt ő rakta össze, három óra alatt.", topics:[
  {id:"pap", l:"Pap Ernőről", req:["pap_korhaz"], t:"„Állkapocs, két borda, egy szem, amit talán megmentünk.” Leveszi a kesztyűt. „Valaki nagyon alaposan dolgozott. Nem dühből. Hogy beszélni ne tudjon.” Rád néz. „Csütörtökre felébresztjük. Írni tud majd, beszélni nem.”"},
  {id:"kave", l:"Meghívod egy kávéra", req:["anna_met","!anna_egyutt"], sober:1, dyn:"annaKave7"},
  {id:"hello", l:"Beszélsz vele", req:["anna_egyutt"], t:"Detti egy pillanatra megáll a folyosón, és a homlokát a válladnak dönti. Három másodperc. Aztán megy tovább, a következő betegéhez. Ennyi elég egy napra. Majdnem."}
 ]},
 anna:{n:"Detti", r:"nálad", loc:"otthon", h:[20,24], vis:"anna_egyutt", gone:"anna_pecs_igen|anna_pecs_rossz", bio:"Dr. Kerekes Bernadett. Esténként a radiátor mellett olvas, a lábát a te zoknidban melegíti.", topics:[
  {id:"gergo", l:"Gergőről beszélsz neki", t:"Elmondod: a levelet, a csomót, apádat. Detti sokáig hallgat. „Tudod, mi a legrosszabb a traumatológiában? Amikor kiderül, hogy a sérülés régi. Hogy évek óta ott volt, és csak most tört el.” Megfogja a kezedet. „Apád nem tudta ezt meggyógyítani, Dénes. Te talán igen.”"},
  {id:"ul", l:"Csak ültök", rep:1, eff:{crave:-15}, t:"A radiátor kopog. Detti egy szakcikket olvas a csonttörésekről, és néha felolvas belőle egy mondatot, ami szerinte vicces. Nem az. Mégis nevetsz."}
 ]},
 // stáb
 szep:{n:"Dr. Szép Viktória", r:"osztályvezető", loc:"kapitanysag", h:[8,20], bio:"44 éves. Ma reggel háromszor hívta Bakonyi ezredes. Mindháromszor felvette.", topics:[
  {id:"elig", l:"Eligazítás", t:"„Vámos Gergőt maga ültette le, Mátrai. Ha most kiderül, hogy a börtönben megölték, a sajtó azt fogja kérdezni, miért nem védték meg. És azt is, hogy maga miért nyomoz a saját elítéltje halálában.” Leteszi a szemüvegét. „Nyomozzon. De csendben.”"},
  {id:"lead", l:"Leadod Gergő levelét", req:["level_gergo","!level_titok"], excl:"nemad", t:"Szép Viktória kétszer olvassa el. „1994. Szabó kapitány.” Lehívja az archívumot, egy sárga aktát. A vezető nyomozó neve: Mátrai Gyula. Ránéz a nevre, aztán rád. „Hivatalos vizsgálatot nyitok, Mátrai. Csendben. És magát nem vonom be. Érti, miért.” Érted.", f:"level_lead"},
  {id:"statusz", l:"Jelentés az ügyről", rep:1, dyn:"vargaStatus"}
 ]},
 bence:{n:"Tóth Bence", r:"nyomozó", loc:"kapitanysag", h:[7,21], staff:1, gone:"bence_halott", bio:"29 éves. Novemberben már nem támasztja ki az ajtót. Csak nem csukja be teljesen.", topics:[
  {id:"gond", l:"Mit gondolsz?", rep:1, dyn:"hintBence7"}
 ]},
 kata:{n:"Rácz Kata", r:"nyomozó", loc:"kapitanysag", h:[7,21], staff:1, gone:"kata_vad", bio:"36 éves. A börtönökről annyit mond, hogy az apja kétszer ült, és mindkétszer rosszabb ember jött ki.", topics:[
  {id:"gond", l:"Mit gondolsz?", rep:1, dyn:"hintKata7"}
 ]},
 bodnar:{n:"Bodnár Feri", r:"törzszászlós", loc:"kapitanysag", h:[7,21], staff:1, gone:"bodnar_vad", bio:"58 éves. Minden börtönőrt ismer a városban, a felét név szerint.", topics:[{id:"gond", l:"Mit gondolsz?", rep:1, t:"„Kozma utca? Ott a pénz beszél, Dénes. Mindig.” Megvakarja a bajuszát. „Ha valaki fizetett, az a pénz a kikötőből jött. Onnan jön mindig, kilencvennégy óta.”", ev:"megbizo", f:"megbizo_kikoto"}]},
 halasz:{n:"Halász Tamás", r:"nyomszakértő", loc:"kapitanysag", h:[8,22], staff:1, bio:"41 éves. A laborban Omega szól, halkabban, mint máskor.", topics:[{id:"gond", l:"Mi van a laborban?", rep:1, dyn:"hintHalasz7"}]},
 feher:{n:"Dr. Fehér Judit", r:"pszichológus", loc:"kapitanysag", h:[9,17], staff:1, bio:"52 éves. Gergőt egy éve ő vizsgálta a tárgyalás előtt. Ma reggel elővette a jegyzeteit, és azóta nem tette le.", topics:[
  {id:"profil", l:"Öngyilkos lett volna Gergő?", t:"„Nem.” Rögtön mondja. „Vámos Gergő harag volt, nem kétségbeesés. Az ilyen ember nem akasztja fel magát. Megír egy levelet, és vár.” Becsukja a jegyzeteit. „Aki megölte, ismerte ezt. Tudta, hogy Gergő nem fog hallgatni. Csak azt nem tudta, hogy már írt.”"},
  {id:"jozan", l:"A józanságról", rep:1, dyn:"feherJozan7"}
 ]},
 keleti:{n:"Dr. Keleti Mária", r:"igazságügyi orvosszakértő", loc:"intezet", h:[7,19], staff:1, bio:"61 éves. Apád barátja. Az íróasztalán egy régi, sárga akta, amit becsuk, ha belépsz.", topics:[
  {id:"elozetes", l:"Előzetes vélemény", t:"„A felakasztottak arca más. Ez az arc nem a kötéltől lett ilyen.” Rágyújt. „Holnapra megmondom biztosan. De te már tudod, Dénes. Láttam az arcodon, ahogy bejöttél.”"},
  {id:"szabo", l:"Szabó kapitányról, 1994", req:["level_gergo"], sober:1, t:"Keleti hosszan fújja a füstöt. „Én boncoltam. Vízbe fulladt. Ezt írtam.” Az ablakhoz lép. „A szájában egy ötforintos volt. Apád azt mondta, babona. A révésznek fizetni kell, különben a halott nem jut át.” Nem fordul meg. „Apád sok mindent mondott akkor, Dénes. Nem mindent hittem el.”", f:"keleti_1994"}
 ]},
 laci:{n:"Laci", r:"kocsmáros", loc:"hordo", h:[15,3], bio:"A Hordó kocsmárosa. Novemberben mindig korábban kapcsolja be az égőket.", topics:[
  {id:"szabo", l:"Emlékszel Szabó kapitányra?", req:["level_gergo"], t:"Laci keze megáll a pohárral. „Szabó Feri. Ott ült, ahol most te.” Leteszi a poharat. „Az utolsó estéjén itt ivott. Apáddal. Meg még valakivel, akire nem emlékszem.” Elfordul. „Kilencvennégy volt, Dénes. Akkor mindenki ivott valakivel, akire nem emlékszik.”", f:"laci_1994"},
  {id:"regi", l:"Csak ültök", rep:1, dyn:"laciC7"}
 ]},
 sanyi:{n:"Sanyi", r:"NA-gyűlés, szponzor", loc:"aa", h:[18,21], bio:"68 éves, huszonkét éve józan. Hajós volt, mielőtt ivott, és ivott, mielőtt józan lett.", topics:[
  {id:"ul", l:"Leülsz a körbe", rep:1, mins:90, eff:{crave:-40}, dyn:"sanyiC7"},
  {id:"csomo", l:"Megmutatod neki a csomó fényképét", req:["csomo"], t:"Sanyi felteszi a szemüvegét. „Kettős bakcsomó. Szép, gyors munka.” Leveszi. „Ezt nem tanulja meg az ember könyvből, testvér. Ezt a korláton tanulja, hidegben, ezerszer. Aki ezt kötötte, az évekig dolgozott a vízen.”"}
 ]},
 lili:{n:"Mátrai Lili", r:"a lányod", loc:"otthon", h:[18,23], vis:"lili_marad", bio:"18 éves, elsőéves a Zeneakadémián. Csütörtökön lép fel először a nagyközönség előtt, Schumann-nal.", topics:[
  {id:"este", l:"Leülsz mellé", rep:1, dyn:"liliC7"}
 ]},
 lili_za:{n:"Mátrai Lili", r:"elsőéves", loc:"zeneakademia7", h:[18,21], vis:"lili_marad", bio:"Fekete ruha, a nagyapja órája a csuklóján, ami túl nagy rá.", topics:[
  {id:"ott", l:"Ott vagy", mins:120, t:"A harmadik sorban ülsz. Lili Schumannt játszik, a Kinderszenent, és a hetedik darabnál, a Träumereinél a terem egészen elcsendesedik. Utána megkeres a szemével. Megtalál. A fogadáson egy tanár megkérdezi, te vagy-e az apja. Igen, mondod. Lili hallja.", f:"lili_koncert7", eff:{crave:-25}}
 ]}
},

tasks:[
 {id:"boncolas7", l:"Vámos Gergő boncolása", req:["body"], dur:300, fit:{keleti:1}, doc:"boncolas7", ok:"Keleti végzett Gergővel. „Gyere be. Nem telefonra való.”"},
 {id:"ajtonaplo", l:"A zárnapló lekérése", req:["naplo_kerheto"], dur:120, fit:{kata:.92, bence:.88, halasz:.8, bodnar:.7}, doc:"ajtonaplo", ok:"Megjött a 214-es zárnaplója.", fail:"A börtön informatikusa szabadságon van. Holnap újra."},
 {id:"kamera7", l:"A folyosókamera felvételei", req:["naplo_kerheto"], dur:240, fit:{halasz:.9, bence:.85, kata:.8, feher:.4}, doc:"kamera7", ok:"Átnéztük a folyosókamerát.", fail:"A fájl sérült. Újra kell kérni."},
 {id:"bogre", l:"A teásbögrék vizsgálata", req:["bogrek"], dur:240, fit:{halasz:.95, keleti:.75}, doc:"bogre", ok:"Megvan a bögrék eredménye."},
 {id:"rigo_ver", l:"Rigó Attila vérmintájának vizsgálata", req:["met_rigo"], dur:180, fit:{keleti:.95, halasz:.7}, doc:"rigo_ver", ok:"Megjött Rigó toxikológiája."}
],

leads:[
 {need:["vamos_halal"], not:["met_bakonyi"], x:"A börtönparancsnok vár a Kozma utcában. Kezdd ott."},
 {need:["body"], not:["doc:boncolas7"], x:"Keleti megboncolhatja Gergőt (Stáb)."},
 {need:["met_bakonyi"], not:["csomo"], x:"Nézd meg a 214-es zárkát. Az ablakrácsot."},
 {need:["met_bakonyi"], not:["naplo_kerheto"], x:"Az őrszobán kikérheted a zárnaplót és a kamerafelvételt."},
 {need:["naplo_kerheto"], not:["doc:ajtonaplo"], x:"Ki nyitotta ki a 214-est éjjel, ha valaki kinyitotta? Kérd ki a zárnaplót (Stáb)."},
 {need:["naplo_kerheto"], not:["doc:kamera7"], x:"A folyosókamera látta, ki járt a 214-es előtt (Stáb)."},
 {need:["bogrek"], not:["doc:bogre"], x:"A két bögrét Halász megvizsgálhatja (Stáb)."},
 {need:["met_rigo"], not:["doc:rigo_ver"], x:"Rigó azt mondja, altatót vett be. Keleti ellenőrizheti a vérmintáját (Stáb)."},
 {need:["zolpidem_gergo"], not:["bogrek"], x:"Gergőt elaltatták. Mivel? Mit ivott este? Nézd meg a zárka asztalát."},
 {need:["fazekas_ugyelet"], not:["met_fazekas"], x:"Fazekas Zoltán ma szabadnapos. Otthon van, Kispesten."},
 {need:["fazekas_adossag"], not:["met_csurgo"], x:"Fazekas Csurgó Bélának tartozik. A fogadóirodában megtudod, hol tart a tartozás."},
 {need:["met_rigo"], not:["rigo_szandra"], x:"Van valakije Rigónak odakint? Kérdezd meg."},
 {need:["rigo_szandra"], not:["met_szandra"], x:"Szandra Csepelen lakik. Nézd meg, miből él."},
 {need:["pap_fel"], not:["pap_vallomas","pap_holnap","pap_korhaz"], x:"Pap Ernő fél. Ha beszéljen, védelem kell neki. Vagy nyomás."},
 {need:["level_gergo"], not:["met_lajos"], x:"Gergő azt írta: apám tudja. Vámos Lajos a Révészen él, a Déli kikötőben."},
 {need:["met_lajos"], not:["lajos_olvasta"], x:"Gergő levelének utolsó sora az apjának szól. Talán neki is látnia kell."}
],

timed:[
 {id:"posta", at:600, f:"posta_jott", x:"<b>Szomszéd, SMS:</b> Főhadnagy úr, levele jött, kézzel címzett. A postás az én ládámba tette, áttettem a magáéba."},
 {id:"hirlap1", at:1440+420, front:{h:"Halál a Kozma utcában",s:"Holtan találták a Révész-ügy elítéltjét",b:"Vámos Gergő, aki tavaly egy ápolónő meggyilkolásáért tizenkét évet kapott, hétfőn hajnalban holtan feküdt a cellájában. A börtönparancsnokság öngyilkosságot valószínűsít. Lapunk értesülése szerint a nyomozást ugyanaz a rendőrtiszt vezeti, aki annak idején Vámost letartóztatta."}},
 {id:"pap_tamadas", at:1440+1320, req:["pap_fel"], unless:"pap_vedett", f:"pap_korhaz", modal:"<h2>Kedd, 22:00 – telefon</h2><p>Bakonyi ezredes. A hangja fáradt és dühös. „Pap Ernőt a zuhanyzóban megverték. Hárman voltak, senki nem látta őket. Mentő viszi a Szent Jánosba.” Csend. „Maga beszélt vele tegnap, főhadnagy. Az egész emelet látta.”</p>"},
 {id:"pap_ebred", at:3*1440+480, req:["pap_korhaz"], f:"pap_ebren", x:"<b>Szent János, SMS:</b> Pap Ernő magához tért. Írni tud. Beszélni nem."},
 {id:"lili_sms", at:3*1440+480, req:["lili_marad"], x:"<b>SMS, Lili:</b> Ma este 7, Solti terem. Schumann. Ha nem jössz, az is oké. (Nem oké.)"},
 {id:"lili_hiv", at:2*1440+1260, req:["lili_elenged"], modal:function(S){
   if(S.alc>40){S.f.lili_hivas_rossz=1;return"<h2>Szerda, 21:00 – telefon, Bécs</h2><p>Lili hív. Kicsöng, egyszer, kétszer. A telefon ott van melletted. Nem veszed fel. Reggel egy üzenet: <i>„Mindegy.”</i></p>"}
   S.f.lili_hivas7=1;return"<h2>Szerda, 21:00 – telefon, Bécs</h2><p>Lili: „Láttam a hírekben. A Kozma utcát.” Hallgat. „Nagyapa ügye volt, ugye? Az a Révész?” Igen. „Anya szerint nagyapa soha nem beszélt róla.” Most te hallgatsz. „Apa. Ha kiderül valami rossz nagyapáról… nekem elmondod?” Igen. Mindketten tudjátok, hogy ez egy ígéret.</p>"}},
 {id:"pecs_sms", at:4*1440+600, req:["anna_pecs_igen|anna_pecs_rossz"], x:"<b>SMS, Detti:</b> Ma este 18:10-kor indul a vonat a Keletiből. Nem kérem, hogy gyere. Csak mondom, hogy indul."},
 {id:"vege", at:5*1440+1200, pat:-500, modal:"<h2>Szombat, 20:00</h2><p>Bakonyi ezredes aláírja a jelentést: öngyilkosság. Szép Viktória nem vitatja. „Ennyi volt, Mátrai. Elfogyott az időnk.” Vámos Gergőt ma délelőtt eltemették. A koporsóján egy kötél feküdt, egyetlen csomóval.</p>"}
],

actions:{
 titok:{loc:"otthon", l:"Gergő levelét apád jegyzetfüzetébe teszed", req:["level_gergo","!level_lead"], mins:10, f:"level_titok", once:1, x:"Beteszed a levelet a füzetbe, az 1994-es lapok közé. Senki nem tudja, hogy megkaptad. Csak te, és aki Gergőt megölte."},
 pecs:{loc:"keleti7", l:"Vonat Pécsre, Dettihez (péntek este – szombat reggel, 8 000 Ft)", req:["anna_pecs_igen|anna_pecs_rossz"], cost:8000, mins:900, f:"anna_pecs_latogat", once:1, x:"Három óra vonat a ködben. Detti a pécsi állomáson vár, futócipőben, a kabátja alatt még a köpeny. Nem kérdezi, miért jöttél. A lakásában egy matrac a földön, egy doboz könyv, egy macska, aki rögtön az öledbe ül. Hajnalban a vonaton visszafelé alszol, először napok óta."}
},

locEvents:[
 {id:"drunk", loc:"kapitanysag", when:(S,h,A)=>A.inWin(h,[8,19])&&S.alc>55, pat:-15, html:"<h2>Megszagolnak</h2><p>Szép Viktória megáll melletted. „A börtönben is így megy be, Mátrai?” Továbbmegy.</p>"}
],

dyn:{
  lajosTemetes(S){
    S.f.lajos_1994=S.t;
    return'Állsz mellette, amíg a sírásók dolgoznak. Lajos nem néz rád. „Négyen voltunk a Révészen, kilencvennégy novemberében. Szabó Feri, a kapitány. Fodor Ákos, a fiatal, aki a pénzt hozta. Én. És a negyedik.” A kötelet nézi a koporsón. „Olajat hoztunk le Szerbiába, az embargó alatt, éjjel. Szabó többet akart. A negyedik azt mondta, majd ő elintézi.” Most rád néz. „Én nem láttam, mi történt. Csak a csobbanást hallottam. Reggel Szabónak egy ötforintos volt a szájában.” Elfordul. „A nevét nem mondom meg. Gergő meghalt érte. Apád tudta. Apád lezárta az ügyet.” Elmegy, a ködbe, a bottal, és nem fordul vissza.';
  },
  annaKave7(S){
    if(S.alc>20)return'„Most nem, Dénes.” Ránéz a kezedre. „Novemberben mindenki iszik. Te ne.”';
    S.f.anna_egyutt=S.t;S.f.anna_kave7=S.t;
    return'A büfében automatás kávé, két műanyag pohár, egy asztal a liftek mellett. Detti a börtönről kérdez, te a csomóról mesélsz. „Hajós csomó?” Elmosolyodik. „A nagyapám halász volt Pakson. Ő is így kötött.” Fél óra. Amikor a csipogója szól, feláll, aztán visszafordul, és megcsókol, a lift mellett, a betegszállítók előtt. „Ezt most nem gondoltam végig” — mondja. „Jó” — mondod.';
  },
  hintBence7(S){
    if(!S.ev.csomo)return'„Láttad már a zárkát? A rácsot? Az ilyen dolgokon múlik minden, főnök.”';
    if(S.f.naplo_kerheto&&!S.docs.ajtonaplo)return'„A zárnapló. Minden ajtónyitást rögzítenek. Kikérem, ha kell.”';
    if(S.f.pap_holnap&&!S.f.pap_korhaz)return'„Pap Ernő azt mondta, holnap? Főnök… ott bent a holnap hosszú idő.”';
    return'„Valaki fizetett ezért. Mindig valaki fizet.”';
  },
  hintKata7(S){
    if(!S.docs.boncolas7)return'„Előbb Keleti. Ha tényleg felakasztotta magát, megyünk haza.” Nem hiszi el.';
    if(S.ev.fazekas_adossag&&!S.f.met_csurgo)return'„Egy adósságos őr. Nézd meg, áll-e még az adóssága. Ha hirtelen kifizette, akkor tudjuk, miből.”';
    if(S.f.rigo_szandra&&!S.f.met_szandra)return'„Rigó nője. Ha valaki fizetett, nem a rabnak fizetett. Annak, aki kint van.”';
    return'„A zárka zárva volt, vagy nem volt zárva. Ha zárva volt, ketten voltak bent. Ha nem, hárman.”';
  },
  hintHalasz7(S){
    if(S.f.bogrek&&!S.docs.bogre)return'„Hozd be a bögréket. Ha volt bennük valami, beszáradt.”';
    if(S.ev.csomo)return'„A kettős bakcsomó?” Sokáig nézi a fényképet. „Ezt nem rab kötötte, aki filmből tanulta. Ezt valaki kötötte, aki évekig fagyott a vízen.”';
    return'„Fogd meg az ilyen ügyeket a végüknél, Dénes. A közepük mindig sötét.”';
  },
  feherJozan7(S){
    const d=(S.drinks||0);
    if(!S.f.aa1){S.f.aa1=S.t;return'„A börtön a lehető legrosszabb hely egy alkoholistának.” Ír egy címet egy cetlire. „Templomalagsor, esténként hattól.”'}
    if(d===0)return'„És most? Egy halott, akit maga ültetett le. Egy apa, aki hallgat.” Rád néz. „Ez a fajta nap, amikor a régi énje innék. Ma este menjen el a gyűlésre.”';
    return'Ránéz a kezedre. „Ittál.” Nem kérdés. „Gergőért, vagy az apjáért?” Nem válaszolsz.';
  },
  laciC7(S){
    const A=['Laci teát tesz eléd, citrommal. „November” — mondja, mintha ez magyarázat lenne. Az.',
      '„Apád minden novemberben egyszer leült abba a sarokba, egyedül, és egy fröccsöt ivott. Csak novemberben.” Laci a sarokasztalt nézi. „Sosem kérdeztem, miért.”',
      'Nem beszéltek. A rádióban köd-előrejelzés. Laci egyszer megszólal: „Imre azt írta, a börtönben is van karácsony. Csak rosszabb.”'];
    S.f.lc7=(S.f.lc7||0)+1;return A[(S.f.lc7-1)%A.length];
  },
  sanyiC7(S){
    if((S.drinks||0)>0)return'Ülsz a körben. Valaki egy halott fiúról beszél, akit nem tudott megvédeni. Te nem beszélsz. Sanyi a végén azt mondja: „Ma ittál. Holnap ne. Ennyit kérek.”';
    return'Ülsz a körben. Valaki az apjáról beszél, aki hazudott neki egész életében, szeretetből. Te elmondod, hogy a te apád talán egy gyilkosságot takart el, harminchárom éve. Sanyi a végén melléd ül. „Az apád nem te vagy, testvér. Az ő hallgatása nem a te hallgatásod. Csak ha te is hallgatsz.”';
  },
  liliC7(S){
    const A=['Lili a Träumereit gyakorolja, ugyanazt a nyolc ütemet, újra és újra. „Túl lassú?” Nem tudod. „Nagyapa tudta volna.” Nagyapa nem tudott zongorázni. „De tudta volna.”',
      'Lili meglátja apád jegyzetfüzetét az asztalon. Nem nyúl hozzá. „Mi van benne?” Nem tudod még. „Ha megtudod, elmondod?” Igen.',
      'Lili teát főz, és melléd ül a radiátorhoz. „A tanárom azt mondta, Schumann megőrült a végén.” Kortyol. „De előtte ezt írta. Szóval lehet.”'];
    S.f.lo7=(S.f.lo7||0)+1;S.crave=Math.max(0,S.crave-10);return A[(S.f.lo7-1)%A.length];
  }
},
rejectExtra:{},
bonus:function(S){const b=[];if(S.f.pap_vedett)b.push([5,'Megvédted a tanút']);if(S.f.pap_korhaz)b.push([-10,'A tanút megverték']);if(S.f.lili_koncert7||S.f.lili_hivas7)b.push([5,'Ott voltál Lilinek']);if((S.drinks||0)===0)b.push([5,'Józan maradtál']);return b},
solveGoal:{$v:{a:["fazekas_bent","fazekas_kabitas","fazekas_penz"],b:["rigo_kabitas","rigo_egyedul","rigo_penz"]}},
solveSkip:["ad","nyomas"],

end:{
 win:function(S){
  let t="";
  if(S.variant==="a"){
   t+="<p>Fazekas Zoltán a kihallgatóban a kezét nézi. Azt a kezet, ami ezer kötelet kötött a Dunán. „Egy öregember jött a fogadóba, október végén. Kalapban. Azt mondta, tudja, mennyivel tartozom, és tudja, hol lakik a feleségem.” Felnéz. „Azt mondta, Vámos úgyis meghal odabent, előbb-utóbb. Én csak segítek neki, hogy előbb.” A horgonyos borítékot nem tudja megmagyarázni. Nem is próbálja.</p>";
  }else{
   t+="<p>Rigó Attila a kihallgatóban sír, ugyanúgy, ahogy Pap Ernő hallotta: hangtalanul, egy órán át. „Szandrának adtak pénzt. Azt mondták, a gyerek cipőt kap, és senki nem bántja őket.” Megtörli az arcát. „Vámos aludt. Nem érzett semmit. Ezt mondtam magamnak.” Felnéz. „Az öregember, aki a pénzt adta, azt üzente: a révésznek fizetni kell. Nem értettem.” Te érted.</p>";
  }
  t+="<p>Aki fizetett, az nem kerül elő. Egy öregember kalapban, bottal, egy horgonnyal a borítékon. A kikötőben mindenki ismer valakit, aki ilyen. Senki nem mondja meg, kit.</p>";
  return t+c7EndCommon(S);
 },
 wrong:{$v:{
  a:{rigo:"<p>Rigó Attilát gyilkosságért elítélik. A cellatárs, a fenyegetés, a matróz: a bíróságnak elég. A tárgyaláson nem szól semmit, csak egyszer, az ítélet után: „Aludtam.”</p><p>Fazekas Zoltán januárban nyugdíjba megy. A tartozását kifizette. A felesége szerint azóta nem alszik.</p>",
     lajos:"<p>Vámos Lajost letartóztatják a fia meggyilkolásáért. Hetvennégy éves, egy éjszakát tölt a fogdán, aztán az ügyvéd a kapunaplót lobogtatja, és reggel elengedik. Nem néz rád, amikor kijön. Soha többé nem fog."},
  b:{fazekas:"<p>Fazekas Zoltánt felfüggesztik, aztán vádat emelnek ellene. A tárgyaláson a zárnapló megmutatja, hogy egész éjjel egyetlen ajtót sem nyitott ki. Felmentik. A tartozása megmarad, és Csurgó türelme is elfogy.</p><p>Rigó Attila két évvel később feltételesen szabadul. Szandra az új autóval várja a kapu előtt.</p>",
     lajos:"<p>Vámos Lajost letartóztatják a fia meggyilkolásáért. Hetvennégy éves, egy éjszakát tölt a fogdán, aztán az ügyvéd a kapunaplót lobogtatja, és reggel elengedik. Nem néz rád, amikor kijön. Soha többé nem fog."}
 }},
 fired:"<p>Az ügyet lezárják: öngyilkosság. Bakonyi ezredes aláírja, Szép Viktória ellenjegyzi.</p><p>Otthon apád jegyzetfüzetét lapozod. Az 1994-es lapokon semmi, csak dátumok és egy név, kétszer áthúzva, olvashatatlanul.</p>"
}
};

function c7EndCommon(S){
  let t="";
  if(S.f.lajos_1994)t+="<p>Négyen voltak a Révészen. Szabó, Fodor, Vámos Lajos, és egy negyedik. Szabó és Fodor halott. Gergő is. Lajos hallgat. A negyedik él valahol a ködben, és tudja, hogy most már te is tudod, hogy létezik.</p>";
  else if(S.f.lajos_olvasta)t+="<p>Gergő temetésére nem mész el. Lajos a sír mellett vár egy darabig, aztán elmegy. A kötelet a koporsón hagyja.</p>";
  if(S.f.level_lead)t+="<p>Szép Viktória csendben vizsgálatot nyit az 1994-es ügyben. A sárga akta átkerül az ő asztalára. Te nem nyúlhatsz hozzá. Ez így helyes. Mégis minden este eszedbe jut.</p>";
  else if(S.f.level_titok)t+="<p>Gergő levele apád jegyzetfüzetében van, az 1994-es lapok között. Senkinek nem mutattad meg. Lehet, hogy ez hiba. Lehet, hogy ez az egyetlen dolog, ami életben tart.</p>";
  if(S.f.pap_korhaz)t+="<p>Pap Ernő januárban szabadul. Az állkapcsa rosszul forrt össze, és amikor beszél, motyog. Egy képeslapot küld neked: <i>„Holnap lett volna.”</i></p>";
  else if(S.f.pap_vedett)t+="<p>Pap Ernő a fogdán tölti a büntetése végét, és a kapitányság könyvtárát rendezi. Halász szerint ő az első ember, aki valaha ábécérendbe tette a bűnügyi szakirodalmat.</p>";
  if(S.f.anna_pecs_latogat)t+="<p>Decemberben minden pénteken a pécsi vonaton ülsz. A kalauz már köszön.</p>";
  else if(S.f.anna_pecs_igen||S.f.anna_pecs_rossz)t+="<p>Detti pénteken azt írja: <i>„Indult a vonat.”</i> Nem válaszolsz. Szombat reggel azt írja: <i>„Megérkezett.”</i> Ezt sem.</p>";
  else if(S.f.anna_kave7)t+="<p>Detti szombaton átjön, egy szatyor mandarinnal. Azt mondja, csak egy órára. Hétfőn megy el.</p>";
  if(S.f.lili_koncert7)t+="<p>Lili felvételét a Träumereiről valaki feltölti az internetre. Négyszáz megtekintés. Négyet te csináltál, éjjel.</p>";
  else if(S.f.lili_marad)t+="<p>Lili csütörtök este egyedül jön haza a koncertről. A virágot, amit valaki más adott neki, beteszi egy vázába a konyhában. Nem szól semmit. Te sem.</p>";
  if((S.drinks||0)===0)t+="<p>Kilenc hónapja nem ittál. Ezen a héten volt a legközelebb. Nem ittál.</p>";
  else t+="<p>Péntek este a Hordóban ülsz. Laci tölt, és a sarokasztalra néz, ahol apád ült minden novemberben, egyedül, egy fröccsel.</p>";
  return t;
}
