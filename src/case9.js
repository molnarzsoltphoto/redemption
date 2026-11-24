// ===== 9. ÜGY: GYÓNÁS =====
CASES.c9 = {
id:"c9", num:"9. ügy ·", title:"Gyónás", tagline:"Március. Egy józsefvárosi templom sekrestyéjében holtan találják a plébánost. A gyertyatartón egy ujjlenyomat, amit ismersz.",
date:[2028,2,13], par:4, variants:["a","b"],
order:["sanyi_g","gerencser","szekeres"],
start:{t:400, loc:"otthon"},
onStart:function(S,A){S.f.body=1;S.alc=S.f.aa_beszed?0:15;S.fat=25;S.crave=S.f.aa_beszed?35:30;A.addEv("benedek_halal")},
intro:function(S,A){
  let t="<p>Hétfő, március 13., 06:40. Csörög a telefon. Nem Szép Viktória. Sanyi.</p>";
  t+="<p>„Testvér.” A hangja olyan, mint akit fejbe vertek. „Benedek atya meghalt. A sekrestyében. Bözsi néni találta meg reggel, a sekrestyés.” Csend. „Tegnap este veszekedtem vele. Mindenki hallotta. És az én kulcsom van a templomhoz.” Még hosszabb csend. „Nem én voltam, Dénes. De te tudod, mit fognak gondolni.”</p>";
  t+="<p>Hét perc múlva Szép Viktória is hív. „Szent Vince-templom, Józsefváros. A plébános, Kovács Benedek. Fejsérülés.” Megáll. „Mátrai, az NA-gyűlés abban a templomban van. Ha bármi köze van hozzá, most mondja.”</p>";
  if(S.f.sanyi_szponzor)t+="<p>Sanyi a szponzorod. Hajnali háromkor is hívhatod. Most ő hívott.</p>";
  if(S.f.sanyi_benedek)t+="<p>Januárban Sanyi azt mondta: Benedek atya pénzt kért tőle. Azt mondta, tudja, mit csinált kilencvenben. Te nem kérdeztél tovább.</p>";
  return t;
},

suspects:{
 sanyi_g:{name:"Sanyi (Pálfi Sándor)", short:"Sanyi", reveal:["met_sanyi_t","met_sanyi_f","met_sanyi_h"]},
 gerencser:{name:"Gerencsér Tibor", short:"Gerencsér", reveal:["met_gerencser"]},
 szekeres:{name:"Szekeres Dávid", short:"Szekeres", reveal:["met_szekeres"]}
},
solution:{$v:{a:{main:"gerencser"},b:{main:"szekeres"}}},
bossLine:"„Egy halott pap, egy józan alkoholista a gyertyatartón az ujjával, és maga, Mátrai, aki ugyanabba a pincébe jár. Ezt nagyon tisztán kell csinálni.”",

ev:{
 benedek_halal:{n:"Halál a sekrestyében", d:"Kovács Benedek, 61, a Szent Vince-plébánia plébánosa. Hétfő reggel 06:15-kor a sekrestyés találta meg a sekrestye padlóján, fejsérüléssel. A falba épített széf nyitva."},
 fej_seres:{n:"Egy ütés", d:"Egyetlen, nagy erejű ütés a bal halántékra, egy nehéz, kerek fémtárggyal. A halál ideje vasárnap 22:20 és 22:50 között."},
 gyertyatarto:{n:"A gyertyatartó", d:"A sekrestye padlóján egy négykilós sárgaréz gyertyatartó, a talpán vér és haj. A szár közepén friss, kesztyűs kéz elmosódott nyoma, alatta régebbi, tiszta ujjlenyomatok."},
 szef_nyitva:{n:"A nyitott széf", d:"A sekrestye széfjét nem feszítették fel: kóddal nyitották. Benne a perselypénz érintetlenül. A kódot csak a plébános és a gondnok tudta."},
 sanyi_ujj:{n:"Sanyi ujja a gyertyatartón", d:"A gyertyatartó szárán a tiszta, régebbi ujjlenyomatok Pálfi Sándortól, Sanyitól származnak.", sup:[["sanyi_g","M"]]},
 sanyi_veszekedes:{n:"„Pokolba a pénzeddel”", d:"Vasárnap 21:00-kor, a gyűlés után Sanyi és Benedek atya a sekrestye ajtajában veszekedtek. A sekrestyés hallotta: „Pokolba a pénzeddel, atya! Inkább börtön!”", sup:[["sanyi_g","A"]]},
 sanyi_kulcs:{n:"Sanyi kulcsa", d:"Sanyinak kulcsa van a templom oldalbejáratához: ő pakolja ki és el a székeket a gyűlésekhez. Vasárnap ő zárt utoljára, 21:15-kor, legalábbis ezt mondja.", sup:[["sanyi_g","A"]]},
 sanyi_zsarolas:{n:"Ötszázezer", d:"Benedek atya ősszel ötszázezer forintot kért Sanyitól, az egyház javára. Azt mondta, tudja, mit csinált Sanyi 1990-ben, amikor ivott. Sanyi nem fizetett.", sup:[["sanyi_g","I"]]},
 sanyi_alibi:{n:"A 4-es villamos", d:"A BKV kamerája szerint Sanyi 21:38-kor felszállt a 4-es villamosra a Népszínház utcánál, 21:52-kor leszállt a Boráros térnél. A szomszédja szerint 22:00-tól éjfélig nála ült, sakkoztak.", clears:"sanyi_g"},
 gerencser_kod:{n:"A gondnok kódja", d:"Gerencsér Tibor, az egyházközség gondnoka és pénztárosa, tudta a széf kódját. Kulcsa van a sekrestyéhez is.", sup:[["gerencser","A"]]},
 gerencser_sikkasztas:{n:"Hiányzó nyolcmillió", d:"A templomfelújítási alapból két év alatt 8,2 millió forint hiányzik. A kifizetéseket Gerencsér utalványozta, olyan cégeknek, amelyek soha nem dolgoztak a templomon.", sup:[["gerencser","I"]]},
 gerencser_gyertya:{n:"A javított gyertyatartó", d:"Gerencsér szombaton hozta vissza a gyertyatartót a rézművestől, ahol javíttatta. Tudta, hol áll, mennyit nyom.", sup:[["gerencser","M"]]},
 szekeres_zsarolt:{n:"2019, Kőbányai út", d:"Szekeres Dávid volt rendőr 2019-ben részegen elütött egy biciklis fiút a Kőbányai úton, és elhajtott. Soha nem derült ki. Egy NA-gyűlésen elmondta. Benedek atya hallotta a sekrestye ajtaja mögül, és azóta havi százezret kért tőle.", sup:[["szekeres","I"]]},
 szekeres_gyules:{n:"Szekeres a gyűlésen", d:"Szekeres vasárnap este is ott volt a gyűlésen. 20:40-kor ment el, utolsó előttiként, Sanyi előtt.", sup:[["szekeres","A"]]},
 szekeres_rendor:{n:"A volt rendőr", d:"Szekeres tizenkét évig a VIII. kerületi rendőrkapitányságon dolgozott. Tudja, hogyan néz ki egy betörés. És hogyan kell elrendezni egy helyszínt, hogy úgy nézzen ki.", sup:[["szekeres","M"]]},
 fuzet:{n:"A fekete füzet", d:"Benedek atya fekete füzete: nevek, dátumok, összegek. Mindenki, akit a sekrestye ajtaja mögül kihallgatott, és akitől pénzt kért. A füzet harmincöt évet fog át."},
 gyula_gyonas:{n:"„M. Gy., 1995”", d:"A fekete füzet legrégebbi lapján: „M. Gy., 1995 tavasz. Gyónás, a Csepeli Szent Imrében. »Lezártam valamit, amit nem kellett volna. Egy barátot védtem.« Nem fizet. Azt mondja, inkább börtön.” Apád."},
 // A változat
 kassza_lap:{var:"a", n:"Az elégetett lap", d:"Gerencsér cserépkályhájának hamujában egy pénztárkönyv-lap maradéka: a templomfelújítási alap 2026-os oldala, a plébános kézjegyével. Valaki kitépte a széfben tartott könyvből, és elégette.", sup:[["gerencser","I"]]},
 auto_ger:{var:"a", n:"A szürke Skoda", d:"A templommal szemközti patika kamerája szerint Gerencsér szürke Skodája vasárnap 22:08-kor beállt a templom mellé, 22:52-kor elhajtott.", sup:[["gerencser","A"]]},
 vegytisztito:{var:"a", n:"Hétfő reggel, 7:30", d:"Gerencsér hétfő reggel fél nyolckor beadott egy szürke kabátot a sarki vegytisztítóba. A tisztító szerint a jobb mandzsettán rozsdabarna folt volt.", sup:[["gerencser","M"]]},
 kabat_ver:{var:"a", n:"Vér a mandzsettán", d:"A kabát jobb mandzsettájának varrásában, ahova a tisztítószer nem jutott be, emberi vér: Kovács Benedeké.", sup:[["gerencser","M"]]},
 szekeres_muszak:{var:"a", n:"Éjszakás műszak", d:"Szekeres a Bánya Pláza biztonsági szolgálatánál dolgozik. Vasárnap 21:30-tól hétfő 06:00-ig szolgálatban volt: a beléptetőkártyája és a pláza kamerái szerint egyszer sem hagyta el az épületet.", clears:"szekeres"},
 ger_titok:{var:"a", n:"A kitépett oldal", d:"Nyolcmillió hiányzik. A plébános tudta, és a pénztárkönyvben ott volt a kézjegye. Gerencsér kitépte a lapot és elégette.", sup:[["gerencser","I"]], ded:true},
 ger_ott:{var:"a", n:"22:08 és 22:52 között", d:"Gerencsér Skodája 22:08-kor beállt a templom mellé. A plébános 22:20 és 22:50 között halt meg. 22:52-kor a Skoda elhajtott.", sup:[["gerencser","A"]], ded:true},
 ger_fegyver:{var:"a", n:"A gyertyatartó és a kabát", d:"A gyertyatartót Gerencsér hozta vissza szombaton. Hétfő reggel egy kabátot vitt a tisztítóba, a mandzsettáján a plébános vérével.", sup:[["gerencser","M"]], ded:true},
 // B változat
 fuzet_hianyzik:{var:"b", n:"Hiányzik a füzet", d:"A sekrestyés szerint a plébános egy fekete füzetet tartott a széfben, mindig ott. A nyitott széfből a füzet hiányzik. A pénz megvan."},
 szekeres_telefon:{var:"b", n:"A józsefvárosi átjátszó", d:"Szekeres telefonja vasárnap 22:14 és 22:58 között a templom melletti átjátszón volt. Azt mondta, otthon aludt Kőbányán.", sup:[["szekeres","A"]]},
 auto_luminol:{var:"b", n:"Luminol a kormányon", d:"Szekeres autójának kormányán és a vezetőoldali ajtókilincsen luminollal kimutatható, letörölt vérnyom: Kovács Benedek DNS-e.", sup:[["szekeres","M"]]},
 fuzet_szekeres:{var:"b", n:"A pótkerék alatt", d:"Szekeres autójában, a pótkerék alatt, nejlonzacskóban: Benedek atya fekete füzete. Szekeres lapja kitépve, a csonkja még ott.", sup:[["szekeres","I"]]},
 ger_alibi:{var:"b", n:"A felesége születésnapja", d:"Gerencsér vasárnap 21:30-tól 23:40-ig a feleségével és a lányaival vacsorázott a Rézkakas étteremben, a felesége hatvanadik születésnapján. Számla, pincér, tizenkét fénykép.", clears:"gerencser"},
 szek_inditek:{var:"b", n:"A kitépett lap", d:"Négy év, havi százezer, és egy halott biciklis fiú. A füzet Szekeres autójában volt, az ő lapja kitépve.", sup:[["szekeres","I"]], ded:true},
 szek_ott:{var:"b", n:"Nem otthon aludt", d:"Szekeres azt mondta, Kőbányán aludt. A telefonja 22:14 és 22:58 között a templom mellett volt. A plébános 22:20 és 22:50 között halt meg.", sup:[["szekeres","A"]], ded:true},
 szek_fegyver:{var:"b", n:"Letörölt vér", d:"Kesztyűs kéz a gyertyatartón, letörölt vér a kormányon. Egy volt rendőr tudja, mit kell letörölni. Csak azt nem, hogy a luminol mindent megtalál.", sup:[["szekeres","M"]], ded:true},
 // közös
 zsarolo:{n:"A zsaroló pap", d:"Benedek atya harmincöt évig hallgatta ki a sekrestye ajtaja mögül azokat, akik a gyűléseken a legnagyobb bűneiket mondták el. És pénzt kért értük.", ded:true}
},

ded:[
 {a:"fuzet", b:"sanyi_zsarolas", g:"zsarolo", t:"Egy füzet nevekkel és összegekkel. Sanyitól ötszázezret kért. Mástól mennyit? A sekrestye ajtaja a gyűlésterembe nyílik, és Benedek atya mindig ott állt mögötte."},
 {var:"b", a:"fuzet_hianyzik", b:"sanyi_zsarolas", g:"zsarolo", t:"A füzet hiányzik, a pénz megvan. Aki elvitte, nem pénzt akart. Azt akarta, hogy a neve ne legyen leírva sehol."},
 {var:"a", a:"kassza_lap", b:"gerencser_sikkasztas", g:"ger_titok", t:"Nyolcmillió, és egy kitépett lap a plébános kézjegyével a kályha hamujában. A gondnok tudta, hogy a plébános tudja."},
 {var:"a", a:"auto_ger", b:"fej_seres", g:"ger_ott", t:"22:08 és 22:52. A plébános 22:20 és 22:50 között halt meg. A Skoda végig ott állt."},
 {var:"a", a:"kabat_ver", b:"gerencser_gyertya", g:"ger_fegyver", t:"Ő hozta vissza a gyertyatartót. Hétfő reggel fél nyolckor egy kabátot vitt a tisztítóba, vérrel a mandzsettán."},
 {var:"a", a:"vegytisztito", b:"gyertyatarto", g:"ger_fegyver", t:"Egy rozsdabarna folt a mandzsettán, hétfő reggel fél nyolckor a tisztítóban. A gyertyatartón kesztyűs kéz. A kabát ujja hosszabb volt a kesztyűnél."},
 {var:"b", a:"fuzet_szekeres", b:"szekeres_zsarolt", g:"szek_inditek", t:"A füzet a pótkerék alatt, Szekeres lapja kitépve. A biciklis fiú neve rajta volt."},
 {var:"b", a:"szekeres_telefon", b:"fej_seres", g:"szek_ott", t:"Otthon aludt, mondta. A telefonja a templom mellett volt, pontosan akkor."},
 {var:"b", a:"auto_luminol", b:"gyertyatarto", g:"szek_fegyver", t:"Kesztyűs kéz a gyertyatartón, letörölt vér a kormányon. Egy rendőr mindent letöröl, amit lát."}
],

docs:{
 boncolas9:{t:"Boncolási jegyzőkönyv – Kovács Benedek", b:"IGAZSÁGÜGYI ORVOSTANI INTÉZET\nBoncolt: dr. Keleti Mária\n\nNév: Kovács Benedek, 61 é., római katolikus plébános.\n[[fej_seres|Halál oka: koponyatörés, agyi vérzés. Egyetlen ütés a bal halántékra, nehéz, kerek keresztmetszetű fémtárggyal, jobbkezes elkövetőtől, szemből. A halál ideje: vasárnap 22:20 és 22:50 között.]]\nVédekezési sérülés nincs. Ismerte, aki megütötte, és nem számított rá.\nGyomortartalom: vörösbor, kevés.\n\n— K. M., kézzel: „Szemből, Dénes. A plébános ránézett. Nem félt tőle.”"},
 ujjnyomat9:{t:"Daktiloszkópiai jelentés – gyertyatartó", b:"BŰNÜGYI TECHNIKAI LABOR\nVizsgálta: Halász Tamás\n\nTárgy: sárgaréz gyertyatartó, 4,1 kg, a sekrestye padlójáról.\nA talpon vér és hajszálak: Kovács B.\n[[gyertyatarto|A szár közepén friss, elmosódott, textilkesztyűs fogás nyoma, ujjlenyomat nélkül.]]\n[[sanyi_ujj|A szár alsó részén régebbi, tiszta, por alatti ujjlenyomatok: Pálfi Sándor (2001-es nyilvántartásból).]]\n\n— H. T.: „Sanyi ujja régi. A por alatt van, nem felette. Aki megütötte vele, kesztyűt viselt.”"},
 penzugy:{t:"Egyházközségi pénzügyek – templomfelújítási alap", b:"SZENT VINCE PLÉBÁNIA – banki kivonatok, 2026–2028\nElemezte: a stáb\n\n[[gerencser_sikkasztas|2026. 03. – 2027. 12.: tizennégy kifizetés három kivitelező cégnek (Kő-Restaurátor Bt., Vinceház Kft., Toronyóra Kft.), összesen 8 200 000 Ft. A cégek a cégnyilvántartás szerint 2025-ben alakultak, székhelyük egy kőbányai irodaház, ügyvezetőjük Gerencsér Tibor sógora. A templomon felújítás nem történt.]]\nUtalványozó: Gerencsér T., pénztáros.\n\nMegjegyzés: a plébános februárban kérte a bankot, hogy küldjenek neki külön kivonatot. A bank elküldte."},
 fuzet_doc:{t:"Benedek atya fekete füzete", b:{$v:{
  a:"Fekete, viaszosvászon füzet, kockás lapok, gondos, apró kézírás. Harmincöt év.\n\n[[fuzet|Nevek, kezdőbetűk, dátumok, összegek. „P. S., 1990-es baleset, ittasan. 500e. Nem fizet.” „Sz. D., 2019, Kőbányai út, a fiú. Havi 100e. Fizet.” „G. T., felújítási alap, 8,2 M. Hallgatásért havi 200e? Megbeszélni vasárnap.”]]\n[[szekeres_zsarolt|Sz. D. lapján egy újságkivágás: „Cserbenhagyásos gázolás a Kőbányai úton, meghalt a 14 éves kerékpáros.” 2019. október.]]\n\nA legelső lapon, régi tintával:\n[[gyula_gyonas|„M. Gy., 1995 tavasz. Gyónás, a Csepeli Szent Imrében. »Lezártam valamit, amit nem kellett volna. Egy barátot védtem.« Nem fizet. Azt mondja, inkább börtön.”]]",
  b:"Fekete, viaszosvászon füzet, kockás lapok, gondos, apró kézírás. Harmincöt év. A pótkerék alól, nejlonzacskóból.\n\n[[fuzet|Nevek, kezdőbetűk, dátumok, összegek. „P. S., 1990-es baleset, ittasan. 500e. Nem fizet.” „G. T., felújítási alap, 8,2 M. Hallgatásért havi 200e? Megbeszélni vasárnap.”]]\n[[fuzet_szekeres|A 41. és a 42. lap között egy kitépett lap csonkja. Az előző lap alján, áthúzva, még olvasható: „Sz. D., 2019 –”]]\n\nA legelső lapon, régi tintával:\n[[gyula_gyonas|„M. Gy., 1995 tavasz. Gyónás, a Csepeli Szent Imrében. »Lezártam valamit, amit nem kellett volna. Egy barátot védtem.« Nem fizet. Azt mondja, inkább börtön.”]]"}}},
 kabat:{t:"Laborjelentés – szürke kabát (vegytisztító)", b:{$v:{b:"Nincs vizsgálható minta.",a:"BŰNÜGYI TECHNIKAI LABOR\nVizsgálta: Halász Tamás\n\nTárgy: férfi gyapjúkabát, szürke, a Népszínház utcai vegytisztítóból, tisztítás előtt lefoglalva.\n[[kabat_ver|A jobb mandzsetta belső varrásában, 3 mm-es sávban emberi vér. DNS: Kovács Benedek.]]\n\n— H. T.: „A tisztító szerencsére hétfőn nem dolgozik délig. Még egy nap, és nincs semmi.”"}}},
 luminol:{t:"Laborjelentés – Szekeres D. gépjárműve", b:{$v:{a:"BŰNÜGYI TECHNIKAI LABOR\nVizsgálta: Halász Tamás\n\nTárgy: Opel Astra, fehér, Szekeres D. tulajdona.\nLuminolos vizsgálat: a kormányon, a váltón, a kilincseken és a csomagtartóban vérnyom nem mutatható ki.\n\n— H. T.: „Tiszta. Egy biztonsági őr autója, aki szereti a rendet.”",b:"BŰNÜGYI TECHNIKAI LABOR\nVizsgálta: Halász Tamás\n\nTárgy: Opel Astra, fehér, Szekeres D. tulajdona.\n[[auto_luminol|A kormánykeréken, a váltógombon és a vezetőoldali belső kilincsen luminollal kimutatható, gondosan letörölt vérnyom. DNS: Kovács Benedek.]]\n\n— H. T.: „Szépen letörölte. Rendőr volt, tudja, hogyan. Csak azt felejtette el, hogy én is az vagyok.”"}}},
 cella9:{t:"Cellainformáció – Szekeres D.", b:{$v:{a:"MOBILSZOLGÁLTATÓ – átjátszó-adatok, 03. 12. 20:00 – 03. 13. 06:00\n\n20:00–20:44 BP-VIII-Népszínház\n21:20–06:00 BP-X-Kőbánya, Bánya Pláza",b:"MOBILSZOLGÁLTATÓ – átjátszó-adatok, 03. 12. 20:00 – 03. 13. 02:00\n\n20:00–20:44 BP-VIII-Népszínház (a templom mellett)\n20:58–22:05 BP-X-Kőbánya-Újhegy\n[[szekeres_telefon|22:14–22:58 BP-VIII-Népszínház (a templom mellett)]]\n23:20– BP-X-Kőbánya-Újhegy"}}}
},

locs:{
 templom:{la:1, m:"Szent Vince", n:"Szent Vince-templom, Józsefváros", x:720, y:400, side:"P", crime:1, d:"Neogótikus templom egy józsefvárosi bérházsor közepén. Bent hideg, tömjén- és viaszszag. A sekrestye ajtaja előtt rendőrségi szalag, mögötte a gyűlésterem összecsukható székei, ahogy tegnap este Sanyi elpakolta őket.", hs:[
   {id:"sekrestye", l:"A sekrestye", t:"A padlón krétakör. Egy gyertyatartó a sarokban, a talpán vér. A falon egy feszület, alatta egy szék, amire Benedek atya a reverendáját akasztotta. Halász már itt van, kesztyűben.", f:"helyszin9"},
   {id:"szef", l:"A széf", req:["helyszin9"], t:{$v:{a:"A falba épített széf nyitva, sértetlen. Bent a perselypénz, borítékokban, érintetlenül. Egy pénztárkönyv, amiből valaki kitépett egy lapot, frissen, a fűzésnél még ott a csonk. És egy fekete, viaszosvászon füzet.",b:"A falba épített széf nyitva, sértetlen. Bent a perselypénz, borítékokban, érintetlenül. Egy pénztárkönyv. A felső polc üres, a porban egy füzet téglalap alakú nyoma."}}, ev:{$v:{a:["szef_nyitva"],b:["szef_nyitva","fuzet_hianyzik"]}}, doc:{$v:{a:"fuzet_doc",b:null}}, f:"szef_latva"},
   {id:"ajto", l:"A sekrestye ajtaja a gyűlésterembe", t:"Egy régi, vastag tölgyajtó, de alul két ujjnyi rés. Ha a sekrestyében állsz, mindent hallasz, ami a gyűlésen elhangzik. Minden szót. A küszöb előtt a padlón egy szék, kopott, mintha valaki évekig ült volna rajta.", f:"ajto_hallgatozas"},
   {id:"terem", l:"A gyűlésterem", t:"Összecsukható székek, egymásra rakva, ahogy Sanyi mindig. A falon a tábla: „Csak a mai nap.” Az asztalon egy jelenléti ív: tizenegy keresztnév. Sanyi, Dávid, Erika, Pisti… Dávid neve mellett egy időpont: 20:40.", ev:"szekeres_gyules"}
 ]},
 otthon:{m:"Lakás", n:"Lakás a Körúton", x:612, y:338, side:"P", d:"Harmadik emelet, udvari szoba. Március, az udvaron még piszkos hó. A hűtőn egy cetli egy zongora alakú mágnes alatt.", hs:[]},
 kapitanysag:{m:"Kapitányság", n:"Főkapitányság", x:705, y:196, side:"P", d:"A fogdán ma egy józan alkoholista ül, akit ismersz. A folyosón mindenki tudja, és senki nem mondja.", hs:[]},
 hordo:{m:"Hordó", n:"Hordó", x:648, y:462, side:"P", open:[15,3], d:"A Hordóban hétfőn csend van. Laci a pultnál ül, nem mögötte, és egy régi fényképet néz, amit elrak, ahogy belépsz.", hs:[]},
 intezet:{m:"Intézet", n:"Orvostani Intézet", x:792, y:474, side:"P", open:[7,19], d:"Keleti doktornő ma nem gyújt rá. Azt mondja, leszokott. Harmadszor idén.", hs:[]},
 sanyihaz:{la:1, m:"Sanyi", n:"Sanyi lakása, Ferencváros", x:660, y:560, side:"P", vis:"sanyi_kezes|sanyi_szabad", d:"Egyszobás lakás a Boráros tér mögött, a falon egy hajó fényképe, egy sakktábla, egy cserép muskátli. Huszonhárom évnyi józanság egy szobában.", hs:[]},
 gerencserhaz:{la:1, m:"Gerencsér", n:"Gerencsér-lakás, Népszínház utca", x:820, y:250, side:"P", vis:"met_gerencser|gerencser_kod", d:"Polgári lakás a templom közelében, cserépkályha, feszület, a falon a családi fényképek: három lány, egy feleség, egy unoka. Minden tiszta. Túl tiszta.", hs:[
   {id:"kalyha_a", var:"a", l:"A cserépkályha", req:["met_gerencser"], t:"A cserépkályha még langyos, pedig március van, és a radiátor működik. A hamuban egy félig elégett papír sarka: vonalas, pénztárkönyv-lap, rajta egy kézjegy: B. K. plébános.", ev:"kassza_lap"},
   {id:"kalyha_b", var:"b", l:"A cserépkályha", req:["met_gerencser"], t:"A cserépkályha hideg, a hamu tegnapelőtti. Rajta egy születésnapi kártya: „Boldog hatvanat, Marika! A lányaid.”"},
   {id:"fogas", l:"Az előszoba fogasa", req:["met_gerencser"], t:{$v:{a:"Az előszobában két kabát: egy fekete, egy barna. A harmadik akasztó üres. A fogas alatt egy vegytisztítói szelvény a földön, mintha kiesett volna valakinek a zsebéből: hétfő, 07:32, „1 db férfikabát, szürke, folt”.",b:"Az előszobában három kabát: fekete, barna, szürke. A szürkén a mandzsetta kopott, de tiszta. A zsebben egy étteremi számla: Rézkakas, vasárnap, 23:38, hat fő, egy torta."}}, ev:{$v:{a:["vegytisztito"],b:[]}}, f:{$v:{a:"kabat_kell",b:"ger_szamla"}}}
 ]},
 szekereshaz:{la:1, m:"Szekeres", n:"Szekeres lakása, Kőbánya", x:930, y:530, side:"P", vis:"met_szekeres|szekeres_zsarolt", d:"Lakótelepi garzon, katonás rendben. A polcon rendőrségi emléktárgyak, egy bekeretezett dicséret 2015-ből. Az ablak alatt a parkolóban egy fehér Opel Astra.", hs:[
   {id:"fiok", l:"Az íróasztal fiókja", req:["met_szekeres"], t:"A fiókban rendőrségi papírok, egy NA-érme, három év. Alattuk egy összehajtott újságkivágás, 2019. október: „Cserbenhagyásos gázolás a Kőbányai úton, meghalt a 14 éves kerékpáros.” Mellé tűzve egy karosszérialakatos számlája, a baleset utáni napról: jobb első sárvédő, fényszóró. És egy cetli, egy pap kézírásával: „Október 1. Ne felejtse.”", ev:"szekeres_zsarolt"},
   {id:"auto", l:"A fehér Opel", req:["met_szekeres"], t:{$v:{a:"A fehér Opel tiszta, belül is. Túl tiszta egy biztonsági őr autójához? Nem. Egy volt rendőréhez éppen ilyen. A csomagtartóban egy pótkerék, egy elsősegélydoboz, egy pláza biztonsági egyenruha, vasalva.",b:"A fehér Opel belül frissen kitakarítva, citromos törlőkendő szaga. A csomagtartóban a pótkerék alatt egy nejlonzacskó, benne egy fekete, viaszosvászon füzet."}}, ev:{$v:{a:[],b:["fuzet_szekeres","fuzet"]}}, doc:{$v:{a:null,b:"fuzet_doc"}}, f:"auto_latva"}
 ]},
 plaza:{la:1, m:"Bánya Pláza", n:"Bánya Pláza, biztonsági központ", x:960, y:600, side:"P", vis:"szekeres_plaza", open:[8,22], d:"Bevásárlóközpont Kőbányán, a biztonsági központban húsz monitor és egy kávéfőző, ami soha nem áll le.", hs:[]},
 vegytisztito:{la:1, m:"Vegytisztító", n:"Népszínház utcai vegytisztító", x:880, y:140, side:"P", vis:"kabat_kell", open:[12,19], d:"Egy apró üzlet, gőz, vegyszerszag, egy idős örmény úr a pult mögött, aki harminc éve tisztítja a kerület bűneit.", hs:[]},
 aa:{la:1, m:"NA-gyűlés", n:"NA-gyűlés, templomalagsor", x:760, y:296, side:"P", vis:"aa1", open:[18,21], d:"A gyűlést ma este máshol tartják, egy református gyülekezeti teremben. Ugyanazok a székek, ugyanaz a kávé, egy ember hiányzik.", hs:[]}
},

people:{
 sanyi_t:{n:"Sanyi", r:"a templom előtt", loc:"templom", h:[7,16], gone:"sanyi_orizet", suspect:1, bio:"Pálfi Sándor, 68 éves, egykori hajós, huszonhárom éve józan. A templom lépcsőjén ül, a kezét a térdén összekulcsolva. Nem bújt el. Azt mondja, nem azért, mert nincs mitől félnie. Azért, mert elege van.", topics:[
  {id:"tegnap", l:"Mi történt tegnap este?", t:"„A gyűlés kilenckor ért véget. Elpakoltam a székeket.” Felnéz rád. „Benedek a sekrestye ajtajában állt. Megint kérte a pénzt. Azt mondta, tudja, mit csináltam kilencvenben.” Hallgat. „Azt mondtam neki: pokolba a pénzeddel, atya. Inkább börtön. Negyed tízkor bezártam, és hazamentem.”", ev:["sanyi_veszekedes","sanyi_kulcs"]},
  {id:"1990", l:"Mit csinált 1990-ben?", sober:1, t:"Sokáig nem szól. „Részegen vezettem egy uszályt. Nekimentem egy horgászcsónaknak a Ráckevei-ágon. Egy ember eltört két bordát. Nem jelentettem.” Rád néz. „Elmondtam egy gyűlésen, tizenöt éve. Hogy megbocsássak magamnak. Benedek az ajtó mögött állt.”", ev:"sanyi_zsarolas"},
  {id:"gyertya", l:"A gyertyatartóról", t:"„Minden vasárnap odébb teszem, hogy elférjenek a székek. Huszonhárom éve.” Megnézi a kezét. „Persze, hogy rajta van az ujjam. Rajta van a templom minden székén is.”"}
 ]},
 sanyi_f:{n:"Sanyi", r:"őrizetben", loc:"kapitanysag", h:[0,24], vis:"sanyi_orizet", gone:"sanyi_kezes|sanyi_szabad", suspect:1, bio:"A fogdán ül, egy priccsen, a cipőfűzője nélkül. Nem iszik huszonhárom éve, és most egy cellában ül olyanokkal, akik tegnap ittak. Amikor meglát, nem áll fel.", topics:[
  {id:"ul", l:"Leülsz mellé", rep:1, dyn:"sanyiFogda"},
  {id:"sakk", l:"Hol volt tíz után?", t:"„Otthon. A szomszédommal sakkoztunk, Feri bácsival, éjfélig. Négyest villamossal mentem haza, a Boráros térig.” Megdörzsöli az arcát. „Ezt elmondtam a kihallgatáson is. Senki nem írta le.”", f:"sanyi_alibi_hint"}
 ]},
 sanyi_h:{n:"Sanyi", r:"otthon", loc:"sanyihaz", h:[8,22], vis:"sanyi_kezes|sanyi_szabad", suspect:1, bio:"Otthon, a sakktábla mellett. A muskátlit locsolja, amikor belépsz. Nem néz fel.", topics:[
  {id:"ul", l:"Leülsz vele", rep:1, dyn:"sanyiOtthon"}
 ]},
 bozsi:{n:"Bözsi néni", r:"sekrestyés", loc:"templom", h:[7,19], bio:"78 éves, negyven éve a Szent Vince sekrestyése. Fekete kendő, rózsafüzér, egy zsebkendő, amit nem enged el. Ő találta meg a plébánost.", topics:[
  {id:"reggel", l:"Hogyan találta meg?", t:"„Hatkor jöttem, mint mindig. A sekrestye nyitva volt, a villany égett.” Keresztet vet. „Ott feküdt. A széf nyitva. Mindig zárva tartotta, a kódot csak ő meg Tibor úr tudta, a gondnok.”", ev:"gerencser_kod", f:"met_bozsi_reggel"},
  {id:"veszekedes", l:"Tegnap este?", t:"„Kilenckor hallottam, hogy Sanyi úr kiabál. »Pokolba a pénzeddel, atya!« Ilyet templomban…” Megtörli a szemét. „Sanyi úr jó ember. De nagyon kiabált.”", ev:"sanyi_veszekedes"},
  {id:"fuzet", l:"Mi volt a széfben?", t:"„Pénz, a perselyből. A pénztárkönyv. Meg az atya fekete füzete.” Lehalkítja a hangját. „Abba írt mindig, este, a sekrestyében, a gyűlés alatt. Az ajtónál ült, egy széken. Azt mondta, imádkozik értük.” Elhallgat. „Én hittem neki.”", f:"fuzet_tud"},
  {id:"gyertya", l:"A gyertyatartóról", t:"„Tibor úr hozta vissza szombaton a rézművestől. Eltört a talpa, megjavíttatta.” Megrázza a fejét. „Szép munka volt. Most…”", ev:"gerencser_gyertya"}
 ]},
 gerencser:{n:"Gerencsér Tibor", r:"egyházközségi gondnok, pénztáros", loc:"gerencserhaz", h:[8,20], suspect:1, bio:"64 éves nyugdíjas könyvelő, a templom gondnoka húsz éve. Kardigán, nyakkendő, egy rózsafüzér a zsebében, amit a kihallgatás alatt végig morzsol. Három lány, egy unoka, egy feleség, aki most töltötte a hatvanat.", topics:[
  {id:"atya", l:"Benedek atyáról", t:"„Húsz évig szolgáltam mellette.” Morzsolja a rózsafüzért. „Szigorú ember volt. Pontos. Mindent leírt.” Rád néz. „Szörnyű. Szörnyű. Ki tesz ilyet egy pappal?”"},
  {id:"ejjel", l:"Hol volt vasárnap este?", t:{$v:{a:"„Itthon. A feleségemmel.” Nem néz fel. „Tévét néztünk. Tízkor lefeküdtünk.” A felesége a konyhaajtóban áll, és nem szól semmit. Egy pillanatra összenéznek.",b:"„A Rézkakasban. A feleségem hatvanadik születésnapja.” Elmosolyodik, először. „A lányaim szervezték. Tizenkét fényképet csináltak, mind homályos.” Megmutatja a telefonján. 22:35, egy torta, hat ember, ő középen, papírcsákóban."}}, ev:{$v:{a:[],b:["ger_alibi"]}}},
  {id:"penz", l:"A felújítási alapról", req:["gerencser_sikkasztas"], sober:1, t:{$v:{a:"Megáll a keze a rózsafüzéren. „Ez… félreértés. A cégek dolgoztak, csak a számlázás…” Elhallgat. A konyhából a felesége: „Tibor.” Csak ennyit. Gerencsér leteszi a rózsafüzért az asztalra, és nem veszi fel többet.",b:"Elsápad. „Igen.” Hosszú csend. „A lányom, a legkisebb. Uzsorásnak tartozott. Nyolcmillió. Kölcsönvettem a templomtól. Vissza akartam adni.” Rád néz. „Az atya februárban rájött. Havi kétszázezret kért, hogy hallgasson. Vasárnap meg akartuk beszélni. Nem mentem el. A feleségem születésnapja volt.” Elsírja magát."}}}
 ]},
 szekeres:{n:"Szekeres Dávid", r:"biztonsági őr, volt rendőr", loc:"szekereshaz", h:[9,20], suspect:1, bio:"41 éves, volt rendőr, most biztonsági őr egy plázában. Rövid haj, egyenes hát, pontos mozdulatok. Négy éve józan. Négy és fél éve gázolt el egy tizennégy éves fiút a Kőbányai úton.", topics:[
  {id:"gyules", l:"A vasárnapi gyűlésről", t:"„Ott voltam. Fél kilenc előtt eljöttem, munkába kellett mennem.” Rád néz, rendőrszemmel. „Ismerem magát, főhadnagy. Mátrai. Hallottam magát beszélni a gyűlésen.” Rövid szünet. „Szép volt.”"},
  {id:"ejjel", l:"Hol volt tíz és tizenegy között?", t:{$v:{a:"„Munkában. Bánya Pláza, éjszakás. Fél tíztől reggel hatig.” Előveszi a beléptetőkártyáját. „Ellenőrizze. Én is ellenőrizném.”",b:"„Itthon. Aludtam. Hétfőn nem voltam beosztva.” Egyenesen néz a szemedbe, túl egyenesen. „Egyedül élek, főhadnagy. Nincs tanúm. Ez nem bűn.”"}}, f:{$v:{a:"szekeres_plaza",b:"szekeres_otthon"}}},
  {id:"benedek", l:"Benedek atyáról", req:["fuzet|fuzet_tud|ajto_hallgatozas"], sober:1, t:{$v:{a:"Sokáig hallgat. „Tudja, ugye.” Nem kérdés. „Négy éve fizetek neki. Havi százezret. Mert elmondtam valamit a gyűlésen, ami a gyűlésre tartozott.” Összeszorítja az állkapcsát. „Kőbányai út, 2019. Egy fiú, biciklivel.” Rád néz. „Nem én öltem meg az atyát, főhadnagy. De nem sajnálom. Ezt is írja le.”",b:"Az arca nem változik. „Az atya? Rendes ember volt. Imádkozott értünk.” A kezét az asztalon tartja, mozdulatlanul. Egy volt rendőr tudja, mit csinál egy ideges kéz. Az övé nem csinál semmit. Pont ez a baj."}}, ev:{$v:{a:["szekeres_zsarolt"],b:[]}}},
  {id:"rendor", l:"A rendőrségről", t:"„Tizenkét év, a nyolcadik kerületben. Betörések, rablások.” Megvonja a vállát. „2020-ban kiléptem. Személyes okokból.” A személyes ok egy halott fiú, és ő is tudja, hogy te tudod.", ev:"szekeres_rendor"}
 ]},
 plazafonok:{n:"Tóth Imre", r:"biztonsági vezető", loc:"plaza", h:[8,22], bio:"55 éves, volt katona, húsz monitor előtt ül, és mindegyiket egyszerre nézi.", topics:[
  {id:"szekeres", l:"Szekeres vasárnap éjjel", t:{$v:{a:"„Dávid? Fél tíztől hatig itt volt. Beléptető, kamera, óránkénti körök.” Felhúzza a felvételt: 22:30, Szekeres a parkolóházban, a második szinten, egy elseje autó mellett. „Ő a legjobb emberem. Soha nem késik.”",b:"„Dávid? Vasárnap nem volt beosztva. Hétfőn este jön.” Felnéz. „Valami baj van vele?”"}}, ev:{$v:{a:["szekeres_muszak"],b:[]}}}
 ]},
 tisztito:{n:"Mardiroszján úr", r:"vegytisztító", loc:"vegytisztito", h:[12,19], bio:"72 éves örmény úr, ötven éve tisztít. Mindenre emlékszik, ami foltos volt.", topics:[
  {id:"kabat", l:"A szürke kabátról", t:"„Szürke gyapjú, férfi, jó minőség. A jobb mandzsettán folt.” Felemeli az ujját. „Rozsdabarna. Én tudom, milyen a vér, uram. Ötven éve.” Előhozza a kabátot hátulról, nejlonban. „Még nem tisztítottam. Hétfőn délig nem dolgozom.”", f:"kabat_megvan"}
 ]},
 // stáb
 szep:{n:"Dr. Szép Viktória", r:"osztályvezető", loc:"kapitanysag", h:[8,20], bio:"44 éves. Ma reggel aláírta Sanyi őrizetbe vételét, és nem néz a szemedbe.", topics:[
  {id:"elig", l:"Eligazítás", t:"„Ujjlenyomat a fegyveren, veszekedés fél órával előtte, kulcs a templomhoz. Pálfi Sándort délután őrizetbe veszem.” Rád néz. „Ha tévedek, bizonyítsa be. Gyorsan.”"},
  {id:"bevall", l:"Bevallod, hogy Sanyi a szponzorod", req:["sanyi_szponzor","!sanyi_bevall"], t:"Szép Viktória sokáig hallgat. „Köszönöm, hogy elmondta.” Leteszi a tollat. „Nem veszem el magától az ügyet. De minden jelentést én írok alá, és ha egyetlen bizonyítékot is elfelejt Pálfi ellen, az nem magának lesz rossz, hanem neki.”", pat:10, f:"sanyi_bevall"},
  {id:"kezes", l:"Kezességet vállalsz Sanyiért", req:["sanyi_orizet","!sanyi_alibi"], excl:"nemkezes", sober:1, t:"„A saját nevével?” Szép Viktória feláll. „Mátrai, ha Pálfi megszökik, vagy kiderül, hogy ő volt, maga is megy.” Hosszú csend. Aztán aláírja. „Szabadlábon védekezhet. Mondja meg neki, hogy ne hagyja el a várost.”", pat:-15, f:"sanyi_kezes"},
  {id:"szabad", l:"Sanyi szabadon engedése", req:["sanyi_alibi","sanyi_orizet","!sanyi_kezes"], t:"Szép elolvassa a BKV-kamera képét és a szomszéd vallomását. „A villamos 21:52-kor a Boráros téren. Tíz órától éjfélig sakk.” Aláírja. „Engedjék el.” Rád néz. „Kérjen tőle bocsánatot a nevemben is.”", f:"sanyi_szabad"},
  {id:"statusz", l:"Jelentés az ügyről", rep:1, dyn:"vargaStatus"}
 ]},
 bence:{n:"Tóth Bence", r:"nyomozó", loc:"kapitanysag", h:[7,21], staff:1, gone:"bence_halott", bio:"29 éves. Tavasszal visszakapta a régi asztalát. Az ajtót már becsukja.", topics:[{id:"gond", l:"Mit gondolsz?", rep:1, dyn:"hintBence9"}]},
 kata:{n:"Rácz Kata", r:"nyomozó", loc:"kapitanysag", h:[7,21], staff:1, gone:"kata_vad", bio:"36 éves. Katolikus iskolába járt. Azt mondja, a papoktól tanulta, hogyan kell hallgatni úgy, hogy a másik beszéljen.", topics:[{id:"gond", l:"Mit gondolsz?", rep:1, dyn:"hintKata9"}]},
 bodnar:{n:"Bodnár Feri", r:"törzszászlós", loc:"kapitanysag", h:[7,21], staff:1, gone:"bodnar_vad", bio:"58 éves. A nyolcadik kerületben kezdett, és mindenkit ismer, aki onnan jött.", topics:[{id:"gond", l:"Mit gondolsz?", rep:1, t:"„Szekeres Dávid? Ismerem. Jó rendőr volt. 2020-ban hirtelen kilépett.” Megvakarja a bajuszát. „Azt mondták, ivott. Mások azt, hogy valami ennél rosszabb.”"}]},
 halasz:{n:"Halász Tamás", r:"nyomszakértő", loc:"kapitanysag", h:[8,22], staff:1, bio:"41 éves. Sanyit ismeri a Hordóból. Ma reggel kétszer ellenőrizte az ujjnyomatokat, és harmadszor is.", topics:[{id:"gond", l:"Mi van a laborban?", rep:1, dyn:"hintHalasz9"}]},
 feher:{n:"Dr. Fehér Judit", r:"pszichológus", loc:"kapitanysag", h:[9,17], staff:1, bio:"52 éves. Tudja, hogy Sanyi a szponzorod. Nem mondja el senkinek.", topics:[
  {id:"profil", l:"Ki öl meg egy zsaroló papot?", t:"„Akit zsarolt.” Leveszi a szemüvegét. „De nem mindenki, akit zsarolt. Az, akinek a legtöbbje van, amit elveszíthet, és a legkevesebb ideje.” Rád néz. „És nézze meg, mi tűnt el a helyszínről. A pénz ott maradt. Valaki nem pénzért jött.”"},
  {id:"jozan", l:"A józanságról", rep:1, dyn:"feherJozan9"}
 ]},
 keleti:{n:"Dr. Keleti Mária", r:"igazságügyi orvosszakértő", loc:"intezet", h:[7,19], staff:1, bio:"61 éves. Apád barátja. Ma nem gyújt rá. Azt mondja, leszokott.", topics:[
  {id:"elozetes", l:"Előzetes vélemény", t:"„Egy ütés, szemből. Jobbkezes.” Megtörli a szemüvegét. „A pap ránézett, Dénes. Ismerte. Nem futott el.”"},
  {id:"gyula", l:"Megmutatod neki apád bejegyzését", req:["gyula_gyonas"], sober:1, t:"Keleti sokáig olvassa. „Egy barátot védtem.” Leteszi. A keze nem remeg. Az arca igen. „Apád sok barátot védett, Dénes. Engem is, egyszer-kétszer.” Feláll, az ablakhoz megy. „Ne kérdezz most. Májusban. Ígérem.”", f:"keleti_majus"}
 ]},
 laci:{n:"Laci", r:"kocsmáros", loc:"hordo", h:[15,3], bio:"A Hordó kocsmárosa. Sanyit harminc éve ismeri. Huszonhárom éve nem tölt neki.", topics:[
  {id:"sanyi", l:"Sanyiról", t:"„Sanyi?” Laci leteszi a poharat. „Kilencvenben itt itta el a fizetését minden pénteken. Kilencvenötben bejött, kért egy kólát, és azóta csak azt.” Rád néz. „Ha Sanyi ölt, akkor én is. Mondd meg ezt a főnöködnek.”"},
  {id:"gyula", l:"Megmutatod neki apád bejegyzését", req:["gyula_gyonas"], sober:1, t:"Laci elolvassa, kétszer. „Egy barátot védtem.” Leteszi a papírt a pultra, és nem veszi fel. „Apád mindenkit védett, Dénes. Ez volt a baja.” Elfordul, a poharakat rendezgeti, amik rendben vannak. „Ne most. Majd egyszer.”", f:"laci_majd"},
  {id:"regi", l:"Csak ültök", rep:1, dyn:"laciC9"}
 ]},
 lili:{n:"Mátrai Lili", r:"a lányod", loc:"otthon", h:[18,23], vis:"lili_marad", bio:"19 éves, a Zeneakadémia hallgatója. Tavaszi koncertre készül, és Sanyiért aggódik, akit kétszer látott, és akit szeret.", topics:[{id:"este", l:"Leülsz mellé", rep:1, dyn:"liliC9"}]},
 anna:{n:"Detti", r:"nálad", loc:"otthon", h:[20,24], vis:"anna_egyutt|anna_vissza", gone:"anna_vege", bio:"Dr. Kerekes Bernadett. Esténként a konyhaasztalnál, a lábát maga alá húzva.", topics:[
  {id:"ul", l:"Csak ültök", rep:1, eff:{crave:-15}, t:"Detti teát főz. „Sanyiért aggódsz.” Igen. „Akkor menj be hozzá holnap is. Az őrizetben az a legrosszabb, hogy senki nem jön.” Megfogja a kezed. „Tudom. Apám kétszer ült.” Ezt eddig nem mondta el."}
 ]}
},

tasks:[
 {id:"boncolas9", l:"Kovács Benedek boncolása", req:["body"], dur:300, fit:{keleti:1}, doc:"boncolas9", ok:"Keleti végzett a plébánossal."},
 {id:"ujjnyomat9", l:"A gyertyatartó daktiloszkópiája", req:["helyszin9"], dur:180, fit:{halasz:.95, keleti:.6}, doc:"ujjnyomat9", ok:"Megvan a gyertyatartó.", fail:"A minta elkenődött. Halász újrakezdi."},
 {id:"penzugy", l:"Az egyházközség pénzügyeinek átnézése", req:["gerencser_kod"], dur:240, fit:{kata:.92, bodnar:.85, bence:.8, halasz:.55}, doc:"penzugy", ok:"Átnéztük a templom pénzügyeit. Hiányzik valami."},
 {id:"bkv", l:"Sanyi útja: BKV-kamerák, szomszéd", req:["sanyi_alibi_hint|met_sanyi_t"], dur:240, fit:{bence:.9, kata:.88, bodnar:.8, feher:.5}, ev:"sanyi_alibi", ok:"Megvan Sanyi útja hazafelé. A villamos, a szomszéd, a sakk."},
 {id:"kabat", l:"A szürke kabát vizsgálata", req:["kabat_megvan"], dur:240, fit:{halasz:.95, keleti:.75}, doc:"kabat", ok:"Megvan a kabát eredménye."},
 {id:"luminol", l:"Szekeres autójának átvizsgálása (luminol)", req:["auto_latva"], dur:240, fit:{halasz:.95, keleti:.6}, doc:"luminol", ok:"Halász végzett az Opellel."},
 {id:"cella9", l:"Szekeres telefonjának cellainformációi", req:["szekeres_otthon"], dur:180, fit:{kata:.9, bence:.88, bodnar:.7, halasz:.6}, doc:"cella9", ok:"Megjöttek Szekeres cellaadatai."},
 {id:"cella9a", l:"Gerencsér autója: a szemközti patika kamerája", req:["met_gerencser"], dur:180, fit:{bence:.9, kata:.88, bodnar:.75, halasz:.6}, ev:{$v:{a:"auto_ger",b:null}}, ok:{$v:{a:"A patika kamerája rögzítette Gerencsér Skodáját: 22:08-kor beállt a templom mellé, 22:52-kor elhajtott.",b:"A patika kamerája egész este rögzített. Gerencsér Skodája nincs rajta."}}}
],

leads:[
 {need:["benedek_halal"], not:["helyszin9"], x:"A Szent Vince-templom sekrestyéjében kezdj. Halász már ott van."},
 {need:["body"], not:["doc:boncolas9"], x:"Keleti megboncolhatja a plébánost (Stáb)."},
 {need:["helyszin9"], not:["doc:ujjnyomat9"], x:"Kinek az ujja van a gyertyatartón, és mikor került oda? Halász megnézi (Stáb)."},
 {need:["helyszin9"], not:["szef_latva"], x:"A széf nyitva. Nézd meg, mi van benne, és mi nincs."},
 {need:["sanyi_veszekedes"], not:["sanyi_alibi"], x:"Hol volt Sanyi tíz után? A BKV kamerái és a szomszédja tudják (Stáb)."},
 {need:["gerencser_kod"], not:["doc:penzugy"], x:"A gondnok kezelte a templom pénzét. Nézd át a pénzügyeket (Stáb)."},
 {need:["gerencser_kod"], not:["met_gerencser"], x:"Gerencsér Tibor a templom közelében lakik, a Népszínház utcában."},
 {need:["fuzet_tud"], not:["fuzet","fuzet_hianyzik"], x:"A plébános fekete füzetét a széfben tartotta. Megvan még?"},
 {need:["szekeres_gyules"], not:["met_szekeres"], x:"Dávid 20:40-kor ment el a gyűlésről. Szekeres Dávid, volt rendőr, Kőbányán lakik."},
 {need:["szekeres_otthon"], not:["doc:cella9"], x:"Szekeres azt mondja, otthon aludt. A telefonja tudja, hol volt (Stáb)."},
 {need:["met_szekeres"], not:["auto_latva"], x:"Nézd meg Szekeres autóját a ház előtt."},
 {need:["auto_latva"], not:["doc:luminol"], x:"Egy frissen kitakarított autó. Halász luminollal mindent megtalál (Stáb)."},
 {need:["kabat_kell"], not:["kabat_megvan"], x:"Egy vegytisztítói szelvény, hétfő reggel 07:32. A tisztító a Népszínház utcában van, délben nyit."},
 {need:["kabat_megvan"], not:["doc:kabat"], x:"A kabátot Halász megvizsgálhatja (Stáb)."},
 {need:["met_gerencser"], not:["auto_ger","ger_alibi"], x:"Hol volt Gerencsér autója este? A templommal szemközti patikának kamerája van (Stáb)."}
],

timed:[
 {id:"orizet", at:960, unless:"sanyi_alibi", f:"sanyi_orizet", modal:"<h2>Hétfő, 16:00</h2><p>Két egyenruhás bekíséri Sanyit a kapitányságra. A folyosón elmegy melletted. Nem néz rád. A fogda ajtaja előtt megáll, és leveszi a cipőfűzőjét, mielőtt kérnék. Tudja, hogy kérik.</p>"},
 {id:"hirlap1", at:1440+420, front:{h:"Megölték a józsefvárosi plébánost",s:"Őrizetben egy alkoholistákat segítő önkéntes",b:"Kovács Benedek plébánost vasárnap este a sekrestyében agyonverték. A rendőrség őrizetbe vett egy 68 éves férfit, aki a templomban tartott névtelen alkoholista-gyűlések szervezője. Lapunk értesülése szerint a nyomozást vezető rendőrtiszt maga is a gyűlések résztvevője."}},
 {id:"lebukas", at:2*1440+600, req:["sanyi_szponzor"], unless:"sanyi_bevall", pat:-30, modal:"<h2>Szerda, 10:00</h2><p>Szép Viktória becsukja maga mögött az ajtót. Az asztalodra tesz egy újságot. „A nyomozó maga is résztvevő.” Leül. „Pálfi Sándor a szponzora, Mátrai. Ezt egy újságírótól kellett megtudnom.” Hosszú csend. „Nem veszem el az ügyet. Még. De ezt nem felejtem el.”</p>"},
 {id:"lili_hiv", at:2*1440+1260, req:["lili_elenged"], modal:function(S){
   if(S.alc>40){S.f.lili_hivas_rossz=1;return"<h2>Szerda, 21:00 – telefon, Bécs</h2><p>Lili hív. Nem veszed fel. Reggel egy üzenet: <i>„Láttam Sanyit a hírekben. Ő nem.”</i></p>"}
   S.f.lili_hivas9=1;return"<h2>Szerda, 21:00 – telefon, Bécs</h2><p>Lili: „Láttam a hírekben Sanyit. Őrizetben.” Hallgat. „Ő nem, apa. Ő a sakkot is bocsánatkéréssel nyeri meg.” Fél órát beszéltek. A végén: „Májusban hazajövök. Nagyapa születésnapjára. Kimegyünk a temetőbe?” Igen.</p>"}},
 {id:"vege", at:5*1440+1200, pat:-500, modal:"<h2>Szombat, 20:00</h2><p>Az ügyet átveszi egy másik csoport. Pálfi Sándor ellen vádat emelnek. Szép Viktória nem mondja, hogy pihenjen. Nem mond semmit.</p>"}
],

actions:{},

locEvents:[
 {id:"drunk", loc:"kapitanysag", when:(S,h,A)=>A.inWin(h,[8,19])&&S.alc>55, pat:-15, html:"<h2>Megszagolnak</h2><p>Szép Viktória megáll melletted. „Pont most, Mátrai?” Továbbmegy.</p>"}
],

dyn:{
  sanyiFogda(S){
    const A=['Leülsz mellé a priccsre. Sanyi sokáig hallgat. „Huszonhárom év, testvér. És most itt ülök egy fiúval, aki tegnap este még ivott, és a szagát érzem.” Megdörzsöli az arcát. „Nem kívánom. Csak érzem.”',
      'Sanyi a falat nézi. „Tudod, mit mondtam Benedeknek? Inkább börtön. Hát tessék.” Halkan nevet. „Az Isten szereti a viccet.”',
      '„Menj, csináld a dolgod” — mondja Sanyi. „Ne itt ülj. Ha itt ülsz, nem dolgozol. Ha nem dolgozol, én itt ülök.” Megfogja a karod. „De holnap gyere vissza.”'];
    S.f.sf9=(S.f.sf9||0)+1;S.crave=Math.max(0,S.crave-15);return A[(S.f.sf9-1)%A.length];
  },
  sanyiOtthon(S){
    if((S.drinks||0)>0)return'Sanyi rád néz, aztán a muskátlira. „Ittál.” Nem kérdés. „Miattam?” Nem válaszolsz. „Akkor ne miattam igyál, testvér. Ezt a terhet nem veszem le rólad.”';
    return'Sakkoztok. Sanyi nyer, és bocsánatot kér érte. „Benedek nem volt rossz ember, Dénes. Gyenge volt. Az ajtó mögött ült harmincöt évig, és hallotta, ahogy mások meggyógyulnak.” Leteszi a királyt. „Ő sosem jött be a terembe.”';
  },
  hintBence9(S){
    if(!S.ev.sanyi_alibi)return'„Sanyi villamossal jár haza? A BKV-nak mindenhol kamerája van. Elmegyek, megnézem.”';
    if(S.f.szekeres_otthon&&!S.docs.cella9)return'„A volt zsaru azt mondja, otthon volt? Kérjük le a telefonját.”';
    return'„A füzet, főnök. Ha valaki elvitte, nem a pénzért ölt.”';
  },
  hintKata9(S){
    if(S.ev.gerencser_kod&&!S.docs.penzugy)return'„A gondnok kezelte a pénzt. Az egyházközségek könyvelése mindig rendetlen, csak akkor tűnik fel, ha valaki keresi. Keressük.”';
    if(S.f.met_gerencser&&!S.ev.auto_ger&&!S.ev.ger_alibi)return'„A templommal szemben patika van. A patikáknak kamerájuk van. Ki parkolt ott este?”';
    if(S.f.fuzet_tud&&!S.ev.fuzet&&!S.ev.fuzet_hianyzik)return'„A plébános füzete. Ha benne van a gyilkos neve, vagy ott van még, vagy nincs. Mindkettő mond valamit.”';
    return'„Akit egy pap zsarol, az nem a rendőrségtől fél. Hanem attól, hogy a többiek megtudják.”';
  },
  hintHalasz9(S){
    if(S.f.helyszin9&&!S.docs.ujjnyomat9)return'„Add ide a gyertyatartót. Megmondom, kié az ujj, és hogy mikor került rá.”';
    if(S.f.auto_latva&&!S.docs.luminol)return'„Frissen takarított autó? Imádom. A luminol a takarítást is látja.”';
    if(S.f.kabat_megvan&&!S.docs.kabat)return'„Egy kabát a tisztítóból, tisztítás előtt? Hozd be, mielőtt az öreg mégis kimossa.”';
    return'„Sanyi ujja a por alatt van, Dénes. Ezt mondd meg Szép Viktóriának. Én már mondtam.”';
  },
  feherJozan9(S){
    if(!S.f.aa1){S.f.aa1=S.t;return'„A gyűlést máshol tartják ezen a héten. Református gyülekezeti terem, hattól. Menjen el. Sanyi miatt is.”'}
    if((S.drinks||0)===0)return'„A szponzora őrizetben, a gyűlés helyén gyilkosság. És maga józan.” Leveszi a szemüvegét. „Ezt egy éve nem hittem volna. Most elhiszem.”';
    return'Ránéz a kezedre. „Ittál.” Csend. „Sanyi tudja?” Nem válaszolsz.';
  },
  laciC9(S){
    const A=['Laci kólát tesz eléd, és mellé egy másikat, Sanyi helyére. Senki nem ül le oda.',
      '„A papok” — mondja Laci, a poharat törölgetve — „tudnak a legtöbbet, és mondanak a legkevesebbet. Mint a kocsmárosok.” Rád néz. „Csak a kocsmáros nem kér érte pénzt.”',
      'Laci elővesz egy régi fényképet a pult alól, a Hordó a kilencvenes években. Apád a sarokasztalnál. Mellette valaki, akinek csak a válla látszik. Laci elteszi, mielőtt megkérdeznéd, ki az.'];
    S.f.lc9=(S.f.lc9||0)+1;return A[(S.f.lc9-1)%A.length];
  },
  liliC9(S){
    const A=['„Sanyi tanított meg sakkozni, tudtad?” Nem tudtad. „Tavaly nyáron, a Hordó előtt, amíg rád vártunk. Azt mondta, a gyalog a legfontosabb bábu, mert az nem tud visszalépni.”',
      'Lili a hűtőn lévő cetlit nézi. K vagy L. „Ha megtudod, ki az, elmondod nekem?” Igen. „Akkor is, ha valaki, akit szeretünk?” Hallgatsz. „Akkor is” — mondja ő.',
      'Lili teát főz kettőtöknek. A tavaszi koncertjén Bachot fog játszani. „Nagyapa kedvence volt” — mondja. Nem tudtad. „Keleti doktornő mondta. A temetésen.”'];
    S.f.lo9=(S.f.lo9||0)+1;S.crave=Math.max(0,S.crave-10);return A[(S.f.lo9-1)%A.length];
  }
},
rejectExtra:{},
bonus:function(S){const b=[];if(S.f.sanyi_bevall)b.push([5,'Bevallottad az összeférhetetlenséget']);if(S.f.sanyi_szabad||S.f.sanyi_kezes)b.push([5,'Kihoztad Sanyit']);if((S.drinks||0)===0)b.push([5,'Józan maradtál']);return b},
solveGoal:{$v:{a:["ger_titok","ger_ott","ger_fegyver"],b:["szek_inditek","szek_ott","szek_fegyver"]}},
solveSkip:["ad","kezes"],

end:{
 win:function(S){
  let t="";
  if(S.variant==="a"){
   t+="<p>Gerencsér Tibor a kihallgatóban a rózsafüzérét kéri vissza. Megkapja. „Az atya azt mondta: havi kétszázezer, Tibor, és Isten előtt rendezzük.” Morzsolja a szemeket. „Vasárnap este kinyitotta a széfet, és megmutatta a pénztárkönyvet. A saját kézjegyével. Azt mondta: ez itt marad, amíg fizetsz.” Felnéz. „Felvettem a gyertyatartót. Én javíttattam meg. Nehéz volt. Jó volt a kezemben.” A felesége a folyosón ül, és nem jön be.</p>";
   t+="<p>Szekeres Dávid egy héttel később bemegy a VIII. kerületi kapitányságra, és feljelenti magát. Kőbányai út, 2019. A fiú anyja a tárgyaláson az első sorban ül. Szekeres egyszer sem néz hátra.</p>";
  }else{
   t+="<p>Szekeres Dávid a kihallgatóban egyenes háttal ül, ahogy egy rendőr. „Négy évig fizettem. Havi százezret. Vasárnap azt mondta, emeli. Hogy a fiú anyja új lakásba költözik, és milyen szép lenne, ha megtudná, ki ölte meg a fiát.” Leteszi a kezét az asztalra. „Kinyitotta a széfet, hogy megmutassa a lapomat. Ott állt a gyertyatartó.” Hallgat. „Kesztyűm volt. Rendőr voltam tizenkét évig. Mindig van kesztyűm.”</p>";
   t+="<p>A füzetet lefoglalják. Harmincöt év nevei. Szép Viktória egy éjszakát ül fölötte, aztán reggel a legelső lapot, apádét, kivágja, és borítékban az asztaladra teszi. Nem mond semmit.</p>";
  }
  return t+c9EndCommon(S);
 },
 wrong:{$v:{
  a:{sanyi_g:"<p>Pálfi Sándor ellen vádat emelnek. Az ujjlenyomat, a veszekedés, a kulcs. A tárgyaláson Halász elmondja, hogy az ujjlenyomat a por alatt volt. A bíró meghallgatja. Sanyi kilenc hónapot ül előzetesben, mielőtt felmentik. Kijön, és nem jön vissza a gyűlésre.</p><p>Gerencsér Tibor visszafizeti a nyolcmilliót, részletekben, a templomnak. Minden vasárnap ott ül az első sorban.</p>",
     szekeres:"<p>Szekeres Dávid ellen vádat emelnek. A plázakamera megmutatja, hogy egész éjjel dolgozott. Felmentik, de a 2019-es gázolás közben kiderül. Két év.</p><p>Gerencsér Tibor minden vasárnap ott ül az első sorban, a rózsafüzérét morzsolva.</p>"},
  b:{sanyi_g:"<p>Pálfi Sándor ellen vádat emelnek. Az ujjlenyomat, a veszekedés, a kulcs. Sanyi kilenc hónapot ül előzetesben, mielőtt felmentik. Kijön, és nem jön vissza a gyűlésre.</p><p>Szekeres Dávid továbbra is jár a gyűlésekre. Az ajtó mellé ül. Senki nem tudja, miért.</p>",
     gerencser:"<p>Gerencsér Tibor ellen vádat emelnek. A sikkasztás bebizonyosodik, a gyilkosság nem: a Rézkakas pincére, a tizenkét homályos fénykép. Két év a sikkasztásért.</p><p>Szekeres Dávid továbbra is jár a gyűlésekre. Az ajtó mellé ül.</p>"}
 }},
 fired:"<p>Az ügyet más viszi tovább. Pálfi Sándor ellen vádat emelnek.</p><p>Este a református gyülekezeti teremben ülsz, egy összecsukható széken. Sanyi széke üres. Valaki odatesz rá egy kólát.</p>"
}
};

