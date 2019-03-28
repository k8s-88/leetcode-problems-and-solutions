// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.


function maximumSubarray(nums) {
    maxHere = nums[0]
    maxSoFar = nums[0]

    for (let i = 1; i < nums.length; i++) {
        maxHere = Math.max(nums[i], nums[i] + maxHere)
        maxSoFar = Math.max(maxHere, maxSoFar)
    }
    return maxSoFar
}
console.log(maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
