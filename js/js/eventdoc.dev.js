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

console.log(_getCities.citiesUrl);

_axios["default"].get(_getCities.citiesUrl).then(function (data) {
  var cities = data.data;
  console.log((0, _getCities.getCitiesNames)(cities));
});