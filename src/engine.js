{
const $=s=>document.querySelector(s);
const KEY='revesz_save_v2', META='redemption_meta_v1';
const DAYN=['hétfő','kedd','szerda','csütörtök','péntek','szombat','vasárnap'];
const MON=['jan.','febr.','márc.','ápr.','máj.','jún.','júl.','aug.','szept.','okt.','nov.','dec.'];
const STAFF=['bence','kata','bodnar','halasz','keleti','feher'];
const CAT={I:'Indíték',A:'Alkalom',M:'Módszer'};
const PERSIST=['nora_help','koncert','koncert_reszeg','lili_missed','apa_revesz','apa_1994','berkes_beismeres','leak','lili_bday','lili_bday_reszeg','lili_bday_missed','kata_titok','apa_korhaz','varga_halott','halmos_vad','rajna_elfogva','merenylet','lili_ajandek','apa_latogatas','apa_racz','lili_alairas','apa_halal','apa_temetes','apa_bucsu','bodnar_vad','somogyi_bukik','denes_tisztazva'];
let CASE,P,L,E,ORDER,VICT,SOL,S=null;
function setCase(id){
  CASE=CASES[id];P=CASE.people;L=CASE.locs;E=CASE.ev;ORDER=CASE.order||Object.keys(CASE.suspects);
  VICT=CASE.victims||[{id:'main',n:'Halmi Zsófia'}];SOL=CASE.solution||{main:CASE.culprit};
}
const CASE_IDS=Object.keys(CASES);

// ---------- állapot ----------
function meta(){try{return JSON.parse(localStorage.getItem(META))||{done:{},persist:null}}catch(e){return{done:{},persist:null}}}
function saveMeta(m){try{localStorage.setItem(META,JSON.stringify(m))}catch(e){}}
function fresh(cid){
  setCase(cid);const m=meta(),ps=m.persist;
  const s={case:cid,t:CASE.start.t,loc:CASE.start.loc,fat:35,alc:18,crave:30,money:ps?Math.max(ps.money,8000):14600,bottle:3,pat:100,
    ev:{},f:{},docs:{},done:{},hs:{},tr:{},staff:{},loy:{},pending:[],board:{},verd:{},rejects:0,ended:null,log:[],fired:{},notes:[],
    view:'loc',tab:null,doc:null,sel:[],day:0,visited:{},prev:m.done||{}};
  STAFF.forEach(id=>{s.staff[id]={busy:0,load:0};s.loy[id]=ps&&ps.loy&&ps.loy[id]!=null?ps.loy[id]:60});
  if(ps&&ps.f)PERSIST.forEach(k=>{if(ps.f[k])s.f[k]=1});
  return s;
}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}}
function load(){try{const v=localStorage.getItem(KEY);return v?JSON.parse(v):null}catch(e){return null}}
function has(k){
  if(k.startsWith('doc:'))return!!S.docs[k.slice(4)];
  if(k.startsWith('loy:')){const[,id,v]=k.split(':');return S.loy[id]>=+v}
  if(k.startsWith('!'))return!has(k.slice(1));
  return!!(S.ev[k]||S.f[k]);
}
const reqOk=r=>!r||r.every(g=>g.split('|').some(has));
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

// ---------- idő ----------
const hourOf=t=>Math.floor((t%1440)/60);
const clock=t=>String(hourOf(t)).padStart(2,'0')+':'+String(t%60).padStart(2,'0');
function dayLabel(t){const d=Math.floor(t/1440),c=CASE.date||[2026,10,23],dt=new Date(c[0],c[1],c[2]+d);return `${d+1}. nap · ${DAYN[d%7]}, ${MON[dt.getMonth()]} ${dt.getDate()}.`}
const inWin=(h,w)=>!w||(w[0]<w[1]?h>=w[0]&&h<w[1]:h>=w[0]||h<w[1]);
const mult=()=>(S.fat>85?1.4:1)*(S.crave>70?1.25:1);
const clamp=v=>Math.max(0,Math.min(100,v));
const dayIdx=()=>Math.floor(S.t/1440);
function advance(m,sleepRate){
  m=Math.round(m);
  while(m>0&&!S.ended){
    const dt=Math.min(10,m);m-=dt;S.t+=dt;
    if(sleepRate)S.fat=clamp(S.fat-sleepRate*dt);else S.fat=clamp(S.fat+4.5/60*dt);
    S.alc=clamp(S.alc-7/60*dt);
    S.crave=clamp(S.crave+(S.alc<15?3.5:-5)/60*dt);
    const d=Math.floor((S.t-360)/1440);
    if(d>S.day){S.day=d;STAFF.forEach(id=>S.staff[id].load=0)}
    checkPending();checkTimed();
  }
  if(S.skip&&!S.ended){const k=S.skip;S.skip=0;advance(k,.12)}
  if(!sleepRate&&S.fat>=100&&!S.ended)collapse();
}
function act(m){advance(m*mult())}
function collapse(){
  advance(360,0.1);S.fat=45;
  queue('<h2>Elsötétül minden</h2><p>Egyszer csak a padlót látod, közelről. Valaki a nevedet mondja, aztán már nem.</p><p>Hat órával később térsz magadhoz, ugyanott, zsibbadt karral és üres zsebbel a fejedben.</p>');
}

// ---------- napló, értesítés ----------
function note(txt,kind){
  S.log.unshift({t:S.t,x:txt});
  const box=$('#toasts');while(box.children.length>3)box.firstChild.remove();
  const el=document.createElement('div');el.className='toast'+(kind?' '+kind:'');el.innerHTML=txt;
  box.appendChild(el);setTimeout(()=>el.classList.add('out'),4200);setTimeout(()=>el.remove(),4800);
}
function addEv(id){if(!E[id]||S.ev[id])return;S.ev[id]=S.t;note('Új bizonyíték: <b>'+E[id].n+'</b>','ev')}
function addDoc(id){if(S.docs[id])return;S.docs[id]={n:1};note('Új akta: <b>'+CASE.docs[id].t+'</b>','doc')}
function setF(k){if(!S.f[k])S.f[k]=S.t||1}
let Q=[];
function queue(html,btns){Q.push([html,btns]);if($('#modal').hidden)nextModal()}
function nextModal(){const x=Q.shift();if(x)modal(x[0],x[1]||[['Tovább','close']])}
function front(f){
  queue(`<div class="paperfront"><div class="mast">Hírlap<span>${dayLabel(S.t).split(' · ')[1]}</span></div><h2>${f.h}</h2>${f.s?`<p class="deck">${f.s}</p>`:''}<p>${f.b||''}</p></div>`,[['Leteszed az újságot','close']]);
}

