const arr=[1,2,3,4,5,6,7]
//resizable
console.log(arr[1])
// console.log(arr.length)

arr.push(6)
// console.log(arr)

arr.pop()
// console.log(arr)

arr.unshift(8)   //to add item in starting
// console.log(arr)

arr.shift()
// console.log(arr) //to remove unshifted element

// console.log(arr.includes(9))

// /console.log(arr.indexOf(9))     //output -1, not exist


const newarr=arr.join()
console.log(newarr)
console.log(typeof(newarr))

//SLICE < SPLICE

/*
console.log("A",arr)

const myn1 =arr.slice(1,3)
console.log(myn1)

const myn2= arr.splice(1,3)
console.log("c", arr)
console.log(myn2)
*/


