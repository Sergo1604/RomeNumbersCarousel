"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCitiesNames = getCitiesNames;
exports.citiesUrl = void 0;
var citiesUrl = 'https://gist.githubusercontent.com/VasilyMur/8b679b5482499a97c08cca9b6dffef03/raw/4dfd59daa4ac0a6ebd7d2f144b860d62054b4576/uscities.json';
exports.citiesUrl = citiesUrl;

function getCitiesNames(cities) {
  return cities.map(function (response) {
    var city = response.city,
        state = response.state;
    return {
      city: city,
      state: state
    };
  });
}