// ---------- stáb ----------
function staffState(id){
  const st=S.staff[id],p=P[id];
  if(p.gone&&reqOk([p.gone]))return{k:'off',x:'Nincs többé a stábban'};
  if(st.busy>S.t)return{k:'busy',x:'Dolgozik · kész '+clock(st.busy)};
  if(!inWin(hourOf(S.t),p.h))return{k:'off',x:`Nincs bent (${p.h[0]}–${p.h[1]} óra)`};
  return{k:'free',x:'Szabad'};
}
function taskAvail(tk){
  if(S.done['task:'+tk.id]||S.pending.some(p=>p.task===tk.id))return false;
  if(!reqOk(tk.req))return false;
  if(tk.minEv&&Object.keys(S.ev).length<tk.minEv)return false;
  return true;
}
function chance(tk,sid){const st=S.staff[sid];return Math.max(.15,Math.min(.98,(tk.fit[sid]||0)+(S.loy[sid]-60)/250-Math.max(0,st.load-1)*.08))}
function dispatch(tid,sid){
  const tk=CASE.tasks.find(x=>x.id===tid);if(!tk||!taskAvail(tk))return;
  if(staffState(sid).k!=='free')return;
  const st=S.staff[sid];
  const sab=!!(tk.sab&&tk.sab[sid]);
  const ok=!sab&&Math.random()<chance(tk,sid);
  if(S.loc!=='kapitanysag')act(5);
  if(st.load>=2){S.loy[sid]=clamp(S.loy[sid]-6);note(`${P[sid].n} szó nélkül indul. Ma ez már a harmadik feladata.`,'bad')}
  st.load++;st.busy=S.t+tk.dur;
  S.pending.push({task:tid,staff:sid,at:S.t+tk.dur,ok,sab});
  note(`${P[sid].n} elindult: ${tk.l.toLowerCase()}. Kész kb. ${clock(S.t+tk.dur)}.`);
  if(tk.loy)for(const k in tk.loy)S.loy[k]=clamp(S.loy[k]+tk.loy[k]);
  if(tk.warn){S.pat-=5;queue(tk.warn)}
  checkPat();render();
}
function checkPending(){
  for(const p of S.pending.slice()){
    if(S.t<p.at)continue;
    S.pending.splice(S.pending.indexOf(p),1);
    const tk=CASE.tasks.find(x=>x.id===p.task),who=P[p.staff].n;
    if(p.ok){S.done['task:'+tk.id]=1;S.loy[p.staff]=clamp(S.loy[p.staff]+2);if(tk.doc)addDoc(tk.doc);if(tk.f)setF(tk.f);if(tk.ev)addEv(tk.ev);note(who+': '+tk.ok,'doc')}
    else if(p.sab){setF('sab_'+tk.id);note(who+': '+tk.sab[p.staff],'bad')}
    else{S.loy[p.staff]=clamp(S.loy[p.staff]-2);note(who+': '+(tk.fail||'Nem sikerült. Próbáld újra, vagy küldj mást.'),'bad')}
  }
}
function checkTimed(){
  for(const x of CASE.timed||[]){
    if(S.fired['tm:'+x.id]||S.t<x.at)continue;
    if(x.req&&!reqOk(x.req)){if(!x.wait)S.fired['tm:'+x.id]=1;continue}
    S.fired['tm:'+x.id]=1;
    if(x.unless&&reqOk([x.unless])){if(x.alt)fireT(x.alt);continue}
    fireT(x);
  }
}
function fireT(x){
  if(x.f)[].concat(x.f).forEach(setF);if(x.money)S.money+=x.money;if(x.pat)S.pat+=x.pat;
  if(x.ev)[].concat(x.ev).forEach(addEv);if(x.doc)addDoc(x.doc);
  if(x.x)note(typeof x.x==='function'?x.x(S):x.x,'msg');
  if(x.front)front(typeof x.front==='function'?x.front(S):x.front);
  if(x.modal)queue(typeof x.modal==='function'?x.modal(S):x.modal);
  if(x.go){S.loc=x.go;S.view='loc';S.tab=null}
  if(x.skip)S.skip=(S.skip||0)+x.skip;
  checkPat();
}
function isClosed(l,h){return(l.open&&!inWin(h,l.open))||(l.day!==undefined&&dayIdx()!==l.day)}
const visible=o=>(!o.vis||reqOk([o.vis]))&&(!o.gone||!reqOk([o.gone]));

// ---------- utazás ----------
function travelMin(a,b){
  const A=L[a],B=L[b],d=Math.hypot(A.x-B.x,A.y-B.y);
  return Math.round(7+d/11+(A.side!==B.side?6:0));
}
function go(id,mode){
  if(id===S.loc||S.ended)return;
  if(S.alc>45&&!mode){
    modal(`<h2>Volán mögé ülsz?</h2><p>A szádban még ott az íze. A kezed nem egészen a tiéd.</p>`,[[`Taxi (2 500 Ft)`,'travel:'+id+':taxi',S.money<2500],['Vezetsz','travel:'+id+':drive'],['Maradsz','close']]);
    return;
  }
  if(mode==='taxi')S.money-=2500;
  act(travelMin(S.loc,id));
  if(mode==='drive'&&Math.random()<.22){
    setF('drunkdrive');S.pat-=15;
    queue('<h2>Kék villogó a visszapillantóban</h2><p>Egy fiatal járőr hajol az ablakhoz, aztán megismer. Hosszan néz, és elenged. Holnapra a főnököd tudni fogja.</p>');
  }
  if(!S.ended){S.loc=id;S.view='loc';S.visited[id]=1;locEvents()}
  checkPat();render();
}
const API={addEv:id=>addEv(id),addDoc:id=>addDoc(id),has:k=>has(k),hourOf,inWin,clamp,setF:k=>setF(k),leads:()=>leads(),n:()=>Object.keys(S.ev).length,P:()=>P};
function locEvents(){
  const h=hourOf(S.t);
  for(const x of CASE.locEvents||[]){
    if(S.fired['le:'+x.id]||(x.loc&&x.loc!==S.loc))continue;
    if(x.when&&!x.when(S,h,API))continue;
    S.fired['le:'+x.id]=1;if(x.pat)S.pat+=x.pat;if(x.f)setF(x.f);if(x.ev)addEv(x.ev);if(x.doc)addDoc(x.doc);
    queue(typeof x.html==='function'?x.html(S,API):x.html);
  }
}

