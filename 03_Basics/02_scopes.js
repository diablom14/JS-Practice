//Global scope



if(true){
    let a = 10 // block scope
    const b = 20
    var c = 30
}

// console.log(a);// gives an error which is right 
// console.log(b);// gives an error which is right 
console.log(c); //runs because of global scope creating problems


