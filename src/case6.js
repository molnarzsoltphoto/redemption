// ===== 6. ÜGY: NÁSZNÉP =====
CASES.c6 = {
id:"c6", num:"6. ügy ·", title:"Násznép", tagline:"Október. Lakodalom a Római-parton. Éjfél előtt a vőlegény apja pohárköszöntőt mond. Éjfél után halott.",
date:[2027,9,10], par:4, variants:["a","b"],
order:["ilona","kardos","mark"],
start:{t:100, loc:"kuria"},
onStart:function(S,A){S.f.body=1;S.alc=S.f.aa_beszed?0:30;S.fat=45;S.crave=S.f.aa_beszed?35:20;A.addEv("fodor_halal")},
intro:function(S,A){
  let t="<p>Vasárnap, október 10., 01:10. A telefon a párnán rezeg. Dr. Szép Viktória: „Római-part, Malomkert rendezvényház. Lakodalom. A vőlegény apja összeesett a pohárköszöntő után, a Szent Jánosban fél egykor meghalt.” Szünet. „Fodor Ákos. Építési vállalkozó. Ha szívroham, reggel lezárjuk. Ha nem, magáé.”</p>";
  t+="<p>01:40. A Malomkertben még ég minden lámpa. A zenekar elpakolt, a menyasszony a lépcsőn ül, fehérben, mezítláb, a cipője a kezében. Hetven vendég vár a teremben, és mindenki egyszerre akar hazamenni. A járőrök reggel nyolcig tudják itt tartani őket.</p>";
  if(S.f.bence_halott)t+="<p>Bence asztalán még mindig ott a sárga cetli. Senki nem vette le. Szép Viktória egyedül küldött ki.</p>";
  else if(S.f.bence_mentve)t+="<p>Bence augusztus óta újra dolgozik. Ő ért ide előbb. Az ajtót kitámasztotta egy székkel. Mostanában minden ajtót kitámaszt.</p>";
  if(S.f.aa_beszed)t+="<p>Nyitott pult, ingyen pálinka, hetven ember, aki már nem figyel. Számolod a napokat. Ma is.</p>";
  else t+="<p>A Hordóból hívtak ki. A szádban még ott a körte íze, és a teremben mindenki pálinkát iszik.</p>";
  if(S.f.anna_egyutt)t+="<p>Detti ügyeletes ma éjjel a Szent Jánosban. Ha Fodor Ákos ott halt meg, ő látta utoljára élve.</p>";
  return t;
},

suspects:{
 ilona:{name:"Sárközi Ilona", short:"Ilona", reveal:["met_ilona_k","met_ilona"]},
 kardos:{name:"Kardos Péter", short:"Kardos", reveal:["met_kardos_k","met_kardos"]},
 mark:{name:"Fodor Márk", short:"Márk", reveal:["met_mark_k","met_mark"]}
},
solution:{$v:{a:{main:"ilona"},b:{main:"kardos"}}},
bossLine:"„Hetven tanú, egy halott, és mindenki részeg volt. Hozzon nevet, főhadnagy, mielőtt a sajtó hoz egyet.”",

ev:{
 fodor_halal:{n:"Halál a lakodalomban", d:"Fodor Ákos, 61, a vőlegény apja. 22:45-kor pohárköszöntőt mondott, 23:10-kor rosszul lett, 23:40-kor összeesett. A Szent Jánosban 00:50-kor halt meg. Ritmuszavar."},
 sarga_lat:{n:"„Minden sárga”", d:"Fodor 23:10-kor azt mondta, hogy hányingere van, és hogy a lámpák körül minden sárga. A sárga látás a digitálisz-mérgezés klasszikus tünete."},
 fodor_gyogyszer:{n:"Fodor szívgyógyszere", d:"Fodor évek óta napi egy 0,25 mg-os digoxint szedett, este tízkor, a zakója belső zsebében hordott heti adagolóból. Réka töltötte fel vasárnaponként."},
 adagolo:{n:"A heti adagoló", d:"Fodor zakójának belső zsebében egy hétrekeszes gyógyszeradagoló. A szombat esti rekesz üres."},
 szilank:{n:"Szilánkok a kukában", d:"A Malomkert konyhai szemetesében egy összetört kristálykupica szilánkjai. A pincér szerint Fodor ejtette le, amikor összeesett."},
 toxikologia:{n:"Digoxin a vérben", d:"Fodor szérum-digoxinszintje 18 ng/ml, a terápiás szint kilencszerese. A halál oka digoxin okozta szívritmuszavar."},
 ultetes:{n:"Kardos a zakó mellett", d:"A főasztalnál Kardos Péter, a násznagy, Fodor mellett ült. Fodor zakója kettejük között lógott a széktámlán, egész este.", sup:[["kardos","A"]]},
 ilona_toltotte:{n:"Ilona töltötte a pálinkát", d:"A 22:45-ös koccintáshoz a menyasszony anyja töltött a főasztalnak, a néhai férje birspálinkájából, a saját kristálykupicáiba.", sup:[["ilona","A"]]},
 ilona_gyogyszeresz:{n:"A gyógyszerész", d:"Sárközi Ilona gyógyszerész, saját patikája van Óbudán. Digoxin a polcán, minden nap.", sup:[["ilona","M"]]},
 ilona_inditek:{n:"A Sárközi-cég bukása", d:"2009-ben Fodor egy hitellel és egy hamis szakértői véleménnyel bekebelezte Sárközi Ilona férjének építőcégét. A férj egy évvel később szívrohamban meghalt, ötvenkét évesen.", sup:[["ilona","I"]]},
 audit:{n:"Hétfőig kapott időt", d:"Fodor egy belső ellenőrzésből megtudta, hogy Kardos három év alatt 140 millió forintot vett ki a cégből. Hétfő reggelig adott neki időt, hogy bevallja. Utána feljelenti.", sup:[["kardos","I"]]},
 kulcsember:{n:"Kulcsember-biztosítás", d:"A cégnek kulcsember-biztosítása volt Fodor életére, 300 millió forint. A kedvezményezett a cég, amelynek egyedüli vezetője Fodor halálával Kardos Péter lett.", sup:[["kardos","I"]]},
 kardos_anya:{n:"Kardos anyjának gyógyszere", d:"Kardos 82 éves anyja szívbeteg, és digoxint szed. A receptjeit és a gyógyszereit Kardos váltja ki és viszi el neki.", sup:[["kardos","M"]]},
 hazassagi:{n:"Házassági szerződés", d:"Fodor házassági szerződést követelt Márktól. Ha nem írja alá, kitagadja. Márk nem írta alá.", sup:[["mark","I"]]},
 veszekedes:{n:"Veszekedés a teraszon", d:"22:30-kor Márk és az apja kettesben veszekedtek a teraszon. A pincér hallotta, ahogy Márk azt kiabálja: „Bárcsak meghalnál!”", sup:[["mark","A"]]},
 mark_alibi:{n:"Márk a színpadon", d:{$v:{a:"A videón: a koccintásnál Márk a színpadon, a zenekarnál áll, húsz méterre a főasztaltól. A pohara a dobos kezében.",b:"A fotókon: a nyitótánc alatt, 21:30 és 21:45 között Márk végig a parketten, a menyasszonnyal. Egyetlen képen sincs a főasztal közelében."}}, clears:"mark"},
 foto1994:{n:"Fénykép, 1994", d:"Fodor széfjében: 1994, a Révész-komp fedélzete. A fiatal Fodor Ákos, Vámos Lajos révész, egy kapitánysapkás férfi, és egy negyedik, akinek az arcát valaki gondosan kivágta. Hátul ceruzával: „Mindenki megkapta a részét.”"},
 gergo_vallomas:{n:"A pincér vallomása", d:{$v:{a:"Gergő: a koccintásnál Ilona asszony a tálcáról osztotta a kupicákat, de Fodornak nem a tálcáról adott. A táskájából vett elő egyet, a bal kezében tartotta: „Ez a férjemé volt. Most neked jár.”",b:"Gergő: a nyitótánc alatt mindenki a parkettet nézte. Kardos úr egyedül állt a főasztalnál, és a Fodor úr zakójának zsebében kotorászott. Azt hittem, cigarettát keres."}}, sup:{$v:{a:[["ilona","A"]],b:[["kardos","A"]]}}},
 // A változat
 szilank_pozitiv:{var:"a", n:"Digoxin a kupicában", d:"A szilánkokon beszáradt pálinkamaradvány: benne nagy koncentrációban digoxin és a belsőleges oldat vivőanyagai (alkohol, propilénglikol).", sup:[["ilona","M"]]},
 adagolo_rendben:{var:"a", n:"Az adagoló rendben", d:"Az adagoló minden megmaradt rekeszében egy-egy 0,25 mg-os gyári digoxintabletta. Semmi idegen. Fodor a szokásos adagját vette be este tízkor.", clears:"kardos"},
 kupica_atadas:{var:"a", n:"A hatodik kupica", d:"A videón: Ilona öt kupicát a tálcáról oszt ki, a hatodikat a bal kezéből adja Fodornak. Fodor koccint és azonnal kiissza. Más nem nyúl a poharához.", sup:[["ilona","A"]]},
 selejt:{var:"a", n:"Selejtezett oldat", d:"A Sárközi-patika selejtezési naplója, szeptember 30.: „Digoxin belsőleges oldat, 60 ml, 1 üveg, eltört. Selejtezte: Sárközi I.” Üvegszilánkot senki nem látott.", sup:[["ilona","M"]]},
 ilona_level:{var:"a", n:"A férj levele", d:"Sárközi Gábor 2010-es, el nem küldött levele: a bankos ismerős nevével, az összeggel, amit Fodor neki fizetett, hogy a hitelt felmondják. Ilona szeptemberben találta meg a padláson.", sup:[["ilona","I"]]},
 kardos_terasz:{var:"a", n:"Kardos a teraszon", d:"A fotókon Kardos 21:20 és 22:15 között a teraszon szivarozik a fotóssal, egy üveg whiskyvel. A nyitótánc alatt nincs a teremben."},
 recept_rendben:{var:"a", n:"Az anya receptjei", d:"Kardos anyjának digoxinreceptjei havonta egyszer, rendszeresen kiváltva. Semmi szokatlan."},
 ilona_pohar:{var:"a", n:"A mérgezett pohár", d:"A méreg a kupicában volt, és azt a kupicát Ilona adta Fodor kezébe, nem a tálcáról. Fodor kiitta. Senki más nem érintette.", sup:[["ilona","A"]], ded:true},
 ilona_oldat:{var:"a", n:"A belsőleges oldat", d:"A kupicában belsőleges digoxinoldat volt. Kilenc nappal az esküvő előtt egy ilyen üveg „eltört” Ilona patikájában, és ő maga selejtezte.", sup:[["ilona","M"]], ded:true},
 ilona_bosszu:{var:"a", n:"Tizenhét év után", d:"Ilona szeptemberben megtudta, hogy Fodor lefizette a bankost, aki felmondta a férje hitelét. Egy hónappal a lánya esküvője előtt.", sup:[["ilona","I"]], ded:true},
 // B változat
 pohar_tiszta:{var:"b", n:"A kupica tiszta", d:"A szilánkokon csak birspálinka maradványa. Digoxin nincs. A méreg nem a pohárban volt.", clears:"ilona"},
 kapszula:{var:"b", n:"Idegen kapszula", d:"Az adagoló vasárnap reggeli rekeszében egy átlátszó zselatinkapszula, benne 2,4 mg porított digoxin, kilencszeres adag. Fodor tablettát szedett, soha nem kapszulát. A szombat esti rekeszben is ugyanilyen lehetett.", sup:[["kardos","M"]]},
 foto_zako:{var:"b", n:"21:34", d:"A fotós sorozatán, 21:34: a háttérben, a főasztalnál Kardos egyedül áll, a keze Fodor széktámlára akasztott zakójának belső zsebében. Mindenki más a parkettet nézi.", sup:[["kardos","A"]]},
 koccintas_talca:{var:"b", n:"Körbeadott tálca", d:"A videón: Ilona tálcán viszi körbe a kupicákat, mindenki maga vesz el egyet. Fodor a harmadikat veszi el, véletlenszerűen."},
 patika_rendben:{var:"b", n:"A patika rendben", d:"A Sárközi-patika digoxinkészlete egyezik a nyilvántartással. Selejtezés az elmúlt fél évben nem volt."},
 recept_gyors:{var:"b", n:"Két recept három hét alatt", d:"Kardos anyjának digoxinreceptjét szeptemberben háromhetes különbséggel kétszer váltották ki, két különböző patikában. Mindkétszer Kardos Péter vitte el.", sup:[["kardos","M"]]},
 anya_kapszula:{var:"b", n:"Üres kapszulák", d:"Kardos anyjánál, a gyógyszeres dobozban egy bontott doboz üres zselatinkapszula, 00-s méret. Az anya digoxinos dobozában alig maradt tabletta, pedig két hete váltották ki.", sup:[["kardos","M"]]},
 kardos_kapszula:{var:"b", n:"Az anya tablettái", d:"A kapszulában porított digoxin volt. Kardos anyjának tablettái fogynak, a dobozánál üres kapszulák, és Kardos háromhetente váltja ki a receptet.", sup:[["kardos","M"]], ded:true},
 kardos_zako:{var:"b", n:"A nyitótánc alatt", d:"21:34-kor, amikor mindenki a parkettet nézte, Kardos a zakó belső zsebében volt. 22:00-kor Fodor bevette a szombat esti rekesz tartalmát.", sup:[["kardos","A"]], ded:true},
 // közös következtetések
 digoxin_gyanu:{n:"Nem szívroham", d:"Sárga látás, hányinger, ritmuszavar, és egy férfi, aki digoxint szed. Ez nem szívroham: digitálisz-mérgezés.", ded:true},
 nem_baleset:{n:"Nem tévedés", d:"A vérszint kilencszeres. Ahhoz egyszerre tíz tablettát kellett volna bevennie. Az adagolóból csak a szombat esti rekesz hiányzik. Valaki megmérgezte.", ded:true},
 kardos_inditek:{n:"300 millió és egy hétfő", d:"Fodor hétfőn feljelentette volna Kardost sikkasztásért. Ha vasárnapra meghal, nincs feljelentés, és a cég 300 milliót kap a biztosítótól.", sup:[["kardos","I"]], ded:true}
},

ded:[
 {a:"sarga_lat", b:"fodor_gyogyszer", g:"digoxin_gyanu", t:"Sárga fény a lámpák körül. Egy férfi, aki tíz éve digoxint szed. Apád egyszer azt mondta: a méreg a legintimebb fegyver. Közel kell lenni hozzá."},
 {a:"toxikologia", b:"adagolo", g:"nem_baleset", t:"Kilencszeres szint. Az adagolóból egyetlen rekesz üres. Fodor nem tévedett. Valaki más tévedett helyette."},
 {a:"audit", b:"kulcsember", g:"kardos_inditek", t:"Hétfő reggel feljelentés, vagy vasárnap reggel 300 millió. Kardosnak egy éjszakája volt, hogy válasszon."},
 {var:"a", a:"szilank_pozitiv", b:"kupica_atadas", g:"ilona_pohar", t:"A méreg a kupicában volt. A videón Ilona a bal kezéből adja Fodornak, nem a tálcáról. „Ez a férjemé volt.”"},
 {var:"a", a:"szilank_pozitiv", b:"gergo_vallomas", g:"ilona_pohar", t:"A méreg a kupicában volt. Gergő látta: Ilona a táskájából vette elő Fodor poharát."},
 {var:"a", a:"selejt", b:"szilank_pozitiv", g:"ilona_oldat", t:"Belsőleges oldat a pálinkában. Kilenc nappal korábban egy ilyen üveg „eltört” Ilona patikájában. Ő selejtezte. Senki nem látta a szilánkokat."},
 {var:"a", a:"ilona_level", b:"ilona_inditek", g:"ilona_bosszu", t:"Tizenhét évig azt hitte, a férje rosszul gazdálkodott. Szeptemberben megtalálta a levelet. A lánya októberben Fodor fiához ment feleségül."},
 {var:"b", a:"kapszula", b:"anya_kapszula", g:"kardos_kapszula", t:"Üres kapszulák az anyja fiókjában, fogyó tabletták. Kardos minden hónapban elhozza a gyógyszereit. Szeptemberben kétszer."},
 {var:"b", a:"kapszula", b:"recept_gyors", g:"kardos_kapszula", t:"Porított digoxin egy kapszulában. Kardos szeptemberben két patikában váltotta ki az anyja receptjét, három hét különbséggel."},
 {var:"b", a:"kapszula", b:"foto_zako", g:"kardos_zako", t:"21:34, a nyitótánc. Kardos keze a zakóban. 22:00, Fodor bevette a szombat esti rekeszt. Egy kapszulát, amit soha nem szedett."},
 {var:"b", a:"kapszula", b:"gergo_vallomas", g:"kardos_zako", t:"A pincér látta: a nyitótánc alatt Kardos a zakó zsebében kotorászott. Fél órával később Fodor bevette a gyógyszerét."}
],

docs:{
 boncolas6:{t:"Boncolási jegyzőkönyv – Fodor Ákos", b:"IGAZSÁGÜGYI ORVOSTANI INTÉZET\nBoncolt: dr. Keleti Mária\n\nNév: Fodor Ákos, 61 é.\nKórelőzmény: pitvarfibrilláció, tartós digoxinkezelés (0,25 mg/nap).\n\nSzív: mérsékelten megnagyobbodott, friss elhalás nincs. Koszorúerek: szűkület nincs. Ez nem szívroham.\n[[toxikologia|Toxikológia: szérum-digoxin 18 ng/ml (terápiás tartomány 0,8–2,0). Kálium emelkedett. Halál oka: digoxinmérgezés okozta kamrai ritmuszavar.]]\nGyomortartalom: alkohol, vacsoramaradvány, tablettamaradvány nem azonosítható.\nA bevitel ideje a tünetek alapján 21:30 és 23:00 között valószínű.\n\n— K. M., kézzel: „Kilencszeres, Dénes. Ezt nem lehet véletlenül. És nem lehet hosszan tervezni sem. Valaki tudta, mit szed.”"},
 szilank_labor:{t:"Laborjelentés – kupicaszilánkok", b:{$v:{
  a:"BŰNÜGYI TECHNIKAI LABOR\nVizsgálta: Halász Tamás\n\nMinta: ólomkristály kupica szilánkjai (11 db), a Malomkert konyhai hulladékából.\nUjjnyomat: Fodor Á., részleges, a talpon.\n[[szilank_pozitiv|A belső felületen beszáradt maradvány: etanol, birsalma-aromák, valamint nagy koncentrációban digoxin, propilénglikol és metil-parahidroxibenzoát. Ez utóbbiak a belsőleges digoxinoldat segédanyagai. Tablettából nem származhat.]]\n\n— H. T.: „Valaki folyékony digoxint öntött a pálinkába, Dénes. Ilyet nem kapsz a sarki boltban. Patika kell hozzá.”",
  b:"BŰNÜGYI TECHNIKAI LABOR\nVizsgálta: Halász Tamás\n\nMinta: ólomkristály kupica szilánkjai (11 db), a Malomkert konyhai hulladékából.\nUjjnyomat: Fodor Á., részleges, a talpon.\n[[pohar_tiszta|A belső felületen beszáradt maradvány: etanol, birsalma-aromák. Digoxin, egyéb gyógyszerhatóanyag nem mutatható ki.]]\n\n— H. T.: „Tiszta pálinka. Jó pálinka egyébként. A méreg nem itt ment le, Dénes.”"}}},
 adagolo_labor:{t:"Laborjelentés – heti gyógyszeradagoló", b:{$v:{
  a:"BŰNÜGYI TECHNIKAI LABOR\nVizsgálta: Halász Tamás, konzultáns: dr. Keleti Mária\n\nMinta: hétrekeszes műanyag gyógyszeradagoló, Fodor Á. zakójából.\nRekeszek: hétfő–szombat reggel üres (bevett adagok). Szombat este: üres.\n[[adagolo_rendben|Vasárnap reggel, vasárnap este: 1-1 db 0,25 mg-os Lanoxin tabletta, gyári bevonat, sértetlen. A tabletták összetétele és mennyisége megfelel a rendeltnek.]]\nUjjnyomatok: Fodor Á., Fodorné R.\n\n— H. T.: „Az adagoló rendben van. Amit este tízkor bevett, az a saját gyógyszere volt.”",
  b:"BŰNÜGYI TECHNIKAI LABOR\nVizsgálta: Halász Tamás, konzultáns: dr. Keleti Mária\n\nMinta: hétrekeszes műanyag gyógyszeradagoló, Fodor Á. zakójából.\nRekeszek: hétfő–szombat reggel üres (bevett adagok). Szombat este: üres.\n[[kapszula|Vasárnap reggel: 1 db átlátszó zselatinkapszula, 00-s méret. Tartalma: 2,4 mg porított digoxin, laktóz, burgonyakeményítő: összetört tabletták. Vasárnap este: 1 db 0,25 mg-os Lanoxin tabletta, gyári.]]\nUjjnyomatok: Fodor Á., Fodorné R. A kapszulán nincs értékelhető nyom.\n\n— H. T.: „Valaki kicserélte a hétvégi adagot. Biztos, ami biztos, kettőt is. Ha a szombat esti nem öli meg, a vasárnap reggeli igen.”"}}},
 video:{t:"Videófelvétel – pohárköszöntő, 22:44–22:49", b:{$v:{
  a:"LUKÁCS BÁLINT – esküvői videó, nyers anyag, 3. kamera\n\n22:44 Fodor Ákos feláll, megkocogtatja a poharát. A terem elcsendesedik.\n22:45 Sárközi Ilona egy ezüsttálcával a főasztalhoz lép. A tálcán öt kristálykupica.\n[[kupica_atadas|22:45:20 Ilona a tálcáról kiosztja az öt kupicát: Réka, Kardos, Dóra, a saját helye, Márk helye (üres). A hatodikat a bal kezéből adja át Fodornak. Valamit mond, a hang nem érthető. Fodor elmosolyodik, koccint, és egy hajtásra kiissza. A poharat senki más nem érinti.]]\n22:47 Fodor beszéde: „…a régi sérelmeket ma eltemetjük…” Taps.\n[[mark_alibi|22:46 Márk a színpadon, a zenekarnál áll, a poharát a dobos tartja. Nem jön le a beszéd végéig.]]",
  b:"LUKÁCS BÁLINT – esküvői videó, nyers anyag, 3. kamera\n\n22:44 Fodor Ákos feláll, megkocogtatja a poharát. A terem elcsendesedik.\n22:45 Sárközi Ilona egy ezüsttálcával a főasztalhoz lép. A tálcán hat kristálykupica.\n[[koccintas_talca|22:45:20 Ilona körbeviszi a tálcát, mindenki maga vesz el egy kupicát. Fodor a harmadikat veszi el, Réka után, oda se nézve. Ilona a tálcát leteszi, és utolsóként veszi el a sajátját.]]\n22:47 Fodor beszéde: „…a régi sérelmeket ma eltemetjük…” Taps.\nA felvétel 22:49-kor megszakad: elfogyott a kártya."}}},
 fotok:{t:"Fotóválogatás – Malomkert, 21:00–22:30", b:{$v:{
  a:"Válogatta: a stáb, a fotós 2140 képéből. Megjegyzések a margón.\n\n21:30–21:45 nyitótánc. A vendégek a parkett körül.\n[[kardos_terasz|21:20–22:15: Kardos Péter a teraszon, a fotóssal szivarozik, egy üveg whisky mellett. 14 kép, időbélyeggel. A nyitótánc alatt nincs a teremben.]]\n[[mark_alibi|21:30–21:45: Márk végig a parketten, a menyasszonnyal, utána az anyósával táncol.]]\n22:00: Fodor a főasztalnál, egy pohár vízzel, a tenyerében egy tabletta. Réka nézi.",
  b:"Válogatta: a stáb, a fotós 2140 képéből. Megjegyzések a margón.\n\n21:30–21:45 nyitótánc. A vendégek a parkett körül, mindenki a pár felé néz.\n[[foto_zako|21:34:12, a 0871-es kép háttere, nagyítva: a főasztalnál Kardos Péter egyedül áll, a jobb keze Fodor széktámlára akasztott zakójának belső zsebében. A következő képen (21:34:40) már ül, és tapsol.]]\n[[mark_alibi|21:30–21:45: Márk végig a parketten, a menyasszonnyal. Egyetlen képen sincs a főasztal közelében.]]\n22:00: Fodor a főasztalnál, egy pohár vízzel, a tenyerében valami kicsi és átlátszó. Réka nézi."}}},
 selejt:{t:"Sárközi-patika – selejtezési és kábítószer-nyilvántartás", b:{$v:{
  a:"SÁRKÖZI GYÓGYSZERTÁR, Óbuda – belső nyilvántartás, 2027. szeptember\n\n09. 12. Insulin, 1 tollbetét, lejárt. Selejtezte: Varga B.\n[[selejt|09. 30. Digoxin belsőleges oldat 0,05 mg/ml, 60 ml, 1 üveg, eltört a raktárban. Selejtezte: Sárközi I. (A raktáros szerint aznap nem volt üvegtörés.)]]\n10. 04. Morfin, 1 amp., lejárt. Selejtezte: Varga B.",
  b:"SÁRKÖZI GYÓGYSZERTÁR, Óbuda – belső nyilvántartás, 2027. szeptember\n\n09. 12. Insulin, 1 tollbetét, lejárt. Selejtezte: Varga B.\n10. 04. Morfin, 1 amp., lejárt. Selejtezte: Varga B.\n[[patika_rendben|Digoxin (tabletta és belsőleges oldat): a készlet egyezik a forgalommal. Selejtezés április óta nem volt.]]"}}},
 recept:{t:"Vényadatok – Kardos Péterné", b:{$v:{
  a:"NEAK – vényforgalmi lekérdezés\nBeteg: Kardos Péterné, szül. 1945\n\nLanoxin 0,25 mg, 30 db: kiváltva 07. 08., 08. 07., 09. 06., 10. 05.\n[[recept_rendben|Havonta egyszer, mindig ugyanabban a zuglói patikában. Átvevő: Kardos Péter.]]",
  b:"NEAK – vényforgalmi lekérdezés\nBeteg: Kardos Péterné, szül. 1945\n\nLanoxin 0,25 mg, 30 db: kiváltva 07. 08., 08. 07., 09. 06.\n[[recept_gyors|09. 27. Lanoxin 0,25 mg, 30 db, kiváltva egy ferencvárosi patikában, ismétlő vényre. Átvevő: Kardos Péter.]]\nA háziorvos megjegyzése: „A beteg szerint a gyógyszere hamarabb fogy, mint kellene. Ellenőrizni.”"}}},
 audit_memo:{t:"Belső ellenőri jelentés – Fodor & Kardos Építő Kft.", b:"BIZALMAS – csak Fodor Á. ügyvezető részére\nKészítette: dr. Halmai E. könyvvizsgáló, 2027. 09. 24.\n\nA 2024–2027 közötti alvállalkozói kifizetések vizsgálata.\n[[audit|Három nem létező alvállalkozó (Duna-Mérnök Bt., KP-Gépház Kft., Rév-Bau Kft.) részére összesen 140 millió Ft kifizetés. Utalványozó minden esetben: Kardos Péter.]]\n\nFodor Á. kézírása a lap alján: „Péter. Hétfő reggel 9-ig. Utána nem én döntök.”"}
},

locs:{
 kuria:{m:"Malomkert", n:"Malomkert rendezvényház, Római-part", x:400, y:62, side:"B", crime:1, d:"A régi vízimalomból lett rendezvényház. A teremben fehér abroszok, félig evett torták, egy lufi a plafonon. A teraszon túl a Duna fekete, mint az olaj.", hs:[
   {id:"foasztal", l:"A főasztal", t:"Ültetőkártyák kalligráfiával. Fodor Ákos a közepén. Balján a felesége, Réka, jobbján Kardos Péter, a násznagy. Szemben a menyasszony anyja, Sárközi Ilona. Fodor zakója még mindig ott lóg a széktámlán, Kardos széke felé fordulva.", ev:"ultetes"},
   {id:"zako", l:"Fodor zakója", t:"A belső zsebben egy hétrekeszes gyógyszeradagoló, a fedelén filccel: Á. A szombat esti rekesz üres, a vasárnapiakban még van valami. A másik zsebben szivar, egy cetli a pohárköszöntő szövegével: „…a régi sérelmeket ma eltemetjük…”", ev:"adagolo"},
   {id:"parkett", l:"Ahol összeesett", t:"A parkettán egy szék felborítva, egy terítő félig lehúzva. Üvegszilánk nincs, valaki már felsöpörte. Egy beszáradt pálinkafolt, birsalmaszagú.", f:"szilank_hol"},
   {id:"kuka", l:"A konyhai szemetes", req:["szilank_hol|met_gergo","!szemet_el"], t:"A konyhai hulladékgyűjtő tetején, a tortamaradékok közt egy összesöpört kupac: kristályszilánkok, egy kupica talpa egészben. Kesztyűvel kiszeded, zacskóba teszed.", ev:"szilank"},
   {id:"kuka_ures", l:"A konyhai szemetes", req:["szemet_el","!szilank"], t:"A hulladékgyűjtő üres, kimosva. Hétfő reggel hatkor jött a kukásautó."},
   {id:"oltozo", l:"Személyzeti öltöző", req:["gergo_ideges"], t:"A pincérek szekrényei. Gergőé nyitva felejtve: a kabátja zsebében egy borítékban tizenkét kis zacskó fehér por, és egy füzet nevekkel és összegekkel. A lakodalmi menü mellé ez is járt, aki tudott róla.", f:"gergo_kokain"}
 ]},
 korhaz6:{m:"Kórház", n:"Szent János Kórház, sürgősségi", x:250, y:220, side:"B", d:"A sürgősségin szombat éjjel a város összes balesete. A falon a műszakbeosztás, a pulton egy kihűlt kávé. Fodor Ákost fél egykor itt nyilvánították halottnak.", hs:[]},
 otthon:{m:"Lakás", n:"Lakás a Körúton", x:612, y:338, side:"P", d:"Harmadik emelet, udvari szoba. Az ablak előtt a gesztenyefa már sárga. A konyhaasztalon egy halom akta, alatta egy zongorakotta.", hs:[]},
 kapitanysag:{m:"Kapitányság", n:"Főkapitányság", x:705, y:196, side:"P", d:"A folyosón őszi huzat. Szép Viktória ajtaja nyitva, a laborban Halász rádiója szól. Bence asztala mellett egy kitámasztott ajtó.", hs:[]},
 hordo:{m:"Hordó", n:"Hordó", x:648, y:462, side:"P", open:[15,3], d:"A Hordóban a sarokasztal üres. Laci nem ültet oda senkit. A nyerőgép villog, a rádióban egy régi Omega-szám.", hs:[]},
 intezet:{m:"Intézet", n:"Orvostani Intézet", x:792, y:474, side:"P", open:[7,19], d:"Keleti doktornő a boncterem előtt cigarettázik, pedig tilos. A hűtőkamrában Fodor Ákos öltönyben fekszik, ahogy behozták.", hs:[]},
 ilonahaz:{la:1, m:"Sárközi-patika", n:"Sárközi-patika és lakás, Óbuda", x:430, y:150, side:"B", vis:"met_ilona_k|ilona_inditek", d:"Egy régi óbudai ház földszintjén a patika, fölötte a lakás. A pult mögött barna üvegek, a falon egy bekeretezett gyógyszerészi oklevél 1995-ből. Fent egy férfi fényképe, gyászszalaggal, tizenhét éve.", hs:[
   {var:"a", id:"iroasztal", l:"A férje íróasztala", req:["met_ilona"], t:"Az íróasztalon por, kivéve egy helyen, ahol nemrég valaki egy dobozt nyitott ki. A dobozban levelek, a legfelső borítékon nincs bélyeg. Sárközi Gábor kézírása, 2010. február: egy bankos ismerős neve, egy összeg, és egy mondat: „Ákos fizetett neki, hogy felmondják.” Soha nem küldte el.", ev:"ilona_level"},
   {var:"b", id:"iroasztal", l:"A férje íróasztala", req:["met_ilona"], t:"Az íróasztalon por és fényképek. Sárközi Gábor egy építkezésen, sisakban, mellette egy fiatal Fodor Ákos, átkarolják egymást. 2005. A hátoldalon Ilona kézírása: „Megbocsátok. Dórának.” Tavalyi dátum."},
   {id:"kupicak", l:"A kupicakészlet", req:["met_ilona"], t:"A vitrinben egy ólomkristály kupicakészlet, hat helyből öt foglalt. A hatodik helyén por nincs. Mellette egy fél üveg birspálinka, kézzel írt címkével: Gábor, 2009."}
 ]},
 fodorvilla:{la:1, m:"Fodor-villa", n:"Fodor-villa, Pasarét", x:300, y:262, side:"B", vis:"met_reka_k", d:"Kertes villa, kovácsoltvas kapu, a kapubejáróban két terepjáró. A nappaliban még ott vannak a lakodalmi ajándékok, kibontatlanul. Réka a kanapén ül, és a telefonját nézi, ami nem csörög.", hs:[]},
 kardosiroda:{la:1, m:"Fodor & Kardos", n:"Fodor & Kardos Építő Kft., Váci út", x:648, y:110, side:"P", vis:"met_kardos_k|audit", d:"Üvegirodaház a Váci úton, a hatodik emeleten. A recepción gyászkeretes fénykép, alatta egy csokor, amit valaki a portán hagyott. Fodor irodájának ajtaja zárva, Kardosé nyitva.", hs:[
   {id:"szef", l:"Fodor irodája – a széf", req:["reka_kulcs"], t:"A falba épített széf Réka kódjára kinyílik. Benne: egy biztosítási kötvény, egy bizalmas jelentés, és egy régi fénykép egy borítékban. 1994, egy komp fedélzete. A Révész. A fiatal Fodor Ákos, mellette Vámos Lajos, a révész, egy kapitánysapkás férfi, és egy negyedik, akinek az arcát valaki ollóval, gondosan kivágta. A hátoldalon ceruzával: „Mindenki megkapta a részét.”", ev:["kulcsember","foto1994"], doc:"audit_memo", f:"foto1994"}
 ]},
 naszlakas:{m:"Nászlakás", n:"A fiatal pár lakása, Újlipótváros", x:545, y:152, side:"P", vis:"met_mark_k|met_dora_k", d:"Frissen festett kétszobás, a dobozok még nincsenek kipakolva. Az előszobában a menyasszonyi ruha egy fogason, mint egy szellem. Márk az erkélyen dohányzik, pedig Dóra szerint leszokott.", hs:[]},
 kardosanya:{la:1, m:"Kardosné", n:"Kardos Péterné lakása, Zugló", x:900, y:405, side:"P", vis:"kardos_anya_hol|kardos_anya", d:"Zuglói kockaház, a kertben ősszel is rózsák. Kardos Péterné nyolcvankét éves, botra támaszkodva nyit ajtót, és megkérdezi, kér-e a rendőr úr pogácsát.", hs:[
   {var:"a", id:"doboz", l:"A gyógyszeres doboz", req:["met_kardosne"], t:"A konyhaszekrényben egy cipősdoboz, benne a gyógyszerek, hetekre kiosztva, egy unoka gondos kézírásával. A Lanoxin doboza félig, a dátum stimmel. Minden rendben."},
   {var:"b", id:"doboz", l:"A gyógyszeres doboz", req:["met_kardosne"], t:"A konyhaszekrényben egy cipősdoboz. A Lanoxin dobozában négy tabletta maradt, pedig a címke szerint két hete váltották ki. Mellette egy bontott doboz, gyógyszertári: üres zselatinkapszulák, 00-s méret, száz darab, hiányzik belőle néhány.", ev:"anya_kapszula"}
 ]},
 studio:{la:1, m:"Videóstúdió", n:"Lukács Bálint stúdiója, Ferencváros", x:704, y:560, side:"P", vis:"videos_nev", open:[10,20], d:"Pinceműhely a Ráday utcában, monitorok, merevlemezek, egy kanapé, amin láthatóan valaki alszik. A falon esküvői képek: boldog emberek, akik közül azóta néhányan elváltak.", hs:[]},
 vendeglo6:{la:1, m:"Vendéglő", n:"Kéményseprő vendéglő, Buda", x:378, y:332, side:"B", vis:"anna_vacsora_hiv6", gone:"anna_vacsora6|anna_vacsora_rossz6", open:[19,23], d:"Kockás abrosz, cserépkályha, már be is gyújtottak. A pincér úgy néz rád, mintha ismerne.", hs:[]},
 zeneakademia6:{la:1, m:"Zeneakadémia", n:"Zeneakadémia, Solti terem", x:640, y:246, side:"P", vis:"lili_marad", open:[14,17], day:3, d:"Szerda délután, felvételi előmeghallgatás. A folyosón tizenhét éves zongoristák ülnek kottával a térdükön, és egyikük sem néz a másikra.", hs:[]},
 aa:{la:1, m:"NA-gyűlés", n:"NA-gyűlés, templomalagsor", x:760, y:296, side:"P", vis:"aa1", open:[18,21], d:"Összecsukható székek, filterkávé, a tábla a falon: „Csak a mai nap.” Az ablak alatt egy radiátor, ami csak akkor melegít, ha belerúgnak.", hs:[]}
},

people:{
 // a Malomkertben, reggel nyolcig
 ilona_k:{n:"Sárközi Ilona", r:"a menyasszony anyja", loc:"kuria", h:[0,8], gone:"vendegek_el", suspect:1, bio:"56 éves gyógyszerész. Szürke kosztüm, gyöngysor, egyenes hát. Az egyetlen, aki nem sír és nem iszik. A kezében egy összecsukott szalvétát gyűr.", topics:[
  {id:"ki", l:"Bemutatkozik", t:"„Sárközi Ilona. A menyasszony anyja.” Kezet nyújt, a keze hideg és száraz. „Gyógyszerész vagyok, főhadnagy. Ha azt kérdezi, mit szedett Ákos: digoxint. Mindenki tudta, aki ismerte.”", ev:"ilona_gyogyszeresz"},
  {id:"koccintas", l:"A koccintás", t:"„Én töltöttem. A férjem utolsó birspálinkájából, a saját kupicáimba. Hagyomány nálunk, a menyasszony anyja kínálja a násznépet.” Rád néz. „Tizenhét évig őriztem azt az üveget. Ma este kinyitottam. Gondoltam, itt az ideje.”", ev:"ilona_toltotte"},
  {id:"fodor", l:"Fodor Ákosról", sober:1, t:"„Harminc éve ismertem.” Kisimítja a szalvétát. „Elég volt.” Többet nem mond. A lánya a lépcsőn sír, és ő nem megy oda hozzá."}
 ]},
 kardos_k:{n:"Kardos Péter", r:"násznagy, üzlettárs", loc:"kuria", h:[0,8], gone:"vendegek_el", suspect:1, bio:"58 éves, Fodor üzlettársa harminc éve, a vőlegény keresztapja. Kigombolt ing, a nyakkendő a zsebében, a kezében egy pohár whisky, amit nem iszik meg.", topics:[
  {id:"akos", l:"Fodor Ákosról", t:"„Harminc év, főhadnagy. Együtt kezdtük, két talicskával.” A pohárba néz. „Ő volt a hangos, én a számoló. Most már csak a számoló maradt.”"},
  {id:"ules", l:"Hol ült?", t:"„Mellette, a jobbján. Mint mindig.” Megvonja a vállát. „A zakója kettőnk közt lógott a széken. Ákos soha nem tette le a zakóját, abban volt a gyógyszere.” Elhallgat, mintha most hallaná, mit mondott."},
  {id:"ellenseg", l:"Ki haragudott rá?", t:"„Ma este? Fél Óbuda.” Halkan nevet. „Nézzen körül. A menyasszony anyja. Ákos 2009-ben átvette a férje cégét, egy rossz hitel után. Gábor egy évre rá meghalt. Szívroham.” Kortyol. „És most a lányaik összeházasodtak. Ákos azt mondta, ez a kibékülés. Ilona nem mondott semmit.”", ev:"ilona_inditek"},
  {id:"holnap", l:"Mi lesz most?", sober:1, t:"„Holnap? Reggel anyámhoz megyek, Zuglóba. Nyolcvankét éves, szívbeteg, a gyógyszereit én hordom.” Megdörzsöli az arcát. „Hétfőn bemegyek az irodába, és megpróbálom elmondani száz embernek, hogy lesz fizetés.”", f:"kardos_anya_hol"}
 ]},
 mark_k:{n:"Fodor Márk", r:"a vőlegény", loc:"kuria", h:[0,8], gone:"vendegek_el", suspect:1, bio:"31 éves, építészmérnök az apja cégénél. Az öltönye ingujjra vetkőzve, a szeme vörös. Nem a sírástól. A dühtől.", topics:[
  {id:"apa", l:"Az apjáról", t:"„Tudja, mit mondott tegnap reggel? Hogy ha nem írom alá a házassági szerződést, nem kapok semmit.” A hangja elcsuklik. „Este meg pohárköszöntőt mondott, a régi sérelmekről. Az apám ilyen volt. Reggel kés, este virág.”", ev:"hazassagi"},
  {id:"terasz", l:"Mi volt a teraszon?", req:["veszekedes_hallott"], sober:1, t:"Elsápad. „Ki mondta?” Hosszú csend. „Igen. Veszekedtünk. Azt mondtam, bárcsak meghalna.” Leül. „Aztán megölelt, főhadnagy. Életemben harmadszor. Azt mondta, nem kell aláírni. Azt mondta, Dóra jó lány.” A kezébe temeti az arcát.", ev:"veszekedes"}
 ]},
 reka_k:{n:"Fodorné Réka", r:"Fodor felesége", loc:"kuria", h:[0,8], gone:"vendegek_el", bio:"39 éves, Fodor második felesége. Ezüst ruha, a smink lefolyt, a cipőjét levette. A kórházból jött vissza, mert nem tudta, hova máshova menjen.", topics:[
  {id:"mi", l:"Mi történt?", t:"„Tizenegy után azt mondta, hányingere van. Leült. Azt mondta, a lámpák körül minden sárga, mint egy régi fényképen.” Megtörli az orrát. „Nevettem. Azt hittem, a pálinka. Fél óra múlva a földön feküdt.”", ev:"sarga_lat"},
  {id:"gyogyszer", l:"Szedett valamit?", t:"„Digoxint, tíz éve. Pitvarfibrilláció. Este tízkor, minden nap, a telefonja csörgött rá.” Előveszi a telefonját, megmutatja az ébresztőt: 22:00, Szívecske. „Vasárnap esténként én töltöm fel az adagolóját. Ma este is bevette, láttam. Egy pohár vízzel.”", ev:"fodor_gyogyszer"},
  {id:"ceg", l:"A cégről", sober:1, t:"Sokáig néz. „Ákos az utóbbi két hétben nem aludt. Egy könyvvizsgáló járt nála. Csütörtökön azt mondta, hétfőn valakit le kell ültetnie.” Megrázza a fejét. „Nem mondta, kit. Holnap a villában beszélhetünk. Most nem tudok.”", f:"ceg_gond"}
 ]},
 dora_k:{n:"Fodorné Sárközi Dóra", r:"a menyasszony", loc:"kuria", h:[0,8], gone:"vendegek_el", bio:"27 éves tanítónő. Mezítláb ül a lépcsőn, a menyasszonyi ruha szegélye sáros. Hat órája ment férjhez.", topics:[
  {id:"mi", l:"Mi történt?", t:"„Ez volt életem legszebb napja. Öt órán át.” Nem néz fel. „A videósunk mindent felvett, Lukács Bálint, a barátnőm ajánlotta. Talán ő… talán látszik valami.”", f:"videos_nev"},
  {id:"anya", l:"Az édesanyjáról", t:{$v:{a:"„Anya?” Dóra összehúzza magát. „Anya múlt hónapban a padlást pakolta. Apa holmiját. Azóta nem alszik. Kérdeztem, mi a baj, azt mondta, semmi, csak régi papírok.” Felnéz. „De eljött az esküvőre. Ez a lényeg, nem?”",b:"„Anya megbékélt. Évekig nem beszélt Fodorékkal, de tavaly azt mondta: miattam. Ő ragaszkodott hozzá, hogy apa pálinkájával koccintsunk.” Elmosolyodik, aztán elsírja magát. „Azt mondta, apa is ezt akarta volna.”"}}},
  {id:"mark", l:"Márk és az apja", t:"„Veszekedtek. Mindig. Fél tizenegykor a teraszon is, a pincér is hallotta.” Lehajtja a fejét. „De Márk nem… Márk egy pókot sem bánt. Kiviszi őket az erkélyre.”", f:"veszekedes_hallott"}
 ]},
 gergo:{n:"Gergő", r:"pincér", loc:"kuria", h:[0,24], gone:"gergo_bukik", bio:"24 éves pincér, fekete mellény, fehér ing, az orra alatt egy kicsit túl sokszor szipog. Ő söpörte fel a szilánkokat. Ő hallotta a veszekedést. És ő az egyetlen, aki a rendőrt nem nézi a szemébe.", topics:[
  {id:"latott", l:"Mit látott?", t:"„Semmit, főhadnagy úr. Hordtam a tálcákat.” Szipog. „Hetven ember, két pincér. Nem nézelődtem.” A keze remeg, ahogy a kötényébe törli.", f:"gergo_ideges"},
  {id:"pohar", l:"Hova lett a pohár?", t:"„Leesett, amikor összeesett. Felsöpörtem, a konyhai kukába. Az a dolgom.” Megvonja a vállát. „Hétfőn jön a kukásautó.”", f:"szilank_hol"},
  {id:"terasz", l:"A teraszon", t:"„A fia? Igen, hallottam. »Bárcsak meghalnál!« Így kiabálta.” Szipog. „De utána ölelkeztek. Az apja sírt. Láttam az ajtóból.”", f:"veszekedes_hallott"},
  {id:"alku", l:"Megmutatod neki, mit találtál az öltözőben", req:["gergo_kokain"], excl:"feljelent", sober:1, dyn:"gergoAlku", ev:"gergo_vallomas"},
  {id:"feljelent", l:"Szólsz a kábítószereseknek", req:["gergo_kokain"], excl:"alku", dyn:"gergoFeljelent"}
 ]},
 // a vendégek elengedése után
 ilona:{n:"Sárközi Ilona", r:"gyógyszerész", loc:"ilonahaz", h:[8,20], vis:"vendegek_el", suspect:1, bio:"56 éves. A patikában fehér köpenyben, mintha semmi nem történt volna. A pult mögül néz rád, a szemüvege fölött.", topics:[
  {id:"ferj", l:"A férjéről", t:"„Gábor jó ember volt, főhadnagy. Rossz üzletember.” Leteszi a szemüvegét. „Legalábbis tizenhét évig ezt hittem.” Elharapja a mondat végét."},
  {id:"level", var:"a", l:"Megmutatod neki a levelet", req:["ilona_level"], sober:1, t:"Sokáig nézi a borítékot. Nem nyúl hozzá. „Szeptemberben találtam. Tizenhét év után.” Leveszi a köpenyt, összehajtja. „Tudja, mit éreztem? Nem dühöt. Megkönnyebbülést. Hogy Gábor nem volt rossz üzletember. Csak volt valaki, aki fizetett, hogy annak lássák.” Feláll. „Hívjon ügyvédet nekem, főhadnagy. Kérem.”"},
  {id:"megbocsat", var:"b", l:"Megbocsátott Fodornak?", sober:1, t:"„Tavaly. Dóra miatt.” Előveszi a pult alól egy fényképet: a férje és Fodor, sisakban, átkarolják egymást. „Gábor szerette őt. Ákos tönkretette, és Gábor akkor is szerette.” Visszateszi. „Én nem vagyok ilyen jó ember. De a lányom igen.”"},
  {id:"patika", l:"A patika nyilvántartásairól", t:"„Nézze meg nyugodtan. Mindent. Harminckét éve vezetem tisztán.” Átnyújtja a raktáros elérhetőségét. Nem remeg a keze.", f:"ilona_patika"}
 ]},
 kardos:{n:"Kardos Péter", r:"ügyvezető", loc:"kardosiroda", h:[8,19], vis:"vendegek_el", suspect:1, bio:"58 éves. Hétfő óta egyedüli ügyvezető. Friss ing, új nyakkendő, és egy beosztott, aki öt percenként bekopog egy aláírásért.", topics:[
  {id:"audit", l:"A könyvvizsgálói jelentésről", req:["audit"], sober:1, t:"Az arca nem változik. „Félreértés. Alvállalkozók, akiket Ákos is ismert. Hétfőn meg akartuk beszélni.” Becsukja az ajtót. „Ákos szerette a drámát, főhadnagy. Hétfő reggel kilencig. Ilyet egy barát nem ír.”"},
  {id:"biztositas", l:"A biztosításról", req:["kulcsember"], t:"„Kulcsember-biztosítás, minden cégnek van. A cégé, nem az enyém.” Felhúzza a szemöldökét. „Ha azt hiszi, háromszáz millióért megölöm a legjobb barátomat, akkor nem ismeri a háromszáz milliót. Az ma egy fél társasház.”"},
  {id:"anya", l:"Az édesanyja gyógyszereiről", req:["kardos_anya"], sober:1, t:{$v:{a:"„Lanoxin. Ugyanaz, mint Ákosé.” Bólint. „Ezt is a fejemre olvassa? Harminc éve hordom anyámnak a gyógyszert, főhadnagy. Havonta egyszer. Nézze meg.”",b:"Egy pillanatig hallgat. Túl hosszú pillanatig. „Lanoxin. Ugyanaz, mint Ákosé.” Megigazítja a nyakkendőjét. „Anyám összevissza számolja. Egyszer többet vesz be, egyszer kevesebbet. Néha kétszer kell kiváltani.” Most először néz az órájára."}}}
 ]},
 mark:{n:"Fodor Márk", r:"a vőlegény", loc:"naszlakas", h:[9,22], vis:"vendegek_el", suspect:1, bio:"31 éves. Két napja nem aludt. Az apja zakóját hozta haza a kórházból, és nem tudja, mit kezdjen vele.", topics:[
  {id:"orokseg", l:"Az örökségről", sober:1, t:"„Mindent én kapok, ha erre gondol. És Réka.” Kesernyésen nevet. „Meg egy céget, amiről most derül ki, hogy kirabolták. Kardos bácsi már hétfőn felhívott, hogy ne aggódjak, ő mindent elintéz.” Megáll. „Kardos bácsi. Harminc éve így hívom.”"}
 ]},
 dora:{n:"Fodorné Sárközi Dóra", r:"a menyasszony", loc:"naszlakas", h:[9,22], vis:"vendegek_el", bio:"27 éves. A menyasszonyi csokrot egy befőttesüvegbe tette, és most azt nézi.", topics:[
  {id:"anya", l:"Az édesanyjáról", sober:1, t:{$v:{a:"„Hétfő óta nem veszi fel a telefont.” Dóra a csokrot nézi. „Tegnap este átmentem. Ült a konyhában, apa régi levelei előtte. Azt mondta: »Bocsáss meg, kicsim. Nem neked csináltam.« Nem értem, mit.” Rád néz. „Ön érti?”",b:"„Anya minden nap felhív. Kétszer.” Elmosolyodik. „Azt mondja, nem kellett volna ragaszkodnia a pálinkához, akkor most nem gyanúsítanák.” Megrázza a fejét. „Anya egy pókot se…” Elhallgat. Márk mondta ugyanezt."}}}
 ]},
 reka:{n:"Fodorné Réka", r:"özvegy", loc:"fodorvilla", h:[9,21], vis:"vendegek_el", bio:"39 éves. Fekete farmer, fekete pulóver, a haja kontyban. Józanabb, mint a lakodalomban, és sokkal fáradtabb.", topics:[
  {id:"ceg", l:"A könyvvizsgálóról", t:"„Halmai doktor. Két hete járt nála.” A kanapé karfáját simogatja. „Ákos csütörtökön azt mondta: »Péter lop, Réka. Harminc éve a barátom, és lop.« Hétfőig adott neki időt. Azt mondta, ha bevallja, megbocsát. Ha nem, feljelenti.”", ev:"audit"},
  {id:"szef", l:"Az irodai széfről", req:["audit|ceg_gond"], t:"Felír egy számsort egy cetlire. „Ákos születésnapja, fordítva. Ő ilyen volt.” Átadja. „A jelentés a széfben van. És a biztosítás is. Nézze meg, ki a kedvezményezett.”", f:"reka_kulcs"},
  {id:"adagolo", l:"Az adagolóról", req:["adagolo"], t:"„Vasárnap este töltöttem fel, mint mindig. A gyári dobozából, a tablettákat.” Ránéz a kezére. „Egész héten nálam volt a zakója, kivéve az esküvőt. Ott a széken lógott. Mindenki ott ült mellette.”"},
  {id:"kardos", l:"Kardos Péterről", sober:1, t:"„Péter?” Rád néz. „Péter harminc éve minden karácsonykor itt van. Ő tanította Márkot biciklizni.” Hallgat. „Tegnap este a temetésről akart beszélni. Hogy milyen koporsót. Ma reggel azt kérdezte, mikor jön a biztosító.”"}
 ]},
 kardosne:{n:"Kardos Péterné", r:"Kardos anyja", loc:"kardosanya", h:[8,20], bio:"82 éves, özvegy, egykori tanárnő. Mindenkit tegez, aki fiatalabb hatvannál. Pogácsát süt, mert valakinek mindig sütni kell.", topics:[
  {id:"peter", l:"Péterről", t:"„A Péterem? Aranyos fiú. Minden hónapban elhozza a gyógyszereimet, mert én már nem tudok sorba állni.” Elővesz egy dobozt. „Lanoxin. A szívemre. Ugyanaz, mint szegény Ákosé. Ők ketten még erről is viccelődtek.”", ev:"kardos_anya"},
  {id:"fogy", l:"Fogynak a gyógyszerei?", req:["kardos_anya"], t:{$v:{a:"„Fogynak? Annyi fogy, amennyit beveszek, fiam.” Megkocogtatja a homlokát. „Itt még minden rendben van. Az unokám kiosztja hetekre. Minden hétfőn.”",b:"„Fogynak.” Elgondolkodik. „Péter mondta, hogy rosszul számolok. Szeptemberben kétszer is el kellett hoznia. Pedig én minden reggel egyet veszek be, egyet, így.” Felemeli az ujját. „Lehet, hogy öregszem.”"}}}
 ]},
 lukacs:{n:"Lukács Bálint", r:"esküvői videós", loc:"studio", h:[10,20], bio:"34 éves, szakállas, kapucnis pulóver, három nap alatt két esküvő. Ő vette fel az utolsó beszédet, amit Fodor Ákos életében mondott, és ezt nem tudja kiverni a fejéből.", topics:[
  {id:"video", l:"A pohárköszöntő felvétele", t:"„Három kamera volt. A harmadik a főasztalra nézett.” Felhúz egy fájlt a monitorra, aztán kiírja egy pendrive-ra. „Itt van. Én még nem mertem végignézni.”", doc:"video"},
  {id:"fotok", l:"A fotók", t:"„A fotós a társam, kétezer-százvalahány képet lőtt. Időbélyeggel, másodpercre.” Átad egy merevlemezt. „Ha valaki átnézi mindet, azt megérdemli, hogy megnősüljön.”", f:"fotok_megvan"}
 ]},
 anna_korhaz6:{n:"Dr. Kerekes Bernadett", r:"traumatológus, ügyeletes", loc:"korhaz6", h:[0,24], bio:"41 éves traumatológus, ma éjjel a sürgősségin ügyel. Alacsony, sportos, szőke, a haja lófarokban, a köpenyén valaki más vére. Ő nyilvánította halottnak Fodor Ákost 00:50-kor.", topics:[
  {id:"elso", l:"Bemutatkozol", req:["!anna_met"], t:"„Mátrai? A Mátrai Gyula fia?” Kezet nyújt. „Kerekes Bernadett, de mindenki Dettinek hív. Én műtöttem az édesapját, két éve.” Rövid csend. „Most a betegéért jött, gondolom. Nem az enyémért.”", f:"anna_met"},
  {id:"fodor", l:"Fodor Ákosról", req:["anna_met"], t:"„Bradikardia, aztán kamrai ritmuszavar, amit nem tudtunk visszahozni.” Leveszi a kesztyűt. „A mentős azt mondta, sárga fényekről beszélt. Digoxint szedett, a felesége mondta.” Rád néz. „Ezt a toxikológia megmondja, de én megmondom előbb: nem szívroham volt, Dénes. Valaki túladagolta.”", ev:"sarga_lat"},
  {id:"bocsanat", l:"Bocsánatot kérsz a régi folyosóért", req:["anna_reszeg","!anna_bocsanat"], sober:1, t:"Felhúzza a szemöldökét. „Emlékszik rá? Akkor nem lehetett annyira részeg.” Aztán elmosolyodik. „Elfogadom. Egyszer.”", f:"anna_bocsanat"},
  {id:"vacsora", l:"Elhívod vacsorázni", req:["anna_met","!anna_egyutt","!anna_reszeg|anna_bocsanat","!anna_vacsora_hiv6"], dyn:"annaHiv6"},
  {id:"hello", l:"Beszélsz vele", req:["anna_egyutt"], t:"Detti egy pillanatra rád néz a kartonok fölött. „Látom rajtad, hogy nem aludtál. Én se.” Megszorítja a kezedet, gyorsan, a nővérpult alatt, ahol senki nem látja. „Este hazamegyek hozzád. Ha addig nem fogod meg a gyilkost, legalább a kezemet fogd meg.”"}
 ]},
 annaV6:{n:"Dr. Kerekes Bernadett", r:"vacsora", loc:"vendeglo6", h:[19,23], vis:"anna_vacsora_hiv6", gone:"anna_vacsora6|anna_vacsora_rossz6", bio:"Farmerben, kötött pulóverben, a szőke haja kibontva. Már ül, amikor odaérsz, előtte egy pohár víz, melletted egy másik.", topics:[
  {id:"vacsora", l:"Leülsz vele", mins:120, dyn:"annaVacsora6"}
 ]},
 anna:{n:"Detti", r:"nálad", loc:"otthon", h:[20,24], vis:"anna_egyutt", bio:"Dr. Kerekes Bernadett, traumatológus. Esténként a konyhaasztalnál ül, a lábát maga alá húzva, és szakcikkeket olvas, amiket senki más nem értene.", topics:[
  {id:"pecs", l:"„Beszélnünk kell”", req:["!anna_vacsora6"], dyn:"annaPecs"},
  {id:"pecs_igen", l:"„Menj. Megoldjuk.”", req:["anna_pecs"], excl:"pecs_nem", t:"Sokáig néz. „Kétszáz kilométer.” Bólintasz. „Hétvégente. Meg amikor nem bírod.” Átnyúl az asztalon, és megfogja a kezed. „Nem fogod bírni. És akkor is felhívsz?” Igen. „Akkor megyek.”", f:"anna_pecs_igen"},
  {id:"pecs_nem", l:"„Ne menj.”", req:["anna_pecs"], excl:"pecs_igen", dyn:"annaPecsNem"},
  {id:"ul", l:"Csak ültök", rep:1, eff:{crave:-15}, t:"Detti teát főz, te a radiátor mellett ülsz. Egyszer felolvas egy mondatot egy cikkből, a digoxinról, csak úgy. „A digitálisz a gyűszűvirágból jön. A régiek szívre adták, a boszorkányok méregnek.” Leteszi. „Ugyanaz a növény, Dénes. Csak az adag más.”"}
 ]},
 // stáb és ismerősök
 szep:{n:"Dr. Szép Viktória", r:"osztályvezető", loc:"kapitanysag", h:[8,20], bio:"44 éves osztályvezető. Csendes hang, pontos kérdések. Az asztalán a sajtóosztály hívásainak listája, egyre hosszabb.", topics:[
  {id:"elig", l:"Eligazítás", t:"„Fodor Ákos fél Budát felépítette, a másik felét feldühítette. A sajtó már ott állt a kórház előtt.” Leteszi a tollat. „Keleti boncol. Halász vizsgál, amit hoz neki. És Mátrai: hetven ember ivott ott ingyen. Maga ne legyen a hetvenegyedik.”"},
  {id:"statusz", l:"Jelentés az ügyről", rep:1, dyn:"vargaStatus"}
 ]},
 bence:{n:"Tóth Bence", r:"nyomozó", loc:"kapitanysag", h:[7,21], staff:1, gone:"bence_halott", bio:"29 éves. Augusztus óta újra dolgozik. Az ajtót mindig kitámasztja, és ha valaki becsukja, szó nélkül újra kinyitja.", topics:[
  {id:"hogy", l:"Hogy vagy?", t:"„Jól.” Rád néz, és látja, hogy nem hiszed. „Éjjel még felébredek. Melegben. Ötven fokban.” Megvonja a vállát. „Fehér doktornő szerint ez normális. Te hogy alszol?” Nem válaszolsz. „Akkor ezt is együtt csináljuk, főnök.”", loy:{bence:5}},
  {id:"gond", l:"Mit gondolsz?", rep:1, dyn:"hintBence6"}
 ]},
 kata:{n:"Rácz Kata", r:"nyomozó", loc:"kapitanysag", h:[7,21], staff:1, gone:"kata_vad", bio:"36 éves. Esküvőkön mindig a pultnál áll, és senkivel nem táncol. Azt mondja, a lakodalmakban több a gyilkossági indíték, mint egy börtönben.", topics:[
  {id:"gond", l:"Mit gondolsz?", rep:1, dyn:"hintKata6"}
 ]},
 bodnar:{n:"Bodnár Feri", r:"törzszászlós", loc:"kapitanysag", h:[7,21], staff:1, gone:"bodnar_vad", bio:"58 éves. Minden lakodalmi zenekart ismer a városban, és mindegyikről tud egy pletykát.", topics:[{id:"gond", l:"Mit gondolsz?", rep:1, t:"„Fodor? A Fodor-féle cégek mindig is a határon táncoltak.” Megvakarja a bajuszát. „A kilencvenes években olajjal kezdte, mondják. Az embargó alatt.”"}]},
 halasz:{n:"Halász Tamás", r:"nyomszakértő", loc:"kapitanysag", h:[8,22], staff:1, bio:"41 éves. A laborban Omega szól, a pulton egy pohár, amit soha nem mos el, mert benne fejleszti a mintákat.", topics:[{id:"gond", l:"Mi van a laborban?", rep:1, dyn:"hintHalasz6"}]},
 feher:{n:"Dr. Fehér Judit", r:"pszichológus", loc:"kapitanysag", h:[9,17], staff:1, bio:"52 éves. Hetente megkérdezi, hány napja vagy józan. Egyszer sem írta fel a választ, és mégis emlékszik mindre.", topics:[
  {id:"profil", l:"Ki mérgez egy lakodalomban?", t:"„A méreg türelmes fegyver, és intim.” Leveszi a szemüvegét. „Aki lakodalomban mérgez, az vagy azt akarja, hogy mindenki lássa, vagy azt, hogy senki. Az első bosszú: hogy a halál legyen az ünnep. A második számítás: hogy hetven tanú közt elvesszen egy mozdulat.” Rád néz. „Nézze meg, ki akarta, hogy Fodor ott haljon meg. És ki akarta, hogy egyáltalán.”"},
  {id:"jozan", l:"A józanságról", rep:1, dyn:"feherJozan6"}
 ]},
 keleti:{n:"Dr. Keleti Mária", r:"igazságügyi orvosszakértő", loc:"intezet", h:[7,19], staff:1, bio:"61 éves. Apád barátja. Fodor Ákost fiatalon ismerte, a kilencvenes évekből, és ezt csak akkor mondja el, ha megkérdezed.", topics:[
  {id:"elozetes", l:"Előzetes vélemény", t:"„Ha az, amire gondolok, akkor digitálisz.” Rágyújt. „Gyűszűvirág, Dénes. A legrégebbi szívgyógyszer és a legrégebbi méreg. Egy tízszeres adag, és a szív lelassul, aztán összevissza ver, aztán megáll. Közben az ember sárgán lát.”"},
  {id:"fodor", l:"Ismerted Fodort?", t:"Sokáig fújja a füstöt. „A kilencvenes években. A kikötőben dolgozott, aztán egyik napról a másikra pénze lett.” Elnyomja a cigarettát. „Apád is ismerte. Mindenki ismerte, aki akkor a Déli kikötőben megfordult. Nem jó idők voltak, Dénes.” Nem mond többet."}
 ]},
 laci:{n:"Laci", r:"kocsmáros", loc:"hordo", h:[15,3], bio:"A Hordó kocsmárosa. Bokszos óta senkit nem ültet a sarokasztalhoz.", topics:[
  {id:"fodor", l:"Fodor Ákosról", t:"„Fodor? Itt ivott a kilencvenes években, a kikötőiekkel. Akkor még nem volt villája.” Törölgeti a poharat. „Kilencvennégy őszén egyik napról a másikra mindenkinek fizetett. Aztán többet nem jött.” Felnéz. „Apád is itt ült akkor. Abban a sarokban.”", f:"fodor_kikoto"},
  {id:"regi", l:"Csak ültök", rep:1, dyn:"laciC6"}
 ]},
 sanyi:{n:"Sanyi", r:"NA-gyűlés, szponzor", loc:"aa", h:[18,21], bio:"68 éves, huszonkét éve józan. Lassan beszél, és ha nem tudja a választ, azt mondja: nem tudom.", topics:[
  {id:"ul", l:"Leülsz a körbe", rep:1, mins:90, eff:{crave:-40}, dyn:"sanyiC6"},
  {id:"szponzor", l:"Megkéred, hogy legyen a szponzorod", req:["aa_beszed"], sober:1, t:"Sanyi sokáig hallgat. „Hány napja?” Megmondod. „És hány napig akarod?” Nem tudod. „Jó válasz.” Kezet nyújt. „Hajnali háromkor is hívhatsz. De ha hívsz, előtte ne igyál. Utána se.”", f:"sanyi_szponzor"}
 ]},
 lili:{n:"Mátrai Lili", r:"a lányod", loc:"otthon", h:[18,23], vis:"lili_marad", bio:"18 éves. Nálad lakik, és szerdán felvételizik a Zeneakadémiára. Esténként skálázik, ugyanazt az ötöt, újra és újra.", topics:[
  {id:"este", l:"Leülsz mellé", rep:1, dyn:"liliC6"}
 ]},
 lili_za:{n:"Mátrai Lili", r:"felvételiző", loc:"zeneakademia6", h:[14,17], vis:"lili_marad", bio:"Fekete ruha, a haja hátrafogva, a kezét a hóna alatt melegíti. A sorszáma tizenegy.", topics:[
  {id:"ott", l:"Ott vagy", mins:90, t:"Lili meglát a folyosón, és egy pillanatra megáll a keze. Aztán bemegy. Az ajtón át hallod: Bach, aztán Liszt. Egyszer elrontja, és újrakezdi, és a második sokkal jobb. Amikor kijön, nem kérdezi, hogy hallottad-e. Csak beleteszi a kezét a kabátzsebedbe, ahogy hétévesen.", f:"lili_felvetel", eff:{crave:-20}}
 ]}
},

tasks:[
 {id:"boncolas6", l:"Fodor Ákos boncolása", req:["body"], dur:300, fit:{keleti:1}, doc:"boncolas6", ok:"Keleti végzett Fodorral. Felhívott: „Gyere be. Ezt látnod kell.”"},
 {id:"szilank", l:"A kupicaszilánkok vizsgálata", req:["szilank"], dur:240, fit:{halasz:.95, keleti:.7}, doc:"szilank_labor", ok:"Halász végzett a szilánkokkal.", fail:"A mintát rosszul csomagolták. Halász újrakezdi."},
 {id:"adagolo", l:"A gyógyszeradagoló vizsgálata", req:["adagolo"], dur:240, fit:{halasz:.9, keleti:.85}, doc:"adagolo_labor", ok:"Megvan az adagoló eredménye.", fail:"A labor tömegspektrométere leállt. Holnap újra."},
 {id:"fotok", l:"A fotós 2140 képének átnézése", req:["fotok_megvan"], dur:360, fit:{bence:.9, kata:.85, halasz:.7, feher:.55}, doc:"fotok", ok:"Átnéztük a fotókat. Van, amit látnod kell.", fail:"Kétezer kép után összefolynak az arcok. Valaki más nézze át."},
 {id:"selejt", l:"A Sárközi-patika nyilvántartásai", req:["ilona_patika|ilona_gyogyszeresz"], dur:180, fit:{kata:.9, bodnar:.8, bence:.75, halasz:.6}, doc:"selejt", ok:"Megjött a patika nyilvántartása.", fail:"A patika nem adta ki engedély nélkül. Újra kell kérni."},
 {id:"recept", l:"Kardos anyjának vényadatai", req:["kardos_anya"], dur:180, fit:{kata:.9, bence:.8, bodnar:.7, halasz:.55}, doc:"recept", ok:"Megvannak a vényadatok.", fail:"Az egészségbiztosító ügyelete holnap válaszol."}
],

leads:[
 {need:["fodor_halal"], not:["met_reka_k"], x:"A feleség ott ült mellette egész este. Kezdd vele (Malomkert)."},
 {need:["body"], not:["doc:boncolas6"], x:"Keleti doktornő megboncolhatja Fodort (Stáb)."},
 {need:["sarga_lat"], not:["fodor_gyogyszer"], x:"Sárga látás. Szedett valamilyen szívgyógyszert? A felesége tudja."},
 {need:["fodor_gyogyszer"], not:["adagolo"], x:"A gyógyszereit a zakója zsebében hordta. A zakó a főasztalnál maradt."},
 {need:["adagolo"], not:["doc:adagolo_labor"], x:"Az adagoló tartalmát Halász megvizsgálhatja (Stáb)."},
 {need:["ilona_toltotte"], not:["szilank","szemet_el"], x:"Fodor pohara összetört, amikor összeesett. Ki söpörte fel, és hova? Kérdezd meg a pincért. Hétfőn jön a kukásautó."},
 {need:["szilank"], not:["doc:szilank_labor"], x:"A szilánkokat Halász megvizsgálhatja (Stáb)."},
 {need:["met_dora_k"], not:["videos_nev"], x:"Valaki az egész estét felvette. Kérdezd meg a menyasszonyt, ki volt a videós."},
 {need:["videos_nev"], not:["doc:video"], x:"Lukács Bálint, a videós, a stúdiójában van, Ferencvárosban."},
 {need:["fotok_megvan"], not:["doc:fotok"], x:"Kétezer fotó, időbélyeggel. Valakinek át kell néznie mindet (Stáb)."},
 {need:["gergo_ideges"], not:["gergo_kokain","gergo_bukik"], x:"A pincér fél valamitől, és nem tőled. Nézz be a személyzeti öltözőbe."},
 {need:["ceg_gond"], not:["audit"], x:"Fodornál két hete könyvvizsgáló járt. Réka a villában többet mond."},
 {need:["audit"], not:["reka_kulcs"], x:"A jelentés Fodor irodai széfjében van. Réka tudja a kódot."},
 {need:["reka_kulcs"], not:["kulcsember"], x:"Nyisd ki Fodor széfjét a Váci úti irodában."},
 {need:["kardos_anya_hol"], not:["kardos_anya"], x:"Kardos azt mondta, reggel az anyjához megy, Zuglóba. Ő is szívbeteg. Látogasd meg."},
 {need:["kardos_anya"], not:["doc:recept"], x:"Ki és milyen gyakran váltja ki Kardos anyjának gyógyszerét? Kérd ki a vényadatokat (Stáb)."},
 {need:["ilona_gyogyszeresz"], not:["doc:selejt"], x:"Ilona gyógyszerész. Mi hiányzik a patikájából? Kérd ki a nyilvántartást (Stáb)."},
 {var:"a", need:["met_ilona"], not:["ilona_level"], x:"Dóra szerint az anyja szeptemberben régi papírokat talált a padláson. Nézz körül a lakásban."},
 {need:["veszekedes_hallott"], not:["veszekedes"], x:"Márk és az apja a teraszon veszekedtek. Kérdezd meg Márkot."}
],

timed:[
 {id:"vendegek", at:480, f:"vendegek_el", modal:"<h2>Vasárnap, 08:00</h2><p>A járőrök elengedik a vendégeket. Hetven ember megy haza egyszerre, taxival, gyalog, valaki a kocsijával, pedig nem kéne. A menyasszony az anyja karján megy ki, Márk egyedül. Kardos a parkolóban egy hosszú telefont bonyolít, háttal mindenkinek.</p><p>Ezután mindenki otthon van. Ha beszélni akarsz velük, oda kell menned.</p>"},
 {id:"kuka", at:1440+360, unless:"szilank", f:"szemet_el", x:"<b>Malomkert, SMS:</b> Ma reggel hatkor elvitték a szemetet, ahogy minden hétfőn. Ha kellett volna valami belőle, sajnáljuk."},
 {id:"hirlap1", at:1440+420, front:{h:"Halál a lakodalomban",s:"Pohárköszöntő után halt meg Fodor Ákos építési vállalkozó",b:"A Fodor & Kardos Építő Kft. alapítója szombat éjjel fia esküvőjén lett rosszul a Római-parton. Lapunk értesülése szerint a rendőrség nem zárja ki az idegenkezűséget. Az üzlettárs, Kardos Péter: „Ákos az ünnepen halt meg, a családja körében. Talán így akarta volna.”"}},
 {id:"biztosito", at:2*1440+600, x:"<b>Halász, SMS:</b> Hallom a gazdaságisoktól: Kardos ma reggel bejelentette a biztosítónál a kulcsember-kárigényt. Három nappal a halál után. Ez gyors."},
 {id:"lili_hiv", at:2*1440+1260, req:["lili_elenged"], modal:function(S){
   if(S.alc>40){S.f.lili_hivas_rossz=1;return"<h2>Kedd, 21:00 – telefon, Bécs</h2><p>Lili. „Apa? Csak azt akartam mondani, hogy…” Megáll. „Ittál.” Csend. „Majd holnap hívlak.” Nem hív holnap.</p>"}
   S.f.lili_hivas6=1;S.crave=Math.max(0,S.crave-20);return"<h2>Kedd, 21:00 – telefon, Bécs</h2><p>Lili. „Apa? Felvettek a mesterkurzusra. Tizenkét emberből engem.” Hallod, hogy nevet. „Anya azt mondta, hívjalak fel elsőnek. Nem, ez nem igaz. Én akartam.” Fél órát beszéltek. A végén azt mondja: „Jó volt hallani a hangodat. Ilyen józanul.”</p>"}},
 {id:"lili_sms", at:3*1440+480, req:["lili_marad"], x:"<b>SMS, Lili:</b> Ma 3-kor a Zeneakadémián. Tizenegyes sorszám. Nem kell jönnöd. (De gyere.)"},
 {id:"anna_sms", at:1440+1140, req:["anna_egyutt"], x:"<b>SMS, Detti:</b> Ma este beszélnünk kell. Nem rossz. Csak nagy. Otthon leszek 8-ra."},
 {id:"nora", at:3*1440+1290, req:["nora_help"], modal:"<h2>Szerda, 21:30 – telefon, Szeged</h2><p>Nóra: „Láttam a hírekben a lakodalmat. A Malomkert. Ott dolgoztam egyszer, felszolgálóként, húsz éve.” Nevet, röviden. „Akkor is mindenki ivott, és mindenki hazudott. A menyasszony anyja mindig tudja a legtöbbet. Mindig.” Csend. „Vigyázz magadra, Dénes.”</p>"},
 {id:"vege", at:5*1440+1200, pat:-500, modal:"<h2>Péntek, 20:00</h2><p>Az ügyet a sajtó nyomására átveszi egy másik csoport. Fodor Ákost holnap temetik, és a temetésen két tévéstáb lesz. „Pihenjen, főhadnagy” — mondja Szép Viktória, és nem néz a szemedbe.</p>"}
],

actions:{
 pult:{loc:"kuria", l:"Egy pohár a nyitott pultnál", req:["!vendegek_el"], mins:15, f:"pult_ivott", once:1, drink:1, x:"A csapos kérdés nélkül tölt egy fél deci körtét, a ház vendége. Megiszod, mielőtt eldöntenéd, hogy megiszod-e."}
},

locEvents:[
 {id:"drunk", loc:"kapitanysag", when:(S,h,A)=>A.inWin(h,[8,19])&&S.alc>55, pat:-15, html:"<h2>Megszagolnak</h2><p>Szép Viktória megáll melletted. „Lakodalomban is ittunk, Mátrai?” Továbbmegy.</p>"}
],

dyn:{
  gergoAlku(S){
    S.f.gergo_alku=S.t;
    const t=S.variant==="a"?"Egyetlen mozdulattal kiveszed a borítékot a kabátodból, és leteszed elé az asztalra. Gergő elfehéredik. „Nem az enyém.” Nem szólsz. Hosszú csend. „Jó. Jó. Mit akar?” Azt, amit látott. „A koccintásnál… az anyós a tálcáról osztott, de Fodor úrnak nem. A táskájából vett elő egy kupicát, a bal kezében tartotta. Azt mondta: »Ez a férjemé volt. Most neked jár.« Fodor úr nevetett.” Megnyalja a száját. „Ennyi. A boríték?” Zsebre teszed. Holnap a Dunába dobod. Ő ezt nem tudja."
      :"Egyetlen mozdulattal kiveszed a borítékot a kabátodból, és leteszed elé az asztalra. Gergő elfehéredik. „Nem az enyém.” Nem szólsz. Hosszú csend. „Jó. Jó. Mit akar?” Azt, amit látott. „A nyitótáncnál mindenki a parkettet nézte. Én a főasztalt, mert ott volt a pezsgő. Kardos úr egyedül állt ott, és a Fodor úr zakójának belső zsebében kotorászott. Azt hittem, cigit keres, a Fodor úr szivarjait.” Megnyalja a száját. „Ennyi. A boríték?” Zsebre teszed. Holnap a Dunába dobod. Ő ezt nem tudja.";
    return t;
  },
  gergoFeljelent(S){
    S.f.gergo_bukik=S.t;S.pat+=10;S.loy.kata=Math.min(100,(S.loy.kata||60)+5);
    return'Felhívod a kábítószereseket. Húsz perc múlva itt vannak. Gergő az autóban sír, és azt kiabálja, hogy ő látott valamit, hogy alkut akar. Az ügyvédje délre ott van, és onnantól Gergő egy szót sem szól, se nekik, se neked. Szép Viktória este annyit mond: „Tisztán. Jó.” Nem tudod, hogy dicséret-e.';
  },
  annaHiv6(S){
    if(S.alc>40)return'Ránéz a kezedre, aztán a szemedre. „Most nem. Lakodalomból jött, és érzem.” Nem dühös. Inkább fáradt.';
    S.f.anna_vacsora_hiv6=S.t;
    if(S.f.anna_vacsora)return'Egy pillanatig csak néz. „Nyáron azt hittem, ez lesz belőle. Aztán nem lett.” Megnézi a beosztását. „Bármelyik este hét után. Kéményseprő. Ugyanott.” Elteszi a telefont. „Most józanul gyere.”';
    return'Sokáig néz. „Egy halott mellett hív el vacsorázni?” Aztán elneveti magát, fáradtan. „Ez a legrendőrebb dolog, amit valaha hallottam.” Megnézi a beosztását. „Bármelyik este hét után. Kéményseprő vendéglő, Budán. Ha részeg, ne jöjjön.”';
  },
  annaVacsora6(S){
    if(S.alc>40){S.f.anna_vacsora_rossz6=S.t;return'Leülsz. Ő egy pillanatig néz, aztán félretolja a borlapot, és vizet tölt neked. Fél óra múlva udvariasan megköszöni a vacsorát, és kifizeti a sajátját. „Majd ha józan lesz, Mátrai.” Ez már nem harag. Ez búcsú.'}
    S.f.anna_vacsora6=S.t;S.f.anna_vacsora=S.t;S.f.anna_egyutt=S.t;S.crave=Math.max(0,S.crave-30);
    return'Gulyásleves, túrós csusza, ásványvíz. Detti a sürgősségiről beszél, a futásról, egy lóról, ami gyerekkorában ledobta, és amit utána is szeretett. Te a lakodalomról, a sárga fényről, apádról. Ő közbekérdez, pontosan, mint egy jó orvos, és egyszer nevet, hangosan, hogy a szomszéd asztalnál odanéznek. Az utcán a taxinál nem száll be. „Elkísérsz?” Elkíséred. Reggel nálad ébred, a te pólódban, és azt mondja, a kávéd borzalmas.';
  },
  annaPecs(S){
    S.f.anna_pecs=S.t;
    return'Detti leül veled szemben, és a teáscsészét a két tenyere közt forgatja. „Pécsről hívtak. A klinikára. Osztályvezetőnek.” Nem néz fel. „Negyvenegy évesen. Ilyen nem jön kétszer.” Csend. „Nem azt kérdezem, mit akarsz. Azt kérdezem, mit bírsz.” Most felnéz.';
  },
  annaPecsNem(S){
    if((S.drinks||0)>0||S.alc>20){S.f.anna_pecs_igen=S.t;S.f.anna_pecs_rossz=S.t;return'„Ne menj” — mondod. Detti hosszan néz. A leheletedet nézi, nem a szemedet. „Ma ittál.” Feláll, elmosogatja a csészét. „Ezért kell mennem, Dénes. Hogy ne én legyek az, akiért nem iszol. Hogy magadért ne igyál.” Novemberben elmegy. Hetente kétszer hív. Egyszer sem kérdezi, hány napja.'}
    S.f.anna_pecs_nem=S.t;
    return'„Ne menj” — mondod. „Nem azért, mert nem bírnám. Azért, mert nem akarom bírni.” Detti sokáig hallgat. Aztán: „Ez a legönzőbb dolog, amit valaha mondtál.” Megfogja a kezed az asztalon. „És a legőszintébb.” Másnap reggel felhívja Pécset. Nemet mond. Nem kérdezed meg, sajnálja-e. Ő sem mondja.';
  },
  hintBence6(S){
    if(!S.ev.adagolo)return'„Ha valaki gyógyszert szed, azt valahol tartja. Nézted a zakóját?”';
    if(S.f.fotok_megvan&&!S.docs.fotok)return'„A fotókat? Add ide. Kétezer kép, egy éjszaka. Úgysem alszom.” Halványan elmosolyodik.';
    if(S.ev.ultetes&&!S.ev.audit)return'„A násznagy mellette ült, egész este. Ki ez a Kardos? Mi köze a céghez?”';
    return'„Mindenki látott valamit, főnök, és senki nem nézett oda. Ez a lakodalom.”';
  },
  hintKata6(S){
    if(!S.docs.boncolas6)return'„Előbb a boncolás. Ha szívroham, hazamegyünk. Ha nem, akkor mindenki gyanús, aki koccintott.”';
    if(S.ev.ilona_gyogyszeresz&&!S.docs.selejt)return'„A gyógyszerész anyós. Kérjük ki a patika nyilvántartását. Ha valami hiányzik, ott lesz leírva. A gyógyszerészek mindent leírnak.”';
    if(S.ev.kardos_anya&&!S.docs.recept)return'„Kardos anyja ugyanazt szedi? Kérjük ki a vényeket. Ki váltja ki, mikor, hányszor.”';
    if(S.f.gergo_ideges&&!S.f.gergo_kokain)return'„A pincér? Szipog és remeg. Nézd meg a szekrényét. Ha az van ott, amire gondolok, beszélni fog. Vagy nem.”';
    return'„Két út van, Dénes: a pohár vagy a gyógyszer. Derítsd ki, melyik volt, és megvan, ki.”';
  },
  hintHalasz6(S){
    if(S.f.szilank_hol&&!S.ev.szilank&&!S.f.szemet_el)return'„Felsöpörték a poharat? Hozd be a szilánkokat. Ha valami volt benne, beszáradt. A kristály nem felejt.”';
    if(S.ev.szilank&&!S.docs.szilank_labor)return'„A szilánkok? Add ide. Négy óra.”';
    if(S.ev.adagolo&&!S.docs.adagolo_labor)return'„Az adagolót is behozhatod. Megnézem, minden tabletta az-e, aminek látszik.”';
    if(S.ev.foto1994)return'„Ez a fénykép…” Sokáig nézi a kivágott arcot. „Ezt valaki nagyon gondosan csinálta, Dénes. Nem dühből. Félelemből.”';
    return'„Ma délután Fodor vére jön. Addig az Omegát hallgatom.”';
  },
  feherJozan6(S){
    const d=(S.drinks||0);
    if(!S.f.aa1){S.f.aa1=S.t;return'„Hetven ember, ingyen pálinka, és maga.” Ír egy címet egy cetlire. „Templomalagsor, esténként hattól. Nem kell beszélnie. Csak üljön ott.”'}
    if(S.f.aa_beszed&&d===0)return'„Hány napja?” Megmondod. „És egy lakodalom közepén?” Nem ittál. „Akkor ma este menjen el a gyűlésre. Nem azért, mert baj van. Azért, mert nem volt.”';
    if(d>0)return'Ránéz a kezedre. „Ittál.” Nem kérdés. „Hetven ember ivott ott. Maga is közéjük akart tartozni?” Nem válaszolsz.';
    return'„Hogy bírja, főhadnagy?” Nehezen. „Az jó. Akkor még érzi.”';
  },
  laciC6(S){
    const A=['Laci kólát tesz eléd kérés nélkül. Aztán mégis megkérdezi: „Vagy mégis?” Nem. Bólint, mintha ez lenne a természetes.',
      '„Imre írt a börtönből. Rólad kérdezett.” Laci a sarokasztalt nézi. „Azt írta, mondjam meg, hogy nem haragszik. Hogy ő haragudjon-e, azt majd te eldöntöd.”',
      '„Apád ott ült, kilencvennégyben, abban a sarokban, és egész este egy fröccsöt ivott. Egyetlenegyet.” Laci leteszi a rongyot. „Csak egyszer láttam olyat. Amikor valamin gondolkodott, ami nem hagyta.”'];
    S.f.lc=(S.f.lc||0)+1;return A[(S.f.lc-1)%A.length];
  },
  sanyiC6(S){
    if((S.drinks||0)>0)return'Ülsz a körben. Valaki egy lakodalomról beszél, ahol újra inni kezdett. Te nem beszélsz. Sanyi a végén melléd ül. „Ma ittál.” Nem kérdés. „Holnap nem kell. Csak holnap.”';
    return'Ülsz a körben. Valaki elmondja, hogy a lánya esküvőjén józan maradt, és hogy ez volt élete legnehezebb és legszebb napja. Te elmondod, hogy egy lakodalomban dolgozol, ahol mindenki iszik, és te nem. Sanyi a végén azt mondja: „A pohár ugyanaz, testvér. Csak te vagy más.”';
  },
  liliC6(S){
    const A=['Lili a zongoránál ül, ugyanazt a futamot gyakorolja, huszadszor. „Szerdán három.” Tudod. „Csak mondom.” Huszonegyedszer.',
      '„Mit csinálsz, ha nem vesznek fel?” kérdezed. Lili rád néz, mint egy ostobára. „Jövőre újra. Mit csinálsz, ha nem fogod meg a gyilkost?” Ugyanezt. „Na látod.”',
      'Lili teát főz kettőtöknek, és a konyhaasztalnál ül veled, amíg az aktákat olvasod. Egyszer belenéz. „Ez a nő gyógyszerész?” Bólintasz. „A gyógyszerészek mindent leírnak. Nagymama is az volt.” Nem tudtad. Most már tudod.'];
    S.f.lo6=(S.f.lo6||0)+1;S.crave=Math.max(0,S.crave-10);return A[(S.f.lo6-1)%A.length];
  }
},
rejectExtra:{},
bonus:function(S){const b=[];if(S.f.gergo_bukik)b.push([5,'Nem alkudtál a pincérrel']);if(S.f.lili_felvetel||S.f.lili_hivas6)b.push([5,'Ott voltál Lilinek']);if((S.drinks||0)===0)b.push([5,'Józan maradtál a lakodalomban']);else if(S.f.pult_ivott)b.push([-5,'Ittál a tetthelyen']);return b},
solveGoal:{$v:{a:["ilona_pohar","ilona_oldat","ilona_bosszu"],b:["kardos_kapszula","kardos_zako","kardos_inditek"]}},
solveSkip:["ad","feljelent"],

end:{
 win:function(S){
  let t="";
  if(S.variant==="a"){
   t+="<p>Sárközi Ilona a kihallgatóban ül, egyenes háttal, a gyöngysor a nyakában. Nem tagad. „Szeptember tizenötödikén találtam meg a levelet. Tizenöt nappal később eltört egy üveg a raktárban.” Leveszi a szemüvegét. „Nem a lányom esküvőjét akartam tönkretenni, főhadnagy. Azt akartam, hogy Ákos egyszer, egyetlenegyszer ugyanazt érezze, amit Gábor. Hogy a szíve megáll, és senki nem tudja, miért.”</p>";
   t+="<p>Dóra nem jön el a tárgyalásra. Márk igen, egyedül, és az anyósa mögött ül, a második sorban. A szünetben odamegy hozzá, és mond neki valamit. Ilona sírni kezd. Senki nem tudja meg, mit mondott.</p>";
  }else{
   t+="<p>Kardos Péter a kihallgatóban először az ügyvédjét kéri, aztán egy pohár vizet, aztán semmit. Amikor eléteszed a 21:34-es képet és az anyja kapszulás dobozát, sokáig nézi. „Hétfő reggel kilencig” — mondja végül. „Harminc év után egy cetlin. Mint egy alkalmazottnak.” Felnéz. „Tudja, mit mondott volna az ügyész? Három év, felfüggesztve. Én nem akartam börtönbe menni, főhadnagy.” Most megy, tizenötre.</p>";
   t+="<p>A biztosító nem fizet. A cég decemberben csődöt jelent. Márk átveszi, ami megmaradt: egy irodát a Váci úton, harminc embert, és egy fényképet a recepción, gyászkeretben, amit nem vesz le.</p>";
  }
  return t+c6EndCommon(S);
 },
 wrong:{$v:{
  a:{kardos:"<p>Kardos Péter ellen vádat emelnek. Az ügyvédje a tárgyaláson lejátssza a videót, a koccintást, a bal kezet, a hatodik kupicát. A bíró felmenti. Sikkasztásért két év, felfüggesztve.</p><p>Sárközi Ilona eladja a patikát, és Szentendrére költözik. A férje leveleit elégeti a kertben. Dóra azt mondja Márknak, hogy az anyja végre nyugodt. Te tudod, miért.</p>",
     mark:"<p>Fodor Márkot letartóztatják a nászéjszaka utáni harmadik napon. A sajtó imádja. A tárgyaláson a vád összeomlik: nincs módszer, nincs méreg, csak egy mondat a teraszról. Felmentik. Dóra nem jön vissza hozzá.</p><p>Sárközi Ilona minden vasárnap meglátogatja a lányát. Soha nem beszélnek Fodor Ákosról.</p>"},
  b:{ilona:"<p>Sárközi Ilonát letartóztatják. A gyógyszerész anyós, a pálinka, a régi gyűlölet: a sajtó imádja. Hat hónapot ül előzetesben, aztán a tárgyaláson a szakértő elmondja, hogy a kupicában nem volt méreg. Felmentik. A patikáját addigra eladta, hogy kifizesse az ügyvédet.</p><p>Kardos Péter megkapja a biztosítási pénzt. Tavasszal Montenegróba költözik, a cégét Márk nyakában hagyja, tartozással együtt.</p>",
     mark:"<p>Fodor Márkot letartóztatják a nászéjszaka utáni harmadik napon. A sajtó imádja. A tárgyaláson a vád összeomlik: nincs módszer, nincs méreg, csak egy mondat a teraszról. Felmentik. Dóra nem jön vissza hozzá.</p><p>Kardos Péter megkapja a biztosítási pénzt, és Márk vállára teszi a kezét a temetésen. „Majd én elintézek mindent, fiam.”</p>"}
 }},
 fired:"<p>Az ügyet más viszi tovább. Téged szabadságra küldenek, „pihenni”.</p><p>Otthon ülsz, a gesztenyefa levelei az ablakpárkányon. A tévében Fodor Ákos temetése. A koporsó mögött a násznép, mindenki fekete ruhában, mintha ugyanaz a lakodalom folytatódna.</p>"
}
};

