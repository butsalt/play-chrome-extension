(function () {
  // content script中无法使用alarm api
  chrome.alarms.onAlarm.addListener(function (alarm) {
    console.log(alarm.name + ' > newtab');
  });

  document.getElementById('J-btn')
    .addEventListener('click', function () {
      // 创建alarm后，只要扩展没有被删除
      // 重新加载扩展，停用再启用扩展，重开chrome，alarm仍然存在
      chrome.alarms.create('newtab', {
        delayInMinutes: 1
      });
    });
})();