(function () {
  // https://developer.chrome.com/extensions/xhr

  // 在manifest中声明cross-origin permission时，
  //  如果目标host在80端口，端口号可以不写
  //  如果目标host不为80端口，需要写端口号
  //  path不用配，即使写了也会被忽略

  // cross-origin permission作用
  //  1. 允许扩展在发起跨域xhr时，即使响应不带Access-Control-Allow-Origin也不会被block
  //     也就是说，如果跨域xhr的响应中带有Access-Control-Allow-Origin，那么即使不使用cross-origin permission，也可以正常获取结果
  //  2. 允许扩展可以在对应站点插入js，css
  chrome.browserAction.onClicked.addListener(function (tab) {
    // 如果对应站点的权限没有获取到，则无法获得地址
    console.log('Turning ' + tab.url + ' red!');

    chrome.tabs.executeScript({
      code: 'document.body.style.backgroundColor="red"'
    });
  });
})();