// Declaring the object
var person = {
  firstName: "ganga",
  lastName: "mukesh",
  age: 30,
  email: "gangadhar567@gmail.com",
  sayHello: function() {
    console.log("Hello, I'm " + this.firstName + " " + this.lastName + ".");
  }
};

// Access and modify object properties
console.log("First Name: " + person.firstName);
console.log("Last Name: " + person.lastName);
console.log("Age: " + person.age);
console.log("Email: " + person.email);

// Call a method of the object
person.sayHello();

// Modify object properties
person.age = 35;
person.email = "gangadhar123@gmail.com";

// Call the method again with updated data
person.sayHello();
