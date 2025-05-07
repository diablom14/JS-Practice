let user = {
    username:"Divyanshu",
    email:"dm@google.com",
    greeting : function()
    {
        console.log(this);
        console.log(`Hello, ${this.username}`);
    }
}

user.greeting()

console.log(this); 
// In node environment it is empty because there is only an empty global object
//But in browser environment this will give output as Window Object as global object in browser
//environment is Window.


//This works only in object context, e.g. it wont work on functions

function sayMyName()
{
    let username = "Divyanshu"
    console.log(this.username);// this cant print because there is no username as such
    
}
sayMyName()


//******Arrow Functions******/

// const addTwo = (a, b) =>{
//     return a + b
// }

//Implicit return
const addTwo = (a,b) => a+b

console.log(addTwo(2,3));

// But while returning object we can't write exactly like above 

const myFunc = () => ({username:"Divyanshu"}) //  enclose it with paranthesis
console.log(myFunc());

