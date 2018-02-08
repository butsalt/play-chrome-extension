document.getElementById('J-btn')
  .addEventListener(
    'click',
    () => {
      // localStorage的io效率要高于chrome.storage.local
      const COUNT = 100;

      new Promise(
        resolve => {
          let millis = 0;

          let length = COUNT;

          (function task() {
            if (length--) {
              const start = performance.now();
              chrome.storage.local.set(
                {
                  data: data
                },
                () => {
                  millis += performance.now() - start;
                  task();
                }
              )
            } else {
              console.log('chrome write: ' + millis / COUNT + 'ms');
              resolve();
            }
          })();
        }
      )
      .then(
        () => {
          return new Promise(
            resolve => {
              let millis = 0;

              let length = COUNT;

              (function task() {
                if (length--) {
                  const start = performance.now();
                  chrome.storage.local.get(
                    'data',
                    () => {
                      millis += performance.now() - start;
                      task();
                    }
                  )
                } else {
                  console.log('chrome read: ' + millis / COUNT + 'ms');
                  resolve();
                }
              })();
            }
          );
        }
      )
      .then(
        () => {
          return new Promise(
            resolve => {
              let millis = 0;

              let length = COUNT;

              (function task() {
                if (length--) {
                  const start = performance.now();
                  localStorage.setItem('data', JSON.stringify(data));
                  millis += performance.now() - start;
                  task();
                } else {
                  console.log('local write: ' + millis / COUNT + 'ms');
                  resolve();
                }
              })();
            }
          );
        }
      )
      .then(
        () => {
          return new Promise(
            resolve => {
              let millis = 0;

              let length = COUNT;

              (function task() {
                if (length--) {
                  const start = performance.now();
                  const data = JSON.parse(
                    localStorage.getItem('data')
                  );
                  millis += performance.now() - start;
                  task();
                } else {
                  console.log('local read: ' + millis / COUNT + 'ms');
                  resolve();
                }
              })();
            }
          );
        }
      );
    }
  );