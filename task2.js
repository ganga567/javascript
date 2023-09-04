// Define an array of numbers......................................
const numbers = [1, 2, 3, 4, 5,6,7,8,9];

// Data types and operators.....................................
console.log("\n<--------------------Start-------------------->\nData Types and Operators:");
console.log("Array:", numbers);
console.log("Length of the array:", numbers.length);
console.log("Index 2:", numbers[2]);
console.log("Addition:", numbers[0] + numbers[1]);
console.log("Subtraction:", numbers[3] - numbers[2]);
console.log("Multiplication:", numbers[2] * numbers[4]);
console.log("Division:", numbers[4] / numbers[1]);
console.log("Modulus:", numbers[3] % numbers[2]);

// Array methods,.................................................
console.log("\n----> Array Methods <----\n");
console.log("Original Array:", numbers)

numbers.push(6); // Add an element to the end
console.log("After push(6):", numbers);

numbers.pop(); // Remove the last element
console.log("After pop():", numbers);

numbers.unshift(0); // Add an element to the beginning
console.log("After unshift(0):", numbers);

numbers.shift(); // Remove the first element
console.log("After shift():", numbers);

const slicedArray = numbers.slice(1, 3); // Create a new array by slicing
console.log("Sliced Array (1, 3):", slicedArray);

const splicedArray = numbers.splice(2, 2, 7, 8); // Remove and add elements
console.log("Spliced Array (2, 2, 7, 8):", numbers);
console.log("Removed Elements:", splicedArray);

// Loops..............................................................................
console.log("\nLoops:");
console.log("Loop through the array using for loop:");
for (let i = 0; i < numbers.length; i++) {
  console.log("Index", i, ":", numbers[i]);
}

console.log("Loop through the array using forEach:");
numbers.forEach(function (element, index) {
  console.log("Index", index, ":", element);
});

// Functions  ........................................................
console.log("\nFunctions:");
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log("Sum of the array:", sumArray(numbers));


// slice
let fruits = ["apple", "banana", "cherry"];
let slicedFruits = fruits.slice(1, 2); // Extract elements from index 1 to 1 (exclusive)

// For each
let fruit = ["apple", "banana", "cherry"];
fruits.forEach(function(fruit) {
  console.log(fruit);
}); // Iterate over elements

//Map 
let numbers2 = [1, 2, 3];
let doubled = numbers2.map(function(numbers2) {
  return numbers2 * 2;
}); // Create a new array with modified values

let numbers3 = [1, 2, 3, 4, 5];
let evenNumbers = numbers3.filter(function(numbers3) {
  return numbers3 % 2 === 0;
}); // Create a new array with filtered elements

let numbers4 = [1, 2, 3, 4, 5];
let sum = numbers4.reduce(function(total, numbers4) {
  return total + numbers4;
}, 0); // Calculate the sum of all elements

let num = [1, 2, 3, 4, 5];
let isEven = num.every(function(num) {
  return num % 2 === 0;
}); // Check if all elements satisfy a condition

//Printing all elements
let fruitlist = ["apple", "banana", "cherry"];
for (let i = 0; i < fruitlist.length; i++) {
  console.log(fruitlist[i]);
}


//Function
function findMax(arr) {
  return Math.max(...arr);
}

let num1 = [1, 5, 3, 8, 2];
let maxNumber = findMax(num1);

// Arrow function without curly braces (implicit return)
const multiply = (x, y) => x * y;

// Arrow function with curly braces (explicit return)
const divide = (x, y) => {
  if (y === 0) {
    throw Error("Division by zero");
  }
  return x / y;
};

//functions that are assigned to a variable
const greet = function () {
  console.log("Greetings!");
};


//Constructor Functions:
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person1 = new Person("Alice", 30);

//Callback Functions: Functions passed as arguments to other functions and called when a specific event occurs or task is completed.
function fetchData(callback) {
  // Asynchronous operation
  setTimeout(function () {
    callback("Data received!");
  }, 1000);
}
fetchData(function (data) {
  console.log(data);
});


//Recursive Functions: Functions that call themselves to solve problems that can be broken down into smaller, similar sub-problems.
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n-1);}