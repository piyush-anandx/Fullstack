//    1. The Double: Use .map() on [10, 20, 30] to get [20, 40, 60].
// const numbers = [10, 20, 30];
// const doubleNumbers = numbers.map((num) => {
//   return num * 2;
// });
// console.log(doubleNumbers);
// or
const numbers = [10, 20, 30];
const doubleNumbers = numbers.map((num) => num * 2);
// console.log(doubleNumbers);

//    2. The Filter: Use .filter() on [5, 12, 18, 25, 30] to get only numbers over 15.
const allNumbers = [5, 12, 18, 25, 30];
const numberGreaterThan15 = allNumbers.filter((allNum) => allNum > 15);
// console.log(numberGreaterThan15);

//    3. The Total: Use .reduce() on [150, 250, 350] to get the Total Sum.
const numberSumReq = [150, 250, 350];
const totalSum = numberSumReq.reduce((acc, curr) => acc + curr);
console.log(totalSum);
