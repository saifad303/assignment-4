/*
  Definition: function findingBadData will take 1 parameter, and it must be an array. The function will return how many negative values the array has. For instance, If the array is containing [1, -2, -3], then the 
  function will return 2 as an amount of bad data. If the array has nothing but all positive values then the function will return 0.

  Exception: Errors would happen if we send certain values as parameters. Such as, Calling the function
  1. without sending any parameters.
  2. send more than than 1 or empty parameter.
  3. Parameters can't be undefined.
  4. send parameter of any other type except Array object.
  5. Each array element should be a number.
*/

function findingBadData(arr) {
  if (arguments.length === 0 || arguments.length > 1) {
    return "Error: This function can't accept more than one or empty parameter.";
  } else if (Array.isArray(arr) !== true) {
    return "Error: This function only accept Array object.";
  } else {
    let countBadNum = 0;
    for (const element of arr) {
      if (element < 0) {
        countBadNum++;
      }

      if (element === undefined || typeof element !== "number") {
        return "Error: this array can't contain undefined or any other type. It can only contains number.";
      }
    }
    return countBadNum;
  }
}
console.log(findingBadData([1, 2, 3, 4]));

// Input: [ 1,2,5 ]

// Output: 0

// Input: [ 2, -5, -7, -13 ]

// Output: 3

// Input: [ -4, -9, -5, -33, -55 ]

// Output: 5
