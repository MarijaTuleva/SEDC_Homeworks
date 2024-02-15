function Person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.getFullName = function(){
        console.log(`Full name: ${this.firstName} ${this.lastName}`);
    }

    this.checkAcademy = (student) =>{
        console.log(`The student is in the ${student.academyName} academy.`);
    }


}

function Student(firstName, lastName, age, academyName, studentId){
    Object.setPrototypeOf(this, new Person(firstName, lastName, age));
    this.academyName = academyName;
    this.studentId = studentId;

    this.study = function(){
        console.log(`The student ${this.firstName} is studying in the ${this.academyName} academy.`);
    }
}


let student1 = new Student('John', 'Johnson', 23, 'SEDC', 1);
let student2 = new Student('Jack', 'Jackson', 27, 'SEDC', 2);

console.log(student1);
student1.getFullName();
student1.study();

console.log('===========================');


function DesignStudent(firstName, lastName, age, studentId, isStudentOfTheMonth){
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, 'Design', studentId));
    this.isStudentOfTheMonth = isStudentOfTheMonth;
    
    this.attendAdobeExam = function(){
        console.log(`The student ${this.firstName} is doing an adobe exam!`);
    }
    
}

function CodeStudent(firstName, lastName, age, studentId, hasIndividualProject, hasGroupProject){
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, 'Code', studentId));
    this.hasIndividualProject = hasIndividualProject;
    this.hasGroupProject = hasGroupProject;

    this.doProject = function(type){
        if(type == 'individual' || 'group'){
            if(type == 'individual'){
                this.hasIndividualProject = true;
                this.hasGroupProject = false;
                console.log(`The person is working on an individual project.`);
            }
            else if(type == 'group'){
                this.hasGroupProject = true;
                this.hasIndividualProject = false;
                console.log(`The person is working on a group project.`);
            }
            
        }
    }
}

function NetworkStudent(firstName, lastName, age, studentId, academyPart){
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, 'Network', studentId));
    this.academyPart = academyPart;

    this.attendCiscoExam = function(){
        console.log(`The student ${this.firstName} is doing a cisco exam!`);
    }
}

let dStudent = new DesignStudent('Marko', 'Markovski', 30, 3, false)
let cStudent = new CodeStudent('Ana', 'Anevska', 27, 4)
let nStudent = new NetworkStudent('Mila', 'Milevska', 20, 5, 1);

cStudent.doProject('group');
console.log(cStudent);

nStudent.attendCiscoExam();
dStudent.attendAdobeExam();

cStudent.checkAcademy(cStudent);
nStudent.checkAcademy(nStudent);
dStudent.checkAcademy(dStudent);
