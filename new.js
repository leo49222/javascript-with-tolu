"use strict"

// function expression 
const x = function(a, b){
   console.log(`${a *b}`)
}

x(4, 3)



//another way of writing functions expression
const myFunction = new Function("a", "b", "return a * b")
let y = myFunction(4, 6)
console.log(y)


//arrow funtions

const h = (b, d)=> b*d    // can only be written in single line

let l = h(3, 9)
console.log(l)



// function rest parameter 
let m = sum(3,4,34,35,12,122);

function sum(...args) {
   let sum = 0;
   for (let arg of args) sum += arg;
   
   return `${sum} is the total sum`;
}
console.log (m)



//// function the argument object
let q = findMax(3,4,34,35,12,122);

 function findMax() {
   let max = -Infinity;
   for(let i = 0; i < arguments.length; i++){
       if(arguments[i]>max){
           max = arguments[i];
       }
   }
   return max;
}
 


//invoking a function
const myObject = {
   firstName : "Leo",
   lastName : "nard",
   
}

 function fullName(obk) {
   return obk.firstName + "" + obk.lastName;
}


console.log(fullName(myObject))



//REUSING FUNCTIONS

function sayHello(){
   console.log("hello world");
}

sayHello();

//another one

console.log(greeting());

function greeting(){
    console.log("hope you're good? ");

}


/// data streuctures

//arrays 
const myArray  = [ 17, 21, 23]

for ( let loop = 0; loop < myArray.length; loop++){
  console.log(`${myArray[loop]}°C in day ${loop}`)
}

/// function scope writing functions inside functions 
let a = 34;
let b = 123;


function newPara(){
   let name = "john";

   function childFunc(){
      console.log(`${name}is ${b - a} years old`)

   }
   return childFunc();
   

   
}

newPara()

///reusing  a function

function greetMe( name, message = "Hi there"){
   console.log(`${name} ${message}`)
}
greetMe("Fola,")

greetMe("Praise,", "What are you doing")


//arrays adding with push and unshift 
function mixedNumbers(arr){
   arr.unshift("I", 2 ,"three")
   arr.push(7, "VIII", 9)
   return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));


//defininig a function to store mutiple arguments 
function sayHi(messages, ...names){
      names.forEach( name=> console.log(`${messages} ${names}`))

}

sayHi("hello" , "john", "smith", "jennifer");
/// creating an array
let arr = []
arr[0] = "hello";
console.log(arr)


/*///assignment three
let bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
let tips = []

tips.unshift(100, 123, 50, 24, 23, 90)
console.log(tips)

let totBillValue = 0

bill.forEach((e, i, arr) => {
   totBillValue =  totBillValue + e
   if (i === arr.length - 1) console.log(`total bills is $${totBillValue}`)
})

let totTipValue = 0
tips.forEach((e, i, arr) => {
   totTipValue = totTipValue + e
   if (i === arr.length - 1) console.log(`total tips is $${totTipValue}`)

}

)


const totSumValue = totBillValue + totTipValue
console.log(`Total amounts is $${totSumValue}`)




function calAverage(){
   return(`Average per bills/tips is $${totSumValue/(bill.length + tips.length)}`)
}
console.log(calAverage())

*/


///pop and shift

function popShift(arr) {
   let popped = arr.pop()
   let shifted = arr.shift()
   return [shifted, popped];
 }

 console.log(popShift(['challenge', 'is', 'not', 'complete']));

 // splice removes two or more elements consecutively
 const arp = [2, 4, 5, 1, 7, 5, 2, 1];
 arp.splice(1,4)
 console.log(arp);

 // adding elements using splice

 function htmlColorNames(arr) {
   const startIndex = 0;
   const amountToDelete = 2
   arr.splice(startIndex, amountToDelete, "DarkSalmon","BlanchedAlmond")
   return arr;
 }
 
 console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

 // copying elements with splice

 function forecast(arr) {

   return arr.slice(2, 4)
 }
 
 console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));



 //assignment three 

 let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

const calcTip = (billValue) => {

   if (billValue >= 50 && billValue <= 300) {

     const theTip = 15 / 100 * billValue  //return 15% of the bill value
 
     return theTip
   }
   else {
      
     const theTip = 20 / 100 * billValue //return 20% of the bill value

 
     return theTip
   }
 
 }

// array values for  tips in each bill

 const tips = bills.map(calcTip)

// array total Value of bills and tips  
const total = tips.map((e, i) => {
 return  e + bills[i] 
}
)


//total value of tips 

let totTips = 0
tips.forEach((e, i, arr) => {
   totTips  = totTips + e
   if (i === arr.length - 1) console.log(`total tips is $${totTips}`)

 

   })
// total value of bills
let totbills = 0
bills.forEach((e, i, arr) => {
   totbills  = totbills + e
   if (i === arr.length - 1) console.log(`total bills is $${totbills}`)

 

   })




let totalAmountRecieved = 0
total.forEach((e, i, arr) => {
   totalAmountRecieved  = totalAmountRecieved + e
   if (i === arr.length - 1) console.log(`total amount recieved is $${totalAmountRecieved}`)

 

   })



 function calAverage(arr){
   return(`average per bills/tips ${totalAmountRecieved/(bills.length + tips.length)}`)
 }



 console.log("tips", tips)
 console.log("total", total)
 console.log(calAverage())



