/*
//declaring a variable, semicolumns a good practice according to him
//standard naming firstNamePerson, you can use _ and  a dollar sign
//do not use numbers in names
let js = 'true';
let firstName = "Jonas";
let PI = 3.1415 // a stable variable
let secondName = "Schmidt"
const birthYear = 1990
//printing to console


let myFirstJob = 'teacher' // and NOT let job1='teacher'
//outputing to the console
console.log(40+2)
console.log(firstName)
console.log(typeof firstName);


//dynamic typing? changing a value of previously declared variable, ALWAYS DECLARE THE VARIABLES
firstName = true;
console.log(firstName);
// constants you can not change
birtYear = 1991 // wont change! better practice to use const instead of let. as little variable mutations as possible
//an undefined variable, type 'undefined'
let year;

// there is also var, but it's old so ignore it
var job = 'teacher'

//operators
console.log(firstName + ' ' + secondName);
let x= 5+10;
x+= 10;
x*=4;
x++;
x--;
console.log(x)

ageSarah = 32
const isFullAge = ageSarah >= 18
console.log(isFullAge)

//operators precedence (link in Notion)

//concatenate text, use special apostroph!
const tryOne = "I'm" + firstName;
const tryTwo = `I'm ${firstName}, and I was born in ${birthYear}`;

console.log(tryTwo)
console.log(`String with\n\
multiplelines`)


//if statement

const age = 17
const isOldEnough = age>=18
if(isOldEnough) { // here it is important that if didn't require = true, it understands it automatically
    console.log('Sarah can start driving!')
}else{
    yearsLeft = 18 - age
    console.log(`Sarah needs to wait another ${yearsLeft} year left`)
}

const birth = 1991;
let century;
if(birth <= 2000) {
    century = 20;
}else {
    century = 21;
}

console.log(century)

//convert string to number (type conversion)
const inputYear = '1991'
console.log(Number(inputYear))
console.log(Number(inputYear)-2)
//if it can't convert, it'll return NaN

//type coersion
// + will force a number into a string, - will force strings into a number

//5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean('Jonas')); // any non-empty string will return True

//equality operators
const age = 18;
if (age===18) console.log('You are an adult.') // age is EXACTLY 18
'18' == 18 // true, through type coersion
'18' === 18 // false, not strictly the same
// inequality will be !==

// prompt
const fav = Number(prompt("Your age?"));
console.log(fav);
console.log(typeof fav);

const hasDriversLicense = true; // A
const hasGoodVision = true; // B
const isTired = false; // C

//console.log(hasDriversLicense && hasGoodVision); //AND
//console.log(hasDriversLicense || hasGoodVision); //OR
//console.log(!hasDriversLicense); // has NOT

const shouldDrive = hasDriversLicense && hasGoodVision && !isTired; // needs to be true and true to output true

if (shouldDrive){
    console.log('Go and drive')
}else{
    console.log('Someone else should drive.')
}

// switch instead of else-if

const day = 'monda';

switch(day){
    case 'monday': //day === 'monday'
        console.log('Plan course structured');
        break; //if you don't break the code continues executing
    case 'tuesday':
        console.log('Prepare videos');
        break;
    default:
        console.log('not a valid day')
}
*/
// another way of writing else if: TERNARY operator

const age = 12;
age > 18 ? console.log('great'): console.log('not great'); //this is an if statement

//2 statements below are the same
age > 18 ? console.log('yes'): age>18; //can return undefined when console logged
age > 18 && console.log('yes'); //can return false when console logged
console.log(age > 18 ? console.log('yes'): age>18) //the last age>18 here returns just false

const person = {
    age: age,
    demographic:age > 18 ? 'adult' : 'child',
    'hair color': 'blonde' //because hair color has a space in it; could do hair_color instead
}

const examine = 'demographic'

console.log(person[examine])
console.log(person.demographic) // or person['demographic']
console.log(person['hair color'])
