// ===== 8. ÜGY: HAMU =====
CASES.c8 = {
id:"c8", num:"8. ügy ·", title:"Hamu", tagline:"Január. Egy csepeli panelház tizedik emeletén éjjel háromkor tűz ütött ki. Három halott, és egy füstérzékelő, ami nem szólt.",
date:[2028,0,17], par:4, variants:["a","b"],
order:["bako","nemeth","kantor"],
start:{t:330, loc:"panel"},
onStart:function(S,A){S.f.body=1;S.alc=S.f.aa_beszed?0:20;S.fat=40;S.crave=S.f.aa_beszed?30:30;A.addEv("tuz_halottak")},
intro:function(S,A){
  let t="<p>Hétfő, január 17., 05:30. Csepel, Vízművek utca 4. Mínusz kilenc fok. A tűzoltók vize jéggé fagyott a járdán, a tizedik emeleti ablakokból még száll a füst, fehéren, a fekete égbe.</p>";
  t+="<p>Három halott. Szűcs Margit, 84 éves, az ágyában. Hajdú Ferenc, 79 éves, a saját előszobájában, a kabátjában, mintha el akart volna menni. És Rostás Dániel, 27 éves futár, a lépcsőházban, a tizedik és a kilencedik emelet között. Ő nem ott lakott. Ő a szomszéd nénit akarta lehozni.</p>";
  t+="<p>A tűzoltó tűzvizsgáló a kapuban vár. „Szándékos, főhadnagy. Hígító. És a füstérzékelő nem szólt.”</p>";
  if(S.f.lajos_1994)t+="<p>Négyen voltak a Révészen. Egy öregember kalappal és bottal pénzt hordott szét a kikötőben. Erre gondolsz, miközben a lépcsőn felmész. Nem tudod, miért éppen most.</p>";
  if(S.f.anna_pecs_igen||S.f.anna_pecs_rossz)t+="<p>Detti hat hete Pécsett van. Tegnap este azt írta: <i>„Hívj, ha tudsz.”</i> Nem tudtál.</p>";
  else if(S.f.anna_egyutt)t+="<p>Detti ma reggel ügyel a Szent Jánosban. A sérülteket oda viszik.</p>";
  return t;
},

suspects:{
 bako:{name:"Bakó Richárd", short:"Bakó", reveal:["met_bako","met_bako_h"]},
 nemeth:{name:"Németh Krisztián", short:"Németh", reveal:["met_nemeth"]},
 kantor:{name:"Kántor Gábor", short:"Kántor", reveal:["met_kantor"]}
},
solution:{$v:{a:{main:"bako"},b:{main:"nemeth"}}},
bossLine:"„Három halott, egy panelház, egy egész kerület figyel, Mátrai. Ez nem az ügy, amit elszúrhatunk.”",

ev:{
 tuz_halottak:{n:"Tűz a tizedik emeleten", d:"Hétfő 03:10 körül tűz ütött ki a Vízművek utca 4. tizedik emeletén, az üresen álló 10/3-as lakásnál. Három halott: Szűcs Margit (84), Hajdú Ferenc (79), Rostás Dániel (27)."},
 higito:{n:"Nitrohígító", d:"A tűzvizsgáló szerint a tüzet nitrohígítóval gyújtották. A folyosói tárolóban a felújító brigád húsz liter hígítót tartott, a tároló ajtaja lakat nélkül."},
 boncolas_ok:{n:"Füst és szénmonoxid", d:"Mindhárom áldozat szénmonoxid-mérgezésben halt meg, perceken belül. A tűz gyors volt, a füst gyorsabb. Ha a füstérzékelő szól, mindhárman kijutnak."},
 bako_felvasarlas:{n:"Hat lakás a nyolcból", d:"Bakó Richárd ingatlanbefektető egy év alatt megvette a tizedik emelet nyolc lakásából hatot. Loftlakásokat akar belőlük. Három lakó nem akart eladni: Szűcs Margit, Hajdú Ferenc és a bérlő Németh.", sup:[["bako","I"]]},
 bako_adossag:{n:"Bakó hitelei", d:"A Bakó Ingatlan Kft. 600 millió forint bankhitellel vette a lakásokat. A hitel márciusban lejár, és a projekt addig nem indulhat el, amíg a régi lakók ott laknak.", sup:[["bako","I"]]},
 bako_kulcs:{n:"Okoszár", d:"Bakó a megvett lakásokba okoszárat szereltetett, amit telefonról nyit. Adminisztrátor ő maga. A 10/3-as kulcsa csak az övé és a brigádvezetőé.", sup:[["bako","A"]]},
 bako_higito:{n:"Bakó hígítója", d:"A folyosói tárolóban tartott hígítót Bakó brigádja használta, az ő cége vette. Bakó tudta, hol van, mennyi van, és hogy nincs rajta lakat.", sup:[["bako","M"]]},
 nemeth_kilakoltatas:{n:"Február elsejéig", d:"Németh Krisztián a 10/5-ben bérlő volt. Amikor Bakó megvette a lakást, felmondta a bérletét. Február elsejéig kellett kiköltöznie, a feleségével és a két gyerekével, sehová.", sup:[["nemeth","I"]]},
 nemeth_fenyeget:{n:"„Felgyújtom az egészet”", d:"Decemberben Németh a folyosón ordított Bakóval, a szomszédok hallották: „Inkább felgyújtom az egészet, mint hogy a tiéd legyen!”", sup:[["nemeth","I"]]},
 nemeth_szomszed:{n:"Két ajtóval odébb", d:"Németh lakása, a 10/5 két ajtóval van a 10/3-tól. A folyosói tároló az ő ajtaja mellett nyílik.", sup:[["nemeth","A"]]},
 nemeth_tarolo:{n:"Németh a tárolónál", d:"Németh decemberben két hétig a brigádnak segített, feketén, napszámban. Ő hordta fel a hígítós kannákat a tárolóba.", sup:[["nemeth","M"]]},
 kantor_gyujtogatas:{n:"Kántor régi ügye", d:"Kántor Gábor, a ház gondnoka 1999-ben felgyújtotta a volt felesége autóját. Két év, felfüggesztve.", sup:[["kantor","M"]]},
 kantor_kulcs:{n:"A gondnok kulcsai", d:"Kántor kulcscsomóján a ház összes lakásának pótkulcsa ott van, a régi zárakhoz.", sup:[["kantor","A"]]},
 kantor_kirugas:{n:"Kántor felmondása", d:"Bakó elérte a lakóközösségnél, hogy Kántort február végével elküldjék. Bakó szerint egy loftházba portaszolgálat kell, nem gondnok.", sup:[["kantor","I"]]},
 kantor_kazan:{n:"A kazánház kamerája", d:"A pinceajtó kamerája szerint Kántor 00:40-től 03:12-ig a kazánházban volt, a hibás keringető szivattyút javította. 03:12-kor futni kezd, ő riasztja a tűzoltókat.", clears:"kantor"},
 hajdu_doboz:{n:"Hajdú bádogdoboza", d:"Hajdú Ferenc kredencében egy bádogdoboz: üres borítékok, mind horgonyos pecséttel, a régi kikötői raktár pecsétjével. Az előszobában egy kalap és egy bot. A doboz alján egy kompjegy, 1994. november 9."},
 // A változat
 tuz_belul:{var:"a", n:"Belülről", d:"A tűzvizsgálat szerint a tűz a 10/3 belsejében, a nappali közepén kezdődött, három gyújtási ponttal, hígítóval öntött nyomvonalakkal. Az ajtó belülről égett ki.", sup:[["bako","A"]]},
 zar_bako:{var:"a", n:"02:52, BR (admin)", d:"Az okoszár naplója szerint a 10/3 ajtaját hétfőn 02:52-kor nyitották, a BR admin felhasználóval, telefonos alkalmazásból. 02:58-kor zárták.", sup:[["bako","A"]]},
 anpr_bako:{var:"a", n:"A fekete Audi", d:"Bakó fekete Audija a rendszámfelismerő kamerák szerint 02:38-kor ment át a Csepeli gerincúton befelé, 03:06-kor kifelé.", sup:[["bako","A"]]},
 erzekelo_elem:{var:"a", n:"Elem nélkül", d:"A 10/3-as lakás füstérzékelőjéből kivették az elemet. A műanyag fedélen friss ujjnyomat: Bakó Richárd.", sup:[["bako","M"]]},
 biztositas_emeles:{var:"a", n:"Negyvenmillió", d:"Bakó decemberben a 10/3-as lakás biztosítását tízről negyvenmillió forintra emelte, „felújítás alatti értéknövekedés” címén.", sup:[["bako","I"]]},
 nemeth_baratno:{var:"a", n:"Vivien ajtókamerája", d:"Németh vasárnap este tízkor ment át a barátnőjéhez, Vivienhez, Kispestre. Az ajtókamera szerint reggel hétig ki se lépett.", clears:"nemeth"},
 bako_bent:{var:"a", n:"Hat perc a lakásban", d:"02:52-kor Bakó telefonja nyitotta a 10/3-at. A tűz belülről indult, három ponton. 03:06-kor az Audija már kifelé ment Csepelről.", sup:[["bako","A"]], ded:true},
 bako_elokeszit:{var:"a", n:"Előkészítve", d:"Kivett elem, kiöntött hígító, három gyújtási pont. Ezt nem dühből csinálta valaki. Valaki kiszámolta, mennyi idő kell, hogy a ház leégjen, mielőtt bárki felébred.", sup:[["bako","M"]], ded:true},
 bako_penz:{var:"a", n:"Hitel és biztosítás", d:"Márciusban lejár a hatszázmilliós hitel. Decemberben negyvenmillióra emelt biztosítás egy üres lakásra. Egy leégett emeletről a régi lakók is elköltöznek.", sup:[["bako","I"]], ded:true},
 // B változat
 tuz_kivul:{var:"b", n:"Kívülről", d:"A tűzvizsgálat szerint a hígítót az ajtó alatt és a levélbedobó nyíláson át folyatták be a 10/3-ba, a folyosóról. A tűz az ajtónál kezdődött, kívülről befelé.", sup:[["nemeth","A"]]},
 zar_zarva:{var:"b", n:"Zárt ajtó", d:"Az okoszár naplója szerint a 10/3 ajtaját vasárnap 16:20 után senki nem nyitotta ki. Se alkalmazással, se kóddal."},
 bako_otthon:{var:"b", n:"Bakó Budakeszin", d:"Bakó telefonja egész éjjel a budakeszi átjátszón volt, a háza kamerája szerint 21:30 után nem lépett ki. Az Audi a garázsban állt.", clears:"bako"},
 nejlon:{var:"b", n:"Zacskó az érzékelőn", d:"A tizedik emeleti folyosói füstérzékelőre valaki egy nejlonzacskót húzott és ragasztószalaggal rögzített. A szalag ragacsos oldalán ujjnyomat: Németh Krisztián.", sup:[["nemeth","M"]]},
 kanna:{var:"b", n:"A félig üres kanna", d:"Németh erkélyén, a lomtartó dobozban egy ötliteres hígítós kanna a brigád raktárából, félig üresen.", sup:[["nemeth","M"]]},
 egett_kez:{var:"b", n:"Égett kéz", d:"Németh 04:31-kor a Szent János sürgősségijén jelentkezett, másodfokú égéssel a jobb kézfején. Azt mondta, főzés közben égette meg.", sup:[["nemeth","A"]]},
 vivien_b:{var:"b", n:"Fél kettőkor elment", d:"Vivien szerint Németh vasárnap este nála volt, de éjjel fél kettőkor felkelt, azt mondta, hazamegy a gyógyszeréért. Ötkor jött vissza, bekötött kézzel.", sup:[["nemeth","A"]]},
 nemeth_higito:{var:"b", n:"Az ajtó alatt", d:"A hígítót kívülről folyatták be, az ajtó alatt. Németh erkélyén ott a kanna, félig üresen, a brigád raktárából, ahová ő hordta fel.", sup:[["nemeth","M"]], ded:true},
 nemeth_ott:{var:"b", n:"Fél kettő és öt között", d:"Németh fél kettőkor eljött Vivientől. 04:31-kor égett kézzel ült a sürgősségin. A tűz 03:10-kor indult, a folyosóról.", sup:[["nemeth","A"]], ded:true},
 // közös
 nemeth_bosszu:{n:"Ha nem az enyém, ne legyen a tiéd", d:"Németh február elsején utcára került volna a családjával, Bakó miatt. Decemberben azt ordította, hogy inkább felgyújtja az egészet.", sup:[["nemeth","I"]], ded:true},
 nem_baleset8:{n:"Gyújtogatás", d:"Hígító és egy elnémított füstérzékelő. Aki ezt tette, nem csak a lakást akarta felgyújtani. Azt akarta, hogy senki ne ébredjen fel időben.", ded:true}
},

ded:[
 {a:"higito", b:"boncolas_ok", g:"nem_baleset8", t:"Hígító, és egy füstérzékelő, ami nem szólt. Három ember aludt, amikor a füst bekúszott az ajtó alatt. Ez nem baleset."},
 {a:"nemeth_kilakoltatas", b:"nemeth_fenyeget", g:"nemeth_bosszu", t:"Február elseje, két gyerek, sehová. „Inkább felgyújtom.” Az emberek mondanak ilyet. Néha meg is csinálják."},
 {var:"a", a:"tuz_belul", b:"zar_bako", g:"bako_bent", t:"A tűz belülről indult. A lakásba 02:52-kor csak egy telefon jutott be: Bakóé."},
 {var:"a", a:"anpr_bako", b:"tuz_belul", g:"bako_bent", t:"02:38 befelé, 03:06 kifelé. Egy belülről gyújtott tűz, amihez kulcs kellett. Bakó egy csepeli panelházban, hajnali háromkor."},
 {var:"a", a:"erzekelo_elem", b:"tuz_belul", g:"bako_elokeszit", t:"Kivette az elemet, kiöntötte a hígítót, három ponton. Bakó nem szokott elemet cserélni. Valaki másnak fizet érte."},
 {var:"a", a:"bako_adossag", b:"biztositas_emeles", g:"bako_penz", t:"Hatszázmillió márciusig. Decemberben negyvenmillióra emelt biztosítás. Egy üres lakás, ami egyszerre ér többet leégve, mint épen."},
 {var:"b", a:"tuz_kivul", b:"kanna", g:"nemeth_higito", t:"Az ajtó alatt, kívülről. A brigád kannája Németh erkélyén, félig üresen. Ő hordta fel decemberben, ő tudta, hol van."},
 {var:"b", a:"tuz_kivul", b:"nejlon", g:"nemeth_higito", t:"Kívülről gyújtották, és előtte elnémították a folyosói érzékelőt. A ragasztószalagon Németh ujja."},
 {var:"b", a:"egett_kez", b:"vivien_b", g:"nemeth_ott", t:"Fél kettőkor elment a gyógyszeréért. Négy harmincegykor égett kézzel ült a sürgősségin. Főzés közben, mondta. Hajnali négykor."}
],

docs:{
 boncolas8:{t:"Boncolási jegyzőkönyvek – Vízművek utca 4.", b:"IGAZSÁGÜGYI ORVOSTANI INTÉZET\nBoncolt: dr. Keleti Mária\n\nSzűcs Margit, 84 é.: az ágyában. COHb 61%. Égési sérülés nincs.\nHajdú Ferenc, 79 é.: az előszobában, felöltözve, kabátban. COHb 68%. A kezében egy bádogdoboz kulcsa.\nRostás Dániel, 27 é.: a lépcsőházban. COHb 54%, kiterjedt égési sérülések. A karjában egy pléd, amit az emeleti szomszédtól kapott, hogy a néni arcára tegye.\n\n[[boncolas_ok|Mindhárom halál oka szénmonoxid-mérgezés. A füst a tűz kitörése után négy-hat percen belül elérte a halálos koncentrációt a folyosón és a szomszédos lakásokban.]]\n\n— K. M., kézzel: „Rostás visszament érte, Dénes. Kétszer. Ezt írd bele valahova, ahol olvassák.”"},
 tuzvizsgalat:{t:"Tűzvizsgálati jelentés – Vízművek u. 4., 10/3", b:{$v:{
  a:"CSEPELI HIVATÁSOS TŰZOLTÓSÁG – tűzvizsgálati szakvélemény\nTűzvizsgáló: Dombi Ernő tű. alezredes, konzultáns: Halász Tamás\n\nA tűz kitörési helye: a 10/3. lakás nappalija.\n[[tuz_belul|A padlón három, egymástól elkülönülő égési góc, köztük hígítóval öntött, összefüggő nyomvonal. A bejárati ajtó belülről égett, a küszöb alatt nincs befolyási nyom. A gyújtás a lakáson belül történt.]]\nGyorsító anyag: [[higito|nitrohígító, a gázkromatográfia szerint a brigád által használt típus]].\n\n— D. E.: „Aki ezt csinálta, bent volt, és tudta, mit csinál. Három gócot nem csinál az ember idegességből.”",
  b:"CSEPELI HIVATÁSOS TŰZOLTÓSÁG – tűzvizsgálati szakvélemény\nTűzvizsgáló: Dombi Ernő tű. alezredes, konzultáns: Halász Tamás\n\nA tűz kitörési helye: a 10/3. lakás bejárati ajtaja, a folyosó felől.\n[[tuz_kivul|A küszöb alatt és a levélbedobó nyílásnál befolyási nyomok, a folyosó kövén égett tócsa. A lakás belseje az ajtó felől égett befelé. A gyújtás kívülről, a folyosóról történt.]]\nGyorsító anyag: [[higito|nitrohígító, a gázkromatográfia szerint a brigád által használt típus]].\n\n— D. E.: „Aki ezt csinálta, nem jutott be. Kívülről öntötte be, mint aki a postaládába önt benzint. Dühös ember munkája.”"}}},
 zarnaplo:{t:"Okoszár eseménynapló – 10/3", b:{$v:{
  a:"LOCKLY HUNGARY – eseménynapló, készülék: VZM4-10-3\n\n01. 16. 07:40  nyitás – „brigád” kód\n01. 16. 16:20  zárás – „brigád” kód\n[[zar_bako|01. 17. 02:52  nyitás – felhasználó: BR (admin), Android alkalmazás\n01. 17. 02:58  zárás – felhasználó: BR (admin)]]\n01. 17. 03:14  hiba – a készülék nem válaszol",
  b:"LOCKLY HUNGARY – eseménynapló, készülék: VZM4-10-3\n\n01. 16. 07:40  nyitás – „brigád” kód\n01. 16. 16:20  zárás – „brigád” kód\n[[zar_zarva|01. 16. 16:20 és 01. 17. 03:11 között nyitási esemény nincs.]]\n01. 17. 03:11  hiba – túlmelegedés, a készülék nem válaszol"}}},
 erzekelo:{t:"Laborjelentés – füstérzékelők", b:{$v:{
  a:"BŰNÜGYI TECHNIKAI LABOR\nVizsgálta: Halász Tamás\n\n1. minta: a 10/3. lakás mennyezeti füstérzékelője.\n[[erzekelo_elem|Az elemtartó üres. Az elem nem égett ki, kivették. A műanyag fedél belső oldalán friss, értékelhető ujjnyomat: Bakó Richárd (a cégnyilvántartási ujjnyomat-azonosításból).]]\n2. minta: a folyosói érzékelő. Működött, 03:13-kor riasztott. Akkor már késő volt.\n\n— H. T.: „Az elemet belülről vették ki. Csak az, aki bejutott.”",
  b:"BŰNÜGYI TECHNIKAI LABOR\nVizsgálta: Halász Tamás\n\n1. minta: a 10/3. lakás füstérzékelője. Elemmel, működött, de a lakásban senki nem volt, aki hallja.\n[[nejlon|2. minta: a folyosói érzékelő. Egy átlátszó nejlonzacskó húzva rá, barna ragasztószalaggal. A szalag ragacsos oldalán értékelhető ujjnyomat: Németh Krisztián (2014-es nyilvántartásból).]]\n\n— H. T.: „Aki ezt csinálta, nem akarta, hogy a folyosó felébredjen. A tűz nem a lakásnak szólt. A szomszédoknak is.”"}}},
 anpr:{t:"Rendszámfelismerő kamerák – fekete Audi A6", b:{$v:{
  a:"ORFK – rendszámfelismerő rendszer lekérdezése\nRendszám: BKO-001 (Bakó Ingatlan Kft.)\nIdőszak: 01. 16. 20:00 – 01. 17. 08:00\n\n[[anpr_bako|02:38:14  Csepeli gerincút, Ráckevei-Duna-ág híd – befelé\n03:06:51  Csepeli gerincút, Ráckevei-Duna-ág híd – kifelé]]\n03:41:20  M1 bevezető, Budaörs",
  b:"ORFK – rendszámfelismerő rendszer lekérdezése\nRendszám: BKO-001 (Bakó Ingatlan Kft.)\nIdőszak: 01. 16. 20:00 – 01. 17. 08:00\n\n[[bako_otthon|Találat nincs. A jármű a vizsgált időszakban nem haladt el rendszámfelismerő kamera előtt. Bakó telefonja a mobilszolgáltató szerint egész éjjel a budakeszi átjátszón volt.]]"}}},
 surgossegi:{t:"Sürgősségi betegnapló – Szent János, 01. 17. éjjel", b:{$v:{
  a:"SZENT JÁNOS KÓRHÁZ – sürgősségi betegfelvétel, 01. 17. 03:00–06:00\n\n03:52 Kántor Gábor, 58 é. – füstmérgezés, enyhe. „A lakókat hordta le.”\n04:05 Lakatos Jánosné, 71 é. – füstmérgezés, megfigyelés.\n04:10 Kiss Barnabás, 9 é. – pánikroham, füst.\n04:44 Rostás Dánielné, 52 é. – sokk. Az áldozat anyja.",
  b:"SZENT JÁNOS KÓRHÁZ – sürgősségi betegfelvétel, 01. 17. 03:00–06:00\n\n03:52 Kántor Gábor, 58 é. – füstmérgezés, enyhe. „A lakókat hordta le.”\n04:05 Lakatos Jánosné, 71 é. – füstmérgezés, megfigyelés.\n04:10 Kiss Barnabás, 9 é. – pánikroham, füst.\n[[egett_kez|04:31 Németh Krisztián, 38 é. – II. fokú égés, jobb kézfej és alkar, hólyagos. Anamnézis: „Főzés közben, olajjal.” Az orvos megjegyzése: hígítószag a ruházaton.]]\n04:44 Rostás Dánielné, 52 é. – sokk. Az áldozat anyja."}}}
},

locs:{
 panel:{m:"Vízművek u. 4.", n:"Vízművek utcai panelház, Csepel", x:640, y:660, side:"P", crime:1, d:"Tízemeletes panelház, a tizedik emelet ablakai feketék, alattuk a falon korom, mint egy könnycsík. A lépcsőházban víz, jég, a falon gyerekrajzok, amiket a hő felhólyagosított.", hs:[
   {id:"ajto", l:"A 10/3 ajtaja", t:"Egy kiégett acélajtó, rajta a fekete okoszár, megolvadva, mint egy csokoládé. A küszöb előtt a folyosó kövén egy sötét folt. Dombi alezredes letérdel mellé, és megszagolja a kesztyűjét.", f:"helyszin"},
   {id:"tarolo", l:"A folyosói tároló", t:"A brigád tárolója Németh ajtaja mellett. Lakat nincs, csak egy drótdarab a kilincsen. Bent festékesvödrök, gipszkarton, két ötliteres hígítós kanna, mindkettő tele. A polcon egy harmadik kanna helye, porkeretben. Üres.", ev:"higito"},
   {id:"erzekelo_a", var:"a", l:"A füstérzékelők", req:["helyszin"], t:"A 10/3 kiégett mennyezetén a füstérzékelő megolvadt, de a fedele lent fekszik a hamuban, egyben. Az elemtartó nyitva, üres. A folyosói érzékelő ép, kormos.", f:"erzekelok"},
   {id:"erzekelo_b", var:"b", l:"A füstérzékelők", req:["helyszin"], t:"A folyosói füstérzékelőn egy félig megolvadt nejlonzacskó lóg, barna ragasztószalaggal. Valaki elnémította. A 10/3-ban az érzékelő a mennyezeten, elemmel, megolvadva.", f:"erzekelok"},
   {id:"hajdu", l:"Hajdú Ferenc lakása (10/4)", req:["helyszin"], t:"A 10/4-ben a füst mindent beborított. Az előszobában a fogason egy kalap és egy bot, mindkettő kormos. A kredencben egy bádogdoboz: benne üres borítékok, mind ugyanazzal a régi, horgonyos pecséttel. A doboz alján egy kompjegy: Révész, 1994. november 9.", ev:"hajdu_doboz", f:"hajdu_futar"},
   {id:"nemethlakas_b", var:"b", l:"Németh lakása (10/5)", req:["met_nemeth"], t:"A 10/5-ben füstszag, a gyerekszobában két ágy, az egyiken egy plüssmackó, kormosan. Az erkélyen egy lomtartó doboz, benne egy ötliteres hígítós kanna, a brigád címkéjével. Félig üres.", ev:"kanna"},
   {id:"nemethlakas_a", var:"a", l:"Németh lakása (10/5)", req:["met_nemeth"], t:"A 10/5-ben füstszag, a gyerekszobában két ágy, az egyiken egy plüssmackó, kormosan. Az erkélyen sílécek, egy elhervadt muskátli, egy doboz karácsonyi dísz. Semmi, ami ne lenne egy kilakoltatás előtt álló lakásban."},
   {id:"kazan", l:"A kazánház", req:["met_kantor"], t:"A pincében a kazánház, szerszámok, egy szétszedett keringető szivattyú. Az ajtó fölött egy kamera, a felvételt Kántor maga mutatja meg a telefonján, remegő kézzel: 00:40 bemegy, 03:12 kirohan.", ev:"kantor_kazan"}
 ]},
 tornaterem:{la:1, m:"Tornaterem", n:"Csepeli általános iskola tornaterme", x:560, y:610, side:"P", vis:"helyszin|met_kantor", d:"A kiürített lakók ideiglenes szállása. Tornaszőnyegek, katonai takarók, egy asztalon tea és zsíros kenyér a Vöröskereszttől. Egy kisfiú a bordásfalon ül, és a mennyezetet nézi.", hs:[]},
 bakoiroda:{la:1, m:"Bakó Ingatlan", n:"Bakó Ingatlan Kft., Lánchíd utca", x:430, y:400, side:"B", vis:"bako_felvasarlas", open:[9,18], d:"Üvegfalas iroda a Duna-parton, makettek, látványtervek: a Vízművek utca tizedik emelete loftként, üvegkorláttal, terasszal. A recepciós nem tudja, hogy a makett most hamu.", hs:[]},
 bakohaz:{m:"Bakó-villa", n:"Bakó-villa, Budakeszi", x:120, y:255, side:"B", vis:"bako_lakcim", d:"Modern villa a hegyoldalban, kamerák a kapun, egy fekete Audi a garázs előtt. A nappali ablakából egész Budapest látszik, Csepel is.", hs:[]},
 vivien:{la:1, m:"Vivien", n:"Vivien lakása, Kispest", x:900, y:600, side:"P", vis:"nemeth_vivien", d:"Lakótelepi garzon, a kapucsengőn kamera. Vivien a műszakjából jön, eladó egy drogériában, a fején még ott a hajháló.", hs:[]},
 korhaz8:{m:"Kórház", n:"Szent János Kórház, sürgősségi", x:250, y:220, side:"B", d:"A sürgősségin a füstmérgezettek, a folyosón a Vöröskereszt takarói. Rostás Dániel anyja egy széken ül, és senki nem mer odamenni hozzá.", hs:[]},
 otthon:{m:"Lakás", n:"Lakás a Körúton", x:612, y:338, side:"P", d:"Harmadik emelet, udvari szoba. Jégvirág az ablakon. A konyhaasztalon apád jegyzetfüzete, mellette a kávés bögre, amit Detti hagyott itt.", hs:[]},
 kapitanysag:{m:"Kapitányság", n:"Főkapitányság", x:705, y:196, side:"P", d:"A folyosón januári hideg, a radiátorok nem bírják. Szép Viktória kabátban ül az irodájában.", hs:[]},
 hordo:{m:"Hordó", n:"Hordó", x:648, y:462, side:"P", open:[15,3], d:"A Hordóban meleg van, az egyetlen meleg hely a kerületben. Laci forralt bort főz, és senki nem kérdezi, kinek.", hs:[]},
 intezet:{m:"Intézet", n:"Orvostani Intézet", x:792, y:474, side:"P", open:[7,19], d:"Keleti doktornő három boncasztalnál dolgozik egyszerre. A sárga akta már nincs az íróasztalán.", hs:[]},
 aa:{la:1, m:"NA-gyűlés", n:"NA-gyűlés, templomalagsor", x:760, y:296, side:"P", vis:"aa1", open:[18,21], d:"Összecsukható székek, filterkávé, a falon egy feszület. Benedek atya, a plébános, az ajtóban áll, és mindenkivel kezet fog.", hs:[]}
},

people:{
 dombi:{n:"Dombi Ernő", r:"tűzoltó alezredes, tűzvizsgáló", loc:"panel", h:[5,18], bio:"56 éves, harminc éve tűzoltó. Bajusz, kormos sisak a hóna alatt, a hangja rekedt a füsttől. Huszonkét halálos tüzet vizsgált. Ez a huszonharmadik.", topics:[
  {id:"mi", l:"Mit tudunk?", t:"„Hígító, ezt már a szagáról tudom. A 10/3-nál indult, az üres lakásnál. Hogy belülről vagy kívülről, azt még nem.” Leveszi a kesztyűjét. „Holnapra megmondom, ha a labor is segít. Halász kolléga már fent van.”", f:"helyszin"},
  {id:"erzekelo", l:"Miért nem szólt az érzékelő?", t:"„Mert nem hagyták.” Felnéz a tizedik emeletre. „Ezt is megmondom holnapra. De ha egy füstérzékelő nem szól, és három ember meghal, azt nem az elem dönti el, főhadnagy. Hanem valaki, aki kivette.”"},
  {id:"rostas", l:"Rostás Dánielről", t:"„A futár?” Dombi sokáig hallgat. „Lent volt a kocsijával, csomagot hozott a kilencedikre, korán. Látta a füstöt, felrohant. Lehozta a hetedikről a gyerekeket, aztán visszament a nénihez.” Elfordul. „Kétszer ment vissza. Másodszor már nem jött le.”"}
 ]},
 kantor:{n:"Kántor Gábor", r:"a ház gondnoka", loc:"panel", h:[6,20], suspect:1, bio:"58 éves, a ház gondnoka huszonkét éve. Kormos overall, a szemöldöke leégett, a keze bekötve. Ő riasztotta a tűzoltókat, ő hordta le a hetedik emeleti gyerekeket. És neki van büntetett előélete gyújtogatásért.", topics:[
  {id:"ejjel", l:"Hol volt éjjel?", t:"„A kazánházban. Elromlott a keringető, mínusz kilenc fokban. Ha nem javítom meg, reggelre befagy a ház.” Megtörli a homlokát. „Háromkor szagot éreztem, felrohantam. A hetedikig jutottam.”"},
  {id:"kulcs", l:"Vannak kulcsai?", t:"„Mindenhez. A régi zárakhoz.” Elővesz egy kulcscsomót, nehéz, mint egy horgony. „A 10/3-hoz nincs. Bakó úr okoszárat tetetett fel. Nekem nem adott kódot. Azt mondta, nincs rá szükségem.”", ev:"kantor_kulcs"},
  {id:"bako", l:"Bakó Richárdról", t:"„Bakó úr?” Kesernyésen nevet. „Februártól nincs munkám. Bakó úr elintézte. Egy loftházba nem gondnok kell, hanem portás, öltönyben.” Ránéz a bekötött kezére. „Huszonkét év. Ezt a házat én tartottam össze.”", ev:"kantor_kirugas"},
  {id:"1999", l:"A régi ügyéről", req:["met_kantor"], sober:1, t:"Megáll. „Tudtam, hogy megtalálja.” Leül a lépcsőre. „1999. A feleségem elment a sógorommal, az én autómmal. Felgyújtottam az autót. Az autót, főhadnagy, nem őket.” Felnéz. „Huszonkilenc éve. És most mindenki erre fog gondolni, ugye?”", ev:"kantor_gyujtogatas"}
 ]},
 lakatosne:{n:"Lakatos Jánosné", r:"lakó, 10/6", loc:"tornaterem", h:[7,21], bio:"71 éves nyugdíjas postás. Pongyolában, a vállán egy katonai takaró, a kezében egy mobiltelefon, amit a fia vett neki, és amit nem tud kezelni. Mindent hall, mindent lát, és mindent elmond.", topics:[
  {id:"tuz", l:"Mit látott éjjel?", t:"„Füstszagra ébredtem. Kinyitottam az ajtót, és a folyosón már nem lehetett látni.” Megtörli a szemét. „Szegény Margitka. Szegény Feri bácsi. Az a fiú…” Elcsuklik a hangja."},
  {id:"nemeth", l:"Némethről", t:"„Krisztián? Rendes fiú, csak ideges. Két gyerek, egy feleség, aki elment, és most a lakás is.” Lehalkítja a hangját. „Decemberben ordított Bakóval a folyosón. Azt mondta: inkább felgyújtom az egészet, mint hogy a tiéd legyen. Mindenki hallotta.”", ev:["nemeth_fenyeget","nemeth_kilakoltatas"], f:"nemeth_vivien_hint"},
  {id:"hajdu", l:"Hajdú Ferencről", t:"„Feri bácsi? Csendes ember. Egyedül élt. Régen a kikötőben dolgozott, raktáros volt, azt mondta.” Elgondolkodik. „Kalapban járt, bottal, minden nap ugyanakkor, a piacra. Ősszel néha elment valahova egész napra, és borítékokat vitt. Azt mondta, régi barátoknak.”", f:"hajdu_hint"},
  {id:"bako", l:"Bakóról", t:"„Hat lakást vett meg. Margitkának tizenötmilliót ajánlott, Feri bácsinak tizennyolcat. Nem adták el.” Megrázza a fejét. „Feri bácsi azt mondta: én innen csak koporsóban megyek. Hát…”", ev:"bako_felvasarlas"}
 ]},
 nemeth:{n:"Németh Krisztián", r:"bérlő, 10/5", loc:"tornaterem", h:[8,22], suspect:1, bio:"38 éves, volt biztonsági őr, tavasz óta munkanélküli. Két gyerek, nyolc- és ötéves, most a nagymamánál. Tornacipő, melegítő, a jobb kezét a zsebében tartja.", topics:[
  {id:"ejjel", l:"Hol volt éjjel?", t:"„Vivienél. A barátnőmnél, Kispesten.” Nem néz rád. „Reggel hívtak, hogy ég a ház. Mire ideértem, már csak a füst volt.”", f:"nemeth_vivien"},
  {id:"kez", l:"Mi van a kezével?", req:["met_nemeth"], t:{$v:{a:"Kiveszi a zsebéből. Semmi: egy vágás a hüvelykujján, régi. „Hideg van, főhadnagy. Zsebben tartom.” Visszateszi.",b:"Lassan veszi ki. Kötés, a csuklóig. „Megégettem. Főzés közben.” Rád néz, aztán el. „Olajjal. Vivienél.” Vivien drogériában dolgozik, és nem főz."}}},
  {id:"bako", l:"Bakóról", t:"„Bakó?” Most először néz a szemedbe. „Megvette a lakást a fejem fölül, és két hónapot adott. Két gyerekkel, januárban.” Összeszorítja a fogát. „Igen, mondtam, hogy felgyújtom. Mindenki mond ilyet. Én csak hangosabban.”", ev:"nemeth_kilakoltatas"},
  {id:"tarolo", l:"A brigád tárolójáról", t:"„Decemberben két hétig náluk dolgoztam. Feketén, napi nyolcezerért. Én hordtam fel a kannákat, a gipszkartont, mindent.” Megvonja a vállát. „Kellett a pénz. Karácsony volt.”", ev:["nemeth_tarolo","nemeth_szomszed"]}
 ]},
 vivien_p:{n:"Vivien", r:"Németh barátnője", loc:"vivien", h:[16,23], bio:"31 éves drogériai eladó. Szőke, fáradt, a körme lila. Krisztiánnal fél éve vannak együtt, és már most többet aggódik érte, mint magáért.", topics:[
  {id:"ejjel", l:"Hol volt Krisztián éjjel?", sober:1, t:{$v:{a:"„Itt. Egész éjjel.” Előveszi a telefonját, megnyitja az ajtókamera alkalmazását. „Tessék. Este tízkor jött, reggel hétkor ment. Ha kimegy, a kamera rögzíti, mindig, mert a szomszéd macskája is beállítja.” Megmutatja. Egész éjjel semmi, csak a macska, kétszer.",b:"Sokáig hallgat. „Itt volt. Este tízkor jött.” Aztán: „Fél kettőkor felkelt, azt mondta, hazamegy a gyógyszeréért. Ötkor jött vissza.” Rád néz. „Bekötött kézzel. Azt mondta, elesett a jégen.” Elsírja magát. „Tudom, hogy nem esett el.”"}}, ev:{$v:{a:["nemeth_baratno"],b:["vivien_b"]}}}
 ]},
 bako:{n:"Bakó Richárd", r:"ingatlanbefektető", loc:"bakoiroda", h:[9,18], suspect:1, bio:"46 éves, szürke kasmírpulóver, okosóra, egy kávé, amit a titkárnő hozott, és amit nem iszik meg. Udvarias, mint egy banki ügyintéző, aki már tudja, hogy elutasítja a hiteledet.", topics:[
  {id:"tuz", l:"A tűzről", t:"„Szörnyű.” Leteszi a kávét. „Három ember. Felajánlottam a Vöröskeresztnek kétmilliót, holnap jelenik meg a sajtóban.” Megigazítja az óraszíját. „A lakás biztosítva volt, természetesen. De ez most nem számít, ugye?”", ev:"bako_felvasarlas"},
  {id:"zar", l:"Az okoszárról", t:"„Minden lakásomon okoszár van. Én vagyok az adminisztrátor, a brigádvezetőnek van egy kódja.” Megmutatja a telefonján az alkalmazást. „Bármikor kinyithatom, Budakesziről is. Ez a lényege.”", ev:"bako_kulcs"},
  {id:"higito", l:"A brigád anyagairól", t:"„A brigád anyagai, az én pénzemből. Hígító, festék, gipsz.” Vállat von. „Hogy hol tartják? Gondolom, a tárolóban. Én nem járok fel minden nap, főhadnagy. Van rá emberem.”", ev:"bako_higito"},
  {id:"hitel", l:"A cég pénzügyeiről", req:["bako_felvasarlas"], sober:1, t:{$v:{a:"Most először néz órát. „Hatszázmillió, márciusban esedékes. A bank tudja, hogy a projekt jó.” Elmosolyodik. „Ha megkérdezi, emeltem-e a biztosítást decemberben: igen. Felújítás alatti értéknövekedés. Az ügyvédem szerint ez teljesen szokásos.” Senki nem kérdezte.",b:"„Hatszázmillió, márciusban esedékes. A bank tudja, hogy a projekt jó.” Elmosolyodik. „Ha arra céloz, hogy nekem jó a tűz: nem. Most hónapokig vizsgálnak, a biztosító nem fizet, a bank ideges.” Hátradől. „Nekem ez a tűz a legrosszabb, ami történhetett.”"}}, ev:{$v:{a:["bako_adossag","biztositas_emeles"],b:["bako_adossag"]}}},
  {id:"otthon", l:"Hol volt éjjel?", t:"„Otthon, Budakeszin. A feleségemmel.” Átnyújt egy névjegyet, rajta a lakcím. „Jöjjön ki nyugodtan. A feleségem süt pogácsát, ha rendőr jön. Ezt tőlem tanulta.”", f:"bako_lakcim"}
 ]},
 bakone:{n:"Bakóné Szilvia", r:"Bakó felesége", loc:"bakohaz", h:[10,21], bio:"43 éves, egykori modell, most jógaoktató. Mezítláb jár a padlófűtéses villában, és úgy beszél a férjéről, mint egy rossz időjárásról.", topics:[
  {id:"ejjel", l:"Hol volt a férje éjjel?", sober:1, t:{$v:{a:"„Itthon.” Aztán megáll. „Legalábbis amikor elaludtam, itthon volt. Tizenegykor.” A kávéfőzőt nézi. „Reggel hatkor az Audi kint állt a garázs előtt. Richárd mindig beáll a garázsba. Mindig.”",b:"„Itthon. Egész éjjel horkolt, a vendégszobába mentem át.” Elmosolyodik. „Mutassam a kamerát? Richárd mindent rögzít. A saját házát is.” Megmutatja: este fél tízkor beáll a garázsba, reggel nyolckor ki."}}}
 ]},
 rostasne:{n:"Rostás Dánielné", r:"az áldozat anyja", loc:"korhaz8", h:[8,20], bio:"52 éves, takarítónő a kórházban, ugyanabban, ahova a fiát hozták. Nem sír. Egy kis plüssfigurát szorongat, amit a fia a futárautó tükrére akasztott.", topics:[
  {id:"dani", l:"Leülsz mellé", t:"„Dani mindig mondta, hogy a csomagot a kezébe kell adni az embernek. Nem az ajtó elé tenni.” Megforgatja a figurát. „A néninek is a kezébe akarta adni. Csak most nem csomagot.” Rád néz. „Megfogja, aki ezt tette? Nem azért kérdezem, hogy megbüntesse. Hanem hogy Dani ne a lépcsőházban maradjon.”", eff:{crave:15}}
 ]},
 anna_korhaz8:{n:"Dr. Kerekes Bernadett", r:"traumatológus, ügyeletes", loc:"korhaz8", h:[7,20], vis:"anna_met", gone:"anna_pecs_igen|anna_pecs_rossz", bio:"41 éves traumatológus. Egész éjjel égési sérülteket látott el. A lófarka szétesett, a szeme vörös a füsttől, ami a betegeken jött be.", topics:[
  {id:"betegek", l:"Kiket hoztak be éjjel?", t:{$v:{a:"„Négy füstmérgezés, egy pánikroham, egy anya, aki sokkot kapott.” Leveszi a kesztyűt. „A gondnokot is én láttam el. Az égett kezével hordta le a gyerekeket. Senki nem mondta neki, hogy menjen. Nem az ilyenek szoktak gyújtogatni, Dénes.”",b:"„Négy füstmérgezés, egy pánikroham, egy anya, aki sokkot kapott.” Leveszi a kesztyűt. „És egy férfi fél ötkor, égett kézzel. Azt mondta, főzés közben. Hígítószaga volt, Dénes. Az ember nem főz hígítóval.” Előveszi a betegnaplót. „Németh. Ezt írta be a nővér.”"}}, ev:{$v:{a:[],b:["egett_kez"]}}},
  {id:"kave", l:"Meghívod egy kávéra", req:["!anna_egyutt"], sober:1, dyn:"annaKave8"},
  {id:"hello", l:"Beszélsz vele", req:["anna_egyutt"], t:"Detti egy pillanatra megáll, a homlokát a válladnak dönti. Füstszagú a haja. „Rostás anyja itt dolgozik. Takarító. Ugyanezen a folyosón.” Hallgat. „Fogd meg, aki ezt csinálta. Én ma már nem tudok semmit csinálni.”"}
 ]},
 anna:{n:"Detti", r:"nálad", loc:"otthon", h:[20,24], vis:"anna_egyutt", gone:"anna_pecs_igen|anna_pecs_rossz", bio:"Dr. Kerekes Bernadett. Esténként a radiátor mellett, a lábát a te zoknidban melegíti.", topics:[
  {id:"ul", l:"Csak ültök", rep:1, eff:{crave:-15}, t:"A radiátor kopog. Detti egy pokrócba csavarva ül, és egyszer csak azt mondja: „Amikor a futár anyja megtudta, nem sírt. Csak megkérdezte, fázott-e.” Nem mondasz semmit. Ő sem."}
 ]},
 // stáb
 szep:{n:"Dr. Szép Viktória", r:"osztályvezető", loc:"kapitanysag", h:[8,20], bio:"44 éves. Kabátban ül az irodában, a radiátor nem működik. A telefonja egész nap rezeg: a kerületi polgármester, a sajtó, a minisztérium.", topics:[
  {id:"elig", l:"Eligazítás", t:"„Három halott. Egy hős futár. Egy ingatlanbefektető. Egy kilakoltatott apa. Egy büntetett gondnok.” Leteszi a tollat. „Mátrai, ez az ügy minden címlapon ott lesz. Ne találja ki, ki volt. Bizonyítsa be.”"},
  {id:"hajdu_lead", l:"Átadod Hajdú dobozát a vizsgálatnak", req:["hajdu_doboz","!hajdu_titok"], t:"Szép Viktória sokáig nézi a borítékokat. A horgonyt. A kompjegyet. „1994. november 9.” Elővesz egy sárga aktát a fiókjából. „Szabó kapitány halálának napja.” Becsukja. „A vizsgálatom eddig egy levélből állt, Mátrai. Most már egy dobozból is.” Rád néz. „Köszönöm.”", f:"hajdu_lead"},
  {id:"statusz", l:"Jelentés az ügyről", rep:1, dyn:"vargaStatus"}
 ]},
 bence:{n:"Tóth Bence", r:"nyomozó", loc:"kapitanysag", h:[7,21], staff:1, gone:"bence_halott", bio:"29 éves. Ma reggel nem jött ki a helyszínre. Azt mondta, beteg. Tudod, mi a betegsége: a hőség, a bezártság, és egy augusztusi éjszaka.", topics:[
  {id:"tuz", l:"Nem jöttél ki", t:"Bence nem néz rád. „Felértem a hetedikig, főnök. A füst… a meleg…” Megdörzsöli a karját. „Visszafordultam.” Hosszú csend. „Rostás nem fordult vissza.” Leülsz mellé. Egy darabig csak ültök.", loy:{bence:5}},
  {id:"gond", l:"Mit gondolsz?", rep:1, dyn:"hintBence8"}
 ]},
 kata:{n:"Rácz Kata", r:"nyomozó", loc:"kapitanysag", h:[7,21], staff:1, gone:"kata_vad", bio:"36 éves. Csepelen nőtt fel, három utcával odébb. Ismeri a Vízművek utcai házat, a gyerekkori barátnője lakott a hetediken.", topics:[
  {id:"gond", l:"Mit gondolsz?", rep:1, dyn:"hintKata8"}
 ]},
 bodnar:{n:"Bodnár Feri", r:"törzszászlós", loc:"kapitanysag", h:[7,21], staff:1, gone:"bodnar_vad", bio:"58 éves. Fél Csepelt ismeri, a másik felét a kocsmából.", topics:[{id:"gond", l:"Mit gondolsz?", rep:1, t:"„Hajdú Feri? A raktáros?” Megvakarja a bajuszát. „A kikötőben dolgozott. Kilencvennégyben ő őrizte a horgonyos raktárt. Azóta mindenki tudta, hogy ő hordja a borítékokat. Senki nem kérdezte, kinek.”", f:"hajdu_hint"}]},
 halasz:{n:"Halász Tamás", r:"nyomszakértő", loc:"kapitanysag", h:[8,22], staff:1, bio:"41 éves. Hajnal óta a helyszínen volt, a kabátja füstszagú. Omega helyett ma csend van a laborban.", topics:[{id:"gond", l:"Mi van a laborban?", rep:1, dyn:"hintHalasz8"}]},
 feher:{n:"Dr. Fehér Judit", r:"pszichológus", loc:"kapitanysag", h:[9,17], staff:1, bio:"52 éves. A gyújtogatókról írta a doktoriját, és ezt csak akkor mondja el, ha megkérdezed.", topics:[
  {id:"profil", l:"Ki gyújt fel egy házat?", t:"„Kétféle gyújtogató van, főhadnagy.” Feláll, az ablakhoz megy. „Az egyik számol. Biztosítás, örökség, egy ház, ami üresen többet ér. Ő belül gyújt, gondosan, több ponton, és messze van, mire ég.” Megfordul. „A másik dühös. Ő kívül gyújt, az ajtónál, a postaládánál, mert be se akar menni. Csak azt akarja, hogy a másiké elégjen.” Leül. „Nézze meg, hol kezdődött a tűz. Megmondja, melyik volt.”"},
  {id:"jozan", l:"A józanságról", rep:1, dyn:"feherJozan8"}
 ]},
 keleti:{n:"Dr. Keleti Mária", r:"igazságügyi orvosszakértő", loc:"intezet", h:[7,19], staff:1, bio:"61 éves. Apád barátja. A sárga akta eltűnt az asztaláról. Nem kérdezed, hova.", topics:[
  {id:"elozetes", l:"Előzetes vélemény", t:"„Füst. Mindhárom.” Leveszi a maszkot. „A futár égett is, de a füst ölte meg előbb.” Rágyújt. „A Hajdú nevű öreg kabátban volt, a kezében egy dobozkulcs. Menni akart, Dénes. Valahova vinni valamit.”"},
  {id:"hajdu", l:"Hajdú Ferencről", req:["hajdu_doboz"], sober:1, t:"Keleti sokáig fújja a füstöt. „Hajdú Feri. A raktáros.” Elnyomja a cigarettát. „Kilencvennégyben ő találta meg Szabót a víz szélén. Ő hívta apádat.” Nem néz rád. „Ezt is megtudtad volna. Inkább tőlem.”", f:"keleti_hajdu"}
 ]},
 laci:{n:"Laci", r:"kocsmáros", loc:"hordo", h:[15,3], bio:"A Hordó kocsmárosa. Januárban forralt bort főz, és a pult alatt tartja apád régi fröccsös poharát.", topics:[
  {id:"hajdu", l:"Hajdú Ferencről", req:["hajdu_doboz"], t:"Laci leteszi a merőkanalat. „Hajdú Feri. Idejárt, kilencvennégyig. Utána soha többé.” Törölgeti a pultot, ott, ahol tiszta. „Egyszer, karácsonykor, hozott egy borítékot. Nekem. Horgonnyal.” Felnéz. „Nem nyitottam ki, Dénes. Visszaadtam. Azóta nem jött.”", f:"laci_boritek"},
  {id:"regi", l:"Csak ültök", rep:1, dyn:"laciC8"}
 ]},
 sanyi:{n:"Sanyi", r:"NA-gyűlés, szponzor", loc:"aa", h:[18,21], bio:"68 éves, huszonhárom éve józan. Hajós volt. Mostanában nem ül a terem közepére. Az ajtó mellé ül, és Benedek atyát figyeli.", topics:[
  {id:"ul", l:"Leülsz a körbe", rep:1, mins:90, eff:{crave:-40}, dyn:"sanyiC8"},
  {id:"benedek", l:"Mi van az atyával?", t:"Sanyi lehalkítja a hangját. „Benedek atya pénzt kért tőlem. Az egyház javára, mondta. Ötszázezret. Azt mondta, tudja, mit csináltam kilencvenben, amikor ittam.” Megrázza a fejét. „Nem adtam. Azóta másképp néz rám.” Felnéz. „Ne mondd el senkinek, testvér. Még nem tudom, mit kezdjek vele.”", f:"sanyi_benedek"}
 ]},
 lili:{n:"Mátrai Lili", r:"a lányod", loc:"otthon", h:[18,23], vis:"lili_marad", bio:"19 éves, elsőéves a Zeneakadémián, vizsgaidőszak. Éjjel kettőig gyakorol fejhallgatóval egy digitális zongorán, hogy ne zavarjon. Zavar. Nem mondod meg neki.", topics:[
  {id:"este", l:"Leülsz mellé", rep:1, dyn:"liliC8"},
  {id:"fuzet", l:"Megmutatod neki nagyapja füzetét", req:["foto1994|level_titok|lajos_1994"], sober:1, t:"Lili sokáig lapozza, a kottaolvasó szemével, sorról sorra. Az 1994-es lapnál megáll, ahol a név kétszer van áthúzva. Az ablakhoz viszi, a fény felé tartja. „Apa. Itt a toll belenyomódott a papírba. Az első betű…” Hunyorog. „K. Vagy L. A második magánhangzó. Rövid név.” Visszaadja. „Nagyapa nagyon akarta, hogy ne lehessen elolvasni. És nagyon akarta, hogy ott legyen.”", f:"lili_betu"}
 ]}
},

tasks:[
 {id:"boncolas8", l:"A három áldozat boncolása", req:["body"], dur:360, fit:{keleti:1}, doc:"boncolas8", ok:"Keleti végzett mindhárommal. Nem telefonál. Üzen: „Gyere be.”"},
 {id:"tuzvizsgalat", l:"Tűzvizsgálat Dombival", req:["helyszin"], dur:300, fit:{halasz:.95, keleti:.6}, doc:"tuzvizsgalat", ok:"Dombi és Halász végzett. Megvan, hol kezdődött.", fail:"A helyszín még túl forró. Holnap újra."},
 {id:"zarnaplo", l:"Az okoszár naplójának lekérése", req:["bako_kulcs"], dur:180, fit:{kata:.9, bence:.88, halasz:.8, bodnar:.65}, doc:"zarnaplo", ok:"A zárgyártó elküldte a naplót.", fail:"A gyártó jogászai bírósági végzést kérnek. Újra kell kérni."},
 {id:"erzekelo", l:"A füstérzékelők vizsgálata", req:["erzekelok"], dur:240, fit:{halasz:.95, keleti:.6}, doc:"erzekelo", ok:"Megvannak a füstérzékelők eredményei."},
 {id:"anpr", l:"Bakó autójának rendszámkamerás lekérdezése", req:["bako_lakcim|bako_kulcs"], dur:180, fit:{kata:.9, bence:.9, bodnar:.75, halasz:.6}, doc:"anpr", ok:"Megjött a rendszámfelismerő lekérdezés."},
 {id:"surgossegi", l:"A Szent János éjszakai betegnaplója", req:["met_nemeth|met_kantor"], dur:120, fit:{kata:.9, bence:.85, feher:.7, bodnar:.65}, doc:"surgossegi", ok:"Megjött a sürgősségi betegnapló."}
],

leads:[
 {need:["tuz_halottak"], not:["helyszin"], x:"A tűzvizsgáló vár. Kezdd vele, a ház előtt."},
 {need:["body"], not:["doc:boncolas8"], x:"Keleti megboncolhatja az áldozatokat (Stáb)."},
 {need:["helyszin"], not:["doc:tuzvizsgalat"], x:"Hol kezdődött a tűz, belül vagy kívül? Küldd Halászt Dombival (Stáb)."},
 {need:["helyszin"], not:["erzekelok"], x:"Miért nem szóltak a füstérzékelők? Nézd meg őket a tizedik emeleten."},
 {need:["erzekelok"], not:["doc:erzekelo"], x:"A füstérzékelőket Halász megvizsgálhatja (Stáb)."},
 {need:["helyszin"], not:["met_lakatosne"], x:"A kiürített lakók a csepeli iskola tornatermében vannak. Lakatosné mindent lát."},
 {need:["bako_felvasarlas"], not:["met_bako"], x:"Bakó Richárd az irodájában van, a Lánchíd utcában."},
 {need:["bako_kulcs"], not:["doc:zarnaplo"], x:"Az okoszár mindent naplóz. Kérd le a gyártótól (Stáb)."},
 {need:["bako_lakcim"], not:["doc:anpr"], x:"Hol volt Bakó autója éjjel? A rendszámfelismerő kamerák tudják (Stáb)."},
 {need:["nemeth_vivien"], not:["met_vivien_p"], x:"Németh azt mondja, Viviennél volt Kispesten. Kérdezd meg Viviant."},
 {need:["met_nemeth"], not:["doc:surgossegi"], x:"Kik kerültek kórházba éjjel, és mikor? Kérd ki a Szent János betegnaplóját (Stáb)."},
 {need:["met_kantor"], not:["kantor_kazan"], x:"Kántor a kazánházban volt? A pinceajtó fölött kamera van."},
 {need:["hajdu_hint"], not:["hajdu_doboz"], x:"Hajdú Ferenc lakása a 10/4. Nézz körül benne."}
],

timed:[
 {id:"hirlap1", at:720, front:{h:"Pokol a tizedik emeleten",s:"Három halott a csepeli panelháztűzben – a hős futár visszament a szomszédért",b:"Rostás Dániel 27 éves futár két gyereket hozott le a füstből, aztán visszament egy 84 éves asszonyért. Egyikük sem jött ki. A tűzoltóság szándékos gyújtogatást valószínűsít. A ház tizedik emeletét egy éve vásárolja fel egy befektető."}},
 {id:"biztosito8", at:1440+600, x:"<b>Halász, SMS:</b> A gazdaságisok szerint Bakó cége ma reggel bejelentette a kárt a biztosítónál. Huszonnégy órával a tűz után."},
 {id:"vivien_sms", at:1440+1140, req:["met_nemeth"], x:{$v:{a:"<b>SMS, ismeretlen szám:</b> Vivien vagyok, Krisztián barátnője. Ha kell, megmutatom a kamerát. Ő itt volt.",b:"<b>SMS, ismeretlen szám:</b> Vivien vagyok. Krisztián azt mondta, ne beszéljek magával. Este otthon vagyok."}}},
 {id:"lili_hiv", at:2*1440+1260, req:["lili_elenged"], modal:function(S){
   if(S.alc>40){S.f.lili_hivas_rossz=1;return"<h2>Szerda, 21:00 – telefon, Bécs</h2><p>Lili hív. Kicsöng. Nem veszed fel. Egy üzenet jön: <i>„Láttam a tüzet a hírekben. Jól vagy?”</i> Reggel válaszolsz. Ő már nem.</p>"}
   S.f.lili_hivas8=1;return"<h2>Szerda, 21:00 – telefon, Bécs</h2><p>Lili: „Láttam a tüzet a hírekben. A futárt.” Hallgat. „Te is visszamennél?” Nem tudod. „Én tudom” — mondja. „Visszamennél. És ezért félek.” Fél órát beszéltek. A végén azt mondja: „Februárban hazajövök egy hétre. Nálad alszom.”</p>"}},
 {id:"pecs_hiv", at:1440+1200, req:["anna_pecs_igen|anna_pecs_rossz"], modal:function(S){
   if(S.alc>40){S.f.anna_vege=1;return"<h2>Kedd, 20:00 – telefon, Pécs</h2><p>Detti hív. Beszélsz, túl hangosan, túl lassan. Ő sokáig hallgat. „Dénes. Ittál.” Csend. „Én ezt nem tudom kétszáz kilométerről. Közelről se tudtam volna.” Leteszi. Utána egy üzenet: <i>„Vigyázz magadra. Tényleg.”</i></p>"}
   if(S.f.anna_pecs_latogat||S.f.anna_pecs_igen){S.f.anna_vissza=1;return"<h2>Kedd, 20:00 – telefon, Pécs</h2><p>Detti: „Láttam a tüzet. Csepel.” Hallgat. „Dénes. Márciusban lejár a próbaidőm. Kérdezték, maradok-e.” Csend. „Azt mondtam, majd szólok.” Te nem mondasz semmit. Ő mondja: „Hazajövök. Nem miattad. Jó, miattad is.” Nevet, röviden, a vonalon át.</p>"}
   S.f.anna_vege=1;return"<h2>Kedd, 20:00 – telefon, Pécs</h2><p>Detti: „Láttam a tüzet a hírekben.” Hosszú csend. „Tudod, mit vettem észre? Hogy nem te hívtál. Hat hete nem te hívsz.” Nem válaszolsz. „Én nem tudok egy embert kétszáz kilométerről életben tartani, aki nem akar telefonálni.” Leteszi. Nem haragból. Fáradtságból.</p>"}},
 {id:"vege", at:5*1440+1200, pat:-500, modal:"<h2>Szombat, 20:00</h2><p>Az ügyet átveszi a gazdasági bűnözés elleni osztály és a tűzoltóság közös csoportja. „Pihenjen, Mátrai” — mondja Szép Viktória. Rostás Dánielt hétfőn temetik. A koporsóját a futárcég kollégái viszik, egyenruhában.</p>"}
],

actions:{
 hajdu_titok:{loc:"otthon", l:"Hajdú horgonyos borítékait apád füzete mellé teszed", req:["hajdu_doboz","!hajdu_lead"], mins:10, f:"hajdu_titok", once:1, x:"A bádogdobozt beteszed a szekrénybe, apád jegyzetfüzete mellé. Egy fénykép, egy levél, egy doboz üres boríték. Kezd összegyűlni. Senki nem tudja, csak te."}
},

locEvents:[
 {id:"drunk", loc:"kapitanysag", when:(S,h,A)=>A.inWin(h,[8,19])&&S.alc>55, pat:-15, html:"<h2>Megszagolnak</h2><p>Szép Viktória megáll melletted. „Három halott, Mátrai. Józanul.” Továbbmegy.</p>"}
],

dyn:{
  annaKave8(S){
    if(S.alc>20)return'„Most nem, Dénes.” Ránéz a kezedre. „Ma éjjel elég részeget láttam.”';
    S.f.anna_egyutt=S.t;S.f.anna_kave8=S.t;
    return'A büfében automatás kávé, két műanyag pohár. Detti a füstről beszél, ami a betegek hajában jött be, te a futárról. Sokáig hallgattok. Aztán ő azt mondja: „Tudod, hányszor gondoltam rád az elmúlt hónapokban? Túl sokszor egy olyan emberhez, aki nem hív.” Megfogja a kezed az asztalon. „Most hívj. Ma este.” Hívod.';
  },
  hintBence8(S){
    if(!S.docs.tuzvizsgalat)return'„Hol kezdődött a tűz? Ha belül, kulcs kellett. Ha kívül, csak düh.”';
    if(S.ev.bako_kulcs&&!S.docs.zarnaplo)return'„Okoszár? Az mindent naplóz, főnök. Kérjük le.”';
    return'„Rostás kétszer ment vissza. Én egyszer se.” Hallgat. „Bocs. Nem ez a kérdés.”';
  },
  hintKata8(S){
    if(S.f.met_nemeth&&!S.docs.surgossegi)return'„Aki gyújtogat, gyakran megég. Kérjük ki a Szent János betegnaplóját, ki jött be éjjel, mivel.”';
    if(S.f.nemeth_vivien&&!S.f.met_vivien_p)return'„A barátnő. Ha alibi, nézd meg, mivel bizonyítja.”';
    if(S.f.bako_lakcim&&!S.docs.anpr)return'„Bakó Budakeszin volt? Az Audiját minden híd látja. Kérd le.”';
    return'„A gondnok gyanús, mert büntetett. Ezért nem ő az. Túl kényelmes.”';
  },
  hintHalasz8(S){
    if(S.f.erzekelok&&!S.docs.erzekelo)return'„Hozd be az érzékelőket. Ha valaki elnémította, nyomot hagyott.”';
    if(S.f.helyszin&&!S.docs.tuzvizsgalat)return'„Dombival felmegyek a tizedikre, ha elküldesz. A tűz megmondja, honnan jött. Mindig megmondja.”';
    return'„Hamu, Dénes. Minden hamu. De a hamu is beszél, csak lassan.”';
  },
  feherJozan8(S){
    const d=(S.drinks||0);
    if(!S.f.aa1){S.f.aa1=S.t;return'Ír egy címet egy cetlire. „Templomalagsor, esténként hattól. Januárban ott a legmelegebb a városban.”'}
    if(d===0)return'„Egy hős futár, akit nem tudott megmenteni. Ez a fajta ügy, amiért a régi énje inna.” Rád néz. „Hány napja?” Megmondod. „Akkor ma este is legyen eggyel több.”';
    return'Ránéz a kezedre. „Ittál.” Nem kérdés. „Rostásért?” Nem válaszolsz.';
  },
  laciC8(S){
    const A=['Laci forralt bort tesz eléd, aztán meggondolja magát, és elveszi. Teát hoz. „Bocs. Megszokás.”',
      '„A tűz rosszabb, mint a víz” — mondja Laci, a pohárba nézve. „A víz után van mit kitakarítani. A tűz után nincs.”',
      'Laci a pult alól előveszi apád régi fröccsös poharát, leteszi eléd, üresen. „Csak hogy itt legyen” — mondja. Nem töltöd meg.'];
    S.f.lc8=(S.f.lc8||0)+1;return A[(S.f.lc8-1)%A.length];
  },
  sanyiC8(S){
    if((S.drinks||0)>0)return'Ülsz a körben. Benedek atya az ajtóban áll, és mindenkit figyel. Sanyi nem beszél ma. A végén odasúgja: „Ittál. Holnap ne. És vigyázz, kinek beszélsz itt.”';
    return'Ülsz a körben. Valaki egy tűzről beszél, amiben a gyerekkori háza égett le, részegen, a saját cigarettájától. Te elmondod a futárt. Sanyi a végén azt mondja: „Vannak emberek, akik visszamennek. Te is ilyen vagy, testvér. Csak vigyázz, hogy ne a pohárért menj vissza.” Benedek atya az ajtóban áll, és mosolyog. Sanyi nem.';
  },
  liliC8(S){
    const A=['Lili fejhallgatóval gyakorol, csak a billentyűk koppanása hallatszik. Egyszer leveszi. „Hármasra vizsgáztam szolfézsből.” Te sem tudnál jobbat. „Tudom” — mondja. — „Azért mondom.”',
      '„A futár anyja a hírekben azt mondta, a fia mindig a kezébe adta a csomagot.” Lili a kezét nézi. „Szerinted számít, hogy kinek a kezébe adod a dolgokat?” Igen. „Akkor jó.”',
      'Lili teát főz, és melléd ül. „Nagyapa füzete még mindig az asztalon van.” Igen. „Akkor még nem fejezted be.” Nem.'];
    S.f.lo8=(S.f.lo8||0)+1;S.crave=Math.max(0,S.crave-10);return A[(S.f.lo8-1)%A.length];
  }
},
rejectExtra:{},
bonus:function(S){const b=[];if(S.f.lili_hivas8||S.f.lili_betu)b.push([5,'Ott voltál Lilinek']);if((S.drinks||0)===0)b.push([5,'Józan maradtál']);if(S.f.met_rostasne)b.push([5,'Leültél Rostás anyjával']);return b},
solveGoal:{$v:{a:["bako_bent","bako_elokeszit","bako_penz"],b:["nemeth_higito","nemeth_ott","nemeth_bosszu"]}},
solveSkip:["ad"],

end:{
 win:function(S){
  let t="";
  if(S.variant==="a"){
   t+="<p>Bakó Richárd az ügyvédjével érkezik, és az első órában csak a kasmírpulóvere ujját igazgatja. Amikor eléteszed a zárnaplót, az Audi két időbélyegét és a füstérzékelő fedelét a saját ujjnyomatával, az ügyvéd kér egy szünetet. Utána Bakó egyetlen mondatot mond: „Az a lakás üres volt.” Rád néz, mintha te értenéd félre. „Én egy üres lakást gyújtottam fel. A többit a füst csinálta.”</p>";
   t+="<p>A bíróság szerint nem. Életfogytiglan, harminc év után feltételessel. A tizedik emeletet a bank árverezi el. Senki nem veszi meg.</p>";
  }else{
   t+="<p>Németh Krisztián nem kér ügyvédet. Leteszi a bekötött kezét az asztalra, mint egy bizonyítékot. „A lakását akartam. Az üreset. Hogy neki is fájjon.” Sokáig hallgat. „A zacskót azért tettem az érzékelőre, hogy ne szóljon, mielőtt eltűnök. Nem gondoltam…” Elcsuklik. „Margit néni mindig adott a gyerekeimnek csokit.” Rostás nevét nem tudja kimondani.</p>";
   t+="<p>Tizenöt év. A gyerekei a nagymamánál maradnak, Szolnokon. Bakó megkapja a biztosítást, és tavasszal felújítja a tizedik emeletet. Loftok, üvegkorláttal. Az egyik lakás ára annyi, mint a három halott együttes élete során keresett összes pénz.</p>";
  }
  return t+c8EndCommon(S);
 },
 wrong:{$v:{
  a:{nemeth:"<p>Németh Krisztiánt letartóztatják. A fenyegetés, a tároló, a kilakoltatás: a sajtó imádja a dühös apát. A tárgyaláson Vivien ajtókamerája megmutatja, hogy egész éjjel ki se lépett. Felmentik, de addigra a gyerekeit elhelyezték, és ő utcán van.</p><p>Bakó Richárd megkapja a negyvenmilliót, és tavasszal felújítja a tizedik emeletet. Loftok, üvegkorláttal.</p>",
     kantor:"<p>Kántor Gábort letartóztatják. Az 1999-es autó, a kulcsok, a felmondás: a vád egyszerű. A tárgyaláson a kazánház kamerája megmutatja, hol volt. Felmentik. A ház nem veszi vissza.</p><p>Bakó Richárd megkapja a negyvenmilliót.</p>"},
  b:{bako:"<p>Bakó Richárd ellen vádat emelnek. Az ügyvédei a tárgyaláson lejátsszák a budakeszi kamerafelvételt, az Audit a garázsban, a telefont az átjátszón. Felmentik, és kártérítést kér az államtól. Megkapja.</p><p>Németh Krisztián a gyerekeivel Szolnokra költözik, az anyjához. A bekötött kezét senki nem kérdezi.</p>",
     kantor:"<p>Kántor Gábort letartóztatják. Az 1999-es autó, a kulcsok, a felmondás: a vád egyszerű. A tárgyaláson a kazánház kamerája megmutatja, hol volt. Felmentik. A ház nem veszi vissza.</p><p>Németh Krisztián Szolnokra költözik. A bekötött kezét senki nem kérdezi.</p>"}
 }},
 fired:"<p>Az ügyet más viszi tovább. Téged szabadságra küldenek.</p><p>Rostás Dániel temetésére elmész, hátul állsz. A futárcég kollégái egyenruhában viszik a koporsót. Az anyja odajön hozzád, és csak annyit mond: „Fázott?” Nem tudod, mit válaszolj.</p>"
}
};

