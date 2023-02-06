/*

*/
function mindGame(positiveNum) {
  if (arguments.length === 0 || arguments.length > 1) {
    return "Error: This function can't accept more than one or less than one parameter.";
  } else if (positiveNum <= 0 || !positiveNum) {
    return "Error: This function can't accept undefined, negative or zero value as parameter.";
  } else if (typeof positiveNum !== "number") {
    return "Error: This function only accept number.";
  } else {
    let result = (positiveNum * 3 + 10) / 2 - 5;
    return result;
  }
}

console.log(mindGame(5));

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
