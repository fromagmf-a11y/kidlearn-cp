// ===== SYSTÈME DE PROGRESSION =====
class Progression {
    constructor() {
        this.cle = 'cp_progression_v1';
        this.donnees = this.charger();
    }

    charger() {
        const data = localStorage.getItem(this.cle);
        if (data) {
            return JSON.parse(data);
        }
        return {
            enfant: { nom: '', avatar: '🦊' },
            etoiles: 0,
            modules: {},
            sessions: [],
            parametres: { son: true, animations: true },
            dateCreation: new Date().toISOString()
        };
    }

    sauvegarder() {
        localStorage.setItem(this.cle, JSON.stringify(this.donnees));
    }

    definirEnfant(nom, avatar) {
        this.donnees.enfant.nom = nom;
        this.donnees.enfant.avatar = avatar;
        this.sauvegarder();
    }

    getEnfant() {
        return this.donnees.enfant;
    }

    getEtoiles() {
        return this.donnees.etoiles;
    }

    ajouterEtoiles(n) {
        this.donnees.etoiles += n;
        this.sauvegarder();
    }

    enregistrerResultat(moduleId, score, total, niveau) {
        if (!this.donnees.modules[moduleId]) {
            this.donnees.modules[moduleId] = {
                tentatives: 0,
                meilleurScore: 0,
                dernierScore: 0,
                totalQuestions: total,
                niveau: niveau,
                dates: []
            };
        }
        
        const module = this.donnees.modules[moduleId];
        module.tentatives++;
        module.dernierScore = score;
        if (score > module.meilleurScore) {
            module.meilleurScore = score;
        }
        module.dates.push(new Date().toISOString());
        
        // Garder seulement les 10 dernières dates
        if (module.dates.length > 10) {
            module.dates = module.dates.slice(-10);
        }
        
        this.sauvegarder();
    }

    getModule(moduleId) {
        return this.donnees.modules[moduleId];
    }

    getProgressionCategorie(categorie) {
        let data;
        if (categorie === 'francais') data = DATA_FRANCAIS.modules;
        else if (categorie === 'maths') data = DATA_MATHS.modules;
        else data = DATA_AUTRES.modules;
        
        let total = 0;
        let fait = 0;
        
        data.forEach(m => {
            total++;
            if (this.donnees.modules[m.id]) {
                fait++;
            }
        });
        
        return total > 0 ? Math.round((fait / total) * 100) : 0;
    }

    getStatsGlobales() {
        const modules = Object.keys(this.donnees.modules);
        let totalTentatives = 0;
        let totalReussites = 0;
        let totalQuestions = 0;
        
        modules.forEach(id => {
            const m = this.donnees.modules[id];
            totalTentatives += m.tentatives;
            totalReussites += m.meilleurScore;
            totalQuestions += m.totalQuestions;
        });
        
        return {
            modulesJoues: modules.length,
            totalTentatives,
            totalReussites,
            totalQuestions,
            pourcentage: totalQuestions > 0 ? Math.round((totalReussites / totalQuestions) * 100) : 0
        };
    }

    getAnalyse() {
        const pointsForts = [];
        const axesAmelioration = [];
        
        Object.keys(this.donnees.modules).forEach(id => {
            const m = this.donnees.modules[id];
            const pourcentage = Math.round((m.meilleurScore / m.totalQuestions) * 100);
            const titre = this.getTitreModule(id);
            
            if (pourcentage >= 80) {
                pointsForts.push({ titre, pourcentage });
            } else if (pourcentage < 60 && m.tentatives >= 1) {
                axesAmelioration.push({ titre, pourcentage });
            }
        });
        
        pointsForts.sort((a, b) => b.pourcentage - a.pourcentage);
        axesAmelioration.sort((a, b) => a.pourcentage - b.pourcentage);
        
        return {
            pointsForts: pointsForts.slice(0, 5),
            axesAmelioration: axesAmelioration.slice(0, 5)
        };
    }

    getTitreModule(id) {
        const tous = [...DATA_FRANCAIS.modules, ...DATA_MATHS.modules, ...DATA_AUTRES.modules];
        const m = tous.find(x => x.id === id);
        return m ? m.titre : id;
    }

    getHistorique() {
        const historique = [];
        Object.keys(this.donnees.modules).forEach(id => {
            const m = this.donnees.modules[id];
            m.dates.forEach(date => {
                historique.push({
                    moduleId: id,
                    titre: this.getTitreModule(id),
                    date: new Date(date),
                    score: m.dernierScore,
                    total: m.totalQuestions
                });
            });
        });
        historique.sort((a, b) => b.date - a.date);
        return historique.slice(0, 20);
    }

    enregistrerSession(donnees) {
        this.donnees.sessions.push({
            ...donnees,
            date: new Date().toISOString()
        });
        // Garder seulement les 50 dernières sessions
        if (this.donnees.sessions.length > 50) {
            this.donnees.sessions = this.donnees.sessions.slice(-50);
        }
        this.sauvegarder();
    }

    setParametre(cle, valeur) {
        this.donnees.parametres[cle] = valeur;
        this.sauvegarder();
    }

    getParametre(cle) {
        return this.donnees.parametres[cle];
    }

    reinitialiser() {
        if (confirm('⚠️ Es-tu sûr(e) ? Toute la progression sera effacée.')) {
            localStorage.removeItem(this.cle);
            this.donnees = this.charger();
            return true;
        }
        return false;
    }

    // Calcul des étoiles gagnées selon le score
    calculerEtoiles(score, total) {
        const pourcentage = (score / total) * 100;
        if (pourcentage >= 90) return 3;
        if (pourcentage >= 70) return 2;
        if (pourcentage >= 50) return 1;
        return 0;
    }
}

// Instance globale
const progression = new Progression();
