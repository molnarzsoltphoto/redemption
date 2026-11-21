// ===== 1. ÜGY: A RÉVÉSZ =====
const CASES={};
CASES.c1 = {
id:"c1", num:"1. ügy ·", title:"A Révész", tagline:"November. Egy ápolónő a régi kompon, tízforintossal a nyelve alatt.", culprit:"vamos", date:[2026,10,23], par:3, order:["berkes","kertesz","vamos"],
intro:"Hétfő, november 23., 05:50. Az eső harmadik napja nem áll el. A telefon a padlón rezeg, az üres pohár mellett.<br><br>Varga hangja rekedt: „Déli kikötő, a régi komp. Nő, harmincas. Gyere józanon, ha tudsz.” Leteszi, mielőtt válaszolhatnál.<br><br>A tükörben egy negyvennégy éves férfi néz vissza, aki hat éve nem aludt át egy éjszakát. Felveszed a kabátot.",
start:{t:350, loc:"otthon"},

suspects:{
 vamos:{name:"Vámos Gergő", short:"Vámos", reveal:["met_vamos","vamos_lanya"]},
 kertesz:{name:"Kertész Balázs", short:"Kertész", reveal:["kertesz_priusz_read","met_kertesz","briefed"]},
 berkes:{name:"Dr. Berkes András", short:"Berkes", reveal:["met_berkes","berkes_gyanu","sogor"]}
},

// ---- BIZONYÍTÉKOK ----  sup: [gyanúsított, kategória] I=indíték A=alkalom M=módszer
ev:{
 aldozat:{n:"Az áldozat", d:"Halmi Zsófia, 34, ápolónő. A Révész fedélzetén, kezei a mellkasán összekulcsolva. Kötéllel fojtották meg."},
 ermeszaj:{n:"Tízforintos a szájban", d:"Valaki gondosan a nyelve alá tette. A régiek így fizettek a révésznek."},
 kotelminta:{n:"Kötélminta a korlátról", d:"Kátrányos kender, régi fajta. Egy darabot frissen levágtak belőle."},
 lanc:{n:"Ép lakat a hangáron", d:"Nem feszítették fel. Aki bejött, kulccsal jött."},
 bakancs:{n:"45-ös gumicsizmanyom", d:"Bordázott talp a sárban a komp mellett."},
 csikk:{n:"Symphonia csikk", d:"Ázott csikk a rámpán. Nem tudni, mióta fekszik ott.", sup:[["kertesz","A"]]},
 tavoltartas:{n:"Távoltartási végzés", d:"Kertész Balázs ellen, Halmi Zsófia javára, 2024 márciusában.", sup:[["kertesz","I"]]},
 veszekedes:{n:"Vasárnap esti veszekedés", d:"A szomszéd szerint Kertész kilenc után ordított: „megbánod még”.", sup:[["kertesz","A"]]},
 karmolas:{n:"Karmolások Kertész kezén", d:"Friss, párhuzamos karmolások a kézfején, két-három naposak.", sup:[["kertesz","M"]]},
 zalog_kertesz:{n:"Zálogjegy: Kertész", d:"Kertész hétfő délelőtt zaciba vágta Zsófia laptopját.", sup:[["kertesz","I"]]},
 kertesz_alibi:{n:"Kertész alibije", d:"Fél tíztől zárásig, fél kettőig a Hordóban volt, utána Imre vitte haza.", clears:"kertesz"},
 halalido:{n:"A halál ideje", d:"Vasárnap 23:00 és hétfő 01:00 között."},
 kenderszal:{n:"Kenderszálak a sebben", d:"Kátrányos kenderszálak a strangulációs barázdában."},
 korom:{n:"Bőr a körmök alatt", d:"Idegen bőrmaradvány a jobb kéz körmei alatt. DNS-összevetésre alkalmas."},
 gala:{n:"Berkes a gálán", d:"Fél egyig a Duna-palotában volt, utána a sofőrje hazavitte. Az ablak nyitva marad 00:30 és 01:00 között.", sup:[["berkes","A"]]},
 csalas:{n:"Számlázási csalás", d:"A klinika 47 olyan kezelést számlázott le, amikor a beteg már halott volt. Zsófia tudott róla.", sup:[["berkes","I"]]},
 berkes_utasitas:{n:"Berkes utasítása", d:"Zsófia 2024-es jelentéstervezete: Berkes szóban rendelte el a dupla dózist.", sup:[["berkes","I"]]},
 sogor:{n:"Berkes sógora: Somogyi", d:"A klinikaigazgató Somogyi Kristóf főkapitány-helyettes sógora."},
 incidens:{n:"Incidensjelentés, 2024", d:"V. Hanna, 9 éves, kétszeres dózis. Felelős: Halmi Zsófia ápolónő."},
 vamos_lanya:{n:"Vámos lánya", d:"Vámos Gergő kilencéves lánya, Hanna, két éve kórházban halt meg."},
 vamos_kulcs:{n:"Vámos kulcsai", d:"A hangárhoz csak Vámosnak és a kikötőmesternek van kulcsa. A kikötőmester két hete Debrecenben van."},
 vamos_csizma:{n:"Csizma a porta előtt", d:"Egy pár 45-ös gumicsizma, a talpán friss, szürke folyami sár."},
 vamos_auto:{n:"Vámos furgonja", d:"Fehér Ford Transit, JKL-417, a porta mellett."},
 hivas_porta:{n:"Hívás a portára, 21:47", d:"Zsófia vasárnap este négy percig beszélt a kikötői portával.", sup:[["vamos","A"]]},
 kamera_transit:{n:"Kamerafelvétel: Transit", d:"22:38-kor egy fehér Transit, rendszám …-417, világítás nélkül a rakpart felé hajt. 00:51-kor vissza."},
 akta1994:{n:"Az 1994-es akta", d:"1994-ben vízbe fúlt férfi a Révész mellett, szájában pénzérme. Gyanúsított: Vámos Lajos révész. Vezető nyomozó: Mátrai Gyula."},
 level_vamos:{n:"Zsófia levele Vámosnak", d:"Elküldetlen piszkozat: „Nem én döntöttem. Ma este a kikötőben elmondok mindent.”", sup:[["vamos","A"]]},
 vamos_dns:{n:"Vámos DNS-mintája", d:"Vámos ellenkezés nélkül adott nyálmintát."},
 kotel_egyezes:{n:"Kötélegyezés, révészhurok", d:"A sebből kiemelt szálak a Révész kötelétől származnak. A csomó régi hajós „révészhurok”.", sup:[["vamos","M"]]},
 dns_egyezes:{n:"DNS-egyezés: Vámos", d:"A körmök alatti bőr Vámos Gergőé.", sup:[["vamos","M"],["vamos","A"]]},
 nincs_telefon:{n:"Hiányzó telefon", d:"Zsófia táskájában pénztárca, kulcs, igazolvány. Telefon nincs."},
 telefon_00:{n:"A telefon 00:43-kor", d:"A készülék a halál után is a kikötőnél volt, 00:43-kor kapcsolták ki."},
 kamera_limo:{n:"Limuzin a rakparton, 00:38", d:"Sötét limuzin áll meg a rakparton 00:38-kor, 00:49-kor továbbhajt a belváros felé."},
 sofor_titok:{n:"Nóra a sofőrről", d:"Berkes sofőrje részegen elmondta Nórának, hogy a főnöke vasárnap éjjel kiszállt a kikötőnél, és egy idegen telefonnal jött vissza."},
 sofor_beismer:{n:"A sofőr vallomása", d:"00:40 körül a rakparton álltak meg. Berkes tíz percre kiszállt, és egy idegen telefonnal tért vissza. Közben egy fehér furgon jött fel világítás nélkül.", sup:[["berkes","A"]]},
 telefon_kocsiban:{n:"Telefon Berkes kocsijában", d:"Zsófia kikapcsolt telefonja Berkes limuzinjának kesztyűtartójában volt.", sup:[["berkes","A"]]},
 sms_berkes:{n:"Zsófia SMS-e Berkesnek", d:"20:31: „Ma este elmondom Hanna apjának, mi történt. Magáról is.” Berkes válasza 20:44: „Ne tegye.”", sup:[["berkes","I"]]},
 berkes_beismeres:{n:"Berkes: már halott volt", d:"Berkes beismerte, hogy 00:40-kor ért a komphoz, Zsófia már halott volt, és ő vitte el a telefont, mert rajta volt a neve.", clears:"berkes"},
 apa_csomo:{n:"Apád jegyzete: a révészhurok", d:"1994: Vámos Lajos tanította a tizenhárom éves fiát a révészhurokra. Rajtuk kívül senki nem ismeri."},
 // következtetések
 revesz_ritual:{n:"A révész rítusa", d:"Az érme nem jelkép, hanem családi babona. A Vámos család hite szerint a halottnak fizetnie kell a révésznek.", sup:[["vamos","M"]], ded:true},
 kulcs_hozzaferes:{n:"Csak Vámos nyithatta", d:"Ép lakat, és vasárnap éjjel egyetlen kulcstartó volt a városban.", sup:[["vamos","A"]], ded:true},
 nyom_egyezes:{n:"A csizmanyom Vámosé", d:"A komp melletti nyom mérete és mintázata egyezik a porta előtti csizmával.", sup:[["vamos","A"]], ded:true},
 transit_vamos:{n:"Vámos hazudott a portáról", d:"A felvételen az ő furgonja megy le a komphoz 22:38-kor. Azt mondta, ki sem mozdult.", sup:[["vamos","A"]], ded:true},
 bosszu:{n:"Bosszú Hannáért", d:"Vámos a papírok alapján Zsófiát tartotta a lánya halála felelősének.", sup:[["vamos","I"]], ded:true},
 telefon_elvitte:{n:"Valaki elvitte a telefont", d:"A halál után legalább negyven perccel valaki a komphoz ment, és elvette Zsófia telefonját.", ded:true},
 berkes_kikoto:{n:"Berkes a kikötőben", d:"Fél egykor hagyta el a bált, 00:38-kor egy limuzin áll meg a rakparton. Nem ment egyenesen haza.", sup:[["berkes","A"]], ded:true},
 csomo_vamos:{n:"A révészhurok Vámosé", d:"A gyilkos csomóját harminckét éve egy apa tanította a fiának a Révész fedélzetén.", sup:[["vamos","M"]], ded:true},
 igazsag:{n:"Zsófia ártatlan volt", d:"A hivatalos jelentést meghamisították. A dupla dózist Berkes rendelte el.", ded:true}
},

ded:[
 {a:"ermeszaj", b:"akta1994", g:"revesz_ritual", t:"Ötforintos 1994-ben, tízforintos most. Ugyanaz a komp, ugyanaz a család. Ez nem másolás. Ez örökség."},
 {a:"lanc", b:"vamos_kulcs", g:"kulcs_hozzaferes", t:"A lakat ép. A kikötőmester Debrecenben van. Vasárnap éjjel egyetlen ember tudta kinyitni azt a hangárt."},
 {a:"bakancs", b:"vamos_csizma", g:"nyom_egyezes", t:"Ugyanaz a bordázat, ugyanaz a méret, ugyanaz a szürke iszap. A csizma a porta előtt szárad."},
 {a:"kamera_transit", b:"vamos_auto", g:"transit_vamos", t:"…-417. JKL-417. „Egész éjjel itt voltam” — mondta, a tea és a rádió mellett."},
 {a:"vamos_lanya", b:"incidens", g:"bosszu", t:"V. Hanna, kilencéves. Felelős: Halmi Zsófia. Egy apa, aki két évig olvasta ezt a mondatot."},
 {a:"incidens", b:"berkes_utasitas", g:"igazsag", t:"A hivatalos jelentésben írásos utasítás áll. Zsófia piszkozatában szóbeli. Valaki átírta a múltat, és egy ápolónő nevét hagyta benne."},
 {a:"telefon_00", b:"nincs_telefon", g:"telefon_elvitte", t:"23:00 és 01:00 között halt meg. A telefonja 00:43-kor még ott volt, aztán valaki kikapcsolta és elvitte. A gyilkos már rég elment, vagy visszajött. Vagy valaki más jött."},
 {a:"kamera_limo", b:"gala", g:"berkes_kikoto", t:"„Fél egykor jöttem el, a sofőröm hazavitt.” A Duna-palotától a rakpartig nyolc perc. 00:38-kor egy limuzin áll meg a komp fölött."},
 {a:"telefon_00", b:"halalido", g:"telefon_elvitte", t:"23:00 és 01:00 között halt meg. A telefonja 00:43-kor még a kikötőnél volt, aztán kikapcsolták. Valaki ott járt a halál után, és elvitte."},
 {a:"telefon_kocsiban", b:"nincs_telefon", g:"telefon_elvitte", t:"A telefon nem a vízben van, és nem a gyilkosnál. Egy klinikaigazgató kesztyűtartójában."},
 {a:"kamera_limo", b:"telefon_00", g:"berkes_kikoto", t:"00:38-kor megáll a limuzin. 00:43-kor elhallgat Zsófia telefonja. 00:49-kor a limuzin továbbhajt."},
 {a:"kamera_limo", b:"sofor_beismer", g:"berkes_kikoto", t:"A sofőr és a kamera ugyanazt mondja: fél egy után a limuzin a komp fölött állt."},
 {a:"kamera_transit", b:"vamos_kulcs", g:"transit_vamos", t:"A furgon a portáról indul le a komphoz, és a portán egyetlen ember ül éjszakánként. „Egész éjjel itt voltam.”"},
 {a:"vamos_lanya", b:"level_vamos", g:"bosszu", t:"„Tudnia kell, mi történt Hannával.” Egy apa, aki két évig hitte, hogy tudja."},
 {a:"ermeszaj", b:"apa_csomo", g:"revesz_ritual", t:"Apád jegyzete és az érme a nyelv alatt: ugyanaz a család, ugyanaz a babona. Aki tartozik, fizet a révésznek."},
 {a:"apa_csomo", b:"kotel_egyezes", g:"csomo_vamos", t:"Halász azt mondta: ilyen csomót ma szinte senki nem köt. Apád harminckét éve leírta, ki tudja még."}
],

// ---- DOKUMENTUMOK ----  [[evId|szöveg]] = kiemelhető sor
docs:{
 kertesz_priusz:{t:"Nyilvántartási kivonat – Kertész Balázs", b:"KERTÉSZ BALÁZS, szül. 1988, autószerelő\n\n2019 — könnyű testi sértés, felfüggesztett.\n2021 — ittas járművezetés, jogosítvány 6 hónapra bevonva.\n[[tavoltartas|2024. 03. 11. — távoltartási végzés Halmi Zsófia javára (hozzátartozók közötti erőszak).]]\n\nMegjegyzés: tartozások, végrehajtás folyamatban. Munkahely: saját műhely, Angyalföld, Váci út mögött."},
 boncolas:{t:"Boncolási jegyzőkönyv – Halmi Zsófia", b:"IGAZSÁGÜGYI ORVOSTANI INTÉZET\nVizsgálta: dr. Keleti Mária\n\n[[halalido|Halál beállta: 2026. 11. 22., 23:00 és 11. 23., 01:00 között.]]\nHalál oka: fulladás, kötéllel történő megfojtás, hátulról.\n[[kenderszal|A strangulációs barázdában kátrányos kenderszálak.]]\nVédekezési sérülés: minimális. A kezek összekulcsolása a halál után történt.\n[[korom|A jobb kéz körmei alatt idegen bőrmaradvány – DNS-összevetésre alkalmas.]]\nVéralkoholszint: 0,0 ‰. Gyomortartalom: tea, kevés keksz.\n\nA szájüregben 10 forintos érme, a nyelv alatt. Post mortem helyezték oda.\n\n— Kézzel a margón: „Dénes, ez nem dühből volt. Aki ezt csinálta, gyászolt. K. M.”"},
 hivaslista:{t:"Hívásrészletező – Halmi Zsófia, 11. 22.", b:"SZOLGÁLTATÓI ADATSZOLGÁLTATÁS, 2026. 11. 22.\n\n09:14  bejövő  Anya (mobil)  12 perc\n13:02  kimenő  Szent Lukács Klinika, ügyelet  2 perc\n17:40  bejövő  Fodor Réka  1 perc\n20:55  bejövő  Kertész Balázs  nem fogadott\n20:58  bejövő  Kertész Balázs  nem fogadott\n[[hivas_porta|21:47  kimenő  +36 1 …  (Déli kikötő, portaszolgálat)  4 perc]]\n22:31  bejövő  Anya (mobil)  nem fogadott\n\n[[telefon_00|A készülék utolsó cellainformációja: 00:43, Soroksári út – Déli kikötő. Ezt követően a készüléket kikapcsolták.]]"},
 kamera:{t:"Térfigyelő kamera – Déli kikötő, bejárati út", b:"FŐVÁROSI TÉRFIGYELŐ RENDSZER, 4471-es kamera\nIdőszak: 2026. 11. 22. 20:00 – 11. 23. 06:00\n\n21:12  személygépkocsi, kikötő felől kifelé (kikötői dolgozó)\n21:58  gyalogos nő, esernyő nélkül, a bejárat felé\n[[kamera_transit|22:38  fehér Ford Transit, rendszám részben olvasható: …-417, a porta felől a rakpart felé, világítás nélkül]]\n[[kamera_limo|00:38  sötét limuzin, rendszám nem olvasható, a rakparton megáll; 00:49 tovább a belváros felé]]\n00:51  ugyanaz a Transit visszafelé, a porta irányába\n05:20  rakodómunkás kerékpárral (a holttest megtalálója)\n\nRáczné hadnagy megjegyzése: a nő azonosítása nem lehetséges, de a ruházat egyezik az áldozatéval. — R. K."},
 laptop:{t:"Lefoglalt laptop és zálogjegy", b:"ARANYHÍD ZÁLOGHÁZ, VIII. ker.\n[[zalog_kertesz|Zálogjegy 2231/11 – Lenovo laptop. Beadta: Kertész Balázs, 2026. 11. 23., 10:12. Kifizetve: 38 000 Ft.]]\n\nA LAPTOP TARTALMA (Halász T. kivonata):\n\n— „szamlak_ellenorzes.xlsx”: a klinika biztosítói elszámolásai 2025–26-ból.\n[[csalas|47 tétel, ahol a kezelés időpontjában a beteg már nem élt. Halmi Zs. sárgával jelölte.]]\n\n— „2024_majus_jelentes_EREDETI.docx”, Halmi Zsófia:\n[[berkes_utasitas|„Dr. Berkes szóban utasított a dózis megduplázására. Jeleztem, hogy sok. Azt mondta, ne vitatkozzak, ő az orvos.”]]\n\n— Levélpiszkozat, elküldetlen, 2026. 11. 22., 18:20:\n[[level_vamos|„Vámos úr! Tudnia kell, mi történt Hannával. Nem én döntöttem, de én adtam be, és ezzel együtt élek. Ma este a kikötőben elmondok mindent. Bocsásson meg, ha tud.”]]"},
 incidens:{t:"Incidensjelentés – Szent Lukács Magánklinika, 2024", b:"SZENT LUKÁCS MAGÁNKLINIKA – Minőségbiztosítás\nIncidensjelentés, 2024. 05. 14.\n\n[[incidens|Beteg: V. Hanna (9 é.). Esemény: gyógyszerelési hiba, kétszeres dózis. Felelős: Halmi Zsófia ápolónő.]]\nOrvosi utasítás: írásos, szabályos, a dózis helyes volt.\nKimenetel: a beteg 05. 15-én elhunyt.\nIntézkedés: írásbeli figyelmeztetés, továbbképzés.\n\nJóváhagyta: dr. Berkes András igazgató"},
 akta1994:{t:"BRFK akta, 1994 – Déli kikötő", b:"BUDAPESTI RENDŐR-FŐKAPITÁNYSÁG – Életvédelmi osztály\n1994. 11. 09.\n\nA Déli kikötőben, a Révész nevű komp mellett vízből kiemelt férfi holtteste (Szabó F., 51 é., hajóskapitány). Szájában pénzérme (ötforintos).\n[[akta1994|Gyanúsított: Vámos Lajos, a Révész kompvezetője. Bizonyíték hiányában 72 óra után szabadon engedve.]]\nVezető nyomozó: Mátrai Gyula főhadnagy.\nAz ügy lezáratlan.\n\n— Kézzel, apád írásával: „Az öreg szerint a révésznek fizetni kell, különben a halott nem jut át. Babona? Vagy beismerés? — M. Gy.”"},
 profil:{t:"Pszichológiai profil – dr. Fehér Judit", b:"ELŐZETES TETTESPROFIL\n\nA tettes nem dühből ölt. A mozdulat gyors és begyakorolt, a test elrendezése gondos. Ez szertartás.\n\nAz érme és az összekulcsolt kezek arra utalnak, hogy a tettes útra akarta bocsátani az áldozatot, nem megalázni. Szerintem igazságot hitt szolgáltatni.\n\nA helyszínhez erősen kötődik. Nem rejtette el a holttestet, hanem kiállította ott, ahol neki jelent valamit.\n\nNem fog menekülni. Valószínűleg várja, hogy megtalálják.\n\n— Mátrai főhadnagy, a múlt heti alkalmat lemondta. Kérem, a jövő hetit ne mondja le. F. J."},
 kotel:{t:"Laborjelentés – kötél és szálak", b:"BŰNÜGYI TECHNIKAI LABOR\nVizsgálta: Halász Tamás\n\nMinták: (1) szálak a strangulációs barázdából, (2) kötél a Révész korlátjáról.\n\n[[kotel_egyezes|Eredmény: a szálak anyaga, kátránytartalma és sodrása egyezik. A vágás friss. A barázdában maradt csomólenyomat típusa „révészhurok”: régi dunai hajós csomó, ma szinte senki nem köti.]]\n\nMegjegyzés: ilyen kötelet utoljára a nyolcvanas években gyártottak. — H. T."},
 telefon:{t:"Átvizsgálás – Berkes-limuzin", b:"JEGYZŐKÖNYV, járműátvizsgálás\nJármű: fekete Mercedes S, üzembentartó: Szent Lukács Magánklinika Kft.\nJelen volt: Rácz K. hadnagy, Fekete Z. gépkocsivezető\n\n[[telefon_kocsiban|A kesztyűtartóban: 1 db mobiltelefon, kikapcsolt állapotban. Bekapcsolás után azonosítva: Halmi Zsófia készüléke.]]\n\nÜzenetek, 2026. 11. 22.:\n[[sms_berkes|20:31  Halmi Zs. → dr. Berkes: „Ma este elmondom Hanna apjának, mi történt. Magáról is. Nem fogok tovább hallgatni.”]]\n20:44  dr. Berkes → Halmi Zs.: „Ne tegye. Mindkettőnket tönkreteszi.”\n22:02  dr. Berkes → Halmi Zs.: „Hol van?” (kézbesítve, nem olvasott)\n\nGaléria, utolsó kép 21:20: egy kislány rajza, rajta egy hajó. Alatta gyerekírással: APA HAJÓJA.\n\nRácz K. megjegyzése: Somogyi főkapitány-helyettes titkársága kétszer telefonált az átvizsgálás alatt. — R. K."},
 apa_jegyzet:{t:"Mátrai Gyula jegyzetfüzete, 1994", b:"Viharvert, spirálos füzet, a borítóján kávéfolt. Apád dőlt, szálkás írása.\n\n11. 10. — Vámos Lajos harmadik napja hallgat. Szabó kapitány tartozott neki, ezt a fél kikötő tudja. Bizonyíték nincs.\n[[apa_csomo|A kölyök, Gergő, 13 é., egész nap a kompon ül, és ugyanazt a csomót köti. Az apja tanította. Révészhurok. Azt mondja, rajtuk kívül senki nem tudja már.]]\nSzabó nyakán is csomó nyoma? A vízirendőrség szerint nem megállapítható.\n\n11. 12. — Elengedtem. A kapuban Lajos azt mondta: aki tartozik, fizet a révésznek. Nem fenyegetés volt. Mintha az időjárást mondta volna.\n\n(Később, más tollal:) Ha a fiú egyszer…\n\nA mondat nincs befejezve."},
 dns:{t:"DNS-összevetés", b:"IGAZSÁGÜGYI ORVOSTANI INTÉZET – Genetikai labor\n\nMinták: körömalatti bőrmaradvány (Halmi Zs.), referenciaminta (Vámos Gergő).\n\n[[dns_egyezes|Eredmény: a profilok 21 vizsgált lókuszon egyeznek. Az egyezés valószínűsége kisebb, mint 1 a 10 milliárdhoz.]]\n\n— K. M.: „Sajnálom, Dénes. Tudom, hogy reménykedtél valami másban.”"}
},

// ---- HELYSZÍNEK ----
locs:{
 otthon:{m:"Lakás", n:"Lakás a Körúton", x:612, y:338, side:"P", d:"Harmadik emelet, udvari szoba. A hűtőben pálinka, a mosogatóban három hét. A falon semmi, mert minden, amit felakasztanál, valaki másé volt.", hs:[]},
 kapitanysag:{m:"Kapitányság", n:"Főkapitányság", x:705, y:196, side:"P", d:"Szürke tömb, neoncsövek, a folyosón ázott kabátok szaga. Az osztály a harmadikon van. Halász laborja az alagsorban.", hs:[]},
 hordo:{m:"Hordó", n:"Hordó", x:648, y:462, side:"P", open:[15,3], d:"Füst nincs, mert tilos, de a falak emlékeznek rá. Laci a pult mögött, a nyerőgép villog a sarokban. Itt senki nem kérdezi, hányadik.", hs:[]},
 zsofi:{la:1, m:"Zsófia lakása", n:"Halmi Zsófia lakása", x:392, y:482, side:"B", vis:"body", d:"Lágymányosi panel, kilencedik emelet. A lift büdös, a lépcsőházban valaki sír. Fodor Réka nyit ajtót.", hs:[
   {id:"ablak", l:"Az ablakpárkány", t:"Egy cserép elszáradt muskátli és egy fénykép: Zsófia egy kislánnyal, kórházi ágy mellett. A kép hátán ceruzával: „H. – bocsáss meg”."},
   {id:"asztal", l:"Az íróasztal", t:"Laptoptöltő, de laptop nincs. Egy füzet, kitépett lapokkal. Az utolsó oldalon nyomot hagyott a toll: „…kikötő… vasárnap… igazat…”", f:"laptop_hianyzik"}
 ]},
 klinika:{la:1, m:"Klinika", n:"Szent Lukács Klinika", x:236, y:296, side:"B", vis:"body", open:[7,19], d:"Üveg, márvány, halk zene a recepción. Itt a halál is fizetős. A parkolóban két fekete limuzin, az egyiknek kormányzati rendszáma van.", hs:[]},
 kikoto:{la:1, m:"Révész", n:"Déli kikötő – a Révész", x:548, y:618, side:"P", d:"A Révész a hatvanas években épült komp, rozsdás korláttal, évek óta nem jár. A rakparton sárga szalag, a vízen kék villogás. A daruk alatt a szél sós, pedig itt nincs tenger.", hs:[
   {id:"holttest", l:"A holttest", t:"A nő a fedélzeten fekszik, kezei a mellkasán összekulcsolva, mintha valaki ravatalra fektette volna. A nyakán vékony, mély barázda. Kötél volt, nem kéz. A táskájában igazolvány: Halmi Zsófia, 34 éves. Ápolói kártya, Szent Lukács Klinika. Pénztárca, kulcsok. Telefon nincs nála, sehol a fedélzeten.", ev:["aldozat","nincs_telefon"], f:"body"},
   {id:"erme", l:"Az áldozat szája", req:["body"], t:"A szája résnyire nyitva. A nyelve alatt egy tízforintos. Valaki gondosan tette oda, nem sietett. A régiek így fizettek a révésznek, hogy átvigye a halottat a túlpartra.", ev:"ermeszaj"},
   {id:"kotel", l:"A korlát", t:"Kátrányos kenderkötél, régi fajta, ma már senki nem gyárt ilyet. Egy darabot levágtak belőle, a vágás friss. Levágsz egy mintát Halásznak.", ev:"kotelminta"},
   {id:"lakat", l:"A hangár ajtaja", t:"A lakat ép, nem feszítették fel. A kompra csak a hangáron át lehet lejutni. Aki itt járt, kulccsal jött.", ev:"lanc"},
   {id:"nyom", l:"A sár a rámpán", t:"Egy nagy, bordázott talpú lábbeli nyoma, 45-ös körül. Gumicsizma, nem cipő. Kétszer: lefelé és vissza.", ev:"bakancs"},
   {id:"csikk", l:"A rámpa alja", t:"Egy ázott Symphonia csikk. Ki tudja, mióta fekszik itt.", ev:"csikk"},
   {id:"kamera", l:"A daru oszlopa", t:"Városi térfigyelő kamera, 4471-es számú. A lencse épp a bejárati útra néz. Valakinek le kellene kérnie a felvételt.", f:"kamera"}
 ]},
 porta:{m:"Porta", n:"Kikötői porta", x:648, y:640, side:"P", vis:"body", d:"Bádogkalyiba sorompóval, az ablakban sárga fény. Bent rádió szól, valami régi táncdal. A falon egy bekeretezett fotó: egy komp, rajta egy bajuszos férfi és egy kisfiú.", hs:[
   {id:"csizma", l:"Az ajtó előtt", t:"Egy pár 45-ös gumicsizma, a talpán friss, szürke folyami sár. Valaki gondosan a lábtörlőre állította.", ev:"vamos_csizma"},
   {id:"auto", l:"A sorompó mellett", t:"Fehér Ford Transit, rendszáma JKL-417. A szélvédőn kikötői behajtási engedély. A motorháztető hideg.", ev:"vamos_auto"}
 ]},
 intezet:{m:"Intézet", n:"Orvostani Intézet", x:792, y:474, side:"P", open:[7,19], d:"Csempe, formalin, egy rádió, amin mindig a Petőfi szól. Keleti doktornő szerint a halottak jobb társaság, mint az élők.", hs:[]},
 platan:{m:"Platán otthon", n:"Platán Idősotthon", x:178, y:200, side:"B", open:[9,19], d:"Budai villa, fenyőillat és fertőtlenítő. A társalgóban a tévé hangtalanul megy. Apád a második emeleten lakik, az ablaka a Dunára néz, ha az ember tudja, merre keresse.", hs:[]},
 nora:{m:"Nóra", n:"Nóra lakása", x:716, y:396, side:"P", open:[20,4], d:"Józsefvárosi bérház, gangos udvar, a harmadikon egy ajtó, amin nincs névtábla. A lépcsőházban valaki mindig főz valamit.", hs:[]},
 zeneiskola:{la:1, m:"Zeneiskola", n:"Erzsébet Zeneiskola", x:318, y:392, side:"B", open:[17,20], day:2, vis:"lili_sms", d:"Szerdai növendékhangverseny. Műanyag székek, izgatott szülők, egy kicsit hamis zongora. Lili a negyedik a műsorban.", hs:[]},
 kertesz:{m:"Kertész", n:"Kertész műhelye", x:740, y:84, side:"P", vis:"briefed|met_kertesz", open:[8,19], d:"Bádoggarázs a Váci út mögött, olajfolt, fémzene, egy félig szétszedett Opel. Kertész a csörlő mellett.", hs:[]}
},

// ---- SZEREPLŐK ----
people:{
 varga:{n:"Varga Ottó alezredes", r:"osztályvezető", loc:"kapitanysag", h:[7,19], bio:"56 éves, a gyilkossági osztály vezetője. Tartozik neked egy régi üggyel, és ezt mindketten tudjátok. A türelme véges, a whiskyje a fiókban szintén.", topics:[
  {id:"elig", l:"Eligazítás", t:"„Halmi Zsófia, ápolónő a Szent Lukácsban. A volt élettársa, Kertész Balázs, priuszos, távoltartási végzés. A sajtó már a kikötőnél volt. Somogyi gyors eredményt akar.” Átnyújt egy dossziét. „Ne baszd el, Dénes. Ez nem kérés.”", doc:"kertesz_priusz", f:"briefed"},
  {id:"statusz", l:"Jelentés az ügyről", rep:1, dyn:"vargaStatus"}
 ]},
 bence:{n:"Tóth Bence", r:"nyomozó", loc:"kapitanysag", h:[7,21], staff:1, bio:"29 éves, másfél éve van az osztályon. Lelkes, felnéz rád, és mindenáron bizonyítani akar. Jó papíron, jó a rendszerekben. Az utcán még tanul.", topics:[
  {id:"gond", l:"Mit gondolsz?", rep:1, dyn:"hintBence"}
 ]},
 kata:{n:"Rácz Kata", r:"nyomozó", loc:"kapitanysag", h:[7,21], staff:1, bio:"36 éves, az osztály legélesebb esze. Kiszámíthatatlan. Egy családi tragédia miatt lett rendőr, és erről nem beszél. Neked egyszerre tükröd és riválisod.", topics:[
  {id:"gond", l:"Mit gondolsz?", rep:1, dyn:"hintKata"}
 ]},
 bodnar:{n:"Bodnár Feri", r:"törzszászlós", loc:"kapitanysag", h:[7,21], staff:1, bio:"58 éves, huszonöt éve jár utcára. Övé a város legjobb informátorhálózata. Kicsit sáros, ezért gyors, de nem mindig tiszta.", topics:[
  {id:"gond", l:"Mit gondolsz?", rep:1, dyn:"hintBodnar"}
 ]},
 halasz:{n:"Halász Tamás", r:"nyomszakértő", loc:"kapitanysag", h:[8,22], staff:1, bio:"41 éves, pedáns, a laborban régi magyar rockot hallgat. Ha sürgeted, gyorsabban dolgozik, de akkor hibázhat. Ezt ő mondja így.", topics:[
  {id:"gond", l:"Mi van a laborban?", rep:1, dyn:"hintHalasz"}
 ]},
 feher:{n:"Dr. Fehér Judit", r:"pszichológus, profilozó", loc:"kapitanysag", h:[9,17], staff:1, bio:"52 éves. Profilt készít a tettesekről, és ő dönt a szolgálati alkalmasságodról is. Amit neki elmondasz, az kihathat a pályádra.", topics:[
  {id:"ules", l:"Leülsz vele", t:"„Hogy alszik, főhadnagy?” Nem válaszolsz. Felírja. „Mennyit iszik?” Nem válaszolsz. Azt is felírja. „Tudja, hogy a hallgatás is válasz?” Mosolyog, de nem kedvesen. „Ha profilt kér, hozzon nekem legalább négy dolgot az ügyből.”", f:"feher_ules"}
 ]},
 keleti:{n:"Dr. Keleti Mária", r:"igazságügyi orvosszakértő", loc:"intezet", h:[7,19], staff:1, bio:"61 éves, cinikus, fekete humorú, láncdohányos. Apád egykori kollégája, gyerekkorod óta ismer. Az egyetlen, aki még Dénesnek szólít és nem Mátrainak.", topics:[
  {id:"elozetes", l:"Előzetes vélemény", req:["body"], t:"„Kötél, nem kéz. Hátulról, egy mozdulat. Nem dühből, Dénes. Ez valaki volt, aki tudta, mit csinál, és utána leült mellé. A kezeit ő kulcsolta össze.” Rágyújt, pedig tilos. „Szép munka, ha az ember beteg. Vagy ha gyászol.”"},
  {id:"apa", l:"Apámról", t:"„Tegnap voltam nála. Megismert, egy percig. Azt kérdezte, elkaptad-e már a révészt.” Kifújja a füstöt. „Délelőtt menj, Dénes. Délutánra már csak anyádat várja.”", f:"apa_hint"}
 ]},
 reka:{n:"Fodor Réka", r:"lakótárs", loc:"zsofi", h:[7,23], bio:"29 éves, óvónő, Zsófia lakótársa három éve. Kisírt szem, a kezében egy bögre, amiből nem iszik.", topics:[
  {id:"utolso", l:"Zsófia utolsó napja", sober:1, t:"„Vasárnap egész nap ideges volt. Délután írt valamit a laptopon, sokáig. Este kilenc körül jött Balázs, kiabáltak. Aztán Zsófi elment. Azt mondta: ‘El kell mondanom valakinek az igazat, különben nem tudok aludni.’”", f:"igazat"},
  {id:"laptop", l:"Hiányzik valami?", sober:1, t:"„A laptopja. Mindig itt volt az asztalon. Balázs után már nem volt meg… vagy nem tudom. Nem figyeltem. Bocsánat.”", f:"laptop_hianyzik"},
  {id:"munka", l:"A munkahelyéről", sober:1, t:"„Két éve meghalt egy kislány az osztályán. Őt hibáztatták, majdnem kirúgták. Azóta mondogatta, hogy a papírokon nem az van, ami történt. Hogy ő csak azt adta be, amit Berkes doktor mondott.”", f:"berkes_gyanu"},
  {id:"kertesz", l:"Kertész Balázsról", t:"„Ivott, ütött. Két éve költözött el tőle, akkor kérte a távoltartást. Azóta néha visszajár. Pénzért. Zsófi mindig adott neki. Nem tudott nemet mondani.”"}
 ]},
 pinter:{n:"Pintér Lászlóné", r:"szomszéd", loc:"zsofi", h:[8,20], bio:"77 éves, özvegy, a szemközti lakásban. Mindent lát a kukucskálón át, és ezt nem is szégyelli.", topics:[
  {id:"vita", l:"Hallott valamit vasárnap?", sober:1, t:"„Kilenc után kiabáltak. A volt pasija, a nagydarab. Azt üvöltötte, hogy ‘megbánod még’. Aztán csapódott az ajtó, ő lement.” Feltartja az ujját. „Fél tízkor a lány is elment. Egyedül. Gyalog, a villamos felé.”", ev:"veszekedes"},
  {id:"milyen", l:"Milyen ember volt Zsófia?", t:"„Rendes. Hozott nekem gyógyszert a patikából, amikor a lábam… Na. Rendes volt. Az ilyenekkel történik mindig.”"}
 ]},
 berkes:{n:"Dr. Berkes András", r:"klinikaigazgató", loc:"klinika", h:[8,17], suspect:1, bio:"52 éves, a Szent Lukács Magánklinika igazgatója. Drága öltöny, nyugodt hang. A falon díszoklevelek és egy közös fotó egy államtitkárral.", topics:[
  {id:"zsofi", l:"Halmi Zsófiáról", t:"„Tragédia. Megbízható kolléga volt, bár… voltak nehézségei. Egy régi eset nagyon megviselte.” Összeteszi az ujjait. „Ha bármiben segíthetünk.”", f:"met_berkes"},
  {id:"eset", l:"A 2024-es eset", req:["berkes_gyanu|incidens"], t:"„Egy gyógyszerelési hiba, amit kivizsgáltunk és lezártunk. Az ápolónő felelőssége megállapítást nyert.” Egy pillanatra megáll. „Ezt Zsófia is elfogadta.” Nem fogadta el, és ezt ő is tudja."},
  {id:"vasarnap", l:"Hol volt vasárnap este?", sober:1, t:"„A jogászbálon, a Duna-palotában. Fél egykor jöttem el, a sofőröm hazavitt, a feleségem ébren várt. Száz ember látott.” Megmutat egy fotót a telefonján: ő, pezsgővel, mögötte egy falióra: 23:40.", ev:"gala"},
  {id:"telefon", l:"Szembesít: Zsófia telefonja", req:["sms_berkes"], sober:1, t:"Sokáig nem szól. Aztán az ügyvédje felé fordul, és int, hogy hagyja. „Már halott volt, amikor odaértem. Esküszöm. Ott feküdt, összekulcsolt kézzel, mint egy… egy ravatalon.” A hangja megbicsaklik. „Elvettem a telefonját. Igen. Mert rajta volt a nevem.”", ev:"berkes_beismeres"},
  {id:"szembe", l:"Szembesít: a laptop fájljai", req:["csalas|berkes_utasitas"], t:"Az arca nem változik, csak a keze: leteszi a tollat, nagyon lassan. „Ezt beszélje meg az ügyvédemmel, főhadnagy. És gondolom, tudja, ki a sógorom.”", f:"berkes_nyomas"}
 ]},
 vera:{n:"Sárközi Vera", r:"főnővér", loc:"klinika", h:[7,19], bio:"46 éves, húsz éve dolgozik itt, és fél, hogy holnap már nem fog. Zsófia egyetlen barátja volt a klinikán.", topics:[
  {id:"zsofi", l:"Zsófiáról", t:"„Ő volt az egyetlen, aki nem hallgatott. Ezért utálták. A betegek imádták.”"},
  {id:"eset", l:"A kislány halála", sober:1, t:"Körülnéz, aztán halkan: „Zsófi megesküdött, hogy Berkes doktor szóban rendelte el a dupla dózist. A jelentésben aztán csak az ő neve maradt.” Kinyomtat valamit, összehajtja, a kezedbe nyomja. „Ez a hivatalos változat. Én nem adtam oda.”", doc:"incidens", f:"berkes_gyanu"},
  {id:"cim", l:"Kért Zsófia valamit mostanában?", t:"„Egy címet. Múlt héten. A kislány apjáét, a régi kartonról. Azt mondta, tartozik neki valamivel.” Vera keze remeg. „Nem kellett volna odaadnom, ugye?”", f:"zsofi_cim"}
 ]},
 vamos:{n:"Vámos Gergő", r:"éjszakai portás", loc:"porta", h:[17,9], suspect:1, bio:"45 éves, éjszakai portás a Déli kikötőben. Az apja negyven évig volt a Révész kapitánya. Csendes, szinte udvarias. A keze nagy és nyugodt.", topics:[
  {id:"latott", l:"Mit látott vasárnap éjjel?", sober:1, t:"„Semmit. Egész éjjel itt voltam, a portán. Rádió, tea, sorompó. Senki nem jött be.” Nem néz a szemedbe, de nem is kerüli. Olyan, mint aki ezt a mondatot már sokszor elmondta magának.", f:"met_vamos"},
  {id:"kulcs", l:"Kinek van kulcsa a hangárhoz?", sober:1, t:"„Nekem, meg a kikötőmesternek. Ő Debrecenben van, a lányánál, két hete.” Megérinti a zsebét. A kulcscsomó csörren.", ev:"vamos_kulcs"},
  {id:"komp", l:"A Révészről", t:"„Az apámé volt. Nem a hajó, az élete. Negyven évig hordta át az embereket a túlpartra. Akkor még volt kit.” Elhallgat. „Jövőre szétvágják.”"},
  {id:"csalad", l:"Van családja?", t:"Sokáig nem válaszol. „Volt egy lányom. Hanna. Kilencéves volt.” Feláll, tölt magának teát, pedig a pohara tele van. „Kórházban halt meg. Azt mondták, szövődmény.”", ev:"vamos_lanya"},
  {id:"zsofi", l:"Ismerte Halmi Zsófiát?", req:["incidens|level_vamos|zsofi_cim"], t:"„A nővér.” Ennyit mond. Aztán: „Ő adta be Hannának. Ott a papíron, aláírta.” A hangja egyenletes, mint aki az időjárásról beszél."},
  {id:"hivas", l:"Szembesít: a 21:47-es hívás", req:["hivas_porta"], t:"„Telefonált. Igen.” Hallgat. „Azt mondta, el akar mondani valamit Hannáról. Mondtam neki, hogy nem érdekel.” Hazudik. Most először látod rajta, hogy hazudik.", f:"vamos_ideges"},
  {id:"kamera", l:"Szembesít: a kamerafelvétel", req:["transit_vamos"], t:"„Lementem megnézni a kompot. Néha lemegyek. Az apám miatt.” Nem tagad. Csak elmondja, mint egy rossz időjárás-jelentést.", f:"vamos_ideges"},
  {id:"dns", l:"DNS-mintát kérsz", req:["vamos_ideges|nyom_egyezes|kulcs_hozzaferes"], t:"Kinyitja a száját, mielőtt befejeznéd a mondatot. Nem kér ügyvédet. Nem kérdez semmit. Amikor a pálca végigsúrolja az ínyét, behunyja a szemét, mintha megkönnyebbült volna.", ev:"vamos_dns"},
  {id:"apja", l:"Az apja, 1994", req:["akta1994"], t:"„A maga apja vitte el az enyémet. Mátrai főhadnagy. Három napig tartották bent.” Most néz rád először igazán. „Tudja, mit csinált az apám, amikor hazajött? Leült a kompon, és sírt. Én tizenhárom éves voltam.”", f:"apa_1994"}
 ]},
 kertesz:{n:"Kertész Balázs", r:"autószerelő", loc:"kertesz", h:[8,19], suspect:1, bio:"38 éves, Halmi Zsófia volt élettársa. Két éve távoltartási végzés. Széles váll, olajos körmök, rövid gyújtózsinór, és adósság mindenkinél.", topics:[
  {id:"vasarnap", l:"Hol volt vasárnap este?", t:"„A Hordóban. Ittam. Az még nem bűn, nem?” Vigyorog, de a szeme rángatózik.", f:"kertesz_hordo"},
  {id:"zsofi", l:"Mikor látta utoljára?", sober:1, t:"„Vasárnap. Átmentem hozzá. Pénz kellett, oké? Tartozom egy-két embernek.” Rágyújt, Symphonia. „Veszekedtünk. Aztán eljöttem. Élve hagytam ott, esküszöm.”", f:"met_kertesz"},
  {id:"kez", l:"Megnézed a kezét", t:"Odanyúlsz, mielőtt elrántaná. A kézfején friss, párhuzamos karmolások, két-három naposak. Kirántja a kezét. „Mi van?”", ev:"karmolas"},
  {id:"karm", l:"Szembesít: a karmolások", req:["karmolas"], t:"„Ez? Verekedés. A Hordóban, a gépnél, két csepeli gyerekkel. Kérdezze meg Lacit.”"},
  {id:"zalog", l:"Szembesít: a zálogjegy", req:["zalog_kertesz"], t:"Elsápad. „Jó, elvittem a laptopját. Ott volt az asztalon, ő a fürdőben sírt. Hétfőn beadtam, kellett a pénz.” Leül egy gumiabroncsra. „De nem öltem meg. Nem tudnám. Szerettem, bassza meg.”"},
  {id:"nyomas", l:"Nyomást gyakorolsz", sober:1, t:"Közel hajolsz. Ő hátrál, aztán megáll. „Ha le akar tartóztatni, tartóztasson le. Ha nem, takarodjon a műhelyemből.” Ebből nem lesz több."}
 ]},
 apa:{n:"Mátrai Gyula", r:"az apád", loc:"platan", h:[9,19], bio:"74 éves, nyugalmazott rendőr főhadnagy. Kezdődő demencia. Délelőttönként még ő a régi: éles szem, rövid mondatok. Délutánra elfogy belőle, és anyádat várja, aki tizenegy éve halott.", topics:[
  {id:"revesz", l:"A Révészről kérdezed", lucid:[9,12], t:"Sokáig nézi a kezed. Aztán feláll, a szekrényhez megy, és a pulóverei alól elővesz egy viharvert jegyzetfüzetet. „Ezt nem adtam le. Sosem adtam le.” A kezedbe nyomja. „A révész. Tudtam, hogy egyszer visszajön.”", doc:"apa_jegyzet", f:"apa_revesz"},
  {id:"lajos", l:"Vámos Lajosról", req:["akta1994|apa_revesz"], lucid:[9,12], t:"„Lajost három napig tartottam bent. Egy szót se szólt. A harmadik napon azt mondta: a kapitány tartozott. Aki tartozik, fizet a révésznek.” Megfogja a kezed. A keze könnyebb, mint emlékszel. „Elengedtem. Nem volt mit tenni. Rosszul tettem, Dénes?”"},
  {id:"beszel", l:"Csak leülsz mellé", rep:1, dyn:"apaTalk"}
 ]},
 lili:{n:"Mátrai Lili", r:"a lányod", loc:"zeneiskola", h:[17,20], bio:"16 éves, az anyjával él Budán. Zongorázik, ezt tőled nem örökölte. Egy éve nem mondta, hogy szeret, és te azóta nem kérdezted.", topics:[
  {id:"nezed", l:"Végighallgatod a koncertet", dyn:"liliConcert", mins:60, f:"koncert"},
  {id:"utana", l:"Utána, a folyosón", req:["koncert"], dyn:"liliAfter"},
  {id:"mit", l:"Mi van veled mostanában?", req:["koncert"], t:"„Iskola. Zongora. Anya új pasija tanít vezetni.” Vállat von. „Te mit csinálsz? Ja, tudom. Halottakat.” Nem gonoszul mondja. Inkább fáradtan, ahogy te szoktad."}
 ]},
 nora:{n:"Nóra", r:"régi ismerős", loc:"nora", h:[20,4], bio:"31 éves. Hat éve ismered. Előbb informátor volt, aztán valami más, amire nincs jó szó. Ki akar szállni, és ezt neked mondta el először.", topics:[
  {id:"ora", l:"Maradsz nála egy órát (8 000 Ft)", rep:1, cost:8000, mins:60, eff:{crave:-25}, dyn:"noraTalk"},
  {id:"kiszall", l:"Mi bántja?", t:"„Ki akarok szállni. Gazsi azt mondja, tartozom neki. Mindenki tartozik Gazsinak.” Rágyújt az ablaknál. „A Hordóban is ő szedi a pénzt a gépnél. Te is láttad már, csak nem nézted meg.”", f:"nora_gazsi"},
  {id:"kertesz", l:"Kertész Balázsról", req:["met_kertesz|kertesz_hordo"], t:"„Balázs? Gazsinak tartozik, nem is keveset. Vasárnap a Hordóban Gazsi fiai megkarmolták, csak hogy emlékezzen.” Vállat von. „Gyáva ember. Az ilyen nem öl. Az ilyen sír.”"},
  {id:"hir", l:"Hallottál valamit a kikötőről?", req:["nora_help"], t:"„Fekete Zoli. Berkes doktor sofőrje. Kedden itt volt, részeg volt. Azt mondta, a főnöke vasárnap éjjel kiszállt a kikötőnél, és egy idegen telefonnal jött vissza a kocsiba.” Kifújja a füstöt. „Azt mondta, tizenkét év alatt nem látta még így remegni.”", ev:"sofor_titok"}
 ]},
 fekete:{n:"Fekete Zoltán", r:"Berkes sofőrje", loc:"klinika", h:[8,17], bio:"49 éves, tizenkét éve vezeti Berkes autóját. Minden nap ugyanazt a fekete limuzint fényesíti, és mindig mindent látott, amit nem kellett volna.", topics:[
  {id:"vasarnap", l:"Vasárnap éjjel", t:"„Fél egykor eljöttünk a bálból, és egyenesen haza, Pasarétre. A doktor úr fáradt volt.” A kormányt simogatja, mintha az válaszolna helyette."},
  {id:"szembe", l:"Szembesíted azzal, amit tudsz", req:["sofor_titok|berkes_kikoto"], sober:1, t:"Hosszan hallgat. „Ha ezt elmondom, holnap munkanélküli vagyok.” Aztán mégis: „A rakparton álltunk meg, fél egy után. Kiszállt, tíz percre. Amikor visszajött, egy telefont szorított, nem az övét. Közben egy fehér furgon jött fel a rakpartról, lámpa nélkül, majdnem nekünk jött.”", ev:"sofor_beismer"}
 ]},
 laci:{n:"Laci", r:"kocsmáros", loc:"hordo", h:[15,3], bio:"A Hordó kocsmárosa, kor nélküli ember. Mindent hall, keveset mond, és soha nem kérdezi, mit iszol, mert tudja.", topics:[
  {id:"kertesz", l:"Kertész Balázs vasárnap", req:["kertesz_hordo|met_kertesz"], t:"„Hétkor jött. Kilenc körül elment, fél tízkor visszajött, dühösen. Zárásig maradt, fél kettőig, egy percre se ment ki. Közben összeakadt két csepeli gyerekkel a gépnél, összekarmolták. Imre vitte haza.”", ev:"kertesz_alibi"},
  {id:"pletyka", l:"Mit beszélnek?", t:"„Hogy a Révészen találták. Az öregek azt mondják, ilyen már volt. Kilencvennégyben. Akkor is pénz volt a szájban.” Törölgeti a poharat. „Apád vitte azt az ügyet, nem?”", f:"pletyka94"}
 ]},
 bokszos:{n:"Szikszai „Bokszos” Imre", r:"gyerekkori barát", loc:"hordo", h:[19,2], bio:"47 éves, volt nehézsúlyú bokszoló, ma éjszakai portás egy irodaháznál. Gyerekkorod óta ismered. Ő az egyetlen, aki nem kérdezi, mikor hagyod abba.", topics:[
  {id:"kikoto", l:"A Déli kikötőről", t:"„A Vámos? Az öreg révész fia. Az apja kompján nőtt fel. A lánya meghalt pár éve valami kórházban, azóta se él, se hal. Nem iszik, nem beszél. Néha éjjel lemegy a kompra, és csak ül.”", ev:"vamos_lanya"},
  {id:"kertesz", l:"Kertész Balázsról", t:"„Hazavittem vasárnap, kettő előtt. Tökrészeg volt, a kocsimban hányt. Nem gyilkos, Dénes. Csak egy szar alak.”", ev:"kertesz_alibi"},
  {id:"regi", l:"Csak iszol vele egyet (900 Ft)", rep:1, drink:1, dyn:"bokszosTalk"}
 ]},
 eszter:{n:"Gál Eszter", r:"bűnügyi újságíró", loc:"hordo", h:[18,23], bio:"38 éves, a Hírlap bűnügyi újságírója. Egyszer már hazudtál neki, ő kétszer neked. Nálatok ez egyensúlynak számít.", topics:[
  {id:"alku", l:"Mit akarsz?", t:"„Egy részletet, amit más nem tud. Cserébe adok egyet, amit te nem tudsz.” Nem mosolyog. Ő sosem mosolyog, ha üzletről van szó.", f:"eszter_alku"},
  {id:"ad", l:"Elmondod neki az érmét", req:["eszter_alku","ermeszaj"], excl:"nemad", t:"Felírja. „A Révész. Ez a holnapi címlap.” Cserébe közelebb hajol: „Berkes, a klinikaigazgató, Somogyi Kristóf sógora. És a klinikát fél éve vizsgálja a biztosító: halott betegekre számláztak.”", ev:"sogor", f:"leak"},
  {id:"nemad", l:"Nem adsz semmit", req:["eszter_alku"], excl:"ad", t:"„Ahogy akarod.” Elteszi a jegyzetfüzetet. „Egy tanács, ingyen: nézz rá a klinikára. Ott valakinek nagyon sok vesztenivalója van.”", f:"berkes_gyanu"}
 ]}
},

// ---- STÁBFELADATOK ----  fit: sikerességi esély stábtagonként
tasks:[
 {id:"boncolas", l:"Boncolás", req:["body"], dur:300, fit:{keleti:1}, doc:"boncolas", ok:"Keleti doktornő végzett a boncolással. A jegyzőkönyv az akták között."},
 {id:"hivas", l:"Hívásrészletező lekérése", req:["body"], dur:240, fit:{bence:.92, kata:.85, bodnar:.5}, doc:"hivaslista", ok:"Megjött Zsófia hívásrészletezője a szolgáltatótól.", fail:"A szolgáltató visszadobta a megkeresést formai hiba miatt. Újra kell kérni."},
 {id:"kamera", l:"Térfigyelő felvétel átnézése", req:["kamera"], dur:300, fit:{kata:.92, bence:.75, bodnar:.45}, doc:"kamera", ok:"Kész a 4471-es kamera felvételének kivonata.", fail:"Öt óra felvétel, és semmi használható. Talán valaki más jobban figyelne."},
 {id:"zalog", l:"Zálogházak körbejárása (laptop)", req:["laptop_hianyzik"], dur:360, fit:{bodnar:.9, kata:.6, bence:.4}, doc:"laptop", ok:"Megvan a laptop egy VIII. kerületi zálogházban. Halász már kivonatolta a tartalmát.", fail:"Üres kézzel jött vissza. A zálogosok nem beszélnek akárkivel."},
 {id:"archiv", l:"Archívum: hasonló régi esetek", req:["ermeszaj"], dur:240, fit:{bence:.9, bodnar:.7, kata:.6}, doc:"akta1994", ok:"Az archívum mélyén találtunk egy 1994-es aktát. Apád neve van rajta.", fail:"Az archívum félig be van ázva. A keresés holnap folytatható."},
 {id:"kotel", l:"Kötél és szálak összevetése", req:["kotelminta","kenderszal"], dur:420, fit:{halasz:.95}, doc:"kotel", ok:"Halász végzett a kötéllel. Azt mondja, ilyet még nem látott.", fail:"A minta beszennyeződött. Halász újrakezdi."},
 {id:"dns", l:"DNS-összevetés (köröm ↔ Vámos)", req:["korom","vamos_dns"], dur:360, fit:{keleti:.95, halasz:.85}, doc:"dns", ok:"Megjött a DNS-eredmény.", fail:"A labor gépe leállt. Holnap újra."},
 {id:"gazsi", l:"Gazsi „elintézése” Nóra miatt", req:["nora_gazsi"], dur:240, fit:{bodnar:.9, kata:.5}, f:"nora_help", sabotage:1, ok:"Bodnár beszélt Gazsival. Nem kérdezed, hogyan. Nóra szabad, és tud valamit.", fail:"Gazsi nem volt otthon. Holnap újra."},
 {id:"kocsi", l:"Berkes autójának átvizsgálása", req:["sofor_beismer"], dur:240, fit:{kata:.88, bodnar:.7, bence:.5}, doc:"telefon", warn:"<h2>Varga az ajtóban</h2><p>„Somogyi sógorának a kocsiját? Most?” Hosszan néz. „Rendben. De ha nincs benne semmi, holnaptól a rakparti forgalmat irányítod, és én is.”</p>", ok:"Megvan Zsófia telefonja Berkes kesztyűtartójában."},
 {id:"profil", l:"Tettesprofil készítése", req:["feher_ules"], minEv:4, dur:180, fit:{feher:.95}, doc:"profil", ok:"Fehér doktornő elküldte az előzetes profilt."}
],

// ---- NYITOTT SZÁLAK (súgó) ----  need: mind kell (| = vagy), not: egyik sem lehet meg; doc:x = akta megvan
leads:[
 {need:["body"], not:["doc:boncolas"], x:"A boncolás még hátravan. Keleti doktornőnek a Stáb fülön adhatod ki."},
 {need:["body"], not:["doc:hivaslista"], x:"Kivel beszélt Zsófia utoljára? A hívásrészletezőt Bence vagy Kata kérheti le (Stáb)."},
 {need:["kamera"], not:["doc:kamera"], x:"A daru oszlopán térfigyelő kamera van. Kata végignézheti a felvételt (Stáb)."},
 {need:["ermeszaj"], not:["doc:akta1994"], x:"Az érme a nyelv alatt rítusnak tűnik. Az archívumban lehet régi hasonló eset (Stáb)."},
 {need:["body"], not:["laptop_hianyzik"], x:"Zsófia lakása: a lakótárs még nem mondta el, hiányzik-e valami (Lágymányos, 7–23)."},
 {need:["laptop_hianyzik"], not:["doc:laptop"], x:"Eltűnt Zsófia laptopja. Bodnár körbejárhatja a zálogházakat (Stáb)."},
 {need:["nincs_telefon"], not:["telefon_elvitte","doc:telefon"], x:"Hol van Zsófia telefonja? Nézd meg a hívásrészletező utolsó sorát, és keress összefüggést a táblán."},
 {need:["kotelminta","kenderszal"], not:["doc:kotel"], x:"Halász összevetheti a korlátról vett kötelet a sebből kiemelt szálakkal (Stáb)."},
 {need:["kotelminta"], not:["kenderszal"], x:"A kötélmintát nincs mivel összevetni, amíg a boncolási jegyzőkönyvből ki nem emeled a sebben talált szálakat."},
 {need:["korom"], not:["vamos_dns"], x:"Zsófia körmei alatt idegen bőr van. Kitől kérnél DNS-mintát? Ehhez előbb gyanúba kell keverned az illetőt."},
 {need:["korom","vamos_dns"], not:["doc:dns"], x:"Megvan Vámos DNS-mintája. Keleti összevetheti a körmök alatti bőrrel (Stáb)."},
 {need:["met_vamos"], not:["vamos_lanya"], x:"Vámos családjáról még semmit nem tudsz. Kérdezd meg őt, vagy kérdezz körül a Hordóban."},
 {need:["vamos_lanya"], not:["incidens"], x:"Hanna kórházban halt meg. A Szent Lukácsban valaki tudja, mi történt (Sárközi Vera, 7–19)."},
 {need:["akta1994"], not:["apa_revesz"], x:"Az 1994-es aktán apád neve áll. Délelőtt még tiszta a feje (Platán Idősotthon, 9–12)."},
 {need:["kamera_limo"], not:["berkes_kikoto"], x:"00:38-kor egy limuzin áll meg a rakparton. Kinek ért véget fél egykor a bálja? Keress összefüggést a táblán."},
 {need:["nora_gazsi"], not:["nora_help"], x:"Nóra ki akar szállni Gazsi alól. Bodnár elintézheti (Stáb)."},
 {need:["sofor_titok|berkes_kikoto"], not:["sofor_beismer"], x:"Berkes sofőrje, Fekete Zoltán a klinikán dolgozik (8–17). Szembesítsd azzal, amit tudsz."},
 {need:["sofor_beismer"], not:["doc:telefon"], x:"Kata átvizsgálhatja Berkes autóját (Stáb)."},
 {need:["sms_berkes|telefon_kocsiban"], not:["berkes_beismeres"], x:"Berkesnek magyarázatot kell adnia a telefonra (Szent Lukács, 8–17)."},
 {need:["hivas_porta"], not:["vamos_ideges"], x:"Zsófia 21:47-kor a kikötői portát hívta. Kérdezd meg erről Vámost (porta, 17–9)."},
 {need:["kertesz_hordo|met_kertesz"], not:["kertesz_alibi"], x:"Kertész azt állítja, a Hordóban volt. Laci megerősítheti (Hordó, 15–3)."},
 {need:["body"], not:["met_vamos"], x:"A kikötőben éjszakai portás dolgozik. Ő láthatott valamit (porta, 17–9)."},
 {need:["berkes_gyanu"], not:["incidens"], x:"Zsófia szerint a papírokon nem az áll, ami történt. A klinikán Sárközi Vera beszélhet róla (7–19)."}
],

// ---- IDŐZÍTETT ESEMÉNYEK ----  t: perc a hétfő 00:00-tól
timed:[
 {id:"hirlap", at:1800, front:S=>S.f.leak?{h:"A RÉVÉSZ",s:"Rituális gyilkosság a Déli kikötőben: tízforintos a halott nyelve alatt",b:"Rendőrségi forrásaink szerint a tettes a régi babona szerint „fizetett a révésznek”. A rendőrség nem kommentálta az értesülést. Somogyi Kristóf főkapitány-helyettes gyors eredményt ígért."}:{h:"Ápolónőt öltek meg a kikötőben",s:"A rendőrség hallgat, a nyomozás a volt élettársra összpontosít",b:"A 34 éves Halmi Zsófia holttestét hétfő hajnalban találták meg a Déli kikötőben. Somogyi Kristóf főkapitány-helyettes gyors eredményt ígért."}},
 {id:"lili1", at:1200, f:"lili_sms", x:"<b>SMS, Lili:</b> Szerdán hatkor koncertem van a zeneiskolában. Gondolom, nem jössz."},
 {id:"lili2", at:3780, unless:"koncert", x:"<b>SMS, Lili:</b> Ma hatkor. Csak szólok."},
 {id:"lili3", at:4080, unless:"koncert", f:"lili_missed", x:"<b>SMS, Lili:</b> Mindegy, apa."},
 {id:"bokszos", at:2580, x:"<b>SMS, Bokszos:</b> Este a Hordóban. Ha nem jössz, én megyek érted."}
],

// ---- ÜGYSPECIFIKUS SZÖVEGEK ----
dyn:{
  hintBence(S,A){
    if(!S.docs.hivaslista&&!S.pending.some(p=>p.task==='hivas'))return'„Lekérjem a hívásrészletezőjét? Az ilyenek mindig a telefonon kezdődnek.”';
    if(S.ev.ermeszaj&&!S.docs.akta1994)return'„Az érme… Nem lehet, hogy volt már ilyen? Lemehetnék az archívumba.”';
    if(S.ev.telefon_00&&!S.ev.telefon_elvitte)return'„A telefon háromnegyed egykor még a kikötőnél volt. Ő ekkor már halott volt. Akkor ki vitte el?”';
    if(S.docs.akta1994&&!S.ev.revesz_ritual)return'„Az 1994-es akta meg az érme… Nem kéne a táblán összekötni őket?”';
    return'„Szerintem a portás tud valamit. Nem tudom, miért. Túl nyugodt.”';
  },
  hintKata(S,A){
    if(S.f.kamera&&!S.docs.kamera)return'„Van egy kamera a daru oszlopán. Ha akarod, végignézem az éjszakát.”';
    if(S.ev.kamera_transit&&!S.ev.transit_vamos)return'„…-417. Láttál már ilyen rendszámot valahol a kikötő körül?”';
    if(S.ev.kamera_limo&&!S.ev.berkes_kikoto)return'„A limuzin 00:38-kor. Ki az, aki fél egykor jön el egy bálból, és nem megy haza?”';
    if(!S.f.kamera)return'„Jártál már rendesen a helyszínen? Mindent megnéztél, vagy csak a holttestet?”';
    return'„Kertész túl hangos ahhoz, hogy gyilkos legyen. A csendesekkel van baj.”';
  },
  hintBodnar(S,A){
    if(S.f.laptop_hianyzik&&!S.docs.laptop)return'„Eltűnt laptop? Adj egy délutánt. A zálogosok nekem beszélnek.”';
    if(S.f.nora_gazsi&&!S.f.nora_help)return'„Gazsi? Ismerem. Adj egy délutánt, és nem fog többé tartozást számolni.” Nem mosolyog.';
    if(!S.f.laptop_hianyzik)return'„A lakótárssal beszéltél? Az ilyen lakásokból mindig hiányzik valami.”';
    return'„A Hordóban mindent tudnak, amit mi nem. Én a helyedben inkább ott inni.”';
  },
  hintHalasz(S,A){
    if(S.ev.kotelminta&&!S.ev.kenderszal)return'„Megvan a kötélminta. Nincs mivel összevetni, amíg Keleti nem hozza a sebből a szálakat.”';
    if(S.ev.kotelminta&&S.ev.kenderszal&&!S.docs.kotel)return'„Ha kéred, összevetem a kötelet a szálakkal. Hét óra, ha nem sürgetsz.”';
    return'„Hozz valamit a helyszínről, és megmondom, mi az. Ennyi a dolgom.” A hangszóróból Omega szól.';
  },
  liliConcert(S,A){
    if(S.alc>40){S.f.koncert_reszeg=S.t;return'Hátul állsz, a falnak dőlve, mert ha leülnél, elaludnál. Chopin, egy noktürn. Lili a közepén felnéz a terembe, és megtalál. Egy pillanatra elveszíti a ritmust. Utána már nem néz fel.'}
    S.crave=A.clamp(S.crave-30);
    return'Chopin, egy noktürn. A közepén elrontja, újrakezdi, és onnan hibátlan. Te vagy az egyetlen, aki feláll tapsolni, és ezt rögtön megbánod, de Lili a színpadról rád néz, és nem fordul el.';
  },
  liliAfter(S,A){
    if(S.f.koncert_reszeg)return'Lili nem jön ki a folyosóra. Az anyja jön ki helyette, és csak annyit mond: „Menj haza, Dénes.”';
    return'„Eljöttél.” Mintha most tudná meg. „Anya fogadott, hogy nem.” Hosszan néz. „Józan vagy.” Nem kérdés. Átöleli a kabátodat, nem téged, de majdnem.';
  }
},
rejectExtra:{berkes:'<p>Este Somogyi Kristóf hív. Nagyon halkan beszél, és nem kérdez semmit.</p>'},
locEvents:[
 {id:"somogyi", loc:"kapitanysag", when:(S)=>!!S.f.berkes_nyomas, pat:-10, html:'<h2>Somogyi Kristóf az irodádban vár</h2><p>A székedben ül, a lábát keresztbe téve. Drága kabát, drága parfüm, olcsó mosoly.</p><p>„Mátrai. Hallom, a sógorom klinikáján jártál. Egy ápolónőt öltek meg egy kikötőben, nem egy igazgatót egy irodában. Gondolom, ezt érted.” Feláll, megigazítja a nyakkendőjét. „Varga szerint te vagy a legjobb embere. Ne hozd őt kellemetlen helyzetbe.”</p>'},
 {id:"leak", loc:"kapitanysag", when:(S,h,A)=>A.inWin(h,[7,19])&&S.f.leak&&S.t-S.f.leak>300, pat:-15, html:'<h2>Varga az ajtóban</h2><p>Összehajtott újságot dob az asztalodra. A címlapon: A RÉVÉSZ.</p><p>„Az érmét csak a helyszínelők tudták, meg te. Nem kérdezem, ki volt. Nem is akarom tudni.” Az ajtóban megáll. „Somogyi igen.”</p>'},
 {id:"dd", loc:"kapitanysag", when:(S,h,A)=>A.inWin(h,[7,19])&&!!S.f.drunkdrive, html:'<h2>„Gyere be egy percre”</h2><p>Varga becsukja az ajtót. „Egy járőr megállított tegnap éjjel. Nem írta fel. Nekem viszont elmondta.” Kiveszi a fiókból a whiskyt, ránéz, visszateszi. „Legközelebb taxival.”</p>'},
 {id:"drunk", loc:"kapitanysag", when:(S,h,A)=>A.inWin(h,[7,19])&&S.alc>55, pat:-10, html:'<h2>Varga megszagol</h2><p>„Délelőtt van, Dénes.” Ennyit mond, és továbbmegy. Bence úgy tesz, mintha nem hallotta volna.</p>'}
],

// ---- BEFEJEZÉSEK ----
end:{
 win:function(S){
  let t="<p>Vámos Gergő nem tagad. A kihallgatóban ül, a kezét az asztalon tartja, és csak ennyit mond: „Ő írta alá. Ott volt a papíron.”</p>";
  if(S.ev.level_vamos) t+="<p>Eléteszed a laptopot. A piszkozatot. <i>Nem én döntöttem. Ma este a kikötőben elmondok mindent.</i> Sokáig olvassa. Aztán valami eltörik az arcán, ami két éve egyben tartotta.</p><p>Halmi Zsófia azért ment le vasárnap éjjel a kikötőbe, hogy igazat mondjon neki. Ő pedig kifizette a révészt.</p>";
  else t+="<p>Soha nem kérdezi meg, miért ment le a nővér éjjel a kikötőbe, egyedül, esernyő nélkül. Te sem tudod. Valahol a városban egy zálogházban ott a válasz, de ezt már senki nem fogja keresni.</p>";
  if(S.ev.berkes_beismeres) t+="<p>Dr. Berkes Andrást igazságszolgáltatás akadályozása és csalás miatt gyanúsítottként hallgatják ki. Másnap reggelre az ügyet áthelyezik a gazdasági osztályra, délutánra a sajtóból eltűnik a neve. Somogyi Kristóf egy szót sem szól hozzád. Nem is kell.</p>";
  else if(S.ev.csalas||S.ev.berkes_utasitas) t+="<p>A Berkes-dossziét átadod a gazdaságiaknak. Két nap múlva Somogyi Kristóf megáll az asztalod mellett. Nem mond semmit, csak megigazítja a nyakkendőjét, és továbbmegy. Tudod, hogy ez még nem ért véget.</p>";
  else t+="<p>Dr. Berkes András másnap nyilatkozik a tévében a klinika gyászáról. Szépen beszél.</p>";
  if(S.f.nora_help) t+="<p>Pénteken Nóra nem nyit ajtót. A postaládában egy cetli: <i>Köszönöm. Ne keress.</i> Nem keresed.</p>";
  if(S.f.koncert&&!S.f.koncert_reszeg) t+="<p>Lili éjjel írt egy üzenetet: <i>köszi h eljöttél</i>. Pont nélkül. Háromszor olvasod el.</p>";
  else if(S.f.koncert_reszeg) t+="<p>Lili azóta nem írt. Tudod, miért. Az ital ízét a szádban azóta sem felejted el, amikor rá gondolsz.</p>";
  else if(S.f.lili_missed) t+="<p>A telefonodon még mindig Lili utolsó üzenete a legfelső: <i>Mindegy, apa.</i> Nem válaszoltál rá. Nem tudtad, mit.</p>";
  t+="<p>Este meglátogatod apádat az otthonban. Nem ismer meg. Az ablaknál ül, és azt mondja a nővérnek: „A révésznek fizetni kell, különben a halott nem jut át.”</p><p>A Hordóban Laci kérdés nélkül tölt.</p>";
  return t;
 },
 wrong:{
  kertesz:"<p>Kertész Balázst őrizetbe veszik. A sajtó boldog, Somogyi kezet ráz Vargával a kamerák előtt. Kertész a tárgyalóteremben sír, és senki nem hiszi el neki.</p><p>Decemberben egy csendes, nagy kezű férfi besétál a kapitányságra, és leteszi a pultra egy hangár kulcsait. Vámos Gergő mindent elmond, nyugodtan, sorrendben, mint egy jelentést.</p><p>Kertészt hat hét után szabadon engedik. Varga attól fogva nem néz a szemedbe.</p>",
  berkes:"<p>Ez nem történik meg. Az ügyészség egy napig sem ül rajta. Somogyi Kristóf személyesen hív fel, és nagyon halkan beszél.</p>"
 }
}
};
