// For in loop

let myObject = {
    "js" : "javascript",
    cpp: "c++",
    rb:"ruby",
    java: "java"
}

for(const key in myObject){
    console.log(key, ":", myObject[key]);
}

// In array we can also use this in which keys will be the index of the arrays

// This loop is not applicable on maps