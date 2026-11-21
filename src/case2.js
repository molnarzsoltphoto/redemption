// ===== 2. ÜGY: FEHÉR HIDAK =====
CASES.c2 = {
id:"c2", num:"2. ügy ·", title:"Fehér hidak", tagline:"December. Egy bíró a híd lábánál, a hóban. És a hó nem áll el.",
date:[2026,11,7], par:5, snow:true,
order:["levai","gazsi","rajna","halmos"],
start:{t:340, loc:"otthon"},
intro:function(S,A){
  const p=S.prev||{},c1=p.c1;
  let t="<p>Hétfő, december 7., 05:40. Két hete esik a hó, és a város alatta szürke, mint egy régi fénykép.</p>";
  t+=c1?(c1.res==='win'?"<p>A Révész-ügy óta nem ittál kevesebbet, de jobban alszol. Vámos Gergő a vizsgálati fogságban egyetlen levelet írt: neked. Nem bontottad fel.</p>":"<p>A Révész-ügy óta Varga nem néz a szemedbe. Te sem a tükörbe.</p>"):"<p>Három hete zártad le a Révész-ügyet. Vámos Gergő a vizsgálati fogságban egyetlen levelet írt: neked. Nem bontottad fel.</p>";
  t+="<p>A telefon. Varga: „Vámház-híd, pesti hídfő. Szalai Endre, a nyugalmazott bíró. Rablásnak néz ki.” Szünet. „Szalai ítélt el annak idején fél Csepelt, Dénes. Ez nem rablás lesz.”</p>";
  if(S.f.koncert&&!S.f.koncert_reszeg)t+="<p>A hűtőn Lili koncertjének műsorfüzete, mágnessel. Te tetted oda.</p>";
  return t;
},

suspects:{
 levai:{name:"Dr. Lévai Márk", short:"Lévai", reveal:["met_levai","orokseg"]},
 gazsi:{name:"Horváth „Gazsi” Gáspár", short:"Gazsi", reveal:["met_gazsi","kitti_tartozas","gazsi_lepcsohaz"]},
 rajna:{name:"Rajna Ádám", short:"Rajna", reveal:["rajna_nev"]},
 halmos:{name:"Halmos Péter", short:"Halmos", reveal:["belso_ember","halmos_konyanal","kata_titok"]}
},
victims:[
 {id:"v1", n:"Szalai Endre", s:"Szalai", d:"nyug. bíró · Vámház-híd, vasárnap éjjel"},
 {id:"v2", n:"Vass Kitti", s:"Vass", d:"24 éves · József utca, kedd éjjel", known:"v2_found"},
 {id:"v3", n:"Kónya Attila", s:"Kónya", d:"főtörzszászlós · Újpest, szerda éjjel", known:"v3_found"},
 {id:"v4", n:"Varga Ottó", s:"Varga", d:"alezredes · Zugló, péntek éjjel", known:"v4_found"}
],
solution:{v1:"rajna", v2:"rajna", v3:"halmos", v4:"rajna"},
over:function(S){return["v1","v2","v3"].every(v=>S.verd[v])&&(S.f.v4_found?!!S.verd.v4:!!(S.f.rajna_elfogva||S.f.varga_vedve||S.fired['tm:v4']))},
onVerdict:function(S,s,vids){if(s==="rajna")S.f.rajna_elfogva=S.t;if(s==="halmos")S.f.halmos_vad=S.t;if(s==="gazsi")S.f.gazsi_vad=S.t;if(s==="levai")S.f.levai_vad=S.t},
bossLine:"„Ne magyarázz. Hozz neveket és bizonyítékot, vagy holnaptól a rakparti forgalmat irányítod.”",

// ---- BIZONYÍTÉKOK ----  sup: [gyanúsított, I/A/M, áldozat vagy *]
ev:{
 // 1. áldozat
 szalai_test:{v:"v1", n:"Szalai holtteste", d:"A hídfő lépcsője alatt, arccal a havas kövön. Tarkóján tompa ütés. Pénztárca, óra hiányzik."},
 kifordit:{v:"v1", n:"Kifordított zsebek", d:"Mintha valaki nagyon akarta volna, hogy rablásnak látsszon. A drága jegygyűrű viszont rajta maradt."},
 kereknyom:{v:"v1", n:"Kerékpárnyom a hóban", d:"Vékony gumi nyoma a rakparti járdán, a lépcsőtől dél felé, Csepel irányába."},
 villamosjegy:{v:"v1", n:"Villamosjegy, 21:40", d:"Szalai villamossal jött a belvárosba. Találkozója volt valakivel."},
 naptar:{v:"v1", n:"Bejegyzés a naptárban", d:"Szalai falinaptárában vasárnapra: „22:30 – V.H. – Á.”"},
 itelet_boritek:{v:"v1", n:"Névtelen boríték", d:"Feladó nélküli boríték Szalai asztalán, benne egy 2019-es ítélet másolata: Rajna Tamás, emberölés, 14 év. Piros tollal ráírva: EMLÉKSZIK?"},
 halalido1:{v:"v1", n:"Szalai halálának ideje", d:"Vasárnap 22:00 és 23:30 között."},
 kalapacs_seb:{v:"v1", n:"Kerek, tompa ütés", d:"A tarkón kerek felületű, nehéz tárgy nyoma. Valószínűleg kalapács."},
 feher_kotozo1:{v:"v1", n:"Fehér kötöző a gyűrűsujjon", d:"Szalai bal gyűrűsujján, a jegygyűrű alatt fehér műanyag gyorskötöző, szorosan meghúzva."},
 orokseg:{v:"v1", n:"Az örökség", d:"Szalai halálával a villa és 140 millió forint a lányára, vagyis Lévai feleségére száll. Lévai súlyos adósságban van.", sup:[["levai","I","v1"]]},
 levai_auto:{v:"v1", n:"Lévai Audija a hídnál", d:"22:50 és 23:40 között Lévai fekete Audija a hídfőnél parkolt.", sup:[["levai","A","v1"]]},
 levai_kotozo:{v:"v1", n:"Fehér kötözők a garázsban", d:"Lévai a villa padlását újítja fel. A garázsban egy zacskó fehér gyorskötöző.", sup:[["levai","M","v1"]]},
 kerekparos:{v:"v1", n:"Lévai a kerékpárosról", d:"Lévai látott egy férfit 23 óra előtt, aki a hídfő lépcsőjén tolta fel a kerékpárját. Munkáskabát, fényvisszaverő csík."},
 kerekpar_kamera:{v:"v1", n:"Kerékpáros a kamerán", d:"22:41-kor kerékpáros érkezik a lépcsőhöz, munkáskabátban, fényvisszaverő csíkkal. 22:58-kor elhajt dél felé."},
 levai_tisztazva:{v:"v1", n:"Lévai igazolt találkozója", d:"Lévai 22:50-kor érkezett, és az uzsorásával találkozott a pillérek alatt. A lépcsőhöz nem ment, a találkozót két tanú igazolja.", clears:["levai","*"]},
 kalapacs:{v:"v1", n:"A lemosott kalapács", d:"Rajna műhelyében a szerszámfalon egy kalapács helye üres. A kalapácsot a kukában találod, gondosan lemosva."},
 kalapacs_dns:{v:"v1", n:"Szalai vére a kalapácson", d:"A kalapács nyelének repedésében Szalai Endre vére.", sup:[["rajna","M","v1"]]},
 // 2. áldozat
 kitti_test:{v:"v2", n:"Vass Kitti holtteste", d:"Az ágyon, félig felöltözve, a karjában fecskendő. A szobában rend van, túl nagy rend egy ilyen lakáshoz."},
 idezes_2019:{v:"v2", n:"Tanúidézés, 2019", d:"A tükör mögé dugva: 2019-es idézés tanúként, Fővárosi Törvényszék, B.18.451/2019."},
 villanyszerelo:{v:"v2", n:"A villanyszerelő", d:"Kedden este hétkor egy kerékpáros villanyszerelő járt Kitti ajtajánál, a villanyóra miatt. Tizenegy körül a szomszéd újra hallotta a kerékpárt a lépcsőházban."},
 ket_bogre:{v:"v2", n:"Két bögre", d:"Két bögre a mosogatóban, az egyikben tea maradéka. Kittinek vendége volt, akit ismert, vagy akiben megbízott."},
 kitti_tiszta:{v:"v2", n:"Kitti egy éve tiszta volt", d:"A barátnője szerint Kitti egy éve nem nyúlt semmihez. Hetente járt a drogambulanciára."},
 kitti_tartozas:{v:"v2", n:"Kitti tartozása", d:"Kitti háromszázezer forinttal tartozott Gazsinak.", sup:[["gazsi","I","v2"]]},
 gazsi_lepcsohaz:{v:"v2", n:"Gazsi a lépcsőházban", d:"Kedden este fél tíz körül Gazsi Kitti ajtaján dörömbölt, és azt ordította, hogy „holnap már késő lesz”.", sup:[["gazsi","A","v2"]]},
 halalido2:{v:"v2", n:"Kitti halálának ideje", d:"Kedd 23:00 és szerda 01:00 között."},
 kenyszer_injekcio:{v:"v2", n:"A szúrás helye", d:"A szúrás a jobb könyökhajlatban van, Kitti viszont jobbkezes. Magának nem így adta volna be. A felkarján ujjnyomnyi zúzódások."},
 feher_kotozo2:{v:"v2", n:"Fehér kötöző a gyűrűk alatt", d:"Kitti bal gyűrűsujján, három olcsó gyűrű alatt fehér gyorskötöző."},
 heroin_gazsi:{v:"v2", n:"A heroin Gazsi tételéből", d:"Az anyag összetétele egyezik a Gazsi emberei által árult utcai tétellel.", sup:[["gazsi","M","v2"]]},
 gazsi_alibi:{v:"v2", n:"Gazsi alibije", d:"Gazsi kedden fél tíz után a Hordóban ült a nyerőgépnél, egészen zárásig. Laci és három törzsvendég látta.", clears:["gazsi","v2"]},
 kitti_konya:{v:"v2", n:"A zsaru, aki fizetett", d:"Kitti 2019-ben pénzt kapott egy rendőrtől, hogy felismerjen valakit a bíróságon. Azt mondta, Kónyának hívták."},
 // 1–2. összekötő és Rajna
 rajna_lista:{n:"A 2019-es per szereplői", d:"Bíró: Szalai Endre. Koronatanú: Vass Kitti. Nyomozó: Kónya Attila. A nyomozást vezette: Varga Ottó.", sup:[["rajna","I","*"]]},
 rajna_testver:{n:"Rajna Tamás halála", d:"Rajna Tamás 2023-ban a börtönben öngyilkos lett. Egyetlen hozzátartozója az öccse, Rajna Ádám.", sup:[["rajna","I","*"]]},
 borton_level:{n:"„Ádám, ne tedd”", d:"Tamás utolsó levele az öccsének: „Ádám, ne tedd. Nem érdemes. Én már nem vagyok.”", sup:[["rajna","I","*"]]},
 rajna_villany:{n:"Rajna Ádám: villanyszerelő", d:"Rajna Ádám villanyszerelő, mindenhova kerékpárral jár, télen is. Munkáskabátja fényvisszaverő csíkos."},
 rajna_kotozo:{n:"Fehér kötözők Rajnánál", d:"Rajna műhelyében egy doboz fehér gyorskötöző, a fele hiányzik.", sup:[["rajna","M","*"]]},
 rajna_fecskendo:{v:"v2", n:"Fecskendőcsomag", d:"Rajna fiókjában egy felbontott fecskendőcsomag. Rajna nem beteg, és nem drogos.", sup:[["rajna","M","v2"]]},
 rajna_nincs_alibi:{n:"Rajnának nincs alibije", d:"„Hol voltam? Otthon. Egyedül. Mint minden este, mióta a bátyám meghalt.” Egyik éjszakára sincs tanúja.", sup:[["rajna","A","*"]]},
 rajna_nem_konya:{v:"v3", n:"„Kónya – NEM ÉN”", d:"Rajna füzetében a nevek: Szalai ✗, Vass ✗. Kónya mellett: „NEM ÉN. Ki?!” Varga mellett: „péntek”.", clears:["rajna","v3"]},
 pentek:{n:"„Varga – péntek”", d:"Rajna füzetében Varga Ottó neve mellett egyetlen szó: péntek."},
 // 3. áldozat
 konya_test:{v:"v3", n:"Kónya holtteste", d:"A garázsban, a kocsija vezetőülésén. A tarkóján ütés, de alig vérzett."},
 fekete_kotozo:{v:"v3", n:"Fekete kötöző", d:"Kónya jobb gyűrűsujján fekete gyorskötöző."},
 ismeros:{v:"v3", n:"Nyitott garázsajtó", d:"A garázsajtót nem feszítették fel. Kónya maga engedte be a gyilkost, vagy együtt jöttek."},
 konya_eszter:{v:"v3", n:"Kónya üzenete Eszternek", d:"Kónya utolsó üzenete Gál Eszternek: „Holnap 10, Hírlap-kávézó. Hozok mindent. 2019 és 2020 is. –K.”"},
 konya_somogyi:{v:"v3", n:"Kónya hívása Somogyinak", d:"Szerdán délután Kónya felhívta Somogyit: „Védelmet kérek, különben beszélek.”"},
 fekete_terepjaro:{v:"v3", n:"Fekete terepjáró", d:"Szerda este egy magas, kopasz férfi kereste Kónyát, fekete terepjáróval. Az özvegy szerint a régi csapatából."},
 halalido3:{v:"v3", n:"Kónya halálának ideje", d:"Csütörtök hajnal, 00:30 és 01:30 között."},
 tek_fojtas:{v:"v3", n:"Kiképzett fojtás", d:"Kónya halálát a nyaki ütőér karral való leszorítása okozta. Kiképzett, gyors fogás. A fejsérülés a halál után keletkezett."},
 kotozo_elter:{v:"v3", n:"Más kéz, más szín", d:"Kónyánál fekete kötöző van a jobb kezén. A korábbi esetekben fehér volt, a bal kézen."},
 halmos_auto:{v:"v3", n:"Halmos a terepjárónál", d:"A kapitányság belső udvarán Somogyi fekete terepjárója. Halmos Péter mossa a kerekét. Sár van rajta, pedig itt minden hó."},
 halmos_tek:{v:"v3", n:"Halmos múltja", d:"Halmos Péter tizenkét évig a terrorelhárításnál szolgált, közelharc-oktató volt. 2020-ban ő is ott volt a rajtaütésen."},
 halmos_cella:{v:"v3", n:"Halmos telefonja Újpesten", d:"Halmos telefonja csütörtök hajnalban 00:41 és 01:22 között Kónya utcájában jelentkezett be.", sup:[["halmos","A","v3"]]},
 fekete_kotozo_auto:{v:"v3", n:"Fekete kötözők a terepjáróban", d:"A terepjáró csomagtartójában bevetési készlet: fekete gyorskötözők, egy hiányzik a csomagból.", sup:[["halmos","M","v3"]]},
 elosztas:{n:"Ki olvasta az első boncolást?", d:"Az első boncolási jegyzőkönyvet csak négyen kapták meg: Varga, te, Keleti, és Somogyi irodája."},
 baratsagos_tuz:{n:"Ki lőtte le Rácz Gábort?", d:"Az eredeti ballisztikai jelentés szerint a 2020-ban Rácz Gábort megölő lövedék Halmos Péter fegyveréből származott. A jelentést kicserélték."},
 konya_tanu:{n:"Kónya hallgatása", d:"Kónya 2020-ban látta a lövést. Azóta havonta pénzt kapott egy alapítványtól, amelynek elnöke Somogyi Kristóf."},
 apa_konya:{n:"Apád emléke", d:"Apád szerint Kónya a Rácz-temetésen részegen azt mondta: „A lövés nem Dénes felől jött.”"},
 // 4. áldozat (ha megtörténik)
 varga_test:{v:"v4", n:"Varga holtteste", d:"Varga Ottó az előszobájában, kabátban, a kulcs még a kezében. Tarkóján ütés."},
 feher_kotozo4:{v:"v4", n:"Fehér kötöző Varga ujján", d:"Varga bal gyűrűsujján fehér gyorskötöző.", sup:[["rajna","M","v4"]]},
 v4_szomszed:{v:"v4", n:"A szomszéd a kerékpárosról", d:"A szomszéd tíz óra után egy kerékpáros férfit látott Varga kapujában, fényvisszaverő csíkos kabátban.", sup:[["rajna","A","v4"]]},
 rajna_menekul:{v:"v4", n:"Merénylet Varga ellen", d:"Péntek éjjel egy kerékpáros férfi kalapáccsal várta Vargát a kapuban. A védelem elzavarta, de az arca rajta van a kamerán: Rajna Ádám.", sup:[["rajna","A","*"]]},
 // következtetések
 ugyanaz_a_jel:{n:"Ugyanaz a jel", d:"Szalai és Kitti bal gyűrűsujján ugyanaz a fehér kötöző. Ugyanaz a kéz.", ded:true},
 rajna_ugy:{n:"A 2019-es Rajna-ügy", d:"Szalai ítélt, Kitti tanúskodott. Ugyanaz a per: B.18.451/2019. A vádlott Rajna Tamás.", ded:true},
 rajna_hid:{v:"v1", n:"A kerékpáros Rajna volt", d:"Munkáskabát, fényvisszaverő csík, kerékpár, dél felé, Csepel irányába. Rajna Ádám.", sup:[["rajna","A","v1"]], ded:true},
 talalkozo:{v:"v1", n:"„V.H. – Á.”", d:"Vámház-híd, Ádám. Szalai maga ment le a hídhoz, hogy találkozzon a fiúval, akinek a bátyját elítélte.", sup:[["rajna","A","v1"]], ded:true},
 rajna_kitti:{v:"v2", n:"A villanyszerelő Rajna volt", d:"Kerékpáros villanyszerelő kedden este, Kitti ajtajánál. Kitti beengedte, teát főzött neki.", sup:[["rajna","A","v2"]], ded:true},
 kenyszer:{v:"v2", n:"Nem túladagolás volt", d:"Egy éve tiszta lány, rossz karba szúrt tű, zúzódások a felkarján. Valaki lefogta, és beadta neki.", ded:true},
 masolat:{v:"v3", n:"Valaki utánozta", d:"Fekete kötöző, jobb kéz, más módszer. Valaki ismerte a jelet, de nem pontosan. Kónyát nem ugyanaz ölte meg.", clears:["rajna","v3"], ded:true},
 belso_ember:{v:"v3", n:"A másoló belülről jött", d:"A kötöző részletét a sajtó nem tudta. Csak az olvashatta, aki megkapta az első boncolást: Varga, te, Keleti, vagy valaki Somogyi irodájában.", ded:true},
 halmos_konyanal:{v:"v3", n:"Halmos járt Kónyánál", d:"Magas, kopasz férfi, fekete terepjáró, a régi csapatból. Halmos Péter, Somogyi árnyéka.", sup:[["halmos","A","v3"]], ded:true},
 fojtas_halmos:{v:"v3", n:"Halmos fogása", d:"Kiképzett karotiszfojtás. Halmos tizenkét évig tanította ezt a fogást.", sup:[["halmos","M","v3"]], ded:true},
 halmos_inditek:{v:"v3", n:"Kónya beszélni akart", d:"Kónya mindent elmondott volna Eszternek, a 2020-as lövést is. Halmos fegyveréből jött. Halmosnak és Somogyinak is ez volt a vég.", sup:[["halmos","I","v3"]], ded:true}
},

ded:[
 {a:"feher_kotozo1", b:"feher_kotozo2", g:"ugyanaz_a_jel", t:"Egy bíró a híd alatt, egy lány a József utcában. Rablás és túladagolás. És ugyanaz a fehér műanyag csík, ugyanazon az ujjon. Ugyanaz a kéz."},
 {a:"itelet_boritek", b:"idezes_2019", g:"rajna_ugy", t:"Az ítélet száma B.18.451/2019. Az idézés száma B.18.451/2019. A bíró és a tanú. Ugyanaz a per."},
 {a:"kerekpar_kamera", b:"rajna_villany", g:"rajna_hid", t:"Munkáskabát, fényvisszaverő csík, kerékpár, dél felé. Rajna Ádám télen is biciklivel jár."},
 {a:"kerekparos", b:"rajna_villany", g:"rajna_hid", t:"Lévai egy kerékpáros férfit látott, aki a lépcsőn tolta fel a biciklijét. Rajna Ádám télen is biciklivel jár."},
 {a:"naptar", b:"rajna_testver", g:"talalkozo", t:"V.H. – Vámház-híd. Á. – Ádám. A bíró maga ment el a találkozóra. Talán bocsánatot akart kérni."},
 {a:"villanyszerelo", b:"rajna_villany", g:"rajna_kitti", t:"Kerékpáros villanyszerelő a lépcsőházban, kedden este. Rajna Ádám villanyszerelő."},
 {a:"kenyszer_injekcio", b:"kitti_tiszta", g:"kenyszer", t:"Egy éve tiszta. Jobbkezes. Rossz karba szúrt tű, ujjnyomok a felkarján. Ez nem visszaesés volt."},
 {a:"kotozo_elter", b:"ugyanaz_a_jel", g:"masolat", t:"Fehér, bal kéz. Fehér, bal kéz. Fekete, jobb kéz. Aki a harmadikat csinálta, csak hallott a jelről. Nem látta."},
 {a:"fekete_kotozo", b:"ugyanaz_a_jel", g:"masolat", t:"Kétszer fehér, most fekete. Aki ezt csinálta, csak hallott a jelről."},
 {a:"masolat", b:"elosztas", g:"belso_ember", t:"A kötöző részletét senki nem írta meg. Négy ember olvasta. Egyikük te vagy."},
 {a:"fekete_terepjaro", b:"halmos_auto", g:"halmos_konyanal", t:"Magas, kopasz, fekete terepjáró, a régi csapatból. És reggel a kapitányság udvarán valaki újpesti sarat mos le egy fekete terepjáró kerekéről."},
 {a:"tek_fojtas", b:"halmos_tek", g:"fojtas_halmos", t:"Kiképzett karotiszfojtás, gyors és csendes. Halmos ezt tanította tizenkét évig."},
 {a:"konya_tanu", b:"konya_eszter", g:"halmos_inditek", t:"Kónya hat évig hallgatott a lövésről, és hat évig fizették érte. Szerdán úgy döntött, beszél. Csütörtökön halott volt."},
 {a:"apa_konya", b:"konya_eszter", g:"halmos_inditek", t:"„A lövés nem Dénes felől jött.” Kónya tudta, ki lőtt. És szerdán el akarta mondani."},
 {a:"konya_somogyi", b:"baratsagos_tuz", g:"halmos_inditek", t:"„Védelmet kérek, különben beszélek.” És a lövedék, amelyik Rácz Gábort megölte, Halmos fegyveréből jött. Somogyi nem védelmet küldött."}
],

// ---- AKTÁK ----
docs:{
 boncolas1:{t:"Boncolási jegyzőkönyv – Szalai Endre", b:"IGAZSÁGÜGYI ORVOSTANI INTÉZET\nVizsgálta: dr. Keleti Mária\nElosztás: Varga O., Mátrai D., Somogyi K. irodája, irattár\n\n[[halalido1|Halál beállta: 2026. 12. 06., 22:00 és 23:30 között.]]\n[[kalapacs_seb|Halál oka: koponyatörés. A tarkón kerek felületű, nehéz, tompa tárgy nyoma, legvalószínűbb egy kalapács.]]\nEgyetlen ütés, hátulról, közvetlen közelről. Védekezési sérülés nincs: nem számított rá.\n\n[[feher_kotozo1|A bal gyűrűsujján, a jegygyűrű alatt fehér műanyag gyorskötöző, szorosan meghúzva, a halál beállta után helyezték fel.]]\n\nVéralkoholszint: 0,4 ‰. Gyomortartalom: tea, pogácsa.\n\n— Kézzel a margón: „Dénes, ezt a kötözőt nem tetted ki a sajtónak. Ne is tedd. K. M.”"},
 hidkamera:{t:"Térfigyelő kamera – Vámház-híd, pesti hídfő", b:"FŐVÁROSI TÉRFIGYELŐ RENDSZER, 2207-es kamera\nIdőszak: 2026. 12. 06. 21:00 – 12. 07. 06:00\n\n22:21  idős férfi, sötét kabát, kalap, a villamosmegállóból a lépcső felé (azonosítva: Szalai E.)\n[[kerekpar_kamera|22:41  kerékpáros férfi érkezik dél felől, munkáskabát fényvisszaverő csíkkal, a lépcső aljánál leszáll. 22:58  ugyanő elhajt dél felé, Csepel irányába.]]\n[[levai_auto|22:50  fekete Audi A6 parkol le a hídfőnél, rendszám: LVM-208 (üzembentartó: dr. Lévai Márk). 23:40  elhajt.]]\n23:05  a parkoló Audiból kiszáll egy férfi, a híd alatti pillérek felé megy, 23:30-kor egy másik férfival együtt látható\n05:52  futó férfi a lépcsőnél (a holttest megtalálója)\n\nRáczné hadnagy megjegyzése: a kerékpáros arca nem látszik. — R. K."},
 boncolas2:{t:"Boncolási jegyzőkönyv – Vass Kitti", b:"IGAZSÁGÜGYI ORVOSTANI INTÉZET\nVizsgálta: dr. Keleti Mária\n\n[[halalido2|Halál beállta: 2026. 12. 08., 23:00 és 12. 09., 01:00 között.]]\nHalál oka: heroin-túladagolás, légzésbénulás.\n[[kenyszer_injekcio|A szúrás a jobb könyökhajlatban. Az elhunyt a családja szerint jobbkezes volt. A bal felkaron négy, ujjnyomnak megfelelő friss zúzódás: lefogták.]]\nKorábbi szúrásnyom: régi, legalább egyéves hegek. Friss használat jele nincs.\n[[feher_kotozo2|A bal gyűrűsujján, három olcsó fémgyűrű alatt fehér műanyag gyorskötöző, szorosan meghúzva.]]\n\n— K. M.: „Dénes. Ugyanaz az ujj. Tudod te is.”"},
 heroin:{t:"Laborjelentés – a fecskendő tartalma", b:"BŰNÜGYI TECHNIKAI LABOR\nVizsgálta: Halász Tamás\n\nMinta: a Vass Kitti karjában talált fecskendő tartalma.\n\n[[heroin_gazsi|Eredmény: heroin, kb. 40%-os tisztaság, koffein és paracetamol vágóanyaggal. Az összetétel egyezik a VIII. kerületben az elmúlt két hónapban lefoglalt utcai tételekkel. Bodnár törzszászlós szerint ezt Horváth „Gazsi” Gáspár emberei árulják.]]\n\nMegjegyzés: a fecskendőn ujjlenyomat nincs. Letörölték. Egy drogos ezt nem csinálja. — H. T."},
 boncolas3:{t:"Boncolási jegyzőkönyv – Kónya Attila", b:"IGAZSÁGÜGYI ORVOSTANI INTÉZET\nVizsgálta: dr. Keleti Mária\n\n[[halalido3|Halál beállta: 2026. 12. 10., 00:30 és 01:30 között.]]\n[[tek_fojtas|Halál oka: a nyaki verőerek alkarral történő leszorítása, hátulról. Gyors, szakszerű fogás, kiképzett ember munkája. A tarkón lévő ütés a halál beállta után keletkezett, ezért alig vérzett.]]\n[[kotozo_elter|A jobb gyűrűsujján fekete gyorskötöző. Megjegyzés: a korábbi két esetben fehér, a bal kézen.]]\n\n— K. M.: „Ezt nem ugyanaz csinálta, Dénes. Ez gyorsabb volt, hidegebb. És hibázott.”"},
 per2019:{t:"Törvényszéki irat – B.18.451/2019", b:"FŐVÁROSI TÖRVÉNYSZÉK – Büntető Kollégium\nÜgyszám: B.18.451/2019\nVádlott: Rajna Tamás (szül. 1988), csepeli lakos\nVád: emberölés (Pápai László benzinkutas, 2018. 11. 30.)\n\n[[rajna_lista|Tanácsvezető bíró: dr. Szalai Endre. Koronatanú: Vass Kitti (felismerés a fényképes azonosításon). Nyomozó: Kónya Attila főtörzszászlós. A nyomozást vezette: Varga Ottó őrnagy.]]\n\nÍtélet: 14 év fegyház. A vádlott végig tagadott.\n\nUtólagos bejegyzés, 2023. 05.:\n[[rajna_testver|A vádlott a büntetés-végrehajtási intézetben elhunyt (öngyilkosság). Értesítendő hozzátartozó: Rajna Ádám (öccse), Csepel, Kossuth L. u. 12., villanyszerelő műhely.]]\n\n— Kocsis Ilona irattáros ceruzás jegyzete a mappán: „Ezt kérte ki valaki tavaly is. Egy fiatalember. Nem tudtam neki kiadni.”"},
 borton:{t:"Büntetés-végrehajtási akta – Rajna Tamás", b:"BV INTÉZET – Fogvatartotti nyilvántartás\nRajna Tamás, 2019–2023\n\nMagatartás: kifogástalan. Munkavégzés: villanyszerelés, a műhelyben.\nLátogatók: egyetlen rendszeres látogató, Rajna Ádám (öccse), havonta, négy éven át.\n\n2023. 05. 02. Elhunyt (önakasztás). Búcsúlevél az öccsének, másolat:\n[[borton_level|„Ádám, ne tedd. Nem érdemes. Én már nem vagyok, nekem már mindegy. Te élj. Felejtsd el őket. — T.”]]\n\nA levelet az öccs átvette, és a portán széttépte. A pszichológus feljegyzése: „Az öccs azt mondta: nem fogom elfelejteni őket. Egyiket sem.”"},
 kalapacs:{t:"Laborjelentés – kalapács", b:"BŰNÜGYI TECHNIKAI LABOR\nVizsgálta: Halász Tamás\n\nMinta: kalapács, Rajna Ádám műhelyéből (lefoglalva a kukából).\n\nA fej felülete gondosan lemosva, hipós oldattal.\n[[kalapacs_dns|A nyél és a fej illesztésének repedésében beszáradt vér. DNS-profil: Szalai Endre.]]\n\n— H. T.: „Mindent lemosott, csak a repedést nem. Mindig a repedést nem.”"},
 rajna_fuzet:{t:"Rajna Ádám füzete", b:"Kockás füzet, a borítóján olajfolt. Gondos, nagy betűk, egy villanyszerelő kézírása.\n\nAKIK ELVITTÉK TAMÁST:\n\nSzalai Endre, bíró — ✗ (vasárnap. Eljött. Azt mondta, sajnálja. Késő.)\nVass Kitti, tanú — ✗ (kedd. Teát főzött. Sírt.)\n[[rajna_nem_konya|Kónya Attila, nyomozó — NEM ÉN. Valaki megelőzött. Ki?! Ki tudott a gyűrűről?]]\n[[pentek|Varga Ottó, vezető — péntek.]]\n\nAz utolsó oldalon, más tollal: „Tamás, megígértem.”"},
 kata_akta:{t:"Rácz Kata magánaktája – 2020", b:"Egy kartondoboz Kata lakásából, benne fénymásolatok, jegyzetek, hat év munkája.\n\n2020. 10. 14., csepeli rajtaütés. Halálos áldozat: Rácz Gábor főhadnagy. A hivatalos jelentés szerint a lövés a gyanúsítottak felől jött, Mátrai Dénes rossz parancsa miatt.\n\n[[baratsagos_tuz|A ballisztikai szakértő EREDETI, aláírt jelentése (a hivatalosban kicserélték): a Rácz Gábort megölő lövedék Halmos Péter szolgálati fegyveréből származott.]]\n\n[[konya_tanu|Kónya Attila a lépcsőházban állt, látta a lövést. 2020 decemberétől havonta 200 000 Ft-ot kapott a Biztonságos Városért Alapítványtól. Az alapítvány elnöke: Somogyi Kristóf.]]\n\nKata kézírása a doboz alján: „Apa, megtaláltam.”"},
 cella_halmos:{t:"Cellainformáció – Halmos Péter telefonja", b:"SZOLGÁLTATÓI ADATSZOLGÁLTATÁS\nElőfizető: Halmos Péter\nIdőszak: 2026. 12. 09. 20:00 – 12. 10. 06:00\n\n20:15–23:50  XIII. ker., Váci út (Somogyi K. lakóhelye)\n[[halmos_cella|00:41–01:22  IV. ker., Újpest, Kónya A. lakóhelyének cellája]]\n01:55–06:00  XIII. ker.\n\nBence megjegyzése: „Somogyi azt mondta, Halmos egész éjjel vele volt. A telefonja nem.”"},
 terepjaro:{t:"Átvizsgálás – Somogyi szolgálati terepjárója", b:"JEGYZŐKÖNYV, járműátvizsgálás\nJármű: fekete Toyota Land Cruiser, szolgálati, használója: Halmos Péter (Somogyi K. kíséret)\nJelen volt: Rácz K. hadnagy, Bodnár F. törzszászlós\n\nA kerékjárati ívekben friss, mosás után maradt agyagos sár.\n[[fekete_kotozo_auto|A csomagtartóban bevetési táska. Benne fekete gyorskötözők, 20 db-os csomag, 19 db van meg.]]\n\nAz átvizsgálás 14. percében Somogyi K. megjelent a helyszínen, és leállíttatta. A jegyzőkönyvet Rácz K. ennek ellenére lezárta."},
 profil2:{t:"Pszichológiai profil – dr. Fehér Judit", b:"ELŐZETES TETTESPROFIL – „gyűrűsujj”\n\nAz első két eset tettese nem élvezi, amit csinál. Rendet tesz. Számára ez ítélet-végrehajtás: a gyűrűsujj az esküvő, az eskü, a kéz, amellyel valaki aláírt vagy hamisan esküdött. Listája van, és sorrendben halad.\n\nValószínűleg kétkezi munkás, pontos, türelmes. Személyes veszteség áll mögötte, amelyet egy hivatalos eljárásnak tulajdonít.\n\nA harmadik eset más. Gyors, érzelemmentes, szakszerű. A jel ott van, de rosszul: mintha valaki elmondásból ismerné. Szerintem ezt nem ugyanaz az ember követte el.\n\nAz első tettes nem áll meg, amíg a lista végére nem ér.\n\n— Mátrai főhadnagy, a keddi beszélgetésünkről: tudja, mit írtam le. F. J."}
},

// ---- HELYSZÍNEK ----
locs:{
 otthon:{m:"Lakás", n:"Lakás a Körúton", x:612, y:338, side:"P", d:"Harmadik emelet, udvari szoba. Az ablakpárkányon hó. A hűtőben pálinka, a mosogatóban két hét.", hs:[]},
 kapitanysag:{m:"Kapitányság", n:"Főkapitányság", x:705, y:196, side:"P", d:"Szürke tömb, a lépcsőn sózott hólé. Karácsonyi égősor a portán, amit senki nem kapcsol be.", hs:[
   {id:"udvar", l:"A belső udvar", req:["v3_found"], t:"A belső udvaron Somogyi fekete terepjárója áll. Halmos Péter mossa a kerekét slaggal, mínusz négy fokban. Sár van rajta, pedig itt minden hó. Rád néz, és tovább mos.", ev:"halmos_auto"}
 ]},
 hordo:{m:"Hordó", n:"Hordó", x:648, y:462, side:"P", open:[15,3], d:"A Hordóban karácsonyi fények villognak a nyerőgép fölött. Laci fenyőágat tett a pultra, és ez a legtöbb, amit ünnepnek hajlandó nevezni.", hs:[]},
 intezet:{m:"Intézet", n:"Orvostani Intézet", x:792, y:474, side:"P", open:[7,19], d:"Csempe, formalin, a rádióban karácsonyi dalok. Keleti doktornő szerint decemberben mindenki halottabb.", hs:[]},
 platan:{m:"Platán otthon", n:"Platán Idősotthon", x:178, y:200, side:"B", open:[9,19], gone:"apa_korhaz", d:"A társalgóban műfenyő, papírcsillagok. Apád a második emeleten, az ablaknál.", hs:[]},
 korhaz:{m:"Kórház", n:"Szent János Kórház", x:250, y:252, side:"B", open:[8,20], vis:"apa_korhaz", d:"Traumatológia, harmadik emelet. Apád a folyosó végén fekszik, egy hatágyas kórteremben, az ablak mellett.", hs:[]},
 nora:{m:"Nóra", n:"Nóra lakása", x:716, y:396, side:"P", open:[20,4], gone:"nora_help", d:"Józsefvárosi bérház, gangos udvar, hóval teli virágládák.", hs:[]},
 hid:{la:1, m:"Vámház-híd", n:"Vámház-híd, pesti hídfő", x:548, y:470, side:"P", crime:1, d:"A híd zöld vasszerkezete fehér a dértől. A hídfő lépcsője alatt sárga szalag, a hóban egy test körvonala, amit a helyszínelők festékkel húztak meg.", hs:[
   {id:"test", l:"A holttest", t:"Szalai Endre arccal a havas kövön fekszik, a kalapja két méterrel arrébb. A tarkóján egyetlen, kerek seb. A zsebei kifordítva, a pénztárcája és az órája hiányzik. A jegygyűrűje rajta maradt.", ev:["szalai_test","kifordit"], f:"body1"},
   {id:"jarda", l:"A rakparti járda", t:"A friss hóban vékony kerékpárgumi nyoma, a lépcső aljától dél felé, Csepel irányába. Valaki a lépcsőn tolta le, és ott ült fel rá.", ev:"kereknyom"},
   {id:"kabat", l:"A kabát belső zsebe", req:["body1"], t:"A kifordított zsebek mellett megmaradt egy belső zseb. Benne egy gyűrött villamosjegy: tegnapi, 21:40, Rózsadomb. Szalai villamossal jött. Nem véletlenül volt itt.", ev:"villamosjegy"},
   {id:"kamera", l:"A híd oszlopa", t:"A hídfő oszlopán térfigyelő kamera, 2207-es szám. A lencse a lépcsőre és a parkolóra néz.", f:"hid_kamera"}
 ]},
 szalai:{m:"Szalai-villa", n:"Szalai-villa, Rózsadomb", x:318, y:142, side:"B", open:[8,22], d:"Harmincas évekbeli villa, kovácsoltvas kapu, a kertben hóval fedett rózsatövek. Az özvegy fekete ruhában nyit ajtót, és az előszobában Lévai Márk telefonál.", hs:[
   {id:"dolgozo", l:"Szalai dolgozószobája", t:"Könyvek, bekeretezett kinevezések, egy gyerekrajz a falon. Az íróasztalon nyitva egy feladó nélküli boríték, benne egy 2019-es ítélet másolata: Rajna Tamás, emberölés, 14 év. Valaki piros tollal ráírta: EMLÉKSZIK?", ev:"itelet_boritek"},
   {id:"naptar", l:"A konyhai naptár", t:"Falinaptár a hűtő mellett, Szalai rendezett kézírásával. Vasárnapra, a többi bejegyzéstől eltérő, remegő betűkkel: „22:30 – V.H. – Á.”", ev:"naptar"},
   {id:"garazs", l:"A garázs", req:["met_levai"], t:"Lévai Audija mellett felújítási anyagok: szigetelés, gipszkarton, és egy nyitott zacskó fehér gyorskötöző. Lévai a padlást csinálja. Mondja ő.", ev:"levai_kotozo"}
 ]},
 kitti:{m:"Kitti", n:"Vass Kitti lakása", x:770, y:430, side:"P", vis:"v2_found", crime:1, d:"Negyedik emelet, gang, rozsdás korlát, a lépcsőházban hideg. Az ajtón rendőrségi pecsét, mögötte egy szoba, ami túlságosan rendes.", hs:[
   {id:"test", l:"Az ágy", t:"Vass Kitti az ágyon fekszik, félig felöltözve, a karjában fecskendő. A szoba rendes, az ágy bevetve alatta. Egy drogos, aki ennyire rendet tart, nem így hal meg.", ev:"kitti_test", f:"body2"},
   {id:"tukor", l:"A tükör", t:"A fürdőszobai tükör mögé dugva egy hivatalos levél, ezerszer széthajtogatva: idézés tanúként, Fővárosi Törvényszék, B.18.451/2019.", ev:"idezes_2019"},
   {id:"konyha", l:"A konyha", t:"Két bögre a mosogatóban, az egyikben tea maradéka. Kitti teát főzött valakinek, akit ismert, vagy akiben megbízott.", ev:"ket_bogre"},
   {id:"ora", l:"A villanyóra-szekrény", t:"A lakásajtó melletti villanyóra-szekrényen friss plomba. A szolgáltató szerint az elmúlt hónapban senkit nem küldtek ide.", f:"villanyora"}
 ]},
 konya:{m:"Kónya háza", n:"Kónya háza, Újpest", x:735,y:58, side:"P", vis:"v3_found", crime:1, d:"Kockaház, ponyvás garázs, a kerítésen égősor. Az özvegy a konyhaablakból nézi a helyszínelőket, és nem sír.", hs:[
   {id:"auto", l:"A garázs", t:"Kónya Attila a kocsija vezetőülésén ül, a feje a kormányon. A tarkóján ütés, de alig vérzett. Mintha már halott lett volna, mire megütötték.", ev:"konya_test", f:"body3"},
   {id:"kez", l:"Kónya keze", req:["body3"], t:"A jobb keze az ölében. A gyűrűsujján fekete műanyag gyorskötöző, olyan szorosan, hogy a bőr kifehéredett körülötte.", ev:"fekete_kotozo"},
   {id:"ajto", l:"A garázsajtó", t:"Nincs feszítésnyom, a zár ép. Kónya maga nyitotta ki, vagy valakivel együtt jött haza.", ev:"ismeros"},
   {id:"telefon", l:"Kónya telefonja", req:["body3"], t:"A telefon a kesztyűtartóban. Az utolsó elküldött üzenet szerda 22:10-kor, Gál Eszternek: „Holnap 10, Hírlap-kávézó. Hozok mindent. 2019 és 2020 is. –K.”", ev:"konya_eszter"}
 ]},
 torvenyszek:{m:"Törvényszék", n:"Fővárosi Törvényszék, irattár", x:582, y:252, side:"P", open:[8,16], d:"Pince, neoncső, végtelen polcok. Az irattár szaga: por, papír és régi ítéletek.", hs:[]},
 rajna:{la:1, m:"Rajna műhely", n:"Rajna Ádám műhelye, Csepel", x:572, y:672, side:"P", vis:"rajna_cim", d:"Csepeli udvari műhely, villanyszerelő-cégér, a falnak támasztva egy kerékpár. A műhely rendes, mint egy kórterem.", hs:[
   {id:"fal", l:"A szerszámfal", req:["rajna_nev"], t:"Minden szerszám körberajzolva a falon, a helyén. Egy kalapács körvonala üres. Az udvari kukában megtalálod, gondosan lemosva, hipószagú.", ev:"kalapacs"},
   {id:"polc", l:"A polc", req:["rajna_nev"], t:"Kábelek, dobozolt anyagok, címkézve. Egy doboz fehér gyorskötöző, száz darabos, a fele hiányzik.", ev:"rajna_kotozo"},
   {id:"fiok", l:"Az íróasztal fiókja", req:["rajna_nev"], t:"Számlák, egy régi fénykép két fiúról egy bokszring előtt. Alatta egy felbontott fecskendőcsomag és egy kockás füzet.", ev:"rajna_fecskendo", doc:"rajna_fuzet"},
   {id:"kabat", l:"A fogas", t:"A fogason munkáskabát, a hátán fényvisszaverő csík. A falnak támasztott kerékpár gumija még nedves.", ev:"rajna_villany"}
 ]},
 trattoria:{la:1, m:"Trattoria", n:"Trattoria Pomo, Buda", x:360, y:330, side:"B", vis:"lili_inv", open:[18,22], day:3, d:"Kockás abrosz, gyertya, egy pincér, aki mindenkit kisasszonynak szólít. A sarokasztalnál Lili, az anyja és egy torta, amin tizenhét gyertya vár.", hs:[]},
 konyvesbolt:{la:1, m:"Könyvesbolt", n:"Kotta- és könyvesbolt", x:522, y:396, side:"P", vis:"lili_inv", open:[10,20], d:"Régi könyvesbolt, a hátsó termében kották. Az eladó hölgy úgy néz rád, mintha tudná, hogy rendőr vagy, és ezt meg is bocsátaná.", hs:[]},
 vargahaz:{la:1, m:"Varga háza", n:"Varga Ottó háza, Zugló", x:880, y:280, side:"P", vis:"v4_found", crime:1, d:"Zuglói ikerház, a kapuban sárga szalag. A lépcsőn a hó letaposva.", hs:[
   {id:"test", l:"Az előszoba", t:"Varga Ottó az előszobában fekszik, kabátban, a kulcs még a kezében. A tarkóján egyetlen kerek seb. A bal gyűrűsujján fehér gyorskötöző.", ev:["varga_test","feher_kotozo4"]},
   {id:"szomszed", l:"A szomszéd", t:"A szomszéd, egy idős férfi papucsban, a kapuban toporog. „Tíz után láttam egy biciklis embert a kapunál. Csíkos kabát, olyan világítós. Azt hittem, villanyszerelő.”", ev:"v4_szomszed"}
 ]}
},

// ---- SZEREPLŐK ----
people:{
 anna:{n:"Dr. Kerekes Anna", r:"traumatológus, apád orvosa", loc:"korhaz", h:[8,20], vis:"apa_korhaz", bio:"41 éves traumatológus a Szent Jánosban. Rövid haj, sportóra, kávéfolt a köpenyén. Úgy beszél a törésekről, mintha időjárás-jelentést olvasna fel, és közben a szeme nevet. Elvált, maratont fut, és azt mondja, rendőrökkel nem randevúzik, mert mind hazudnak.", topics:[
  {id:"apa", l:"Apámról kérdezed", t:"„Combnyaktörés. Holnap reggel hétkor műtöm, protézist kap.” Felnéz a kartonról. „Maga a rendőr fia? Ő mondta, hogy maga a legjobb rendőr a városban. Aztán megkérdezte, hogy én vagyok-e az anyja.” Elmosolyodik. „Nem vagyok.”", f:"anna_met"},
  {id:"kave", l:"Meghívod egy automatás kávéra", req:["anna_met"], dyn:"annaKave"},
  {id:"szam", l:"Elkéred a számát", req:["anna_kave"], t:"Sokáig néz. Aztán ír valamit egy receptlap hátuljára. „Ha az édesapja miatt aggódik. Csak akkor.” Odaadja. Mindketten tudjátok, hogy nem csak akkor.", f:"anna_szam"}
 ]},
 varga:{n:"Varga Ottó alezredes", r:"osztályvezető", loc:"kapitanysag", h:[7,19], gone:"v4_found", bio:"56 éves, a gyilkossági osztály vezetője. 2019-ben még őrnagyként vezette a csepeli benzinkutas-ügyet. Fáradtabb, mint egy hónapja, és többet nyúl a fiókhoz.", topics:[
  {id:"elig", l:"Eligazítás", t:"„Szalai Endre, hatvannyolc, tizenöt éve nyugdíjas bíró. Pénztárca, óra hiányzik. A veje, Lévai Márk ügyvéd, nyakig adósságban.” Leveszi a szemüvegét. „Somogyi rablást akar, gyorsan, karácsony előtt. Én azt akarom, hogy igazad legyen.”", f:"briefed"},
  {id:"2019", l:"A 2019-es Rajna-ügyről", req:["rajna_ugy|rajna_lista"], t:"Sokáig hallgat. „Benzinkutas-gyilkosság Csepelen. Kónya hozta a tanút, a lány felismerte Rajnát. Szalai elítélte.” Az ablakhoz megy. „A fiú végig tagadott. Mindegyik tagad, Dénes.” Nem néz rád. „Volt, hogy nem aludtam miatta.”", f:"varga2019"},
  {id:"vedelem", l:"Figyelmezteted: rajta van a listán", req:["rajna_lista|pentek"], t:"„Engem? Egy csepeli villanyszerelő?” Felnevet, aztán abbahagyja. „Jó. Küldj ki valakit a házhoz, ha nyugodtabb leszel tőle. De a Stábon keresztül, papíron. Nem akarok szívességet.”", f:"varga_tud"},
  {id:"statusz", l:"Jelentés az ügyről", rep:1, dyn:"vargaStatus"}
 ]},
 somogyi:{n:"Somogyi Kristóf", r:"főkapitány-helyettes", loc:"kapitanysag", h:[8,18], vis:"v3_found", bio:"45 éves, fotogén, politikai kapcsolatokkal. Kónya halála óta személyesen „koordinálja” a gyűrűsujjas ügyet. A háta mögött mindig ott áll Halmos.", topics:[
  {id:"beszel", l:"Beszélsz vele", t:"„Mátrai. Egy sorozatgyilkos öli a város igazságszolgáltatását. Bíró, tanú, rendőr. Ugyanaz az ember, ugyanaz a jel.” Megigazítja a nyakkendőjét. „Hozza be a csepeli fiút, és karácsonyra mindenki otthon lehet. A három gyilkossággal együtt.”", f:"somogyi_ugyanaz"},
  {id:"halmos", l:"Halmosról kérdezed", req:["belso_ember|halmos_konyanal|kata_titok"], t:"A mosoly nem tűnik el, csak megfagy. „Halmos az én emberem. Szerda éjjel velem volt. Ha ezt kétségbe vonja, engem von kétségbe.” Feláll. „Rácz Gábor is mindig kérdezett, főhadnagy. Emlékszik, hogy végződött.”", pat:-10, f:"somogyi_fenyeget"},
  {id:"statusz", l:"Jelentés az ügyről", rep:1, req:["v4_found"], dyn:"vargaStatus"}
 ]},
 halmos:{n:"Halmos Péter", r:"Somogyi kísérője", loc:"kapitanysag", h:[8,18], vis:"v3_found", bio:"46 éves, magas, kopasz, csendes. Tizenkét évig a terrorelhárításnál szolgált, most Somogyi sofőrje, testőre és árnyéka. 2020-ban ott volt a csepeli rajtaütésen.", topics:[
  {id:"ki", l:"Kónyát ismerte?", t:"„Együtt szolgáltunk. Jó ember volt.” A hangja semleges, mint egy jelentés. „Remélem, elkapják, aki ezt tette vele.” Nem pislog."},
  {id:"mult", l:"A múltjáról", t:"„Tizenkét év terrorelhárítás. Közelharc-oktató voltam.” Megmozgatja a nyakát. „Most autót vezetek. Kevesebb a papírmunka.”", ev:"halmos_tek"},
  {id:"szerda", l:"Hol volt szerda éjjel?", sober:1, t:"„Somogyi úrral. A lakásán, reggelig. Megbeszélés.” Ennyi. Nem magyaráz, nem siet. Aki hazudik, az általában többet beszél. Ő nem.", f:"halmos_alibi"},
  {id:"cella", l:"Szembesít: a telefonja Újpesten", req:["halmos_cella"], sober:1, t:"Hosszan néz. „A telefonom sok helyen jár.” Aztán halkabban: „Kónya barátom volt, főhadnagy. Barátok között is vannak tartozások.”"},
  {id:"racz", l:"Szembesít: Rácz Gábor", req:["baratsagos_tuz"], sober:1, t:"Most először változik meg az arca. Egy pillanatra, nem tovább. „Rácz Gábor rossz helyen állt. Sötét volt, lőttek. Ilyen a háború.” Közelebb hajol. „Maga hat évig azt hitte, hogy maga ölte meg. Jól aludt?”"}
 ]},
 bence:{n:"Tóth Bence", r:"nyomozó", loc:"kapitanysag", h:[7,21], staff:1, bio:"29 éves, lelkes, jó papíron és a rendszerekben. Az utcán még tanul. Mióta a Révész-ügyben dolgoztatok, minden reggel kávét hoz neked, kérés nélkül.", topics:[
  {id:"gond", l:"Mit gondolsz?", rep:1, dyn:"hintBence"}
 ]},
 kata:{n:"Rácz Kata", r:"nyomozó", loc:"kapitanysag", h:[7,21], staff:1, bio:"36 éves, az osztály legélesebb esze. Rácz Gábor lánya, akit 2020-ban a csepeli rajtaütésen veszítettél el. Hat éve dolgozik melletted, és hat éve nem beszélt veled az apjáról.", topics:[
  {id:"gond", l:"Mit gondolsz?", rep:1, dyn:"hintKata"},
  {id:"titok_low", l:"Mi van veled, Kata?", req:["v3_found","!loy:kata:65","!kata_titok"], rep:1, t:"Ránéz a kezére, aztán rád. „Majd ha megbízom benned, Mátrai. Ma még nem.” Visszafordul a monitorhoz. <i>(Kata lojalitása még nem elég.)</i>"},
  {id:"titok", l:"Mi van veled, Kata?", req:["v3_found","loy:kata:65"], t:"Sokáig hallgat. Aztán bezárja az iroda ajtaját. „Hat éve azt hiszed, a te parancsod ölte meg apámat. Mindenki ezt hiszi. Én is ezt hittem.” Az asztalodra tesz egy kartondobozt. „Nem a te parancsod volt, Dénes. És nem a gyanúsítottak lőttek. Kónya tudta. És most Kónya halott.” A hangja nem remeg. Csak a keze.", doc:"kata_akta", f:"kata_titok"}
 ]},
 bodnar:{n:"Bodnár Feri", r:"törzszászlós", loc:"kapitanysag", h:[7,21], staff:1, bio:"58 éves, huszonöt éve jár utcára. Az informátorai mindent tudnak a VIII. kerületről. Gazsiról többet, mint Gazsi saját magáról.", topics:[
  {id:"gond", l:"Mit gondolsz?", rep:1, dyn:"hintBodnar"}
 ]},
 halasz:{n:"Halász Tamás", r:"nyomszakértő", loc:"kapitanysag", h:[8,22], staff:1, bio:"41 éves, pedáns. Decemberben a laborban karácsonyi Omega-válogatást hallgat, és ezt nem tartja ellentmondásnak.", topics:[
  {id:"gond", l:"Mi van a laborban?", rep:1, dyn:"hintHalasz"}
 ]},
 feher:{n:"Dr. Fehér Judit", r:"pszichológus, profilozó", loc:"kapitanysag", h:[9,17], staff:1, bio:"52 éves. Profilt készít, és ő dönt a szolgálati alkalmasságodról. Ezen a héten kötelező beszélgetésre vár.", topics:[
  {id:"alkalmassag", l:"Az alkalmassági beszélgetés", req:["feher_hivas"], dyn:"feherUles"},
  {id:"jel", l:"A gyűrűsujjról kérdezed", req:["ugyanaz_a_jel"], t:"„A gyűrűsujj az eskü ujja. Az esküvőé, de a tanúé is, aki megesküszik, és a bíróé, aki aláír.” Leveszi a szemüvegét. „Az ilyen tettesnek listája van, főhadnagy. És a listák végén mindig az áll, aki a legfeljebb ült.”"}
 ]},
 keleti:{n:"Dr. Keleti Mária", r:"igazságügyi orvosszakértő", loc:"intezet", h:[7,19], staff:1, bio:"61 éves, cinikus, láncdohányos. Apád egykori kollégája. Decemberben mindig többet dohányzik, mert azt mondja, a halottak is többen vannak.", topics:[
  {id:"elozetes", l:"Előzetes vélemény", req:["body1"], t:"„Egy ütés, hátulról. Nem rabló, Dénes. A rabló kétszer üt, vagy háromszor, és fél. Ez nem félt. Ez végrehajtott valamit.” Kifújja a füstöt. „A boncolás után többet mondok. Van valami az ujján.”"},
  {id:"elosztas", l:"Ki kapta meg az első boncolást?", req:["doc:boncolas1"], t:"Előveszi a nyilvántartást. „Varga, te, az irattár. És Somogyi irodája, mert ő kérte, a sajtó miatt.” Rád néz a szemüvege fölött. „A kötözőt egyik újság sem írta meg. Én megnéztem.”", ev:"elosztas"},
  {id:"apa", l:"Apámról", t:"„Hétfőn voltam nála. Rosszabbul van, Dénes. A lépcsőn már nem mer lemenni.” Elnyomja a cigit. „Délelőtt menj. Amíg még megismer.”"}
 ]},
 apa:{n:"Mátrai Gyula", r:"az apád", loc:"platan", h:[9,19], gone:"apa_korhaz", bio:"74 éves, nyugalmazott rendőr főhadnagy, kezdődő demenciával. Délelőttönként még tiszta, de egyre rövidebb ideig.", topics:[
  {id:"racz", l:"A Rácz-temetésről kérdezed", lucid:[9,11], t:"Sokáig nézi a havat az ablakon túl. „A Rácz fiú temetésén Kónya Attila részeg volt. Odajött hozzám. Azt mondta: »Gyula bácsi, a lövés nem Dénes felől jött.« Aztán elsírta magát, és elment.” Megfogja a kezed. „Hat éve el akarom mondani neked. Mindig elfelejtem.”", ev:"apa_konya", f:"apa_racz"},
  {id:"beszel", l:"Csak leülsz mellé", rep:1, dyn:"apaTalk"}
 ]},
 apa2:{n:"Mátrai Gyula", r:"az apád", loc:"korhaz", h:[8,20], vis:"apa_korhaz", bio:"Combnyaktörés. Holnap műtik. A morfiumtól hol tiszta, hol a régi rádiós műsorok szignálját dúdolja.", topics:[
  {id:"racz", l:"A Rácz-temetésről kérdezed", req:["!apa_racz"], lucid:[8,11], t:"A morfium mögül néz ki rád. „A Rácz fiú temetésén Kónya részeg volt. Azt mondta: »A lövés nem Dénes felől jött.« Hat éve el akarom mondani.” Elalszik, mielőtt bármit kérdezhetnél.", ev:"apa_konya", f:"apa_racz"},
  {id:"marad", l:"Mellette maradsz egy órát", rep:1, mins:60, eff:{crave:-15}, dyn:"apaKorhaz", f:"apa_latogatas"}
 ]},
 lili:{n:"Mátrai Lili", r:"a lányod", loc:"trattoria", h:[18,22], bio:"Ma tizenhét éves. Zongorázik, sokat olvas, és ha haragszik rád, udvarias. Az anyja mellette ül, és figyel.", topics:[
  {id:"ott", l:"Leülsz az asztalhoz", dyn:"liliBday", mins:90},
  {id:"ajandek", l:"Átadod az ajándékot", req:["ajandek","lili_bday"], t:"Kibontja. Chopin-noktürnök, Paderewski-kiadás. Lapozgatja, és megáll annál, amit két hete a koncerten játszott. „Ezt honnan tudtad?” Nem mondod meg, hogy két órát álltál a boltban. Nem is kell.", f:"lili_ajandek"}
 ]},
 nora:{n:"Nóra", r:"régi ismerős", loc:"nora", h:[20,4], gone:"nora_help", bio:"31 éves. Még mindig Gazsinak dolgozik, és még mindig ki akar szállni. A VIII. kerületben mindenkit ismer, aki éjszaka él.", topics:[
  {id:"ora", l:"Maradsz nála egy órát (8 000 Ft)", rep:1, cost:8000, mins:60, eff:{crave:-25}, dyn:"noraTalk"},
  {id:"kitti", l:"Vass Kittiről kérdezed", req:["v2_found"], t:"Elsápad. „Kitti? Együtt kezdtük, tizenkilenc évesen.” Rágyújt. „2019-ben egy zsaru pénzt adott neki, hogy felismerjen valakit a bíróságon. Kónyának hívták. Kitti azóta nem aludt rendesen. Azt mondta, egy ártatlan embert küldött börtönbe.”", ev:"kitti_konya"}
 ]},
 szalaine:{n:"Szalai Endréné", r:"az özvegy", loc:"szalai", h:[8,22], bio:"Margit, 66 éves, nyugdíjas zongoratanár. Egyenes háttal ül, a kezét az ölében tartja, és csak akkor sír, ha azt hiszi, senki nem látja.", topics:[
  {id:"vasarnap", l:"Hova ment a férje vasárnap este?", sober:1, t:"„Azt mondta, találkozója van. Hogy rendbe kell tennie valamit, ami régóta nyomja.” Lenéz a kezére. „Pénteken hívta egy fiatalember. Endre utána egész este a dolgozószobában ült, és egy régi ítéletet olvasott.”", f:"telefonalo"},
  {id:"level", l:"A névtelen borítékról", req:["itelet_boritek"], t:"„Két hete jött. Endre megmutatta. Azt mondta: »Margit, azt hiszem, abban az ügyben tévedtem. Kónya hozta azt a lányt, és én elhittem.«” Megtörli a szemét. „Azt mondta, bocsánatot fog kérni. Negyven év alatt soha nem kért bocsánatot.”"},
  {id:"marki", l:"Lévai Márkról", t:"„A vejem.” Ennyit mond, de úgy, hogy abban minden benne van. „A lányom szereti. Endre nem szerette. Pénzt kért tőle, sokat. Endre nem adott.”", ev:"orokseg"}
 ]},
 levai:{n:"Dr. Lévai Márk", r:"Szalai veje, ügyvéd", loc:"szalai", h:[8,22], suspect:1, bio:"41 éves, ügyvéd, jó öltöny, rossz cipő. Két éve vesztett el egy nagy pert, azóta egy belvárosi kaszinóban veszíti a többit. Folyton a telefonját nézi.", topics:[
  {id:"hol", l:"Hol volt vasárnap este?", t:"„Otthon. A feleségemmel. Filmet néztünk.” Túl gyorsan mondja. A felesége a konyhában leejt egy kanalat.", f:"levai_hazudik"},
  {id:"penz", l:"A pénzügyeiről", t:"Megigazítja a mandzsettáját. „Átmeneti likviditási gondok. Mint mindenkinek.” Kinyitja a száját, aztán becsukja. „Ha arra céloz, hogy az apósom halála jól jön nekem, főhadnagy, akkor beszéljen az ügyvédemmel. Vagyis velem.”", ev:"orokseg"},
  {id:"audi", l:"Szembesít: az Audija a hídnál", req:["levai_auto"], sober:1, t:"Elsápad. Leül. „Jó. Ott voltam. De nem miatta. Fizetnem kellett valakinek, egy uzsorásnak, a híd alatt, fél tizenkettőkor.” Megtörli a homlokát. „Amikor odaértem, egy biciklis férfit láttam, aki a lépcsőn tolta fel a biciklijét. Munkáskabát, olyan világítós csíkkal. Nem néztem meg jobban. Nem akartam, hogy ő is megnézzen engem.”", ev:"kerekparos", f:"levai_vallomas"},
  {id:"ki", l:"Ki volt az uzsorás?", req:["levai_vallomas"], t:"„Horváth Gáspár. Mindenki Gazsinak hívja.” Szégyelli magát, és ez az első őszinte dolog, amit látsz rajta. „Kétszázezret vittem neki. Kevés volt.”", f:"levai_gazsi"}
 ]},
 dori:{n:"Lakatos Dóra", r:"Kitti barátnője", loc:"kitti", h:[10,22], vis:"v2_found", bio:"23 éves, felszolgáló, Kitti legjobb barátnője. A gang korlátjába kapaszkodik, mintha a ház is mozogna.", topics:[
  {id:"tiszta", l:"Kitti drogozott?", sober:1, t:"„Nem! Egy éve tiszta volt, esküszöm. Hetente járt az ambulanciára, munkát keresett. Felszolgálónak jelentkezett hozzánk.” Sír. „Nem lőtte be magát. Nem tenné. Nem tette volna.”", ev:"kitti_tiszta"},
  {id:"gazsi", l:"Kinek tartozott?", t:"„Gazsinak. Háromszázezerrel, még a régi időkből. Gazsi szerint a kamat is tartozás.” Lehalkítja a hangját. „Kedden este itt volt, fél tíz körül. Dörömbölt, és azt ordította, hogy holnap már késő lesz. Kitti nem nyitott ajtót.”", ev:["kitti_tartozas","gazsi_lepcsohaz"]},
  {id:"2019", l:"A 2019-es tárgyalásról", req:["idezes_2019"], t:"Megdermed. „Arról soha nem beszélt. Egyszer, részegen, a régi időkben, azt mondta: »Dóri, én egy embert a sírba tettem, és még csak nem is ismertem.«” Megrázza a fejét. „Nem tudom, mit jelentett.”"}
 ]},
 simonne:{n:"Simon Lajosné", r:"szomszéd", loc:"kitti", h:[8,20], vis:"v2_found", bio:"79 éves, a gang másik végén lakik negyven éve. A kukucskálót úgy használja, mint más a tévét.", topics:[
  {id:"kedd", l:"Látott valakit kedden?", sober:1, t:"„Este hétkor jött egy villanyszerelő. Kedves fiú, megkérdezte, merre a villanyóra. Biciklivel jött, felhozta a lépcsőn, hogy el ne lopják.” Felemeli az ujját. „És tizenegy körül megint hallottam a biciklit a lépcsőházban. A csengő megpendült, ahogy a korlátnak ütődött.”", ev:"villanyszerelo"}
 ]},
 gazsi:{n:"Horváth „Gazsi” Gáspár", r:"uzsorás, strici", loc:"hordo", h:[21,3], vis:"v2_found", suspect:1, bio:"44 éves, arany lánc, puha hang. Pénzt kölcsönöz, lányokat futtat, és mindenkit „testvér”-nek szólít, akit meg akar fenyegetni.", topics:[
  {id:"kitti", l:"Vass Kittiről", t:"„Kitti? Szegény lány. Tartozott, ez igaz. De a halott nem fizet, testvér. Nekem élve kellett volna.” Mosolyog. „Gondoljon bele.”", f:"met_gazsi"},
  {id:"kedd", l:"Hol volt kedden éjjel?", t:"„Elmentem hozzá fél tízkor, nem nyitott ajtót. Utána idejöttem, és itt ültem zárásig. Kérdezze meg Lacit.” Bedob egy százast a gépbe. „Én mindig itt ülök, testvér.”"},
  {id:"levai", l:"Lévai Márkról", req:["levai_gazsi"], t:"Felnevet. „Az ügyvéd úr? Vasárnap fél tizenkettőkor a híd alatt kétszázezret hozott a háromszázból. Ketten voltak velem, láthatták.” Vállat von. „Láttam egy biciklis csávót is a lépcsőnél, mielőtt az ügyvéd odaért. Munkáskabát. Nem az én emberem.”", ev:"levai_tisztazva"}
 ]},
 laci:{n:"Laci", r:"kocsmáros", loc:"hordo", h:[15,3], bio:"A Hordó kocsmárosa, kor nélküli ember. Mindent hall, keveset mond. Decemberben fenyőágat tesz a pultra, és ez a legtöbb, amit ünnepnek hajlandó nevezni.", topics:[
  {id:"gazsi", l:"Gazsi kedd éjjel", req:["v2_found"], t:"„Kedden? Fél tíz után jött, leült a géphez, és zárásig ott ült. Háromkor küldtem haza.” Törölgeti a poharat. „Nem szeretem Gazsit. De kedden itt volt.”", ev:"gazsi_alibi"},
  {id:"pletyka", l:"Mit beszélnek?", t:"„Hogy a bírót kirabolták. Aki ismerte Szalait, nem hiszi. Csepelen azt mondják, Szalai régen sok fiatalt küldött be, akiknek nem kellett volna.”"}
 ]},
 bokszos:{n:"Szikszai „Bokszos” Imre", r:"gyerekkori barát", loc:"hordo", h:[19,2], bio:"47 éves, volt bokszoló, ma éjszakai portás. Ő az egyetlen, aki nem kérdezi, mikor hagyod abba.", topics:[
  {id:"rajna", l:"A Rajna fiúkról", req:["rajna_nev"], t:"„A Rajna gyerekek? A Csepeli Vasasban bokszoltak, a nagyobbik ügyes volt. Tamás. Aztán elvitték egy benzinkutas miatt, és a kicsi, Ádám, onnantól nem jött edzésre.” Iszik. „Villanyszerelő lett. Mindenhova biciklivel jár, télen is. Nem beszél senkivel.”", ev:"rajna_villany"},
  {id:"regi", l:"Csak iszol vele egyet (900 Ft)", rep:1, drink:1, dyn:"bokszosTalk"}
 ]},
 eszter:{n:"Gál Eszter", r:"bűnügyi újságíró", loc:"hordo", h:[18,23], bio:"38 éves, a Hírlap bűnügyi újságírója. Egyszer már hazudtál neki, ő kétszer neked. Ezen a héten fáradtabb, mint te.", topics:[
  {id:"konya", l:"Kónya keresett téged?", req:["v3_found"], t:"Leteszi a poharat. „Szerdán este írt. Csütörtök tízre beszéltünk meg találkozót. Azt mondta, mindent elhoz, 2019-et és 2020-at is. Somogyiról beszélt, Dénes. És rólad.” Hosszan néz. „Nem jött el. Most már tudom, miért.”", ev:"konya_eszter"},
  {id:"2020", l:"Mit tudsz a 2020-as rajtaütésről?", req:["konya_eszter"], t:"„Azt, amit mindenki. Rácz Gábor meghalt, te rossz parancsot adtál, Somogyi a vizsgálat után főkapitány-helyettes lett.” Elhallgat. „Kónya azt írta: »Dénes nem tehet róla.« Nem tudom, mit jelent. Szerintem te sem tudod.”"}
 ]},
 erika:{n:"Kónya Attiláné", r:"az özvegy", loc:"konya", h:[8,22], vis:"v3_found", bio:"Erika, 50 éves, ápolónő. Nem sír, csak a kezét dörzsöli, mintha fázna, pedig a konyhában meleg van.", topics:[
  {id:"szerda", l:"Mi történt szerdán?", sober:1, t:"„Este jött egy férfi. Magas, kopasz, a régi csapatából, fekete terepjáróval. Attila kiment hozzá az utcára, beszéltek, aztán az a férfi elhajtott.” Felnéz. „Attila utána egész este ivott. Éjfél után kiment a garázsba, azt mondta, levegőzik.”", ev:"fekete_terepjaro"},
  {id:"telefon", l:"Kivel beszélt mostanában?", sober:1, t:"„Szerdán délután telefonált. A nappaliban, de hallottam. Somogyi úrnak mondta: »Védelmet kérek, különben beszélek.«” Összeszorítja a száját. „Hat éve havonta pénz jött egy alapítványtól. Soha nem kérdeztem, miért.”", ev:"konya_somogyi"},
  {id:"felt", l:"Félt valamitől?", t:"„Hétfő óta. Amióta a bírót megtalálták. Azt mondta: »Erika, ez a 2019-es ügy. Én leszek a következő.«” Halkan felnevet, keserűen. „És igaza lett. Csak nem úgy, ahogy gondolta.”"}
 ]},
 kocsis:{n:"Kocsis Ilona", r:"irattáros", loc:"torvenyszek", h:[8,16], bio:"62 éves, harmincöt éve az irattárban. Minden ügyszámot fejből tud, és minden embert, aki valaha kikérte.", topics:[
  {id:"ugyszam", l:"Kikéred a B.18.451/2019-es iratot", req:["rajna_ugy|idezes_2019"], t:"„B.18.451/2019. Rajna Tamás.” Már indul is a polcok közé. „Furcsa. Ezt tavaly is kérte valaki. Egy fiatalember, munkásruhában. Nem adhattam ki neki.” Leteszi eléd a dossziét. „Magának kiadhatom. Szomorú ügy.”", doc:"per2019", f:["rajna_nev","rajna_cim"]},
  {id:"altalanos", l:"Szalai bíróról", t:"„Szalai bíró úr? Szigorú volt. Gyors. Azt mondták, negyven év alatt egyszer sem kért bocsánatot.” Elmosolyodik. „Tavaly karácsonykor hozott nekem egy szelet bejglit. Az ilyesmire is emlékszik az ember.”"}
 ]},
 rajna:{n:"Rajna Ádám", r:"villanyszerelő", loc:"rajna", h:[7,20], vis:"rajna_cim", gone:"rajna_elfogva", suspect:1, bio:"34 éves, csendes, alacsony, erős kezű. A műhelye rendes, mint egy kórterem. Úgy néz rád, mintha várt volna.", topics:[
  {id:"tamas", l:"A bátyjáról", t:"„Tamás nem ölt meg senkit. Négy évig mondta, minden hónapban, az üvegen keresztül.” Leteszi a csavarhúzót, pontosan a körvonalára a falon. „Aztán abbahagyta. Nem a mondást. Az életet.”"},
  {id:"hol", l:"Hol volt vasárnap, kedden és szerdán éjjel?", sober:1, t:"„Otthon. Egyedül. Mint minden este, mióta a bátyám meghalt.” Nem kérdez vissza, nem tiltakozik. „Ezt maga is tudja, főhadnagy.”", ev:"rajna_nincs_alibi"},
  {id:"szalai", l:"Szembesít: Szalai a hídnál", req:["rajna_hid|talalkozo|kalapacs_dns"], sober:1, t:"Sokáig hallgat. „Eljött. Azt hittem, nem jön el. Azt mondta, sajnálja. Hogy tévedett.” Lenéz a kezére. „Tudja, mit csinál az ember, ha négy év után valaki azt mondja, sajnálja? Semmit. Mert késő.”"},
  {id:"kitti", l:"Szembesít: Kitti", req:["rajna_kitti|kenyszer"], sober:1, t:"„Teát főzött nekem. Sírt. Azt mondta, minden éjjel látja Tamást a bíróságon.” A hangja nem változik. „Én is látom. Minden éjjel.”"},
  {id:"konya", l:"Szembesít: Kónya", req:["v3_found"], sober:1, t:"Most először néz rád igazán. „Kónyát nem én öltem meg.” Csend. „Valaki megelőzött, főhadnagy. Valaki, aki tudott a gyűrűről. Ki tudott a gyűrűről? Maga tudott. A maga emberei tudtak.” Visszafordul a munkapadhoz. „Keresse meg. Maga a rendőr.”", ev:"rajna_nem_konya"}
 ]}
},

// ---- STÁBFELADATOK ----
tasks:[
 {id:"boncolas1", l:"Szalai boncolása", req:["body1"], dur:300, fit:{keleti:1}, doc:"boncolas1", ok:"Keleti végzett Szalaival. Azt üzeni: nézd meg a gyűrűsujjat."},
 {id:"hidkamera", l:"Hídkamera felvételének átnézése", req:["hid_kamera"], dur:300, fit:{kata:.92, bence:.78, bodnar:.45}, doc:"hidkamera", ok:"Kész a 2207-es kamera kivonata.", fail:"Öt óra felvétel, a hóesés mindent eltakar. Valaki másnak jobb szeme lehet hozzá."},
 {id:"uzsoras", l:"Lévai uzsorásának ellenőrzése", req:["levai_vallomas"], dur:240, fit:{bodnar:.92, kata:.6, bence:.4}, ev:"levai_tisztazva", ok:"Bodnár beszélt Gazsi két emberével. Lévai vasárnap fél tizenkettőkor tényleg a híd alatt fizetett.", fail:"Gazsi emberei ma nem beszélnek. Holnap talán."},
 {id:"boncolas2", l:"Vass Kitti boncolása", req:["body2"], dur:300, fit:{keleti:1}, doc:"boncolas2", ok:"Keleti végzett Kittivel. Azt mondja, hívd fel, amint elolvastad."},
 {id:"heroin", l:"A fecskendő tartalmának vizsgálata", req:["body2"], dur:360, fit:{halasz:.95}, doc:"heroin", ok:"Halász megvizsgálta a fecskendőt."},
 {id:"boncolas3", l:"Kónya boncolása", req:["body3"], dur:300, fit:{keleti:1}, doc:"boncolas3", ok:"Keleti végzett Kónyával. A hangja furcsa a telefonban."},
 {id:"borton", l:"Rajna Tamás börtönaktájának lekérése", req:["rajna_nev"], dur:240, fit:{bence:.92, kata:.8, bodnar:.6}, doc:"borton", ok:"Megjött Rajna Tamás börtönaktája.", fail:"A BV intézet visszadobta a megkeresést. Újra kell küldeni."},
 {id:"kalapacs", l:"A kalapács vizsgálata", req:["kalapacs"], dur:420, fit:{halasz:.95, keleti:.8}, doc:"kalapacs", ok:"Halász végzett a kalapáccsal.", fail:"A minta túl kevés volt. Halász újrakezdi."},
 {id:"profil2", l:"Tettesprofil készítése", req:["ugyanaz_a_jel"], dur:180, fit:{feher:.95}, doc:"profil2", ok:"Fehér doktornő elküldte a profilt."},
 {id:"vedelem", l:"Védelem Varga Ottó házánál", req:["rajna_lista|pentek"], dur:60, fit:{kata:.92, bodnar:.88, bence:.75}, f:"varga_vedve", ok:"Varga háza előtt egy civil autó áll, benne két ember. Varga morog, de beengedte őket egy kávéra."},
 {id:"cella", l:"Halmos telefonjának cellainformációja", req:["belso_ember|halmos_konyanal|kata_titok"], dur:300, fit:{bence:.92, kata:.85}, doc:"cella_halmos", warn:"<h2>Bence az ajtóban</h2><p>„Halmos telefonja? Somogyi emberéé?” Nyel egyet. „Rendben. De ha ez kiderül, engem visznek el először.”</p>", ok:"Megjött Halmos cellainformációja. Bence sápadt.", fail:"A szolgáltató »technikai okból« nem adta ki. Valaki felhívta őket."},
 {id:"terepjaro", l:"Somogyi terepjárójának átvizsgálása", req:["halmos_konyanal"], dur:180, fit:{kata:.9, bodnar:.72}, doc:"terepjaro", warn:"<h2>Ezt nem fogják elfelejteni</h2><p>Egy főkapitány-helyettes szolgálati autóját átvizsgálni engedély nélkül a karriered végét jelentheti. Kata már veszi is a kabátját.</p>", ok:"Kata lezárta a terepjáró átvizsgálását, mielőtt Somogyi leállíttatta.", fail:"Somogyi embere nem adta oda a kulcsot. Holnap újra."}
],

actions:{
 ajandek:{loc:"konyvesbolt", l:"Chopin-noktürnök Lilinek (6 500 Ft)", cost:6500, mins:40, f:"ajandek", once:1, solve:1, x:"Az eladó becsomagolja. Megkérdezi, kinek lesz. „A lányomnak” — mondod, és ez furcsán hangzik a saját szádból."}
},

// ---- NYITOTT SZÁLAK ----
leads:[
 {need:["body1"], not:["doc:boncolas1"], x:"Szalai boncolása még hátravan. Keleti doktornőnek a Stáb fülön adhatod ki."},
 {need:["hid_kamera"], not:["doc:hidkamera"], x:"A hídon kamera van. Kata végignézheti a felvételt (Stáb)."},
 {need:["body1"], not:["itelet_boritek"], x:"Szalai lakását még nem nézted át (Rózsadomb, 8–22)."},
 {need:["levai_auto"], not:["levai_vallomas"], x:"Lévai autója ott állt a hídnál. Szembesítsd vele (Szalai-villa)."},
 {need:["levai_vallomas"], not:["levai_tisztazva"], x:"Lévai egy uzsorással találkozott a híd alatt. Valakinek igazolnia kell (Stáb, vagy kérdezd meg magát az uzsorást)."},
 {need:["v2_found"], not:["kitti_test"], x:"Új holttest a József utcában. Nézd meg a helyszínt."},
 {need:["body2"], not:["doc:boncolas2"], x:"Vass Kitti boncolása még hátravan (Stáb)."},
 {need:["kitti_tartozas|gazsi_lepcsohaz"], not:["gazsi_alibi"], x:"Gazsi kedd este Kitti ajtajánál dörömbölt. Hol volt utána? A Hordóban mindent tudnak."},
 {need:["itelet_boritek","idezes_2019"], not:["rajna_ugy"], x:"Szalai asztalán és Kitti tükre mögött is egy 2019-es papír volt. Nézd meg a számukat a táblán."},
 {need:["rajna_ugy"], not:["doc:per2019"], x:"A 2019-es per iratai a Törvényszék irattárában vannak (8–16)."},
 {need:["rajna_lista"], not:["varga_vedve","rajna_elfogva","v4_found"], x:"A 2019-es per szereplői: Szalai, Vass, Kónya, Varga. Ha ez lista, akkor ki a következő? Védelmet a Stáb fülön adhatsz."},
 {need:["rajna_cim"], not:["rajna_villany"], x:"Rajna Ádám műhelye Csepelen van. Nézz körül."},
 {need:["kalapacs"], not:["doc:kalapacs"], x:"A lemosott kalapácsot Halász megvizsgálhatja (Stáb)."},
 {need:["v3_found"], not:["konya_test"], x:"Kónya Attilát holtan találták Újpesten. Nézd meg a helyszínt."},
 {need:["body3"], not:["doc:boncolas3"], x:"Kónya boncolása még hátravan (Stáb)."},
 {need:["fekete_kotozo|kotozo_elter"], not:["masolat"], x:"A harmadik kötöző más, mint az első kettő. Hasonlítsd össze a táblán."},
 {need:["masolat"], not:["belso_ember"], x:"Ha valaki utánozta a jelet, honnan ismerte? Keleti tudja, ki kapta meg az első boncolást."},
 {need:["v3_found"], not:["fekete_terepjaro"], x:"Kónya özvegye otthon van. Kérdezd meg, ki járt náluk szerdán."},
 {need:["konya_eszter|v3_found"], not:["kata_titok"], x:"Kata furcsán viselkedik Kónya halála óta. Beszélj vele (és ha kell, előbb igyatok meg egyet)."},
 {need:["halmos_konyanal"], not:["doc:cella_halmos"], x:"Halmos telefonjának mozgása megmutatná, hol volt szerda éjjel (Stáb)."},
 {need:["v3_found"], not:["apa_konya"], x:"Apád régi rendőr. Lehet, hogy emlékszik valamire a 2020-as temetésről. Délelőtt tiszta a feje."},
 {need:["lili_inv"], not:["ajandek","lili_bday","lili_bday_reszeg","lili_bday_missed"], x:"Csütörtökön este Lili születésnapja (Trattoria Pomo, 18–22). Ajándék a Kotta- és könyvesboltban."},
 {need:["feher_hivas"], not:["feher_ules2","feher_kihagy"], x:"Fehér doktornő kedden 9 és 17 között vár az alkalmassági beszélgetésre. Józanon menj."}
],

// ---- IDŐZÍTETT ESEMÉNYEK ----  t: perc hétfő 00:00-tól
timed:[
 {id:"feher", at:600, f:"feher_hivas", x:"<b>E-mail, dr. Fehér Judit:</b> Kötelező alkalmassági beszélgetés, kedden 9 és 17 óra között. Ha nem jön el, jelentést írok."},
 {id:"lili", at:1200, f:"lili_inv", x:S=>S.f.lili_missed?"<b>SMS, Lili:</b> Csütörtökön 7-kor vacsora a Trattoria Pomóban. Anya szerint úgysem jössz. Én azért szólok.":"<b>SMS, Lili:</b> Csütörtökön 7-kor születésnapi vacsora a Trattoria Pomóban. Gyere, ha tudsz. De tényleg gyere."},
 {id:"hirlap1", at:1860, front:{h:"Kirabolták és megölték Szalai bírót",s:"A nyugalmazott bíró holttestét a Vámház-hídnál találták meg",b:"Somogyi Kristóf főkapitány-helyettes szerint rablógyilkosság történt. „A tettest karácsony előtt kézre kerítjük” – nyilatkozta lapunknak."}},
 {id:"feherkihagy", at:2460, unless:"feher_ules2", f:"feher_kihagy", pat:-15, x:"<b>E-mail, dr. Fehér Judit:</b> Ma nem jött el. A jelentésem a főnöke asztalán van."},
 {id:"v2", at:3300, f:"v2_found", modal:"<h2>Szerda, 07:00 – telefon</h2><p>Bence: „József utca, negyedik emelet. Egy fiatal nő, Vass Kitti, túladagolás.” Szünet. „Keleti doktornő azt mondja, nézd meg személyesen. Nem mondta, miért.”</p>"},
 {id:"nora_hiv", at:4140, req:["nora_help","v2_found"], ev:"kitti_konya", modal:"<h2>Szerda, 21:00 – telefon, Szeged</h2><p>Nóra hangja halk, a háttérben gyerekzsivaj. „Olvastam Kittiről. Együtt kezdtük, Dénes.” Hosszú csend. „2019-ben egy zsaru pénzt adott neki, hogy felismerjen valakit a bíróságon. Kónyának hívták. Kitti azt mondta, egy ártatlan embert küldött börtönbe.” Aztán: „Itt jó. Csend van. Vigyázz magadra.”</p>"},
 {id:"v3", at:4710, f:"v3_found", modal:"<h2>Csütörtök, 06:30 – telefon</h2><p>Varga hangja rekedt. „Kónya Attila. Újpest, a saját garázsában.” Hosszú csend. „Kónya volt a nyomozó a 2019-es Rajna-ügyben, Dénes. Az enyémben.”</p>"},
 {id:"hirlap2", at:4800, front:{h:"Sorozatgyilkos jár a városban?",s:"Bíró, tanú, rendőr: három halott négy nap alatt",b:"Somogyi Kristóf főkapitány-helyettes személyesen vette át a nyomozás koordinálását. „Egy elkövető, egy indíték. Hamarosan letartóztatást jelentünk be” – mondta. Lapunk értesülése szerint az áldozatokat egy rituális jel köti össze."}},
 {id:"apa", at:4920, f:"apa_korhaz", modal:"<h2>Csütörtök, 10:00 – telefon</h2><p>A Platán otthonból hívnak. Apád hajnalban elesett a lépcsőn, combnyaktörés. A Szent János kórházba vitték, holnap műtik. „Magát kérdezte” – mondja a nővér. „Illetve az édesanyját. De magát is.”</p>"},
 {id:"lilimiss", at:4*1440-1440+1320, unless:"lili_bday|lili_bday_reszeg", f:"lili_bday_missed", x:"<b>SMS, Lili:</b> Elfújtam a gyertyákat. Anyának igaza volt."},
 {id:"v4", at:4*1440+1320, unless:"rajna_elfogva|varga_vedve", f:["v4_found","varga_halott"], pat:-20, modal:"<h2>Péntek, 22:40 – telefon</h2><p>Bence sír a telefonban. Először nem érted, mit mond. Aztán érted.</p><p>„Varga. Otthon. Az előszobában.”</p><p>Leteszed a telefont, és sokáig ülsz a sötétben. Varga figyelmeztetett, hogy mindegyik tagad. Te nem figyelmeztetted őt eléggé.</p>"},
 {id:"v4b", at:4*1440+1320, req:["varga_vedve","!rajna_elfogva"], ev:"rajna_menekul", f:"merenylet", modal:"<h2>Péntek, 22:20 – telefon</h2><p>Kata: „Varga kapujában várta. Kalapáccsal. Bodnár észrevette, kiugrott a kocsiból, a fickó elbiciklizett a hóban.” Lihegés. „Varga jól van. Dühös, de él. És megvan az arca a kapukamerán, Dénes. Rajna Ádám.”</p>"},
 {id:"hirlap3", at:5*1440+420, req:["varga_halott"], front:{h:"Megölték a gyilkossági osztály vezetőjét",s:"Varga Ottó alezredes a negyedik áldozat",b:"Somogyi Kristóf főkapitány-helyettes ideiglenesen átvette a gyilkossági osztály irányítását. „Aki ezt tette, nem marad büntetlenül” – mondta, majd elcsukló hangon hozzátette: Varga Ottó a barátja volt."}}
],

locEvents:[
 {id:"somogyi1", loc:"kapitanysag", when:S=>!!S.f.v3_found, f:"halmos_seen", html:"<h2>Somogyi az osztályon</h2><p>A tárgyalóban Somogyi Kristóf áll a tábla előtt, a kezében a te jegyzeteid. Mögötte Halmos Péter, magas, kopasz, a fal mellett, mint egy szekrény.</p><p>„Mátrai. Mostantól személyesen koordinálom. Egy tettes, három áldozat, egy jel.” Visszaadja a jegyzeteidet. „Ne bonyolítsa túl.”</p>"},
 {id:"somogyi2", loc:"kapitanysag", when:S=>!!(S.ev.halmos_konyanal||S.ev.halmos_cella), pat:-15, html:"<h2>„Jöjjön be, Mátrai”</h2><p>Somogyi irodája, csukott ajtó. Nem ül le, és téged sem kínál hellyel.</p><p>„Hallom, Halmos telefonját nézegeti. És a kocsimat.” Megigazítja a mandzsettáját. „Halmos tizenkét évig védte ezt az országot. Maga hat éve iszik. Gondolja, hogy egy bíróság kinek fog hinni?”</p>"},
 {id:"vargaholt", loc:"kapitanysag", when:S=>!!S.f.varga_halott, html:"<h2>Az üres iroda</h2><p>Varga irodájának ajtaján fekete szalag. Az asztalán a whisky a fiókban, ahogy hagyta. Somogyi titkárnője már dobozolja a papírjait.</p><p>Bence nem néz rád. Kata igen, és ez rosszabb.</p>"},
 {id:"dd", loc:"kapitanysag", when:(S,h,A)=>A.inWin(h,[7,19])&&!!S.f.drunkdrive&&!S.f.varga_halott, html:"<h2>„Gyere be egy percre”</h2><p>Varga becsukja az ajtót. „Egy járőr megállított tegnap éjjel. Nem írta fel. Nekem viszont elmondta.” Kiveszi a fiókból a whiskyt, ránéz, visszateszi. „Legközelebb taxival.”</p>"},
 {id:"drunk", loc:"kapitanysag", when:(S,h,A)=>A.inWin(h,[7,19])&&S.alc>55, pat:-10, html:"<h2>Megszagolnak</h2><p>„Délelőtt van, Dénes.” Ennyit mond valaki a folyosón, és továbbmegy. Bence úgy tesz, mintha nem hallotta volna.</p>"}
],

// ---- ÜGYSPECIFIKUS SZÖVEGEK ----
dyn:{
  annaKave(S){
    if(S.alc>40){S.f.anna_reszeg=S.t;return'„Kávét? Inkább vizet igyon, főhadnagy.” Kedvesen mondja, ahogy egy beteggel beszél. Aztán továbbmegy a folyosón, és nem néz vissza.'}
    S.f.anna_kave=S.t;S.crave=Math.max(0,S.crave-10);
    return'Két műanyag pohár, rossz kávé, a folyosó végén, az ablaknál. Kiderül, hogy harminchat órája van bent, hogy maratont fut, és hogy rendőrökkel nem randevúzik, mert mind hazudnak. „Én nem randevúzok” — mondod. „Látja, már hazudik” — mondja, és nevet. Nem emlékszel, mikor nevetett utoljára valaki úgy, hogy rajtad.';
  },
  hintBence(S){
    if(S.f.hid_kamera&&!S.docs.hidkamera)return'„Lekérjem a hídkamerát? Kata jobb benne, de én is meg tudom csinálni.”';
    if(S.ev.itelet_boritek&&S.ev.idezes_2019&&!S.ev.rajna_ugy)return'„A bíró asztalán egy 2019-es ítélet, a lány tükre mögött egy 2019-es idézés. Nem lehet, hogy ugyanaz?”';
    if(S.f.rajna_nev&&!S.docs.borton)return'„Lekérem a Rajna Tamás-féle börtönaktát. Ha volt látogatója, az ott lesz.”';
    if(S.f.v3_found&&!S.ev.masolat)return'„Mindenki azt mondja, ugyanaz a tettes. Akkor miért fekete a kötöző?”';
    return'„Szerintem ez nem rablás volt. Ki megy le éjjel tízkor egy hídhoz a hóban, ha nincs dolga ott?”';
  },
  hintKata(S){
    if(S.f.hid_kamera&&!S.docs.hidkamera)return'„A hídon kamera van. Adj öt órát.”';
    if(S.ev.kerekpar_kamera&&!S.ev.rajna_hid)return'„Kerékpáros munkáskabátban, éjjel, hóban. Ki jár így? Aki mindig így jár.”';
    if(S.f.v3_found&&!S.f.kata_titok)return'Nem néz rád. „Kónyáról nem akarok beszélni. Még nem.”';
    if(S.f.kata_titok)return'„Halmos. Hat éve tudom, és hat éve nem tudom bizonyítani. Most talán igen.”';
    return'„Szalai negyven évig ítélt. Az ilyen embernek nem ellensége van, hanem listája.”';
  },
  hintBodnar(S){
    if(S.ev.kitti_tartozas&&!S.ev.gazsi_alibi)return'„Gazsi? Ő nem öl. Ő fenyeget. A halott nem fizet. Kérdezd meg Lacit, hol ült kedden.”';
    if(S.f.levai_vallomas&&!S.ev.levai_tisztazva)return'„Az ügyvéd Gazsinak fizetett a híd alatt? Utánanézek. Gazsi emberei nekem beszélnek.”';
    if(S.f.halmos_seen)return'„Halmos? Tizenkét év terrorelhárítás. Az ilyen ember nem kalapáccsal öl. Az ilyen embernek a keze a fegyver.”';
    return'„A Hordóban mindent tudnak. Én a helyedben ott inni.”';
  },
  hintHalasz(S){
    if(S.ev.kalapacs&&!S.docs.kalapacs)return'„Hozd a kalapácsot. Mindent lemosnak, csak a repedést nem. Mindig a repedést nem.”';
    if(S.f.body2&&!S.docs.heroin)return'„A fecskendőt megnézzem? Megmondom, honnan jött az anyag.”';
    return'„Hozz valamit, és megmondom, mi az.” A hangszóróból karácsonyi Omega szól, és ezt nem tartja ellentmondásnak.';
  },
  feherUles(S){
    if(S.alc>40){S.f.feher_rossz=S.t;S.f.feher_ules2=S.t;S.pat-=10;return'Leülsz. Ő megszagolja a levegőt, és nem mond semmit, csak ír. Hosszan. „Köszönöm, főhadnagy. Ennyi elég volt.” <i>(A jelentése nem lesz jó. A főnököd türelme fogy.)</i>'}
    S.f.feher_ok=S.t;S.f.feher_ules2=S.t;S.loy.feher=Math.min(100,S.loy.feher+10);
    return'„Hogy alszik?” Rosszul. Ezt most ki is mondod. Meglepődik. „Mennyit iszik?” Sokat. Ezt is kimondod. Leteszi a tollat. „Rácz Gábor halála óta?” Nem válaszolsz, és ő nem erőlteti. „Alkalmas — írja fel. — Egyelőre.”';
  },
  apaKorhaz(S){
    const A=['Alszik. A monitor egyenletesen csipog. Fogod a kezét, és az ablakon túl hull a hó a Városmajorra.',
      'Felébred, rád néz. „Dénes? Mit keresel itt? Nincs dolgod?” Van. Maradsz mégis.',
      '„Anyád itt volt” — mondja. Nem javítod ki. „Azt mondta, büszke rád.” Nem tudod, ő mondja-e, vagy anyád.'];
    S.f.ak=(S.f.ak||0)+1;return A[(S.f.ak-1)%A.length];
  },
  liliBday(S){
    if(S.alc>40){S.f.lili_bday_reszeg=S.t;return'Késve érsz oda, és a pincér arcából tudod, hogy látszik rajtad. Lili mosolyog, udvariasan, ahogy egy idegenre. Az anyja nem szól semmit, csak eltolja előled a borospoharat. Fél óra múlva Lili azt mondja: „Apa, holnap korán kelek.” Nincs holnap iskola.'}
    S.f.lili_bday=S.t;S.crave=Math.max(0,S.crave-35);
    return'Leülsz. Lili meglepődik, aztán úgy tesz, mintha nem lepődne meg. Az anyja rád néz, és bólint, egyetlen egyszer. Lili mesél: a zongoráról, egy fiúról, akiről nem akar mesélni, a felvételiről. Te hallgatod. A tortánál elénekelitek, hamisan. Egy órán át nem gondolsz a gyűrűsujjakra.';
  }
},
rejectExtra:{halmos:'<p>Este Somogyi hív. Nem kiabál. Azt mondja: „Mátrai, magának már csak egy hibája maradt.”</p>'},
bonus:function(S){const b=[];if(S.f.varga_halott)b.push([-10,'Varga meghalt']);else if(S.f.varga_vedve||S.f.rajna_elfogva)b.push([5,'Varga életben maradt']);if(S.f.lili_bday)b.push([5,'Ott voltál Lili születésnapján']);if(S.f.lili_bday_missed)b.push([-5,'Kihagytad Lili születésnapját']);return b},
solveGoal:["rajna_hid","rajna_kitti","kalapacs_dns","halmos_inditek","halmos_cella","fojtas_halmos","masolat"],

// ---- BEFEJEZÉS ----
end:{
 title:function(S){const ok=["v1","v2","v3"].every(v=>S.verd[v]&&S.verd[v].ok);return ok?"Ügy lezárva":"Ügy lezárva – de nem úgy"},
 multi:function(S){
  const V=S.verd,ok=v=>V[v]&&V[v].ok;let t="";
  if(ok("v1")&&ok("v2")){
    t+="<p>Rajna Ádám a kihallgatóban ül, a kezét az asztalon tartja, és mindent elmond, sorrendben, pontosan, ahogy egy villanyszerelő bekötési rajzot magyaráz. Szalai eljött, és bocsánatot kért. Kitti teát főzött. Egyikük sem tudta, hogy a lista végén ott van a nevük.</p><p>Amikor végez, csak ennyit kérdez: „Felülvizsgálják Tamás ügyét?” Nem tudsz mit mondani neki.</p>";
  }else{
    if(V.v1&&!ok("v1"))t+="<p>Lévai Márkot elítélik az apósa meggyilkolásáért. A felesége elválik tőle, a villát eladják. Lévai a tárgyaláson végig egy kerékpáros férfiról beszél, akit senki nem keresett.</p>";
    if(V.v2&&!ok("v2"))t+="<p>Gazsit elítélik Vass Kitti meggyilkolásáért. A VIII. kerületben senki nem sajnálja, és senki nem hiszi el. Laci egy héten át nem tölt neked.</p>";
    if(!S.f.rajna_elfogva)t+="<p>Rajna Ádám műhelyét üresen találjátok. A füzetéből kitépett lapok. A kerékpár eltűnt.</p>";
  }
  if(S.f.varga_halott)t+=ok("v4")?"<p>Varga Ottót csütörtökön temetik, a hóban. Somogyi beszédet mond. Te a sor végén állsz, és arra gondolsz, hogy Varga két hete még azt mondta: mindegyik tagad. Rajna nem tagadta.</p>":"<p>Varga Ottót csütörtökön temetik, a hóban. Somogyi beszédet mond. A gyilkosa szabadon jár, és te tudod, hogy ezt a te listádra is fel lehetne írni.</p>";
  else if(S.f.merenylet)t+="<p>Varga Ottó a kapukamera felvételét nézi a monitoron, újra és újra, ahogy Bodnár kiugrik a kocsiból. „Egy villanyszerelő” — mondja. „Kalapáccsal.” Aztán kinyitja a fiókot, és két poharat tölt.</p>";
  if(ok("v3")){
    t+="<p>Halmos Pétert őrizetbe veszik Kónya Attila meggyilkolása miatt. A kihallgatáson egyetlen szót sem szól. Másnap reggel egy drága ügyvéd viszi el, és délben a minisztérium közleményt ad ki: a főkapitány-helyettes „minden együttműködést megad”.</p><p>Somogyi Kristóf a folyosón megáll melletted. „Gratulálok, Mátrai.” Megigazítja a nyakkendőjét. „Halmos hallgatni fog. Tizenkét évig tanulta.” Tudod, hogy igaza van. Tudod azt is, hogy ez még nem ért véget.</p>";
  }else if(V.v3){
    if(V.v3.s==="rajna"&&!(ok("v1")&&ok("v2")))t+="<p>Rajna Ádámot Kónya Attila meggyilkolásáért ítélik el. Az egyetlen gyilkosságért, amit nem ő követett el. A tárgyaláson nem tagad semmit, csak egyszer néz fel, rád: „Megkereste?”</p>";
    t+="<p>Kónya Attila gyilkosságát is a gyűrűsujjas tettesre írják. Somogyi sajtótájékoztatót tart, kezet ráz mindenkivel, a te kezedet is. Mögötte Halmos áll, és nem néz rád. Nem kell.</p>";
  }
  if(S.f.kata_titok)t+="<p>Kata a temető kapujában vár rád, december 14-én, az apja halálának évfordulóján. Nem beszéltek meg semmit. Egymás mellett álltok a sír előtt. „Nem te voltál” — mondja. Hat év után először hiszed el.</p>";
  else if(S.ev.apa_konya)t+="<p>Apád szavai nem mennek ki a fejedből: a lövés nem Dénes felől jött. Hat évig cipelted. Most nem tudod, mit kezdj a súlytalansággal.</p>";
  if(S.f.lili_bday&&S.f.lili_ajandek)t+="<p>Szombat délelőtt Lili felhív. Nem mond semmi különöset, csak hogy gyakorolja a noktürnt, és a harmadik oldalon mindig elrontja. Hallgatod a telefonban, ahogy elrontja. Aztán újrakezdi.</p>";
  else if(S.f.lili_bday)t+="<p>Lili éjjel írt: <i>köszi h ott voltál</i>. Megint pont nélkül.</p>";
  else if(S.f.lili_bday_reszeg)t+="<p>Lili azóta nem írt. A tortából hazavitt szeletet egy hétig nem dobod ki a hűtőből.</p>";
  else if(S.f.lili_bday_missed)t+="<p>A telefonodon Lili üzenete: <i>Elfújtam a gyertyákat. Anyának igaza volt.</i> Kétszer kezdesz válaszolni. Egyszer sem küldöd el.</p>";
  if(S.f.apa_latogatas)t+="<p>Apádat kedden kiengedik a kórházból. Járókerettel megy végig a folyosón, és a nővérnek azt mondja: „Ez a fiam. Rendőr. A legjobb.” Nem javítod ki.</p>";
  else if(S.f.apa_korhaz)t+="<p>Apádat kedden kiengedik a kórházból. Nem voltál bent nála. A nővér azt mondja, sokat kérdezett utánad.</p>";
  if(S.f.anna_szam)t+="<p>December 23-án SMS jön egy ismeretlen számról: <i>A papája jól van. Járókerettel már a folyosó végéig megy, és mindenkinek magáról mesél. – Kerekes dr.</i> Elmented a számot. Annának.</p>";
  else if(S.f.anna_reszeg)t+="<p>A kórházban a folyosó végén egy orvosnő kedvesen azt mondta, igyál vizet. Néha eszedbe jut. Nem tudod, miért.</p>";
  return t;
 },
 fired:"<p>Somogyi aláírja a felfüggesztésedet. Az ügyet Halmos „segítségével” zárják le, egyetlen tettessel, mindhárom gyilkossággal. A sajtó boldog.</p><p>Te a Hordóban ülsz. Laci kérdés nélkül tölt, és egy idő után leül melléd. Ez még soha nem történt meg.</p>"
}
};
