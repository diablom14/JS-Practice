// let name = "Divyanshu"
// let count = 10

// console.log(name + " " + count) // String concatenation with space

// // String interpolation (template literals) - ES6 feature
// console.log(`My name is ${name} and I am ${count} years old`) // Template literals (ES6 feature);

// // Another way to declare strings
// let name2 = new String("Divyanshu") // Object wrapper for string
// console.log(name2) // Output: [String: 'Divyanshu']
// console.log(name2.length) // Output: 8 (length of the string)
// console.log(name2[0]) // Output: D (first character of the string)

// substr and slice methods
// let str = new String("Hello, World!")
// console.log(str.substr(0, 5)) // Output: Hello (substring from index 0 to 5);
// console.log(str.slice(0, 5)) // Output: Hello (substring from index 0 to 5)
// console.log(str.slice(-6,2)) // Output: , W (substring from index -6 to 2)

// trim and replace

let myName = " Divyanshu  "
console.log(myName.trim());

let url = "https://HelloDivyanshu.com//home%20page"
console.log(url.replace("%20", " "));


// split 

let newStr = "almond-peanut-cashew"
console.log(newStr.split("-"));
console.log(newStr.includes("almond"));


