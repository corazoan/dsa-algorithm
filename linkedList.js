// let linkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 12,
//       next: {
//         value: 16,
//         next: {
//           value: 12,
//           next: null,
//         },
//       },
//     },
//   },
// };

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.length = 1;
    this.tail = this.head;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  get(value) {
    let tmpPointer = this.head;
    let index = 1;
    while (tmpPointer != null) {
      if (tmpPointer.value === value) {
        console.log("i have to do this time itearation", index);
        return value;
      }
      tmpPointer = tmpPointer.next;
      index++;
    }
    return null;
  }

  prepend(value) {
    let newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  insert(index, value) {
    let tmpNode = this.head;
    for (let i = 0; i < index - 2; i++) {
      tmpNode = tmpNode.next;
    }
    console.log("tmpNode", tmpNode);
    let newNode = {
      value: value,
      next: tmpNode.next,
    };
    tmpNode.next = newNode;
    this.length++;
    return this;
  }

  printList() {
    let tmpPointer = this.head;
    const array = [];
    while (true) {
      array.push(tmpPointer.value);
      if (tmpPointer.next === null) {
        break;
      }
      tmpPointer = tmpPointer.next;
    }
    console.log(array);
  }

  reverse() {}
}

let myLinkedList = new LinkedList(4);
// myLinkedList.prepend(5);
// myLinkedList.insert(1, 78);
// myLinkedList.append(20201299);
// myLinkedList.get(78);
myLinkedList.printList();
