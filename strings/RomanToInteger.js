// Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

// Example 1:

// Input: "III"
// Output: 3
// Example 2:

// Input: "IV"
// Output: 4

var romanToInt = function(s) {

    Romans = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    total = 0
    for (var i = s.length - 1; i >= 0; i--) {
        total += Romans[s[i]];
        if (Romans[s[i]] > Romans[s[i - 1]]) {
            total -= Romans[s[i - 1]]
            i--
        }
    }
    return total
}
