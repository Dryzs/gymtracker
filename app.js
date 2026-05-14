const TRAIN_KEY="gymjournal_sets_v4";
const BODY_KEY="gymjournal_body_v4";

const planMap={1:"push1",2:"pull1",3:"legs",4:"rest",5:"push2",6:"pull2",0:"rest"};
const workouts={
 push1:{title:"Push schwer",day:"Montag",type:"Training",ex:[
  ex("Bankdrücken Maschine",4,"6–10","Brust","chest","Schwer","Schulterblätter hinten unten halten.","Nicht ins Hohlkreuz drücken.",150),
  ex("Schrägbankdrücken",3,"8–12","Obere Brust","chest","Maschine","Brust hoch, kontrolliert drücken.","Bank nicht zu steil einstellen.",120),
  ex("Butterfly",3,"12–15","Brust","chest","Maschine","Vorne bewusst zusammendrücken.","Gewicht nicht reißen.",90),
  ex("Dips",3,"sauber","Brust/Trizeps","triceps","Schwer","Oberkörper leicht vorlehnen.","Schulterschmerz nicht erzwingen.",120),
  ex("Schulterdrücken Maschine",3,"8–12","Schulter","shoulder","Maschine","Kontrolliert hochdrücken.","Nicht ins Hohlkreuz fallen.",120),
  ex("Seitheben",4,"12–15","Seitliche Schulter","shoulder","Isolation","Ellbogen leicht führen.","Nicht mit Schwung reißen.",75),
  ex("Reverse Butterfly",3,"12–15","Hintere Schulter","rear","Isolation","Schulterblätter kontrollieren.","Nicht aus dem Nacken ziehen.",75),
  ex("Überkopf Trizepsstrecken",3,"10–12","Trizeps","triceps","Isolation","Dehnung hinter dem Kopf spüren.","Ellbogen nicht stark öffnen.",75),
  ex("Kabel Pushdowns",3,"10–12","Trizeps","triceps","Isolation","Ellbogen am Körper halten.","Nicht mit Oberkörper drücken.",75),
  ex("Kabel Crunches",4,"12–15","Bauch","abs","Bauch","Rücken rund machen.","Nicht nur mit Armen ziehen.",60)
 ]},
 pull1:{title:"Pull schwer",day:"Dienstag",type:"Training",ex:[
  ex("Deadlift leicht-mittel",3,"5–6","Rücken/Beine","deadlift","Schwer","Rücken neutral, sauber heben.","Kein Ego-Gewicht wegen Meniskus.",180),
  ex("Latziehen eng",4,"8–12","Lat","lat","Maschine","Ellbogen Richtung Hüfte ziehen.","Nicht nach hinten reißen.",120),
  ex("Rudern eng",4,"8–12","Rückenmitte","row","Maschine","Schulterblätter zurückziehen.","Nicht mit Schwung ziehen.",120),
  ex("Chest Supported Row",3,"10–12","Oberer Rücken","row","Maschine","Brust bleibt am Polster.","Nicht abheben.",90),
  ex("Face Pulls",3,"15","Hintere Schulter","rear","Isolation","Seil Richtung Gesicht.","Ellbogen nicht hängen lassen.",75),
  ex("Normale Curls",3,"8–12","Bizeps","curl","Isolation","Oberarm ruhig halten.","Nicht mit Rücken schwingen.",75),
  ex("Hammercurls",3,"10–12","Bizeps/Unterarm","curl","Isolation","Neutraler Griff.","Nicht zu schnell ablassen.",75),
  ex("Bayesian Curls",3,"12","Bizeps","curl","Isolation","Arm leicht hinter Körper.","Nicht Schulter nach vorne ziehen.",75),
  ex("Hanging Knee Raises",3,"12–15","Bauch","abs","Bauch","Becken einrollen.","Nicht nur Beine schwingen.",60)
 ]},
 legs:{title:"Beine + Bauch",day:"Mittwoch",type:"Training",ex:[
  ex("Beinpresse",4,"10–12","Beine","leg","Maschine","Kontrollierte Tiefe.","Knie nicht schmerzhaft belasten.",120),
  ex("Romanian Deadlift",3,"10","Beinbeuger/Gluteus","deadlift","Schwer","Hüfte nach hinten.","Rücken nicht rund machen.",150),
  ex("Beinbeuger",3,"12–15","Beinbeuger","leg","Maschine","Langsam ablassen.","Nicht abfedern.",90),
  ex("Beinstrecker leicht",3,"15","Quadrizeps","leg","Maschine","Nur schmerzfrei.","Nicht ruckartig strecken.",75),
  ex("Wadenheben",4,"15–20","Waden","leg","Isolation","Oben kurz halten.","Unten nicht federn.",60),
  ex("Kabel Crunches schwer",4,"12","Bauch","abs","Bauch","Schwer, aber sauber.","Nicht mit Armen ziehen.",60),
  ex("Leg Raises",3,"15","Bauch","abs","Bauch","Langsam kontrollieren.","Kein Schwung.",60),
  ex("Plank",3,"30–60s","Core","abs","Bauch","Bauch fest, gerade Linie.","Kein Hohlkreuz.",45),
  ex("Steigung Laufband",1,"20–30 min","Cardio","cardio","Cardio","Konstant gehen.","Nicht sprinten.",60)
 ]},
 push2:{title:"Push Pump",day:"Freitag",type:"Training",ex:[
  ex("Schrägbankdrücken",4,"10–12","Obere Brust","chest","Maschine","Obere Brust priorisieren.","Nicht zu steil.",120),
  ex("Butterfly",4,"15","Brust","chest","Maschine","Langsam und voller Bewegungsweg.","Nicht reißen.",90),
  ex("Chest Press",3,"12","Brust","chest","Maschine","Kontrolliert drücken.","Schultern nicht nach vorne.",90),
  ex("Seitheben",5,"15","Seitliche Schulter","shoulder","Isolation","Breite Schulterkappe.","Kein Schwung.",75),
  ex("Reverse Butterfly",4,"15","Hintere Schulter","rear","Isolation","Hintere Schulter treffen.","Nicht Nacken übernehmen lassen.",75),
  ex("Schulterdrücken Maschine",3,"10","Schulter","shoulder","Maschine","Nicht maximal schwer.","Keine unsauberen Reps.",90),
  ex("Pushdowns",4,"12","Trizeps","triceps","Isolation","Ellbogen stabil.","Nicht aus Schulter drücken.",75),
  ex("Überkopf Trizepsstrecken",3,"12","Trizeps","triceps","Isolation","Gute Dehnung.","Ellbogen nicht zu weit öffnen.",75),
  ex("Kabel Crunches",4,"15","Bauch","abs","Bauch","Saubere Kontraktion.","Nicht mit Armen ziehen.",60)
 ]},
 pull2:{title:"Pull + Bauch",day:"Samstag",type:"Training",ex:[
  ex("Latziehen breit",4,"10","Lat","lat","Maschine","Ellbogen runterziehen.","Nicht Nacken belasten.",120),
  ex("Rudern eng",4,"10","Rückenmitte","row","Maschine","Kontrolliert ziehen.","Kein Schwung.",120),
  ex("Rudern breit",3,"12","Oberer Rücken","row","Maschine","Ellbogen weiter außen.","Nicht Schultern hochziehen.",90),
  ex("Face Pulls",4,"15","Hintere Schulter","rear","Isolation","Haltung verbessern.","Nicht zu schwer.",75),
  ex("Normale Curls",3,"10","Bizeps","curl","Isolation","Saubere Reps.","Nicht schwingen.",75),
  ex("Hammercurls",3,"12","Bizeps/Unterarm","curl","Isolation","Neutraler Griff.","Nicht werfen.",75),
  ex("Hanging Leg Raises",4,"12","Bauch","abs","Bauch","Becken einrollen.","Nicht schwingen.",60),
  ex("Kabel Crunches",4,"12","Bauch","abs","Bauch","Schwer und sauber.","Nicht Arme nutzen.",60),
  ex("Russian Twists",3,"20","Bauch seitlich","abs","Bauch","Kontrollierte Rotation.","Nicht hektisch drehen.",45),
  ex("Steigung Laufband",1,"30 min","Cardio","cardio","Cardio","Konstant gehen.","Nicht sprinten.",60)
 ]},
 rest:{title:"Pause",day:"Donnerstag/Sonntag",type:"Pause",ex:[]}
};

