import React from "react";
import { ILesson } from "./data/lessons";
import { Box, Link, Paper, Typography } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import { Exercise } from "./Exercise";
import { LessonID } from "./navigation";

interface IProps {
  lesson: ILesson;
}

export const Lesson = ({ lesson }: IProps): React.ReactElement => {
  const href = "#" + encodeURIComponent(LessonID(lesson));
  return (
    <Paper sx={{ m: 2, p: 2 }} id={LessonID(lesson)}>
      <Box sx={{ display: "flex" }}>
        <Typography variant="h3">
          <Link href={href}>
            <LinkIcon sx={{ verticalAlign: "middle" }} fontSize="large" />
            &nbsp;
            {lesson.title}
          </Link>
        </Typography>
      </Box>

      {lesson.exercises.map((e, i) => (
        <Exercise key={i} lesson={lesson} exercise={e} />
      ))}
    </Paper>
  );
};
