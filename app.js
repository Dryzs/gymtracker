const TRAIN_KEY = "gymjournal_sets_v11";
const OLD_KEYS = [
  "gymjournal_sets_v10",
  "gymjournal_sets_v9",
  "gymjournal_sets_v8",
  "gymjournal_sets_v7",
  "gymjournal_sets_v6",
  "gymjournal_sets_v5",
  "gymjournal_sets_v4",
  "gymjournal_sets_v3",
  "gymjournal_training_v2"
];

function ex(name, sets, reps, muscle, group, img, type, tip, avoid, steps, rest, opt = false) {
  return { name, sets, reps, muscle, group, img, type, tip, avoid, steps, rest, opt };
}

const workouts = {
  push1: {
    title: "Push schwer",
    day: "Montag",
    ex: [
      ex("Bankdrücken Maschine", 4, "6–10", "Brust", "Brust", "bench", "Grundübung", "Schulterblätter hinten unten halten.", "Nicht ins Hohlkreuz fallen.", ["Sitzhöhe: Griffe auf Brusthöhe.", "Schulterblätter hinten unten halten.", "Kontrolliert drücken und langsam zurück."], 150),
      ex("Schrägbankdrücken", 3, "8–12", "Obere Brust", "Brust", "incline", "Grundübung", "Fokus obere Brust.", "Bank nicht zu steil einstellen.", ["Bank leicht schräg.", "Zur oberen Brust führen.", "Sauber hochdrücken."], 120),
      ex("Schulterdrücken Maschine", 3, "8–12", "Schulter", "Schulter", "shoulderpress", "Maschine", "Rumpf fest halten.", "Nicht ins Hohlkreuz.", ["Sitz einstellen.", "Griffe auf Schulterhöhe.", "Kontrolliert drücken."], 120),
      ex("Butterfly", 3, "12–15", "Brust", "Brust", "butterfly", "Maschine", "Vorne bewusst zusammendrücken.", "Nicht reißen.", ["Sitzhöhe einstellen.", "Arme leicht gebeugt.", "Schließen und langsam öffnen."], 90),
      ex("Seitheben", 4, "12–15", "Seitliche Schulter", "Schulter", "lateral", "Isolation", "Ellbogen führen die Bewegung.", "Nicht mit Schwung.", ["Leicht vorlehnen.", "Seitlich heben.", "Langsam ablassen."], 75),
      ex("Überkopf Trizepsstrecken", 3, "10–12", "Trizeps", "Arme", "overheadtri", "Isolation", "Dehnung im Trizeps.", "Ellbogen nicht zu weit öffnen.", ["Über Kopf starten.", "Unterarme beugen.", "Arme strecken."], 75),
      ex("Kabel Pushdowns", 3, "10–12", "Trizeps", "Arme", "pushdown", "Isolation", "Ellbogen am Körper fixieren.", "Nicht mit Oberkörper drücken.", ["Gerade stehen.", "Ellbogen fixieren.", "Nach unten drücken."], 75),
      ex("Kabel Crunches", 4, "12–15", "Bauch", "Bauch", "cablecrunch", "Bauch", "Rücken rund machen.", "Nicht nur mit Armen ziehen.", ["Seil greifen.", "Oberkörper einrollen.", "Langsam zurück."], 60),
      ex("Dips optional", 2, "sauber", "Brust/Trizeps", "Brust", "dips", "Optional", "Nur wenn Schulter gut ist.", "Keine Schmerzen erzwingen.", ["Griffe halten.", "Kontrolliert runter.", "Sauber hoch."], 120, true)
    ]
  },
  pull1: {
    title: "Pull schwer",
    day: "Dienstag",
    ex: [
      ex("Latziehen eng", 4, "8–12", "Lat", "Rücken", "latpulldown", "Maschine", "Ellbogen Richtung Hüfte ziehen.", "Nicht zu weit zurücklehnen.", ["Brust hoch.", "Eng greifen.", "Zur oberen Brust ziehen."], 120),
      ex("Chest Supported Row", 3, "10–12", "Oberer Rücken", "Rücken", "chestrow", "Maschine", "Brust bleibt am Polster.", "Nicht abheben.", ["Brust ans Polster.", "Richtung Körper ziehen.", "Langsam zurück."], 90),
      ex("Rudern eng", 4, "8–12", "Rückenmitte", "Rücken", "seatedrow", "Maschine", "Schulterblätter zurückziehen.", "Nicht mit Schwung.", ["Brust hoch.", "Zum Bauch ziehen.", "Kontrolliert zurück."], 120),
      ex("Face Pulls", 3, "15", "Hintere Schulter", "Schulter", "facepull", "Isolation", "Seil Richtung Gesicht.", "Nicht zu schwer.", ["Seil Gesichtshöhe.", "Zum Gesicht ziehen.", "Ellbogen hoch."], 75),
      ex("Normale Curls", 3, "8–12", "Bizeps", "Arme", "curl", "Isolation", "Oberarm ruhig halten.", "Nicht schwingen.", ["Hantel kontrolliert.", "Hochcurlen.", "Langsam ablassen."], 75),
      ex("Hammercurls", 3, "10–12", "Bizeps/Unterarm", "Arme", "curl", "Isolation", "Neutraler Griff.", "Nicht werfen.", ["Daumen nach oben.", "Hochcurlen.", "Langsam runter."], 75),
      ex("Hanging Knee Raises", 3, "12–15", "Bauch", "Bauch", "legraise", "Bauch", "Becken einrollen.", "Nicht schwingen.", ["Stabil hängen.", "Knie hochziehen.", "Langsam ablassen."], 60),
      ex("Deadlift optional", 2, "5–6", "Rücken/Beine", "Rücken", "rdl", "Optional", "Nur alle 1–2 Wochen.", "Kein Ego-Gewicht.", ["Füße stabil.", "Rücken neutral.", "Körpernah heben."], 180, true)
    ]
  },
  legs: {
    title: "Beine + Bauch",
    day: "Mittwoch",
    ex: [
      ex("Beinpresse", 4, "10–12", "Beine", "Beine", "legpress", "Maschine", "Kontrollierte Tiefe.", "Nicht schmerzhaft tief.", ["Füße stabil.", "Langsam ablassen.", "Kontrolliert drücken."], 120),
      ex("Romanian Deadlift", 3, "10", "Beinbeuger/Gluteus", "Beine", "rdl", "Grundübung", "Hüfte nach hinten.", "Rücken nicht rund.", ["Knie leicht gebeugt.", "Hüfte zurück.", "Dehnung spüren."], 150),
      ex("Beinbeuger", 3, "12–15", "Beinbeuger", "Beine", "legcurl", "Maschine", "Langsam ablassen.", "Nicht abfedern.", ["Polster einstellen.", "Fersen zum Gesäß.", "Langsam strecken."], 90),
      ex("Beinstrecker leicht", 2, "15", "Quadrizeps", "Beine", "legextension", "Maschine", "Nur schmerzfrei.", "Nicht ruckartig.", ["Sitz einstellen.", "Strecken.", "Langsam ablassen."], 75),
      ex("Wadenheben", 4, "15–20", "Waden", "Beine", "calf", "Isolation", "Oben kurz halten.", "Nicht federn.", ["Ballen auf Plattform.", "Fersen senken.", "Hochdrücken."], 60),
      ex("Kabel Crunches schwer", 4, "12", "Bauch", "Bauch", "cablecrunch", "Bauch", "Sauber einrollen.", "Nicht mit Armen ziehen.", ["Seil greifen.", "Einrollen.", "Zurück."], 60),
      ex("Leg Raises", 3, "15", "Bauch", "Bauch", "legraise", "Bauch", "Kontrolliert.", "Kein Schwung.", ["Rücken stabil.", "Beine anheben.", "Langsam ablassen."], 60),
      ex("Steigung Laufband", 1, "20–30 min", "Cardio", "Cardio", "treadmill", "Cardio", "Konstant gehen.", "Nicht sprinten.", ["Steigung einstellen.", "Zügig gehen.", "Konstant bleiben."], 60)
    ]
  },
  rest: {
    title: "Pause",
    day: "Donnerstag/Sonntag",
    ex: []
  },
  push2: {
    title: "Push Pump",
    day: "Freitag",
    ex: [
      ex("Schrägbankdrücken", 4, "10–12", "Obere Brust", "Brust", "incline", "Maschine", "Obere Brust priorisieren.", "Nicht zu steil.", ["Bank schräg.", "Drücken.", "Zurück."], 120),
      ex("Butterfly", 3, "15", "Brust", "Brust", "butterfly", "Maschine", "Langsam.", "Nicht reißen.", ["Dehnen.", "Schließen.", "Kurz halten."], 90),
      ex("Chest Press", 3, "12", "Brust", "Brust", "bench", "Maschine", "Kontrolliert drücken.", "Schultern nicht vorne.", ["Sitz einstellen.", "Drücken.", "Zurück."], 90),
      ex("Seitheben", 5, "15", "Seitliche Schulter", "Schulter", "lateral", "Isolation", "Breite Schulter.", "Kein Schwung.", ["Leicht beugen.", "Heben.", "Ablassen."], 75),
      ex("Reverse Butterfly", 4, "15", "Hintere Schulter", "Schulter", "reversefly", "Isolation", "Hintere Schulter.", "Nacken nicht übernehmen lassen.", ["Brust ans Polster.", "Nach außen ziehen.", "Zurück."], 75),
      ex("Pushdowns", 3, "12", "Trizeps", "Arme", "pushdown", "Isolation", "Ellbogen stabil.", "Nicht Schulter.", ["Ellbogen fix.", "Runter.", "Hoch."], 75),
      ex("Kabel Crunches", 4, "15", "Bauch", "Bauch", "cablecrunch", "Bauch", "Kontraktion.", "Nicht Arme.", ["Seil greifen.", "Einrollen.", "Zurück."], 60)
    ]
  },
  pull2: {
    title: "Pull + Bauch",
    day: "Samstag",
    ex: [
      ex("Latziehen breit", 4, "10", "Lat", "Rücken", "latpulldown", "Maschine", "Ellbogen runter.", "Nicht Nacken.", ["Breit greifen.", "Zur Brust.", "Hoch."], 120),
      ex("Rudern eng", 4, "10", "Rückenmitte", "Rücken", "seatedrow", "Maschine", "Kontrolliert.", "Kein Schwung.", ["Brust hoch.", "Ziehen.", "Zurück."], 120),
      ex("Rudern breit", 3, "12", "Oberer Rücken", "Rücken", "chestrow", "Maschine", "Ellbogen außen.", "Schultern nicht hoch.", ["Breit greifen.", "Rudern.", "Zurück."], 90),
      ex("Face Pulls", 4, "15", "Hintere Schulter", "Schulter", "facepull", "Isolation", "Haltung.", "Nicht zu schwer.", ["Seil Gesichtshöhe.", "Ziehen.", "Außenrotieren."], 75),
      ex("Normale Curls", 3, "10", "Bizeps", "Arme", "curl", "Isolation", "Sauber.", "Nicht schwingen.", ["Stehen.", "Curlen.", "Ablassen."], 75),
      ex("Hammercurls", 3, "12", "Bizeps/Unterarm", "Arme", "curl", "Isolation", "Neutraler Griff.", "Nicht werfen.", ["Neutral.", "Hoch.", "Runter."], 75),
      ex("Kabel Crunches", 4, "12", "Bauch", "Bauch", "cablecrunch", "Bauch", "Schwer sauber.", "Nicht Arme.", ["Seil.", "Einrollen.", "Zurück."], 60),
      ex("Steigung Laufband", 1, "30 min", "Cardio", "Cardio", "treadmill", "Cardio", "Gehen.", "Nicht sprinten.", ["Steigung.", "Gehen.", "Konstant."], 60)
    ]
  }
};

