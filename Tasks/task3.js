"use strict";
/*
Write a function, persistence, that takes in a positive
parameter num and returns its multiplicative persistence,
which is the number of times you must multiply the digits in num
until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
*/

// My Solution
function persistence(num) {
  //code me
  let array = num.toString().split("");
  let count = 0;
  while (array.length > 1) {
    let result = 1;
    for (let i = 0; i < array.length; i++) {
      result *= parseInt(array[i]);
    }
    array = result.toString().split("");
    count++;
  }

  return count;
}

// Better Solution
// function persistence(num) {
//   var times = 0;

//   num = num.toString();

//   while (num.length > 1) {
//     times++;
//     num = num
//       .split("")
//       .map(Number)
//       .reduce((a, b) => a * b)
//       .toString();
//   }

//   return times;
// }

persistence(999);

/*
 const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Persistent Bugger.", () => {
  it("Fixed tests", () => {
    assert.strictEqual(persistence(39),3);
    assert.strictEqual(persistence(4),0);
    assert.strictEqual(persistence(25),2);
    assert.strictEqual(persistence(999),4);
  });
});
 
 */
