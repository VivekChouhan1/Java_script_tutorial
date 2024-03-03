// const tinderuser= new Object();  //singleton object
const tinderuser={}
// console.log(tinderuser)


tinderuser.id="123fwf"
tinderuser.name="vivii"
tinderuser.age="19"

const regular={
    email: "wejrwej@",
    fullname: {
        userfullname: "chouhan vivek"
    }
}
// console.log(regular.fullname.userfullname)


const obj1={1: "2", 2: "3"}
const obj2={3: "4", 5: "6"}

// const obj3={obj1,obj2}
// const obj3= Object.assign(obj1,obj2)     //same output bu line 23,34
// const obj3= Object.assign({},obj1,obj2)
const obj3= {...obj1,...obj2}                    //spread
// console.log(obj3)

// ++++++++++++++++++++++++DESTRUCTURE THE OBJECT +++++++++++++++++++++++
const course={
    cname: "javascript",
    fees:200,
    courseinstructor: "vivek"
}

console.log(course)

const {courseinstructor}=course
const {courseinstructor: instructor}=course
// console.log(courseinstructor)
console.log(instructor)







