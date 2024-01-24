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

let jav = 'JavaScript'
console.log(string.substr(4,6))    // Script

let country = 'Finland'
console.log(country.substr(3, 4))   // land


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



//symbol operators
const mySymbol = Symbol()
console.log(mySymbol)
const newSymbol=Symbol("hi")
console.log(newSymbol)

//concatenation operation
const love="i love"
const sentence=love + " "+" studing"+" " + day
console.log(sentence)
const backtickSentence=`${love} studing ${day}`
console.log(backtickSentence);
const myArray=["rukkayya","munirah","grace"]
console.log(myArray);
myArray[0]="salamat";
console.log(myArray);


//MATHS OBJECT
const four=4
console.log(Math.sqrt(four));
console.log(Math.pow(four, 2));
console.log(Math.PI);
console.log(Math.random());
console.log(Math.random () * 1);
console.log(Math.max(4, 3, 9, 0));
// console.log(Math.floor(Math.random() * 10 + 1)); 
let random=Math.random() * 10 + 1;
const click =random<= 10 ?random :10;
console.log(click.toFixed(4));
// const pi =Math.PI
// console.log()

//math.ciel is for promotion
//math.round is does d normal round up

let s = '   30 Days Of JavaScript   '

console.log(s)
console.log(string.trim(' '))

let firstName = ' Asabeneh '

console.log(firstName)
console.log(firstName.trim())  // still removes spaces at the beginning and the end of the string

//string.charCodeAt(index)
let str = '30 Days Of JavaScript'
console.log(str.charCodeAt(3))        // D ASCII number is 68

let lastInd = string.length - 1
console.log(string.charCodeAt(lastIndex)) // t ASCII is 116

//concat
let days = '30'
console.log(string.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript

let continent = 'Fin'
console.log(continent.concat("land")) // Finland




















