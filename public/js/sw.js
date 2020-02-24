const staicCacheName = 'nasa_1';
this.addEventListener('beforeinstallprompt', e => {
    //this.skipWaiting();
    e.waitUntil(
        caches.open(staicCacheName)
            .then(cache => {
                return cache.addAll([
                    '/assets/css/normalize/normalize.css',
                    '/assets/css/utils/material-icons/material-icons.css',
                    '/assets/css/utils/materialize/materialize.css',
                    '/assets/css/index-main.css',
                    '/assets/css/header-main.css',
                    '/assets/css/content-one.css',
                    '/assets/css/content-two.css',
                    '/assets/css/content-one-responsive.css',
                    '/assets/css/content-two-responsive.css',
                    '/js/materialize/materialize.js',
                    '/js/requests.js',
                    '/assets/img/logo-nasa.png',
                    '/assets/img/nav-nasa.jpg'
                ])
            })
    )
});
this.addEventListener('fetch', function(e) {
    console.log(e.request.url);
    e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
    );
});
// self.addEventListener('install', function(e) {
//     e.waitUntil(
//       caches.open('video-store').then(function(cache) {
//         return cache.addAll([
//           '/pwa-examples/a2hs/',
//           '/pwa-examples/a2hs/index.html',
//           '/pwa-examples/a2hs/index.js',
//           '/pwa-examples/a2hs/style.css',
//           '/pwa-examples/a2hs/images/fox1.jpg',
//           '/pwa-examples/a2hs/images/fox2.jpg',
//           '/pwa-examples/a2hs/images/fox3.jpg',
//           '/pwa-examples/a2hs/images/fox4.jpg'
//         ]);
//       })
//     );
//    });
//this.addEventListener('activate', e => {
    // e.waitUntil(
    //     caches.keys().then(cachesNames => {
    //         return Promise.all(
    //             cachesNames.filter(cacheName => cacheName.startsWith('nasa'))
    //             .filter(cacheName => cacheName !== staicCacheName)
    //             .map(cacheName => caches.delete(cacheName))
    //         )
    //     })
    // )
//})
//this.addEventListener('fetch', e => {
    // e.respondWith(
    //     caches.match(e.resquest)
    //     .then(response => {
    //         return fetch(e.resquest) || response;
    //     })
    //     .catch(() => {
    //         return caches.match('/');
    //     })
    // )
//})
