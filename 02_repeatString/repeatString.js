const repeatString = function (string, times) {
    let outputString = "";
    if (times < 0)
        return 'ERROR'
        
    let i = 0;
    while (i < times) {
        outputString += string;
        i++;
    }
    return outputString;
}
// Do not edit below this line
module.exports = repeatString;
 