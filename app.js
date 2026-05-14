const TRAIN_KEY="gymjournal_sets_v5";
const BODY_KEY="gymjournal_body_v5";
const OLD_KEYS=["gymjournal_sets_v4","gymjournal_sets_v3","gymjournal_training_v2"];

function ex(name,sets,reps,muscle,group,visual,type,tip,avoid,steps,rest){
  return {name,sets,reps,muscle,group,visual,type,tip,avoid,steps,rest};
}

const workouts={
  push1:{title:"Push schwer",short:"Push",day:"Montag",ex:[
    ex("Bankdrücken Maschine",4,"6–10","Brust","Brust","bench","Grundübung","Schulterblätter hinten unten halten und kontrolliert drücken.","Nicht ins Hohlkreuz fallen und nicht abfedern.",["Sitzhöhe so einstellen, dass die Griffe auf Brusthöhe sind.","Schulterblätter nach hinten unten ziehen.","Kontrolliert drücken und langsam zurückführen."],150),
    ex("Schrägbankdrücken",3,"8–12","Obere Brust","Brust","incline","Grundübung","Brust hoch, Ellbogen kontrolliert, Fokus obere Brust.","Bank nicht zu steil einstellen, sonst übernimmt die Schulter.",["Bank auf leichte Schräglage einstellen.","Griffe/Hanteln auf oberer Brustlinie führen.","Oben nicht komplett einrasten, Spannung halten."],120),
    ex("Butterfly",3,"12–15","Brust","Brust","butterfly","Maschine","Vorne bewusst zusammendrücken und hinten dehnen.","Nicht mit Schwung schließen.",["Sitzhöhe anpassen.","Arme leicht gebeugt lassen.","Langsam öffnen und kontrolliert schließen."],90),
    ex("Dips",3,"sauber","Brust/Trizeps","Brust","dips","Körpergewicht","Oberkörper leicht vorlehnen, sauber ablassen.","Keine Schmerzen in Schulter erzwingen.",["Griffe fest halten.","Kontrolliert absenken.","Aus Brust/Trizeps wieder hochdrücken."],120),
    ex("Schulterdrücken Maschine",3,"8–12","Schulter","Schulter","shoulderpress","Maschine","Rumpf fest, sauber nach oben drücken.","Nicht ins Hohlkreuz fallen.",["Sitzhöhe passend einstellen.","Griffe auf Ohr-/Schulterhöhe starten.","Kontrolliert nach oben drücken."],120),
    ex("Seitheben",4,"12–15","Seitliche Schulter","Schulter","lateral","Isolation","Ellbogen führt die Bewegung, wenig Schwung.","Hände nicht viel höher als Ellbogen ziehen.",["Leicht vorlehnen.","Arme seitlich anheben.","Langsam ablassen."],75),
    ex("Reverse Butterfly",3,"12–15","Hintere Schulter","Schulter","reversefly","Maschine","Arme nach außen führen, hintere Schulter spüren.","Nicht mit Nacken ziehen.",["Brust ans Polster.","Griffe nach außen ziehen.","Langsam zurückführen."],75),
    ex("Überkopf Trizepsstrecken",3,"10–12","Trizeps","Arme","overheadtri","Isolation","Dehnung im Trizeps zulassen.","Ellbogen nicht zu weit öffnen.",["Kabel oder Hantel über Kopf halten.","Unterarme beugen.","Strecken und oben kurz halten."],75),
    ex("Kabel Pushdowns",3,"10–12","Trizeps","Arme","pushdown","Isolation","Ellbogen am Körper fixieren.","Nicht mit Oberkörper drücken.",["Gerade stehen.","Ellbogen an den Körper.","Nach unten strecken und kontrolliert hoch."],75),
    ex("Kabel Crunches",4,"12–15","Bauch","Bauch","cablecrunch","Bauch","Rücken rund machen, Bauch aktiv einrollen.","Nicht nur mit Armen ziehen.",["Seil am Kabelturm greifen.","Becken stabil halten.","Oberkörper einrollen."],60)
  ]},
  pull1:{title:"Pull schwer",short:"Pull",day:"Dienstag",ex:[
    ex("Deadlift leicht-mittel",3,"5–6","Rücken/Beine","Rücken","deadlift","Grundübung","Saubere Technik, Rücken neutral, kein Ego-Gewicht.","Nicht rund ziehen und wegen Meniskus kontrolliert bleiben.",["Füße stabil unter der Stange.","Hüfte zurück, Rücken neutral.","Stange körpernah hochführen."],180),
    ex("Latziehen eng",4,"8–12","Lat","Rücken","latpulldown","Maschine","Ellbogen Richtung Hüfte ziehen.","Nicht zu weit nach hinten lehnen.",["Brust leicht hoch.","Griff eng greifen.","Zur oberen Brust ziehen."],120),
    ex("Rudern eng",4,"8–12","Rückenmitte","Rücken","seatedrow","Maschine","Schulterblätter zurückziehen, sauber rudern.","Nicht mit Schwung aus dem Rücken ziehen.",["Brust hoch.","Griff zum Bauch ziehen.","Langsam nach vorne dehnen lassen."],120),
    ex("Chest Supported Row",3,"10–12","Oberer Rücken","Rücken","chestrow","Maschine","Brust bleibt am Polster, kontrolliert ziehen.","Nicht vom Polster abheben.",["Brust ans Polster.","Griffe Richtung Körper ziehen.","Schulterblätter kontrollieren."],90),
    ex("Face Pulls",3,"15","Hintere Schulter","Schulter","facepull","Isolation","Seil Richtung Gesicht, Ellbogen hoch.","Nicht zu schwer und nicht aus dem unteren Rücken.",["Seil auf Gesichtshöhe.","Zum Gesicht ziehen.","Außenrotieren und langsam zurück."],75),
    ex("Normale Curls",3,"8–12","Bizeps","Arme","curl","Isolation","Oberarm ruhig halten.","Nicht mit Rücken schwingen.",["Hantel unten kontrolliert halten.","Hochcurlen.","Langsam ablassen."],75),
    ex("Hammercurls",3,"10–12","Bizeps/Unterarm","Arme","hammer","Isolation","Neutraler Griff, sauber kontrollieren.","Nicht werfen.",["Daumen zeigen nach oben.","Hantel hochcurlen.","Langsam ablassen."],75),
    ex("Bayesian Curls",3,"12","Bizeps","Arme","bayesian","Isolation","Arm leicht hinter dem Körper, volle Dehnung.","Schulter nicht nach vorne ziehen.",["Kabel hinter dem Körper.","Arm gestreckt starten.","Curlen und langsam dehnen."],75),
    ex("Hanging Knee Raises",3,"12–15","Bauch","Bauch","kneeraise","Bauch","Becken einrollen, nicht nur Beine heben.","Nicht schwingen.",["Stabil hängen.","Knie kontrolliert hochziehen.","Becken oben einrollen."],60)
  ]},
  legs:{title:"Beine + Bauch",short:"Beine",day:"Mittwoch",ex:[
    ex("Beinpresse",4,"10–12","Beine","Beine","legpress","Maschine","Kontrollierte Tiefe, Knie schmerzfrei führen.","Nicht zu tief, wenn Meniskus unangenehm ist.",["Füße stabil auf Plattform.","Langsam ablassen.","Kontrolliert hochdrücken."],120),
    ex("Romanian Deadlift",3,"10","Beinbeuger/Gluteus","Beine","rdl","Grundübung","Hüfte nach hinten, Rücken neutral.","Nicht rund machen.",["Knie leicht gebeugt.","Hüfte weit nach hinten.","Dehnung im Beinbeuger spüren."],150),
    ex("Beinbeuger",3,"12–15","Beinbeuger","Beine","legcurl","Maschine","Langsam ablassen und oben anspannen.","Nicht abfedern.",["Polster einstellen.","Fersen Richtung Gesäß ziehen.","Langsam strecken."],90),
    ex("Beinstrecker leicht",3,"15","Quadrizeps","Beine","legextension","Maschine","Nur schmerzfrei und kontrolliert.","Nicht ruckartig strecken.",["Sitz einstellen.","Beine kontrolliert strecken.","Langsam ablassen."],75),
    ex("Wadenheben",4,"15–20","Waden","Beine","calf","Isolation","Oben kurz halten, unten dehnen.","Nicht federn.",["Ballen auf Plattform.","Fersen senken.","Auf die Zehenspitzen drücken."],60),
    ex("Kabel Crunches schwer",4,"12","Bauch","Bauch","cablecrunch","Bauch","Schwer, aber sauber einrollen.","Nicht mit Armen ziehen.",["Seil greifen.","Bauch rund einrollen.","Langsam hochkommen."],60),
    ex("Leg Raises",3,"15","Bauch","Bauch","legraise","Bauch","Langsam kontrollieren.","Kein Schwung.",["Rücken stabil.","Beine anheben.","Langsam ablassen."],60),
    ex("Plank",3,"30–60s","Core","Bauch","plank","Bauch","Bauch fest, Körper gerade.","Kein Hohlkreuz.",["Unterarme auf Boden.","Bauch anspannen.","Position halten."],45),
    ex("Steigung Laufband",1,"20–30 min","Cardio","Cardio","treadmill","Cardio","Konstant gehen, Puls moderat.","Nicht sprinten.",["Steigung einstellen.","Zügig gehen.","Tempo konstant halten."],60)
  ]},
  push2:{title:"Push Pump",short:"Push",day:"Freitag",ex:[
    ex("Schrägbankdrücken",4,"10–12","Obere Brust","Brust","incline","Maschine","Obere Brust priorisieren.","Nicht zu steil.",["Bank leicht schräg.","Kontrolliert drücken.","Langsam zurück."],120),
    ex("Butterfly",4,"15","Brust","Brust","butterfly","Maschine","Langsam und voller Bewegungsweg.","Nicht reißen.",["Dehnen.","Schließen.","Kurz halten."],90),
    ex("Chest Press",3,"12","Brust","Brust","chestpress","Maschine","Kontrolliert drücken.","Schultern nicht nach vorne.",["Sitz einstellen.","Drücken.","Langsam zurück."],90),
    ex("Seitheben",5,"15","Seitliche Schulter","Schulter","lateral","Isolation","Breite Schulterkappe fokussieren.","Kein Schwung.",["Leicht beugen.","Seitlich heben.","Langsam ablassen."],75),
    ex("Reverse Butterfly",4,"15","Hintere Schulter","Schulter","reversefly","Isolation","Hintere Schulter treffen.","Nacken nicht übernehmen lassen.",["Brust ans Polster.","Nach außen ziehen.","Kontrolliert zurück."],75),
    ex("Schulterdrücken Maschine",3,"10","Schulter","Schulter","shoulderpress","Maschine","Nicht maximal schwer.","Keine unsauberen Reps.",["Sitz einstellen.","Drücken.","Langsam runter."],90),
    ex("Pushdowns",4,"12","Trizeps","Arme","pushdown","Isolation","Ellbogen stabil.","Nicht aus Schulter drücken.",["Ellbogen fixieren.","Runterdrücken.","Kontrolliert hoch."],75),
    ex("Überkopf Trizepsstrecken",3,"12","Trizeps","Arme","overheadtri","Isolation","Gute Dehnung.","Ellbogen nicht zu weit öffnen.",["Über Kopf starten.","Beugen.","Strecken."],75),
    ex("Kabel Crunches",4,"15","Bauch","Bauch","cablecrunch","Bauch","Saubere Kontraktion.","Nicht mit Armen ziehen.",["Seil greifen.","Einrollen.","Langsam zurück."],60)
  ]},
  pull2:{title:"Pull + Bauch",short:"Pull",day:"Samstag",ex:[
    ex("Latziehen breit",4,"10","Lat","Rücken","latpulldown","Maschine","Ellbogen runterziehen.","Nicht in den Nacken ziehen.",["Breit greifen.","Zur Brust ziehen.","Langsam hoch."],120),
    ex("Rudern eng",4,"10","Rückenmitte","Rücken","seatedrow","Maschine","Kontrolliert ziehen.","Kein Schwung.",["Brust hoch.","Ziehen.","Dehnen lassen."],120),
    ex("Rudern breit",3,"12","Oberer Rücken","Rücken","wideRow","Maschine","Ellbogen weiter außen.","Schultern nicht hochziehen.",["Breit greifen.","Zur Brust rudern.","Langsam zurück."],90),
    ex("Face Pulls",4,"15","Hintere Schulter","Schulter","facepull","Isolation","Haltung verbessern.","Nicht zu schwer.",["Seil Gesichtshöhe.","Ziehen.","Außenrotieren."],75),
    ex("Normale Curls",3,"10","Bizeps","Arme","curl","Isolation","Saubere Reps.","Nicht schwingen.",["Ruhig stehen.","Curlen.","Ablassen."],75),
    ex("Hammercurls",3,"12","Bizeps/Unterarm","Arme","hammer","Isolation","Neutraler Griff.","Nicht werfen.",["Neutral halten.","Hochziehen.","Langsam runter."],75),
    ex("Hanging Leg Raises",4,"12","Bauch","Bauch","legraise","Bauch","Becken einrollen.","Nicht schwingen.",["Hängen.","Beine hoch.","Langsam runter."],60),
    ex("Kabel Crunches",4,"12","Bauch","Bauch","cablecrunch","Bauch","Schwer und sauber.","Nicht Arme nutzen.",["Seil greifen.","Einrollen.","Zurück."],60),
    ex("Russian Twists",3,"20","Bauch seitlich","Bauch","twist","Bauch","Kontrollierte Rotation.","Nicht hektisch drehen.",["Rumpf anspannen.","Links/rechts drehen.","Kontrolliert bleiben."],45),
    ex("Steigung Laufband",1,"30 min","Cardio","Cardio","treadmill","Cardio","Konstant gehen.","Nicht sprinten.",["Steigung wählen.","Gehen.","Konstant bleiben."],60)
  ]},
  rest:{title:"Pause",short:"Pause",day:"Donnerstag/Sonntag",ex:[]}
};

