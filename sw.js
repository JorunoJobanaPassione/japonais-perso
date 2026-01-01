/**
 * JAPONAIS - Service Worker
 * Mode hors-ligne pour PWA
 */

const CACHE_NAME = 'japonais-v1';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './styles.css',
    './app.js',
    './data.js',
    './srs.js',
    './exercises.js',
    './manifest.json',
    './icons/icon-192.png',
    './icons/icon-512.png'
];

// Installation du service worker
self.addEventListener('install', (event) => {
    console.log('[SW] Installing...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[SW] Caching assets');
                return cache.addAll(ASSETS_TO_CACHE);
            })
            .then(() => {
                console.log('[SW] Installed successfully');
                return self.skipWaiting();
            })
            .catch((err) => {
                console.error('[SW] Install failed:', err);
            })
    );
});

// Activation du service worker
self.addEventListener('activate', (event) => {
    console.log('[SW] Activating...');
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames
                        .filter((name) => name !== CACHE_NAME)
                        .map((name) => {
                            console.log('[SW] Deleting old cache:', name);
                            return caches.delete(name);
                        })
                );
            })
            .then(() => {
                console.log('[SW] Activated successfully');
                return self.clients.claim();
            })
    );
});

// Interception des requêtes
self.addEventListener('fetch', (event) => {
    // Ne pas intercepter les requêtes cross-origin
    if (!event.request.url.startsWith(self.location.origin)) {
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                if (cachedResponse) {
                    // Retourner la version en cache
                    return cachedResponse;
                }

                // Sinon, faire la requête réseau
                return fetch(event.request)
                    .then((response) => {
                        // Ne pas mettre en cache les requêtes non-GET
                        if (!response || response.status !== 200 || event.request.method !== 'GET') {
                            return response;
                        }

                        // Cloner la réponse car on ne peut la lire qu'une fois
                        const responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                            .then((cache) => {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    })
                    .catch((err) => {
                        console.error('[SW] Fetch failed:', err);

                        // Retourner une page offline si disponible
                        if (event.request.mode === 'navigate') {
                            return caches.match('./index.html');
                        }

                        return new Response('Offline', {
                            status: 503,
                            statusText: 'Service Unavailable'
                        });
                    });
            })
    );
});

// Message handler pour updates
self.addEventListener('message', (event) => {
    if (event.data === 'skipWaiting') {
        self.skipWaiting();
    }
});
