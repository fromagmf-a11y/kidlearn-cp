// ===== APPLICATION PRINCIPALE =====
class Application {
    constructor() {
        this.moduleCourant = null;
        this.questionIndex = 0;
        this.score = 0;
        this.reponseSelectionnee = null;
        this.categorieCourante = null;
        this.filtreNiveau = 'tous';
        
        this.init();
    }

    init() {
        // Vérifier si un enfant est déjà enregistré
        const enfant = progression.getEnfant();
        if (enfant.nom) {
            this.montrerMenu();
        }
        
        this.attacherEvenements();
        this.mettreAJourUI();
    }

    attacherEvenements() {
        // Accueil
        document.querySelectorAll('.avatar').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.avatar').forEach(b => b.classList.remove('selectionne'));
                btn.classList.add('selectionne');
            });
        });
        
        document.getElementById('btn-commencer').addEventListener('click', () => this.demarrer());
        document.getElementById('btn-parents').addEventListener('click', () => this.montrerParents());
        
        // Menu
        document.querySelectorAll('.carte-categorie').forEach(carte => {
            carte.addEventListener('click', () => {
                this.categorieCourante = carte.dataset.categorie;
                this.montrerModules();
            });
        });
        
        document.getElementById('btn-deconnexion').addEventListener('click', () => {
            this.retourAccueil();
        });
        
        // Modules
        document.getElementById('btn-retour-menu').addEventListener('click', () => this.montrerMenu());
        document.querySelectorAll('.btn-niveau').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.btn-niveau').forEach(b => b.classList.remove('actif'));
                btn.classList.add('actif');
                this.filtreNiveau = btn.dataset.niveau;
                this.afficherModules();
            });
        });
        
        // Exercice
        document.getElementById('btn-quitter').addEventListener('click', () => {
            if (confirm('Quitter l\'exercice ? Ta progression sera perdue.')) {
                this.montrerModules();
            }
        });
        document.getElementById('btn-valider').addEventListener('click', () => this.validerReponse());
        document.getElementById('btn-suivant').addEventListener('click', () => this.questionSuivante());
        document.getElementById('btn-aide').addEventListener('click', () => this.montrerAide());
        
        // Résultat
        document.getElementById('btn-refaire').addEventListener('click', () => this.refaireModule());
        document.getElementById('btn-modules').addEventListener('click', () => this.montrerModules());
        
        // Parents
        document.getElementById('btn-retour-parents').addEventListener('click', () => this.retourDepuisParents());
        document.getElementById('btn-reset').addEventListener('click', () => {
            if (progression.reinitialiser()) {
                alert('Progression réinitialisée !');
                this.retourAccueil();
            }
        });
        
        // Paramètres
        document.getElementById('param-son').addEventListener('change', (e) => {
            progression.setParametre('son', e.target.checked);
        });
        document.getElementById('param-animations').addEventListener('change', (e) => {
            progression.setParametre('animations', e.target.checked);
        });
        
        // Modal
        document.querySelector('.modal-fermer').addEventListener('click', () => {
            document.getElementById('modal-aide').classList.add('cache');
        });
    }

    demarrer() {
        const nom = document.getElementById('nom-enfant').value.trim();
        const avatarSelect = document.querySelector('.avatar.selectionne');
        
        if (!nom) {
            alert('Écris ton prénom !');
            return;
        }
        
        const avatar = avatarSelect ? avatarSelect.dataset.avatar : '🦊';
        progression.definirEnfant(nom, avatar);
        this.montrerMenu();
    }

    retourAccueil() {
        document.querySelectorAll('.ecran').forEach(e => e.classList.remove('actif'));
        document.getElementById('ecran-accueil').classList.add('actif');
        const enfant = progression.getEnfant();
        document.getElementById('nom-enfant').value = enfant.nom;
        document.querySelectorAll('.avatar').forEach(a => {
            a.classList.toggle('selectionne', a.dataset.avatar === enfant.avatar);
        });
    }

    montrerMenu() {
        document.querySelectorAll('.ecran').forEach(e => e.classList.remove('actif'));
        document.getElementById('ecran-menu').classList.add('actif');
        this.mettreAJourUI();
        this.genererDefiDuJour();
    }

    mettreAJourUI() {
        const enfant = progression.getEnfant();
        document.getElementById('avatar-affiche').textContent = enfant.avatar;
        document.getElementById('nom-affiche').textContent = enfant.nom || 'Enfant';
        document.getElementById('etoiles-total').textContent = `⭐ ${progression.getEtoiles()}`;
        document.getElementById('etoiles-menu').textContent = `⭐ ${progression.getEtoiles()}`;
        
        // Mettre à jour les progressions
        ['francais', 'maths', 'autres'].forEach(cat => {
            const pourcentage = progression.getProgressionCategorie(cat);
            document.querySelectorAll(`[data-categorie="${cat}"]`).forEach(el => {
                if (el.classList.contains('remplissage')) {
                    el.style.width = pourcentage + '%';
                } else if (el.classList.contains('pourcentage')) {
                    el.textContent = pourcentage + '%';
                }
            });
        });
        
        // Paramètres
        document.getElementById('param-son').checked = progression.getParametre('son');
        document.getElementById('param-animations').checked = progression.getParametre('animations');
    }

    genererDefiDuJour() {
        // Choisir un module aléatoire parmi ceux pas encore faits ou avec score < 100%
        const tous = [...DATA_FRANCAIS.modules, ...DATA_MATHS.modules, ...DATA_AUTRES.modules];
        const eligibles = tous.filter(m => {
            const p = progression.getModule(m.id);
            return !p || p.meilleurScore < m.questions.length;
        });
        
        const defi = eligibles.length > 0 
            ? eligibles[Math.floor(Math.random() * eligibles.length)]
            : tous[Math.floor(Math.random() * tous.length)];
        
        const conteneur = document.getElementById('defi-du-jour');
        conteneur.innerHTML = `
            <h3>${defi.icone} ${defi.titre}</h3>
            <p>${defi.description}</p>
            <p style="margin-top: 10px;"><strong>Niveau ${'⭐'.repeat(defi.niveau)}</strong></p>
        `;
        conteneur.onclick = () => {
            // Trouver la catégorie
            if (DATA_FRANCAIS.modules.find(m => m.id === defi.id)) this.categorieCourante = 'francais';
            else if (DATA_MATHS.modules.find(m => m.id === defi.id)) this.categorieCourante = 'maths';
            else this.categorieCourante = 'autres';
            this.demarrerModule(defi.id);
        };
    }

    montrerModules() {
        document.querySelectorAll('.ecran').forEach(e => e.classList.remove('actif'));
        document.getElementById('ecran-modules').classList.add('actif');
        
        const titres = {
            francais: '📖 Français',
            maths: '🔢 Mathématiques',
            autres: '🌍 Découverte du monde'
        };
        document.getElementById('titre-categorie').textContent = titres[this.categorieCourante];
        
        this.afficherModules();
    }

    afficherModules() {
        let modules;
        if (this.categorieCourante === 'francais') modules = DATA_FRANCAIS.modules;
        else if (this.categorieCourante === 'maths') modules = DATA_MATHS.modules;
        else modules = DATA_AUTRES.modules;
        
        if (this.filtreNiveau !== 'tous') {
            modules = modules.filter(m => m.niveau == this.filtreNiveau);
        }
        
        const conteneur = document.getElementById('liste-modules');
        conteneur.innerHTML = '';
        
        modules.forEach(m => {
            const p = progression.getModule(m.id);
            const etoiles = p ? '⭐'.repeat(progression.calculerEtoiles(p.meilleurScore, p.totalQuestions)) : '';
            
            const carte = document.createElement('div');
            carte.className = 'carte-module';
            carte.innerHTML = `
                <div class="icone-module">${m.icone}</div>
                <h4>${m.titre}</h4>
                <p>${m.description}</p>
                <span class="niveau-module niveau-${m.niveau}">${'⭐'.repeat(m.niveau)}</span>
                ${etoiles ? `<div class="module-etoiles">${etoiles}</div>` : ''}
            `;
            carte.addEventListener('click', () => this.demarrerModule(m.id));
            conteneur.appendChild(carte);
        });
    }

    demarrerModule(moduleId) {
        const tous = [...DATA_FRANCAIS.modules, ...DATA_MATHS.modules, ...DATA_AUTRES.modules];
        this.moduleCourant = tous.find(m => m.id === moduleId);
        
        if (!this.moduleCourant) {
            alert('Module introuvable');
            return;
        }
        
        this.questionIndex = 0;
        this.score = 0;
        this.reponseSelectionnee = null;
        
        document.querySelectorAll('.ecran').forEach(e => e.classList.remove('actif'));
        document.getElementById('ecran-exercice').classList.add('actif');
        
        document.getElementById('titre-exercice').textContent = this.moduleCourant.titre;
        const badge = document.getElementById('indicateur-niveau');
        badge.textContent = '⭐'.repeat(this.moduleCourant.niveau);
        badge.className = 'badge-niveau niveau-' + this.moduleCourant.niveau;
        document.getElementById('total-questions').textContent = this.moduleCourant.questions.length;
        
        this.afficherQuestion();
    }

    afficherQuestion() {
        const q = this.moduleCourant.questions[this.questionIndex];
        this.reponseSelectionnee = null;
        
        document.getElementById('question-courante').textContent = this.questionIndex + 1;
        document.getElementById('zone-consigne').textContent = this.moduleCourant.consigne;
        document.getElementById('zone-question').textContent = q.question;
        
        const zoneReponses = document.getElementById('zone-reponses');
        const zoneSaisie = document.getElementById('zone-saisie');
        zoneReponses.innerHTML = '';
        zoneSaisie.innerHTML = '';
        
        document.getElementById('zone-feedback').classList.add('cache');
        document.getElementById('zone-remediation').classList.add('cache');
        document.getElementById('btn-valider').classList.remove('cache');
        document.getElementById('btn-suivant').classList.add('cache');
        
        if (this.moduleCourant.type === 'qcm') {
            q.reponses.forEach((rep, i) => {
                const btn = document.createElement('button');
                btn.className = 'bouton-reponse';
                btn.textContent = rep;
                btn.addEventListener('click', () => {
                    document.querySelectorAll('.bouton-reponse').forEach(b => b.classList.remove('selectionne'));
                    btn.classList.add('selectionne');
                    this.reponseSelectionnee = i;
                });
                zoneReponses.appendChild(btn);
            });
        } else if (this.moduleCourant.type === 'saisie') {
            const input = document.createElement('input');
            input.type = 'text';
            input.maxLength = 5;
            input.placeholder = '?';
            input.addEventListener('input', (e) => {
                this.reponseSelectionnee = e.target.value.toLowerCase();
            });
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.validerReponse();
            });
            zoneSaisie.appendChild(input);
            setTimeout(() => input.focus(), 100);
        }
    }

    validerReponse() {
        if (this.reponseSelectionnee === null || this.reponseSelectionnee === '') {
            alert('Choisis une réponse !');
            return;
        }
        
        const q = this.moduleCourant.questions[this.questionIndex];
        let correct = false;
        
        if (this.moduleCourant.type === 'qcm') {
            correct = this.reponseSelectionnee === q.correct;
            const boutons = document.querySelectorAll('.bouton-reponse');
            boutons.forEach((btn, i) => {
                btn.disabled = true;
                if (i === q.correct) btn.classList.add('correct');
                else if (i === this.reponseSelectionnee && !correct) btn.classList.add('incorrect');
            });
        } else if (this.moduleCourant.type === 'saisie') {
            correct = this.reponseSelectionnee === q.reponse.toLowerCase();
        }
        
        const feedback = document.getElementById('zone-feedback');
        feedback.classList.remove('cache', 'succes', 'erreur');
        
        if (correct) {
            this.score++;
            feedback.classList.add('succes');
            feedback.innerHTML = '✅ Bravo ! Bonne réponse !';
            if (progression.getParametre('animations')) {
                this.feterReussite();
            }
        } else {
            feedback.classList.add('erreur');
            let bonneReponse = '';
            if (this.moduleCourant.type === 'qcm') {
                bonneReponse = q.reponses[q.correct];
            } else {
                bonneReponse = q.reponse;
            }
            feedback.innerHTML = `❌ La bonne réponse était : <strong>${bonneReponse}</strong>`;
            
            // Afficher remédiation
            if (this.moduleCourant.remediation) {
                const rem = document.getElementById('zone-remediation');
                rem.classList.remove('cache');
                rem.innerHTML = `
                    <h4>${this.moduleCourant.remediation.titre}</h4>
                    <p>${this.moduleCourant.remediation.texte.replace(/\n/g, '<br>')}</p>
                `;
            }
        }
        
        document.getElementById('btn-valider').classList.add('cache');
        document.getElementById('btn-suivant').classList.remove('cache');
    }

    questionSuivante() {
        this.questionIndex++;
        if (this.questionIndex >= this.moduleCourant.questions.length) {
            this.terminerModule();
        } else {
            this.afficherQuestion();
        }
    }

    terminerModule() {
        const total = this.moduleCourant.questions.length;
        const etoiles = progression.calculerEtoiles(this.score, total);
        
        progression.ajouterEtoiles(etoiles);
        progression.enregistrerResultat(
            this.moduleCourant.id,
            this.score,
            total,
            this.moduleCourant.niveau
        );
        
        // Afficher écran résultat
        document.querySelectorAll('.ecran').forEach(e => e.classList.remove('actif'));
        document.getElementById('ecran-resultat').classList.add('actif');
        
        const pourcentage = Math.round((this.score / total) * 100);
        let titre, message;
        
        if (pourcentage >= 90) {
            titre = '🏆 Excellent !';
            message = 'Tu es un(e) champion(ne) ! Continue comme ça !';
        } else if (pourcentage >= 70) {
            titre = '🎉 Très bien !';
            message = 'Bravo, tu as bien travaillé !';
        } else if (pourcentage >= 50) {
            titre = '👍 Pas mal !';
            message = 'Continue à t\'entraîner, tu vas y arriver !';
        } else {
            titre = '💪 Courage !';
            message = 'Ne te décourage pas, l\'apprentissage prend du temps. Réessaie !';
        }
        
        document.getElementById('titre-resultat').textContent = titre;
        document.getElementById('score-final').textContent = `${this.score}/${total}`;
        document.getElementById('etoiles-gagnees').textContent = '⭐'.repeat(etoiles) || '💪';
        document.getElementById('message-resultat').textContent = message;
        
        // Conseil de remédiation si score faible
        const conseil = document.getElementById('conseil-remediation');
        if (pourcentage < 60 && this.moduleCourant.remediation) {
            conseil.classList.remove('cache');
            conseil.innerHTML = `
                <h4>💡 Conseil pour progresser</h4>
                <p><strong>${this.moduleCourant.remediation.titre}</strong></p>
                <p>${this.moduleCourant.remediation.texte.replace(/\n/g, '<br>')}</p>
            `;
        } else {
            conseil.classList.add('cache');
        }
        
        if (pourcentage >= 70 && progression.getParametre('animations')) {
            this.lancerConfetti();
        }
    }

    refaireModule() {
        this.demarrerModule(this.moduleCourant.id);
    }

    montrerAide() {
        const q = this.moduleCourant.questions[this.questionIndex];
        const modal = document.getElementById('modal-aide');
        const contenu = document.getElementById('contenu-aide');
        
        let texte = q.aide || 'Relis bien la question. Prends ton temps !';
        if (this.moduleCourant.remediation) {
            texte += `<br><br><strong>${this.moduleCourant.remediation.titre}</strong><br>${this.moduleCourant.remediation.texte.replace(/\n/g, '<br>')}`;
        }
        
        contenu.innerHTML = `<p style="font-size: 1.1em; line-height: 1.6;">${texte}</p>`;
        modal.classList.remove('cache');
    }

    montrerParents() {
        document.querySelectorAll('.ecran').forEach(e => e.classList.remove('actif'));
        document.getElementById('ecran-parents').classList.add('actif');
        espaceParents.afficher();
    }

    retourDepuisParents() {
        const enfant = progression.getEnfant();
        if (enfant.nom) {
            this.montrerMenu();
        } else {
            this.retourAccueil();
        }
    }

    feterReussite() {
        // Petit effet sonore visuel
        const feedback = document.getElementById('zone-feedback');
        feedback.style.animation = 'none';
        setTimeout(() => {
            feedback.style.animation = 'pulse 0.5s';
        }, 10);
    }

    lancerConfetti() {
        const canvas = document.getElementById('confetti');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const particules = [];
        const couleurs = ['#6C63FF', '#FF6584', '#4CAF50', '#FFC107', '#FF9800'];
        
        for (let i = 0; i < 100; i++) {
            particules.push({
                x: Math.random() * canvas.width,
                y: -20,
                vx: (Math.random() - 0.5) * 4,
                vy: Math.random() * 3 + 2,
                taille: Math.random() * 8 + 4,
                couleur: couleurs[Math.floor(Math.random() * couleurs.length)],
                rotation: Math.random() * 360,
                vitesseRotation: (Math.random() - 0.5) * 10
            });
        }
        
        let frames = 0;
        const animer = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particules.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.1;
                p.rotation += p.vitesseRotation;
                
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.rotation * Math.PI / 180);
                ctx.fillStyle = p.couleur;
                ctx.fillRect(-p.taille/2, -p.taille/2, p.taille, p.taille);
                ctx.restore();
            });
            
            frames++;
            if (frames < 180) {
                requestAnimationFrame(animer);
            } else {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
        };
        
        animer();
    }
}

// Lancement de l'application
document.addEventListener('DOMContentLoaded', () => {
    new Application();
});
