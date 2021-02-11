// Remove all elements from a linked list of integers that have value val.

// Example:
// Input:  1->2->6->3->4->5->6, val = 6
// Output: 1->2->3->4->5

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

var removeElements = function (head, val) {
    let prev = null
    let curr = head;

    while (curr !== null) {

        if (curr.val === val) {
            if (prev === null) {
                head = curr.next;
            } else {
                prev.next = curr.next;
            }
        } else {
            prev = curr;
        }

        curr = curr.next;

    }

    return head;
};