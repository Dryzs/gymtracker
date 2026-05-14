const TRAIN_KEY="gymjournal_sets_v3";
const BODY_KEY="gymjournal_body_v3";

const workouts={
  push1:{title:"Push schwer",day:"Montag",desc:"Brust, Schulter, Trizeps + Bauch",ex:[
    ["Bankdrücken Maschine","4","6–10","chest","Schulterblätter hinten/unten, kontrolliert drücken."],
    ["Schrägbankdrücken","3","8–12","chest","Fokus obere Brust, nicht zu steil einstellen."],
    ["Butterfly","3","12–15","chest","Langsam dehnen, vorne bewusst zusammendrücken."],
    ["Dips","3","max sauber","triceps","Oberkörper leicht vor, keine Schulterschmerzen erzwingen."],
    ["Schulterdrücken Maschine","3","8–12","shoulder","Nicht ins Hohlkreuz, kontrolliert hochdrücken."],
    ["Seitheben","4","12–15","shoulder","Ellbogen leicht höher als Hand, wenig Schwung."],
    ["Reverse Butterfly","3","12–15","rear","Hintere Schulter, nicht aus dem Nacken ziehen."],
    ["Überkopf Trizepsstrecken","3","10–12","triceps","Langsame Dehnung hinter dem Kopf."],
    ["Kabel Pushdowns","3","10–12","triceps","Ellbogen bleiben am Körper."],
    ["Kabel Crunches","4","12–15","abs","Rücken rund machen, nicht nur mit Armen ziehen."]
  ]},
  pull1:{title:"Pull schwer",day:"Dienstag",desc:"Rücken, Bizeps + Bauch",ex:[
    ["Deadlift leicht-mittel","3","5–6","deadlift","Wegen Meniskus sauber und kontrolliert, kein Ego-Gewicht."],
    ["Latziehen eng","4","8–12","lat","Brust hoch, Ellbogen Richtung Hüfte."],
    ["Rudern eng","4","8–12","row","Deine starke Übung: Schulterblätter aktiv zurückziehen."],
    ["Chest Supported Row","3","10–12","row","Brust bleibt am Polster, sauber rudern."],
    ["Face Pulls","3","15","rear","Seil Richtung Gesicht, Ellbogen hoch."],
    ["Normale Curls","3","8–12","curl","Oberarm ruhig halten."],
    ["Hammercurls","3","10–12","curl","Neutraler Griff, sauber kontrollieren."],
    ["Bayesian Curls","3","12","curl","Arm leicht hinter dem Körper, volle Dehnung."],
    ["Hanging Knee Raises","3","12–15","abs","Becken einrollen, nicht nur Beine schwingen."]
  ]},
  legs:{title:"Beine + Bauch",day:"Mittwoch",desc:"Meniskus-freundlicher Beinplan + Bauch",ex:[
    ["Beinpresse","4","10–12","leg","Kontrollierte Tiefe, Knie nicht schmerzhaft überlasten."],
    ["Romanian Deadlift","3","10","deadlift","Hüfte nach hinten, Rücken neutral."],
    ["Beinbeuger","3","12–15","leg","Langsam ablassen."],
    ["Beinstrecker leicht","3","15","leg","Nur schmerzfrei und kontrolliert wegen Meniskus."],
    ["Wadenheben","4","15–20","leg","Unten dehnen, oben kurz halten."],
    ["Kabel Crunches schwer","4","12","abs","Schwer, aber sauber einrollen."],
    ["Leg Raises","3","15","abs","Langsam, ohne Schwung."],
    ["Plank","3","30–60s","abs","Bauch fest, kein Hohlkreuz."],
    ["Steigung Laufband","1","20–30 min","cardio","Normales Gehen mit Steigung."]
  ]},
  push2:{title:"Push Pump",day:"Freitag",desc:"Brust, Schulter, Trizeps mit mehr Volumen",ex:[
    ["Schrägbankdrücken","4","10–12","chest","Obere Brust priorisieren."],
    ["Butterfly","4","15","chest","Langsam und mit Pump."],
    ["Chest Press","3","12","chest","Kontrolliert drücken."],
    ["Seitheben","5","15","shoulder","Hauptfokus: breite Schulterkappe."],
    ["Reverse Butterfly","4","15","rear","Hintere Schulter sauber treffen."],
    ["Schulterdrücken Maschine","3","10","shoulder","Nicht maximal schwer."],
    ["Pushdowns","4","12","triceps","Ellbogen stabil."],
    ["Überkopf Trizepsstrecken","3","12","triceps","Gute Dehnung."],
    ["Kabel Crunches","4","15","abs","Saubere Kontraktion."]
  ]},
  pull2:{title:"Pull + Bauch",day:"Samstag",desc:"Rückenbreite, Bizeps, Bauch + Cardio",ex:[
    ["Latziehen breit","4","10","lat","Breiter Rücken, Ellbogen runterziehen."],
    ["Rudern eng","4","10","row","Kontrolliert, kein Schwung."],
    ["Rudern breit","3","12","row","Oberer Rücken, Ellbogen weiter außen."],
    ["Face Pulls","4","15","rear","Haltung und hintere Schulter."],
    ["Normale Curls","3","10","curl","Sauber und kontrolliert."],
    ["Hammercurls","3","12","curl","Unterarm/Brachialis."],
    ["Hanging Leg Raises","4","12","abs","Becken einrollen."],
    ["Kabel Crunches","4","12","abs","Schwer und kontrolliert."],
    ["Russian Twists","3","20","abs","Rumpf rotiert, kontrolliert."],
    ["Steigung Laufband","1","30 min","cardio","Konstant gehen."]
  ]}
};

