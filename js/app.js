// ===== KIDLEARN CP - APPLICATION PRINCIPALE =====
// Copyright (c) 2026 KidLearn. Tous droits réservés.

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

const avatars = ['', '🐼', '🦄', '🐸', '🐵', '🐰'];

function afficherAccueil() {
    const app = document.getElementById('app');
    if (!app) { console.error('❌ #app non trouvé'); return; }
    
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
                <button class="btn-principal" id="btnCommencer" disabled>🚀 C'est parti !</button>
                <button class="btn-secondaire" id="btnParents">👨👩‍👧 Espace Parents</button>
            </div>
        </div>
    `;
    
    document.querySelectorAll('.avatar-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.avatar-btn').forEach(b => b.classList.remove('actif'));
            btn.classList.add('actif');
            state.avatar = btn.dataset.avatar;
            verifierDemarrage();
        });
    });
    
    document.getElementById('nomEnfant').addEventListener('input', (e) => {
        state.enfant = e.target.value.trim();
        verifierDemarrage();
    });
    
    document.getElementById('btnCommencer').addEventListener('click', afficherDashboard);
    document.getElementById('btnParents').addEventListener('click', afficherEspaceParents);
    chargerProgression();
}

function verifierDemarrage() {
    const btn = document.getElementById('btnCommencer');
    if (btn) btn.disabled = !(state.avatar && state.enfant);
}

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
                        const total = m.data ? m.data.modules.length : 0;
                        const completes = prog.modulesCompletes.length;
                        const pct = total > 0 ? Math.round((completes / total) * 100) : 0;
                        return `
                            <div class="matiere-card" data-matiere="${m.id}">
                                <div class="matiere-icone">${m.icone}</div>
                                <h3>${m.titre}</h3>
                                <p>${m.desc}</p>
                                <div class="progression-barre"><div class="progression-remplie" style="width:${pct}%"></div></div>
                                <span class="progression-texte">${pct}%</span>
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
    
    document.querySelectorAll('.matiere-card').forEach(card => {
        card.addEventListener('click', () => afficherModules(card.dataset.matiere));
    });
    document.getElementById('parentBtn').addEventListener('click', afficherEspaceParents);
    document.getElementById('btnDefi').addEventListener('click', lancerDefi);
}

function afficherModules(matiere) {
    const data = matiere === 'francais' ? window.DATA_FRANCAIS : matiere === 'maths' ? window.DATA_MATHS : window.DATA_AUTRES;
    if (!data || !data.modules) { alert('Données non disponibles'); return; }
    
    const app = document.getElementById('app');
    const prog = state.progression[matiere];
    const titre = matiere === 'francais' ? '📖 Français' : matiere === 'maths' ? '🔢 Mathématiques' : '🌍 Découverte du monde';
    
    app.innerHTML = `
        <div class="modules-page">
            <header class="topbar">
                <button class="btn-retour" id="btnRetour">← Retour</button>
                <div class="topbar-stats">${state.avatar} ${state.enfant} ⭐ ${state.etoiles}</div>
            </header>
            <main>
                <h2>${titre}</h2>
                <div class="filtres-niveau">
                    <button class="filtre-btn actif" data-niveau="tous">Tous</button>
                    <button class="filtre-btn" data-niveau="1">⭐ Facile</button>
                    <button class="filtre-btn" data-niveau="2">⭐⭐ Moyen</button>
                    <button class="filtre-btn" data-niveau="3">⭐⭐⭐ Difficile</button>
                </div>
                <div class="modules-liste">
                    ${data.modules.map(mod => {
                        const complete = prog.modulesCompletes.includes(mod.id);
                        return `
                            <div class="module-card ${complete ? 'complete' : ''}" data-module="${mod.id}" data-niveau="${mod.niveau}">
                                <div class="module-icone">${mod.icone}</div>
                                <div class="module-info">
                                    <h3>${mod.titre}</h3>
                                    <p>${mod.description}</p>
                                    <div class="module-niveau">${'⭐'.repeat(mod.niveau)}</div>
                                </div>
                                ${complete ? '<div class="badge-complete">✅</div>' : ''}
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
            const n = btn.dataset.niveau;
            document.querySelectorAll('.module-card').forEach(c => {
                c.style.display = (n === 'tous' || c.dataset.niveau === n) ? 'flex' : 'none';
            });
        });
    });
    document.querySelectorAll('.module-card').forEach(card => {
        card.addEventListener('click', () => {
            const mod = data.modules.find(m => m.id === card.dataset.module);
            if (mod) lancerModule(matiere, mod);
        });
    });
}

