/*
Given an input string, write a function that returns the Run Length Encoded 
string for the input string. For example, if the input string is 
“wwwwaaadexxxxxx”, then the function should return “w4a3d1e1x6”.
*/

//O(n) Time | O(n) Space
function runLengthEncoding(string) {
  let encodeArray = [];
  let charCounter = 1;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      charCounter++;
    } else {
      encodeArray.push(string[i]);
      encodeArray.push(charCounter);
      charCounter = 1;
    }
  }
  return encodeArray.join('');
}


// Test 

const testString = "wwwwaaadexxxxxx";
console.log(runLengthEncoding(testString));