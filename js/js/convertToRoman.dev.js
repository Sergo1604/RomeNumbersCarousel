"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertToRoman = convertToRoman;

function convertToRoman(num) {
  var romanSymbols = new Set();
  romanSymbols[1] = 'I';
  romanSymbols[5] = 'V';
  romanSymbols[10] = 'X';
  romanSymbols[50] = 'L';
  romanSymbols[100] = 'C';
  romanSymbols[500] = 'D';
  romanSymbols[1000] = 'M'; //console.log(romanSymbols);

  var temp = num;
  var res = '';
  var tempRoman = new Set();
  var mult = 1000;
  var multIsTwo = true;

  while (temp != 0) {
    tempRoman[mult] = parseInt(temp / mult, 10);
    temp = temp % mult;
    mult /= 10;
  }

  mult = 1000;
  multIsTwo = true;

  while (mult >= 1) {
    var tempStr = '';
    if (tempRoman[mult] > 0 && tempRoman[mult] <= 3) tempStr = romanSymbols[mult].repeat(tempRoman[mult]);else if (tempRoman[mult] == 4) tempStr = romanSymbols[mult].concat(romanSymbols[mult * 5]);else if (tempRoman[mult] == 5) tempStr = romanSymbols[mult * 5];else if (tempRoman[mult] > 5 && tempRoman[mult] < 9) tempStr = romanSymbols[mult * 5].concat(romanSymbols[mult].repeat(tempRoman[mult] - 5));else if (tempRoman[mult] == 9) tempStr = romanSymbols[mult].concat(romanSymbols[mult * 10]);
    res = res.concat(tempStr);
    mult /= 10;
  }

  return res;
}