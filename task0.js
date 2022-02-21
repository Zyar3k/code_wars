/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6
and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below
the number passed in. Additionally, if the number is negative, return 0
(for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

*/
// FIXME: doesn't work properly
// function solution(number) {
//   const arrayOfTenNumberBelowNumber = [];
//   for (let i = number - 10; i < number; i++) {
//     if (i > 0) {
//       arrayOfTenNumberBelowNumber.push(i);
//     }
//   }
//   console.log("arrayOfTenNumberBelowNumber", arrayOfTenNumberBelowNumber);
//   const getPositiveNumbers = (array) => {
//     return array.filter((number) => number > 0);
//   };

//   let numberDivisibleByThree = arrayOfTenNumberBelowNumber.filter(
//     (number) => number % 3 === 0
//   );
//   let numberDivisibleByFive = arrayOfTenNumberBelowNumber.filter(
//     (number) => number % 5 === 0
//   );
//   getPositiveNumbers(numberDivisibleByThree);
//   console.log("by 3", numberDivisibleByThree);
//   getPositiveNumbers(numberDivisibleByFive);
//   console.log("by 5", numberDivisibleByFive);
//   const combinedArray = [
//     ...numberDivisibleByThree,
//     ...numberDivisibleByFive.filter(
//       (val) => !numberDivisibleByThree.includes(val)
//     ),
//   ];
//   console.log("combinedArray", combinedArray);

//   const sum = [...combinedArray].reduce((acc, val) => acc + val, 0);
//   console.log("sum", sum);
//   return sum;
// }

// solution(100000);
