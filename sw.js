
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


self.addEventListener("install", function(e){
    self.skipWaiting();
    e.waitUntil(
      caches.open(staticCacheName).then(function(cache){
        return cache.addAll(filesToCache);
      })
    )
  });



self.addEventListener("activate", function(e){
    e.waitUntil(
      caches.keys().then(function(cacheNames){
        return Promise.all(
          cacheNames.filter(function(cacheName){
            return cacheName.startsWith("bartoshevich-")
              && cacheName != staticCacheName;
          }).map(function(cacheName){
            return cache.delete(cacheName);
          })
        )
      })
    )
  });



self.addEventListener('fetch', function(event) {

        console.log(event.request.url);
        
        event.respondWith(
        
        caches.match(event.request).then(function(response) {
        
        return response || fetch(event.request);
        
        })
        
        );
        
 });