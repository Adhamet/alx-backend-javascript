export default function createIteratorObject(report) {
  function* iterateEmployees() {
    for (const department of Object.keys(report)) {
      const { employees } = report[department];
      for (const employee of employees) {
        yield employee;
      }
    }
  }

  return {
    [Symbol.iterator]: iterateEmployees,
  };
}
