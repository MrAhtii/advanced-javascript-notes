/*
============================================
File: app.js
Topic: ES Modules
Description:
This file imports named and default
exports from another module and
demonstrates their usage.
============================================
*/

// =========================================
// Import Default and Named Exports
// =========================================

import greet, { add, multiply } from "./math.js";

// =========================================
// Test Functions
// =========================================

greet("Ahtisham");

console.log("Addition:");
console.log(add(10, 20));

console.log("Multiplication:");
console.log(multiply(5, 10));

// =========================================
// Difference Between Named and Default
// =========================================

// Named exports must be imported using curly braces {}.
// Default export can be imported with any variable name
// without using curly braces.

/*
============================================
Concepts Practiced

✔ Named Export
✔ Default Export
✔ Named Import
✔ Default Import
✔ ES Module Syntax

============================================
*/