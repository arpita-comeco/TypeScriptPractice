var Student = /** @class */ (function () {
    // firstName: string;
    // lastName: string;
    // age: number;
    // private subjects: string[];
    // constructor(fName: string, lName: string, age: number, subjects: string[]){
    //     this.firstName= fName;
    //     this.lastName= lName;
    //     this.age= age;
    //     this.subjects= subjects;
    // }
    function Student(firstName, lastName, age, subjects) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.subjects = subjects;
    }
    Student.prototype.enroll = function (newSubj) {
        this.subjects.push(newSubj);
    };
    Student.prototype.displaySubjects = function () {
        return this.subjects.slice();
    };
    return Student;
}());
var student = new Student('Max', 'Muller', 15, ['Physics', 'Chemistry', 'Biology']);
console.log('student', student);
student.enroll('Maths');
console.log('student has enrolled a newCourse', student);
// console.log(student.subjects);
console.log(student.displaySubjects());
