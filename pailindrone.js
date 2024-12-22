const isPalindrome = (x) => {
  let input = String(x);
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== input[input.length - (1 + i)]) {
      return false;
    }
  }
  return true;
};

const result = isPalindrome(121);
console.log(result);
