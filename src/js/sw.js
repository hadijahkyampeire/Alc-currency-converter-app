console.log('service worker')

const CONVERTER_CACHE = 'converter-static';
const DYNAMIC_CACHE = 'converter-dynamic';

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CONVERTER_CACHE)
    .then(cache => cache.addAll([
    'api/data.js',
    'app.css',
    'index.js',
    'components/home.js',
    'components/Navbar.js',
    'app.js',
    'index.css',
    'redux/'
    ]))
    .catch(err => console.error(err)));
});

self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches.keys()
			.then((cacheNames) => {
				return Promise.all(
					cacheNames.filter((cacheName) => {
						return cacheName.startsWith('converter-');
					}).map((cacheName) => {
						return caches.delete(cacheName);
					})
				);
			})
	);
});

self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request)
    .then((response) => {
      if (response) {
          console.log(response);
        return response;
      }
      //   For the network
      const fetchRequest = event.request.clone();
      return fetch(fetchRequest).then((response) => {
        // is this a valid response?
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        // put response to the cache for offline first purpose
        const cacheMe = response.clone();
        caches.open(DYNAMIC_CACHE)
          .then((cache) => {
            cache.put(event.request, cacheMe);
          })
          .catch(() => console.error('something terrible happened!'));
        return response;
      });
    }));
});
