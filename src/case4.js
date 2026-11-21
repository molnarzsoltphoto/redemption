// ===== 4. ÜGY: ÁRADÁS =====
CASES.c4 = {
id:"c4", num:"4. ügy ·", title:"Áradás", tagline:"Március. A Duna kilép a medréből, és felhozza, amit a tél eltakart. Egy villában egy pisztoly, egy búcsúlevél, és senki nem hiszi el.",
date:[2027,2,8], par:5,
order:["kata","berkes","andrea","erika","kun"],
start:{t:370, loc:"otthon"},
onStart:function(S,A){S.alc=10;S.fat=30;S.crave=45},
intro:function(S,A){
  let t="<p>Hétfő, március 8., 06:10. Három napja esik, és a Duna a rakpartot nyaldossa. A rádióban árvízvédelmi készültség, homokzsákok, Csepel, Szentendre.</p>";
  if(S.f.apa_halal)t+="<p>Apád két hónapja halott. A hűtőn még mindig ott a Platán telefonszáma, mágnessel. Nem veszed le.</p>";
  t+="<p>A telefon. "+(S.f.varga_halott?"Dr. Szép Viktória, aki januárban még ellened nyomozott, most megbízott osztályvezető":"Varga, rekedten")+": „Somogyi Kristóf. A villájában, a Dunaparton. Fejlövés, a saját fegyvere, búcsúlevél.” Csend. „Öngyilkosságnak néz ki, Dénes. Mindenki azt akarja, hogy az legyen. Menj ki, és mondd meg, hogy az-e.”</p>";
  t+=S.f.somogyi_bukik?"<p>Somogyi januárban bukott meg, Gál Eszter cikke után. Azóta vizsgálat folyt ellene, és a villájában élt, egyedül, elfüggönyözött ablakok mögött.</p>":"<p>Somogyi Kristóf a város főkapitánya volt. Tegnap este még tévében nyilatkozott az árvízről.</p>";
  if(S.f.bodnar_vad)t+="<p>Bodnár Feri helyén azóta senki nem ül. A kávét most Bence hozza.</p>";
  return t;
},

suspects:{
 kata:{name:"Rácz Kata", short:"Kata", reveal:["kata_villa","kata_inditek"]},
 berkes:{name:"Dr. Berkes András", short:"Berkes", reveal:["met_berkes","berkes_latogatas"]},
 andrea:{name:"Somogyi Andrea", short:"Andrea", reveal:["met_andrea","andrea_valas"]},
 erika:{name:"Kónya Attiláné, Erika", short:"Erika", reveal:["erika_inditek","erika_villanal","suzuki_anpr","korhazi_hiany"]},
 kun:{name:"Kun Zoltán", short:"Kun", reveal:["met_kun","kun_eroszak"]}
},
victims:[
 {id:"v1", n:"Somogyi Kristóf", s:"Somogyi", d:"főkapitány · a villájában, vasárnap éjjel"},
 {id:"v2", n:"Dudás Máté", s:"Dudás", d:"22 éves · a csepeli gát tövében, kedd éjjel", known:"v2_found"}
],
solution:{v1:"erika", v2:"kun"},
onVerdict:function(S,s,vids){vids.forEach(v=>S.f["verd_"+v]=S.t);if(S.f.verd_v1&&S.f.verd_v2)S.f.verd_all=S.t;if(s==="kata")S.f.kata_vad=S.t;if(s==="erika")S.f.erika_vad=S.t},
bossLine:"„Ne magyarázz. Hozz nevet és bizonyítékot, mielőtt az ügyészség öngyilkosságnak minősíti.”",

ev:{
 // 1. Somogyi
 somogyi_test:{v:"v1", n:"Somogyi holtteste", d:"A dolgozószobában, a bőrfotelben. Jobb halántékán lövés, a jobb kezében a saját Glockja. Az asztalon egy whiskyspohár."},
 bucsulevel:{v:"v1", n:"A búcsúlevél", d:"„Nem bírom tovább a hazugságokat. Bocsássatok meg. K.” Géppel írva, aláírás nélkül. Somogyi mindent aláírt, amit valaha leírt."},
 ket_csesze:{v:"v1", n:"Két teáscsésze", d:"A konyhai szárítón két frissen elmosott teáscsésze. A házvezetőnő szerint Somogyi soha nem ivott teát."},
 kamera_ki:{v:"v1", n:"Kikapcsolt kamerák", d:"A villa kamerarendszerét vasárnap 21:40-kor kikapcsolták, a helyes jelszóval, a dolgozószobai számítógépről."},
 balkezes:{v:"v1", n:"Somogyi balkezes volt", d:"A házvezetőnő szerint Somogyi balkezes volt. Bal kézzel írt, evett, és bal kézzel lőtt a lőtéren."},
 halalido_s:{v:"v1", n:"Somogyi halálának ideje", d:"Vasárnap 22:30 és 23:30 között."},
 midazolam:{v:"v1", n:"Altató a vérben", d:"Somogyi vérében midazolam, nagy dózisban: injekcióban kapta, a bal felkarjába. Öntudatlan volt, amikor lőttek."},
 loves_szog:{v:"v1", n:"A lövés szöge", d:"A lövés kissé elölről, felülről érkezett. A jobb kézen nincs lőpornyom."},
 kata_villa:{v:"v1", n:"Kata a villában", d:"A házvezetőnő szerint vasárnap kilenc körül egy fiatal rendőrnő járt a villában. Kiabáltak. A nő sírva ment el.", sup:[["kata","A","v1"]]},
 kata_inditek:{v:"v1", n:"Kata apja", d:"Kata apját, Rácz Gábort Halmos lőtte le 2020-ban, és Somogyi tüntette el a jelentést. Kata hat évig kereste a bizonyítékot.", sup:[["kata","I","v1"]]},
 kata_anpr:{v:"v1", n:"Kata autója a rendszámolvasón", d:"Kata autója 20:48-kor észak felé, 21:41-kor dél felé halad el a villához vezető út rendszámolvasó kamerája előtt.", sup:[["kata","A","v1"]]},
 kata_kesztyu:{v:"v1", n:"Lőpornyomos kesztyű", d:"Kata autójában egy pár bőrkesztyű, rajta lőpornyom.", sup:[["kata","M","v1"]]},
 kata_alibi:{v:"v1", n:"Kata a Hordóban", d:"Kata vasárnap 22:00-tól hajnali egyig a Hordóban ült Bokszossal. Laci és három törzsvendég igazolja.", clears:["kata","*"]},
 berkes_inditek:{v:"v1", n:"Berkes bukása", d:"Somogyi januárban nem védte meg a sógorát a klinikai csalás ügyében. Berkes elvesztette a klinikát, az orvosi engedélyét felfüggesztették.", sup:[["berkes","I","v1"]]},
 berkes_latogatas:{v:"v1", n:"Berkes a villában", d:"Berkes vasárnap este nyolctól tízig a villában volt. Pénzről veszekedtek.", sup:[["berkes","A","v1"]]},
 berkes_midazolam:{v:"v1", n:"Berkes orvosi táskája", d:"Berkes otthonában egy orvosi táska, benne midazolam-ampullák, felfüggesztett engedély ide vagy oda.", sup:[["berkes","M","v1"]]},
 berkes_alibi:{v:"v1", n:"Berkes a kaszinóban", d:"Berkes 22:20-tól hajnali háromig egy belvárosi kaszinóban ült a rulettasztalnál. A kamerafelvétel folyamatos.", clears:["berkes","*"]},
 andrea_valas:{v:"v1", n:"A válás", d:"Andrea januárban beadta a válókeresetet. A házassági szerződés szerint özvegyként mindent örököl, elváltként semmit.", sup:[["andrea","I","v1"]]},
 andrea_hazudott:{v:"v1", n:"Andrea nem volt Bécsben", d:"Andrea azt mondta, a hétvégét Bécsben töltötte. A légitársaság szerint vasárnap 17:00-kor leszállt Budapesten.", sup:[["andrea","A","v1"]]},
 andrea_szef:{v:"v1", n:"A széf kódja", d:"A Glock a dolgozószobai széfben volt. A kódot csak Somogyi és Andrea ismerte.", sup:[["andrea","M","v1"]]},
 andrea_hotel:{v:"v1", n:"Andrea a szállodában", d:"Andrea vasárnap 19:00-tól hétfő 09:00-ig egy budai szállodában volt egy férfival. A szálloda kamerája és a recepció igazolja.", clears:["andrea","*"]},
 piros_suzuki:{v:"v1", n:"Piros Suzuki a kapuban", d:"Máté telefonján egy fénykép vasárnap 21:50-ről: egy piros Suzuki Swift áll a villa kapujában, a rendszámból három betű olvasható: KSN."},
 erika_auto:{n:"Erika autója", d:"A Kónya-ház előtt egy piros Suzuki Swift, rendszáma KSN-314."},
 suzuki_anpr:{v:"v1", n:"KSN-314 a rendszámolvasón", d:"A KSN-314-es piros Suzuki 21:32-kor észak felé, 23:55-kor dél felé halad el a villához vezető út kamerája előtt.", sup:[["erika","A","v1"]]},
 korhazi_hiany:{v:"v1", n:"Hiányzó ampullák", d:"A Szent János kórház gyógyszertárában vasárnap két ampulla midazolam hiányzik. Egy olyan betegre írták ki, aki nem kapta meg. Kiadta: Kónya Attiláné ápolónő."},
 erika_inditek:{v:"v1", n:"„Somogyi ölette meg a férjem”", d:"Kónya Attilát Halmos fojtotta meg, Somogyi parancsára, mert beszélni akart. Erika ezt Gál Eszter dossziéjából tudja.", sup:[["erika","I","v1"]]},
 erika_ejjeles:{v:"v2", n:"Erika éjszakás volt", d:"Kedden 19:00-tól szerda 07:00-ig Erika a kórházban dolgozott, éjszakai műszakban.", clears:["erika","v2"]},
 // 2. Dudás Máté
 mate_test:{v:"v2", n:"Máté holtteste", d:"A csepeli gát tövében, a visszahúzódó víz után, iszapban, arccal lefelé. Gumicsizma, munkáskesztyű."},
 mate_telefon:{v:"v2", n:"Máté telefonja", d:"Máté zsebében egy vizes, de ép telefon."},
 mate_villa:{n:"Máté a villában dolgozott", d:"Dudás Máté tavaly óta kertész volt Somogyi villájában. Vasárnap este a fizetéséért ment ki, a házvezetőnő szerint."},
 halalido_m:{v:"v2", n:"Máté halálának ideje", d:"Kedd 22:00 és szerda 00:00 között."},
 lapat_seb:{v:"v2", n:"Ütés a tarkón", d:"Máté tarkóján lapos, éles fémperemű tárgytól származó ütés. Még élt, amikor a vízbe került."},
 regi_tores:{v:"v2", n:"Régi törések", d:"Máté bal alkarján és két bordáján régi, rosszul gyógyult törés. Gyerekkori, ismétlődő sérülések."},
 mate_uzenet:{v:"v2", n:"Máté üzenete az anyjának", d:"Kedd 20:10: „Anya, ma este elmondom neki, hogy elköltözünk. Ne félj. Én ott leszek.”"},
 kun_eroszak:{v:"v2", n:"Kun Zoltán és a család", d:"A szomszédok szerint Kun évek óta veri a feleségét. Három rendőri feljelentés, mindhármat visszavonták.", sup:[["kun","I","v2"]]},
 kun_gat:{v:"v2", n:"Két ember a gáton", d:"Az árvízvédelmi önkéntes kedden 23 óra körül két férfit látott a gát tetején: egy fiatalt és egy idősebbet, homokzsáklapáttal.", sup:[["kun","A","v2"]]},
 kun_lapat:{v:"v2", n:"A lemosott lapát", d:"Kun fészerében egy homokzsáklapát, frissen lemosva. A peremén rozsda, és egy sötétebb folt."},
 kun_hazudik:{v:"v2", n:"Kun hazudik", d:"Kun azt mondta, kedden este otthon nézte a meccset. A felesége szerint tízkor elment Máté után a gátra."},
 // következtetések
 nem_ongyilkos:{v:"v1", n:"Nem öngyilkosság", d:"Egy balkezes ember nem a jobb kezével lövi fejbe magát, öntudatlanul, elölről. Somogyit megölték, és öngyilkosságnak rendezték.", ded:true, f:"nem_ongyilkos"},
 erika_villanal:{v:"v1", n:"Erika a villánál", d:"KSN-314, piros Suzuki Swift. Kónya özvegye vasárnap este a villa kapujában állt.", sup:[["erika","A","v1"]], ded:true},
 erika_midazolam:{v:"v1", n:"Az ampullák útja", d:"Midazolam Somogyi vérében, és két hiányzó ampulla, amit Erika írt ki vasárnap egy betegre, aki nem kapta meg.", sup:[["erika","M","v1"]], ded:true},
 mate_tanu:{n:"Máté látott valamit?", d:"Máté vasárnap este a villánál fényképezett, két nappal később halott. Elhallgattatták? Vagy csak a víz?", ded:true},
 kun_lapat_ded:{v:"v2", n:"A lapát pereme", d:"Lapos, éles fémperemű ütés a tarkón, és egy frissen lemosott homokzsáklapát Kun fészerében.", sup:[["kun","M","v2"]], ded:true},
 kun_inditek:{v:"v2", n:"Máté el akarta vinni az anyját", d:"Máté aznap este akarta megmondani a mostohaapjának, hogy elköltöznek. A régi törések elmondják, mi történt korábban, amikor valaki ellentmondott Kunnak.", sup:[["kun","I","v2"]], ded:true}
},

ded:[
 {a:"loves_szog", b:"balkezes", g:"nem_ongyilkos", t:"Egy balkezes ember a jobb kezével, elölről, lőpornyom nélkül. Ez nem öngyilkosság. Ez rendezés."},
 {a:"midazolam", b:"loves_szog", g:"nem_ongyilkos", t:"Öntudatlan volt, amikor lőttek. Valaki beadta neki az altatót, aztán a kezébe adta a fegyvert, és meghúzta a ravaszt helyette."},
 {a:"piros_suzuki", b:"erika_auto", g:"erika_villanal", t:"KSN. Piros Suzuki Swift. Egy újpesti ház előtt áll, ahol egy özvegy minden este egyedül vacsorázik."},
 {a:"midazolam", b:"korhazi_hiany", g:"erika_midazolam", t:"Két ampulla midazolam tűnt el vasárnap a Szent Jánosban. Somogyi vérében midazolam. A kiadó: Kónya Attiláné."},
 {a:"piros_suzuki", b:"mate_test", g:"mate_tanu", t:"Vasárnap este Máté lefényképezett egy autót a villa kapujában. Kedd éjjel a gát tövében feküdt. Lehet, hogy túl sokat látott. Lehet, hogy nem."},
 {a:"lapat_seb", b:"kun_lapat", g:"kun_lapat_ded", t:"Lapos, éles perem. Egy homokzsáklapát, frissen lemosva, ott, ahol senki nem mos lapátot."},
 {a:"mate_uzenet", b:"regi_tores", g:"kun_inditek", t:"„Ma este elmondom neki, hogy elköltözünk.” És a régi törések egy fiú karján, aki gyerekként túl sokszor esett le a lépcsőn."},
 {a:"mate_uzenet", b:"kun_eroszak", g:"kun_inditek", t:"„Ne félj, anya.” Három visszavont feljelentés. Egy fiú, aki aznap este a mostohaapja elé állt."}
],

docs:{
 boncolas_s:{t:"Boncolási jegyzőkönyv – Somogyi Kristóf", b:"IGAZSÁGÜGYI ORVOSTANI INTÉZET\nVizsgálta: dr. Keleti Mária\n\n[[halalido_s|Halál beállta: 2027. 03. 07., 22:30 és 23:30 között.]]\nHalál oka: fejlövés, a jobb halánték felől, közvetlen közelről.\n[[loves_szog|A lőcsatorna iránya kissé elölről-felülről halad. A jobb kézfejen lőpornyom nem mutatható ki.]]\n[[midazolam|Toxikológia: véralkohol 0,6 ‰. Nagy mennyiségű midazolam, intramuszkulárisan, a bal felkarba. A halál beálltakor az elhunyt eszméletlen lehetett.]]\n\n— K. M.: „Dénes. Ezt a jelentést hétfő délután az ügyészség már öngyilkosságként kérte lezárni. Én nem írtam alá.”"},
 anpr:{t:"Rendszámolvasó – Szentendrei út, 11-es km", b:"KÖZÚTI RENDSZÁMFELISMERŐ RENDSZER, 11-es km-szelvény\nIdőszak: 2027. 03. 07. 18:00 – 03. 08. 02:00\n(kivonat, a villa irányában haladó, ott nem lakó járművek)\n\n19:52  taxi (Főtaxi 4471), észak felé  —  22:08  ugyanaz, dél felé\n[[kata_anpr|20:48  RKT-617 (üzembentartó: Rácz Katalin), észak felé  —  21:41  dél felé]]\n[[suzuki_anpr|21:32  KSN-314 (üzembentartó: Kónya Attiláné), piros Suzuki Swift, észak felé  —  23:55  dél felé]]\n\nBence megjegyzése: „Kata kocsija… Dénes. Kata ott volt.”"},
 mate_kepek:{t:"Dudás Máté telefonja – kivonat", b:"BŰNÜGYI TECHNIKAI LABOR\nVizsgálta: Halász Tamás\n\nA készülék a víz ellenére működik. Kivonat:\n\nFényképek, 2027. 03. 07.:\n21:47  a villa kertje sötétben, a dolgozószoba ablakában fény\n[[piros_suzuki|21:50  egy piros Suzuki Swift a villa kapujában, a rendszámból három betű olvasható: KSN]]\n21:52  a villa kapuja, a Suzuki már bent a kocsibeállón\n\nÜzenetek:\nvasárnap 22:15  Máté → „Somogyi úr”: „Holnap jövök a pénzért, ma nem nyitott ajtót senki.”\n[[mate_uzenet|kedd 20:10  Máté → Anya: „Anya, ma este elmondom neki, hogy elköltözünk. Ne félj. Én ott leszek.”]]\nkedd 21:58  Anya → Máté: „Ne menj utána.” (kézbesítve, nem olvasott)\n\n— H. T.: „A fiú csak a pénzéért ment ki vasárnap, Dénes. Szerintem nem látott semmit, csak lefényképezte, mert ideges volt.”"},
 boncolas_m:{t:"Boncolási jegyzőkönyv – Dudás Máté", b:"IGAZSÁGÜGYI ORVOSTANI INTÉZET\nVizsgálta: dr. Keleti Mária\n\n[[halalido_m|Halál beállta: 2027. 03. 09., 22:00 és 03. 10., 00:00 között.]]\nHalál oka: vízbe fulladás.\n[[lapat_seb|A tarkón lapos, éles fémperemű tárgytól származó ütés, koponyarepedéssel. Az ütés után még élt: a tüdőben víz és iszap.]]\n[[regi_tores|A bal alkaron és a jobb oldali 7–8. bordán régi, rosszul gyógyult törések, különböző időpontokból. Gyermekkori, ismétlődő sérülések.]]\n\n— K. M.: „Tizenkét éves korában kellett volna valakinek megnéznie ezt a fiút, Dénes. Nem most.”"},
 gyogyszertar:{t:"Kórházi gyógyszertár – kiadási napló", b:"SZENT JÁNOS KÓRHÁZ – Intézeti gyógyszertár\nKábítószer- és pszichotrop-nyilvántartás, 2027. 03. 07. (vasárnap), nappali műszak\n\n08:15  Morfin 10 mg, 1 amp., Belgyógyászat II., kiadta: Sz. É.\n[[korhazi_hiany|14:40  Midazolam 15 mg, 2 amp., Traumatológia, 312-es ágy (Takács J.), kiadta: Kónya Attiláné. A betegdokumentáció szerint a beteg midazolamot nem kapott.]]\n17:05  Fentanil, 1 amp., Intenzív, kiadta: R. P.\n\nA gyógyszertárvezető megjegyzése: „A 14:40-es tételt hétfőn észleltük. Belső vizsgálat indult.”"},
 kaszino:{t:"Kaszinó – kamerafelvétel kivonata", b:"GRAND CASINO – biztonsági szolgálat\n2027. 03. 07–08.\n\n[[berkes_alibi|22:20  dr. Berkes András belép (tagkártya), 22:25–02:55 a 4-es rulettasztalnál, megszakítás nélkül. 03:00 távozik. Veszteség: 1 840 000 Ft.]]"},
 hotel:{t:"Szálloda – recepció és kamera", b:"HOTEL BUDAVÁR – recepció\n2027. 03. 07–08.\n\n[[andrea_hotel|19:04  bejelentkezés, 512-es lakosztály, két fő: Somogyi Andrea és egy férfi (név a vendégkönyvben: „Dr. H.”). A folyosói kamera szerint a lakosztályt reggel 08:50-ig egyikük sem hagyta el.]]\n\nBence megjegyzése: „A férfi Halmos ügyvédje, Dénes. Ne kérdezd.”"},
 kata_auto:{t:"Átvizsgálás – Rácz K. gépkocsija", b:"JEGYZŐKÖNYV, járműátvizsgálás\nJármű: RKT-617, üzembentartó: Rácz Katalin hadnagy\nVégezte: Tóth B. nyomozó\n\n[[kata_kesztyu|Az anyósülés alatt egy pár fekete bőrkesztyű, a jobb kesztyűn lőpornyom.]]\nKata szerint a kesztyűt a szombati lőgyakorlaton viselte. A lőtér nyilvántartása szerint szombaton valóban lőtt.\n\nBence megjegyzése: „Bocsáss meg, Kata.”"}
},

locs:{
 otthon:{m:"Lakás", n:"Lakás a Körúton", x:612, y:338, side:"P", d:"Harmadik emelet, udvari szoba. Az ablakon csorog az eső. A hűtőben pálinka, ha akarod. Ma reggel nem akarod. Még.", hs:[]},
 kapitanysag:{m:"Kapitányság", n:"Főkapitányság", x:705, y:196, side:"P", d:"A lépcsőn homokzsákok, a pincében víz. Somogyi irodájának ajtaján fekete szalag. Senki nem tudja, kell-e gyászolni.", hs:[]},
 hordo:{m:"Hordó", n:"Hordó", x:648, y:462, side:"P", open:[15,3], d:"A Hordó pincéjébe is betört a víz. Laci homokzsákokon állva csapolja a sört, és ezt nem tartja említésre méltónak.", hs:[]},
 intezet:{m:"Intézet", n:"Orvostani Intézet", x:792, y:474, side:"P", open:[7,19], d:"Csempe, formalin, a folyosón gumicsizmák. Keleti doktornő azt mondja, áradáskor mindig többen jönnek. A víz mindent visszaad.", hs:[]},
 temeto:{m:"Temető", n:"Farkasréti temető", x:150, y:420, side:"B", vis:"apa_halal", open:[8,18], d:"Apád sírján a hó elolvadt. A fejfán a név, alatta a rendfokozat. Valaki friss virágot hozott. Nem te.", hs:[]},
 villa:{la:1, m:"Somogyi-villa", n:"Somogyi-villa, Dunapart", x:395, y:52, side:"B", crime:1, d:"Üveg és beton a Duna partján, a kertet már elöntötte a víz. A kapuban rendőrautó, a teraszon egy halott ember kedvenc nádfotele.", hs:[
   {id:"dolgozo", l:"A dolgozószoba", t:"Somogyi a bőrfotelben ül, a feje oldalra billen. Jobb halántékán lövés, a jobb kezében a saját Glockja. Az asztalon egy whiskyspohár, félig. Mintha csak elszunnyadt volna egy rossz hír után.", ev:"somogyi_test", f:"body1"},
   {id:"level", l:"Az íróasztal", t:"A nyomtató mellett egy lap: „Nem bírom tovább a hazugságokat. Bocsássatok meg. K.” Géppel írva, aláírás nélkül. Somogyi mindent aláírt, amit valaha leírt.", ev:"bucsulevel"},
   {id:"konyha", l:"A konyha", t:"A szárítón két frissen elmosott teáscsésze, és egy teásdoboz, amit még ki sem bontottak rendesen. A mosogató mellett egy tejfölös doboz, kimosva, mint egy kórházban.", ev:"ket_csesze"},
   {id:"kamera", l:"A biztonsági rendszer", t:"A kamerarendszer vezérlője a dolgozószobai gépen. A napló szerint vasárnap 21:40-kor kikapcsolták, a helyes jelszóval. Valaki ismerte, vagy Somogyi maga adta meg.", ev:"kamera_ki"}
 ]},
 erikahaz:{m:"Kónya-ház", n:"Kónya-ház, Újpest", x:735, y:58, side:"P", d:"A kockaház, ahol decemberben Kónya Attilát megtalálták. A garázsajtó bezárva, a kerítésen még ott a karácsonyi égősor, kikapcsolva.", hs:[
   {id:"auto", l:"Az utca", t:"A ház előtt egy piros Suzuki Swift, KSN-314. A szélvédőn egy kórházi parkolókártya. A kerekeken friss, szürke iszap, pedig Újpesten nem volt áradás.", ev:"erika_auto"}
 ]},
 berkeshaz:{m:"Berkes lakás", n:"Berkes lakása, Pasarét", x:262, y:150, side:"B", d:"Pasaréti bérlakás, kartondobozok, egy elkezdett költözés. A klinika óta itt lakik, egyedül.", hs:[
   {id:"taska", l:"Az orvosi táska", req:["met_berkes"], t:"Az előszobában egy régi orvosi táska. Benne vérnyomásmérő, kötszer, és egy doboz midazolam-ampulla. A felfüggesztett engedély ide vagy oda.", ev:"berkes_midazolam"}
 ]},
 korhaz:{m:"Kórház", n:"Szent János Kórház", x:250, y:252, side:"B", open:[7,20], d:"A kórház folyosóin az áradás miatt több a beteg és kevesebb az ágy. A traumatológián egy ápolónő a pult mögött ül, és nem néz fel.", hs:[]},
 gat:{la:1, m:"Csepeli gát", n:"A csepeli gát", x:600, y:676, side:"P", vis:"v2_found", crime:1, d:"Homokzsákfal a gát tetején, mögötte a megáradt Duna, barna és gyors. A gát tövében, ahol a víz visszahúzódott, sárga szalag.", hs:[
   {id:"test", l:"A gát töve", t:"Dudás Máté az iszapban fekszik, arccal lefelé, gumicsizmában. A tarkóján seb, a haja összeragadt. A zsebében egy telefon, vizesen, és egy pénztárca, benne háromezer forint és egy fénykép az anyjáról.", ev:["mate_test","mate_telefon"], f:"body2"}
 ]},
 kunhaz:{m:"Kun-ház", n:"Kun-ház, Csepel", x:668, y:640, side:"P", vis:"v2_found", d:"Kis kertes ház a gát mögött. A kertben homokzsákok, a fészer ajtaja nyitva. Az ablakban egy asszony áll, és amikor meglát, elhúzza a függönyt.", hs:[
   {id:"feszer", l:"A fészer", t:"Szerszámok, homokzsákok, egy talicska. A falnak támasztva egy homokzsáklapát, frissen lemosva. Mindent itt sár borít, csak ezt a lapátot nem. A peremén rozsda, és egy sötétebb folt, amit a víz nem vitt el.", ev:"kun_lapat"}
 ]},
 lilihaz:{la:1, m:"Lili", n:"Lili és az anyja, Buda", x:330, y:300, side:"B", vis:"lili_inv", open:[17,21], day:3, d:"Budai lakás, kották a zongorán, a folyosón kartondobozok. Két bőrönd már be van pakolva.", hs:[]},
 aa:{m:"NA-gyűlés", n:"Szent József-templom, alagsor", x:742, y:330, side:"P", vis:"aa_inv", open:[18,21], d:"Pince, összecsukható székek, filterkávé műanyag pohárban. Tizenkét ember körben. Egy tábla a falon: „Csak a mai nap.”", hs:[]},
 nora:{m:"Nóra", n:"Nóra lakása", x:716, y:396, side:"P", open:[20,4], gone:"nora_help", d:"Józsefvárosi bérház, a gangon pocsolyák. Nóra ajtaja nyitva, bentről rádió szól.", hs:[]}
},

people:{
 anna:{n:"Dr. Kerekes Anna", r:"traumatológus", loc:"korhaz", h:[8,20], bio:"41 éves traumatológus a Szent Jánosban. Rövid haj, sportóra, kávéfolt a köpenyén. Úgy beszél a törésekről, mintha időjárás-jelentést olvasna fel, és közben a szeme nevet. Elvált, maratont fut, és azt mondja, rendőrökkel nem randevúzik, mert mind hazudnak. Tizenöt éve dolgozik egy osztályon Kónya Attilánéval.", topics:[
  {id:"elso", l:"Bemutatkozol", req:["!anna_met"], t:"„Mátrai? A Mátrai Gyula fia?” Kezet nyújt. „Kerekes Anna. Én műtöttem az édesapját decemberben.” Rövid csend. „Sajnálom, hogy januárban…” Nem fejezi be. Nem is kell.", f:"anna_met"},
  {id:"erika", l:"Kónya Attilánéról kérdezed", req:["anna_met","korhazi_hiany|erika_inditek|suzuki_anpr"], sober:1, t:"Elsápad. „Erika? Tizenöt éve dolgozunk együtt. Ő tanított meg kanült szúrni, amikor rezidens voltam.” Lehalkítja a hangját. „Vasárnap a műszak végén sírt az öltözőben. Hétfőn úgy jött be, mintha semmi nem történt volna.” Rád néz. „Dénes. Ne tedd tönkre. Már mindent elvesztett.” Aztán: „De ha ő volt, akkor ne hazudj miatta. Se nekem, se magadnak.”", f:"anna_erika"},
  {id:"este", l:"Ma este?", req:["anna_vacsora|anna_temetes"], dyn:"annaEste"}
 ]},
 anna2:{n:"Anna", r:"nálad", loc:"otthon", h:[21,24], vis:"anna_egyutt", bio:"A konyhádban ül, teát főzött. A pálinkát valamikor a múlt héten kiöntötte a lefolyóba, és nem kérdezett meg előtte.", topics:[
  {id:"beszel", l:"Leülsz mellé", rep:1, eff:{crave:-20}, dyn:"annaOtthon"}
 ]},
 varga:{n:"Varga Ottó alezredes", r:"osztályvezető", loc:"kapitanysag", h:[7,19], gone:"varga_halott", bio:"56 éves. Áprilisban nyugdíjba megy. Az asztalán már ott a kartondoboz, amibe a fiók tartalmát pakolja. A whiskyt még nem tette bele.", topics:[
  {id:"elig", l:"Eligazítás", t:"„Az ügyészség délre öngyilkosságot akar. A minisztérium tegnapra. Somogyi túl sok mindent tudott túl sok emberről.” Leveszi a szemüvegét. „Ha nem az, Dénes, akkor csütörtök reggelig bizonyítsd be. Utána lezárják.”", f:"briefed"},
  {id:"kata", l:"Katáról", req:["kata_villa|kata_anpr"], t:"Sokáig hallgat. „Tudom, hogy ott volt. Az egész osztály tudja.” Becsukja a fiókot. „Ha ő tette, Dénes, akkor te leszel az, aki behozza. Senki más nem fogja megtenni.”"},
  {id:"statusz", l:"Jelentés az ügyről", rep:1, dyn:"vargaStatus"}
 ]},
 szep:{n:"Dr. Szép Viktória", r:"megbízott osztályvezető", loc:"kapitanysag", h:[8,18], vis:"varga_halott", bio:"44 éves. Januárban még ellened nyomozott. Most ő vezeti az osztályt, és te vagy a legjobb embere. Egyikőtök sem tudja, hogyan kell ezt kezelni.", topics:[
  {id:"elig", l:"Eligazítás", t:"„Az ügyészség öngyilkosságot akar, a minisztérium tegnapra. Somogyi túl sok mindent tudott túl sok emberről.” Felnéz a füzetéből. „Csütörtök reggelig bizonyítsa be, főhadnagy, hogy nem az. Utána lezárják.”", f:"briefed"},
  {id:"statusz", l:"Jelentés az ügyről", rep:1, dyn:"vargaStatus"}
 ]},
 bence:{n:"Tóth Bence", r:"nyomozó", loc:"kapitanysag", h:[7,21], staff:1, bio:"29 éves. Január óta ő hozza a kávét, és egyre jobb nyomozó. Ma reggel nem mer Katára nézni.", topics:[{id:"gond", l:"Mit gondolsz?", rep:1, dyn:"hintBence"}]},
 kata:{n:"Rácz Kata", r:"nyomozó", loc:"kapitanysag", h:[7,21], staff:1, bio:"36 éves. Rácz Gábor lánya. Hat évig kereste a bizonyítékot Somogyi ellen. Most Somogyi halott, és Kata nem mosolyog, nem sír, csak dolgozik, mintha semmi nem történt volna.", topics:[
  {id:"gond", l:"Mit gondolsz?", rep:1, dyn:"hintKata"},
  {id:"vasarnap", l:"Hol voltál vasárnap este?", req:["kata_villa|kata_anpr"], sober:1, dyn:"kataVasarnap", ev:"kata_inditek"},
  {id:"utana", l:"És utána?", req:["kata_vallott"], t:"„Utána? A Hordóba mentem. Bokszos ott ült, ittunk. Nem akartam egyedül lenni.” Felnéz. „Kérdezd meg őket. Ne nekem higgy.”"}
 ]},
 halasz:{n:"Halász Tamás", r:"nyomszakértő", loc:"kapitanysag", h:[8,22], staff:1, bio:"41 éves, pedáns. A labor pincéjébe is betört a víz; a mintákat a második emeletre költöztette, és újra szól az Omega.", topics:[{id:"gond", l:"Mi van a laborban?", rep:1, dyn:"hintHalasz"}]},
 bodnar:{n:"Bodnár Feri", r:"törzszászlós", loc:"kapitanysag", h:[7,21], staff:1, gone:"bodnar_vad", bio:"58 éves, huszonöt éve jár utcára. Januárban hazavitt, amikor részeg voltál. Azóta mindig ő kérdezi meg elsőként, hogy vagy.", topics:[{id:"gond", l:"Mit gondolsz?", rep:1, t:"„Somogyi? Öngyilkos lett, Dénes. Az ilyenek mind azok lesznek a végén.” Megpaskolja a válladat. „Ne ásd túl mélyre. Áradáskor a mély víz visszaüt.”"}]},
 feher:{n:"Dr. Fehér Judit", r:"pszichológus", loc:"kapitanysag", h:[9,17], staff:1, bio:"52 éves. Januárban azt kérte, ne igyál. Most nem kér semmit, csak figyel.", topics:[
  {id:"na", l:"Leülsz vele", t:"„Hogy van, főhadnagy?” Most nem hallgatsz. Azt mondod: szomjas vagyok. Minden nap. Leteszi a tollat. Leír egy címet egy cetlire, és odaadja. „Szent József-templom, alagsor, minden este hattól. Nem kell beszélnie. Elég, ha ül.”", f:"aa_inv"},
  {id:"profil", l:"Somogyi „búcsúleveléről”", req:["bucsulevel"], t:"„Aki ezt írta, nem ismerte Somogyit, vagy nagyon is ismerte. »Nem bírom tovább a hazugságokat.« Somogyi soha nem nevezte hazugságnak, amit csinált.” Leveszi a szemüvegét. „Ez nem búcsúlevél, főhadnagy. Ez vád. Valaki kimondta helyette azt, amit szerinte be kellett volna vallania.”"}
 ]},
 keleti:{n:"Dr. Keleti Mária", r:"igazságügyi orvosszakértő", loc:"intezet", h:[7,19], staff:1, bio:"61 éves. Apád temetése óta kevesebbet dohányzik. Azt mondja, valakinek életben kell maradnia, aki emlékszik rá.", topics:[
  {id:"elozetes", l:"Előzetes vélemény", req:["body1"], t:"„Öngyilkosság, mondja az ügyészség. Délig akarják a papírt.” Kifújja a füstöt. „Nem adom oda délig. Van valami a karján, Dénes. Egy szúrás. Az öngyilkosok nem szoktak előtte injekciót kapni.”"},
  {id:"apa", l:"Apámról", req:["apa_halal"], t:"„Tegnap kint voltam nála. Friss virágot vittem.” Rád néz. „Ő is mindig azt mondta: ha valami túl simán zárul, akkor nem zárult le.”"}
 ]},
 hazvezeto:{n:"Mészáros Edit", r:"házvezetőnő", loc:"villa", h:[7,20], bio:"63 éves, tizenkét éve vezeti Somogyi háztartását. Ő találta meg reggel. Még mindig kötényben van, és nem tudja, kinek kell most főznie.", topics:[
  {id:"reggel", l:"Hogyan találta meg?", t:"„Hétkor jöttem, ahogy mindig. A dolgozószoba ajtaja nyitva, ő a fotelben.” Megtörli a szemét. „A jobb kezében a pisztoly. Pedig ő balkezes volt. Bal kézzel írt, bal kézzel evett, a lőtéren is bal kézzel lőtt. Mindig nevettünk rajta, hogy a balkezesek a legjobb lövészek.”", ev:"balkezes"},
  {id:"vasarnap", l:"Ki járt itt vasárnap?", sober:1, t:"„Nyolckor jött a sógora, a doktor úr. Pénzről kiabáltak, tízkor taxival ment el. Kilenc körül jött egy fiatal rendőrnő, nem tudom a nevét, sírt, kiabált, fél óra múlva elment.” Elhallgat. „Utána elküldött engem haza. Azt mondta, vendéget vár, egy hölgyet. Nem mondta, kit.”", ev:["berkes_latogatas","kata_villa"], f:"met_berkes_hir"},
  {id:"mate", l:"Ki volt még itt mostanában?", t:"„A kertész fiú, Máté. Vasárnap este is kijött, a fizetéséért. A főnök nem nyitott neki ajtót.” Sóhajt. „Kedves fiú. Mindig mindent lefényképezett, mert nem bízott senkiben.”", ev:"mate_villa"}
 ]},
 andrea:{n:"Somogyi Andrea", r:"az özvegy", loc:"villa", h:[10,20], suspect:1, bio:"42 éves, Berkes András húga. Elegáns, száraz szemű. Januárban beadta a válókeresetet. Most özvegy, és ez jogilag egészen más.", topics:[
  {id:"becs", l:"Hol volt a hétvégén?", t:"„Bécsben. Barátnőknél.” Ránéz az órájára. „Hétfő reggel jöttem haza, és itt várt a rendőrség.”", f:"met_andrea"},
  {id:"valas", l:"A válásról", t:"„Igen, válni akartam. Mindenki tudta. Kristóf nem volt könnyű ember.” Rágyújt. „És igen, a házassági szerződés szerint özvegyként minden az enyém. Ezt is mindenki tudja. Most már maga is.”", ev:"andrea_valas"},
  {id:"szef", l:"Ki tudta a széf kódját?", t:"„Én és ő. Ő azt hitte, csak ő.” Hidegen elmosolyodik. „Huszonkét év házasság, főhadnagy. Az ember megtanulja a kódokat.”", ev:"andrea_szef"},
  {id:"hazugsag", l:"Szembesít: nem volt Bécsben", req:["andrea_hazudott"], sober:1, t:"Elnyomja a cigarettát. „Jó. Budapesten voltam. Egy szállodában, valakivel, akit nem fog megismerni.” Feláll. „A recepció tudja, mikor mentem be és mikor jöttem ki. Kérdezze meg őket. Az én éjszakám unalmasabb volt, mint gondolja.”", f:"andrea_szallo"}
 ]},
 berkes:{n:"Dr. Berkes András", r:"volt klinikaigazgató", loc:"berkeshaz", h:[9,22], suspect:1, bio:"52 éves. A Szent Lukács bezárt, az orvosi engedélyét felfüggesztették, a felesége elhagyta. Az öltönye még drága, de már gyűrött.", topics:[
  {id:"vasarnap", l:"Vasárnap este", t:"„Kimentem hozzá. Pénzt kértem. A sógorom volt, a nővérem férje. Tizenöt évig falaztam neki.” Remeg a keze. „Kidobott. Taxival jöttem el, tízkor. Ennyi.”", f:"met_berkes"},
  {id:"harag", l:"Haragudott rá?", t:"„Haragudtam?” Felnevet, rosszul. „Hagyta, hogy a klinika ügyében mindent rám kenjenek. Megmentette volna magát, és engem eldobott. Igen, haragudtam.”", ev:"berkes_inditek"},
  {id:"utana", l:"Hova ment tízkor?", req:["met_berkes"], t:"„A kaszinóba. Hova máshova.” Lehajtja a fejét. „Elvesztettem ott majdnem kétmilliót. A Grand Casinóban, a rulettnél. Hajnali háromig.”", f:"berkes_kaszino"}
 ]},
 erika:{n:"Kónya Attiláné, Erika", r:"Kónya özvegye, ápolónő", loc:"erikahaz", h:[8,18], suspect:1, bio:"50 éves, a Szent János traumatológiáján ápolónő. Decemberben a férje halála után nem sírt. Januárban mindent átadott Gál Eszternek. Most nyugodt. Túlságosan.", topics:[
  {id:"somogyi", l:"Hallotta, mi történt Somogyival?", t:"„Hallottam.” Leveszi a szemüvegét, megtörli. „Nem fogok úgy tenni, mintha sajnálnám. Maga sem várja ezt tőlem.”", f:"met_erika"},
  {id:"attila", l:"A férjéről", sober:1, t:"„Somogyi ölette meg a férjemet, főhadnagy. Halmos csak a kéz volt.” A hangja egyenletes. „Hat évig fizették a hallgatásáért, és amikor beszélni akart, megfojtatták. Eszter megírta. És aztán Esztert is megölték.” Rád néz. „Maga mondta nekem decemberben, hogy az igazság ki fog derülni. Ki is derült. Csak senki nem fizetett érte.”", ev:"erika_inditek"},
  {id:"vasarnap", l:"Hol volt vasárnap este?", sober:1, t:"„Itthon. Egyedül.” Nem néz félre. „Hétfőn hajnalban kezdtem a kórházban. Mint mindig.”"},
  {id:"suzuki", l:"Szembesít: a piros Suzuki", req:["erika_villanal|suzuki_anpr"], sober:1, t:"Hosszan hallgat. Aztán leül a konyhaasztalhoz, és a kezét az asztalra teszi, ahogy egy beteg a vizsgálóasztalra. „Teát főztem neki. Azt hitte, pénzt akarok a dossziéért. Azt mondtam neki: aláírok egy papírt, hogy soha nem beszélek. Örült.” Felnéz. „Az ampullát a karjába adtam, amikor a teáját kavarta. Utána leültem mellé, és vártam, hogy elaludjon. Olyan volt, mint a betegek. Mind olyanok.”", f:"erika_vallott"},
  {id:"kedd", l:"Hol volt kedd éjjel?", req:["v2_found"], t:"„A kórházban. Éjszakás voltam, hét órától hétig.” Felnéz. „A fiú? A kertész? Nem tudtam, hogy ott volt vasárnap. Ha tudom…” Nem fejezi be."}
 ]},
 patikus:{n:"Szabó Éva", r:"kórházi gyógyszertárvezető", loc:"korhaz", h:[8,16], bio:"55 éves, a kórházi gyógyszertár vezetője. Minden ampullát számon tart, és ha egy hiányzik, az neki személyes sértés.", topics:[
  {id:"hiany", l:"Hiányzik valami mostanában?", req:["midazolam"], sober:1, t:"Elsápad, aztán előveszi a naplót. „Hétfőn észleltük. Vasárnap két ampulla midazolamot írtak ki egy betegre, aki nem kapta meg.” Leteszi eléd. „Belső vizsgálatot indítottam. Nem akartam elhinni, kinek a neve van rajta.”", doc:"gyogyszertar"},
  {id:"muszak", l:"Ki dolgozott kedd éjjel a traumatológián?", req:["met_erika"], t:"„Kedd éjjel? Kónya Attiláné, hét órától reggel hétig. Három műtétnél is asszisztált. Egy percre sem ment ki.”", ev:"erika_ejjeles"}
 ]},
 anya:{n:"Dudás Irén", r:"Máté anyja", loc:"kunhaz", h:[8,20], vis:"v2_found", bio:"47 éves. Bolti eladó. A bal karja gipszben, és amikor kérdezed, azt mondja, elesett a lépcsőn. Mindig a lépcsőn esik el.", topics:[
  {id:"mate", l:"Máté", t:"„Jó fiú volt. Mindig vigyázott rám.” Nem sír. A sírást már régen leszokta. „Azt mondta, elmegyünk. Hogy kivesz egy albérletet Pesterzsébeten, két szobát.”"},
  {id:"kedd", l:"Mi történt kedd este?", sober:1, req:["met_kun"], t:"Az ajtó felé néz, ahol Kun áll. Aztán a gipszére. Aztán rád. „Zoli tízkor elment Máté után. A gátra. Mondtam neki, hogy ne menjen.” Elhallgat. „Éjfél után jött haza. Lemosta a lapátot. Éjfélkor, főhadnagy. Ki mos le éjfélkor egy lapátot?”", ev:"kun_hazudik", f:"anya_vallott"},
  {id:"bantalmazas", l:"A karjáról", sober:1, req:["met_kun"], t:"Sokáig hallgat. „Tizenöt éve. Három feljelentés. Mindhármat visszavontam, mert különben…” Nem fejezi be. „Máté tizenkét éves volt, amikor először közénk állt. Eltört a karja.”", ev:"kun_eroszak"}
 ]},
 kun:{n:"Kun Zoltán", r:"Máté mostohaapja", loc:"kunhaz", h:[6,22], vis:"v2_found", suspect:1, bio:"52 éves, kőműves, széles váll, kemény kéz. Mosolyog, amikor beszél, és minden mondata végén a feleségére néz.", topics:[
  {id:"kedd", l:"Hol volt kedd este?", t:"„Itthon, néztem a meccset. A Fradi kikapott.” Mosolyog. „A fiú? Részeg volt, biztos beleesett a vízbe. Mindig is gyenge volt.”", f:"met_kun"},
  {id:"lapat", l:"Szembesít: a lapát", req:["kun_lapat_ded|kun_hazudik"], sober:1, t:"A mosoly eltűnik. „Homokzsákoztam. A gáton mindenki homokzsákoz.” Közelebb lép. „Maga részeg zsaru, főhadnagy. Mindenki tudja. Ki fog magának hinni?” A felesége az ajtóban áll, és most először nem néz le."}
 ]},
 onkentes:{n:"Pásztor Gergely", r:"árvízvédelmi önkéntes", loc:"gat", h:[0,24], vis:"v2_found", bio:"34 éves, informatikus, három napja homokzsákoz a gáton. Vizes, fáradt, és nagyon pontos.", topics:[
  {id:"kedd", l:"Látott valakit kedd éjjel?", sober:1, t:"„Tizenegy körül két férfit a gát tetején, a zsilip felé. Egy fiatalt, gumicsizmában, és egy idősebbet, széles vállút, homokzsáklapáttal. Veszekedtek, a fiatal kiabált valamit, hogy »elmegyünk«.” Megtörli a szemüvegét. „Aztán eleredt az eső, és nem láttam semmit. Fél óra múlva már csak egy embert láttam visszafelé.”", ev:"kun_gat"}
 ]},
 lili:{n:"Mátrai Lili", r:"a lányod", loc:"lilihaz", h:[17,21], bio:"17 éves. Az anyja áprilisban Bécsbe költözik egy állás miatt, és vinné Lilit is. Lili a bécsi konzervatóriumba felvételizne. Ehhez a te beleegyezésed is kell.", topics:[
  {id:"beszel", l:"Beszéltek", dyn:"liliBeszel"},
  {id:"elenged", l:"Beleegyezel, hogy Bécsbe menjen", req:["lili_beszelt","!lili_reszeg"], excl:"marasztal", t:"Aláírod. Lili nézi, ahogy írsz. „Nem leszel egyedül?” kérdezi. Ilyet még soha nem kérdezett. Azt mondod, nem. Nem tudod, igaz-e. „Hétvégente hazajövök. Vagy te jössz. Bécsben is van Hordó, gondolom.” Nevet, és te is.", f:"lili_elenged"},
  {id:"marasztal", l:"Arra kéred, maradjon", req:["lili_beszelt","!lili_reszeg"], excl:"elenged", t:"„Maradj. Itt is van konzervatórium.” Lili sokáig néz. Aztán bólint, lassan. „Jó. Maradok. De akkor te is maradj, apa. Józanul.” Az anyja a konyhaajtóban áll, és nem szól semmit. Nem is kell.", f:"lili_marad"}
 ]},
 sanyi:{n:"Sanyi", r:"NA-gyűlés, szponzor", loc:"aa", h:[18,21], bio:"68 éves, nyugdíjas mozdonyvezető, huszonkét éve józan. Lassan beszél, és mindenkit „testvér”-nek szólít, de nála ez nem fenyegetés.", topics:[
  {id:"ul", l:"Leülsz a körbe", mins:90, eff:{crave:-40}, t:"Leülsz a sor végére. Egy fiatal nő a kokainról beszél, egy öregember a feleségéről, aki elhagyta. Te nem beszélsz. Kilencven perc. Amikor kijössz, esik az eső, és egy órán át nem gondolsz arra, hogy inni kellene.", f:"aa1"},
  {id:"beszel", l:"Megszólalsz", req:["aa1"], mins:90, eff:{crave:-35}, t:"„Dénes vagyok.” A hangod idegen. „Alkoholista vagyok.” Senki nem tapsol, senki nem néz rád furcsán. Valaki bólint. Elmondod a kiesett éjszakát januárban, a sálat a fán, apádat. Sanyi a végén megszorítja a kezed. „Csak a mai nap, testvér. Holnappal ráérsz holnap.”", f:"aa_beszed"},
  {id:"ujra", l:"Újra eljössz", req:["aa_beszed"], rep:1, mins:90, eff:{crave:-30}, t:"Ugyanaz a pince, ugyanaz a kávé. Már tudod, hova kell ülni. Ez is valami."}
 ]},
 laci:{n:"Laci", r:"kocsmáros", loc:"hordo", h:[15,3], bio:"A Hordó kocsmárosa. Homokzsákokon áll a pult mögött.", topics:[
  {id:"kata", l:"Kata vasárnap este", req:["kata_vallott|kata_villa"], t:"„Kata? Tíz után jött, leült Bokszos mellé. Nem ivott sokat, csak ült. Egykor Bokszos hazakísérte.” Törölgeti a poharat. „Úgy nézett ki, mint aki most temetett el valakit.”", ev:"kata_alibi"},
  {id:"pletyka", l:"Mit beszélnek?", t:"„Hogy Somogyi végre megtette, amit kellett.” Vállat von. „Aki ismerte, nem hiszi. Az ilyen ember nem lövi fejbe magát. Az ilyen ember mást lövet fejbe.”"}
 ]},
 bokszos:{n:"Szikszai „Bokszos” Imre", r:"gyerekkori barát", loc:"hordo", h:[19,2], bio:"47 éves, volt bokszoló. Mostanában kevesebbet iszik, és ezt nem kommentálja.", topics:[
  {id:"kata", l:"Kata vasárnap", req:["kata_villa|kata_anpr|kata_vallott"], t:"„Kata itt ült velem tíztől egyig. Az apjáról beszélt. Azt mondta, elment Somogyihoz, hogy a szemébe mondja, és Somogyi kinevette.” Leteszi a poharat. „Egykor hazakísértem. Ő nem ölt meg senkit, Dénes. Ő csak sírt.”", ev:"kata_alibi"},
  {id:"regi", l:"Csak beszélgettek", rep:1, dyn:"bokszosTalk"}
 ]},
 nora:{n:"Nóra", r:"régi ismerős", loc:"nora", h:[20,4], gone:"nora_help", bio:"31 éves, még mindig a VIII. kerületben. Azt mondja, idén nyáron kiszáll. Tavaly is ezt mondta.", topics:[
  {id:"ora", l:"Maradsz nála egy órát (8 000 Ft)", rep:1, cost:8000, mins:60, eff:{crave:-25}, dyn:"noraTalk"}
 ]},
 apasir:{n:"Mátrai Gyula sírja", r:"apád", loc:"temeto", h:[8,18], vis:"apa_halal", bio:"Mátrai Gyula r. főhadnagy, 1952–2027. A fejfa előtt friss virág. Keleti doktornő hozta.", topics:[
  {id:"beszel", l:"Beszélsz hozzá", rep:1, eff:{crave:-15}, dyn:"apaSir"}
 ]}
},

tasks:[
 {id:"boncolas_s", l:"Somogyi boncolása", req:["body1"], dur:300, fit:{keleti:1}, doc:"boncolas_s", ok:"Keleti végzett Somogyival. Azt üzeni, az ügyészségnek még nem küldte el."},
 {id:"anpr", l:"Rendszámolvasó-adatok lekérése", req:["body1"], dur:240, fit:{bence:.92, kata:.8, bodnar:.7}, doc:"anpr", ok:"Megjöttek a Szentendrei út rendszámolvasó adatai. Bence sápadt.", fail:"A közútkezelő rendszere az árvíz miatt nem elérhető. Holnap újra."},
 {id:"kaszino", l:"Berkes kaszinós alibijének ellenőrzése", req:["berkes_kaszino"], dur:180, fit:{bence:.9, kata:.8, bodnar:.85}, doc:"kaszino", ok:"Megjött a kaszinó kamerafelvételének kivonata."},
 {id:"legitarsasag", l:"Andrea útjának ellenőrzése", req:["met_andrea"], dur:180, fit:{bence:.92, kata:.85}, ev:"andrea_hazudott", ok:"A légitársaság szerint Andrea vasárnap 17:00-kor Budapesten szállt le, nem hétfőn.", fail:"A légitársaság adatvédelmi okból visszadobta. Újra kell kérni."},
 {id:"hotel", l:"Andrea szállodájának ellenőrzése", req:["andrea_szallo"], dur:180, fit:{bence:.88, kata:.85}, doc:"hotel", ok:"Megvan Andrea szállodája, és a kamerafelvétel."},
 {id:"kata_auto", l:"Kata autójának átvizsgálása", req:["kata_anpr|kata_villa"], dur:120, fit:{bence:.9, halasz:.85}, doc:"kata_auto", loy:{kata:-25}, warn:"<h2>Ezt Kata nem fogja elfelejteni</h2><p>Bence a kulcsot kéri Katától. Kata odaadja, szó nélkül, és rád néz a folyosó végéről. Nem dühös. Csak nagyon fáradt.</p>", ok:"Bence lezárta Kata autójának átvizsgálását."},
 {id:"boncolas_m", l:"Dudás Máté boncolása", req:["body2"], dur:300, fit:{keleti:1}, doc:"boncolas_m", ok:"Keleti végzett a fiúval. A hangja rekedt a telefonban."},
 {id:"telefon_m", l:"Máté telefonjának kiolvasása", req:["mate_telefon"], dur:240, fit:{halasz:.95, bence:.8}, doc:"mate_kepek", ok:"Halász kiolvasta Máté telefonját.", fail:"A telefon a szárítás közben újra leállt. Halász újrapróbálja."}
],

leads:[
 {need:["body1"], not:["doc:boncolas_s"], x:"Somogyi boncolása még hátravan (Stáb). Csütörtök reggelig kell bizonyíték, különben öngyilkosságként lezárják."},
 {need:["body1"], not:["doc:anpr"], x:"A villához egyetlen út vezet, rajta rendszámolvasó kamera. Bence lekérheti (Stáb)."},
 {need:["body1"], not:["balkezes"], x:"A házvezetőnő tizenkét éve ismerte Somogyit. Kérdezd meg, hogy találta meg."},
 {need:["midazolam"], not:["korhazi_hiany"], x:"Midazolam volt Somogyi vérében. Ilyet kórházban könnyű szerezni. Melyik kórházban dolgozik valaki, akinek oka volt rá?"},
 {need:["kata_villa|kata_anpr"], not:["kata_alibi"], x:"Kata vasárnap este a villában volt. Kérdezd meg őt, és kérdezd meg azokat, akik utána látták."},
 {need:["berkes_kaszino"], not:["berkes_alibi"], x:"Berkes szerint a kaszinóban volt hajnalig. Ellenőrizhető (Stáb)."},
 {need:["met_andrea"], not:["andrea_hazudott","andrea_hotel"], x:"Andrea szerint Bécsben volt. Ellenőrizhető (Stáb)."},
 {need:["andrea_szallo"], not:["andrea_hotel"], x:"Andrea egy szállodában volt valakivel. Ellenőrizhető (Stáb)."},
 {need:["v2_found"], not:["mate_test"], x:"Holttest a csepeli gát tövében. Nézd meg a helyszínt."},
 {need:["mate_telefon"], not:["doc:mate_kepek"], x:"Máté telefonja vizes, de ép. Halász kiolvashatja (Stáb)."},
 {need:["body2"], not:["doc:boncolas_m"], x:"Máté boncolása még hátravan (Stáb)."},
 {need:["piros_suzuki"], not:["erika_auto","suzuki_anpr"], x:"KSN, piros Suzuki Swift. Kinek van ilyen autója? A rendszámolvasó is megmondhatja."},
 {need:["v2_found"], not:["kun_gat"], x:"A gáton éjjel-nappal önkéntesek dolgoznak. Valaki láthatott valamit kedd éjjel."},
 {need:["met_kun"], not:["kun_eroszak"], x:"Máté anyja a bal karját gipszben hordja. Beszélj vele, amikor Kun nem figyel."},
 {need:["met_erika"], not:["erika_ejjeles"], x:"Hol volt Erika kedd éjjel, amikor Máté meghalt? A kórházi gyógyszertárban tudják, ki dolgozott."},
 {need:["aa_inv"], not:["aa1"], x:"Fehér doktornő adott egy címet: Szent József-templom, alagsor, minden este hattól."},
 {need:["lili_inv"], not:["lili_beszelt"], x:"Csütörtök este Lili és az anyja vár Budán (17–21). Döntened kell valamiről."}
],

timed:[
 {id:"hirlap1", at:480, front:S=>({h:S.f.somogyi_bukik?"Halott a bukott főkapitány":"Halott a város főkapitánya",s:"Somogyi Kristófot dunaparti villájában találták meg, fejlövéssel",b:"A rendőrség nem nyilatkozott, de lapunk értesülése szerint búcsúlevelet hagyott. Az ügyészség „gyors lezárást” ígér. Fazekas Ádám főszerkesztő: „Gál Eszter már nem írhatja meg, mi történt. Mi majd igen.”"})},
 {id:"feher", at:720, x:"<b>Dr. Fehér Judit:</b> Ha ráér, nézzen be hozzám. Nem az alkalmasság miatt. Csak úgy."},
 {id:"lili", at:1200, f:"lili_inv", x:S=>S.f.lili_alairas?"<b>SMS, Lili:</b> Anya csütörtökön beszélni akar veled. Én is. 5 után otthon vagyunk. Fontos.":"<b>SMS, Lili:</b> Csütörtökön 5 után gyere át. Anya akar valamit. Én is. Fontos."},
 {id:"v2", at:2*1440+420, f:"v2_found", modal:"<h2>Szerda, 07:00 – telefon</h2><p>Bence: „Csepel, a gát töve. Egy fiatal fiú, a víz hozta vissza.” Szünet. „Dudás Máté, huszonkét éves. Somogyi kertésze volt, Dénes.”</p>"},
 {id:"hirlap2", at:3*1440+420, front:{h:"Halott a főkapitány kertésze",s:"Összefügg a két haláleset?",b:"A csepeli gát tövében talált fiatal férfi Somogyi Kristóf villájában dolgozott kertészként. A rendőrség nem zárja ki az összefüggést. Lapunk értesülése szerint az ügyészség csütörtökön dönt Somogyi halálának minősítéséről."}},
 {id:"lezaras", at:3*1440+480, unless:"nem_ongyilkos", pat:-30, modal:"<h2>Csütörtök, 08:00</h2><p>Az ügyészség bejelenti: Somogyi Kristóf halála öngyilkosság, a nyomozás megszűnt. A sajtótájékoztatón senki nem kérdez. A folyosón a főnököd elmegy melletted, és nem néz rád.</p><p class=\"mut\">A nyomozást csak akkor nyithatod újra, ha bizonyítod, hogy nem öngyilkosság volt.</p>"},
 {id:"nora_hiv", at:2*1440+1260, req:["nora_help"], modal:"<h2>Szerda, 21:00 – telefon, Szeged</h2><p>Nóra: „Egy pékségben dolgozom. Hajnali négytől. Képzeld el.” Nevet. „Lisztes vagyok mindig. Senki nem tudja, ki voltam.” Csend. „Olvastam Somogyiról. Ne sajnáld, Dénes. És ne igyál miatta.”</p>"},
 {id:"vege", at:6*1440+1200, unless:"verd_all", pat:-500, modal:"<h2>Vasárnap, 20:00</h2><p>Az ügyészség véglegesen lezárja: Somogyi öngyilkos lett, Dudás Máté részegen a vízbe esett. Az akták lekerülnek a pincébe, ahol még áll a víz.</p>"}
],

locEvents:[
 {id:"kata1", loc:"kapitanysag", when:S=>!!(S.ev.kata_anpr||S.ev.kata_villa), html:"<h2>Kata az ablaknál</h2><p>Az iroda ablakánál áll, és a megáradt Dunát nézi. Nem fordul meg, amikor belépsz. „Tudom, hogy tudod, Dénes.” Csend. „Kérdezz meg. Most. Mielőtt más kérdez.”</p>"},
 {id:"drunk", loc:"kapitanysag", when:(S,h,A)=>A.inWin(h,[7,19])&&S.alc>55, pat:-15, html:"<h2>Megszagolnak</h2><p>A főnököd a folyosón megáll melletted, és nem mond semmit. Nem is kell.</p>"}
],

dyn:{
  annaEste(S){
    if((S.drinks||0)>0||S.alc>20)return'„Ma nem, Dénes.” Megérinti az arcodat, ott, ahol a borosta szúr. „Érzem rajtad. Majd ha nem.”';
    S.f.anna_egyutt=S.t;return'„Kilenc után végzek.” Nem kérdés. Kilenckor ott áll a kapud előtt, egy szatyor zöldséggel, és azt mondja, hogy a rendőrök nem esznek rendesen, ezt is tudja a volt férjéről. Éjjel nem beszéltek az ügyről. Ez az első éjszaka hónapok óta, amikor nem álmodsz a folyóról.';
  },
  annaOtthon(S){
    const A=['Anna levest főz, és közben a műtőről mesél: egy motoros, aki kétszer is elesett, egyszer a motorral, egyszer a kórházi lépcsőn. Te nevetsz. Ő is.',
      '„Erikáról akarsz beszélni?” Nem. „Jó. Én sem.” Csendben ültök, és a csend most nem nehéz.',
      'Anna elalszik a kanapén, a fejét a válladra hajtja. Nem mozdulsz, amíg a lábad el nem zsibbad. Akkor sem.'];
    S.f.ao=(S.f.ao||0)+1;return A[(S.f.ao-1)%A.length];
  },
  hintBence(S){
    if(!S.docs.anpr)return'„A villához egyetlen út vezet, rajta rendszámolvasó. Lekérem.”';
    if(S.ev.kata_anpr&&!S.ev.kata_alibi)return'„Kata kocsija ott volt, Dénes.” Lenéz. „De fél tízkor már eljött. És a halál ideje fél tizenegy után van. Kérdezd meg, hova ment utána.”';
    if(S.ev.mate_telefon&&!S.docs.mate_kepek)return'„A fiú telefonját Halász kiolvashatja. Lehet, hogy látott valamit vasárnap.”';
    return'„Szerintem ez nem öngyilkosság. Az ilyenek nem lőnek. Az ilyenek elmenekülnek.”';
  },
  hintKata(S){
    if(S.ev.kata_villa||S.ev.kata_anpr)return'„Ott voltam. Igen. Kérdezz meg rendesen.”';
    return'Nem néz fel a monitorról. „Öngyilkosság. Ezt mondja mindenki.” A hangja nem remeg. Csak túl egyenletes.';
  },
  hintHalasz(S){
    if(S.ev.mate_telefon&&!S.docs.mate_kepek)return'„A telefont szárítom. Ha kibírja, kiolvasom.”';
    if(S.ev.kun_lapat&&!S.ev.kun_lapat_ded)return'„Egy frissen lemosott lapát egy sáros fészerben? Nézd meg, mit mond Keleti a tarkóról.”';
    return'„Hozz valamit, és megmondom, mi az.” Az Omega szól. A pince felől zúg a szivattyú.';
  },
  kataVasarnap(S){
    S.f.kata_vallott=S.t;
    if(S.f.kata_titok)return'„Elmentem hozzá. Kilenckor. Az apám halálának jelentésével, az eredetivel.” Leül. „A szemébe akartam mondani. Kinevetett. Azt mondta, Halmos ül, ő szabad, és az apám halott, és ez így marad.” Rád néz. „Fél tízkor eljöttem. Sírtam a kocsiban, mint egy gyerek. Nem öltem meg, Dénes. Akartam. De nem öltem meg.”';
    return'Sokáig hallgat. „Ott voltam. Kilenctől fél tízig.” Összefonja a karját. „Azért mentem, hogy a szemébe mondjam, amit tudok. Kinevetett.” Felnéz. „Nem öltem meg, Mátrai. Ha nem hiszed, nézz utána. Ezt tanítottad.”';
  },
  liliBeszel(S){
    S.f.lili_beszelt=S.t;
    if(S.alc>40){S.f.lili_reszeg=S.t;return'Az anyja nyit ajtót, és egy pillanat alatt látja rajtad. „Ma nem, Dénes.” Lili a háta mögül néz, és nem szól semmit. A papír az asztalon marad, aláíratlanul.'}
    return'Az anyja teát főz, Lili a zongoránál ül. „Anya áprilisban Bécsbe megy. Kapott egy állást” — mondja Lili. „Ha vele megyek, felvételizhetek a konzervatóriumba. Ha maradok, itt fejezem be a sulit.” Rád néz. „Te mit szeretnél, apa?” Most először kérdezi meg, mit szeretnél.';
  },
  apaSir(S){
    const A=['Leguggolsz a fejfa mellé. Elmondod neki az ügyet, ahogy régen, a konyhaasztalnál. Ő mindig a végén szólalt meg, és mindig azt kérdezte: és ki járt jól?',
      'Nem mondasz semmit. A Farkasrét felett varjak köröznek. Egy idő után rájössz, hogy nem kell beszélni ahhoz, hogy valaki meghallgasson.',
      '„Elmegyek a gyűlésre, apa.” Kimondod hangosan. Egy idős asszony a szomszéd sírnál felnéz, aztán vissza a virágaira.'];
    S.f.as=(S.f.as||0)+1;return A[(S.f.as-1)%A.length];
  }
},
rejectExtra:{kata:'<p>Kata az ajtóban áll, amikor kijössz az ügyésztől. Nem kérdez semmit.</p>'},
bonus:function(S){const b=[];if(S.f.kata_vad)b.push([-15,'Katát vádoltad meg']);if(S.f.aa_beszed)b.push([5,'Megszólaltál a gyűlésen']);if((S.drinks||0)===0)b.push([5,'Egy kortyot sem ittál']);if(S.fired['tm:lezaras']&&!S.f.nem_ongyilkos)b.push([0,'']);return b.filter(x=>x[1])},
solveGoal:["erika_villanal","erika_midazolam","erika_inditek","kun_lapat_ded","kun_inditek","kun_gat","nem_ongyilkos"],

end:{
 title:function(S){return(S.verd.v1&&S.verd.v1.ok&&S.verd.v2&&S.verd.v2.ok)?"Ügy lezárva":"Ügy lezárva – de nem úgy"},
 multi:function(S){
  const V=S.verd,ok=v=>V[v]&&V[v].ok;let t="";
  if(ok("v1"))t+="<p>Kónya Attiláné a kihallgatóban ugyanúgy ül, mint a konyhaasztalánál: a kezét az asztalra teszi, nyugodtan. Mindent elmond. A teát, az ampullát, a kezet, amit a fegyverre igazított. A búcsúlevelet, amit otthon írt meg, hetekkel korábban.</p><p>A végén csak ennyit kérdez: „Mennyi jár érte?” Megmondod. Bólint. „Attiláért ennyit.”</p>";
  else if(V.v1&&V.v1.s==="kata")t+="<p>Rácz Katát őrizetbe veszik Somogyi Kristóf meggyilkolásának gyanújával. Nem tiltakozik. A kihallgatáson egyetlen mondatot mond, és az neked szól: „Ezt tanítottad, Dénes. Hogy nézzek utána.” Te nem néztél.</p><p>Hat héttel később a Szent János kórház belső vizsgálata egy hiányzó ampulla miatt megkeres egy ápolónőt. Az ápolónő mindent beismer. Kata szabadul. Soha többé nem szól hozzád.</p>";
  else if(V.v1)t+="<p>Az ügyészség vádat emel. A tárgyalás hónapokig húzódik, és a végén a vádlottat felmentik. Somogyi gyilkosa egy újpesti konyhaasztalnál ül minden este, egyedül, és vár. Senki nem jön.</p>";
  if(ok("v2"))t+="<p>Kun Zoltánt a gát tövében tartóztatják le, homokzsákozás közben. Mosolyog, amikor megbilincselik, és a feleségére néz. Dudás Irén most először nem néz le. A gipszes kezével becsukja az ablakot.</p>";
  else if(V.v2)t+="<p>Dudás Máté ügyét lezárják. Kun Zoltán a temetésen a koporsó mellett áll, és a felesége vállát fogja. Erősen.</p>";
  if(S.f.lili_elenged)t+="<p>Áprilisban kikíséred Lilit és az anyját a Keleti pályaudvarra. Lili az ablakból integet, amíg a vonat ki nem ér a csarnokból. Hazafelé nem mész be a Hordóba. Ma nem.</p>";
  else if(S.f.lili_marad)t+="<p>Lili Budán marad, az anyja nélkül, nálad. A kis szobát kifested neki, rosszul. Ő átfesti, jól. Esténként zongorázik, és te hallgatod a fal mögül.</p>";
  else if(S.f.lili_reszeg)t+="<p>Áprilisban Lili Bécsbe költözik az anyjával. Az aláírást egy ügyvéd intézte el helyetted. Egy képeslapot küld a konzervatóriumból: <i>Felvettek.</i> Semmi más.</p>";
  if(S.f.aa_beszed)t+="<p>Szerda este a Szent József-templom alagsorában ülsz, a sor végén. Sanyi bólint, amikor belépsz. Valaki más beszél, egy fiatal fiú. Hallgatod. Csak a mai nap.</p>";
  else if(S.f.aa1)t+="<p>Egyszer voltál a gyűlésen. A cetlit Fehér doktornőtől a pénztárcádban hordod. Talán jövő héten újra.</p>";
  if(S.f.apa_halal)t+="<p>Vasárnap kimész Farkasrétre. Friss virágot viszel. Elmondod apádnak, hogyan zárult az ügy, és mit kérdezett volna ő a végén: ki járt jól? Ezúttal senki. Ezúttal ez a válasz.</p>";
  if(S.f.anna_egyutt&&S.f.erika_vad)t+="<p>Anna három napig nem hív. A negyedik este becsönget, kisírt szemmel. „Bementem hozzá. Azt mondta, te voltál az egyetlen, aki rendesen beszélt vele.” Leül a konyhában. „Utállak egy kicsit. Maradhatok?”</p>";
  else if(S.f.anna_egyutt)t+="<p>Anna fogkeféje a fürdőszobádban. Nem beszéltetek róla. Egyszerűen ott van.</p>";
  else if(S.f.anna_erika)t+="<p>Anna azt mondta, ne hazudj se neki, se magadnak. Nem hazudtál. Most már csak fel kéne hívnod.</p>";
  return t;
 },
 fired:"<p>Az ügyészség lezárja: öngyilkosság és baleset. A két akta lekerül a pincébe, ahol még áll a víz.</p><p>A Hordóban ülsz. Laci tölt, és te nézed a poharat. Hosszan.</p>"
}
};
