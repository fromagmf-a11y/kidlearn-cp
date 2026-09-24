// ===== KIDLEARN CP - DONNÉES MATHS =====
// Copyright (c) 2026 KidLearn. Tous droits réservés.

var DATA_MATHS = {
    modules: [
        {
            id: 'math-nombres10',
            titre: 'Nombres 0 à 10',
            description: 'Reconnais les petits nombres',
            icone: '🔢',
            niveau: 1,
            type: 'qcm',
            consigne: 'Choisis',
            questions: [
                { question: 'Combien d\'étoiles ? ⭐⭐', reponses: ['2', '3', '4', '5'], correct: 1 },
                { question: 'Nombre après 4 ?', reponses: ['3', '5', '6', '4'], correct: 1 },
                { question: 'Nombre avant 7 ?', reponses: ['6', '8', '5', '9'], correct: 0 },
                { question: '2 + 1 = ?', reponses: ['2', '3', '4', '5'], correct: 1 },
                { question: 'Plus grand : 3 ou 8 ?', reponses: ['3', '8'], correct: 1 },
                { question: 'Plus petit : 5 ou 2 ?', reponses: ['5', '2'], correct: 1 },
                { question: 'Doigts sur une main ?', reponses: ['4', '5', '6', '10'], correct: 1 },
                { question: '10 - 3 = ?', reponses: ['5', '6', '7', '8'], correct: 2 }
            ],
            remediation: { titre: '💡 Compter', texte: 'Utilise tes doigts ! 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.' }
        },
        {
            id: 'math-nombres30',
            titre: 'Nombres 0 à 30',
            description: 'Compte jusqu\'à 30',
            icone: '🔢',
            niveau: 2,
            type: 'qcm',
            consigne: 'Choisis',
            questions: [
                { question: 'Après 19 ?', reponses: ['18', '20', '21', '29'], correct: 1 },
                { question: 'Avant 25 ?', reponses: ['24', '26', '23', '27'], correct: 0 },
                { question: 'Entre 14 et 16 ?', reponses: ['13', '15', '17', '18'], correct: 1 },
                { question: '10 + 10 = ?', reponses: ['15', '20', '25', '30'], correct: 1 },
                { question: 'Plus grand : 17 ou 23 ?', reponses: ['17', '23'], correct: 1 },
                { question: 'Plus petit : 28 ou 19 ?', reponses: ['28', '19'], correct: 1 },
                { question: '30 - 10 = ?', reponses: ['10', '15', '20', '25'], correct: 2 },
                { question: 'Après 29 ?', reponses: ['28', '30', '31', '20'], correct: 1 }
            ],
            remediation: { titre: '💡 Jusqu\'à 30', texte: 'Compte de 10 en 10 : 10, 20, 30.' }
        },
        {
            id: 'math-nombres100',
            titre: 'Nombres jusqu\'à 100',
            description: 'Compte jusqu\'à 100',
            icone: '💯',
            niveau: 3,
            type: 'qcm',
            consigne: 'Choisis',
            questions: [
                { question: 'Après 49 ?', reponses: ['48', '50', '51', '60'], correct: 1 },
                { question: 'Avant 70 ?', reponses: ['69', '71', '68', '72'], correct: 0 },
                { question: '50 + 25 = ?', reponses: ['65', '75', '85', '95'], correct: 1 },
                { question: 'Plus grand : 67 ou 76 ?', reponses: ['67', '76'], correct: 1 },
                { question: '100 - 30 = ?', reponses: ['50', '60', '70', '80'], correct: 2 },
                { question: 'Entre 88 et 90 ?', reponses: ['87', '89', '91', '92'], correct: 1 },
                { question: '20 + 30 + 10 = ?', reponses: ['50', '60', '70', '80'], correct: 1 },
                { question: 'Après 99 ?', reponses: ['98', '100', '101', '110'], correct: 1 }
            ],
            remediation: { titre: '💡 Jusqu\'à 100', texte: 'Compte de 10 en 10 : 10, 20, 30... 100.' }
        },
        {
            id: 'math-additions',
            titre: 'Additions',
            description: 'Additions simples',
            icone: '➕',
            niveau: 1,
            type: 'qcm',
            consigne: 'Combien font...',
            questions: [
                { question: '2 + 3 = ?', reponses: ['4', '5', '6', '7'], correct: 1 },
                { question: '4 + 4 = ?', reponses: ['6', '7', '8', '9'], correct: 2 },
                { question: '5 + 3 = ?', reponses: ['7', '8', '9', '10'], correct: 1 },
                { question: '6 + 2 = ?', reponses: ['7', '8', '9', '10'], correct: 1 },
                { question: '7 + 3 = ?', reponses: ['8', '9', '10', '11'], correct: 2 },
                { question: '9 + 1 = ?', reponses: ['9', '10', '11', '12'], correct: 1 },
                { question: '5 + 5 = ?', reponses: ['8', '9', '10', '11'], correct: 2 },
                { question: '8 + 2 = ?', reponses: ['9', '10', '11', '12'], correct: 1 }
            ],
            remediation: { titre: '💡 Addition', texte: 'Additionner = ajouter. Compte sur tes doigts !' }
        },
        {
            id: 'math-soustractions',
            titre: 'Soustractions',
            description: 'Enlever, retrancher',
            icone: '➖',
            niveau: 2,
            type: 'qcm',
            consigne: 'Combien font...',
            questions: [
                { question: '5 - 2 = ?', reponses: ['2', '3', '4', '5'], correct: 1 },
                { question: '8 - 3 = ?', reponses: ['4', '5', '6', '7'], correct: 1 },
                { question: '10 - 4 = ?', reponses: ['5', '6', '7', '8'], correct: 1 },
                { question: '7 - 5 = ?', reponses: ['1', '2', '3', '4'], correct: 1 },
                { question: '9 - 6 = ?', reponses: ['2', '3', '4', '5'], correct: 1 },
                { question: '6 - 1 = ?', reponses: ['4', '5', '6', '7'], correct: 1 },
                { question: '10 - 10 = ?', reponses: ['0', '1', '5', '10'], correct: 0 },
                { question: '15 - 5 = ?', reponses: ['5', '10', '15', '20'], correct: 1 }
            ],
            remediation: { titre: '💡 Soustraction', texte: 'Soustraire = enlever. 5 bonbons - 2 = 3 restants.' }
        },
        {
            id: 'math-trous',
            titre: 'Additions à trous',
            description: 'Trouve le nombre manquant',
            icone: '',
            niveau: 2,
            type: 'qcm',
            consigne: 'Quel nombre manque ?',
            questions: [
                { question: '3 + ? = 5', reponses: ['1', '2', '3', '4'], correct: 1 },
                { question: '? + 4 = 7', reponses: ['2', '3', '4', '5'], correct: 1 },
                { question: '6 + ? = 10', reponses: ['2', '3', '4', '5'], correct: 2 },
                { question: '? + 5 = 9', reponses: ['3', '4', '5', '6'], correct: 1 },
                { question: '7 + ? = 10', reponses: ['1', '2', '3', '4'], correct: 2 },
                { question: '? + 2 = 8', reponses: ['5', '6', '7', '8'], correct: 1 },
                { question: '4 + ? = 9', reponses: ['3', '4', '5', '6'], correct: 2 },
                { question: '? + 6 = 10', reponses: ['3', '4', '5', '6'], correct: 1 }
            ],
            remediation: { titre: '💡 Nombre manquant', texte: 'Si 3 + ? = 5, alors ? = 5 - 3 = 2.' }
        },
        {
            id: 'math-comparer',
            titre: 'Comparer',
            description: 'Plus grand, plus petit',
            icone: '⚖️',
            niveau: 1,
            type: 'qcm',
            consigne: 'Choisis',
            questions: [
                { question: '5 est plus grand que...', reponses: ['6', '7', '4', '8'], correct: 2 },
                { question: '8 est plus petit que...', reponses: ['7', '6', '5', '9'], correct: 3 },
                { question: 'Plus grand ?', reponses: ['12', '21', '11', '10'], correct: 1 },
                { question: 'Plus petit ?', reponses: ['15', '51', '25', '12'], correct: 3 },
                { question: '7 ___ 9', reponses: ['>', '<', '='], correct: 1 },
                { question: '12 ___ 8', reponses: ['>', '<', '='], correct: 0 },
                { question: 'Du plus petit au plus grand : 5, 3, 8', reponses: ['3, 5, 8', '5, 3, 8', '8, 5, 3', '3, 8, 5'], correct: 0 },
                { question: 'Du plus grand au plus petit : 9, 4, 7', reponses: ['4, 7, 9', '9, 7, 4', '7, 9, 4', '9, 4, 7'], correct: 1 }
            ],
            remediation: { titre: '💡 Comparer', texte: '> = plus grand, < = plus petit. La bouche du crocodile mange le plus grand !' }
        },
        {
            id: 'math-formes',
            titre: 'Formes géométriques',
            description: 'Carré, rond, triangle, rectangle',
            icone: '🔷',
            niveau: 1,
            type: 'qcm',
            consigne: 'Reconnais',
            questions: [
                { question: 'Côtés d\'un carré ?', reponses: ['3', '4', '5', '6'], correct: 1 },
                { question: 'Côtés d\'un triangle ?', reponses: ['2', '3', '4', '5'], correct: 1 },
                { question: 'Forme sans côté ?', reponses: ['Carré', 'Triangle', 'Rond', 'Rectangle'], correct: 2 },
                { question: 'Côtés d\'un rectangle ?', reponses: ['3', '4', '5', '6'], correct: 1 },
                { question: 'Balle = forme...', reponses: ['carré', 'triangle', 'rond', 'rectangle'], correct: 2 },
                { question: 'Porte = forme...', reponses: ['carré', 'triangle', 'rond', 'rectangle'], correct: 3 },
                { question: 'Panneau stop = forme...', reponses: ['carré', 'triangle', 'octogone', 'rond'], correct: 2 },
                { question: 'Côtés d\'un hexagone ?', reponses: ['4', '5', '6', '7'], correct: 2 }
            ],
            remediation: { titre: '💡 Formes', texte: 'Carré : 4 côtés égaux. Rectangle : 4 côtés. Triangle : 3 côtés. Rond : 0 côté.' }
        },
        {
            id: 'math-geometrie-reperage',
            titre: 'Se repérer',
            description: 'Droite, gauche, dessus, dessous',
            icone: '🧭',
            niveau: 2,
            type: 'qcm',
            consigne: 'Où se trouve...',
            questions: [
                { question: 'Soleil se lève à l\'...', reponses: ['Ouest', 'Est', 'Nord', 'Sud'], correct: 1 },
                { question: 'Soleil se couche à l\'...', reponses: ['Est', 'Ouest', 'Nord', 'Sud'], correct: 1 },
                { question: 'Main pour écrire souvent ?', reponses: ['Gauche', 'Droite', 'Les deux', 'Aucune'], correct: 1 },
                { question: 'Le ciel est...', reponses: ['dessus', 'dessous', 'devant', 'derrière'], correct: 0 },
                { question: 'Le sol est...', reponses: ['dessus', 'dessous', 'devant', 'derrière'], correct: 1 },
                { question: 'Devant moi = ?', reponses: ['derrière', 'devant', 'dessus', 'dessous'], correct: 1 },
                { question: 'Dans mon dos = ?', reponses: ['devant', 'derrière', 'dessus', 'dessous'], correct: 1 },
                { question: 'Opposé de droite = ?', reponses: ['droite', 'gauche', 'haut', 'bas'], correct: 1 }
            ],
            remediation: { titre: '💡 Repérage', texte: 'Droite/Gauche, Dessus/Dessous, Devant/Derrière' }
        },
        {
            id: 'math-geometrie-motifs',
            titre: 'Motifs et suites',
            description: 'Reconnaître et continuer',
            icone: '🔁',
            niveau: 2,
            type: 'qcm',
            consigne: 'Que vient-il après ?',
            questions: [
                { question: '🔴🔵🔴🔴...', reponses: ['🔴', '🔵', '🟢', '🟡'], correct: 1 },
                { question: '⭐🌙⭐🌙⭐...', reponses: ['⭐', '🌙', '☀️', '🌟'], correct: 1 },
                { question: '1, 2, 3, 4, 5...', reponses: ['5', '6', '7', '8'], correct: 1 },
                { question: '2, 4, 6, 8...', reponses: ['9', '10', '11', '12'], correct: 1 },
                { question: '🟦🟦🟥...', reponses: ['🟦', '🟥', '', '🟨'], correct: 1 },
                { question: '5, 10, 15, 20...', reponses: ['21', '25', '30', '35'], correct: 1 },
                { question: 'A, B, A, B, A...', reponses: ['A', 'B', 'C', 'D'], correct: 1 },
                { question: '10, 20, 30, 40...', reponses: ['45', '50', '55', '60'], correct: 1 }
            ],
            remediation: { titre: '💡 Suites', texte: 'Trouve le motif qui se répète !' }
        },
        {
            id: 'math-heure',
            titre: 'Lire l\'heure',
            description: 'Heures piles et demies',
            icone: '🕐',
            niveau: 2,
            type: 'qcm',
            consigne: 'Quelle heure ?',
            questions: [
                { question: 'Petite aiguille sur 3, grande sur 12', reponses: ['3h00', '12h00', '3h30', '12h30'], correct: 0 },
                { question: 'Petite entre 6 et 7, grande sur 6', reponses: ['6h00', '6h30', '7h00', '7h30'], correct: 1 },
                { question: 'Minutes dans une heure ?', reponses: ['30', '45', '60', '100'], correct: 2 },
                { question: 'Heures dans une journée ?', reponses: ['12', '24', '30', '60'], correct: 1 },
                { question: 'Petite sur 9, grande sur 12', reponses: ['9h00', '12h00', '9h30', '12h30'], correct: 0 },
                { question: 'Minutes dans une demi-heure ?', reponses: ['15', '30', '45', '60'], correct: 1 },
                { question: 'Il est 8h. Dans 1h...', reponses: ['7h', '9h', '10h', '8h30'], correct: 1 },
                { question: 'Il est 10h30. Dans 30min...', reponses: ['10h', '11h', '11h30', '10h'], correct: 1 }
            ],
            remediation: { titre: '💡 Heure', texte: 'Petite aiguille = heures. Grande = minutes. Sur 12 = pile, sur 6 = et demie.' }
        },
        {
            id: 'math-euros',
            titre: 'Les euros',
            description: 'Pièces et billets',
            icone: '',
            niveau: 2,
            type: 'qcm',
            consigne: 'Calcule',
            questions: [
                { question: 'Pièce de 1 € vaut...', reponses: ['1 €', '2 €', '5 €', '10 €'], correct: 0 },
                { question: '1 € + 1 € = ?', reponses: ['1 €', '2 €', '3 €', '10 €'], correct: 1 },
                { question: '2 € + 3 € = ?', reponses: ['4 €', '5 €', '6 €', '7 €'], correct: 1 },
                { question: '5 € + 5 € = ?', reponses: ['5 €', '10 €', '15 €', '20 €'], correct: 1 },
                { question: '10 € - 3 € = ?', reponses: ['5 €', '6 €', '7 €', '8 €'], correct: 2 },
                { question: '5 €, achat à 3 €. Reste...', reponses: ['1 €', '2 €', '3 €', '4 €'], correct: 1 },
                { question: 'Pièces de 1 € pour 10 € ?', reponses: ['5', '10', '15', '20'], correct: 1 },
                { question: '2 € + 2 € + 1 € = ?', reponses: ['3 €', '4 €', '5 €', '6 €'], correct: 2 }
            ],
            remediation: { titre: '💡 Euros', texte: 'Les euros s\'additionnent comme les nombres.' }
        },
        {
            id: 'math-problemes',
            titre: 'Problèmes',
            description: 'Résous des problèmes',
            icone: '🧩',
            niveau: 2,
            type: 'qcm',
            consigne: 'Lis et résous',
            questions: [
                { question: 'Léa a 3 bonbons. Maman en donne 2. Total ?', reponses: ['4', '5', '6', '7'], correct: 1 },
                { question: 'Tom a 8 billes. Perd 3. Reste...', reponses: ['4', '5', '6', '7'], correct: 1 },
                { question: '5 oiseaux. 2 s\'envolent. Reste...', reponses: ['2', '3', '4', '5'], correct: 1 },
                { question: 'Paul 4 ans, sœur 6 ans. Total ?', reponses: ['8', '9', '10', '11'], correct: 2 },
                { question: '10 crayons. J\'en prends 4. Reste...', reponses: ['4', '5', '6', '7'], correct: 2 },
                { question: 'Julie 2 pommes matin + 1 soir. Total ?', reponses: ['2', '3', '4', '5'], correct: 1 },
                { question: '6 fleurs rouges + 4 jaunes. Total ?', reponses: ['8', '9', '10', '11'], correct: 2 },
                { question: '15 images, j\'en gagne 5. Total ?', reponses: ['15', '20', '25', '30'], correct: 1 }
            ],
            remediation: { titre: ' Problèmes', texte: '1. Lis 2. Repère les nombres 3. Ajoute ou enlève ? 4. Calcule' }
        },
        {
            id: 'math-doubles',
            titre: 'Les doubles',
            description: '2+2, 3+3...',
            icone: '️',
            niveau: 3,
            type: 'qcm',
            consigne: 'Quel est le double ?',
            questions: [
                { question: 'Double de 2 ?', reponses: ['2', '3', '4', '5'], correct: 2 },
                { question: 'Double de 3 ?', reponses: ['5', '6', '7', '8'], correct: 1 },
                { question: 'Double de 4 ?', reponses: ['6', '7', '8', '9'], correct: 2 },
                { question: 'Double de 5 ?', reponses: ['8', '9', '10', '11'], correct: 2 },
                { question: 'Double de 6 ?', reponses: ['10', '11', '12', '13'], correct: 2 },
                { question: 'Double de 7 ?', reponses: ['12', '13', '14', '15'], correct: 2 },
                { question: 'Double de 8 ?', reponses: ['14', '15', '16', '17'], correct: 2 },
                { question: 'Double de 9 ?', reponses: ['16', '17', '18', '19'], correct: 2 }
            ],
            remediation: { titre: '💡 Doubles', texte: 'Double de 5 = 5 + 5 = 10.' }
        },
        {
            id: 'math-mesures',
            titre: 'Mesures',
            description: 'Longueurs, masses, contenances',
            icone: '📏',
            niveau: 3,
            type: 'qcm',
            consigne: 'Choisis',
            questions: [
                { question: 'Mesurer une longueur ?', reponses: ['Balance', 'Règle', 'Verre', 'Montre'], correct: 1 },
                { question: 'Mesurer une masse ?', reponses: ['Balance', 'Règle', 'Verre', 'Montre'], correct: 0 },
                { question: 'cm dans 1 mètre ?', reponses: ['10', '50', '100', '1000'], correct: 2 },
                { question: 'g dans 1 kg ?', reponses: ['10', '100', '500', '1000'], correct: 3 },
                { question: 'mL dans 1 litre ?', reponses: ['10', '100', '500', '1000'], correct: 3 },
                { question: 'Crayon mesure environ...', reponses: ['1 cm', '15 cm', '1 m', '1 km'], correct: 1 },
                { question: 'Voiture pèse environ...', reponses: ['1 g', '1 kg', '100 kg', '1000 kg'], correct: 3 },
                { question: 'Bouteille d\'eau contient...', reponses: ['1 mL', '100 mL', '1 L', '10 L'], correct: 2 }
            ],
            remediation: { titre: '💡 Mesures', texte: 'Longueur : m, cm. Masse : kg, g. Contenance : L, mL.' }
        }
    ]
};
