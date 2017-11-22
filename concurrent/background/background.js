chrome.runtime.onMessage
  .addListener(function () {
    var startTime = new Date().toLocaleTimeString();
    var i = 5000000000;
    var sum = 0;
    while (i--) {
      sum += i;
    }
    var endTime = new Date().toLocaleTimeString();
    chrome.runtime.sendMessage('start: ' + startTime + ', end: ' + endTime);
  });