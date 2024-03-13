/**
 * Specifies methods that a director class should implement.
 */
export interface DirectorInterface {
  /**
   * Indicates that the director is working from home.
   * @returns A string indicating the director's current activity.
   */
  workFromHome(): string;

  /**
   * Indicates that the director is taking a coffee break.
   * @returns A string indicating the director's current activity.
   */
  getCoffeeBreak(): string;

  /**
   * Indicates that the director is working on director tasks.
   * @returns A string indicating the director's current activity.
   */
  workDirectorTasks(): string;
}

/**
 * Specifies methods that a teacher class should implement.
 */
export interface TeacherInterface {
  /**
   * Indicates that the teacher cannot work from home.
   * @returns A string indicating the teacher's current activity.
   */
  workFromHome(): string;

  /**
   * Indicates that the teacher cannot have a coffee break.
   * @returns A string indicating the teacher's current activity.
   */
  getCoffeeBreak(): string;

  /**
   * Indicates that the teacher is getting to work.
   * @returns A string indicating the teacher's current activity.
   */
  workTeacherTasks(): string;
}

/**
 * Represents a concrete implementation of a director.
 */
export class Director implements DirectorInterface {
  /**
   * Indicates that the director is working from home.
   * @returns A string indicating the director's current activity.
   */
  workFromHome() {
    return 'Working from home';
  }

  /**
   * Indicates that the director is taking a coffee break.
   * @returns A string indicating the director's current activity.
   */
  getCoffeeBreak() {
    return 'Getting a coffee break';
  }

  /**
   * Indicates that the director is working on director tasks.
   * @returns A string indicating the director's current activity.
   */
  workDirectorTasks() {
    return 'Getting to director tasks';
  }
}

/**
 * Represents a concrete implementation of a teacher.
 */
export class Teacher implements TeacherInterface {
  /**
   * Indicates that the teacher cannot work from home.
   * @returns A string indicating the teacher's current activity.
   */
  workFromHome() {
    return 'Cannot work from home';
  }

  /**
   * Indicates that the teacher cannot have a coffee break.
   * @returns A string indicating the teacher's current activity.
   */
  getCoffeeBreak() {
    return 'Cannot have a break';
  }

  /**
   * Indicates that the teacher is getting to work.
   * @returns A string indicating the teacher's current activity.
   */
  workTeacherTasks() {
    return 'Getting to work';
  }
}

/**
 * Creates an instance of either Director or Teacher based on the provided salary.
 * @param salary - The salary of the employee.
 * @returns An instance of Director if the salary is not less than 500, otherwise an instance of Teacher.
 */
export function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

/**
 * Checks if the provided employee is an instance of the Director class.
 * @param employee - The employee to check.
 * @returns True if the employee is a director, otherwise false.
 */
export function isDirector(employee: Director | Teacher): boolean {
  return employee instanceof Director;
}

/**
 * Executes work tasks based on the type of employee.
 * @param employee - The employee whose work tasks are to be executed.
 * @returns The result of the executed task.
 */
export function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return (employee as Director).workDirectorTasks();
  }
  return (employee as Teacher).workTeacherTasks();
}
