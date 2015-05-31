function titleCase(str) {
  var titleWords = str.split(" ");
  console.log("Titleword array: " + titleWords);
  var quickWord = "";
  var finalWords = [];
  /* loop through the words array for each word */
  for (var i = 0; i < titleWords.length; i++ ) {
    quickWord = titleWords[i];
    console.log(quickWord);
    finalWords.push(quickWord.charAt(0).toUpperCase() + quickWord.substring(1)); 
  }
  return finalWords;
}
titleCase("I'm a little tea pot for the ages of time");

/* Return the provided string with the first letter of each word capitalized.
For the purpose of this exercise, you should also 
capitalize connecting words like 'the' and 'of'. */