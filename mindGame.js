/*
  Definition: function mindGame can sum a number by 10, multiply by 3, subtract by 5, and divide by 2

  Exception: Errors would happen if we send certain values as parameters. Such as, Calling the function
  1. without sending any parameters.
  2. send more than one parameter.
  3. Parameters can't be undefined or negative.
  4. send parameter of any other type except Number.
*/
function mindGame(positiveNum) {
  if (arguments.length === 0 || arguments.length > 1) {
    return "Error: The function can't accept more than one and empty parameter.";
  } else if (positiveNum < 0 || positiveNum === undefined) {
    return "Error: The function can't accept undefined, negative value as parameter.";
  } else if (typeof positiveNum !== "number") {
    return "Error: The function only accept number.";
  } else {
    let result = (positiveNum * 3 + 10) / 2 - 5;
    return result;
  }
}

console.log(mindGame(-10));

// Input: 5

// Output: 7.5

// Input: 50

// Output: 75

// Input: 33

// Output: 49.5

// to test exceptions
// 1) put zero and negative number or undefined
// 2) send more or less than 1 parameter
// 2) send any type but number
