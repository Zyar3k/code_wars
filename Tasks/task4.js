/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:
solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']

*/

// My solution
function solution(str) {
  let result = [];
  for (let i = 0; i < str.length; i += 2) {
    result.push(str.substring(i, i + 2));
  }
  if (str.length % 2 !== 0) {
    result[result.length - 1] += "_";
  }

  return result;
}

solution("abcafafafaa");

// Shorter Solution
// function solution(s){
//     return (s+"_").match(/.{2}/g)||[]
//  }
/*
  const { assert } = require('chai');
  
  describe("Split Strings", () => {
    it("Basic tests", () => {
      assert.deepEqual(solution("abcdef"), ["ab", "cd", "ef"]);
      assert.deepEqual(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
      assert.deepEqual(solution(""), []);
    });
  });
  */
