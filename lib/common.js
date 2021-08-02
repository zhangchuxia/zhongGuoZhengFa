'use strict';

//全局响应拦截 

axios.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});
var dates = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
    checkTime = function checkTime(t) {
  return t < 10 ? '0' + t : t;
},
    getW = function getW(num, w) {
  return num * window.innerWidth / w;
};
var getUUID = function getUUID() {
  return Math.random().toString(16).slice(-8);
};
//数字滚动  
var numberMove = function numberMove(dom) {
  var num = dom.querySelectorAll('.num');
  num.forEach(function (v) {
    /* var suffix = v.getAttribute('fix');
    var config = !!suffix ? {
    	suffix: suffix
    } : {}; */
    new CountUp(v, 0, +v.getAttribute('num'), 0, 3).start();
  });
};
var random = function random(min, max) {
  return Math.random() * (max - min) + min;
};
var cut = function cut(arr, num) {
  var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if (arr === undefined) return;
  var newArr = [];
  if (arr.length < num) {
    newArr.push(arr);
  } else {
    for (var i = 0; i < Math.ceil(arr.length / num); i++) {
      newArr.push(arr.slice(i * num + s, (i + 1) * num + s));
    }
  }
  return newArr;
};