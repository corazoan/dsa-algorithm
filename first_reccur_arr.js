//using hash map
const first_recur_arr = (array) => {
  let collection = new Map();
  let index = 0;
  while (index < array.length) {
    if (collection.get(array[index]) === undefined) {
      const result = collection.set(array[index], index);
    } else {
      return array[index];
    }
    index++;
  }

  return false;
};

const result = first_recur_arr([2, 5, 1, 2, 3, 5, 1, 2, 4]);
console.log(result);

//using brute force

const firstRecure = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        return array[i];
      }
    }
  }
  return undefined;
};

const result1 = firstRecure([2, 5, 1, 2, 3, 5, 1, 2, 4]);
console.log(result1);
