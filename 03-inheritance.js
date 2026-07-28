/*
============================================
File: 03-inheritance.js
Topic: Inheritance
Description:
This exercise demonstrates inheritance
using classes, the extends keyword,
super() constructor, and method inheritance.
============================================
*/
// =========================================
// Parent Class
// =========================================
class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    // Logs the user into the system
    logIn(){
        console.log(`${this.name} Logged In!`);
    }
    // Logs the user out of the system
    logOut(){
        console.log(`${this.name} Logged Out!`);
    }
}
// =========================================
// Child Class
// =========================================
class Admin extends User{
    constructor(name, email, role){
        super(name, email);
        this.role = role;
    }
    // Allows the admin to manage users
    manageUsers(){
        console.log(`${this.name} is Managing Users!`);
    }
}
// =========================================
// Creating Objects
// =========================================
const user = new User("Ali" , "sample@example.com");
const admin = new Admin("Ahmed" , "admin@example.com", "Super Admin");
// =========================================
// Testing Inherited Methods
// =========================================
user.logIn();
user.logOut();
admin.logIn();
admin.logOut();
admin.manageUsers();
// =========================================
// Checking Object Type
// =========================================
console.log(admin instanceof Admin);
console.log(admin instanceof User);
console.log(admin instanceof Object);
/*
============================================
Concepts Practiced

✔ Classes
✔ Inheritance
✔ extends
✔ super()
✔ Parent Methods
✔ Child Methods
✔ instanceof

============================================
*/