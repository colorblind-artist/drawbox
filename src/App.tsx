import React from "react";
import { lessons } from "./data/lessons";
import { Lesson } from "./Lesson";
import { Box } from "@mui/material";
import { Sidenav } from "./Sidenav";

export const App = (): React.ReactElement => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidenav />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          overflow: "scroll",
          height: "100vh",
          width: "100%",
        }}
      >
        {lessons.map((l, i) => (
          <Lesson key={i} lesson={l} />
        ))}
      </Box>
    </Box>
  );
};
