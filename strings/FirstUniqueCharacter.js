// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.


var firstUniqueCharacter = function(str) {
    var obj = {}
    for (let i = 0; i < str.length; i++) {
        if (!obj[str[i]]) {
            obj[str[i]] = 1
        }
        else {
            obj[str[i]] += 1
        }
    }
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]] == 1) {
            return i
        }
    }
}
