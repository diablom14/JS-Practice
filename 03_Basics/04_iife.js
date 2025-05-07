// Immediately Invoked Function Expressions

// function hello(){
//     console.log("hello");
// }
// hello(); //Not immediately invoked, can be polluted by global scope

(function hello(){
    console.log("hello");
})(); // semi colon is important here so that the codes after it can run

((name)=>{
    console.log(`Hello ${name}`);
})("Divyanshu");