function ex(name,sets,reps,muscle,icon,category,tip,avoid,rest){return{name,sets,reps,muscle,icon,category,tip,avoid,rest}}

let currentWorkoutKey="push1", selectedExercise=null, editId=null, hideDone=false, timerLeft=120, timerBase=120, timerRunning=false, timerInterval=null;
const $=id=>document.getElementById(id);

function today(){return new Date().toISOString().slice(0,10)}
function dateDE(d){return new Date(d+"T00:00:00").toLocaleDateString("de-AT")}
function getSets(){return JSON.parse(localStorage.getItem(TRAIN_KEY)||"[]")}
function setSets(v){localStorage.setItem(TRAIN_KEY,JSON.stringify(v))}
function getBody(){return JSON.parse(localStorage.getItem(BODY_KEY)||"[]")}
function setBody(v){localStorage.setItem(BODY_KEY,JSON.stringify(v))}
function esc(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}

function init(){
 currentWorkoutKey=planMap[new Date().getDay()];
 fillSelects();
 $("bodyDate").value=today();
 document.querySelectorAll(".navBtn").forEach(b=>b.addEventListener("click",()=>screen(b.dataset.screen)));
 $("workoutSelect").addEventListener("change",e=>{currentWorkoutKey=e.target.value;renderAll()});
 $("startBtn").addEventListener("click",()=>document.querySelector(".exerciseCard:not(.done) .logBtn")?.click());
 $("collapseDone").addEventListener("click",()=>{hideDone=!hideDone;$("collapseDone").textContent=hideDone?"Alle anzeigen":"Erledigte ausblenden";renderExercises()});
 $("quickTimer").addEventListener("click",toggleTimer);
 $("closeModal").addEventListener("click",closeSetModal);
 $("saveSet").addEventListener("click",saveSet);
 $("copyLast").addEventListener("click",copyLastToInputs);
 $("closeEdit").addEventListener("click",()=>$("editModal").classList.add("hidden"));
 $("saveEdit").addEventListener("click",saveEdit);
 $("search").addEventListener("input",renderLog);
 $("filterWorkout").addEventListener("change",renderLog);
 $("saveBody").addEventListener("click",saveBody);
 $("exportCsv").addEventListener("click",exportCSV);
 $("exportJson").addEventListener("click",exportJSON);
 $("importJson").addEventListener("change",importJSON);
 $("clearAll").addEventListener("click",clearAll);
 if("serviceWorker"in navigator) navigator.serviceWorker.register("sw.js");
 renderAll();
}

