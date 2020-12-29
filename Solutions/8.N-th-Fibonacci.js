/* Nth Fibonacci

The Fibonacci sequence is defined as follows:
the first number of the sequence is 0,
the second number is 1,
and the nth number is the sum of the (n - 1)th and (n - 2)th numbers.

Write a function that takes in an integer n and returns the nth Fibonacci number.

Important note: the Fibonacci sequence is often defined with its first 2 numbers as F0 = 0 and F1 = 1.
For the purpose of this question, the first Fibonacci number is F0;
therefore, getNthFib(1) is equal to F0, getNthFib(2) is equal to F1, etc..

Sample input #1: 2
Sample output #1: 1 (0, 1)
Sample input #2: 6
Sample output #2: 5 (0, 1, 1, 2, 3, 5) */

//Time O(n) | Space O(n)
function getNthFibonacci(n) {
  const result = [0, 1];
  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result;
}

//Time O(n) | Space O(n)
function getNthFibonacci1(n) {
  let arr = [];
  const map = {
    1: 0,
    2: 1
  };
  getNthFibonacciHelper(n, map);
  return map;
}

function getNthFibonacciHelper(n, map = {
  1: 0,
  2: 1
}) {
    if (map.hasOwnProperty(n)) {
    return map[n];
  } else {
   map[n] = getNthFibonacciHelper(n - 1, map) + getNthFibonacciHelper(n - 2, map);
   return map[n];
  }
}

//Test

console.log(`The result is:`);
console.log(getNthFibonacci1(6));