const dayMap={1:"push1",2:"pull1",3:"legs",4:"rest",5:"push2",6:"pull2",0:"rest"};
let currentWorkout=dayMap[new Date().getDay()];
let selectedExercise=null;
let editId=null;
let hideDone=false;
let activeFilter="all";
let timerBase=120, timerLeft=120, timerInterval=null, timerRunning=false;
const $=id=>document.getElementById(id);

function today(){return new Date().toISOString().slice(0,10)}
function dateDE(d){return new Date(d+"T00:00:00").toLocaleDateString("de-AT")}
function esc(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
function getSets(){
  let v=JSON.parse(localStorage.getItem(TRAIN_KEY)||"[]");
  if(!v.length){
    for(const k of OLD_KEYS){
      const old=JSON.parse(localStorage.getItem(k)||"[]");
      if(old.length){v=old.map(migrateSet);localStorage.setItem(TRAIN_KEY,JSON.stringify(v));break;}
    }
  }
  return v;
}
function migrateSet(s){return {...s, workout:s.workout||"custom", workoutTitle:s.workoutTitle||s.day||"Training", muscle:s.muscle||"Sonstiges", group:s.group||"Sonstiges"}}
function setSets(v){localStorage.setItem(TRAIN_KEY,JSON.stringify(v))}
function getBody(){return JSON.parse(localStorage.getItem(BODY_KEY)||"[]")}
function setBody(v){localStorage.setItem(BODY_KEY,JSON.stringify(v))}

function init(){
  fillSelects();
  $("bodyDate").value=today();

  document.querySelectorAll(".nav").forEach(b=>b.addEventListener("click",()=>showScreen(b.dataset.screen)));
  $("workoutSelect").addEventListener("change",e=>{currentWorkout=e.target.value;renderAll()});
  $("toggleDone").addEventListener("click",()=>{hideDone=!hideDone;$("toggleDone").textContent=hideDone?"Alle anzeigen":"Erledigte ausblenden";renderExercises()});
  $("startTraining").addEventListener("click",()=>openExercise(getNextExercise()?.name));
  $("timerButton").addEventListener("click",toggleTimer);

  $("closeExercise").addEventListener("click",()=>$("exerciseModal").classList.add("hidden"));
  $("openSetModal").addEventListener("click",openSetModal);
  $("closeSet").addEventListener("click",()=>$("setModal").classList.add("hidden"));
  $("saveSet").addEventListener("click",saveSet);
  $("copyLast").addEventListener("click",copyLastIntoSet);

  $("closeEdit").addEventListener("click",()=>$("editModal").classList.add("hidden"));
  $("saveEdit").addEventListener("click",saveEdit);

  document.querySelectorAll(".detailTab").forEach(b=>b.addEventListener("click",()=>switchDetailTab(b.dataset.tab)));
  document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>{activeFilter=b.dataset.filter;document.querySelectorAll(".filter").forEach(x=>x.classList.toggle("active",x===b));renderLibrary()}));
  $("librarySearch").addEventListener("input",renderLibrary);
  $("logSearch").addEventListener("input",renderLog);
  $("logWorkoutFilter").addEventListener("change",renderLog);

  $("saveBody").addEventListener("click",saveBody);
  $("exportJson").addEventListener("click",exportJSON);
  $("importJson").addEventListener("change",importJSON);
  $("exportCsv").addEventListener("click",exportCSV);
  $("clearAll").addEventListener("click",clearAll);

  if("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js?v=5");
  renderAll();
}

