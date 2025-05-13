//3. Reduce

let nums = [1, 2, 3, 4]

let initialVal = 0
// let newNums = nums.reduce(function(acc, curr){
//     return acc + curr
// }, 0)


// Using arrow function
let newNums = nums.reduce((acc, curr)=>acc+curr, 0)
console.log(newNums);

// acc will take the initialValue for the first time only
// afterwards it will take the value given by acc + curr