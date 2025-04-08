function generatToken(text) {
  let tokens = [];

  for (let i = 0; i < text.length; i++) {
    tokens.push(text.charCodeAt(i));
  }

  return tokens;
}

export default generatToken;
