/**
 * Interface representing a Student, specifying properties:
 * - firstName: string
 * - lastName: string
 * - age: number
 * - location: string
 */
export interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}

/**
 * Create two instances of Student and store them in an array named studentsList.
 */
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  location: 'Nairobi',
};

const student2: Student = {
  firstName: 'Alex',
  lastName: 'Sanchez',
  age: 29,
  location: 'Cairo',
};

const studentsList: Array<Student> = [
  student1,
  student2,
];

/**
 * Render a table using Vanilla JavaScript and populate it with student data.
 * Each row contains the first name of the student and their location.
 * @param studentsList - An array of Student objects to be displayed in the table
 */
export const renderTable = (studentsList: Array<Student>): void =>  {
  // Create a table element
  const table = document.createElement('table');
  // Create a row for the table header
  const headRow = document.createElement('tr');
  table.insertAdjacentElement('beforeend', headRow);

  // Insert column headers
  headRow.insertAdjacentHTML('beforeend', '<th>FirstName</th>');
  headRow.insertAdjacentHTML('beforeend', '<th>Location</th>');

  // Iterate through each student in the list and create a row for each
  for (const student of studentsList) {
    const studentRow = document.createElement('tr')
    // Insert student first name into the first column
    studentRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    // Insert student location into the second column
    studentRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    // Append the student row to the table
    table.insertAdjacentElement('beforeend', studentRow);
  }

  // Append the table to the body of the document
  document.body.insertAdjacentElement('beforeend', table);
}

// Call the renderTable function with the studentsList array as input
renderTable(studentsList);
