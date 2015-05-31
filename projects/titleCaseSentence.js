function titleCase(str) {
  var titleWords = str.toLowerCase().split(" ");
  var quickWord = "";
  var finalWords = [];
  /* loop through the words array for each word */
  for (var i = 0; i < titleWords.length; i++ ) {
    quickWord = titleWords[i];
    console.log(quickWord);
    finalWords.push(quickWord.charAt(0).toUpperCase() + quickWord.substring(1)); 
  }
  return finalWords.join(" ");
}
titleCase("I'm a little TEA pOT for the ages of time");

/* Return the provided string with the first letter of each word capitalized.
For the purpose of this exercise, you should also 
capitalize connecting words like 'the' and 'of'. */