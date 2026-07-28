/*
============================================
File: math.js
Topic: ES Modules
Description:
This module exports named and default
functions to demonstrate ES module syntax.
============================================
*/

// =========================================
// Named Exports
// =========================================

export function add(a, b) {
    return a + b;
}

export function multiply(a, b) {
    return a * b;
}

// =========================================
// Default Export
// =========================================

export default function greet(name) {
    console.log(`Hello, ${name}!`);
}