function fillSelects(){
 const opts=Object.entries(workouts).map(([k,w])=>`<option value="${k}">${w.title}</option>`).join("");
 $("workoutSelect").innerHTML=opts;
 $("filterWorkout").innerHTML=`<option value="">Alle Workouts</option>`+opts;
 $("workoutSelect").value=currentWorkoutKey;
}

function screen(id){
 document.querySelectorAll(".screen").forEach(s=>s.classList.toggle("active",s.id===id));
 document.querySelectorAll(".navBtn").forEach(b=>b.classList.toggle("active",b.dataset.screen===id));
}

function renderAll(){
 $("workoutSelect").value=currentWorkoutKey;
 const w=workouts[currentWorkoutKey];
 $("headline").textContent=w.title==="Pause"?"Heute Pause":"Heute";
 $("subtitle").textContent=w.title==="Pause"?"Regeneration. Optional: Spaziergang oder leichtes Cardio.":"Schneller Zugriff auf dein heutiges Training.";
 $("todayWorkout").textContent=w.title;
 renderExercises(); renderProgress(); renderPlan(); renderLog(); renderStats(); renderBody();
}

function todaySetsFor(exName){return getSets().filter(s=>s.date===today()&&s.workout===currentWorkoutKey&&s.exercise===exName)}
function isDone(ex){return todaySetsFor(ex.name).length>=Number(ex.sets)}
function lastSet(exName){return getSets().filter(s=>s.exercise===exName).sort((a,b)=>b.id-a.id)[0]}
function suggest(ex){
 const l=lastSet(ex.name);
 if(!l) return {text:"Erstes Training: moderat starten", weight:"", reps:""};
 const range=String(ex.reps).match(/(\d+)[–-](\d+)/);
 if(range){
  const low=Number(range[1]), high=Number(range[2]);
  if(l.reps<high) return {text:`${l.weight} kg × ${l.reps+1}`, weight:l.weight, reps:l.reps+1};
  return {text:`${(Number(l.weight)+2.5).toFixed(1).replace(".0","")} kg × ${low}`, weight:Number(l.weight)+2.5, reps:low};
 }
 return {text:`${l.weight} kg × ${l.reps}`, weight:l.weight, reps:l.reps};
}

