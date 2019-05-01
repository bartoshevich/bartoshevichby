
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
       '/uslugi/brand-conception/',
       '/offline/'
     ]);
   })
 );
});




self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          // Return true if you want to remove this cache,
          // but remember that caches are shared across
          // the whole origin
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
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
        
        caches.open('bartoshevich').then(function (cache) {
          cache.put(event.request, responseClone);
        });
        return response;
      }).catch(function () {
        return caches.match('/offline/');
      });
    }
  }));
});


self.addEventListener('fetch', (event) => {
  event.respondWith(async function() {
    const cache = await caches.open('bartoshevich');
    const cachedResponse = await cache.match(event.request);
    const networkResponsePromise = fetch(event.request);

    event.waitUntil(async function() {
      const networkResponse = await networkResponsePromise;
      await cache.put(event.request, networkResponse.clone());
    }());

    // Returned the cached response if we have one, otherwise return the network response.
    return cachedResponse || networkResponsePromise;
  }());
});