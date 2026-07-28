/*
============================================
File: 06-destructuring.js
Topic: Destructuring
Description:
This exercise demonstrates object and array
destructuring, variable renaming, and
default values in JavaScript.
============================================
*/
// =========================================
// Object Destructuring
// =========================================
const student = {
    name: "Ahtisham",
    age : 20,
    department: "SE",
    city: "D.I.Khan",
};
console.log("Name:", name);
console.log("Age:", age);
console.log("Department:", department);
console.log("City:", city);
// =========================================
// Variable Renaming & Default Values
// =========================================
const{name: studentName} = student;
console.log(studentName);
const{country = "Pakistan"} = student;
console.log(country);
// =========================================
// Array Destructuring
// =========================================
const colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
const[first , second , third] = colors;
console.log(first);
console.log(second);
console.log(third);

const [firstColor, , , fourthColor] = colors;
console.log(firstColor);
console.log(fourthColor);
// =========================================
// Function Parameter Destructuring
// =========================================
function showStudent({ name, department }) {
    console.log(name);
    console.log(department);
}

showStudent(student);
/*
============================================
Concepts Practiced

✔ Object Destructuring
✔ Array Destructuring
✔ Variable Renaming
✔ Default Values
✔ Skipping Values
✔ Function Parameter Destructuring

============================================
*/