function fillSelects(){
  const options=Object.entries(workouts).map(([k,w])=>`<option value="${k}">${w.day}: ${w.title}</option>`).join("");
  $("workoutSelect").innerHTML=options;
  $("logWorkoutFilter").innerHTML=`<option value="">Alle Workouts</option>${options}`;
  $("workoutSelect").value=currentWorkout;
}

function showScreen(id){
  document.querySelectorAll(".screen").forEach(s=>s.classList.toggle("active",s.id===id));
  document.querySelectorAll(".nav").forEach(b=>b.classList.toggle("active",b.dataset.screen===id));
  renderAll();
}

function renderAll(){
  $("workoutSelect").value=currentWorkout;
  const w=workouts[currentWorkout];
  $("todayTitle").textContent=w.title;
  $("todayDate").textContent=`${new Date().toLocaleDateString("de-AT",{weekday:"long"})}, ${dateDE(today())}`;
  renderDashboard();
  renderExercises();
  renderPlan();
  renderLibrary();
  renderStats();
  renderLog();
  renderBody();
}

function getTodaySets(){return getSets().filter(s=>s.date===today()&&s.workout===currentWorkout)}
function setsForExercise(name){return getTodaySets().filter(s=>s.exercise===name)}
function isDone(ex){return setsForExercise(ex.name).length>=Number(ex.sets)}
function lastSet(name){return getSets().filter(s=>s.exercise===name).sort((a,b)=>b.id-a.id)[0]}
function getNextExercise(){return workouts[currentWorkout].ex.find(e=>!isDone(e))||null}
function suggestion(ex){
  const l=lastSet(ex.name);
  if(!l)return {text:"moderates Startgewicht", weight:"", reps:""};
  const m=String(ex.reps).match(/(\d+)[–-](\d+)/);
  if(m){
    const low=Number(m[1]), high=Number(m[2]);
    if(Number(l.reps)<high)return {text:`${l.weight} kg × ${Number(l.reps)+1}`,weight:l.weight,reps:Number(l.reps)+1};
    return {text:`${(Number(l.weight)+2.5).toFixed(1).replace(".0","")} kg × ${low}`,weight:Number(l.weight)+2.5,reps:low};
  }
  return {text:`${l.weight} kg × ${l.reps}`,weight:l.weight,reps:l.reps};
}

