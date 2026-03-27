// 5! = 5 * 4 * 3 * 2 * 1
// 5! = 5 *4!

function facRecursion(number){
    if (number === 1){
     return 1;
     }
      return number * facRecursion(number - 1);

    }
console.log(facRecursion(5));