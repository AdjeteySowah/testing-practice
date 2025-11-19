export function reverseString(string) {
  if (typeof(string) !== 'string') {
    throw new Error(`Expected a string as argument but received ${string}`);
  }
  if (string === '') return '';
  string = string.split('').reverse().join('');
  return string;
}