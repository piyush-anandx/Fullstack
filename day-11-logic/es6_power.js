const user = { name: "Piyush", age: 22, city: "Gurugram" };
const { name, city } = user;
// console.log(name);
// console.log(city);

const colors = ["red", "green", "blue"];
const [first, second] = colors;
// console.log(first);
// console.log(second);

let arr1 = [1, 2];
let arr2 = [3, 4];
let combineArr = [...arr1, ...arr2];
// console.log(combineArr);

const updateUser = { ...user, city: "Berlin" };
// console.log(updateUser);
