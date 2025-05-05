// const arr1 = [1, 2, 3, "Divyanshu"]
// console.log(arr1);
// console.log(typeof arr1);

//*** Second way ***

// const arr2 = new Array(1, 3, "Hello")
// console.log(arr2);

// *** Array Methods ***

let myArr = [0, 1, 2, 3, 4, 5, 6]

// Pushing and popping from the back
// myArr.push(10)
// myArr.push(14)
// myArr.pop()

//Pushing and popping from the front
// myArr.unshift(10)
// myArr.unshift(12)
// myArr.shift()


// converting array into string
// let myStr = myArr.join("")
// console.log(myArr);
// console.log(myStr)
// console.log(typeof myStr);


// Slice and Splice function

console.log("A ", myArr);
console.log(myArr.slice(1,3));
console.log("B ", myArr);

console.log(myArr.splice(1,3)); // Splice include the last in the range and removes these elements from the original Array
console.log("C ", myArr);






