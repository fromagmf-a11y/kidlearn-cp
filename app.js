// ===== KIDLEARN CP - APPLICATION PRINCIPALE =====
// Copyright (c) 2026 KidLearn. Tous droits réservés.

// ===== ÉTAT DE L'APPLICATION =====
const state = {
    enfant: null,
    avatar: null,
    etoiles: 0,
    moduleActuel: null,
    questionActuelle: 0,
    reponsesCorrectes: 0,
    historique: [],
    progression: {
        francais: { niveau: 1, modulesCompletes: [], etoiles: 0 },
        maths: { niveau: 1, modulesCompletes: [], etoiles: 0 },
        autres: { niveau: 1, modulesCompletes: [], etoiles: 0 }
    }
};

// ===== AVATARS DISPONIBLES =====
const avatars = ['🦊', '🐼', '🦄', '', '🐵', '🐰'];

// ===== DONNÉES (déjà chargées via <script> dans index.html) =====
// Les variables DATA_FRANCAIS, DATA_MATHS, DATA_AUTRES sont globales

// ===== AFFICHAGE DE L'ACCUEIL =====
function afficherAccueil() {
    const app = document.getElementById('app');
    if (!app) {
        console.error(' Élément #app non trouvé !');
        return;
    }
    
    app.innerHTML = `
        <div class="accueil">
            <h1>🎒 Mon CP</h1>
            <p class="sous-titre">Apprends en t'amusant !</p>
            
            <div class="choix-avatar">
                <h3>Choisis ton avatar :</h3>
                <div class="avatars">
                    ${avatars.map(a => `<button class="avatar-btn" data-avatar="${a}">${a}</button>`).join('')}
                </div>
            </div>
            
            <div class="choix-nom">
                <input type="text" id="nomEnfant" placeholder="Ton prénom" maxlength="20">
            </div>
            
            <div class="boutons-accueil">
                <button class="btn-principal" id="btnCommencer" disabled>
                    🚀 C'est parti !
                </button>
                <button class="btn-secondaire" id="btnParents">
                    👨‍👩‍ Espace Parents
                </button>
            </div>
        </div>
    `;
    
    // Gestion des avatars
    document.querySelectorAll('.avatar-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.avatar-btn').forEach(b => b.classList.remove('actif'));
            btn.classList.add('actif');
            state.avatar = btn.dataset.avatar;
            verifierDemarrage();
        });
    });
    
    // Gestion du nom
    document.getElementById('nomEnfant').addEventListener('input', (e) => {
        state.enfant = e.target.value.trim();
        verifierDemarrage();
    });
    
    // Bouton commencer
    document.getElementById('btnCommencer').addEventListener('click', afficherDashboard);
    
    // Bouton parents
    document.getElementById('btnParents').addEventListener('click', afficherEspaceParents);
    
    // Charger la progression sauvegardée
    chargerProgression();
}

function verifierDemarrage() {
    const btn = document.getElementById('btnCommencer');
    if (btn) {
        btn.disabled = !(state.avatar && state.enfant);
    }
}

// ===== DASHBOARD =====
function afficherDashboard() {
    const app = document.getElementById('app');
    const matieres = [
        { id: 'francais', titre: 'Français', desc: 'Lecture, écriture, orthographe', icone: '📖', data: window.DATA_FRANCAIS },
        { id: 'maths', titre: 'Mathématiques', desc: 'Nombres, calcul, logique', icone: '', data: window.DATA_MATHS },
        { id: 'autres', titre: 'Découverte du monde', desc: 'Sciences, temps, espace', icone: '🌍', data: window.DATA_AUTRES }
    ];
    
    app.innerHTML = `
        <div class="dashboard">
            <header class="topbar">
                <div class="brand" onclick="afficherAccueil()">
                    <span class="brand-icon">🎒</span>
                    <span class="brand-name">Mon CP</span>
                </div>
                <div class="topbar-stats">${state.avatar} ${state.enfant} ⭐ ${state.etoiles}</div>
                <button class="parent-btn" id="parentBtn">👨‍👩‍👧 Espace parent</button>
            </header>
            
            <main>
                <h2>Que veux-tu apprendre aujourd'hui ?</h2>
                
                <div class="matieres-grid">
                    ${matieres.map(m => {
                        const prog = state.progression[m.id];
                        const totalModules = m.data ? m.data.modules.length : 0;
                        const completes = prog.modulesCompletes.length;
                        const pourcentage = totalModules > 0 ? Math.round((completes / totalModules) * 100) : 0;
                        
                        return `
                            <div class="matiere-card" data-matiere="${m.id}">
                                <div class="matiere-icone">${m.icone}</div>
                                <h3>${m.titre}</h3>
                                <p>${m.desc}</p>
                                <div class="progression-barre">
                                    <div class="progression-remplie" style="width: ${pourcentage}%"></div>
                                </div>
                                <span class="progression-texte">${pourcentage}%</span>
                            </div>
                        `;
                    }).join('')}
                </div>
                
                <div class="defi-jour">
                    <h3> Défi du jour</h3>
                    <button id="btnDefi">Relever le défi !</button>
                </div>
            </main>
        </div>
    `;
    
    document.querySelectorAll('.matiere-card').forEach(card => {
        card.addEventListener('click', () => afficherModules(card.dataset.matiere));
    });
    
    document.getElementById('parentBtn').addEventListener('click', afficherEspaceParents);
    document.getElementById('btnDefi').addEventListener('click', lancerDefi);
}

