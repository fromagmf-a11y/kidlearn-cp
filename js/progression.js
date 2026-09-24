// ===== KIDLEARN CP - PROGRESSION =====
// Copyright (c) 2026 KidLearn. Tous droits réservés.

const ProgressionManager = {
    sauvegarder(state) {
        const data = {
            enfant: state.enfant,
            avatar: state.avatar,
            etoiles: state.etoiles,
            progression: state.progression,
            historique: state.historique.slice(-100),
            dateSauvegarde: new Date().toISOString()
        };
        localStorage.setItem('kidlearn_cp_progression', JSON.stringify(data));
    },

    charger() {
        const sauvegarde = localStorage.getItem('kidlearn_cp_progression');
        if (sauvegarde) {
            try {
                return JSON.parse(sauvegarde);
            } catch (e) {
                console.error('Erreur chargement progression:', e);
                return null;
            }
        }
        return null;
    },

    reinitialiser() {
        localStorage.removeItem('kidlearn_cp_progression');
    },

    exporter(state) {
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
    }
};