const weekly=[
  ["Montag","Push schwer","Brust, Schulter, Trizeps + Kabel Crunches"],
  ["Dienstag","Pull schwer","Deadlift leicht, Latziehen, Rudern, Bizeps + Bauch"],
  ["Mittwoch","Beine + Bauch","Meniskus-freundliche Beine + Bauchfokus + Laufband"],
  ["Donnerstag","Pause","Spazieren oder leichtes Cardio optional"],
  ["Freitag","Push Pump","Mehr Wiederholungen, Schulter/Bauch-Fokus"],
  ["Samstag","Pull + Bauch","Rückenbreite, Bizeps, Bauch + Laufband"],
  ["Sonntag","Pause","Regeneration"]
];

const $=id=>document.getElementById(id);
let selectedWorkout="push1", selectedExercise=null, timer=120, timerLeft=120, timerRun=false, timerInterval=null;

function today(){return new Date().toISOString().slice(0,10)}
function dateDE(d){return new Date(d+"T00:00:00").toLocaleDateString("de-AT")}
function getSets(){return JSON.parse(localStorage.getItem(TRAIN_KEY)||"[]")}
function setSets(v){localStorage.setItem(TRAIN_KEY,JSON.stringify(v))}
function getBody(){return JSON.parse(localStorage.getItem(BODY_KEY)||"[]")}
function setBody(v){localStorage.setItem(BODY_KEY,JSON.stringify(v))}
function esc(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}

function init(){
  $("todayDate").textContent=dateDE(today());
  $("bodyDate").value=today();
  renderWeekly();
  document.querySelectorAll(".tab").forEach(b=>b.addEventListener("click",()=>showScreen(b.dataset.screen)));
  document.querySelectorAll(".split").forEach(b=>b.addEventListener("click",()=>selectWorkout(b.dataset.workout)));
  document.querySelectorAll(".timerPreset").forEach(b=>b.addEventListener("click",()=>setTimer(Number(b.dataset.sec))));
  $("timerToggle").addEventListener("click",toggleTimer);
  $("closeModal").addEventListener("click",closeModal);
  $("saveSet").addEventListener("click",saveSet);
  $("search").addEventListener("input",renderAll);
  $("filterWorkout").addEventListener("change",renderAll);
  $("saveBody").addEventListener("click",saveBody);
  $("exportCsv").addEventListener("click",exportCsv);
  $("clearAll").addEventListener("click",clearAll);
  $("finishWorkout").addEventListener("click",()=>alert("Training gespeichert. Stark bleiben: Protein + Schritte nicht vergessen."));
  if("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js");
  selectWorkout("push1");
  setTimer(120);
  renderAll();
}

function showScreen(id){
  document.querySelectorAll(".tab").forEach(b=>b.classList.toggle("active",b.dataset.screen===id));
  document.querySelectorAll(".screen").forEach(s=>s.classList.toggle("active",s.id===id));
  renderAll();
}

function renderWeekly(){
  $("weeklyPlan").innerHTML=weekly.map(([day,title,desc])=>`
    <div class="planDay">
      <div class="planTop"><b>${day}</b><span class="badge">${title}</span></div>
      <div class="planExercises">${desc}</div>
    </div>`).join("");
}

function selectWorkout(key){
  selectedWorkout=key;
  document.querySelectorAll(".split").forEach(b=>b.classList.toggle("active",b.dataset.workout===key));
  $("workoutTitle").textContent=workouts[key].title;
  renderExerciseList();
}

