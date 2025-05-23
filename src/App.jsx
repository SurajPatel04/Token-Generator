import React, { useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import ChatInputBox from "../src/components/ChatInputBox";
import OutputBox from "../src/components/OutputBox";
import GitHubIcon from "@mui/icons-material/GitHub";

import TokenIcon from "@mui/icons-material/Token";
import generateToken from "../src/utils/tokenGenerator";
const App = () => {
  const [text, setText] = useState("");
  const [tokens, setTokens] = useState([]);
  const handleSubmit = (inputText) => {
    setText(inputText);
    const generatedTokens = generateToken(inputText);
    setTokens(generatedTokens);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
        }}
      >
        <Stack direction="row">
          <TokenIcon sx={{ fontSize: 32 }} />
          <Typography variant="h5">Token View</Typography>
        </Stack>
        <a
          href="https://github.com/SurajPatel04/Token-Generator"
          target="_blank"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <GitHubIcon
            sx={{
              fontSize: 32,
            }}
          />
        </a>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",

          gap: 4, // space between the two cards
          p: 4,
        }}
      >
        <ChatInputBox onSubmit={handleSubmit} />
        <OutputBox text={text} tokens={tokens} />
      </Box>
    </>
  );
};

export default App;
