const reverseString = function (string) {
    let output = "";
    let i = 0;
    let j = string.length - 1;
  
    while (i < string.length) {
      output = output + string.charAt(j--);
      i++;
    }
  
    return output;
  }
// Do not edit below this line
module.exports = reverseString;
