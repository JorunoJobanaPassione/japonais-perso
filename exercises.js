/**
 * JAPONAIS - Système d'exercices
 * Gestion de tous les types d'exercices
 * Version personnelle - AUCUNE LIMITE
 */

const Exercises = {
    // État actuel
    currentLesson: null,
    currentExercises: [],
    currentIndex: 0,
    answers: [],
    score: 0,

    /**
     * Initialise une session d'exercices
     */
    startSession(lesson) {
        this.currentLesson = lesson;
        this.currentExercises = this.shuffleArray([...lesson.exercises]);
        this.currentIndex = 0;
        this.answers = [];
        this.score = 0;
        return this.getCurrentExercise();
    },

    /**
     * Obtient l'exercice actuel
     */
    getCurrentExercise() {
        if (this.currentIndex >= this.currentExercises.length) {
            return null;
        }
        return this.currentExercises[this.currentIndex];
    },

    /**
     * Vérifie la réponse de l'utilisateur
     */
    checkAnswer(userAnswer) {
        const exercise = this.getCurrentExercise();
        if (!exercise) return null;

        const isCorrect = this.validateAnswer(exercise, userAnswer);

        this.answers.push({
            exercise,
            userAnswer,
            isCorrect,
            timestamp: Date.now()
        });

        if (isCorrect) {
            this.score++;
        }

        return {
            isCorrect,
            correctAnswer: exercise.correct,
            explanation: exercise.explanation || null,
            xpEarned: this.calculateXP(exercise.type, isCorrect)
        };
    },

    /**
     * Valide une réponse selon le type d'exercice
     */
    validateAnswer(exercise, userAnswer) {
        const correct = exercise.correct.toLowerCase().trim();
        const answer = userAnswer.toLowerCase().trim();

        switch (exercise.type) {
            case 'mcq':
            case 'kanji_recognition':
            case 'kanji_reading':
            case 'kanji_meaning':
                return answer === correct;

            case 'transcription':
                // Normaliser pour accepter des variantes
                return this.normalizeRomaji(answer) === this.normalizeRomaji(correct);

            case 'intruder':
                return answer === correct;

            default:
                return answer === correct;
        }
    },

    /**
     * Normalise le romaji pour comparaison flexible
     */
    normalizeRomaji(text) {
        return text
            .toLowerCase()
            .trim()
            // Variantes de long vowels
            .replace(/ou/g, 'o')
            .replace(/oo/g, 'o')
            .replace(/uu/g, 'u')
            .replace(/aa/g, 'a')
            .replace(/ii/g, 'i')
            .replace(/ee/g, 'e')
            // Variantes communes
            .replace(/si/g, 'shi')
            .replace(/ti/g, 'chi')
            .replace(/tu/g, 'tsu')
            .replace(/hu/g, 'fu')
            .replace(/zi/g, 'ji')
            .replace(/sya/g, 'sha')
            .replace(/syu/g, 'shu')
            .replace(/syo/g, 'sho')
            .replace(/tya/g, 'cha')
            .replace(/tyu/g, 'chu')
            .replace(/tyo/g, 'cho')
            // Supprimer espaces et tirets
            .replace(/[\s-]/g, '');
    },

    /**
     * Calcule les XP gagnés
     */
    calculateXP(exerciseType, isCorrect) {
        if (!isCorrect) return 0;

        const xpTable = {
            'mcq': 10,
            'transcription': 15,
            'intruder': 12,
            'kanji_recognition': 12,
            'kanji_reading': 15,
            'kanji_meaning': 12
        };

        return xpTable[exerciseType] || 10;
    },

    /**
     * Passe à l'exercice suivant
     */
    nextExercise() {
        this.currentIndex++;
        return this.getCurrentExercise();
    },

    /**
     * Obtient la progression actuelle
     */
    getProgress() {
        return {
            current: this.currentIndex + 1,
            total: this.currentExercises.length,
            percent: Math.round(((this.currentIndex) / this.currentExercises.length) * 100)
        };
    },

    /**
     * Termine la session et retourne les résultats
     */
    finishSession() {
        const totalXP = this.answers.reduce((sum, a) => {
            return sum + this.calculateXP(a.exercise.type, a.isCorrect);
        }, 0);

        return {
            lessonId: this.currentLesson.id,
            lessonTitle: this.currentLesson.title,
            totalExercises: this.currentExercises.length,
            correctAnswers: this.score,
            incorrectAnswers: this.currentExercises.length - this.score,
            accuracy: Math.round((this.score / this.currentExercises.length) * 100),
            xpEarned: totalXP,
            answers: this.answers,
            completedAt: Date.now()
        };
    },

    /**
     * Génère le HTML pour un exercice
     */
    renderExercise(exercise) {
        switch (exercise.type) {
            case 'mcq':
            case 'kanji_recognition':
            case 'kanji_reading':
            case 'kanji_meaning':
                return this.renderMCQ(exercise);

            case 'transcription':
                return this.renderTranscription(exercise);

            case 'intruder':
                return this.renderIntruder(exercise);

            default:
                return this.renderMCQ(exercise);
        }
    },

    /**
     * Rend un exercice QCM
     */
    renderMCQ(exercise) {
        const character = exercise.character || exercise.word || '';
        const shuffledOptions = this.shuffleArray([...exercise.options]);

        return `
            <div class="exercise-mcq">
                <p class="exercise-question">${exercise.question}</p>
                ${character && character !== '?' ? `<div class="exercise-character">${character}</div>` : ''}
                <div class="exercise-options">
                    ${shuffledOptions.map((option, i) => `
                        <button class="option-btn" data-answer="${option}" data-index="${i}">
                            ${option}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    },

    /**
     * Rend un exercice de transcription
     */
    renderTranscription(exercise) {
        return `
            <div class="exercise-transcription">
                <p class="exercise-question">${exercise.question}</p>
                <div class="exercise-character">${exercise.character}</div>
                ${exercise.meaning ? `<p class="exercise-hint">Signification: ${exercise.meaning}</p>` : ''}
                <input type="text"
                       class="transcription-input"
                       id="transcription-input"
                       placeholder="Tapez le romaji..."
                       autocomplete="off"
                       autocapitalize="off"
                       spellcheck="false">
                <button class="primary-btn submit-btn" id="submit-transcription">
                    Vérifier
                </button>
            </div>
        `;
    },

    /**
     * Rend un exercice intrus
     */
    renderIntruder(exercise) {
        const shuffledOptions = this.shuffleArray([...exercise.options]);

        return `
            <div class="exercise-intruder">
                <p class="exercise-question">${exercise.question}</p>
                <p class="exercise-hint">Sélectionnez celui qui n'appartient pas au groupe</p>
                <div class="exercise-options">
                    ${shuffledOptions.map((option, i) => `
                        <button class="option-btn" data-answer="${option}" data-index="${i}">
                            ${option}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    },

    /**
     * Mélange un tableau (Fisher-Yates)
     */
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    },

    /**
     * Affiche le feedback
     */
    renderFeedback(result) {
        const feedbackEl = document.getElementById('exercise-feedback');
        if (!feedbackEl) return;

        feedbackEl.classList.remove('hidden', 'correct', 'incorrect');
        feedbackEl.classList.add(result.isCorrect ? 'correct' : 'incorrect');

        feedbackEl.innerHTML = `
            <div class="feedback-icon">${result.isCorrect ? '✓' : '✗'}</div>
            <p class="feedback-text">${result.isCorrect ? 'Correct !' : 'Incorrect'}</p>
            ${!result.isCorrect ? `<p class="feedback-explanation">Réponse: ${result.correctAnswer}</p>` : ''}
            ${result.explanation ? `<p class="feedback-explanation">${result.explanation}</p>` : ''}
            ${result.isCorrect ? `<p class="feedback-xp">+${result.xpEarned} XP</p>` : ''}
        `;
    }
};

// Export global
window.Exercises = Exercises;
