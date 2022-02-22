/*
There is a secret string which is unknown to you.
Given a collection of random triplets from the string,
recover the original string.

A triplet here is defined as a sequence of three letters such
that each letter occurs somewhere before the next in the given string.
"whi" is a triplet for the string "whatisup".

As a simplification, you may assume that no letter occurs
more than once in the secret string.

You can assume nothing about the triplets given to you other
than that they are valid triplets and that they contain sufficient
information to deduce the original string.
In particular, this means that the secret string will never contain
letters that do not occur in one of the triplets given to you.

*/
const triplets1 = [
  ["t", "u", "p"],
  ["w", "h", "i"],
  ["t", "s", "u"],
  ["a", "t", "s"],
  ["h", "a", "p"],
  ["t", "i", "s"],
  ["w", "h", "s"],
];

const recoverSecret = function (triplets) {
  let double = [];
  let res = "";

  triplets.forEach((triplet) => {
    let string = triplet.join("");
    let char1 = string.substring(0, 2);
    let char2 = string.substring(1, 3);

    if (double.indexOf(char1) === -1) double.push(char1);
    if (double.indexOf(char2) === -1) double.push(char2);
  });

  let nextToFind = findNext(double);
  while (nextToFind) {
    res += nextToFind;
    double = double.filter((char) => char.indexOf(nextToFind) === -1);
    nextToFind = findNext(double);
  }

  return res;
};

function findNext(arrayOfString) {
  let nextChar = arrayOfString.find((char) =>
    arrayOfString.every((char2) => char[0] !== char2[1])
  );

  const result = arrayOfString.length > 1 ? nextChar[0] : arrayOfString[0];
  return result;
}

console.log(recoverSecret(triplets1));
/*
  describe("Tests", () => {
    it("test", () => {
  secret1 = "whatisup"
  triplets1 = [
    ['t','u','p'],
    ['w','h','i'],
    ['t','s','u'],
    ['a','t','s'],
    ['h','a','p'],
    ['t','i','s'],
    ['w','h','s']
  ]
  
  Test.assertEquals(recoverSecret(triplets1), secret1)
    });
  });
  */
