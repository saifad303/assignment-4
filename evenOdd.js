/*
  Definition: function evenOdd will take 1 parameter as string, and count the number of characters that the string has. If the string has odd number of characters then the function will return odd. If the string has even number of characters then the function will return even.

  Exception: Errors would happen if we send certain values as parameters. Such as, Calling the function
  1. without sending any parameters.
  2. send more than one parameter.
  3. Parameters can't be undefined.
  4. send parameter of any other type except string.
*/
function evenOdd(str) {
  if (arguments.length === 0 || arguments.length > 1) {
    return "Error: The function can't accept empty or more than one parameter.";
  } else if (!str) {
    return "Error: The function can't accept undefined or empty string.";
  } else if (typeof str !== "string") {
    return "Error: The function only accepts string.";
  } else {
    const strLength = str.length;
    if (strLength % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  }
}

console.log(evenOdd("10 "));

// Input: ‘Phero’

// Output: odd

// Input: ‘Batch7’

// Output: even

// Input: ‘chatgpt’

// Output: odd
