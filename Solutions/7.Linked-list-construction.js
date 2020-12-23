/**
 * List types:
 *  - SINGLY LINKED LIST
 *  - DOUBLE LINKED LIST
 *  - CIRCULAR LINKED LIST
 * Operations: (HINT: this is STACK )
 *    setHead  Time O(1) | Space O(1)
 *    setTail  Time O(1) | Space O(1)
 *    insertBefore  Time O(1) | Space O(1)
 *    insertAfter  Time O(1) | Space O(1)
 *    insertAtPosition  Time O(P) | Space O(1) => P is node position
 *    removeNodesWithValue  Time O(n) | Space O(1)
 *    remove  Time O(1) | Space O(1)
 *    containsNodeWithValue  Time O(n) | Space O(1)
 */

//Implementation of Double linked list

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  containsNodeWithValue(value) {
    let currentNode = this.head;
    while (currentNode && currentNode.value !== value) {
      currentNode = currentNode.next;
    }
    return currentNode !== null;
  }
  remove(node) {
    
  }
}

const testList = new DoubleLinkedList();
console.log(testList.containsNodeWithValue("test"));

// class SinglyLinkedList {
//   constructor(headNode) {
//     this.head = new ListNode(headNode);
//   }
//   addNew(node) {
//     let currentNode = this.head;
//     while (currentNode.next) {
//       currentNode = currentNode.next;
//     }
//     currentNode.next = new ListNode(node);
//   }
//   printList() {
//     let currentNode = this.head;
//     while (currentNode) {
//       console.log(currentNode.value);
//       currentNode = currentNode.next;
//     }
//   }
//   delete(node) {
//     let currentNode = this.head;
//     let previousNode = null;

//     do {
//       if (currentNode.value === node) {
//         if (!previousNode) {
//           this.head = this.head.next;
//           break;
//         }
//         previousNode.next = currentNode.next;
//         break;
//       }
//       previousNode = currentNode;
//       currentNode = currentNode.next;
//     } while (currentNode);

//     return this;
//   }
//   clearList() {
//     this.head = null;
//     return this;
//   }
//   insertAfter(node, value) {
//     let currentNode = this.head;
//     do {
//       if (currentNode.value === node) {
//         let newNode = new ListNode(value);
//         newNode.next = currentNode.next;
//         currentNode.next = newNode;
//         return this;
//       }
//       currentNode = currentNode.next;
//     } while (currentNode);
//   }
//   insertBefore(node, value) {
//     let currentNode = this.head;
//     let previousNode = null;
//     do {
//       if (currentNode.value === node) {
//         if (!previousNode) {
//           this.head = new ListNode(value);
//           this.head.next = currentNode;
//           break;
//         }
//         const newNode = new ListNode(value);
//         previousNode.next = newNode;
//         newNode.next = currentNode;
//         break;
//       }
//       previousNode = currentNode;
//       currentNode = currentNode.next;
//     } while (currentNode);
//     return this;
//   }
// }

// const myList = new SinglyLinkedList("mirza");
// myList.addNew("ado");
// myList.addNew("benjo");
// myList.addNew("seki");
// myList.printList();
// // myList.delete('benjo')
// // myList.delete('mirza')
// // myList.clearList();
// // myList.insertBefore("benjo", "gaza");
// // myList.insertBefore("mirza", "gaza");
// // myList.insertAfter("seki", "gaza");
// console.log("\n After action performed \n");
// myList.printList();
// // console.log(myList);
