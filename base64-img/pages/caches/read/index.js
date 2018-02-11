(() => {
  console.time();
  caches.open('base64-img')
    .then(function (cache) {
      cache.match('https:/base64-img/pic')
        .then(function (response) {
          response.blob()
            .then(function (blob) {
              var url = URL.createObjectURL(blob);

              var img = document.getElementById('J-target');

              img.addEventListener('load', function remove() {
                console.timeEnd();
                this.removeEventListener('load', remove);
                URL.revokeObjectURL(url);
              });
              img.setAttribute('src', url);
            });
        });
    });
})();