window.NIVEAUX = ["decouverte", "entrainement", "defi"];
window.NIVEAU_INFO = {
  decouverte:   { label: "Découverte",  icon: "🌱", rank: 0 },
  entrainement: { label: "Entraînement", icon: "🌿", rank: 1 },
  defi:         { label: "Défi",         icon: "🌳", rank: 2 }
};

// Initialisation de la progression avec nouveaux compteurs
const defaultProgress = {
  done: {},
  attempts: {},
  remediation: {},
  name: "",
  coins: 0,          // 🪙 Pièces gagnées
  stars: 0,          // ⭐ Étoiles (bonnes réponses du 1er coup)
  streak: 0,         // 🔥 Série en cours
  bestStreak: 0,     // 🏆 Meilleure série
  totalCorrect: 0,
  totalAttempts: 0,
  lastVisit: null
};

window.PROGRESS = JSON.parse(localStorage.getItem("petitPasProgress") || "null");
if (!PROGRESS) {
  PROGRESS = { ...defaultProgress };
} else {
  // Migration : ajouter les nouveaux champs s'ils manquent
  Object.keys(defaultProgress).forEach(k => {
    if (PROGRESS[k] === undefined) PROGRESS[k] = defaultProgress[k];
  });
}

PROGRESS.done = PROGRESS.done || {};
PROGRESS.attempts = PROGRESS.attempts || {};
PROGRESS.remediation = PROGRESS.remediation || {};

function saveProgress() {
  localStorage.setItem("petitPasProgress", JSON.stringify(PROGRESS));
}

function keyFor(subject, index) {
  return subject + "-" + index;
}

function recordAttempt(subject, index, correct) {
  const k = keyFor(subject, index);
  PROGRESS.attempts[k] = (PROGRESS.attempts[k] || 0) + 1;
  PROGRESS.totalAttempts++;
  
  if (correct) {
    PROGRESS.done[k] = true;
    PROGRESS.totalCorrect++;
    
    // Bonus selon le niveau de difficulté
    const lesson = SUBJECTS[subject].lessons[index];
    const bonus = { decouverte: 1, entrainement: 2, defi: 3 }[lesson.niveau] || 1;
    PROGRESS.coins += bonus;
    
    // Étoile si réussi du premier coup
    if (PROGRESS.attempts[k] === 1) {
      PROGRESS.stars++;
      PROGRESS.streak++;
      if (PROGRESS.streak > PROGRESS.bestStreak) {
        PROGRESS.bestStreak = PROGRESS.streak;
      }
      // Bonus streak
      if (PROGRESS.streak >= 3) {
        PROGRESS.coins += Math.floor(PROGRESS.streak / 3);
      }
    }
  } else {
    PROGRESS.streak = 0;
  }
  
  PROGRESS.lastVisit = new Date().toISOString();
  saveProgress();
}

function recordRemediation(skill) {
  PROGRESS.remediation[skill] = (PROGRESS.remediation[skill] || 0) + 1;
  saveProgress();
}

function subjectLessons(subject) {
  return SUBJECTS[subject].lessons.slice().sort(
    (a, b) => NIVEAU_INFO[a.niveau].rank - NIVEAU_INFO[b.niveau].rank
  );
}

function subjectProgress(subject) {
  const lessons = SUBJECTS[subject].lessons;
  const done = lessons.filter((_, i) => PROGRESS.done[keyFor(subject, i)]).length;
  return lessons.length ? Math.round(done / lessons.length * 100) : 0;
}

function niveauProgress(subject, niveau) {
  const lessons = SUBJECTS[subject].lessons;
  const indices = lessons.map((l, i) => ({ l, i })).filter(x => x.l.niveau === niveau);
  if (!indices.length) return 0;
  const done = indices.filter(x => PROGRESS.done[keyFor(subject, x.i)]).length;
  return Math.round(done / indices.length * 100);
}

function skillsNeedingSupport() {
  return Object.entries(PROGRESS.remediation)
    .filter(([, count]) => count > 0)
    .sort((a, b) => b[1] - a[1])
    .map(([skill, count]) => ({ skill, count }));
}

// Calcul du niveau global (1 à 10)
function getPlayerLevel() {
  const xp = PROGRESS.stars * 10 + PROGRESS.coins;
  return Math.min(10, Math.floor(xp / 50) + 1);
}

// Titre selon le niveau
function getPlayerTitle() {
  const lvl = getPlayerLevel();
  const titles = [
    "Graine 🌰", "Pousse 🌱", "Bourgeon 🌿", "Jeune pousse 🌾",
    "Petite plante 🪴", "Arbuste 🌳", "Jeune arbre 🌲",
    "Grand arbre 🎋", "Arbre sage 🌴", "Chêne centenaire 🏆"
  ];
  return titles[lvl - 1] || titles[0];
}
