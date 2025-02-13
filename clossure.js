function return_clossure() {
  let cache = {};
  return function cloosure(n) {
    if (n in cache) {
      return cache.n;
    }
    console.log("long time");
    cache[n] = n + 10;
    return cache[n];
  };
}

const memozie = return_clossure();
console.log(memozie(4));
console.log(memozie(9));
console.log(memozie(8));
console.log(memozie(4));
