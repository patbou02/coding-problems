"use strict";

let input = [1, 2, 3, 4, 5];
let out = [];

for (let i = 0; i < input.length; i++) {
  let prod = 1;
  for (let j = input.length - 1; j >= 0; j--) {
    if (i !== j) {
      prod = prod * input[j];
    }
  }
  out[i] = prod;
}
console.log(out);