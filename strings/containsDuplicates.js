function containsDuplicates(str) {
    let obj = {}
    for (let i = 0; i < str.length; i++) {
        if (!obj[str[i]]) {
            obj[str[i]] = true
        }
        else {
            return true
        }
    }
    return false
}
console.log(containsDuplicates("abbcde"))


function containsMoreThanThreeDuplicates(str) {
    let obj = {}
    for (let i = 0; i < str.length; i++) {
        if (!obj[str[i]]) {
            obj[str[i]] = 1
        }
        else {
            obj[str[i]] += 1
            if (obj[str[i]] > 3) {
                return true
            }
        }
    }
    return false
}
console.log(containsMoreThanThreeDuplicates("aaabcde"))
