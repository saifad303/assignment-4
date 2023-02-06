function gemsToDiamond(p1, p2, p3) {
  if (arguments.length === 0 || arguments.length > 3 || arguments.length < 3) {
    return "Error: This function can't accept more than three or less than three parameters.";
  } else if (
    typeof p1 !== "number" ||
    typeof p2 !== "number" ||
    typeof p3 !== "number"
  ) {
    return "Error: This function only accept number.";
  } else if (!p1 || !p2 || !p3 || p1 <= 0 || p2 <= 0 || p3 <= 0) {
    return "Error: This function can't accept undefined, negative or zero value as parameters.";
  } else {
    let totalDiamond = p1 * 21 + p2 * 32 + p3 * 43;
    if (totalDiamond > 2000) {
      return totalDiamond - 2000;
    } else {
      return totalDiamond;
    }
  }
}

console.log(gemsToDiamond(100, 5, 1));

// Input: 1, 1, 1

// Output: 96

// Input: 20, 200, 50

// Output: 6970

// Input: 100, 5, 1

// Output: 303

// my test for exception
/*
input:
1) call empty arg fun, less or more than three values
2) call with 0, undefined or negative number.
3) call with any type but number.
*/
