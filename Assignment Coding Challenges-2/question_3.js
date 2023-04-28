function swapValues(x, y) {
    [x, y] = [y, x];
    return [x, y];
  }

//   how we can use this function:

let a = 5;
let b = 10;
// Before swap
console.log( a, b); // Before swap: a = 5 , b = 10

[a, b] = swapValues(a, b);
// After swap
console.log( a,  b); // After swap: a = 10 , b = 5
