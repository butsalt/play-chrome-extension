chrome.alarms.onAlarm.addListener(function (alarm) {
  if (alarm.name !== 'bg') {
    chrome.alarms.create('bg', {
      delayInMinutes: 1
    });
  }

  console.log(alarm.name + ' > bg');
});