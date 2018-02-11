(function () {
  console.time();
  chrome.storage.local.get(
    'pic',
    function (data) {
      var img = document.getElementById('J-target');

      img.addEventListener('load', function () {
        console.timeEnd();
      });

      img
        .setAttribute('src', data.pic);
    }
  )
})();