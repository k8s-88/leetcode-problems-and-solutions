// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true

var isPalindrome = function(str) {
    str = str.replace(/\W/g, "")
    if (str.length == 0) {
        return true
    }
    if (str.toLowerCase() == str.split("").reverse().join("").toLowerCase()) {
        return true
    }
    else {
        return false
    }
}
