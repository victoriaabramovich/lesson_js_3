'use strict';
// # 1
function sum(...numbers) {
    let numberSum = 0;
    for (let item of numbers) {
      numberSum += item;
    }
    return numberSum;
  }
  
  let sumResultFnc = sum (10, 50, 6, 7, 8, 11, 6, 3, 9);
  console.log(sumResultFnc);

// #2
let user = {
  firstname: 'giorgi',
  lastname: 'saakadze',
  age: 32,
  isloggedin: true
};

function printName (user) {
    if (user.isloggedin) {
    return user.firstname + user.lastname;
    }
    return false;
}

let printNameResult = printName(user);
console.log(printNameResult);

// #3
function numMax(numbers) {
    let maxValue = 0;
    for (let item  of numbers){
        if (item > maxValue){
            maxValue = item;
        }
    }
}
 let numMaxResult = numMax ([28, 120, 7, 180, 3])
 console.log(numMaxResult);

//  #4
// 1 varianti
function numFunc1(x) {
    if (x % 1 == 0){
        return  "this number is odd"
    }
    return "odd"

}
let numFuncResault1 = numFunc1 (13);
console.log(numFuncResault1);

// 2 varianti
function numFunc(x) {
    if (x % 2 == 0){
        return  "this number is even"
    }
    return "odd"

}
let numFuncResault = numFunc (20);
console.log(numFuncResault);

// #5
let array = [1,2,3,4,5];

for (let i = array.length -1; i >=0; i--){
    console.log(array[i]);
}

// #6
 function = "user"
 age : 18;
 const userAge = (age) => age > 18 ? "სრულლოვანი" : "არასწულწლოვანი";

console.log(userAge(19)); // სრულლოვანი
console.log(userAge(13)); // არასწულწლოვანი