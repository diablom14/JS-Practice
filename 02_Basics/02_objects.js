// let obj1 = new Object() // Singleton object creation

let obj1 = {} // non-singleton object creation

obj1.name = "Divyanshu"
obj1.isLoggedIn = false
obj1.fullname = {
    username:"diablo",
    email:{
        email1:"afev@gmail.com",
        email2:"afewv@gmail.com"
    },
}

// Accessing nested object elements
// console.log(obj1.fullname.email.email1);

//***** Creating a new object from merging older objects *****/

// const obj1 = {1:"a", 2:"b"}
// const obj2 = {3: "a", 4:"b"}
// const obj3 = {5: "a", 6:"b"}

// const obj4 = {obj1, obj2, obj3}
// console.log(obj4); // just create another object and store all inside in a nested way

// Way1
// const obj4 = Object.assign({}, obj1, obj2, obj3) // (src, target)
// console.log(obj4); // flattens the objects and merge all the elements inside the src

//Way2

// const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);


// Ways of accessing object keys and values 
// console.log(obj1);

// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));
// console.log(Object.entries(obj1));

// console.log(obj1.hasOwnProperty("name")); // returns whether it has that key or not


//******** Destructuring Objects ********/

let course = {
    courseName:"Js",
    courseInstructor:"hitesh",
    price: 999
}

const {courseInstructor:instructor} = course
console.log(instructor);