function renderExercises(){
 const w=workouts[currentWorkoutKey];
 if(w.ex.length===0){$("exerciseCards").innerHTML=`<div class="card"><h2>Pause</h2><p class="hint">Heute ist kein Krafttraining geplant. Optional: 20–30 Minuten spazieren oder leichtes Cardio.</p></div>`;return;}
 $("exerciseCards").innerHTML=w.ex.filter(e=>!hideDone||!isDone(e)).map((e,i)=>{
  const done=todaySetsFor(e.name).length, l=lastSet(e.name), s=suggest(e), finished=isDone(e);
  return `<div class="exerciseCard ${finished?"done":""}">
   <div class="exerciseIcon">${svg(e.icon)}</div>
   <div>
    <div class="exTop"><div><div class="exName">${esc(e.name)}</div><div class="exMeta">${e.sets} Sätze · ${e.reps} Wdh.</div></div><span class="tag">${esc(e.muscle)}</span></div>
    <div class="exLast">Letztes Training: ${l?`${l.weight} kg × ${l.reps}`:"noch nichts"}</div>
    <div class="exSuggestion">Vorschlag heute: <b>${esc(s.text)}</b></div>
    <div class="exMeta">Fortschritt: ${done}/${e.sets} Sätze · Pause: ${e.rest}s</div>
    <div class="exActions">
      <button class="smallBtn logBtn" onclick="openSet('${e.name}')">Satz eintragen</button>
      <button class="smallBtn copyBtn" onclick="quickCopy('${e.name}')">Letzten kopieren</button>
    </div>
   </div>
  </div>`
 }).join("");
}

function renderProgress(){
 const w=workouts[currentWorkoutKey], data=getSets().filter(s=>s.date===today()&&s.workout===currentWorkoutKey);
 const totalEx=w.ex.length, doneEx=w.ex.filter(isDone).length, totalSets=w.ex.reduce((a,e)=>a+Number(e.sets),0), doneSets=data.length;
 const pct=totalSets?Math.min(100,Math.round(doneSets/totalSets*100)):0;
 $("exerciseProgressText").textContent=`${doneEx} von ${totalEx} Übungen erledigt`;
 $("setProgressText").textContent=`${doneSets} von ${totalSets} Sätzen`;
 $("progressBar").style.width=pct+"%";
 const next=w.ex.find(e=>!isDone(e));
 $("nextExercise").textContent=next?next.name:"Training fertig";
 const l=next?lastSet(next.name):null;
 $("nextLast").textContent=next?(l?`Letztes Gewicht: ${l.weight} kg × ${l.reps}`:"Letztes Gewicht: noch nichts"):"Gute Arbeit.";
}

