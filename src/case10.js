// ===== 10. ÜGY: TÚLPART =====
CASES.c10 = {
id:"c10", num:"10. ügy ·", title:"Túlpart", tagline:"Május. A Révészt szétbontják. Vámos Lajos azt üzente, reggel elmondja a nevet. Reggelre halott.",
date:[2028,4,15], par:4, variants:["a","b"], final:1,
order:["keleti","laci","fenyvesi"],
start:{t:410, loc:"otthon"},
onStart:function(S,A){S.f.body=1;S.alc=S.f.aa_beszed?0:20;S.fat=35;S.crave=S.f.aa_beszed?30:35;A.addEv("lajos_halal");A.addEv("lajos_uzenet")},
intro:function(S,A){
  let t="<p>Hétfő, május 15., 06:50. A telefonodon egy hangüzenet, tegnap este 21:40-ről. Nem hallottad, aludtál. Most meghallgatod.</p>";
  t+="<p>Vámos Lajos. A hangja lassú, rekedt, mögötte a Duna. <i>„Főhadnagy. Holnap szétszedik a kompot. Reggel nyolckor jöjjön ki. Elmondom a nevet.”</i> Csend. <i>„Gergőért. Meg az apjáért.”</i></p>";
  t+="<p>06:52. Szép Viktória hív. „Déli kikötő. A bontóbrigád hatkor megtalálta Vámos Lajost a Révész gépházában, a fenékvízben. Megfulladt.” Szünet. „A szájában egy ötforintos volt, Mátrai. Egy régi.”</p>";
  if(S.f.foto1994)t+="<p>Apád füzetében a fénykép: négy ember a Révész fedélzetén, 1994. Szabó halott. Fodor halott. Vámos Lajos most halt meg. A negyedik arcát valaki kivágta.</p>";
  if(S.f.lili_betu)t+="<p>A hűtőn a cetli, Lili kézírásával, egy zongora alakú mágnes alatt: <i>K vagy L.</i></p>";
  if(S.f.keleti_majus||S.f.laci_majd)t+="<p>„Májusban” — mondta Keleti. „Majd egyszer” — mondta Laci. Május van.</p>";
  return t;
},

suspects:{
 keleti:{name:"Dr. Keleti Mária", short:"Keleti", reveal:["met_keleti"]},
 laci:{name:"Laci (Lakatos László)", short:"Laci", reveal:["met_laci"]},
 fenyvesi:{name:"Fenyvesi Ádám", short:"Fenyvesi", reveal:["met_fenyvesi"]}
},
solution:{$v:{a:{main:"keleti"},b:{main:"laci"}}},
bossLine:"„Ez az utolsó ilyen ügye, Mátrai. Akárhogy is lesz vége. Ezt maga is tudja.”",

ev:{
 lajos_halal:{n:"A Révész gépházában", d:"Vámos Lajos, 74, egykori révész. Hétfő reggel hatkor a bontóbrigád találta meg a kivont komp elárasztott gépházában, arccal a fenékvízben. A szájában egy ötforintos érme."},
 lajos_uzenet:{n:"Az utolsó hangüzenet", d:"Vasárnap 21:40, Vámos Lajos hangüzenete: „Holnap szétszedik a kompot. Reggel nyolckor jöjjön ki. Elmondom a nevet. Gergőért. Meg az apjáért.”"},
 otforintos:{n:"Ötforintos, 1994", d:"Lajos szájában egy 1994-ben vert ötforintos. Szabó kapitány szájában 1994. november 9-én ugyanilyen volt. A révésznek fizetni kell, különben a halott nem jut át a túlpartra."},
 vizbe_fojtas:{n:"Lenyomták", d:"Lajost a fenékvízbe nyomták, és ott tartották, amíg megfulladt. A tarkóján és a vállán ujjnyomok formájú bevérzések. A halál ideje: vasárnap 23:00 és hétfő 01:00 között."},
 korom:{n:"Bőr a körmök alatt", d:"Lajos jobb kezének körmei alatt idegen bőrhámsejtek. Védekezett. Megkarmolta, aki lenyomta."},
 szabo_akta:{n:"Az 1994-es akta", d:"Szabó Ferenc kapitány, 1994. november 9. Vezető nyomozó: Mátrai Gyula. Boncolta: dr. Keleti Mária. „Ittas állapotban a vízbe esett, megfulladt. Idegenkezűség nem valószínű.” A szájában talált érmét „babonás szokásnak” tulajdonították. Az ügyet hat nap alatt lezárták."},
 apa_level:{n:"Apád levele Lajosnak", d:"Lajos kormányállásában, egy bádogdobozban, apád kézírása, 1995: „Lajos. Amit láttál, azt felejtsd el. Én is elfelejtem. Nem pénzt védek, hanem egy barátot. Ha egyszer valaki kérdezi, mondd, hogy én zártam le. Gy.”"},
 keleti_1994:{n:"Keleti aláírása", d:"Az 1994-es boncolási jegyzőkönyvet dr. Keleti Mária írta alá: baleset, vízbefulladás. A tarkón lévő bevérzéseket „esés közbeni ütődésnek” írta le.", sup:[["keleti","I"]]},
 keleti_csepel:{n:"Tíz percre a kikötőtől", d:"Keleti Mária harminc éve Csepelen lakik, a Királyerdőben. Autóval tíz perc a Déli kikötőig.", sup:[["keleti","A"]]},
 keleti_orvos:{n:"Aki tudja, hogyan", d:"Harmincnyolc év igazságügyi orvosszakértőként. Keleti pontosan tudja, hogyan néz ki egy vízbefulladás, és hogyan kell, hogy kinézzen egy baleset.", sup:[["keleti","M"]]},
 laci_1994:{n:"A kikötői büfé", d:"Laci 1994-ben a Déli kikötő büféjét vitte, mielőtt megnyitotta a Hordót. Szabó kapitány az utolsó estéjén az ő büféjében ivott, apáddal és még valakivel.", sup:[["laci","I"]]},
 laci_kozel:{n:"A Hordó kisbusza", d:"Laci egy fehér Transit kisbusszal hordja az italt. A Hordótól a Déli kikötőig húsz perc éjjel.", sup:[["laci","A"]]},
 laci_hajos:{n:"Laci a kompon", d:"Laci a nyolcvanas években két évig a Révészen dolgozott matrózként, Vámos Lajos mellett. Ismeri a gépházat, a lépcsőt, a fenékvizet.", sup:[["laci","M"]]},
 fenyvesi_kotber:{n:"Napi kétmillió", d:"Fenyvesi Ádám bontási vállalkozó. Vámos Lajos két hónapja nem volt hajlandó leköltözni a kompról, és minden nap kétmillió forint kötbérbe került Fenyvesinek.", sup:[["fenyvesi","I"]]},
 fenyvesi_ott:{n:"Vasárnap este a kikötőben", d:"Fenyvesi vasárnap este hét és tíz között a kikötőben volt. Az őr szerint ordított Lajossal: „Kiviszlek innen, ha kell, holtan is!”", sup:[["fenyvesi","A"]]},
 fenyvesi_ero:{n:"A volt bokszoló", d:"Fenyvesi százhúsz kiló, egykori nehézsúlyú ökölvívó. A keze akkora, mint egy lapát.", sup:[["fenyvesi","M"]]},
 fenyvesi_alibi:{n:"22:05, kapu", d:"A kikötő kapunaplója szerint Fenyvesi 22:05-kor távozott. A telefonja 22:40-től reggel hétig a budaörsi átjátszón volt, a felesége szerint otthon aludt.", clears:"fenyvesi"},
 // A változat
 boncolas_baleset:{var:"a", n:"Keleti: baleset", d:"Keleti Mária boncolási jegyzőkönyve: Vámos Lajos megcsúszott a gépház lépcsőjén, beverte a fejét, eszméletlenül a vízbe esett és megfulladt. Baleset."},
 kez_kicsi:{var:"a", n:"Kis kéz", d:"A tarkón lévő ujjnyomok közötti távolság alapján a kéz fesztávja legfeljebb 17 centiméter. Kis kéz. Inkább nőé, mint férfié.", sup:[["keleti","M"]]},
 dns_keleti:{var:"a", n:"A kizárási adatbázis", d:"A körmök alatti bőr DNS-e egyezik egy profillal az igazságügyi dolgozók kizárási adatbázisából: dr. Keleti Mária.", sup:[["keleti","M"]]},
 or_volvo:{var:"a", n:"Egy szürke kombi", d:"Kolos, az éjjeliőr: vasárnap fél tizenkettő előtt egy szürke kombi állt meg a móló végén, lekapcsolt lámpával. Egy nő szállt ki, egy táskával. Egy óra múlva ment el.", sup:[["keleti","A"]]},
 keleti_auto:{var:"a", n:"A szürke Volvo", d:"Keleti szürke Volvója a rendszámfelismerő szerint 23:31-kor a Soroksári úton a kikötő felé, 00:49-kor visszafelé haladt. Keleti azt mondta, otthon aludt.", sup:[["keleti","A"]]},
 laci_alibi:{var:"a", n:"A pult mögött", d:"Laci vasárnap hajnali háromig a Hordó pultja mögött állt. Tizenkét törzsvendég és a kassza kamerája látta.", clears:"laci"},
 laci_vallomas_a:{var:"a", n:"Laci emlékei", d:"Laci: „Kilencvennégy, november kilenc. Mária lement a kompra Szabóhoz éjjel, egy orvosi táskával. Fél óra múlva jött vissza, vizes volt a kabátja ujja. Reggel Gyula azt mondta: Laci, te nem láttál semmit.”", sup:[["keleti","I"]]},
 keleti_hamis:{var:"a", n:"A második baleset", d:"Keleti azt írta, baleset. Dr. Simon szerint Lajost lenyomták. Harmincnégy év alatt Keleti másodszor írta le ugyanazt a hazugságot ugyanarról a kompról.", sup:[["keleti","M"]], ded:true},
 keleti_ott:{var:"a", n:"Fél tizenkettő és egy között", d:"23:31-kor a Volvo a kikötő felé tartott, 00:49-kor visszafelé. Lajos 23:00 és 01:00 között halt meg. Keleti azt mondta, otthon aludt.", sup:[["keleti","A"]], ded:true},
 keleti_kez:{var:"a", n:"Az ő keze", d:"Kis kéz a tarkón. Bőr a körmök alatt, a kizárási adatbázisból. Lajos megkarmolta, aki lenyomta, és az orvosszakértő volt.", sup:[["keleti","M"]], ded:true},
 keleti_titok:{var:"a", n:"Ötforintos, kétszer", d:"1994-ben Keleti írta alá, hogy Szabó vízbe esett. 2028-ban azt, hogy Lajos. Mindkettőnek ötforintos volt a szájában. Lajos el akarta mondani a nevet.", sup:[["keleti","I"]], ded:true},
 // B változat
 boncolas_igaz:{var:"b", n:"Keleti: gyilkosság", d:"Keleti Mária boncolási jegyzőkönyve, kedd délután, Szegedről hazatérve: Vámos Lajost lenyomták a vízbe. Ugyanazt írja, amit dr. Simon."},
 kez_nagy:{var:"b", n:"Nagy kéz", d:"A tarkón lévő ujjnyomok közötti távolság alapján a kéz fesztávja legalább 23 centiméter. Nagy, széles férfikéz.", sup:[["laci","M"]]},
 dns_ferfi:{var:"b", n:"Ismeretlen férfi", d:"A körmök alatti bőr DNS-e férfitól származik, és egyik adatbázisban sincs találat. Se a bűnügyiben, se a kizárásiban."},
 dns_laci:{var:"b", n:"Laci pohara", d:"A Hordóból elhozott pohár peremén lévő DNS egyezik a Lajos körmei alatti bőrrel: Lakatos László.", sup:[["laci","M"]]},
 keleti_szeged:{var:"b", n:"Szegeden", d:"Keleti vasárnap és hétfőn Szegeden volt, az igazságügyi orvosszakértők konferenciáján. Szállodai bejelentkezés vasárnap 18:10, vacsora 21-től éjfélig harminc kollégával, hétfő reggel előadás.", clears:"keleti"},
 hordo_zaras:{var:"b", n:"Tizenegy előtt zárt", d:"Pista bácsi, a Hordó törzsvendége: vasárnap Laci fél tizenegykor mindenkit kitessékelt, azt mondta, fáj a feje. Harminc év alatt egyszer se zárt éjfél előtt.", sup:[["laci","A"]]},
 laci_furgon:{var:"b", n:"A Hordó kisbusza", d:"Kolos, az éjjeliőr: fél tizenkettő körül egy fehér kisbusz állt meg a móló végén, lekapcsolt lámpával. Az oldalán egy matrica: HORDÓ. Egy nagydarab férfi szállt ki.", sup:[["laci","A"]]},
 keleti_vallomas_b:{var:"b", n:"Keleti emlékei", d:"Keleti: „Gyula hajnalban felhívott. Azt mondta: Mária, Szabó vízbe esett, és így is kell maradnia. Laci barátja vagyok, a tiéd is. Írd azt, amit látni akarsz. Én azt írtam.”", sup:[["laci","I"]]},
 laci_ott:{var:"b", n:"Fél tizenegy után", d:"Laci fél tizenegykor bezárta a Hordót, harminc év alatt először ilyen korán. Fél tizenkettőkor a kisbusza a móló végén állt.", sup:[["laci","A"]], ded:true},
 laci_kez:{var:"b", n:"Az ő keze", d:"Nagy, széles férfikéz a tarkón. Bőr Lajos körmei alatt, és ugyanaz a DNS Laci poharán.", sup:[["laci","M"]], ded:true},
 laci_titok:{var:"b", n:"A büfé, 1994", d:"1994-ben Laci vitte a kikötői büfét. Szabó az utolsó estéjén nála ivott. Apád barátja volt, és apád őt védte. Harmincnégy évig.", sup:[["laci","I"]], ded:true},
 // közös
 ugyanaz:{n:"Ugyanaz a kéz", d:"1994-ben Szabó kapitány, 2028-ban Vámos Lajos. Mindkettő a Révésznél, a vízben, egy ötforintossal a szájában. Harmincnégy év, ugyanaz az ember.", ded:true, f:"ugyanaz_kez"},
 eredeti_foto:{n:"Az eredeti fénykép", d:{$v:{a:"A hajóharangba ragasztott eredeti fénykép, vágatlanul, de vizesen. A negyedik alak elmosódott: hosszú haj, fehér köpeny a kabát alatt, a lábánál egy orvosi táska.",b:"A hajóharangba ragasztott eredeti fénykép, vágatlanul, de vizesen. A negyedik alak elmosódott: kötény, széles váll, a vállán egy rekesz sör."}}, sup:{$v:{a:[["keleti","I"]],b:[["laci","I"]]}}}
},

ded:[
 {a:"otforintos", b:"szabo_akta", g:"ugyanaz", t:"Ötforintos a szájban, 1994-ben és most. A révész fizetsége. Valaki harmincnégy éve fizeti ugyanazt a révészt."},
 {var:"a", a:"boncolas_baleset", b:"vizbe_fojtas", g:"keleti_hamis", t:"Keleti azt írta: elcsúszott. Simon azt: lenyomták. Az egyik hazudik, és nem Simon."},
 {var:"a", a:"keleti_auto", b:"vizbe_fojtas", g:"keleti_ott", t:"23:31 befelé, 00:49 kifelé. Lajos ebben az órában halt meg. Keleti azt mondta, otthon aludt."},
 {var:"a", a:"or_volvo", b:"vizbe_fojtas", g:"keleti_ott", t:"Egy szürke kombi a móló végén, lekapcsolt lámpával. Egy nő egy táskával. Egy órával később Lajos halott."},
 {var:"a", a:"dns_keleti", b:"kez_kicsi", g:"keleti_kez", t:"Kis kéz a tarkón, és a bőr a körmök alatt egy olyan adatbázisból, amit azért hoztak létre, hogy kizárják a saját embereinket."},
 {var:"a", a:"keleti_1994", b:"laci_vallomas_a", g:"keleti_titok", t:"1994-ben ő írta alá, hogy baleset. Laci látta, hogy lement a kompra, egy orvosi táskával. Vizes volt a kabátja ujja."},
 {var:"a", a:"keleti_hamis", b:"szabo_akta", g:"keleti_titok", t:"Kétszer ugyanaz a hazugság, harmincnégy év különbséggel. Ugyanaz a komp, ugyanaz az érme, ugyanaz az aláírás."},
 {var:"a", a:"eredeti_foto", b:"keleti_1994", g:"keleti_titok", t:"A negyedik a fényképen: hosszú haj, orvosi táska. És az aláírás a jegyzőkönyvön."},
 {var:"b", a:"laci_furgon", b:"hordo_zaras", g:"laci_ott", t:"Harminc év alatt először zárt tizenegy előtt. Fél tizenkettőkor a kisbusza a móló végén."},
 {var:"b", a:"dns_laci", b:"kez_nagy", g:"laci_kez", t:"Nagy kéz a tarkón. A pohár, amiből harminc éve kólát töltött neked, ugyanazt mondja, mint Lajos körmei."},
 {var:"b", a:"keleti_vallomas_b", b:"laci_1994", g:"laci_titok", t:"Szabó az ő büféjében ivott az utolsó estéjén. Apád azt mondta Keletinek: Laci barátja vagyok. Írd azt, amit látni akarsz."},
 {var:"b", a:"eredeti_foto", b:"laci_1994", g:"laci_titok", t:"A negyedik a fényképen: kötény, széles váll, egy rekesz sör. A kikötői büfé, 1994."}
],

docs:{
 boncolas10:{t:"Boncolási jegyzőkönyv – Vámos Lajos (dr. Keleti Mária)", b:{$v:{
  a:"IGAZSÁGÜGYI ORVOSTANI INTÉZET\nBoncolt: dr. Keleti Mária\n\nNév: Vámos Lajos, 74 é.\n[[boncolas_baleset|Halál oka: vízbefulladás. A homlokon zúzott seb, a gépház vaslépcsőjének élével egyező. A tarkón és a vállakon kisebb bevérzések, esés közbeni ütődésből. Összegzés: a sérült a nedves lépcsőn megcsúszott, fejét beverte, eszméletlen állapotban a fenékvízbe esett. Idegenkezűség nem valószínű.]]\nA szájüregben egy 1994-es ötforintos érme.\n\n— K. M.",
  b:"IGAZSÁGÜGYI ORVOSTANI INTÉZET\nBoncolt: dr. Keleti Mária (kedd, Szegedről visszatérve)\n\nNév: Vámos Lajos, 74 é.\n[[boncolas_igaz|Halál oka: vízbefulladás, erőszakos. A tarkón és a vállakon ujjbegy alakú bevérzések: hátulról lenyomták és a víz alatt tartották. A homlokon zúzott seb a lépcsőtől, a küzdelem közben.]]\n[[kez_nagy|Az ujjnyomok közötti távolság alapján nagy, széles kéz, fesztáv 23 cm felett.]]\n[[korom|A jobb kéz körmei alatt idegen bőrhámsejtek.]]\nA szájüregben egy 1994-es ötforintos érme.\n\n— K. M., kézzel: „Ugyanaz az érme, Dénes. Ugyanaz. Gyere be, beszélnünk kell.”"}}},
 simon10:{t:"Második szakvélemény – Vámos Lajos (dr. Simon Béla)", b:{$v:{
  a:"IGAZSÁGÜGYI ORVOSTANI INTÉZET – kontrollvizsgálat\nVizsgálta: dr. Simon Béla, Szép Viktória kérésére\n\n[[vizbe_fojtas|A tarkón és a vállakon ujjbegy alakú, szimmetrikus bevérzések: az áldozatot hátulról lenyomták és a víz alatt tartották. Ez nem esés közbeni ütődés. A halál ideje: vasárnap 23:00 és hétfő 01:00 között.]]\n[[kez_kicsi|Az ujjnyomok közötti távolság alapján kis kéz, fesztáv legfeljebb 17 cm.]]\n[[korom|A jobb kéz körmei alatt idegen bőrhámsejtek. Az első jegyzőkönyv ezt nem említi.]]\n\n— S. B.: „Nem értem, Keleti doktornő hogyan írhatta ezt balesetnek. Harmincnyolc éve csinálja.”",
  b:"IGAZSÁGÜGYI ORVOSTANI INTÉZET – kontrollvizsgálat\nVizsgálta: dr. Simon Béla, Szép Viktória kérésére\n\n[[vizbe_fojtas|A tarkón és a vállakon ujjbegy alakú, szimmetrikus bevérzések: az áldozatot hátulról lenyomták és a víz alatt tartották. A halál ideje: vasárnap 23:00 és hétfő 01:00 között.]]\n[[kez_nagy|Az ujjnyomok közötti távolság alapján nagy, széles kéz, fesztáv 23 cm felett.]]\n[[korom|A jobb kéz körmei alatt idegen bőrhámsejtek.]]\n\n— S. B.: „Egyetértek Keleti doktornővel. Ez gyilkosság.”"}}},
 dns10:{t:"DNS-vizsgálat – Vámos Lajos körmei alól", b:{$v:{
  a:"BŰNÜGYI TECHNIKAI LABOR – DNS\nVizsgálta: Halász Tamás\n\nMinta: idegen bőrhámsejtek, V. L. jobb kezének körmei alól.\nBűnügyi adatbázis: nincs találat.\n[[dns_keleti|Kizárási adatbázis (helyszínelők, orvosszakértők, laborosok): EGYEZÉS. Dr. Keleti Mária.]]\n\n— H. T., kézzel: „Kétszer futtattam le, Dénes. Háromszor. Sajnálom.”",
  b:"BŰNÜGYI TECHNIKAI LABOR – DNS\nVizsgálta: Halász Tamás\n\nMinta: idegen bőrhámsejtek, V. L. jobb kezének körmei alól.\n[[dns_ferfi|Nem: férfi. Bűnügyi adatbázis: nincs találat. Kizárási adatbázis: nincs találat.]]\n\n— H. T.: „Valaki, aki soha nem volt gyanúsított. Se rendőr. Hozz egy poharat, egy csikket, bármit.”"}}},
 dns_pohar:{t:"DNS-vizsgálat – pohár a Hordóból", b:{$v:{
  a:"BŰNÜGYI TECHNIKAI LABOR – DNS\nVizsgálta: Halász Tamás\n\nMinta: üvegpohár pereme, a Hordóból.\nÖsszevetés: V. L. körmei alatti bőr.\nEredmény: nem egyezik.\n\n— H. T.: „Nem Laci. Gondoltam. Azért jó tudni.”",
  b:"BŰNÜGYI TECHNIKAI LABOR – DNS\nVizsgálta: Halász Tamás\n\nMinta: üvegpohár pereme, a Hordóból.\nÖsszevetés: V. L. körmei alatti bőr.\n[[dns_laci|Eredmény: EGYEZÉS. Lakatos László.]]\n\n— H. T., kézzel: „Dénes. Harminc éve ott iszom én is. Nem tudom, mit írjak ide.”"}}},
 szabo_akta_doc:{t:"Szabó Ferenc, 1994 – a sárga akta", b:"BRFK, Vizsgálati Osztály – ügyszám 1994/11/0832\nVezető nyomozó: Mátrai Gyula r. százados\n\n[[szabo_akta|Szabó Ferenc, 51 é., hajóskapitány. 1994. 11. 09. 06:20-kor a Déli kikötő mólójánál a vízben találta Hajdú Ferenc raktáros. Boncolta: dr. Keleti Mária. Halál oka: vízbefulladás, ittas állapotban. A szájüregben egy 5 Ft-os érme, babonás szokás. Idegenkezűség nem valószínű. Lezárva: 1994. 11. 15.]]\n[[keleti_1994|A boncolási jegyzőkönyvben a tarkón lévő bevérzések: „esés közbeni ütődés a móló kövén”. Aláírás: dr. Keleti Mária.]]\n\nA borító belső oldalán, ceruzával, apád kézírásával: „Bocsáss meg, Feri.”"},
 apa_level_doc:{t:"Apád levele Vámos Lajosnak, 1995", b:"Kockás füzetlap, kék tinta, apád kézírása, amit a jegyzetfüzetéből ismersz.\n\n[[apa_level|Lajos!\n\nAmit láttál, azt felejtsd el. Én is elfelejtem. Nem pénzt védek, hanem egy barátot, aki nélkül nem tudom elképzelni az életemet, és aki egy éjszaka alatt rosszabb ember lett, mint amilyen. Ha egyszer valaki kérdezi, mondd, hogy én zártam le. Az én nevem legyen rajta, ne az övé.\n\nGy.]]\n\nA lap alján, más tintával, később: „Lajos, ha a fiam egyszer idejön: mondd el neki. Ő jobb rendőr lesz, mint én.”"}
},

locs:{
 reves10:{m:"Révész", n:"A Révész, Déli kikötő", x:548, y:618, side:"P", crime:1, gone:"reves_bontva", d:"A komp félig kiemelve a mólónál, egy daru horgán. A bontóbrigád munkagépei körülötte, mint dögevők. Holnap reggel hatkor kezdik a vágást. Utána nem lesz Révész.", hs:[
   {id:"gephaz", l:"A gépház", t:"Lefelé egy vaslépcső, csúszós, olajos. Lent térdig érő fenékvíz, olajfoltok szivárvánnyal. Itt találták Lajost, arccal a vízben, a lépcső aljától két méterre. A lépcső élén vér és ősz haj. Halász már bent áll, gumicsizmában.", ev:"otforintos", f:"helyszin10"},
   {id:"kormany", l:"A kormányállás", t:"Lajos priccse, a vaskályha, Gergő kilencéves fényképe a kormánykeréknél. A priccs alatt egy bádogdoboz, a fedelén horgony. Benne levelek, egy kompjegy, és egy kockás füzetlap apád kézírásával.", ev:"apa_level", doc:"apa_level_doc", f:"apa_igazsag"},
   {id:"harang", l:"A hajóharang", req:["apa_igazsag"], t:"A kormányállás mellett a régi rézharang, a nyelve kiszerelve. Benne, belülre ragasztva, nejlonfóliában egy fénykép. Ugyanaz, mint apádé: a Révész fedélzete, 1994. De ez nincs kivágva. A víz bejutott a fólia alá, a negyedik alak elmosódott, de nem egészen.", ev:"eredeti_foto"},
   {id:"korlat", l:"A korlát", t:"A korláton kötelek, mind kettős bakcsomóval a bakokhoz kötve. Az utolsó csomók, amiket Lajos kötött. Holnap ezeket is levágják."}
 ]},
 otthon:{m:"Lakás", n:"Lakás a Körúton", x:612, y:338, side:"P", d:"Harmadik emelet, udvari szoba. Május, a gesztenyefa virágzik. A konyhaasztalon apád jegyzetfüzete, a hűtőn egy cetli, egy zongora alakú mágnes alatt.", hs:[]},
 kapitanysag:{m:"Kapitányság", n:"Főkapitányság", x:705, y:196, side:"P", d:"A folyosón tavaszi fény. Szép Viktória ajtaja nyitva. Az asztalán egy sárga akta.", hs:[]},
 hordo:{m:"Hordó", n:"Hordó", x:648, y:462, side:"P", open:[15,3], d:"A Hordó, harminc éve ugyanott. A sarokasztal üres. A pult mögött Laci, a kezében egy pohár, amit harminc éve ugyanúgy töröl.", hs:[
   {id:"busz", l:"A kisbusz az udvaron", t:{$v:{a:"Az udvaron a fehér Transit, az oldalán a HORDÓ matrica. A kerekén városi por, a platón ládák, üres üvegek. Semmi más.",b:"Az udvaron a fehér Transit, az oldalán a HORDÓ matrica. A kerekén szürke, olajos iszap, ami nem a Józsefvárosból jön. A kikötő iszapja. Az ülésen egy kötélvég, kettős bakcsomóval."}}, f:"busz_latva"}
 ]},
 intezet:{m:"Intézet", n:"Orvostani Intézet", x:792, y:474, side:"P", open:[7,19], d:"Keleti doktornő irodája. Az íróasztalon egy fénykép, amit eddig sosem láttál ott: egy fiatal nő és egy fiatal rendőr egy kompon, nevetnek. 1993.", hs:[]},
 temeto10:{m:"Farkasrét", n:"Farkasréti temető, apád sírja", x:150, y:420, side:"B", vis:"apa_igazsag", open:[7,20], d:"Mátrai Gyula, 1949–2026. Egy egyszerű kő, egy mécses, amit valaki nemrég gyújtott meg. A nyírfák alatt hűvös van. Innen látszik a Duna, ha tudod, hova nézz.", hs:[]},
 aa:{la:1, m:"NA-gyűlés", n:"NA-gyűlés, Szent Vince alagsor", x:760, y:296, side:"P", vis:"aa1", open:[18,21], d:"Összecsukható székek, filterkávé, a sekrestye ajtaja nyitva, mögötte senki. A fiatal plébános hozza a kávét.", hs:[]}
},

people:{
 fenyvesi:{n:"Fenyvesi Ádám", r:"bontási vállalkozó", loc:"reves10", h:[7,18], suspect:1, bio:"52 éves, százhúsz kiló, egykori nehézsúlyú bokszoló, most bontási vállalkozó. Láthatósági mellény, sisak, egy kéz, ami akkora, mint egy lapát. Nem sajnálja Lajost. Nem is tagadja.", topics:[
  {id:"lajos", l:"Vámos Lajosról", t:"„Két hónapja nem költözött le. Minden nap kétmillió kötbér.” Leveszi a sisakját. „Tegnap este ordítottam vele, igen. Azt mondtam, kiviszem, ha kell, holtan is.” Megvonja a vállát. „Nem gondoltam szó szerint. De hazudnék, ha azt mondanám, sajnálom, hogy ma reggel szabad a komp.”", ev:["fenyvesi_kotber","fenyvesi_ott"]},
  {id:"ejjel", l:"Hol volt tíz után?", t:"„Otthon. Budaörs. Tíz után öt perccel mentem ki a kapun, nézze meg a naplót.” Előveszi a telefonját. „A feleségem ébren várt, mint mindig.”", f:"fenyvesi_haza"},
  {id:"boksz", l:"A bokszról", t:"„Nehézsúly, kilencvenes évek. Kétszer magyar bajnok.” Felemeli a kezét. „Ha én nyomom le, főhadnagy, nem lett volna mit vizsgálni a tarkóján. Egyetlen ujjnyom lenne, egy tenyérnyi.”", ev:"fenyvesi_ero"},
  {id:"bontas", l:"A bontásról", t:"„Holnap reggel hatkor kezdünk vágni. Egy hét, és nincs Révész.” Felnéz a kompra. „Ha valamit még meg akar nézni rajta, ma nézze meg.”"}
 ]},
 kolos:{n:"Kolos", r:"éjjeliőr", loc:"reves10", h:[18,9], bio:"67 éves nyugdíjas vasutas, a kikötő éjjeliőre. Termoszban kávé, egy rádió, egy kutya, akinek nincs neve. Mindent lát, mert éjjel nincs más dolga.", topics:[
  {id:"ejjel", l:"Mit látott éjjel?", sober:1, t:{$v:{a:"„Fél tizenkettő előtt egy szürke kombi a móló végén, lámpa nélkül. Egy nő szállt ki, egy táskával, mint egy orvos.” Kortyol a termoszból. „Egy óra múlva ment el. Azt hittem, a Lajos bácsihoz jött valaki a kórházból, mostanában rosszul volt.”",b:"„Fél tizenkettő körül egy fehér kisbusz a móló végén, lámpa nélkül. Az oldalán egy matrica: HORDÓ. Egy nagydarab ember szállt ki.” Kortyol a termoszból. „Azt hittem, italt hoz a Lajos bácsinak. Néha hozott neki valaki, egy rekesszel.”"}}, ev:{$v:{a:["or_volvo"],b:["laci_furgon"]}}},
  {id:"kapu", l:"A kapunapló", t:"„Fenyvesi úr tíz óra öt perckor ment ki, ordítva telefonált. Azóta se jött vissza.” Megmutatja a füzetet. Gondos kézírás, vasutas pontosság.", ev:"fenyvesi_alibi"}
 ]},
 keleti:{n:"Dr. Keleti Mária", r:"igazságügyi orvosszakértő", loc:"intezet", h:[7,19], staff:1, suspect:1, bio:"62 éves. Apád barátja, harmincöt éve. Az íróasztalán egy fénykép, amit eddig sosem tett ki: ő és apád, fiatalon, egy kompon. Ma nem gyújt rá. Leszokott, mondja. Negyedszer idén.", topics:[
  {id:"ejjel", l:"Hol volt vasárnap éjjel?", t:{$v:{a:"„Otthon. Aludtam.” Nem néz fel a papírjaiból. „Egyedül élek, Dénes. Tudod.” Egy pillanatra megáll a tolla. Aztán ír tovább.",b:"„Szegeden. A konferencián.” Felnéz. „Vasárnap délután mentem, kedden jöttem.” Elővesz egy programfüzetet, a saját nevével: dr. Keleti Mária, hétfő 9:00, A vízi halálesetek csapdái. „Harminc kolléga látott, Dénes. Sajnos.”"}}, ev:{$v:{a:[],b:["keleti_szeged"]}}},
  {id:"1994", l:"1994-ről", req:["szabo_akta|apa_level"], sober:1, t:{$v:{a:"Keleti sokáig nézi a fényképet az asztalán. „Én írtam alá. Igen.” Hangja egyenletes. „Gyula kért meg. Azt mondta, baleset volt, és nekem el kell hinnem.” Rád néz. „Kérdezd Lacit, ki volt azon az éjszakán a kikötőben, Dénes. Ő ott volt a büféjében. Ő mindent látott.” Túl gyorsan mondja. Túl simán.",b:"Keleti sokáig nézi a fényképet az asztalán. Aztán leteszi, képpel lefelé. „Hajnalban Gyula felhívott. Azt mondta: Mária, Szabó vízbe esett, és így is kell maradnia. Laci barátja vagyok. A tiéd is.” Lehunyja a szemét. „Láttam a tarkóját, Dénes. Tudtam. És azt írtam, amit látni akart.” Kinyitja. „Harmincnégy éve várom, hogy valaki megkérdezze.”"}}, ev:{$v:{a:["keleti_1994"],b:["keleti_vallomas_b","keleti_1994"]}}},
  {id:"orvos", l:"A vízi halálesetekről", t:"„Egy vízbefulladás hazudik, Dénes. Mindig. A víz elmossa, ami a bőrön van, a lépcső élét ráfogja a fejre.” Leveszi a szemüvegét. „Aki tudja, hova nézzen, az tudja azt is, hova ne nézzen.” Nem tudod, magáról beszél-e.", ev:["keleti_orvos","keleti_csepel"]}
 ]},
 simon:{n:"Dr. Simon Béla", r:"igazságügyi orvosszakértő", loc:"intezet", h:[8,18], bio:"39 éves, Keleti egykori tanítványa. Szemüveg, futócipő a köpeny alatt. Szép Viktória kérte meg, hogy nézze meg Lajost Keleti után. Nem érti, miért, és nem is akarja érteni.", topics:[
  {id:"masodik", l:"Megkéred a második véleményre", req:["doc:boncolas10"], mins:180, t:"Simon sokáig hallgat. Aztán felhúzza a kesztyűt. Három óra múlva kijön, és nem néz a szemedbe. Átad egy lapot.", doc:"simon10"}
 ]},
 laci:{n:"Laci", r:"kocsmáros", loc:"hordo", h:[15,3], suspect:1, bio:"Lakatos László, 66 éves, a Hordó kocsmárosa harminc éve. Apád barátja, a tiéd is. Harminc éve kólát tölt neked, amikor kell, és fröccsöt, amikor nem kéne. A sarokasztalt senkinek nem adja oda.", topics:[
  {id:"ejjel", l:"Vasárnap éjjel?", t:{$v:{a:"„Itt. Háromig. Mint mindig.” Laci a pultra mutat. „Kérdezd Pista bácsit, kérdezd a kamerát. Vasárnap foci volt, tele volt a hely.”",b:"„Itt. Mint mindig.” Laci nem néz fel a poharakból. „Háromig.” A poharat törli, ami tiszta. Harminc éve ismered ezt a mozdulatot. Most először látod, hogy remeg közben a keze."}}},
  {id:"1994", l:"1994-ről", req:["szabo_akta|apa_level"], sober:1, t:{$v:{a:"Laci leteszi a poharat. Sokáig hallgat. „Kilencvennégy, november kilenc. A büfében voltam. Szabó ivott, apád ivott. Éjfél után Mária lement a kompra, Szabóhoz. Egy orvosi táskával.” Rád néz. „Fél óra múlva jött vissza. Vizes volt a kabátja ujja. Reggel Gyula azt mondta: Laci, te nem láttál semmit.” Leül. „Harmincnégy évig nem láttam semmit, Dénes. Ma reggel láttam az ötforintost a hírekben.”",b:"Laci leteszi a poharat. Sokáig hallgat. „Kérdezd Máriát.” Elfordul. „Ő boncolta. Ő írta alá.” A sarokasztalt nézi. „Apád ott ült. Minden novemberben. Egy fröccsel.” Nem mondja meg, miért. Te már tudod."}}, ev:{$v:{a:["laci_vallomas_a","laci_1994"],b:["laci_1994"]}}},
  {id:"komp", l:"A Révészről", t:"„Két évig dolgoztam rajta, nyolcvanhatban, Lajos mellett. Matróz.” Halványan elmosolyodik. „Ő tanított meg a kettős bakcsomóra. Mindenkit megtanított.”", ev:["laci_hajos","laci_kozel"]},
  {id:"regi", l:"Csak ültök", rep:1, dyn:"laciC10"}
 ]},
 pista:{n:"Pista bácsi", r:"törzsvendég", loc:"hordo", h:[16,24], bio:"78 éves, nyugdíjas villamosvezető, harminc éve ugyanazon a széken ül a pult végén. Mindent tud a Hordóról, amit Laci nem mond el.", topics:[
  {id:"vasarnap", l:"Vasárnap este?", t:{$v:{a:"„Foci volt. Ferencváros–Újpest. Laci háromig töltött, mindenki itt volt.” Koccint a levegőbe. „Kettő–egy. Laci adott egy kört a házra.”",b:"„Vasárnap?” Pista bácsi összehúzza a szemét. „Fél tizenegykor kitett mindenkit. Azt mondta, fáj a feje.” Megrázza a fejét. „Harminc év alatt egyszer se zárt éjfél előtt. Egyszer se. Még amikor a felesége meghalt, akkor se.”"}}, ev:{$v:{a:["laci_alibi"],b:["hordo_zaras"]}}}
 ]},
 // stáb
 szep:{n:"Dr. Szép Viktória", r:"osztályvezető", loc:"kapitanysag", h:[8,20], bio:"44 éves. Fél éve vezeti csendben az 1994-es vizsgálatot, ha a nyomok hozzá kerültek. Ma reggel azt mondta: ez az utolsó ilyen ügye, Mátrai. Nem tudod, fenyegetés volt-e vagy ígéret.", topics:[
  {id:"elig", l:"Eligazítás", t:"„Keleti boncol, ő az ügyeletes. De megkértem dr. Simont is, hogy nézze meg utána.” Leteszi a tollat. „Keleti boncolta Szabót 1994-ben. Nem akarom, hogy bárki azt mondja, nem voltunk alaposak.” Rád néz. „Magát sem akarom védeni, Mátrai. Csak tisztán.”"},
  {id:"akta", l:"Az 1994-es akta", req:["level_lead|hajdu_lead"], t:"Szép Viktória kinyitja a fiókját, és eléd teszi a sárga aktát. „Fél éve olvasom minden este.” Megérinti a borítót. „Az apja ceruzával írt bele valamit, belülre. Olvassa el.”", doc:"szabo_akta_doc", f:"akta_megvan"},
  {id:"statusz", l:"Jelentés az ügyről", rep:1, dyn:"vargaStatus"}
 ]},
 bence:{n:"Tóth Bence", r:"nyomozó", loc:"kapitanysag", h:[7,21], staff:1, gone:"bence_halott", bio:"29 éves. Májusban felvételizik a tiszti akadémiára. Azt mondja, miattad. Nem hiszed el. Ő igen.", topics:[{id:"gond", l:"Mit gondolsz?", rep:1, dyn:"hintBence10"}]},
 kata:{n:"Rácz Kata", r:"nyomozó", loc:"kapitanysag", h:[7,21], staff:1, gone:"kata_vad", bio:"36 éves. Azt mondja, ha valaki harmincnégy évig titkol valamit, az már nem titok, hanem a csontjai.", topics:[{id:"gond", l:"Mit gondolsz?", rep:1, dyn:"hintKata10"}]},
 bodnar:{n:"Bodnár Feri", r:"törzszászlós", loc:"kapitanysag", h:[7,21], staff:1, gone:"bodnar_vad", bio:"58 éves. Kilencvennégyben fiatal járőr volt a Déli kikötőben. Emlékszik a reggelre, amikor Szabót kihúzták.", topics:[{id:"gond", l:"Mit gondolsz?", rep:1, t:"„Kilencvennégy. Én húztam ki Szabót, Hajdúval.” Megvakarja a bajuszát. „Apád fél órán belül ott volt. Előbb, mint a mentő. Mintha tudta volna.” Rád néz. „Ezt soha senkinek nem mondtam, Dénes.”"}]},
 halasz:{n:"Halász Tamás", r:"nyomszakértő", loc:"kapitanysag", h:[8,22], staff:1, bio:"41 éves. Harminc éve iszik a Hordóban, és tizenöt éve dolgozik Keleti mellett. Ma reggel nem kapcsolta be az Omegát.", topics:[{id:"gond", l:"Mi van a laborban?", rep:1, dyn:"hintHalasz10"}]},
 feher:{n:"Dr. Fehér Judit", r:"pszichológus", loc:"kapitanysag", h:[9,17], staff:1, bio:"52 éves. Két éve figyel. Ma azt mondja, most kell a legjobban figyelnie.", topics:[
  {id:"profil", l:"Ki fizet a révésznek?", t:"„Aki egy ötforintost tesz egy halott szájába, az nem megtéveszteni akar.” Leveszi a szemüvegét. „Az bocsánatot kér. A halottól, vagy magától. Harmincnégy éve ugyanattól.” Rád néz. „Ez valaki, akit ismer, főhadnagy. Valaki, aki szereti magát. Ettől lesz nehéz.”"},
  {id:"jozan", l:"A józanságról", rep:1, dyn:"feherJozan10"}
 ]},
 sanyi:{n:"Sanyi", r:"NA-gyűlés, szponzor", loc:"aa", h:[18,21], bio:"68 éves, huszonnégy éve józan. Visszavitte a székeket a Szent Vince alagsorába. Az ajtót nyitva tartja.", topics:[
  {id:"ul", l:"Leülsz a körbe", rep:1, mins:90, eff:{crave:-40}, dyn:"sanyiC10"}
 ]},
 lili:{n:"Mátrai Lili", r:"a lányod", loc:"otthon", h:[17,23], bio:"19 éves zongorista. Ezen a héten itt van, nagyapja születésnapjára. A hűtőn az ő cetlije.", topics:[
  {id:"este", l:"Leülsz mellé", rep:1, dyn:"liliC10"},
  {id:"temeto", l:"Megkéred, hogy jöjjön veled apád sírjához", req:["apa_igazsag"], t:"Lili felveszi a kabátját, mielőtt befejeznéd a mondatot. „Hoztam neki valamit” — mondja, és megmutatja: egy kotta, Bach, a Goldberg-variációk ária. „Keleti doktornő azt mondta, ezt szerette.” Megállsz az ajtóban.", f:"lili_temeto"}
 ]},
 anna:{n:"Detti", r:"nálad", loc:"otthon", h:[20,24], vis:"anna_egyutt|anna_vissza|anna_utolso", gone:"anna_vege_vegleg", bio:"Dr. Kerekes Bernadett. A konyhaasztalnál ül, egy pohár vízzel, és vár. Nem kérdez. Tudja, hogy ma este te fogsz beszélni.", topics:[
  {id:"beszel", l:"Elmondod neki", sober:1, t:"Elmondod: Lajost, az ötforintost, apád levelét, a K-t és az L-t. Detti végighallgat, egyszer sem szól közbe. A végén azt mondja: „Tudod, mi a különbség köztetek? Apád azt hitte, ha eltakarja a sebet, meggyógyul.” Megfogja a kezed. „Te tudod, hogy ki kell tisztítani. Akkor is, ha fáj.”", f:"anna_beszel"},
  {id:"ul", l:"Csak ültök", rep:1, eff:{crave:-15}, t:"A gesztenyefa virágzik az ablak előtt. Detti a vállad mögé áll, és a hajadba túr. „Holnap is itt leszek.” Tudod. Most először tudod."}
 ]}
},

tasks:[
 {id:"boncolas10", l:"Vámos Lajos boncolása", req:["body"], dur:300, fit:{keleti:1}, doc:"boncolas10", ok:"Keleti végzett Lajossal."},
 {id:"archivum", l:"Az 1994-es Szabó-akta az archívumból", req:["otforintos|lajos_halal"], dur:240, fit:{kata:.9, bence:.88, bodnar:.85, halasz:.6}, doc:"szabo_akta_doc", ok:"Megvan az 1994-es akta. Ceruzás bejegyzés van a borítón."},
 {id:"dns10", l:"DNS a körmök alól", req:["korom"], dur:300, fit:{halasz:.95}, doc:"dns10", ok:"Megvan a DNS-eredmény. Halász nem telefonál, átjön."},
 {id:"dns_pohar", l:"DNS-összevetés: Laci pohara", req:["laci_pohar"], dur:240, fit:{halasz:.95}, doc:"dns_pohar", ok:"Megvan a pohár eredménye."},
 {id:"anpr10", l:"Rendszámfelismerő: autók a kikötő felé éjjel", req:["or_volvo|laci_furgon|helyszin10"], dur:180, fit:{kata:.9, bence:.9, bodnar:.8, halasz:.6}, ev:{$v:{a:"keleti_auto",b:null}}, ok:{$v:{a:"A rendszámfelismerő: dr. Keleti Mária szürke Volvója 23:31-kor a kikötő felé, 00:49-kor visszafelé.",b:"A rendszámfelismerő a Soroksári úton csak taxikat és kamionokat rögzített. Egy fehér Transit a Hordó rendszámával 23:14-kor és 00:52-kor a Kvassay hídnál."}}}
],

leads:[
 {need:["lajos_halal"], not:["helyszin10"], x:"A Révész a Déli kikötőben. Holnap reggel szétvágják. Ma kell megnézni."},
 {need:["helyszin10"], not:["apa_igazsag"], x:"Lajos a kormányállásban élt. Nézd meg, mit hagyott ott."},
 {need:["apa_igazsag"], not:["eredeti_foto"], x:"Lajos azt mondta Gergőnek, a harang mindent hall. Nézd meg a hajóharangot."},
 {need:["body"], not:["doc:boncolas10"], x:"Keleti megboncolhatja Lajost (Stáb)."},
 {need:["doc:boncolas10"], not:["doc:simon10"], x:"Szép Viktória második véleményt kért. Dr. Simon az Intézetben van."},
 {need:["korom"], not:["doc:dns10"], x:"Bőr Lajos körmei alatt. Halász lefuttathatja a DNS-t (Stáb)."},
 {need:["lajos_halal"], not:["szabo_akta"], x:"Az 1994-es Szabó-akta. Kérd ki az archívumból (Stáb), vagy kérdezd Szép Viktóriát."},
 {need:["helyszin10"], not:["met_kolos"], x:"A kikötőnek éjjeliőre van. Este hattól ott van."},
 {need:["dns_ferfi"], not:["laci_pohar"], x:"A DNS férfié, és nincs adatbázisban. Valaki, akit soha nem gyanúsítottak. Kell egy minta."},
 {need:["laci_pohar"], not:["doc:dns_pohar"], x:"A pohárról Halász DNS-t vehet (Stáb)."},
 {need:["fenyvesi_ott"], not:["fenyvesi_alibi"], x:"Mikor ment el Fenyvesi a kikötőből? Az éjjeliőr kapunaplót vezet."},
 {need:["met_laci"], not:["met_pista"], x:"Pista bácsi harminc éve ül a Hordóban. Tudja, hogy vasárnap mi volt."},
 {need:["apa_igazsag"], not:["apa_nyilvanos","apa_titok"], x:"Apád sírja a Farkasréti temetőben. Valamit el kell döntened."}
],

timed:[
 {id:"hirlap1", at:720, front:{h:"Holtan találták a révészt",s:"A bontásra ítélt komp utolsó lakója a gépházban fulladt meg",b:"Vámos Lajos, a Déli kikötő egykori révésze két hónapja tiltakozott a Révész-komp szétbontása ellen, és a hajón élt. Hétfő reggel a bontóbrigád holtan találta. Fia, Vámos Gergő tavaly ősszel halt meg a Kozma utcai börtönben."}},
 {id:"bontas", at:1440+360, f:"reves_bontva", modal:"<h2>Kedd, 06:00 – Déli kikötő</h2><p>A daru felemeli a Révész orrát. A lángvágó szikrái narancssárgák a reggeli ködben. Délre a kormányállás a földön fekszik, estére a gépház is. A rozsdás lemezeket konténerbe hányják. A hajóharangot valaki elviszi, senki nem tudja, ki.</p><p>A Révész nincs többé.</p>"},
 {id:"anna_utolso", at:2*1440+1200, req:["anna_vege"], modal:function(S){
   if(S.alc>40){S.f.anna_vege_vegleg=1;return"<h2>Szerda, 20:00 – üzenet, Pécs</h2><p>Detti: <i>„Láttam a hírekben a kompot. Gondolok rád.”</i> Felhívod. Kicsöng. A hangod rekedt, a szavaid lassúak. Ő leteszi, szó nélkül. Másnap egy üzenet: <i>„Vigyázz magadra.”</i> Ez az utolsó.</p>"}
   S.f.anna_utolso=1;S.f.anna_egyutt=1;return"<h2>Szerda, 20:00 – telefon, Pécs</h2><p>Detti hív. „Láttam a hírekben a kompot. Apádé volt, ugye? Az az ügy.” Igen. Hosszú csend. „Szombaton feljövök. Nem tudom, miért. De feljövök.” Szombaton ott áll az ajtódban, futócipőben, egy hátizsákkal. Nem kérdezi, bejöhet-e.</p>"}},
 {id:"lili_jon", at:1440+1080, req:["lili_elenged"], x:"<b>SMS, Lili:</b> Megérkeztem. A kulcs még megvan. Főzök valamit. Ne nevess."},
 {id:"vege", at:5*1440+1200, pat:-500, modal:"<h2>Szombat, 20:00</h2><p>Szép Viktória lezárja a Vámos-ügyet: baleset, a lépcsőn megcsúszott. Az 1994-es aktát visszateszi a fiókba. „Vége, Mátrai” — mondja. Te nem mondasz semmit.</p>"}
],

actions:{
 pohar:{loc:"hordo", l:"Elteszed Laci poharát, amiből ivott", req:["korom"], mins:10, f:"laci_pohar", once:1, x:"Laci a pult végén iszik egy kólát, egyedül, a szokásos poharából. Amikor kimegy a raktárba, a poharat egy zsebkendőbe csavarod, és a kabátzsebedbe teszed. Harminc év. Egy pohár. Laci visszajön, és nem kérdezi, hova lett. Lehet, hogy tudja."},
 apa_nyilvanos:{loc:"temeto10", l:"Apád neve bekerül a jelentésbe – mindent leírsz", req:["apa_igazsag","!apa_titok"], mins:60, f:"apa_nyilvanos", once:1, x:"Leülsz a padra apád sírja mellett, és a telefonodba diktálod a jelentés utolsó bekezdését. Mátrai Gyula r. százados 1994-ben tudatosan lezárt egy gyilkossági ügyet, hogy egy barátját védje. Felolvasod magadnak. Aztán elküldöd Szép Viktóriának. A mécses még ég. Valaki más gyújtotta, nem te."},
 apa_titok:{loc:"temeto10", l:"Apád nevét kihagyod – a levelet elégeted", req:["apa_igazsag","!apa_nyilvanos"], mins:60, f:"apa_titok", once:1, x:"Leülsz a padra apád sírja mellett. A levelet, amit Lajosnak írt, elégeted, egy gyufával, a mécses lángjánál. A hamut a szél elviszi a nyírfák felé. A jelentésbe azt írod: az 1994-es nyomozás hiányosságai a korabeli körülményekkel magyarázhatók. Ez nem hazugság. Csak nem is igazság."}
},

locEvents:[
 {id:"drunk", loc:"kapitanysag", when:(S,h,A)=>A.inWin(h,[8,19])&&S.alc>55, pat:-15, html:"<h2>Megszagolnak</h2><p>Szép Viktória megáll melletted. „Ne most, Mátrai. Kérem. Ne most.”</p>"}
],

dyn:{
  hintBence10(S){
    if(!S.f.helyszin10)return'„A kompot holnap szétvágják, főnök. Ma kell kimenni. Holnap már nem lesz mit nézni.”';
    if(S.ev.korom&&!S.docs.dns10)return'„Bőr a körmök alatt? Halásznak add. Ma.”';
    return'„Akárki az, főnök… én itt leszek holnap is.”';
  },
  hintKata10(S){
    if(!S.ev.szabo_akta)return'„A régi akta. Ha az ötforintos ugyanaz, az akta megmondja, ki nézett félre 1994-ben.”';
    if(S.docs.boncolas10&&!S.docs.simon10)return'„Szép kért második véleményt? Ne hagyd ki. Ha a kettő különbözik, az többet mond, mint bármelyik.”';
    return'„Mindenki hazudik, aki ott volt kilencvennégyben, Dénes. A kérdés az, ki hazudik most is.”';
  },
  hintHalasz10(S){
    if(S.ev.korom&&!S.docs.dns10)return'„Hozd a körömmintát. Lefuttatom a bűnügyi és a kizárási adatbázison is. Az utóbbit nem szoktuk. Most fogjuk.”';
    if(S.ev.dns_ferfi&&!S.f.laci_pohar)return'„Férfi, nincs adatbázisban. Valaki, akit sosem vettünk mintát. Hozz valamit, amiből ivott.” Nem mondja ki, kire gondol. Te sem.';
    return'„Harminc éve iszom a Hordóban, és tizenöt éve dolgozom Keleti mellett.” Leteszi a pipettát. „Bármi lesz, Dénes, én leírom, amit a gép mond. Csak ezt tudom megígérni.”';
  },
  feherJozan10(S){
    if(!S.f.aa1){S.f.aa1=S.t;return'„Ma este gyűlés a Szent Vince alagsorában. Menjen el. Ma különösen.”'}
    if((S.drinks||0)===0)return'„Az apja titka, egy barát a vízben. És maga józan.” Fehér doktornő hosszan néz. „Két évvel ezelőtt ezt a hetet nem élte volna túl szárazon. Ezt mondja el magának, ha a pultra néz.”';
    return'„Ittál.” Nem kérdés. „Most, amikor a legtisztábban kell látnia.” Nem dühös. Szomorú.';
  },
  laciC10(S){
    const A=['Laci kólát tesz eléd. Aztán leül a túloldalra, a vendégek oldalára, harminc év alatt először. Nem mond semmit. Te sem.',
      '„Apád ott ült” — mondja Laci, a sarokasztalra nézve. „Minden novemberben. Egy fröccs. Egyszer megkérdeztem, kire iszik. Azt mondta: egy révészre.”',
      'Laci elővesz a pult alól egy régi fényképet: a Hordó megnyitása, 1995. Apád, Keleti, Laci, Halász fiatalon, Bodnár bajusz nélkül. Mind nevetnek. Laci sokáig nézi. Aztán visszateszi.'];
    S.f.lc10=(S.f.lc10||0)+1;return A[(S.f.lc10-1)%A.length];
  },
  sanyiC10(S){
    if((S.drinks||0)>0)return'Ülsz a körben. Sanyi a végén melléd ül. „Ittál.” Bólintasz. „A legnehezebb héten.” Megint bólintasz. „Akkor holnap reggel kezdjük újra, testvér. Egy nap. Az is nap.”';
    return'Ülsz a körben. Ma te beszélsz. Elmondod apádat, a kompot, a barátot, akit védett. Nem mondasz neveket. A teremben csend van, a sekrestye ajtaja nyitva, mögötte senki. A végén Sanyi megszorítja a vállad. „Az apád harmincnégy évig hordta ezt, egyedül, egy fröccs mellett. Te nem vagy egyedül.” Körülnézel. Tényleg nem.';
  },
  liliC10(S){
    const A=['Lili Bachot játszik a digitális zongorán, fejhallgató nélkül. Azt mondja, ezen a héten szabad hangosan. Az ária ismétlődik, újra és újra, mindig ugyanaz és mindig más.',
      '„K vagy L.” Lili a cetlit nézi a hűtőn. „Tudod már?” Lassan bólintasz. Nem kérdezi, melyik. „Szeretted?” Igen. „Akkor ne siess. De ne is hagyd.”',
      'Lili főz, borzalmasan. Tészta, ketchup, sajt. Megeszed. „Nagyapa is ezt főzte nekem, amikor te nem voltál otthon” — mondja. Nem tudtad. Most már tudod.'];
    S.f.lo10=(S.f.lo10||0)+1;S.crave=Math.max(0,S.crave-12);return A[(S.f.lo10-1)%A.length];
  }
},
rejectExtra:{},
bonus:function(S){const b=[];if((S.drinks||0)===0)b.push([5,'Józan maradtál az utolsó héten']);if(S.f.lili_temeto)b.push([5,'Lilivel mentél apád sírjához']);if(S.f.apa_nyilvanos)b.push([5,'Leírtad az igazat']);return b},
solveGoal:{$v:{a:["keleti_ott","keleti_kez","keleti_titok"],b:["laci_ott","laci_kez","laci_titok"]}},
solveSkip:["ad"],

end:{
 win:function(S){
  let t="";
  if(S.variant==="a"){
   t+="<p>Keleti Mária nem kér ügyvédet. A kihallgatóban ül, ugyanazon a széken, ahol harmincnyolc évig a te gyanúsítottjaidról mondta el, hogyan haltak meg. Leveszi a szemüvegét.</p>";
   t+="<p>„Kilencvennégy. Az anyám Bécsben feküdt, rákkal, és a műtét pénzbe került. Szabó azt mondta, van egy munka. Éjjel orvosi táskában hordtam a pénzt a vevőktől a kompra, mert egy orvosi táskát senki nem nyit ki.” Hallgat. „November kilencedikén Szabó többet akart. Azt mondta, feljelent mindenkit, engem is. A korlátnál álltunk. Meglöktem. Beleesett. Utánanyúltam.” A kezét nézi. „Nem kihúzni nyúltam utána, Dénes.”</p>";
   t+="<p>„Gyula hajnalban ott volt. Mindent látott. Azt mondta: Mária, írd, hogy baleset. A többit én elintézem.” Felnéz. „Az ötforintost a nagyanyám tanította. A révésznek fizetni kell. Fizettem. Harmincnégy évig, minden nap.” Hosszú csend. „Lajos vasárnap felhívott. Azt mondta, elmondja neked a nevemet. Gergőért. Kimentem, hogy megkérjem, ne. Nem kérte meg senki, hogy ne.” A hangja először csuklik el. „Apád szeretett engem. Én is őt. Ennyi volt az egész, Dénes. Ennyi.”</p>";
   t+="<p>Életfogytiglan, két emberölésért. Az ítélethirdetés után megkérdezi, beszélhet-e veled. Azt mondja: „Lilinek mondd meg, hogy a Goldberg-ária tényleg a kedvence volt. Ezt nem hazudtam.”</p>";
  }else{
   t+="<p>Laci nem jön be a kapitányságra. Te mész ki hozzá. A Hordó zárva, a redőny félig lehúzva. Laci a sarokasztalnál ül, apád helyén, két pohárral. Az egyikben fröccs, a másik üres.</p>";
   t+="<p>„Kilencvennégy. A büfé. Szabó ott ivott, apáddal. Éjfél után lement a kompra, és én utána. Pénzt akart, többet, mindenkitől. Azt mondta, ha nem, feljelent, és a büfét is bezáratja, mert én vettem át a kannákat.” Megforgatja az üres poharat. „Verekedtünk a korlátnál. Beleesett. Lenyomtam. Sokáig.” Rád néz. „Egy ötforintost tettem a szájába. Az anyám mondta mindig, hogy a révésznek fizetni kell. Nem tudom, miért. Valamit tenni kellett.”</p>";
   t+="<p>„Gyula reggel jött. Leült ide, ahol most te. Azt mondta: Laci, te nem láttál semmit, és én sem. Felhívta Máriát.” Elhallgat. „Harmincnégy évig minden novemberben itt ült, és ivott egy fröccsöt Szabóért. Én töltöttem neki. Minden évben.” Leteszi a poharat. „Lajos vasárnap felhívott. Azt mondta, holnap elmondja neked. Kimentem, hogy beszéljek vele. Megint a korlát. Megint a víz.” A kezét nézi, a nagy, széles kezét, ami harminc éve tölt neked. „Rólad akartam, hogy ne tudd meg, Dénes. Nem rólam. Rólad, meg apádról.”</p>";
   t+="<p>Életfogytiglan, két emberölésért. A Hordót eladják. Az új tulajdonos kiveszi a sarokasztalt. Pista bácsi többé nem jár oda.</p>";
  }
  return t+c10Epilog(S);
 },
 wrong:{$v:{
  a:{laci:"<p>Lacit letartóztatják. A kikötői büfé, a matrózévek, a kettős bakcsomó. A tárgyaláson tizenkét törzsvendég esküszik, hogy háromig töltött. Felmentik. A Hordót bezárja. Soha többé nem beszél veled.</p><p>Keleti Mária nyugdíjba megy. Egy évvel később meghal, Csepelen, a kertjében, egy nyírfa alatt. A végrendeletében apád fényképét neked hagyja.</p>",
     fenyvesi:"<p>Fenyvesi Ádám ellen vádat emelnek. A kapunapló, a telefonja, a felesége: felmentik. A Révész helyén parkoló lesz.</p><p>Keleti Mária nyugdíjba megy. Az 1994-es aktát senki nem nyitja ki többé.</p>"},
  b:{keleti:"<p>Keleti Máriát letartóztatják. Az 1994-es aláírás, a vízi halálesetek, a csepeli lakás. A tárgyaláson harminc szegedi kolléga tanúskodik. Felmentik. Nem jön vissza dolgozni.</p><p>Laci tovább viszi a Hordót. Minden novemberben egy fröccsöt tesz a sarokasztalra. Te többé nem mész be.</p>",
     fenyvesi:"<p>Fenyvesi Ádám ellen vádat emelnek. A kapunapló, a telefonja, a felesége: felmentik. A Révész helyén parkoló lesz.</p><p>Laci tovább viszi a Hordót. A sarokasztalt senkinek nem adja oda.</p>"}
 }},
 fired:"<p>Az ügyet lezárják: baleset. Az 1994-es aktát visszateszik a fiókba.</p><p>Te kimész a Déli kikötőbe, ahol a Révész állt. Most egy üres móló, egy konténer rozsdás lemezzel, és a víz, ami mindent elvisz, ha hagyják. Egy ötforintost dobsz bele. Nem tudod, kinek fizetsz.</p>"
}
};

