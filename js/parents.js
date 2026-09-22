// ===== ESPACE PARENTS =====
class EspaceParents {
    constructor() {
        this.conseils = this.genererConseils();
    }

    genererConseils() {
        return {
            general: [
                {
                    titre: '📅 Régularité',
                    texte: 'Privilégiez des sessions courtes (15-20 min) mais régulières plutôt que de longues sessions espacées.'
                },
                {
                    titre: '🎉 Valorisation',
                    texte: 'Félicitez les efforts, pas seulement les résultats. L\'erreur fait partie de l\'apprentissage.'
                },
                {
                    titre: '🤝 Accompagnement',
                    titre: 'Présence',
                    texte: 'Restez à proximité les premières fois, puis laissez votre enfant gagner en autonomie.'
                },
                {
                    titre: '🎮 Ludique',
                    texte: 'Transformez l\'apprentissage en jeu. Posez des questions dans la vie quotidienne (compter les courses, lire les panneaux...).'
                }
            ],
            francais: [
                {
                    titre: '📚 Lecture quotidienne',
                    texte: 'Lisez ensemble 10-15 minutes par jour. Alternez : vous lisez, puis votre enfant.'
                },
                {
                    titre: '🔤 Jeux de syllabes',
                    texte: 'Jouez à trouver des mots qui commencent par la même syllabe : "ma-man, ma-ri-nette, ma-gi-que".'
                },
                {
                    titre: '📖 Bibliothèque',
                    texte: 'Emmenez votre enfant à la bibliothèque. Le laisser choisir ses livres augmente sa motivation.'
                },
                {
                    titre: '✍️ Écriture',
                    texte: 'Faites écrire des petits mots : liste de courses, carte à mamie, message au papa.'
                }
            ],
            maths: [
                {
                    titre: '🔢 Compter au quotidien',
                    texte: 'Comptez les marches, les pommes, les voitures... Intégrez les maths dans la vie de tous les jours.'
                },
                {
                    titre: '🛒 Courses',
                    texte: 'Faites participer votre enfant aux courses : "Prends 3 pommes", "On a besoin de 2 yaourts".'
                },
                {
                    titre: '🎲 Jeux de société',
                    texte: 'Les jeux de dés, dominos, cartes sont excellents pour le calcul mental.'
                },
                {
                    titre: '📏 Mesures',
                    texte: 'Cuisinez ensemble : peser, mesurer, compter les œufs... La cuisine est une excellente école de maths !'
                }
            ],
            difficulte: [
                {
                    titre: '🎯 Niveau adapté',
                    texte: 'Si votre enfant échoue souvent, revenez au niveau inférieur. La réussite motive à continuer.'
                },
                {
                    titre: '💪 Patience',
                    texte: 'Chaque enfant a son rythme. Ne comparez pas avec les autres. Encouragez les progrès, même petits.'
                },
                {
                    titre: '🔄 Révisions',
                    texte: 'Revenez régulièrement sur les notions vues. La répétition espacée est la clé de la mémorisation.'
                },
                {
                    titre: '🗣️ Communication',
                    texte: 'Si les difficultés persistent, parlez-en avec l\'enseignant(e). Un regard extérieur peut aider.'
                }
            ],
            motivation: [
                {
                    titre: '🏆 Récompenses',
                    texte: 'Mettez en place un système de récompenses non matérielles : temps de jeu supplémentaire, sortie au parc, choix du repas.'
                },
                {
                    titre: '🎯 Objectifs',
                    texte: 'Fixez des petits objectifs atteignables : "Cette semaine, on apprend à lire les syllabes en -a-".'
                },
                {
                    titre: '👨‍👩‍👧 Modèle',
                    texte: 'Montrez que vous aimez apprendre ! Lisez devant votre enfant, parlez de ce que vous apprenez.'
                },
                {
                    titre: '🎉 Célébrations',
                    texte: 'Fêtez les réussites : "Bravo, tu as appris à lire ce mot tout seul !". La fierté motive à continuer.'
                }
            ]
        };
    }

    afficher() {
        const enfant = progression.getEnfant();
        document.getElementById('parent-nom-enfant').textContent = enfant.nom || 'votre enfant';
        
        this.afficherStats();
        this.afficherAnalyse();
        this.afficherConseils();
        this.afficherHistorique();
    }

