let caclculation = 0;
const fibonaci = (n) => {
  caclculation++;
  if (n < 2) return n;

  return fibonaci(n - 1) + fibonaci(n - 2);
};

console.log(fibonaci(3));
console.log("calculation", caclculation);
// 0 1 1 2 3 5 8 13 21
