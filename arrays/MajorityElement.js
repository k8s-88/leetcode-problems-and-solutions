// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Example 1:

// Input: [3,2,3]
// Output: 3


var majorityElement = function(nums) {
    obj = {}
    for (let i = 0; i < nums.length; i++) {
        if (!obj[nums[i]]) {
            obj[nums[i]] = 1
        }
        else {
            obj[nums[i]] += 1
        }
    }
    return Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
};
