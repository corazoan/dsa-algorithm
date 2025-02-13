// const fibonacci = (n) => {
//   let firstPrev = 0;
//   let secondPrev = 1;
//   if (n === 0) {
//     return firstPrev;
//   }
//   if (n === 1) {
//     return secondPrev;
//   }
//   for (let i = 2; i < n; i++) {
//     let tmp = firstPrev;
//     firstPrev = secondPrev;
//     secondPrev += tmp;
//   }
//   return secondPrev + firstPrev;
// };
const fibonacci = (n) => {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  let answer = 0;
  return result + fibonacci(n - 1);
};
const result = fibonacci(1);
console.log(result);
