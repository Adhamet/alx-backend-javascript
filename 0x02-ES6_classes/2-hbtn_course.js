/**
 * Represents a holberton course
 */
export default class HolbertonCourse {
  /**
     * @param {String} name - The name of the course.
     * @param {Number} length - How long the course is (in months).
     * @param {String[]} students - The name of students in the course.
     */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
     * Get the name of this course.
     */
  get name() {
    return this._name;
  }

  /**
     * Set the name of this course
     */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Gets the length of this course.
   */
  get length() {
    return this.__length;
  }

  /**
   * Sets the length of this course.
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
   * Gets the number of students in this course.
   */
  get students() {
    return this._students;
  }

  /**
   * Sets the names of students in this course.
   */
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!(value.every((student) => typeof student === 'string'))) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
