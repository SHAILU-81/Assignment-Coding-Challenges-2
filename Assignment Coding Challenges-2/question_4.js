function extractFirstSecondLast(arr) {
    const [first, second, ...rest] = arr;
    const last = rest.pop();
    return [first, second, last];
  }
//   usage of this function:
const arr = [1, 2, 3, 4, 5];
const result = extractFirstSecondLast(arr); // [1, 2, 5]
console.log(result);
