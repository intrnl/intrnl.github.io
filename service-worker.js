!function(){"use strict";self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(let t of e)1598403782023!==t&&await caches.delete(t);self.clients.claim()}))})}();
