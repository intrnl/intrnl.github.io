import { timestamp, files, shell } from '@sapper/service-worker';


let cachedFiles = [...shell, ...files];
let cachedSet = new Set(cachedFiles);

// self.addEventListener('install', (ev) => {
//   ev.waitUntil(
//     caches.open(timestamp)
//       .then((cache) => cache.addAll(cachedFiles))
//       .then(() => { self.skipWaiting() })
//   );
// });

self.addEventListener('activate', (ev) => {
  ev.waitUntil(
    caches.keys().then(async (keys) => {
      for (let key of keys) {
        if (key !== timestamp) await caches.delete(key);
      }

      self.clients.claim();
    })
  );
});

// self.addEventListener('fetch', (ev) => {
//   if (ev.request.method !== 'GET' || ev.request.headers.has('range')) return;
// 
//   let url = new URL(ev.request.url);
// 
//   if (url.protocol !== 'http:' && url.protocol !== 'https:') return;
//   if (url.hostname === self.location.hostname && url.port !== self.location.port) return;
// 
//   if (url.host === self.location.host && cachedSet.has(url.pathname)) {
//     ev.respondWith(caches.match(ev.request));
//     return;
//   }
// });
