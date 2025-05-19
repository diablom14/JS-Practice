let promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Asynch task going on");
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Asynch 1 completed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Asynch task going on");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Asynch 2 completed");
})

let promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"Divyanshu", email:"hello@mail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user.username, user.email);
})

// Promise chaining

const promiseFour = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error)
            resolve({username:"divyanshu", phone:"95562"})
        else
            reject("Error: the data couldn't be fetched")
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("The promise is either resolved or rejected");
})

// handling promises using asynch and await
const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error)
            resolve({username:"js", phone:"95562"})
        else
            reject("Error: the js data couldn't be fetched")
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);    
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


// async function getUserData(){
//     try {
//         const response = await fetch("https://randomuser.me/api/")
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
// }

// getUserData()

fetch("https://randomuser.me/api/")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log("E:", error));
