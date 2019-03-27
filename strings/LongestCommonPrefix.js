// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"

var longestCommonPrefix = function(strs) {
    let longestPrefix = '';
    if (strs.length > 0) {
        longestPrefix = strs[0];
        for (let i = 1; i < strs.length; i++) {
            for (let j = 0; j < longestPrefix.length; j++) {
                if (strs[i][j] != longestPrefix[j]) {
                    longestPrefix = longestPrefix.slice(0, j)
                }
            }
        }
    }
    return longestPrefix
}