function renderExerciseList(){
  const w=workouts[selectedWorkout];
  $("exerciseList").innerHTML=w.ex.map((ex,i)=>{
    const [name,sets,reps,type]=ex;
    const done=getSets().filter(s=>s.date===today()&&s.workout===selectedWorkout&&s.exercise===name).length;
    return `<div class="exerciseCard">
      <div class="demoMini">${svgIcon(type,true)}</div>
      <div>
        <div class="exName">${i+1}. ${esc(name)}</div>
        <div class="exMeta">${sets} Sätze · ${reps} Wdh. · heute: ${done}/${sets}</div>
      </div>
      <button class="openBtn" onclick="openExercise(${i})">Loggen</button>
    </div>`;
  }).join("");
}

function openExercise(i){
  selectedExercise={index:i, data:workouts[selectedWorkout].ex[i]};
  const [name,sets,reps,type,tip]=selectedExercise.data;
  $("modalExercise").textContent=name;
  $("movementDemo").innerHTML=svgIcon(type,false);
  $("exerciseTip").textContent=`Ziel: ${sets} Sätze × ${reps}. Tipp: ${tip}`;
  const entries=getSets().filter(s=>s.exercise===name).sort((a,b)=>b.id-a.id);
  const last=entries[0];
  $("lastSetInfo").textContent=last ? `Letzter Satz: ${last.weight} kg × ${last.reps} Wdh. am ${dateDE(last.date)}` : "Noch kein letzter Satz.";
  const todayDone=getSets().filter(s=>s.date===today()&&s.workout===selectedWorkout&&s.exercise===name).length;
  $("setNo").value=todayDone+1;
  $("weight").value="";
  $("reps").value="";
  $("note").value="";
  $("setModal").classList.remove("hidden");
}

function closeModal(){ $("setModal").classList.add("hidden"); }

function saveSet(){
  if(!selectedExercise) return;
  const [name,sets,reps,type,tip]=selectedExercise.data;
  const weight=Number($("weight").value);
  const repsDone=Number($("reps").value);
  if(!weight || !repsDone){ alert("Bitte Gewicht und Wiederholungen eintragen."); return; }
  const data=getSets();
  data.unshift({
    id:Date.now(), date:today(), workout:selectedWorkout, workoutTitle:workouts[selectedWorkout].title,
    exercise:name, setNo:Number($("setNo").value||1), weight, reps:repsDone, note:$("note").value.trim()
  });
  setSets(data);
  const todayDone=getSets().filter(s=>s.date===today()&&s.workout===selectedWorkout&&s.exercise===name).length;
  $("setNo").value=todayDone+1;
  $("weight").value="";
  $("reps").value="";
  $("note").value="";
  renderExerciseList();
  renderAll();
}

function renderAll(){
  const data=getSets();
  $("totalSets").textContent=data.length;
  renderLog(data);
  renderPR(data);
  renderBody();
}

function renderLog(data){
  const q=($("search").value||"").toLowerCase();
  const fw=$("filterWorkout").value||"";
  const filtered=data.filter(s=>(!q||s.exercise.toLowerCase().includes(q))&&(!fw||s.workout===fw));
  $("logList").innerHTML=filtered.length?filtered.map(s=>`
    <div class="logItem">
      <div class="logTitle">${esc(s.exercise)}</div>
      <div class="logMeta">${dateDE(s.date)} · ${esc(s.workoutTitle)} · Satz ${s.setNo}<br>${s.weight} kg × ${s.reps} Wdh.${s.note?" · "+esc(s.note):""}</div>
    </div>`).join(""):`<p class="hint">Noch keine Einträge.</p>`;
}

function renderPR(data){
  const best={};
  data.forEach(s=>{
    const score=s.weight*(1+s.reps/30);
    if(!best[s.exercise]||score>best[s.exercise].score) best[s.exercise]={...s,score};
  });
  const list=Object.values(best).sort((a,b)=>b.score-a.score);
  $("prList").innerHTML=list.length?list.map(s=>`
    <div class="logItem">
      <div class="logTitle">${esc(s.exercise)}</div>
      <div class="logMeta">PR: ${s.weight} kg × ${s.reps} Wdh. · ${dateDE(s.date)}<br>Score: ${s.score.toFixed(1)}</div>
    </div>`).join(""):`<p class="hint">Noch keine PRs vorhanden.</p>`;
}

