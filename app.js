const app = document.getElementById("app");
let currentSubject = null, currentNiveau = "tous", currentLessons = [],
    currentIndex = 0, attemptsThis = 0, pendingRevealLesson = null;

// ===== UTILITAIRES =====
function escapeHTML(s) {
  return String(s).replace(/[&<>"']/g, m => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[m]));
}

function showToast(message, duration = 2500) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove("show"), duration);
}

function launchConfetti(count = 50) {
  const container = document.getElementById("confettiContainer");
  const colors = ["#A8C99B", "#F6B352", "#F4A3A8", "#8FB8DE", "#B8A4D4", "#F6D365"];
  for (let i = 0; i < count; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "%";
    c.style.background = colors[Math.floor(Math.random() * colors.length)];
    c.style.animationDelay = Math.random() * 0.5 + "s";
    c.style.animationDuration = (2 + Math.random() * 1.5) + "s";
    container.appendChild(c);
    setTimeout(() => c.remove(), 3500);
  }
}

function playSound(type) {
  // Sons doux via Web Audio API (pas de fichier externe)
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    if (type === "correct") {
      osc.frequency.setValueAtTime(523, ctx.currentTime);      // Do
      osc.frequency.setValueAtTime(659, ctx.currentTime + 0.1); // Mi
      osc.frequency.setValueAtTime(784, ctx.currentTime + 0.2); // Sol
    } else if (type === "wrong") {
      osc.frequency.setValueAtTime(300, ctx.currentTime);
      osc.frequency.setValueAtTime(250, ctx.currentTime + 0.1);
    } else if (type === "click") {
      osc.frequency.setValueAtTime(800, ctx.currentTime);
    }
    
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.3);
  } catch (e) { /* silencieux si erreur */ }
}

// Mise à jour de la barre du haut (pièces, étoiles, streak)
function updateTopbar() {
  const el = document.getElementById("topbarStats");
  if (!el) return;
  const streakIcon = PROGRESS.streak >= 3 ? '<span class="streak-flame">🔥</span>' : '🔥';
  el.innerHTML = `
    <div class="stat-pill" title="Pièces">🪙 ${PROGRESS.coins}</div>
    <div class="stat-pill" title="Étoiles">⭐ ${PROGRESS.stars}</div>
    <div class="stat-pill" title="Série">${streakIcon} ${PROGRESS.streak}</div>
  `;
}

// ===== ÉCRAN D'ACCUEIL =====
function renderHome() {
  const name = PROGRESS.name || "";
  app.innerHTML = `
    <section class="hero">
      <div class="path-dots" aria-hidden="true">
        <span></span><span></span><span></span><span></span><span></span>
      </div>
      <span class="mascotte-hero">🌱</span>
      <h1>Bienvenue dans Petit Pas !</h1>
      <p>Une petite étape à la fois. Ici, on apprend, on essaie, on corrige et on progresse.</p>
      <div class="profile-box">
        <label for="childName"><strong>Comment s'appelle l'enfant ?</strong></label>
        <input class="input" id="childName" value="${escapeHTML(name)}" placeholder="Prénom">
        <button class="primary" id="startBtn">🚀 C'est parti !</button>
      </div>
    </section>`;
  
  document.getElementById("startBtn").onclick = () => {
    PROGRESS.name = document.getElementById("childName").value.trim() || "Mon enfant";
    saveProgress();
    renderDashboard();
  };
}

