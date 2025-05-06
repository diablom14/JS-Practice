//Global scope



if(true){
    let a = 10 // block scope
    const b = 20
    var c = 30
}

// console.log(a);// gives an error which is right 
// console.log(b);// gives an error which is right 
console.log(c); //runs because of global scope creating problems

// Function Scoping example

function one()
{
    const username = "Divyanshu"

    function two(){
        const website = "Youtube"
        console.log(`${username} is using ${website}`);
    }

    // console.log(website); // will give error
    two()
}

// console.log(username); // will give error
one()


//****** Function hoisting ******



console.log(addOne(5));// can be called due to function hoisting
function addOne(a){
    return a+1
}


// addTwo() // will give error as the function is hold by a const variable
const addTwo = function(a){
    return a+2
}
