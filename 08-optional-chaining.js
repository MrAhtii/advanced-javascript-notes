/*
============================================
File: 08-optional-chaining.js
Topic: Optional Chaining
Description:
This exercise demonstrates how optional
chaining safely accesses nested object
properties without causing runtime errors.
============================================
*/

// =========================================
// Create an Object
// =========================================

const student = {
    name: "Ahtisham",
    department: "Software Engineering",
    address: {
        city: "D.I. Khan",
        country: "Pakistan",
    },
};

// =========================================
// Access Existing Properties
// =========================================

console.log("City:");
console.log(student.address?.city);

console.log("\nCountry:");
console.log(student.address?.country);

// =========================================
// Access Missing Property
// =========================================

console.log("\nZip Code:");
console.log(student.address?.zipCode);

// =========================================
// Access Missing Nested Object
// =========================================

console.log("\nPhone:");
console.log(student.contact?.phone);

console.log("\nEmail:");
console.log(student.contact?.email);

// =========================================
// Compare Without Optional Chaining
// =========================================

// console.log(student.contact.phone);

// The above line would throw an error because
// the "contact" object does not exist.

// =========================================
// Optional Chaining with Methods
// =========================================

const teacher = {
    name: "Mr. Khan",

    greet() {
        console.log("Hello, Students!");
    },
};

console.log("\nCalling greet():");
teacher.greet?.();

console.log("\nCalling sayBye():");
teacher.sayBye?.(); // No error, returns undefined

// Optional chaining (?.) prevents runtime errors
// by returning undefined when a property or method
// does not exist.

/*
============================================
Concepts Practiced

✔ Optional Chaining
✔ Safe Property Access
✔ Nested Objects
✔ Missing Properties
✔ Optional Method Calls

============================================
*/