// ===== TABLEAU DE BORD =====
function renderDashboard() {
  updateTopbar();
  const name = escapeHTML(PROGRESS.name || "Mon enfant");
  const title = getPlayerTitle();
  const level = getPlayerLevel();
  
  const cards = Object.entries(SUBJECTS).map(([key, s]) => {
    const segs = NIVEAUX.map(n =>
      `<div class="mini-seg" data-niveau="${n}" style="--p:${niveauProgress(key, n)}%" 
            title="${NIVEAU_INFO[n].label}"></div>`
    ).join("");
    return `
      <button class="subject-card" onclick="startSubject('${key}')">
        <span class="subject-icon">${s.icon}</span>
        <h3>${s.title}</h3>
        <span class="tag">${subjectProgress(key)}% · ${s.lessons.length} exercices</span>
        <div class="mini-progress">${segs}</div>
      </button>`;
  }).join("");
  
  const advice = parentAdvice();
  const missionText = advice.weakest.p < 100
    ? `Aujourd'hui, on s'entraîne un peu en <strong>${advice.weakest.title}</strong> ${advice.weakest.icon} !`
    : `Bravo ${name} ! Tu as validé toutes les matières. Choisis celle que tu veux revisiter 🎉`;
  
  app.innerHTML = `
    <section class="dashboard">
      <div class="welcome">
        <h1>Bonjour ${name} 👋</h1>
        <p>Tu es au niveau <strong>${level}</strong> — ${title}</p>
      </div>
      <div class="mission-card">
        <strong>🎯 Mission du jour</strong>
        <p>${missionText}</p>
      </div>
      <div class="grid">${cards}</div>
      <div class="tip">
        <strong>💡 Pour l'adulte :</strong> 
        ${advice.weakest.p < 100
          ? `La matière à renforcer est <strong>${advice.weakest.title}</strong>. Quelques minutes régulières valent mieux qu'une longue séance.`
          : "Toutes les activités sont actuellement validées. Bravo pour les progrès !"}
      </div>
    </section>`;
}

// ===== MATIÈRE : INTRO =====
window.startSubject = function(subject) {
  currentSubject = subject;
  currentNiveau = "tous";
  renderSubjectIntro();
};

function lessonsForNiveau(subject, niveau) {
  const all = subjectLessons(SUBJECTS[subject]);
  return niveau === "tous" ? all : all.filter(l => l.niveau === niveau);
}

function renderSubjectIntro() {
  const s = SUBJECTS[currentSubject];
  const chips = ["tous", ...NIVEAUX].map(n => {
    const count = lessonsForNiveau(currentSubject, n).length;
    const label = n === "tous" ? "🎯 Tous" : NIVEAU_INFO[n].icon + " " + NIVEAU_INFO[n].label;
    const active = n === currentNiveau ? "active" : "";
    return `<button class="chip ${active}" ${count === 0 ? "disabled" : ""} 
                    onclick="selectNiveau('${n}')">
              ${label} <span class="chip-count">${count}</span>
            </button>`;
  }).join("");
  
  const skills = [...new Set(s.lessons.map(l => l.skill))];
  
  app.innerHTML = `
    <section class="lesson">
      <button class="secondary back" onclick="renderDashboard()">← Retour</button>
      <div class="lesson-box intro">
        <span class="subject-icon big">${s.icon}</span>
        <h1>${s.title}</h1>
        <p class="skills-list">Compétences : ${skills.join(" · ")}</p>
        <div class="chips">${chips}</div>
        <button class="primary" id="startNiveauBtn">▶ Commencer</button>
      </div>
    </section>`;
  
  document.getElementById("startNiveauBtn").onclick = () => {
    currentLessons = lessonsForNiveau(currentSubject, currentNiveau);
    currentIndex = 0;
    attemptsThis = 0;
    if (currentLessons.length === 0) { renderSubjectIntro(); return; }
    renderLesson();
  };
}

window.selectNiveau = function(n) {
  currentNiveau = n;
  renderSubjectIntro();
};

// ===== EXERCICE =====
function renderLesson() {
  updateTopbar();
  const l = currentLessons[currentIndex];
  const s = SUBJECTS[currentSubject];
  const info = NIVEAU_INFO[l.niveau];
  
  app.innerHTML = `
    <section class="lesson">
      <button class="secondary back" onclick="renderDashboard()">← Retour</button>
      <div class="lesson-box">
        <div class="lesson-tags">
          <span class="tag">${s.icon} ${s.title} · ${escapeHTML(l.skill)}</span>
          <span class="niveau-badge" data-niveau="${l.niveau}">${info.icon} ${info.label}</span>
        </div>
        <span class="progress-count">Exercice ${currentIndex + 1} / ${currentLessons.length}</span>
        <h1>${escapeHTML(l.title)}</h1>
        <div class="question">${escapeHTML(l.question)}</div>
        <div class="choices">
          ${l.choices.map(c => `<button class="choice" data-choice="${escapeHTML(c)}">${escapeHTML(c)}</button>`).join("")}
        </div>
        <div id="feedback"></div>
      </div>
    </section>`;
  
  document.querySelectorAll(".choice").forEach(btn =>
    btn.onclick = () => answer(btn.dataset.choice)
  );
}

// ===== RÉPONSE =====
function answer(choice) {
  const l = currentLessons[currentIndex];
  const idx = SUBJECTS[currentSubject].lessons.indexOf(l);
  const fb = document.getElementById("feedback");
  attemptsThis++;
  const correct = choice === l.answer;
  recordAttempt(currentSubject, idx, correct);
  updateTopbar();
  
  if (correct) {
    playSound("correct");
    launchConfetti(40);
    fb.className = "feedback good";
    
    let bonusText = "";
    if (attemptsThis === 1) {
      bonusText = `<p>⭐ <strong>+1 étoile</strong> (du premier coup !)</p>`;
    }
    if (PROGRESS.streak >= 3) {
      bonusText += `<p>🔥 Série de ${PROGRESS.streak} ! Bravo !</p>`;
    }
    
    fb.innerHTML = `
      <strong>🎉 Bravo !</strong>
      <p>Tu as trouvé la bonne réponse.</p>
      ${bonusText}
      <p>${escapeHTML(l.help)}</p>
      <button class="primary" onclick="nextLesson()">Continuer →</button>`;
    attemptsThis = 0;
    return;
  }
  
  playSound("wrong");
  
  if (attemptsThis === 1) {
    fb.className = "feedback help";
    fb.innerHTML = `
      <strong>💡 Pas encore, mais ce n'est pas grave !</strong>
      <p>${escapeHTML(l.help)}</p>
      <p>Essaie encore, tu y es presque !</p>`;
  } else {
    const rem = SUBJECTS[currentSubject].remediations && SUBJECTS[currentSubject].remediations[l.skill];
    recordRemediation(l.skill);
    pendingRevealLesson = l;
    if (rem) { renderRemediation(l, rem); }
    else { revealAnswer(); }
  }
}

// ===== REMÉDIATION =====
function renderRemediation(originalLesson, rem) {
  app.innerHTML = `
    <section class="lesson">
      <div class="lesson-box remediation-box">
        <span class="tag remediation-tag">🌿 Petit coup de pouce · ${escapeHTML(originalLesson.skill)}</span>
        <h1>On s'entraîne un instant</h1>
        <p>Avant de continuer, essayons quelque chose de plus simple sur la même idée.</p>
        <div class="question">${escapeHTML(rem.question)}</div>
        <div class="choices">
          ${rem.choices.map(c => `<button class="choice" data-choice="${escapeHTML(c)}">${escapeHTML(c)}</button>`).join("")}
        </div>
        <div id="remFeedback"></div>
      </div>
    </section>`;
  
  document.querySelectorAll(".choice").forEach(btn => btn.onclick = () => {
    const ok = btn.dataset.choice === rem.answer;
    const rf = document.getElementById("remFeedback");
    rf.className = "feedback " + (ok ? "good" : "help");
    rf.innerHTML = `
      <p>${ok ? "⭐ Voilà, c'est ça !" : "Pas grave,"} ${escapeHTML(rem.help)}</p>
      <button class="primary" onclick="revealAnswer()">Continuer</button>`;
    document.querySelectorAll(".choice").forEach(b => b.disabled = true);
  });
}

// ===== RÉVÉLER LA RÉPONSE =====
window.revealAnswer = function() {
  const l = pendingRevealLesson;
  attemptsThis = 0;
  app.innerHTML = `
    <section class="lesson">
      <div class="lesson-box">
        <span class="tag">${escapeHTML(l.skill)}</span>
        <h1>${escapeHTML(l.title)}</h1>
        <div class="feedback bad">
          <strong>🌱 On apprend ensemble.</strong>
          <p>La réponse était : <strong>${escapeHTML(l.answer)}</strong></p>
          <p>${escapeHTML(l.help)}</p>
          <p style="margin-top:12px"><em>💬 Conseil pour l'adulte : ${escapeHTML(l.parent)}</em></p>
          <button class="primary" onclick="nextLesson()" style="margin-top:16px">Continuer →</button>
        </div>
      </div>
    </section>`;
};

// ===== EXERCICE SUIVANT =====
window.nextLesson = function() {
  if (currentIndex < currentLessons.length - 1) {
    currentIndex++;
    renderLesson();
  } else {
    // Série terminée : confettis + récompense
    launchConfetti(80);
    playSound("correct");
    
    const parentTips = [...new Set(currentLessons.map(x => x.parent))];
    const s = SUBJECTS[currentSubject];
    
    app.innerHTML = `
      <section class="lesson">
        <div class="lesson-box" style="text-align:center">
          <span style="font-size:5rem; display:block; animation: bounce 1s ease-in-out infinite">🎉</span>
          <h1>Mission accomplie !</h1>
          <p>Tu as terminé la série en <strong>${s.title}</strong> ${s.icon}</p>
          <div style="display:flex; gap:20px; justify-content:center; margin:20px 0; flex-wrap:wrap">
            <div class="stat-pill">🪙 +${currentLessons.length} pièces</div>
            <div class="stat-pill">🔥 Série : ${PROGRESS.streak}</div>
          </div>
          <div class="tip" style="text-align:left; margin:20px 0">
            <strong>💡 Conseils pour l'adulte :</strong>
            <ul style="margin-top:10px; padding-left:20px">
              ${parentTips.map(t => `<li>${escapeHTML(t)}</li>`).join("")}
            </ul>
          </div>
          <button class="primary" onclick="renderDashboard()">🏠 Retour au tableau de bord</button>
        </div>
      </section>`;
  }
};

// ===== ESPACE PARENT =====
document.getElementById("parentModeBtn").onclick = () => renderParent();

window.renderParent = function() {
  updateTopbar();
  const a = parentAdvice();
  
  const rows = a.rows.map(x => {
    const niveauBars = x.niveaux.map(n => `
      <div class="niveau-row">
        <span>${n.label}</span>
        <div class="progress-wrap small"><div class="progress-bar" style="width:${n.p}%"></div></div>
        <span class="niveau-pct">${n.p}%</span>
      </div>`).join("");
    return `
      <div class="skill">
        <div class="skill-row">
          <span>${x.icon} ${x.title}</span>
          <span><strong>${x.p}%</strong></span>
        </div>
        <div class="progress-wrap"><div class="progress-bar" style="width:${x.p}%"></div></div>
        <div class="niveau-detail">${niveauBars}</div>
      </div>`;
  }).join("");
  
  const supportSection = a.support.length ? `
    <div class="lesson-box" style="margin-top:20px">
      <h2>🛟 Compétences à renforcer</h2>
      <p class="skills-list">Ces compétences ont nécessité un entraînement supplémentaire.</p>
      ${a.support.map(s => `
        <div class="support-item">
          <strong>${escapeHTML(s.skill)}</strong> · <span class="tag">${s.count} entraînement(s)</span>
          <p>${escapeHTML(s.tip)}</p>
        </div>`).join("")}
    </div>` : "";
  
  // Statistiques globales
  const totalExos = Object.values(SUBJECTS).reduce((sum, s) => sum + s.lessons.length, 0);
  const doneExos = Object.values(PROGRESS.done).filter(Boolean).length;
  const accuracy = PROGRESS.totalAttempts > 0 
    ? Math.round(PROGRESS.totalCorrect / PROGRESS.totalAttempts * 100) 
    : 0;
  
  app.innerHTML = `
    <section class="parent-panel">
      <button class="secondary" onclick="renderDashboard()">← Espace enfant</button>
      <h1>👩‍👧 Espace parent</h1>
      <p>Voici un aperçu simple des activités réalisées. <em>Il s'agit d'un outil pédagogique, pas d'un diagnostic.</em></p>
      
      <div class="stat-grid">
        <div class="stat"><strong>Enfant</strong><br>${escapeHTML(PROGRESS.name || "Non renseigné")}</div>
        <div class="stat"><strong>Niveau</strong><br>${getPlayerLevel()} — ${getPlayerTitle()}</div>
        <div class="stat"><strong>Exercices</strong><br>${doneExos} / ${totalExos}</div>
        <div class="stat"><strong>Réussite</strong><br>${accuracy}%</div>
        <div class="stat"><strong>🪙 Pièces</strong><br>${PROGRESS.coins}</div>
        <div class="stat"><strong>⭐ Étoiles</strong><br>${PROGRESS.stars}</div>
        <div class="stat"><strong>🔥 Meilleure série</strong><br>${PROGRESS.bestStreak}</div>
        <div class="stat"><strong>🎯 Priorité</strong><br>${a.weakest.title}</div>
      </div>
      
      <div class="lesson-box" style="margin-top:20px">
        <h2>📊 Progression par matière et par niveau</h2>
        ${rows}
      </div>
      
      ${supportSection}
      
      <div class="lesson-box" style="margin-top:20px">
        <h2>💡 Conseils d'accompagnement</h2>
        <ul style="padding-left:20px; margin-top:10px">
          ${GENERAL_TIPS.map(t => `<li style="margin-bottom:8px">${escapeHTML(t)}</li>`).join("")}
        </ul>
      </div>
      
      <button class="secondary" style="margin-top:20px" onclick="resetProgress()">🔄 Réinitialiser les progrès</button>
    </section>`;
};

window.resetProgress = function() {
  if (confirm("Réinitialiser tous les progrès ? Cette action est irréversible.")) {
    localStorage.removeItem("petitPasProgress");
    location.reload();
  }
};

// ===== DÉMARRAGE =====
renderHome();