// ---------- tevékenységek ----------
function doAction(a){
  const r={
    sleepHome:()=>{advance(420,.24);if(S.fat<5)S.fat=5;note('Hét óra alvás. Álmodban a folyó mellett állsz, és valaki a nevedet kiabálja a túlpartról.')},
    sleepSofa:()=>{advance(240,.2);note('Négy óra a kanapén. A neoncső zümmögését álmodban is hallod.')},
    sleepCar:()=>{advance(180,.19);note('Három óra a kocsiban. Bemerevedett nyakkal ébredsz.')},
    coffee:()=>{act(10);S.fat=clamp(S.fat-12);note('Automatás kávé. Rossz, de forró.')},
    bottle:()=>{if(S.bottle<1)return;S.bottle--;S.drinks=(S.drinks||0)+1;act(10);S.alc=clamp(S.alc+18);S.crave=clamp(S.crave-30);note('Egy kupica a hűtőből. Aztán még egy fél.')},
    bar:()=>{if(S.money<900)return;S.money-=900;S.drinks=(S.drinks||0)+1;act(40);S.alc=clamp(S.alc+20);S.crave=clamp(S.crave-35);note('Laci kérdés nélkül tölt.')},
    buy:()=>{if(S.money<3500)return;S.money-=3500;S.bottle+=3;act(5);note('Egy üveg körtét viszel haza.')}
  }[a]||(CASE.actions&&CASE.actions[a]&&(()=>{const x=CASE.actions[a];if(x.cost&&S.money<x.cost)return;if(x.cost)S.money-=x.cost;act(x.mins||20);if(x.f)setF(x.f);if(x.ev)addEv(x.ev);note(x.x)}));
  if(r){r();checkPat();render()}
}
function inspect(id){
  const h=L[S.loc].hs.find(x=>x.id===id);if(!h||S.hs[S.loc+':'+id]||!reqOk(h.req))return;
  act(12);S.hs[S.loc+':'+id]=1;
  [].concat(h.ev||[]).forEach(addEv);if(h.f)[].concat(h.f).forEach(setF);if(h.doc)addDoc(h.doc);
  S.notes.unshift({t:S.t,loc:L[S.loc].n,l:h.l,x:h.t});
  S.lastHs={id,t:h.t};render();
}
function talk(pid){S.view='talk:'+pid;setF('met_'+pid);render()}
function staffDrinkTopic(pid){
  if(!STAFF.includes(pid))return null;
  return{id:'ital',l:'Meghívod egy italra (1 800 Ft)',drinkStaff:1};
}
function topicsOf(pid){const p=P[pid],t=p.topics.slice();const d=staffDrinkTopic(pid);if(d&&hourOf(S.t)>=16&&!S.f['ital_'+pid+'_'+dayIdx()])t.push(d);return t}
function topic(pid,tid){
  const p=P[pid],tp=topicsOf(pid).find(x=>x.id===tid),key=pid+':'+tid;
  if(!tp||(S.done[key]&&!tp.rep))return;
  (S.tr[pid]=S.tr[pid]||[]);
  if(tp.drinkStaff){
    if(S.money<1800)return;S.money-=1800;S.drinks=(S.drinks||0)+1;advance(60*mult());S.alc=clamp(S.alc+15);S.crave=clamp(S.crave-20);
    S.loy[pid]=clamp(S.loy[pid]+12);S.f['ital_'+pid+'_'+dayIdx()]=1;
    S.tr[pid].push({q:tp.l,a:DYN.staffDrink(pid)});render();return;
  }
  const lucidOk=!tp.lucid||inWin(hourOf(S.t),tp.lucid);
  if(tp.drink){if(S.money<900)return;S.money-=900;S.drinks=(S.drinks||0)+1;advance(45*mult());S.alc=clamp(S.alc+20);S.crave=clamp(S.crave-35)}
  else if(tp.cost){if(S.money<tp.cost)return;S.money-=tp.cost;act(tp.mins||60)}
  else act(tp.mins||15);
  if(!lucidOk){S.tr[pid].push({q:tp.l,a:DYN.apaConfused()});render();return}
  if(tp.sober&&S.alc>55){
    S.tr[pid].push({q:tp.l,a:'<i>A kérdéseid összefolynak. Később már nem emlékszel, mit válaszolt. Józanon kellene visszajönni.</i>'});render();return;
  }
  const dy=tp.dyn&&((CASE.dyn&&CASE.dyn[tp.dyn])||DYN[tp.dyn]);
  const txt=dy?dy(S,API):tp.t;
  S.tr[pid].push({q:tp.l,a:txt});
  if(!tp.rep)S.done[key]=1;
  if(tp.excl)S.done[pid+':'+tp.excl]=1;
  if(tp.ev)[].concat(tp.ev).forEach(addEv);if(tp.doc)addDoc(tp.doc);if(tp.f)[].concat(tp.f).forEach(setF);
  if(tp.eff)for(const k in tp.eff)S[k]=clamp(S[k]+tp.eff[k]);
  if(tp.loy)for(const k in tp.loy)S.loy[k]=clamp(S.loy[k]+tp.loy[k]);
  if(tp.pat)S.pat+=tp.pat;
  if(tp.f==='leak')S.f.leak=S.t;
  checkPat();render();
}

// ---------- közös dinamikus szövegek ----------
const nEv=()=>Object.keys(S.ev).length;
const DYN={
  vargaStatus(){
    const boss=CASE.bossLine||'„Ne magyarázz. Hozz egy nevet és bizonyítékot, vagy holnaptól a rakparti forgalmat irányítod.”';
    if(S.pat<40)return boss;
    const ld=leads();
    if(ld.length&&nEv()>=5)return'„Hol tartasz?” Elmondod. Bólint. „És ezzel mi van?” Rábök a jegyzeteidre: <i>'+ld[0]+'</i>';
    if(nEv()<5)return'„Ennyi? A sajtó okosabb nálunk, Dénes. Mozdulj.”';
    return'„Látom a táblát. Ha megvan, ne üldögélj rajta. Vádemelés, három pillér: indíték, alkalom, módszer. Az ügyész nem hisz a megérzésekben.”';
  },
  apaConfused(){
    const A=['Ránéz az ablakra. „Anyád mindjárt hazaér, Dénes. Tegyél fel teát.” Anyád tizenegy éve halott. Délelőtt kellene jönnöd, amikor még itt van.',
      '„Maga az új orvos?” Udvariasan kezet nyújt. Megrázod. Délelőtt jobb, mondta Keleti.',
      'A kérdésedre a régi rádiós műsorok szignálját dúdolja. Aztán elalszik a fotelben, a szája nyitva. Délután már nincs kitől kérdezni.'];
    S.f.ac=(S.f.ac||0)+1;return'<i>'+A[(S.f.ac-1)%A.length]+'</i>';
  },
  apaTalk(){
    const A=['Ülsz mellette. A tévében hangtalanul focimeccs megy. „A Fradi?” kérdezi. Nem tudod. „Régen tudtad volna.”',
      '„Ittál.” Nem kérdezi, megállapítja, ugyanúgy, mint harminc éve. „Az ivás nem segít, csak elhalasztja.” Aztán elfelejti, hogy mondta, és megismétli.',
      '„Hogy van a kicsi? Lili?” Most az egyszer tudja a nevét. Mesélsz neki. Hallgatja, és közben a kezedet simogatja, mintha te lennél a kicsi.',
      'Anyádról beszél, jelen időben. Nem javítod ki. Egy idő után már te is jelen időben beszélsz róla.'];
    S.f.at=(S.f.at||0)+1;S.crave=clamp(S.crave-8);return A[(S.f.at-1)%A.length];
  },
  noraTalk(){
    const A=['Lekapcsolja a nagy villanyt, csak az utcai lámpa fénye marad. Később ott fekszel mellette, és hallgatod, ahogy a villamos elzörög a ház alatt. Ez az egyetlen óra a héten, amikor senki nem kérdez tőled semmit.',
      'Ma nem fekszel le vele. Csak ülsz a konyhájában, ő teát főz, te iszol. Fél órán át egyikőtök sem szól, és ez is elég.',
      '„Megint halottszagod van.” Nem bántásból mondja. Leveszi rólad a kabátot, és a sötét elintézi a többit.',
      '„Ha kiszállok, Szegedre megyek, a nővéremhez.” Közben a hajadat nézi. „Te soha nem fogsz kiszállni, ugye?”'];
    S.f.nt=(S.f.nt||0)+1;return A[(S.f.nt-1)%A.length];
  },
  bokszosTalk(){
    const L2=['„Emlékszel, amikor apád elkapott minket a Népligetben? Azt mondta, belőled vagy rendőr lesz, vagy bűnöző.” Iszik. „Néha nem tudom, melyik lett.”',
      '„A lányod hívott? Nem? Akkor hívd fel te.” Nem nézel rá. Ő sem erőlteti.',
      '„Mindenki azt hiszi, hogy a gyilkosok szörnyek. A legtöbb csak egy fáradt ember, akinek egy éjszakára elfogyott a türelme.”',
      '„Apádnál voltál? Én múlt héten. Engem megismert.” Ez fáj, és ő tudja, hogy fáj.',
      'Nem beszéltek. A nyerőgép villog. Egy ideig ennyi elég.'];
    S.f.bk=(S.f.bk||0)+1;return L2[(S.f.bk-1)%L2.length];
  },
  staffDrink(pid){
    const T={
      bence:'Bence két sört iszik, és a harmadiknál bevallja, hogy rendőrnek lenni nem olyan, mint a filmekben. „Rosszabb?” kérdezed. „Lassabb.” Nevet. Te is, majdnem.',
      kata:'Kata ugyanazt issza, mint te, ugyanabban a tempóban. Sokáig hallgattok. „Apám is ezt itta” — mondja, aztán fizet, mielőtt megállíthatnád.',
      bodnar:'Bodnár mindenkit ismer a kocsmában, és mindenki őt. Három történetet mesél, kettő biztosan hazugság. A harmadikon még napok múlva is gondolkodsz.',
      halasz:'Halász egyetlen fröccsöt iszik egy órán át, és a régi Omega-lemezekről beszél. Kiderül, hogy ugyanazon a koncerten voltatok 1994-ben.',
      keleti:'Keleti doktornő whiskyt kér, jéggel, és elszív hozzá négy cigarettát. „Apád ennyit ivott egy este. Te többet” — mondja. Nem ítélkezik, csak méri.',
      feher:'Fehér doktornő meglepődik, aztán eljön. Ásványvizet iszik. „Ez most terápia, vagy kollegialitás?” kérdezi. „Ivás” — mondod. Felírja magának, de mosolyog.'};
    return(T[pid]||'Isztok egyet.')+' <i>(A lojalitása nőtt.)</i>';
  }
};

