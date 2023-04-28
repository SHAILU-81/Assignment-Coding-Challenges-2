function findMinMax(arr) {
    return {
      max: Math.max(...arr),
      min: Math.min(...arr)
    };
  }
//   We can call this function with an array of numbers, like this: 
const arr = [5, 2, 7, 1, 9];
const result = findMinMax(arr);
console.log(result); // { max: 9, min: 1 }
