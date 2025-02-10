const sumAll = function(par1, par2) {


  
                        // --- Messy code -- ///
    // if (par1 < 0 || par2 < 0) {
    //     return 'ERROR';
    //   } else if ((par1 * 10) % 10 != 0 || (par2 * 10) % 10 != 0) {
    //     return 'ERROR'
    //   } else if (typeof(par1) !== "number" || typeof(par2) !== "number" ) {
    //     return 'ERROR'
    //   }
   
    // if (par1 - par2 > 0) {
    //     highestNum = par1;
    //     smallestNum = par2;
    
    //   } else if (par2 - par1 > 0){
    //     highestNum = par2;
    //     smallestNum = par1;
    //   }
    
    //   let i = smallestNum;
    //   let sum = smallestNum;
    
  
                // --- RECOMENDED --- ///
  if ((par1 < 0 || par2 < 0) || typeof(par1) !== 'number' ||
        typeof(par2) !== 'number' ) {
    return 'ERROR'
  }

  if (!(Number.isInteger(par1) && Number.isInteger(par2)))
    return 'ERROR';

  let highestNum = Math.max(par1, par2);
  let smallestNum = Math.min(par1, par2);
  let i = smallestNum;
  let sum = smallestNum;

  
      while (i < highestNum) {
        i++;
        sum += i;
        
      }
     
      return sum;

  


  
    }

// Do not edit below this line
module.exports = sumAll;
