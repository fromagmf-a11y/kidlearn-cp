// ===== KIDLEARN CP - DÉCOUVERTE DU MONDE =====
// Copyright (c) 2026 KidLearn. Tous droits réservés.

var DATA_AUTRES = {
    modules: [
        {
            id: 'autres-saisons',
            titre: 'Les 4 saisons',
            description: 'Printemps, été, automne, hiver',
            icone: '🌸',
            niveau: 1,
            type: 'qcm',
            consigne: 'À quelle saison ?',
            questions: [
                { question: 'Feuilles tombent ?', reponses: ['Printemps', 'Été', 'Automne', 'Hiver'], correct: 2 },
                { question: 'Plus chaud ?', reponses: ['Printemps', 'Été', 'Automne', 'Hiver'], correct: 1 },
                { question: 'Neige souvent ?', reponses: ['Printemps', 'Été', 'Automne', 'Hiver'], correct: 3 },
                { question: 'Fleurs poussent ?', reponses: ['Printemps', 'Été', 'Automne', 'Hiver'], correct: 0 },
                { question: 'Combien de saisons ?', reponses: ['2', '3', '4', '5'], correct: 2 },
                { question: 'Après l\'hiver ?', reponses: ['Printemps', 'Été', 'Automne', 'Hiver'], correct: 0 },
                { question: 'À Noël, quelle saison ?', reponses: ['Printemps', 'Été', 'Automne', 'Hiver'], correct: 3 },
                { question: 'On va à la plage...', reponses: ['Printemps', 'Été', 'Automne', 'Hiver'], correct: 1 }
            ],
            remediation: { titre: '💡 Saisons', texte: 'Printemps=fleurs, Été=chaud, Automne=feuilles, Hiver=neige' }
        },
        {
            id: 'autres-jours',
            titre: 'Jours de la semaine',
            description: 'Lundi, mardi, mercredi...',
            icone: '📅',
            niveau: 1,
            type: 'qcm',
            consigne: 'Quel jour ?',
            questions: [
                { question: 'Après lundi ?', reponses: ['dimanche', 'mardi', 'mercredi', 'jeudi'], correct: 1 },
                { question: 'Avant vendredi ?', reponses: ['mercredi', 'jeudi', 'samedi', 'lundi'], correct: 1 },
                { question: 'Jours dans une semaine ?', reponses: ['5', '6', '7', '8'], correct: 2 },
                { question: 'Premier jour ?', reponses: ['lundi', 'dimanche', 'mardi', 'samedi'], correct: 0 },
                { question: 'Dernier jour ?', reponses: ['vendredi', 'samedi', 'dimanche', 'lundi'], correct: 2 },
                { question: 'Entre mercredi et vendredi ?', reponses: ['mardi', 'jeudi', 'samedi', 'lundi'], correct: 1 },
                { question: 'Jour du weekend ?', reponses: ['lundi', 'mercredi', 'samedi', 'jeudi'], correct: 2 },
                { question: 'Aujourd\'hui mardi. Demain...', reponses: ['lundi', 'mercredi', 'jeudi', 'vendredi'], correct: 1 }
            ],
            remediation: { titre: '💡 Jours', texte: 'Lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche.' }
        },
        {
            id: 'autres-mois',
            titre: 'Mois de l\'année',
            description: 'Janvier, février, mars...',
            icone: '🗓️',
            niveau: 2,
            type: 'qcm',
            consigne: 'Quel mois ?',
            questions: [
                { question: 'Premier mois ?', reponses: ['janvier', 'février', 'décembre', 'mars'], correct: 0 },
                { question: 'Dernier mois ?', reponses: ['novembre', 'décembre', 'janvier', 'octobre'], correct: 1 },
                { question: 'Mois dans une année ?', reponses: ['10', '11', '12', '13'], correct: 2 },
                { question: 'Après mars ?', reponses: ['février', 'avril', 'mai', 'juin'], correct: 1 },
                { question: 'Mois de Noël ?', reponses: ['novembre', 'décembre', 'janvier', 'octobre'], correct: 1 },
                { question: 'Début de l\'été ?', reponses: ['mai', 'juin', 'juillet', 'août'], correct: 1 },
                { question: 'Entre mai et juillet ?', reponses: ['avril', 'juin', 'août', 'septembre'], correct: 1 },
                { question: 'Jours en janvier ?', reponses: ['28', '30', '31', '32'], correct: 2 }
            ],
            remediation: { titre: '💡 Mois', texte: 'Janvier, février, mars, avril, mai, juin, juillet, août, septembre, octobre, novembre, décembre.' }
        },
        {
            id: 'autres-corps',
            titre: 'Le corps humain',
            description: 'Parties du corps et 5 sens',
            icone: '🧍',
            niveau: 1,
            type: 'qcm',
            consigne: 'Choisis',
            questions: [
                { question: 'Avec quoi voit-on ?', reponses: ['oreilles', 'yeux', 'nez', 'bouche'], correct: 1 },
                { question: 'Avec quoi entend-on ?', reponses: ['yeux', 'oreilles', 'nez', 'mains'], correct: 1 },
                { question: 'Avec quoi sent-on ?', reponses: ['yeux', 'oreilles', 'nez', 'bouche'], correct: 2 },
                { question: 'Avec quoi goûte-t-on ?', reponses: ['nez', 'langue', 'yeux', 'oreilles'], correct: 1 },
                { question: 'Avec quoi touche-t-on ?', reponses: ['yeux', 'mains', 'nez', 'bouche'], correct: 1 },
                { question: 'Combien de sens ?', reponses: ['3', '4', '5', '6'], correct: 2 },
                { question: 'Combien de jambes ?', reponses: ['1', '2', '3', '4'], correct: 1 },
                { question: 'Doigts par main ?', reponses: ['3', '4', '5', '6'], correct: 2 }
            ],
            remediation: { titre: '💡 5 sens', texte: 'Vue=yeux, Ouïe=oreilles, Odorat=nez, Goût=langue, Toucher=peau' }
        },
        {
            id: 'autres-animaux',
            titre: 'Animaux et milieu',
            description: 'Forêt, mer, campagne, ville',
            icone: '🦁',
            niveau: 2,
            type: 'qcm',
            consigne: 'Où vit...',
            questions: [
                { question: 'Poisson vit...', reponses: ['Forêt', 'Mer', 'Désert', 'Montagne'], correct: 1 },
                { question: 'Ours vit...', reponses: ['Mer', 'Forêt', 'Désert', 'Ville'], correct: 1 },
                { question: 'Chameau vit...', reponses: ['Forêt', 'Mer', 'Désert', 'Montagne'], correct: 2 },
                { question: 'Pingouin vit...', reponses: ['Désert', 'Pôle', 'Forêt', 'Jungle'], correct: 1 },
                { question: 'Lion vit...', reponses: ['Mer', 'Savane', 'Pôle', 'Forêt'], correct: 1 },
                { question: 'Vache vit...', reponses: ['Mer', 'Campagne', 'Désert', 'Pôle'], correct: 1 },
                { question: 'Pigeon vit...', reponses: ['Mer', 'Forêt', 'Ville', 'Désert'], correct: 2 },
                { question: 'Singe vit...', reponses: ['Mer', 'Jungle', 'Désert', 'Pôle'], correct: 1 }
            ],
            remediation: { titre: '💡 Milieux', texte: 'Chaque animal a son milieu adapté.' }
        },
        {
            id: 'autres-matieres',
            titre: 'Les matières',
            description: 'Bois, métal, plastique, tissu',
            icone: '🧱',
            niveau: 2,
            type: 'qcm',
            consigne: 'De quoi c\'est fait ?',
            questions: [
                { question: 'Chaise souvent en...', reponses: ['verre', 'bois', 'tissu', 'papier'], correct: 1 },
                { question: 'Pull en...', reponses: ['métal', 'bois', 'tissu', 'verre'], correct: 2 },
                { question: 'Bouteille peut être en...', reponses: ['bois', 'plastique', 'tissu', 'papier'], correct: 1 },
                { question: 'Feuille en...', reponses: ['métal', 'plastique', 'papier', 'verre'], correct: 2 },
                { question: 'Fenêtre en...', reponses: ['bois', 'verre', 'tissu', 'papier'], correct: 1 },
                { question: 'Pièce de monnaie en...', reponses: ['bois', 'tissu', 'métal', 'papier'], correct: 2 },
                { question: 'Livre en...', reponses: ['métal', 'plastique', 'papier', 'verre'], correct: 2 },
                { question: 'Cuillère peut être en...', reponses: ['tissu', 'métal', 'papier', 'verre'], correct: 1 }
            ],
            remediation: { titre: '💡 Matières', texte: 'Regarde autour de toi : en quoi sont les objets ?' }
        },
        {
            id: 'autres-tri',
            titre: 'Trier et classer',
            description: 'Range par catégorie',
            icone: '🗂️',
            niveau: 2,
            type: 'qcm',
            consigne: 'Quelle catégorie ?',
            questions: [
                { question: 'Pomme est un...', reponses: ['légume', 'fruit', 'viande', 'céréale'], correct: 1 },
                { question: 'Carotte est un...', reponses: ['légume', 'fruit', 'viande', 'céréale'], correct: 0 },
                { question: 'Poulet est une...', reponses: ['légume', 'fruit', 'viande', 'céréale'], correct: 2 },
                { question: 'Pain est une...', reponses: ['légume', 'fruit', 'viande', 'céréale'], correct: 3 },
                { question: 'Robe est un...', reponses: ['aliment', 'vêtement', 'meuble', 'jouet'], correct: 1 },
                { question: 'Table est un...', reponses: ['aliment', 'vêtement', 'meuble', 'jouet'], correct: 2 },
                { question: 'Ballon est un...', reponses: ['aliment', 'vêtement', 'meuble', 'jouet'], correct: 3 },
                { question: 'Banane est un...', reponses: ['légume', 'fruit', 'viande', 'céréale'], correct: 1 }
            ],
            remediation: { titre: '💡 Classer', texte: 'Aliments, vêtements, meubles, jouets...' }
        },
        {
            id: 'autres-vehicules',
            titre: 'Les véhicules',
            description: 'Voiture, avion, bateau, vélo',
            icone: '🚗',
            niveau: 1,
            type: 'qcm',
            consigne: 'Quel véhicule ?',
            questions: [
                { question: 'Qui vole ?', reponses: ['Voiture', 'Avion', 'Bateau', 'Vélo'], correct: 1 },
                { question: 'Qui va sur l\'eau ?', reponses: ['Voiture', 'Avion', 'Bateau', 'Train'], correct: 2 },
                { question: 'Qui va sur rails ?', reponses: ['Voiture', 'Avion', 'Bateau', 'Train'], correct: 3 },
                { question: 'Qui a 2 roues ?', reponses: ['Voiture', 'Vélo', 'Bus', 'Train'], correct: 1 },
                { question: 'Qui a 4 roues ?', reponses: ['Vélo', 'Voiture', 'Moto', 'Avion'], correct: 1 },
                { question: 'Le plus rapide ?', reponses: ['Vélo', 'Voiture', 'Avion', 'Bateau'], correct: 2 },
                { question: 'Qui conduit un avion ?', reponses: ['Chauffeur', 'Pilote', 'Capitaine', 'Conducteur'], correct: 1 },
                { question: 'Qui conduit un bateau ?', reponses: ['Pilote', 'Chauffeur', 'Capitaine', 'Cycliste'], correct: 2 }
            ],
            remediation: { titre: '💡 Véhicules', texte: 'Avion=vol, Bateau=eau, Train=rails, Voiture=route' }
        },
        {
            id: 'autres-metiers',
            titre: 'Les métiers',
            description: 'Pompier, médecin, instituteur',
            icone: '‍🚒',
            niveau: 2,
            type: 'qcm',
            consigne: 'Qui fait quoi ?',
            questions: [
                { question: 'Qui soigne ?', reponses: ['Pompier', 'Médecin', 'Boulanger', 'Pilote'], correct: 1 },
                { question: 'Qui éteint le feu ?', reponses: ['Pompier', 'Médecin', 'Police', 'Maçon'], correct: 0 },
                { question: 'Qui enseigne ?', reponses: ['Médecin', 'Pompier', 'Instituteur', 'Boulanger'], correct: 2 },
                { question: 'Qui fait le pain ?', reponses: ['Boucher', 'Boulanger', 'Cuisinier', 'Pâtissier'], correct: 1 },
                { question: 'Qui vend la viande ?', reponses: ['Boulanger', 'Boucher', 'Poissonnier', 'Primeur'], correct: 1 },
                { question: 'Qui conduit un avion ?', reponses: ['Chauffeur', 'Pilote', 'Capitaine', 'Conducteur'], correct: 1 },
                { question: 'Qui construit les maisons ?', reponses: ['Maçon', 'Médecin', 'Pilote', 'Boulanger'], correct: 0 },
                { question: 'Qui protège ?', reponses: ['Médecin', 'Police', 'Boulanger', 'Pilote'], correct: 1 }
            ],
            remediation: { titre: '💡 Métiers', texte: 'Chaque métier est important !' }
        },
        {
            id: 'autres-environnement',
            titre: 'Protéger la planète',
            description: 'Tri, recyclage, eau',
            icone: '',
            niveau: 2,
            type: 'qcm',
            consigne: 'Bon geste',
            questions: [
                { question: 'Papier usagé dans...', reponses: ['Poubelle normale', 'Poubelle jaune', 'Par terre', 'Feu'], correct: 1 },
                { question: 'Laisser couler l\'eau en se brossant ?', reponses: ['Oui', 'Non'], correct: 1 },
                { question: 'Bouteille plastique...', reponses: ['Jeter', 'Recycler', 'Brûler', 'Garder'], correct: 1 },
                { question: 'Eau du robinet vient de...', reponses: ['Mer', 'Pluie traitée', 'Ciel', 'Rivières'], correct: 1 },
                { question: 'Éteindre en sortant...', reponses: ['Télé', 'Lumière', 'Frigo', 'Four'], correct: 1 },
                { question: 'Pour aller à l\'école près...', reponses: ['Voiture', 'À pied/vélo', 'Avion', 'Bateau'], correct: 1 },
                { question: 'Arbres produisent...', reponses: ['bruit', 'oxygène', 'plastique', 'feu'], correct: 1 },
                { question: 'Vieux journal...', reponses: ['Brûler', 'Recycler', 'Jeter nature', 'Manger'], correct: 1 }
            ],
            remediation: { titre: '💡 Planète', texte: 'Trier, économiser l\'eau, éteindre lumières, vélo' }
        },
        {
            id: 'autres-geographie-france',
            titre: 'La France',
            description: 'Notre pays',
            icone: '🇫',
            niveau: 2,
            type: 'qcm',
            consigne: 'Questions sur la France',
            questions: [
                { question: 'Capitale de la France ?', reponses: ['Lyon', 'Marseille', 'Paris', 'Toulouse'], correct: 2 },
                { question: 'Drapeau de la France ?', reponses: ['Rouge-Blanc-Bleu', 'Bleu-Blanc-Rouge', 'Vert-Blanc-Rouge', 'Bleu-Jaune-Rouge'], correct: 1 },
                { question: 'La France est un...', reponses: ['continent', 'pays', 'océan', 'montagne'], correct: 1 },
                { question: 'Continent de la France ?', reponses: ['Asie', 'Afrique', 'Europe', 'Amérique'], correct: 2 },
                { question: 'Plus grande ville ?', reponses: ['Lyon', 'Marseille', 'Paris', 'Nice'], correct: 2 },
                { question: 'Forme de la France ?', reponses: ['rond', 'carré', 'hexagone', 'triangle'], correct: 2 },
                { question: 'Mer au sud de la France ?', reponses: ['Mer du Nord', 'Méditerranée', 'Atlantique', 'Mer Noire'], correct: 1 },
                { question: 'Langue officielle ?', reponses: ['Anglais', 'Espagnol', 'Français', 'Italien'], correct: 2 }
            ],
            remediation: { titre: '💡 France', texte: 'Capitale=Paris, Drapeau=bleu-blanc-rouge, Forme=hexagone, Continent=Europe' }
        },
        {
            id: 'autres-geographie-paysages',
            titre: 'Les paysages',
            description: 'Montagne, mer, campagne, ville, forêt',
            icone: '🏔️',
            niveau: 2,
            type: 'qcm',
            consigne: 'Quel paysage ?',
            questions: [
                { question: 'Sapins et sommets ?', reponses: ['Mer', 'Montagne', 'Désert', 'Ville'], correct: 1 },
                { question: 'Vagues et sable ?', reponses: ['Montagne', 'Forêt', 'Mer/Plage', 'Campagne'], correct: 2 },
                { question: 'Immeubles et rues ?', reponses: ['Campagne', 'Forêt', 'Ville', 'Montagne'], correct: 2 },
                { question: 'Champs et fermes ?', reponses: ['Ville', 'Campagne', 'Mer', 'Désert'], correct: 1 },
                { question: 'Beaucoup d\'arbres ?', reponses: ['Désert', 'Ville', 'Forêt', 'Mer'], correct: 2 },
                { question: 'Très sec et chaud ?', reponses: ['Forêt', 'Montagne', 'Désert', 'Mer'], correct: 2 },
                { question: 'Appartements ?', reponses: ['Campagne', 'Montagne', 'Ville', 'Forêt'], correct: 2 },
                { question: 'Vaches qui broutent ?', reponses: ['Ville', 'Campagne', 'Mer', 'Désert'], correct: 1 }
            ],
            remediation: { titre: '💡 Paysages', texte: 'Montagne=sommets, Mer=vagues, Ville=immeubles, Campagne=champs, Forêt=arbres' }
        },
        {
            id: 'autres-histoire-fetes',
            titre: 'Les fêtes',
            description: 'Noël, Pâques, 14 juillet',
            icone: '🎉',
            niveau: 1,
            type: 'qcm',
            consigne: 'Quelle fête ?',
            questions: [
                { question: 'Sapin décoré à...', reponses: ['Pâques', 'Noël', 'Halloween', '14 juillet'], correct: 1 },
                { question: 'Œufs en chocolat à...', reponses: ['Noël', 'Pâques', 'Halloween', 'Nouvel An'], correct: 1 },
                { question: '14 juillet = ?', reponses: ['Noël', 'Pâques', 'Fête nationale', 'Halloween'], correct: 2 },
                { question: 'Se déguiser à...', reponses: ['Noël', 'Pâques', 'Halloween/Carnaval', '14 juillet'], correct: 2 },
                { question: '1er janvier = ?', reponses: ['Noël', 'Nouvel An', 'Pâques', '14 juillet'], correct: 1 },
                { question: 'Offrir des cadeaux à...', reponses: ['Pâques', 'Noël', '14 juillet', 'Toussaint'], correct: 1 },
                { question: 'Citrouilles en octobre = ?', reponses: ['Noël', 'Pâques', 'Halloween', '14 juillet'], correct: 2 },
                { question: 'Fête des mamans = ?', reponses: ['Noël', 'Pâques', 'Fête des mères', '14 juillet'], correct: 2 }
            ],
            remediation: { titre: '💡 Fêtes', texte: 'Noël=25 déc, Pâques=œufs, 14 juillet=fête nationale, Halloween=31 oct' }
        },
        {
            id: 'autres-histoire-avant-maintenant',
            titre: 'Avant et maintenant',
            description: 'Comment on vivait avant',
            icone: '🏛️',
            niveau: 2,
            type: 'qcm',
            consigne: 'Avant ou maintenant ?',
            questions: [
                { question: 'Avant on écrivait avec...', reponses: ['ordinateur', 'plume', 'smartphone', 'tablette'], correct: 1 },
                { question: 'Maintenant on communique avec...', reponses: ['lettres', 'smartphone', 'pigeons', 'fumée'], correct: 1 },
                { question: 'Avant on se déplaçait en...', reponses: ['voiture', 'avion', 'calèche/cheval', 'TGV'], correct: 2 },
                { question: 'Maintenant on voyage en...', reponses: ['cheval', 'avion', 'calèche', 'voile'], correct: 1 },
                { question: 'Avant on s\'éclairait avec...', reponses: ['électricité', 'bougies', 'LED', 'lampes'], correct: 1 },
                { question: 'Maintenant on s\'éclairait avec...', reponses: ['bougies', 'huile', 'électricité', 'torches'], correct: 2 },
                { question: 'Photos d\'avant en...', reponses: ['couleur', 'noir et blanc', '3D', 'vidéo'], correct: 1 },
                { question: 'Photos d\'aujourd\'hui en...', reponses: ['noir et blanc', 'couleur', 'dessin', 'gravure'], correct: 1 }
            ],
            remediation: { titre: '💡 Avant/Maintenant', texte: 'Avant : plume, cheval, bougies. Maintenant : ordinateur, avion, électricité.' }
        }
    ]
};
