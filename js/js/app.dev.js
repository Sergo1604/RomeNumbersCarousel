"use strict";

var _convertToRoman = require("./convertToRoman");

var _getCities = require("./getCities");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var btnRight = document.querySelector('.right__btn');
var btnLeft = document.querySelector('.left__btn');
var innerTextRoman = document.querySelector('.inner__text-roman');
var innerTextDecimal = document.querySelector('.inner__text-decimal');
var number = 1;
innerTextRoman.innerText = (0, _convertToRoman.convertToRoman)(number);
innerTextDecimal.innerText = number;

btnRight.onclick = function () {
  if (number < 3999) innerTextRoman.innerText = (0, _convertToRoman.convertToRoman)(++number);
  innerTextDecimal.innerText = number;
};

btnLeft.onclick = function () {
  if (number > 1) innerTextRoman.innerText = (0, _convertToRoman.convertToRoman)(--number);
  innerTextDecimal.innerText = number;
};

var cityPromise1 = _axios["default"].get(_getCities.citiesUrl).then(function (data) {
  var cities = data.data;
  return (0, _getCities.getCitiesNames)(cities);
});

console.log(cityPromise1);
var cityPromise = fetch(_getCities.citiesUrl).then(function (data) {
  return data.json();
}).then(function (item) {
  return item.map(function (_ref) {
    var state = _ref.state,
        city = _ref.city;
    return {
      city: city,
      state: state
    };
  });
});
console.log(cityPromise);