/*
//TEST DATA 1
const markMass = 78
const markHeight = 2.69
const johnMass = 92
const johnHeight = 1.95

let operationMark = markMass / (markHeight ** 2)
let operationJohn = johnMass / (johnHeight ** 2)

const markHigherBMI = operationMark > operationJohn

if(markHigherBMI){
    console.log(`Mark's BMi is ${operationMark} and it is higher than John's which is ${operationJohn}`)
}else{
    console.log(`Mark's BMi is ${operationMark} and it is lower than John's which is ${operationJohn}`)
}

//TEST DATA 2

const dolphinArr = [9,95,123]
const koalaArr = [19,95,123]

var dolphinSum = 0
var koalaSum = 0

dolphinArr.forEach(function(num) {dolphinSum += num});
dolphinAverage = dolphinSum / dolphinArr.length;

koalaArr.forEach(function(num) {koalaSum += num});
koalaAverage = koalaSum / koalaArr.length;

const tie = dolphinAverage === koalaAverage
const dolphinWon = dolphinAverage > koalaAverage

if (tie) {
    console.log(`It is a draw, dolphins score ${dolphinAverage} and koalas score ${koalaAverage}`)
} else if (dolphinWon && dolphinAverage>100){
    console.log('dolphins won')
} else if(!dolphinWon && koalaAverage >100){
    console.log('koalas won')
} else {console.log('minimum requirement has not been achieved')}

console.log(dolphinAverage)
console.log(koalaAverage)


//TEST DATA 3
billValue = [275,40,430]
var bill = billValue[1]

const tip = bill < 50 || bill > 300 ? 0.2*bill : 0.15*bill  

console.log(`Bill was ${bill} and the tip should be ${tip}`)
*/

