import a0 from "./1-1/001.jpg";
import a1 from "./1-1/002.jpg";
import a2 from "./1-1/003.jpg";

import b0 from "./1-2/001.jpg";
import b1 from "./1-2/002.jpg";

import c0 from "./1-3/001.jpg";
import c1 from "./1-3/002.jpg";

export interface IExercise {
  title: string;
  images: string[];
}

export interface ILesson {
  title: string;
  exercises: IExercise[];
}

export const lessons: ILesson[] = [
  {
    title: "Lines, Ellipses and Boxes",
    exercises: [
      {
        title: "Superimposed Lines",
        images: [a0, a1, a2],
      },
      {
        title: "Ghosted Lines",
        images: [b0, b1],
      },
      {
        title: "Ghosted Planed",
        images: [c0, c1],
      },
    ],
  },
  {
    title: "Lines, Ellipses and Boxes 2",
    exercises: [
      {
        title: "Superimposed Lines 2",
        images: [a0, a1, a2],
      },
      {
        title: "Ghosted Lines 2",
        images: [b0, b1],
      },
      {
        title: "Ghosted Planed 2",
        images: [c0, c1],
      },
    ],
  },
];
