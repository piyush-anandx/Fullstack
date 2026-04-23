function countChars(str) {
  let obj = {};
  for (const char of str) {
    if (obj[char]) {
      obj[char] += 1;
    } else {
      obj[char] = 1;
    }
  }
  return obj;
}

console.log(countChars("strawberry"));