function lancerModule(matiere, module) {
    state.moduleActuel = module;
    state.questionActuelle = 0;
    state.reponsesCorrectes = 0;
    afficherQuestion(matiere, module);
}

function afficherQuestion(matiere, module) {
    const q = module.questions[state.questionActuelle];
    const total = module.questions.length;
    const num = state.questionActuelle + 1;
    const app = document.getElementById('app');
    
    if (module.type === 'qcm') {
        app.innerHTML = `
            <div class="question-page">
                <header class="topbar">
                    <button class="btn-retour" id="btnQuitter">✕ Quitter</button>
                    <div class="progression-question">${num} / ${total}</div>
                    <div class="topbar-stats">⭐ ${state.etoiles}</div>
                </header>
                <main>
                    <div class="question-container">
                        <div class="question-consigne">${module.consigne}</div>
                        <h2 class="question-texte">${q.question}</h2>
                        <div class="reponses-grid">
                            ${q.reponses.map((r, i) => `<button class="reponse-btn" data-index="${i}">${r}</button>`).join('')}
                        </div>
                        <div class="question-aide" id="aideBox" style="display:none;"><p> ${q.aide || ''}</p></div>
                    </div>
                </main>
            </div>
        `;
        document.querySelectorAll('.reponse-btn').forEach(btn => {
            btn.addEventListener('click', () => traiterReponse(matiere, module, q, parseInt(btn.dataset.index)));
        });
        document.getElementById('btnQuitter').addEventListener('click', () => {
            if (confirm('Quitter ?')) afficherModules(matiere);
        });
    } else if (module.type === 'saisie') {
        app.innerHTML = `
            <div class="question-page">
                <header class="topbar">
                    <button class="btn-retour" id="btnQuitter">✕ Quitter</button>
                    <div class="progression-question">${num} / ${total}</div>
                    <div class="topbar-stats">⭐ ${state.etoiles}</div>
                </header>
                <main>
                    <div class="question-container">
                        <div class="question-consigne">${module.consigne}</div>
                        <h2 class="question-texte">${q.question}</h2>
                        <div class="saisie-container">
                            <input type="text" id="reponseSaisie" maxlength="10" autocomplete="off">
                            <button class="btn-valider" id="btnValider">Valider</button>
                        </div>
                        <div class="question-aide" id="aideBox" style="display:none;"><p>💡 ${q.aide || ''}</p></div>
                    </div>
                </main>
            </div>
        `;
        document.getElementById('btnValider').addEventListener('click', () => {
            const rep = document.getElementById('reponseSaisie').value.trim().toLowerCase();
            const ok = rep === q.reponse.toLowerCase();
            traiterReponseSaisie(matiere, module, q, ok);
        });
        document.getElementById('reponseSaisie').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') document.getElementById('btnValider').click();
        });
        document.getElementById('btnQuitter').addEventListener('click', () => {
            if (confirm('Quitter ?')) afficherModules(matiere);
        });
    }
}

function traiterReponse(matiere, module, q, index) {
    const ok = index === q.correct;
    document.querySelectorAll('.reponse-btn').forEach(btn => {
        btn.disabled = true;
        const i = parseInt(btn.dataset.index);
        if (i === q.correct) btn.classList.add('correct');
        else if (i === index && !ok) btn.classList.add('incorrect');
    });
    if (ok) {
        state.reponsesCorrectes++;
        state.etoiles++;
        lancerConfettis();
        afficherToast('✅ Bravo ! ', 'success');
    } else {
        afficherToast('❌ Oups !', 'error');
        if (q.aide) setTimeout(() => { const b = document.getElementById('aideBox'); if (b) b.style.display = 'block'; }, 1000);
    }
    state.historique.push({ module: module.id, question: q.question, correct: ok, date: new Date().toISOString() });
    setTimeout(() => {
        state.questionActuelle++;
        if (state.questionActuelle < module.questions.length) afficherQuestion(matiere, module);
        else afficherResultats(matiere, module);
    }, 2000);
}

function traiterReponseSaisie(matiere, module, q, ok) {
    const input = document.getElementById('reponseSaisie');
    input.disabled = true;
    document.getElementById('btnValider').disabled = true;
    if (ok) {
        state.reponsesCorrectes++;
        state.etoiles++;
        input.classList.add('correct');
        lancerConfettis();
        afficherToast('✅ Bravo ! ⭐', 'success');
    } else {
        input.classList.add('incorrect');
        afficherToast(`❌ Réponse : "${q.reponse}"`, 'error');
    }
    state.historique.push({ module: module.id, question: q.question, correct: ok, date: new Date().toISOString() });
    setTimeout(() => {
        state.questionActuelle++;
        if (state.questionActuelle < module.questions.length) afficherQuestion(matiere, module);
        else afficherResultats(matiere, module);
    }, 2500);
}

