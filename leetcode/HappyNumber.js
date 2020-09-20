// Write an algorithm to determine if a number n is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

// Return True if n is a happy number, and False if not.

// Example: 

// Input: 19
// Output: true
// Explanation: 
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1




const isHappy = (n) => {
    let hash = {};

    while (n > 1) {
        n += '';

        let cur = 0;
        for (let i = 0; i < n.length; i++) {
            cur += n[i] * n[i];
        };
        if (hash[cur]) {
            return false;
        } else {
            hash[cur] = true;
        };
        n = cur;
    };
    return true;

};

console.log(isHappy(19))