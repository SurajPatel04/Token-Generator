import React, { useState } from "react";
import { Box, Card, CardContent, Typography, Stack } from "@mui/material";

const OutputBox = (props) => {
  return (
    <Card sx={{ width: 500, minHeight: "80vh", borderRadius: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Output
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Tokens Count: 7
        </Typography>
        <Stack spacing={2}>
          <Box
            sx={{
              flexGrow: 1,
              minHeight: "30vh",
              border: "0.5px solid #C4C4C4",
              borderRadius: 2,
              pl: 2,
            }}
          >
            {props.text !== "" && (
              <h5>
                <span style={{ color: "red" }}>{"<start> "}</span>
                {props.text}
                <span style={{ color: "red" }}>{" <end>"}</span>
              </h5>
            )}
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              minHeight: "28vh",
              border: "0.5px solid #C4C4C4",
              borderRadius: 2,
              pl: 2,
            }}
          >
            {props.tokens.length > 0 && (
              <h5>
                {"[ "}
                {props.tokens.map((token, index) => (
                  <span key={index}>
                    {token}
                    {props.tokens.length - 1 !== index && " | "}
                  </span> // Display each token in a span
                ))}
                {" ]"}
              </h5>
            )}
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default OutputBox;