function renderDashboard(){
  const w=workouts[currentWorkout], data=getTodaySets();
  const totalSets=w.ex.reduce((a,e)=>a+Number(e.sets),0);
  const doneSets=data.length;
  const doneExercises=w.ex.filter(isDone).length;
  const pct=totalSets?Math.min(100,Math.round(doneSets/totalSets*100)):0;
  $("doneExercises").textContent=`${doneExercises}/${w.ex.length}`;
  $("doneSets").textContent=`${doneSets}/${totalSets}`;
  $("todayVolume").textContent=`${Math.round(data.reduce((a,s)=>a+s.weight*s.reps,0))} kg`;
  $("ringText").textContent=`${pct}%`;
  $("ringValue").style.strokeDashoffset=113-(113*pct/100);
  const next=getNextExercise();
  if(next){
    $("nextExercise").textContent=next.name;
    const l=lastSet(next.name);
    $("nextInfo").textContent=l?`Letztes Mal: ${l.weight} kg × ${l.reps}`:"Noch keine Daten";
    $("nextVisual").innerHTML=visual(next.visual,"small");
  }else{
    $("nextExercise").textContent=w.ex.length?"Training fertig":"Pause";
    $("nextInfo").textContent=w.ex.length?"Alle Sätze erledigt.":"Heute ist Regeneration.";
    $("nextVisual").innerHTML=visual("rest","small");
  }
}

function renderExercises(){
  const w=workouts[currentWorkout];
  if(!w.ex.length){
    $("exerciseList").innerHTML=`<div class="card"><h2>Pause</h2><p class="muted">Heute ist Pause. Optional: Spaziergang, leichtes Cardio oder Mobility.</p></div>`;
    return;
  }
  $("exerciseList").innerHTML=w.ex.filter(e=>!hideDone||!isDone(e)).map(e=>{
    const done=setsForExercise(e.name).length;
    const progress=Math.min(100,Math.round(done/Number(e.sets)*100));
    const l=lastSet(e.name);
    const s=suggestion(e);
    return `<div class="exerciseCard ${done>=Number(e.sets)?"done":""}">
      <div class="exerciseThumb">${visual(e.visual,"thumb")}</div>
      <div>
        <div class="exerciseTop">
          <div>
            <div class="exerciseName">${esc(e.name)}</div>
            <div class="exerciseMeta">${e.sets} Sätze · ${e.reps} Wdh. · Pause ${e.rest}s</div>
          </div>
          <span class="muscleTag">${esc(e.muscle)}</span>
        </div>
        <div class="progressLine"><div style="width:${progress}%"></div></div>
        <div class="exerciseLast">Letztes Training: ${l?`${l.weight} kg × ${l.reps}`:"noch nichts"}</div>
        <div class="exerciseSuggestion">Vorschlag heute: <b>${esc(s.text)}</b></div>
        <div class="exerciseMeta">Heute: ${done}/${e.sets} Sätze</div>
        <div class="exerciseActions">
          <button class="smallBtn logBtn" onclick="openSetFor('${e.name}')">Satz eintragen</button>
          <button class="smallBtn detailBtn" onclick="openExercise('${e.name}')">Details</button>
        </div>
      </div>
    </div>`;
  }).join("");
}

function renderPlan(){
  const days=[["Montag","push1"],["Dienstag","pull1"],["Mittwoch","legs"],["Donnerstag","rest"],["Freitag","push2"],["Samstag","pull2"],["Sonntag","rest"]];
  const todayIndex=(new Date().getDay()+6)%7;
  $("weekPlan").innerHTML=days.map(([d,k],i)=>{
    const w=workouts[k];
    const text=k==="rest"?"Regeneration / optional leichtes Cardio":w.ex.slice(0,5).map(e=>e.name).join(", ")+(w.ex.length>5?" …":"");
    return `<div class="weekItem ${i===todayIndex?"today":""}"><b>${d}: ${w.title}</b><span>${esc(text)}</span></div>`;
  }).join("");
}

function allExercises(){
  const map=new Map();
  Object.values(workouts).forEach(w=>w.ex.forEach(e=>map.set(e.name,e)));
  return [...map.values()];
}

