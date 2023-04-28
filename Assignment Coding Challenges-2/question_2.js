function removeDuplicates(arr) {
    return Array.from(new Set(arr));
  }

//   We can call this function with an array of numbers, like this:
const numbers = [1, 2, 2, 3, 3, 3, 4, 5, 5];
const uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]
