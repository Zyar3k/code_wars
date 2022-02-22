/*
Take the following IPv4 address: 128.32.10.1

This address has 4 octets where each octet is a single byte (or 8 bits).

    1st octet 128 has the binary representation: 10000000
    2nd octet 32 has the binary representation: 00100000
    3rd octet 10 has the binary representation: 00001010
    4th octet 1 has the binary representation: 00000001

So 128.32.10.1 == 10000000.00100000.00001010.00000001

Because the above IP address has 32 bits, we can represent it as the unsigned 32 bit
number: 2149583361

Complete the function that takes an unsigned 32 bit number
and returns a string representation of its IPv4 address.
Examples

 ==> "128.32.10.1"
32         ==> "0.0.0.32"
0          ==> "0.0.0.0"

*/
// My solution
function int32ToIp(int32) {
  //...
  const octet1 = int32 >>> 24;
  const octet2 = (int32 >>> 16) & 255;
  const octet3 = (int32 >>> 8) & 255;
  const octet4 = int32 & 255;
  return `${octet1}.${octet2}.${octet3}.${octet4}`;
}

// Shortest solution
const int32ToIp = int32 => [24, 16, 8, 0].map(e => int32 >> e & 255).join('.');

console.log(int32ToIp(2149583361));
int32ToIp(2154959208);
/*
  describe("Tests", () => {
    it("test", () => {
  Test.assertEquals( int32ToIp(2154959208), "128.114.17.104", "wrong ip for interger: 2154959208") 
  Test.assertEquals( int32ToIp(0), "0.0.0.0", "wrong ip for integer: 0")
  Test.assertEquals( int32ToIp(2149583361), "128.32.10.1", "wrong ip for integer: 2149583361")
    });
  });
  */
