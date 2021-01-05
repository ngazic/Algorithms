// O(n**2) Time | O(n) Space  => Becase string always creates new string, and internally, compiler runs (hidden) loop
function isPalindrome1(string) {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString === string;
}

// O(n) Time | O(n) Space
function isPalindrome2(string, index = 0) {
  let j = string.length - 1 - index;
  if (index >= j) 
    return true;
  return string[index] === string[j]
    ? isPalindrome2(string, ++index)
    : false;
}

//O(n) Time | O(1) Space
function isPalindrome3(string) {
  let leftPointer = 0;
  let rightPointer = string.length - 1;
  while (leftPointer <= rightPointer) {
    if (string[leftPointer] !== string[rightPointer]) 
      return false;
    leftPointer++;
    rightPointer--;
  }
  return true;
}

//Test

const palindrome1 = "abcdcba";
const palindrome2 = "abcdeba";

console.log(isPalindrome2(palindrome1));
console.log(isPalindrome2(palindrome2));
