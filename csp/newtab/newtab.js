(function () {
  // 声明csp规则的值时可以使用关键字，scheme，host

  // csp比cross-origin permission更底层

  // 当在csp中通过配置connect-src来屏蔽http://localhost:3000下的资源时，
  //  即使声明了cross-origin permission，资源也会因为被csp屏蔽的原因而无法获取
  fetch('http://localhost:3000/assets/img/maple-small.jpg')
    .then(function (res) {
      var reader = new FileReader();
      reader.onload = function (e) {
        var img = document.createElement('img');
        // 如果声明了img-src的规则，那么值中应该写入'data:'这个scheme，否则资源无法访问
        img.setAttribute('src',e.target.result);
        document.body.appendChild(img);
      };
      res.blob()
        .then(function (blob) {
          reader.readAsDataURL(blob);
        });
    });
})();