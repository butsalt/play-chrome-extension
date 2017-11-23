(function () {
  chrome.runtime.onMessage
    .addListener(function (msg) {
      document.getElementById('J-bg-msg').innerText = msg;
    });
  document.getElementById('J-btn')
    .addEventListener('click', function () {
      // background对应事件等这个函数执行完后才会触发
      chrome.runtime.sendMessage('msg');

      // 扩展的所有newtab和扩展的background共享一个js线程

      var startTime = new Date().toLocaleTimeString();
      var i = 5000000000;
      var sum = 0;
      while (i--) {
        sum += i;
      }
      var endTime = new Date().toLocaleTimeString();
      document.getElementById('J-newtab-msg').innerText = 'start: ' + startTime + ', end: ' + endTime;
      setTimeout(function () {
        var startTime = new Date().toLocaleTimeString();
        var i = 5000000000;
        var sum = 0;
        while (i--) {
          sum += i;
        }
        var endTime = new Date().toLocaleTimeString();
        document.getElementById('J-newtab-timeout-msg').innerText = 'start: ' + startTime + ', end: ' + endTime;
      }, 10);
    });
})();