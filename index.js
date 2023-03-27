
"use strict"

//values and variables

//Number - 1, 2, 3 truthy values
//String - "Tolu" truthy values

//Boolean - true or false



//undefined - error -- falsy values 
//null - error -- falsy value
//0 -- falsy values
//NaN -- falsy values


// + - / ++ == = === || && > < >= <=





//== equal value

//if/else - when if () condition is true




let ageDare = null  //truthy



// || logical "or"
// && logical "and"
let ageTolu = "5" //truth


// if(true or false) {
//do something }

// false or false or false = false
//false or true = true

// if (ageTolu < 3) {
//   console.log("yes")
// }
// else if (ageTolu === 5) {
//   console.log("not sure")
// }
// else if (ageTolu === 5) {
//   console.log("not sure again")
// }
// else if (ageTolu == "3") {typeof
//   console.log("not sure again")
// }

// else {
//   console.log("safe")
// }


// if ( "tolu" === "number") {
//   console.log("yes")
// }
// else {
//   console.log("no")
// }





//template literals (normal string is "" while template literal ``)


let toluBirthyear = 1992





//create a function that generate ONE string from the object argument, calculating the user's birthyear, calculate if the user is old to enough to register (>18), and calculating the dad's and mom's age this time from the birthyear. If both the mom and dad are older than 70, then the child should stay with them, else the child should not stay with them.

// let obj = {
//   name: "Tolu",
//   address: "MappleWood Estate",
//   age: 30,
//   dadBirthYear: 1891,
//   mumBirthYear: 1892
// }

// const engine = function (obj) {

//   let decision = ""

//   let decisoonTwo = ""

//   const dadAge = 2023 - obj.dadBirthYear
//   const momAge = 2023 - obj.mumBirthYear

//   if (dadAge > 70 && momAge > 70) {
//     decision = "The child should stay with them."
//   }
//   else {
//     decision = "The child should not stay with them."
//   }

//   if (obj.age > 18) {
//     decisoonTwo = ""
//   }
//   else {
//     decisoonTwo = "not"
//   }

//   console.log(`${obj.name} lives in ${obj.address} with his parents, a ${2023 - obj.dadBirthYear} years old man, and a ${2023 - obj.mumBirthYear} years old woman. Tolu himself was born in ${2023 - obj.age}, and he is ${decisoonTwo} old enough to register. ${decision}.`)
// }



// engine(obj)

// "Tolu lives in lokoja with his parents, a 54 years old man, and a 80 years old woman. Tolu himself was born in 1993, and he is/not old enough to register. The child should/not stay with them."



















// const johnHeight = 1.76
// const markHeight = 1.88
// const johnMass = 85
// const markMass = 95


// const markBMI = markMass / (markHeight * markHeight)
// const johnBMI = johnMass / (johnHeight * johnHeight)


// // console.log(`Mark's BMI is ${markBMI > johnBMI ? "higher" : "less"} than John's!`)


// if (markBMI > johnBMI) {
//   console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`)
// }
// else if (johnBMI > markBMI) {
//   console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`)
// }








// const giveMeTheStatsOfTwoUsers = function (userOneMass, userTwoMass, userOneHeight, userTwoHeight, userOneName, userTwoName) {

//   const userOneBMI = userOneMass / (userOneHeight * userOneHeight)

//   const userTwoBMI = userTwoMass / (userTwoHeight * userTwoHeight)


//   if (userOneBMI > userTwoBMI) {
//     console.log(`${userOneName}'s BMI (${userOneBMI}) is higher than ${userTwoName}'s (${userTwoBMI})!`)
//   }

//   else {
//     console.log(`${userTwoName} BMI (${userTwoBMI}) is higher than ${userOneName}'s (${userOneBMI})!`)
//   }

// }


// giveMeTheStatsOfTwoUsers(78, 200, 1.69, 1.95, "Wale", "Tom")
























// Coding Challenge. Submission for Wednesday.

// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 😉
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123






















//-----ASSESSMENT THREE --------//
// let DolphinsAverage = (400 + 400 + 400) / 3
// let koalasAverage = (400 + 400 + 400) / 3

// if (DolphinsAverage > koalasAverage) {
//   console.log(`dolphins team are the winner of this challenge with an average of ${DolphinsAverage}`)
// }
// else if (koalasAverage > DolphinsAverage) {
//   console.log(` kola's team are the winners of this challenge with an average of ${koalasAverage}`)
// }
// else if (koalasAverage === DolphinsAverage) {
//   console.log(`the results of the two events ended in a draw`)
// }


// const minimum = 100

// // a team only wins if it scores higher than the other and has a score higher than 100

// if (DolphinsAverage > koalasAverage && DolphinsAverage > 100) {
//   console.log(`dolphins team are the winner of this challenge with an average of ${DolphinsAverage}`)
// }

// else if (koalasAverage > DolphinsAverage && koalasAverage > 100) {
//   console.log(`koalas team are the winner of this challenge with an average of ${koalasAverage}`)
// }

// else if (koalasAverage === DolphinsAverage && DolphinsAverage > 100 && koalasAverage > 100) {
//   console.log("A draw")
// }

