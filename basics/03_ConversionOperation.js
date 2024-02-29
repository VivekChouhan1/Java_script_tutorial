let score="33"
console.log(typeof(score))


/*
NOTE:-
if we convert following into number and Bolean:
"33" => 33
"33abc" => NaN
"vivek" => NaN
null => 0
true => 1; false =>0
"" => false; "jdjd" => true 
*/

let valueInNumber= Number(score)   //type conversion from string to number
console.log(typeof(valueInNumber))
console.log(valueInNumber)

//but if : 
let vlue="33abc"  //ye convert to kar dega number me, but value nahi milegi
let valueInNumber1= Number(vlue)   //type conversion from string to number
console.log(typeof(valueInNumber1))
console.log(valueInNumber1)
//in output we got NaN(not a number)

//but if : 
let vlue1=null  //ye convert to kar dega number me, but value 0
let valueInNumber2= Number(vlue1)   //type conversion from string to number
console.log(typeof(valueInNumber2))
console.log(valueInNumber2)
//in output we got 0


let isLoggedIn= 1;
let score1=""
let score2="fffk"
let booleanInLoggedIn= Boolean(isLoggedIn)
let booleanInLoggedIn1= Boolean(score1)
let booleanInLoggedIn2= Boolean(score2)
console.log(booleanInLoggedIn)
console.log(booleanInLoggedIn1)
console.log(booleanInLoggedIn2)




// **********************************OPERATION*************************



// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + 2 + 3)
// console.log(1 + 2 + "3")

// console.log(+true)
// console.log(+"")

let n1,n2,n3
m1=n2=n3=4;


//for more study go and read MDN increment operator
let gamecounter=6;
gamecounter++
console.log(gamecounter)
++gamecounter
console.log(gamecounter)

//link to study
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

// https://tc39.es/ecma262/#sec-abstract-operations