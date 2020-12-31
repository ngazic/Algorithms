/* Find Three Largest Numbers
Write a function that takes in an array of integers and returns a sorted array of the three largest integers
in the input array. Note that the function should return duplicate integers if necessary;
for example, it should return [10, 10, 12] for an input array of [10, 5, 9, 10, 12].
Sample input: [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]
Sample output: [18, 141, 541] */

// Time O(n) | Space O(1)
function findThreeLargest(arr) {
  const res = [0, 0, 0];
  for (const element of arr) {
    updateLargestThreeArray(res, element);
  }
  return res;
}

function updateLargestThreeArray(arr, num) {
  if(arr[2] < num) {
    arr[0] = arr[1];
    arr[1] = arr[2];
    arr[2] = num;
  }else if(arr[1] < num) {
    arr[0] = arr[1];
    arr[1] = num;
  }else if (arr[0] < num){
    arr[0] = num;
  }
} 


// Test

const testArray = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];
console.log(`result of test is ${findThreeLargest(testArray)}`)