// ---------- tábla ----------
function revealed(s){return CASE.suspects[s].reveal.some(has)}
const vKnown=v=>!v.known||has(v.known);
const supOf=id=>(E[id].sup||[]);
const supMatch=(id,s,r,v)=>supOf(id).some(x=>x[0]===s&&x[1]===r&&(!x[2]||x[2]==='*'||x[2]===v));
function clearsOf(id,s,v){const c=E[id].clears;if(!c)return false;const L2=typeof c==='string'?[[c,'*']]:(Array.isArray(c[0])?c:[c]);return L2.some(x=>x[0]===s&&(x[1]==='*'||x[1]===v))}
function selCard(id){if(!S.ev[id])return;
  const i=S.sel.indexOf(id);
  if(i>=0)S.sel.splice(i,1);else{S.sel.push(id);if(S.sel.length>2)S.sel.shift()}
  render();
}
function pin(s,r){if(S.sel.length!==1)return;S.board[S.sel[0]]={s,r};S.sel=[];render()}
function unpin(){S.sel.forEach(id=>delete S.board[id]);S.sel=[];render()}
function deduce(){
  if(S.sel.length!==2)return;
  const [a,b]=S.sel;act(15);
  const d=CASE.ded.find(x=>(x.a===a&&x.b===b)||(x.a===b&&x.b===a));
  S.sel=[];
  if(!d){
    const open=CASE.ded.filter(x=>!S.ev[x.g]&&S.ev[x.a]&&S.ev[x.b]);
    const near=[a,b].find(id=>open.some(x=>x.a===id||x.b===id));
    note(near?`Ez a két nyom közvetlenül nem függ össze. Ennek viszont van párja a táblán, csak nem ez: <b>${E[near].n}</b>.`:'Ez a két nyom közvetlenül nem függ össze. Próbálj más párt.','bad');render();return}
  if(S.ev[d.g]){note('Ezt már összeraktad.');render();return}
  addEv(d.g);if(d.f)setF(d.f);
  modal(`<h2>${E[d.g].n}</h2><p>${d.t}</p>`,[['Felírod a táblára','close']]);
}
const openVict=()=>VICT.filter(v=>vKnown(v)&&!S.verd[v.id]);
function accuse(s){
  const pins=Object.entries(S.board).filter(([,v])=>v.s===s);
  const list=pins.map(([id,v])=>`<li><b>${CAT[v.r]}:</b> ${E[id].n}</li>`).join('')||'<li>Semmi.</li>';
  const ov=openVict();
  if(!ov.length){modal('<h2>Nincs nyitott gyilkosság</h2><p>Minden ismert áldozat ügyében emeltél már vádat.</p>',[['Rendben','close']]);return}
  const multi=VICT.length>1;
  const vsel=multi?`<p><b>Melyik gyilkosságért?</b></p><div class="vchk">${ov.map(v=>`<label><input type="checkbox" value="${v.id}"> ${v.n}</label>`).join('')}</div>`:'';
  modal(`<h2>Vádemelés: ${CASE.suspects[s].name}</h2>${vsel}<p>Az ügyész elé ezt viszed:</p><ul>${list}</ul><p class="mut">Minden kiválasztott gyilkossághoz kell indíték, alkalom és módszer, a megfelelő rovatban. Ha a vád nem áll meg, a főnököd türelme fogy. Ha elfogy, elveszik tőled az ügyet.</p>`,[['Beviszed','acc:'+s],['Még nem','close']]);
}
function judge(s){
  const vids=VICT.length>1?[...document.querySelectorAll('.vchk input:checked')].map(i=>i.value):['main'];
  if(!vids.length){note('Jelöld be, melyik gyilkosságért emelsz vádat.','bad');return}
  closeModal();
  const pins=Object.entries(S.board).filter(([,v])=>v.s===s);
  act(90);
  for(const v of vids){
    const clear=Object.keys(S.ev).find(id=>clearsOf(id,s,v));
    if(clear){S.rejects++;S.pat-=20;
      queue(`<h2>Az ügyész visszadobja</h2><p>Felolvas egy sort a saját anyagodból: <i>${E[clear].n}: ${E[clear].d}</i></p><p>„Ön ezt maga derítette ki, főhadnagy. Mit akar ezzel?”</p>`);checkPat();render();return}
  }
  const missing=[];
  for(const v of vids){
    const cov={};pins.forEach(([id,p])=>{if(supMatch(id,s,p.r,v))cov[p.r]=1});
    const m=['I','A','M'].filter(k=>!cov[k]);
    if(m.length)missing.push((VICT.length>1?VICT.find(x=>x.id===v).n+': ':'')+m.map(k=>CAT[k].toLowerCase()).join(', '));
  }
  if(missing.length){
    S.rejects++;S.pat-=20;
    const extra=CASE.rejectExtra&&CASE.rejectExtra[s]?CASE.rejectExtra[s]:'';
    if(extra)S.pat-=10;
    queue(`<h2>Az ügyész visszadobja</h2><p>„Ezzel nem megyek bíróság elé. Nincs meg, vagy nem jó helyen van:</p><ul>${missing.map(x=>`<li>${x}</li>`).join('')}</ul>${extra}<p class="mut">A főnököd türelme fogy.</p>`,[['Vissza a táblához','close']]);
    checkPat();render();return;
  }
  vids.forEach(v=>{S.verd[v]={s,ok:SOL[v]===s,t:S.t}});
  if(CASE.onVerdict)CASE.onVerdict(S,s,vids,API);
  if(VICT.length===1)return finish(S.verd.main.ok?'win':'wrong',s);
  queue(`<h2>Vádemelés</h2><p>Az ügyészség vádat emel ${CASE.suspects[s].name} ellen: ${vids.map(v=>VICT.find(x=>x.id===v).n).join(', ')} meggyilkolása miatt.</p><p class="mut">Hogy igazad volt-e, az csak a végén derül ki.</p>`);
  if(CASE.over?CASE.over(S,API):VICT.every(v=>S.verd[v.id]))finish('multi');else render();
}
function checkPat(){if(S.pat<=0&&!S.ended)finish('fired')}
function grade(){
  const days=(S.t-CASE.start.t)/1440,par=CASE.par||3;
  let sc=100;const lines=[];
  const wrong=Object.values(S.verd).filter(v=>!v.ok).length;
  if(S.ended==='fired'){sc=10;lines.push('Elvették tőled az ügyet')}
  if(wrong){sc-=25*wrong;lines.push(`${wrong} téves vád`)}
  if(S.rejects){sc-=8*S.rejects;lines.push(`${S.rejects} visszadobott vád`)}
  if(days>par){const d=Math.ceil(days-par);sc-=5*d;lines.push(`${d} nappal a vártnál lassabban`)}
  const extra=CASE.bonus?CASE.bonus(S,API):[];extra.forEach(([p,l])=>{sc+=p;lines.push(l)});
  sc=Math.max(0,Math.min(100,sc));
  const g=sc>=85?'A':sc>=70?'B':sc>=50?'C':'D';
  return{g,sc,lines};
}
function finish(k,s){
  S.ended=k;
  const h=Math.round((S.t-CASE.start.t)/60);
  let title,body;
  if(k==='fired'){title='Elveszik tőled az ügyet';body=CASE.end.fired||'<p>Reggel a főnököd az asztalodra teszi a jelvényedet, és nem néz rád. Az ügyet más viszi tovább. Te a Hordóban ülsz, és Laci kérdés nélkül tölt.</p>'}
  else if(k==='multi'){title=CASE.end.title?CASE.end.title(S,API):'Ügy lezárva';body=CASE.end.multi(S,API)}
  else{title=k==='win'?'Ügy lezárva':'Rossz ember';body=k==='win'?CASE.end.win(S,API):(CASE.end.wrong[s]||'')}
  const gr=grade();
  const m=meta();m.done[S.case]={res:k,g:gr.g,t:Date.now()};
  m.persist={money:S.money,loy:S.loy,f:Object.fromEntries(PERSIST.filter(x=>S.f[x]).map(x=>[x,1]))};
  saveMeta(m);save();
  const idx=CASE_IDS.indexOf(S.case),next=CASE_IDS[idx+1];
  modal(`<h2>${title}</h2>${body}<div class="grade"><b>${gr.g}</b><div><p>Értékelés: ${gr.sc}/100</p><p class="mut">${Math.floor(h/24)} nap ${h%24} óra · ${nEv()} bizonyíték${gr.lines.length?' · '+gr.lines.join(' · '):''}</p></div></div>`,
    (next?[[`Következő ügy: ${CASES[next].title}`,'startcase:'+next]]:[]).concat([['Ügyek','title'],['Bezár','close']]));
  render();
}

