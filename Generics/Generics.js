// const addNums =(a: number, b: number) =>{
//     return a + b ;
// }
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function addNums(a, b) {
    return a + b;
}
var result = addNums(5, 3);
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
function insertAtBeginning(arr, value) {
    var newArr = __spreadArray([value], arr, true);
    return newArr;
}
var demoArr = [10, 20, 30];
var newUpdatedArr = insertAtBeginning(demoArr, 5);
console.log(newUpdatedArr); // [ 5, 10, 20, 30 ]
var strArr = insertAtBeginning(['b', 'c', 'd'], 'a');
console.log(strArr);
// newUpdatedArr[0].split('');
