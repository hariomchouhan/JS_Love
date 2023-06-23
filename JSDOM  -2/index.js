// function eventFuction() {
//     console.log('I have clicked on the document.');
// }

// document.addEventListener('click', eventFuction, true)

// setTimeout(() => {
//     document.removeEventListener('click', eventFuction)
// }, 5000);

// Event Object ka example
// const content = document.querySelector('#wrapper')

// content.addEventListener('click', function(event) {
//     console.log(event);
// })

// Default prevent ka example
// const links = document.querySelectorAll('a');
// const thirdLink = links[2];

// thirdLink.addEventListener('click', function(event) {
//     event.preventDefault();
//     console.log("Maza aa gaya!");
// });

// Aviod too many event

// let myDiv = document.createElement("div");

// function paraStatus(event) {
//     console.log("Para " + event.target.textContent);
//   }

//   myDiv.addEventListener("click", paraStatus);
// for (let i = 0; i <= 100; i++) {
//   let newElement = document.createElement("p");
//   newElement.textContent = "This is para " + i;

//   myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);

let element = document.querySelector("#wrapper");

element.addEventListener("click", function (event) {
    if(event.target.nodeName === "SPAN") {
        console.log("Span par click kiya hai " + event.target.textContent);
    }
});
