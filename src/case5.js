// ===== 5. ÜGY: APADÁS =====
CASES.c5 = {
id:"c5", num:"5. ügy ·", title:"Apadás", tagline:"Július. Hőség, a Duna visszahúzódik, és a mederben ott áll egy autó, ami 2006 óta vár. Bence nem jött be dolgozni.",
date:[2027,6,12], par:4,
order:["lengyel","major","bokszos"],
start:{t:420, loc:"otthon"},
onStart:function(S,A){S.f.bence_eltunt=1;S.alc=5;S.fat=25;S.crave=40;A.addEv("bence_sms")},
intro:function(S,A){
  let t="<p>Hétfő, július 12., 07:00. Harmincnyolc fok lesz. A Duna hetek óta apad, a rakparton látszanak a mederkövek, a hídpillérek alján a régi vízszint csíkjai, mint évgyűrűk.</p>";
  t+="<p>A telefonodon egy üzenet vasárnap 21:47-ről, Bencétől: <i>„Megtaláltam, ki hívta utoljára Lengyel Ildikót 2006-ban. Holnap elmondom. Ne haragudj, hogy nélküled kezdtem.”</i> Nem válaszoltál rá. Aludtál.</p>";
  t+="<p>Dr. Szép Viktória hív: „Az Újpesti-öbölben, az apadó vízben csütörtökön előkerült egy autó, benne csontok. Bence vitte, a saját kérésére. Ma reggel nem jött be. A telefonja ki van kapcsolva.” Csend. „Ez nem Bence, Mátrai. Bence soha nem késik.”</p>";
  if(S.f.kata_vad)t+="<p>Kata áprilisban felmondott. Azóta egy biztonsági cégnél dolgozik. Nem hívtad fel. Ő sem téged.</p>";
  if(S.f.aa_beszed)t+="<p>Négy hónapja nem ittál. Minden reggel számolod. Ma reggel is.</p>";
  if(S.f.lili_marad)t+="<p>Lili a szomszéd szobában alszik. A zongora mellett a hűtő, a hűtőben már nincs pálinka.</p>";
  return t;
},

suspects:{
 lengyel:{name:"Lengyel Tamás", short:"Lengyel", reveal:["met_lengyel","lengyel_feltekeny"]},
 major:{name:"Major Gábor", short:"Major", reveal:["met_major","major_viszony"]},
 bokszos:{name:"Szikszai „Bokszos” Imre", short:"Imre", reveal:["bokszos_gyanu"]}
},
victims:[
 {id:"v1", n:"Lengyel Ildikó", s:"Lengyel I.", d:"31 éves · eltűnt 2006. július 14-én, az autója a mederben"},
 {id:"v2", n:"Tóth Bence", s:"Bence", d:"nyomozó · Királyerdő, a kunyhóban", known:"bence_halott"}
],
solution:{v1:"bokszos", v2:"bokszos"},
over:function(S){return!!S.verd.v1&&(S.f.bence_mentve?true:(S.f.bence_halott?!!S.verd.v2:false))},
onVerdict:function(S,s,vids){vids.forEach(v=>S.f["verd_"+v]=S.t);if(S.verd.v1&&(S.verd.v2||S.f.bence_mentve))S.f.verd_all=S.t;if(s==="bokszos"){S.f.bokszos_vad=S.t;S.f.bokszos_kert=S.t}},
bossLine:"„Hozzon nevet és bizonyítékot, főhadnagy. És hozza vissza Bencét.”",

ev:{
 bence_sms:{n:"Bence utolsó üzenete", d:"Vasárnap 21:47: „Megtaláltam, ki hívta utoljára Lengyel Ildikót 2006-ban. Holnap elmondom. Ne haragudj, hogy nélküled kezdtem.”"},
 // 2006
 ildiko_test:{v:"v1", n:"Csontok az autóban", d:"Egy 2006-os Opel Astra a mederben, a vezetőülésen egy nő csontjai. A ruhák maradványai, egy karóra, megállt 0:52-kor."},
 kezifek:{v:"v1", n:"Kiengedett kézifék", d:"A kézifék kiengedve, a sebességváltó üresben. Az autó nem a vízbe hajtott: a vízbe tolták."},
 klubgyuru:{v:"v1", n:"Gyűrű a lábtérben", d:"Az utasoldali lábtérben, az iszap alatt egy férfi pecsétgyűrű: „Csepeli Vasas, 1998, bajnok”."},
 ildiko_taska:{v:"v1", n:"Ildikó táskája", d:"A hátsó ülésen egy táska, benne egy Nokia, egy rúzs és egy vízben szétmállott fénykép két emberről egy bokszmeccs lelátóján."},
 oklos_ut:{v:"v1", n:"Ütés és esés", d:"A bal járomcsont törése: ököl erejű, nagyon erős ütés. Utána a koponyaalap törése, éles peremre zuhanástól. Az ütés nem ölt. Az esés igen."},
 lengyel_feltekeny:{v:"v1", n:"A féltékeny férj", d:"Lengyel Tamás 2006-ban többször megfenyegette a tőle különváltan élő feleségét. Két feljelentés.", sup:[["lengyel","I","v1"]]},
 lengyel_nincs_alibi:{v:"v1", n:"Lengyelnek nem volt alibije", d:"A 2006-os akta szerint Lengyel azt állította, otthon aludt, egyedül. Senki nem igazolta.", sup:[["lengyel","A","v1"]]},
 lengyel_vontato:{v:"v1", n:"A vontató", d:"Lengyel 2006-ban autómentő-sofőr volt. Tudta, hogyan kell egy autót a vízbe juttatni.", sup:[["lengyel","M","v1"]]},
 lengyel_korhaz:{v:"v1", n:"Lengyel a kórházban", d:"2006. július 14-én 21:30-tól Lengyel Tamás a Szent László kórházban feküdt, sürgősségi vakbélműtét után. Kórházi napló igazolja.", clears:["lengyel","*"]},
 major_viszony:{v:"v1", n:"Major és Ildikó", d:"Major Gábor, Ildikó nős főnöke, fél éve viszonyt folytatott vele. Ildikó aznap este azt mondta neki, hogy döntött.", sup:[["major","I","v1"]]},
 major_hivas:{v:"v1", n:"Major hívása 22:30-kor", d:"Major 2006. július 14-én 22:30-kor felhívta Ildikót. Négy percig beszéltek.", sup:[["major","A","v1"]]},
 ildiko_szakit:{v:"v1", n:"Aznap este szakítani akart", d:"Ildikó aznap este azt mondta Majornak: „Ma este megmondom Imrének, hogy vége. Utána hozzád jövök.”"},
 denes_alibi_2006:{v:"v1", n:"Az alibi, amit te adtál", d:"A 2006-os aktában: „Szikszai Imre alibijét Mátrai Dénes r. járőr igazolta: egész éjjel együtt voltak a Hordóban.” A te aláírásod."},
 apa_megjegyzes:{v:"v1", n:"Apád ceruzás megjegyzése", d:"Az akta margóján apád írásával: „Dénes részeg volt. Imre nem. Nem kérdezek tovább. – M. Gy.”"},
 utolso_hivas_2006:{v:"v1", n:"Ildikó utolsó hívása", d:"2006. július 14., 23:41: Lengyel Ildikó utolsó hívása a 06-30-…-4417-es számra, két perc."},
 szam_imre:{n:"A szám tulajdonosa", d:"A 06-30-…-4417-es szám 2006-ban és ma is Szikszai Imréé."},
 alibi_hamis:{v:"v1", n:"Imre elment éjjel", d:"Laci szerint 2006. július 14-én Dénes egykor bealudt a pultnál. Imre tizenegy után elment, és hajnalban jött vissza, csuromvizes cipőben.", sup:[["bokszos","A","v1"]]},
 bajnok1998:{n:"Az 1998-as bajnokcsapat", d:"A Vasas falán bekeretezett fotó: az 1998-as bajnokcsapat, mindegyikük ujján ugyanaz a pecsétgyűrű. Középen Szikszai Imre, nehézsúly."},
 bokszos_ildiko:{v:"v1", n:"Imre és Ildikó", d:"Imre anyja szerint 2006-ban Imre egy Ildikó nevű nővel járt, és el akarta venni. Aztán a nő eltűnt, és Imre azóta nem nősült meg.", sup:[["bokszos","I","v1"]]},
 bokszos_vallomas:{v:"v1", n:"Imre vallomása", d:"„Megmondta, hogy elmegy. Megütöttem. Egyszer. Elesett, a rakpart peremén. Nem mozdult többet.”", sup:[["bokszos","I","v1"],["bokszos","A","v1"]]},
 // Bence
 bence_jegyzet:{n:"Bence jegyzetfüzete", d:"Bence asztalán a füzete, benne a 2006-os ügy jegyzetei."},
 bence_terv:{n:"„Vasárnap este a Vasasnál”", d:"Bence jegyzete: „Vasárnap este a Vasasnál találkozom vele. Négyszemközt. Dénest nem akarom belekeverni, a barátja.”"},
 bence_kartya:{v:"v2", n:"Bence igazolványa", d:"Bence rendőrigazolványa a régi bokszterem ringje alatt, egy beszáradt vércsepp mellett.", sup:[["bokszos","A","v2"]]},
 bence_cella:{n:"Bence telefonja", d:"Bence telefonjának utolsó jelzése vasárnap 22:10-kor, Csepel, a Vasas sporttelep cellája."},
 kerti_kulcs:{n:"A kulcsostábla", d:"A bokszterem irodájában a kulcsostáblán egy felirat: „Szikszai – kiskert, Királyerdő, 47-es parcella”."},
 bence_test:{v:"v2", n:"Bence holtteste", d:"Bence a kunyhó betonpadlóján, összekötözött kézzel. A kunyhó ajtaja kívülről lakatolva. A hőség ölte meg."},
 kunyho_lakat:{v:"v2", n:"Lakat kívülről", d:"A kiskerti kunyhó ajtaján kívülről új lakat. Bent víz, élelem, ablak nincs. Harmincnyolc fok kint, ötvenegy bent.", sup:[["bokszos","M","v2"]]},
 bence_tudta:{v:"v2", n:"Bence tudta, ki volt", d:"Bence megtalálta Ildikó utolsó hívását, és vasárnap négyszemközt akart beszélni a szám tulajdonosával.", sup:[["bokszos","I","v2"]]},
 bence_vallomas:{v:"v1", n:"Bence elmondja", d:"„Imre volt. Azt mondta, nem akar bántani, csak időt akar. Hogy előbb neked akarja elmondani, de nem tudja, hogyan.”", sup:[["bokszos","A","v1"]]},
 // következtetések
 gyuru_bokszos:{v:"v1", n:"Imre gyűrűje", d:"Csepeli Vasas, 1998, bajnok. A csapatképen csak egyetlen ember ujján volt ilyen gyűrű, aki ismerte Ildikót.", sup:[["bokszos","A","v1"]], ded:true},
 bokszos_ut:{v:"v1", n:"Egy nehézsúlyú ütése", d:"Ököl erejű ütés a járomcsontra. Egy nehézsúlyú bokszoló egyetlen ütése, aztán egy perem.", sup:[["bokszos","M","v1"]], ded:true},
 hamis_alibi:{v:"v1", n:"Hamis alibi", d:"Te igazoltad Imre alibijét 2006-ban, részegen, és nem emlékszel. Apád tudta. És hallgatott, miattad.", ded:true, f:"tudod_2006"},
 imre_szama:{v:"v1", n:"Ildikó utolsó hívása Imrének", d:"23:41, két perc, Szikszai Imre. Ildikó megmondta neki, hogy vége. Egy órával később megállt az órája.", sup:[["bokszos","A","v1"]], ded:true, f:"bokszos_gyanu"},
 inditek_szakitas:{v:"v1", n:"Aznap éjjel szakított vele", d:"Ildikó azt mondta Majornak, ma este megmondja Imrének. Imre el akarta venni. Huszonegy év óta nem nősült meg.", sup:[["bokszos","I","v1"]], ded:true}
},

ded:[
 {a:"klubgyuru", b:"bajnok1998", g:"gyuru_bokszos", f:"bokszos_gyanu", t:"Csepeli Vasas, 1998, bajnok. A képen öt ember, öt gyűrű. Csak egyikük ismerte Lengyel Ildikót. Gyerekkorod óta ismered."},
 {a:"oklos_ut", b:"bajnok1998", g:"bokszos_ut", t:"Egyetlen ütés a járomcsontra, olyan erős, hogy eltörte. Egy nehézsúlyú bokszoló ütése."},
 {a:"denes_alibi_2006", b:"apa_megjegyzes", g:"hamis_alibi", t:"„Dénes részeg volt. Imre nem. Nem kérdezek tovább.” Apád huszonegy éve tudta, hogy hazudtál, és hallgatott, hogy ne kelljen a fiát kihallgatnia."},
 {a:"denes_alibi_2006", b:"alibi_hamis", g:"hamis_alibi", t:"Egykor bealudtál a pultnál. Imre tizenegykor elment. És másnap aláírtad, hogy egész éjjel együtt voltatok."},
 {a:"utolso_hivas_2006", b:"szam_imre", g:"imre_szama", f:"bokszos_gyanu", t:"06-30-…-4417. Huszonegy éve ugyanaz a szám. Ezen a számon hívod fel, ha nem tudsz hazamenni a Hordóból."},
 {a:"ildiko_szakit", b:"bokszos_ildiko", g:"inditek_szakitas", t:"Imre el akarta venni. Ildikó aznap este akarta megmondani neki, hogy elmegy egy nős főnökhöz. Te ott ültél mellette a Hordóban, részegen."}
],

docs:{
 csontok:{t:"Antropológiai vizsgálat – a mederben talált maradványok", b:"IGAZSÁGÜGYI ORVOSTANI INTÉZET\nVizsgálta: dr. Keleti Mária\n\nAzonosítás (fogazat, korábbi törés): Lengyel Ildikó, szül. 1975, eltűnt 2006. 07. 14.\n[[oklos_ut|A bal járomcsonton ököl erejű, nagy energiájú ütés okozta törés. A koponyaalapon éles peremre zuhanásból eredő törés: ez okozta a halált.]]\nAz elhunyt a halál után került a gépkocsiba.\n\n— K. M.: „Dénes, apád vitte ezt az ügyet. Emlékszem, mennyire nem akarta lezárni. Aztán egyik napról a másikra lezárta.”"},
 akta2006:{t:"BRFK akta, 2006 – Lengyel Ildikó eltűnése", b:"BUDAPESTI RENDŐR-FŐKAPITÁNYSÁG – Életvédelmi osztály\nEltűnés, 2006. 07. 14.\nVezető nyomozó: Mátrai Gyula főhadnagy\n\nAz eltűnt 31 éves, reklámügynökségi asszisztens. Utoljára 22:45-kor látták Csepelen, a Hordó presszó közelében, gépkocsijával.\n\n[[lengyel_feltekeny|Lengyel Tamás (különváltan élő férj): az eltűntet többször megfenyegette, két feljelentés.]] [[lengyel_nincs_alibi|Állítása szerint otthon aludt, tanúja nincs.]] [[lengyel_vontato|Foglalkozása: autómentő-sofőr.]]\n\n[[major_viszony|Major Gábor (munkáltató, nős): az eltűnttel viszonyt folytatott, ezt beismerte.]]\n\nSzikszai Imre (az eltűnt barátja, ökölvívó): [[denes_alibi_2006|alibijét Mátrai Dénes r. járőr igazolta: egész éjjel együtt voltak a Hordó presszóban.]]\n\nAz ügy holttest hiányában felfüggesztve.\n\n[[apa_megjegyzes|A margón, ceruzával, apád írásával: „Dénes részeg volt. Imre nem. Nem kérdezek tovább. – M. Gy.”]]"},
 bence_jegyzet:{t:"Tóth Bence jegyzetfüzete", b:"Spirálfüzet, Bence gondos, kicsit gyerekes kézírása, a margón kérdőjelek.\n\nLengyel Ildikó, 2006. Az Astra a mederben, csütörtök óta nálam.\n\nAz akta: Mátrai Gy. vezette. Lengyel T. gyanús volt.\n[[lengyel_korhaz|Lengyel T. 2006. 07. 14-én 21:30-tól a Szent Lászlóban feküdt, vakbélműtét. Kizárva. (Kértem a kórházi naplót, megvan.)]]\n\nKikértem a 2006-os híváslistát az archívumból:\n[[utolso_hivas_2006|23:41, Lengyel I. utolsó hívása: 06-30-…-4417, 2 perc.]]\nHolnap kikérem a szolgáltatótól, kié a szám.\n\nVasárnap, délután:\nMegvan, kié. Nem akarom elhinni.\n[[bence_terv|Vasárnap este a Vasasnál találkozom vele. Négyszemközt. Dénest nem akarom belekeverni, a barátja.]]\n\nAz utolsó oldalon, aláhúzva: „Lehet, hogy tévedek. Remélem, tévedek.”"},
 szam:{t:"Előfizetői adatok – 06-30-…-4417", b:"SZOLGÁLTATÓI ADATSZOLGÁLTATÁS\nMegkereső: Rácz K. / Halász T. (Tóth B. vasárnapi megkeresése alapján)\n\n[[szam_imre|Előfizető 2003 óta: Szikszai Imre, Csepel, Szent Imre tér 4. A szám ma is aktív.]]\n\nA szolgáltató megjegyzése: ugyanezt az adatot vasárnap 14:20-kor Tóth Bence nyomozó is kikérte."},
 cella:{t:"Cellainformáció – Tóth Bence telefonja", b:"SZOLGÁLTATÓI ADATSZOLGÁLTATÁS\nElőfizető: Tóth Bence\n\n2027. 07. 11. 20:40  Kőbánya (otthon)\n[[bence_cella|2027. 07. 11. 22:10  Csepel, a Vasas sporttelep cellája. Ezt követően a készülék nem jelentkezett be.]]"}
},

locs:{
 korhaz5:{m:"Kórház", n:"Szent János Kórház, traumatológia", x:250, y:220, side:"B", open:[8,20], vis:"anna_met", d:"A kórházban sincs klíma. A folyosón ventilátorok, a betegek az ablakoknál állnak.", hs:[]},
 otthon:{m:"Lakás", n:"Lakás a Körúton", x:612, y:338, side:"P", d:"Harmadik emelet, udvari szoba. Az ablakot hiába nyitod ki, odakint melegebb van. A hűtőben ásványvíz.", hs:[]},
 kapitanysag:{m:"Kapitányság", n:"Főkapitányság", x:705, y:196, side:"P", d:"A klíma elromlott, a folyosón ventilátorok zúgnak. Bence asztala üres, a monitorján egy sárga cetli: „Visszajövök. – B.”", hs:[
   {id:"asztal", l:"Bence asztala", t:"A fiókban Bence spirálfüzete, a borítóján egy matrica: egy rajzfilmes rendőrkutya, amit valaki évekkel ezelőtt viccből ragasztott rá. Benne a 2006-os ügy, gondos, kicsit gyerekes kézírással. Mellette a 2006-os akta fénymásolata.", doc:"bence_jegyzet", ev:"bence_jegyzet", f:"akta_nyitva"},
   {id:"akta", l:"A 2006-os akta", req:["akta_nyitva"], t:"Bence asztalán a 2006-os eltűnési akta fénymásolata, sárga kiemelővel. A vezető nyomozó neve: Mátrai Gyula. Apád. Az utolsó oldalt Bence kétszer is aláhúzta.", doc:"akta2006"}
 ]},
 hordo:{m:"Hordó", n:"Hordó", x:648, y:462, side:"P", open:[15,3], d:"A Hordóban a ventilátor csak a meleget kavarja. Laci a pult mögött, ugyanott, ahol 2006-ban is állt. Bokszos a sarokasztalnál ül, ahol mindig.", hs:[]},
 intezet:{m:"Intézet", n:"Orvostani Intézet", x:792, y:474, side:"P", open:[7,19], d:"A boncterem az egyetlen hűvös hely a városban. Keleti doktornő egy kartondobozban tartja Lengyel Ildikó csontjait, gondosan, mintha aludna.", hs:[]},
 temeto:{m:"Temető", n:"Farkasréti temető", x:150, y:420, side:"B", vis:"apa_halal", open:[7,20], d:"Kiszáradt fű, tücsökciripelés. Apád sírján a virág elhervadt. A fejfán a név, a rendfokozat, az évszámok.", hs:[]},
 meder:{m:"Újpesti-öböl", n:"Autó a mederben, Újpesti-öböl", x:515, y:96, side:"P", crime:1, d:"Az apadó víz mögött kiszáradt iszap, repedezett, mint egy régi festmény. Középen egy rozsdás Opel Astra, a sárga szalag szinte nevetséges a hőségben.", hs:[
   {id:"auto", l:"A vezetőülés", t:"A vezetőülésen egy nő csontjai, a biztonsági öv még becsatolva, mintha valaki gondosan becsatolta volna. A csuklón egy karóra, megállt 0:52-kor.", ev:"ildiko_test", f:"body1"},
   {id:"fek", l:"A kézifék és a váltó", t:"A kézifék kiengedve, a váltó üresben. Ez az autó nem hajtott a vízbe. Ezt az autót betolták.", ev:"kezifek"},
   {id:"labter", l:"Az utasoldali lábtér", t:"Az iszap alatt valami kemény. Egy férfi pecsétgyűrű, nehéz, ezüst: „Csepeli Vasas, 1998, bajnok”. Láttál már ilyet. Nem jut eszedbe, hol.", ev:"klubgyuru"},
   {id:"hatso", l:"A hátsó ülés", t:"Egy női táska, benne egy Nokia, egy rúzs, és egy vízben szétmállott fénykép: két ember egy bokszmeccs lelátóján. Az egyik nő, vörös hajú. A másik arca elmosódott.", ev:"ildiko_taska"}
 ]},
 vasas:{m:"Vasas", n:"Csepeli Vasas, régi bokszterem", x:650, y:648, side:"P", vis:"bence_terv|bence_cella", d:"Bezárt sportcsarnok, a kapu láncon, de a lánc nincs bezárva. Bent izzadtság és por szaga, egy ring, amit húsz éve nem használnak.", hs:[
   {id:"ring", l:"A ring alatt", t:"A ring alatt, a por közt egy rendőrigazolvány. Tóth Bence, nyomozó. Mellette egy beszáradt vércsepp. Bence itt volt vasárnap este. És nem ment el innen magától.", ev:"bence_kartya", f:"bence_itt"},
   {id:"fal", l:"A trófeafal", t:"Bekeretezett fényképek, megsárgult oklevelek. 1998, bajnokcsapat, öt fiatal férfi, mindegyikük ujján ugyanaz a pecsétgyűrű. Középen, a legnagyobb, nehézsúly: Szikszai Imre. Huszonkilenc évvel ezelőtt. Te is ott voltál a lelátón.", ev:"bajnok1998"},
   {id:"iroda", l:"Az iroda", req:["bokszos_gyanu"], t:"Az iroda falán kulcsostábla, kézzel írt címkékkel. Egy szög üres, alatta a felirat: „Szikszai – kiskert, Királyerdő, 47-es parcella”.", ev:"kerti_kulcs", f:"bokszos_kert"}
 ]},
 kert:{la:1, m:"Királyerdő", n:"Királyerdő, kiskert, 47-es parcella", x:560, y:676, side:"P", vis:"bokszos_kert", d:"Kiszáradt kiskertek a csepeli erdő szélén, rozsdás drótkerítés, egy bádogkunyhó, amin vakítóan tűz a nap.", hs:[
   {id:"mentes", l:"Kinyitod a kunyhót", req:["!bence_mentve","!bence_halott"], t:"A lakat nehezen enged. Bent ötven fok, a levegő áll, mint a víz. Bence a betonpadlón fekszik, összekötözött kézzel, a szája kicserepesedett, de a szeme nyitva. Amikor meglát, megpróbál mosolyogni. „Tudtam, hogy jössz” — suttogja. „Imre is tudta.” Vizet adsz neki, lassan, ahogy apád tanította egyszer egy nyári helyszínen.", ev:"bence_vallomas", f:["bence_mentve","bokszos_eltunt"]},
   {id:"halott", l:"A kunyhó", req:["bence_halott"], t:"A kunyhó ajtaja kívülről lakatolva, a lakatot a helyszínelők már levágták. Bent ötvenegy fok. Bence a betonpadlón fekszik, összekötözött kézzel, oldalra fordulva, mintha aludna. A falon egy kréta-felirat, reszkető betűkkel: DÉNES TUDJA. Nem tudod, Imre írta-e, vagy Bence.", ev:["bence_test","kunyho_lakat","bence_tudta"]}
 ]},
 imreanya:{la:1, m:"Szikszai-lakás", n:"Szikszai-lakás, Csepel", x:705, y:612, side:"P", vis:"bokszos_gyanu", d:"Panelház, nyolcadik emelet, lift nélkül. Bokszos anyja nyit ajtót, és amikor meglát, elsírja magát.", hs:[]},
 lengyelhaz:{la:1, m:"Lengyel műhely", n:"Lengyel Tamás műhelye, Kőbánya", x:890, y:412, side:"P", d:"Autóbontó a vasút mellett. Rozsdás roncsok, egy kutya a láncon, és egy ötvenhat éves férfi, aki nem lepődik meg, hogy rendőr jött.", hs:[]},
 major:{m:"Major-villa", n:"Major Gábor villája, Budakeszi", x:120, y:255, side:"B", d:"Medence, akácok, kerti bútor, amin soha nem ül senki. Major Gábor a teraszon vár, mintha húsz éve várna erre.", hs:[]},
 vargahaz:{la:1, m:"Varga háza", n:"Varga Ottó háza, Zugló", x:888, y:246, side:"P", gone:"varga_halott", d:"Zuglói ikerház. Áprilisban nyugdíjba ment, azóta paradicsomot nevel, és minden reggel elolvassa az újságot, az utolsó oldaltól előre.", hs:[]},
 aa:{m:"NA-gyűlés", n:"NA-gyűlés, templomalagsor", x:760, y:296, side:"P", vis:"aa1", open:[18,21], d:"A pince az egyetlen hűvös hely a környéken. Összecsukható székek, filterkávé, a tábla a falon: „Csak a mai nap.”", hs:[]},
 keleti:{m:"Keleti", n:"Keleti pályaudvar", x:820, y:360, side:"P", vis:"lili_elenged", open:[6,12], day:5, d:"A csarnokban harminckét fok, galambok, egy hangosbemondó, akit senki nem ért. A bécsi vonat a 6-os vágányról indul.", hs:[]}
},

people:{
 anna:{n:"Detti", r:"nálad", loc:"otthon", h:[20,24], vis:"anna_egyutt", bio:"Dr. Kerekes Bernadett, traumatológus. Négy hónapja hol nálad, hol nála. A hőségben a konyhakövön ül, mert az az egyetlen hűvös hely a lakásban.", topics:[
  {id:"bence", l:"Bencéről beszélsz neki", dyn:"annaBence"},
  {id:"koltozes", l:"Megkérdezed, beköltözne-e", req:["anna_bence"], excl:"nem", dyn:"annaKoltozes"},
  {id:"beszel", l:"Csak ültök", rep:1, eff:{crave:-15}, t:"A ventilátor zúg. Detti a lábát a kádba lógatja hideg vízzel, te mellette ülsz a kád szélén. „Megtalálod” — mondja. Nem kérdés."}
 ]},
 anna_korhaz:{n:"Dr. Kerekes Bernadett", r:"traumatológus", loc:"korhaz5", h:[8,20], vis:"anna_met", bio:"41 éves traumatológus a Szent Jánosban. Alacsony, sportos, szőke, a haját lófarokban hordja, a csuklóján sportóra, a köpenyén kávéfolt. Úgy beszél a törésekről, mintha időjárás-jelentést olvasna fel, és közben a szeme nevet. Elvált, maratont fut, és azt mondja, rendőrökkel nem randevúzik, mert mind hazudnak.", topics:[
  {id:"hello", l:"Beszélsz vele", req:["!anna_egyutt"], t:"„Mátrai.” Leveszi a maszkot. „Láttam a hírekben a kollégáját. Ha megtalálja, és kiszáradt, ne öntsön bele vizet egyszerre. Lassan. És hívjon engem.” Ír egy számot a kezedre, golyóstollal. Megint.", f:"anna_tanacs"}
 ]},
 szep:{n:"Dr. Szép Viktória", r:"osztályvezető", loc:"kapitanysag", h:[8,20], bio:"44 éves. Májustól ő vezeti az osztályt. Bencét ő vette fel annak idején, és most egész nap a telefonját nézi.", topics:[
  {id:"elig", l:"Eligazítás", t:"„Bence csütörtökön kérte el az Astra-ügyet. Azt mondta, régi ügy, megoldja egyedül.” Leteszi a tollat. „Vasárnap este nyolckor még írt nekem egy e-mailt, hogy hétfőn beszélni akar velem. Nem írta meg, miről.” Rád néz. „Keresse meg, főhadnagy. Utána a csontokat.”", f:"briefed"},
  {id:"bevall", l:"Elmondod neki a 2006-os alibit", req:["hamis_alibi"], sober:1, t:"Hosszan hallgat, miközben beszélsz. Nem jegyzetel. Amikor végzel, lassan bólint. „Huszonegy éves hamis tanúzás, ami elévült.” Leveszi a szemüvegét. „Nem fogom felírni, Mátrai. De maga se felejtse el soha. Bencéért se.”", f:"denes_bevall", pat:-10},
  {id:"statusz", l:"Jelentés az ügyről", rep:1, dyn:"vargaStatus"}
 ]},
 bence:{n:"Tóth Bence", r:"nyomozó", loc:"kapitanysag", h:[7,21], staff:1, gone:"bence_eltunt", bio:"29 éves. Eltűnt.", topics:[{id:"gond", l:"Mit gondolsz?", rep:1, t:"…"}]},
 kata:{n:"Rácz Kata", r:"nyomozó", loc:"kapitanysag", h:[7,21], staff:1, gone:"kata_vad", bio:"36 éves. Bencét ő tanította meg a cellainformációk olvasására. Ma reggel óta nem ült le.", topics:[
  {id:"gond", l:"Mit gondolsz?", rep:1, dyn:"hintKata"}
 ]},
 bodnar:{n:"Bodnár Feri", r:"törzszászlós", loc:"kapitanysag", h:[7,21], staff:1, gone:"bodnar_vad", bio:"58 éves. Nyáron is kabátban jár.", topics:[{id:"gond", l:"Mit gondolsz?", rep:1, t:"„A gyerek? Biztos csajozik valahol. Fiatal.” Nem néz rád."}]},
 halasz:{n:"Halász Tamás", r:"nyomszakértő", loc:"kapitanysag", h:[8,22], staff:1, bio:"41 éves. Bencével minden pénteken sakkoztak a laborban. Ma nem szól az Omega.", topics:[{id:"gond", l:"Mi van a laborban?", rep:1, dyn:"hintHalasz"}]},
 feher:{n:"Dr. Fehér Judit", r:"pszichológus", loc:"kapitanysag", h:[9,17], staff:1, bio:"52 éves. Négy hónapja minden héten megkérdezi, hány napja vagy józan.", topics:[
  {id:"profil", l:"Ki tarthatja fogva Bencét?", req:["bence_itt|bence_terv"], t:"„Aki ezt tette, nem akarja megölni. Ha akarta volna, már megtette volna.” Leveszi a szemüvegét. „Időt akar. Valakinek el kell mondania valamit, és nem tudja, hogyan. Az ilyen ember valahova visz, ami az övé. Egy hely, ahol gyerekkorában biztonságban érezte magát.” Rád néz. „És főhadnagy: ebben a hőségben az ilyen helyeken napok kérdése.”"},
  {id:"jozan", l:"A józanságról", rep:1, dyn:"feherJozan"}
 ]},
 keleti:{n:"Dr. Keleti Mária", r:"igazságügyi orvosszakértő", loc:"intezet", h:[7,19], staff:1, bio:"61 éves. Apád barátja. A 2006-os ügyben ő azonosította volna a holttestet, ha lett volna holttest.", topics:[
  {id:"elozetes", l:"Előzetes vélemény", req:["body1"], t:"„Egy nő, harmincas, huszonegy éve van a vízben.” Rágyújt, pedig az ablak zárva. „Valaki nagyon erősen megütötte, Dénes. Nem kéz volt, ököl. Olyan ütés, amitől egy férfi is elterül.”"},
  {id:"2006", l:"Emlékszel a 2006-os ügyre?", t:"„Apád nem akarta lezárni. Hetekig ült rajta. Aztán egyik napról a másikra lezárta, és soha többé nem beszélt róla.” Kifújja a füstöt. „Azt hittem, valaki nyomást gyakorolt rá. Most már nem tudom.”"}
 ]},
 laci:{n:"Laci", r:"kocsmáros", loc:"hordo", h:[15,3], bio:"A Hordó kocsmárosa. 2006-ban is ő állt a pult mögött. Emlékszik mindenre. Ez a baja.", topics:[
  {id:"bence", l:"Láttad Bencét vasárnap?", t:"„A fiatal kollégádat? Nem. Nem járt itt.” Törölgeti a poharat. „Imre vasárnap nem jött be. Húsz év alatt talán háromszor fordult elő.”", f:"imre_vasarnap"},
  {id:"2006", l:"2006. július 14.", req:["denes_alibi_2006"], sober:1, t:"Leteszi a poharat. Sokáig néz. „Emlékszem. A vb-döntő után volt pár nappal. Te egykor bealudtál a pultnál, én takartalak be. Imre tizenegy után elment, a vörös nő után. Hajnalban jött vissza, csuromvizes cipőben.” Elhallgat. „Másnap azt mondtad a nyomozóknak, hogy egész éjjel együtt voltatok. Én nem szóltam. Apád sem.”", ev:"alibi_hamis"}
 ]},
 bokszos:{n:"Szikszai „Bokszos” Imre", r:"gyerekkori barát", loc:"hordo", h:[19,2], gone:"bokszos_eltunt", bio:"47 éves, volt nehézsúlyú bokszoló, éjszakai portás. Gyerekkorod óta ismered. Ma este a kezét az asztal alatt tartja.", topics:[
  {id:"bence", l:"Bencét keresem", t:"„A gyereket? Bencét?” Iszik. „Nem láttam. Vasárnap… nem, vasárnap nem jöttem be, fájt a fejem.” Felnéz. „Segítek keresni, Dénes. Bármit.” A kezét kiveszi az asztal alól, hogy megfogja a válladat. A bütykei lehorzsolva, frissen.", f:"bokszos_kez"},
  {id:"ildiko", l:"Emlékszel Lengyel Ildikóra?", req:["body1"], t:"Sokáig nem válaszol. A poharát forgatja. „A vörös? Persze.” Halkan. „Jártunk egy darabig. Aztán eltűnt. Huszonegy éve.” Nem néz rád. „Megtalálták, ugye? Hallottam a rádióban. Az öbölben.”"},
  {id:"gyuru", l:"Megkérdezed a gyűrűjéről", req:["klubgyuru"], sober:1, t:"A keze megáll a pohár fölött. „Elvesztettem. Régen.” Megdörzsöli a csupasz ujját, ahol a bőr ma is világosabb. „Miért kérdezed?” Most először látod rajta, hogy fél. Tőled."},
  {id:"regi", l:"Csak ültök", rep:1, dyn:"bokszosC5"}
 ]},
 bokszos2:{n:"Szikszai „Bokszos” Imre", r:"gyerekkori barát", loc:"kert", h:[0,24], vis:"bokszos_eltunt", gone:"bokszos_vad", bio:"47 éves. A kunyhó előtt ül egy sörösládán, a napon. Három napja nem aludt. Amikor meglát, nem menekül.", topics:[
  {id:"miert", l:"Miért, Imre?", sober:1, t:"„Megmondta, hogy elmegy. A főnökéhez. Hogy vége.” A kezét nézi. „Megütöttem. Egyszer, Dénes. Egyetlenegyszer életemben ütöttem meg nőt. Elesett, a rakpart peremén, és nem mozdult többet.” Felnéz. „Betettem a kocsijába, és betoltam a vízbe. Aztán visszamentem a Hordóba, és te ott aludtál a pultnál.”", ev:"bokszos_vallomas"},
  {id:"bence", l:"És Bence?", t:"„Nem akartam bántani. Vasárnap odajött a Vasashoz, egyedül, és azt mondta, tudja. Megijedtem. Leütöttem.” Megrázza a fejét. „Időt akartam. Hogy előbb neked mondjam el. Hogy te hallja tőlem, ne egy aktából. De nem tudtam, hogyan.”"},
  {id:"alibi", l:"A 2006-os alibi", req:["denes_alibi_2006"], t:"Hosszan néz. „Te adtad, Dénes. Másnap reggel megkérdeztem, emlékszel-e, hogy egész éjjel együtt voltunk. Azt mondtad, persze. Nem emlékeztél semmire.” Halkan nevet. „Te soha nem emlékszel semmire. Ezért voltál a legjobb barátom.”"}
 ]},
 imreanya:{n:"Szikszai Imréné", r:"Imre anyja", loc:"imreanya", h:[7,21], bio:"78 éves, egyedül él a nyolcadikon. Gyerekkorodban zsíros kenyeret adott neked, amikor apád késő estig dolgozott.", topics:[
  {id:"imre", l:"Hol van Imre?", t:"„Két napja nem alszik itthon. A kiskertbe jár, az apja régi kertjébe, a Királyerdőbe. Vizet visz, sok vizet.” Elhallgat. „Mit csinált, Dénes?”", f:"bokszos_kert"},
  {id:"ildiko", l:"Lengyel Ildikóról", t:"„A vörös lány? Imre el akarta venni. Gyűrűt is vett neki, a fizetéséből.” Megtörli a szemét. „Aztán a lány eltűnt, és Imre azóta egyedül él. Huszonegy éve.”", ev:"bokszos_ildiko"}
 ]},
 lengyel:{n:"Lengyel Tamás", r:"Ildikó volt férje", loc:"lengyelhaz", h:[7,19], suspect:1, bio:"56 éves, autóbontó. 2006-ban ő volt a fő gyanúsított. Azóta nem iszik, és ezt minden második mondatában elmondja.", topics:[
  {id:"ildiko", l:"Ildikóról", t:"„Megtalálták. Hallottam.” Leül egy roncs motorháztetejére. „Rossz férj voltam. Ittam, ordítottam. Fenyegettem is. Kétszer feljelentett.” Felnéz. „De nem öltem meg. Huszonegy évig mindenki azt hitte, én voltam.”", f:"met_lengyel"},
  {id:"hol", l:"Hol volt aznap éjjel?", sober:1, t:"„Kórházban, főhadnagy. Kilenckor rosszul lettem, vakbél. A Szent Lászlóban műtöttek éjfélkor.” Kesernyésen elmosolyodik. „Akkor senki nem nézte meg. Maga megnézi?”"}
 ]},
 major:{n:"Major Gábor", r:"Ildikó egykori főnöke", loc:"major", h:[9,20], suspect:1, bio:"70 éves, nyugdíjas reklámügynökségi tulajdonos. Ősz, barna, tenisz és fehérbor. Húsz éve várja, hogy valaki megkérdezze.", topics:[
  {id:"viszony", l:"Ildikóról", t:"„Viszonyunk volt. A feleségem tudta. Mindenki tudta.” A medencét nézi. „Azt hittem, én vagyok a nagy szerelme. Aztán eltűnt.”", f:"met_major"},
  {id:"este", l:"Aznap este", sober:1, t:"„Fél tizenegykor felhívtam. Azt mondta: »Ma este megmondom Imrének, hogy vége. Utána hozzád jövök.«” Elcsuklik a hangja. „Nem jött. Huszonegy évig azt hittem, meggondolta magát.”", ev:["ildiko_szakit","major_hivas"]}
 ]},
 varga:{n:"Varga Ottó", r:"nyugalmazott alezredes", loc:"vargahaz", h:[8,21], gone:"varga_halott", bio:"56 éves, áprilistól nyugdíjas. Barnára sült, paradicsomot nevel, és most először látod úgy, hogy nem fáradt.", topics:[
  {id:"2006", l:"A 2006-os ügyről", t:"„Apád ügye volt. Én akkor kezdő voltam mellette.” Leteszi a metszőollót. „Egy reggel bejött, és lezárta. Azt mondta: nincs holttest, nincs ügy. Megkérdeztem, miért. Azt mondta: »Mert a fiam a tanú, Ottó.«” Rád néz. „Nem értettem. Most már érted, ugye?”"},
  {id:"bence", l:"Bencéről", t:"„A gyerek mindig olyan akart lenni, mint te.” Elhallgat. „Ne hagyd, hogy azzá váljon, amivé te.”"}
 ]},
 sanyi:{n:"Sanyi", r:"NA-gyűlés, szponzor", loc:"aa", h:[18,21], bio:"68 éves, huszonkét éve józan. Lassan beszél.", topics:[
  {id:"ul", l:"Leülsz a körbe", rep:1, mins:90, eff:{crave:-40}, dyn:"sanyiC5"}
 ]},
 lili:{n:"Mátrai Lili", r:"a lányod", loc:"otthon", h:[18,23], vis:"lili_marad", bio:"17 éves. Áprilistól nálad lakik. Esténként zongorázik, és ha rossz napod volt, hangosabban.", topics:[
  {id:"este", l:"Leülsz mellé", rep:1, dyn:"liliOtthon"}
 ]},
 apasir:{n:"Mátrai Gyula sírja", r:"apád", loc:"temeto", h:[7,20], vis:"apa_halal", bio:"Mátrai Gyula r. főhadnagy, 1952–2027.", topics:[
  {id:"beszel", l:"Beszélsz hozzá", rep:1, eff:{crave:-15}, t:"Leguggolsz a fejfa mellé. „Tudtad, apa. Huszonegy évig tudtad.” A tücskök ciripelnek. Arra gondolsz, hogy ő is itt guggolt volna, ha fordítva történik, és ugyanígy nem tudott volna mit mondani."}
 ]}
},

tasks:[
 {id:"csontok", l:"A maradványok vizsgálata", req:["body1"], dur:300, fit:{keleti:1}, doc:"csontok", ok:"Keleti végzett a maradványokkal."},
 {id:"cella", l:"Bence telefonjának cellainformációja", req:["bence_eltunt"], dur:240, fit:{kata:.92, halasz:.75, bodnar:.6}, doc:"cella", ok:"Megjött Bence cellainformációja.", fail:"A szolgáltató ügyelete csak holnap válaszol."},
 {id:"szam", l:"A 2006-os szám tulajdonosa", req:["utolso_hivas_2006"], dur:180, fit:{kata:.92, halasz:.8, bodnar:.7}, doc:"szam", ok:"Megvan, kié a szám.", fail:"A szolgáltató archívuma nem válaszol. Újra kell kérni."}
],

leads:[
 {need:["bence_sms"], not:["bence_jegyzet"], x:"Bence a saját asztalánál dolgozott az ügyön. Nézd meg, mit hagyott ott (Kapitányság)."},
 {need:["bence_eltunt"], not:["doc:cella"], x:"Hol járt Bence telefonja vasárnap este? Kata vagy Halász kikérheti (Stáb)."},
 {need:["body1"], not:["doc:csontok"], x:"A maradványokat Keleti vizsgálhatja meg (Stáb)."},
 {need:["utolso_hivas_2006"], not:["szam_imre"], x:"Bence vasárnap kiderítette, kié a 2006-os szám. Kérd ki újra (Stáb)."},
 {need:["bence_terv|bence_cella"], not:["bence_kartya"], x:"Bence vasárnap este a Vasasnál találkozott valakivel. Nézd meg a régi boksztermet Csepelen."},
 {need:["bokszos_gyanu"], not:["bokszos_kert","bence_mentve","bence_halott"], x:"Hova vinne valaki egy embert, ahol senki nem keresi? A Vasas irodájában, vagy Imre anyjánál talán tudják."},
 {need:["bokszos_kert"], not:["bence_mentve","bence_halott"], x:"Királyerdő, 47-es parcella. Siess. Harmincnyolc fok van."},
 {need:["denes_alibi_2006"], not:["alibi_hamis"], x:"2006-ban te igazoltad Imre alibijét. Laci ott volt aznap éjjel a Hordóban. Ő emlékszik."},
 {need:["met_lengyel"], not:["lengyel_korhaz"], x:"Lengyel szerint kórházban volt. Bence ezt már ellenőrizte: nézd meg a jegyzeteit."},
 {need:["met_major"], not:["ildiko_szakit"], x:"Major Gábor húsz éve vár arra, hogy valaki megkérdezze, mit mondott neki Ildikó aznap este."},
 {need:["hamis_alibi"], not:["denes_bevall"], x:"Huszonegy éve hamis alibit adtál. Ezt valakinek el kell mondanod."}
],

timed:[
 {id:"hirlap1", at:480, front:{h:"Apadás: autó a mederben",s:"Huszonegy éve eltűnt nő maradványait találták meg az Újpesti-öbölben",b:"A rendkívüli aszály miatt rekordalacsony Duna egy 2006-ban eltűnt Opel Astrát hozott felszínre. Lapunk értesülése szerint a gépkocsiban Lengyel Ildikó, egy 2006 júliusában nyomtalanul eltűnt csepeli nő maradványai voltak. Az ügyet akkor holttest hiányában felfüggesztették."}},
 {id:"hirlap2", at:1440+420, front:{h:"Eltűnt egy fiatal nyomozó",s:"Tóth Bence vasárnap este óta nem adott életjelet",b:"A rendőrség nagy erőkkel keresi a 29 éves nyomozót, aki az Újpesti-öbölben talált autó ügyén dolgozott. Dr. Szép Viktória osztályvezető: „Minden emberünk őt keresi.”"}},
 {id:"eltunik", at:2*1440+360, unless:"bence_mentve", f:"bokszos_eltunt", x:"<b>Laci, SMS:</b> Imre tegnap este nem jött be. Ma reggel az anyja hívott, hogy nem aludt otthon. Szólok, hátha."},
 {id:"hoseg", at:2*1440+720, unless:"bence_mentve", x:"<b>Rádió:</b> Harmadfokú hőségriasztás. Ma 39 fokot mérnek, éjjel sem lesz 25 fok alatt."},
 {id:"halal", at:3*1440+720, unless:"bence_mentve", f:["bence_halott","bokszos_kert","bokszos_eltunt"], ev:["bence_test","kunyho_lakat"], modal:"<h2>Csütörtök, 12:00 – telefon</h2><p>Kata hangja. Először nem mond semmit, csak lélegzik. „Királyerdő. Egy kiskert, egy kunyhó. A kutyák találták meg.” Szünet. „Késő, Dénes. Reggel még élt. Azt mondják, reggel még élt.”</p><p>Leteszed a telefont. A hűtő zúg. A hűtőben nincs pálinka. Leülsz a konyha kövére, és vársz, hogy elmúljon. Nem múlik el.</p>"},
 {id:"nora", at:1440+1260, req:["nora_help"], modal:"<h2>Kedd, 21:00 – telefon, Szeged</h2><p>Nóra: „Láttam a hírekben a gyereket. A kollégádat.” Csend. „Megtalálod. Te mindig megtalálod őket. Csak néha későn.” Aztán: „Ma reggel a pékségben azt mondta egy vevő, hogy olyan vagyok, mint egy anyuka. Képzeld.”</p>"},
 {id:"becs", at:5*1440+360, req:["lili_elenged"], x:"<b>SMS, Lili:</b> Ma este 7-kor a záróhangverseny. Tudom, hogy nem tudsz jönni. De ha mégis: a vonat 9:40-kor indul a Keletiből."},
 {id:"vege", at:6*1440+1200, unless:"verd_all", pat:-500, modal:"<h2>Vasárnap, 20:00</h2><p>Az ügyet a sajtó nyomására átveszi egy másik csoport. Téged hazaküldenek. „Pihenjen, főhadnagy” — mondja Szép Viktória, és nem néz a szemedbe.</p>"}
],

actions:{
 vonat:{loc:"keleti", l:"Vonat Bécsbe Lili záróhangversenyére (oda-vissza, 13 óra)", req:["lili_elenged"], cost:12000, mins:780, f:"lili_becs", once:1, x:"Bécs. A Konzerthaus kistermében a harmadik sorban ülsz. Lili a második darab előtt megkeresi a szemével a nézőteret. Megtalál. Hajnalban, a hazafelé tartó vonaton, az ablaknak dőlve alszol, és most először hónapok óta nem álmodsz semmit."}
},

locEvents:[
 {id:"kunyho_figy", loc:"kert", when:S=>!S.f.bence_mentve&&!S.f.bence_halott, f:"bokszos_eltunt", html:"<h2>A kunyhó</h2><p>A kiskert végében bádogkunyhó, az ajtaján új lakat. A kunyhó előtt egy sörösládán Bokszos ül, a napon, egy ötliteres vizesflakonnal a lába mellett.</p><p>Amikor meglát, feláll. Nem menekül. A zsebéből kivesz egy kulcsot, és odadobja neked.</p>"},
 {id:"drunk", loc:"kapitanysag", when:(S,h,A)=>A.inWin(h,[8,19])&&S.alc>55, pat:-15, html:"<h2>Megszagolnak</h2><p>Szép Viktória megáll melletted. „Ma? Pont ma, Mátrai?” Továbbmegy.</p>"}
],

dyn:{
  annaBence(S){
    S.f.anna_bence=S.t;
    if(S.f.bence_halott)return'Detti nem mond semmit. Leül melléd a konyhakőre, és a vállát a válladnak dönti. Órákig így ültök. Egyszer azt mondja: „Nem a te hibád.” Nem hiszed el. Ő tudja, hogy nem hiszed el, és mégis elmondja még egyszer.';
    return'Elmondod. Bencét, a sárga cetlit, Imrét. Detti hallgat, aztán azt mondja: „Ha megtalálod, és ki van száradva, ne itasd meg egyszerre. Lassan, kortyonként. És hívj engem, bármikor.” Felírja a mobilszámát a kezedre, golyóstollal, pedig tudod.';
  },
  annaKoltozes(S){
    if((S.drinks||0)>0){S.f.anna_varunk=S.t;return'Sokáig néz. „Ma ittál.” Nem kérdés. „Kérdezd meg újra, amikor egy egész hónapja nem.” Megcsókol. „Nem megyek sehova. De beköltözni sem.”'}
    S.f.anna_koltozik=S.t;return'Detti sokáig nem válaszol. Aztán: „A macskám utálni fogja a lépcsőt.” Ez igen. Mindketten tudjátok.';
  },
  hintKata(S){
    if(!S.docs.cella)return'„Bence telefonja. Kikérem a celláját, most. Ő tanította nekem, hogyan kell gyorsan.” Megáll. „Nem. Én tanítottam neki.”';
    if(S.ev.utolso_hivas_2006&&!S.ev.szam_imre)return'„A 2006-os szám. Bence vasárnap kikérte. Kikérem újra.”';
    if(S.f.bokszos_gyanu&&!S.f.bokszos_kert)return'„Bokszos?” Rád néz. „A barátod. Dénes… hova szokott menni, ha egyedül akar lenni?”';
    return'„Megtaláljuk. Muszáj.”';
  },
  hintHalasz(S){
    if(S.ev.klubgyuru&&!S.ev.bajnok1998)return'„Egy klubgyűrű 1998-ból. A Csepeli Vasasnak volt egy bajnokcsapata. A teremben biztos kint van a fotó.”';
    return'„Bence pénteken mattot adott nekem. Először.” Nem néz fel a mikroszkópból.';
  },
  feherJozan(S){
    const d=(S.drinks||0);
    if(S.f.aa_beszed&&d===0)return'„Hány napja?” Százhuszonkettő. „És ma?” Ma különösen nehéz. Bólint. „Akkor ma különösen ne. Holnap ráér holnap.”';
    if(d>0)return'Ránéz a kezedre. „Ittál.” Nem kérdés. „Bencéért teszed, vagy magadért?” Nem tudsz válaszolni.';
    return'„Hogy bírja, főhadnagy?” Nehezen. „Az jó. Akkor még érzi.”';
  },
  bokszosC5(S){
    const A=['Ültök egymás mellett. A ventilátor kavarja a meleget. Bokszos egyszer megszólal: „Emlékszel, amikor apád elkapott minket a Népligetben?” Aztán elhallgat, mintha most jutna eszébe, hogy apád már nem él.',
      '„Te tényleg nem iszol?” Kólát kérsz. Ő is. Huszonöt év alatt egyszer sem láttad kólát inni.',
      'Bokszos a pohárba néz. „Mit csinálnál, ha a legjobb barátod valami szörnyűt tett volna, réges-régen?” Mielőtt válaszolhatnál, feláll, és kimegy cigizni. Nem jön vissza.'];
    S.f.bc=(S.f.bc||0)+1;return A[(S.f.bc-1)%A.length];
  },
  sanyiC5(S){
    if(S.f.bence_halott)return'Ülsz a körben. Valaki egy halott testvérről beszél. Te nem beszélsz. Sanyi a végén nem mond semmit, csak melléd ül, és fél órán át ott marad. Ez az este nem iszol. Csak ez az este.';
    return'Ülsz a körben. Valaki egy elveszített munkáról beszél, valaki egy lányról. Te elmondod, hogy egy kollégád eltűnt, és hogy a legjobb barátod talán hazudott neked húsz évig. Sanyi a végén azt mondja: „A hazugságot nem te találtad ki, testvér. Csak elhitted. Az más.”';
  },
  liliOtthon(S){
    const A=['Lili Chopint játszik, aztán abbahagyja. „Megtalálod Bencét?” Igen. Nem tudod, igaz-e. Ő is tudja, hogy nem tudod.',
      'Lili teát főz, ránéz az órára. „Ma is későn jöttél.” Nem szemrehányás. „Hagytam vacsorát.” Hagyott.',
      '„Nagyapa mindig azt mondta, hogy a jó rendőr az, aki emlékszik.” Lili lapoz a kottában. „Te emlékszel?” Most kezdesz.'];
    S.f.lo=(S.f.lo||0)+1;S.crave=Math.max(0,S.crave-10);return A[(S.f.lo-1)%A.length];
  }
},
rejectExtra:{},
bonus:function(S){const b=[];if(S.f.bence_mentve)b.push([10,'Bence él']);if(S.f.bence_halott)b.push([-20,'Bence meghalt']);if(S.f.denes_bevall)b.push([5,'Bevallottad a 2006-os alibit']);if((S.drinks||0)===0)b.push([5,'Egy kortyot sem ittál']);return b},
solveGoal:["gyuru_bokszos","bokszos_ut","imre_szama","alibi_hamis","inditek_szakitas"],

end:{
 title:function(S){const ok=S.verd.v1&&S.verd.v1.ok;return ok?(S.f.bence_mentve?"Ügy lezárva":"Ügy lezárva – de túl későn"):"Ügy lezárva – de nem úgy"},
 multi:function(S){
  const V=S.verd,ok=v=>V[v]&&V[v].ok;let t="";
  if(S.f.bence_mentve)t+="<p>Bencét kiszáradva, félájultan hozod ki a kunyhóból. A mentőben a kezedet szorítja, és azt mondja: „Ne haragudj, hogy nélküled kezdtem.” Azt mondod neki, hogy legközelebb ne. Tudod, hogy legközelebb is így lesz. Pont ezért lesz jó rendőr.</p>";
  else if(S.f.bence_halott)t+="<p>Tóth Bencét kedden temetik, Kőbányán. Szép Viktória beszél, és egyszer elcsuklik a hangja. Halász sakk-készletet tesz a koporsóra. Te a sor végén állsz, és arra gondolsz, hogy vasárnap este aludtál, amikor Bence írt neked.</p>";
  if(ok("v1")){
    t+="<p>Szikszai Imre a kihallgatóban mindent elmond, és a végén megkérdezi: „Bejössz hozzám, Dénes? Néha?” Nem tudod, mit válaszolj. Bólintasz.</p><p>Lengyel Ildikót huszonegy év után eltemetik. Lengyel Tamás eljön, és a sír mellett áll, egyedül. Huszonegy évig mindenki őt hitte gyilkosnak.</p>";
  }else if(V.v1){
    t+="<p>Az ügyészség vádat emel, a tárgyaláson a vádat ejtik. Lengyel Ildikó aktája visszakerül a polcra. Bokszos még egy évig ül a Hordóban a sarokasztalnál, aztán egy nap nem jön be többet.</p>";
  }
  if(S.f.bence_halott&&!ok("v2")&&!ok("v1"))t+="<p>Bence gyilkosa szabadon jár. Tudod, ki az. Nem tudod bizonyítani.</p>";
  if(S.f.denes_bevall)t+="<p>Szép Viktória nem írta fel, amit mondtál. Te igen. Egy lapra, kézzel, ahogy apád szokta: „2006. július 14. Hamisan tanúskodtam. Nem emlékeztem. Ez nem mentség.” Beteszed apád régi jegyzetfüzetébe.</p>";
  else if(S.ev.hamis_alibi)t+="<p>A 2006-os alibiről senkinek nem beszélsz. Apád huszonegy évig hallgatott miattad. Most te hallgatsz miatta. Nem tudod eldönteni, melyik a rosszabb.</p>";
  if(S.f.lili_becs)t+="<p>Lili a koncert után a művészbejárónál vár. „Eljöttél.” Ezúttal nem kérdés, és nem csodálkozás. Csak megállapítás.</p>";
  else if(S.f.lili_marad)t+="<p>Este Lili zongorázik, te a konyhában ülsz, és hallgatod. Egyszer abbahagyja, kijön, és szó nélkül megölel. Aztán visszamegy játszani.</p>";
  if((S.drinks||0)===0)t+="<p>Százhuszonöt napja nem ittál. Ma este is a gyűlésre mész. Nem Bencéért, nem Imréért, nem apádért. Magadért. Csak a mai nap.</p>";
  else t+="<p>Ma este a Hordóban ülsz. A sarokasztal üres. Laci tölt, és nem kérdez. Te sem.</p>";
  if(S.f.anna_egyutt&&S.f.bence_mentve)t+="<p>A sürgősségin Detti vár, kesztyűben. Ő látja el Bencét, és ő mondja meg neked éjjel kettőkor a folyosón: „Kiszáradás, agyrázkódás, egy bordája repedt. Élni fog.” Aztán leül melléd a műanyag székre, és a fejét a válladra hajtja.</p>";
  else if(S.f.anna_tanacs&&S.f.bence_mentve)t+="<p>Ahogy Detti mondta: lassan, kortyonként. Bence a mentőben azt kérdezi, ki tanította ezt. Elmondod. „Hívd fel” — mondja Bence. Felhívod.</p>";
  if(S.f.anna_koltozik)t+="<p>Augusztusban Detti beköltözik, egy macskával és két doboz orvosi könyvvel. A macska utálja a lépcsőt. Lili szerint "+(S.f.lili_marad?"jó, hogy végre valaki rendet rak a konyhában":"jó, hogy végre van valaki, aki felhív, ha nem eszel")+".</p>";
  else if(S.f.anna_varunk)t+="<p>Detti nem költözik be. Még nem. Minden este felhív, hogy hány napja. Egyszer majd igent mond. Ezen múlik.</p>";
  return t;
 },
 fired:"<p>Az ügyet más viszi tovább. Téged szabadságra küldenek, „pihenni”.</p><p>Otthon ülsz, a ventilátor kavarja a meleget. A telefonodon még mindig ott Bence vasárnapi üzenete. Nem törlöd ki.</p>"
}
};
