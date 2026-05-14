const CACHE="gymjournal-v14";
const FILES=["./", "./index.html", "./style.css?v=14", "./app.js?v=14", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./assets/bench.png", "./assets/incline.png", "./assets/shoulderpress.png", "./assets/butterfly.png", "./assets/lateral.png", "./assets/latpulldown.png", "./assets/seatedrow.png", "./assets/pushdown.png", "./assets/curl.png", "./assets/legpress.png"];
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)))})
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim()})
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