// ===== MODULES =====
function afficherModules(matiere) {
    const data = matiere === 'francais' ? window.DATA_FRANCAIS : 
                 matiere === 'maths' ? window.DATA_MATHS : window.DATA_AUTRES;
    
    if (!data || !data.modules) {
        alert('Données non disponibles');
        return;
    }
    
    const app = document.getElementById('app');
    const prog = state.progression[matiere];
    
    app.innerHTML = `
        <div class="modules-page">
            <header class="topbar">
                <button class="btn-retour" id="btnRetour">← Retour</button>
                <div class="topbar-stats">${state.avatar} ${state.enfant}  ${state.etoiles}</div>
            </header>
            <main>
                <h2>${matiere === 'francais' ? ' Français' : matiere === 'maths' ? '🔢 Mathématiques' : ' Découverte du monde'}</h2>
                <div class="filtres-niveau">
                    <button class="filtre-btn actif" data-niveau="tous">Tous</button>
                    <button class="filtre-btn" data-niveau="1">⭐ Facile</button>
                    <button class="filtre-btn" data-niveau="2">⭐⭐ Moyen</button>
                    <button class="filtre-btn" data-niveau="3">⭐⭐⭐ Difficile</button>
                </div>
                <div class="modules-liste">
                    ${data.modules.map(mod => {
                        const estComplete = prog.modulesCompletes.includes(mod.id);
                        return `
                            <div class="module-card ${estComplete ? 'complete' : ''}" data-module="${mod.id}" data-niveau="${mod.niveau}">
                                <div class="module-icone">${mod.icone}</div>
                                <div class="module-info">
                                    <h3>${mod.titre}</h3>
                                    <p>${mod.description}</p>
                                    <div class="module-niveau">${'⭐'.repeat(mod.niveau)}</div>
                                </div>
                                ${estComplete ? '<div class="badge-complete">✅</div>' : ''}
                            </div>
                        `;
                    }).join('')}
                </div>
            </main>
        </div>
    `;
    
    document.getElementById('btnRetour').addEventListener('click', afficherDashboard);
    
    document.querySelectorAll('.filtre-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filtre-btn').forEach(b => b.classList.remove('actif'));
            btn.classList.add('actif');
            const niveau = btn.dataset.niveau;
            document.querySelectorAll('.module-card').forEach(card => {
                card.style.display = (niveau === 'tous' || card.dataset.niveau === niveau) ? 'flex' : 'none';
            });
        });
    });
    
    document.querySelectorAll('.module-card').forEach(card => {
        card.addEventListener('click', () => {
            const module = data.modules.find(m => m.id === card.dataset.module);
            if (module) lancerModule(matiere, module);
        });
    });
}

// ===== LANCER UN MODULE =====
function lancerModule(matiere, module) {
    state.moduleActuel = module;
    state.questionActuelle = 0;
    state.reponsesCorrectes = 0;
    afficherQuestion(matiere, module);
}

