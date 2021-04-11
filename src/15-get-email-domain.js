/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
// eslint-disable-next-line consistent-return
function getEmailDomain(email) {
  const arr = email.split('');
  const c = '@';
  const domain = [];
  // eslint-disable-next-line for-direction
  for (let i = arr.length - 1; i < arr.length; i--) {
    if (arr[i] !== c) {
      domain.unshift(arr[i]);
    } else if (arr[i] === c) {
      return domain.join('');
    }
  }
}

module.exports = getEmailDomain;
