// ===== DONNÉES FRANÇAIS CP =====
const DATA_FRANCAIS = {
    modules: [
        // ===== LECTURE - VOYELLES =====
        {
            id: 'fr-voyelles',
            titre: 'Les voyelles',
            description: 'Reconnais les voyelles a, e, i, o, u, y',
            icone: '🔤',
            niveau: 1,
            type: 'qcm',
            consigne: 'Clique sur la bonne réponse !',
            questions: [
                { question: 'Quelle est une voyelle ?', reponses: ['a', 'b', 'c', 'd'], correct: 0, aide: 'Les voyelles sont : a, e, i, o, u, y' },
                { question: 'Trouve la voyelle :', reponses: ['p', 't', 'o', 'm'], correct: 2, aide: 'Regarde bien les lettres : a, e, i, o, u, y' },
                { question: 'Combien y a-t-il de voyelles ?', reponses: ['4', '5', '6', '7'], correct: 2, aide: 'a, e, i, o, u, y = 6 voyelles' },
                { question: 'Quelle lettre n\'est PAS une voyelle ?', reponses: ['a', 'e', 'f', 'i'], correct: 2 },
                { question: 'La lettre "u" est-elle une voyelle ?', reponses: ['Oui', 'Non'], correct: 0 },
                { question: 'Trouve la voyelle manquante : a, e, i, __', reponses: ['o', 'b', 'p', 'z'], correct: 0 },
                { question: 'Quelle est la première voyelle ?', reponses: ['a', 'e', 'i', 'o'], correct: 0 },
                { question: 'Le "y" est-il une voyelle ?', reponses: ['Oui', 'Non'], correct: 0 }
            ],
            remediation: {
                titre: '💡 Astuce pour retenir les voyelles',
                texte: 'Apprends cette phrase magique : "Où es-tu, Anaïs ?" → O-ù-e-s-t-u-A-n-a-ï-s → les voyelles sont O, U, E, A, I !'
            }
        },

        // ===== LECTURE - SYLLABES =====
        {
            id: 'fr-syllabes',
            titre: 'Former des syllabes',
            description: 'Associe consonnes et voyelles',
            icone: '🔗',
            niveau: 1,
            type: 'qcm',
            consigne: 'Quelle syllabe est correcte ?',
            questions: [
                { question: 'm + a = ?', reponses: ['ma', 'am', 'me', 'mi'], correct: 0 },
                { question: 'p + o = ?', reponses: ['op', 'po', 'pu', 'pa'], correct: 1 },
                { question: 't + i = ?', reponses: ['ta', 'tu', 'ti', 'to'], correct: 2 },
                { question: 'r + u = ?', reponses: ['ra', 'ro', 'ri', 'ru'], correct: 3 },
                { question: 'l + e = ?', reponses: ['la', 'le', 'li', 'lu'], correct: 1 },
                { question: 's + i = ?', reponses: ['sa', 'so', 'su', 'si'], correct: 3 },
                { question: 'v + a = ?', reponses: ['va', 'vo', 'vu', 'vi'], correct: 0 },
                { question: 'd + o = ?', reponses: ['da', 'do', 'du', 'di'], correct: 1 }
            ],
            remediation: {
                titre: '💡 Comment former une syllabe',
                texte: 'On met la consonne AVANT la voyelle : m + a = ma (pas am !). Entraîne-toi à voix haute !'
            }
        },

        // ===== LECTURE - MOTS SIMPLES =====
        {
            id: 'fr-mots',
            titre: 'Lire des mots simples',
            description: 'Déchiffre des mots courts',
            icone: '📚',
            niveau: 1,
            type: 'qcm',
            consigne: 'Comment lit-on ce mot ?',
            questions: [
                { question: 'Comment lit-on "papa" ?', reponses: ['papa', 'popo', 'pipi', 'pupu'], correct: 0 },
                { question: 'Comment lit-on "midi" ?', reponses: ['mado', 'midi', 'modi', 'madi'], correct: 1 },
                { question: 'Comment lit-on "lune" ?', reponses: ['line', 'lone', 'lune', 'lane'], correct: 2 },
                { question: 'Comment lit-on "vélo" ?', reponses: ['valo', 'vilo', 'volo', 'vélo'], correct: 3 },
                { question: 'Comment lit-on "chat" ?', reponses: ['chat', 'chot', 'chut', 'chit'], correct: 0 },
                { question: 'Comment lit-on "roue" ?', reponses: ['rie', 'roue', 'raie', 'roi'], correct: 1 },
                { question: 'Comment lit-on "table" ?', reponses: ['tible', 'toble', 'table', 'tuble'], correct: 2 },
                { question: 'Comment lit-on "école" ?', reponses: ['école', 'écale', 'écolo', 'écôle'], correct: 0 }
            ],
            remediation: {
                titre: '💡 Technique de lecture',
                texte: 'Découpe le mot en syllabes : pa-pa, mi-di, lu-ne. Puis assemble les syllabes pour former le mot.'
            }
        },

        // ===== LECTURE - PHRASES =====
        {
            id: 'fr-phrases',
            titre: 'Lire des phrases',
            description: 'Lis et comprends des phrases',
            icone: '📖',
            niveau: 2,
            type: 'qcm',
            consigne: 'Lis la phrase et choisis la bonne réponse',
            questions: [
                { question: '"Le chat dort." Que fait le chat ?', reponses: ['Il mange', 'Il dort', 'Il court', 'Il joue'], correct: 1 },
                { question: '"La pomme est rouge." De quelle couleur est la pomme ?', reponses: ['Verte', 'Jaune', 'Rouge', 'Bleue'], correct: 2 },
                { question: '"Papa lit le journal." Que lit papa ?', reponses: ['Un livre', 'Le journal', 'Une lettre', 'Une BD'], correct: 1 },
                { question: '"Le chien aboie." Quel animal fait du bruit ?', reponses: ['Le chat', 'Le chien', 'Le lapin', 'L\'oiseau'], correct: 1 },
                { question: '"Maman cuisine." Que fait maman ?', reponses: ['Elle dort', 'Elle lit', 'Elle cuisine', 'Elle chante'], correct: 2 },
                { question: '"Il pleut dehors." Quel temps fait-il ?', reponses: ['Il fait beau', 'Il neige', 'Il pleut', 'Il fait chaud'], correct: 2 }
            ],
            remediation: {
                titre: '💡 Comprendre une phrase',
                texte: 'Lis la phrase lentement, deux fois si besoin. Repère le sujet (qui ?) et l\'action (quoi ?).'
            }
        },

        // ===== ORTHOGRAPHE - MOTS À TROUS =====
        {
            id: 'fr-trous',
            titre: 'Mots à trous',
            description: 'Complète les mots manquants',
            icone: '✏️',
            niveau: 2,
            type: 'saisie',
            consigne: 'Écris la lettre manquante',
            questions: [
                { question: 'm_t_n (moment)', reponse: 'o', aide: 'La lettre entre m et t' },
                { question: 's_le (soleil)', reponse: 'o', aide: 'Commence par s, finit par le' },
                { question: 'l_ne (lune)', reponse: 'u', aide: 'L\'astre la nuit' },
                { question: 'p_p_ (papa)', reponse: 'a', aide: 'Le père' },
                { question: 'm_m_n (maman)', reponse: 'a', aide: 'La mère' },
                { question: 'ch_t (chat)', reponse: 'a', aide: 'L\'animal qui miaule' },
                { question: 'p_ne (poule)', reponse: 'o', aide: 'L\'animal qui pond des œufs' },
                { question: 't_ble (table)', reponse: 'a', aide: 'On mange dessus' }
            ],
            remediation: {
                titre: '💡 Écrire sans erreur',
                texte: 'Prononce le mot lentement, syllabe par syllabe. Écoute bien le son de chaque lettre.'
            }
        },

        // ===== GRAMMAIRE - ARTICLES =====
        {
            id: 'fr-articles',
            titre: 'Les articles',
            description: 'le, la, les, un, une, des',
            icone: '📝',
            niveau: 2,
            type: 'qcm',
            consigne: 'Choisis le bon article',
            questions: [
                { question: '___ chat (masculin singulier)', reponses: ['Le', 'La', 'Les'], correct: 0 },
                { question: '___ maison (féminin singulier)', reponses: ['Le', 'La', 'Les'], correct: 1 },
                { question: '___ enfants (pluriel)', reponses: ['Le', 'La', 'Les'], correct: 2 },
                { question: '___ pomme (féminin singulier)', reponses: ['Un', 'Une', 'Des'], correct: 1 },
                { question: '___ chien (masculin singulier)', reponses: ['Un', 'Une', 'Des'], correct: 0 },
                { question: '___ fleurs (pluriel)', reponses: ['Un', 'Une', 'Des'], correct: 2 },
                { question: '___ soleil', reponses: ['Le', 'La', 'Les'], correct: 0 },
                { question: '___ école', reponses: ['Un', 'Une', 'L\'', 'Les'], correct: 2 }
            ],
            remediation: {
                titre: '💡 Les articles',
                texte: '• le/la = un seul (singulier)\n• les = plusieurs (pluriel)\n• un/une = un seul\n• des = plusieurs'
            }
        },

        // ===== VOCABULAIRE - ANIMAUX =====
        {
            id: 'fr-animaux',
            titre: 'Les animaux',
            description: 'Nomme et classe les animaux',
            icone: '🐶',
            niveau: 1,
            type: 'qcm',
            consigne: 'Choisis la bonne réponse',
            questions: [
                { question: 'Quel animal fait "miaou" ?', reponses: ['Le chien', 'Le chat', 'La vache', 'Le mouton'], correct: 1 },
                { question: 'Quel animal donne du lait ?', reponses: ['Le cochon', 'Le cheval', 'La vache', 'Le poulet'], correct: 2 },
                { question: 'Quel animal a une trompe ?', reponses: ['Le lion', 'L\'éléphant', 'La girafe', 'Le singe'], correct: 1 },
                { question: 'Quel animal pond des œufs ?', reponses: ['Le chat', 'Le chien', 'La poule', 'La vache'], correct: 2 },
                { question: 'Quel animal vit dans l\'eau ?', reponses: ['Le poisson', 'Le chat', 'Le lapin', 'L\'oiseau'], correct: 0 },
                { question: 'Quel animal a des ailes ?', reponses: ['Le chien', 'L\'oiseau', 'Le poisson', 'La vache'], correct: 1 },
                { question: 'Quel animal est le "roi de la jungle" ?', reponses: ['Le tigre', 'L\'éléphant', 'Le lion', 'L\'ours'], correct: 2 },
                { question: 'Quel animal a une longue crinière ?', reponses: ['Le lion', 'Le cheval', 'Le chien', 'Le chat'], correct: 0 }
            ],
            remediation: {
                titre: '💡 Mémoriser les animaux',
                texte: 'Regarde des images d\'animaux et dis leur nom à voix haute. Imiter leur cri aide à mémoriser !'
            }
        },

        // ===== VOCABULAIRE - COULEURS =====
        {
            id: 'fr-couleurs',
            titre: 'Les couleurs',
            description: 'Reconnais et nomme les couleurs',
            icone: '🎨',
            niveau: 1,
            type: 'qcm',
            consigne: 'Quelle est la bonne couleur ?',
            questions: [
                { question: 'De quelle couleur est le soleil ?', reponses: ['Bleu', 'Jaune', 'Vert', 'Rouge'], correct: 1 },
                { question: 'De quelle couleur est le ciel ?', reponses: ['Rouge', 'Vert', 'Bleu', 'Noir'], correct: 2 },
                { question: 'De quelle couleur est l\'herbe ?', reponses: ['Bleue', 'Jaune', 'Verte', 'Rouge'], correct: 2 },
                { question: 'De quelle couleur est la neige ?', reponses: ['Noire', 'Blanche', 'Grise', 'Rose'], correct: 1 },
                { question: 'De quelle couleur est la tomate ?', reponses: ['Bleue', 'Jaune', 'Rouge', 'Verte'], correct: 2 },
                { question: 'De quelle couleur est la banane ?', reponses: ['Rouge', 'Jaune', 'Bleue', 'Noire'], correct: 1 },
                { question: 'Quelle couleur obtient-on avec bleu + jaune ?', reponses: ['Rouge', 'Vert', 'Orange', 'Violet'], correct: 1 },
                { question: 'Quelle couleur obtient-on avec rouge + bleu ?', reponses: ['Vert', 'Orange', 'Violet', 'Rose'], correct: 2 }
            ],
            remediation: {
                titre: '💡 Apprendre les couleurs',
                texte: 'Regarde autour de toi et nomme la couleur de chaque objet. Joue à "je vois quelque chose de..." !'
            }
        },

        // ===== CONJUGAISON - ÊTRE ET AVOIR =====
        {
            id: 'fr-etre-avoir',
            titre: 'Être et Avoir',
            description: 'Conjugue les verbes être et avoir au présent',
            icone: '🎯',
            niveau: 3,
            type: 'qcm',
            consigne: 'Conjugue correctement',
            questions: [
                { question: 'Je ___ content. (être)', reponses: ['suis', 'es', 'est', 'sommes'], correct: 0 },
                { question: 'Tu ___ un chat. (avoir)', reponses: ['ai', 'as', 'a', 'avons'], correct: 1 },
                { question: 'Il ___ grand. (être)', reponses: ['suis', 'es', 'est', 'sont'], correct: 2 },
                { question: 'Nous ___ à l\'école. (être)', reponses: ['suis', 'es', 'est', 'sommes'], correct: 3 },
                { question: 'Vous ___ une maison. (avoir)', reponses: ['ai', 'as', 'avez', 'ont'], correct: 2 },
                { question: 'Ils ___ gentils. (être)', reponses: ['est', 'sont', 'sommes', 'êtes'], correct: 1 },
                { question: 'J\' ___ un vélo. (avoir)', reponses: ['ai', 'as', 'a', 'ont'], correct: 0 },
                { question: 'Elle ___ belle. (être)', reponses: ['suis', 'es', 'est', 'sont'], correct: 2 }
            ],
            remediation: {
                titre: '💡 Conjuguer être et avoir',
                texte: 'Être : je suis, tu es, il est, nous sommes, vous êtes, ils sont.\nAvoir : j\'ai, tu as, il a, nous avons, vous avez, ils ont.'
            }
        },

        // ===== ÉCRITURE - LETTRES SCRIPT =====
        {
            id: 'fr-lettres',
            titre: 'Les lettres de l\'alphabet',
            description: 'Reconnais les 26 lettres',
            icone: '🔠',
            niveau: 1,
            type: 'qcm',
            consigne: 'Quelle est la bonne lettre ?',
            questions: [
                { question: 'Quelle lettre vient après A ?', reponses: ['B', 'C', 'D', 'Z'], correct: 0 },
                { question: 'Quelle lettre vient après M ?', reponses: ['L', 'N', 'O', 'P'], correct: 1 },
                { question: 'Quelle lettre vient avant Z ?', reponses: ['X', 'Y', 'W', 'V'], correct: 1 },
                { question: 'Combien de lettres dans l\'alphabet ?', reponses: ['24', '25', '26', '27'], correct: 2 },
                { question: 'Quelle est la dernière lettre ?', reponses: ['X', 'Y', 'Z', 'W'], correct: 2 },
                { question: 'Quelle lettre vient entre D et F ?', reponses: ['C', 'E', 'G', 'H'], correct: 1 },
                { question: 'Quelle lettre vient entre P et R ?', reponses: ['O', 'Q', 'S', 'T'], correct: 1 },
                { question: 'Première lettre de "MAMAN" ?', reponses: ['A', 'M', 'N', 'P'], correct: 1 }
            ],
            remediation: {
                titre: '💡 L\'alphabet en chanson',
                texte: 'Chante l\'alphabet : A B C D E F G H I J K L M N O P Q R S T U V W X Y Z !'
            }
        },

        // ===== LECTURE - SONS COMPLEXES =====
        {
            id: 'fr-sons',
            titre: 'Les sons complexes',
            description: 'ou, oi, an, en, on, in',
            icone: '🔊',
            niveau: 2,
            type: 'qcm',
            consigne: 'Quel est le bon son ?',
            questions: [
                { question: 'Dans "poule", on entend :', reponses: ['ou', 'oi', 'o', 'u'], correct: 0 },
                { question: 'Dans "voiture", on entend :', reponses: ['an', 'oi', 'ou', 'on'], correct: 1 },
                { question: 'Dans "ballon", on entend :', reponses: ['an', 'en', 'on', 'in'], correct: 2 },
                { question: 'Dans "lapin", on entend :', reponses: ['an', 'en', 'on', 'in'], correct: 3 },
                { question: 'Dans "danse", on entend :', reponses: ['an', 'en', 'on', 'in'], correct: 0 },
                { question: 'Dans "vent", on entend :', reponses: ['an', 'en', 'on', 'in'], correct: 1 },
                { question: 'Dans "bouton", on entend :', reponses: ['ou + an', 'ou + on', 'ou + in', 'ou + en'], correct: 1 },
                { question: 'Dans "pion", on entend :', reponses: ['pi + on', 'pi + an', 'pi + in', 'pi + en'], correct: 0 }
            ],
            remediation: {
                titre: '💡 Les sons complexes',
                texte: '• "ou" comme dans poule\n• "oi" comme dans voiture\n• "on" comme dans ballon\n• "an/en" comme dans danse/vent\n• "in" comme dans lapin'
            }
        },

        // ===== VOCABULAIRE - FAMILLE =====
        {
            id: 'fr-famille',
            titre: 'La famille',
            description: 'Les membres de la famille',
            icone: '👨‍👩‍👧',
            niveau: 1,
            type: 'qcm',
            consigne: 'Qui est-ce ?',
            questions: [
                { question: 'Le père de papa est mon :', reponses: ['oncle', 'grand-père', 'frère', 'cousin'], correct: 1 },
                { question: 'La mère de maman est ma :', reponses: ['tante', 'sœur', 'grand-mère', 'cousine'], correct: 2 },
                { question: 'Le frère de papa est mon :', reponses: ['oncle', 'grand-père', 'papa', 'cousin'], correct: 0 },
                { question: 'La sœur de maman est ma :', reponses: ['grand-mère', 'tante', 'cousine', 'maman'], correct: 1 },
                { question: 'Le fils de mon oncle est mon :', reponses: ['frère', 'cousin', 'oncle', 'papa'], correct: 1 },
                { question: 'La fille de ma tante est ma :', reponses: ['sœur', 'tante', 'cousine', 'maman'], correct: 2 },
                { question: 'Le mari de ma sœur est mon :', reponses: ['oncle', 'cousin', 'beau-frère', 'frère'], correct: 2 },
                { question: 'Combien de grands-parents a-t-on en général ?', reponses: ['2', '3', '4', '5'], correct: 2 }
            ],
            remediation: {
                titre: '💡 La famille',
                texte: 'Dessine un arbre généalogique avec les noms de ta famille. C\'est plus facile à retenir !'
            }
        }
    ]
};
