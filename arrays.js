console.log('Arrays');

// Challenge 1
// Write a function that takes an array and an index and prints out that value

// challenge 2
// Write a function that takes an array of something and tells you if the name 'Greg' is in that array


// Challenge #3
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// Console true if the given string is a palindrome. Otherwise, console false.

const isItPalindrome = (str) => {
    const arrayFromString = str.split('')
    const reversedArray = arrayFromString.reverse()
    const opposite = reversedArray.join('')

    // const opposite = str.split('').reverse().join('')

    if (str === opposite) {
        return true
    } else {
        return false
    }
}

console.log(isItPalindrome('cat'));
console.log(isItPalindrome('racecar'));