/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word.
Leave punctuation marks untouched.
Examples:

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/
// My Solution
function pigIt(str) {
  //Code here
  const array = [];
  array.push(str.split(" "));

  for (let i = 0; i < array.length; i++) {
    let result = "";
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j].match(/[a-zA-Z]/)) {
        result +=
          array[i][j].substring(1) + array[i][j].substring(0, 1) + "ay ";
      } else {
        result += array[i][j];
      }
      result += "";
    }
    array[i] = result.trim();
  }
  const pig = array.join(" ");
  return pig;
}

pigIt("Luke I am your father");

// Shorter Solution
// function pigIt(str) {
//   return str.replace(/(\w)(\w*)(\s|$)/g, "$2$1ay$3");
// }

/*
  describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay')
  Test.assertEquals(pigIt('This is my string'),'hisTay siay ymay tringsay')
  });
  });
  
  */
