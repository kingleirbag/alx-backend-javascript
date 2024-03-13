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

/**
 * Represents a constructor function for creating instances of IStudentClass.
 */
export interface IStudentClassConstructor {
  /**
   * Constructs a new instance of IStudentClass.
   * @param firstName - The first name of the student.
   * @param lastName - The last name of the student.
   * @returns An instance of IStudentClass.
   */
  new (firstName: string, lastName: string): IStudentClass;
}

/**
 * Specifies the methods that a student class should implement.
 */
export interface IStudentClass {
  /**
   * Indicates that the student is currently working on homework.
   * @returns A string indicating the student's current activity.
   */
  workOnHomework(): string;

  /**
   * Retrieves the display name of the student.
   * @returns A string representing the display name of the student.
   */
  displayName(): string;
}

/**
 * Represents a concrete implementation of a student class.
 */
export class StudentClass implements IStudentClass {
  /** The first name of the student. */
  private _firstName!: string;

  /** The last name of the student. */
  private _lastName!: string;

  /**
   * Constructs a new instance of StudentClass.
   * @param firstName - The first name of the student.
   * @param lastName - The last name of the student.
   */
  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  /**
   * Indicates that the student is currently working on homework.
   * @returns A string indicating the student's current activity.
   */
  workOnHomework() {
    return 'Currently working';
  }

  /**
   * Retrieves the display name of the student.
   * @returns A string representing the display name of the student.
   */
  displayName() {
    return this._firstName;
  }
}
