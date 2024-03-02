const score=400;
// console.log(score)

const balance = new Number(100);   ///explicitly we declare it as a number
// console.log(balance) 
// console.log(balance.toString())
// console.log(balance.toFixed(2))   //to fix after decimal


const othernum =23.7889
// console.log(othernum.toPrecision(3))

//but in 
const othernum1 =123.7889
// console.log(othernum1.toPrecision(3))


const hundred =10000000
// console.log(hundred.toLocaleString())  //it will convert it in USA standard

//+++++++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-4))  //absolute value -Ve will change into pluse
// console.log(Math.round(4.67))
// console.log(Math.ceil(4.67))
// console.log(Math.floor(4.67))


console.log(Math.random());
console.log(Math.random()*10)

const min=10
const max =20
console.log(Math.floor((Math.random()*(max-min+1))+min))


