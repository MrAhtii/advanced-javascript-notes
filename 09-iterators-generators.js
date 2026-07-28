/*
============================================
File: 09-iterators-generators.js
Topic: Iterators and Generators
Description:
This exercise demonstrates custom iterators,
generator functions, yield, and the next()
method in JavaScript.
============================================
*/

// =========================================
// Part A — Iterators
// =========================================

// =========================================
// Create an Array
// =========================================

const languages = ["HTML", "CSS", "JavaScript", "C++"];

// =========================================
// Create an Iterator
// =========================================

const iterator = languages[Symbol.iterator]();

// =========================================
// Call next()
// =========================================

console.log("Iterator Results:");

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// =========================================
// Part B — Generators
// =========================================

// =========================================
// Create a Generator
// =========================================

function* numbers() {
    console.log("Start");
    yield 10;

    console.log("Middle");
    yield 20;

    console.log("End");
    yield 30;
}

// =========================================
// Create Generator Object
// =========================================

const gen = numbers();

// =========================================
// Execute Step by Step
// =========================================

console.log("\nGenerator Execution:");

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

// =========================================
// Print Only Values
// =========================================

const values = numbers();

console.log("\nGenerator Values Only:");

console.log(values.next().value);
console.log(values.next().value);
console.log(values.next().value);
console.log(values.next().value);

// =========================================
// Iterate with for...of
// =========================================

function* colors() {
    yield "Red";
    yield "Green";
    yield "Blue";
}

console.log("\nColors:");

for (const color of colors()) {
    console.log(color);
}

// A generator pauses execution at each yield.
// Execution resumes when next() is called again.

/*
============================================
Concepts Practiced

✔ Iterators
✔ Symbol.iterator
✔ next()
✔ Generator Functions
✔ yield
✔ Generator Objects
✔ for...of with Generators

============================================
*/