function renderPlan(){
 const days=[["Montag","push1"],["Dienstag","pull1"],["Mittwoch","legs"],["Donnerstag","rest"],["Freitag","push2"],["Samstag","pull2"],["Sonntag","rest"]];
 const todayIdx=(new Date().getDay()+6)%7;
 $("weekPlan").innerHTML=days.map(([d,k],i)=>`<div class="dayPlan ${i===todayIdx?"today":""}"><b>${d}: ${workouts[k].title}</b><small>${k==="rest"?"Regeneration":workouts[k].ex.map(e=>e.name).slice(0,5).join(", ")+(workouts[k].ex.length>5?" …":"")}</small></div>`).join("");
}

function openSet(name){
 const e=workouts[currentWorkoutKey].ex.find(x=>x.name===name); selectedExercise=e;
 $("modalExercise").textContent=e.name; $("modalMuscle").textContent=e.category; $("targetMuscle").textContent=e.muscle; $("techTip").textContent=e.tip; $("avoidTip").textContent=e.avoid; $("demo").innerHTML=svg(e.icon,true);
 const s=suggest(e), l=lastSet(e.name);
 $("suggestionText").textContent=s.text; $("lastText").textContent=l?`Letztes Training: ${l.weight} kg × ${l.reps}`:"Letztes Training: noch nichts";
 $("setNo").value=todaySetsFor(e.name).length+1; $("weight").value=s.weight||""; $("reps").value=s.reps||""; $("note").value="";
 $("setModal").classList.remove("hidden");
}
function closeSetModal(){$("setModal").classList.add("hidden")}
function saveSet(){
 const e=selectedExercise, weight=Number($("weight").value), reps=Number($("reps").value);
 if(!e||!weight||!reps){alert("Bitte Gewicht und Wiederholungen eintragen.");return}
 const data=getSets(); data.unshift({id:Date.now(),date:today(),workout:currentWorkoutKey,workoutTitle:workouts[currentWorkoutKey].title,exercise:e.name,setNo:Number($("setNo").value),weight,reps,note:$("note").value.trim(),muscle:e.muscle,category:e.category});
 setSets(data); startTimer(e.rest); closeSetModal(); renderAll();
}
function quickCopy(name){selectedExercise=workouts[currentWorkoutKey].ex.find(x=>x.name===name); const l=lastSet(name); if(!l){openSet(name);return} const data=getSets(); data.unshift({...l,id:Date.now(),date:today(),workout:currentWorkoutKey,workoutTitle:workouts[currentWorkoutKey].title,setNo:todaySetsFor(name).length+1}); setSets(data); startTimer(selectedExercise.rest); renderAll();}
function copyLastToInputs(){const l=lastSet(selectedExercise.name); if(l){$("weight").value=l.weight;$("reps").value=l.reps;$("note").value=l.note||""}}

function startTimer(sec){timerBase=sec;timerLeft=sec;timerRunning=true;clearInterval(timerInterval);updateTimer();timerInterval=setInterval(()=>{timerLeft--;updateTimer();if(timerLeft<=0){clearInterval(timerInterval);timerRunning=false;if(navigator.vibrate)navigator.vibrate([250,100,250])}},1000)}
function toggleTimer(){timerRunning?clearInterval(timerInterval):startTimer(timerLeft||timerBase);timerRunning=!timerRunning}
function updateTimer(){$("quickTimer").textContent=`${Math.floor(timerLeft/60).toString().padStart(2,"0")}:${(timerLeft%60).toString().padStart(2,"0")}`}

