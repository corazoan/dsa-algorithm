const bubble_short = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i + 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp_var = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp_var;
      }
    }
  }

  return arr;
};

const shorted_arr = bubble_short([]);
console.log(shorted_arr);
