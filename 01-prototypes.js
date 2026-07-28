/*
============================================
File: 01-prototypes.js
Topic: Constructor Functions & Prototypes
Description:
This exercise demonstrates how constructor
functions work, how prototype methods are
shared among objects, and how the prototype
chain behaves in JavaScript.
============================================
*/
// =========================================
// Constructor Function
// Creates a new Student object with initial properties
// =========================================
function Student(name, age, department, marks){
     this.name = name;
     this.age = age > 0 ? age : 0;
     this.department = department;
     this.marks = marks;
}
// =========================================
// Prototype Methods
// Shared among all Student objects
// Saves memory because methods are not recreated
// =========================================
Student.prototype.showDetails = function () { 
     console.log(`
          Name: ${this.name}
          Age: ${this.age}
          Department: ${this.department}
          Marks: ${this.marks}
          Grade: ${this.calculateGrade()} 
          Status: ${this.isPassed()}`);

}
// Calculates and returns student's grade based on marks
Student.prototype.calculateGrade = function (){
     let grade = "";
     if(this.marks >= 90){
          grade = "A+";
     }else if(this.marks >= 80 && this.marks < 90){
          grade = "A";
     }else if(this.marks >= 70 && this.marks < 80){
          grade = "B";
     }else if(this.marks >= 60 && this.marks < 70){
          grade = "C";
     }else{
          grade = "F";
     }
     return grade;
}
// Updates student marks by adding new marks
Student.prototype.updateMarks = function (newMarks){
     this.marks += newMarks;
}
// Changes the student's department
Student.prototype.changeDepartment = function (newDepartment){
     this.department = newDepartment;
}
// Checks whether the student passed or failed
// Uses calculateGrade() instead of duplicating logic
Student.prototype.isPassed = function () {
     if(this.calculateGrade() !== "F"){
          return "Passed";
     }else{
          return "Failed";
     }
}
// =========================================
// Creating Student Objects
// =========================================
const s1 = new Student("Ahtisham", 20, "SE", 92);
const s2 = new Student("Haris", 21, "CS", 75);
const s3 = new Student("Shaheer", 19, "AI", 50);
// Updating student information
s2.changeDepartment("Cyber Security");
s3.updateMarks(25);
// Display all student information
s1.showDetails();
s2.showDetails();
s3.showDetails();
// hasOwnProperty()
// Checks whether a property belongs directly to the object
// and not to its prototype.
console.log(s1.hasOwnProperty("name"));
console.log(s1.hasOwnProperty("marks"));
console.log(s1.hasOwnProperty("calculateGrade"));
console.log(s1.hasOwnProperty("showDetails"));
// instanceof checks whether an object belongs to a particular class/type.
console.log("");
console.log("Instance of Student: ", s1 instanceof Student);
console.log("Instance of Object: ", s1 instanceof Object);
console.log("Instance of Array: ", s1 instanceof Array);

/*
============================================
Concepts Practiced

✔ Constructor Functions
✔ Object Creation
✔ Prototype Methods
✔ Method Sharing
✔ Grade Calculation
✔ Updating Object Properties
✔ hasOwnProperty()
✔ instanceof
✔ Prototype Chain

============================================
*/