// ===== KIDLEARN CP - DONNÉES FRANÇAIS =====
// Copyright (c) 2026 KidLearn. Tous droits réservés.

const DATA_FRANCAIS = {
    modules: [
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
                { question: 'Trouve la voyelle :', reponses: ['p', 't', 'o', 'm'], correct: 2 },
                { question: 'Combien y a-t-il de voyelles ?', reponses: ['4', '5', '6', '7'], correct: 2 },
                { question: 'Quelle lettre n\'est PAS une voyelle ?', reponses: ['a', 'e', 'f', 'i'], correct: 2 },
                { question: 'La lettre "u" est-elle une voyelle ?', reponses: ['Oui', 'Non'], correct: 0 },
                { question: 'Trouve la voyelle manquante : a, e, i, __', reponses: ['o', 'b', 'p', 'z'], correct: 0 },
                { question: 'Quelle est la première voyelle ?', reponses: ['a', 'e', 'i', 'o'], correct: 0 },
                { question: 'Le "y" est-il une voyelle ?', reponses: ['Oui', 'Non'], correct: 0 }
            ],
            remediation: { titre: '💡 Astuce', texte: 'Phrase magique : "Où es-tu, Anaïs ?" → O-U-E-A-I' }
        },
        {
            id: 'fr-consonnes',
            titre: 'Les consonnes',
            description: 'Reconnais les consonnes',
            icone: '🔡',
            niveau: 1,
            type: 'qcm',
            consigne: 'Trouve la consonne',
            questions: [
                { question: 'Quelle est une consonne ?', reponses: ['a', 'b', 'e', 'i'], correct: 1 },
                { question: 'Combien de consonnes dans l\'alphabet ?', reponses: ['20', '21', '22', '26'], correct: 0 },
                { question: 'Quelle lettre n\'est PAS une consonne ?', reponses: ['b', 'c', 'o', 'd'], correct: 2 },
                { question: 'La lettre "m" est-elle une consonne ?', reponses: ['Oui', 'Non'], correct: 0 },
                { question: 'Trouve la consonne :', reponses: ['e', 'u', 'r', 'i'], correct: 2 },
                { question: 'Quelle consonne vient après B ?', reponses: ['A', 'C', 'D', 'E'], correct: 1 },
                { question: 'Quelle consonne vient après M ?', reponses: ['L', 'N', 'O', 'P'], correct: 1 },
                { question: 'La dernière consonne de l\'alphabet ?', reponses: ['v', 'w', 'x', 'z'], correct: 3 }
            ],
            remediation: { titre: '💡 Les consonnes', texte: 'Toutes les lettres qui ne sont PAS des voyelles (a, e, i, o, u, y).' }
        },
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
            remediation: { titre: '💡 Syllabes', texte: 'Consonne AVANT voyelle : m + a = ma (pas am !)' }
        },
        {
            id: 'fr-syllabes-complexes',
            titre: 'Syllabes complexes',
            description: 'bl, cl, fl, gr, tr, br...',
            icone: '🔀',
            niveau: 2,
            type: 'qcm',
            consigne: 'Quelle syllabe est correcte ?',
            questions: [
                { question: 'b + l + a = ?', reponses: ['bal', 'bla', 'lab', 'alb'], correct: 1 },
                { question: 't + r + i = ?', reponses: ['tir', 'tri', 'rit', 'irt'], correct: 1 },
                { question: 'f + l + eu = ?', reponses: ['fel', 'fle', 'fleu', 'lef'], correct: 2 },
                { question: 'g + r + o = ?', reponses: ['gor', 'gro', 'rog', 'org'], correct: 1 },
                { question: 'c + l + ou = ?', reponses: ['col', 'clo', 'clou', 'loc'], correct: 2 },
                { question: 'p + r + i = ?', reponses: ['pir', 'pri', 'rip', 'irp'], correct: 1 },
                { question: 'b + r + ou = ?', reponses: ['bor', 'bro', 'brou', 'rob'], correct: 2 },
                { question: 'f + r + a = ?', reponses: ['far', 'fra', 'raf', 'arf'], correct: 1 }
            ],
            remediation: { titre: '💡 Syllabes complexes', texte: '2 consonnes ensemble : bl, cl, fl, gl, pl, br, cr, dr, fr, gr, pr, tr.' }
        },
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
            remediation: { titre: '💡 Lecture', texte: 'Découpe en syllabes : pa-pa, mi-di, lu-ne. Puis assemble.' }
        },
        {
            id: 'fr-phrases',
            titre: 'Lire des phrases',
            description: 'Lis et comprends',
            icone: '📖',
            niveau: 2,
            type: 'qcm',
            consigne: 'Lis et choisis',
            questions: [
                { question: '"Le chat dort." Que fait le chat ?', reponses: ['Il mange', 'Il dort', 'Il court', 'Il joue'], correct: 1 },
                { question: '"La pomme est rouge." Couleur ?', reponses: ['Verte', 'Jaune', 'Rouge', 'Bleue'], correct: 2 },
                { question: '"Papa lit le journal." Que lit papa ?', reponses: ['Un livre', 'Le journal', 'Une lettre', 'Une BD'], correct: 1 },
                { question: '"Le chien aboie." Qui fait du bruit ?', reponses: ['Le chat', 'Le chien', 'Le lapin', 'L\'oiseau'], correct: 1 },
                { question: '"Maman cuisine." Que fait maman ?', reponses: ['Elle dort', 'Elle lit', 'Elle cuisine', 'Elle chante'], correct: 2 },
                { question: '"Il pleut dehors." Quel temps ?', reponses: ['Beau', 'Neige', 'Pluie', 'Chaud'], correct: 2 }
            ],
            remediation: { titre: ' Compréhension', texte: 'Lis 2 fois. Qui ? (sujet) + Fait quoi ? (action)' }
        },
        {
            id: 'fr-trous',
            titre: 'Mots à trous',
            description: 'Complète les lettres',
            icone: '✏️',
            niveau: 2,
            type: 'saisie',
            consigne: 'Écris la lettre manquante',
            questions: [
                { question: 'm_t_n (moment)', reponse: 'o', aide: 'Entre m et t' },
                { question: 's_le (soleil)', reponse: 'o', aide: 'Commence par s' },
                { question: 'l_ne (lune)', reponse: 'u', aide: 'La nuit' },
                { question: 'p_p_ (papa)', reponse: 'a', aide: 'Le père' },
                { question: 'm_m_n (maman)', reponse: 'a', aide: 'La mère' },
                { question: 'ch_t (chat)', reponse: 'a', aide: 'Miaule' },
                { question: 'p_ne (poule)', reponse: 'o', aide: 'Pond des œufs' },
                { question: 't_ble (table)', reponse: 'a', aide: 'On mange dessus' }
            ],
            remediation: { titre: '💡 Écriture', texte: 'Prononce lentement, syllabe par syllabe.' }
        },
        {
            id: 'fr-articles',
            titre: 'Les articles',
            description: 'le, la, les, un, une, des',
            icone: '📝',
            niveau: 2,
            type: 'qcm',
            consigne: 'Choisis le bon article',
            questions: [
                { question: '___ chat', reponses: ['Le', 'La', 'Les'], correct: 0 },
                { question: '___ maison', reponses: ['Le', 'La', 'Les'], correct: 1 },
                { question: '___ enfants', reponses: ['Le', 'La', 'Les'], correct: 2 },
                { question: '___ pomme', reponses: ['Un', 'Une', 'Des'], correct: 1 },
                { question: '___ chien', reponses: ['Un', 'Une', 'Des'], correct: 0 },
                { question: '___ fleurs', reponses: ['Un', 'Une', 'Des'], correct: 2 },
                { question: '___ soleil', reponses: ['Le', 'La', 'Les'], correct: 0 },
                { question: '___ école', reponses: ['Un', 'Une', 'L\'', 'Les'], correct: 2 }
            ],
            remediation: { titre: '💡 Articles', texte: 'le/la = 1 seul, les = plusieurs, un/une = 1, des = plusieurs' }
        },
        {
            id: 'fr-genre',
            titre: 'Masculin et féminin',
            description: 'Reconnais le genre',
            icone: '⚧️',
            niveau: 2,
            type: 'qcm',
            consigne: 'Masculin ou féminin ?',
            questions: [
                { question: 'Le chat est...', reponses: ['Masculin', 'Féminin'], correct: 0 },
                { question: 'La maison est...', reponses: ['Masculin', 'Féminin'], correct: 1 },
                { question: 'Un arbre est...', reponses: ['Masculin', 'Féminin'], correct: 0 },
                { question: 'Une fleur est...', reponses: ['Masculin', 'Féminin'], correct: 1 },
                { question: 'Le soleil est...', reponses: ['Masculin', 'Féminin'], correct: 0 },
                { question: 'La lune est...', reponses: ['Masculin', 'Féminin'], correct: 1 },
                { question: 'Un livre est...', reponses: ['Masculin', 'Féminin'], correct: 0 },
                { question: 'Une table est...', reponses: ['Masculin', 'Féminin'], correct: 1 }
            ],
            remediation: { titre: ' Genre', texte: 'le/un = masculin, la/une = féminin' }
        },
        {
            id: 'fr-nombre',
            titre: 'Singulier et pluriel',
            description: 'Un ou plusieurs ?',
            icone: '🔢',
            niveau: 2,
            type: 'qcm',
            consigne: 'Singulier ou pluriel ?',
            questions: [
                { question: '"Les chats" est...', reponses: ['Singulier', 'Pluriel'], correct: 1 },
                { question: '"Un chien" est...', reponses: ['Singulier', 'Pluriel'], correct: 0 },
                { question: '"Des fleurs" est...', reponses: ['Singulier', 'Pluriel'], correct: 1 },
                { question: '"La maison" est...', reponses: ['Singulier', 'Pluriel'], correct: 0 },
                { question: 'Pluriel de "chat" ?', reponses: ['chats', 'chat', 'chate', 'chattes'], correct: 0 },
                { question: 'Pluriel de "livre" ?', reponses: ['livres', 'livre', 'livres', 'livree'], correct: 0 },
                { question: 'Mot au pluriel ?', reponses: ['le chien', 'les chiens', 'un chien', 'ce chien'], correct: 1 },
                { question: 'Mot au singulier ?', reponses: ['les pommes', 'des pommes', 'une pomme', 'ces pommes'], correct: 2 }
            ],
            remediation: { titre: '💡 Nombre', texte: 'Pluriel = souvent un "s" à la fin : chat → chats' }
        },
        {
            id: 'fr-animaux',
            titre: 'Les animaux',
            description: 'Nomme les animaux',
            icone: '🐶',
            niveau: 1,
            type: 'qcm',
            consigne: 'Choisis',
            questions: [
                { question: 'Qui fait "miaou" ?', reponses: ['Chien', 'Chat', 'Vache', 'Mouton'], correct: 1 },
                { question: 'Qui donne du lait ?', reponses: ['Cochon', 'Cheval', 'Vache', 'Poulet'], correct: 2 },
                { question: 'Qui a une trompe ?', reponses: ['Lion', 'Éléphant', 'Girafe', 'Singe'], correct: 1 },
                { question: 'Qui pond des œufs ?', reponses: ['Chat', 'Chien', 'Poule', 'Vache'], correct: 2 },
                { question: 'Qui vit dans l\'eau ?', reponses: ['Poisson', 'Chat', 'Lapin', 'Oiseau'], correct: 0 },
                { question: 'Qui a des ailes ?', reponses: ['Chien', 'Oiseau', 'Poisson', 'Vache'], correct: 1 },
                { question: 'Roi de la jungle ?', reponses: ['Tigre', 'Éléphant', 'Lion', 'Ours'], correct: 2 },
                { question: 'Qui a une crinière ?', reponses: ['Lion', 'Cheval', 'Chien', 'Chat'], correct: 0 }
            ],
            remediation: { titre: '💡 Animaux', texte: 'Regarde des images et imite les cris !' }
        },
        {
            id: 'fr-couleurs',
            titre: 'Les couleurs',
            description: 'Nomme les couleurs',
            icone: '🎨',
            niveau: 1,
            type: 'qcm',
            consigne: 'Quelle couleur ?',
            questions: [
                { question: 'Couleur du soleil ?', reponses: ['Bleu', 'Jaune', 'Vert', 'Rouge'], correct: 1 },
                { question: 'Couleur du ciel ?', reponses: ['Rouge', 'Vert', 'Bleu', 'Noir'], correct: 2 },
                { question: 'Couleur de l\'herbe ?', reponses: ['Bleue', 'Jaune', 'Verte', 'Rouge'], correct: 2 },
                { question: 'Couleur de la neige ?', reponses: ['Noire', 'Blanche', 'Grise', 'Rose'], correct: 1 },
                { question: 'Couleur de la tomate ?', reponses: ['Bleue', 'Jaune', 'Rouge', 'Verte'], correct: 2 },
                { question: 'Couleur de la banane ?', reponses: ['Rouge', 'Jaune', 'Bleue', 'Noire'], correct: 1 },
                { question: 'Bleu + jaune = ?', reponses: ['Rouge', 'Vert', 'Orange', 'Violet'], correct: 1 },
                { question: 'Rouge + bleu = ?', reponses: ['Vert', 'Orange', 'Violet', 'Rose'], correct: 2 }
            ],
            remediation: { titre: '💡 Couleurs', texte: 'Nomme la couleur de chaque objet autour de toi !' }
        },
        {
            id: 'fr-contraires',
            titre: 'Les contraires',
            description: 'Trouve l\'opposé',
            icone: '',
            niveau: 2,
            type: 'qcm',
            consigne: 'Quel est le contraire ?',
            questions: [
                { question: 'Contraire de "grand" ?', reponses: ['petit', 'gros', 'long', 'haut'], correct: 0 },
                { question: 'Contraire de "chaud" ?', reponses: ['tiède', 'froid', 'frais', 'glacé'], correct: 1 },
                { question: 'Contraire de "jour" ?', reponses: ['matin', 'soir', 'nuit', 'midi'], correct: 2 },
                { question: 'Contraire de "ouvert" ?', reponses: ['fermé', 'clos', 'bloqué', 'verrouillé'], correct: 0 },
                { question: 'Contraire de "rapide" ?', reponses: ['vite', 'lent', 'doucement', 'calme'], correct: 1 },
                { question: 'Contraire de "content" ?', reponses: ['joyeux', 'gai', 'triste', 'heureux'], correct: 2 },
                { question: 'Contraire de "plein" ?', reponses: ['vide', 'creux', 'net', 'clair'], correct: 0 },
                { question: 'Contraire de "dur" ?', reponses: ['solide', 'fort', 'mou', 'épais'], correct: 2 }
            ],
            remediation: { titre: '💡 Contraires', texte: 'Grand/petit, chaud/froid, jour/nuit...' }
        },
        {
            id: 'fr-etre-avoir',
            titre: 'Être et Avoir',
            description: 'Conjugaison au présent',
            icone: '🎯',
            niveau: 3,
            type: 'qcm',
            consigne: 'Conjugue',
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
            remediation: { titre: '💡 Conjugaison', texte: 'Être : je suis, tu es, il est, nous sommes, vous êtes, ils sont.\nAvoir : j\'ai, tu as, il a, nous avons, vous avez, ils ont.' }
        },
        {
            id: 'fr-lettres',
            titre: 'L\'alphabet',
            description: 'Les 26 lettres',
            icone: '🔠',
            niveau: 1,
            type: 'qcm',
            consigne: 'Quelle lettre ?',
            questions: [
                { question: 'Lettre après A ?', reponses: ['B', 'C', 'D', 'Z'], correct: 0 },
                { question: 'Lettre après M ?', reponses: ['L', 'N', 'O', 'P'], correct: 1 },
                { question: 'Lettre avant Z ?', reponses: ['X', 'Y', 'W', 'V'], correct: 1 },
                { question: 'Combien de lettres ?', reponses: ['24', '25', '26', '27'], correct: 2 },
                { question: 'Dernière lettre ?', reponses: ['X', 'Y', 'Z', 'W'], correct: 2 },
                { question: 'Lettre entre D et F ?', reponses: ['C', 'E', 'G', 'H'], correct: 1 },
                { question: 'Lettre entre P et R ?', reponses: ['O', 'Q', 'S', 'T'], correct: 1 },
                { question: '1ère lettre de "MAMAN" ?', reponses: ['A', 'M', 'N', 'P'], correct: 1 }
            ],
            remediation: { titre: '💡 Alphabet', texte: 'Chante : A B C D E F G H I J K L M N O P Q R S T U V W X Y Z !' }
        },
        {
            id: 'fr-sons',
            titre: 'Sons complexes',
            description: 'ou, oi, an, en, on, in',
            icone: '🔊',
            niveau: 2,
            type: 'qcm',
            consigne: 'Quel son ?',
            questions: [
                { question: 'Dans "poule", on entend :', reponses: ['ou', 'oi', 'o', 'u'], correct: 0 },
                { question: 'Dans "voiture", on entend :', reponses: ['an', 'oi', 'ou', 'on'], correct: 1 },
                { question: 'Dans "ballon", on entend :', reponses: ['an', 'en', 'on', 'in'], correct: 2 },
                { question: 'Dans "lapin", on entend :', reponses: ['an', 'en', 'on', 'in'], correct: 3 },
                { question: 'Dans "danse", on entend :', reponses: ['an', 'en', 'on', 'in'], correct: 0 },
                { question: 'Dans "vent", on entend :', reponses: ['an', 'en', 'on', 'in'], correct: 1 },
                { question: 'Dans "bouton", on entend :', reponses: ['ou+an', 'ou+on', 'ou+in', 'ou+en'], correct: 1 },
                { question: 'Dans "pion", on entend :', reponses: ['pi+on', 'pi+an', 'pi+in', 'pi+en'], correct: 0 }
            ],
            remediation: { titre: '💡 Sons', texte: 'ou=poule, oi=voiture, on=ballon, an/en=danse/vent, in=lapin' }
        },
        {
            id: 'fr-famille',
            titre: 'La famille',
            description: 'Les membres de la famille',
            icone: '👨‍‍👧',
            niveau: 1,
            type: 'qcm',
            consigne: 'Qui est-ce ?',
            questions: [
                { question: 'Père de papa = ?', reponses: ['oncle', 'grand-père', 'frère', 'cousin'], correct: 1 },
                { question: 'Mère de maman = ?', reponses: ['tante', 'sœur', 'grand-mère', 'cousine'], correct: 2 },
                { question: 'Frère de papa = ?', reponses: ['oncle', 'grand-père', 'papa', 'cousin'], correct: 0 },
                { question: 'Sœur de maman = ?', reponses: ['grand-mère', 'tante', 'cousine', 'maman'], correct: 1 },
                { question: 'Fils de mon oncle = ?', reponses: ['frère', 'cousin', 'oncle', 'papa'], correct: 1 },
                { question: 'Fille de ma tante = ?', reponses: ['sœur', 'tante', 'cousine', 'maman'], correct: 2 },
                { question: 'Mari de ma sœur = ?', reponses: ['oncle', 'cousin', 'beau-frère', 'frère'], correct: 2 },
                { question: 'Combien de grands-parents ?', reponses: ['2', '3', '4', '5'], correct: 2 }
            ],
            remediation: { titre: '💡 Famille', texte: 'Dessine un arbre généalogique !' }
        },
        {
            id: 'fr-histoire-temps',
            titre: 'Le temps qui passe',
            description: 'Hier, aujourd\'hui, demain',
            icone: '',
            niveau: 2,
            type: 'qcm',
            consigne: 'Choisis',
            questions: [
                { question: 'Jour d\'avant aujourd\'hui = ?', reponses: ['demain', 'hier', 'maintenant', 'bientôt'], correct: 1 },
                { question: 'Jour d\'après aujourd\'hui = ?', reponses: ['hier', 'demain', 'avant-hier', 'aujourd\'hui'], correct: 1 },
                { question: 'Quand on est petit, on est un...', reponses: ['adulte', 'vieillard', 'bébé/enfant', 'adolescent'], correct: 2 },
                { question: 'Quand on est grand, on est un...', reponses: ['bébé', 'enfant', 'adulte', 'nouveau-né'], correct: 2 },
                { question: 'Ce qui est arrivé il y a longtemps = ?', reponses: ['futur', 'présent', 'passé', 'demain'], correct: 2 },
                { question: 'Ce qui va arriver = ?', reponses: ['passé', 'présent', 'futur', 'hier'], correct: 2 },
                { question: 'Maintenant = ?', reponses: ['passé', 'présent', 'futur', 'hier'], correct: 1 },
                { question: 'Dans une histoire, on commence par...', reponses: ['la fin', 'le milieu', 'le début', 'l\'après'], correct: 2 }
            ],
            remediation: { titre: '💡 Temps', texte: 'Passé = avant, Présent = maintenant, Futur = après' }
        },
        {
            id: 'fr-histoire-generations',
            titre: 'Les générations',
            description: 'Bébé, enfant, adulte',
            icone: '👶',
            niveau: 1,
            type: 'qcm',
            consigne: 'Qui est-ce ?',
            questions: [
                { question: 'Tout petit qui vient de naître = ?', reponses: ['enfant', 'adulte', 'bébé', 'adolescent'], correct: 2 },
                { question: 'Personne très âgée = ?', reponses: ['bébé', 'enfant', 'adolescent', 'personne âgée'], correct: 3 },
                { question: 'Qui va à l\'école primaire ?', reponses: ['bébé', 'enfant', 'adulte', 'personne âgée'], correct: 1 },
                { question: 'Qui travaille ?', reponses: ['bébé', 'enfant', 'adulte', 'tout-petit'], correct: 2 },
                { question: 'Qui a des rides et cheveux blancs ?', reponses: ['bébé', 'enfant', 'adolescent', 'personne âgée'], correct: 3 },
                { question: 'Qui apprend à marcher ?', reponses: ['adulte', 'bébé', 'personne âgée', 'adolescent'], correct: 1 },
                { question: 'Qui a entre 12 et 18 ans ?', reponses: ['bébé', 'enfant', 'adolescent', 'adulte'], correct: 2 },
                { question: 'Qui raconte des histoires ?', reponses: ['bébé', 'personne âgée', 'adolescent', 'nouveau-né'], correct: 1 }
            ],
            remediation: { titre: '💡 Générations', texte: 'Bébé → Enfant → Adolescent → Adulte → Personne âgée' }
        }
    ]
};
