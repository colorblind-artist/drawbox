import React from "react";
import { IExercise, ILesson } from "./data/lessons";
import { Box, Link, Modal } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import { LessonExercisePageID } from "./navigation";
import { ImageModal } from "./ImageModal";

interface IProps {
  lesson: ILesson;
  exercise: IExercise;
  i: number;
  src: string;
}

export const Page = ({
  lesson,
  exercise,
  i,
  src,
}: IProps): React.ReactElement => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const href =
    "#" + encodeURIComponent(LessonExercisePageID(lesson, exercise, i));
  return (
    <Box
      key={i}
      sx={{ display: "flex", flexDirection: "column", mx: 4, my: 2 }}
      id={LessonExercisePageID(lesson, exercise, i)}
    >
      <Link href={href} sx={{ m: 1 }}>
        <LinkIcon sx={{ verticalAlign: "middle" }} fontSize="small" />
        &nbsp; Page {i + 1}
      </Link>
      <img src={src} alt="" onClick={handleOpen} />
      <Modal open={open} onClose={handleClose}>
        <ImageModal src={src} />
      </Modal>
    </Box>
  );
};
