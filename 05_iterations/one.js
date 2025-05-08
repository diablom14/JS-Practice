// 1. For of loop

const nums = [10, 20, 30, 40]
for(const num of nums){
    console.log(num);
}

// For of of maps

let mmp = new Map();

mmp.set("IN", "India")
mmp.set("US", "United States of America")
mmp.set("UK", "United Kingdom")

console.log(mmp);
for(const [key,value] of mmp){
    console.log(key, "->", value);
}

// As objects are not iterable in 'for of loop case' we cant use for of directly on any object