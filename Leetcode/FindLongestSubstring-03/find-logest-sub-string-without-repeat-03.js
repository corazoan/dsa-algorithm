//Brute force O(n^2)

var lengthOfLongestSubstring = function (s) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    let tmpAns = 0;
    const map = new Map();
    for (let j = i; j < s.length; j++) {
      if (!map.has(s[j])) {
        map.set(s[j], j);
        tmpAns += 1;
      } else {
        break;
      }
    }
    if (tmpAns > answer) {
      answer = tmpAns;
    }
  }

  return answer;
};

//Linear O(n)

var lengthOfLongestSubstring2 = function (s) {
  let maxLength = 0;
  let i = 0;
  const subString = new Set();
  for (let j = 0; j < s.length; ) {
    let currentElement = s[j]
    if (!subString.has(currentElement)) {
      subString.add(currentElement);
      let tmpLength = j + 1 - i;
      maxLength = maxLength < tmpLength ? tmpLength : maxLength;
      j++;
    } else {
      subString.delete(s[i]);
      i++;
    }
  }
  return maxLength;
};
