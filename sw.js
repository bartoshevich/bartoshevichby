/* importScripts('/cache-polyfill.js'); */


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('bartoshevich').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/me/',
       '/uslugi/',
       '/blog/',
       '/contact/',
       '/uslugi/brand-conception/'
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {

    console.log(event.request.url);
    
    });

self.addEventListener('fetch', function(event) {

        console.log(event.request.url);
        
        event.respondWith(
        
        caches.match(event.request).then(function(response) {
        
        return response || fetch(event.request);
        
        })
        
        );
        
 });