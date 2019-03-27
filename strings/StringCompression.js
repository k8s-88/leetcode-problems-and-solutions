// Given an array of characters, compress it in-place.

// The length after compression must always be smaller than or equal to the original array.

// Every element of the array should be a character (not int) of length 1.

// After you are done modifying the input array in-place, return the new length of the array.

 
// Follow up:
// Could you solve it using only O(1) extra space?

 
// Example 1:

// Input:
// ["a","a","b","b","c","c","c"]

// Output:
// Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]

function compress(chars) {
    let obj = {}
    let res = []
    for (var i = 0; i < chars.length; i++) {
        if (!obj[chars[i]]) {
            obj[chars[i]] = 1
        }
        else {
            obj[chars[i]] += 1
        }
    }
    for (var i = 0; i < chars.length; i++) {
        if (res.indexOf(chars[i]) == -1) {
            res.push(chars[i])
            res.push(obj[chars[i]].toString())
        }
    }
    return res
};
console.log(compress(["a","a","b","b","c","c","c"]))

// not working - not sure why!