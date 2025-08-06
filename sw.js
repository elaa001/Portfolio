self.addEventListener('install', event => {
  console.log('Service Worker installed.');
});

self.addEventListener('fetch', function (event) {
  // Optional: respond with cache here later
});
