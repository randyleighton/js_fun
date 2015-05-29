function findLongestWord(str) {
  words = str.split(" ")
  testWord = ""
  largestWord = ""
  for (var i=0; i< words.length; i++ ) {
    console.log(words[i])
      if (words[i].length > largestWord.length ) {
        largestWord = words[i]
      }
  }
  return largestWord;
}

findLongestWord('The quick brown fox jumped over the lazy dog');

/* This is to find the longest word and then return the length of that word*/