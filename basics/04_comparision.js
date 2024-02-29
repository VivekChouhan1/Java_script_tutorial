//equality(==) and comaprison(<,>,<=,>=) work differntly.
// comaprison convert null =0 and then compare
console.log(null > 0);
console.log(null==0)
console.log(null>=0)

//always return false
console.log(undefined==0)
console.log(undefined>0)
console.log(undefined<0)
console.log(undefined>=0)

//===
console.log("2"===2)