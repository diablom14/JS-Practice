// Stack (Primitive) vs Heap (Reference) Memory

let name = "John"; // Primitive type (string) stored in stack memory
let anotherName = name; // anotherName is a copy of name, stored in stack memory
anotherName = "Doe"; // anotherName is now a different string, name remains "John"
console.log(name); // Output: John
console.log(anotherName); // Output: Doe

// Heap (Reference) Memory

let person = { firstName: "John" }; // Object stored in heap memory
let anotherPerson = person; // anotherPerson is a reference to the same object in heap memory
anotherPerson.firstName = "Doe"; // Modifying the object through anotherPerson
console.log(person.firstName); // Output: Doe
console.log(anotherPerson.firstName); // Output: Doe