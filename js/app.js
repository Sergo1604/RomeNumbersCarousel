import { convertToRoman as convert } from './convertToRoman';
import { citiesUrl } from './getCities';
import axios from "axios";
import { getCitiesNames } from './getCities';



const btnRight = document.querySelector('.right__btn');
const btnLeft = document.querySelector('.left__btn');
const innerTextRoman = document.querySelector('.inner__text-roman');
const innerTextDecimal = document.querySelector('.inner__text-decimal')
let number = 1;
innerTextRoman.innerText = convert(number);
innerTextDecimal.innerText = number;



btnRight.onclick = function() {
    if (number < 3999) innerTextRoman.innerText = convert(++number);
    innerTextDecimal.innerText = number;
}

btnLeft.onclick = function() {
    if (number > 1) innerTextRoman.innerText = convert(--number);
    innerTextDecimal.innerText = number;

}

const cityPromise1 = axios.get(citiesUrl).then(data => {
    const cities = data.data;
    return getCitiesNames(cities);
})

console.log(cityPromise1)

const cityPromise = fetch(citiesUrl)
    .then(data => data.json())
    .then(item => item.map(({ state, city }) => ({ city, state })));
console.log(cityPromise)