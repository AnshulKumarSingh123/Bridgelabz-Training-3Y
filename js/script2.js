// console.log("hello")
// console.log(document)
// let heading = document.getElementById("heading");
// // let heading = document.querySelector("#heading");
// heading.textContent = "qwertyuio";
// heading.innerHTML = "<h2>this is a new element</h2>";
// heading.style.color = "red";
// heading.style.backgroundColor = "blue";

// console.log(heading)
let heading = document.querySelector("#heading");

let btn = document.querySelector("#btn");
let count = 0;
btn.addEventListener("click", () => {
    count++;
    heading.textContent = count




});
let btnE2 = document.querySelector("#btn2");
let fun2 = () => {
    count--;
    heading.textContent = count;
}
btnE2.addEventListener("click", fun2);

let resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", () => {
    count = 0;
    heading.textContent = count;
});
boxEl.addEventListener("mouseover", () => {

    let arr = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];

    let ans = "#";

    for (let i = 0; i < 6; i++) {
        let randomvalue = Math.floor(Math.random() * 15); // 0-15
        ans += arr[randomvalue];
    }

    boxEl.style.backgroundColor = ans;
});





console.log(heading)