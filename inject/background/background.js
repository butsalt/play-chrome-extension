(function () {
  // https://developer.chrome.com/extensions/xhr

  // 在manifest中声明cross-origin permission时，
  //  如果目标host在80端口，端口号可以不写
  //  如果目标host不为80端口，需要写端口号
  //  path不用配，即使写了也会被忽略

  // cross-origin permission作用
  //  1. 允许扩展在发起跨域xhr请求时，即使响应不带Access-Control-Allow-Origin也不会被block
  //  2. 允许扩展可以在对应站点插入js，css
  chrome.browserAction.onClicked.addListener(function (tab) {
    // 如果对应站点的权限没有获取到，则无法获得地址
    console.log('Turning ' + tab.url + ' red!');

    chrome.tabs.executeScript({
      code: 'document.body.style.backgroundColor="red"'
    });
  });
})();