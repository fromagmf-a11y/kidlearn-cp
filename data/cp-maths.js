// ===== DONNÉES MATHS CP =====
const DATA_MATHS = {
    modules: [
        // ===== NOMBRES 0-10 =====
        {
            id: 'math-nombres10',
            titre: 'Les nombres de 0 à 10',
            description: 'Reconnais et écris les petits nombres',
            icone: '🔢',
            niveau: 1,
            type: 'qcm',
            consigne: 'Choisis la bonne réponse',
            questions: [
                { question: 'Combien y a-t-il d\'étoiles ? ⭐⭐⭐', reponses: ['2', '3', '4', '5'], correct: 1 },
                { question: 'Quel nombre vient après 4 ?', reponses: ['3', '5', '6', '4'], correct: 1 },
                { question: 'Quel nombre vient avant 7 ?', reponses: ['6', '8', '5', '9'], correct: 0 },
                { question: 'Combien font 2 + 1 ?', reponses: ['2', '3', '4', '5'], correct: 1 },
                { question: 'Quel est le plus grand : 3 ou 8 ?', reponses: ['3', '8'], correct: 1 },
                { question: 'Quel est le plus petit : 5 ou 2 ?', reponses: ['5', '2'], correct: 1 },
                { question: 'Combien de doigts sur une main ?', reponses: ['4', '5', '6', '10'], correct: 1 },
                { question: 'Combien font 10 - 3 ?', reponses: ['5', '6', '7', '8'], correct: 2 }
            ],
            remediation: {
                titre: '💡 Compter jusqu\'à 10',
                texte: 'Utilise tes doigts pour compter ! 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Entraîne-toi tous les jours.'
            }
        },

        // ===== NOMBRES 0-30 =====
        {
            id: 'math-nombres30',
            titre: 'Les nombres de 0 à 30',
            description: 'Compte jusqu\'à 30',
            icone: '🔢',
            niveau: 2,
            type: 'qcm',
            consigne: 'Choisis la bonne réponse',
            questions: [
                { question: 'Quel nombre vient après 19 ?', reponses: ['18', '20', '21', '29'], correct: 1 },
                { question: 'Quel nombre vient avant 25 ?', reponses: ['24', '26', '23', '27'], correct: 0 },
                { question: 'Quel nombre est entre 14 et 16 ?', reponses: ['13', '15', '17', '18'], correct: 1 },
                { question: 'Combien font 10 + 10 ?', reponses: ['15', '20', '25', '30'], correct: 1 },
                { question: 'Quel est le plus grand : 17 ou 23 ?', reponses: ['17', '23'], correct: 1 },
                { question: 'Quel est le plus petit : 28 ou 19 ?', reponses: ['28', '19'], correct: 1 },
                { question: 'Combien font 30 - 10 ?', reponses: ['10', '15', '20', '25'], correct: 2 },
                { question: 'Quel nombre vient après 29 ?', reponses: ['28', '30', '31', '20'], correct: 1 }
            ],
            remediation: {
                titre: '💡 Compter jusqu\'à 30',
                texte: 'Compte de 10 en 10 : 10, 20, 30. Puis ajoute : 11, 12, 13... 21, 22, 23...'
            }
        },

        // ===== NOMBRES 0-100 =====
        {
            id: 'math-nombres100',
            titre: 'Les nombres jusqu\'à 100',
            description: 'Compte jusqu\'à 100',
            icone: '💯',
            niveau: 3,
            type: 'qcm',
            consigne: 'Choisis la bonne réponse',
            questions: [
                { question: 'Quel nombre vient après 49 ?', reponses: ['48', '50', '51', '60'], correct: 1 },
                { question: 'Quel nombre vient avant 70 ?', reponses: ['69', '71', '68', '72'], correct: 0 },
                { question: 'Combien font 50 + 25 ?', reponses: ['65', '75', '85', '95'], correct: 1 },
                { question: 'Quel est le plus grand : 67 ou 76 ?', reponses: ['67', '76'], correct: 1 },
                { question: 'Combien font 100 - 30 ?', reponses: ['50', '60', '70', '80'], correct: 2 },
                { question: 'Quel nombre est entre 88 et 90 ?', reponses: ['87', '89', '91', '92'], correct: 1 },
                { question: 'Combien font 20 + 30 + 10 ?', reponses: ['50', '60', '70', '80'], correct: 1 },
                { question: 'Quel nombre vient après 99 ?', reponses: ['98', '100', '101', '110'], correct: 1 }
            ],
            remediation: {
                titre: '💡 Les nombres jusqu\'à 100',
                texte: 'Compte de 10 en 10 : 10, 20, 30... 100. Puis ajoute les unités : 11, 12, 13...'
            }
        },

        // ===== ADDITIONS =====
        {
            id: 'math-additions',
            titre: 'Les additions',
            description: 'Additions simples et à trous',
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
            remediation: {
                titre: '💡 L\'addition',
                texte: 'L\'addition, c\'est quand on ajoute des objets. Compte sur tes doigts : 2 doigts + 3 doigts = 5 doigts !'
            }
        },

        // ===== SOUSTRACTIONS =====
        {
            id: 'math-soustractions',
            titre: 'Les soustractions',
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
            remediation: {
                titre: '💡 La soustraction',
                texte: 'La soustraction, c\'est quand on enlève. 5 bonbons - 2 mangés = 3 bonbons qui restent.'
            }
        },

        // ===== ADDITIONS À TROUS =====
        {
            id: 'math-trous',
            titre: 'Additions à trous',
            description: 'Trouve le nombre manquant',
            icone: '🔍',
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
            remediation: {
                titre: '💡 Trouver le nombre manquant',
                texte: 'Si 3 + ? = 5, alors ? = 5 - 3 = 2. La soustraction aide à trouver le nombre manquant !'
            }
        },

        // ===== COMPARER DES NOMBRES =====
        {
            id: 'math-comparer',
            titre: 'Comparer des nombres',
            description: 'Plus grand, plus petit, égal',
            icone: '⚖️',
            niveau: 1,
            type: 'qcm',
            consigne: 'Choisis la bonne réponse',
            questions: [
                { question: '5 est plus grand que...', reponses: ['6', '7', '4', '8'], correct: 2 },
                { question: '8 est plus petit que...', reponses: ['7', '6', '5', '9'], correct: 3 },
                { question: 'Quel est le plus grand ?', reponses: ['12', '21', '11', '10'], correct: 1 },
                { question: 'Quel est le plus petit ?', reponses: ['15', '51', '25', '12'], correct: 3 },
                { question: '7 ___ 9 (choisis le signe)', reponses: ['>', '<', '='], correct: 1 },
                { question: '12 ___ 8 (choisis le signe)', reponses: ['>', '<', '='], correct: 0 },
                { question: 'Range du plus petit au plus grand : 5, 3, 8', reponses: ['3, 5, 8', '5, 3, 8', '8, 5, 3', '3, 8, 5'], correct: 0 },
                { question: 'Range du plus grand au plus petit : 9, 4, 7', reponses: ['4, 7, 9', '9, 7, 4', '7, 9, 4', '9, 4, 7'], correct: 1 }
            ],
            remediation: {
                titre: '💡 Comparer des nombres',
                texte: 'Le signe > veut dire "plus grand que". Le signe < veut dire "plus petit que". La bouche du crocodile mange le plus grand !'
            }
        },

        // ===== GÉOMÉTRIE - FORMES =====
        {
            id: 'math-formes',
            titre: 'Les formes géométriques',
            description: 'Carré, rond, triangle, rectangle',
            icone: '🔷',
            niveau: 1,
            type: 'qcm',
            consigne: 'Reconnais la forme',
            questions: [
                { question: 'Combien de côtés a un carré ?', reponses: ['3', '4', '5', '6'], correct: 1 },
                { question: 'Combien de côtés a un triangle ?', reponses: ['2', '3', '4', '5'], correct: 1 },
                { question: 'Quelle forme n\'a pas de côté ?', reponses: ['Carré', 'Triangle', 'Rond', 'Rectangle'], correct: 2 },
                { question: 'Combien de côtés a un rectangle ?', reponses: ['3', '4', '5', '6'], correct: 1 },
                { question: 'Une balle a la forme d\'un...', reponses: ['carré', 'triangle', 'rond', 'rectangle'], correct: 2 },
                { question: 'Une porte a la forme d\'un...', reponses: ['carré', 'triangle', 'rond', 'rectangle'], correct: 3 },
                { question: 'Un panneau "stop" a la forme d\'un...', reponses: ['carré', 'triangle', 'octogone', 'rond'], correct: 2 },
                { question: 'Combien de côtés a un hexagone ?', reponses: ['4', '5', '6', '7'], correct: 2 }
            ],
            remediation: {
                titre: '💡 Les formes',
                texte: '• Carré : 4 côtés égaux\n• Rectangle : 4 côtés (2 longs, 2 courts)\n• Triangle : 3 côtés\n• Rond : pas de côté'
            }
        },

        // ===== HEURE =====
        {
            id: 'math-heure',
            titre: 'Lire l\'heure',
            description: 'Heures piles et demies',
            icone: '🕐',
            niveau: 2,
            type: 'qcm',
            consigne: 'Quelle heure est-il ?',
            questions: [
                { question: 'La petite aiguille sur le 3, la grande sur le 12', reponses: ['3h00', '12h00', '3h30', '12h30'], correct: 0 },
                { question: 'La petite aiguille entre 6 et 7, la grande sur le 6', reponses: ['6h00', '6h30', '7h00', '7h30'], correct: 1 },
                { question: 'Combien de minutes dans une heure ?', reponses: ['30', '45', '60', '100'], correct: 2 },
                { question: 'Combien d\'heures dans une journée ?', reponses: ['12', '24', '30', '60'], correct: 1 },
                { question: 'La petite aiguille sur le 9, la grande sur le 12', reponses: ['9h00', '12h00', '9h30', '12h30'], correct: 0 },
                { question: 'Combien de minutes dans une demi-heure ?', reponses: ['15', '30', '45', '60'], correct: 1 },
                { question: 'Il est 8h. Dans 1 heure, il sera...', reponses: ['7h', '9h', '10h', '8h30'], correct: 1 },
                { question: 'Il est 10h30. Dans 30 minutes, il sera...', reponses: ['10h', '11h', '11h30', '10h'], correct: 1 }
            ],
            remediation: {
                titre: '💡 Lire l\'heure',
                texte: '• La petite aiguille = les heures\n• La grande aiguille = les minutes\n• Quand la grande est sur 12 : heure pile\n• Quand la grande est sur 6 : heure et demie'
            }
        },

        // ===== EUROS / MONNAIE =====
        {
            id: 'math-euros',
            titre: 'Les euros',
            description: 'Reconnaître les pièces et billets',
            icone: '💶',
            niveau: 2,
            type: 'qcm',
            consigne: 'Calcule avec les euros',
            questions: [
                { question: 'Combien vaut une pièce de 1 € ?', reponses: ['1 €', '2 €', '5 €', '10 €'], correct: 0 },
                { question: '1 € + 1 € = ?', reponses: ['1 €', '2 €', '3 €', '10 €'], correct: 1 },
                { question: '2 € + 3 € = ?', reponses: ['4 €', '5 €', '6 €', '7 €'], correct: 1 },
                { question: '5 € + 5 € = ?', reponses: ['5 €', '10 €', '15 €', '20 €'], correct: 1 },
                { question: '10 € - 3 € = ?', reponses: ['5 €', '6 €', '7 €', '8 €'], correct: 2 },
                { question: 'Tu as 5 €, tu achètes à 3 €. Il te reste...', reponses: ['1 €', '2 €', '3 €', '4 €'], correct: 1 },
                { question: 'Combien de pièces de 1 € pour faire 10 € ?', reponses: ['5', '10', '15', '20'], correct: 1 },
                { question: '2 € + 2 € + 1 € = ?', reponses: ['3 €', '4 €', '5 €', '6 €'], correct: 2 }
            ],
            remediation: {
                titre: '💡 Compter les euros',
                texte: 'Les euros s\'additionnent comme les nombres : 2 € + 3 € = 5 €. Entraîne-toi avec de la fausse monnaie !'
            }
        },

        // ===== PROBLÈMES =====
        {
            id: 'math-problemes',
            titre: 'Petits problèmes',
            description: 'Résous des problèmes simples',
            icone: '🧩',
            niveau: 2,
            type: 'qcm',
            consigne: 'Lis et résous',
            questions: [
                { question: 'Léa a 3 bonbons. Maman lui en donne 2. Combien en a-t-elle ?', reponses: ['4', '5', '6', '7'], correct: 1 },
                { question: 'Tom a 8 billes. Il en perd 3. Combien lui en reste-t-il ?', reponses: ['4', '5', '6', '7'], correct: 1 },
                { question: 'Il y a 5 oiseaux. 2 s\'envolent. Combien restent-ils ?', reponses: ['2', '3', '4', '5'], correct: 1 },
                { question: 'Paul a 4 ans. Sa sœur a 6 ans. Quel âge ont-ils à eux deux ?', reponses: ['8', '9', '10', '11'], correct: 2 },
                { question: 'Dans une boîte il y a 10 crayons. J\'en prends 4. Combien en reste-t-il ?', reponses: ['4', '5', '6', '7'], correct: 2 },
                { question: 'Julie mange 2 pommes le matin et 1 le soir. Combien en a-t-elle mangé ?', reponses: ['2', '3', '4', '5'], correct: 1 },
                { question: 'Un jardin a 6 fleurs rouges et 4 jaunes. Combien de fleurs en tout ?', reponses: ['8', '9', '10', '11'], correct: 2 },
                { question: 'J\'avais 15 images, j\'en gagne 5. Combien en ai-je ?', reponses: ['15', '20', '25', '30'], correct: 1 }
            ],
            remediation: {
                titre: '💡 Résoudre un problème',
                texte: '1. Lis bien l\'histoire\n2. Repère les nombres\n3. Demande-toi : est-ce que j\'ajoute ou j\'enlève ?\n4. Calcule et vérifie'
            }
        },

        // ===== MULTIPLICATIONS DÉBUT =====
        {
            id: 'math-multiplications',
            titre: 'Les doubles',
            description: 'Apprends les doubles (2+2, 3+3...)',
            icone: '✖️',
            niveau: 3,
            type: 'qcm',
            consigne: 'Quel est le double ?',
            questions: [
                { question: 'Le double de 2, c\'est...', reponses: ['2', '3', '4', '5'], correct: 2 },
                { question: 'Le double de 3, c\'est...', reponses: ['5', '6', '7', '8'], correct: 1 },
                { question: 'Le double de 4, c\'est...', reponses: ['6', '7', '8', '9'], correct: 2 },
                { question: 'Le double de 5, c\'est...', reponses: ['8', '9', '10', '11'], correct: 2 },
                { question: 'Le double de 6, c\'est...', reponses: ['10', '11', '12', '13'], correct: 2 },
                { question: 'Le double de 7, c\'est...', reposes: ['12', '13', '14', '15'], correct: 2, reponses: ['12', '13', '14', '15'] },
                { question: 'Le double de 8, c\'est...', reponses: ['14', '15', '16', '17'], correct: 2 },
                { question: 'Le double de 9, c\'est...', reponses: ['16', '17', '18', '19'], correct: 2 }
            ],
            remediation: {
                titre: '💡 Les doubles',
                texte: 'Le double d\'un nombre, c\'est le nombre ajouté à lui-même : double de 5 = 5 + 5 = 10.'
            }
        },

        // ===== MESURES =====
        {
            id: 'math-mesures',
            titre: 'Les mesures',
            description: 'Longueurs, masses, contenances',
            icone: '📏',
            niveau: 3,
            type: 'qcm',
            consigne: 'Choisis la bonne réponse',
            questions: [
                { question: 'Avec quoi mesure-t-on une longueur ?', reponses: ['Balance', 'Règle', 'Verre', 'Montre'], correct: 1 },
                { question: 'Avec quoi mesure-t-on une masse ?', reponses: ['Balance', 'Règle', 'Verre', 'Montre'], correct: 0 },
                { question: 'Combien de cm dans 1 mètre ?', reponses: ['10', '50', '100', '1000'], correct: 2 },
                { question: 'Combien de grammes dans 1 kg ?', reponses: ['10', '100', '500', '1000'], correct: 3 },
                { question: 'Combien de mL dans 1 litre ?', reponses: ['10', '100', '500', '1000'], correct: 3 },
                { question: 'Un crayon mesure environ...', reponses: ['1 cm', '15 cm', '1 m', '1 km'], correct: 1 },
                { question: 'Une voiture pèse environ...', reponses: ['1 g', '1 kg', '100 kg', '1000 kg'], correct: 3 },
                { question: 'Une bouteille d\'eau contient...', reponses: ['1 mL', '100 mL', '1 L', '10 L'], correct: 2 }
            ],
            remediation: {
                titre: '💡 Les mesures',
                texte: '• Longueur : mètre (m), centimètre (cm)\n• Masse : kilogramme (kg), gramme (g)\n• Contenance : litre (L), millilitre (mL)'
            }
        }
    ]
};
