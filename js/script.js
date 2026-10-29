// console.log("hello world");

// console.log("hello")

// v8 js engine chrome

// data types - primitive - 8

// let var const


// console.log(3);


// var a = "hellow"


// fun();


// function fun(){
//     console.log("fghjk")
// }


// scope:-
// global,
// block, functional scope


// function fun (){
//     var a = "hello";
//     console.log(a)
// }
// fun ()
// console.log(a)


// == vs ===
// null vs undefined
// string concat 
// string interpolation
// let name = "raj";
// let city = "mathura";
// let msg = `hello my name is ${name} and I live in ${city}`;
// console.log(msg);

// let username = " Yash singh ";
// console.log(username.trim());
// console.log(username.toLowerCase());
// console.log(username.toUpperCase());
// console.log(username.includes("singh"));
// console.log(username.replace("Yash", "John"));
// console.log(username.trim().toLowerCase().split("singh"));
// console.log(username.slice(3,5));
// console.log(username.slice(5));

// let password = "Wertyui#$WQ23.  ";

// function checkPassword(password) {
//     // let ans = checkPassword(password);
//     let pwd = password.trim();
//     let upper = false;
//     let lower = false;
//     let number = false;
//     let special = false;

//     for (let i = 0; i < pwd.length; i++) {
//         let char = pwd.charAt(i);
//         if (char >= 'A' && char <= 'Z') {
//             upper = true;
//         } else if (char >= 'a' && char <= 'z') {
//             lower = true;
//         } else if (char >= '0' && char <= '9') {
//             number = true;
//         } else {
//             special = true;
//         }
    
//     }
//     if (upper && lower && number && special) {
//         return true;
//     } 
//         return false;
//     }
//     let ans = checkPassword(password);
//     console.log(ans);


    // Task 2 : generate 4-digit otp

    // let num = Math.random()*10;
    // let num = Math.floor(Math.random()*10);

//     function generateOTP() {
//         // let otp = "";
//         // for(let i=0;i<4;i++){
//         //     let num = Math.floor(Math.random()*10);
//         //     otp += num;
//         // }

//         let min = 1000;
//         let max = 9999;
//         let otp = Math.floor(Math.random() * (max - min)) + min;
//         return otp;
//     }   

// console.log(generateOTP());


// // Task 3 generate random hex color digit 
// // Background-color : #ffffff // 0-f
// background-color : #000000 // 0-f



// function generateHexColor() {
//     let array = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
//     let color = "#";
//     for(let i=0;i<6;i++){
//         let num = Math.floor(Math.random()*16);
//         color += array[num];
//     }
//     return color;
// }

// console.log(generateHexColor());

// function generateHexColor() {
//     let color = "#";
//     for(let i=0;i<6;i++){
//         let num = Math.floor(Math.random()*16);
//         color += num.toString(16);
//     }
//     return color;
// }

// console.log(generateHexColor());


// Array methods

// let arr = ["apple","mango",10,20,30,true,false];
// console.log(arr);

// arr.push("grapes");
// console.log(arr);

// arr.unshift("mohan");
// console.log(arr);


// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
// for(let x of arr){
//     console.log(x);
// }

// console.log(arr.slice(1,4));
// console.log(arr.includes("mango"));

// console.log(arr);


// arr.pop();
// console.log(arr);

// function fun (a,b){
//     console.log("hello")

// }
// fun(10,20);


// console.log(b);
// var b = "hello";
// b();
// var b = function(){
//     console.log("fun")
// }

// objects...........


// let student = { 
//     name : "raj",
//     marks :90,
//     city : "mathura",
    

// }
// // bracket solution
// console.log(student["name"]);
// // let student2 = {
// //     "name": "raj",
// //     "marks": "90",
// //    
// // }

// // let ans = JSON.stringify(student);
// // JSON.parse(ans);



// // dot notation
// console.log(student.name);
// student.marks = 100;

// student.city = "mathura";


// delete student.id

// console.log(student);


// let student = {
//     id : 1,
//     name : "raj",
//     marks : 90,
// //     address : {
// //         city : "mathura",
// //         pincode : 281001
// //     },
// //     displayInfo: function(){
// //         console.log(`id : ${this.id} name : ${this.name} marks : ${this.marks}`);
// //     }
// // }
// let listofStudents = [
//     {
//         id : 1,
//         name : "raj",
//         marks : 90,
//         gender : "male"
//     },
//     {
//         id : 2,
//         name : "priya",
//         marks : 85,
//         gender : "female"
//     },
//     {
//         id : 3,
//         name : "mohan",
//         marks : 70,
//         gender : "male"
//     },
//     {
//         id : 4,
//         name : "rohit",
//         marks : 80,
//         gender : "male"
//     }
// ];  


// console.log(listofStudents);
// console.log(listofStudents[0].name);
// let query = "city";
// query = query.toUpperCase();
// console.log(student.address.city);  
// console.log(student["address"]["pincode"]);
// student.displayInfo();


// for(let i=0;i<listofStudents.length;i++){
//     let ans = `my id is ${listofStudents[i].id} and my name is ${listofStudents[i].name} and my marks are ${listofStudents[i].marks} and my gender is ${listofStudents[i].gender}`;
//     console.log(ans);
// 

// // for of loop
// for(let x of listofStudents){
//     let ans = `my id is ${x.id} and my name is ${x.name} and my marks are ${x.marks} and my gender is ${x.gender}`;
//     console.log(ans);
// }
// // for each loop
// listofStudents.forEach((x)=>{
//     let ans = `my id is ${x.id} and my name is ${x.name} and my marks are ${x.marks} and my gender is ${x.gender}`;
//     console.log(ans);
// });
// // print all the names of students in the list
// // ["rahul", "priya", "mohan", "rohit", "anshul"]
// let fun = (x) => {
//     return x.name;
// }
// let names = listofStudents.map(fun);
// console.log(names);

// // let studentNames = listofStudents.map(function(x){
// //     return x.name;
// // });
// // console.log(studentNames);

// // let studentNames = listofStudents.map((x)=>{
// //     return x.name;
// // });
// // console.log(studentNames);
// let studentNames = listofStudents.map((x) => x.name);
// console.log(studentNames);


console,log("start")
console.log("end")

  


