function afficherResultats(matiere, module) {
    const total = module.questions.length;
    const correct = state.reponsesCorrectes;
    const pct = Math.round((correct / total) * 100);
    const prog = state.progression[matiere];
    if (!prog.modulesCompletes.includes(module.id)) prog.modulesCompletes.push(module.id);
    prog.etoiles += correct;
    sauvegarderProgression();
    
    const emoji = pct === 100 ? '🏆' : pct >= 75 ? '🌟' : pct >= 50 ? '👍' : '💪';
    const msg = pct === 100 ? 'Parfait !' : pct >= 75 ? 'Très bien !' : pct >= 50 ? 'Bien !' : 'Continue !';
    
    document.getElementById('app').innerHTML = `
        <div class="resultats-page"><main><div class="resultats-container">
            <div class="resultats-emoji">${emoji}</div>
            <h2>${msg}</h2>
            <div class="resultats-stats">
                <div class="stat"><span class="stat-nombre">${correct}</span><span class="stat-label">Bonnes réponses</span></div>
                <div class="stat"><span class="stat-nombre">${total}</span><span class="stat-label">Questions</span></div>
                <div class="stat"><span class="stat-nombre">${pct}%</span><span class="stat-label">Réussite</span></div>
                <div class="stat"><span class="stat-nombre">+${correct}⭐</span><span class="stat-label">Étoiles</span></div>
            </div>
            ${pct < 75 && module.remediation ? `<div class="remediation-box"><h3>${module.remediation.titre}</h3><p>${module.remediation.texte}</p></div>` : ''}
            <div class="resultats-boutons">
                <button class="btn-recommencer" id="btnRecommencer">🔄 Recommencer</button>
                <button class="btn-principal" id="btnContinuer">➡️ Continuer</button>
            </div>
        </div></main></div>
    `;
    document.getElementById('btnRecommencer').addEventListener('click', () => lancerModule(matiere, module));
    document.getElementById('btnContinuer').addEventListener('click', () => afficherModules(matiere));
}

function lancerDefi() {
    const mats = ['francais', 'maths', 'autres'];
    const m = mats[Math.floor(Math.random() * mats.length)];
    const d = m === 'francais' ? window.DATA_FRANCAIS : m === 'maths' ? window.DATA_MATHS : window.DATA_AUTRES;
    if (d && d.modules.length > 0) lancerModule(m, d.modules[Math.floor(Math.random() * d.modules.length)]);
}

function afficherEspaceParents() {
    const total = state.historique.length;
    const ok = state.historique.filter(h => h.correct).length;
    const taux = total > 0 ? Math.round((ok / total) * 100) : 0;
    
    document.getElementById('app').innerHTML = `
        <div class="parents-page">
            <header class="topbar">
                <button class="btn-retour" id="btnRetourParents">← Retour</button>
                <h2>👨‍👩‍👧 Espace Parents</h2>
            </header>
            <main><div class="parents-container">
                <div class="parent-section">
                    <h3> Progression de ${state.enfant || 'l\'enfant'}</h3>
                    <div class="stats-parents">
                        <div class="stat-parent"><span class="stat-nombre">${state.etoiles}</span><span class="stat-label">Étoiles</span></div>
                        <div class="stat-parent"><span class="stat-nombre">${total}</span><span class="stat-label">Exercices</span></div>
                        <div class="stat-parent"><span class="stat-nombre">${taux}%</span><span class="stat-label">Réussite</span></div>
                    </div>
                </div>
                <div class="parent-section">
                    <h3>📚 Par matière</h3>
                    <div class="prog-matiere"><span>📖 Français</span><span>${state.progression.francais.modulesCompletes.length} modules</span><span>⭐ ${state.progression.francais.etoiles}</span></div>
                    <div class="prog-matiere"><span> Maths</span><span>${state.progression.maths.modulesCompletes.length} modules</span><span>⭐ ${state.progression.maths.etoiles}</span></div>
                    <div class="prog-matiere"><span>🌍 Découverte</span><span>${state.progression.autres.modulesCompletes.length} modules</span><span>⭐ ${state.progression.autres.etoiles}</span></div>
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
            </div></main>
        </div>
    `;
    document.getElementById('btnRetourParents').addEventListener('click', () => {
        if (state.enfant && state.avatar) afficherDashboard(); else afficherAccueil();
    });
    document.getElementById('btnReset').addEventListener('click', () => {
        if (confirm('Réinitialiser ?')) {
            localStorage.removeItem('kidlearn_cp_progression');
            state.progression = { francais: { niveau: 1, modulesCompletes: [], etoiles: 0 }, maths: { niveau: 1, modulesCompletes: [], etoiles: 0 }, autres: { niveau: 1, modulesCompletes: [], etoiles: 0 } };
            state.etoiles = 0; state.historique = [];
            location.reload();
        }
    });
    document.getElementById('btnExport').addEventListener('click', () => {
        const d = { enfant: state.enfant, avatar: state.avatar, etoiles: state.etoiles, progression: state.progression, historique: state.historique, dateExport: new Date().toISOString() };
        const blob = new Blob([JSON.stringify(d, null, 2)], { type: 'application/json' });
        const a = document.createElement('a'); a.href = URL.createObjectURL(blob);
        a.download = `kidlearn_cp_${state.enfant || 'enfant'}_${new Date().toISOString().split('T')[0]}.json`; a.click();
    });
}