const dayMap = { 1: "push1", 2: "pull1", 3: "legs", 4: "rest", 5: "push2", 6: "pull2", 0: "rest" };

let currentWorkout = dayMap[new Date().getDay()] || "push1";
let selectedExercise = null;
let editId = null;
let hideDone = false;
let activeFilter = "all";

const $ = (id) => document.getElementById(id);
const img = (name) => `assets/${name}.svg`;

function today() {
  return new Date().toISOString().slice(0, 10);
}

function dateDE(d) {
  return new Date(d + "T00:00:00").toLocaleDateString("de-AT");
}

function esc(s) {
  return String(s).replace(/[&<>"']/g, (m) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[m]));
}

function attr(s) {
  return String(s).replace(/'/g, "&#39;").replace(/"/g, "&quot;");
}

function getSets() {
  let v = JSON.parse(localStorage.getItem(TRAIN_KEY) || "[]");
  if (!v.length) {
    for (const k of OLD_KEYS) {
      const old = JSON.parse(localStorage.getItem(k) || "[]");
      if (old.length) {
        v = old.map((s) => ({
          ...s,
          workout: s.workout || "custom",
          workoutTitle: s.workoutTitle || s.day || "Training",
          group: s.group || s.muscle || "Sonstiges"
        }));
        localStorage.setItem(TRAIN_KEY, JSON.stringify(v));
        break;
      }
    }
  }
  return v;
}

function setSets(v) {
  localStorage.setItem(TRAIN_KEY, JSON.stringify(v));
}

function init() {
  fillSelects();

  document.querySelectorAll(".nav").forEach((b) => {
    b.addEventListener("click", () => showScreen(b.dataset.screen));
  });

  $("workoutSelect").addEventListener("change", (e) => {
    currentWorkout = e.target.value || "push1";
    renderAll();
  });

  $("toggleDone").addEventListener("click", () => {
    hideDone = !hideDone;
    $("toggleDone").textContent = hideDone ? "Alle anzeigen" : "Erledigte ausblenden";
    renderExercises();
  });

  $("startWorkout").addEventListener("click", () => {
    const next = getNextExercise();
    if (next) openExercise(next.name);
  });

  $("finishWorkout").addEventListener("click", finishWorkout);
  $("closeExerciseModal").addEventListener("click", () => $("exerciseModal").classList.add("hidden"));
  $("openSetModal").addEventListener("click", openSetModal);
  $("closeSetModal").addEventListener("click", () => $("setModal").classList.add("hidden"));
  $("saveSet").addEventListener("click", saveSet);
  $("copyLastSet").addEventListener("click", copyLastIntoSet);
  $("closeEditModal").addEventListener("click", () => $("editModal").classList.add("hidden"));
  $("saveEdit").addEventListener("click", saveEdit);

  document.querySelectorAll(".filter").forEach((b) => {
    b.addEventListener("click", () => {
      activeFilter = b.dataset.filter;
      document.querySelectorAll(".filter").forEach((x) => x.classList.toggle("active", x === b));
      renderLibrary();
    });
  });

  $("librarySearch").addEventListener("input", renderLibrary);
  $("logSearch").addEventListener("input", renderLog);
  $("logFilter").addEventListener("change", renderLog);
  $("exportJson").addEventListener("click", exportJSON);
  $("importJson").addEventListener("change", importJSON);
  $("exportCsv").addEventListener("click", exportCSV);
  $("clearAll").addEventListener("click", clearAll);

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js?v=11");
  }

  renderAll();
}

function fillSelects() {
  const ordered = ["push1", "pull1", "legs", "rest", "push2", "pull2"];
  const opts = ordered
    .map((k) => `<option value="${k}">${workouts[k].day}: ${workouts[k].title}</option>`)
    .join("");

  $("workoutSelect").innerHTML = opts;
  $("logFilter").innerHTML = `<option value="">Alle Workouts</option>${opts}`;
  $("workoutSelect").value = currentWorkout;
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.toggle("active", s.id === id));
  document.querySelectorAll(".nav").forEach((b) => b.classList.toggle("active", b.dataset.screen === id));
  renderAll();
}

function renderAll() {
  if (!workouts[currentWorkout]) currentWorkout = "push1";

  const w = workouts[currentWorkout];

  $("workoutSelect").value = currentWorkout;
  $("todayWorkoutTitle").textContent = w.title;
  $("todayMeta").textContent = `${new Date().toLocaleDateString("de-AT", { weekday: "long" })}, ${dateDE(today())}`;

  renderDashboard();
  renderExercises();
  renderPlan();
  renderLibrary();
  renderStats();
  renderLog();
}

function todayWorkoutSets() {
  return getSets().filter((s) => s.date === today() && s.workout === currentWorkout);
}

function setsFor(name) {
  return todayWorkoutSets().filter((s) => s.exercise === name);
}

function isDone(e) {
  return setsFor(e.name).length >= Number(e.sets);
}

function lastSet(name) {
  return getSets().filter((s) => s.exercise === name).sort((a, b) => b.id - a.id)[0];
}

function getNextExercise() {
  const w = workouts[currentWorkout];
  if (!w || !w.ex.length) return null;
  return w.ex.find((e) => !e.opt && !isDone(e)) || w.ex.find((e) => !isDone(e)) || null;
}

function suggest(e) {
  const l = lastSet(e.name);
  if (!l) return { text: "moderat starten", weight: "", reps: "" };

  const m = String(e.reps).match(/(\d+)[–-](\d+)/);
  if (m) {
    const low = Number(m[1]);
    const high = Number(m[2]);

    if (Number(l.reps) < high) {
      return { text: `${l.weight} kg × ${Number(l.reps) + 1}`, weight: l.weight, reps: Number(l.reps) + 1 };
    }

    return {
      text: `${(Number(l.weight) + 2.5).toFixed(1).replace(".0", "")} kg × ${low}`,
      weight: Number(l.weight) + 2.5,
      reps: low
    };
  }

  return { text: `${l.weight} kg × ${l.reps}`, weight: l.weight, reps: l.reps };
}

function renderDashboard() {
  const w = workouts[currentWorkout];
  const data = todayWorkoutSets();
  const req = w.ex.filter((e) => !e.opt);
  const total = req.reduce((a, e) => a + Number(e.sets), 0);
  const done = data.filter((s) => !s.optional).length;
  const pct = total ? Math.min(100, Math.round((done / total) * 100)) : 0;

  $("exerciseDone").textContent = `${req.filter(isDone).length}/${req.length}`;
  $("setsDone").textContent = `${done}/${total}`;
  $("volumeToday").textContent = `${Math.round(data.reduce((a, s) => a + s.weight * s.reps, 0))} kg`;
  $("mainProgress").style.width = pct + "%";

  const next = getNextExercise();

  if (next) {
    const l = lastSet(next.name);
    const s = suggest(next);

    $("nextExerciseName").textContent = next.name;
    $("nextExerciseInfo").textContent = l ? `Letztes Training: ${l.weight} kg × ${l.reps}` : "Letztes Training: noch nichts";
    $("nextSuggestion").textContent = `Vorschlag: ${s.text}`;
    $("nextExerciseImage").src = img(next.img);
  } else if (w.ex.length === 0) {
    $("nextExerciseName").textContent = "Pause / Regeneration";
    $("nextExerciseInfo").textContent = "Heute ist kein Krafttraining geplant.";
    $("nextSuggestion").textContent = "Du kannst oben manuell ein Training auswählen.";
    $("nextExerciseImage").src = img("rest");
  } else {
    $("nextExerciseName").textContent = "Training fertig";
    $("nextExerciseInfo").textContent = "Alle Pflichtübungen erledigt.";
    $("nextSuggestion").textContent = "Training abschließen.";
    $("nextExerciseImage").src = img("rest");
  }
}

function renderExercises() {
  const w = workouts[currentWorkout];

  if (!w.ex.length) {
    $("exerciseList").innerHTML = `
      <div class="card">
        <h2>Heute ist Pause</h2>
        <p class="muted">Wenn du trotzdem trainierst, wähle oben manuell Push, Pull oder Beine aus.</p>
      </div>
    `;
    return;
  }

  $("exerciseList").innerHTML = w.ex
    .filter((e) => !hideDone || !isDone(e))
    .map((e) => {
      const done = setsFor(e.name).length;
      const pct = Math.min(100, Math.round((done / Number(e.sets)) * 100));
      const l = lastSet(e.name);
      const s = suggest(e);

      return `
        <div class="exerciseCard ${isDone(e) ? "done" : ""}">
          <img class="exerciseThumb" src="${img(e.img)}" alt="${esc(e.name)}">
          <div>
            <div class="exerciseTop">
              <div>
                <div class="exerciseName">${esc(e.name)}${e.opt ? " · optional" : ""}</div>
                <div class="exerciseMeta">${e.sets} Sätze · ${e.reps} Wdh.</div>
              </div>
              <span class="muscleTag">${esc(e.muscle)}</span>
            </div>
            <div class="progressLine"><div style="width:${pct}%"></div></div>
            <div class="exerciseLast">Letztes Training: ${l ? `${l.weight} kg × ${l.reps}` : "noch nichts"}</div>
            <div class="exerciseSuggestion">Vorschlag heute: <b>${esc(s.text)}</b></div>
            <div class="exerciseActions">
              <button class="miniAction logAction" onclick="openSetFor('${attr(e.name)}')">Satz eintragen</button>
              <button class="miniAction detailAction" onclick="openExercise('${attr(e.name)}')">Details</button>
            </div>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderPlan() {
  const days = [
    ["Montag", "push1"],
    ["Dienstag", "pull1"],
    ["Mittwoch", "legs"],
    ["Donnerstag", "rest"],
    ["Freitag", "push2"],
    ["Samstag", "pull2"],
    ["Sonntag", "rest"]
  ];

  const todayIndex = (new Date().getDay() + 6) % 7;

  $("weekPlan").innerHTML = days.map(([d, k], i) => {
    const w = workouts[k];
    const text = k === "rest"
      ? "Regeneration / optional leichtes Cardio"
      : w.ex.filter((e) => !e.opt).map((e) => e.name).slice(0, 5).join(", ") + (w.ex.filter((e) => !e.opt).length > 5 ? " …" : "");

    return `<div class="weekItem ${i === todayIndex ? "today" : ""}"><b>${d}: ${w.title}</b><br><span>${esc(text)}</span></div>`;
  }).join("");
}

function allExercises() {
  const m = new Map();
  Object.values(workouts).forEach((w) => w.ex.forEach((e) => m.set(e.name, e)));
  return [...m.values()];
}

function findExercise(name) {
  for (const w of Object.values(workouts)) {
    const e = w.ex.find((x) => x.name === name);
    if (e) return e;
  }
}

function renderLibrary() {
  const q = ($("librarySearch").value || "").toLowerCase();
  const arr = allExercises().filter((e) => (activeFilter === "all" || e.group === activeFilter) && (!q || e.name.toLowerCase().includes(q)));

  $("libraryList").innerHTML = arr.map((e) => `
    <div class="libraryItem" onclick="openExercise('${attr(e.name)}')">
      <img src="${img(e.img)}" alt="${esc(e.name)}">
      <div>
        <div class="exerciseName">${esc(e.name)}</div>
        <div class="exerciseMeta">${esc(e.muscle)} · ${esc(e.type)}</div>
        <div class="exerciseSuggestion">${esc(e.tip)}</div>
      </div>
    </div>
  `).join("") || `<p class="muted">Keine Übung gefunden.</p>`;
}

function openExercise(name) {
  selectedExercise = findExercise(name);
  if (!selectedExercise) return;

  const e = selectedExercise;
  $("modalMuscle").textContent = e.muscle;
  $("modalTitle").textContent = e.name;
  $("exerciseVisual").src = img(e.img);
  $("modalSets").textContent = e.sets;
  $("modalReps").textContent = e.reps;
  $("modalRest").textContent = e.rest + "s";
  $("modalType").textContent = e.type;
  $("executionSteps").innerHTML = e.steps.map((x) => `<li>${esc(x)}</li>`).join("");
  $("modalTip").textContent = e.tip;
  $("modalAvoid").textContent = e.avoid;

  const l = lastSet(e.name);
  const s = suggest(e);

  $("modalSuggestion").textContent = s.text;
  $("modalLast").textContent = l ? `Letztes Training: ${l.weight} kg × ${l.reps}` : "Letztes Training: noch nichts";
  $("exerciseModal").classList.remove("hidden");
}

function openSetFor(name) {
  openExercise(name);
  openSetModal();
}

function openSetModal() {
  if (!selectedExercise) return;

  const s = suggest(selectedExercise);

  $("setExerciseTitle").textContent = selectedExercise.name;
  $("setNo").value = setsFor(selectedExercise.name).length + 1;
  $("setWeight").value = s.weight || "";
  $("setReps").value = s.reps || "";
  $("setNote").value = "";
  $("setModal").classList.remove("hidden");
}

function saveSet() {
  if (!selectedExercise) return;

  const weight = Number($("setWeight").value);
  const reps = Number($("setReps").value);

  if (!weight || !reps) {
    alert("Bitte Gewicht und Wiederholungen eintragen.");
    return;
  }

  const data = getSets();

  data.unshift({
    id: Date.now(),
    date: today(),
    workout: currentWorkout,
    workoutTitle: workouts[currentWorkout].title,
    exercise: selectedExercise.name,
    setNo: Number($("setNo").value || 1),
    weight,
    reps,
    note: $("setNote").value.trim(),
    muscle: selectedExercise.muscle,
    group: selectedExercise.group,
    optional: selectedExercise.opt
  });

  setSets(data);
  $("setModal").classList.add("hidden");
  $("exerciseModal").classList.add("hidden");
  renderAll();
}

function copyLastIntoSet() {
  const l = lastSet(selectedExercise?.name);
  if (l) {
    $("setWeight").value = l.weight;
    $("setReps").value = l.reps;
    $("setNote").value = l.note || "";
  }
}

function renderStats() {
  const data = getSets();
  const weekStart = new Date();
  weekStart.setDate(weekStart.getDate() - ((weekStart.getDay() + 6) % 7));
  weekStart.setHours(0, 0, 0, 0);

  $("statWorkouts").textContent = new Set(data.filter((s) => new Date(s.date) >= weekStart).map((s) => s.date)).size;
  $("statSets").textContent = data.length;
  $("statVolume").textContent = Math.round(data.reduce((a, s) => a + s.weight * s.reps, 0)).toLocaleString("de-AT");

  const best = {};
  data.forEach((s) => {
    const score = s.weight * (1 + s.reps / 30);
    if (!best[s.exercise] || score > best[s.exercise].score) best[s.exercise] = { ...s, score };
  });

  $("statPR").textContent = Object.keys(best).length;

  const vol = {};
  data.forEach((s) => {
    vol[s.group || s.muscle || "Sonstiges"] = (vol[s.group || s.muscle || "Sonstiges"] || 0) + s.weight * s.reps;
  });

  const max = Math.max(1, ...Object.values(vol));

  $("muscleBars").innerHTML = Object.entries(vol).sort((a, b) => b[1] - a[1]).map(([m, v]) => `
    <div class="barRow">
      <div class="barTop"><span>${esc(m)}</span><span>${Math.round(v).toLocaleString("de-AT")} kg</span></div>
      <div class="barTrack"><div class="barFill" style="width:${Math.round((v / max) * 100)}%"></div></div>
    </div>
  `).join("") || `<p class="muted">Noch kein Volumen vorhanden.</p>`;

  $("prList").innerHTML = Object.values(best).sort((a, b) => b.score - a.score).map((s) => `
    <div class="logItem">
      <div class="logTitle">${esc(s.exercise)}</div>
      <div class="logMeta">PR: ${s.weight} kg × ${s.reps} · ${dateDE(s.date)}<br>Score: ${s.score.toFixed(1)}</div>
    </div>
  `).join("") || `<p class="muted">Noch keine PRs.</p>`;
}

function renderLog() {
  const q = ($("logSearch").value || "").toLowerCase();
  const fw = $("logFilter").value || "";
  const rows = getSets().filter((s) => (!q || s.exercise.toLowerCase().includes(q)) && (!fw || s.workout === fw));

  $("logList").innerHTML = rows.map((s) => `
    <div class="logItem">
      <div class="logTitle">${esc(s.exercise)}</div>
      <div class="logMeta">${dateDE(s.date)} · ${esc(s.workoutTitle || "Training")} · Satz ${s.setNo}<br>${s.weight} kg × ${s.reps} Wdh.${s.note ? " · " + esc(s.note) : ""}</div>
      <div class="logActions">
        <button class="editBtn" onclick="editSet(${s.id})">Bearbeiten</button>
        <button class="copyBtn" onclick="copySet(${s.id})">Kopieren</button>
        <button class="deleteBtn" onclick="deleteSet(${s.id})">Löschen</button>
      </div>
    </div>
  `).join("") || `<p class="muted">Noch keine Einträge.</p>`;
}

function editSet(id) {
  const s = getSets().find((x) => x.id === id);
  if (!s) return;

  editId = id;
  $("editSetNo").value = s.setNo;
  $("editWeight").value = s.weight;
  $("editReps").value = s.reps;
  $("editNote").value = s.note || "";
  $("editModal").classList.remove("hidden");
}

function saveEdit() {
  const data = getSets();
  const i = data.findIndex((s) => s.id === editId);

  if (i >= 0) {
    data[i] = {
      ...data[i],
      setNo: Number($("editSetNo").value),
      weight: Number($("editWeight").value),
      reps: Number($("editReps").value),
      note: $("editNote").value
    };
    setSets(data);
  }

  $("editModal").classList.add("hidden");
  renderAll();
}

function copySet(id) {
  const s = getSets().find((x) => x.id === id);
  if (!s) return;

  setSets([{ ...s, id: Date.now(), date: today() }, ...getSets()]);
  renderAll();
}

function deleteSet(id) {
  if (confirm("Satz wirklich löschen?")) {
    setSets(getSets().filter((s) => s.id !== id));
    renderAll();
  }
}

function finishWorkout() {
  const data = todayWorkoutSets();
  const vol = Math.round(data.reduce((a, s) => a + s.weight * s.reps, 0));
  alert(`Training abgeschlossen\nSätze: ${data.length}\nVolumen: ${vol} kg`);
}

function exportJSON() {
  download("gymjournal-backup.json", JSON.stringify({ version: 11, sets: getSets() }, null, 2), "application/json");
}

function importJSON(e) {
  const f = e.target.files[0];
  if (!f) return;

  const r = new FileReader();
  r.onload = () => {
    try {
      const b = JSON.parse(r.result);
      if (b.sets) setSets(b.sets);
      renderAll();
      alert("Backup importiert.");
    } catch {
      alert("Backup ungültig.");
    }
  };
  r.readAsText(f);
}

function exportCSV() {
  const rows = [
    ["Datum", "Workout", "Übung", "Satz", "Gewicht", "Wiederholungen", "Muskel", "Notiz"],
    ...getSets().map((s) => [s.date, s.workoutTitle, s.exercise, s.setNo, s.weight, s.reps, s.muscle, s.note])
  ];

  download("gymjournal.csv", rows.map((r) => r.map((v) => `"${String(v ?? "").replaceAll('"', '""')}"`).join(";")).join("\n"), "text/csv");
}

function download(name, content, type) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([content], { type }));
  a.download = name;
  a.click();
}

function clearAll() {
  if (confirm("Alle Daten löschen?")) {
    localStorage.removeItem(TRAIN_KEY);
    renderAll();
  }
}

init();
