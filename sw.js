---
layout: null
---

var version = '{{site.time | date: '%Y%m%d%H%M%S'}}::';


var urlsToCache = [];

// Cache posts
// Limits the number of posts that gets cached to 8
{% for post in site.posts limit:10 %}
  urlsToCache.push("{{ post.url }}")
{% endfor %}

// Cache pages
{% for page in site.html_pages %}
  urlsToCache.push("{{ page.url }}")
{% endfor %}



var CACHE_NAME = 'version + bartoshevich';

self.addEventListener('install', function(evt) {
  // Perform install steps
  evt.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});


 // Remove caches whose name is no longer valid
    var clearOldCaches = function() {
      return caches.keys()
          .then(function (keys) {
              return Promise.all(keys
                  .filter(function (key) {
                    return key.indexOf(version) !== 0;
                  })
                  .map(function (key) {
                    return caches.delete(key);
                  })
              );
          })
  };

  self.addEventListener('install', function (event) {
      event.waitUntil(updateStaticCache()
          .then(function () {
              return self.skipWaiting();
          })
      );
  });

  self.addEventListener('activate', function (event) {
      event.waitUntil(clearOldCaches()
          .then(function () {
              return self.clients.claim();
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
        
        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(event.request, responseClone);
        });
        return response;
      }).catch(function () {
        return caches.match('/offline/');
      });
    }
  }));
});