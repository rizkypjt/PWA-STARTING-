self.addEventListener('install', function(event){
    console.log('Sw nya lagi install. . .');
    event.waitUntil(
        caches.open('Rizky Panjaitan')
            .then(function(cache){
                cache.addAll([
                    '/',
                    'index.html',
                    '/src/css/app.css',
                    '/src/js/app.js'
                ])
            })
        );
      return self.clients.claim();
});

self.addEventListener('active', function(event){
    console.log('Sw nya lagi ngaktifin. . .');
    return self.clients.claim();
});

self.addEventListener('fetch', function(event){
    console.log('Sw nya lagi fetching. . .');
    event.respondwith(fetch(event.request))
});