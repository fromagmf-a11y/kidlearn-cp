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
const avatars = ['', '🐼', '', '🐸', '🐵', '🐰'];

// ===== CHARGEMENT DES DONNÉES =====
let DATA_FRANCAIS = null;
let DATA_MATHS = null;
let DATA_AUTRES = null;

async function chargerDonnees() {
    try {
        const [fr, math, autres] = await Promise.all([
            fetch('data/cp-francais.js').then(r => r.text()),
            fetch('data/cp-maths.js').then(r => r.text()),
            fetch('data/cp-autres.js').then(r => r.text())
        ]);
        
        eval(fr);
        eval(math);
        eval(autres);
        
        DATA_FRANCAIS = window.DATA_FRANCAIS;
        DATA_MATHS = window.DATA_MATHS;
        DATA_AUTRES = window.DATA_AUTRES;
        
        console.log('✅ Données chargées avec succès');
        afficherAccueil();
    } catch (error) {
        console.error('❌ Erreur de chargement:', error);
        document.getElementById('app').innerHTML = `
            <div class="erreur">
                <h2>Oups ! Une erreur est survenue</h2>
                <p>Impossible de charger les données.</p>
                <button onclick="location.reload()">Réessayer</button>
            </div>
        `;
    }
}

// ===== AFFICHAGE DE L'ACCUEIL =====
function afficherAccueil() {
    const app = document.getElementById('app');
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
                    👨‍‍👧 Espace Parents
                </button>
            </div>
            
            <div class="stats-rapides" id="statsRapides" style="display:none;">
                <p>${state.avatar || '🦊'} <span id="nomAffiche">Enfant</span> ⭐ <span id="etoilesAffiche">0</span></p>
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
    if (state.avatar && state.enfant) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
}

// ===== DASHBOARD =====
function afficherDashboard() {
    const app = document.getElementById('app');
    const matieres = [
        { id: 'francais', titre: 'Français', desc: 'Lecture, écriture, orthographe', icone: '', data: DATA_FRANCAIS },
        { id: 'maths', titre: 'Mathématiques', desc: 'Nombres, calcul, logique', icone: '🔢', data: DATA_MATHS },
        { id: 'autres', titre: 'Découverte du monde', desc: 'Sciences, temps, espace', icone: '🌍', data: DATA_AUTRES }
    ];
    
    app.innerHTML = `
        <div class="dashboard">
            <header class="topbar">
                <div class="brand" onclick="afficherAccueil()">
                    <span class="brand-icon">🎒</span>
                    <span class="brand-name">Mon CP</span>
                </div>
                <div class="topbar-stats" id="topbarStats">
                    ${state.avatar} ${state.enfant} ⭐ ${state.etoiles}
                </div>
                <button class="parent-btn" id="parentBtn">👨‍‍👧 Espace parent</button>
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
                    <h3>🏆 Défi du jour</h3>
                    <button id="btnDefi">Relever le défi !</button>
                </div>
            </main>
        </div>
    `;
    
    // Gestion des clics sur les matières
    document.querySelectorAll('.matiere-card').forEach(card => {
        card.addEventListener('click', () => {
            const matiere = card.dataset.matiere;
            afficherModules(matiere);
        });
    });
    
    // Bouton parents
    document.getElementById('parentBtn').addEventListener('click', afficherEspaceParents);
    
    // Bouton défi
    document.getElementById('btnDefi').addEventListener('click', lancerDefi);
}

