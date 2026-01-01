/**
 * JAPONAIS - Données complètes
 * Version personnelle - AUCUNE RESTRICTION
 * 47 leçons + 102 kanji N5
 */

// =========================================
// PROVERBES JAPONAIS (Défi quotidien)
// =========================================

const PROVERBS = [
    { japanese: "七転び八起き", reading: "nana korobi ya oki", meaning: "Tomber sept fois, se relever huit" },
    { japanese: "継続は力なり", reading: "keizoku wa chikara nari", meaning: "La persévérance est une force" },
    { japanese: "一石二鳥", reading: "isseki nichou", meaning: "D'une pierre deux coups" },
    { japanese: "猿も木から落ちる", reading: "saru mo ki kara ochiru", meaning: "Même les singes tombent des arbres" },
    { japanese: "花より団子", reading: "hana yori dango", meaning: "Mieux vaut le concret que l'esthétique" },
    { japanese: "石の上にも三年", reading: "ishi no ue ni mo san nen", meaning: "La patience vient à bout de tout" },
    { japanese: "塵も積もれば山となる", reading: "chiri mo tsumoreba yama to naru", meaning: "Les petits ruisseaux font les grandes rivières" },
    { japanese: "案ずるより産むが易し", reading: "anzuru yori umu ga yasushi", meaning: "C'est plus facile à faire qu'à penser" },
    { japanese: "出る杭は打たれる", reading: "deru kui wa utareru", meaning: "Le clou qui dépasse se fait marteler" },
    { japanese: "虎穴に入らずんば虎子を得ず", reading: "koketsu ni irazunba koji wo ezu", meaning: "Qui ne risque rien n'a rien" }
];

// =========================================
// HIRAGANA - 10 LEÇONS
// =========================================

