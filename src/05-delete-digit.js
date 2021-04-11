/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n.toString().split('').map(Number);
  const digit = Math.min(...str);
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    if (digit < str[i] || digit === str[i + 1]) {
      arr.push(str[i]);
    }
  }
  return +arr.join('');
}

module.exports = deleteDigit;
