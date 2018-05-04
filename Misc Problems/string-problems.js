// Find the First Non-repeated character in a string


// Reverse a String iteratively and recursively


// Check if a string is composed of all unique characters

// Determine if 2 strings are anagrams
function isAnagram(str1, str2) {
    // split into arrays
    let smaller, larger;
    let isAnagram = true;

    if (str1.length <= str2.length) {
        smaller = str1.split('')
        larger = str2.split('')
    } else {
        smaller = str2.split('')
        larger = str1.split('')
    }

    smaller.forEach(letter => {
        let index = larger.indexOf(letter)
        if(index < 0) isAnagram = false;
        else larger.splice(index, 1)
    })

    return isAnagram;
}
// console.log(isAnagram('megaman', 'manga'))
// console.log(isAnagram('megaman', 'ice'))
// console.log(isAnagram('paleo', 'leopard'))
// console.log(isAnagram('paly', 'leopard'))
//-------------------------------------------------------------------------


// Check if string is a palindrome
function isPalindrome(str) {
    if (str.split('').reverse().join('') === str) return true;
    else return false;
}

