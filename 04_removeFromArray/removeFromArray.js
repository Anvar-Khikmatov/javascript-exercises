
const removeFromArray = function (array, ...param) {

  let harom =  array.filter(items => !param.includes(items))
    return harom;
  

 
// --- bad complexitiy -- //

//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < param.length; j++) {
//       if (array[i] === param[j]) {
//         array.splice(i, 1)
//         i--;
//       }
//     }
// }

//   return array;



}

// Do not edit below this line
module.exports = removeFromArray;