function renderLibrary(){
  const q=($("librarySearch").value||"").toLowerCase();
  $("libraryList").innerHTML=allExercises().filter(e=>(activeFilter==="all"||e.group===activeFilter)&&(!q||e.name.toLowerCase().includes(q))).map(e=>`
    <div class="libraryItem" onclick="openLibraryExercise('${e.name}')">
      <div class="exerciseThumb">${visual(e.visual,"thumb")}</div>
      <div>
        <div class="exerciseName">${esc(e.name)}</div>
        <div class="exerciseMeta">${esc(e.muscle)} · ${esc(e.type)}</div>
        <div class="exerciseSuggestion">${esc(e.tip)}</div>
      </div>
    </div>`).join("")||`<p class="muted">Keine Übung gefunden.</p>`;
}

function findExercise(name){
  for(const w of Object.values(workouts)){
    const e=w.ex.find(x=>x.name===name);
    if(e)return e;
  }
}
function openLibraryExercise(name){
  const e=findExercise(name);
  selectedExercise=e;
  fillExerciseModal(e);
  $("exerciseModal").classList.remove("hidden");
}
function openExercise(name){
  const e=workouts[currentWorkout].ex.find(x=>x.name===name)||findExercise(name);
  if(!e)return;
  selectedExercise=e;
  fillExerciseModal(e);
  $("exerciseModal").classList.remove("hidden");
}
function openSetFor(name){
  openExercise(name);
  openSetModal();
}
function fillExerciseModal(e){
  $("modalMuscle").textContent=e.muscle;
  $("modalTitle").textContent=e.name;
  $("modalHero").innerHTML=visual(e.visual,"hero");
  $("modalSets").textContent=e.sets;
  $("modalReps").textContent=e.reps;
  $("modalRest").textContent=`${e.rest}s`;
  $("modalType").textContent=e.type;
  $("techTip").textContent=e.tip;
  $("avoidTip").textContent=e.avoid;
  $("executionSteps").innerHTML=e.steps.map(x=>`<li>${esc(x)}</li>`).join("");
  const s=suggestion(e), l=lastSet(e.name);
  $("suggestionText").textContent=s.text;
  $("lastTrainingText").textContent=l?`Letztes Training: ${l.weight} kg × ${l.reps}`:"Letztes Training: noch nichts";
  switchDetailTab("overview");
}
function switchDetailTab(tab){
  document.querySelectorAll(".detailTab").forEach(b=>b.classList.toggle("active",b.dataset.tab===tab));
  ["Overview","Execution","Tips"].forEach(t=>$("tab"+t).classList.toggle("active",t.toLowerCase()===tab));
}

function openSetModal(){
  if(!selectedExercise)return;
  const s=suggestion(selectedExercise);
  $("setTitle").textContent=selectedExercise.name;
  $("setNo").value=setsForExercise(selectedExercise.name).length+1;
  $("setWeight").value=s.weight||"";
  $("setReps").value=s.reps||"";
  $("setNote").value="";
  $("setModal").classList.remove("hidden");
}
function saveSet(){
  if(!selectedExercise)return;
  const weight=Number($("setWeight").value), reps=Number($("setReps").value);
  if(!weight||!reps){alert("Bitte Gewicht und Wiederholungen eintragen.");return;}
  const data=getSets();
  data.unshift({id:Date.now(),date:today(),workout:currentWorkout,workoutTitle:workouts[currentWorkout].title,exercise:selectedExercise.name,setNo:Number($("setNo").value||1),weight,reps,note:$("setNote").value.trim(),muscle:selectedExercise.muscle,group:selectedExercise.group});
  setSets(data);
  $("setModal").classList.add("hidden");
  $("exerciseModal").classList.add("hidden");
  startTimer(selectedExercise.rest);
  renderAll();
}
function copyLastIntoSet(){
  if(!selectedExercise)return;
  const l=lastSet(selectedExercise.name);
  if(l){$("setWeight").value=l.weight;$("setReps").value=l.reps;$("setNote").value=l.note||"";}
}

function startTimer(sec){
  timerBase=sec;timerLeft=sec;timerRunning=true;clearInterval(timerInterval);updateTimer();
  timerInterval=setInterval(()=>{timerLeft--;updateTimer();if(timerLeft<=0){clearInterval(timerInterval);timerRunning=false;if(navigator.vibrate)navigator.vibrate([250,120,250]);}},1000);
}
function toggleTimer(){
  if(timerRunning){clearInterval(timerInterval);timerRunning=false;}
  else{startTimer(timerLeft||timerBase);}
}
function updateTimer(){
  $("timerButton").textContent=`${Math.floor(timerLeft/60).toString().padStart(2,"0")}:${(timerLeft%60).toString().padStart(2,"0")}`;
}

function renderStats(){
  const data=getSets();
  const weekStart=new Date();weekStart.setDate(weekStart.getDate()-((weekStart.getDay()+6)%7));weekStart.setHours(0,0,0,0);
  $("statTrainings").textContent=new Set(data.filter(s=>new Date(s.date)>=weekStart).map(s=>s.date)).size;
  $("statSets").textContent=data.length;
  $("statVolume").textContent=Math.round(data.reduce((a,s)=>a+s.weight*s.reps,0)).toLocaleString("de-AT");
  const best={};
  data.forEach(s=>{const score=s.weight*(1+s.reps/30);if(!best[s.exercise]||score>best[s.exercise].score)best[s.exercise]={...s,score}});
  $("statPRs").textContent=Object.keys(best).length;
  const vol={};
  data.forEach(s=>vol[s.group||s.muscle||"Sonstiges"]=(vol[s.group||s.muscle||"Sonstiges"]||0)+s.weight*s.reps);
  const max=Math.max(1,...Object.values(vol));
  $("muscleBars").innerHTML=Object.entries(vol).sort((a,b)=>b[1]-a[1]).map(([m,v])=>`
    <div class="barRow">
      <div class="barTop"><span>${esc(m)}</span><span>${Math.round(v).toLocaleString("de-AT")} kg</span></div>
      <div class="barTrack"><div class="barFill" style="width:${Math.round(v/max*100)}%"></div></div>
    </div>`).join("")||`<p class="muted">Noch kein Volumen vorhanden.</p>`;
  $("prList").innerHTML=Object.values(best).sort((a,b)=>b.score-a.score).map(s=>`
    <div class="logItem">
      <div class="logTitle">${esc(s.exercise)}</div>
      <div class="logMeta">PR: ${s.weight} kg × ${s.reps} · ${dateDE(s.date)}<br>Score: ${s.score.toFixed(1)}</div>
    </div>`).join("")||`<p class="muted">Noch keine PRs.</p>`;
}

