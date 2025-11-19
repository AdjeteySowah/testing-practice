export function caesarCipher(str, shift) {
  if (typeof(str) !== 'string') throw new Error('Input must be a string');
  if (!Number.isFinite(shift) || shift < 0) throw new Error('Input must be a positive finite number');

  const lowercase = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const out = [];

  for (const ch of str) {
      // check lowercase
    let i = lowercase.indexOf(ch);
    if (i !== -1) {   // if ch is not found in lowercase, -1 will be returned
      const newIndex = (i + shift) % 26;
      out.push(lowercase[newIndex]);
      continue;
    }
      // check uppercase
    i = uppercase.indexOf(ch);
    if (i !== -1) {   // if ch is not found in uppercase, -1 will be returned
      const newIndex = (i + shift) % 26;
      out.push(uppercase[newIndex]);
      continue;
    }
      // non-alphabetic: push as-is
    out.push(ch);
  }

  return out.join('');
}
