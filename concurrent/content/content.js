(function () {
  var btn = document.createElement('button');
  btn.innerText = 'stuck';
  document.body.prepend(btn);
  btn.addEventListener('click', function () {
    // content和被注入的页面共享一个js线程
    // content和扩展本身(包括background，newtab)不共享js线程
    chrome.runtime.sendMessage('msg');

    setTimeout(function () {
      var startTime = new Date().toLocaleTimeString();
      var i = 5000000000;
      var sum = 0;
      while (i--) {
        sum += i;
      }
      var endTime = new Date().toLocaleTimeString();
      console.log('content msg: start: ' + startTime + ', end: ' + endTime);
    }, 10);
  });
})();