'use strict';

function fruitProcessor(nrapples, nroranges){
    const juice = `Juice with ${nrapples} apples and ${nroranges} oranges`
    return juice;
}

const newJuice = fruitProcessor(3,4);
console.log(newJuice)


//function declaration
function calcAge1(birthYear){
    return 2023 - birthYear;
}
console.log(calcAge1(1993))

//function expression
const calcAge2 = function (birthYear){
    return 2023 - birthYear;
}
console.log(calcAge2(1993))

//arrow function
// variable to store = parameter => returned value
const calcAge3 = birthYear => 2023 - birthYear;
console.log(calcAge3(1993))

const yearsUntilRetirement = (birthYear, retAge) => {
    const age = 2023 - birthYear;
    const retirement = retAge - age;
    return retirement;
}

console.log(yearsUntilRetirement(1993,65));

//function calling other function

function cutFruit(fruit){
    return fruit*4;
}

function fruitProcessor(nrapples, nroranges){
    const applePieces = cutFruit(nrapples);
    const orangePieces = cutFruit(nroranges);
    const juice = `Juice with ${applePieces} apples pieces and ${orangePieces} orange pieces`
    return juice;
}
console.log(fruitProcessor(2,3))