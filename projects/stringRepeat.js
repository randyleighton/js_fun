function repeat(str, num) {
newstr=""
if (num >= 1) {
  console.log("number +")
  for (var i = 0 ; i < num ; i++) {
    newstr = newstr + str
    console.log("new string: " + newstr)
  } 
}

  return newstr;
}
repeat('abc', 3);

/* Repeat a given string (first argument) n times (second argument). 
Return an empty string if n is a negative number.*/