function c10Epilog(S){
  const f=S.f;let t="<hr>";
  // apa
  if(f.apa_nyilvanos)t+="<p>A jelentés utolsó bekezdése bekerül a lapokba. „Egy legendás nyomozó eltussolt gyilkossága.” A kapitányságon két hétig mindenki másképp néz rád. Aztán egy reggel az asztalodon egy cetli, Bodnár ügyetlen kézírásával, vagy talán Halászéval: <i>„Az apád jó rendőr volt. Te jobb vagy.”</i></p>";
  else if(f.apa_titok)t+="<p>Apád neve nem kerül a jelentésbe. Szép Viktória elolvassa, és sokáig néz rád. „Ez a maga döntése, Mátrai.” Aláírja. Néha éjjel arra ébredsz, hogy a mécses lángját látod, és a levelet, ahogy összegömbölyödik. Nem bánod. Nem is vagy biztos benne.</p>";
  else t+="<p>Apád levele a bizonyítékok közé kerül, egy dobozba, amit senki nem nyit ki. Nem döntöttél. Talán ez is döntés.</p>";
  // Lili
  if(f.lili_temeto)t+="<p>Lili Bachot játszik a temetőben, egy hordozható billentyűzeten, amit a hóna alatt hozott. Az ária a nyírfák között. Egy idős házaspár megáll a szomszéd sírnál, és végighallgatja. A végén Lili nem néz rád. Csak beleteszi a kezét a kabátzsebedbe, ahogy hétévesen.</p>";
  if(f.lili_marad)t+="<p>Lili szeptemberben elköltözik egy albérletbe, a Zeneakadémia mellé, két lánnyal. A kulcsot nálad hagyja. „Ha nem bírsz egyedül, hívj” — mondja. Fordítva gondoltad. Ő is tudja.</p>";
  else if(f.lili_elenged)t+="<p>Lili visszamegy Bécsbe. A pályaudvaron azt mondja: „Karácsonyra jövök. Nálad.” Nem kérdés. Te sem kérdezed.</p>";
  // Detti
  if(f.anna_utolso)t+="<p>Detti nem megy vissza Pécsre. Azt mondja, egy hétvégére jött. Szeptemberben a Szent János sürgősségi osztályvezetője lesz. A te lakásodból jár be, futva, reggel hatkor.</p>";
  else if(f.anna_vege||f.anna_vege_vegleg)t+="<p>Detti Pécsen marad. Egyszer, nyáron, a Kéményseprő előtt állsz, aztán bemész, egyedül, és rendelsz egy gulyáslevest, egy ásványvizet. Jó. Nem ugyanaz. De jó.</p>";
  else if(f.anna_vissza||f.anna_pecs_nem||f.anna_egyutt)t+="<p>Detti a konyhaasztalnál ül, a lábát maga alá húzva, és egy szakcikket olvas. Nyáron elmentek a Balatonra, egy hétre. Az első este azt mondja, a kávéd még mindig borzalmas. Igaza van.</p>";
  // józanság
  if(f.aa_beszed&&(S.drinks||0)===0)t+="<p>Sanyi a gyűlés után megkérdezi, hány napja. Megmondod. „És holnap?” Holnap is. „Jó válasz, testvér.” Az ajtó nyitva, a sekrestyében senki.</p>";
  else if((S.drinks||0)>0)t+="<p>A Hordó helyén, vagy egy másik kocsmában, egy pohár előtt ülsz, és nézed. Aztán felállsz, és elmész a gyűlésre. Késve. Sanyi helyet tart neked.</p>";
  // stáb
  if(f.bence_halott)t+="<p>Bence sárga cetlije még mindig ott van az asztalán. Szép Viktória egyszer leveszi, aztán visszaragasztja. Senki nem ül a helyére.</p>";
  else t+="<p>Bence szeptemberben bekerül a tiszti akadémiára. Az ajtót becsukja maga után. Már nem fél tőle.</p>";
  if(f.bodnar_vad)t+="<p>Bodnár Ferinek levelet írsz a Kozma utcába. Az első óta. Nem válaszol. Egy hónap múlva igen, egyetlen mondattal: „Köszönöm, hogy megírtad.”</p>";
  if(f.kata_vad)t+="<p>Rácz Kata egy biztonsági cégnél dolgozik. Egyszer összefuttok a Nagykörúton. Megkérdezi, megérte-e. Nem tudod. Ő sem.</p>";
  // vége
  t+="<p>Szép Viktória egy reggel behív. „Csoportvezetői hely van a gyilkossági osztályon, Mátrai. Két éve nem adtam volna magának. Most igen.” Kinézel az ablakon. A Dunán egy uszály megy lefelé, lassan, a túlpart felé.</p>";
  t+="<p class=\"fin\">Vége.</p>";
  return t;
}
