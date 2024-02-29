// #primitive

// 7 type: string ,Number, null, undefined ,symbol , BigInt

const n=100
const value=100.56
const loggedin=false
const temperature =null
let useremail; 
let useremail1= undefined

const id=Symbol('123')
console.log(id);

const bignumber= 33667477837383838n  //n is used to make it BigInt





// #non-primitive/reference

//array, object, function

const hero=["asd","frferf","rffr"]

let myobj={
    name: "heidid",
    age:22
}

const myfunction= function(){
    console.log("heloooooo bachhooooooo")
}


//generally all non primitive datatype have type (object)
console.log(typeof(myfunction))
console.log(typeof(myobj))
console.log(typeof(hero))




// ***************************MEMORY************************************   

// stack(primitive) in stack you will get value , heap(non-primitive) in heap we get refrence and changes occur in all
