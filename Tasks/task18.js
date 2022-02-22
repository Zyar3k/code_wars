/*
How many ways can you make the sum of a number?

From wikipedia: https://en.wikipedia.org/wiki/Partition_(number_theory)#

    In number theory and combinatorics, a partition of a positive integer n,
    also called an integer partition,
    is a way of writing n as a sum of positive integers.
    Two sums that differ only in the order of their summands are considered
    the same partition. If order matters, the sum becomes a composition.
    For example, 4 can be partitioned in five distinct ways:

4
3 + 1
2 + 2
2 + 1 + 1
1 + 1 + 1 + 1

Examples
Basic

sum(1) // 1
sum(2) // 2  -> 1+1 , 2
sum(3) // 3 -> 1+1+1, 1+2, 3
sum(4) // 5 -> 1+1+1+1, 1+1+2, 1+3, 2+2, 4
sum(5) // 7 -> 1+1+1+1+1, 1+1+1+2, 1+1+3, 1+2+2, 1+4, 5, 2+3

sum(10) // 42

Explosive

sum(50) // 204226
sum(80) // 15796476
sum(100) // 190569292

See here for more examples.

*/
function sum(num) {
  let cache = [];
  function split(num, add) {
    if (num < 1 || add < 1) return 0;
    if (num == 1 || add == 1) return 1;
    if (num < add) {
      if (cache[num] === undefined) {
        cache[num] = [];
      }
      if (!cache[num][num]) {
        cache[num][num] = split(num, num);
      }
      return cache[num][num];
    }
    if (num == add) {
      if (cache[num] === undefined) {
        cache[num] = [];
      }
      if (!cache[num][add - 1]) {
        cache[num][add - 1] = split(num, add - 1);
      }
      return cache[num][add - 1] + 1;
    }
    if (num > add) {
      if (cache[num] == undefined) {
        cache[num] = [];
      }
      if (!cache[num][add - 1]) {
        cache[num][add - 1] = split(num, add - 1);
      }
      if (cache[num - add] == undefined) {
        cache[num - add] = [];
      }
      if (!cache[num - add][add]) {
        cache[num - add][add] = split(num - add, add);
      }
      return cache[num][add - 1] + cache[num - add][add];
    }
  }
  const result = split(num, num);
  return result;
}

console.log(sum(100));
/*
  describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(sum(1), 1);
  Test.assertEquals(sum(2), 2);
  Test.assertEquals(sum(3), 3);
  Test.assertEquals(sum(4), 5);
  
  Test.assertEquals(sum(5), 7);
  
  Test.assertEquals(sum(10), 42);
    });
  });
  */
