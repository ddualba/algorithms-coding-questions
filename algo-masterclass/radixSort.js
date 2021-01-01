// *** Only works with whole numbers / Integers

// PSEUDOCODE
// - Define a function that accepts list of numbers
// - Figure out how many digits the largest number has
// - Loop from k = 0 up to this largest number of digits
// - For each iteration of the loop:
//  * Create buckets for each digit (0 to 9)
//  * Place each number in the corresponding bucket based on its kth digit
// - Replace our existing array with values in our buckets, starting with 0 up to 9
// - return list at the end

// let digitBuckets = Array.from({ length: 10 }, () => [])
// This creates array, with 10 empty sub arrays

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));

// *** HELPER FUNCTIONS ***

// returns the digit in num at the given place value
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// returns the number of digits in num
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// given an array of numbers, returns the number of digits
// in the largest numbers in the list
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// mostDigits([23, 567, 89, 12234324, 90]);
