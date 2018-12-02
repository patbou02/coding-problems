"use strict";

let input = [1, 2, 3, 4, 5];

function productOfArrayElements(arrIn) {
  let arrOut = [];

  for (let i = 0; i < arrIn.length; i++) {
    let prod = 1;
    for (let j = arrIn.length - 1; j >= 0; j--) {
      if (i !== j) {
        prod = prod * arrIn[j];
      }
    }
    arrOut[i] = prod;
  }

  return console.log(arrOut);
}

productOfArrayElements(input);