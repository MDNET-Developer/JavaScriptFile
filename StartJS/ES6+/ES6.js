
/*Arrow Function
------------------------------
*/
// const message = ()=>{
//     alert("Hello");
// }

// message();

// const Info = (Name,LastName)=>{
//     alert(`Student: ${Name} ${LastName}`);
// }

// Info("Murad","Aliyev");

// const kv  = (x)=>{
//     return Math.pow(x,2);
// }
// alert(kv(3));


/*Destructing
----------------------------------
*/
// let number1,number2;
// var array = [100,200,300,400];

// number1 = array[0];
// number2= array[1];
/*Yuxarıda yazdığımız kod ilə aşağıdakı kod eyni işi görür */

// [number1,number2]=array;
// alert(number1+number2)
//--------------------------------
// const numbers = {
//     a:20,
//     b:30,
//     c:40,
//     d:50
// }

// const{a:number1,b:number2,c:number3} = numbers;
// console.warn(number1,number2,number3);


//Spread operator
//-----------------------------------------------------
// array=[100,200,300];
// const topla = (a,b,c)=>{return a+b+c};
// console.warn(topla(...array));
//-----------------------------------------------------

//For in and For of
// const student = {
//     name:"Murad",
//     surname:"Aliye",
//     age:21,
//     university:"AzTU"
// }
// var cars = ["Mercedes-Benz","Audi","BMW"];
//For in
// for(var item in student){
//     console.log(item +":" + student[item]);
// }
// console.warn("---------------");


//For of dovrunu yalniz massivler uzerinde islede bilirik
// for(var item of cars){
//     console.log(item);
// }


//ES6 Maps
//-----------------
// let map = new Map();

// const city ={
//     city:"Baku",
//     country:"Azerbaijan"
// }

// const testNumber =  ()=>{return 3};

// map.set(city,"Şəhər məlumatları");
// map.set(testNumber,"geriyə dəyər döndürən funksiya");
// console.log(map);

//ES6 Sets
//---------------------
let set = new Set();
set.add("Murad");
set.add("Aliyev");
set.add(21);
set.add("Mercedes-Benz");
set.add("C# is best ever");

var newSet = new Set(["Murad","Aliyev","Elnur",21,"Mercedes-Benz"]);
console.log(set);
console.log(newSet);
console.log(set.size);
console.log(set.has("Murad"));
set.delete("Murad");
console.log(set);
console.warn("----------")
set.forEach(element=>{
console.log(element)
});
console.warn("----------")
for(var item of set){
    console.log(item)
}
console.warn("----------")
//set to array
const convertArray = Array.from(set);
console.log(convertArray);