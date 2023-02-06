function isLGSeven(number) {
  if (arguments.length === 0 || arguments.length > 1) {
    return "Error: This function can't accept more than one or less than one parameter.";
  } else if (!number) {
    return "Error: This function can't accept undefined or empty value";
  } else if (typeof number !== "number") {
    return "Error: This function only accept number.";
  } else {
    const subtractNum = number - 7;
    if (subtractNum < 7) {
      return subtractNum;
    } else {
      return number * 2;
    }
  }
}
console.log(isLGSeven("10"));

// Input : 6

// Output: -1

// Input: -15

// Output: -22

// Input: 15
// Output: 30

// to test exceptions
// 1) put empty or undefined
// 2) send more or less than 1 parameter
// 2) send any type but number
