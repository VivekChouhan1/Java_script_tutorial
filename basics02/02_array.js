const arr=[1,2,3,45,5]
const arr1=['w','r','t']

// arr.push(arr1)
// console.log(arr)
// console.log(arr[5][1])

const all=arr.concat(arr1)
// console.log(all)


const all01= [...arr, ...arr1]
// console.log(all01)


/*
console.log(Array.isArray("vivek"))   //chcek if arrauy or not

console.log(Array.from("hitesh"))     // to make the arr

console.log(Array.from({1:"hitesh"}))   //interesting case
*/


const a1=100;
const a2=200;
const a3=300;
console.log(Array.of(a1,a2,a3))