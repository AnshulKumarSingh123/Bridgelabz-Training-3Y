class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  constructor(id, name, age, branch, specialization) {
    super(name, age);
    this.id = id;
    this.branch = branch;
    this.specialization = specialization;
  }

  displayDetails() {
    return `ID: ${this.id}, Name: ${this.name}, Age: ${this.age}, Branch: ${this.branch}, Specialization: ${this.specialization}`;
  }
}

const students = [];
let choice;

while (choice !== "4") {
  choice = prompt(
    "Student Management\n1. Add student\n2. Display students\n3. Remove student\n4. Exit",
  );

  switch (choice) {
    case "1": {
      const id = prompt("Enter student ID:");
      const name = prompt("Enter student name:");
      const age = prompt("Enter student age:");
      const branch = prompt("Enter student branch:");
      const specialization = prompt("Enter student specialization:");
      students.push(new Student(id, name, age, branch, specialization));
      alert("Student added.");
      break;
    }
    case "2":
      alert(
        students.length
          ? students.map((student) => student.displayDetails()).join("\n")
          : "No students found.",
      );
      break;
    case "3": {
      const id = prompt("Enter student ID to remove:");
      const index = students.findIndex((student) => student.id === id);
      if (index === -1) {
        alert("Student not found.");
      } else {
        students.splice(index, 1);
        alert("Student removed.");
      }
      break;
    }
    case "4":
      break;
    case null:
      choice = "4";
      break;
    default:
      alert("Invalid choice.");
  }
}
