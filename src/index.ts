// console.log("joe boy");
// let i: number= 5;
// if(i<7){
//     i+=8;
// }
let sales: number=45323;
let course: string="Typrscript";
let is_published: boolean=true;

function render(doc: any){
    console.log(doc);
}
//Arrays
let numbers: number[]=[4,3,7,8]
numbers.forEach((n)=>n*2);
//Tuples
let user: [number,string]=[2,'Joe'];

//Enums
const enum Size{Small=1,Medium,Large}
let mySize: Size=Size.Medium;

//Function

function getTax(salary: number) :number{
    return salary *9;
}
