  function Academy(Name, Students, Subjects, Start, End, NumberOfClasses, PrintStudents, PrintSubjects) {
  this. Name = "Seavus";
  this.Students = ["Nina", "Max", "Bube", "Kate", "Ace"];
  this.Subjects = ["Math", "English", "Sport", "Biology", "History", "Computer Science"];
  this.Start = new Date("15 Oktomber, 2020");
  this.End = new Date("15 Oktomber, 20121");
  this.NumberOfClasses = this.Subjects.length * 10;
  this.PrintStudents = function() {
      console.log(`${Students}`)
    };
  this.PrintSubjects = function() {
      console.log(`${Subjects}`)
    };
};

let School = new Academy();































