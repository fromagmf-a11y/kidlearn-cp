// ===== KIDLEARN CP - ESPACE PARENTS =====
// Copyright (c) 2026 KidLearn. Tous droits réservés.

const ParentsManager = {
    afficher(state) {
        const totalExercices = state.historique.length;
        const totalCorrect = state.historique.filter(h => h.correct).length;
        const tauxReussite = totalExercices > 0 ? Math.round((totalCorrect / totalExercices) * 100) : 0;

        return `
            <div class="parents-page">
                <header class="topbar">
                    <button class="btn-retour" id="btnRetourParents">← Retour</button>
                    <h2>👨‍‍👧 Espace Parents</h2>
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
                                    <span> Mathématiques</span>
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
    },

    initialiser(state, callbackRetour) {
        document.getElementById('btnRetourParents').addEventListener('click', callbackRetour);
        
        document.getElementById('btnReset').addEventListener('click', () => {
            if (confirm('Réinitialiser toute la progression ?')) {
                ProgressionManager.reinitialiser();
                state.progression = {
                    francais: { niveau: 1, modulesCompletes: [], etoiles: 0 },
                    maths: { niveau: 1, modulesCompletes: [], etoiles: 0 },
                    autres: { niveau: 1, modulesCompletes: [], etoiles: 0 }
                };
                state.etoiles = 0;
                state.historique = [];
                alert('Progression réinitialisée.');
                location.reload();
            }
        });
        
        document.getElementById('btnExport').addEventListener('click', () => {
            ProgressionManager.exporter(state);
        });
    }
};