// ===== QUESTION =====
function afficherQuestion(matiere, module) {
    const question = module.questions[state.questionActuelle];
    const total = module.questions.length;
    const numero = state.questionActuelle + 1;
    const app = document.getElementById('app');
    
    if (module.type === 'qcm') {
        app.innerHTML = `
            <div class="question-page">
                <header class="topbar">
                    <button class="btn-retour" id="btnQuitter">✕ Quitter</button>
                    <div class="progression-question">${numero} / ${total}</div>
                    <div class="topbar-stats">⭐ ${state.etoiles}</div>
                </header>
                <main>
                    <div class="question-container">
                        <div class="question-consigne">${module.consigne}</div>
                        <h2 class="question-texte">${question.question}</h2>
                        <div class="reponses-grid">
                            ${question.reponses.map((rep, idx) => `
                                <button class="reponse-btn" data-index="${idx}">${rep}</button>
                            `).join('')}
                        </div>
                        <div class="question-aide" id="aideBox" style="display:none;">
                            <p>💡 ${question.aide || ''}</p>
                        </div>
                    </div>
                </main>
            </div>
        `;
        
        document.querySelectorAll('.reponse-btn').forEach(btn => {
            btn.addEventListener('click', () => traiterReponse(matiere, module, question, parseInt(btn.dataset.index)));
        });
        document.getElementById('btnQuitter').addEventListener('click', () => {
            if (confirm('Quitter cet exercice ?')) afficherModules(matiere);
        });
    } else if (module.type === 'saisie') {
        app.innerHTML = `
            <div class="question-page">
                <header class="topbar">
                    <button class="btn-retour" id="btnQuitter">✕ Quitter</button>
                    <div class="progression-question">${numero} / ${total}</div>
                    <div class="topbar-stats">⭐ ${state.etoiles}</div>
                </header>
                <main>
                    <div class="question-container">
                        <div class="question-consigne">${module.consigne}</div>
                        <h2 class="question-texte">${question.question}</h2>
                        <div class="saisie-container">
                            <input type="text" id="reponseSaisie" maxlength="10" autocomplete="off">
                            <button class="btn-valider" id="btnValider">Valider</button>
                        </div>
                        <div class="question-aide" id="aideBox" style="display:none;">
                            <p>💡 ${question.aide || ''}</p>
                        </div>
                    </div>
                </main>
            </div>
        `;
        
        document.getElementById('btnValider').addEventListener('click', () => {
            const reponse = document.getElementById('reponseSaisie').value.trim().toLowerCase();
            const estCorrect = reponse === question.reponse.toLowerCase();
            traiterReponseSaisie(matiere, module, question, estCorrect);
        });
        document.getElementById('reponseSaisie').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') document.getElementById('btnValider').click();
        });
        document.getElementById('btnQuitter').addEventListener('click', () => {
            if (confirm('Quitter cet exercice ?')) afficherModules(matiere);
        });
    }
}

// ===== TRAITER RÉPONSE QCM =====
function traiterReponse(matiere, module, question, index) {
    const estCorrect = index === question.correct;
    document.querySelectorAll('.reponse-btn').forEach(btn => {
        btn.disabled = true;
        const btnIndex = parseInt(btn.dataset.index);
        if (btnIndex === question.correct) btn.classList.add('correct');
        else if (btnIndex === index && !estCorrect) btn.classList.add('incorrect');
    });
    
    if (estCorrect) {
        state.reponsesCorrectes++;
        state.etoiles++;
        lancerConfettis();
        afficherToast('✅ Bravo ! Bonne réponse ! ⭐', 'success');
    } else {
        afficherToast('❌ Oups !', 'error');
        if (question.aide) setTimeout(() => { document.getElementById('aideBox').style.display = 'block'; }, 1000);
    }
    
    state.historique.push({ module: module.id, question: question.question, correct: estCorrect, date: new Date().toISOString() });
    
    setTimeout(() => {
        state.questionActuelle++;
        if (state.questionActuelle < module.questions.length) afficherQuestion(matiere, module);
        else afficherResultats(matiere, module);
    }, 2000);
}

