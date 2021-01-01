'%c Oh my heavens! ', 'background: #222; color: #bada55';

function xmas(n) {
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

  // xmas tree stump
  for (let row = 0; row < 4; row++) {
    let level = '';

    for (let column = 0; column < 2 * n - 1; column++) {
      let add;
      if (column >= midpoint - 2 && column <= midpoint + 2) {
        add = '#';
      } else {
        add = ' ';
      }
      level += add;
    }
    console.log(level);
  }
}

console.log(xmas(3));

module.exports = xmas;
