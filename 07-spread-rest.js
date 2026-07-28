/*
============================================
File: 07-spread-rest.js
Topic: Spread and Rest Operators
Description:
This exercise demonstrates the spread
operator for expanding arrays/objects
and the rest operator for collecting
multiple values into a single parameter.
============================================
*/

// =========================================
// Spread with Arrays
// =========================================

const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Express", "MongoDB"];

const fullStack = [...frontend, ...backend];

console.log("Merged Array:");
console.log(fullStack);

// =========================================
// Copy an Array
// =========================================

const copiedArray = [...fullStack];

console.log("\nCopied Array:");
console.log(copiedArray);

// =========================================
// Spread with Objects
// =========================================

const personalInfo = {
    name: "Ahtisham",
    department: "Software Engineering",
};

const contactInfo = {
    email: "ahtisham@example.com",
    city: "D.I.Khan",
};

const student = {
    ...personalInfo,
    ...contactInfo,
};

console.log("\nMerged Object:");
console.log(student);

// =========================================
// Rest Parameters
// =========================================

function sum(...numbers) {
    let total = 0;

    for (const number of numbers) {
        total += number;
    }

    return total;
}

console.log("\nSum of 3 Numbers:");
console.log(sum(10, 20, 30));

console.log("\nSum of 5 Numbers:");
console.log(sum(5, 10, 15, 20, 25));

// =========================================
// Rest in Destructuring
// =========================================

const marks = [90, 85, 70, 95, 88];

const [first, second, ...remainingMarks] = marks;

console.log("\nRest Destructuring:");
console.log("First:", first);
console.log("Second:", second);
console.log("Remaining:", remainingMarks);

/*
============================================
Concepts Practiced

✔ Spread Operator
✔ Merging Arrays
✔ Copying Arrays
✔ Merging Objects
✔ Rest Parameters
✔ Rest Destructuring

============================================
*/