//generally used in shoping card (... =>rest operator)
function  calculateCardPrice(...num1){
    return num1
}
console.log(calculateCardPrice(100,200,400)) 


function  calculateCardPrice01(var1,var2,...num1){
    return num1
}
console.log(calculateCardPrice01(100,200,500)) 


//object pass
let user={
    username : "vivek",
    age :19
}
function objhandle(anyobj)
{
    console.log(`username is ${anyobj.username} and age is ${anyobj.age}`)
}

objhandle(user)
