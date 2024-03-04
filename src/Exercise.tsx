import React from "react";
import { IExercise, ILesson } from "./data/lessons";
import { Box, Link, Typography } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import { LessonExerciseID } from "./navigation";
import { Page } from "./Page";

interface IProps {
  lesson: ILesson;
  exercise: IExercise;
}

export const Exercise = ({ lesson, exercise }: IProps): React.ReactElement => {
  const href = "#" + encodeURIComponent(LessonExerciseID(lesson, exercise));
  return (
    <Box sx={{ m: 2 }}>
      <Box sx={{ display: "flex" }} id={LessonExerciseID(lesson, exercise)}>
        <Typography variant="h5">
          <Link href={href}>
            <LinkIcon sx={{ verticalAlign: "middle" }} />
            &nbsp;
            {exercise.title}
          </Link>
        </Typography>
      </Box>
      {exercise.images.map((src, i) => (
        <Page key={i} lesson={lesson} exercise={exercise} i={i} src={src} />
      ))}
    </Box>
  );
};
