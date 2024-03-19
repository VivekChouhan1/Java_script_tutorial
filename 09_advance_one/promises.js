//by this we have the concept of .then and .catch

//we can or cannot hold promise in variabe
//parameter of promise contain parameter function(callback) which have two parameter resolve(if done) and reject(it reject promise)  

const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()   //to connect promise with .then
    }, 1000)
})
//above promise is created and now we consume it with .then
promiseOne.then(function(){  //in this we get return value 
    console.log("Promise consumed");
})


//or we can also write above program in these below programn type
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})




//now if we get any data from network 
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user); //by this USER we get all the value ,which we pass in the resolve above
})



//let assume that now we are accessing the file
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')  //to give error
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);  //jobhi pehle then se return hota hai, vo durse then me use kiya ja sakta hai!!!
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected")) //finally execute every time



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});
//it is not compulsory that you always consume promise with .then or .catch
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()                //it will take time that's why it is defined await 
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.