/*
  Definition: function isLGSeven will subtract it's value by 7. If the result would be less than 7 then the function would return the subtract value. If the result would be more than 7 then the
  function would return subtract value by multiplying 2 with it.

  Exception: Errors would happen if we send certain values as parameters. Such as, Calling the function
  1. without sending any parameters.
  2. send more than one parameter.
  3. Parameters can't be undefined.
  4. send parameter of any other type except Number.
*/

function isLGSeven(number) {
  if (arguments.length === 0 || arguments.length > 1) {
    return "Error: The function can't accept more than one or empty parameter.";
  } else if (!number) {
    return "Error: The function can't accept undefined or empty value";
  } else if (typeof number !== "number") {
    return "Error: The function only accept number.";
  } else {
    const subtractNum = number - 7;
    if (subtractNum < 7) {
      return subtractNum;
    } else {
      return number * 2;
    }
  }
}
console.log(isLGSeven(6));

// Input : 6

// Output: -1

// Input: -15

// Output: -22

// Input: 15
// Output: 30
