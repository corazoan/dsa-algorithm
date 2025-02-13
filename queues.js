class queues {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.length = 1;
    this.tail = this.head;
  }

  enqueue(value) {
    let newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
}
