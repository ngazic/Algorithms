/* Two Number Sum
Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum.
If any two numbers in the input array sum up to the target sum, the function should return them in an array.
If no two numbers sum up to the target sum, the function should return an empty array.
Assume that there will be at most one pair of numbers summing up to the target sum.
Sample input: [3, 5, -4, 8, 11, 1, -1, 6], 10
Sample output: [-1, 11] */

/*
========================
solution 1
*/

// Time O(n**2) | Space (O(1))
function twoNumberSum1(array, sum) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === sum) {
        result.push(array[i]);
        result.push(array[j]);
        break;
      }
    }
  }
  return result;
}

/*
========================
solution 2 => using sorted array  and moving left and right pointers  

          [-20, -14, -1, ..., 2, 6, 100]
            |                      |
            L                      R

*/
// Time O(nlog(n)) | Space (O(1))

function twoNumberSum2(array, sum) {
  array.sort((a, b) => {
    return a - b;
  });
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    // console.log(`elements: [${array[left]},${array[right]}], sum ${array[left] + array[right]}`);
    if (array[left] + array[right] === sum) {
      return [array[left], array[right]];
    } else if (array[left] + array[right] > sum) {
      right--;
    } else {
      left++;
    }
  }
  return [];
}

/*
========================
solution 3 => using hash tables (dictionaries, objects)
*/

//Time O(n) | Space O(n)

function twoNumberSum3(array, sum) {
  const hashTable = {};
  for (const item of array) {
    if (!hashTable[sum - item]) {
      hashTable[item] = true;
    } else {
      return [item, sum - item];
    }
  }
}

// Test

const testArray = [3, 5, -4, 8, 11, 1, -1, 6];
const testSum = 10;

console.log(`Result is:  ${twoNumberSum3(testArray, testSum)}`);
