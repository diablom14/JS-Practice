//2. Map

// Filter returns the value based on the true condition that is 
// given, but Map return every value of the array it is upto 
// us what we want to modify 

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let myNums = nums.map((num)=>{
    return num+10
})
console.log(myNums);

// we can also chain multiple methods, like map with map or map 
// with filter and as such

let newNums = nums.map((num)=>num*10)
                  .map((num) => num+1)
                  .filter((num)=>num>25)
console.log(newNums);
                  