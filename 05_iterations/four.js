let nums = [1,2,3,4,5,6,7,8,9,10]

// let val = nums.forEach((num)=>{
//     console.log(num);
//     return num
// })
// console.log(val); // undefined

// The for each loop never returns anything

// 1. Filter

let newNums = nums.filter((num)=>{
    return num > 5
})
console.log(newNums);