const hiraganaLessons = [
    {
        id: 1,
        title: "Voyelles + K",
        description: "a, i, u, e, o, ka, ki, ku, ke, ko",
        category: "hiragana",
        characters: [
            { char: "あ", romaji: "a", mnemonic: "La lettre A avec une boucle" },
            { char: "い", romaji: "i", mnemonic: "Deux lignes comme le chiffre 1" },
            { char: "う", romaji: "u", mnemonic: "Un U ouvert" },
            { char: "え", romaji: "e", mnemonic: "Comme un E inversé" },
            { char: "お", romaji: "o", mnemonic: "Un visage avec une moustache" },
            { char: "か", romaji: "ka", mnemonic: "Une épée qui coupe" },
            { char: "き", romaji: "ki", mnemonic: "Une clé (key)" },
            { char: "く", romaji: "ku", mnemonic: "Un bec de coucou" },
            { char: "け", romaji: "ke", mnemonic: "Une porte avec poignée" },
            { char: "こ", romaji: "ko", mnemonic: "Deux vers de terre" }
        ],
        exercises: [
            { type: "mcq", question: "Quel est le romaji de あ ?", character: "あ", options: ["a", "i", "u", "e"], correct: "a" },
            { type: "mcq", question: "Quel est le romaji de い ?", character: "い", options: ["i", "a", "e", "o"], correct: "i" },
            { type: "mcq", question: "Quel est le romaji de う ?", character: "う", options: ["u", "o", "a", "i"], correct: "u" },
            { type: "mcq", question: "Quel est le romaji de え ?", character: "え", options: ["e", "i", "a", "o"], correct: "e" },
            { type: "mcq", question: "Quel est le romaji de お ?", character: "お", options: ["o", "u", "a", "e"], correct: "o" },
            { type: "mcq", question: "Quel est le romaji de か ?", character: "か", options: ["ka", "ki", "ku", "ke"], correct: "ka" },
            { type: "mcq", question: "Quel est le romaji de き ?", character: "き", options: ["ki", "ka", "ku", "ko"], correct: "ki" },
            { type: "mcq", question: "Quel est le romaji de く ?", character: "く", options: ["ku", "ka", "ki", "ko"], correct: "ku" },
            { type: "mcq", question: "Quel est le romaji de け ?", character: "け", options: ["ke", "ka", "ki", "ko"], correct: "ke" },
            { type: "mcq", question: "Quel est le romaji de こ ?", character: "こ", options: ["ko", "ku", "ka", "ke"], correct: "ko" },
            { type: "intruder", question: "Trouvez l'intrus", options: ["あ", "い", "か", "お"], correct: "か", explanation: "'か' (ka) est une consonne, les autres sont des voyelles" },
            { type: "transcription", question: "Tapez le romaji de: あい", character: "あい", correct: "ai", meaning: "amour" },
            { type: "transcription", question: "Tapez le romaji de: いえ", character: "いえ", correct: "ie", meaning: "maison" },
            { type: "transcription", question: "Tapez le romaji de: かお", character: "かお", correct: "kao", meaning: "visage" }
        ]
    },
    {
        id: 2,
        title: "S + T",
        description: "sa, shi, su, se, so, ta, chi, tsu, te, to",
        category: "hiragana",
        characters: [
            { char: "さ", romaji: "sa", mnemonic: "Un serpent qui siffle" },
            { char: "し", romaji: "shi", mnemonic: "Un hameçon pour la pêche" },
            { char: "す", romaji: "su", mnemonic: "Un swing de golf" },
            { char: "せ", romaji: "se", mnemonic: "Une bouche qui dit quelque chose" },
            { char: "そ", romaji: "so", mnemonic: "Un fil qui coud" },
            { char: "た", romaji: "ta", mnemonic: "Ta comme dans tambour" },
            { char: "ち", romaji: "chi", mnemonic: "Un visage souriant" },
            { char: "つ", romaji: "tsu", mnemonic: "Une vague tsunami" },
            { char: "て", romaji: "te", mnemonic: "Une main tendue" },
            { char: "と", romaji: "to", mnemonic: "Un orteil avec un ongle" }
        ],
        exercises: [
            { type: "mcq", question: "Quel est le romaji de さ ?", character: "さ", options: ["sa", "shi", "su", "se"], correct: "sa" },
            { type: "mcq", question: "Quel est le romaji de し ?", character: "し", options: ["shi", "sa", "su", "se"], correct: "shi" },
            { type: "mcq", question: "Quel est le romaji de す ?", character: "す", options: ["su", "sa", "shi", "so"], correct: "su" },
            { type: "mcq", question: "Quel est le romaji de せ ?", character: "せ", options: ["se", "sa", "shi", "so"], correct: "se" },
            { type: "mcq", question: "Quel est le romaji de そ ?", character: "そ", options: ["so", "sa", "su", "se"], correct: "so" },
            { type: "mcq", question: "Quel est le romaji de た ?", character: "た", options: ["ta", "chi", "tsu", "te"], correct: "ta" },
            { type: "mcq", question: "Quel est le romaji de ち ?", character: "ち", options: ["chi", "ta", "tsu", "te"], correct: "chi" },
            { type: "mcq", question: "Quel est le romaji de つ ?", character: "つ", options: ["tsu", "ta", "chi", "to"], correct: "tsu" },
            { type: "mcq", question: "Quel est le romaji de て ?", character: "て", options: ["te", "ta", "chi", "to"], correct: "te" },
            { type: "mcq", question: "Quel est le romaji de と ?", character: "と", options: ["to", "ta", "te", "tsu"], correct: "to" },
            { type: "intruder", question: "Trouvez l'intrus", options: ["さ", "し", "た", "そ"], correct: "た", explanation: "'た' (ta) appartient à la série T, pas S" },
            { type: "transcription", question: "Tapez le romaji de: すし", character: "すし", correct: "sushi", meaning: "sushi" },
            { type: "transcription", question: "Tapez le romaji de: した", character: "した", correct: "shita", meaning: "sous/langue" }
        ]
    },
    {
        id: 3,
        title: "N + H",
        description: "na, ni, nu, ne, no, ha, hi, fu, he, ho",
        category: "hiragana",
        characters: [
            { char: "な", romaji: "na", mnemonic: "Un noeud complexe" },
            { char: "に", romaji: "ni", mnemonic: "Un genou plié" },
            { char: "ぬ", romaji: "nu", mnemonic: "Des nouilles emmêlées" },
            { char: "ね", romaji: "ne", mnemonic: "Un chat qui dort" },
            { char: "の", romaji: "no", mnemonic: "Le signe NO (interdit)" },
            { char: "は", romaji: "ha", mnemonic: "Une maison (ha-use)" },
            { char: "ひ", romaji: "hi", mnemonic: "Un sourire qui dit hi!" },
            { char: "ふ", romaji: "fu", mnemonic: "Le Mont Fuji" },
            { char: "へ", romaji: "he", mnemonic: "Une colline" },
            { char: "ほ", romaji: "ho", mnemonic: "Un bonhomme de neige ho ho ho" }
        ],
        exercises: [
            { type: "mcq", question: "Quel est le romaji de な ?", character: "な", options: ["na", "ni", "nu", "ne"], correct: "na" },
            { type: "mcq", question: "Quel est le romaji de に ?", character: "に", options: ["ni", "na", "nu", "no"], correct: "ni" },
            { type: "mcq", question: "Quel est le romaji de は ?", character: "は", options: ["ha", "hi", "fu", "he"], correct: "ha" },
            { type: "mcq", question: "Quel est le romaji de ひ ?", character: "ひ", options: ["hi", "ha", "fu", "ho"], correct: "hi" },
            { type: "mcq", question: "Quel est le romaji de ふ ?", character: "ふ", options: ["fu", "ha", "hi", "ho"], correct: "fu" },
            { type: "mcq", question: "Quel est le romaji de の ?", character: "の", options: ["no", "na", "ni", "ne"], correct: "no" },
            { type: "mcq", question: "Quel est le romaji de ね ?", character: "ね", options: ["ne", "na", "ni", "no"], correct: "ne" },
            { type: "mcq", question: "Quel est le romaji de ほ ?", character: "ほ", options: ["ho", "ha", "hi", "he"], correct: "ho" },
            { type: "transcription", question: "Tapez le romaji de: ねこ", character: "ねこ", correct: "neko", meaning: "chat" },
            { type: "transcription", question: "Tapez le romaji de: はな", character: "はな", correct: "hana", meaning: "fleur/nez" },
            { type: "transcription", question: "Tapez le romaji de: ひと", character: "ひと", correct: "hito", meaning: "personne" }
        ]
    },
    {
        id: 4,
        title: "M + Y + R",
        description: "ma, mi, mu, me, mo, ya, yu, yo, ra, ri, ru, re, ro",
        category: "hiragana",
        characters: [
            { char: "ま", romaji: "ma", mnemonic: "Maman avec des bras ouverts" },
            { char: "み", romaji: "mi", mnemonic: "Le chiffre 21" },
            { char: "む", romaji: "mu", mnemonic: "Une vache qui fait moo" },
            { char: "め", romaji: "me", mnemonic: "Un oeil (me = oeil)" },
            { char: "も", romaji: "mo", mnemonic: "Un hameçon avec un ver" },
            { char: "や", romaji: "ya", mnemonic: "Un yacht à voile" },
            { char: "ゆ", romaji: "yu", mnemonic: "Un poisson qui nage" },
            { char: "よ", romaji: "yo", mnemonic: "Un yo-yo" },
            { char: "ら", romaji: "ra", mnemonic: "Un robot qui marche" },
            { char: "り", romaji: "ri", mnemonic: "Deux roseaux" },
            { char: "る", romaji: "ru", mnemonic: "Une boucle de ruban" },
            { char: "れ", romaji: "re", mnemonic: "Un roi avec sa couronne" },
            { char: "ろ", romaji: "ro", mnemonic: "Le chiffre 3 stylisé" }
        ],
        exercises: [
            { type: "mcq", question: "Quel est le romaji de ま ?", character: "ま", options: ["ma", "mi", "mu", "me"], correct: "ma" },
            { type: "mcq", question: "Quel est le romaji de み ?", character: "み", options: ["mi", "ma", "mu", "mo"], correct: "mi" },
            { type: "mcq", question: "Quel est le romaji de や ?", character: "や", options: ["ya", "yu", "yo", "ra"], correct: "ya" },
            { type: "mcq", question: "Quel est le romaji de ゆ ?", character: "ゆ", options: ["yu", "ya", "yo", "ru"], correct: "yu" },
            { type: "mcq", question: "Quel est le romaji de よ ?", character: "よ", options: ["yo", "ya", "yu", "ro"], correct: "yo" },
            { type: "mcq", question: "Quel est le romaji de ら ?", character: "ら", options: ["ra", "ri", "ru", "re"], correct: "ra" },
            { type: "mcq", question: "Quel est le romaji de り ?", character: "り", options: ["ri", "ra", "ru", "ro"], correct: "ri" },
            { type: "mcq", question: "Quel est le romaji de る ?", character: "る", options: ["ru", "ra", "ri", "ro"], correct: "ru" },
            { type: "transcription", question: "Tapez le romaji de: やま", character: "やま", correct: "yama", meaning: "montagne" },
            { type: "transcription", question: "Tapez le romaji de: もり", character: "もり", correct: "mori", meaning: "forêt" }
        ]
    },
    {
        id: 5,
        title: "W + N",
        description: "wa, wo, n",
        category: "hiragana",
        characters: [
            { char: "わ", romaji: "wa", mnemonic: "Une baleine (whale)" },
            { char: "を", romaji: "wo", mnemonic: "Particule d'objet direct" },
            { char: "ん", romaji: "n", mnemonic: "Le son nasal final" }
        ],
        exercises: [
            { type: "mcq", question: "Quel est le romaji de わ ?", character: "わ", options: ["wa", "wo", "n", "na"], correct: "wa" },
            { type: "mcq", question: "Quel est le romaji de を ?", character: "を", options: ["wo", "wa", "o", "n"], correct: "wo" },
            { type: "mcq", question: "Quel est le romaji de ん ?", character: "ん", options: ["n", "na", "wa", "no"], correct: "n" },
            { type: "transcription", question: "Tapez le romaji de: わたし", character: "わたし", correct: "watashi", meaning: "je/moi" },
            { type: "transcription", question: "Tapez le romaji de: にほん", character: "にほん", correct: "nihon", meaning: "Japon" },
            { type: "transcription", question: "Tapez le romaji de: ほん", character: "ほん", correct: "hon", meaning: "livre" }
        ]
    },
    {
        id: 6,
        title: "Dakuten G + Z",
        description: "ga, gi, gu, ge, go, za, ji, zu, ze, zo",
        category: "hiragana",
        characters: [
            { char: "が", romaji: "ga", mnemonic: "か avec des points = ga" },
            { char: "ぎ", romaji: "gi", mnemonic: "き avec des points = gi" },
            { char: "ぐ", romaji: "gu", mnemonic: "く avec des points = gu" },
            { char: "げ", romaji: "ge", mnemonic: "け avec des points = ge" },
            { char: "ご", romaji: "go", mnemonic: "こ avec des points = go" },
            { char: "ざ", romaji: "za", mnemonic: "さ avec des points = za" },
            { char: "じ", romaji: "ji", mnemonic: "し avec des points = ji" },
            { char: "ず", romaji: "zu", mnemonic: "す avec des points = zu" },
            { char: "ぜ", romaji: "ze", mnemonic: "せ avec des points = ze" },
            { char: "ぞ", romaji: "zo", mnemonic: "そ avec des points = zo" }
        ],
        exercises: [
            { type: "mcq", question: "Quel est le romaji de が ?", character: "が", options: ["ga", "gi", "gu", "ka"], correct: "ga" },
            { type: "mcq", question: "Quel est le romaji de ぎ ?", character: "ぎ", options: ["gi", "ga", "gu", "ki"], correct: "gi" },
            { type: "mcq", question: "Quel est le romaji de ざ ?", character: "ざ", options: ["za", "ji", "zu", "sa"], correct: "za" },
            { type: "mcq", question: "Quel est le romaji de じ ?", character: "じ", options: ["ji", "za", "zu", "shi"], correct: "ji" },
            { type: "mcq", question: "Quel est le romaji de ご ?", character: "ご", options: ["go", "ga", "gu", "ko"], correct: "go" },
            { type: "transcription", question: "Tapez le romaji de: かぜ", character: "かぜ", correct: "kaze", meaning: "vent" },
            { type: "transcription", question: "Tapez le romaji de: みず", character: "みず", correct: "mizu", meaning: "eau" }
        ]
    },
    {
        id: 7,
        title: "Dakuten D + B",
        description: "da, ji, zu, de, do, ba, bi, bu, be, bo",
        category: "hiragana",
        characters: [
            { char: "だ", romaji: "da", mnemonic: "た avec des points = da" },
            { char: "ぢ", romaji: "ji", mnemonic: "ち avec des points = ji (rare)" },
            { char: "づ", romaji: "zu", mnemonic: "つ avec des points = zu (rare)" },
            { char: "で", romaji: "de", mnemonic: "て avec des points = de" },
            { char: "ど", romaji: "do", mnemonic: "と avec des points = do" },
            { char: "ば", romaji: "ba", mnemonic: "は avec des points = ba" },
            { char: "び", romaji: "bi", mnemonic: "ひ avec des points = bi" },
            { char: "ぶ", romaji: "bu", mnemonic: "ふ avec des points = bu" },
            { char: "べ", romaji: "be", mnemonic: "へ avec des points = be" },
            { char: "ぼ", romaji: "bo", mnemonic: "ほ avec des points = bo" }
        ],
        exercises: [
            { type: "mcq", question: "Quel est le romaji de だ ?", character: "だ", options: ["da", "de", "do", "ta"], correct: "da" },
            { type: "mcq", question: "Quel est le romaji de で ?", character: "で", options: ["de", "da", "do", "te"], correct: "de" },
            { type: "mcq", question: "Quel est le romaji de ば ?", character: "ば", options: ["ba", "bi", "bu", "ha"], correct: "ba" },
            { type: "mcq", question: "Quel est le romaji de び ?", character: "び", options: ["bi", "ba", "bu", "hi"], correct: "bi" },
            { type: "mcq", question: "Quel est le romaji de ど ?", character: "ど", options: ["do", "da", "de", "to"], correct: "do" },
            { type: "transcription", question: "Tapez le romaji de: だれ", character: "だれ", correct: "dare", meaning: "qui" },
            { type: "transcription", question: "Tapez le romaji de: たべる", character: "たべる", correct: "taberu", meaning: "manger" }
        ]
    },
    {
        id: 8,
        title: "Handakuten P",
        description: "pa, pi, pu, pe, po",
        category: "hiragana",
        characters: [
            { char: "ぱ", romaji: "pa", mnemonic: "は avec un cercle = pa" },
            { char: "ぴ", romaji: "pi", mnemonic: "ひ avec un cercle = pi" },
            { char: "ぷ", romaji: "pu", mnemonic: "ふ avec un cercle = pu" },
            { char: "ぺ", romaji: "pe", mnemonic: "へ avec un cercle = pe" },
            { char: "ぽ", romaji: "po", mnemonic: "ほ avec un cercle = po" }
        ],
        exercises: [
            { type: "mcq", question: "Quel est le romaji de ぱ ?", character: "ぱ", options: ["pa", "pi", "pu", "ba"], correct: "pa" },
            { type: "mcq", question: "Quel est le romaji de ぴ ?", character: "ぴ", options: ["pi", "pa", "pu", "bi"], correct: "pi" },
            { type: "mcq", question: "Quel est le romaji de ぷ ?", character: "ぷ", options: ["pu", "pa", "po", "bu"], correct: "pu" },
            { type: "mcq", question: "Quel est le romaji de ぺ ?", character: "ぺ", options: ["pe", "pa", "po", "be"], correct: "pe" },
            { type: "mcq", question: "Quel est le romaji de ぽ ?", character: "ぽ", options: ["po", "pa", "pu", "bo"], correct: "po" },
            { type: "transcription", question: "Tapez le romaji de: てんぷら", character: "てんぷら", correct: "tenpura", meaning: "tempura" }
        ]
    },
    {
        id: 9,
        title: "Combinaisons (Yoon)",
        description: "kya, kyu, kyo, sha, shu, sho, cha, chu, cho...",
        category: "hiragana",
        characters: [
            { char: "きゃ", romaji: "kya", mnemonic: "ki + petit ya" },
            { char: "きゅ", romaji: "kyu", mnemonic: "ki + petit yu" },
            { char: "きょ", romaji: "kyo", mnemonic: "ki + petit yo" },
            { char: "しゃ", romaji: "sha", mnemonic: "shi + petit ya" },
            { char: "しゅ", romaji: "shu", mnemonic: "shi + petit yu" },
            { char: "しょ", romaji: "sho", mnemonic: "shi + petit yo" },
            { char: "ちゃ", romaji: "cha", mnemonic: "chi + petit ya" },
            { char: "ちゅ", romaji: "chu", mnemonic: "chi + petit yu" },
            { char: "ちょ", romaji: "cho", mnemonic: "chi + petit yo" },
            { char: "にゃ", romaji: "nya", mnemonic: "ni + petit ya" },
            { char: "りゃ", romaji: "rya", mnemonic: "ri + petit ya" }
        ],
        exercises: [
            { type: "mcq", question: "Quel est le romaji de きゃ ?", character: "きゃ", options: ["kya", "kyu", "kyo", "ka"], correct: "kya" },
            { type: "mcq", question: "Quel est le romaji de しゃ ?", character: "しゃ", options: ["sha", "shu", "sho", "shi"], correct: "sha" },
            { type: "mcq", question: "Quel est le romaji de ちゃ ?", character: "ちゃ", options: ["cha", "chu", "cho", "chi"], correct: "cha" },
            { type: "mcq", question: "Quel est le romaji de しょ ?", character: "しょ", options: ["sho", "sha", "shu", "so"], correct: "sho" },
            { type: "transcription", question: "Tapez le romaji de: おちゃ", character: "おちゃ", correct: "ocha", meaning: "thé" },
            { type: "transcription", question: "Tapez le romaji de: きょう", character: "きょう", correct: "kyou", meaning: "aujourd'hui" }
        ]
    },
    {
        id: 10,
        title: "Révision Hiragana",
        description: "Tous les hiragana - révision complète",
        category: "hiragana",
        characters: [
            { char: "あ", romaji: "a", mnemonic: "Voyelle A" },
            { char: "か", romaji: "ka", mnemonic: "Série K" },
            { char: "さ", romaji: "sa", mnemonic: "Série S" },
            { char: "た", romaji: "ta", mnemonic: "Série T" },
            { char: "な", romaji: "na", mnemonic: "Série N" },
            { char: "は", romaji: "ha", mnemonic: "Série H" },
            { char: "ま", romaji: "ma", mnemonic: "Série M" },
            { char: "や", romaji: "ya", mnemonic: "Série Y" },
            { char: "ら", romaji: "ra", mnemonic: "Série R" },
            { char: "わ", romaji: "wa", mnemonic: "Série W" },
            { char: "ん", romaji: "n", mnemonic: "Syllabe nasale" }
        ],
        exercises: [
            { type: "mcq", question: "Quel hiragana correspond à 'a' ?", character: "?", options: ["あ", "い", "う", "え"], correct: "あ" },
            { type: "mcq", question: "Quel hiragana correspond à 'ka' ?", character: "?", options: ["か", "き", "く", "さ"], correct: "か" },
            { type: "mcq", question: "Quel hiragana correspond à 'shi' ?", character: "?", options: ["し", "す", "せ", "ち"], correct: "し" },
            { type: "mcq", question: "Quel hiragana correspond à 'tsu' ?", character: "?", options: ["つ", "た", "ち", "す"], correct: "つ" },
            { type: "transcription", question: "Tapez le romaji de: おはよう", character: "おはよう", correct: "ohayou", meaning: "bonjour (matin)" },
            { type: "transcription", question: "Tapez le romaji de: ありがとう", character: "ありがとう", correct: "arigatou", meaning: "merci" },
            { type: "transcription", question: "Tapez le romaji de: さようなら", character: "さようなら", correct: "sayounara", meaning: "au revoir" }
        ]
    }
];