// ---------- modál ----------
function modal(html,btns){
  $('#modal .mbody').innerHTML=html;
  $('#modal .mbtns').innerHTML=btns.map(([l,a,dis])=>`<button data-a="${a}" ${dis?'disabled':''}>${l}</button>`).join('');
  $('#modal').hidden=false;$('#modal .mbox').scrollTop=0;$('#modal button')?.focus();
}
function closeModal(){$('#modal').hidden=true;if(Q.length)nextModal();render()}

// ---------- RENDER ----------
function meter(l,v,cls){return`<div class="meter ${cls||''}"><span>${l}</span><i style="--v:${v}%"></i></div>`}
function renderHUD(){
  const warn=[S.fat>85?'alig látsz':'',S.crave>70?'remeg a kezed':'',S.alc>55?'részeg vagy':''].filter(Boolean).join(' · ');
  const nd=Object.values(S.docs).filter(d=>d.n).length,nl=leads().length;
  $('#hud').innerHTML=`<div class="when"><b>${clock(S.t)}</b><span>${dayLabel(S.t)}</span></div>
  <div class="meters">${meter('Fáradtság',S.fat,S.fat>85?'hot':'')}${meter('Alkohol',S.alc,S.alc>55?'hot':'')}${meter('Sóvárgás',S.crave,S.crave>70?'hot':'')}${meter('Főnöki türelem',Math.max(0,S.pat),S.pat<40?'hot':'')}</div>
  <div class="cash"><b>${S.money.toLocaleString('hu-HU')} Ft</b><span>${warn||'&nbsp;'}</span></div>
  <nav>${[['map','Város'],['board','Tábla'],['docs','Akták'+(nd?` <em>${nd}</em>`:'')],['staff','Stáb'],['log','Napló'+(nl?` <em>${nl}</em>`:'')],['save','Mentés']].map(([k,l])=>`<button data-a="tab:${k}" class="${(S.tab||'map')===k?'on':''}">${l}</button>`).join('')}<button data-a="title" class="casebtn">${CASE.title}</button></nav>`;
}
const RIV=[[474,-320],[470,0],[456,80],[468,160],[492,240],[486,320],[478,400],[500,480],[530,560],[548,630],[560,700],[580,1020]];
function smooth(pts){let d='M'+pts[0].join(' ');for(let i=1;i<pts.length;i++){const a=pts[i-1],b=pts[i];d+=` Q${a[0]} ${a[1]} ${(a[0]+b[0])/2} ${(a[1]+b[1])/2}`}return d+' L'+pts[pts.length-1].join(' ')}
function renderMap(){
  const h=hourOf(S.t),night=h<7||h>=17?(h>=21||h<5?.42:.26):0;
  const buda='M-700 -320 '+RIV.map(p=>`L${p[0]-22} ${p[1]}`).join(' ')+' L-700 1020 Z';
  const narrow=$('.mapwrap').clientWidth<600;
  $('#map').setAttribute('viewBox',narrow?'70 30 880 660':'0 0 1000 700');
  const hills=[[150,140,110],[260,330,90],[120,470,120],[300,560,80],[60,260,70]].map(([x,y,r])=>[0,1,2].map(k=>`<ellipse cx="${x}" cy="${y}" rx="${r-k*28}" ry="${(r-k*28)*.7}" class="ctr"/>`).join('')).join('');
  const bridges=[175,300,382,470,560].map(y=>{const p=RIV.reduce((a,b)=>Math.abs(b[1]-y)<Math.abs(a[1]-y)?b:a);return`<line x1="${p[0]-42}" y1="${y}" x2="${p[0]+42}" y2="${y}" class="bridge"/>`}).join('');
  const roads=['M488 170 Q705 245 690 360 Q665 485 522 548','M505 40 Q880 200 830 420 Q770 610 610 692','M492 300 L960 240','M488 384 L990 430','M512 472 L900 660','M700 0 L760 700','M430 170 Q300 200 160 120','M440 385 Q300 380 120 470','M465 520 Q380 600 260 690'].map(d=>`<path d="${d}" class="road"/>`).join('');
  const pins=Object.entries(L).filter(([id,l])=>visible(l)||id===S.loc).map(([id,l])=>{
    const cur=id===S.loc,closed=isClosed(l,h),tm=cur?'itt vagy':travelMin(S.loc,id)+' perc';
    const left=!!l.la,nm=narrow?l.m:l.n;
    return`<g class="pin${cur?' cur':''}${closed?' closed':''}${l.crime?' crime':''}" data-a="go:${id}" transform="translate(${l.x} ${l.y})" tabindex="0" role="button" aria-label="${esc(l.n)}, ${tm}">
      <circle r="24" class="hit"/>${cur?'<circle r="15" class="ring"/>':''}<circle r="8" class="dot"/>
      <text x="${left?-16:16}" y="-2" text-anchor="${left?'end':'start'}" class="lbl">${esc(nm)}</text>
      ${narrow?'':`<text x="${left?-16:16}" y="15" text-anchor="${left?'end':'start'}" class="sub">${closed?'zárva · ':''}${tm}</text>`}</g>`}).join('');
  $('#map').innerHTML=`<rect x="-700" y="-320" width="2400" height="1340" class="pest"/><path d="${buda}" class="buda"/>${hills}${roads}
  <path d="${smooth(RIV)}" class="river"/><path d="${smooth(RIV.map(p=>[p[0]-8,p[1]]))}" class="glint"/>
  <ellipse cx="465" cy="118" rx="13" ry="50" class="island"/>${bridges}
  <text x="150" y="660" class="area">Buda</text><text x="860" y="580" class="area">Pest</text>
  <rect x="-700" y="-320" width="2400" height="1340" fill="#05080a" opacity="${night}" pointer-events="none"/>${CASE.snow?'<rect x="-700" y="-320" width="2400" height="1340" fill="#cfd8dc" opacity=".05" pointer-events="none"/>':''}${pins}`;
}
function peopleHere(){return Object.entries(P).filter(([,p])=>p.loc===S.loc&&visible(p))}
function renderLoc(){
  const l=L[S.loc],h=hourOf(S.t),closed=isClosed(l,h);
  const here=peopleHere();
  const ppl=closed?'':here.map(([id,p])=>{
    const ok=inWin(h,p.h)&&!(p.staff&&S.staff[id]&&S.staff[id].busy>S.t);
    return`<button class="person${ok?'':' gone'}" data-a="talk:${id}" ${ok?'':'disabled'}><b>${p.n}</b><span>${p.r}${ok?'':` · ${S.staff[id]&&S.staff[id].busy>S.t?'kint dolgozik':`${p.h[0]}–${p.h[1]} óra`}`}</span></button>`}).join('');
  const hs=(l.hs||[]).filter(x=>reqOk(x.req));
  const hsHtml=hs.map(x=>{const d=S.hs[S.loc+':'+x.id];return`<button class="hs${d?' done':''}" data-a="hs:${x.id}" ${d?'disabled':''}>${d?'✓ ':''}${x.l}</button>`}).join('');
  const acts=[];
  if(S.loc==='otthon'){acts.push(['sleepHome','Alvás (7 óra)']);acts.push(['bottle',`Pálinka a hűtőből (${S.bottle} adag)`,S.bottle<1])}
  else if(S.loc==='kapitanysag'){acts.push(['sleepSofa','Kanapé az irodában (4 óra)']);acts.push(['coffee','Automatás kávé'])}
  else acts.push(['sleepCar','Alvás a kocsiban (3 óra)']);
  if(S.loc==='hordo'&&!closed){acts.push(['bar','Fröccs és fél deci (900 Ft)',S.money<900]);acts.push(['buy','Üveg körte haza (3 500 Ft)',S.money<3500])}
  Object.entries(CASE.actions||{}).forEach(([k,x])=>{if(x.loc===S.loc&&!closed&&reqOk(x.req)&&!(x.once&&S.f[x.f]))acts.push([k,x.l,x.cost&&S.money<x.cost])});
  const last=S.lastHs&&l.hs&&l.hs.some(x=>x.id===S.lastHs.id)?`<blockquote class="seen">${S.lastHs.t}</blockquote>`:'';
  const dayName=l.day!==undefined?'Csak '+['hétfőn','kedden','szerdán','csütörtökön','pénteken','szombaton','vasárnap'][l.day%7]+', ':'Nyitva ';
  return`<div class="pane"><h1>${l.n}</h1>${l.open?`<p class="mut">${dayName}${l.open[0]}–${l.open[1]} óra${closed?' · most zárva':''}</p>`:''}<p class="desc">${l.d}</p>${last}
  ${here.length&&!closed?`<h3>Itt van</h3><div class="list">${ppl}</div>`:''}
  ${hs.length?`<h3>Helyszín bejárása</h3><div class="list">${hsHtml}</div>`:''}
  <h3>Tevékenység</h3><div class="list">${acts.map(([a,t,d])=>`<button class="act" data-a="do:${a}" ${d?'disabled':''}>${t}</button>`).join('')}<button class="act" data-a="tab:staff">${S.loc==='kapitanysag'?'Stáb kiküldése':'Telefon: stáb kiküldése'}</button></div>
  <h3>Úti cél</h3><div class="dest">${Object.entries(L).filter(([id,x])=>id!==S.loc&&visible(x)).map(([id,x])=>`<button data-a="go:${id}">${x.n}<span>${travelMin(S.loc,id)}′</span></button>`).join('')}</div></div>`;
}
function renderTalk(pid){
  const p=P[pid],tr=S.tr[pid]||[];
  const tps=topicsOf(pid).filter(t=>reqOk(t.req)&&(t.rep||!S.done[pid+':'+t.id]));
  const loy=STAFF.includes(pid)?`<p class="mut">Lojalitás: ${loyBar(pid)}</p>`:'';
  return`<div class="pane talk"><button class="back" data-a="back">← ${L[S.loc].n}</button>
  <h1>${p.n}</h1><p class="mut">${p.r}</p>${loy}<p class="bio">${p.bio}</p>
  <div class="tr">${tr.map(x=>`<div class="q">${x.q}</div><div class="a">${x.a}</div>`).join('')}</div>
  <h3>${p.suspect?'Kihallgatás':p.staff?'Beszélgetés':'Meghallgatás'}</h3>
  <div class="list">${tps.map(t=>`<button class="topic${t.req?' conf':''}" data-a="tp:${pid}:${t.id}" ${(t.drink&&S.money<900)||(t.cost&&S.money<t.cost)||(t.drinkStaff&&S.money<1800)?'disabled':''}>${t.l}</button>`).join('')||'<p class="mut">Most nincs több kérdésed.</p>'}</div></div>`;
}
function loyBar(id){const v=S.loy[id];return`<span class="loy"><i style="--v:${v}%"></i></span> ${v>=75?'kitart melletted':v>=50?'megbízható':v>=30?'fogy a türelme':'már csak kötelességből'}`}
function card(id,extra){
  const e=E[id],sel=S.sel.includes(id);
  const vt=e.v&&VICT.length>1?`<small class="vt">${(VICT.find(x=>x.id===e.v)||{}).s||''}</small>`:'';
  return`<button class="card${sel?' sel':''}${e.ded?' ded':''}${e.clears?' clr':''}${extra||''}" data-a="card:${id}">${vt}<b>${e.n}</b><span>${e.d}</span></button>`;
}
function renderBoard(){
  const pool=Object.keys(S.ev).filter(id=>!S.board[id]);
  const one=S.sel.length===1,two=S.sel.length===2,selPinned=S.sel.some(id=>S.board[id]);
  const vstrip=VICT.length>1?`<div class="victims">${VICT.filter(vKnown).map(v=>`<div class="vic${S.verd[v.id]?' done':''}"><b>${v.n}</b><span>${v.d||''}</span><em>${S.verd[v.id]?'Vád: '+CASE.suspects[S.verd[v.id].s].short:'nyitott'}</em></div>`).join('')}</div>`:'';
  const cols=ORDER.map(s=>{
    const rv=revealed(s),sp=CASE.suspects[s];
    if(!rv)return`<div class="col locked"><div class="mug">?</div><h4>Ismeretlen</h4><p class="mut">Még nem tudod, ki ez.</p></div>`;
    const rows=['I','A','M'].map(r=>{const c=Object.entries(S.board).filter(([,v])=>v.s===s&&v.r===r).map(([id])=>card(id,' pinned')).join('');
      return`<div class="row${one?' drop':''}" ${one?`data-a="pin:${s}:${r}"`:''}><em>${CAT[r]}</em>${c||(one?'<i>ide tűzöd</i>':'')}</div>`}).join('');
    return`<div class="col"><div class="mug">${sp.short[0]}</div><h4>${sp.name}</h4>${rows}<button class="accuse" data-a="acc?:${s}">Vádemelés</button></div>`;
  }).join('');
  let bar;
  if(two)bar=`<div class="bd two">${S.sel.map(id=>`<div><b>${E[id].n}</b><p>${E[id].d}</p></div>`).join('')}</div><div class="pb"><button data-a="deduce">Összefüggést keresel (15′)</button><button class="ghost" data-a="clearsel">Mégse</button></div>`;
  else if(one){
    const id=S.sel[0],rv=ORDER.filter(revealed);
    const pv=S.board[id];
    bar=`<div class="bd"><b>${E[id].n}</b>${pv?` <small>· kitűzve: ${CASE.suspects[pv.s].short}, ${CAT[pv.r].toLowerCase()}</small>`:''}<p>${E[id].d}</p></div><span>Hová tűzöd?</span><div class="pins">${rv.map(s=>`<div class="pg"><em>${CASE.suspects[s].short}</em>${['I','A','M'].map(r=>`<button data-a="pin:${s}:${r}">${CAT[r]}</button>`).join('')}</div>`).join('')||'<i>Még nincs ismert gyanúsított.</i>'}</div><div class="pb">${selPinned?'<button class="ghost" data-a="unpin">Leveszed</button>':''}<button class="ghost" data-a="clearsel">Mégse</button></div><span class="mut2">Vagy jelölj ki még egy nyomot, és keress összefüggést.</span>`;
  }
  else bar='<span>Kattints egy nyomra, és itt választhatod ki, melyik gyanúsítotthoz és rovatba tűzöd. Két nyomot kijelölve összefüggést kereshetsz.</span>';
  return`<div class="pane wide board"><h1>Bizonyítéktábla</h1>${vstrip}<div class="cols n${ORDER.length}">${cols}</div>
  <h3>Nyomok (${pool.length})</h3><div class="pool">${pool.map(id=>card(id)).join('')||'<p class="mut">Minden nyom kint van a táblán.</p>'}</div><div class="bar">${bar}</div></div>`;
}
function docBody(id){
  return esc(CASE.docs[id].b).replace(/\[\[(\w+)\|([^\]]+)\]\]/g,(m,ev,tx)=>`<button class="mark${S.ev[ev]?' found':''}" data-a="mark:${ev}">${tx}</button>`).replace(/\n/g,'<br>');
}
function renderDocs(){
  const ids=Object.keys(S.docs);
  const cur=S.doc&&S.docs[S.doc]?S.doc:null;
  return`<div class="pane wide docs"><h1>Akták</h1><div class="dl"><div class="dlist">${ids.map(id=>`<button class="${id===cur?'on':''}" data-a="doc:${id}">${S.docs[id].n?'<em>új</em> ':''}${CASE.docs[id].t}${openMarks(id)?`<small>${openMarks(id)} kiemelés vár</small>`:''}</button>`).join('')||'<p class="mut">Még nincs aktád.</p>'}</div>
  <article class="paper">${cur?`<h2>${CASE.docs[cur].t}</h2><p class="hint">A kiemelt sorokra kattintva felírod őket a táblára.</p><div class="mono">${docBody(cur)}</div>`:'<p class="hint">Válassz egy aktát.</p>'}</article></div></div>`;
}
function renderStaff(){
  const tasks=CASE.tasks.filter(taskAvail);
  const pend=S.pending.map(p=>`<li>${P[p.staff].n}: ${CASE.tasks.find(x=>x.id===p.task).l} · kész ${clock(p.at)}</li>`).join('');
  const mood=S.pat>70?'A főnököd még bízik benned.':S.pat>40?'A főnököd türelme fogy.':'A főnököd a felfüggesztéseden gondolkodik.';
  const fitW=(tk,sid)=>{const f=chance(tk,sid);return f>=.85?'erőssége':f>=.6?'elmegy':'nem az ő műfaja'};
  return`<div class="pane wide staff"><h1>Stáb</h1><p class="mut">${mood}${S.loc!=='kapitanysag'?' · Telefonon intézed: +5 perc.':''} A lojalitás növeli a sikeresélyt. Este meghívhatod őket egy italra, de ha egy nap háromnál többször küldöd ki őket, fogy.</p>
  <div class="scards">${STAFF.map(id=>{const st=staffState(id);return`<div class="sc ${st.k}"><b>${P[id].n}</b><span>${P[id].r}</span><p>${P[id].bio}</p><p class="ly">${loyBar(id)}</p><em>${st.x}</em></div>`}).join('')}</div>
  ${pend?`<h3>Folyamatban</h3><ul class="pend">${pend}</ul>`:''}
  <h3>Kiadható feladatok</h3>${tasks.length?tasks.map(tk=>`<div class="task"><b>${tk.l}</b><span>${Math.round(tk.dur/60)} óra</span><div>${Object.keys(tk.fit).map(sid=>`<button data-a="disp:${tk.id}:${sid}" ${staffState(sid).k!=='free'?'disabled':''}>${P[sid].n.split(' ').slice(-1)[0]} · ${fitW(tk,sid)}</button>`).join('')}</div></div>`).join(''):'<p class="mut">Most nincs kiadható feladat. Nyomozz tovább.</p>'}</div>`;
}
function openMarks(id){return[...CASE.docs[id].b.matchAll(/\[\[(\w+)\|/g)].filter(m=>!S.ev[m[1]]).length}
function leads(){
  const out=[];
  const mk=Object.keys(S.docs).reduce((a,id)=>a+openMarks(id),0);
  if(mk)out.push(`Az aktákban ${mk} fontos sor vár még kiemelésre. Nyisd meg az Akták fület, és kattints a kiemelt sorokra.`);
  const dd=new Set(CASE.ded.filter(d=>S.ev[d.a]&&S.ev[d.b]&&!S.ev[d.g]).map(d=>d.g)).size;
  if(dd){const fd=CASE.ded.find(d=>S.ev[d.a]&&S.ev[d.b]&&!S.ev[d.g]);out.push(`A táblán ${dd} olyan nyompár van, amely összefügg. Kezdd például ezzel, és keresd meg a párját: <b>${E[fd.a].n}</b>.`)}
  (CASE.leads||[]).forEach(l=>{if(reqOk(l.need)&&!(l.not||[]).some(k=>k.split('|').some(has)))out.push(l.x)});
  const tk=CASE.tasks.filter(taskAvail).length;
  if(tk)out.push(`A Stáb fülön ${tk} kiadható feladat vár.`);
  return out;
}
function renderLog(){const ld=leads(),U=S.ui||{};
  const evs=Object.keys(S.ev).sort((a,b)=>S.ev[a]-S.ev[b]);
  const tm=t=>`<time>${dayLabel(t).split(' · ')[0]} ${clock(t)}</time>`;
  return`<div class="pane wide"><h1>Napló</h1>
  <details data-ui="leads" ${U.leads===false?'':'open'}><summary>Nyitott szálak <span>${ld.length}</span></summary>${ld.length?`<ul class="leads">${ld.map(x=>`<li>${x}</li>`).join('')}</ul>`:'<p class="mut">Nincs nyitott szál. Ha megvan a tettes, a táblán emelhetsz vádat.</p>'}</details>
  <details data-ui="evid" ${U.evid?'open':''}><summary>Bizonyítékok <span>${evs.length}</span></summary><dl class="evl">${evs.map(id=>`<dt>${E[id].n}${tm(S.ev[id])}</dt><dd>${E[id].d}</dd>`).join('')}</dl></details>
  <details data-ui="notes" ${U.notes?'open':''}><summary>Helyszíni jegyzetek <span>${S.notes.length}</span></summary><dl class="evl">${S.notes.map(x=>`<dt>${x.loc}: ${x.l}${tm(x.t)}</dt><dd>${x.x}</dd>`).join('')}</dl></details>
  <details data-ui="events" ${U.events?'open':''}><summary>Események <span>${S.log.length}</span></summary><ul class="log">${S.log.map(x=>`<li>${tm(x.t)}${x.x}</li>`).join('')}</ul></details></div>`}
function renderSave(){
  return`<div class="pane wide"><h1>Mentés</h1><p>A játék minden lépés után ebbe a böngészőbe ment. Ha másik gépen folytatnád, másold ki a mentéskódot.</p>
  <div class="list"><button data-a="copysave">Mentéskód másolása</button></div>
  <textarea id="imp" rows="4" placeholder="Ide illeszd be a mentéskódot"></textarea>
  <div class="list"><button data-a="import">Betöltés kódból</button><button data-a="title">Ügyek, új játék</button></div></div>`;
}
function render(){
  if(!S)return;
  if(!S.ended&&CASE.over&&Object.keys(S.verd||{}).length&&CASE.over(S,API)){finish('multi');return}
  const t=S.tab;
  $('#game').classList.toggle('full',!!t&&t!=='map');
  renderHUD();renderMap();
  $('#panel').innerHTML=t==='board'?renderBoard():t==='docs'?renderDocs():t==='staff'?renderStaff():t==='log'?renderLog():t==='save'?renderSave():S.view.startsWith('talk:')?renderTalk(S.view.slice(5)):renderLoc();
  save();
}

// ---------- kezdőképernyő ----------
function titleScreen(){
  const m=meta(),cur=load();
  const rows=CASE_IDS.map((id,i)=>{const c=CASES[id],d=m.done[id];
    const st=d?`Lezárva · ${d.g}`:(cur&&cur.case===id&&!cur.ended?'Folyamatban':'');
    return`<li><div><b>${i+1}. ${c.title}</b><span>${c.tagline||''}</span>${st?`<em>${st}</em>`:''}</div><button data-a="startcase:${id}">${cur&&cur.case===id&&!cur.ended?'Újrakezdés':'Indítás'}</button></li>`}).join('');
  const cont=cur&&!cur.ended&&CASES[cur.case]?[[`Folytatás: ${CASES[cur.case].title}`,'continue']]:[];
  modal(`<div class="title"><h2>Redemption</h2><p class="deck">Mátrai Dénes ügyei</p><ul class="cases">${rows}</ul><p class="mut">Az ügyek egymásra épülnek: a személyes döntéseid (lányod, apád, Nóra, a stáb) átkerülnek a következő ügybe.</p></div>`,cont.concat(S&&!S.ended?[['Vissza','close']]:[]));
}
function startCase(id){
  Q=[];S=fresh(id);S.visited[S.loc]=1;
  modal(`<h2>${CASES[id].num||''} ${CASE.title}</h2>${typeof CASE.intro==='function'?CASE.intro(S,API):'<p>'+CASE.intro+'</p>'}`,[['Elindulsz','start']]);
  render();
}

// ---------- események ----------
function handle(a){
  const [k,x,y]=a.split(':');
  switch(k){
    case'go':if(S.tab&&S.tab!=='map')S.tab=null;go(x);break;
    case'travel':closeModal();go(x,y);break;
    case'tab':S.tab=x==='map'?null:(S.tab===x?null:x);if(x==='docs'&&S.doc&&S.docs[S.doc])S.docs[S.doc].n=0;S.sel=[];render();$('#panel').scrollTop=0;break;
    case'talk':talk(x);break;
    case'back':S.view='loc';render();break;
    case'tp':topic(x,y);break;
    case'hs':inspect(x);break;
    case'do':doAction(x);break;
    case'card':selCard(x);break;
    case'pin':pin(x,y);break;
    case'unpin':unpin();break;
    case'clearsel':S.sel=[];render();break;
    case'deduce':deduce();break;
    case'acc?':accuse(x);break;
    case'acc':judge(x);break;
    case'doc':{if(!S.docs[x])break;const first=S.docs[x].n;S.doc=x;S.docs[x].n=0;if(first)act(10);render();$('.paper')?.scrollIntoView({block:'nearest'});break}
    case'mark':addEv(x);render();break;
    case'disp':dispatch(x,y);break;
    case'close':closeModal();break;
    case'title':titleScreen();break;
    case'startcase':startCase(x);break;
    case'new':startCase(S?S.case:CASE_IDS[0]);break;
    case'start':closeModal();if(CASE.onStart){CASE.onStart(S,API)}checkTimed();render();break;
    case'continue':{const v=load();if(v&&CASES[v.case||'c1']){S=v;S.case=S.case||'c1';setCase(S.case);upgrade();S.tab=null}closeModal();break}
    case'copysave':{const code=btoa(unescape(encodeURIComponent(JSON.stringify(S))));try{navigator.clipboard.writeText(code).then(()=>note('Mentéskód a vágólapon.'),()=>{$('#imp').value=code;note('Másold ki a mezőből.')})}catch(e){$('#imp').value=code}break}
    case'import':{try{const v=JSON.parse(decodeURIComponent(escape(atob($('#imp').value.trim()))));if(v&&v.t){S=v;S.case=S.case||'c1';setCase(S.case);upgrade();S.tab=null;render();note('Mentés betöltve.')}}catch(e){note('Ez nem érvényes mentéskód.','bad')}break}
  }
}
function upgrade(){S.loy=S.loy||{};STAFF.forEach(id=>{if(S.loy[id]==null)S.loy[id]=60});S.notes=S.notes||[];S.verd=S.verd||{};S.view=S.view||'loc';S.prev=S.prev||meta().done}
document.addEventListener('click',e=>{const b=e.target.closest('[data-a]');if(!b||b.disabled)return;e.preventDefault();handle(b.dataset.a)});
document.addEventListener('toggle',e=>{const d=e.target;if(d.dataset&&d.dataset.ui&&S){(S.ui=S.ui||{})[d.dataset.ui]=d.open;save()}},true);
document.addEventListener('keydown',e=>{
  if((e.key==='Enter'||e.key===' ')&&e.target.matches('g[data-a]')){e.preventDefault();handle(e.target.dataset.a)}
  if(e.key==='Escape'&&!$('#modal').hidden&&$('#modal .mbtns [data-a="close"]'))closeModal();
});

const saved=load();
if(saved&&saved.t&&CASES[saved.case||'c1']){S=saved;S.case=S.case||'c1';setCase(S.case);upgrade();S.tab=null;render()}
else{setCase(CASE_IDS[0]);S=fresh(CASE_IDS[0]);render()}
titleScreen();
const mapRO=new ResizeObserver(()=>{if(S)renderMap()});mapRO.observe($('.mapwrap'));
window.__noir={get S(){return S},handle,advance,setCase};
}