function renderLog(){
 const q=($("search").value||"").toLowerCase(), fw=$("filterWorkout").value||"";
 const rows=getSets().filter(s=>(!q||s.exercise.toLowerCase().includes(q))&&(!fw||s.workout===fw));
 $("logList").innerHTML=rows.length?rows.map(s=>`<div class="logItem"><div class="logTitle">${esc(s.exercise)}</div><div class="logMeta">${dateDE(s.date)} · ${esc(s.workoutTitle)} · Satz ${s.setNo}<br>${s.weight} kg × ${s.reps} Wdh.${s.note?" · "+esc(s.note):""}</div><div class="logActions"><button class="edit" onclick="editSet(${s.id})">Bearbeiten</button><button class="copy" onclick="copySet(${s.id})">Kopieren</button><button class="delete" onclick="deleteSet(${s.id})">Löschen</button></div></div>`).join(""):`<p class="hint">Noch keine Einträge.</p>`;
}
function editSet(id){const s=getSets().find(x=>x.id===id); if(!s)return; editId=id; $("editSetNo").value=s.setNo;$("editWeight").value=s.weight;$("editReps").value=s.reps;$("editNote").value=s.note||"";$("editModal").classList.remove("hidden")}
function saveEdit(){const data=getSets();const i=data.findIndex(x=>x.id===editId);if(i>=0){data[i]={...data[i],setNo:Number($("editSetNo").value),weight:Number($("editWeight").value),reps:Number($("editReps").value),note:$("editNote").value};setSets(data)}$("editModal").classList.add("hidden");renderAll()}
function deleteSet(id){if(confirm("Satz löschen?")){setSets(getSets().filter(s=>s.id!==id));renderAll()}}
function copySet(id){const s=getSets().find(x=>x.id===id); if(!s)return;setSets([{...s,id:Date.now(),date:today()},...getSets()]);renderAll()}

function renderStats(){
 const data=getSets(), weekStart=new Date(); weekStart.setDate(weekStart.getDate()-((weekStart.getDay()+6)%7)); weekStart.setHours(0,0,0,0);
 const weekDates=new Set(data.filter(s=>new Date(s.date)>=weekStart).map(s=>s.date));
 $("statWeek").textContent=weekDates.size; $("statSets").textContent=data.length; $("statVolume").textContent=Math.round(data.reduce((a,s)=>a+s.weight*s.reps,0));
 const best={}; data.forEach(s=>{const score=s.weight*(1+s.reps/30); if(!best[s.exercise]||score>best[s.exercise].score)best[s.exercise]={...s,score}}); $("statPR").textContent=Object.keys(best).length;
 const vol={}; data.forEach(s=>vol[s.muscle||"Sonstiges"]=(vol[s.muscle||"Sonstiges"]||0)+s.weight*s.reps);
 const max=Math.max(1,...Object.values(vol));
 $("muscleVolume").innerHTML=Object.entries(vol).sort((a,b)=>b[1]-a[1]).map(([m,v])=>`<div class="volRow"><div class="volTop"><span>${esc(m)}</span><span>${Math.round(v)} kg</span></div><div class="volBar"><div class="volFill" style="width:${Math.round(v/max*100)}%"></div></div></div>`).join("")||`<p class="hint">Noch kein Volumen.</p>`;
 $("prList").innerHTML=Object.values(best).sort((a,b)=>b.score-a.score).map(s=>`<div class="logItem"><div class="logTitle">${esc(s.exercise)}</div><div class="logMeta">PR: ${s.weight} kg × ${s.reps} · ${dateDE(s.date)}<br>Score: ${s.score.toFixed(1)}</div></div>`).join("")||`<p class="hint">Noch keine PRs.</p>`;
}
function saveBody(){const w=Number($("bodyWeight").value);if(!w)return;setBody([{id:Date.now(),date:$("bodyDate").value||today(),weight:w},...getBody()]);$("bodyWeight").value="";renderBody()}
function renderBody(){const data=getBody().slice(0,10);const vals=data.slice().reverse();const min=Math.min(...vals.map(x=>x.weight),0),max=Math.max(...vals.map(x=>x.weight),1);$("bodyChart").innerHTML=vals.length?vals.map(x=>`<div class="chartBar" style="height:${20+(x.weight-min)/(max-min||1)*80}%"></div>`).join(""):`<p class="hint">Noch keine Daten.</p>`;$("bodyList").innerHTML=data.map(x=>`<div class="logItem"><div class="logTitle">${x.weight} kg</div><div class="logMeta">${dateDE(x.date)}</div></div>`).join("")}
function exportCSV(){const data=getSets();const csv=[["Datum","Workout","Übung","Satz","Gewicht","Wiederholungen","Muskel","Notiz"],...data.map(s=>[s.date,s.workoutTitle,s.exercise,s.setNo,s.weight,s.reps,s.muscle,s.note])].map(r=>r.map(v=>`"${String(v??"").replaceAll('"','""')}"`).join(";")).join("\n");download("gymjournal.csv",csv,"text/csv")}
function exportJSON(){download("gymjournal-backup.json",JSON.stringify({sets:getSets(),body:getBody(),version:4},null,2),"application/json")}
function importJSON(e){const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{try{const b=JSON.parse(r.result);if(b.sets)setSets(b.sets);if(b.body)setBody(b.body);renderAll();alert("Backup importiert.")}catch{alert("Backup ungültig.")}};r.readAsText(f)}
function download(name,content,type){const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([content],{type}));a.download=name;a.click()}
function clearAll(){if(confirm("Alle Daten löschen?")){localStorage.removeItem(TRAIN_KEY);localStorage.removeItem(BODY_KEY);renderAll()}}

