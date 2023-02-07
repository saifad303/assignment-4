/*
  Definition: function gemsToDiamond will take 3 parameter and multiply each value by 21, 32, 43 sequentially, and stores the sum of all into totalDiamond. If totalDiamond will be greater than 2000, the function will return the 
  totalDiamond which would be decreased by 2000. If it is less than 2000, then the function will return only the subtracted value.

  Exception: Errors would happen if we send certain values as parameters. Such as, Calling the function
  1. without sending any parameters.
  2. send more than or less than 3 parameter.
  3. Parameters can't be undefined.
  4. send parameter of any other type except Number.
*/

function gemsToDiamond(p1, p2, p3) {
  if (arguments.length === 0 || arguments.length > 3 || arguments.length < 3) {
    return "Error: The function can't accepts more than three or less than three parameters.";
  } else if (
    typeof p1 !== "number" ||
    typeof p2 !== "number" ||
    typeof p3 !== "number"
  ) {
    return "Error: The function only accepts number.";
  } else if (!p1 || !p2 || !p3) {
    return "Error: The function can't accept undefined value as parameters.";
  } else {
    let totalDiamond = p1 * 21 + p2 * 32 + p3 * 43;
    if (totalDiamond > 2000) {
      return totalDiamond - 2000;
    } else {
      return totalDiamond;
    }
  }
}

console.log(gemsToDiamond(1, 1, 1));

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
