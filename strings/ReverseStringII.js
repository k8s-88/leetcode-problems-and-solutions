// Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string. If there are less than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.
// Example:
// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"

function reverseString(s, k) {
    str = s.split("")
    res = []
    first = 0
    last = 2 * k
    subString = []
    for (let i = 0; i < str.length; i += 2*k) {
        reversed = str.slice(i, k).reverse().concat(str.slice(k, 2 * k))
        subString.push(reversed)
    }
    return subString
}
console.log(reverseString("abcdefgf", 2))


// var v = new Array("a","b","c","d","e","f");
// var newArr = v.splice(0,2).concat(v.reverse()); // get the first 2 out of the array
// console.log(newArr);
