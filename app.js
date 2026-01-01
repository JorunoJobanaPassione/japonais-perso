/**
 * JAPONAIS - Application principale
 * Version personnelle - AUCUNE RESTRICTION
 */

const App = {
    // État de l'application
    state: {
        currentScreen: 'home',
        currentCategory: null,
        currentLesson: null,
        progress: {},
        stats: {
            xp: 0,
            streak: 0,
            lessonsCompleted: 0,
            charsLearned: 0,
            kanjiLearned: 0,
            lastActivity: null
        }
    },

    // Clés de stockage
    STORAGE_KEYS: {
        PROGRESS: 'japonais_progress',
        STATS: 'japonais_stats',
        SETTINGS: 'japonais_settings'
    },

    /**
     * Initialise l'application
     */
    init() {
        this.loadState();
        this.bindEvents();
        this.updateStreak();
        this.renderHome();
        this.updateUI();

        // Masquer le loader
        document.getElementById('loading-overlay').classList.add('hidden');

        console.log('Japonais App initialisée - Version personnelle');
    },

    /**
     * Charge l'état depuis localStorage
     */
    loadState() {
        try {
            const progress = localStorage.getItem(this.STORAGE_KEYS.PROGRESS);
            const stats = localStorage.getItem(this.STORAGE_KEYS.STATS);

            if (progress) this.state.progress = JSON.parse(progress);
            if (stats) this.state.stats = JSON.parse(stats);
        } catch (e) {
            console.error('Erreur chargement état:', e);
        }
    },

    /**
     * Sauvegarde l'état
     */
    saveState() {
        try {
            localStorage.setItem(this.STORAGE_KEYS.PROGRESS, JSON.stringify(this.state.progress));
            localStorage.setItem(this.STORAGE_KEYS.STATS, JSON.stringify(this.state.stats));
        } catch (e) {
            console.error('Erreur sauvegarde état:', e);
        }
    },

    /**
     * Met à jour le streak
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
                // Même jour, rien à faire
            } else if (diffDays === 1) {
                // Jour suivant, streak continue
                this.state.stats.streak++;
            } else {
                // Plus d'un jour, reset streak
                this.state.stats.streak = 0;
            }
        }

        this.state.stats.lastActivity = Date.now();
        this.saveState();
    },

    /**
     * Bind les événements
     */
    bindEvents() {
        // Navigation
        document.querySelectorAll('.nav-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const screen = e.currentTarget.dataset.screen;
                const category = e.currentTarget.dataset.category;
                this.navigate(screen, { category });
            });
        });

        // Bouton retour
        document.getElementById('back-btn').addEventListener('click', () => {
            this.goBack();
        });

        // Catégories
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const category = e.currentTarget.dataset.category;
                this.showLessons(category);
            });
        });

        // Actions rapides
        document.getElementById('continue-btn').addEventListener('click', () => {
            this.continueLeaning();
        });

        document.getElementById('srs-review-btn').addEventListener('click', () => {
            this.navigate('srs');
        });

        // Boutons exercices
        document.getElementById('start-exercises-btn').addEventListener('click', () => {
            this.startExercises();
        });

        document.getElementById('next-exercise-btn').addEventListener('click', () => {
            this.nextExercise();
        });

        // Résultats
        document.getElementById('retry-lesson-btn').addEventListener('click', () => {
            this.startExercises();
        });

        document.getElementById('continue-learning-btn').addEventListener('click', () => {
            this.navigate('home');
        });

        // SRS
        document.getElementById('srs-show-btn').addEventListener('click', () => {
            this.showSRSAnswer();
        });

        document.querySelectorAll('.srs-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const quality = parseInt(e.currentTarget.dataset.quality);
                this.reviewSRSCard(quality);
            });
        });

        document.getElementById('srs-back-home').addEventListener('click', () => {
            this.navigate('home');
        });

        // Modal
        document.getElementById('close-modal').addEventListener('click', () => {
            this.closeModal();
        });

        document.getElementById('character-modal').addEventListener('click', (e) => {
            if (e.target.id === 'character-modal') {
                this.closeModal();
            }
        });

        // Filtres leçons
        document.querySelectorAll('.filter-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
                e.currentTarget.classList.add('active');
                this.filterLessons(e.currentTarget.dataset.filter);
            });
        });
    },

    /**
     * Navigation entre écrans
     */
    navigate(screen, options = {}) {
        // Masquer tous les écrans
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));

        // Afficher l'écran demandé
        const screenEl = document.getElementById(`${screen}-screen`);
        if (screenEl) {
            screenEl.classList.add('active');
        }

        // Mettre à jour la navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.toggle('active', item.dataset.screen === screen);
        });

        // Mettre à jour le header
        this.state.currentScreen = screen;
        this.updateHeader(screen, options);

        // Actions spécifiques par écran
        switch (screen) {
            case 'home':
                this.renderHome();
                break;
            case 'lessons':
                if (options.category && options.category !== 'all') {
                    this.showLessons(options.category);
                } else {
                    this.showAllLessons();
                }
                break;
            case 'srs':
                this.renderSRS();
                break;
            case 'stats':
                this.renderStats();
                break;
        }
    },

    /**
     * Met à jour le header
     */
    updateHeader(screen, options = {}) {
        const backBtn = document.getElementById('back-btn');
        const title = document.getElementById('page-title');

        const showBack = !['home', 'lessons', 'srs', 'stats'].includes(screen);
        backBtn.classList.toggle('hidden', !showBack);

        const titles = {
            'home': 'Japonais',
            'lessons': 'Leçons',
            'lesson-detail': options.lessonTitle || 'Leçon',
            'exercise': 'Exercices',
            'srs': 'Révisions SRS',
            'results': 'Résultats',
            'stats': 'Statistiques'
        };

        title.textContent = titles[screen] || 'Japonais';
    },

    /**
     * Retour en arrière
     */
    goBack() {
        switch (this.state.currentScreen) {
            case 'lesson-detail':
                this.navigate('lessons', { category: this.state.currentCategory });
                break;
            case 'exercise':
            case 'results':
                this.navigate('lessons', { category: this.state.currentCategory });
                break;
            default:
                this.navigate('home');
        }
    },

    /**
     * Met à jour l'interface
     */
    updateUI() {
        // Stats header
        document.getElementById('streak-count').textContent = this.state.stats.streak;
        document.getElementById('xp-count').textContent = this.state.stats.xp;

        // Stats home
        document.getElementById('home-lessons-done').textContent = this.state.stats.lessonsCompleted;
        document.getElementById('home-chars-learned').textContent = this.state.stats.charsLearned;
        document.getElementById('home-kanji-learned').textContent = this.state.stats.kanjiLearned;

        // SRS count
        document.getElementById('srs-due-count').textContent = SRS.getDueCount();

        // Progress catégories
        this.updateCategoryProgress();
    },

    /**
     * Met à jour la progression des catégories
     */
    updateCategoryProgress() {
        const categories = {
            hiragana: { lessons: hiraganaLessons, el: 'hiragana-progress' },
            katakana: { lessons: katakanaLessons, el: 'katakana-progress' },
            vocabulary: { lessons: vocabularyLessons, el: 'vocabulary-progress' },
            kanji: { lessons: kanjiLessons, el: 'kanji-progress' }
        };

        for (const [cat, data] of Object.entries(categories)) {
            const completed = data.lessons.filter(l => this.state.progress[l.id]?.completed).length;
            document.getElementById(data.el).textContent = `${completed}/${data.lessons.length}`;
        }
    },

    /**
     * Rend l'écran d'accueil
     */
    renderHome() {
        // Proverbe du jour
        const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / (24 * 60 * 60 * 1000));
        const proverb = PROVERBS[dayOfYear % PROVERBS.length];

        document.getElementById('proverb-jp').textContent = proverb.japanese;
        document.getElementById('proverb-reading').textContent = proverb.reading;
        document.getElementById('proverb-meaning').textContent = proverb.meaning;

        // Description du bouton continuer
        const nextLesson = this.getNextLesson();
        if (nextLesson) {
            document.getElementById('continue-desc').textContent = nextLesson.title;
        }

        this.updateUI();
    },

    /**
     * Obtient la prochaine leçon à faire
     */
    getNextLesson() {
        for (const lesson of ALL_LESSONS) {
            if (!this.state.progress[lesson.id]?.completed) {
                return lesson;
            }
        }
        return ALL_LESSONS[0]; // Recommencer si tout est fait
    },

    /**
     * Continuer l'apprentissage
     */
    continueLeaning() {
        const nextLesson = this.getNextLesson();
        if (nextLesson) {
            this.showLessonDetail(nextLesson);
        }
    },

    /**
     * Affiche les leçons d'une catégorie
     */
    showLessons(category) {
        this.state.currentCategory = category;

        const categoryTitles = {
            hiragana: 'Hiragana',
            katakana: 'Katakana',
            vocabulary: 'Vocabulaire',
            kanji: 'Kanji N5'
        };

        document.getElementById('lessons-category-title').textContent = categoryTitles[category] || 'Leçons';

        const lessons = ALL_LESSONS.filter(l => l.category === category);
        this.renderLessonsList(lessons);

        this.navigate('lessons', { category });
        document.getElementById('back-btn').classList.remove('hidden');
    },

    /**
     * Affiche toutes les leçons
     */
    showAllLessons() {
        this.state.currentCategory = 'all';
        document.getElementById('lessons-category-title').textContent = 'Toutes les leçons';
        this.renderLessonsList(ALL_LESSONS);
    },

    /**
     * Rend la liste des leçons
     */
    renderLessonsList(lessons) {
        const container = document.getElementById('lessons-list');
        container.innerHTML = lessons.map((lesson, index) => {
            const isCompleted = this.state.progress[lesson.id]?.completed;
            const categoryColors = {
                hiragana: '#ff6b9d',
                katakana: '#4ecdc4',
                vocabulary: '#ffe66d',
                kanji: '#ff8c42'
            };

            return `
                <button class="lesson-card ${isCompleted ? 'completed' : ''}"
                        data-lesson-id="${lesson.id}"
                        style="border-left-color: ${categoryColors[lesson.category]}">
                    <div class="lesson-number">${isCompleted ? '✓' : index + 1}</div>
                    <div class="lesson-info">
                        <div class="lesson-card-title">${lesson.title}</div>
                        <div class="lesson-card-desc">${lesson.description}</div>
                    </div>
                    <div class="lesson-arrow">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M9 18l6-6-6-6"/>
                        </svg>
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
     * Filtre les leçons
     */
    filterLessons(filter) {
        let lessons = this.state.currentCategory === 'all'
            ? ALL_LESSONS
            : ALL_LESSONS.filter(l => l.category === this.state.currentCategory);

        if (filter === 'todo') {
            lessons = lessons.filter(l => !this.state.progress[l.id]?.completed);
        } else if (filter === 'done') {
            lessons = lessons.filter(l => this.state.progress[l.id]?.completed);
        }

        this.renderLessonsList(lessons);
    },

    /**
     * Affiche le détail d'une leçon
     */
    showLessonDetail(lesson) {
        this.state.currentLesson = lesson;

        document.getElementById('lesson-title').textContent = lesson.title;
        document.getElementById('lesson-description').textContent = lesson.description;
        document.getElementById('lesson-chars-count').textContent = `${lesson.characters.length} caractères`;
        document.getElementById('lesson-exercises-count').textContent = `${lesson.exercises.length} exercices`;

        // Rendre les caractères
        const grid = document.getElementById('characters-grid');
        grid.innerHTML = lesson.characters.map((char, index) => `
            <button class="character-card" data-index="${index}">
                <span class="char-main">${char.char || char.hiragana || char.kanji}</span>
                <span class="char-romaji">${char.romaji}</span>
            </button>
        `).join('');

        // Bind click events
        grid.querySelectorAll('.character-card').forEach(card => {
            card.addEventListener('click', () => {
                const index = parseInt(card.dataset.index);
                this.showCharacterModal(lesson.characters[index], lesson.category);
            });
        });

        // Naviguer
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById('lesson-detail-screen').classList.add('active');
        this.state.currentScreen = 'lesson-detail';
        this.updateHeader('lesson-detail', { lessonTitle: lesson.title });
    },

    /**
     * Affiche le modal d'un caractère
     */
    showCharacterModal(char, category) {
        const modal = document.getElementById('character-modal');
        const character = char.char || char.hiragana || char.kanji;

        document.getElementById('modal-char').textContent = character;
        document.getElementById('modal-romaji').textContent = char.romaji;
        document.getElementById('modal-mnemonic').textContent = char.mnemonic || '';

        // Détails Kanji
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
            this.playAudio(char.romaji);
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
     * Joue un fichier audio
     */
    playAudio(romaji) {
        // TODO: Implémenter la lecture audio
        this.showToast(`Audio: ${romaji}`, 'info');
    },

    /**
     * Démarre les exercices
     */
    startExercises() {
        const lesson = this.state.currentLesson;
        if (!lesson) return;

        Exercises.startSession(lesson);

        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById('exercise-screen').classList.add('active');
        this.state.currentScreen = 'exercise';
        this.updateHeader('exercise');

        this.renderCurrentExercise();
    },

    /**
     * Rend l'exercice actuel
     */
    renderCurrentExercise() {
        const exercise = Exercises.getCurrentExercise();

        if (!exercise) {
            this.showResults();
            return;
        }

        const progress = Exercises.getProgress();
        document.getElementById('exercise-progress-fill').style.width = `${progress.percent}%`;
        document.getElementById('exercise-counter').textContent = `${progress.current}/${progress.total}`;

        const container = document.getElementById('exercise-container');
        container.innerHTML = Exercises.renderExercise(exercise);

        // Masquer feedback et bouton suivant
        document.getElementById('exercise-feedback').classList.add('hidden');
        document.getElementById('next-exercise-btn').classList.add('hidden');

        // Bind events selon le type
        if (exercise.type === 'transcription') {
            const input = document.getElementById('transcription-input');
            const submitBtn = document.getElementById('submit-transcription');

            input.focus();

            submitBtn.addEventListener('click', () => {
                this.submitAnswer(input.value);
            });

            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.submitAnswer(input.value);
                }
            });
        } else {
            container.querySelectorAll('.option-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    this.submitAnswer(btn.dataset.answer);
                });
            });
        }
    },

    /**
     * Soumet une réponse
     */
    submitAnswer(answer) {
        const result = Exercises.checkAnswer(answer);
        if (!result) return;

        // Afficher feedback visuel sur les boutons
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
        if (input) {
            input.disabled = true;
            input.classList.add(result.isCorrect ? 'correct' : 'incorrect');
        }

        // Afficher feedback
        Exercises.renderFeedback(result);

        // Afficher bouton suivant
        document.getElementById('next-exercise-btn').classList.remove('hidden');
    },

    /**
     * Passe à l'exercice suivant
     */
    nextExercise() {
        Exercises.nextExercise();
        this.renderCurrentExercise();
    },

    /**
     * Affiche les résultats
     */
    showResults() {
        const results = Exercises.finishSession();

        // Mettre à jour la progression
        this.state.progress[results.lessonId] = {
            completed: true,
            lastScore: results.accuracy,
            lastCompleted: Date.now()
        };

        // Mettre à jour les stats
        this.state.stats.xp += results.xpEarned;
        this.state.stats.lessonsCompleted++;
        this.state.stats.charsLearned += this.state.currentLesson.characters.length;

        if (this.state.currentLesson.category === 'kanji') {
            this.state.stats.kanjiLearned += this.state.currentLesson.characters.length;
        }

        this.saveState();

        // Ajouter les cartes SRS
        SRS.addLessonCards(this.state.currentLesson);

        // Afficher l'écran de résultats
        document.getElementById('results-icon').textContent = results.accuracy >= 80 ? '🎉' : '📚';
        document.getElementById('results-title').textContent = results.accuracy >= 80 ? 'Excellent !' : 'Continue !';
        document.getElementById('results-message').textContent = `Tu as terminé "${results.lessonTitle}"`;

        document.getElementById('result-correct').textContent = results.correctAnswers;
        document.getElementById('result-total').textContent = results.totalExercises;
        document.getElementById('result-xp').textContent = results.xpEarned;

        document.getElementById('accuracy-fill').style.width = `${results.accuracy}%`;
        document.getElementById('accuracy-percent').textContent = `${results.accuracy}%`;

        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById('results-screen').classList.add('active');
        this.state.currentScreen = 'results';
        this.updateHeader('results');

        this.updateUI();
    },

    /**
     * Rend l'écran SRS
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

        // Masquer réponse et boutons
        document.querySelector('.srs-card-back').classList.add('hidden');
        document.querySelector('.srs-card-front').classList.remove('hidden');
        document.getElementById('srs-show-btn').classList.remove('hidden');
        document.getElementById('srs-buttons').classList.add('hidden');
        document.getElementById('srs-complete').classList.add('hidden');
        document.getElementById('srs-card-container').classList.remove('hidden');

        // Mettre à jour les intervalles
        const intervals = SRS.getNextIntervals(card);
        document.getElementById('srs-hard-time').textContent = intervals.hard;
        document.getElementById('srs-good-time').textContent = intervals.good;
        document.getElementById('srs-easy-time').textContent = intervals.easy;
    },

    /**
     * Montre la réponse SRS
     */
    showSRSAnswer() {
        document.querySelector('.srs-card-front').classList.add('hidden');
        document.querySelector('.srs-card-back').classList.remove('hidden');
        document.getElementById('srs-show-btn').classList.add('hidden');
        document.getElementById('srs-buttons').classList.remove('hidden');
    },

    /**
     * Révise une carte SRS
     */
    reviewSRSCard(quality) {
        const card = this.srsCards[this.srsIndex];
        SRS.reviewCard(card.id, quality);

        this.srsIndex++;
        this.showNextSRSCard();
        this.updateUI();
    },

    /**
     * Affiche la fin des révisions SRS
     */
    showSRSComplete() {
        document.getElementById('srs-card-container').classList.add('hidden');
        document.getElementById('srs-show-btn').classList.add('hidden');
        document.getElementById('srs-buttons').classList.add('hidden');
        document.getElementById('srs-complete').classList.remove('hidden');
        document.getElementById('srs-reviewed-count').textContent = this.srsIndex || 0;
    },

    /**
     * Rend l'écran de statistiques
     */
    renderStats() {
        // Créer l'écran stats s'il n'existe pas
        let statsScreen = document.getElementById('stats-screen');
        if (!statsScreen) {
            statsScreen = document.createElement('section');
            statsScreen.id = 'stats-screen';
            statsScreen.className = 'screen';
            document.getElementById('main-content').appendChild(statsScreen);
        }

        const stats = this.state.stats;
        const srsStats = SRS.getStats();

        statsScreen.innerHTML = `
            <div class="stats-container">
                <div class="stats-card">
                    <h3>Progression globale</h3>
                    <div class="stats-grid">
                        <div class="stat-box">
                            <div class="stat-box-value">${stats.xp}</div>
                            <div class="stat-box-label">XP Total</div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-box-value">${stats.streak}</div>
                            <div class="stat-box-label">Jours de streak</div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-box-value">${stats.lessonsCompleted}</div>
                            <div class="stat-box-label">Leçons terminées</div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-box-value">${stats.charsLearned}</div>
                            <div class="stat-box-label">Caractères appris</div>
                        </div>
                    </div>
                </div>

                <div class="stats-card">
                    <h3>Système SRS</h3>
                    <div class="stats-grid">
                        <div class="stat-box">
                            <div class="stat-box-value">${srsStats.total}</div>
                            <div class="stat-box-label">Cartes totales</div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-box-value">${srsStats.due}</div>
                            <div class="stat-box-label">À réviser</div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-box-value">${srsStats.learning}</div>
                            <div class="stat-box-label">En cours</div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-box-value">${srsStats.review}</div>
                            <div class="stat-box-label">Maîtrisées</div>
                        </div>
                    </div>
                </div>

                <div class="stats-card">
                    <h3>Catégories</h3>
                    <div class="stats-grid">
                        <div class="stat-box">
                            <div class="stat-box-value">${this.getCompletedCount('hiragana')}/10</div>
                            <div class="stat-box-label">Hiragana</div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-box-value">${this.getCompletedCount('katakana')}/11</div>
                            <div class="stat-box-label">Katakana</div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-box-value">${this.getCompletedCount('vocabulary')}/6</div>
                            <div class="stat-box-label">Vocabulaire</div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-box-value">${this.getCompletedCount('kanji')}/20</div>
                            <div class="stat-box-label">Kanji N5</div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        statsScreen.classList.add('active');
    },

    /**
     * Obtient le nombre de leçons complétées par catégorie
     */
    getCompletedCount(category) {
        const lessons = ALL_LESSONS.filter(l => l.category === category);
        return lessons.filter(l => this.state.progress[l.id]?.completed).length;
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

// Démarrer l'application au chargement
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});

// Export global
window.App = App;
