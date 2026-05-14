const CACHE="gymjournal-v6";
const FILES=["./","./index.html","./style.css?v=6","./app.js?v=6","./manifest.webmanifest","./icon-192.png","./icon-512.png"];
self.addEventListener("install",event=>{self.skipWaiting();event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)))});
self.addEventListener("activate",event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener("fetch",event=>event.respondWith(caches.match(event.request).then(response=>response||fetch(event.request))));
