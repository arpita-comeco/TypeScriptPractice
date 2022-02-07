// number , boolian , string types

let empId:number;
let empName:string;
let empSatus:boolean;

empId = 10034;
empName= "Arpita";
empSatus= true;

empId = 10034;
console.log(empId, empName, empSatus);

let userNames:string[];

userNames=['1','2','3'];
console.log(userNames);

let mixType: (number | string)[];
mixType =['1',1,3];


type Person={
    name: string;
    age: number;
    skills: string[];
};
let person:Person;

let person1:Person= {
    name: 'virat',
    age: 32,
    skills: ['batting','bowling'],
};
let person2:Person= {
    name: 'yuvraj',
    // salary: 3000,
    age: 32,
    skills: ['batting','bowling'],
};
// console.log('person',person);

let peopleList:Person[]=[person1,person2];
// peopleList.push(person1);
// peopleList.push(person2);
console.log('peopleList',peopleList)

