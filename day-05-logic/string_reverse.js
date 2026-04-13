let str = "I love coding";
function reverseStr(string) {
  return string.split(" ").reverse().join(" ");
}
console.log(reverseStr(str));
