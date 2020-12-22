/* Two Number Sum
Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum.
If any two numbers in the input array sum up to the target sum, the function should return them in an array.
If no two numbers sum up to the target sum, the function should return an empty array.
Assume that there will be at most one pair of numbers summing up to the target sum.
Sample input: [3, 5, -4, 8, 11, 1, -1, 6], 10
Sample output: [-1, 11] */


// Time O(n**2) | Space (O(1))
function twoNumberSum(array, sum) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if(array[i] + array[j] ===sum) {
        result.push(array[i]);
        result.push(array[j]);
        break;
      }
    }
  }
  return result;
}

// Test

const testArray = [3, 5, -4, 8, 11, 1, -1, 6]
const testSum = 10;

console.log(`Result is:  ${twoNumberSum(testArray, testSum)}`);