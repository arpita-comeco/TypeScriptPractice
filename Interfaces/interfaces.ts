interface Human {
    firstName: string;
    age: number;

    greet: ()=> void;
}

let pop: Human;

pop={
    firstName: 'pop',
    age: 20,
    greet(){
        console.log('hey there!');
    },
}

console.log('pop',pop);


class Employee implements Human{
    firstName: string;
    age: number;
    greet(){
        console.log('Hello!');
    }
}