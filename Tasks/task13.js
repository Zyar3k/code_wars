/*
Given the string representations of two integers,
return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'

A string representation of an integer will contain
no characters besides the ten numerals "0" to "9".

*/
// Error with big arguments
// const sumStrings =(a, b)=> (Number(a) + Number(b)).toString();

// My solution
function sumStrings(a, b) {
  let arg1 = a;
  let arg2 = b;
  while (arg1.length > 1 && arg1[0] === "0") arg1 = arg1.slice(1);
  while (arg2.length > 1 && arg2[0] === "0") arg2 = arg2.slice(1);
  arg1 = arg1.split("").reverse().join("");
  arg2 = arg2.split("").reverse().join("");

  let add = 0,
    ans = "";
  for (
    let i = 0, len = arg1.length > arg2.length ? arg1.length : arg2.length;
    i < len;
    i++
  ) {
    let a = i < arg1.length ? Number(arg1[i]) : 0,
      b = i < arg2.length ? Number(arg2[i]) : 0;

    let c = a + b + add;
    ans += c % 10;
    add = c >= 10 ? 1 : 0;
  }

  if (add) ans += add;
  return ans.split("").reverse().join("");
}

sumStrings("3", "5");
console.log(
  sumStrings("712569312664357328695151392", "8100824045303269669937")
);

// shorter solution
function sumStrings(a, b) {
  var res = "",
    c = 0;
  a = a.split("");
  b = b.split("");
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop();
    res = (c % 10) + res;
    c = c > 9;
  }
  return res.replace(/^0+/, "");
}
/*
  describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(sumStrings('123','456'),'579')
    });
  });
  
  */
