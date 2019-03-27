// Given a word, you need to judge whether the usage of capitals in it is right or not.

// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital if it has more than one letter, like "Google".
// Otherwise, we define that this word doesn't use capitals in a right way.
// Example 1:
// Input: "USA"
// Output: True
// Example 2:
// Input: "FlaG"
// Output: False


var detectCapitalUse = function(str) {
    for (let i = 0; i < str.length; i++) {
        if (str == str.toUpperCase()) {
            return true
        }
        else if (str == str.toLowerCase()) {
            return true
        }
        else if (str[0] == str[0].toUpperCase() && str.slice(1) == str.slice(1).toLowerCase()) {
            return true
        }
        else {
            return false
        }
    }
};
