function end(str, target) {
var strLength = str.length;
var targetLength = target.length;
var subStart = strLength - targetLength;

console.log("string length: " + strLength);
console.log("target length: " + targetLength);
console.log("start location: " + subStart);
console.log("substr test:" + str.substr(subStart, targetLength));

  if ( str.substr(subStart, targetLength) === target) {
    return true;
  } else {
    return false;
  }
}
end('Bastian', 'n');

