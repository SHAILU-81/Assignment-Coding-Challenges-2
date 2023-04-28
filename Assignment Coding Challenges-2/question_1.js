function countWords(string) {
 
  const wordCounts = {};

  const words = string.split(' ');

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word in wordCounts) {
      wordCounts[word]++;
    } else {
      wordCounts[word] = 1;
    }
  }
  return wordCounts;
}

// we can use this function like this:

const string = "The quick brown fox jumps over the lazy dog";
const wordCounts = countWords(string);
console.log(wordCounts);

// This will output:
{ The: 1, quick: 1, brown: 1, fox: 1, jumps: 1, over: 1, the: 1, lazy: 1, dog: 1 }


