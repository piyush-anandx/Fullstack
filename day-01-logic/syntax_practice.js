// 1. Variables: Create a constant for your name and a let variable for your age. Print both in one sentence: "My name is [Name] and I am [Age] years old."
const MyName = "Piyush";
let MyAge = 22;

console.log(`My name is ${MyName} and I am ${MyAge} years old.`);

// 2. Conditionals: Write an if/else that checks a variable number. If it's even, print "Even"; if it's odd, print "Odd". (Hint: use the modulo operator %).
let number = 43;
if (number % 2 === 0) {
  console.log(`${number} is Even`);
} else {
  console.log(`${number} is Odd`);
}

// 3. Functions: Write a function called calculateFahrenheit that takes celsius as an input and returns the temperature in Fahrenheit. (F = C * 9/5 + 32).
function calculateFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
console.log(calculateFahrenheit(3));

// 4. Loops (Bonus): Write a loop that prints numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 5. Logic: Write a script that checks a userRole variable. If it is "admin", print "Full Access". If it is "user", print "Limited Access". For anything else, print "No Access".
let userRole = "user";

if (userRole === "admin") {
  console.log("Full Access");
} else if (userRole === "user") {
  console.log("Limited Access");
} else {
  console.log("No Access");
}
