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

// Understanding the use of rest operator ...

// function printNumbers(...nums){
//     console.log(nums);
// }

// printNumbers(100, 200, 300, 400)

function printNumbers(num1, num2, ...nums)
{
    //num1 and num2 will only take first two values, rest of them will be taken as an array in nums
    console.log(nums);
}

printNumbers(100, 200, 400, 300, 500)

// Passing objects
function myFun(obj){
    console.log(`Name is ${obj.name}, and price is ${obj.price}`);
}

myFun({name:"Tshirt", price:999})

// In the same way we can pass array as parameters too