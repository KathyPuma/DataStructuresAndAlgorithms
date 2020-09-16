// Given a non-empty array of integers, every element appears twice except for one. 
// Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. 
// Could you implement it without using extra memory?


// Example 1:

// Input: [2,2,1]
// Output: 1
// Example 2:

// Input: [4,1,2,1,2]
// Output: 4


const singleNumber = (nums) => {
    let counter = {}

    for (let i = 0; i < nums.length; i++) {

        if (!counter[nums[i]]) {
            counter[nums[i]] = 1

        } else {
            counter[nums[i]] += 1
        }
    }


    for (key in counter) {
        if (counter[key] === 1) {
            return key
        }
    }

    return singleNum
};
console.log(singleNumber([4,1,2,1,2]))