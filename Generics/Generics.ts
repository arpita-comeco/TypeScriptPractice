// const addNums =(a: number, b: number) =>{
//     return a + b ;
// }

function addNums(a:number, b:number){
    return a+b;
}

const result=addNums(5,3);
console.log(result);

// function insertAtBeginning(arr: any[], value:any){
//     const newArr=[value, ...arr];
//     return newArr;
// }
// const demoArr= [10,20,30];
// const newUpdatedArr=insertAtBeginning(demoArr,5)
// console.log(newUpdatedArr); // [ 5, 10, 20, 30 ]
// newUpdatedArr[0].split('');

// Generics

function insertAtBeginning<T>(arr: T[], value:T){
    const newArr=[value, ...arr];
    return newArr;
}
const demoArr= [10,20,30];
const newUpdatedArr=insertAtBeginning(demoArr,5)
console.log(newUpdatedArr); // [ 5, 10, 20, 30 ]
const strArr=insertAtBeginning(['b','c','d'],'a')
console.log(strArr);  // [ 'a', 'b', 'c', 'd' ]
// newUpdatedArr[0].split('');