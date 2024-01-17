// console.log("hello world");
// let name ="Rukky";
// console.log(name);
// name="abiola";
// console.log(name);
// let age=57;
// let newAge=13; 
// let persentage=(newAge/age);
// let myString="hi";
// let ortherString="hello";
// let backtick =`hi again`;
// let num =31;
// let bol = true;
// let emptyValue=null;
// let undefinededVariable;
// console.log(persentage);
// console.log(emptyValue);
// console.log(myString);
// console.log(backtick);
// console.log(ortherString);
// console.log(bol);
// console.log(typeof myString);
// console.log(undefinededVariable);

// strings method//
let string="javascript"
firstLetter = string[3];
console.log(firstLetter);
console.log(string.length);
console.log(string.length -1);
console.log(string.toUpperCase ());
console.log(string.toLowerCase());

let text ="programming"
console.log(text.substring(1,3));
console.log(text.substr(1,4));


let day = "30 Days of javascript"
console.log(day.split());
console.log(day.split(" "));

console.log(day.includes("Days"));


let title="javascript"
let lastIndex= title.length -1;
console.log(title.charAt(lastIndex));
console.log(title.indexOf("j"));
console.log(day.replace("Days","Months"));


//assignment operators//
let numOne = 5;
let numTwo = 4;
let sum =numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numTwo
let div = numOne / numTwo
let reminder = numOne % numTwo
let powerOf = numOne ** numTwo
console.log(sum, diff, mult, reminder, powerOf );



// comparison operators//

let first = 3;
let second = 2;
console.log(first > second);
console.log(first < second);
console.log(first == second);
console.log(first === second);
console.log(first !== second);
console.log(first <= second);

console.log("3" == 3);
console.log("3" === 3);


//  console.log() //
console.log(1 == true);
console.log(0 == true);
console.log(0 == false);
console.log(0 === false);

//logical operators
let check = 4 > 3 && 10 > 5;
let see = 4 > 3 && 5 > 10;
let num3=4< 3 && 5 <4;
//true and true = true
//true and false = false
//false and false = false
console.log(check, see, num3);

//false or false = false;
//true or false =true;
//true or true = true;



let compare = 4 > 3 || 10 >5;
let value = 4 > 3 || 10 < 5;
let answer =4 < 3 || 10 < 5; 
console.log(compare, value, answer );

//negation operator
let negate =!(4 > 3);
let result = !true;
console.log(result,negate);

//increament and decreament operators
let count =20;
console.log(++count);
console.log(count++);
let num =20
num--;
// console.log(num--);
// console.log(--num);
console.log(num);


//ternarry operators
let isMan = true;
isMan ? console.log("yes,he is man"):
console.log("no, he is not a man");