function sauvegarderProgression() {
    localStorage.setItem('kidlearn_cp_progression', JSON.stringify({
        enfant: state.enfant, avatar: state.avatar, etoiles: state.etoiles,
        progression: state.progression, historique: state.historique.slice(-100),
        dateSauvegarde: new Date().toISOString()
    }));
}

function chargerProgression() {
    const s = localStorage.getItem('kidlearn_cp_progression');
    if (s) {
        try {
            const d = JSON.parse(s);
            state.enfant = d.enfant || null; state.avatar = d.avatar || null;
            state.etoiles = d.etoiles || 0;
            state.progression = d.progression || state.progression;
            state.historique = d.historique || [];
        } catch (e) { console.error(e); }
    }
}

function lancerConfettis() {
    const c = document.getElementById('confettiContainer');
    if (!c) return;
    
    // 🎊 Confettis visuels
    const cols = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#FFD93D', '#6BCB77'];
    for (let i = 0; i < 30; i++) {
        const d = document.createElement('div');
        d.className = 'confetti';
        d.style.left = Math.random() * 100 + '%';
        d.style.backgroundColor = cols[Math.floor(Math.random() * cols.length)];
        d.style.animationDelay = Math.random() * 0.5 + 's';
        d.style.animationDuration = (Math.random() * 2 + 1) + 's';
        c.appendChild(d);
        setTimeout(() => d.remove(), 3000);
    }
    
    //  Son d'applaudissements / fanfare
    jouerSonBravo();
}

function jouerSonBravo() {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        
        const ctx = new AudioContext();
        
        // Fanfare joyeuse : Do, Mi, Sol, Do aigu
        const notes = [523.25, 659.25, 783.99, 1046.50];
        const duree = 0.15;
        
        notes.forEach((freq, index) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            
            osc.type = 'sine';
            osc.frequency.value = freq;
            
            gain.gain.setValueAtTime(0.3, ctx.currentTime + index * duree);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + index * duree + duree);
            
            osc.connect(gain);
            gain.connect(ctx.destination);
            
            osc.start(ctx.currentTime + index * duree);
            osc.stop(ctx.currentTime + index * duree + duree);
        });
        
        // Applaudissements (bruit blanc court)
        setTimeout(() => {
            const bufferSize = ctx.sampleRate * 0.5;
            const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
            const data = buffer.getChannelData(0);
            
            for (let i = 0; i < bufferSize; i++) {
                data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufferSize, 2);
            }
            
            const noise = ctx.createBufferSource();
            noise.buffer = buffer;
            
            const noiseGain = ctx.createGain();
            noiseGain.gain.value = 0.2;
            
            const filter = ctx.createBiquadFilter();
            filter.type = 'highpass';
            filter.frequency.value = 1000;
            
            noise.connect(filter);
            filter.connect(noiseGain);
            noiseGain.connect(ctx.destination);
            noise.start();
        }, 600);
        
    } catch (e) {
        console.log('Son non disponible:', e);
    }
}
function afficherToast(msg, type) {
    const t = document.getElementById('toast'); if (!t) return;
    t.textContent = msg; t.className = `toast toast-${type} visible`;
    setTimeout(() => t.classList.remove('visible'), 2500);
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ DOM chargé');
    console.log('DATA_FRANCAIS:', window.DATA_FRANCAIS);
    console.log('DATA_MATHS:', window.DATA_MATHS);
    console.log('DATA_AUTRES:', window.DATA_AUTRES);
    afficherAccueil();
});
