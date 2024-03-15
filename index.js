// let greet = ("Hello World!");
// console.log(greet)

// print all numbers from 1 to 10 (gpt practice 1)

// for (let x = 1; x <= 10; x ++) {
//     console.log(x)
// }

// -----------------------------------------------------------------------------------------------------------------

// Add the sum of all numbers 1 to 100 (gpt practice 2)

// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//     sum += i;
// }
// console.log("The sum of numbers from 1 to 100 is:", sum);

// -----------------------------------------------------------------------------------------------------------------

// Enter a number that will then be converted to a factorial of that number (gpt practice 3)

// let userInput = prompt("Enter a number:");
// let number = parseInt(userInput);
// let factorial = 1;

// for(let i = 1; i <= number; i++) {
//     factorial *= i;
// }
// console.log("The factorial; of " + number + " is: " + factorial);

// -----------------------------------------------------------------------------------------------------------------

// Enter a positive integer which will be determined whether or not it is a prime number (gpt practice 4)
// way advanced oops

// let userInput = prompt("Enter a positive integer");
// let number = parseInt(userInput);

// if(number < 2) {
//     console.log("This is not a prime number.")
// }

// for( let i = 2; i <= Math.sqrt(number); i++) {

// }

// let isPrime = true;

// for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) {
        
//         isPrime = false;
//         break; 
//     }
// }

// // Check if the number is still marked as prime
// if (isPrime) {
//     console.log(number + " is a prime number");
// } else {
//     console.log(number + " is not a prime number");
// }

// -----------------------------------------------------------------------------------------------------------------

// calculate the sum of all even numbers from 1 to 20 (gpt practice problem 5)

// let sum = 0;

// for(let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         sum += i;
//     }
// }

// console.log("The sum of even numbers from 1 to 20 is:", sum);

//-----------------------------------------------------------------------------------------------------------------

// Multiplication tables promp (gpt practice problem 6)

// const number = 5;

// for(let i = 1; i <= 10; i++) {
//     const result = number * i;
//     console.log(`${number} x ${i} = ${result}`);
// }

//-----------------------------------------------------------------------------------------------------------------

// // Get a sum of num 1-1000 if divisible by 3 or 5 (gpt pracitce problem 7)

// let sum = 0; // stores future variables

// for(let i = 1; i <= 1000; i++) { // basic loop setup
//     sum += (i % 3 === 0 || i % 5 === 0); { // this code checks for divisible numbers
//         sum += i;
//     // the numbers 3 and 5 are used as they are the numbers being used to check for divisible numbers
//     } 
// }   

// console.log("The sum of numbers divisible by 3 or 5 from 1 to 1000 is:", sum);

//-----------------------------------------------------------------------------------------------------------------

// print the first 10 fibonacci numbers (Gpt practice problem 8)

let sum1 = 0;
let sum2 = 1;

for (let i = 1; i <= 10; i++) {
    console.log(sum1); // Print the current Fibonacci number
    let nextFibonacci = sum1 + sum2;
    sum1 = sum2;
    sum2 = nextFibonacci;
}

