// ===== 3. ÜGY: JÉGZAJLÁS =====
CASES.c3 = {
id:"c3", num:"3. ügy ·", title:"Jégzajlás", tagline:"Január. A Duna befagyott. Valaki a jég alá tette azt, aki mindent tudott, és a te sálad lóg a fűzfán.",
date:[2027,0,11], par:5, snow:true,
order:["fazekas","somogyi","bajusz","bodnar"],
start:{t:380, loc:"otthon"},
onStart:function(S,A){S.alc=38;S.fat=62;S.crave=20;A.addEv("blackout")},
intro:function(S,A){
  let t="<p>Hétfő, január 11., 06:20. A kanapén ébredsz, kabátban, cipőben. A szádban vas íze. Az utolsó, amire emlékszel: a Hordó, Laci, egy pohár. Utána semmi.</p>";
  t+="<p>A telefon. "+(S.f.varga_halott?"Kata hangja, nagyon halk":"Varga hangja, nagyon halk")+": „A Sziget északi csúcsa, a jégben. Gál Eszter.” Hosszú csend. „Dénes. A telefonja szerint te voltál az utolsó, akit éjjel hívott. Hol voltál?”</p>";
  t+="<p>Nem tudod.</p>";
  if(S.f.halmos_vad)t+="<p>Halmos Péter hat hete ül vizsgálati fogságban, és egyetlen szót sem szólt. Somogyi Kristóf azóta nem köszön neked a folyosón.</p>";
  else t+="<p>Somogyi Kristóf decemberben főkapitány lett. Halmos még mindig a háta mögött áll, minden fényképen.</p>";
  if(S.f.varga_halott)t+="<p>Varga irodájában azóta senki nem ül. A fiókjában még ott a whisky.</p>";
  if(S.f.apa_korhaz)t+="<p>Apád karácsony óta újra a Platánban van, járókerettel. Azt mondják, egyre kevesebbet beszél.</p>";
  return t;
},

suspects:{
 fazekas:{name:"Fazekas Ádám", short:"Fazekas", reveal:["met_fazekas","fazekas_vita"]},
 somogyi:{name:"Somogyi Kristóf", short:"Somogyi", reveal:["met_somogyi","somogyi_inditek"]},
 bajusz:{name:"Tóth „Bajusz” Lajos", short:"Bajusz", reveal:["met_bajusz","bajusz_lopas"]},
 bodnar:{name:"Bodnár Ferenc", short:"Bodnár", reveal:["bodnar_gyanu"]}
},
victims:[
 {id:"v1", n:"Gál Eszter", s:"Gál", d:"újságíró · a jégben, a Sziget csúcsánál"},
 {id:"v2", n:"Kardos Béla", s:"Kardos", d:"„a Professzor” · híd alatt, hétfő éjjel", known:"v2_found"}
],
solution:{v1:"bodnar", v2:"bodnar"},
onVerdict:function(S,s,vids){vids.forEach(v=>S.f["verd_"+v]=S.t);if(S.f.verd_v1&&S.f.verd_v2)S.f.verd_all=S.t;if(s==="bodnar")S.f.bodnar_vad=S.t},
bossLine:"„Belső vizsgálat folyik ellened, Mátrai. Ne magyarázz. Hozz nevet és bizonyítékot.”",

// ---- BIZONYÍTÉKOK ----
ev:{
 blackout:{n:"Kiesett éjszaka", d:"Vasárnap 23 óra körül, a Hordóban szakad meg az emlékezeted. Utána csak a kanapé, reggel."},
 eszter_test:{v:"v1", n:"Eszter holtteste", d:"A Sziget csúcsánál, a parti jégbe fagyva, arccal lefelé. A halántékán zúzott seb."},
 sal:{v:"v1", n:"A te sálad", d:"Sötétkék kötött sál a parti fűzfa ágán. A tiéd. Lili kötötte két éve karácsonyra."},
 labnyom:{v:"v1", n:"Két ember nyoma", d:"A hóban két ember nyoma a hídtól a csúcs felé. Visszafelé csak egyé, 43-as bakancs."},
 kamera_lat:{v:"v1", n:"Kamera a hídfőn", d:"A Sziget hídfőjén térfigyelő kamera néz a bejáróra és a parkolóra."},
 utolso_hivas:{v:"v1", n:"Eszter utolsó hívása", d:"Vasárnap 23:10, kimenő hívás: Mátrai Dénes, 2 perc. Te vetted fel."},
 hivas_fogadva:{n:"A saját telefonod", d:"23:10, bejövő, Gál Eszter, 2 perc. Fogadtad. Nem emlékszel, mit mondott."},
 hordo_blokk:{n:"Blokk a zsebedben", d:"A kabátzsebedben a Hordó blokkja: vasárnap 23:38, öt fröccs, négy fél deci."},
 kocsi_ho:{n:"Érintetlen hó a kocsidon", d:"A kocsid a ház előtt áll. A szélvédőn kétnapos hó, a kerekek körül érintetlen. Vasárnap éjjel nem mozdult."},
 feri_vitt_haza:{n:"„Feri vitt haza”", d:"Laci szerint vasárnap fél tizenkettő után Bodnár Feri vitt haza a kocsijával. Alig álltál a lábadon."},
 sal_kocsi:{n:"A sál Bodnár kocsijában", d:"Bokszos látta: amikor Bodnár hazavitt, a sálad a kocsija hátsó ülésén maradt. Utánad kiabált, de nem hallottad."},
 halalido_e:{v:"v1", n:"Eszter halálának ideje", d:"Vasárnap 23:30 és hétfő 01:30 között."},
 asp_seb:{v:"v1", n:"Hengeres, rugalmas eszköz", d:"A halántéksérülést hengeres, rugalmas fémeszköz okozta. Teleszkópos bot jellegű, ilyen a rendőrségi szolgálati bot."},
 halott_jegben:{v:"v1", n:"Már halott volt", d:"Eszter már halott volt, amikor a vízbe került. Valaki a jégtörésbe tolta."},
 eszter_kamera:{v:"v1", n:"Eszter a hídon", d:"23:52-kor Eszter egyedül, gyalog megy át a hídon a Sziget felé."},
 skoda_kamera:{v:"v1", n:"Sötétszürke Škoda", d:"00:20-kor egy sötétszürke Škoda Octavia áll be a Sziget parkolójába, 01:05-kor kihajt. A rendszám nem olvasható."},
 bodnar_skoda:{n:"Bodnár autója", d:"Bodnár sötétszürke Škoda Octaviája a kapitányság parkolójában. A csomagtartó ajtaján friss karcolás."},
 fazekas_hivas:{v:"v1", n:"Fazekas hívása 23:40-kor", d:"23:40-kor Fazekas Ádám hívta Esztert, de ő nem vette fel."},
 fazekas_kozel:{v:"v1", n:"Fazekas a Sziget mellett", d:"Fazekas telefonja 23:40-kor a Sziget melletti cellában volt.", sup:[["fazekas","A","v1"]]},
 telefon_sziget:{v:"v1", n:"Eszter telefonja a Szigeten", d:"Eszter telefonjának utolsó jelzése 00:31-kor, a Sziget északi csúcsán. Utána a víz."},
 fazekas_vita:{v:"v1", n:"Eszter és Fazekas vitája", d:"Fazekas letiltotta Eszter Somogyi-cikkét. Eszter felmondott, és azzal fenyegette, hogy a konkurenciánál mindent megír, Fazekas alkuját is.", sup:[["fazekas","I","v1"]]},
 fazekas_bot:{v:"v1", n:"Fazekas sétabotja", d:"Fazekas térdműtét óta nehéz, fémvégű sétabottal jár.", sup:[["fazekas","M","v1"]]},
 fazekas_tisztazva:{v:"v1", n:"Fazekas a rádióban", d:"Fazekas vasárnap 23:00 és 01:00 között élő műsorban volt a Sziget melletti rádióstúdióban. A felvétel és két technikus igazolja. A 23:40-es hívást a reklámszünetben indította.", clears:["fazekas","*"]},
 asztal_ures:{v:"v1", n:"Kiürített íróasztal", d:"Eszter íróasztala a szerkesztőségben kiürítve. A portás szerint vasárnap este egy rendőrigazolványos férfi járt bent."},
 penzhordo:{n:"„Megvan a pénzhordó”", d:"Eszter szerdán azt mondta a gyakornoknak: „Megvan a rendőr, aki a pénzt hordja. Huszonöt éve csinálja.”"},
 somogyi_inditek:{v:"v1", n:"Eszter Somogyi-cikke", d:"Eszter hónapok óta Somogyi alapítványát vizsgálta. A cikk Somogyi végét jelentette volna.", sup:[["somogyi","I","v1"]]},
 somogyi_alibi:{v:"v1", n:"Somogyi vasárnap éjjel", d:"Somogyi 22:30-ig élő tévéadásban volt, utána a sofőrje hazavitte. Az ablak 22:30 után nyitva van.", sup:[["somogyi","A","v1"]]},
 kulcs:{n:"Csomagmegőrző-kulcs", d:"Eszter táskájában, a Professzor szekrényében: egy csomagmegőrző kulcsa, 214-es szám, Déli pályaudvar."},
 eszter_taska:{n:"Eszter táskája", d:"Eszter táskája a Professzor szekrényében, a jégből halászta ki. Sajtóigazolvány, rúzs, egy kulcs."},
 alapitvany_bodnar:{n:"Az alapítvány utalásai", d:"A Biztonságos Városért Alapítvány 2019 óta havonta 250 000 Ft-ot utal Bodnár Ferencnek, „tanácsadói díj” címen.", sup:[["bodnar","I","*"]]},
 eszter_jegyzet:{v:"v1", n:"Eszter utolsó jegyzete", d:"„Vasárnap éjfél, Sziget csúcsa, B.F. Előtte felhívom Dénest. Ha nem jön, akkor is.”"},
 // 2. áldozat
 professzor_test:{v:"v2", n:"A Professzor holtteste", d:"Kardos Béla, 66, egykori gimnáziumi tanár, a híd alatti betonpárkányon, összegömbölyödve. Kihűlés."},
 professzor_latta:{v:"v2", n:"A Professzor látott valamit", d:"Hétfő reggel a Professzor azt mondta a gondozónak: vasárnap éjjel látta, ahogy egy rendőrkabátos ember valamit a jégre húz. „Csak a rendes rendőröknek mondom el. Az öreg Mátrai fiának.”"},
 rendor_szallon:{v:"v2", n:"Rendőr a szállón", d:"Hétfő éjjel egy Feri nevű rendőr járt a szállón, pálinkát hozott a Professzornak. Kint ittak a híd alatt.", sup:[["bodnar","A","v2"]]},
 halalido_k:{v:"v2", n:"A Professzor halálának ideje", d:"Hétfő 23:00 és kedd 02:00 között."},
 diazepam:{v:"v2", n:"Nyugtató a vérben", d:"A Professzor vérében nagy mennyiségű diazepam és alkohol. Magától nem fagyott meg: elaltatták."},
 kenyszer_ital:{v:"v2", n:"Zúzódás az állkapcson", d:"Ujjnyomnyi zúzódások az állkapcson: valaki fogta a fejét, és itatta."},
 bajusz_lopas:{v:"v2", n:"Bajusz elvitte a kabátot", d:"Bajusz kedd reggel a Professzor kabátjában és nyolcezer forintjával jelent meg a szállón.", sup:[["bajusz","I","v2"]]},
 bajusz_szallas:{v:"v2", n:"Bajusz a szomszéd ágyon", d:"Bajusz a Professzor melletti ágyon alszik a szállón.", sup:[["bajusz","A","v2"]]},
 bajusz_diazepam:{v:"v2", n:"Bajusz gyógyszerei", d:"Bajusz zsebében egy levél diazepam, felírva neki a detoxon.", sup:[["bajusz","M","v2"]]},
 bajusz_detox:{v:"v2", n:"Bajusz a detoxon", d:"Bajusz hétfő 21:00-tól kedd 10:00-ig a kórház detoxikáló osztályán feküdt. A kabátot reggel, a halott mellől vitte el.", clears:["bajusz","v2"]},
 bodnar_kerdez:{v:"v2", n:"Bodnár a Professzort kereste", d:"Bodnár hétfő délután a hajléktalanok között kérdezősködött, hol alszik a Professzor."},
 bodnar_recept:{v:"v2", n:"Bodnár nyugtatója", d:"Bodnár három éve diazepamot szed, felírva. A szekrényében egy félig üres doboz."},
 bot_ver:{v:"v1", n:"Vér Bodnár botján", d:"Bodnár szolgálati teleszkópos botjának illesztésében beszáradt vér. DNS-profil: Gál Eszter.", sup:[["bodnar","M","v1"]]},
 csomagtarto:{v:"v1", n:"A Škoda csomagtartója", d:"Bodnár Škodájának csomagtartójában hosszú, festett vörös hajszálak és egy kék gyapjúszál Eszter kabátjából.", sup:[["bodnar","A","v1"]]},
 apa_bodnar:{n:"Apád vallomása", d:"1994-ben Bodnár hozta be Vámos Lajos hamis alibijét, pénzért. Apád tudta, és hallgatott."},
 nora_bodnar:{n:"Nóra a pénzről", d:"Bodnár húsz éve szedi a pénzt Gazsi lányaitól és a gépektől. „Védelmi díj.” Mindenki tudja a VIII. kerületben."},
 // következtetések
 denes_alibi:{n:"Nem vezettél sehova", d:"Bodnár vitt haza, a kocsid reggelig nem mozdult. Hajnali egykor nem lehettél a Szigeten, hacsak valaki el nem vitt.", ded:true, f:"denes_alibi"},
 sal_bodnar:{v:"v1", n:"A sálat Bodnár vitte", d:"A sálad Bodnár kocsijában maradt. Reggel egy fűzfán lógott a Sziget csúcsán.", sup:[["bodnar","A","v1"]], ded:true},
 bodnar_szigeten:{v:"v1", n:"Bodnár a Szigeten", d:"Sötétszürke Škoda Octavia, 00:20, a Sziget parkolója. Bodnár hazavitt, aztán nem ment haza.", sup:[["bodnar","A","v1"]], ded:true},
 eszter_bodnar:{v:"v1", n:"B.F. – Bodnár Ferenc", d:"Eszter éjfélre a Sziget csúcsára hívta B.F.-et, hogy szembesítse az alapítvány utalásaival.", sup:[["bodnar","I","v1"]], ded:true},
 tanu_eltavolitas:{v:"v2", n:"Elhallgattatott tanú", d:"A Professzor látta a gyilkost a jégen, és ezt hétfő reggel elmondta. Hétfő délután Bodnár már kereste. Hétfő éjjel halott volt.", sup:[["bodnar","I","v2"]], ded:true},
 bodnar_diazepam:{v:"v2", n:"Bodnár nyugtatója a pálinkában", d:"Diazepam a Professzor vérében, félig üres diazepamos doboz Bodnár szekrényében.", sup:[["bodnar","M","v2"]], ded:true},
 asp_bodnar:{v:"v1", n:"Szolgálati bot", d:"Teleszkópos bot okozta a sebet, és ilyen bot csak rendőrnél van. Bodnár mindig a kabátja alatt hordja.", ded:true}
},

ded:[
 {a:"kocsi_ho", b:"feri_vitt_haza", g:"denes_alibi", f:"bodnar_figyel", t:"A kocsid reggel kétnapos hó alatt állt. Nem vezettél sehova. Bodnár vitt haza, fél tizenkettő után. Akkor ki vitt el éjjel egykor a Szigetre? Senki. Ezt bizonyítani is tudod."},
 {a:"hordo_blokk", b:"kocsi_ho", g:"denes_alibi", f:"bodnar_figyel", t:"23:38-kor még a Hordóban fizettél. A kocsid reggelig nem mozdult. Gyalog nem értél volna a Sziget csúcsára hajnali egyre, ennyi pálinkával biztosan nem."},
 {a:"sal", b:"sal_kocsi", g:"sal_bodnar", f:"bodnar_gyanu", t:"A sálad Bodnár hátsó ülésén maradt. Reggel egy fűzfán lógott, öt méterre a holttesttől. Valaki odaakasztotta."},
 {a:"skoda_kamera", b:"bodnar_skoda", g:"bodnar_szigeten", f:"bodnar_gyanu", t:"Sötétszürke Škoda Octavia. Bodnár két órán át ült melletted a Hordóban, aztán hazavitt. És utána nem ment haza."},
 {a:"skoda_kamera", b:"feri_vitt_haza", g:"bodnar_szigeten", f:"bodnar_gyanu", t:"Feri vitt haza egy sötétszürke Škodával. Negyven perccel később egy sötétszürke Škoda áll be a Sziget parkolójába."},
 {a:"eszter_jegyzet", b:"alapitvany_bodnar", g:"eszter_bodnar", f:"bodnar_gyanu", t:"B.F. Bodnár Ferenc. Huszonöt éve hordja a pénzt. Eszter megtalálta, és éjfélre a Sziget csúcsára hívta, hogy a szemébe mondja. Előtte téged hívott, hogy menj vele. Te részeg voltál."},
 {a:"eszter_jegyzet", b:"penzhordo", g:"eszter_bodnar", f:"bodnar_gyanu", t:"„A rendőr, aki a pénzt hordja. Huszonöt éve.” B.F. Huszonöt éve egyetlen embert ismersz, aki a kerületben mindenkitől pénzt szed."},
 {a:"professzor_latta", b:"bodnar_kerdez", g:"tanu_eltavolitas", t:"Reggel a Professzor azt mondja, látott egy rendőrkabátos embert a jégen. Délután Bodnár már őt keresi. Éjjel a Professzor halott."},
 {a:"diazepam", b:"bodnar_recept", g:"bodnar_diazepam", t:"Diazepam a vérben, pálinkában. Diazepam Bodnár szekrényében, félig üres dobozban."},
 {a:"asp_seb", b:"halott_jegben", g:"asp_bodnar", t:"Teleszkópos bot, egy ütés a halántékra, aztán a jégtörésbe tolta. Nem dühös ember volt. Olyan, aki tudja, hogyan kell ütni, és tudja, hogyan kell eltüntetni."}
],

// ---- AKTÁK ----
docs:{
 boncolas_e:{t:"Boncolási jegyzőkönyv – Gál Eszter", b:"IGAZSÁGÜGYI ORVOSTANI INTÉZET\nVizsgálta: dr. Keleti Mária\n\n[[halalido_e|Halál beállta: 2027. 01. 10., 23:30 és 01. 11., 01:30 között.]]\n[[asp_seb|Halál oka: koponyatörés a bal halántékon. A sérülést hengeres, rugalmas, fémből készült eszköz okozta, legvalószínűbben teleszkópos bot, amilyet a rendőrség is rendszeresít.]]\n[[halott_jegben|A tüdőben víz nincs: már halott volt, amikor a vízbe került.]]\nA jobb kéz körmei alatt gyapjúszálak, sötétkék.\n\n— Kézzel a margón: „Dénes, a gyapjú nem a te sáladé. Megnéztem. Ne nézz így rám. K. M.”"},
 telefon_e:{t:"Hívásrészletező – Gál Eszter", b:"SZOLGÁLTATÓI ADATSZOLGÁLTATÁS, 2027. 01. 10.\n\n18:02  bejövő  Pap Borbála (Hírlap)  6 perc\n21:15  kimenő  Kónya Attiláné  3 perc\n[[utolso_hivas|23:10  kimenő  Mátrai Dénes  2 perc]]\n[[fazekas_hivas|23:40  bejövő  Fazekas Ádám  nem fogadott]]\n[[fazekas_kozel|A hívó fél (Fazekas Á.) cellája 23:40-kor: XIII. ker., a Sziget pesti hídfőjénél.]]\n[[telefon_sziget|A készülék utolsó jelzése: 00:31, a Sziget északi csúcsa. Ezt követően nincs jel.]]\n\nBence megjegyzése: „A 23:10-es hívás… Dénes, te vetted fel. Két percig beszéltetek.”"},
 szigetkamera:{t:"Térfigyelő kamera – a Sziget pesti hídfője", b:"FŐVÁROSI TÉRFIGYELŐ RENDSZER, 1144-es kamera\nIdőszak: 2027. 01. 10. 22:00 – 01. 11. 06:00\n\n[[eszter_kamera|23:52  nő, vörös haj, kék kabát, egyedül, gyalog a hídon a Sziget felé (azonosítva: Gál E.)]]\n[[skoda_kamera|00:20  sötétszürke Škoda Octavia kombi beáll a szigeti parkolóba, a rendszám a hóeséstől nem olvasható. 01:05  kihajt a hídon Pest felé, világítás nélkül.]]\n00:40–00:55  egy alak a híd alatti parton, kabátban, botra támaszkodva, a csúcs felé néz (feltehetőleg hajléktalan)\n05:48  kutyasétáltató a csúcs felé (a holttest megtalálója)\n\nRáczné hadnagy megjegyzése: Bodnár törzszászlós hétfőn azt jelentette, hogy ez a kamera napok óta nem működik. Működik. — R. K."},
 boncolas_k:{t:"Boncolási jegyzőkönyv – Kardos Béla", b:"IGAZSÁGÜGYI ORVOSTANI INTÉZET\nVizsgálta: dr. Keleti Mária\n\n[[halalido_k|Halál beállta: 2027. 01. 11., 23:00 és 01. 12., 02:00 között.]]\nHalál oka: kihűlés.\n[[diazepam|Toxikológia: véralkohol 3,1 ‰, és nagy mennyiségű diazepam. Az elhunyt nem kapott ilyen gyógyszert.]]\n[[kenyszer_ital|Az állkapocs két oldalán friss, ujjnyomnak megfelelő zúzódások: valaki erősen fogta a fejét.]]\n\n— K. M.: „Egy hajléktalan, aki megfagy. Senki nem nézte volna meg. Én megnéztem.”"},
 radio:{t:"Rádióarchívum – vasárnapi élő adás", b:"FŐVÁROS RÁDIÓ – adásnapló\n2027. 01. 10., 23:00–01:00, „Éjszakai beszélgetés”\nVendég: Fazekas Ádám, a Hírlap főszerkesztője\n\n[[fazekas_tisztazva|A vendég az adás teljes ideje alatt a stúdióban tartózkodott, a felvétel folyamatos. 23:38–23:42 reklámszünet. Stúdió: XIII. ker., a Sziget pesti hídfőjénél. Igazolja: két technikus és a műsorvezető.]]\n\nBence megjegyzése: „A stúdió száz méterre van a hídtól. Ezért volt ott a cellája.”"},
 dosszie:{t:"Gál Eszter dossziéja – csomagmegőrző 214", b:"Barna boríték, benne fénymásolatok, jegyzetek, egy pendrive. Eszter apró, sietős kézírása.\n\nA BIZTONSÁGOS VÁROSÉRT ALAPÍTVÁNY – elnök: Somogyi Kristóf\nRendszeres kifizetések, 2019–2026:\n— Kónya Attila, 2020. 12. – 2026. 12., havi 200 000 Ft (megszűnt: elhunyt)\n[[alapitvany_bodnar|— Bodnár Ferenc, 2019. 03. óta, havi 250 000 Ft, „tanácsadói díj”]]\n— „H.P.”, 2020. 11., egyszeri 5 000 000 Ft\n\nForrás: Kónya Attiláné, aki a férje halála után mindent átadott.\n\nUtolsó oldal:\n[[eszter_jegyzet|„Vasárnap éjfél, Sziget csúcsa, B.F. Előtte felhívom Dénest. Ha nem jön, akkor is. Szembe akarom nézni vele, mielőtt megírom.”]]\n\nAlatta, kisebb betűkkel: „Dénes nem tudja. Huszonöt éve dolgozik vele.”"},
 bot:{t:"Laborjelentés – Bodnár F. szolgálati botja", b:"BŰNÜGYI TECHNIKAI LABOR\nVizsgálta: Halász Tamás\nElrendelte: dr. Szép Viktória, belső ellenőrzés\n\nMinta: ESP teleszkópos bot, 21”, nyilvántartási szám: 0447, használó: Bodnár Ferenc törzszászlós.\n\nA bot felülete alaposan megtisztítva.\n[[bot_ver|A második és harmadik tag illesztésében beszáradt vér. DNS-profil: Gál Eszter.]]\n\n— H. T.: „Huszonöt évig dolgoztam vele, Dénes. Mindig hozott pogácsát karácsonykor.”"},
 skoda:{t:"Átvizsgálás – Bodnár F. gépkocsija", b:"JEGYZŐKÖNYV, járműátvizsgálás\nJármű: sötétszürke Škoda Octavia kombi, üzembentartó: Bodnár Ferenc\nElrendelte: dr. Szép Viktória, belső ellenőrzés. Jelen volt: Rácz K. hadnagy\n\nA belső tér frissen porszívózva.\n[[csomagtarto|A csomagtartó szőnyege alatt hosszú, vörösre festett hajszálak és egy sötétkék gyapjúszál (vizsgálat alatt: Gál E. kabátja).]]\nA hátsó ülés alatt egy pár vastag munkáskesztyű, rajtuk jég és homok."},
 profil3:{t:"Pszichológiai profil – dr. Fehér Judit", b:"ELŐZETES TETTESPROFIL – Gál Eszter\n\nA tettes ismeri a rendőri munkát. Tudja, hogyan kell ütni, hogyan kell eltüntetni, és tudja, mit fog keresni a nyomozó.\n\nNem tervezett gyilkos. Pánikból ölt, de utána nagyon hidegen rendezett. A sál a fán nem véletlen: a tettes ismer téged, főhadnagy. Ismeri a gyengeségeidet, az ivást, a kieső éjszakáidat. Arra számított, hogy magadnak sem fogsz hinni.\n\nAz ilyen ember közel van. Ott ül melletted, és segít.\n\n— Mátrai főhadnagy: kérem, ne igyon most. Most különösen ne. F. J."}
},

// ---- HELYSZÍNEK ----
locs:{
 otthon:{m:"Lakás", n:"Lakás a Körúton", x:612, y:338, side:"P", d:"Harmadik emelet, udvari szoba. A radiátor kattog, az ablakon jégvirág. Ma reggel itt ébredtél kabátban, és nem tudod, hogyan kerültél haza.", hs:[
   {id:"telefon", l:"A telefonod", t:"23:10, bejövő hívás, Gál Eszter, 2 perc. Fogadtad. Hiába nézed a képernyőt, a két percből semmi nem jön vissza. Csak egy szó, talán: Sziget.", ev:"hivas_fogadva"},
   {id:"kabat", l:"A kabátod zsebei", t:"A Hordó blokkja: vasárnap 23:38, öt fröccs, négy fél deci. A kulcsod. A sálad nincs meg.", ev:"hordo_blokk"},
   {id:"kocsi", l:"A kocsid a ház előtt", t:"A kocsid ott áll, ahol pénteken hagytad. A szélvédőn kétnapos hó, a kerekek körül érintetlen. Vasárnap éjjel ez a kocsi nem mozdult.", ev:"kocsi_ho"}
 ]},
 kapitanysag:{m:"Kapitányság", n:"Főkapitányság", x:705, y:196, side:"P", d:"Szürke tömb, sózott lépcső. A folyosón elhallgatnak, amikor elmész mellettük. A te asztalodon valaki már átnézte a fiókokat.", hs:[
   {id:"parkolo", l:"A belső parkoló", t:"Bodnár sötétszürke Škoda Octaviája a szokott helyén. A csomagtartó ajtaján friss karcolás, mintha valami nehezet húztak volna ki rajta.", ev:"bodnar_skoda"},
   {id:"szekreny", l:"Bodnár szekrénye", req:["bodnar_gyanu"], t:"Az öltözőben Bodnár szekrénye nincs bezárva. Egy tartalék ing, egy üveg pálinka, és egy doboz diazepam, rajta a neve. A fele hiányzik.", ev:"bodnar_recept"}
 ]},
 hordo:{m:"Hordó", n:"Hordó", x:648, y:462, side:"P", open:[15,3], d:"A Hordóban a karácsonyi égők még kint vannak, de már nem kapcsolják be. Laci rád néz, amikor belépsz, és nem tölt. Ilyen még nem volt.", hs:[]},
 intezet:{m:"Intézet", n:"Orvostani Intézet", x:792, y:474, side:"P", open:[7,19], d:"Csempe, formalin, a rádióban hírek. A hírekben a te neved.", hs:[]},
 platan:{m:"Platán otthon", n:"Platán Idősotthon", x:178, y:200, side:"B", open:[9,19], gone:"apa_halal", d:"A társalgóban leszedték a karácsonyfát, de a tűlevelek még ott vannak a szőnyegen. Apád az ablaknál ül, járókerettel, és a havat nézi.", hs:[]},
 nora:{m:"Nóra", n:"Nóra lakása", x:716, y:396, side:"P", open:[20,4], gone:"nora_help", d:"Józsefvárosi bérház, a gangon jégcsapok. Nóra ajtaja előtt egy pár női csizma, havasan.", hs:[]},
 sziget:{m:"Sziget csúcsa", n:"A Sziget északi csúcsa", x:470, y:72, side:"P", crime:1, d:"A sziget csúcsán a Duna befagyott, a jégtáblák egymásra torlódtak, mint összetört ablaküveg. A parti fűzfák ágain dér. Sárga szalag a jégen.", hs:[
   {id:"test", l:"A jég", t:"Gál Eszter arccal lefelé fekszik a parti jégbe fagyva, a vörös haja szétterül a fehérben, mint a festék. A halántékán zúzott seb. A helyszínelők jégcsákánnyal dolgoznak körülötte.", ev:"eszter_test", f:"body1"},
   {id:"fuz", l:"A parti fűzfa", t:"A fűzfa alsó ágán egy sötétkék kötött sál. Nem kell közelebb menned. A tiéd. Lili kötötte két éve karácsonyra, és a végén elrontotta a mintát, ezért mindig felismered.", ev:"sal"},
   {id:"ho", l:"Nyomok a hóban", t:"A hídtól a csúcs felé két ember nyoma vezet a hóban, egymás mellett. Visszafelé csak egyé. 43-as bakancs, bordás talp. Neked 45-ös lábad van.", ev:"labnyom"},
   {id:"kamera", l:"A hídfő oszlopa", t:"A Sziget hídfőjén térfigyelő kamera, 1144-es szám. A lencse a bejáróra és a parkolóra néz.", ev:"kamera_lat"}
 ]},
 szallo:{la:1, m:"Szálló", n:"Hajléktalanszálló, Dráva utca", x:540, y:205, side:"P", d:"Fűtött nappali melegedő, harminc ágy, kávé és zsíros kenyér. A híd alatti betonpárkányon, ahol a Professzort megtalálták, most egy szál gyertya ég.", hs:[
   {id:"szekreny", l:"A Professzor szekrénye", req:["szekreny_ok"], t:"Egy kopott fémszekrény. Könyvek: Ady, Pilinszky, egy latin nyelvtan. Alattuk egy női táska, vizes és megfagyott, mintha a jégből halászták volna ki. Benne Gál Eszter sajtóigazolványa, egy rúzs és egy csomagmegőrző kulcsa.", ev:["eszter_taska","kulcs"]},
   {id:"parkany", l:"A híd alatti párkány", req:["v2_found"], t:"A betonpárkányon, ahol a Professzort megtalálták, egy üres pálinkásüveg, Zwack Szilva, drágább, mint amit itt bárki megengedhet magának. Valaki hozta. A rendőrségi fotón a Professzor összegömbölyödve fekszik, mintha aludna.", ev:"professzor_test", f:"palinka"}
 ]},
 hirlap:{m:"Hírlap", n:"A Hírlap szerkesztősége", x:690, y:300, side:"P", open:[9,22], d:"Nyitott terű iroda, monitorok, kávéfolt. Eszter asztalán fekete szalag és egy szál fehér rózsa. Az emberek úgy néznek rád, mintha te tetted volna oda a holttestet is.", hs:[
   {id:"asztal", l:"Eszter íróasztala", t:"Az asztal kiürítve: se laptop, se jegyzetfüzet, a fiókok üresek. A portás szerint vasárnap este egy rendőrigazolványos férfi járt bent, „a nyomozás miatt”. Vasárnap este még senki nem tudta, hogy Eszter halott.", ev:"asztal_ures"},
   {id:"bot", l:"Fazekas irodája", req:["met_fazekas"], t:"Fazekas irodájában az ajtó mögött egy nehéz, fémvégű sétabot. Térdműtét, mondja a titkárnő.", ev:"fazekas_bot"}
 ]},
 palyaudvar:{m:"Pályaudvar", n:"Déli pályaudvar, csomagmegőrző", x:300, y:330, side:"B", vis:"kulcs", d:"Hideg csarnok, galambok, egy automata, ami csak érmét fogad el. A 214-es szekrény a sor végén van.", hs:[
   {id:"214", l:"A 214-es szekrény", t:"A kulcs fordul. Bent egy barna boríték, vastag, és egy pendrive. Eszter kézírása a borítékon: „Ha velem történik valami: Mátrai Dénes.”", doc:"dosszie", f:"dosszie_meg"}
 ]},
 zeneakademia:{m:"Zeneakadémia", n:"Zeneakadémia, kávézó", x:650, y:262, side:"P", vis:"lili_inv", open:[16,19], day:2, d:"Szecessziós kávézó, arany díszek, ifjú zenészek kottákkal. Lili az ablaknál ül, előtte egy kitöltetlen űrlap.", hs:[]},
 temeto:{m:"Temető", n:"Farkasréti temető", x:150, y:420, side:"B", vis:"apa_halal", open:[10,13], day:5, d:"Szombat, fagy, a hó csikorog. Apád koporsója mellett kevesen állnak: néhány régi rendőr, a Platán egyik ápolója, Keleti doktornő fekete kabátban.", hs:[]}
},

// ---- SZEREPLŐK ----
people:{
 varga:{n:"Varga Ottó alezredes", r:"osztályvezető", loc:"kapitanysag", h:[7,19], gone:"varga_halott", bio:"56 éves. December óta többet iszik, és kevesebbet beszél. Most nem néz a szemedbe, és ez rosszabb bármilyen kérdésnél.", topics:[
  {id:"hol", l:"Varga kérdez", t:"„Hol voltál vasárnap éjjel, Dénes?” Nem tudod. Ezt mondod. Lehunyja a szemét. „A belső ellenőrzés már itt van. Dr. Szép Viktória. Ne hazudj neki. És ne igyál.” Az ajtóban megáll. „Hiszek neked. Csak bizonyítsd be, hogy igazam van.”", f:"briefed"},
  {id:"statusz", l:"Jelentés az ügyről", rep:1, dyn:"vargaStatus"}
 ]},
 somogyi:{n:"Somogyi Kristóf", r:"főkapitány", loc:"kapitanysag", h:[8,18], suspect:1, bio:"45 éves, fotogén, politikai kapcsolatokkal. Gál Eszter fél éve írt róla, és most Eszter halott. Somogyi ma reggel sajtótájékoztatót tartott, ahol a te nevedet nem mondta ki, de mindenki értette.", topics:[
  {id:"beszel", l:"Beszélsz vele", t:"„Mátrai. Megkérdezném, hol volt vasárnap éjjel, de úgy hallom, maga sem tudja.” Mosolyog. „Egy részeg nyomozó, egy halott újságíró, aki utoljára őt hívta, és az ő sála egy fán. Ha nem maga lenne, már bent ülne.”", f:"met_somogyi"},
  {id:"eszter", l:"Gál Eszterről", t:"„Az a nő mindenkiről írt. Rólam is, hamisan.” Megigazítja a nyakkendőjét. „Sajnálom, ami történt. Őszintén. De nem fogok úgy tenni, mintha hiányozna.”", ev:"somogyi_inditek"},
  {id:"vasarnap", l:"Hol volt vasárnap éjjel?", sober:1, t:"„Fél tizenegyig élő adásban, utána haza, a sofőröm vitt. A feleségem aludt.” Rád néz. „Kérdezze meg a sofőrömet. Ő mindig ott van, ahol én.”", ev:"somogyi_alibi"},
  {id:"bodnar", l:"Bodnárról kérdezed", req:["alapitvany_bodnar"], sober:1, t:"Egy pillanatra elhallgat. Csak egy pillanatra. „Az alapítvány tanácsadókat fizet. Bodnár törzszászlós huszonöt éve ismeri a kerületet. Ez nem bűn.” Feláll. „Vigyázzon, Mátrai. Aki a kezét nyújtja, az még nem a barátja.”", f:"somogyi_tud"}
 ]},
 szep:{n:"Dr. Szép Viktória", r:"belső ellenőr", loc:"kapitanysag", h:[8,18], bio:"44 éves, a belső ellenőrzés vizsgálója. Halk hang, pontos kérdések, és egy jegyzetfüzet, amibe mindent leír. Nem gyűlöl téged. Csak nem hisz neked.", topics:[
  {id:"meghallgatas", l:"A meghallgatás", t:"„Három dolgot tudok, főhadnagy. Gál Eszter utoljára magát hívta. A sála a holttest mellett volt. És maga nem emlékszik semmire.” Felnéz. „Csütörtök reggel nyolcig adok időt, hogy mást is tudjak. Utána őrizetbe veszem.”", f:"ia_hivas"},
  {id:"alibi", l:"Bemutatod, hogy nem vezettél sehova", req:["denes_alibi"], t:"Hosszan olvassa a jegyzeteidet. Felhívja Lacit, aztán a szomszédodat. Becsukja a füzetét. „Rendben, főhadnagy. Egyelőre nem maga a gyanúsítottam.” Szünet. „De akkor ki akasztotta a sálját a fára?”", f:"denes_tisztazva"},
  {id:"bodnar", l:"Bodnárról beszélsz neki", req:["denes_tisztazva","bodnar_gyanu"], t:"Nem szakít félbe. Amikor végzel, sokáig hallgat. „Egy kolléga ellen bizonyíték kell, nem érzés. Ha a botját vagy a kocsiját akarja, én írom alá az engedélyt.” Feláll. „Huszonöt év, Mátrai. Ha téved, ő soha nem bocsát meg magának. És én sem.”", f:"ia_szovetseges"}
 ]},
 bence:{n:"Tóth Bence", r:"nyomozó", loc:"kapitanysag", h:[7,21], staff:1, bio:"29 éves, lelkes, jó a rendszerekben. Ma reggel nem hozott kávét. Aztán mégis hozott, és szó nélkül letette eléd.", topics:[{id:"gond", l:"Mit gondolsz?", rep:1, dyn:"hintBence"}]},
 kata:{n:"Rácz Kata", r:"nyomozó", loc:"kapitanysag", h:[7,21], staff:1, bio:"36 éves, az osztály legélesebb esze. Rácz Gábor lánya.", topics:[
  {id:"gond", l:"Mit gondolsz?", rep:1, dyn:"hintKata"},
  {id:"hisz", l:"Hiszel nekem?", dyn:"kataHisz"}
 ]},
 bodnar:{n:"Bodnár Feri", r:"törzszászlós", loc:"kapitanysag", h:[7,21], staff:1, gone:"bodnar_vad", bio:"58 éves, huszonöt éve jár utcára. Vasárnap éjjel ő vitt haza a Hordóból. Ma reggel ő hozta el a kocsidat a hó alól, mielőtt megkérted volna.", topics:[
  {id:"gond", l:"Mit gondolsz?", rep:1, dyn:"hintBodnar"},
  {id:"vasarnap", l:"Vasárnap éjjel hazavittél?", t:"„Haza, persze. Alig álltál a lábadon, Dénes. Felkísértelek a lépcsőn, aztán én is hazamentem.” Megpaskolja a vállad. „Semmire nem emlékszel, ugye? Nem baj. Majd én emlékszem helyetted.”", f:"bodnar_vasarnap"},
  {id:"sal", l:"Szembesít: a sál", req:["sal_bodnar"], sober:1, t:"„A sálad? Biztos kiesett, amikor kiszálltál.” Mosolyog. Nem néz a szemedbe. Huszonöt éve ismered, és most először nem tudod, mit lát a szeme mögött."},
  {id:"kamera", l:"Szembesít: a kamera", req:["sab_kamera","doc:szigetkamera"], sober:1, t:"„Elnéztem, Dénes. Öreg vagyok, rossz a szemem.” A keze a zsebében, a kabátja alatt. Ott, ahol a botját hordja."},
  {id:"penz", l:"Szembesít: az alapítvány", req:["alapitvany_bodnar"], sober:1, t:"Sokáig hallgat. Aztán leül, nehezen, mint egy öregember. „Huszonöt év, Dénes. Huszonöt év fagyban, szarban, hullák között. Tudod, mennyi lesz a nyugdíjam?” Felnéz. „Kónya is elvette. Mindenki elvette. Csak te nem, mert te inni szoktál helyette.”"}
 ]},
 halasz:{n:"Halász Tamás", r:"nyomszakértő", loc:"kapitanysag", h:[8,22], staff:1, bio:"41 éves, pedáns. A laborban most csend van: kikapcsolta az Omegát, amikor meghallotta, kit találtak a jégben.", topics:[{id:"gond", l:"Mi van a laborban?", rep:1, dyn:"hintHalasz"}]},
 feher:{n:"Dr. Fehér Judit", r:"pszichológus, profilozó", loc:"kapitanysag", h:[9,17], staff:1, bio:"52 éves. Ő az egyetlen az épületben, aki ma megkérdezte, hogy vagy.", topics:[
  {id:"blackout", l:"A kiesett éjszakáról", t:"„A blackout nem bűntudat, főhadnagy. Az agy egyszerűen nem írja fel, amit az alkohol alatt átél.” Leveszi a szemüvegét. „Ez azt jelenti, hogy amit nem tud, azt mástól kell megtudnia. Ne higgye el elsőre, amit a félelme mond.”"},
  {id:"recept", l:"Bodnár gyógyszereiről kérdezed", req:["bodnar_gyanu","loy:feher:60"], t:"Sokáig hallgat. „Ez orvosi titok.” Aztán mégis: „Bodnár törzszászlós három éve szed diazepamot. Én írattam fel neki, alvászavarra. Azt mondta, a halottak nem hagyják aludni.” Rád néz. „Ezt nem tőlem tudja.”", ev:"bodnar_recept"},
  {id:"recept_low", l:"Bodnár gyógyszereiről kérdezed", req:["bodnar_gyanu","!loy:feher:60","!bodnar_recept"], rep:1, t:"„Orvosi titok, főhadnagy.” Nem enged. <i>(Fehér lojalitása nem elég. Esetleg a szekrényben is körülnézhetsz.)</i>"}
 ]},
 keleti:{n:"Dr. Keleti Mária", r:"igazságügyi orvosszakértő", loc:"intezet", h:[7,19], staff:1, bio:"61 éves, cinikus, láncdohányos. Apád barátja. Ma nem gyújtott rá, amikor beléptél, és ebből tudod, hogy aggódik.", topics:[
  {id:"elozetes", l:"Előzetes vélemény", req:["body1"], t:"„Egy ütés a halántékra, Dénes. Nem kéz, nem kő. Valami hengeres, ruganyos. Láttam már ilyet, sokszor.” Rád néz. „A tiéd a szekrényben van?” Bólintasz. „Akkor hozd be, mielőtt más kéri.”"},
  {id:"apa", l:"Apámról", t:"„Tegnap voltam nála. Már nem nagyon eszik. Az orvos szerint napok kérdése.” Nem néz rád. „Délelőtt menj, Dénes. Most ne halaszd.”"}
 ]},
 apa:{n:"Mátrai Gyula", r:"az apád", loc:"platan", h:[9,19], gone:"apa_halal", bio:"74 éves. Már nem eszik rendesen, és egyre többet alszik. Délelőttönként, egy-egy órára, még ő a régi.", topics:[
  {id:"bodnar", l:"Bodnárról kérdezed", req:["bodnar_gyanu|bodnar_vasarnap"], lucid:[9,11], t:"Sokáig nézi a kezed. „A Bodnár gyerek. Feri.” Behunyja a szemét. „1994-ben ő hozta be Vámos Lajos alibijét. Egy szomszédasszonyt, aki látta Lajost otthon. Hazudott az asszony, tudtam. Feri pénzt kapott érte. És én hallgattam, mert jó zsaru volt, és fiatal, és azt hittem, majd kinövi.” A szeme nedves. „Nem nőtte ki, ugye?”", ev:"apa_bodnar", f:"apa_bodnar_t"},
  {id:"bucsu", l:"Megfogod a kezét", lucid:[9,11], eff:{crave:-25}, t:"Most tudja, ki vagy. „Dénes.” A keze könnyű, mint a papír. „Hagyd abba, fiam. Az ivást. Én sem tudtam abbahagyni a hallgatást. Mindkettő ugyanaz.” Megszorítja a kezed, gyengén. „A kicsi szép lány lett. Mondd meg neki.”", f:"apa_bucsu"},
  {id:"beszel", l:"Csak leülsz mellé", rep:1, dyn:"apaTalk"}
 ]},
 lili:{n:"Mátrai Lili", r:"a lányod", loc:"zeneakademia", h:[16,19], bio:"17 éves. Felvették egy bécsi nyári mesterkurzusra, és ehhez mindkét szülő aláírása kell. Látta az újságot.", topics:[
  {id:"ujsag", l:"Láttad az újságot?", dyn:"liliUjsag"},
  {id:"alairas", l:"Aláírod az űrlapot", req:["met_lili"], dyn:"liliAlairas"}
 ]},
 lili2:{n:"Mátrai Lili", r:"a lányod", loc:"temeto", h:[10,13], vis:"apa_halal", bio:"Fekete kabátban, az anyja mellett. Amikor meglát, elengedi az anyja kezét.", topics:[
  {id:"temetes", l:"Odaállsz mellé", dyn:"liliTemetes", f:"apa_temetes"}
 ]},
 nora:{n:"Nóra", r:"régi ismerős", loc:"nora", h:[20,4], gone:"nora_help", bio:"31 éves, még mindig a VIII. kerületben, még mindig Gazsi alatt. Egy idő óta nem kérdez semmit, csak teát főz.", topics:[
  {id:"ora", l:"Maradsz nála egy órát (8 000 Ft)", rep:1, cost:8000, mins:60, eff:{crave:-25}, dyn:"noraTalk"},
  {id:"bodnar", l:"Bodnárról kérdezed", t:"Lerakja a bögrét. „Feri? Húsz éve szedi a pénzt a lányoktól és a gépektől. Védelmi díj, így hívja. Gazsi fizet neki, mindenki fizet neki.” Rád néz. „Te tényleg nem tudtad, Dénes?”", ev:"nora_bodnar"},
  {id:"professzor", l:"A Professzorról kérdezed", req:["v2_found"], t:"„Az öreg tanár? Hétfő délután Feri a híd alatt kérdezősködött utána. Hogy hol alszik, kivel iszik.” Megborzong. „Azt hittem, segíteni akar neki.”", ev:"bodnar_kerdez"}
 ]},
 fazekas:{n:"Fazekas Ádám", r:"a Hírlap főszerkesztője", loc:"hirlap", h:[9,22], suspect:1, bio:"55 éves, ősz szakáll, drága sál. Térdműtét óta sétabottal jár. Huszonöt éve ismerte Esztert, és tavaly ősszel letiltotta a legfontosabb cikkét.", topics:[
  {id:"eszter", l:"Eszterről", t:"„A legjobb újságíróm volt. A legnehezebb is.” Leül, a botját az asztalnak támasztja. „Letiltottam a Somogyi-cikkét. Nyomás volt, a tulajdonos. Felmondott, és azt mondta, a konkurenciánál mindent megír. Rólam is.” Nem néz fel. „Igaza lett volna.”", ev:"fazekas_vita", f:"met_fazekas"},
  {id:"vasarnap", l:"Hol volt vasárnap éjjel?", t:"„Otthon.” Túl gyorsan mondja. Aztán: „Illetve…” Nem fejezi be."},
  {id:"hivas", l:"Szembesít: a 23:40-es hívás", req:["fazekas_hivas|fazekas_kozel"], sober:1, t:"Elsápad. „Rádióban voltam. Élő adás, éjszakai beszélgetés, a Sziget melletti stúdióban. A reklámszünetben hívtam fel. Bocsánatot akartam kérni.” A hangja megremeg. „Nem vette fel. Azt hittem, haragszik.”", f:"fazekas_radio"},
  {id:"bori", l:"Kivel beszélt Eszter utoljára?", t:"„Pap Borival, a gyakornokkal. Szerdán. Kérdezze meg őt.”"}
 ]},
 bori:{n:"Pap Borbála", r:"gyakornok", loc:"hirlap", h:[9,22], bio:"24 éves, a Hírlap gyakornoka. Eszter tanítványa volt, és most úgy ül az asztala mellett, mintha őrizné.", topics:[
  {id:"szerda", l:"Mit mondott Eszter szerdán?", sober:1, t:"„Azt mondta: »Bori, megvan a rendőr, aki a pénzt hordja. Huszonöt éve csinálja, és mindenki szereti.«” Megtörli a szemét. „Nevetett. Azt mondta, ez lesz élete cikke.”", ev:"penzhordo"},
  {id:"asztal", l:"Ki ürítette ki az asztalát?", t:"„Vasárnap este, nyolc körül, egy rendőr. A portás azt mondta, igazolványt mutatott. Idősebb, bajszos, barátságos. Pogácsát hozott a portásnak.”", f:"pogacsa"}
 ]},
 marta:{n:"Kiss Márta", r:"szociális munkás", loc:"szallo", h:[7,22], bio:"48 éves, húsz éve dolgozik hajléktalanokkal. Mindenkit a nevén szólít, és nem hiszi el, hogy a Professzor magától fagyott meg.", topics:[
  {id:"professzor", l:"A Professzorról", req:["v2_found"], sober:1, t:"„Hétfő reggel azt mondta, látott valamit vasárnap éjjel a Sziget csúcsánál. Egy rendőrkabátos embert, aki valamit a jégre húzott.” Összefonja a karját. „Azt mondta, csak a rendes rendőröknek mondja el. Az öreg Mátrai fiának.” Elmosolyodik. „Ismerte magát, főhadnagy. Latinra tanította a gimnáziumban. Azt mondta, maga volt a legrosszabb tanítványa.”", ev:"professzor_latta"},
  {id:"hetfo", l:"Ki járt itt hétfő éjjel?", req:["v2_found"], sober:1, t:"„Egy rendőr. A Feri, bajuszos, barátságos, mindenki ismeri. Pálinkát hozott a Professzornak, drágát. Kint ittak a híd alatt.” Elhallgat. „Reggel a Professzor ott feküdt a párkányon.”", ev:"rendor_szallon"},
  {id:"szekreny", l:"Megnézheted a Professzor szekrényét?", req:["v2_found"], t:"Hosszan néz. „Az apjára hasonlít.” Előveszi a kulcscsomót. „A harmincegyes. Hétfőn reggel valamit nagyon gondosan elzárt benne.”", f:"szekreny_ok"}
 ]},
 bajusz:{n:"Tóth „Bajusz” Lajos", r:"a Professzor szomszédja", loc:"szallo", h:[12,22], vis:"v2_found", suspect:1, bio:"61 éves, egykori hajóskovács, vastag bajusz, remegő kéz. A Professzor kabátjában ül, ami két számmal nagyobb rá.", topics:[
  {id:"kabat", l:"A kabátról", t:"„Neki már nem kell, nekem igen.” Megtapogatja a zsebét. „A pénzt is elvettem, nyolcezret. Ítéljen el.”", ev:"bajusz_lopas", f:"met_bajusz"},
  {id:"hetfo", l:"Hol volt hétfő éjjel?", t:"„Itt, a szomszéd ágyon. Vagy nem.” Vakarja a fejét. „Nem emlékszem. Néha nem emlékszem.”", ev:"bajusz_szallas"},
  {id:"zseb", l:"Megnézed a zsebeit", t:"Egy levél diazepam, a csomagolásán a kórházi patika címkéje. „A detoxon adták.” Kikapja a kezedből. „Az enyém.”", ev:"bajusz_diazepam"}
 ]},
 laci:{n:"Laci", r:"kocsmáros", loc:"hordo", h:[15,3], bio:"A Hordó kocsmárosa. Ma először nem tölt, amikor belépsz.", topics:[
  {id:"vasarnap", l:"Mi történt vasárnap?", t:"„Itt ittál fél tizenkettőig. Tizenegy után valaki hívott, kimentél, visszajöttél, és azt mondtad: holnap.” Törölgeti a poharat. „Aztán Feri vitt haza. Alig álltál. Ő fizette ki a számlád felét.”", ev:"feri_vitt_haza"},
  {id:"feri", l:"Bodnár vasárnap", req:["feri_vitt_haza"], t:"„Feri? Egész este melletted ült. Te ittál, ő nem. Kólát ivott.” Leteszi a poharat. „Huszonöt év alatt egyszer nem láttam Ferit kólát inni.”"},
  {id:"professzor", l:"A Professzorról", req:["v2_found"], t:"„Az öreg tanár? Hétfőn délután Feri a híd alatt kérdezősködött utána. Valaki mesélte.”", ev:"bodnar_kerdez"}
 ]},
 bokszos:{n:"Szikszai „Bokszos” Imre", r:"gyerekkori barát", loc:"hordo", h:[19,2], bio:"47 éves, volt bokszoló, ma éjszakai portás. Ma nem iszik, csak ül, és figyeli, te mennyit iszol.", topics:[
  {id:"sal", l:"Emlékszel vasárnapra?", t:"„Ott voltam, amikor Feri beültetett a kocsijába. Hátra, mert nem bírtál ülni.” Megdörzsöli az orrát. „A sálad a hátsó ülésen maradt. Kiabáltam utánad, de te már a lépcsőházban énekeltél.”", ev:"sal_kocsi"},
  {id:"regi", l:"Csak iszol vele egyet (900 Ft)", rep:1, drink:1, dyn:"bokszosTalk"}
 ]}
},

// ---- STÁBFELADATOK ----
tasks:[
 {id:"boncolas_e", l:"Gál Eszter boncolása", req:["body1"], dur:300, fit:{keleti:1}, doc:"boncolas_e", ok:"Keleti végzett Eszterrel. Azt mondja, nézd meg a margót."},
 {id:"telefon_e", l:"Eszter hívásrészletezője", req:["body1"], dur:240, fit:{bence:.92, kata:.85, bodnar:.7}, doc:"telefon_e", ok:"Megjött Eszter hívásrészletezője. Bence nem néz a szemedbe.", fail:"A szolgáltató visszadobta. Újra kell kérni."},
 {id:"kamera_sziget", l:"A Sziget-hídfő kamerájának átnézése", req:["kamera_lat"], dur:300, fit:{bodnar:.9, kata:.9, bence:.78}, doc:"szigetkamera", sab:{bodnar:"Bodnár: a Sziget kamerája napok óta nem működik. Nincs felvétel, Dénes. Sajnálom."}, ok:"Kész a Sziget-hídfő kamerájának kivonata.", fail:"A hóesés miatt a felvétel nagy része használhatatlan. Valaki másnak jobb szeme lehet."},
 {id:"radio", l:"Rádióarchívum ellenőrzése", req:["fazekas_radio"], dur:180, fit:{bence:.92, kata:.8}, doc:"radio", ok:"Megjött a rádió adásnaplója."},
 {id:"boncolas_k", l:"Kardos Béla boncolása", req:["v2_found"], dur:300, fit:{keleti:1}, doc:"boncolas_k", ok:"Keleti végzett a Professzorral."},
 {id:"detox", l:"Bajusz hétfő éjjeli útjának ellenőrzése", req:["met_bajusz"], dur:180, fit:{bence:.9, kata:.75, bodnar:.85}, ev:"bajusz_detox", sab:{bodnar:"Bodnár: Bajusz hétfő éjjel nem volt a detoxon, kérdeztem. Szerintem ő volt az, Dénes."}, ok:"Bajusz hétfő 21:00-tól kedd 10:00-ig a detoxikáló osztályon feküdt.", fail:"A kórház adatvédelemre hivatkozik. Újra kell kérni."},
 {id:"bot", l:"Bodnár szolgálati botjának vizsgálata", req:["ia_szovetseges"], dur:360, fit:{halasz:.95}, doc:"bot", warn:"<h2>Halász az ajtóban</h2><p>„Feri botját? A Feriét?” Sokáig áll ott. Aztán bólint, és nem szól többet.</p>", ok:"Halász végzett a bottal. A hangja rekedt."},
 {id:"skoda", l:"Bodnár autójának átvizsgálása", req:["ia_szovetseges"], dur:180, fit:{kata:.9, bence:.7}, doc:"skoda", ok:"Kata lezárta a Škoda átvizsgálását.", fail:"Bodnár elvitte a kocsit. Holnap újra."},
 {id:"profil3", l:"Tettesprofil készítése", req:["body1"], minEv:8, dur:180, fit:{feher:.95}, doc:"profil3", ok:"Fehér doktornő elküldte a profilt."}
],

// ---- NYITOTT SZÁLAK ----
leads:[
 {need:["body1"], not:["doc:boncolas_e"], x:"Eszter boncolása még hátravan (Stáb)."},
 {need:["body1"], not:["doc:telefon_e"], x:"Eszter hívásrészletezője megmutatná, kivel beszélt utoljára (Stáb)."},
 {need:["kamera_lat"], not:["doc:szigetkamera"], x:"A Sziget hídfőjén kamera van. Valakinek végig kell néznie a felvételt (Stáb)."},
 {need:["sab_kamera"], not:["doc:szigetkamera"], x:"Bodnár szerint a Sziget kamerája nem működik. Ellenőrizted? Küldj valaki mást is."},
 {need:["blackout"], not:["kocsi_ho"], x:"Nem emlékszel, hogyan kerültél haza. A lakásodban és a ház előtt is körülnézhetsz."},
 {need:["blackout"], not:["feri_vitt_haza"], x:"A Hordóban mindenki látta, mikor és hogyan mentél el. Laci délután háromtól van bent."},
 {need:["ia_hivas"], not:["denes_tisztazva"], x:"Dr. Szép Viktória csütörtök reggel nyolcig ad időt, hogy bizonyítsd: nem te voltál. Utána őrizetbe vesz."},
 {need:["denes_alibi"], not:["denes_tisztazva"], x:"Megvan a bizonyíték, hogy nem vezettél sehova. Mutasd be dr. Szép Viktóriának."},
 {need:["sal"], not:["sal_kocsi"], x:"Hogyan került a sálad a fűzfára? Vasárnap éjjel még nálad volt a Hordóban. Ki látta, amikor elmentél?"},
 {need:["met_fazekas"], not:["fazekas_vita"], x:"Fazekas és Eszter viszonyáról a szerkesztőségben mindenki tud."},
 {need:["fazekas_radio"], not:["fazekas_tisztazva"], x:"Fazekas szerint rádióban volt. Bence ellenőrizheti az adásnaplót (Stáb)."},
 {need:["v2_found"], not:["professzor_latta"], x:"Keleti szerint a Professzort megölték. A szállón Kiss Márta ismerte."},
 {need:["kulcs"], not:["dosszie_meg"], x:"Eszter táskájában egy csomagmegőrző kulcsa volt, 214-es szám, Déli pályaudvar."},
 {need:["met_bajusz"], not:["bajusz_detox"], x:"Bajusz nem emlékszik, hol volt hétfő éjjel. Valaki ellenőrizheti (Stáb)."},
 {need:["sab_detox"], not:["bajusz_detox"], x:"Bodnár szerint Bajusz nem volt a detoxon. Ellenőrizted? Küldj valaki mást is."},
 {need:["bodnar_gyanu"], not:["ia_szovetseges"], x:"Egy kolléga botjához és kocsijához engedély kell. Dr. Szép Viktória adhatja meg, ha előbb téged tisztáztak."},
 {need:["bodnar_gyanu"], not:["apa_bodnar_t","apa_halal"], x:"Apád huszonöt éve ismeri Bodnárt. Délelőtt 9 és 11 között még tiszta a feje. Siess."},
 {need:["bodnar_gyanu"], not:["bodnar_recept"], x:"A Professzor vérében nyugtató volt. Bodnár szed valamit? Fehér doktornő tudja, vagy a szekrénye megmondja."},
 {need:["lili_inv"], not:["met_lili","lili_alairas"], x:"Lili szerdán 16 és 19 óra között a Zeneakadémia kávézójában vár. Egy aláírás kell neki."},
 {need:["apa_halal"], not:["apa_temetes"], x:"Apád temetése szombaton 11-kor, a Farkasréti temetőben."}
],

// ---- IDŐZÍTETT ESEMÉNYEK ----
timed:[
 {id:"hirlap1", at:480, front:{h:"Holtan találták Gál Esztert",s:"A Hírlap újságíróját a befagyott Duna jegében találták meg",b:"Gál Eszter, lapunk bűnügyi újságírója, hónapok óta egy rendőrségi alapítvány ügyeit vizsgálta. Kollégánkat hétfő hajnalban egy kutyasétáltató találta meg a Sziget csúcsánál. A rendőrség nem nyilatkozott. Fazekas Ádám főszerkesztő: „Eszter igazságot keresett.”"}},
 {id:"ia", at:600, x:"<b>Belső ellenőrzés:</b> Dr. Szép Viktória kéri, hogy jelentkezz nála a kapitányságon. Haladéktalanul."},
 {id:"lili", at:1200, f:"lili_inv", x:S=>S.f.lili_bday?"<b>SMS, Lili:</b> Láttam a híreket. Nem hiszem el. Szerdán négytől a Zeneakadémia kávézójában vagyok, alá kéne írnod valamit. Ha tudsz, gyere.":"<b>SMS, Lili:</b> Láttam a híreket. Szerdán négytől a Zeneakadémia kávézójában leszek. Alá kéne írnod valamit. Anya szerint ne kérjelek."},
 {id:"hirlap2", at:1440+420, front:S=>({h:"Rendőr a gyanúsított?",s:"Gál Eszter utoljára egy gyilkossági nyomozót hívott",b:"Értesüléseink szerint a meggyilkolt újságíró utolsó hívása egy ismert, alkoholproblémáiról ismert gyilkossági nyomozónak szólt. A belső ellenőrzés vizsgálatot indított. Somogyi Kristóf főkapitány: „Senki nem állhat a törvény fölött, rendőr sem.”"})},
 {id:"v2", at:1440+660, f:"v2_found", modal:"<h2>Kedd, 11:00 – telefon</h2><p>Keleti: „Reggel behoztak egy hajléktalant a Sziget alatti hídról. Kardos Béla, hatvanhat, a szállón Professzornak hívták. Kihűlés, mondta mindenki.” Szünet, egy öngyújtó kattanása. „Nem fagyott meg magától, Dénes. Elaltatták. És egy dolog még: a szállón azt mondják, téged keresett.”</p>"},
 {id:"nora_hiv", at:2*1440+1260, req:["nora_help","v2_found"], ev:"nora_bodnar", modal:"<h2>Szerda, 21:00 – telefon, Szeged</h2><p>Nóra: „Olvastam rólad. Hülyeség.” Csend. „Dénes. Feri, a Bodnár. Húsz éve szedi a pénzt a lányoktól és a gépektől. Gazsitól is. Mindenki tudja a kerületben, csak te nem.” A háttérben egy gyerek nevet. „Vigyázz vele. Ő is tudja, hogy te nem tudod.”</p>"},
 {id:"orizet", at:3*1440+480, unless:"denes_tisztazva", f:"orizet", pat:-20, go:"kapitanysag", skip:1440, modal:S=>"<h2>Csütörtök, 08:00</h2><p>Dr. Szép Viktória két egyenruhással áll az ajtódban. „Mátrai főhadnagy, őrizetbe veszem Gál Eszter meggyilkolásának gyanújával.” Nem bilincsel meg. Ez rosszabb.</p><p>Huszonnégy órát töltesz a kapitányság fogdájában. A falon karcolások, nevek, évszámok. Péntek reggel elengednek: nincs elég bizonyíték. Még.</p>"+(S.loy.kata>=60?"<p>Kata vár a folyosón, két kávéval. „Dolgoztam, amíg bent voltál.” Ennyi.</p>":"<p>A folyosón senki nem vár. A telefonodon tizenkét nem fogadott hívás.</p>")},
 {id:"apahalal", at:4*1440+300, f:"apa_halal", modal:S=>"<h2>Péntek, 05:00 – telefon</h2><p>A Platánból hívnak. Apád éjjel, álmában meghalt. Az ápolónő azt mondja, nyugodt volt.</p>"+(S.f.apa_bucsu?"<p>Arra gondolsz, hogy kedden fogtad a kezét, és tudta, ki vagy. Ez nem kevés. Ez majdnem minden.</p>":"<p>Arra gondolsz, mikor voltál nála utoljára. Nem jut eszedbe. Ez a második éjszaka a héten, amire nem emlékszel.</p>")+"<p>A temetés szombaton tizenegykor, Farkasréten.</p>"},
 {id:"hirlap3", at:4*1440+480, front:{h:"Hajléktalan tanú halt meg a Szigetnél",s:"Kardos Béla látta Gál Eszter gyilkosát?",b:"Lapunk értesülése szerint a hétfő éjjel elhunyt hajléktalan férfi a gyilkosság éjszakáján a Sziget csúcsánál tartózkodott. Halálát először kihűlésnek vélték. A rendőrség a két haláleset közötti összefüggést vizsgálja."}},
 {id:"vege", at:6*1440+1200, unless:"verd_all", pat:-500, modal:"<h2>Vasárnap, 20:00</h2><p>Somogyi bejelenti: a Gál-ügyet a belső ellenőrzés és a kapitányság „közösen lezárja”. A neved nem hangzik el. Nem is kell.</p>"}
],

locEvents:[
 {id:"szep1", loc:"kapitanysag", when:(S,h,A)=>A.inWin(h,[8,18])&&!S.f.ia_hivas, html:"<h2>A folyosón</h2><p>Egy nő vár az irodád előtt, szürke kosztümben, jegyzetfüzettel. „Dr. Szép Viktória, belső ellenőrzés. Beszélnünk kell, főhadnagy.” Nem kérdés.</p>"},
 {id:"katakamera", loc:"kapitanysag", when:S=>!!(S.f.sab_kamera&&S.docs.szigetkamera), html:"<h2>Kata az asztalodnál</h2><p>Leteszi eléd a kamera kivonatát. „Bodnár azt mondta, nem működik. Működik.” Nem ül le. „Miért hazudna Feri egy kameráról, Dénes?”</p>"},
 {id:"drunk", loc:"kapitanysag", when:(S,h,A)=>A.inWin(h,[7,19])&&S.alc>55, pat:-15, html:"<h2>Megszagolnak</h2><p>Dr. Szép Viktória a folyosón megáll melletted. Nem mond semmit, csak felír valamit a füzetébe.</p>"}
],

// ---- ÜGYSPECIFIKUS SZÖVEGEK ----
dyn:{
  hintBence(S){
    if(!S.docs.telefon_e)return'„Lekérem Eszter híváslistáját. Tudom, hogy rajta leszel. Akkor is le kell kérni.”';
    if(S.f.fazekas_radio&&!S.ev.fazekas_tisztazva)return'„Fazekas rádióban volt? Megnézem az adásnaplót.”';
    if(S.f.met_bajusz&&!S.ev.bajusz_detox)return'„Bajusz? Lekérem a detox nyilvántartását. Nem Ferit küldeném, ő mindenkiről azt mondja, hogy ő volt.”';
    return'„Én nem hiszem, hogy te voltál. De nem is emlékszel, ugye? Akkor bizonyítsuk.”';
  },
  hintKata(S){
    if(S.ev.kamera_lat&&!S.docs.szigetkamera)return'„A Sziget kameráját én nézem meg. Nem Feri. Ne kérdezd, miért.”';
    if(S.f.sab_kamera&&!S.docs.szigetkamera)return'„Feri azt mondta, a kamera nem megy? Adj öt órát.”';
    if(S.f.bodnar_gyanu&&!S.f.ia_szovetseges)return'„Ha Feri, akkor engedély kell. Szép Viktória ad, ha előbb téged tisztáz. Ő nem barátunk, de nem is Somogyié.”';
    return'„Huszonöt éve ismerünk mindenkit ezen az osztályon. Ez a baj.”';
  },
  hintBodnar(S){
    if(!S.f.bodnar_gyanu)return'„A főszerkesztő, Dénes. Fazekas. Letiltotta a cikkét, a nő felmondott, mindent kitálalt volna. Vagy Somogyi.” Megpaskolja a válladat. „Ne ess pánikba. Én itt vagyok.”';
    return'„Mit nézel így rám, Dénes?” Mosolyog, de csak a szája.';
  },
  hintHalasz(S){
    if(S.f.ia_szovetseges&&!S.docs.bot)return'„A botot? Mindent lemosnak, csak az illesztést nem. Mindig az illesztést nem.” Nem néz rád.';
    return'„Hozz valamit, és megmondom, mi az.” A hangszóró néma.';
  },
  kataHisz(S){
    if(S.f.kata_titok)return'„Hat évig azt hitted, megölted az apámat, és nem te voltál. Most azt hiszik, megöltél egy újságírót.” Leül az asztalod szélére. „Hiszek neked, Dénes. Most már tudom, hogy kell.”';
    if(S.loy.kata>=60)return'Hosszan néz. „Nem tudom. De segítek kideríteni. Ennyit tudok adni.”';
    return'„Nem tudom, mit higgyek, Mátrai. Te sem tudod.” Visszafordul a monitorhoz.';
  },
  liliUjsag(S){
    S.f.met_lili=S.t;
    if(S.alc>40)return'Lili rád néz, aztán a poharadra, aztán az ablakra. „Anya azt mondta, ne találkozzak veled. Azt mondtam, apa nem gyilkos.” Elhallgat. „Most nem tudom, mit mondjak neki.”';
    return'Lili egy darabig nem szól. Aztán: „Az osztályban mindenki rólad beszél. Azt mondtam nekik, hogy az apám nem gyilkos.” Felnéz. „Igazam van, ugye?” Igen. Most először mondod ki hangosan, és most először hiszed el te is.';
  },
  liliAlairas(S){
    if(S.alc>40){S.f.lili_alairas_rossz=S.t;return'Kitolja eléd az űrlapot, aztán visszahúzza. „Majd ha józan leszel.” Elteszi a táskájába. Nem dühös. Az rosszabb lenne. Csak fáradt.'}
    S.f.lili_alairas=S.t;S.crave=Math.max(0,S.crave-25);
    return'Aláírod. Mátrai Dénes, rendesen, nem remeg a kezed. Lili nézi az aláírást, mintha meg kellene jegyeznie. „Bécs, júliusban. Ha eljössz a záróhangversenyre, szólok előre.” Szólni fog. Már tudod.';
  },
  liliTemetes(S){
    if(S.alc>40)return'Odaállsz mellé. Lili megérzi rajtad, és egy fél lépést arrébb megy. A koporsó lassan leereszkedik. Lili nem sír, te igen.';
    return'Odaállsz mellé. Lili megfogja a kezed, és nem engedi el, amíg a koporsó leereszkedik. „Nagyapa mindig azt mondta, hogy te vagy a legjobb rendőr” — súgja. „Azt hittem, viccel.”';
  }
},
rejectExtra:{somogyi:'<p>Este Somogyi hív. „Mátrai, a gyanúsított maga. Ne felejtse el.”</p>'},
bonus:function(S){const b=[];if(S.f.denes_tisztazva)b.push([5,'Tisztáztad magad']);if(S.f.orizet)b.push([-10,'Őrizetbe vettek']);if(S.f.apa_temetes)b.push([5,'Ott voltál apád temetésén']);if(S.f.lili_alairas)b.push([5,'Aláírtad Lili papírját']);if((S.drinks||0)<=2)b.push([5,'Szinte józan maradtál']);return b},
solveGoal:["bot_ver","csomagtarto","eszter_bodnar","tanu_eltavolitas","bodnar_diazepam","rendor_szallon"],

// ---- BEFEJEZÉS ----
end:{
 title:function(S){return(S.verd.v1&&S.verd.v1.ok&&S.verd.v2&&S.verd.v2.ok)?"Ügy lezárva":"Ügy lezárva – de nem úgy"},
 multi:function(S){
  const V=S.verd,ok=v=>V[v]&&V[v].ok;let t="";
  if(ok("v1")&&ok("v2")){
    t+="<p>Bodnár Ferenc a kihallgatóban ül, a kabátja a szék támláján. Nem tagad. Fáradtan beszél, mint aki huszonöt éve vár erre a beszélgetésre.</p><p>Eszter éjfélkor várta a Sziget csúcsán, a dossziéval a fejében. Bodnár azt hitte, megegyezhetnek. Eszter nevetett. Egyetlen ütés volt. Aztán eszébe jutottál te, a sál a hátsó ülésen, és az, hogy úgysem emlékszel semmire.</p><p>A Professzorról nem beszél. Csak annyit mond, a végén: „Szép halál a fagy, Dénes. Elalszik az ember.”</p>";
  }else{
    if(V.v1&&!ok("v1"))t+=V.v1.s==="fazekas"?"<p>Fazekas Ádámot vád alá helyezik. A rádió adásnaplója a tárgyaláson előkerül, a vádat ejtik. Fazekas a Hírlap címlapján ír rólad egy vezércikket. Nem kíméletes.</p>":"<p>Az ügyészség nem jut messzire. Gál Eszter gyilkosa ismeretlen marad.</p>";
    if(V.v2&&!ok("v2"))t+="<p>Bajuszt elítélik a Professzor haláláért. A szállón senki nem hiszi el. Kiss Márta egy levelet ír neked, amit nem bontasz fel.</p>";
    if(!S.f.bodnar_vad)t+="<p>Hétfő reggel Bodnár kávét tesz az asztalodra, ahogy huszonöt éve minden hétfőn. „Na, Dénes. Lezártuk.” Megpaskolja a válladat. Te a sálra gondolsz a fán.</p>";
  }
  if(S.docs.dosszie){
    if(S.f.halmos_vad){t+="<p>A Hírlap három nappal később leközli Gál Eszter utolsó cikkét, Fazekas Ádám előszavával. Az alapítvány kifizetései, a nevek, az összegek. Az egyik sor: „H.P., 2020. 11., 5 000 000 Ft.” Halmos a vizsgálati fogságban elolvassa, és másnap kér egy kihallgatást. Somogyi Kristófot egy hét múlva őrizetbe veszik.</p>";S.f.somogyi_bukik=1}
    else{t+="<p>A Hírlap három nappal később leközli Gál Eszter utolsó cikkét, Fazekas Ádám előszavával. Somogyi Kristóf a cikk megjelenése után két nappal „egészségügyi okokból” lemond. Senki nem viszi bíróság elé. Még.</p>";S.f.somogyi_bukik=1}
  }else t+="<p>Gál Eszter dossziéja soha nem kerül elő. Somogyi Kristóf a temetésén koszorút helyez el, és a sajtónak azt mondja: a szabad sajtó a demokrácia alapja.</p>";
  if(!S.f.denes_tisztazva)t+="<p>A belső vizsgálat a te ügyedben nyitva marad. Dr. Szép Viktória egyszer még felhív, hónapokkal később. Csak annyit kérdez: „Emlékszik már, főhadnagy?”</p>";
  if(S.f.apa_temetes)t+="<p>Apád sírján a hó alatt a név: Mátrai Gyula r. főhadnagy, 1952–2027. "+(S.f.apa_bodnar_t?"Tudod, mit hallgatott el egész életében. És tudod, hogy a végén elmondta.":"Sok mindent nem kérdeztél meg tőle. Most már nem is fogod.")+"</p>";
  else if(S.f.apa_halal)t+="<p>Apád temetéséről lekéstél. A sírjához egy héttel később mész ki, egyedül, és egy darabig nem tudod, mit kell ilyenkor mondani.</p>";
  if(S.f.lili_alairas)t+="<p>Júliusban Bécsben a záróhangverseny harmadik sorában ülsz. Lili a második darab előtt megkeresi a szemével a nézőteret. Megtalál.</p>";
  else if(S.f.lili_alairas_rossz||S.f.met_lili)t+="<p>Lili az anyjával megy Bécsbe. Egy képeslapot küld: egy zongora, és hátul egyetlen sor: <i>Majd legközelebb.</i></p>";
  if(S.f.kata_titok&&S.f.bodnar_vad)t+="<p>Kata a kapitányság lépcsőjén áll meg melletted. „Huszonöt év” — mondja. „Apám is ismerte. Szerette.” Nem tudtok mit mondani egymásnak. Ez is valami.</p>";
  if((S.drinks||0)<=2)t+="<p>Este hazamész. A hűtőben ott a pálinka. Kiveszed, sokáig nézed, aztán kiöntöd a lefolyóba. Nem tudod, holnap is így lesz-e. Ma így van.</p>";
  else t+="<p>Este a Hordóban ülsz. Laci tölt, és most leül melléd. „Apád jó ember volt” — mondja. Iszol. Holnap majd abbahagyod. Mindig holnap.</p>";
  return t;
 },
 fired:"<p>Somogyi lezárja az ügyet. Gál Eszter gyilkossága megoldatlan marad, a belső vizsgálat ellened felfüggesztéssel zárul. Bodnár Feri segít bepakolni az íróasztalodat egy kartondobozba. Ő viszi le a kocsidig.</p><p>„Majd megoldódik, Dénes” — mondja, és megpaskolja a válladat. A kezében a sálad van. Azt mondja, a raktárban találta.</p>"
}
};
