export function capitalize(string) {
  if (typeof(string) !== 'string') {
    throw new Error(`Expected a string as argument but received ${string}`);
  }
  if (string === '') return '';
  string = string[0].toUpperCase() + string.slice(1, string.length);
  return string;
}