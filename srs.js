/**
 * JAPONAIS - Système SRS (Spaced Repetition System)
 * Algorithme SM-2 pour mémorisation optimale
 * Version personnelle - AUCUNE LIMITE
 */

const SRS = {
    // Constantes de l'algorithme SM-2
    MIN_EASINESS: 1.3,
    DEFAULT_EASINESS: 2.5,

    // Intervalles en jours selon la qualité de réponse
    INTERVALS: {
        AGAIN: 0.0007,  // ~1 minute
        HARD: 1,
        GOOD: 3,
        EASY: 7
    },

    // Stockage
    STORAGE_KEY: 'japonais_srs_cards',

    /**
     * Initialise ou charge les cartes SRS
     */
    init() {
        this.cards = this.loadCards();
        return this;
    },

    /**
     * Charge les cartes depuis localStorage
     */
    loadCards() {
        try {
            const data = localStorage.getItem(this.STORAGE_KEY);
            return data ? JSON.parse(data) : {};
        } catch (e) {
            console.error('Erreur chargement SRS:', e);
            return {};
        }
    },

    /**
     * Sauvegarde les cartes dans localStorage
     */
    saveCards() {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.cards));
        } catch (e) {
            console.error('Erreur sauvegarde SRS:', e);
        }
    },

    /**
     * Génère un ID unique pour une carte
     */
    generateCardId(lessonId, charIndex) {
        return `${lessonId}_${charIndex}`;
    },

    /**
     * Ajoute une nouvelle carte SRS
     */
    addCard(lessonId, charIndex, character, romaji, category) {
        const cardId = this.generateCardId(lessonId, charIndex);

        if (!this.cards[cardId]) {
            this.cards[cardId] = {
                id: cardId,
                lessonId,
                character,
                romaji,
                category,
                easinessFactor: this.DEFAULT_EASINESS,
                interval: 0,
                repetitions: 0,
                nextReview: Date.now(),
                lastReview: null,
                created: Date.now()
            };
            this.saveCards();
        }

        return this.cards[cardId];
    },

    /**
     * Ajoute toutes les cartes d'une leçon
     */
    addLessonCards(lesson) {
        const chars = lesson.characters || [];
        chars.forEach((char, index) => {
            this.addCard(
                lesson.id,
                index,
                char.char || char.hiragana || char.kanji,
                char.romaji,
                lesson.category
            );
        });
        this.saveCards();
    },

    /**
     * Met à jour une carte après révision
     * @param {string} cardId - ID de la carte
     * @param {number} quality - Qualité de réponse (0-5)
     *   0 = À revoir (AGAIN)
     *   2 = Difficile (HARD)
     *   3 = Bien (GOOD)
     *   4 = Facile (EASY)
     *   5 = Parfait (PERFECT)
     */
    reviewCard(cardId, quality) {
        const card = this.cards[cardId];
        if (!card) return null;

        // Algorithme SM-2
        if (quality < 3) {
            // Réponse incorrecte ou difficile - reset
            card.repetitions = 0;
            card.interval = this.INTERVALS.AGAIN;
        } else {
            // Réponse correcte
            if (card.repetitions === 0) {
                card.interval = 1; // 1 jour
            } else if (card.repetitions === 1) {
                card.interval = 6; // 6 jours
            } else {
                card.interval = Math.round(card.interval * card.easinessFactor);
            }
            card.repetitions++;
        }

        // Mettre à jour le facteur de facilité
        card.easinessFactor = Math.max(
            this.MIN_EASINESS,
            card.easinessFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
        );

        // Calculer la prochaine date de révision
        card.lastReview = Date.now();
        card.nextReview = Date.now() + (card.interval * 24 * 60 * 60 * 1000);

        this.saveCards();
        return card;
    },

    /**
     * Obtient les cartes à réviser aujourd'hui
     */
    getDueCards() {
        const now = Date.now();
        return Object.values(this.cards)
            .filter(card => card.nextReview <= now)
            .sort((a, b) => a.nextReview - b.nextReview);
    },

    /**
     * Obtient le nombre de cartes à réviser
     */
    getDueCount() {
        return this.getDueCards().length;
    },

    /**
     * Obtient les statistiques SRS
     */
    getStats() {
        const cards = Object.values(this.cards);
        const now = Date.now();

        return {
            total: cards.length,
            new: cards.filter(c => c.repetitions === 0).length,
            learning: cards.filter(c => c.repetitions > 0 && c.interval < 7).length,
            review: cards.filter(c => c.interval >= 7).length,
            due: cards.filter(c => c.nextReview <= now).length,
            averageEasiness: cards.length > 0
                ? (cards.reduce((sum, c) => sum + c.easinessFactor, 0) / cards.length).toFixed(2)
                : 0
        };
    },

    /**
     * Calcule les intervalles prévus pour affichage
     */
    getNextIntervals(card) {
        if (!card) return { hard: '1j', good: '3j', easy: '7j' };

        const ef = card.easinessFactor;
        const rep = card.repetitions;

        let baseInterval = card.interval || 1;

        return {
            hard: this.formatInterval(Math.max(1, baseInterval * 0.5)),
            good: this.formatInterval(rep < 2 ? (rep === 0 ? 1 : 6) : baseInterval * ef),
            easy: this.formatInterval(rep < 2 ? 7 : baseInterval * ef * 1.3)
        };
    },

    /**
     * Formate un intervalle en texte lisible
     */
    formatInterval(days) {
        if (days < 1) return '<1j';
        if (days < 7) return `${Math.round(days)}j`;
        if (days < 30) return `${Math.round(days / 7)}sem`;
        if (days < 365) return `${Math.round(days / 30)}mois`;
        return `${Math.round(days / 365)}an`;
    },

    /**
     * Réinitialise toutes les cartes SRS
     */
    reset() {
        this.cards = {};
        this.saveCards();
    },

    /**
     * Supprime une carte spécifique
     */
    removeCard(cardId) {
        delete this.cards[cardId];
        this.saveCards();
    },

    /**
     * Exporte les données SRS
     */
    export() {
        return JSON.stringify(this.cards, null, 2);
    },

    /**
     * Importe des données SRS
     */
    import(jsonString) {
        try {
            this.cards = JSON.parse(jsonString);
            this.saveCards();
            return true;
        } catch (e) {
            console.error('Erreur import SRS:', e);
            return false;
        }
    }
};

// Initialiser au chargement
SRS.init();

// Export global
window.SRS = SRS;
