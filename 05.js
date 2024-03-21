
// *) Write a loop to print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// *) Write a loop to print even numbers from 1 to 20.
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// *)  Write a loop to print odd numbers from 1 to 15.
for (let i = 1; i <= 15; i += 2) {
    console.log(i);
}

// *)  Write a loop to calculate and print the factorial of a number (let's say 5).
let number = 5;
let factorial = 1;

for (let i = 1; i <= number; i++) {
    factorial *= i;
}

console.log("The factorial of", number, "is", factorial);

// *) Write a loop to print the multiplication table of a number (let's say 7) up to 10.
const number2 = 7;
for (let i = 1; i <= 10; i++) {
    const result = number * i;
    console.log(number + " x " + i + " = " + result);
}

// *)  Write a loop to print the Fibonacci series up to the 10th term. (The Fibonacci sequence is a type series where each number is the sum of the two that precede it. It starts from 0 and 1 usually. The Fibonacci sequence is given by 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, and so on.-10)
let previous = 0;
let current = 1;

console.log(previous); 
console.log(current);  

for (let i = 3; i <= 10; i++) {
    let next = previous + current;
    console.log(next);  
    previous = current;
    current = next;
}
//*)Write a loop to find and print the sum of digits of a number (let's say 123).
let number3 = 123;
let sum = 0;

while (number > 0) {
    sum += number % 10; // Add the last digit to sum
    number = Math.floor(number / 10); // Remove the last digit
}

console.log("The sum of digits is:", sum);

//*) Write a loop to print the reverse of a string (let's say "hello").
let str = "hello";
let reversedString = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
}

console.log("Reversed string:", reversedString);

//*)Write a loop to print the square of numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
    const square = i * i;
    console.log("Square of", i, "is", square);
}

//*)  Write a loop to find and print the smallest element in an array (let's say [3, 7, 2, 9, 5]).
const array = [3, 7, 2, 9, 5];
let smallest = array[0]; // Initialize smallest with the first element of the array

for (let i = 1; i < array.length; i++) {
    if (array[i] < smallest) {
        smallest = array[i]; // Update smallest if a smaller element is found
    }
}

console.log("The smallest element in the array is:", smallest);


 
