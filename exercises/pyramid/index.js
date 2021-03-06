// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  let midpoint = Math.floor((2 * n - 1) / 2);
  for (let row = 0; row < n; row++) {
    //reset the level variable to empty each loop
    let level = '';

    for (let column = 0; column < 2 * n - 1; column++) {
      // check range if should add # or ' ', check midpoint
      let add;
      if (column >= midpoint - row && column <= midpoint + row) {
        add = '#';
      } else {
        add = ' ';
      }
      level += add;
    }
    console.log(level);
  }
}

console.log(pyramid(10));

module.exports = pyramid;
