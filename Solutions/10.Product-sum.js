/* Product sum is sum of all elements of array * depth of array.
I.e. for array [5, 2, [7,-1], 3] the sum is calculated like
Sum= 5 + 2 + (7 -1)*2 + 3 = 22. (note: for sub-array [7, -1] depth is 2) */

function productSum(arr, depth = 1) {
  let sum = 0;
  for (const item of arr) {
    console.log(arr);
    if (Array.isArray(item)) {
      sum += productSum(item, depth + 1);
    } else {
      sum += item;
    }
  }
  return sum * depth;
}

//Test

const testArray = [
  5,
  2,
  [
    7, -1
  ],
  3,
  [
    6,
    [
      -13, 8
    ],
    4
  ]
]; //sum = 12

const testArray2 = [5, 2, [7, -1], 3];

console.log(`The procuct sum is: ${productSum(testArray)}`);
console.log(`The procuct sum is: ${productSum(testArray2)}`);