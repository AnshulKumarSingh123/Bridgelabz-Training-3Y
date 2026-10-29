
// sync
// sync: settimeout,setinterval,fetch,event


// console.log("start");
// // console.log("end")
// function getUser(callback) {
//     setTimeout(() => {
//         console.log("user data....");
//         callback();
//     }, 1000);
// }

// function getUserBankDetail() {
//     setTimeout(() => {
//         console.log("user Bank Detail");
//     }, 2000);
// }

// // callback,premise,async,await




// getUser(() => {
//     getUserBankDetail();
// });





// console.log("end");

let mypromise = new Promise((resolve, reject) => {
    let  age  = 10;

    if (age>18) {
        resolve("age is valid");
    } else {
        reject("age is invalid");
    }
});

mypromise
    .then((msg) => {
        console.log(msg);
    })
    .catch((error) => {
        console.log(error.message);
    });

