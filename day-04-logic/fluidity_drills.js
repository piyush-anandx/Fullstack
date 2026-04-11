// 1. Cleaner: let email = "  PIYUSH@gmail.com  "; -> Make it lowercase and remove spaces in one line.
let email = "  PIYUSH@gmail.com  ";
email = email.trim().toLowerCase();
console.log(email);

// 2. Slicer: let message = "Hello World"; -> Extract the word "Hello" using .slice().
let message = "Hello World";
message = message.slice(0, 5);
console.log(message);

// 3. Searcher: let text = "I love Gurugram"; -> Check if the string contains "love" (Returns true/false).
let text = "I love Gurugram";
if (text.includes("love")) {
  console.log(true);
} else {
  console.log(false);
}

// 4. Replacer: let price = "₹500"; -> Change the "₹" to "Rs." using .replace().
let price = "₹500";
price = price.replace("₹", "Rs.");
console.log(price);

// 5. Splitter: let tags = "html,css,js"; -> Turn this string into an array: ["html", "css", "js"].
let tags = "html,css,js";
let tagsArray = tags.split(",");
console.log(tagsArray);

// 6. Deep Access: Create an object user with a nested property address: { city: "Gurugram" }. Print just the city.
const user = {
  address: { city: "Gurugram" },
};
console.log(user.address.city);

// 7. Dynamic Update: Create an empty object stats = {}. Add a property score and set it to 100.
const stats = {};
stats.score = "100";
console.log(stats);

// 8. Keys & Values: Given an object laptop = { brand: "Apple", ram: "16GB" }, print an array of all its Keys.
const laptop = { brand: "Apple", ram: "16GB" };
console.log(Object.keys(laptop));

// 9. Method: Create an object timer with a property seconds: 0 and a method start() that increases seconds by 1.
const timer = {
  seconds: 0,
  start() {
    this.seconds++;
  },
};
timer.start();
timer.start();
timer.start();
console.log(timer.seconds);

//    10. JSON Power: Convert your user object into a JSON String using JSON.stringify().
const jsonUser = JSON.stringify(user);
console.log(jsonUser);