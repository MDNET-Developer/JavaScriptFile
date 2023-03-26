var a=10;
var b=30;
var c = a+b;
console.warn(a+b);

var a = null;
console.log(typeof a);
var arrays = [1,2,3,4,5];
console.log(arrays);

var student = {
    name:"Murad",
    surname:"Aliyev",
    age:21,
    university:"AzTU",
    country:"Azerbaijan",
    city:"Baku,Khatai"
}

console.log(student);

var time_hours = new Date().getHours();
var time_minutes = new Date().getMinutes();
var time_second = new Date().getSeconds();
console.log(time_hours + ":" + time_minutes+":" + time_second);

const newArray = [1,2,3,4];
newArray.push(5);
newArray.push(6);
newArray.push(4);
console.log(newArray);

let developer = "Murad Aliyev";
// let developer = "Murad Qarabagli";
console.info(developer);

const studentName = "Murad";
console.error(studentName);

let example = 2023;
//1)
let convertString = example.toString();
//2)
example = String(example);
//3)
let property = 2023;
property = property.toString();
console.log(property);
console.log(typeof property);

console.warn("--------------------");
console.log(example);
console.log(typeof example);
console.warn("--------------------");
console.log(convertString);
console.log(typeof convertString);



let exampleNumber;
exampleNumber = Number(null);
console.log(exampleNumber); 
console.log(typeof exampleNumber);

const z = Number("30") + 20;
console.log(z);
console.log(typeof z);

var randoom = Math.random()*10+1;
randoom = parseInt(randoom)
console.warn(randoom);

const worker = "Murad Aliyev"
const department = "IT"
const salary=950;
var resault =`Worker:${worker}\nDepartment:${department}\nSalary:${salary}`;
console.log(resault)
var htmlresult  = "<ul>" + 
                   "<li>Worker:" + worker + "</li>" +
                   "<li>Department:" +department + "</li>" +
                   "<li>Salary:" +salary + "</li>"
document.body.innerHTML=htmlresult;



var arraySort = [1,23,87,32,11]

var arraySort = arraySort.sort(function(x,y){
return x-y
});
console.log(arraySort);