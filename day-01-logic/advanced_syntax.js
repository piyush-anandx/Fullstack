// 1: The "Dev" Object
//   Create an object called developer.
//    - Properties: name, age, and an array skills (e.g., ["HTML", "CSS", "JS"]).
//    - Method: Create a function inside the object called showSkills().
//    - Logic: This function should use a for loop to print: "Skill: [Skill Name]" for every skill in the array.

const developer = {
  name: "Piyush",
  age: 22,
  skills: ["HTML", "CSS", "JS"],
  showSkills() {
    for (let i = 0; i < this.skills.length; i++) {
      console.log(`skill: ${this.skills[i]}`);
    }
  },
};
developer.showSkills();

// 2. The "Filter" Challenge: Create an array of numbers [10, 25, 30, 45, 50]. Write a loop that creates a new array containing only numbers greater than 25.
const numb = [10, 25, 30, 45, 50];
const newarr = [];
for (let i = 0; i < numb.length; i++) {
  if (numb[i] > 25) {
    newarr.push(numb[i]);
  }
}
console.log(newarr);

// 3: The "Factory" Function
//   Write a function createTask(title).
//    - Logic: It should return an object with:
//        1. id: A random number (Hint: Math.random()).
//        2. title: The title passed to the function.
//        3. status: Always starts as "Pending".
function createTask(title) {
  return {
    id: Math.floor(Math.random() * 10000),
    title: title,
    status: "Pending",
  };
}
const task1 = createTask("Learn JavaScript");
console.log(task1);
