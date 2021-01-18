class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
  contains(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
}

var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);

// Insert Psuedocode
// -----------------
// Create a new node
// Starting at the root
// - Check if there is a root, if not - the root now becomes that new node!
// - If there is a root, check if the value of the new node is greater than or less than the value of the root
// - If it is greater
//   * Check to see if there is a node to the right
//     * If there is, move to that node and repeat these steps
//     * If there is not, add that node as the right property
// - If it is less
//   * Check to see if there is a node to the left
//     * If there is, move to that node and repeat these steps
//     * If there is not, add that node as the left property

// Find Node Psuedocode
// --------------------
// Starting at the root
//  - Check if there is a root, if not - we're done searching!
//  - If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done!
//  - If not, check to see if the value is greater than or less than the value of the root
//  - If it is greater
//    * Check to see if there is a node to the right
//      * If there is, move to that node and repeat these steps
//      * If there is not, we're done searching!
//  - If it is less
//    * Check to see if there is a node to the left
//      * If there is, move to that node and repeat these steps
//      * If there is not, we're done searching!
