class Student {
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

    constructor(
        public firstName: string,
        public lastName: string,
        public age: number,
        private subjects: string[],
    ){

    }

    enroll(newSubj:string){
        this.subjects.push(newSubj)
    }
    displaySubjects(){
        return this.subjects.slice();
    }
}

const student= new Student('Max','Muller', 15, ['Physics', 'Chemistry', 'Biology']);
console.log('student', student);
student.enroll('Maths');
console.log('student has enrolled a newCourse', student);
// console.log(student.subjects);
console.log(student.displaySubjects());