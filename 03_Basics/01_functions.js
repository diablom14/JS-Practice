function sayHelloWorld(){
    console.log("Hello World!");
}

sayHelloWorld()

// Passing arguments to functions

let addTwoNumbers = function(a, b){
    return a+b
}

console.log(addTwoNumbers(4, 3));


// Giving Default values
function greeting(username="sam")
{
    console.log(`${username} just logged in`);
}

// greeting()//undefined without default parameter

greeting("Divyanshu")