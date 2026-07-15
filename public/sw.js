const CACHE_NAME = 'felixfolio-cache-v2';
const ASSETS_TO_CACHE = [
  '/',
  '/about',
  '/projects',
  '/contact',
  '/articles',
  '/manifest.json',
  '/favicon.ico',
  '/Felix_Resume.pdf',
  '/images/circular-text.png',
  '/images/profile/developer-pic-3.png'
];

// Install Event - Pre-cache critical routes and static resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Pre-caching critical assets');
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// Activate Event - Clean up stale cache versions
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event - Dynamic and Cache caching strategies
self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Focus only on caching requests to our own origin
  if (url.origin !== self.location.origin) {
    return;
  }

  // Handle Chrome Extensions or non-HTTP protocols
  if (!req.url.startsWith('http')) {
    return;
  }

  // Assets/Images/Fonts/CSS/JS (Cache First, network fallback)
  if (
    req.destination === 'image' ||
    req.destination === 'font' ||
    req.destination === 'style' ||
    req.destination === 'script' ||
    url.pathname.startsWith('/_next/static/') ||
    url.pathname.startsWith('/images/')
  ) {
    event.respondWith(
      caches.match(req).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(req).then((networkResponse) => {
          if (!networkResponse || networkResponse.status !== 200) {
            return networkResponse;
          }
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(req, responseToCache);
          });
          return networkResponse;
        }).catch(() => caches.match('/')); // Fallback for image/asset
      })
    );
  } else {
    // HTML / Page Navigation routes (Network First, cache fallback)
    event.respondWith(
      fetch(req).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(req, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => {
        return caches.match(req).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          // If the page is not in cache, fallback to main home page
          return caches.match('/');
        });
      })
    );
  }
});
