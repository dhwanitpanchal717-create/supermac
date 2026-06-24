const CACHE_NAME = 'supermac-hydroline-v2';
const CORE = [
  './','./index.html','./style.css','./script.js','./manifest.json',
  './assets/logo.png','./assets/app-icon.png','./assets/machine-hero.jpg','./assets/brochure.pdf',
  './assets/icons/icon-192.png','./assets/icons/icon-512.png'
];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(CORE))));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))));
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(cached => cached || fetch(e.request).then(res => {
    const copy = res.clone();
    caches.open(CACHE_NAME).then(c => c.put(e.request, copy)).catch(()=>{});
    return res;
  }).catch(() => caches.match('./index.html'))));
});
