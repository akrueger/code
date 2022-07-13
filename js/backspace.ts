function compareStrings(s1: string, s2: string) {
  const s1Prime = backspaceIt(s1.split("")).join("");
  const s2Prime = backspaceIt(s2.split("")).join("");

  return s1Prime === s2Prime ? 1 : 0;
}

function backspaceIt(input: string[]): string[] {
  const output: string[] = [];
  input.forEach((element: string) => {
    if (element === "#") {
      output.pop();
    } else {
      output.push(element);
    }
  });

  return output;
}