// ===== AFFICHAGE DES MODULES =====
function afficherModules(matiere) {
    const data = matiere === 'francais' ? DATA_FRANCAIS : 
                 matiere === 'maths' ? DATA_MATHS : DATA_AUTRES;
    
    if (!data || !data.modules) {
        alert('Données non disponibles pour cette matière');
        return;
    }
    
    const app = document.getElementById('app');
    const prog = state.progression[matiere];
    
    app.innerHTML = `
        <div class="modules-page">
            <header class="topbar">
                <button class="btn-retour" id="btnRetour">← Retour</button>
                <div class="topbar-stats">${state.avatar} ${state.enfant} ⭐ ${state.etoiles}</div>
            </header>
            
            <main>
                <h2>${matiere === 'francais' ? '📖 Français' : matiere === 'maths' ? '🔢 Mathématiques' : '🌍 Découverte du monde'}</h2>
                
                <div class="filtres-niveau">
                    <button class="filtre-btn actif" data-niveau="tous">Tous</button>
                    <button class="filtre-btn" data-niveau="1">⭐ Facile</button>
                    <button class="filtre-btn" data-niveau="2">⭐⭐ Moyen</button>
                    <button class="filtre-btn" data-niveau="3">⭐⭐⭐ Difficile</button>
                </div>
                
                <div class="modules-liste">
                    ${data.modules.map((mod, idx) => {
                        const estComplete = prog.modulesCompletes.includes(mod.id);
                        return `
                            <div class="module-card ${estComplete ? 'complete' : ''}" 
                                 data-module="${mod.id}" 
                                 data-niveau="${mod.niveau}">
                                <div class="module-icone">${mod.icone}</div>
                                <div class="module-info">
                                    <h3>${mod.titre}</h3>
                                    <p>${mod.description}</p>
                                    <div class="module-niveau">
                                        ${'⭐'.repeat(mod.niveau)}
                                    </div>
                                </div>
                                ${estComplete ? '<div class="badge-complete">✅</div>' : ''}
                            </div>
                        `;
                    }).join('')}
                </div>
            </main>
        </div>
    `;
    
    // Bouton retour
    document.getElementById('btnRetour').addEventListener('click', afficherDashboard);
    
    // Filtres de niveau
    document.querySelectorAll('.filtre-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filtre-btn').forEach(b => b.classList.remove('actif'));
            btn.classList.add('actif');
            
            const niveau = btn.dataset.niveau;
            document.querySelectorAll('.module-card').forEach(card => {
                if (niveau === 'tous' || card.dataset.niveau === niveau) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Clic sur un module
    document.querySelectorAll('.module-card').forEach(card => {
        card.addEventListener('click', () => {
            const moduleId = card.dataset.module;
            const module = data.modules.find(m => m.id === moduleId);
            if (module) {
                lancerModule(matiere, module);
            }
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

// ===== AFFICHER UNE QUESTION =====
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
                                <button class="reponse-btn" data-index="${idx}">
                                    ${rep}
                                </button>
                            `).join('')}
                        </div>
                        
                        <div class="question-aide" id="aideBox" style="display:none;">
                            <p>💡 ${question.aide || ''}</p>
                        </div>
                    </div>
                </main>
            </div>
        `;
        
        // Gestion des réponses
        document.querySelectorAll('.reponse-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const index = parseInt(btn.dataset.index);
                traiterReponse(matiere, module, question, index);
            });
        });
        
        // Bouton quitter
        document.getElementById('btnQuitter').addEventListener('click', () => {
            if (confirm('Veux-tu vraiment quitter cet exercice ?')) {
                afficherModules(matiere);
            }
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
        
        // Validation de la saisie
        document.getElementById('btnValider').addEventListener('click', () => {
            const reponse = document.getElementById('reponseSaisie').value.trim().toLowerCase();
            const correct = question.reponse.toLowerCase();
            const estCorrect = reponse === correct;
            traiterReponseSaisie(matiere, module, question, estCorrect);
        });
        
        // Touche Entrée
        document.getElementById('reponseSaisie').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                document.getElementById('btnValider').click();
            }
        });
        
        // Bouton quitter
        document.getElementById('btnQuitter').addEventListener('click', () => {
            if (confirm('Veux-tu vraiment quitter cet exercice ?')) {
                afficherModules(matiere);
            }
        });
    }
}

// ===== TRAITER UNE RÉPONSE QCM =====
function traiterReponse(matiere, module, question, index) {
    const estCorrect = index === question.correct;
    
    // Désactiver tous les boutons
    document.querySelectorAll('.reponse-btn').forEach(btn => {
        btn.disabled = true;
        const btnIndex = parseInt(btn.dataset.index);
        if (btnIndex === question.correct) {
            btn.classList.add('correct');
        } else if (btnIndex === index && !estCorrect) {
            btn.classList.add('incorrect');
        }
    });
    
    if (estCorrect) {
        state.reponsesCorrectes++;
        state.etoiles++;
        lancerConfettis();
        afficherToast('✅ Bravo ! Bonne réponse ! ⭐', 'success');
    } else {
        afficherToast('❌ Oups ! Ce n\'est pas la bonne réponse.', 'error');
        if (question.aide) {
            setTimeout(() => {
                document.getElementById('aideBox').style.display = 'block';
            }, 1000);
        }
    }
    
    state.historique.push({
        module: module.id,
        question: question.question,
        correct: estCorrect,
        date: new Date().toISOString()
    });
    
    setTimeout(() => {
        state.questionActuelle++;
        if (state.questionActuelle < module.questions.length) {
            afficherQuestion(matiere, module);
        } else {
            afficherResultats(matiere, module);
        }
    }, 2000);
}

// ===== TRAITER UNE RÉPONSE SAISIE =====
function traiterReponseSaisie(matiere, module, question, estCorrect) {
    const input = document.getElementById('reponseSaisie');
    input.disabled = true;
    document.getElementById('btnValider').disabled = true;
    
    if (estCorrect) {
        state.reponsesCorrectes++;
        state.etoiles++;
        input.classList.add('correct');
        lancerConfettis();
        afficherToast('✅ Bravo ! Bonne réponse ! ⭐', 'success');
    } else {
        input.classList.add('incorrect');
        afficherToast(`❌ La bonne réponse était : "${question.reponse}"`, 'error');
        if (question.aide) {
            setTimeout(() => {
                document.getElementById('aideBox').style.display = 'block';
            }, 1000);
        }
    }
    
    state.historique.push({
        module: module.id,
        question: question.question,
        correct: estCorrect,
        date: new Date().toISOString()
    });
    
    setTimeout(() => {
        state.questionActuelle++;
        if (state.questionActuelle < module.questions.length) {
            afficherQuestion(matiere, module);
        } else {
            afficherResultats(matiere, module);
        }
    }, 2500);
}

// ===== AFFICHER LES RÉSULTATS =====
function afficherResultats(matiere, module) {
    const total = module.questions.length;
    const correct = state.reponsesCorrectes;
    const pourcentage = Math.round((correct / total) * 100);
    
    // Mettre à jour la progression
    const prog = state.progression[matiere];
    if (!prog.modulesCompletes.includes(module.id)) {
        prog.modulesCompletes.push(module.id);
    }
    prog.etoiles += correct;
    
    // Sauvegarder
    sauvegarderProgression();
    
    const app = document.getElementById('app');
    let message = '';
    let emoji = '';
    
    if (pourcentage === 100) {
        message = 'Parfait ! Tu es un(e) champion(ne) !';
        emoji = '🏆';
    } else if (pourcentage >= 75) {
        message = 'Très bien ! Continue comme ça !';
        emoji = '🌟';
    } else if (pourcentage >= 50) {
        message = 'Bien ! Tu progresses !';
        emoji = '👍';
    } else {
        message = 'Continue à t\'entraîner !';
        emoji = '💪';
    }
    
    app.innerHTML = `
        <div class="resultats-page">
            <main>
                <div class="resultats-container">
                    <div class="resultats-emoji">${emoji}</div>
                    <h2>${message}</h2>
                    
                    <div class="resultats-stats">
                        <div class="stat">
                            <span class="stat-nombre">${correct}</span>
                            <span class="stat-label">Bonnes réponses</span>
                        </div>
                        <div class="stat">
                            <span class="stat-nombre">${total}</span>
                            <span class="stat-label">Questions</span>
                        </div>
                        <div class="stat">
                            <span class="stat-nombre">${pourcentage}%</span>
                            <span class="stat-label">Réussite</span>
                        </div>
                        <div class="stat">
                            <span class="stat-nombre">+${correct}⭐</span>
                            <span class="stat-label">Étoiles gagnées</span>
                        </div>
                    </div>
                    
                    ${pourcentage < 75 && module.remediation ? `
                        <div class="remediation-box">
                            <h3>${module.remediation.titre}</h3>
                            <p>${module.remediation.texte}</p>
                        </div>
                    ` : ''}
                    
                    <div class="resultats-boutons">
                        <button class="btn-recommencer" id="btnRecommencer">🔄 Recommencer</button>
                        <button class="btn-principal" id="btnContinuer">➡️ Continuer</button>
                    </div>
                </div>
            </main>
        </div>
    `;
    
    document.getElementById('btnRecommencer').addEventListener('click', () => {
        lancerModule(matiere, module);
    });
    
    document.getElementById('btnContinuer').addEventListener('click', () => {
        afficherModules(matiere);
    });
}

// ===== DÉFI DU JOUR =====
function lancerDefi() {
    const matieres = ['francais', 'maths', 'autres'];
    const matiereAleatoire = matieres[Math.floor(Math.random() * matieres.length)];
    const data = matiereAleatoire === 'francais' ? DATA_FRANCAIS : 
                 matiereAleatoire === 'maths' ? DATA_MATHS : DATA_AUTRES;
    
    if (!data || !data.modules || data.modules.length === 0) {
        alert('Aucun module disponible pour le défi');
        return;
    }
    
    const moduleAleatoire = data.modules[Math.floor(Math.random() * data.modules.length)];
    lancerModule(matiereAleatoire, moduleAleatoire);
}

// ===== ESPACE PARENTS =====
function afficherEspaceParents() {
    const app = document.getElementById('app');
    
    const totalExercices = state.historique.length;
    const totalCorrect = state.historique.filter(h => h.correct).length;
    const tauxReussite = totalExercices > 0 ? Math.round((totalCorrect / totalExercices) * 100) : 0;
    
    app.innerHTML = `
        <div class="parents-page">
            <header class="topbar">
                <button class="btn-retour" id="btnRetourParents">← Retour</button>
                <h2>👨‍👩👧 Espace Parents</h2>
            </header>
            
            <main>
                <div class="parents-container">
                    <div class="parent-section">
                        <h3>📊 Progression de ${state.enfant || 'l\'enfant'}</h3>
                        
                        <div class="stats-parents">
                            <div class="stat-parent">
                                <span class="stat-nombre">${state.etoiles}</span>
                                <span class="stat-label">Étoiles totales</span>
                            </div>
                            <div class="stat-parent">
                                <span class="stat-nombre">${totalExercices}</span>
                                <span class="stat-label">Exercices faits</span>
                            </div>
                            <div class="stat-parent">
                                <span class="stat-nombre">${tauxReussite}%</span>
                                <span class="stat-label">Taux de réussite</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="parent-section">
                        <h3>📚 Progression par matière</h3>
                        <div class="progression-matieres">
                            <div class="prog-matiere">
                                <span>📖 Français</span>
                                <span>${state.progression.francais.modulesCompletes.length} modules</span>
                                <span>⭐ ${state.progression.francais.etoiles} étoiles</span>
                            </div>
                            <div class="prog-matiere">
                                <span>🔢 Mathématiques</span>
                                <span>${state.progression.maths.modulesCompletes.length} modules</span>
                                <span>⭐ ${state.progression.maths.etoiles} étoiles</span>
                            </div>
                            <div class="prog-matiere">
                                <span>🌍 Découverte du monde</span>
                                <span>${state.progression.autres.modulesCompletes.length} modules</span>
                                <span>⭐ ${state.progression.autres.etoiles} étoiles</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="parent-section">
                        <h3>🔧 Paramètres</h3>
                        <div class="parametres-parents">
                            <button class="btn-reset" id="btnReset">🗑️ Réinitialiser la progression</button>
                            <button class="btn-export" id="btnExport">📥 Exporter les données</button>
                        </div>
                    </div>
                    
                    <div class="parent-section info-section">
                        <h3>ℹ️ Informations</h3>
                        <p>Cette application est un outil pédagogique ludique pour les enfants de CP (6-7 ans).</p>
                        <p>Les activités ne constituent pas un diagnostic scolaire.</p>
                        <p>Pour toute question, contactez l'enseignant(e) de votre enfant.</p>
                    </div>
                </div>
            </main>
        </div>
    `;
    
    document.getElementById('btnRetourParents').addEventListener('click', () => {
        if (state.enfant && state.avatar) {
            afficherDashboard();
        } else {
            afficherAccueil();
        }
    });
    
    document.getElementById('btnReset').addEventListener('click', () => {
        if (confirm('Êtes-vous sûr(e) de vouloir réinitialiser toute la progression ?')) {
            localStorage.removeItem('kidlearn_cp_progression');
            state.progression = {
                francais: { niveau: 1, modulesCompletes: [], etoiles: 0 },
                maths: { niveau: 1, modulesCompletes: [], etoiles: 0 },
                autres: { niveau: 1, modulesCompletes: [], etoiles: 0 }
            };
            state.etoiles = 0;
            state.historique = [];
            afficherEspaceParents();
            alert('Progression réinitialisée avec succès.');
        }
    });
    
    document.getElementById('btnExport').addEventListener('click', () => {
        const data = {
            enfant: state.enfant,
            avatar: state.avatar,
            etoiles: state.etoiles,
            progression: state.progression,
            historique: state.historique,
            dateExport: new Date().toISOString()
        };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `kidlearn_cp_${state.enfant || 'enfant'}_${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
    });
}

// ===== SAUVEGARDE ET CHARGEMENT =====
function sauvegarderProgression() {
    const data = {
        enfant: state.enfant,
        avatar: state.avatar,
        etoiles: state.etoiles,
        progression: state.progression,
        historique: state.historique.slice(-100),
        dateSauvegarde: new Date().toISOString()
    };
    localStorage.setItem('kidlearn_cp_progression', JSON.stringify(data));
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
            
            if (state.enfant && state.avatar) {
                document.getElementById('nomAffiche').textContent = state.enfant;
                document.getElementById('etoilesAffiche').textContent = state.etoiles;
                document.getElementById('statsRapides').style.display = 'block';
            }
        } catch (e) {
            console.error('Erreur de chargement de la progression:', e);
        }
    }
}

// ===== EFFETS VISUELS =====
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
    toast.className = `toast toast-${type}`;
    toast.classList.add('visible');
    
    setTimeout(() => {
        toast.classList.remove('visible');
    }, 2500);
}

// ===== INITIALISATION =====
document.addEventListener('DOMContentLoaded', () => {
    if (!document.getElementById('confettiContainer')) {
        const div = document.createElement('div');
        div.id = 'confettiContainer';
        div.className = 'confetti-container';
        document.body.appendChild(div);
    }
    
    if (!document.getElementById('toast')) {
        const div = document.createElement('div');
        div.id = 'toast';
        div.className = 'toast';
        document.body.appendChild(div);
    }
    
    chargerDonnees();
});
