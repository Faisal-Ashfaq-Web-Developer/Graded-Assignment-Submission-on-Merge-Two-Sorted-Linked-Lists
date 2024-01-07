// Corrected ListNode class
class ListNode {
    constructor(value = 0, next = null) {  // Corrected here
      this.value = value;
      this.next = next;
    }
  }
  
  // Function to merge two sorted lists
  function mergeTwoLists(l1, l2) {
    const dummy = new ListNode();
    let current = dummy;
  
    while (l1 && l2) {
      if (l1.value < l2.value) {
        current.next = l1;
        l1 = l1.next;
      } else {
        current.next = l2;
        l2 = l2.next;
      }
      current = current.next;
    }
  
    current.next = l1 || l2;
    return dummy.next;
  }
  
  // Helper function to create a linked list from an array of values
  function createLinkedList(values) {
    const dummy = new ListNode();
    let current = dummy;
    for (const value of values) {
      current.next = new ListNode(value);
      current = current.next;
    }
    return dummy.next;
  }
  
  // Helper function to convert linked list to an array
  function linkedListToArray(head) {
    const arr = [];
    while (head) {
      arr.push(head.value);
      head = head.next;
    }
    return arr;
  }
  
  // Create two sorted linked lists
  const l1 = createLinkedList([1, 2, 4]);
  const l2 = createLinkedList([1, 3, 4]);
  
  // Merge the two lists
  const mergedList = mergeTwoLists(l1, l2);
  
  // Convert the merged linked list back to an array to display it
  const mergedListAsArray = linkedListToArray(mergedList);
  console.log(mergedListAsArray);
  