// =========================================
// KATAKANA - 11 LEÇONS
// =========================================

const katakanaLessons = [
    {
        id: 11,
        title: "Voyelles + K",
        description: "ア, イ, ウ, エ, オ, カ, キ, ク, ケ, コ",
        category: "katakana",
        characters: [
            { char: "ア", romaji: "a", mnemonic: "Comme un A majuscule anguleux" },
            { char: "イ", romaji: "i", mnemonic: "Deux lignes inclinées comme I" },
            { char: "ウ", romaji: "u", mnemonic: "Un U avec un chapeau" },
            { char: "エ", romaji: "e", mnemonic: "Comme un I horizontal" },
            { char: "オ", romaji: "o", mnemonic: "Une croix avec une queue" },
            { char: "カ", romaji: "ka", mnemonic: "Une épée qui coupe (cut=ka)" },
            { char: "キ", romaji: "ki", mnemonic: "Une clé (key)" },
            { char: "ク", romaji: "ku", mnemonic: "Moins anguleux que く" },
            { char: "ケ", romaji: "ke", mnemonic: "Comme un K simplifié" },
            { char: "コ", romaji: "ko", mnemonic: "Un coin (corner)" }
        ],
        exercises: [
            { type: "mcq", question: "Quel est le romaji de ア ?", character: "ア", options: ["a", "i", "u", "e"], correct: "a" },
            { type: "mcq", question: "Quel est le romaji de イ ?", character: "イ", options: ["i", "a", "e", "o"], correct: "i" },
            { type: "mcq", question: "Quel est le romaji de ウ ?", character: "ウ", options: ["u", "o", "a", "i"], correct: "u" },
            { type: "mcq", question: "Quel est le romaji de カ ?", character: "カ", options: ["ka", "ki", "ku", "ke"], correct: "ka" },
            { type: "mcq", question: "Quel est le romaji de キ ?", character: "キ", options: ["ki", "ka", "ku", "ko"], correct: "ki" },
            { type: "transcription", question: "Tapez le romaji de: コーヒー", character: "コーヒー", correct: "koohii", meaning: "café" },
            { type: "transcription", question: "Tapez le romaji de: ケーキ", character: "ケーキ", correct: "keeki", meaning: "gâteau" }
        ]
    },
    {
        id: 12,
        title: "S + T",
        description: "サ, シ, ス, セ, ソ, タ, チ, ツ, テ, ト",
        category: "katakana",
        characters: [
            { char: "サ", romaji: "sa", mnemonic: "Comme さ mais anguleux" },
            { char: "シ", romaji: "shi", mnemonic: "Un visage souriant ;)" },
            { char: "ス", romaji: "su", mnemonic: "Un swing de golf" },
            { char: "セ", romaji: "se", mnemonic: "Comme un 7 avec une barre" },
            { char: "ソ", romaji: "so", mnemonic: "Attention: différent de ン" },
            { char: "タ", romaji: "ta", mnemonic: "Comme た simplifié" },
            { char: "チ", romaji: "chi", mnemonic: "Un nombre 5 stylisé" },
            { char: "ツ", romaji: "tsu", mnemonic: "Trois gouttes qui tombent" },
            { char: "テ", romaji: "te", mnemonic: "Une table" },
            { char: "ト", romaji: "to", mnemonic: "Un totem" }
        ],
        exercises: [
            { type: "mcq", question: "Quel est le romaji de サ ?", character: "サ", options: ["sa", "shi", "su", "se"], correct: "sa" },
            { type: "mcq", question: "Quel est le romaji de シ ?", character: "シ", options: ["shi", "sa", "su", "tsu"], correct: "shi" },
            { type: "mcq", question: "Quel est le romaji de ツ ?", character: "ツ", options: ["tsu", "shi", "su", "so"], correct: "tsu" },
            { type: "mcq", question: "Quel est le romaji de テ ?", character: "テ", options: ["te", "ta", "chi", "to"], correct: "te" },
            { type: "transcription", question: "Tapez le romaji de: タクシー", character: "タクシー", correct: "takushii", meaning: "taxi" }
        ]
    },
    {
        id: 13,
        title: "N + H",
        description: "ナ, ニ, ヌ, ネ, ノ, ハ, ヒ, フ, ヘ, ホ",
        category: "katakana",
        characters: [
            { char: "ナ", romaji: "na", mnemonic: "Comme un couteau" },
            { char: "ニ", romaji: "ni", mnemonic: "Deux lignes horizontales" },
            { char: "ヌ", romaji: "nu", mnemonic: "Des nouilles" },
            { char: "ネ", romaji: "ne", mnemonic: "Un filet" },
            { char: "ノ", romaji: "no", mnemonic: "Une barre oblique" },
            { char: "ハ", romaji: "ha", mnemonic: "Deux bâtons en V" },
            { char: "ヒ", romaji: "hi", mnemonic: "Un sourire" },
            { char: "フ", romaji: "fu", mnemonic: "Mont Fuji simplifié" },
            { char: "ヘ", romaji: "he", mnemonic: "Identique à へ !" },
            { char: "ホ", romaji: "ho", mnemonic: "Un poteau" }
        ],
        exercises: [
            { type: "mcq", question: "Quel est le romaji de ナ ?", character: "ナ", options: ["na", "ni", "nu", "ne"], correct: "na" },
            { type: "mcq", question: "Quel est le romaji de ニ ?", character: "ニ", options: ["ni", "na", "nu", "no"], correct: "ni" },
            { type: "mcq", question: "Quel est le romaji de ハ ?", character: "ハ", options: ["ha", "hi", "fu", "he"], correct: "ha" },
            { type: "mcq", question: "Quel est le romaji de フ ?", character: "フ", options: ["fu", "ha", "hi", "ho"], correct: "fu" },
            { type: "transcription", question: "Tapez le romaji de: ホテル", character: "ホテル", correct: "hoteru", meaning: "hôtel" }
        ]
    },
    {
        id: 14,
        title: "M + Y + R",
        description: "マ, ミ, ム, メ, モ, ヤ, ユ, ヨ, ラ, リ, ル, レ, ロ",
        category: "katakana",
        characters: [
            { char: "マ", romaji: "ma", mnemonic: "Comme un M couché" },
            { char: "ミ", romaji: "mi", mnemonic: "Trois lignes" },
            { char: "ム", romaji: "mu", mnemonic: "Une vache vue de face (moo)" },
            { char: "メ", romaji: "me", mnemonic: "Un X (comme un oeil fermé)" },
            { char: "モ", romaji: "mo", mnemonic: "Comme も simplifié" },
            { char: "ヤ", romaji: "ya", mnemonic: "Un yacht" },
            { char: "ユ", romaji: "yu", mnemonic: "Un U renversé" },
            { char: "ヨ", romaji: "yo", mnemonic: "Comme un E renversé" },
            { char: "ラ", romaji: "ra", mnemonic: "Comme un 7" },
            { char: "リ", romaji: "ri", mnemonic: "Deux lignes verticales" },
            { char: "ル", romaji: "ru", mnemonic: "Comme un L" },
            { char: "レ", romaji: "re", mnemonic: "Une petite courbe" },
            { char: "ロ", romaji: "ro", mnemonic: "Un carré (la bouche)" }
        ],
        exercises: [
            { type: "mcq", question: "Quel est le romaji de マ ?", character: "マ", options: ["ma", "mi", "mu", "me"], correct: "ma" },
            { type: "mcq", question: "Quel est le romaji de ヤ ?", character: "ヤ", options: ["ya", "yu", "yo", "ra"], correct: "ya" },
            { type: "mcq", question: "Quel est le romaji de ラ ?", character: "ラ", options: ["ra", "ri", "ru", "re"], correct: "ra" },
            { type: "mcq", question: "Quel est le romaji de ロ ?", character: "ロ", options: ["ro", "ra", "ri", "ru"], correct: "ro" },
            { type: "transcription", question: "Tapez le romaji de: ラーメン", character: "ラーメン", correct: "raamen", meaning: "ramen" }
        ]
    },
    {
        id: 15,
        title: "W + N",
        description: "ワ, ヲ, ン",
        category: "katakana",
        characters: [
            { char: "ワ", romaji: "wa", mnemonic: "Comme un V inversé" },
            { char: "ヲ", romaji: "wo", mnemonic: "Particule (rare en katakana)" },
            { char: "ン", romaji: "n", mnemonic: "Attention: différent de ソ" }
        ],
        exercises: [
            { type: "mcq", question: "Quel est le romaji de ワ ?", character: "ワ", options: ["wa", "wo", "n", "na"], correct: "wa" },
            { type: "mcq", question: "Quel est le romaji de ン ?", character: "ン", options: ["n", "so", "shi", "tsu"], correct: "n" },
            { type: "intruder", question: "Lequel est ン (n) et non ソ (so) ?", options: ["ン", "ソ"], correct: "ン", explanation: "ン a le trait en bas à gauche, ソ en haut" },
            { type: "transcription", question: "Tapez le romaji de: パン", character: "パン", correct: "pan", meaning: "pain" }
        ]
    },
    {
        id: 16,
        title: "Dakuten G + Z",
        description: "ガ, ギ, グ, ゲ, ゴ, ザ, ジ, ズ, ゼ, ゾ",
        category: "katakana",
        characters: [
            { char: "ガ", romaji: "ga", mnemonic: "カ + dakuten" },
            { char: "ギ", romaji: "gi", mnemonic: "キ + dakuten" },
            { char: "グ", romaji: "gu", mnemonic: "ク + dakuten" },
            { char: "ゲ", romaji: "ge", mnemonic: "ケ + dakuten" },
            { char: "ゴ", romaji: "go", mnemonic: "コ + dakuten" },
            { char: "ザ", romaji: "za", mnemonic: "サ + dakuten" },
            { char: "ジ", romaji: "ji", mnemonic: "シ + dakuten" },
            { char: "ズ", romaji: "zu", mnemonic: "ス + dakuten" },
            { char: "ゼ", romaji: "ze", mnemonic: "セ + dakuten" },
            { char: "ゾ", romaji: "zo", mnemonic: "ソ + dakuten" }
        ],
        exercises: [
            { type: "mcq", question: "Quel est le romaji de ガ ?", character: "ガ", options: ["ga", "gi", "gu", "ka"], correct: "ga" },
            { type: "mcq", question: "Quel est le romaji de ジ ?", character: "ジ", options: ["ji", "za", "zu", "shi"], correct: "ji" },
            { type: "transcription", question: "Tapez le romaji de: ピザ", character: "ピザ", correct: "piza", meaning: "pizza" }
        ]
    },
    {
        id: 17,
        title: "Dakuten D + B",
        description: "ダ, ヂ, ヅ, デ, ド, バ, ビ, ブ, ベ, ボ",
        category: "katakana",
        characters: [
            { char: "ダ", romaji: "da", mnemonic: "タ + dakuten" },
            { char: "ヂ", romaji: "ji", mnemonic: "チ + dakuten (rare)" },
            { char: "ヅ", romaji: "zu", mnemonic: "ツ + dakuten (rare)" },
            { char: "デ", romaji: "de", mnemonic: "テ + dakuten" },
            { char: "ド", romaji: "do", mnemonic: "ト + dakuten" },
            { char: "バ", romaji: "ba", mnemonic: "ハ + dakuten" },
            { char: "ビ", romaji: "bi", mnemonic: "ヒ + dakuten" },
            { char: "ブ", romaji: "bu", mnemonic: "フ + dakuten" },
            { char: "ベ", romaji: "be", mnemonic: "ヘ + dakuten" },
            { char: "ボ", romaji: "bo", mnemonic: "ホ + dakuten" }
        ],
        exercises: [
            { type: "mcq", question: "Quel est le romaji de ダ ?", character: "ダ", options: ["da", "de", "do", "ta"], correct: "da" },
            { type: "mcq", question: "Quel est le romaji de バ ?", character: "バ", options: ["ba", "bi", "bu", "ha"], correct: "ba" },
            { type: "transcription", question: "Tapez le romaji de: バス", character: "バス", correct: "basu", meaning: "bus" }
        ]
    },
    {
        id: 18,
        title: "Handakuten P",
        description: "パ, ピ, プ, ペ, ポ",
        category: "katakana",
        characters: [
            { char: "パ", romaji: "pa", mnemonic: "ハ + maru (cercle)" },
            { char: "ピ", romaji: "pi", mnemonic: "ヒ + maru" },
            { char: "プ", romaji: "pu", mnemonic: "フ + maru" },
            { char: "ペ", romaji: "pe", mnemonic: "ヘ + maru" },
            { char: "ポ", romaji: "po", mnemonic: "ホ + maru" }
        ],
        exercises: [
            { type: "mcq", question: "Quel est le romaji de パ ?", character: "パ", options: ["pa", "pi", "pu", "ba"], correct: "pa" },
            { type: "mcq", question: "Quel est le romaji de ピ ?", character: "ピ", options: ["pi", "pa", "pu", "bi"], correct: "pi" },
            { type: "transcription", question: "Tapez le romaji de: スープ", character: "スープ", correct: "suupu", meaning: "soupe" },
            { type: "transcription", question: "Tapez le romaji de: コンピューター", character: "コンピューター", correct: "konpyuutaa", meaning: "ordinateur" }
        ]
    },
    {
        id: 19,
        title: "Combinaisons Katakana",
        description: "キャ, シャ, チャ, ニャ, etc.",
        category: "katakana",
        characters: [
            { char: "キャ", romaji: "kya", mnemonic: "キ + petit ャ" },
            { char: "キュ", romaji: "kyu", mnemonic: "キ + petit ュ" },
            { char: "キョ", romaji: "kyo", mnemonic: "キ + petit ョ" },
            { char: "シャ", romaji: "sha", mnemonic: "シ + petit ャ" },
            { char: "シュ", romaji: "shu", mnemonic: "シ + petit ュ" },
            { char: "ショ", romaji: "sho", mnemonic: "シ + petit ョ" },
            { char: "チャ", romaji: "cha", mnemonic: "チ + petit ャ" },
            { char: "チュ", romaji: "chu", mnemonic: "チ + petit ュ" },
            { char: "チョ", romaji: "cho", mnemonic: "チ + petit ョ" }
        ],
        exercises: [
            { type: "mcq", question: "Quel est le romaji de キャ ?", character: "キャ", options: ["kya", "kyu", "kyo", "ka"], correct: "kya" },
            { type: "mcq", question: "Quel est le romaji de シャ ?", character: "シャ", options: ["sha", "shu", "sho", "shi"], correct: "sha" },
            { type: "transcription", question: "Tapez le romaji de: チョコレート", character: "チョコレート", correct: "chokoreeto", meaning: "chocolat" }
        ]
    },
    {
        id: 20,
        title: "Sons étrangers",
        description: "ファ, ティ, ディ, ヴァ, etc.",
        category: "katakana",
        characters: [
            { char: "ファ", romaji: "fa", mnemonic: "フ + petit ァ" },
            { char: "フィ", romaji: "fi", mnemonic: "フ + petit ィ" },
            { char: "フェ", romaji: "fe", mnemonic: "フ + petit ェ" },
            { char: "フォ", romaji: "fo", mnemonic: "フ + petit ォ" },
            { char: "ティ", romaji: "ti", mnemonic: "テ + petit ィ" },
            { char: "ディ", romaji: "di", mnemonic: "デ + petit ィ" },
            { char: "ヴァ", romaji: "va", mnemonic: "ウ + dakuten + petit ァ" },
            { char: "ヴィ", romaji: "vi", mnemonic: "ウ + dakuten + petit ィ" }
        ],
        exercises: [
            { type: "mcq", question: "Quel est le romaji de ファ ?", character: "ファ", options: ["fa", "fi", "fu", "fe"], correct: "fa" },
            { type: "mcq", question: "Quel est le romaji de ティ ?", character: "ティ", options: ["ti", "chi", "di", "te"], correct: "ti" },
            { type: "transcription", question: "Tapez le romaji de: カフェ", character: "カフェ", correct: "kafe", meaning: "café (lieu)" },
            { type: "transcription", question: "Tapez le romaji de: パーティー", character: "パーティー", correct: "paatii", meaning: "fête" }
        ]
    },
    {
        id: 21,
        title: "Révision Katakana",
        description: "Tous les katakana - révision complète",
        category: "katakana",
        characters: [
            { char: "ア", romaji: "a", mnemonic: "Voyelle A" },
            { char: "カ", romaji: "ka", mnemonic: "Série K" },
            { char: "サ", romaji: "sa", mnemonic: "Série S" },
            { char: "タ", romaji: "ta", mnemonic: "Série T" },
            { char: "ナ", romaji: "na", mnemonic: "Série N" },
            { char: "ハ", romaji: "ha", mnemonic: "Série H" },
            { char: "マ", romaji: "ma", mnemonic: "Série M" },
            { char: "ヤ", romaji: "ya", mnemonic: "Série Y" },
            { char: "ラ", romaji: "ra", mnemonic: "Série R" },
            { char: "ワ", romaji: "wa", mnemonic: "Série W" },
            { char: "ン", romaji: "n", mnemonic: "Syllabe nasale" }
        ],
        exercises: [
            { type: "transcription", question: "Tapez le romaji de: アメリカ", character: "アメリカ", correct: "amerika", meaning: "Amérique" },
            { type: "transcription", question: "Tapez le romaji de: フランス", character: "フランス", correct: "furansu", meaning: "France" },
            { type: "transcription", question: "Tapez le romaji de: テレビ", character: "テレビ", correct: "terebi", meaning: "télévision" },
            { type: "transcription", question: "Tapez le romaji de: インターネット", character: "インターネット", correct: "intaanetto", meaning: "internet" }
        ]
    }
];

