/*
Write a function that takes in a Binary Tree and returns a list of its branch sums (ordered from leftmost branch sum to rightmost branch sum).
A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree branch is a path of nodes in a tree that starts at the root node and ends at any leaf node.
Each Binary Tree node has a value stored in a property called "value" and two children nodes stored in properties called "left" and "right," respectively.
 Children nodes can either be Binary Tree nodes themselves or the None (null) value.
*/

// O(n) time | O(n) space (best case balanced tree O(log(n))) ==> n is the number of nodes
function branchSums(tree) {
  const result = [];
  calculateBranchSums(tree, 0, result);
  return result;
}

function calculateBranchSums(node, nodeSum, finalResult) {
  if (!node) {
    return 0;
  }
  if (!node.left && !node.right) 
    finalResult.push(node.value + nodeSum);
  }
  calculateBranchSums(node.left, node.value + nodeSum, finalResult);
  const rightLeaf = calculateBranchSums(node.right, node.value + nodeSum, finalResult);
  console.log(`Left leaf ${node.value} : sum ${node.value + nodeSum}`);

//Test

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const myTree = new BinaryTree(5);
const node1 = new BinaryTree(2);
const node2 = new BinaryTree(3);
const node3 = new BinaryTree(5);
const node4 = new BinaryTree(8);
const node5 = new BinaryTree(6);
const node6 = new BinaryTree(7);
const node7 = new BinaryTree(11);
const node8 = new BinaryTree(10);
const node9 = new BinaryTree(1);
const node10 = new BinaryTree(4);

myTree.left = node1;
myTree.right = node2;
node1.left = node3;
node1.right = node4;
node2.left = node5;
node2.right = node6;
node3.left = node7;
node3.right = node8;
node4.left = node9;
node4.right = node10;

/**
 * VISUAL TREE REPRESENTATION
 *
 *                                                   5
 *                                                 /   \
 *                                               2       3
 *                                              / \     /  \
 *                                             5   8    6   7
 *                                           / \   / \
 *                                         11  10  1  4
 *
 * RESULT ARRAY IS = [23, 22, 16, 19, 14, 15]
 *
 */

const result = branchSums(myTree);

console.log(`===== THE RESULT IS ${result} ======`)