function renderLog(){
  const q=($("logSearch").value||"").toLowerCase();
  const fw=$("logWorkoutFilter").value||"";
  const rows=getSets().filter(s=>(!q||s.exercise.toLowerCase().includes(q))&&(!fw||s.workout===fw));
  $("logList").innerHTML=rows.map(s=>`
    <div class="logItem">
      <div class="logTitle">${esc(s.exercise)}</div>
      <div class="logMeta">${dateDE(s.date)} · ${esc(s.workoutTitle||"Training")} · Satz ${s.setNo}<br>${s.weight} kg × ${s.reps} Wdh.${s.note?" · "+esc(s.note):""}</div>
      <div class="logActions">
        <button class="editBtn" onclick="editSet(${s.id})">Bearbeiten</button>
        <button class="copyBtn" onclick="copySet(${s.id})">Kopieren</button>
        <button class="deleteBtn" onclick="deleteSet(${s.id})">Löschen</button>
      </div>
    </div>`).join("")||`<p class="muted">Noch keine Einträge.</p>`;
}
function editSet(id){
  const s=getSets().find(x=>x.id===id);if(!s)return;editId=id;
  $("editSetNo").value=s.setNo;$("editWeight").value=s.weight;$("editReps").value=s.reps;$("editNote").value=s.note||"";
  $("editModal").classList.remove("hidden");
}
function saveEdit(){
  const data=getSets();const i=data.findIndex(s=>s.id===editId);
  if(i>=0){data[i]={...data[i],setNo:Number($("editSetNo").value),weight:Number($("editWeight").value),reps:Number($("editReps").value),note:$("editNote").value};setSets(data);}
  $("editModal").classList.add("hidden");renderAll();
}
function copySet(id){
  const s=getSets().find(x=>x.id===id);if(!s)return;
  setSets([{...s,id:Date.now(),date:today()},...getSets()]);renderAll();
}
function deleteSet(id){
  if(confirm("Satz wirklich löschen?")){setSets(getSets().filter(s=>s.id!==id));renderAll();}
}

function saveBody(){
  const w=Number($("bodyWeight").value);if(!w)return;
  setBody([{id:Date.now(),date:$("bodyDate").value||today(),weight:w},...getBody()]);
  $("bodyWeight").value="";renderBody();
}
function renderBody(){
  const data=getBody().slice(0,10);
  const vals=data.slice().reverse();
  const min=Math.min(...vals.map(x=>x.weight),0),max=Math.max(...vals.map(x=>x.weight),1);
  $("bodyChart").innerHTML=vals.length?vals.map(x=>`<div class="chartBar" style="height:${20+(x.weight-min)/(max-min||1)*80}%"></div>`).join(""):`<p class="muted">Noch keine Daten.</p>`;
  $("bodyList").innerHTML=data.map(x=>`<div class="logItem"><div class="logTitle">${x.weight} kg</div><div class="logMeta">${dateDE(x.date)}</div></div>`).join("");
}

function exportJSON(){download("gymjournal-backup.json",JSON.stringify({version:5,sets:getSets(),body:getBody()},null,2),"application/json")}
function importJSON(e){
  const f=e.target.files[0];if(!f)return;
  const r=new FileReader();r.onload=()=>{try{const b=JSON.parse(r.result);if(b.sets)setSets(b.sets);if(b.body)setBody(b.body);renderAll();alert("Backup importiert.");}catch{alert("Backup ungültig.");}};r.readAsText(f);
}
function exportCSV(){
  const rows=[["Datum","Workout","Übung","Satz","Gewicht","Wiederholungen","Muskel","Notiz"],...getSets().map(s=>[s.date,s.workoutTitle,s.exercise,s.setNo,s.weight,s.reps,s.muscle,s.note])];
  download("gymjournal.csv",rows.map(r=>r.map(v=>`"${String(v??"").replaceAll('"','""')}"`).join(";")).join("\n"),"text/csv");
}
function download(name,content,type){const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([content],{type}));a.download=name;a.click();}
function clearAll(){if(confirm("Alle Daten löschen?")){localStorage.removeItem(TRAIN_KEY);localStorage.removeItem(BODY_KEY);renderAll();}}

