(function () {
  // content script中无法使用alarm api
  chrome.alarms.onAlarm.addListener(function (alarm) {
    console.log(alarm.name + ' > newtab');
  });

  document.getElementById('J-btn')
    .addEventListener('click', function () {
      // 创建alarm后，只要扩展没有被卸载，即使是重新加载，alarm仍然存在
      chrome.alarms.create('newtab', {
        delayInMinutes: 1
      });
    });
})();