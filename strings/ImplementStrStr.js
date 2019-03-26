// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2

var strStr = function(haystack, needle) {
    if (needle.length == 0) {
        return 0

        for (var i = 0; i < haystack.length; i++) {
            if (haystack.indexOf(needle) !== -1) {
                return haystack.indexOf(needle)
            }
        }
        return -1
    }
}
