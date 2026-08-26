/* Minimal service worker: caches the app shell so it installs as a PWA
 * and keeps working offline once a user has opened it at least once.
 * Bump CACHE_NAME whenever you change any cached file, so returning
 * users get the update instead of a stale cache. */
const CACHE_NAME = "velvet-app-v1";
const ASSETS = [
  "./index.html",
  "./app.js",
  "./content.js",
  "./manifest.webmanifest",
  "./icon.svg"
];

self.addEventListener("install", function(event){
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){ return cache.addAll(ASSETS); })
  );
  self.skipWaiting();
});

self.addEventListener("activate", function(event){
  event.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)));
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", function(event){
  event.respondWith(
    caches.match(event.request).then(function(cached){
      return cached || fetch(event.request).then(function(response){
        // Cache same-origin GET requests for next time.
        if(event.request.method === "GET" && response && response.status === 200){
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(function(){
        // Offline fallback: serve the app shell for navigations.
        if(event.request.mode === "navigate") return caches.match("./index.html");
      });
    })
  );
});
