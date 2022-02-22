/*
The rgb function is incomplete. Complete it so that passing
in RGB decimal values will result in a hexadecimal representation
being returned. Valid decimal values for RGB are 0 - 255.
Any values that fall out of that range must be rounded
to the closest valid value.

Note: Your answer should always be 6 characters long,
the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3

// Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value
*/

// My solution
function rgb(r, g, b) {
  // complete this function
  const hex = (x) => {
    if (x > 255) {
      x = 255;
    } else if (x < 0) {
      x = 0;
    }
    const hex = x.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };
  const result = `#${hex(r).toUpperCase()}${hex(g).toUpperCase()}${hex(
    b
  ).toUpperCase()}`;

  return result;
}

// different solution
// function rgb(r, g, b){
//   return toHex(r)+toHex(g)+toHex(b);
// }

// function toHex(d) {
//     if(d < 0 ) {return "00";}
//     if(d > 255 ) {return "FF";}
//     return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
// }

rgb(173, 255, 47);

/*
  describe("Tests", () => {
    it("Basic Tests", () => {
      Test.assertEquals(rgb(0, 0, 0), '000000')
      Test.assertEquals(rgb(0, 0, -20), '000000')
      Test.assertEquals(rgb(300,255,255), 'FFFFFF')
      Test.assertEquals(rgb(173,255,47), 'ADFF2F')
    });
  });
  */
