// adding 100 para
// const t1 = performance.now();
// for(let i = 0; i <= 100; i++) {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para ' + i;

//     document.body.appendChild(newElement);
// }
// const t2 = performance.now();
// console.log(`this took ${t2 - t1} ms`);

// Optimising a bit
// const t3 = performance.now();
// let myDiv = document.createElement('div');

// for (let i=0; i <= 100; i++) {
//     let element = document.createElement('p');
//     element.textContent = 'This is para ' + i;

//     myDiv.appendChild(element);
// }
// document.body.appendChild(myDiv)
// const t4 = performance.now();
// console.log(`this took ${t4 - t3} ms`);

// Document Fragment
// const t5 = performance.now();
// let fragment = document.createDocumentFragment();
// for (let i = 0; i <= 100; i++) {
//   let newElement = document.createElement("p");
//   newElement.textContent = "This is para " + i;

//   fragment.appendChild(newElement);
// }
// document.body.appendChild(fragment);
// const t6 = performance.now();
// console.log(`this took ${t6 - t5} ms`);



// The Call Stack

function addPara() {
    let para = document.createElement('p');
    para.textContent = 'JS is Single'
    document.body.appendChild(para);
}

function appendNewMessage() {
    let para = document.createElement('p');
    para.textContent = 'Kya haal chaal'
    document.body.appendChild(para);
}

addPara();
appendNewMessage();