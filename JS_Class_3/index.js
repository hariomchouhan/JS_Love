// In-build Objects

// --------------------Math--------------------

console.log(Math.random());
// Ye zero se one ke beech me random number generate karke deta hai.

console.log(Math.PI);
// ye PI ki value deta hai.

console.log(Math.round(1.8));
console.log(Math.round(1.2));
// Ye value ko round of karke deta hai.
// Note: (.5) ya usse jyada hone par next number aata hai or (.4) ya usse kam hone par previous number deta hai.

console.log(Math.max(1, 2, 4, 5, 3));
// Ye maximum number nikal ke deta hai.

console.log(Math.min(1, 2, 4, 5, 3));
// Ye minimum number nikal ke deta hai.

console.log(Math.pow(2, 3));
// Ye power ki value nikal ke deta hai, pehle value likhte hai or baad mein power.

console.log(Math.abs(-43));
// Ye negative number ya value ko positive return karta hai or positive ko bhi positive return karta hai.

// or bhi bahut hai
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// --------------------String--------------------

let lastName = "Chouhan";
lastName.length; // string ki length
lastName.charAt(); // string ka first letter ko deta hai
lastName.includes("Cho"); // string mein letter ko search karta hai
lastName.indexOf("o"); // string mein letter ki index value deta hai
lastName.lastIndexOf(); // string mein letter ki index value peeche se read karke deta hai
lastName.toLowerCase(); // string mein letter ko lower case convert karta hai
// or bhi bahut hai
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

let firstName = new String("Chouhan");

// --------------------Template Literal--------------------

let message = `This is
my first
message`;

console.log(message);

// --------------------Date & Time--------------------

let date = new Date();

let date2 = new Date(2001, 9, 8, 6);

date2.setFullYear(2023);
date2.getFullYear();
console.log(date2);

// #######################- Arrays -#######################

let number = [1, 4, 5, 7];

console.log(number);

// End
number.push(9);
console.log(number);

// Begin
number.unshift(8);
console.log(number);

// Middle
number.splice(2, 0, "a", "b", "c");
console.log(number);

// Searching
let numbers = [1, 4, 5, 7];
console.log(numbers.indexOf(7));
// ye array me ye value kis index par padi hai ye wo return hai, or agar ye value array mein nahi mili to (-1) return karta hai.

// we want to check if a number exist in an array
if (numbers.indexOf(7) != -1) console.log("present");

console.log(numbers.indexOf(4, 2));
// Ye advance hai, isme first value wo hai jo number find karna hai or second value kis index se searching start karni hai.

console.log(numbers.includes(7));
// Ye kewal true or false return karta hai agar array mein ye wali value hai to true nahi to false.

let courses = [
  { no: 1, naam: "Hariom" },
  { no: 2, naam: "Rahul" },
];

console.log(courses);

// console.log(courses.includes( {no:1, naam: "Hariom"} ));
// console.log(courses.indexOf( {no:1, naam: "Hariom"} ));
// Agar main objects ke saath kaam kar raha hun to mein indexOf or includes dono se find nahi kar sakta. iske liye agar method hai.

// let course = courses.find(function(course) {
//     return course.naam === "Hariom";
// })
// short kiya hai upar wale code ko.
let course = courses.find((course) => course.naam === "Hariom");

console.log(course);

let num = [1, 2, 3, 4, 5, 6, 7];
console.log(num);
num.pop();
console.log(num);
num.shift();
console.log(num);
num.splice(3, 1);
console.log(num);

// Emptying an Array

let numb = [1, 2, 3, 4, 5, 6, 7];
let numb2 = numb;

// Three methods to empty an Array
// numb = [] // But in this method issue for empty Array
// numb.length = 0;
numb.splice(0, numb.length);

console.log(numb);
console.log(numb2);

// Combining & Slicing Arrays

// Combining
let first = [1, 2, 3];
let second = [4, 5, 6];

let combined = first.concat(second);
console.log(combined);

let marks = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// let sliced = marks.slice(); //isse poore array ki copy ban jayegi.
// let sliced = marks.slice(2); //isse 2 index se lekar aage ke saare elements print honge.
let sliced = marks.slice(2, 6); // isse me index 2 se lekar 6 index tak ke saare elements print ho jayege.
console.log(sliced);


// Spread Operator

let First = [1, 2, 3];
let Second = [4, 5, 6];
let Combined = [...First, ...Second,]
// let Combined = [...First, 'a', ...Second, 'b']
console.log(Combined);

// copy kaise create karu
let another = [...Combined];


// Iterating an Array
let arr = [10, 20, 30, 40, 50];

// for of loop
for(let value of arr) {
    console.log(value);
}

// for each loop
// arr.forEach(function(number) {
//     console.log(number);
// })
// convert to arrow function
arr.forEach(number => console.log(number))


// Joining Arrays
let array = [10, 20, 30];
console.log(array.join(","))

// Split
let msg = "This is an message for you.";
console.log(msg.split(" "));

// Sorting
let sortNum = [10, 20, 3,60, 40, 50];

// sortNum.sort(function(a,b){return a-b})
sortNum.sort((a,b) => {return a-b})
console.log(sortNum);

sortNum.reverse();
console.log(sortNum);

// Filtering Arrays

let filt = [1,-2,10,-4,40,-30];

let filtered =  filt.filter(function(value) {
  return value >= 0;
})

console.log(filtered);

// Mapping Arrays

let mapNum = [7,8,9,10];

let items = mapNum.map(function(value) {
  return 'Student_no ' + value;
})

console.log(items);

// Mapping with Objects

let mapObj = [1,2,-2,-6];

let Filtering = mapObj.filter(function(value) {
  return value >= 0;
})

let mapObj2 = Filtering.map(function(value) {
  return {value: value};
})

console.log(mapObj2);