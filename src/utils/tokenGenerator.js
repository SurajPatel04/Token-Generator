function generatToken(text) {
  const tokens = [];
  let hold = 0;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    if (/[^a-zA-Z0-9]/.test(char)) {
      if (hold !== 0) {
        tokens.push(hold);
        hold = 0;
      }
      tokens.push(text.charCodeAt(i));
    } else {
      hold += text.charCodeAt(i);
    }
  }

  if (hold !== 0) {
    tokens.push(hold);
  }

  return tokens;
}

export default generatToken;
