// Given a word, you need to judge whether the usage of capitals in it is right or not.

// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Otherwise, we define that this word doesn't use capitals in a right way.


// Example 1:

// Input: "USA"
// Output: True

// Example 2:

// Input: "FlaG"
// Output: False

// Understand: 
// All letter must be all capitalized, all letter must be all lowercased, or only the first letter must be capitalized


var detectCapitalUse = function (word) {
    let countCapitalWords = 0

    for (let i = 0; i < word.length; i++) {

        if (word[i] === word[i].toUpperCase()) {
            countCapitalWords++
        }
    }

    if (countCapitalWords === word.length || countCapitalWords === 0) {
        return true
    } else if (countCapitalWords === 1) {

        if (word[0] === word[0].toUpperCase()) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

console.log(detectCapitalUse("USA"))         //true
console.log(detectCapitalUse("Leetcode"))    //true
console.log(detectCapitalUse("Google"))      //true
console.log(detectCapitalUse("g") )          //true
console.log(detectCapitalUse("fffffffffG") ) //false







