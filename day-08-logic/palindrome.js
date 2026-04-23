function isPalindrome(str) {
  reverseStr = str.split("").reverse().join("");
  if (str === reverseStr) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome("level"));
