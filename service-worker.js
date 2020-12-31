!function(){"use strict";self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(let t of e)1609427103430!==t&&await caches.delete(t);self.clients.claim()})))}))}();
