import { IExercise, ILesson } from "./data/lessons";

export const LessonID = (lesson: ILesson): string => lesson.title;

export const LessonExerciseID = (
  lesson: ILesson,
  exercise: IExercise
): string => lesson.title + ">" + exercise.title;

export const LessonExercisePageID = (
  lesson: ILesson,
  exercise: IExercise,
  page: number
): string => lesson.title + ">" + exercise.title + ">" + page;
