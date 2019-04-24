---
layout: null
---

const staticCacheName = "bartoshevich-v61";

console.log("installing service worker");

const filesToCache = [
  "/",
  {% for page in site.html_pages %}
    '{{ page.url }}',
  {% endfor %}
  {% for post in site.posts %}
    '{{ post.url }}',
  {% endfor %}

  // can be automated rather than manual entries
  "/images/*.png",
  "/images/*.jpg",
   "/me/",
   "/blog/",
   "/contact/",
   "/uslugi/",
   "/brand-conception/",
  "/index.html"
];

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
        )ß
      })
    )
  });

  self.addEventListener("fetch", function(e){
    e.respondWith(
       caches.match(e.request).then(function(response) {
         return response || fetch(e.request);
       })
     )
  });