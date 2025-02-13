// var rob = function(nums) {
//   index = 0;
//   let max = (max, )=>{

//   }
// }
//
//

function arrSum(array) {
  return function sum(max, secondMax, index) {
    console.log("index", index);
    console.log(`max ${max} second max ${secondMax}`);
    if (index === 0) {
      console.log("index = 0");
      if (array[index] > array[index + 1])
        return sum(max + array[index], secondMax + array[index + 1], index + 2);
      return sum(max + array[index + 1], secondMax + array[index], index + 3);
    }
    if (secondMax + array[index - 1] > max + array[index]) {
      console.log("second max loop");
      return sum(secondMax + array[index - 1], max + array[index], index + 1);
    }

    if (index === array.length - 1) {
      console.log("first");
      return max + array[index];
    } else if (index === array.length - 2) {
      if (max + array[index] < secondMax + array[index + 1]) {
        console.log("second");

        return secondMax + array[index + 1];
      }
      console.log("third");

      return max + array[index];
    }
  };
}

let findSum = arrSum([]);
let result = findSum(0, 0, 0);
console.log(result);
