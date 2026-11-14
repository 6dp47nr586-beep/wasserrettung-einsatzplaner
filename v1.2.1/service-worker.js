const CACHE_VERSION='ww-einsatzplaner-v1.2.1';
const SHELL_CACHE=CACHE_VERSION+'-shell';
const TILE_CACHE=CACHE_VERSION+'-tiles';
const SHELL=['./','./index.html','./manifest.json','./icons/icon-192.png','./icons/icon-512.png','./icons/icon-180.png',
 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'];
self.addEventListener('install',event=>event.waitUntil((async()=>{
 const cache=await caches.open(SHELL_CACHE);
 await Promise.all(SHELL.map(async url=>{try{const response=await fetch(url,{cache:'reload'});if(response.ok||response.type==='opaque')await cache.put(url,response);}catch(e){console.warn('Precache übersprungen:',url);}}));
 await self.skipWaiting();
})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
 const keys=await caches.keys();await Promise.all(keys.filter(k=>k.startsWith(CACHE_VERSION+'-')&&k!==SHELL_CACHE&&k!==TILE_CACHE).map(k=>caches.delete(k)));
 await self.clients.claim();
})()));
function isTile(url){return url.hostname==='server.arcgisonline.com'||url.hostname==='tile.openstreetmap.org';}
self.addEventListener('fetch',event=>{
 const req=event.request;if(req.method!=='GET')return;
 const url=new URL(req.url);
 if(req.mode==='navigate'&&url.origin===self.location.origin){event.respondWith((async()=>{try{const r=await fetch(req);const c=await caches.open(SHELL_CACHE);c.put('./index.html',r.clone());return r;}catch(e){return (await caches.match('./index.html'))||Response.error();}})());return;}
 if(isTile(url)){event.respondWith((async()=>{const cache=await caches.open(TILE_CACHE);const hit=await cache.match(req);if(hit)return hit;try{const response=await fetch(req);if(response.ok||response.type==='opaque')cache.put(req,response.clone());return response;}catch(e){return hit||Response.error();}})());return;}
 if(url.origin===self.location.origin||url.hostname==='unpkg.com'||url.hostname==='cdn.jsdelivr.net'){
  event.respondWith((async()=>{const cache=await caches.open(SHELL_CACHE);const hit=await cache.match(req);if(hit)return hit;try{const response=await fetch(req);if(response.ok||response.type==='opaque')cache.put(req,response.clone());return response;}catch(e){return hit||Response.error();}})());
 }
});
self.addEventListener('message',event=>{
 if(event.data?.type==='CACHE_TILE'&&typeof event.data.url==='string')event.waitUntil((async()=>{
  let ok=false;try{const cache=await caches.open(TILE_CACHE);const request=new Request(event.data.url,{mode:'no-cors'});const existing=await cache.match(request);if(existing)ok=true;else{const response=await fetch(request);if(response.ok||response.type==='opaque'){await cache.put(request,response.clone());ok=true;}}}catch(e){console.warn('Kachel konnte nicht gespeichert werden',e);}event.ports?.[0]?.postMessage({ok});
 })());
});
