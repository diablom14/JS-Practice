//1. Singleton when done through constructor

//2. Object literals

let mySym = Symbol()
let myObj = {
    name : "Divyanshu",
    [mySym]:"key1", // way of declaring symbol as key
    "full name":"Divyanshu Mohapatra",
    age: 23,
    email:"divyanshumohapatra@gmail.com"
}

// Accessing object values through keys
//way 1
// console.log(myObj.email);

//way 2
// console.log(myObj["full name"]);

// We can also change object values in the above way
myObj["email"] = "divyanshu@google.com"

// but if we freeze the object then changing the values wont take effect
// Object.freeze(myObj)
// myObj["email"] = "divyanshu@microsoft.com"// cant change the value

// console.log(myObj);

// Adding function to the js object
myObj.greeting = function()
{
    console.log("Hello user");
}

myObj.greeting2 = function()
{
    console.log(`Hello ${this.name}`);
}

myObj.greeting()
myObj.greeting2()

console.log(myObj.greeting)// returns function reference
