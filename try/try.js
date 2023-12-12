// blocking and non blocking
// a section of the code will run , and the rest of the code will wait

console.log(1); // blocking ... easy to understand
// for (let i = 0; i < 1000000000000000000; i++) {
// }
setTimeout(() => {}, 2000);
console.log(2);

//what is the problem having blocking code ?
//it takes a lot of time

// how to control non blocking code ?







//callbacks:

// const fs = require('fs')
// fs.readFile('./try.css',(err, data) =>{
//     console.log('data', data);
// })

// const div = document.getElementById('box')

// window.onload = () => {
//     div.style.backgroundColor = "red"
//     setTimeout(()=>{
//         div.style.fontSize =  "50px"
//         setTimeout(()=>{
//             div.style.fontStyle = "italic"
//             setTimeout(()=>{
//                 div.style.backgroundColor = "purple"
//             },5000)
//         },5000)
//     },5000)
// }





//promises:

//promise = placeholder for a future value

const p1 = new Promise((resolve, reject) => {
  // http request, for loop
  //when i  done - i call resolve
  setTimeout(() => {
    resolve("done");
  }, 2000);
});
p1.then(() => {
  console.log(4);
});







const div = document.getElementById("box");

function changeRed() {
  return new Promise((resolve, reject) => {
    div.style.backgroundColor = "red";
    resolve();
  }, 5000);
}

function changeFontSize() {
  return new Promise((resolve, reject) => {
    div.style.fontSize = "50px";
    resolve();
  }, 5000);
}

function changeFontStyle() {
  return new Promise((resolve, reject) => {
    div.style.fontStyle = "italic";
    resolve();
  }, 5000);
}

function changePurple() {
  return new Promise((resolve, reject) => {
    div.style.backgroundColor = "purple";
    resolve();
  }, 5000);
}

window.onload = () => {
  changeRed().then(changeFontSize).then(changeFontStyle).then(changePurple);
};

const btn = document.getElementById("btn");
const text = document.getElementById("displayText")

btn.addEventListener("click", () => {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log("data", data);
    }).then((res)=>{
      text.innerText = Object.value

    })
});



