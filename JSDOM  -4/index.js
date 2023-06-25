// setTimeout(() => {
//     console.log("third");
// }, 3000);
// function sync() {
//     console.log("first");
// }
// sync();

// console.log("second");

// Promise

// let meraPromise1 = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log("I am inside promise1");
//     }, 5000);
//     // resolve(2001);
//     reject(new Error('reject ho gaya bhai sahaab'));
// })

// meraPromise1.then((value) => {console.log(value);}, (error) => {console.log("Received an error");})

// meraPromise1.catch((error) => {console.log("Received an error");})

// let meraPromise2 = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log("I am inside promise2");
//     }, 3000);
//     // resolve(2001);
//     // reject(new Error('reject ho gaya bhai sahaab'));
// })

// console.log("Pehla");

// let waadaa1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("setTimeout1 Started");
//     }, 2000)
//     resolve()
// })

// let output = waadaa1.then(() => {
//     let waadaa2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("setTimeout2 Started");
//         }, 3000)
//         resolve("waadaa2 resolved");
//     })
//     return waadaa2;
// })

// output.then((value) => {console.log(value);})

// Output of the before code
// waadaa2 resolved
// setTimeout1 Started
// setTimeout2 Started

// Async await

// async function abcd() {
//     return "Kya hua tera";
// }
// abcd();

// async function utility() {
//   let delhiMausam = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Delhi mein bahut garmi hai");
//     }, 5000);
//   });

//   let hydMausam = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Hyderabad is cool");
//     }, 8000);
//   });

//   let dM = await delhiMausam;
//   let hM = await hydMausam;

//   return [dM, hM];
// }

// Fetch API
// Get METHOD
// async function utility() {
//     let content = await fetch('https://jsonplaceholder.typicode.com/users/1/albums');
//     let output = await content.json();
//     console.log(output);
// }
// utility()

// POST METHOD

// async function helper() {
//   let option = {
//     method: "POST",
//     body: JSON.stringify({
//       title: "Chouhan",
//       body: "Jay Shri Ram",
//       userId: 2001,
//       Naam: "Jay Shri Hanuman"
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   };

//   let content = await fetch(
//     "https://jsonplaceholder.typicode.com/posts",
//     option
//   );
//   let response = await content.json();
//   return response;
// }

// async function utility() {
//   let ans = await helper();
//   console.log(ans);
// }
// utility();

// Closures

// function init() {
//   let name = "Mozilla"; // name is a local variable created by init
//   function displayName() {
//     // displayName() is the inner function, that forms the closure
//     console.log(name); // use variable declared in the parent function
//   }
//   return displayName;
// }
// let func1 = init();
// func1();




let counter = 0;

function add() {
    // let counter = 0;
    function plus() {
          counter += 4;
        console.log(counter);
    }
    return plus
}
let a = add()
a()
// add()
// add()
// add()