// =========================================
// VOCABULAIRE - 6 LEÇONS
// =========================================

const vocabularyLessons = [
    {
        id: 22,
        title: "Chiffres 1-10",
        description: "Les nombres de base en japonais",
        category: "vocabulary",
        characters: [
            { char: "一", romaji: "ichi", mnemonic: "1 - Une ligne" },
            { char: "二", romaji: "ni", mnemonic: "2 - Deux lignes" },
            { char: "三", romaji: "san", mnemonic: "3 - Trois lignes" },
            { char: "四", romaji: "shi/yon", mnemonic: "4 - Quatre (shi évité car = mort)" },
            { char: "五", romaji: "go", mnemonic: "5 - Cinq" },
            { char: "六", romaji: "roku", mnemonic: "6 - Six" },
            { char: "七", romaji: "shichi/nana", mnemonic: "7 - Sept" },
            { char: "八", romaji: "hachi", mnemonic: "8 - Huit" },
            { char: "九", romaji: "kyuu/ku", mnemonic: "9 - Neuf" },
            { char: "十", romaji: "juu", mnemonic: "10 - Dix (croix)" }
        ],
        exercises: [
            { type: "mcq", question: "Comment dit-on '1' en japonais ?", character: "1", options: ["ichi", "ni", "san", "shi"], correct: "ichi" },
            { type: "mcq", question: "Comment dit-on '5' en japonais ?", character: "5", options: ["go", "roku", "shichi", "hachi"], correct: "go" },
            { type: "mcq", question: "Comment dit-on '10' en japonais ?", character: "10", options: ["juu", "kyuu", "hachi", "roku"], correct: "juu" },
            { type: "mcq", question: "Quel nombre est 三 ?", character: "三", options: ["3", "2", "4", "5"], correct: "3" },
            { type: "mcq", question: "Quel nombre est 七 ?", character: "七", options: ["7", "6", "8", "9"], correct: "7" }
        ]
    },
    {
        id: 23,
        title: "Salutations",
        description: "Les expressions de base",
        category: "vocabulary",
        characters: [
            { char: "おはよう", romaji: "ohayou", mnemonic: "Bonjour (matin, informel)" },
            { char: "おはようございます", romaji: "ohayou gozaimasu", mnemonic: "Bonjour (matin, poli)" },
            { char: "こんにちは", romaji: "konnichiwa", mnemonic: "Bonjour (journée)" },
            { char: "こんばんは", romaji: "konbanwa", mnemonic: "Bonsoir" },
            { char: "さようなら", romaji: "sayounara", mnemonic: "Au revoir" },
            { char: "ありがとう", romaji: "arigatou", mnemonic: "Merci (informel)" },
            { char: "すみません", romaji: "sumimasen", mnemonic: "Excusez-moi / Pardon" },
            { char: "はい", romaji: "hai", mnemonic: "Oui" },
            { char: "いいえ", romaji: "iie", mnemonic: "Non" },
            { char: "おねがいします", romaji: "onegaishimasu", mnemonic: "S'il vous plaît" }
        ],
        exercises: [
            { type: "mcq", question: "Comment dit-on 'Bonjour' le matin ?", character: "matin", options: ["おはよう", "こんにちは", "こんばんは", "さようなら"], correct: "おはよう" },
            { type: "mcq", question: "Comment dit-on 'Merci' ?", character: "merci", options: ["ありがとう", "すみません", "はい", "いいえ"], correct: "ありがとう" },
            { type: "mcq", question: "Que signifie 'すみません' ?", character: "すみません", options: ["Excusez-moi", "Merci", "Bonjour", "Au revoir"], correct: "Excusez-moi" },
            { type: "transcription", question: "Tapez: Bonjour (journée)", character: "?", correct: "konnichiwa", meaning: "こんにちは" }
        ]
    },
    {
        id: 24,
        title: "Jours de la semaine",
        description: "Lundi, mardi, mercredi...",
        category: "vocabulary",
        characters: [
            { char: "月曜日", romaji: "getsuyoubi", mnemonic: "Lundi (jour de la lune)" },
            { char: "火曜日", romaji: "kayoubi", mnemonic: "Mardi (jour du feu)" },
            { char: "水曜日", romaji: "suiyoubi", mnemonic: "Mercredi (jour de l'eau)" },
            { char: "木曜日", romaji: "mokuyoubi", mnemonic: "Jeudi (jour du bois)" },
            { char: "金曜日", romaji: "kinyoubi", mnemonic: "Vendredi (jour de l'or)" },
            { char: "土曜日", romaji: "doyoubi", mnemonic: "Samedi (jour de la terre)" },
            { char: "日曜日", romaji: "nichiyoubi", mnemonic: "Dimanche (jour du soleil)" }
        ],
        exercises: [
            { type: "mcq", question: "Comment dit-on 'Lundi' ?", character: "lundi", options: ["月曜日", "火曜日", "水曜日", "木曜日"], correct: "月曜日" },
            { type: "mcq", question: "Quel jour est 金曜日 ?", character: "金曜日", options: ["Vendredi", "Jeudi", "Samedi", "Mercredi"], correct: "Vendredi" },
            { type: "mcq", question: "Comment dit-on 'Dimanche' ?", character: "dimanche", options: ["日曜日", "土曜日", "月曜日", "金曜日"], correct: "日曜日" }
        ]
    },
    {
        id: 25,
        title: "Couleurs",
        description: "Rouge, bleu, vert...",
        category: "vocabulary",
        characters: [
            { char: "赤", romaji: "aka", mnemonic: "Rouge" },
            { char: "青", romaji: "ao", mnemonic: "Bleu" },
            { char: "緑", romaji: "midori", mnemonic: "Vert" },
            { char: "黄色", romaji: "kiiro", mnemonic: "Jaune" },
            { char: "白", romaji: "shiro", mnemonic: "Blanc" },
            { char: "黒", romaji: "kuro", mnemonic: "Noir" },
            { char: "茶色", romaji: "chairo", mnemonic: "Marron (couleur du thé)" },
            { char: "ピンク", romaji: "pinku", mnemonic: "Rose (pink)" },
            { char: "オレンジ", romaji: "orenji", mnemonic: "Orange" },
            { char: "紫", romaji: "murasaki", mnemonic: "Violet" }
        ],
        exercises: [
            { type: "mcq", question: "Comment dit-on 'Rouge' ?", character: "rouge", options: ["赤", "青", "緑", "白"], correct: "赤" },
            { type: "mcq", question: "Quelle couleur est 青 ?", character: "青", options: ["Bleu", "Vert", "Jaune", "Rouge"], correct: "Bleu" },
            { type: "mcq", question: "Comment dit-on 'Noir' ?", character: "noir", options: ["黒", "白", "赤", "青"], correct: "黒" }
        ]
    },
    {
        id: 26,
        title: "Famille",
        description: "Père, mère, frère, soeur...",
        category: "vocabulary",
        characters: [
            { char: "お父さん", romaji: "otousan", mnemonic: "Père (poli)" },
            { char: "お母さん", romaji: "okaasan", mnemonic: "Mère (poli)" },
            { char: "お兄さん", romaji: "oniisan", mnemonic: "Grand frère (poli)" },
            { char: "お姉さん", romaji: "oneesan", mnemonic: "Grande soeur (poli)" },
            { char: "弟", romaji: "otouto", mnemonic: "Petit frère" },
            { char: "妹", romaji: "imouto", mnemonic: "Petite soeur" },
            { char: "おじいさん", romaji: "ojiisan", mnemonic: "Grand-père" },
            { char: "おばあさん", romaji: "obaasan", mnemonic: "Grand-mère" }
        ],
        exercises: [
            { type: "mcq", question: "Comment dit-on 'Père' poliment ?", character: "père", options: ["お父さん", "お母さん", "お兄さん", "弟"], correct: "お父さん" },
            { type: "mcq", question: "Que signifie 妹 ?", character: "妹", options: ["Petite soeur", "Grande soeur", "Mère", "Père"], correct: "Petite soeur" },
            { type: "mcq", question: "Comment dit-on 'Grand-mère' ?", character: "grand-mère", options: ["おばあさん", "おじいさん", "お母さん", "お姉さん"], correct: "おばあさん" }
        ]
    },
    {
        id: 27,
        title: "Nourriture",
        description: "Riz, poisson, viande...",
        category: "vocabulary",
        characters: [
            { char: "ご飯", romaji: "gohan", mnemonic: "Riz / Repas" },
            { char: "魚", romaji: "sakana", mnemonic: "Poisson" },
            { char: "肉", romaji: "niku", mnemonic: "Viande" },
            { char: "野菜", romaji: "yasai", mnemonic: "Légumes" },
            { char: "果物", romaji: "kudamono", mnemonic: "Fruits" },
            { char: "水", romaji: "mizu", mnemonic: "Eau" },
            { char: "お茶", romaji: "ocha", mnemonic: "Thé" },
            { char: "牛乳", romaji: "gyuunyuu", mnemonic: "Lait" },
            { char: "パン", romaji: "pan", mnemonic: "Pain" },
            { char: "卵", romaji: "tamago", mnemonic: "Oeuf" }
        ],
        exercises: [
            { type: "mcq", question: "Comment dit-on 'Riz' ?", character: "riz", options: ["ご飯", "魚", "肉", "水"], correct: "ご飯" },
            { type: "mcq", question: "Que signifie 魚 ?", character: "魚", options: ["Poisson", "Viande", "Légume", "Fruit"], correct: "Poisson" },
            { type: "mcq", question: "Comment dit-on 'Eau' ?", character: "eau", options: ["水", "お茶", "牛乳", "ご飯"], correct: "水" },
            { type: "transcription", question: "Comment dit-on 'thé' en romaji ?", character: "thé", correct: "ocha", meaning: "お茶" }
        ]
    }
];

