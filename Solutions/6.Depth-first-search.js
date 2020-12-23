/**
Depth First Search (DFS) for Graph (Tree is graph, List is special case of tree)

Two ways to represent Graphs:
1. Adjacency list
2. Adjecency matrix

HINT: Create data structure that satisfies this  (i.e. directed acyclic graph because we always start searching from root
   node through child nodes /vertices)

Sample input:
             A                    
          /  |  \
        B    C   D
      /   \    /    \             
    E      F  G     H
          / \  \
        I   J    K
                

Sample output: [A, B, E, F, I, J, C, D, G, K, H]
 */

/*
object visual representation:
{
  A: [B, C, D],  ===> A is array of arrays with depth/ level/ height 3 
  B: [E, F],
  F: [I, J],
  D: [G, H],
  G: [K]
}

*/

class TreeNode {
  constructor(name) {
    this.name = name;
    this.children = [];
  }
  addChild(node) {
    this.children.push(node);
    return this;
  }
  depthFirstSearch(array) {
    array.push(this.name);
    // console.log(`I'm in the ${this.name}`);
    for(let child of this.children) {
      child.depthFirstSearch(array)
    }
    return array;
  }
}

const graph = new TreeNode("A");
graph.addChild(new TreeNode("B")).addChild(new TreeNode("C")).addChild(new TreeNode("D"));
graph.children[0].addChild(new TreeNode("E")).addChild(new TreeNode("F"));
graph.children[2].addChild(new TreeNode("G")).addChild(new TreeNode("H"));
graph.children[0].children[1].addChild(new TreeNode("I")).addChild(new TreeNode("J"));
graph.children[2].children[0].addChild(new TreeNode("K"));
const test1 = [];
graph.depthFirstSearch(test1);

// Test

console.log(`The result array is: ${test1}`);