//singleton (if made by constructor)
// Object.create

//object literals

const mysym= Symbol("key1")

const jsuser={
    name: "vivek",
    age: 19,
    [mysym]: "hello",
    location: "indore",
    email: "vivek@"
}

// console.log(jsuser.email)
// console.log(jsuser["email"])     //new format and best format
// console.log(jsuser["name"])     //also give same result as line 19
// console.log(jsuser.name)
// console.log(jsuser[mysym])

jsuser.email="vivieffw@@@@"
// Object.freeze(jsuser)                 //to freeze an object
jsuser.email="shfehvfkvhfb"
// console.log(jsuser)

jsuser.greeting=function(){
    console.log("hello js user")
}

console.log(jsuser.greeting);
console.log(jsuser.greeting());

jsuser.greeting2=function(){
    console.log(`hello ,${this.name}`)
}

console.log(jsuser.greeting2())