function c9EndCommon(S){
  let t="";
  if(S.f.sanyi_szabad||S.f.sanyi_kezes)t+="<p>Sanyi a következő vasárnap visszaviszi a székeket a Szent Vince alagsorába. Az új plébános, egy fiatal, félénk pap, megkérdezi, segíthet-e. Sanyi azt mondja: az ajtót ne csukja be. És ne álljon mögötte.</p>";
  else t+="<p>Sanyi négy napot ült a fogdán, mielőtt elengedték. Kijön, és egy hétig nem veszi fel a telefont. Aztán hív, hajnali háromkor, és azt mondja: „Testvér. Csak hogy tudd, nem ittam.”</p>";
  if((S.drinks||0)===0&&S.f.aa_beszed)t+="<p>Április elsején egy éve vagy józan. A gyűlésen Sanyi a kezedbe nyom egy bronzérmét. Egy oldalán: 1. A másikon: „Csak a mai nap.” Nem mondasz semmit. Nem is kell.</p>";
  else if((S.drinks||0)>0)t+="<p>A tavasz elején valamelyik este a Hordóban ülsz, egy fröccs előtt, és nem iszod meg. Aztán megiszod. Laci nem szól semmit. Sanyi másnap igen.</p>";
  if(S.f.keleti_majus||S.f.laci_majd)t+="<p>„Májusban” — mondta Keleti. „Majd egyszer” — mondta Laci. Apád füzetében a kétszer áthúzott név. K vagy L. Május közeledik.</p>";
  if(S.f.lili_hivas9||S.f.lili_marad)t+="<p>Lili hazajön májusban, nagyapa születésnapjára. Kimentek a temetőbe. Ezt megígérted.</p>";
  return t;
}
