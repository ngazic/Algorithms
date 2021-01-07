/**
 * Three Number Sum
Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum.
The function should find all triplets in the array that sum up to the target sum and
return a two-dimensional array of all these triplets.
The numbers in each triplet should be ordered in ascending order,
and the triplets themselves should be ordered in ascending order with respect to the numbers they hold.
If no three numbers sum up to the target sum, the function should return an empty array.
Sample input: [12, 3, 1, 2, -6, 5, -8, 6], 0
Sample output: [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
 */

//First solution can be using three nested for/while loops => O(n**3) Time and O(n) space (because solution can strive to n size in worst case)


/*
========================
solution 2 => using sorted array  and moving left and right pointers  

          [-20, -14, -1, ..., 2, 6, 100]
            |    |                   |
            Rfc  L                   R

*/
//O(n**2log(n)) Time | O(n) space
function threeNumberSum(array, sum) {
  const result = [];
  array.sort((a, b) => {
    return a - b;
  });
  let reference = 0;
  while (reference < array.length - 2) {
    let left = reference + 1;
    let right = array.length - 1;
    while (left < right) {
      const currentSum = array[reference] + array[left] + array[right];
      if (currentSum === sum) {
        result.push([array[reference], array[left], array[right]]);
        right--;
        left++;
      } else if (currentSum > sum) {
        right--;
      } else {
        left++;
      }
    }
    reference++;
  }
  return result;
}


/**
 * Using hash table(dictionary, object)
 * Formula: searched item = sum - currentReferce1 - currentreference2
 * if this item exists, we add it as solution
 * This solution is not optimal if we need to have sorted array like asked, extra sorting is 
 * necessary for this
 */

 //O(n**2) Time | O(n) Space
function threeNumberSum1(array, sum) {
  const hashTable = {};
  const solutions= [];
  for(let i = 0; i<array.length; i++){
    for(let j=i+1;j<array.length-1;j++){
      if(!hashTable[sum-array[i] -array[j]]){
        hashTable[array[i]] = true;
      }else {
        solutions.push([array[i], array[j],sum - array[i] - array[j]]);
      }
    }
  }
  console.log(hashTable);
 return solutions;
}

//Test

const testArray = [12, 3, 1, 2, -6, 5, -8, 6];
const result = threeNumberSum(testArray, 0);
console.log(result);
