/*
============================================
File: 02-classes.js
Topic: JavaScript Classes
Description:
This exercise demonstrates how JavaScript
classes work, how constructors initialize
objects, and how class methods are shared
among instances.
============================================
*/
// =========================================
// Class Declaration
// =========================================
class Employee{
     constructor(name, department, salary, experience){
          this.name = name;
          this.department = department;
          this.salary = salary;
          this.experience = experience;
     }
     // Increases employee salary
     increaseSalary(amount){
          this.salary += amount;
     }
     // Changes employee department
     changeDepartment(newDepartment){
          this.department = newDepartment;
     }
     // Determines employee experience level
     isExperienced(){
          if(this.experience >= 5){
               return "Senior Employee";
          }else{
               return "Junior Employee";
          }
     }
     // Displays complete employee information
     showDetails(){
          console.log(`
               Name: ${this.name}
               Department: ${this.department}
               Salary: ${this.salary}
               Experience: ${this.experience}
               Status: ${this.isExperienced()}`);
     }
}
// =========================================
// Creating Employee Objects
// =========================================
const emp1 = new Employee("Ali", "SE", 50000, 4);
const emp2 = new Employee("Ahmed", "CS", 60000, 6);
const emp3 = new Employee("Hitesh", "AI", 40000, 2);
// =========================================
// Testing Class Methods
// =========================================
emp1.increaseSalary(5000);
emp2.changeDepartment(`Cyber Security`);
emp1.showDetails();
emp2.showDetails();
emp3.showDetails();
// =========================================
// Checking Object Type
// =========================================
console.log(emp1 instanceof Employee);
console.log(emp1 instanceof Object);
console.log(emp1 instanceof Array);

/*
============================================
Concepts Practiced

✔ JavaScript Classes
✔ Constructors
✔ Class Methods
✔ Object Creation
✔ Method Invocation
✔ instanceof

============================================
*/