// Count the number of segments in a string, where a segment is defined to be a contiguous sequence of non-space characters.

// Please note that the string does not contain any non-printable characters.

// Example:

// Input: "Hello, my name is John"
// Output: 5

var countSegments = function(str) {
    let res = []
    let strArr = str.trim().split(" ")
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] !== ("")) {
            res.push(strArr[i])
        }
    }
    return res.length
}