// ===== TRAITER SAISIE =====
function traiterReponseSaisie(matiere, module, question, estCorrect) {
    const input = document.getElementById('reponseSaisie');
    input.disabled = true;
    document.getElementById('btnValider').disabled = true;
    
    if (estCorrect) {
        state.reponsesCorrectes++;
        state.etoiles++;
        input.classList.add('correct');
        lancerConfettis();
        afficherToast('✅ Bravo ! ⭐', 'success');
    } else {
        input.classList.add('incorrect');
        afficherToast(`❌ Réponse : "${question.reponse}"`, 'error');
    }
    
    state.historique.push({ module: module.id, question: question.question, correct: estCorrect, date: new Date().toISOString() });
    
    setTimeout(() => {
        state.questionActuelle++;
        if (state.questionActuelle < module.questions.length) afficherQuestion(matiere, module);
        else afficherResultats(matiere, module);
    }, 2500);
}

// ===== RÉSULTATS =====
function afficherResultats(matiere, module) {
    const total = module.questions.length;
    const correct = state.reponsesCorrectes;
    const pourcentage = Math.round((correct / total) * 100);
    
    const prog = state.progression[matiere];
    if (!prog.modulesCompletes.includes(module.id)) prog.modulesCompletes.push(module.id);
    prog.etoiles += correct;
    sauvegarderProgression();
    
    const emoji = pourcentage === 100 ? '🏆' : pourcentage >= 75 ? '🌟' : pourcentage >= 50 ? '👍' : '💪';
    const message = pourcentage === 100 ? 'Parfait !' : pourcentage >= 75 ? 'Très bien !' : pourcentage >= 50 ? 'Bien !' : 'Continue !';
    
    document.getElementById('app').innerHTML = `
        <div class="resultats-page">
            <main>
                <div class="resultats-container">
                    <div class="resultats-emoji">${emoji}</div>
                    <h2>${message}</h2>
                    <div class="resultats-stats">
                        <div class="stat"><span class="stat-nombre">${correct}</span><span class="stat-label">Bonnes réponses</span></div>
                        <div class="stat"><span class="stat-nombre">${total}</span><span class="stat-label">Questions</span></div>
                        <div class="stat"><span class="stat-nombre">${pourcentage}%</span><span class="stat-label">Réussite</span></div>
                        <div class="stat"><span class="stat-nombre">+${correct}⭐</span><span class="stat-label">Étoiles</span></div>
                    </div>
                    ${pourcentage < 75 && module.remediation ? `<div class="remediation-box"><h3>${module.remediation.titre}</h3><p>${module.remediation.texte}</p></div>` : ''}
                    <div class="resultats-boutons">
                        <button class="btn-recommencer" id="btnRecommencer"> Recommencer</button>
                        <button class="btn-principal" id="btnContinuer">➡️ Continuer</button>
                    </div>
                </div>
            </main>
        </div>
    `;
    
    document.getElementById('btnRecommencer').addEventListener('click', () => lancerModule(matiere, module));
    document.getElementById('btnContinuer').addEventListener('click', () => afficherModules(matiere));
}

// ===== DÉFI =====
function lancerDefi() {
    const matieres = ['francais', 'maths', 'autres'];
    const matiere = matieres[Math.floor(Math.random() * matieres.length)];
    const data = matiere === 'francais' ? window.DATA_FRANCAIS : matiere === 'maths' ? window.DATA_MATHS : window.DATA_AUTRES;
    if (data && data.modules.length > 0) {
        const module = data.modules[Math.floor(Math.random() * data.modules.length)];
        lancerModule(matiere, module);
    }
}

