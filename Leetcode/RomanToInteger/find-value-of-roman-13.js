const romanToInt = (s) => {
  const values = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let result = 0;

  for (let i = 0; i < s.length; ) {
    const current = values[s[i]];
    const next = values[s[i]] || 0;
    result += next > current ? next - current : current;
    i += next > current ? 2 : 1;
  }

  return result;
};