// else {
//   console.log("No one wins")
// }










//FUNCTIONS LESSONS


//engine => carsToyota carsBenz carsBMW



// 2 ways to declare a function

//1.
//function expression

//2.
//function declaration


//function expression


// const myEngine = function (engineFilter, nameOfCar) {

//   console.log("before")


//   console.log("engine filter", engineFilter, "name of car", nameOfCar)

// }



// //benz //toyota //bmw



// //benz
// myEngine(2, "benz")


// // //toyota
// myEngine(2, "toyota")




//return keyword
//A return keyword in a function kills the function

//A  return keyword also helps the function return a specific value

// const calculator = function (firstNumber, secondNumber, command) {

//   if (firstNumber === 2 || firstNumber === 6 || secondNumber === 4) return

//   if (command === "+") {
//     return firstNumber + secondNumber
//   }

//   else if (command === "-") {
//     return firstNumber - secondNumber
//   }
// }










// const myEngine = function (type, edition) {

//   console.log(`This engine is of type ${type} and editing ${edition}`)

// }



// myEngine("toyota", 2)


// const myFunctionTypeZero = function () {
//   console.log("yes")
//   console.log("yes")
//   console.log("yes")
//   console.log("yes")
//   console.log("yes")
//   console.log("yes")
// }


// const userDetails = {
//   tolu: {
//     name: "Tolulope",
//     username: "totxprex",
//     age: 20
//   },
//   kunle: {
//     name: "Kunle",
//     username: "kxprex",
//     age: 18
//   }
// }


// function engine(jagoon) {

//   return `The first user is ${jagoon.tolu.name} and second user is ${jagoon.kunle.name}. Their combined age is ${jagoon.tolu.age + jagoon.kunle.age}`

// }


// console.log(engine(userDetails))









// const newObj = {
//   tolu: {
//     name: "nobody",
//     username: "totxprex",
//     age: 20
//   },
//   kunle: {
//     name: "nobody",
//     username: "kxprex",
//     age: 18
//   }
// }

// console.log(engine(newObj))












///Data Structures

// Array, Object, Map, Set, Tree, Hash Table, Stack, Heap, Linked List, Queue


//Arrays
//Every value in an array has an index, usually the identifier for the values

//A - Index 0
//B - Index 1

//the first element in an array has index 0 and so on

// console.log(myArray.indexOf(1))
// console.log(myArray.indexOf(2))
// cons
// console.log(myArray.indexOf(3))

//to check the index of a value in an array, we use the theArray.indexOf(value) function


//I can make computations in the array via the index values

// console.log(myArray[2])

// console.log(myArray[0] + myArray[1] + myArray[2])




/// Using the function Push, we can add elements into an array

// myArray.push("added through push")

// console.log(myArray)



// //Using the function pop, we can remove elements into an array

// myArray.pop()

// console.log(myArray)


//to get the last element in an array
// console.log(myArray.length)
// console.log(myArray[myArray.length - 1])
// console.log(myArray)

// //unshift
// // myArray.push("added via unshift")

// // console.log(myArray)

// myArray.shift()

// console.log(myArray)





//Looping through arrays

//for loop
//forEach loop
//for of loop
//map
//find
//filter
//reduce



// const myArray = [1, 2, 3]

// for (let loop = 0; loop < myArray.length; loop++) {

//   console.log(`this loop is for ${myArray[loop]}`)

// }




 //Array forEach
21
const myArr = [1, 2, 3, 4, 5, 6] 


// we want js to have a start value
0 + 1
1 + 2
3 + 3
6 + 4
console.log("Array forEach")
let sum = 0


myArr.forEach((e, i, arr) => {
  sum = sum + e

  if (i === arr.length - 1) console.log(sum)
})


const myArrr = [1, 2, 3]


// Array Map
console.log("Array Map")

const newArrr = myArrr.map((e, i, arr) => {
  return e + 1
})

console.log(newArrr)






// Steven is still building a tip calculator: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above . Use the function
// type you like the most. Test the function using a bill value of 100





/* 
const calcTip = (billValue) => {

  if (billValue >= 50 && billValue <= 300) {

    //return 15% of the bill vlaue

    const theTip = 15 / 100 * billValue

    return theTip
  }
  else {
    //return 20% of the bill vlaue

    const theTip = 20 / 100 * billValue

    return theTip
  }

}

const bills = [125, 556, 44]


const tips = bills.map((e, i, arr) => {

  if (e >= 50 && e <= 300) {

    //return 15% of the bill vlaue

    const theTip = 15 / 100 * e

    return theTip
  }
  else {
    //return 20% of the bill vlaue

    const theTip = 20 / 100 * e

    return theTip
  }
})



const total = bills.map((e, i) => {

  //in each iteration, we want to add the bill value with the tip value

  //iteration 1: e = 125 and i = 0
  //iteration 2: e = 555 and i = 1
  //iteration 3: e = 44 and i = 2

  return e + tips[i]

})



console.log("tips", tips)
console.log("total", total)

 */




/* . And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip

Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) 
 */























               
             

