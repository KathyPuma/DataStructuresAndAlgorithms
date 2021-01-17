// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. 
// Return the linked list sorted as well.


// Input: head = [1,1,2]
// Output: [1,2]

// Input: head = [1,1,2,3,3]
// Output: [1,2,3]

// Constraints:

// The number of nodes in the list is in the range [0, 300].
// -100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order.

var deleteDuplicates = function (head) {
    if (!head) {
        return head;
    }
    let currentNode = head.next;
    let prev = head;

    while (currentNode) {
        if (currentNode.val !== prev.val) {
            prev.next = currentNode;
            prev = currentNode;
        }
        currentNode = currentNode.next;
    }
    prev.next = null;
    return head
};
