/*
============================================
File: 11-design-patterns.js
Topic: JavaScript Design Patterns
Description:
This exercise demonstrates three common
JavaScript design patterns:
Factory Pattern, Singleton Pattern,
and Module Pattern.
============================================
*/

// =========================================
// Part A — Factory Pattern
// =========================================

// =========================================
// Create Factory Function
// =========================================

function createCar(brand, model, year) {
    return {
        brand,
        model,
        year,

        showDetails() {
            console.log(`Brand: ${this.brand}`);
            console.log(`Model: ${this.model}`);
            console.log(`Year: ${this.year}`);
        },
    };
}

// =========================================
// Create Cars
// =========================================

const car1 = createCar("Toyota", "Corolla", 2022);
const car2 = createCar("Honda", "Civic", 2023);

console.log("Car 1 Details:");
car1.showDetails();

console.log("\nCar 2 Details:");
car2.showDetails();

// =========================================
// Part B — Singleton Pattern
// =========================================

// =========================================
// Create Singleton Object
// =========================================

const AppSettings = {
    appName: "Car Management System",
    version: "1.0.0",

    showSettings() {
        console.log(`App Name: ${this.appName}`);
        console.log(`Version: ${this.version}`);
    },
};

// =========================================
// Test Singleton
// =========================================

console.log("\nApplication Settings:");
AppSettings.showSettings();

// =========================================
// Part C — Module Pattern
// =========================================

// =========================================
// Create Module
// =========================================

const Counter = (function () {
// Private variable
// Accessible only inside the module.
    let count = 0;

    return {
        increment() {
            count++;
        },

        decrement() {
            count--;
        },

        getCount() {
            return count;
        },
    };
})();

// =========================================
// Test Module
// =========================================

Counter.increment();
Counter.increment();
Counter.decrement();

console.log("\nFinal Count:");
console.log(Counter.getCount());

// count cannot be accessed directly because it is private.
// console.log(Counter.count); // undefined


/*
============================================
Concepts Practiced

✔ Factory Pattern
✔ Singleton Pattern
✔ Module Pattern
✔ IIFE
✔ Private Variables

============================================
*/

// Factory Pattern:
// Creates multiple similar objects.
//
// Singleton Pattern:
// Ensures only one shared object exists.
//
// Module Pattern:
// Encapsulates private data using closures.