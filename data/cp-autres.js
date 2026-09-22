// ===== DONNÉES DÉCOUVERTE DU MONDE =====
const DATA_AUTRES = {
    modules: [
        // ===== SAISONS =====
        {
            id: 'autres-saisons',
            titre: 'Les 4 saisons',
            description: 'Reconnais le printemps, l\'été, l\'automne, l\'hiver',
            icone: '🌸',
            niveau: 1,
            type: 'qcm',
            consigne: 'À quelle saison ?',
            questions: [
                { question: 'Quand les feuilles tombent-elles ?', reponses: ['Printemps', 'Été', 'Automne', 'Hiver'], correct: 2 },
                { question: 'Quand fait-il le plus chaud ?', reponses: ['Printemps', 'Été', 'Automne', 'Hiver'], correct: 1 },
                { question: 'Quand neige-t-il souvent ?', reponses: ['Printemps', 'Été', 'Automne', 'Hiver'], correct: 3 },
                { question: 'Quand les fleurs poussent-elles ?', reponses: ['Printemps', 'Été', 'Automne', 'Hiver'], correct: 0 },
                { question: 'Combien y a-t-il de saisons ?', reponses: ['2', '3', '4', '5'], correct: 2 },
                { question: 'Quelle saison vient après l\'hiver ?', reponses: ['Printemps', 'Été', 'Automne', 'Hiver'], correct: 0 },
                { question: 'À Noël, c\'est quelle saison ?', reponses: ['Printemps', 'Été', 'Automne', 'Hiver'], correct: 3 },
                { question: 'Quand va-t-on à la plage ?', reponses: ['Printemps', 'Été', 'Automne', 'Hiver'], correct: 1 }
            ],
            remediation: {
                titre: '💡 Les 4 saisons',
                texte: '• Printemps : fleurs, il fait doux\n• Été : chaud, vacances\n• Automne : feuilles qui tombent\n• Hiver : froid, neige'
            }
        },

        // ===== JOURS DE LA SEMAINE =====
        {
            id: 'autres-jours',
            titre: 'Les jours de la semaine',
            description: 'Lundi, mardi, mercredi...',
            icone: '📅',
            niveau: 1,
            type: 'qcm',
            consigne: 'Quel jour ?',
            questions: [
                { question: 'Quel jour vient après lundi ?', reponses: ['dimanche', 'mardi', 'mercredi', 'jeudi'], correct: 1 },
                { question: 'Quel jour vient avant vendredi ?', reponses: ['mercredi', 'jeudi', 'samedi', 'lundi'], correct: 1 },
                { question: 'Combien de jours dans une semaine ?', reponses: ['5', '6', '7', '8'], correct: 2 },
                { question: 'Quel est le premier jour de la semaine ?', reponses: ['lundi', 'dimanche', 'mardi', 'samedi'], correct: 0 },
                { question: 'Quel est le dernier jour de la semaine ?', reponses: ['vendredi', 'samedi', 'dimanche', 'lundi'], correct: 2 },
                { question: 'Quel jour est entre mercredi et vendredi ?', reponses: ['mardi', 'jeudi', 'samedi', 'lundi'], correct: 1 },
                { question: 'Quel jour est le weekend ?', reponses: ['lundi', 'mercredi', 'samedi', 'jeudi'], correct: 2 },
                { question: 'Aujourd\'hui c\'est mardi. Demain ce sera...', reponses: ['lundi', 'mercredi', 'jeudi', 'vendredi'], correct: 1 }
            ],
            remediation: {
                titre: '💡 Les jours de la semaine',
                texte: 'Lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche. Chante-les en rythme !'
            }
        },

        // ===== MOIS DE L'ANNÉE =====
        {
            id: 'autres-mois',
            titre: 'Les mois de l\'année',
            description: 'Janvier, février, mars...',
            icone: '🗓️',
            niveau: 2,
            type: 'qcm',
            consigne: 'Quel mois ?',
            questions: [
                { question: 'Quel est le premier mois de l\'année ?', reponses: ['janvier', 'février', 'décembre', 'mars'], correct: 0 },
                { question: 'Quel est le dernier mois de l\'année ?', reponses: ['novembre', 'décembre', 'janvier', 'octobre'], correct: 1 },
                { question: 'Combien de mois dans une année ?', reponses: ['10', '11', '12', '13'], correct: 2 },
                { question: 'Quel mois vient après mars ?', reponses: ['février', 'avril', 'mai', 'juin'], correct: 1 },
                { question: 'En quel mois est Noël ?', reponses: ['novembre', 'décembre', 'janvier', 'octobre'], correct: 1 },
                { question: 'En quel mois commence l\'été ?', reponses: ['mai', 'juin', 'juillet', 'août'], correct: 1 },
                { question: 'Quel mois vient entre mai et juillet ?', reponses: ['avril', 'juin', 'août', 'septembre'], correct: 1 },
                { question: 'Combien de jours en janvier ?', reponses: ['28', '30', '31', '32'], correct: 2 }
            ],
            remediation: {
                titre: '💡 Les mois de l\'année',
                texte: 'Janvier, février, mars, avril, mai, juin, juillet, août, septembre, octobre, novembre, décembre.'
            }
        },

        // ===== CORPS HUMAIN =====
        {
            id: 'autres-corps',
            titre: 'Le corps humain',
            description: 'Les parties du corps et les 5 sens',
            icone: '🧍',
            niveau: 1,
            type: 'qcm',
            consigne: 'Choisis la bonne réponse',
            questions: [
                { question: 'Avec quoi voit-on ?', reponses: ['les oreilles', 'les yeux', 'le nez', 'la bouche'], correct: 1 },
                { question: 'Avec quoi entend-on ?', reponses: ['les yeux', 'les oreilles', 'le nez', 'les mains'], correct: 1 },
                { question: 'Avec quoi sent-on les odeurs ?', reponses: ['les yeux', 'les oreilles', 'le nez', 'la bouche'], correct: 2 },
                { question: 'Avec quoi goûte-t-on ?', reponses: ['le nez', 'la langue', 'les yeux', 'les oreilles'], correct: 1 },
                { question: 'Avec quoi touche-t-on ?', reponses: ['les yeux', 'les mains', 'le nez', 'la bouche'], correct: 1 },
                { question: 'Combien de sens a-t-on ?', reponses: ['3', '4', '5', '6'], correct: 2 },
                { question: 'Combien de jambes a-t-on ?', reponses: ['1', '2', '3', '4'], correct: 1 },
                { question: 'Combien de doigts par main ?', reponses: ['3', '4', '5', '6'], correct: 2 }
            ],
            remediation: {
                titre: '💡 Les 5 sens',
                texte: '• Vue : les yeux\n• Ouïe : les oreilles\n• Odorat : le nez\n• Goût : la langue\n• Toucher : la peau'
            }
        },

        // ===== ANIMAUX - MILIEUX =====
        {
            id: 'autres-animaux',
            titre: 'Les animaux et leur milieu',
            description: 'Forêt, mer, campagne, ville',
            icone: '🦁',
            niveau: 2,
            type: 'qcm',
            consigne: 'Où vit cet animal ?',
            questions: [
                { question: 'Où vit le poisson ?', reponses: ['Forêt', 'Mer', 'Désert', 'Montagne'], correct: 1 },
                { question: 'Où vit l\'ours ?', reponses: ['Mer', 'Forêt', 'Désert', 'Ville'], correct: 1 },
                { question: 'Où vit le chameau ?', reponses: ['Forêt', 'Mer', 'Désert', 'Montagne'], correct: 2 },
                { question: 'Où vit le pingouin ?', reposes: ['Désert', 'Pôle Nord', 'Forêt', 'Jungle'], correct: 1, reponses: ['Désert', 'Pôle Nord', 'Forêt', 'Jungle'] },
                { question: 'Où vit le lion ?', reponses: ['Mer', 'Savane', 'Pôle', 'Forêt'], correct: 1 },
                { question: 'Où vit la vache ?', reponses: ['Mer', 'Campagne', 'Désert', 'Pôle'], correct: 1 },
                { question: 'Où vit le pigeon ?', reponses: ['Mer', 'Forêt', 'Ville', 'Désert'], correct: 2 },
                { question: 'Où vit le singe ?', reponses: ['Mer', 'Jungle', 'Désert', 'Pôle'], correct: 1 }
            ],
            remediation: {
                titre: '💡 Les milieux de vie',
                texte: 'Chaque animal vit dans un milieu adapté : poisson dans l\'eau, ours dans la forêt, chameau dans le désert...'
            }
        },

        // ===== MATIÈRES =====
        {
            id: 'autres-matieres',
            titre: 'Les matières',
            description: 'Bois, métal, plastique, tissu...',
            icone: '🧱',
            niveau: 2,
            type: 'qcm',
            consigne: 'De quoi c\'est fait ?',
            questions: [
                { question: 'Une chaise est souvent en...', reponses: ['verre', 'bois', 'tissu', 'papier'], correct: 1 },
                { question: 'Un pull est en...', reponses: ['métal', 'bois', 'tissu', 'verre'], correct: 2 },
                { question: 'Une bouteille peut être en...', reponses: ['bois', 'plastique', 'tissu', 'papier'], correct: 1 },
                { question: 'Une feuille est en...', reponses: ['métal', 'plastique', 'papier', 'verre'], correct: 2 },
                { question: 'Une fenêtre est en...', reponses: ['bois', 'verre', 'tissu', 'papier'], correct: 1 },
                { question: 'Une pièce de monnaie est en...', reponses: ['bois', 'tissu', 'métal', 'papier'], correct: 2 },
                { question: 'Un livre est en...', reponses: ['métal', 'plastique', 'papier', 'verre'], correct: 2 },
                { question: 'Une cuillère peut être en...', reponses: ['tissu', 'métal', 'papier', 'verre'], correct: 1 }
            ],
            remediation: {
                titre: '💡 Les matières',
                texte: 'Regarde autour de toi : en quoi sont faits les objets ? Bois, métal, plastique, tissu, verre, papier...'
            }
        },

        // ===== TRI ET CATÉGORIES =====
        {
            id: 'autres-tri',
            titre: 'Trier et classer',
            description: 'Range les objets par catégorie',
            icone: '🗂️',
            niveau: 2,
            type: 'qcm',
            consigne: 'Dans quelle catégorie ?',
            questions: [
                { question: 'La pomme est un...', reponses: ['légume', 'fruit', 'viande', 'céréale'], correct: 1 },
                { question: 'La carotte est un...', reponses: ['légume', 'fruit', 'viande', 'céréale'], correct: 0 },
                { question: 'Le poulet est une...', reponses: ['légume', 'fruit', 'viande', 'céréale'], correct: 2 },
                { question: 'Le pain est une...', reponses: ['légume', 'fruit', 'viande', 'céréale'], correct: 3 },
                { question: 'La robe est un...', reponses: ['aliment', 'vêtement', 'meuble', 'jouet'], correct: 1 },
                { question: 'La table est un...', reponses: ['aliment', 'vêtement', 'meuble', 'jouet'], correct: 2 },
                { question: 'Le ballon est un...', reponses: ['aliment', 'vêtement', 'meuble', 'jouet'], correct: 3 },
                { question: 'La banane est un...', reponses: ['légume', 'fruit', 'viande', 'céréale'], correct: 1 }
            ],
            remediation: {
                titre: '💡 Classer les objets',
                texte: 'On peut classer les objets par catégorie : aliments, vêtements, meubles, jouets, outils...'
            }
        },

        // ===== VÉHICULES =====
        {
            id: 'autres-vehicules',
            titre: 'Les véhicules',
            description: 'Voiture, avion, bateau, vélo...',
            icone: '🚗',
            niveau: 1,
            type: 'qcm',
            consigne: 'Quel véhicule ?',
            questions: [
                { question: 'Quel véhicule vole ?', reponses: ['Voiture', 'Avion', 'Bateau', 'Vélo'], correct: 1 },
                { question: 'Quel véhicule va sur l\'eau ?', reponses: ['Voiture', 'Avion', 'Bateau', 'Train'], correct: 2 },
                { question: 'Quel véhicule va sur des rails ?', reponses: ['Voiture', 'Avion', 'Bateau', 'Train'], correct: 3 },
                { question: 'Quel véhicule a 2 roues ?', reponses: ['Voiture', 'Vélo', 'Bus', 'Train'], correct: 1 },
                { question: 'Quel véhicule a 4 roues ?', reponses: ['Vélo', 'Voiture', 'Moto', 'Avion'], correct: 1 },
                { question: 'Quel véhicule est le plus rapide ?', reponses: ['Vélo', 'Voiture', 'Avion', 'Bateau'], correct: 2 },
                { question: 'Qui conduit un avion ?', reponses: ['Chauffeur', 'Pilote', 'Capitaine', 'Conducteur'], correct: 1 },
                { question: 'Qui conduit un bateau ?', reponses: ['Pilote', 'Chauffeur', 'Capitaine', 'Cycliste'], correct: 2 }
            ],
            remediation: {
                titre: '💡 Les véhicules',
                texte: '• Avion : vole dans le ciel\n• Bateau : va sur l\'eau\n• Train : va sur des rails\n• Voiture : va sur la route'
            }
        },

        // ===== MÉTIERS =====
        {
            id: 'autres-metiers',
            titre: 'Les métiers',
            description: 'Pompier, médecin, instituteur...',
            icone: '👨‍🚒',
            niveau: 2,
            type: 'qcm',
            consigne: 'Qui fait quoi ?',
            questions: [
                { question: 'Qui soigne les malades ?', reponses: ['Pompier', 'Médecin', 'Boulanger', 'Pilote'], correct: 1 },
                { question: 'Qui éteint les incendies ?', reponses: ['Pompier', 'Médecin', 'Police', 'Maçon'], correct: 0 },
                { question: 'Qui enseigne à l\'école ?', reponses: ['Médecin', 'Pompier', 'Instituteur', 'Boulanger'], correct: 2 },
                { question: 'Qui fait le pain ?', reponses: ['Boucher', 'Boulanger', 'Cuisinier', 'Pâtissier'], correct: 1 },
                { question: 'Qui vend la viande ?', reponses: ['Boulanger', 'Boucher', 'Poissonnier', 'Primeur'], correct: 1 },
                { question: 'Qui conduit un avion ?', reponses: ['Chauffeur', 'Pilote', 'Capitaine', 'Conducteur'], correct: 1 },
                { question: 'Qui construit les maisons ?', reponses: ['Maçon', 'Médecin', 'Pilote', 'Boulanger'], correct: 0 },
                { question: 'Qui protège les citoyens ?', reponses: ['Médecin', 'Police', 'Boulanger', 'Pilote'], correct: 1 }
            ],
            remediation: {
                titre: '💡 Les métiers',
                texte: 'Chaque métier est important ! Observe les adultes autour de toi : que font-ils comme travail ?'
            }
        },

        // ===== ENVIRONNEMENT =====
        {
            id: 'autres-environnement',
            titre: 'Protéger la planète',
            description: 'Le tri, le recyclage, l\'eau',
            icone: '🌱',
            niveau: 2,
            type: 'qcm',
            consigne: 'Le bon geste',
            questions: [
                { question: 'Où met-on le papier usagé ?', reponses: ['Poubelle normale', 'Poubelle jaune', 'Par terre', 'Feu'], correct: 1 },
                { question: 'Faut-il laisser couler l\'eau en se brossant les dents ?', reponses: ['Oui', 'Non'], correct: 1 },
                { question: 'Que faire d\'une vieille bouteille en plastique ?', reponses: ['La jeter par terre', 'La recycler', 'La brûler', 'La garder'], correct: 1 },
                { question: 'D\'où vient l\'eau du robinet ?', reponses: ['De la mer', 'De la pluie traitée', 'Du ciel', 'Des rivières'], correct: 1 },
                { question: 'Que faut-il éteindre en sortant d\'une pièce ?', reponses: ['La télé', 'La lumière', 'Le frigo', 'Le four'], correct: 1 },
                { question: 'Pour aller à l\'école près, c\'est mieux...', reponses: ['En voiture', 'À pied ou vélo', 'En avion', 'En bateau'], correct: 1 },
                { question: 'Les arbres produisent...', reponses: ['du bruit', 'de l\'oxygène', 'du plastique', 'du feu'], correct: 1 },
                { question: 'Que peut-on faire avec un vieux journal ?', reponses: ['Le brûler', 'Le recycler', 'Le jeter dans la nature', 'Le manger'], correct: 1 }
            ],
            remediation: {
                titre: '💡 Protéger la planète',
                texte: '• Trier les déchets\n• Économiser l\'eau\n• Éteindre les lumières inutiles\n• Privilégier le vélo ou la marche'
            }
        }
    ]
};
