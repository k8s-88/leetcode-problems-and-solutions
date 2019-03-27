// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true

var isValid = function(s) {
    let openings = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
            openings.push(s[i])
        }
        else if (s[i] === ")") {
            if (openings[openings.length - 1] === "(") {
                openings.pop()
            }
            else {
                return false
            }
        }
        else if (s[i] === "]") {
            if (openings[openings.length - 1] === "[") {
                openings.pop()
            }
            else {
                return false
            }
        }
        else if (s[i] === "}") {
            if (openings[openings.length - 1] === "{") {
                openings.pop()
            }
            else {
                return false
            }
        }
    }
    return openings.length === 0
}
