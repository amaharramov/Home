'use strict';

let n = 5;
let m = -3;
let limit = 100;
let count = 0;

let nNegative = n < 0 ? true : false;
let mNegative = m < 0 ? true : false;

if (nNegative) n *= -1;
if (mNegative) m *= -1;

outer: for (let i = 0; i <= n; i++) {
  for (let j = 0; j <= m; j++) {
    let first = i;
    let second = j;

    if (nNegative && i != 0) first = -i;
    if (mNegative && j != 0) second = -j;

    count++;
    if (count === limit) break outer;
    else console.log(first, second);
  }
}
