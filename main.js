// let greeting='hello';
// alert(`${greeting}`);

// let name=prompt('enter your name');
// console.log(`${name}`);

// let firstNumber=prompt('enter number');
// let firstSecond=prompt('enter number');
// let final=+firstNumber + +firstSecond
// let outPut=number(firstNumber) +number(firstSecond);
// console.log(outPut)
// console.log(final);

const agree =confirm(`are you sure you want to subscribe?`);
console.log(agree);

let numBer = 'I love Javascript and i believe you also love javaascript'
let rest = /javascript/gi
console.log(numBer.match(rest));

let isAMan = true
if ( isAMan){
    console.log('yes, he is a man');
}else{
    console.log('no,he is not a man');
}

let b =5
if(b< 5) {
    console.log('not correct');

}else  if (b==5){
    console.log("it is correct");
}else if(b>5){
    console.log("it is wrong");
}else{
    console.log("Try again");
}


let today = prompt('what day is today')
let day = today.toLowerCase()
switch(day){
    case 'monday':
        console.log('today is monday')
        break;
        case 'tuesday':
        console.log('today is tuesday')
        break;
        case 'wednesday':
        console.log('today is wednesday')
        break;
        case 'thursday':
        console.log('today is thursday')
        break;
        case 'friday':
        console.log('today is friday')
        break;
        default:
            console.log("it is not a day");

}

