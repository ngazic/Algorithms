/**
 * Smallest Difference
Write a function that takes in two non-empty arrays of integers.
The function should find the pair of numbers (one from the first array, one from the second array)
whose absolute difference is closest to zero.
The function should return an array containing these two numbers,
with the number from the first array in the first position.
Assume that there will only be one pair of numbers with the smallest difference.
Sample input: [-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]
Sample output: [28, 26]
 */


 function smallestDifference(A, B) {
   A.sort((a,b) => {
     return a-b;
   });
   B.sort((a,b) => {
     return a-b;
   })
   let aPointer = 0;
   let bPointer = 0;
   let bestFit = Infinity;
   let solution = [];
   while(aPointer < A.length && bPointer < B.length) {
     const currentDifference = Math.abs(A[aPointer] - B[bPointer]);
     if(currentDifference === 0){
       return [A[aPointer,B[bPointer]]];
     }
     else if(currentDifference < Math.abs(bestFit) ) {
       bestFit = currentDifference;
       bPointer++;
       solution = [A[aPointer], b[bPointer]];
      }else{
        aPointer++;
        solution = [A[aPointer], b[bPointer]];
     }
   }
   return bestFit
 }