function saveBody(){
  const weight=Number($("bodyWeight").value);
  if(!weight) return;
  const data=getBody();
  data.unshift({id:Date.now(),date:$("bodyDate").value||today(),weight});
  setBody(data);
  $("bodyWeight").value="";
  renderBody();
}
function renderBody(){
  const data=getBody().slice(0,10);
  $("bodyList").innerHTML=data.length?data.map(b=>`<div class="logItem"><div class="logTitle">${b.weight} kg</div><div class="logMeta">${dateDE(b.date)}</div></div>`).join(""):`<p class="hint">Noch kein Körpergewicht eingetragen.</p>`;
}

function setTimer(sec){
  timer=sec; timerLeft=sec; timerRun=false; clearInterval(timerInterval);
  document.querySelectorAll(".timerPreset").forEach(b=>b.classList.toggle("active",Number(b.dataset.sec)===sec));
  updateTimer();
}
function toggleTimer(){
  if(timerRun){timerRun=false;clearInterval(timerInterval);return;}
  timerRun=true;
  timerInterval=setInterval(()=>{
    timerLeft--; updateTimer();
    if(timerLeft<=0){clearInterval(timerInterval);timerRun=false;if(navigator.vibrate)navigator.vibrate([300,120,300]);}
  },1000);
}
function updateTimer(){
  $("timerDisplay").textContent=`${Math.floor(timerLeft/60).toString().padStart(2,"0")}:${(timerLeft%60).toString().padStart(2,"0")}`;
}

function exportCsv(){
  const data=getSets();
  if(!data.length){alert("Keine Daten vorhanden.");return;}
  const header=["Datum","Workout","Übung","Satz","Gewicht","Wiederholungen","Notiz"];
  const csv=[header,...data.map(s=>[s.date,s.workoutTitle,s.exercise,s.setNo,s.weight,s.reps,s.note])]
    .map(r=>r.map(v=>`"${String(v??"").replaceAll('"','""')}"`).join(";")).join("\n");
  const blob=new Blob([csv],{type:"text/csv;charset=utf-8"});
  const a=document.createElement("a");
  a.href=URL.createObjectURL(blob); a.download="gymjournal.csv"; a.click();
}
function clearAll(){
  if(confirm("Wirklich alle Daten löschen?")){
    localStorage.removeItem(TRAIN_KEY); localStorage.removeItem(BODY_KEY); renderAll(); renderExerciseList();
  }
}

function svgIcon(type,mini){
  const w=mini?76:240,h=mini?60:150,scale=mini?0.55:1.25;
  const common=`width="${w}" height="${h}" viewBox="0 0 120 90"`;
  const stroke=`stroke="#98ffb0" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"`;
  const body=`<circle cx="60" cy="22" r="8" fill="#f7f7f8"/><path d="M60 31 L60 58" ${stroke}/>`;
  if(type==="row"||type==="lat") return `<svg ${common}><path d="M18 72 H104" stroke="#2e2e3a" stroke-width="5"/><circle cx="45" cy="25" r="7" fill="#f7f7f8"/><path d="M45 33 L55 58 L78 58" ${stroke}/><path class="rowHandle" d="M95 38 L62 55" ${stroke}/></svg>`;
  if(type==="leg") return `<svg ${common}>${body}<path class="leg" d="M60 58 L38 78" ${stroke}/><path d="M60 58 L82 78" ${stroke}/><path d="M25 80 H95" stroke="#2e2e3a" stroke-width="5"/></svg>`;
  if(type==="abs") return `<svg ${common}><circle class="crunch" cx="54" cy="24" r="8" fill="#f7f7f8"/><path class="crunch" d="M54 34 C45 48 42 60 38 75" ${stroke}/><path d="M35 76 H88" stroke="#2e2e3a" stroke-width="5"/><path d="M62 72 L88 58" ${stroke}/></svg>`;
  if(type==="curl") return `<svg ${common}>${body}<path d="M60 40 L42 58" ${stroke}/><path class="arm" d="M60 40 L80 58 L88 44" ${stroke}/><circle cx="90" cy="42" r="5" fill="#99c7ff"/></svg>`;
  if(type==="deadlift") return `<svg ${common}><path d="M24 76 H96" stroke="#99c7ff" stroke-width="6"/><circle cx="55" cy="20" r="7" fill="#f7f7f8"/><path d="M55 28 L65 55 L88 75" ${stroke}/><path d="M65 55 L45 76" ${stroke}/><path class="bar" d="M32 72 H92" stroke="#98ffb0" stroke-width="5"/></svg>`;
  return `<svg ${common}>${body}<path class="bar" d="M35 20 H85" stroke="#99c7ff" stroke-width="6"/><path class="arm" d="M60 40 L37 48" ${stroke}/><path class="arm" d="M60 40 L83 48" ${stroke}/></svg>`;
}

init();
