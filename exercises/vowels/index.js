// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;

// function vowels(str) {
//   let count = 0;
//   let check = ['a', 'e', 'i', 'o', 'u'];

//   // loop thru str
//   for (char of str.toLowerCase()) {
//     if (check.includes(char)) {
//       count = count + 1;
//     }
//   }

//   return count;
// }