function c6EndCommon(S){
  let t="";
  if(S.f.gergo_alku)t+="<p>Gergő a következő héten felmond a Malomkertben. Egy hónap múlva egy SMS jön egy ismeretlen számról: <i>„Köszönöm. Abbahagytam. – G.”</i> Nem tudod, igaz-e. Elteszed a számot.</p>";
  else if(S.f.gergo_bukik)t+="<p>Gergő hat hónapot kap felfüggesztve. A Malomkert új pincért vesz fel. Te nem nézed meg, kit.</p>";
  if(S.f.foto1994)t+="<p>A Révész-komp fényképét nem adod le a bizonyítékok közé. Hazaviszed, és beteszed apád régi jegyzetfüzetébe, az 1994-es lapok közé. A kivágott arc helyén a fehér papír néz vissza rád. Valaki harminchárom éve tudta, hogy egyszer valaki keresni fogja.</p>";
  if(S.f.lili_felvetel)t+="<p>Lilit felveszik a Zeneakadémiára. A levelet nem neked mutatja meg először, hanem az anyjának. Másodiknak neked. Ez is több, mint amit egy éve gondoltál volna.</p>";
  else if(S.f.lili_marad)t+="<p>Lilit felveszik a Zeneakadémiára. Szerda este a konyhában mondja el, és te nem tudod, hogy jó volt-e a Liszt, mert nem voltál ott. Ő sem mondja.</p>";
  else if(S.f.lili_hivas6)t+="<p>Lili most minden kedden felhív Bécsből, este kilenckor. Ha nem veszed fel, nem hív újra aznap. De mindig felveszed.</p>";
  if(S.f.anna_pecs_nem)t+="<p>Detti nem megy Pécsre. Decemberben a te lakásodban állítjátok fel a fát, és a macska ledönti. Kétszer.</p>";
  else if(S.f.anna_pecs_rossz)t+="<p>Novemberben Detti elmegy Pécsre. A pályaudvaron nem sír. Te sem. A vonat után a büféhez mész, és ott állsz a pult előtt egy darabig.</p>";
  else if(S.f.anna_pecs_igen)t+="<p>Novemberben Detti elmegy Pécsre. Pénteken este te ülsz a vonaton, kétszáz kilométer, egy könyvvel, amit nem olvasol. Az állomáson vár, futócipőben. „Jöttél.” Jöttél.</p>";
  else if(S.f.anna_vacsora6)t+="<p>Detti hétvégén a te lakásodban alszik. Hétfőn is. Kedden hoz egy fogkefét.</p>";
  if(S.f.sanyi_szponzor)t+="<p>Sanyi a szponzorod. Az első héten hajnali háromkor egyszer felhívod. Felveszi a második csengésre, és egy órán át a halászatról beszél. Utána alszol.</p>";
  if((S.drinks||0)===0)t+="<p>Hetven ember ivott egy lakodalomban, és te nem. Este a gyűlésen elmondod. Valaki megtapsol. Kínos. Jó.</p>";
  else t+="<p>Este a Hordóban ülsz. Laci tölt, és nem kérdez. A sarokasztal üres.</p>";
  if(S.f.bence_halott)t+="<p>Bence sárga cetlije még mindig ott van az asztalán. Szép Viktória egyszer leveszi, aztán visszaragasztja.</p>";
  return t;
}
