
/*
Build Tower

Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

    Python: return a list;
    JavaScript: returns an Array;
    C#: returns a string[];
    PHP: returns an array;
    C++: returns a vector<string>;
    Haskell: returns a [String];
    Ruby: returns an Array;
    Lua: returns a Table;

Have fun!

for example, a tower of 3 floors looks like below

[
  '  *  ', 
  ' *** ', 
  '*****'
]

and a tower of 6 floors looks like below

[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
]

Go challenge Build Tower Advanced once you have finished this :)
*/

// FAILED

// Correct solution
function towerBuilder(n) {
    return Array.from({ length: n }, function (v, k) {
      console.log("n-k", n - k, "|| N", n, "|| k", k);
      console.log();
      console.log();
      const spaces = " ".repeat(n - k - 1);
      return spaces + "*".repeat(k + k + 1) + spaces;
    });
  }
  
  // console.table(towerBuilder(8));
  towerBuilder(3);
  
  /*
  describe("Tests", () => {
    it("test", () => {
  Test.assertDeepEquals(towerBuilder(1), ["*"]);
  Test.assertDeepEquals(towerBuilder(2), [" * ","***"]);
  Test.assertDeepEquals(towerBuilder(3), ["  *  "," *** ","*****"]);
    });
  });
  */
  