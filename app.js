const KEY = "gymtracker_entries_v1";
const EXERCISES = [
  "Bankdrücken Maschine","Schrägbankdrücken","Butterfly","Dips",
  "Schulterdrücken Maschine","Seitheben","Reverse Butterfly",
  "Trizeps Pushdown","Überkopf Trizepsstrecken",
  "Latziehen eng","Latziehen breit","Rudern eng","Chest Supported Row","Face Pulls","Deadlift",
  "Normale Curls","Hammercurls","Bayesian Curls",
  "Beinpresse","Romanian Deadlift","Beinbeuger","Beinstrecker","Wadenheben",
  "Kabel Crunches","Hanging Knee Raises","Leg Raises","Plank","Russian Twists",
  "Steigung Laufband"
];

const $ = id => document.getElementById(id);
let deferredPrompt = null;

function today(){ return new Date().toISOString().slice(0,10); }
function getEntries(){ return JSON.parse(localStorage.getItem(KEY) || "[]"); }
function setEntries(v){ localStorage.setItem(KEY, JSON.stringify(v)); }

function init(){
  $("date").value = today();
  EXERCISES.forEach(e=>{
    const opt = document.createElement("option");
    opt.value = e;
    $("exerciseList").appendChild(opt);
  });

  document.querySelectorAll(".tab").forEach(btn=>{
    btn.addEventListener("click", () => switchTab(btn.dataset.tab));
  });

  $("saveBtn").addEventListener("click", saveEntry);
  $("search").addEventListener("input", render);
  $("filterDay").addEventListener("change", render);
  $("exportBtn").addEventListener("click", exportCSV);
  $("clearBtn").addEventListener("click", clearAll);

  window.addEventListener("beforeinstallprompt", e=>{
    e.preventDefault();
    deferredPrompt = e;
    $("installBtn").classList.remove("hidden");
  });
  $("installBtn").addEventListener("click", async ()=>{
    if(!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    $("installBtn").classList.add("hidden");
  });

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
  }

  render();
}

function switchTab(tab){
  document.querySelectorAll(".tab").forEach(b=>b.classList.toggle("active", b.dataset.tab===tab));
  document.querySelectorAll(".screen").forEach(s=>s.classList.toggle("active", s.id===tab));
  render();
}

function saveEntry(){
  const entry = {
    id: Date.now(),
    date: $("date").value,
    day: $("day").value,
    exercise: $("exercise").value.trim(),
    setNo: Number($("setNo").value || 1),
    weight: Number($("weight").value || 0),
    reps: Number($("reps").value || 0),
    note: $("note").value.trim()
  };

  if(!entry.exercise || entry.weight <= 0 || entry.reps <= 0){
    $("saveMsg").textContent = "Bitte Übung, Gewicht und Wiederholungen eintragen.";
    return;
  }

  const entries = getEntries();
  entries.unshift(entry);
  setEntries(entries);

  $("setNo").value = entry.setNo + 1;
  $("weight").value = "";
  $("reps").value = "";
  $("note").value = "";
  $("saveMsg").textContent = "Gespeichert.";
  setTimeout(()=>$("saveMsg").textContent="",1400);
  render();
}

function entryHtml(e){
  return `<div class="item">
    <div class="itemTop">
      <div>
        <div class="itemTitle">${escapeHtml(e.exercise)}</div>
        <div class="itemMeta">${e.date} · ${e.day} · Satz ${e.setNo}<br>${e.weight} kg × ${e.reps} Wdh.${e.note ? " · " + escapeHtml(e.note) : ""}</div>
      </div>
      <button class="xbtn" onclick="deleteEntry(${e.id})">X</button>
    </div>
  </div>`;
}

function render(){
  const entries = getEntries();
  const t = today();
  const todayEntries = entries.filter(e=>e.date===t);
  $("todayList").innerHTML = todayEntries.length ? todayEntries.map(entryHtml).join("") : "<p class='hint'>Heute noch nichts gespeichert.</p>";

  const q = $("search").value.toLowerCase();
  const fd = $("filterDay").value;
  const filtered = entries.filter(e => 
    (!q || e.exercise.toLowerCase().includes(q)) &&
    (!fd || e.day === fd)
  );
  $("historyList").innerHTML = filtered.length ? filtered.map(entryHtml).join("") : "<p class='hint'>Keine Einträge gefunden.</p>";

  renderStats(entries);
}

function renderStats(entries){
  const best = {};
  for(const e of entries){
    const score = e.weight * (1 + e.reps / 30); // grobe 1RM-Schätzung
    if(!best[e.exercise] || score > best[e.exercise].score){
      best[e.exercise] = {...e, score};
    }
  }
  const rows = Object.values(best).sort((a,b)=>b.score-a.score);
  $("statsList").innerHTML = rows.length ? rows.map(e=>`
    <div class="item">
      <div class="itemTitle">${escapeHtml(e.exercise)}</div>
      <div class="itemMeta">Bester Satz: ${e.weight} kg × ${e.reps} Wdh. · ${e.date}<br>Geschätzte Stärke: ${e.score.toFixed(1)}</div>
    </div>
  `).join("") : "<p class='hint'>Noch keine Statistiken vorhanden.</p>";
}

function deleteEntry(id){
  setEntries(getEntries().filter(e=>e.id!==id));
  render();
}

function clearAll(){
  if(confirm("Wirklich alle Trainingsdaten löschen?")){
    localStorage.removeItem(KEY);
    render();
  }
}

function exportCSV(){
  const entries = getEntries();
  if(!entries.length){ alert("Keine Daten vorhanden."); return; }
  const header = ["Datum","Trainingstag","Übung","Satz","Gewicht","Wiederholungen","Notiz"];
  const rows = entries.map(e=>[e.date,e.day,e.exercise,e.setNo,e.weight,e.reps,e.note]);
  const csv = [header,...rows].map(r=>r.map(v=>`"${String(v ?? "").replaceAll('"','""')}"`).join(";")).join("\n");
  const blob = new Blob([csv], {type:"text/csv;charset=utf-8"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "gymtracker.csv";
  a.click();
  URL.revokeObjectURL(url);
}

function escapeHtml(str){
  return String(str).replace(/[&<>"']/g, m => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[m]));
}

init();
