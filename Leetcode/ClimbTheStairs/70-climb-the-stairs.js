let cache = {};
var climbStairs = function (n) {
  if (n in cache) {
    return cache[n];
  }
  if (n <= 3) {
    cache[n] = n;
    return cache[n];
  }
  cache[n] = climbStairs(n - 1) + climbStairs(n - 2);
  return cache[n];
};

const result = climbStairs(45);
console.log(result);
