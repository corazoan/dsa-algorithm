const selection_sort = (array) => {
  let small_number;
  let small_number_index;
  for (let i = 0; i < array.length; i++) {
    small_number = array[i];
    for (let j = i; j < array.length; j++) {
      if (j === 0 || small_number > array[j]) {
        small_number = array[j];
        small_number_index = j;
      }
    }

    let tmp = array[i];
    array[i] = small_number;
    array[small_number_index] = tmp;
    console.log("small no.", small_number);
    console.log("sm index", small_number_index);
  }
  return array;
};

const result = selection_sort([5, 3, 8, 3, 9, 1, 1, 6]);
console.log(result);
