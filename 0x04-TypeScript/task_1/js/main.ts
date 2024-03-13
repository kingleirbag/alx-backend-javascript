/**
 * Represents a teacher.
 */
export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [index: string]: any;
}

/**
 * Represents a director who is also a teacher.
 */
export interface Director extends Teacher {
  numberOfReport: number;
}

/**
 * Defines a function type for printing a teacher's name.
 */
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

/**
 * Formats and prints the name of a teacher.
 * @param firstName - The first name of the teacher.
 * @param lastName - The last name of the teacher.
 * @returns A formatted string representing the teacher's name.
 */
export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}
