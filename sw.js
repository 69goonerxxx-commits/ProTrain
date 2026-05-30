const C='protrain-v1';
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.add('/')).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.url.startsWith(self.location.origin))e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});
