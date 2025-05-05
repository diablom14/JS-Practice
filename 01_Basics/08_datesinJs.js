let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// Creating own date

// let createdDate = new Date(2023, 0 , 14)
// console.log(createdDate.toDateString());

let createdDate = new Date("01-13-2023")
// console.log(createdDate.toDateString());

// *** Current timestamp
let curr = Date.now()
console.log(curr);

// TO compare timestamp with date

console.log(curr == createdDate.getTime());



