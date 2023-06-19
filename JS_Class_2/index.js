console.log("Jay Siya Ram");

// Object create

/*
let rectangle = {
    length: 1,
    breath: 2,

    // draw: function () {
    //     console.log("drawing");
    // },

    // or hum ise aise bhi likh sakte hai
    draw() {
        console.log("Drawing");
    }
    
};
*/




// factory function

// function createRectangle(len, bre) {

//     return rectangle = {
//         length: len,
//         breath: bre,
    
//         draw: function () {
//             console.log("drawing");
//         }
//     }
// }

// let rectangleObj1 = createRectangle(5, 7);
// let rectangleObj2 = createRectangle(8, 4);
// let rectangleObj3 = createRectangle(9, 6);

// console.log(rectangleObj1 );
// console.log(rectangleObj2 );
// console.log(rectangleObj3 );


// Constructor function
// camelcase -> numberOfStudent
// Constructor function -> Pascal Notation -> first letter of every word is capital -> NumberOfStudent
// Constructor funtion -> prop/methods -> intialise/define

// this keyword is refer to current object. or agar kewal this keyword hi likha hai to wo ek empty object ko represent karta hai.

/*
function Rectangle() {
    this.length = 1;
    this.breath = 2;
    this.draw = function() {
        console.log("drawing");
    }
}

// object creation using constructor function
let rectangleObject = new Rectangle();
rectangleObject.color = "Yellow";
console.log(rectangleObject);

delete rectangleObject.color
console.log(rectangleObject);
*/


// Primitive types
/*
let a = 10;
let b = a;
a++;

console.log(a);
console.log(b);
*/

/*
let a = 10;

function inc (a) {
    a++;
}
inc(a);
// console.log(a); // 10
*/

// Refernce types
/*
let a = { value: 10 };
let b = a;

a.value++;
console.log(a.value);
console.log(b.value);
*/

/*
let a = { value: 10 };

function inc (a) {
    a.value++;
}
inc(a);
console.log(a.value); // 11
*/


let rectangle = {
    length: 2,
    breath: 4
};

// for-in loop
/*
for(let key in rectangle) {
    // key are reflected through key variable
    // values are reflected through rectangle[key]
    console.log(key, rectangle[key]);
}
*/

/*
if('color' in rectangle) {
    console.log("Present");
}
else {
    console.log("Absent");
}
*/

// for-of loop
/*
for(let key of rectangle) {
    console.log(key);
}
// this will give error because rectangle does not iterable.
*/

/*
for(let key of Object.keys(rectangle)) {
    console.log(key);
}
// this is a hack of the for-of loop to print the keys of the object.

for(let key of Object.entries(rectangle)) {
    console.log(key);
}
// this is a hack of the for-of loop to print both keys and values of the object.
*/

// Object Cloning

// Iteration
/*
let src = {value: 10, a: 10, b: 20, c: 30};
let dest = {};

for(let key in src) {
    dest[key] = src[key];
}
console.log(dest);

src.a++;
console.log(dest);
*/

// Assign
/*
let src = {a: 10, b: 20, c: 30};
let src2 = {value: 10};
let dest = Object.assign({}, src, src2);
console.log(dest);

src.a++;
console.log(dest);
*/

// Spread
/*
let src = {a: 10, b: 20, c: 30};
let dest = {...src};
console.log(dest);

src.a++;
console.log(dest);
*/



// rectangle.length;
// rectangle.breath;
// rectangle.draw();