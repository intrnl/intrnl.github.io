!function(){"use strict";self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(let t of e)1599114482476!==t&&await caches.delete(t);self.clients.claim()}))})}();
