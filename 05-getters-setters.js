/*
============================================
File: 05-getters-setters.js
Topic: Getters and Setters
Description:
This exercise demonstrates how getters
and setters provide controlled access
to object properties.
============================================
*/

// =========================================
// Class Definition
// =========================================
class Person {
  constructor(name, age) {
    // Store values in different properties
    // to avoid recursive calls.
    this._name = name;
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  // Setter validates and updates the name
  set name(newName) {
    if (newName !== "") {
      this._name = newName;
    } else {
      console.log("Name cannot be empty.");
    }
  }

  // Getter for age
  get age() {
    return this._age;
  }

  // Setter for age
  // Setter validates and updates the age
  set age(newAge) {
    if (newAge > 0) {
      this._age = newAge;
    } else {
      console.log("Age must be greater than 0.");
    }
  }

  // Displays object information
  showDetails() {
    console.log(`
Name: ${this.name}
Age: ${this.age}
`);
  }
}

// =========================================
// Creating Object
// =========================================
const person1 = new Person("Ahtisham", 20);

// =========================================
// Using Setters
// =========================================
person1.name = "Ali"; // Calls setter
person1.age = 22; // Calls setter

person1.name = ""; // Invalid
person1.age = -5; // Invalid

// =========================================
// Using Getters
// =========================================
console.log(person1.name); // Calls getter
console.log(person1.age); // Calls getter

// =========================================
// Display Details
// =========================================
person1.showDetails();

// Note:
// Getters are called when reading a property.
// Setters are called when assigning a new value to a property.

/*
============================================
Concepts Practiced

✔ Getters
✔ Setters
✔ Data Validation
✔ Encapsulation
✔ Classes

============================================
*/