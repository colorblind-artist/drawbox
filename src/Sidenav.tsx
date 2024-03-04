import { Box, Link, List, ListItem, Typography } from "@mui/material";
import React from "react";
import { lessons } from "./data/lessons";
import { LessonExerciseID, LessonID } from "./navigation";

export const Sidenav = (): React.ReactElement => {
  return (
    <Box sx={{ minWidth: "20%" }}>
      <List>
        {lessons.map((l) => (
          <ListItem
            key={l.title}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Typography>
              <Link variant="h6" href={"#" + encodeURIComponent(LessonID(l))}>
                {l.title}
              </Link>
            </Typography>
            <br />
            <List>
              {l.exercises.map((e) => (
                <ListItem key={e.title}>
                  <Link href={"#" + encodeURIComponent(LessonExerciseID(l, e))}>
                    {e.title}
                  </Link>
                </ListItem>
              ))}
            </List>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
