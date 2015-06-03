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
