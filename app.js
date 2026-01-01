/**
 * JAPONAIS - Application principale
 * Version personnelle - AUCUNE RESTRICTION
 * COPIE CONFORME de l'app mobile React Native
 */

const App = {
    // Etat de l'application
    state: {
        currentScreen: 'home',
        currentCategory: 'hiragana',
        currentLesson: null,
        exerciseStreak: 0,
        progress: {},
        stats: {
            xp: 0,
            streak: 0,
            lessonsCompleted: 0,
            exercisesCompleted: 0,
            correctAnswers: 0,
            lastActivity: null
        }
    },

    // Cles de stockage
    STORAGE_KEYS: {
        PROGRESS: 'japonais_progress',
        STATS: 'japonais_stats'
    },

    /**
     * Initialise l'application
     */
    init() {
        this.loadState();
        this.bindEvents();
        this.updateStreak();
        this.updateHomeStats();
        this.loadLessons('hiragana');

        // Masquer le loader
        document.getElementById('loading-overlay').classList.add('hidden');

        console.log('Japonais App - Version Personnelle Illimitee');
    },

    /**
     * Charge l'etat depuis localStorage
     */
    loadState() {
        try {
            const progress = localStorage.getItem(this.STORAGE_KEYS.PROGRESS);
            const stats = localStorage.getItem(this.STORAGE_KEYS.STATS);

            if (progress) this.state.progress = JSON.parse(progress);
            if (stats) this.state.stats = JSON.parse(stats);
        } catch (e) {
            console.error('Erreur chargement etat:', e);
        }
    },

    /**
     * Sauvegarde l'etat
     */
    saveState() {
        try {
            localStorage.setItem(this.STORAGE_KEYS.PROGRESS, JSON.stringify(this.state.progress));
            localStorage.setItem(this.STORAGE_KEYS.STATS, JSON.stringify(this.state.stats));
        } catch (e) {
            console.error('Erreur sauvegarde etat:', e);
        }
    },

    /**
     * Met a jour le streak
     */
    updateStreak() {
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
        const lastActivity = this.state.stats.lastActivity;

        if (lastActivity) {
            const lastDate = new Date(lastActivity);
            const lastDay = new Date(lastDate.getFullYear(), lastDate.getMonth(), lastDate.getDate()).getTime();
            const diffDays = Math.floor((today - lastDay) / (24 * 60 * 60 * 1000));

            if (diffDays === 0) {
                // Meme jour
            } else if (diffDays === 1) {
                this.state.stats.streak++;
            } else {
                this.state.stats.streak = 0;
            }
        }

        this.state.stats.lastActivity = Date.now();
        this.saveState();
    },

    /**
     * Bind les evenements
     */
    bindEvents() {
        // Navigation bottom
        document.querySelectorAll('.nav-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const screen = e.currentTarget.dataset.screen;
                this.navigate(screen);
            });
        });

        // Boutons Home
        document.getElementById('btn-lessons').addEventListener('click', () => {
            this.navigate('lessons');
        });

        document.getElementById('btn-srs').addEventListener('click', () => {
            this.navigate('srs');
        });

        document.getElementById('btn-stats').addEventListener('click', () => {
            this.navigate('stats');
        });

        // Categories tabs
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', (e) => {
                document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
                e.currentTarget.classList.add('active');
                const category = e.currentTarget.dataset.category;
                this.loadLessons(category);
            });
        });

        // Boutons retour
        document.getElementById('back-from-detail')?.addEventListener('click', () => {
            this.navigate('lessons');
        });

        document.getElementById('back-from-srs')?.addEventListener('click', () => {
            this.navigate('home');
        });

        document.getElementById('back-from-stats')?.addEventListener('click', () => {
            this.navigate('home');
        });

        // Exercices
        document.getElementById('start-exercises-btn')?.addEventListener('click', () => {
            this.startExercises();
        });

        document.getElementById('close-exercise')?.addEventListener('click', () => {
            if (confirm('Quitter les exercices ?')) {
                this.navigate('lessons');
            }
        });

        document.getElementById('submit-answer-btn')?.addEventListener('click', () => {
            const input = document.getElementById('transcription-input');
            if (input.value.trim()) {
                this.submitAnswer(input.value.trim());
            }
        });

        document.getElementById('transcription-input')?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const input = document.getElementById('transcription-input');
                if (input.value.trim()) {
                    this.submitAnswer(input.value.trim());
                }
            }
        });

        // Resultats
        document.getElementById('results-done-btn')?.addEventListener('click', () => {
            this.navigate('home');
        });

        // SRS
        document.getElementById('srs-show-btn')?.addEventListener('click', () => {
            this.showSRSAnswer();
        });

        document.querySelectorAll('.srs-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const quality = parseInt(e.currentTarget.dataset.quality);
                this.reviewSRSCard(quality);
            });
        });

        document.getElementById('srs-back-home')?.addEventListener('click', () => {
            this.navigate('home');
        });

        // Modal
        document.getElementById('close-modal')?.addEventListener('click', () => {
            this.closeModal();
        });

        document.getElementById('character-modal')?.addEventListener('click', (e) => {
            if (e.target.id === 'character-modal') {
                this.closeModal();
            }
        });
    },

    /**
     * Navigation entre ecrans
     */
    navigate(screen) {
        // Masquer tous les ecrans
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));

        // Afficher l'ecran demande
        const screenEl = document.getElementById(`${screen}-screen`);
        if (screenEl) {
            screenEl.classList.add('active');
        }

        // Mettre a jour la navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.toggle('active', item.dataset.screen === screen);
        });

        this.state.currentScreen = screen;

        // Actions specifiques par ecran
        switch (screen) {
            case 'home':
                this.updateHomeStats();
                break;
            case 'lessons':
                this.loadLessons(this.state.currentCategory);
                break;
            case 'srs':
                this.renderSRS();
                break;
            case 'stats':
                this.updateStatsScreen();
                break;
        }
    },

    /**
     * Met a jour les stats de l'accueil
     */
    updateHomeStats() {
        document.getElementById('home-total-cards').textContent = SRS.getStats().total;
        document.getElementById('home-streak').textContent = this.state.stats.streak;
        document.getElementById('home-xp').textContent = this.state.stats.xp;

        // SRS badge
        const dueCount = SRS.getDueCount();
        const srsBadge = document.getElementById('srs-badge');
        const srsSubtitle = document.getElementById('srs-subtitle');

        if (dueCount > 0) {
            srsBadge.classList.remove('hidden');
            document.getElementById('srs-badge-count').textContent = dueCount;
            srsSubtitle.textContent = `${dueCount} carte${dueCount > 1 ? 's' : ''} a reviser`;
        } else {
            srsBadge.classList.add('hidden');
            srsSubtitle.textContent = 'Aucune revision pour le moment';
        }
    },

    /**
     * Charge les lecons d'une categorie
     */
    loadLessons(category) {
        this.state.currentCategory = category;

        const categoryLessons = {
            hiragana: hiraganaLessons,
            katakana: katakanaLessons,
            vocabulary: vocabularyLessons,
            kanji: kanjiLessons
        };

        const lessons = categoryLessons[category] || [];
        this.renderLessonsList(lessons);
    },

    /**
     * Rend la liste des lecons (LessonsScreen.js style)
     */
    renderLessonsList(lessons) {
        const container = document.getElementById('lessons-list');

        container.innerHTML = lessons.map((lesson) => {
            const isCompleted = this.state.progress[lesson.id]?.completed;
            const charsCount = lesson.characters?.length || lesson.kanji?.length || 0;

            return `
                <button class="lesson-card" data-lesson-id="${lesson.id}">
                    <div class="lesson-header">
                        <span class="lesson-number">Lecon ${lesson.id}</span>
                        <div class="difficulty-badge">
                            <span class="difficulty-text">${lesson.difficulty || 'Debutant'}</span>
                        </div>
                    </div>
                    <div class="lesson-title">${lesson.title}</div>
                    <div class="lesson-description">${lesson.description}</div>
                    <div class="lesson-footer">
                        <span class="lesson-characters">${charsCount} caracteres</span>
                        <span class="lesson-arrow">›</span>
                    </div>
                </button>
            `;
        }).join('');

        // Bind click events
        container.querySelectorAll('.lesson-card').forEach(card => {
            card.addEventListener('click', () => {
                const lessonId = parseInt(card.dataset.lessonId);
                const lesson = ALL_LESSONS.find(l => l.id === lessonId);
                if (lesson) this.showLessonDetail(lesson);
            });
        });
    },

    /**
     * Affiche le detail d'une lecon
     */
    showLessonDetail(lesson) {
        this.state.currentLesson = lesson;

        document.getElementById('lesson-title').textContent = lesson.title;
        document.getElementById('lesson-description').textContent = lesson.description;

        const chars = lesson.characters || lesson.kanji || [];
        document.getElementById('lesson-chars-count').textContent = `${chars.length} caracteres`;
        document.getElementById('lesson-difficulty').textContent = lesson.difficulty || 'Debutant';

        // Rendre les caracteres
        const grid = document.getElementById('characters-grid');
        grid.innerHTML = chars.map((char, index) => `
            <button class="character-card" data-index="${index}">
                <span class="char-main">${char.char || char.hiragana || char.kanji}</span>
                <span class="char-romaji">${char.romaji || char.meaning || ''}</span>
            </button>
        `).join('');

        // Bind click events
        grid.querySelectorAll('.character-card').forEach(card => {
            card.addEventListener('click', () => {
                const index = parseInt(card.dataset.index);
                this.showCharacterModal(chars[index], lesson.category);
            });
        });

        // Naviguer
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById('lesson-detail-screen').classList.add('active');
        this.state.currentScreen = 'lesson-detail';
    },

    /**
     * Affiche le modal d'un caractere
     */
    showCharacterModal(char, category) {
        const modal = document.getElementById('character-modal');
        const character = char.char || char.hiragana || char.kanji;

        document.getElementById('modal-char').textContent = character;
        document.getElementById('modal-romaji').textContent = char.romaji || char.meaning || '';
        document.getElementById('modal-mnemonic').textContent = char.mnemonic || '';

        // Details Kanji
        const kanjiDetails = document.getElementById('kanji-details');
        if (category === 'kanji' && char.onyomi) {
            kanjiDetails.classList.remove('hidden');
            document.getElementById('modal-onyomi').textContent = char.onyomi?.join(', ') || '-';
            document.getElementById('modal-kunyomi').textContent = char.kunyomi?.join(', ') || '-';

            if (char.examples) {
                document.getElementById('modal-examples').innerHTML = char.examples.map(ex => `
                    <div class="example-item">
                        <span class="example-word">${ex.word}</span>
                        <span class="example-reading">${ex.reading}</span>
                        <span class="example-meaning">${ex.meaning}</span>
                    </div>
                `).join('');
            }
        } else {
            kanjiDetails.classList.add('hidden');
        }

        // Audio button
        document.getElementById('modal-audio-btn').onclick = () => {
            this.showToast(`Audio: ${char.romaji}`, 'info');
        };

        modal.classList.remove('hidden');
    },

    /**
     * Ferme le modal
     */
    closeModal() {
        document.getElementById('character-modal').classList.add('hidden');
    },

    /**
     * Demarre les exercices
     */
    startExercises() {
        const lesson = this.state.currentLesson;
        if (!lesson) return;

        this.state.exerciseStreak = 0;
        Exercises.startSession(lesson);

        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById('exercise-screen').classList.add('active');
        this.state.currentScreen = 'exercise';

        this.renderCurrentExercise();
    },

    /**
     * Rend l'exercice actuel (ExerciseScreen.js style)
     */
    renderCurrentExercise() {
        const exercise = Exercises.getCurrentExercise();

        if (!exercise) {
            this.showResults();
            return;
        }

        const progress = Exercises.getProgress();
        document.getElementById('exercise-progress-bar').style.width = `${progress.percent}%`;

        // Reset UI
        document.getElementById('feedback-overlay').classList.add('hidden');
        document.getElementById('streak-banner').classList.add('hidden');
        document.getElementById('transcription-container').classList.add('hidden');
        document.getElementById('exercise-options').innerHTML = '';

        // Streak banner
        if (this.state.exerciseStreak > 0) {
            document.getElementById('streak-banner').classList.remove('hidden');
            document.getElementById('streak-text').textContent = `🔥 Serie de ${this.state.exerciseStreak} !`;
        }

        // Question et caractere
        document.getElementById('exercise-question').textContent = exercise.question;
        document.getElementById('exercise-character').textContent = exercise.character || '';

        // Type d'exercice
        if (exercise.type === 'transcription') {
            document.getElementById('transcription-container').classList.remove('hidden');
            const input = document.getElementById('transcription-input');
            input.value = '';
            input.className = 'transcription-input';
            input.disabled = false;
            input.focus();
        } else {
            // QCM
            const optionsContainer = document.getElementById('exercise-options');
            optionsContainer.innerHTML = exercise.options.map(opt => `
                <button class="option-btn" data-answer="${opt}">${opt}</button>
            `).join('');

            optionsContainer.querySelectorAll('.option-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    this.submitAnswer(btn.dataset.answer);
                });
            });
        }
    },

    /**
     * Soumet une reponse
     */
    submitAnswer(answer) {
        const result = Exercises.checkAnswer(answer);
        if (!result) return;

        // Mettre a jour le streak
        if (result.isCorrect) {
            this.state.exerciseStreak++;
        } else {
            this.state.exerciseStreak = 0;
        }

        // Feedback visuel sur les boutons
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.disabled = true;
            if (btn.dataset.answer === answer) {
                btn.classList.add(result.isCorrect ? 'correct' : 'incorrect');
            }
            if (btn.dataset.answer === result.correctAnswer) {
                btn.classList.add('correct');
            }
        });

        // Input transcription
        const input = document.getElementById('transcription-input');
        if (input && !input.classList.contains('hidden')) {
            input.disabled = true;
            input.classList.add(result.isCorrect ? 'correct' : 'incorrect');
        }

        // Feedback overlay
        const feedbackOverlay = document.getElementById('feedback-overlay');
        const feedbackText = document.getElementById('feedback-text');
        feedbackText.textContent = result.isCorrect ? '✓' : '✗';
        feedbackOverlay.classList.remove('hidden');

        // Passer a l'exercice suivant apres un delai
        setTimeout(() => {
            Exercises.nextExercise();
            this.renderCurrentExercise();
        }, 1500);
    },

    /**
     * Affiche les resultats (ExerciseScreen.js style)
     */
    showResults() {
        const results = Exercises.finishSession();

        // Mettre a jour la progression
        this.state.progress[results.lessonId] = {
            completed: true,
            lastScore: results.accuracy,
            lastCompleted: Date.now()
        };

        // Mettre a jour les stats
        this.state.stats.xp += results.xpEarned;
        this.state.stats.lessonsCompleted++;
        this.state.stats.exercisesCompleted += results.totalExercises;
        this.state.stats.correctAnswers += results.correctAnswers;

        this.saveState();

        // Ajouter les cartes SRS
        SRS.addLessonCards(this.state.currentLesson);

        // Afficher l'ecran de resultats
        document.getElementById('result-accuracy').textContent = `${results.accuracy}%`;
        document.getElementById('result-score').textContent = `${results.correctAnswers}/${results.totalExercises}`;
        document.getElementById('result-xp').textContent = `+${results.xpEarned}`;

        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById('results-screen').classList.add('active');
        this.state.currentScreen = 'results';
    },

    /**
     * Rend l'ecran SRS
     */
    renderSRS() {
        const stats = SRS.getStats();
        const dueCards = SRS.getDueCards();

        document.getElementById('srs-new').textContent = stats.new;
        document.getElementById('srs-learning').textContent = stats.learning;
        document.getElementById('srs-review').textContent = stats.review;

        this.srsCards = dueCards;
        this.srsIndex = 0;

        if (dueCards.length === 0) {
            this.showSRSComplete();
        } else {
            this.showNextSRSCard();
        }
    },

    /**
     * Affiche la prochaine carte SRS
     */
    showNextSRSCard() {
        if (this.srsIndex >= this.srsCards.length) {
            this.showSRSComplete();
            return;
        }

        const card = this.srsCards[this.srsIndex];

        document.getElementById('srs-character').textContent = card.character;
        document.getElementById('srs-answer').textContent = card.romaji;
        document.getElementById('srs-reading').textContent = '';

        // Masquer reponse et boutons
        document.getElementById('srs-answer-container').classList.add('hidden');
        document.getElementById('srs-show-btn').classList.remove('hidden');
        document.getElementById('srs-buttons').classList.add('hidden');
        document.getElementById('srs-complete').classList.add('hidden');
        document.getElementById('srs-card-container').classList.remove('hidden');
    },

    /**
     * Montre la reponse SRS
     */
    showSRSAnswer() {
        document.getElementById('srs-answer-container').classList.remove('hidden');
        document.getElementById('srs-show-btn').classList.add('hidden');
        document.getElementById('srs-buttons').classList.remove('hidden');
    },

    /**
     * Revise une carte SRS
     */
    reviewSRSCard(quality) {
        const card = this.srsCards[this.srsIndex];
        SRS.reviewCard(card.id, quality);

        this.srsIndex++;
        this.showNextSRSCard();
    },

    /**
     * Affiche la fin des revisions SRS
     */
    showSRSComplete() {
        document.getElementById('srs-card-container').classList.add('hidden');
        document.getElementById('srs-show-btn').classList.add('hidden');
        document.getElementById('srs-buttons').classList.add('hidden');
        document.getElementById('srs-complete').classList.remove('hidden');
        document.getElementById('srs-reviewed-count').textContent = this.srsIndex || 0;
    },

    /**
     * Met a jour l'ecran de stats
     */
    updateStatsScreen() {
        const stats = this.state.stats;
        const srsStats = SRS.getStats();

        document.getElementById('stats-xp').textContent = stats.xp;
        document.getElementById('stats-streak').textContent = stats.streak;
        document.getElementById('stats-lessons').textContent = stats.lessonsCompleted;
        document.getElementById('stats-exercises').textContent = stats.exercisesCompleted;
        document.getElementById('stats-correct').textContent = stats.correctAnswers;

        const accuracy = stats.exercisesCompleted > 0
            ? Math.round((stats.correctAnswers / stats.exercisesCompleted) * 100)
            : 0;
        document.getElementById('stats-accuracy').textContent = `${accuracy}%`;

        document.getElementById('stats-srs-total').textContent = srsStats.total;
        document.getElementById('stats-srs-mastered').textContent = srsStats.review;
    },

    /**
     * Affiche un toast
     */
    showToast(message, type = 'info') {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;

        container.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, 3000);
    }
};

// Demarrer l'application au chargement
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});

// Export global
window.App = App;