// =========================================
// KANJI N5 - 20 LEÇONS (102 kanji)
// =========================================

const kanjiLessons = [
    {
        id: 28,
        title: "Kanji N5 - Nombres (1-5)",
        description: "一, 二, 三, 四, 五",
        category: "kanji",
        characters: [
            { char: "一", romaji: "ichi", onyomi: ["イチ", "イツ"], kunyomi: ["ひと(つ)"], meaning: "un, 1", strokes: 1, mnemonic: "Une ligne = 1", examples: [{ word: "一つ", reading: "ひとつ", meaning: "un (objet)" }] },
            { char: "二", romaji: "ni", onyomi: ["ニ"], kunyomi: ["ふた(つ)"], meaning: "deux, 2", strokes: 2, mnemonic: "Deux lignes = 2", examples: [{ word: "二人", reading: "ふたり", meaning: "deux personnes" }] },
            { char: "三", romaji: "san", onyomi: ["サン"], kunyomi: ["みっ(つ)"], meaning: "trois, 3", strokes: 3, mnemonic: "Trois lignes = 3", examples: [{ word: "三月", reading: "さんがつ", meaning: "mars" }] },
            { char: "四", romaji: "shi", onyomi: ["シ"], kunyomi: ["よ(つ)", "よん"], meaning: "quatre, 4", strokes: 5, mnemonic: "Boîte fermée = 4", examples: [{ word: "四月", reading: "しがつ", meaning: "avril" }] },
            { char: "五", romaji: "go", onyomi: ["ゴ"], kunyomi: ["いつ(つ)"], meaning: "cinq, 5", strokes: 4, mnemonic: "Pentagramme = 5", examples: [{ word: "五月", reading: "ごがつ", meaning: "mai" }] }
        ],
        exercises: [
            { type: "kanji_recognition", question: "Quelle est la signification ?", character: "一", options: ["un", "deux", "trois", "cinq"], correct: "un" },
            { type: "kanji_recognition", question: "Quelle est la signification ?", character: "三", options: ["trois", "un", "quatre", "deux"], correct: "trois" },
            { type: "kanji_reading", question: "Comment se lit ce kanji ?", character: "五", options: ["ゴ", "シ", "サン", "ニ"], correct: "ゴ" }
        ]
    },
    {
        id: 29,
        title: "Kanji N5 - Nombres (6-10)",
        description: "六, 七, 八, 九, 十",
        category: "kanji",
        characters: [
            { char: "六", romaji: "roku", onyomi: ["ロク"], kunyomi: ["む(つ)"], meaning: "six, 6", strokes: 4, mnemonic: "Chapeau pointu = 6", examples: [{ word: "六月", reading: "ろくがつ", meaning: "juin" }] },
            { char: "七", romaji: "shichi", onyomi: ["シチ"], kunyomi: ["なな(つ)"], meaning: "sept, 7", strokes: 2, mnemonic: "Croix coupée = 7", examples: [{ word: "七月", reading: "しちがつ", meaning: "juillet" }] },
            { char: "八", romaji: "hachi", onyomi: ["ハチ"], kunyomi: ["や(つ)"], meaning: "huit, 8", strokes: 2, mnemonic: "Deux traits qui s'écartent = 8", examples: [{ word: "八月", reading: "はちがつ", meaning: "août" }] },
            { char: "九", romaji: "kyuu", onyomi: ["キュウ", "ク"], kunyomi: ["ここの(つ)"], meaning: "neuf, 9", strokes: 2, mnemonic: "Coude plié = 9", examples: [{ word: "九月", reading: "くがつ", meaning: "septembre" }] },
            { char: "十", romaji: "juu", onyomi: ["ジュウ"], kunyomi: ["とお"], meaning: "dix, 10", strokes: 2, mnemonic: "Croix + = 10", examples: [{ word: "十月", reading: "じゅうがつ", meaning: "octobre" }] }
        ],
        exercises: [
            { type: "kanji_recognition", question: "Quelle est la signification ?", character: "七", options: ["sept", "huit", "six", "neuf"], correct: "sept" },
            { type: "kanji_recognition", question: "Quelle est la signification ?", character: "十", options: ["dix", "cent", "un", "cinq"], correct: "dix" },
            { type: "kanji_reading", question: "Comment se lit 八 ?", character: "八", options: ["ハチ", "ロク", "キュウ", "ジュウ"], correct: "ハチ" }
        ]
    },
    {
        id: 30,
        title: "Kanji N5 - Grands nombres",
        description: "百, 千, 万, 円, 時",
        category: "kanji",
        characters: [
            { char: "百", romaji: "hyaku", onyomi: ["ヒャク"], kunyomi: [], meaning: "cent, 100", strokes: 6, mnemonic: "Un blanc = cent", examples: [{ word: "百円", reading: "ひゃくえん", meaning: "100 yens" }] },
            { char: "千", romaji: "sen", onyomi: ["セン"], kunyomi: ["ち"], meaning: "mille, 1000", strokes: 3, mnemonic: "Dix personnes = mille", examples: [{ word: "千円", reading: "せんえん", meaning: "1000 yens" }] },
            { char: "万", romaji: "man", onyomi: ["マン"], kunyomi: [], meaning: "dix mille, 10000", strokes: 3, mnemonic: "Grand nombre", examples: [{ word: "一万", reading: "いちまん", meaning: "10000" }] },
            { char: "円", romaji: "en", onyomi: ["エン"], kunyomi: ["まる(い)"], meaning: "yen, cercle", strokes: 4, mnemonic: "Pièce de monnaie", examples: [{ word: "五百円", reading: "ごひゃくえん", meaning: "500 yens" }] },
            { char: "時", romaji: "ji", onyomi: ["ジ"], kunyomi: ["とき"], meaning: "temps, heure", strokes: 10, mnemonic: "Soleil + temple = heure", examples: [{ word: "時間", reading: "じかん", meaning: "temps" }] }
        ],
        exercises: [
            { type: "kanji_recognition", question: "Quelle est la signification ?", character: "円", options: ["yen", "temps", "cent", "mille"], correct: "yen" },
            { type: "kanji_recognition", question: "Quelle est la signification ?", character: "万", options: ["dix mille", "cent", "mille", "un"], correct: "dix mille" }
        ]
    },
    {
        id: 31,
        title: "Kanji N5 - Jours",
        description: "日, 月, 火, 水, 木",
        category: "kanji",
        characters: [
            { char: "日", romaji: "nichi", onyomi: ["ニチ", "ジツ"], kunyomi: ["ひ", "か"], meaning: "soleil, jour", strokes: 4, mnemonic: "Le soleil", examples: [{ word: "日本", reading: "にほん", meaning: "Japon" }] },
            { char: "月", romaji: "getsu", onyomi: ["ゲツ", "ガツ"], kunyomi: ["つき"], meaning: "lune, mois", strokes: 4, mnemonic: "Croissant de lune", examples: [{ word: "月曜日", reading: "げつようび", meaning: "lundi" }] },
            { char: "火", romaji: "ka", onyomi: ["カ"], kunyomi: ["ひ"], meaning: "feu", strokes: 4, mnemonic: "Flammes", examples: [{ word: "火曜日", reading: "かようび", meaning: "mardi" }] },
            { char: "水", romaji: "sui", onyomi: ["スイ"], kunyomi: ["みず"], meaning: "eau", strokes: 4, mnemonic: "Gouttes d'eau", examples: [{ word: "水曜日", reading: "すいようび", meaning: "mercredi" }] },
            { char: "木", romaji: "moku", onyomi: ["モク", "ボク"], kunyomi: ["き"], meaning: "arbre, bois", strokes: 4, mnemonic: "Un arbre", examples: [{ word: "木曜日", reading: "もくようび", meaning: "jeudi" }] }
        ],
        exercises: [
            { type: "kanji_recognition", question: "Quelle est la signification ?", character: "日", options: ["soleil/jour", "lune", "feu", "eau"], correct: "soleil/jour" },
            { type: "kanji_recognition", question: "Quelle est la signification ?", character: "水", options: ["eau", "feu", "bois", "lune"], correct: "eau" }
        ]
    },
    {
        id: 32,
        title: "Kanji N5 - Éléments",
        description: "金, 土, 山, 川, 田",
        category: "kanji",
        characters: [
            { char: "金", romaji: "kin", onyomi: ["キン", "コン"], kunyomi: ["かね"], meaning: "or, argent", strokes: 8, mnemonic: "Pépites d'or", examples: [{ word: "金曜日", reading: "きんようび", meaning: "vendredi" }] },
            { char: "土", romaji: "do", onyomi: ["ド", "ト"], kunyomi: ["つち"], meaning: "terre, sol", strokes: 3, mnemonic: "Couches de terre", examples: [{ word: "土曜日", reading: "どようび", meaning: "samedi" }] },
            { char: "山", romaji: "san", onyomi: ["サン"], kunyomi: ["やま"], meaning: "montagne", strokes: 3, mnemonic: "Trois pics", examples: [{ word: "富士山", reading: "ふじさん", meaning: "Mont Fuji" }] },
            { char: "川", romaji: "kawa", onyomi: ["セン"], kunyomi: ["かわ"], meaning: "rivière", strokes: 3, mnemonic: "Eau qui coule", examples: [{ word: "小川", reading: "おがわ", meaning: "ruisseau" }] },
            { char: "田", romaji: "ta", onyomi: ["デン"], kunyomi: ["た"], meaning: "rizière", strokes: 5, mnemonic: "Champ divisé", examples: [{ word: "田中", reading: "たなか", meaning: "Tanaka" }] }
        ],
        exercises: [
            { type: "kanji_recognition", question: "Quelle est la signification ?", character: "山", options: ["montagne", "rivière", "terre", "or"], correct: "montagne" },
            { type: "kanji_recognition", question: "Quelle est la signification ?", character: "川", options: ["rivière", "montagne", "rizière", "eau"], correct: "rivière" }
        ]
    },
    {
        id: 33,
        title: "Kanji N5 - Personnes",
        description: "人, 男, 女, 子, 力",
        category: "kanji",
        characters: [
            { char: "人", romaji: "hito", onyomi: ["ジン", "ニン"], kunyomi: ["ひと"], meaning: "personne", strokes: 2, mnemonic: "Personne debout", examples: [{ word: "日本人", reading: "にほんじん", meaning: "Japonais" }] },
            { char: "男", romaji: "otoko", onyomi: ["ダン"], kunyomi: ["おとこ"], meaning: "homme", strokes: 7, mnemonic: "Force dans le champ", examples: [{ word: "男の子", reading: "おとこのこ", meaning: "garçon" }] },
            { char: "女", romaji: "onna", onyomi: ["ジョ"], kunyomi: ["おんな"], meaning: "femme", strokes: 3, mnemonic: "Femme agenouillée", examples: [{ word: "女の子", reading: "おんなのこ", meaning: "fille" }] },
            { char: "子", romaji: "ko", onyomi: ["シ"], kunyomi: ["こ"], meaning: "enfant", strokes: 3, mnemonic: "Bébé emmailloté", examples: [{ word: "子供", reading: "こども", meaning: "enfant" }] },
            { char: "力", romaji: "chikara", onyomi: ["リョク", "リキ"], kunyomi: ["ちから"], meaning: "force", strokes: 2, mnemonic: "Bras musclé", examples: [{ word: "努力", reading: "どりょく", meaning: "effort" }] }
        ],
        exercises: [
            { type: "kanji_recognition", question: "Quelle est la signification ?", character: "人", options: ["personne", "homme", "femme", "enfant"], correct: "personne" },
            { type: "kanji_recognition", question: "Quelle est la signification ?", character: "女", options: ["femme", "homme", "enfant", "force"], correct: "femme" }
        ]
    },
    {
        id: 34,
        title: "Kanji N5 - Taille & Direction",
        description: "大, 小, 上, 下, 中",
        category: "kanji",
        characters: [
            { char: "大", romaji: "dai", onyomi: ["ダイ", "タイ"], kunyomi: ["おお(きい)"], meaning: "grand", strokes: 3, mnemonic: "Bras écartés = grand", examples: [{ word: "大きい", reading: "おおきい", meaning: "grand" }] },
            { char: "小", romaji: "shou", onyomi: ["ショウ"], kunyomi: ["ちい(さい)"], meaning: "petit", strokes: 3, mnemonic: "Trois petits points", examples: [{ word: "小さい", reading: "ちいさい", meaning: "petit" }] },
            { char: "上", romaji: "ue", onyomi: ["ジョウ"], kunyomi: ["うえ", "あ(げる)"], meaning: "dessus, haut", strokes: 3, mnemonic: "Ligne au-dessus", examples: [{ word: "上手", reading: "じょうず", meaning: "habile" }] },
            { char: "下", romaji: "shita", onyomi: ["カ", "ゲ"], kunyomi: ["した", "さ(げる)"], meaning: "dessous, bas", strokes: 3, mnemonic: "Point en dessous", examples: [{ word: "下手", reading: "へた", meaning: "maladroit" }] },
            { char: "中", romaji: "naka", onyomi: ["チュウ"], kunyomi: ["なか"], meaning: "milieu, intérieur", strokes: 4, mnemonic: "Ligne au milieu", examples: [{ word: "中国", reading: "ちゅうごく", meaning: "Chine" }] }
        ],
        exercises: [
            { type: "kanji_recognition", question: "Quelle est la signification ?", character: "大", options: ["grand", "petit", "milieu", "haut"], correct: "grand" },
            { type: "kanji_recognition", question: "Quelle est la signification ?", character: "中", options: ["milieu", "haut", "bas", "petit"], correct: "milieu" }
        ]
    },
    {
        id: 35,
        title: "Kanji N5 - Directions",
        description: "左, 右, 入, 出, 本",
        category: "kanji",
        characters: [
            { char: "左", romaji: "hidari", onyomi: ["サ"], kunyomi: ["ひだり"], meaning: "gauche", strokes: 5, mnemonic: "Main gauche", examples: [{ word: "左側", reading: "ひだりがわ", meaning: "côté gauche" }] },
            { char: "右", romaji: "migi", onyomi: ["ウ", "ユウ"], kunyomi: ["みぎ"], meaning: "droite", strokes: 5, mnemonic: "Main droite", examples: [{ word: "右側", reading: "みぎがわ", meaning: "côté droit" }] },
            { char: "入", romaji: "hairu", onyomi: ["ニュウ"], kunyomi: ["はい(る)", "い(れる)"], meaning: "entrer", strokes: 2, mnemonic: "Flèche qui entre", examples: [{ word: "入口", reading: "いりぐち", meaning: "entrée" }] },
            { char: "出", romaji: "deru", onyomi: ["シュツ"], kunyomi: ["で(る)", "だ(す)"], meaning: "sortir", strokes: 5, mnemonic: "Montagnes empilées", examples: [{ word: "出口", reading: "でぐち", meaning: "sortie" }] },
            { char: "本", romaji: "hon", onyomi: ["ホン"], kunyomi: ["もと"], meaning: "livre, origine", strokes: 5, mnemonic: "Arbre avec racine", examples: [{ word: "日本", reading: "にほん", meaning: "Japon" }] }
        ],
        exercises: [
            { type: "kanji_recognition", question: "Quelle est la signification ?", character: "左", options: ["gauche", "droite", "haut", "bas"], correct: "gauche" },
            { type: "kanji_recognition", question: "Quelle est la signification ?", character: "出", options: ["sortir", "entrer", "gauche", "droite"], correct: "sortir" }
        ]
    },
    {
        id: 36,
        title: "Kanji N5 - Noms & École",
        description: "名, 前, 後, 年, 学",
        category: "kanji",
        characters: [
            { char: "名", romaji: "na", onyomi: ["メイ", "ミョウ"], kunyomi: ["な"], meaning: "nom", strokes: 6, mnemonic: "Dire son nom le soir", examples: [{ word: "名前", reading: "なまえ", meaning: "nom" }] },
            { char: "前", romaji: "mae", onyomi: ["ゼン"], kunyomi: ["まえ"], meaning: "avant, devant", strokes: 9, mnemonic: "Marcher devant", examples: [{ word: "午前", reading: "ごぜん", meaning: "matin" }] },
            { char: "後", romaji: "ato", onyomi: ["ゴ", "コウ"], kunyomi: ["あと", "うし(ろ)"], meaning: "après, derrière", strokes: 9, mnemonic: "Marcher en retard", examples: [{ word: "午後", reading: "ごご", meaning: "après-midi" }] },
            { char: "年", romaji: "toshi", onyomi: ["ネン"], kunyomi: ["とし"], meaning: "année", strokes: 6, mnemonic: "Récolte annuelle", examples: [{ word: "今年", reading: "ことし", meaning: "cette année" }] },
            { char: "学", romaji: "gaku", onyomi: ["ガク"], kunyomi: ["まな(ぶ)"], meaning: "étude", strokes: 8, mnemonic: "Enfant sous un toit", examples: [{ word: "学校", reading: "がっこう", meaning: "école" }] }
        ],
        exercises: [
            { type: "kanji_recognition", question: "Quelle est la signification ?", character: "名", options: ["nom", "avant", "après", "année"], correct: "nom" },
            { type: "kanji_recognition", question: "Quelle est la signification ?", character: "学", options: ["étude", "nom", "année", "avant"], correct: "étude" }
        ]
    },
    {
        id: 37,
        title: "Kanji N5 - Vie & École",
        description: "生, 先, 校, 分, 半",
        category: "kanji",
        characters: [
            { char: "生", romaji: "sei", onyomi: ["セイ", "ショウ"], kunyomi: ["い(きる)", "う(まれる)", "なま"], meaning: "vie, naître", strokes: 5, mnemonic: "Plante qui pousse", examples: [{ word: "学生", reading: "がくせい", meaning: "étudiant" }] },
            { char: "先", romaji: "sen", onyomi: ["セン"], kunyomi: ["さき"], meaning: "avant, précédent", strokes: 6, mnemonic: "Celui qui va devant", examples: [{ word: "先生", reading: "せんせい", meaning: "professeur" }] },
            { char: "校", romaji: "kou", onyomi: ["コウ"], kunyomi: [], meaning: "école", strokes: 10, mnemonic: "Bois + échanger", examples: [{ word: "学校", reading: "がっこう", meaning: "école" }] },
            { char: "分", romaji: "fun", onyomi: ["ブン", "フン"], kunyomi: ["わ(ける)", "わ(かる)"], meaning: "diviser, minute", strokes: 4, mnemonic: "Couper avec couteau", examples: [{ word: "分かる", reading: "わかる", meaning: "comprendre" }] },
            { char: "半", romaji: "han", onyomi: ["ハン"], kunyomi: ["なか(ば)"], meaning: "moitié", strokes: 5, mnemonic: "Boeuf coupé en deux", examples: [{ word: "半分", reading: "はんぶん", meaning: "moitié" }] }
        ],
        exercises: [
            { type: "kanji_recognition", question: "Quelle est la signification ?", character: "生", options: ["vie/naître", "école", "avant", "moitié"], correct: "vie/naître" },
            { type: "kanji_recognition", question: "Quelle est la signification ?", character: "先", options: ["avant/précédent", "après", "vie", "école"], correct: "avant/précédent" }
        ]
    },
    {
        id: 38,
        title: "Kanji N5 - Météo & Nature",
        description: "天, 気, 雨, 空, 花",
        category: "kanji",
        characters: [
            { char: "天", romaji: "ten", onyomi: ["テン"], kunyomi: ["あま", "あめ"], meaning: "ciel", strokes: 4, mnemonic: "Personne sous le ciel", examples: [{ word: "天気", reading: "てんき", meaning: "temps (météo)" }] },
            { char: "気", romaji: "ki", onyomi: ["キ", "ケ"], kunyomi: [], meaning: "esprit, énergie", strokes: 6, mnemonic: "Vapeur de riz", examples: [{ word: "元気", reading: "げんき", meaning: "en forme" }] },
            { char: "雨", romaji: "ame", onyomi: ["ウ"], kunyomi: ["あめ"], meaning: "pluie", strokes: 8, mnemonic: "Gouttes du ciel", examples: [{ word: "大雨", reading: "おおあめ", meaning: "forte pluie" }] },
            { char: "空", romaji: "sora", onyomi: ["クウ"], kunyomi: ["そら", "あ(く)", "から"], meaning: "ciel, vide", strokes: 8, mnemonic: "Espace sous le toit", examples: [{ word: "空港", reading: "くうこう", meaning: "aéroport" }] },
            { char: "花", romaji: "hana", onyomi: ["カ"], kunyomi: ["はな"], meaning: "fleur", strokes: 7, mnemonic: "Herbe qui s'épanouit", examples: [{ word: "花火", reading: "はなび", meaning: "feu d'artifice" }] }
        ],
        exercises: [
            { type: "kanji_recognition", question: "Quelle est la signification ?", character: "天", options: ["ciel", "pluie", "fleur", "esprit"], correct: "ciel" },
            { type: "kanji_recognition", question: "Quelle est la signification ?", character: "雨", options: ["pluie", "ciel", "fleur", "esprit"], correct: "pluie" }
        ]
    },
    {
        id: 39,
        title: "Kanji N5 - Communication",
        description: "見, 聞, 話, 読, 書",
        category: "kanji",
        characters: [
            { char: "見", romaji: "miru", onyomi: ["ケン"], kunyomi: ["み(る)", "み(える)"], meaning: "voir", strokes: 7, mnemonic: "Oeil sur des jambes", examples: [{ word: "見る", reading: "みる", meaning: "regarder" }] },
            { char: "聞", romaji: "kiku", onyomi: ["ブン", "モン"], kunyomi: ["き(く)"], meaning: "entendre", strokes: 14, mnemonic: "Oreille à la porte", examples: [{ word: "新聞", reading: "しんぶん", meaning: "journal" }] },
            { char: "話", romaji: "hanasu", onyomi: ["ワ"], kunyomi: ["はな(す)", "はなし"], meaning: "parler", strokes: 13, mnemonic: "Parole + langue", examples: [{ word: "電話", reading: "でんわ", meaning: "téléphone" }] },
            { char: "読", romaji: "yomu", onyomi: ["ドク"], kunyomi: ["よ(む)"], meaning: "lire", strokes: 14, mnemonic: "Parole + vendre", examples: [{ word: "読む", reading: "よむ", meaning: "lire" }] },
            { char: "書", romaji: "kaku", onyomi: ["ショ"], kunyomi: ["か(く)"], meaning: "écrire", strokes: 10, mnemonic: "Pinceau qui écrit", examples: [{ word: "辞書", reading: "じしょ", meaning: "dictionnaire" }] }
        ],
        exercises: [
            { type: "kanji_recognition", question: "Quelle est la signification ?", character: "見", options: ["voir", "entendre", "parler", "lire"], correct: "voir" },
            { type: "kanji_recognition", question: "Quelle est la signification ?", character: "書", options: ["écrire", "lire", "parler", "voir"], correct: "écrire" }
        ]
    },
    {
        id: 40,
        title: "Kanji N5 - Langues & Mouvement",
        description: "語, 言, 行, 来, 食",
        category: "kanji",
        characters: [
            { char: "語", romaji: "go", onyomi: ["ゴ"], kunyomi: ["かた(る)"], meaning: "langue, mot", strokes: 14, mnemonic: "Parole + je", examples: [{ word: "日本語", reading: "にほんご", meaning: "japonais" }] },
            { char: "言", romaji: "iu", onyomi: ["ゲン", "ゴン"], kunyomi: ["い(う)", "こと"], meaning: "dire, mot", strokes: 7, mnemonic: "Mots qui sortent", examples: [{ word: "言葉", reading: "ことば", meaning: "mot" }] },
            { char: "行", romaji: "iku", onyomi: ["コウ", "ギョウ"], kunyomi: ["い(く)", "おこな(う)"], meaning: "aller", strokes: 6, mnemonic: "Carrefour", examples: [{ word: "銀行", reading: "ぎんこう", meaning: "banque" }] },
            { char: "来", romaji: "kuru", onyomi: ["ライ"], kunyomi: ["く(る)", "きた(る)"], meaning: "venir", strokes: 7, mnemonic: "Blé qui mûrit", examples: [{ word: "来年", reading: "らいねん", meaning: "année prochaine" }] },
            { char: "食", romaji: "taberu", onyomi: ["ショク"], kunyomi: ["た(べる)", "く(う)"], meaning: "manger", strokes: 9, mnemonic: "Personne + bien", examples: [{ word: "食事", reading: "しょくじ", meaning: "repas" }] }
        ],
        exercises: [
            { type: "kanji_recognition", question: "Quelle est la signification ?", character: "語", options: ["langue", "dire", "aller", "venir"], correct: "langue" },
            { type: "kanji_recognition", question: "Quelle est la signification ?", character: "行", options: ["aller", "venir", "manger", "langue"], correct: "aller" }
        ]
    },
    {
        id: 41,
        title: "Kanji N5 - Actions quotidiennes",
        description: "飲, 買, 休, 何, 今",
        category: "kanji",
        characters: [
            { char: "飲", romaji: "nomu", onyomi: ["イン"], kunyomi: ["の(む)"], meaning: "boire", strokes: 12, mnemonic: "Nourriture + manquer", examples: [{ word: "飲み物", reading: "のみもの", meaning: "boisson" }] },
            { char: "買", romaji: "kau", onyomi: ["バイ"], kunyomi: ["か(う)"], meaning: "acheter", strokes: 12, mnemonic: "Filet + argent", examples: [{ word: "買い物", reading: "かいもの", meaning: "shopping" }] },
            { char: "休", romaji: "yasumu", onyomi: ["キュウ"], kunyomi: ["やす(む)"], meaning: "repos", strokes: 6, mnemonic: "Personne contre arbre", examples: [{ word: "休日", reading: "きゅうじつ", meaning: "jour de repos" }] },
            { char: "何", romaji: "nani", onyomi: ["カ"], kunyomi: ["なに", "なん"], meaning: "quoi", strokes: 7, mnemonic: "Personne + possible", examples: [{ word: "何人", reading: "なんにん", meaning: "combien de personnes" }] },
            { char: "今", romaji: "ima", onyomi: ["コン", "キン"], kunyomi: ["いま"], meaning: "maintenant", strokes: 4, mnemonic: "Toit sur le présent", examples: [{ word: "今日", reading: "きょう", meaning: "aujourd'hui" }] }
        ],
        exercises: [
            { type: "kanji_recognition", question: "Quelle est la signification ?", character: "飲", options: ["boire", "manger", "acheter", "repos"], correct: "boire" },
            { type: "kanji_recognition", question: "Quelle est la signification ?", character: "今", options: ["maintenant", "quoi", "repos", "acheter"], correct: "maintenant" }
        ]
    },
    {
        id: 42,
        title: "Kanji N5 - Temps & Cycle",
        description: "毎, 週, 新, 古, 長",
        category: "kanji",
        characters: [
            { char: "毎", romaji: "mai", onyomi: ["マイ"], kunyomi: ["ごと"], meaning: "chaque", strokes: 6, mnemonic: "Mère qui répète", examples: [{ word: "毎日", reading: "まいにち", meaning: "chaque jour" }] },
            { char: "週", romaji: "shuu", onyomi: ["シュウ"], kunyomi: [], meaning: "semaine", strokes: 11, mnemonic: "Route + tour", examples: [{ word: "週末", reading: "しゅうまつ", meaning: "week-end" }] },
            { char: "新", romaji: "atarashii", onyomi: ["シン"], kunyomi: ["あたら(しい)"], meaning: "nouveau", strokes: 13, mnemonic: "Arbre coupé pour renouveler", examples: [{ word: "新聞", reading: "しんぶん", meaning: "journal" }] },
            { char: "古", romaji: "furui", onyomi: ["コ"], kunyomi: ["ふる(い)"], meaning: "ancien", strokes: 5, mnemonic: "Dix bouches = générations", examples: [{ word: "中古", reading: "ちゅうこ", meaning: "d'occasion" }] },
            { char: "長", romaji: "nagai", onyomi: ["チョウ"], kunyomi: ["なが(い)"], meaning: "long, chef", strokes: 8, mnemonic: "Longs cheveux d'ancien", examples: [{ word: "長い", reading: "ながい", meaning: "long" }] }
        ],
        exercises: [
            { type: "kanji_recognition", question: "Quelle est la signification ?", character: "毎", options: ["chaque", "semaine", "nouveau", "ancien"], correct: "chaque" },
            { type: "kanji_recognition", question: "Quelle est la signification ?", character: "新", options: ["nouveau", "ancien", "long", "semaine"], correct: "nouveau" }
        ]
    },
    {
        id: 43,
        title: "Kanji N5 - Adjectifs",
        description: "高, 安, 多, 少, 白",
        category: "kanji",
        characters: [
            { char: "高", romaji: "takai", onyomi: ["コウ"], kunyomi: ["たか(い)"], meaning: "haut, cher", strokes: 10, mnemonic: "Tour haute", examples: [{ word: "高校", reading: "こうこう", meaning: "lycée" }] },
            { char: "安", romaji: "yasui", onyomi: ["アン"], kunyomi: ["やす(い)"], meaning: "pas cher, paisible", strokes: 6, mnemonic: "Femme sous toit", examples: [{ word: "安い", reading: "やすい", meaning: "pas cher" }] },
            { char: "多", romaji: "ooi", onyomi: ["タ"], kunyomi: ["おお(い)"], meaning: "beaucoup", strokes: 6, mnemonic: "Deux soirs = beaucoup", examples: [{ word: "多分", reading: "たぶん", meaning: "probablement" }] },
            { char: "少", romaji: "sukunai", onyomi: ["ショウ"], kunyomi: ["すく(ない)", "すこ(し)"], meaning: "peu", strokes: 4, mnemonic: "Petit coupé", examples: [{ word: "少し", reading: "すこし", meaning: "un peu" }] },
            { char: "白", romaji: "shiroi", onyomi: ["ハク"], kunyomi: ["しろ", "しろ(い)"], meaning: "blanc", strokes: 5, mnemonic: "Rayon de soleil blanc", examples: [{ word: "白い", reading: "しろい", meaning: "blanc" }] }
        ],
        exercises: [
            { type: "kanji_recognition", question: "Quelle est la signification ?", character: "高", options: ["haut/cher", "pas cher", "beaucoup", "peu"], correct: "haut/cher" },
            { type: "kanji_recognition", question: "Quelle est la signification ?", character: "少", options: ["peu", "beaucoup", "blanc", "cher"], correct: "peu" }
        ]
    },
    {
        id: 44,
        title: "Kanji N5 - Couleurs & Directions",
        description: "黒, 赤, 北, 南, 東",
        category: "kanji",
        characters: [
            { char: "黒", romaji: "kuroi", onyomi: ["コク"], kunyomi: ["くろ", "くろ(い)"], meaning: "noir", strokes: 11, mnemonic: "Terre brûlée", examples: [{ word: "黒い", reading: "くろい", meaning: "noir" }] },
            { char: "赤", romaji: "akai", onyomi: ["セキ"], kunyomi: ["あか", "あか(い)"], meaning: "rouge", strokes: 7, mnemonic: "Terre + feu", examples: [{ word: "赤ちゃん", reading: "あかちゃん", meaning: "bébé" }] },
            { char: "北", romaji: "kita", onyomi: ["ホク"], kunyomi: ["きた"], meaning: "nord", strokes: 5, mnemonic: "Dos au froid", examples: [{ word: "北海道", reading: "ほっかいどう", meaning: "Hokkaido" }] },
            { char: "南", romaji: "minami", onyomi: ["ナン"], kunyomi: ["みなみ"], meaning: "sud", strokes: 9, mnemonic: "Plantes vers le sud", examples: [{ word: "南米", reading: "なんべい", meaning: "Amérique du Sud" }] },
            { char: "東", romaji: "higashi", onyomi: ["トウ"], kunyomi: ["ひがし"], meaning: "est", strokes: 8, mnemonic: "Soleil à travers l'arbre", examples: [{ word: "東京", reading: "とうきょう", meaning: "Tokyo" }] }
        ],
        exercises: [
            { type: "kanji_recognition", question: "Quelle est la signification ?", character: "黒", options: ["noir", "rouge", "blanc", "nord"], correct: "noir" },
            { type: "kanji_recognition", question: "Quelle est la signification ?", character: "東", options: ["est", "ouest", "nord", "sud"], correct: "est" }
        ]
    },
    {
        id: 45,
        title: "Kanji N5 - Pays & Chemins",
        description: "西, 国, 外, 道, 間",
        category: "kanji",
        characters: [
            { char: "西", romaji: "nishi", onyomi: ["セイ", "サイ"], kunyomi: ["にし"], meaning: "ouest", strokes: 6, mnemonic: "Oiseau au coucher du soleil", examples: [{ word: "関西", reading: "かんさい", meaning: "Kansai" }] },
            { char: "国", romaji: "kuni", onyomi: ["コク"], kunyomi: ["くに"], meaning: "pays", strokes: 8, mnemonic: "Jade protégé = pays", examples: [{ word: "外国", reading: "がいこく", meaning: "pays étranger" }] },
            { char: "外", romaji: "soto", onyomi: ["ガイ", "ゲ"], kunyomi: ["そと", "ほか"], meaning: "extérieur", strokes: 5, mnemonic: "Chercher dehors", examples: [{ word: "外国人", reading: "がいこくじん", meaning: "étranger" }] },
            { char: "道", romaji: "michi", onyomi: ["ドウ"], kunyomi: ["みち"], meaning: "chemin", strokes: 12, mnemonic: "Tête sur une route", examples: [{ word: "道路", reading: "どうろ", meaning: "route" }] },
            { char: "間", romaji: "aida", onyomi: ["カン", "ケン"], kunyomi: ["あいだ", "ま"], meaning: "entre, intervalle", strokes: 12, mnemonic: "Soleil par la porte", examples: [{ word: "時間", reading: "じかん", meaning: "temps" }] }
        ],
        exercises: [
            { type: "kanji_recognition", question: "Quelle est la signification ?", character: "西", options: ["ouest", "est", "nord", "sud"], correct: "ouest" },
            { type: "kanji_recognition", question: "Quelle est la signification ?", character: "国", options: ["pays", "extérieur", "chemin", "entre"], correct: "pays" }
        ]
    },
    {
        id: 46,
        title: "Kanji N5 - Lieux & Transport",
        description: "店, 駅, 電, 車, 門",
        category: "kanji",
        characters: [
            { char: "店", romaji: "mise", onyomi: ["テン"], kunyomi: ["みせ"], meaning: "magasin", strokes: 8, mnemonic: "Toit + divination", examples: [{ word: "喫茶店", reading: "きっさてん", meaning: "café" }] },
            { char: "駅", romaji: "eki", onyomi: ["エキ"], kunyomi: [], meaning: "gare", strokes: 14, mnemonic: "Cheval + relais", examples: [{ word: "東京駅", reading: "とうきょうえき", meaning: "gare de Tokyo" }] },
            { char: "電", romaji: "den", onyomi: ["デン"], kunyomi: [], meaning: "électricité", strokes: 13, mnemonic: "Pluie + éclair", examples: [{ word: "電車", reading: "でんしゃ", meaning: "train" }] },
            { char: "車", romaji: "kuruma", onyomi: ["シャ"], kunyomi: ["くるま"], meaning: "voiture", strokes: 7, mnemonic: "Roue de char", examples: [{ word: "自転車", reading: "じてんしゃ", meaning: "vélo" }] },
            { char: "門", romaji: "mon", onyomi: ["モン"], kunyomi: ["かど"], meaning: "porte", strokes: 8, mnemonic: "Deux battants", examples: [{ word: "専門", reading: "せんもん", meaning: "spécialité" }] }
        ],
        exercises: [
            { type: "kanji_recognition", question: "Quelle est la signification ?", character: "駅", options: ["gare", "magasin", "électricité", "voiture"], correct: "gare" },
            { type: "kanji_recognition", question: "Quelle est la signification ?", character: "電", options: ["électricité", "gare", "voiture", "porte"], correct: "électricité" }
        ]
    },
    {
        id: 47,
        title: "Kanji N5 - Corps & Famille",
        description: "目, 口, 手, 足, 父, 母, 友",
        category: "kanji",
        characters: [
            { char: "目", romaji: "me", onyomi: ["モク", "ボク"], kunyomi: ["め"], meaning: "oeil", strokes: 5, mnemonic: "Oeil tourné", examples: [{ word: "目的", reading: "もくてき", meaning: "but" }] },
            { char: "口", romaji: "kuchi", onyomi: ["コウ", "ク"], kunyomi: ["くち"], meaning: "bouche", strokes: 3, mnemonic: "Bouche ouverte", examples: [{ word: "入口", reading: "いりぐち", meaning: "entrée" }] },
            { char: "手", romaji: "te", onyomi: ["シュ"], kunyomi: ["て"], meaning: "main", strokes: 4, mnemonic: "Main avec doigts", examples: [{ word: "上手", reading: "じょうず", meaning: "habile" }] },
            { char: "足", romaji: "ashi", onyomi: ["ソク"], kunyomi: ["あし", "た(りる)"], meaning: "pied, jambe", strokes: 7, mnemonic: "Bouche + arrêter", examples: [{ word: "足りる", reading: "たりる", meaning: "suffire" }] },
            { char: "父", romaji: "chichi", onyomi: ["フ"], kunyomi: ["ちち"], meaning: "père", strokes: 4, mnemonic: "Mains croisées protectrices", examples: [{ word: "お父さん", reading: "おとうさん", meaning: "père" }] },
            { char: "母", romaji: "haha", onyomi: ["ボ"], kunyomi: ["はは"], meaning: "mère", strokes: 5, mnemonic: "Femme qui allaite", examples: [{ word: "お母さん", reading: "おかあさん", meaning: "mère" }] },
            { char: "友", romaji: "tomo", onyomi: ["ユウ"], kunyomi: ["とも"], meaning: "ami", strokes: 4, mnemonic: "Mains qui se rejoignent", examples: [{ word: "友達", reading: "ともだち", meaning: "ami" }] }
        ],
        exercises: [
            { type: "kanji_recognition", question: "Quelle est la signification ?", character: "目", options: ["oeil", "bouche", "main", "pied"], correct: "oeil" },
            { type: "kanji_recognition", question: "Quelle est la signification ?", character: "友", options: ["ami", "père", "mère", "main"], correct: "ami" }
        ]
    }
];

// =========================================
// COMBINAISON DE TOUTES LES LEÇONS
// =========================================

const ALL_LESSONS = [
    ...hiraganaLessons,
    ...katakanaLessons,
    ...vocabularyLessons,
    ...kanjiLessons
];

// Export pour utilisation globale
window.PROVERBS = PROVERBS;
window.ALL_LESSONS = ALL_LESSONS;
window.hiraganaLessons = hiraganaLessons;
window.katakanaLessons = katakanaLessons;
window.vocabularyLessons = vocabularyLessons;
window.kanjiLessons = kanjiLessons;
