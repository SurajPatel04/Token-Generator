import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@mui/material";

const ChatInputBox = (props) => {
  const [input, setInput] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const clickHandle = () => {
    props.onSubmit(input);
    console.log(input);
  };
  return (
    <Card sx={{ width: 500, minHeight: "80vh", borderRadius: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Input
        </Typography>
        <TextField
          multiline
          rows={4}
          fullWidth
          placeholder="Write Here"
          variant="outlined"
          sx={{ mb: 2 }}
          onChange={handleInput}
        />
        <Button
          variant="contained"
          fullWidth
          sx={{
            bgcolor: "#333",
            "&:hover": {
              bgcolor: "#337",
            },
          }}
          onClick={clickHandle}
        >
          Submit
        </Button>
      </CardContent>
    </Card>
  );
};

export default ChatInputBox;
