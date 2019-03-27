// Write a function that takes a string as input and reverse only the vowels of a string.

// Example 1:

// Input: "hello"
// Output: "holle"


var reverseVowels = function(str) {
    let vowelsToReverse = []
    const Vowels = "aeoiuAEOIU"
    strArr = str.split("")
    for (let i = 0; i < strArr.length; i++) {
        if (Vowels.indexOf(strArr[i]) !== -1) {
            vowelsToReverse.push(strArr[i])
        }
    }
    let lastIndex = vowelsToReverse.length - 1
    for (let i = 0; i < strArr.length; i++) {
        if (Vowels.indexOf(strArr[i]) !== -1) {
            strArr[i] = vowelsToReverse[lastIndex]
            lastIndex--
        }
    }
    return strArr.join("")
}
