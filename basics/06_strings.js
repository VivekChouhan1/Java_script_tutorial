const name="vivek"
const repocunt=67;

console.log(name+repocunt);   //it is very old method

console.log(`hello my name is ${name} and reco count is ${repocunt}`);

//string decleare and it is an internal OBJECT
const gamename= new String('vivii');
// console.log(gamename[1])
// console.log(gamename.__proto__)


console.log(gamename.length)
console.log(gamename.toUpperCase())
console.log(gamename.charAt(2))
console.log(gamename.indexOf('i'))


const newstr= gamename.substring(0,4);
console.log(newstr)

const anotherstr=gamename.slice(-4,-2) //to print reverse
console.log(anotherstr)

const newstr01= "     vivek   "
console.log(newstr01.trim())