function insertion_sort(array) {
  let sorted_array_last_index = 0;
  for (let i = 0; i < array.length; i++) {
    let x = array[i];
    let y = array[i + 1];
    if (x > y) {
      for (let j = sorted_array_last_index; j >= 0; j--) {
        if (array[j] > y) {
          let tmp = array[j];
          array[j] = y;
          array[i + 1] = tmp;
        }
      }
      sorted_array_last_index++;
    }
  }
  return array;
}

// let n = 5;
// for (let i = n; i >= 0; i--) {
//   console.log(i);
// }

const result = insertion_sort([7, 2, 9, 62, 28, 1, 5, 3, 8, 3, 9, 1, 1, 6]);
console.log(result);