function visual(type,size="thumb"){
  const big=size==="hero";
  const w=big?330:110, h=big?210:90;
  const person="#d7dbe6", red="#ef3d3d", line="#343b4d", metal="#9aa3b5", skin="#d7dbe6";
  const sw=big?5:4;
  const common=`width="${w}" height="${h}" viewBox="0 0 220 140"`;
  const stroke=`stroke="${person}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none"`;
  const machine=`stroke="${line}" stroke-width="${big?7:5}" stroke-linecap="round" fill="none"`;
  const bar=`stroke="${metal}" stroke-width="${big?6:4}" stroke-linecap="round"`;
  const head=`<circle cx="106" cy="45" r="9" fill="${skin}"/>`;
  const bench=`<path d="M55 105 H155" ${bar}/><path d="M70 105 L60 125 M140 105 L155 125" ${machine}/>`;
  const plates=`<circle cx="45" cy="40" r="13" fill="#1b202b" stroke="${metal}" stroke-width="3"/><circle cx="175" cy="40" r="13" fill="#1b202b" stroke="${metal}" stroke-width="3"/>`;
  if(type==="incline")return `<svg ${common}><rect x="8" y="8" width="204" height="124" rx="18" fill="#0a0d13"/><path d="M70 106 L132 70" ${bar}/><path d="M55 110 L150 110" ${bar}/>${plates}<path class="motionA" d="M45 40 H175" ${bar}/><circle cx="105" cy="66" r="8" fill="${skin}"/><path d="M99 73 L80 92 L126 82 L148 56" ${stroke}/><path d="M86 88 L68 105 M124 83 L144 104" ${stroke}/><text x="16" y="125" fill="${red}" font-size="11" font-weight="700">Schrägbank</text></svg>`;
  if(type==="bench"||type==="chestpress")return `<svg ${common}><rect x="8" y="8" width="204" height="124" rx="18" fill="#0a0d13"/>${bench}${plates}<path class="motionA" d="M45 40 H175" ${bar}/><circle cx="104" cy="74" r="8" fill="${skin}"/><path d="M92 82 L128 82 L146 54" ${stroke}/><path d="M92 82 L74 55" ${stroke}/><path d="M88 96 L70 110 M126 96 L148 110" ${stroke}/><text x="16" y="125" fill="${red}" font-size="11" font-weight="700">Drücken</text></svg>`;
  if(type==="butterfly")return `<svg ${common}><rect x="8" y="8" width="204" height="124" rx="18" fill="#0a0d13"/><path d="M45 35 V110 M175 35 V110 M45 48 C70 34 90 34 108 50 M175 48 C150 34 130 34 112 50" ${machine}/>${head}<path d="M106 55 V91" ${stroke}/><path class="motionB" d="M104 64 L70 52" ${stroke}/><path class="motionB" d="M108 64 L142 52" ${stroke}/><path d="M106 91 L90 118 M106 91 L125 118" ${stroke}/><text x="16" y="125" fill="${red}" font-size="11" font-weight="700">Butterfly</text></svg>`;
  if(type==="dips")return `<svg ${common}><rect x="8" y="8" width="204" height="124" rx="18" fill="#0a0d13"/><path d="M55 38 V118 M165 38 V118 M45 52 H90 M130 52 H175" ${machine}/><circle class="motionA" cx="110" cy="50" r="9" fill="${skin}"/><path class="motionA" d="M110 60 L110 88 L82 55 M110 88 L138 55" ${stroke}/><path class="motionA" d="M110 88 L94 118 M110 88 L128 118" ${stroke}/><text x="16" y="125" fill="${red}" font-size="11" font-weight="700">Dips</text></svg>`;
  if(type==="shoulderpress")return `<svg ${common}><rect x="8" y="8" width="204" height="124" rx="18" fill="#0a0d13"/><path d="M54 118 V42 M166 118 V42 M54 42 H166" ${machine}/>${head}<path d="M106 55 V93" ${stroke}/><path class="motionA" d="M75 34 H145" ${bar}/><path class="motionA" d="M78 54 L95 68 M142 54 L118 68" ${stroke}/><path d="M106 93 L90 120 M106 93 L125 120" ${stroke}/><text x="16" y="125" fill="${red}" font-size="11" font-weight="700">Shoulder Press</text></svg>`;
  if(type==="lateral")return `<svg ${common}><rect x="8" y="8" width="204" height="124" rx="18" fill="#0a0d13"/>${head}<path d="M106 55 V94" ${stroke}/><path class="motionB" d="M104 65 L70 58" ${stroke}/><path class="motionB" d="M108 65 L142 58" ${stroke}/><circle cx="66" cy="58" r="5" fill="${red}"/><circle cx="146" cy="58" r="5" fill="${red}"/><path d="M106 94 L88 120 M106 94 L126 120" ${stroke}/><text x="16" y="125" fill="${red}" font-size="11" font-weight="700">Seitheben</text></svg>`;
  if(type==="reversefly")return `<svg ${common}><rect x="8" y="8" width="204" height="124" rx="18" fill="#0a0d13"/><path d="M70 45 H150 V112 H70 Z" ${machine}/><circle cx="110" cy="58" r="8" fill="${skin}"/><path d="M110 66 V96" ${stroke}/><path class="motionB" d="M108 75 L70 62" ${stroke}/><path class="motionB" d="M112 75 L150 62" ${stroke}/><text x="16" y="125" fill="${red}" font-size="11" font-weight="700">Reverse Fly</text></svg>`;
  if(type==="latpulldown")return `<svg ${common}><rect x="8" y="8" width="204" height="124" rx="18" fill="#0a0d13"/><path d="M50 25 H170 M60 25 V118 M160 25 V118" ${machine}/><path class="motionA" d="M70 38 H150" ${bar}/>${head}<path d="M106 55 V92" ${stroke}/><path class="motionA" d="M86 42 L98 66 M134 42 L114 66" ${stroke}/><path d="M106 92 L88 118 M106 92 L126 118" ${stroke}/><text x="16" y="125" fill="${red}" font-size="11" font-weight="700">Latziehen</text></svg>`;
  if(type==="seatedrow"||type==="wideRow"||type==="chestrow")return `<svg ${common}><rect x="8" y="8" width="204" height="124" rx="18" fill="#0a0d13"/><path d="M38 110 H178 M45 50 L85 82 M182 48 L130 82" ${machine}/><circle cx="104" cy="58" r="8" fill="${skin}"/><path d="M104 66 L112 95 L145 108 M112 95 L84 112" ${stroke}/><path class="motionC" d="M145 78 L112 85 L80 77" ${stroke}/><text x="16" y="125" fill="${red}" font-size="11" font-weight="700">Rudern</text></svg>`;
  if(type==="facepull")return `<svg ${common}><rect x="8" y="8" width="204" height="124" rx="18" fill="#0a0d13"/><path d="M40 28 V118 M40 38 H74" ${machine}/>${head}<path d="M106 55 V96" ${stroke}/><path class="motionC" d="M74 40 L100 58 M74 40 L112 58" ${stroke}/><path d="M106 96 L90 120 M106 96 L124 120" ${stroke}/><text x="16" y="125" fill="${red}" font-size="11" font-weight="700">Face Pull</text></svg>`;
  if(type==="deadlift"||type==="rdl")return `<svg ${common}><rect x="8" y="8" width="204" height="124" rx="18" fill="#0a0d13"/><path d="M43 110 H177" ${bar}/><circle cx="42" cy="110" r="13" fill="#1b202b" stroke="${metal}" stroke-width="3"/><circle cx="178" cy="110" r="13" fill="#1b202b" stroke="${metal}" stroke-width="3"/><circle cx="105" cy="38" r="8" fill="${skin}"/><path d="M105 47 L118 78 L146 108 M118 78 L90 108" ${stroke}/><path class="motionA" d="M118 78 L70 108 M118 78 L150 108" ${stroke}/><text x="16" y="125" fill="${red}" font-size="11" font-weight="700">Deadlift</text></svg>`;
  if(type==="legpress")return `<svg ${common}><rect x="8" y="8" width="204" height="124" rx="18" fill="#0a0d13"/><path d="M62 108 L142 54 L165 92 M145 42 L176 42 L176 105" ${machine}/><circle cx="78" cy="80" r="8" fill="${skin}"/><path d="M86 86 L115 100 L142 70" ${stroke}/><path class="motionA" d="M128 70 L166 48" ${stroke}/><text x="16" y="125" fill="${red}" font-size="11" font-weight="700">Beinpresse</text></svg>`;
  if(type==="legcurl"||type==="legextension")return `<svg ${common}><rect x="8" y="8" width="204" height="124" rx="18" fill="#0a0d13"/><path d="M52 95 H140 L170 118 M74 95 L56 120" ${machine}/><circle cx="72" cy="60" r="8" fill="${skin}"/><path d="M78 68 L112 92" ${stroke}/><path class="motionB" d="M112 92 L160 90" ${stroke}/><circle cx="166" cy="90" r="7" fill="${red}"/><text x="16" y="125" fill="${red}" font-size="11" font-weight="700">Beinmaschine</text></svg>`;
  if(type==="calf")return `<svg ${common}><rect x="8" y="8" width="204" height="124" rx="18" fill="#0a0d13"/>${head}<path d="M106 55 V94" ${stroke}/><path d="M106 94 L92 120 M106 94 L124 120" ${stroke}/><path class="motionA" d="M72 122 H143" ${bar}/><text x="16" y="125" fill="${red}" font-size="11" font-weight="700">Wadenheben</text></svg>`;
  if(type==="pushdown"||type==="overheadtri")return `<svg ${common}><rect x="8" y="8" width="204" height="124" rx="18" fill="#0a0d13"/><path d="M48 26 V118 M48 28 H98" ${machine}/>${head}<path d="M106 55 V94" ${stroke}/><path class="motionA" d="M88 42 L104 68 L104 94 M124 68 L124 94" ${stroke}/><path d="M106 94 L90 120 M106 94 L126 120" ${stroke}/><text x="16" y="125" fill="${red}" font-size="11" font-weight="700">Trizeps Kabel</text></svg>`;
  if(type==="curl"||type==="hammer"||type==="bayesian")return `<svg ${common}><rect x="8" y="8" width="204" height="124" rx="18" fill="#0a0d13"/>${head}<path d="M106 55 V95" ${stroke}/><path d="M104 67 L82 88" ${stroke}/><path class="motionB" d="M108 67 L135 91 L143 72" ${stroke}/><circle cx="145" cy="70" r="6" fill="${red}"/><path d="M106 95 L90 120 M106 95 L126 120" ${stroke}/><text x="16" y="125" fill="${red}" font-size="11" font-weight="700">Curl</text></svg>`;
  if(type==="cablecrunch")return `<svg ${common}><rect x="8" y="8" width="204" height="124" rx="18" fill="#0a0d13"/><path d="M50 25 V118 M50 30 H110" ${machine}/><circle class="motionB" cx="105" cy="58" r="8" fill="${skin}"/><path class="motionB" d="M105 66 C92 78 84 92 80 112" ${stroke}/><path d="M76 112 H130" ${bar}/><text x="16" y="125" fill="${red}" font-size="11" font-weight="700">Cable Crunch</text></svg>`;
  if(type==="kneeraise"||type==="legraise")return `<svg ${common}><rect x="8" y="8" width="204" height="124" rx="18" fill="#0a0d13"/><path d="M55 30 H165 M62 30 V118 M158 30 V118" ${machine}/>${head}<path d="M106 55 V90" ${stroke}/><path class="motionB" d="M106 90 L82 110 M106 90 L142 88" ${stroke}/><text x="16" y="125" fill="${red}" font-size="11" font-weight="700">Leg Raise</text></svg>`;
  if(type==="plank")return `<svg ${common}><rect x="8" y="8" width="204" height="124" rx="18" fill="#0a0d13"/><circle cx="70" cy="76" r="8" fill="${skin}"/><path d="M78 80 L125 82 L168 98" ${stroke}/><path d="M100 82 L88 110 M150 92 L165 118" ${stroke}/><path d="M50 112 H180" ${bar}/><text x="16" y="125" fill="${red}" font-size="11" font-weight="700">Plank</text></svg>`;
  if(type==="twist")return `<svg ${common}><rect x="8" y="8" width="204" height="124" rx="18" fill="#0a0d13"/><circle cx="105" cy="48" r="8" fill="${skin}"/><path d="M105 56 L105 90" ${stroke}/><path class="motionB" d="M88 70 H128" ${stroke}/><path d="M105 90 L82 118 M105 90 L132 118" ${stroke}/><text x="16" y="125" fill="${red}" font-size="11" font-weight="700">Twist</text></svg>`;
  if(type==="treadmill")return `<svg ${common}><rect x="8" y="8" width="204" height="124" rx="18" fill="#0a0d13"/><path d="M45 104 H170 L188 120 H60 Z" ${machine}/><path d="M160 104 L180 58 H195" ${machine}/><circle cx="95" cy="48" r="8" fill="${skin}"/><path d="M95 56 L105 82 L130 104" ${stroke}/><path class="motionA" d="M105 82 L78 105" ${stroke}/><text x="16" y="125" fill="${red}" font-size="11" font-weight="700">Laufband</text></svg>`;
  return `<svg ${common}><rect x="8" y="8" width="204" height="124" rx="18" fill="#0a0d13"/><text x="50" y="75" fill="${red}" font-size="18" font-weight="800">GYM</text></svg>`;
}
init();