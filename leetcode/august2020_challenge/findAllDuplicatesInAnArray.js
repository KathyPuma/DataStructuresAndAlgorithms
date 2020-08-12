// 1.Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), 
// some elements appear twice and others appear once.
// 2.Find all the elements that appear twice in this array.
// 3.Could you do it without extra space and in O(n) runtime?



// Example 1:
// Input: [4, 3, 2, 7, 8, 2, 3, 1]
// Output: [2, 3]



var findDuplicates = function (nums) {
    let hash = {}
    let dupArr = []


    for (let i = 0; i < nums.length; i++) {
        if (!hash[nums[i]]) {
            hash[nums[i]] = 1
        } else {
            hash[nums[i]] += 1
        }
    }

    for (key in hash) {
        if (hash[key] > 1) {
            dupArr.push(key)
        }
    }
    return dupArr
};

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])) //[ '2', '3' ]
console.log(findDuplicates([])) //[]