function svg(type,big=false){const common=`viewBox="0 0 120 90" width="${big?240:54}" height="${big?140:54}"`;const st=`stroke="#8dffb0" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"`;const head=`<circle cx="60" cy="20" r="8" fill="#f6f7fb"/><path d="M60 30 L60 56" ${st}/>`;if(type==="row"||type==="lat")return`<svg ${common}><path d="M20 72 H100" stroke="#2b3042" stroke-width="5"/><circle cx="42" cy="24" r="7" fill="#f6f7fb"/><path d="M42 32 L54 58 L78 58" ${st}/><path class="moveA" d="M96 38 L62 55" ${st}/></svg>`;if(type==="leg")return`<svg ${common}>${head}<path class="moveB" d="M60 56 L38 78" ${st}/><path d="M60 56 L84 78" ${st}/><path d="M25 80 H95" stroke="#2b3042" stroke-width="5"/></svg>`;if(type==="abs")return`<svg ${common}><circle class="moveB" cx="54" cy="24" r="8" fill="#f6f7fb"/><path class="moveB" d="M54 34 C45 48 42 60 38 75" ${st}/><path d="M35 76 H88" stroke="#2b3042" stroke-width="5"/><path d="M62 72 L88 58" ${st}/></svg>`;if(type==="curl")return`<svg ${common}>${head}<path d="M60 40 L42 58" ${st}/><path class="moveB" d="M60 40 L80 58 L88 44" ${st}/><circle cx="90" cy="42" r="5" fill="#8bbdff"/></svg>`;if(type==="deadlift")return`<svg ${common}><path d="M24 76 H96" stroke="#8bbdff" stroke-width="6"/><circle cx="55" cy="20" r="7" fill="#f6f7fb"/><path d="M55 28 L65 55 L88 75" ${st}/><path d="M65 55 L45 76" ${st}/><path class="moveA" d="M32 72 H92" stroke="#8dffb0" stroke-width="5"/></svg>`;if(type==="cardio")return`<svg ${common}><circle cx="40" cy="35" r="8" fill="#f6f7fb"/><path class="moveA" d="M42 45 L60 58 L78 76" ${st}/><path d="M18 80 H102" stroke="#2b3042" stroke-width="5"/></svg>`;return`<svg ${common}>${head}<path class="moveA" d="M35 22 H85" stroke="#8bbdff" stroke-width="6"/><path class="moveB" d="M60 40 L37 48" ${st}/><path class="moveB" d="M60 40 L83 48" ${st}/></svg>`}
init();
