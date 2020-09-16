// Given a string S of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.
// We repeatedly make duplicate removals on S until we no longer can.
// Return the final string after all such duplicate removals have been made.  
// It is guaranteed the answer is unique.

// Example 1:
// Input: "abbaca"
// Output: "ca"

// Explanation: 
// For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  
// The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".




// let input =  "abbaca"
// let output =  "ca"


const removeDuplicates = (str) => {
    let stack = []

    for (let i = 0; i < str.length; i++) {
        if (str[i] === peek(stack, str[i])) {
            stack.pop()
        } else {
            stack.push(str[i])
        }
    }
    return stack.join("")

};


const peek = (stack) => {
    return stack[stack.length - 1]
}

console.log(removeDuplicates("abbaca"))