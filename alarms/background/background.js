chrome.alarms.onAlarm.addListener(function (alarm) {
  // 如果没有设置periodInMinutes，当listener被fire时，这个alarm就已经无法通过alarms.get获取到了
  // 如果设置了periodInMinutes，当虽然已到达fire时间但由于chrome未运行而无法fire时
  //   这次fire会等到chrome被运行时立即执行
  //   就如同setInterval一样，这个alarm的fire由于超时至多只堆积一个
  if (alarm.name !== 'bg') {
    chrome.alarms.create('bg', {
      delayInMinutes: 1
    });
  }

  console.log(alarm.name + ' > bg');
});