// ===== ESPACE PARENTS =====
function afficherEspaceParents() {
    const totalExercices = state.historique.length;
    const totalCorrect = state.historique.filter(h => h.correct).length;
    const tauxReussite = totalExercices > 0 ? Math.round((totalCorrect / totalExercices) * 100) : 0;
    
    document.getElementById('app').innerHTML = `
        <div class="parents-page">
            <header class="topbar">
                <button class="btn-retour" id="btnRetourParents">← Retour</button>
                <h2>👨‍👩‍👧 Espace Parents</h2>
            </header>
            <main>
                <div class="parents-container">
                    <div class="parent-section">
                        <h3>📊 Progression de ${state.enfant || 'l\'enfant'}</h3>
                        <div class="stats-parents">
                            <div class="stat-parent"><span class="stat-nombre">${state.etoiles}</span><span class="stat-label">Étoiles</span></div>
                            <div class="stat-parent"><span class="stat-nombre">${totalExercices}</span><span class="stat-label">Exercices</span></div>
                            <div class="stat-parent"><span class="stat-nombre">${tauxReussite}%</span><span class="stat-label">Réussite</span></div>
                        </div>
                    </div>
                    <div class="parent-section">
                        <h3>📚 Par matière</h3>
                        <div class="prog-matiere"><span>📖 Français</span><span>${state.progression.francais.modulesCompletes.length} modules</span><span>⭐ ${state.progression.francais.etoiles}</span></div>
                        <div class="prog-matiere"><span>🔢 Maths</span><span>${state.progression.maths.modulesCompletes.length} modules</span><span>⭐ ${state.progression.maths.etoiles}</span></div>
                        <div class="prog-matiere"><span> Découverte</span><span>${state.progression.autres.modulesCompletes.length} modules</span><span>⭐ ${state.progression.autres.etoiles}</span></div>
                    </div>
                    <div class="parent-section">
                        <h3>🔧 Paramètres</h3>
                        <div class="parametres-parents">
                            <button class="btn-reset" id="btnReset">🗑️ Réinitialiser</button>
                            <button class="btn-export" id="btnExport">📥 Exporter</button>
                        </div>
                    </div>
                    <div class="parent-section info-section">
                        <h3>ℹ️ Informations</h3>
                        <p>Application pédagogique ludique pour CP (6-7 ans).</p>
                        <p>Les activités ne constituent pas un diagnostic scolaire.</p>
                    </div>
                </div>
            </main>
        </div>
    `;
    
    document.getElementById('btnRetourParents').addEventListener('click', () => {
        if (state.enfant && state.avatar) afficherDashboard();
        else afficherAccueil();
    });
    document.getElementById('btnReset').addEventListener('click', () => {
        if (confirm('Réinitialiser la progression ?')) {
            localStorage.removeItem('kidlearn_cp_progression');
            state.progression = { francais: { niveau: 1, modulesCompletes: [], etoiles: 0 }, maths: { niveau: 1, modulesCompletes: [], etoiles: 0 }, autres: { niveau: 1, modulesCompletes: [], etoiles: 0 } };
            state.etoiles = 0;
            state.historique = [];
            location.reload();
        }
    });
    document.getElementById('btnExport').addEventListener('click', () => {
        const data = { enfant: state.enfant, avatar: state.avatar, etoiles: state.etoiles, progression: state.progression, historique: state.historique, dateExport: new Date().toISOString() };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `kidlearn_cp_${state.enfant || 'enfant'}_${new Date().toISOString().split('T')[0]}.json`;
        a.click();
    });
}

// ===== SAUVEGARDE =====
function sauvegarderProgression() {
    localStorage.setItem('kidlearn_cp_progression', JSON.stringify({
        enfant: state.enfant, avatar: state.avatar, etoiles: state.etoiles,
        progression: state.progression, historique: state.historique.slice(-100),
        dateSauvegarde: new Date().toISOString()
    }));
}

function chargerProgression() {
    const sauvegarde = localStorage.getItem('kidlearn_cp_progression');
    if (sauvegarde) {
        try {
            const data = JSON.parse(sauvegarde);
            state.enfant = data.enfant || null;
            state.avatar = data.avatar || null;
            state.etoiles = data.etoiles || 0;
            state.progression = data.progression || state.progression;
            state.historique = data.historique || [];
        } catch (e) { console.error('Erreur chargement:', e); }
    }
}

// ===== EFFETS =====
function lancerConfettis() {
    const container = document.getElementById('confettiContainer');
    if (!container) return;
    const couleurs = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#FFD93D', '#6BCB77'];
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = couleurs[Math.floor(Math.random() * couleurs.length)];
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 1) + 's';
        container.appendChild(confetti);
        setTimeout(() => confetti.remove(), 3000);
    }
}

function afficherToast(message, type) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.className = `toast toast-${type} visible`;
    setTimeout(() => toast.classList.remove('visible'), 2500);
}

// ===== INITIALISATION =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ DOM chargé');
    console.log('DATA_FRANCAIS:', window.DATA_FRANCAIS);
    console.log('DATA_MATHS:', window.DATA_MATHS);
    console.log('DATA_AUTRES:', window.DATA_AUTRES);
    afficherAccueil();
});
