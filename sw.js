
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
       '/opyt/brand-strategy-flex-n-roll/',
       '/opyt/brand-giperlink/',
       '/uslugi/brand-conception/'
     ]);
   })
 );
});



self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).then(function(response) {
    
    if (response !== undefined) {
      return response;
    } else {
      return fetch(event.request).then(function (response) {
       
        let responseClone = response.clone();
        
        caches.open('v1').then(function (cache) {
          cache.put(event.request, responseClone);
        });
        return response;
      }).catch(function () {
        return caches.match('/');
      });
    }
  }));
});