/**
 * Write a function named gcd1 that implements algorithm 1 here
 */

// accepts a & b, non-negative integers
function gcd1(a, b) {
  // if a is zero, the gcd of a and b is b so return b
  if (a === 0) return b;
  // if b is zero, the gcd of a and b is a so return a
  if (b === 0) return a;

  // while b is not 0 do
  while (b != 0) {
    // let r be the remainder of dividing a by b
    let r = a % b;
    // set a to equal b
    a = b;
    // set b to equal r
    b = r;
  }
  // return a
  return a;
}

/**
 * Write a function named gcd2 that implements algorithm 2 here
 */

// accepts a & b, non-negative integers
function gcd2(a, b) {
  // if (a < 0 || b < 0) return

  // if a is zero, the gcd of a and b is b so return b
  if (a === 0) return b;
  // if b is zero, the gcd of a and b is a so return a
  if (b === 0) return a;

  // initialize an array named divA with the value [1, a]
  let divA = [1, a];
  // initialize an array named divB with the value [1, b]
  let divB = [1, b];
  // initialize an empty array named common
  let common = [];
  let num = 0;

  // for i = 2 to a - 1 do:
  for (let i = 2; i < a - 1; i++) {
    // if a can be divided by i without a remainder
    if (a % i === 0) {
      // add i to the array divA
      divA.push(i);
    }
  }
  // for i = 2 to b - 1 do
  for (let i = 2; i < b - 1; i++) {
    // if b can be divided by i without a remainder then
    if (b % i === 0) {
      // add i to the array divB
      divB.push(i);
    }
  }

  // for each number n in the array divA do:
  divA.forEach((n) => {
    // if n is in the array divB then
    if (divB.includes(n)) {
      // add n to the array common
      common.push(n);
    }
  });

  // initialize a variable named largest to the smallest possible number
  let largest = Math.min(...common);
  // for each number n in commmon do:
  common.forEach((n) => {
    // if n is greater than largest, assign largest the value n
    if (n > largest) largest = n;
  });
  // return largest
  return largest;
}

module.exports = { gcd1, gcd2 };