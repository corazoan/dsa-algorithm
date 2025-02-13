var addTwoNumbers = function (l1, l2) {
  let pointer1 = l1;
  let pointer2 = l2;
  let borrow = 0;
  let head = new ListNode(0);
  let tail = head;

  while (true) {
    //When both number is defined
    if (pointer1 === null && pointer2 === null) {
      break;
    }
    if (pointer1 !== null && pointer2 !== null) {
      let element = pointer1.val + pointer2.val + borrow;
      if (element >= 10) {
        const newNode = new ListNode(element % 10);
        tail.next = newNode;
        tail = newNode;
        borrow = 1;
      } else {
        const newNode = new ListNode(element);
        tail.next = newNode;
        tail = newNode;
        borrow = 0;
      }
      pointer1 = pointer1.next;
      pointer2 = pointer2.next;
    }

    //if upper linked list is become undefined (short arr)
    if (pointer1 === null && pointer2 !== null) {
      let element = pointer2.val + borrow;
      if (element >= 10) {
        const newNode = new ListNode(element % 10);
        tail.next = newNode;
        tail = newNode;
        borrow = 1;
      } else {
        const newNode = new ListNode(element);
        tail.next = newNode;
        tail = newNode;
        borrow = 0;
      }
      pointer2 = pointer2.next;
    }

    if (pointer1 !== null && pointer2 === null) {
      let element = pointer1.val + borrow;
      if (element >= 10) {
        const newNode = new ListNode(element % 10);
        tail.next = newNode;
        tail = newNode;
        borrow = 1;
      } else {
        const newNode = new ListNode(element);
        tail.next = newNode;
        tail = newNode;
        borrow = 0;
      }
      pointer1 = pointer1.next;
    }

    //if both pointer is last then break the loop

    //When one of the pointer 1 have other value and pointer 2 is have last element
  }
  if (borrow) {
    const newNode = new ListNode(borrow);
    tail.next = newNode;
    tail = newNode;
  }
  return head.next;
};
