// 1st. Exercise............................

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = function() {
        console.log(`${this.firstName} ${this.lastName}`);
        
    };
};


function Student(firstName, lastName, age, academyName, studentId) {
    Object.setPrototypeOf(this, new Person(firstName, lastName, age))

    this.academyName = academyName;
    this.studentId = studentId;
    this.study = function() {
        console.log(`The student ${firstName} is study on ${academyName}.`);
        
    };
};

let Aleksandar = new Student("Aleksandar", "Jangelovski", 28, "Seavus", 24567);
console.log(Aleksandar);
let Maks = new Student("Max", "Jangelovski", 24, "PetSchool", 251016);
console.log(Maks);

// 2nd Exercise.............................................


function DesignStudent(firstName, lastName, age, isStudentOfTheMonth) {
    Object.setPrototypeOf(this, new Student (firstName, lastName, age, academyName, studentId))
    this.isStudentOfTheMonth = isStudentOfTheMonth;
    this.attendAdobeExam = function() {
        console.log(`The student ${firstName} is doing an adobe exam!`);
        
    };
};

function CodeStudent(firstName, lastName, age, academyName, studentId, hasIndividualProject, hasGroupProject){
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, academyName, studentId))
    this. hasIndividualProject= hasIndividualProject;
    this.hasGroupProject= hasGroupProject;
    this.doProject = function(typeOfProject) {
        if(typeOfProject = "group")
    }
};


let gana = new CodeStudent("gana", "Jangelovska", 53, "police academy", 2355, true, false);
console.log(gana);






// CodeStudent
// hasIndividualProject - boolean
// hasGroupProject - boolean
// doProject(type) - method that accepts string. If the string is individual or group it should write that the person is working on the project of that type and set the value to true on the property of the project
// NetworkStudent
// academyPart - number
// attendCiscoExam - method that writes in console: the student firstNAme is doing a cisco exam!
// Note: For all students, the academyName property should be auto generated based on which Student we are creating ( design, code or network )

// Create one of each students Check all students with the Student method for checking students academy








