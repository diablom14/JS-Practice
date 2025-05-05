const marvel_heroes = ["ironman", "thor", "captain america"]
const dc_heroes = ["batman", "flash", "superman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes); // this adds the whole dc array as an element in marvel array

// What we actually wanted to do
// const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes);

// Better way is to use spread operator so more than two can also be concatenated at the same time

// const all_heroes = [...marvel_heroes, ...dc_heroes]
// console.log(all_heroes);

// Flattening nested array

// const newArray = [1,2,[3,[4,[5,6]]]]
// const flattenedArray = newArray.flat(Infinity)
// console.log(flattenedArray);


// Checking for array and converting different types to array for looping purposes
console.log(Array.isArray("Hello"));
console.log(Array.from("Hello")); // can create array from another iterable only

console.log(Array.of(10, 20, "World", "Pure"));



