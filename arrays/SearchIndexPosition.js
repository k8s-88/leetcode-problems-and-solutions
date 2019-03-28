// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Example 1:

// Input: [1,3,5,6], 5
// Output: 2
// Example 2:

// Input: [1,3,5,6], 2
// Output: 1


function removeIndex(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums.indexOf(target) !== -1) {
            return nums.indexOf(target)
        }
        else {
            nums.push(target);
            nums.sort((a, b) => a - b)
            return nums.indexOf(target)
        }
    }
}
console.log(removeIndex([1, 3, 6], 5))
