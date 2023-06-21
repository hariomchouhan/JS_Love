console.log("Jay Siya Ram");

// function declaration
function run() {
  console.log("running");
}

// function call or invoke
run();

// Named function assignment
let stand = function walk() {
  console.log("walking");
};

// Anonymous function assignment
let stand2 = function () {
  console.log("walking");
};

stand();
stand2();
let jump = stand;

jump();

let x = 1;
x = "a";

console.log(x);

// Dynamic values function
function sum() {
  let total = 0;
  for (let value of arguments) total += value;
  // console.log(arguments);
  return total;
}

// console.log(sum(1,2));
// console.log(sum(1));
// console.log(sum());
console.log(sum(1, 2, 3, 4, 5, 6));

// Rest Operator
// Rest operator ke andar bahut saare parameters ko ek array me convert karke rakhta hai ya rest parameter ko array mein store karke rakhta hai.
// Note: rest operator ke baad koi bhi parameter nahi aa sakta hai.
function add(num, value, ...args) {
  console.log(args);
}
add(1, 2, 3, 4, 5, 6);

// Default Parameters
// default parameters mein hum kuch default value set kar deta hai wo value tab use hoti hai jab user koi value input nahi deta hai.
// Note: default parameters mein hum kisi parameter ko default karte hai to uske aage ke saare parameters ko bhi default value deni hogi.
function interest(p, r = 5, y = 5) {
  return (p * r * y) / 100;
}

console.log(interest(1000, 5, 10));

// Getter Setter

let person = {
    fName: 'Hariom',
    lName: 'Chouhan',
    get fullName() {
        return `${person.fName} ${person.lName}`;
    },
    set fullName(value) {
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }
}

person.fullName = "Siya Ram"
console.log(person.fullName);
// console.log(`${person.fName} ${person.lName}`);

// try and catch -> Error handling

let person2 = {
  fName: "Hariom",
  lName: "Chouhan",
  get fullName() {
    return `${person2.fName} ${person2.lName}`;
  },
  set fullName(value) {
    if (typeof value !== "string") {
      throw new Error("Not a string");
    }
    let parts = value.split(" ");
    this.fName = parts[0];
    this.lName = parts[1];
  },
};

try {
  person2.fullName = "Ram Siya";
} catch (error) {
  alert(error);
}
console.log(person2.fullName);
// console.log(`${person2.fName} ${person2.lName}`);

// Scope

{
    var a = 5;
}
console.log(a)

// function walk (){
//     var b = 5;
// }
// console.log(b);

let arr = [1,2,3,4];
let total = 0;
// for(let value of arr) {
//     total += value;
// }
// console.log(total);

let Sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log(Sum);


let z = 5;
let y = 6;
console.log(`The sum of z and{y} is ${z + y}.`);