function c8EndCommon(S){
  let t="";
  t+="<p>Rostás Dánielt hétfőn temetik. A futárcég kollégái viszik a koporsót, egyenruhában. A sírra valaki egy csomagot tesz, a címkéjén kézzel: <i>„Kézbe adva.”</i></p>";
  if(S.f.hajdu_lead)t+="<p>Hajdú Ferenc bádogdoboza Szép Viktória asztalára kerül, a sárga akta mellé. A vizsgálat már nem egy levél. Szép egyszer megáll az irodád ajtajában, és azt mondja: „A horgonyos raktár 1994-ben a Duna Hajózási Rt.-é volt. Kié most, Mátrai?” Nem várja meg a választ.</p>";
  else if(S.f.hajdu_titok)t+="<p>Hajdú dobozát a szekrényedben tartod, apád füzete mellett. Egy fénykép, egy levél, egy doboz üres boríték. Néha éjjel kinyitod a szekrényt, és csak nézed.</p>";
  else if(S.f.hajdu_futar)t+="<p>Hajdú Ferenc horgonyos borítékai a bizonyítékraktárba kerülnek, egy dobozba, amit senki nem nyit ki. Kalapban járt, bottal. Ő hordta a pénzt. Most már nem hordja senki. Vagy valaki más.</p>";
  if(S.f.lili_betu)t+="<p>K vagy L. Rövid név. Lili egy cetlire írja, és a hűtőre ragasztja, egy mágnessel, ami egy zongorát formáz. Minden reggel látod.</p>";
  if(S.f.anna_vissza)t+="<p>Detti márciusban hazajön Pécsről. A pályaudvaron vársz, virággal, amit a Keleti előtt vettél, és ami már hervad. Azt mondja, ez a legszebb hervadt virág, amit valaha kapott.</p>";
  else if(S.f.anna_vege)t+="<p>Detti nem hív többet. Februárban egy közös ismerőstől hallod, hogy Pécsen marad. Egy este a Kéményseprő előtt állsz, aztán továbbmész.</p>";
  else if(S.f.anna_kave8)t+="<p>Aznap este felhívod Dettit. Egy órát beszéltek. Másnap is. Harmadnap átjön, egy doboz pogácsával, amit a kórházi büféből vett, és ami borzalmas.</p>";
  if(S.f.sanyi_benedek)t+="<p>Sanyi a gyűlés után a templomlépcsőn áll, és a plébánia ablakait nézi. Nem mondja meg, mire gondol. Te nem kérdezed. Még.</p>";
  if((S.drinks||0)===0)t+="<p>Egy év józanság közeleg. Sanyi azt mondja, akkor kapsz egy érmét. Azt mondod, nem kell. Azt mondja, nem neked kell, hanem annak, aki melletted ül, és még nem hiszi el, hogy lehet.</p>";
  else t+="<p>Szombat éjjel a Hordóban ülsz. Laci forralt bort tölt, és apád üres poharát odateszi melléd. Te megiszod a sajátodat. Az övé üres marad.</p>";
  return t;
}
