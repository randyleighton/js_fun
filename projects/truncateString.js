function truncate(str, num) {
  var newStr = "";
  if (str.length > num) {
    newStr = str.slice(0, num - 3) + "...";
    return newStr;
  } else {
    return str;
  }
}
truncate('A-tisket a-tasket A green and yellow basket', 11);

// Test if num is lower or = then dont truncate
// truncate('nachos', 6);
// truncate('nachos are good', 20);