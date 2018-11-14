chrome.browserAction.onClicked
  .addListener(
    () => {
      chrome.tabs.captureVisibleTab(
        res => {
          console.log(res);
        }
      );
    }
  );