    afficherStats() {
        const stats = progression.getStatsGlobales();
        const conteneur = document.getElementById('stats-parents');
        
        conteneur.innerHTML = `
            <div class="stat-carte">
                <div class="stat-valeur">${stats.modulesJoues}</div>
                <div class="stat-label">Modules joués</div>
            </div>
            <div class="stat-carte">
                <div class="stat-valeur">${stats.totalTentatives}</div>
                <div class="stat-label">Tentatives totales</div>
            </div>
            <div class="stat-carte">
                <div class="stat-valeur">${stats.pourcentage}%</div>
                <div class="stat-label">Taux de réussite</div>
            </div>
            <div class="stat-carte">
                <div class="stat-valeur">⭐ ${progression.getEtoiles()}</div>
                <div class="stat-label">Étoiles gagnées</div>
            </div>
        `;
    }

    afficherAnalyse() {
        const analyse = progression.getAnalyse();
        const conteneur = document.getElementById('analyse-parents');
        
        let html = '<div class="analyse-parents">';
        
        // Points forts
        html += '<div class="colonne-analyse points-forts">';
        html += '<h4>✅ Points forts</h4>';
        if (analyse.pointsForts.length === 0) {
            html += '<p>Continuez les exercices pour voir les points forts apparaître !</p>';
        } else {
            html += '<ul>';
            analyse.pointsForts.forEach(p => {
                html += `<li><strong>${p.titre}</strong> - ${p.pourcentage}% de réussite</li>`;
            });
            html += '</ul>';
        }
        html += '</div>';
        
        // Axes d'amélioration
        html += '<div class="colonne-analyse axes-amelioration">';
        html += '<h4>🎯 À travailler</h4>';
        if (analyse.axesAmelioration.length === 0) {
            html += '<p>Aucune difficulté détectée pour le moment. Bravo !</p>';
        } else {
            html += '<ul>';
            analyse.axesAmelioration.forEach(a => {
                html += `<li><strong>${a.titre}</strong> - ${a.pourcentage}% de réussite</li>`;
            });
            html += '</ul>';
        }
        html += '</div>';
        
        html += '</div>';
        conteneur.innerHTML = html;
    }

    afficherConseils() {
        const conteneur = document.getElementById('conseils-parents');
        const analyse = progression.getAnalyse();
        
        let conseilsAAfficher = [...this.conseils.general];
        
        // Ajouter conseils spécifiques selon les difficultés
        if (analyse.axesAmelioration.length > 0) {
            const titres = analyse.axesAmelioration.map(a => a.titre).join(' ').toLowerCase();
            
            if (titres.includes('français') || titres.includes('lecture') || titres.includes('orthographe')) {
                conseilsAAfficher = conseilsAAfficher.concat(this.conseils.francais.slice(0, 2));
            }
            if (titres.includes('math') || titres.includes('nombre') || titres.includes('calcul')) {
                conseilsAAfficher = conseilsAAfficher.concat(this.conseils.maths.slice(0, 2));
            }
            
            conseilsAAfficher = conseilsAAfficher.concat(this.conseils.difficulte.slice(0, 2));
        } else {
            conseilsAAfficher = conseilsAAfficher.concat(this.conseils.motivation.slice(0, 2));
        }
        
        let html = '';
        conseilsAAfficher.forEach(c => {
            html += `
                <div class="conseil-carte">
                    <h4>${c.titre}</h4>
                    <p>${c.texte}</p>
                </div>
            `;
        });
        
        conteneur.innerHTML = html;
    }

    afficherHistorique() {
        const historique = progression.getHistorique();
        const conteneur = document.getElementById('historique-parents');
        
        if (historique.length === 0) {
            conteneur.innerHTML = '<p>Aucune session enregistrée pour le moment.</p>';
            return;
        }
        
        let html = '';
        historique.forEach(h => {
            const date = h.date.toLocaleDateString('fr-FR', { 
                day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit'
            });
            const pourcentage = Math.round((h.score / h.total) * 100);
            
            html += `
                <div class="session-historique">
                    <div>
                        <strong>${h.titre}</strong><br>
                        <small>${date}</small>
                    </div>
                    <div style="text-align: right;">
                        <strong>${h.score}/${h.total}</strong> (${pourcentage}%)
                    </div>
                </div>
            `;
        });
        
        conteneur.innerHTML = html;
    }
}

const espaceParents = new EspaceParents();
