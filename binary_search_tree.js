class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}
class binarySearchTree {
  constructor(value) {
    this.root = new Node(value);
  }

  insert(value) {
    let tmpPointer = this.root;
    let newNode = new Node(value);
    while (true) {
      if (value < tmpPointer.value) {
        if (tmpPointer.left === null) {
          tmpPointer.left = newNode;
          break;
        }
        tmpPointer = tmpPointer.left;
      } else {
        if (tmpPointer.right === null) {
          tmpPointer.right = newNode;
          break;
        }
        tmpPointer = tmpPointer.right;
      }
    }
    return this;
  }

  lookup(value) {
    let level = 0;
    let currentNode = this.root;
    while (true) {
      if (currentNode.value === value) {
        return `${value} found at level:- ${level}`;
      }
      if (currentNode.value > value) {
        if (currentNode.left === null) {
          return `${value} not found`;
        }
        currentNode = currentNode.left;
      } else {
        if (currentNode.right === null) {
          return `${value} not found.`;
        }
        currentNode = currentNode.right;
      }
      level++;
    }
  }

  remove(value) {
    this.node;
  }

  traverse() {
    return this.traverseNode(this.root);
  }

  traverseNode(node) {
    if (!node) return null;

    return {
      value: node.value,
      left: this.traverseNode(node.left),
      right: this.traverseNode(node.right),
    };
  }
}

let myBinaryTree = new binarySearchTree(8);
myBinaryTree.insert(5);
myBinaryTree.insert(10);
myBinaryTree.insert(112);
myBinaryTree.insert(128);
myBinaryTree.insert(2);
myBinaryTree.insert(4);
const result = myBinaryTree.insert(-2);
const value = myBinaryTree.lookup(128);
const value2 = myBinaryTree.lookup(14);
console.log(result);
console.log(value);
console.log(value2);
console.log(JSON.stringify(myBinaryTree.traverse()));
