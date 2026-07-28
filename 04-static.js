/*
============================================
File: 04-static.js
Topic: Static Methods and Properties
Description:
This exercise demonstrates static methods
and static properties in JavaScript classes.
============================================
*/
// =========================================
// Class Definition
// =========================================
class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    // Instance Method
    logIn(){
        console.log(`${this.name} Logged In!`);
    }
     // Static Method
    static companyInfo(){
        console.log("Comapny: Tech Solutions");
    }
}
// =========================================
// Creating Objects
// =========================================
const user1 = new User("Ahtisham", "sample@example.com");
// =========================================
// Testing Instance Method
// =========================================
user1.logIn();
// =========================================
// Testing Static Method
// =========================================
User.companyInfo();
// =========================================
// Testing Static Access
// =========================================
// user1.companyInfo(); ❌ Error because static methods belong to the class, not objects
/*
============================================
Concepts Practiced

✔ Static Methods
✔ Class Methods
✔ Instance Methods
✔ Difference between Object and Class

============================================
*/