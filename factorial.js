// const findFactorial = (value, answer = 1) => {
//   answer = answer * value;
//   if (value === 2) return answer;
//   return findFactorial(value - 1, answer);
// };
// const result = findFactorial(2);
// console.log(result);

//different

// const findFactorial2 = (val) => {
//   if (val === 2) {
//     return val;
//   }

//   return val * findFactorial2(val - 1);
// };

// const result2 = findFactorial2(5);
// console.log(result2);

// reverse a string:

const reverseString = (string) => {
  if (string.length === 1) {
    return string;
  }
  return (
    string[string.length - 1] +
    reverseString(string.slice(0, string.length - 1))
  );
};

const result = reverseString("hello");
console.log(result);
