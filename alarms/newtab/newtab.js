(function () {
  // content script中无法使用alarm api
  chrome.alarms.onAlarm.addListener(function (alarm) {
    console.log(alarm.name + ' > newtab');
  });

  document.getElementById('J-btn')
    .addEventListener('click', function () {
      // 创建alarm后，即使newtab关了或者已跳转到其他页面
      // 只要chrome还没关，alarm到时间后还是会fire
      chrome.alarms.create('newtab', {
        delayInMinutes: 1
      });
    });
})();