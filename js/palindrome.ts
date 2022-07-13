function isPalindrome(value: string): boolean {
  const letters = value.split("");
  const midpoint = Math.floor(letters.length / 2);

  let valid = false;

  for (let i = 0; i < midpoint; i++) {
    valid = letters[i] === letters[letters.length - (i + 1)];
  }

  return valid;
}
