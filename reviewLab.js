// W3D2 Slide
/*
A. Q + A
How do we assign a value to a variable?  
With the assignment operator


How do we change the value of a variable?
Call or Select the variable and set = "new value"

How do we assign an existing variable to a new variable?
Set existingVariable = newVariable


Remind me, what are declare, assign, and define?
Declare - creating a variable (var, let, const)
Assign - giving variable a value
Define -  when a varibale is assigned to a value it is "defined"

What is pseudocoding and why should you do it?
-psedocoding is a way to apply logic to your code before it is written
-helps to clearly see steps you want to take to write the code

What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
- 80%
*/




// B. Strings
// Create a variable called firstVariable
var firstVariable 

// Assign it the value of the string "Hello World"
var firstVariable = ("Hello World");

// Change the value of this variable to some number
var firstVariable = (32);

// Store the value of firstVariablein a new variable called secondVariable
var secondVariable = firstVariable;

// Change the value of secondVariableto any string.
var secondVariable = ("Hello");

// What is the value of firstVariable? Should be "Hello" but I dont know what I'm doing wrong. 
console.log(firstVariable) 

// Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
var yourName = "Moriah"
console.log(`Hello, my name is ${yourName}`)




// C. Booleans
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' == 'Name'); (e == e)
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false == false == false == false == false != true);
  console.log(false == false)
  console.log(e == 'Kevin');
  console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');



//   D. The farm
// Declare a variable animal. Set it to be either "cow" or something else
// Write code that will print out "mooooo" if the it is equal to cow
// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
// Commit

 var Animal = "dog"
 if (Animal == "cow") {
    console.log("mooooooo")
 } else {
    console.log("Hey! You're not a cow.")
 }


//  E. Driver's Ed
var driverAge = 13
if (driverAge >= 16){
    console.log("Here are the Keys!")
} else{ 
    console.log("Sorry, you're too young.")
}


// II. LOOPS
// A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// Write a loop that will print out all the numbers from 10 up to and including 400
for (let i = 10; i <= 400; i++){
    console.log(i);
}
// Write a loop that will print out every third number starting with 12 and going no higher than 4000
for (let i = 12; i < 4000; i+=3){
    console.log(i)
}
    
// B. Get even
// Print out the numbers that are within the range of 1 - 100
for (let i = 1; i <= 100; i++){
    console.log(i)
}
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
for (let i = 1; i <= 100; i++){
    if (i % 2 == 0) {
        console.log ((i) + "<-- is an even number")
    }
    else{
        console.log(i)
    }
}

// C. Give me Five
// 1. For the numbers 0 - 100
// log "I found a 'number'. High five!"
// if divisible by 5

// 2. Add to code above to print
//  "I found a 'number". Three is a crowd"
// if divisible by 3

// 3. if divisible by 3 & 5
// print both messages

for (let i = 0; i < 100; i++){
    let number = i
    if (i % 15 == 0){
        console.log(`I found a ${number}. High five! Three is a crowd`)
    }
    else if (i % 5 == 0) {
        console.log(`I found a ${number}. High five!`)
    } else if (i % 3 == 0) {
        console.log(`I found a ${number}. Three is a crowd`)
    } else {
        console.log(i)
    }
}


// D. Savings Account
// 1. Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
let deposits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = deposits.reduce(function(a, b) {
    return a + b;
}, 0);
let bank_account = sum
console.log("$" + bank_account)

// 2. You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
const calculateBonus = () => {
    let result = 0
for (let i = 1; i <= 100; i++) {
    result = result + (i * 2);
}
return result
}
let bankAccount = calculateBonus()
console.log("$" + bankAccount)


// III Arrays & Control flow
// A. Talk about it:
// What are the things in an array called?  Elements

// Do Arrays guarantee those things will be in order?  Yes, they are in a specific index order

// What real-life thing could you model with an array?  List of students, colors, any type of list.

// B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes

let quotes = ["If you stay ready, you dont have to get ready", "Live, laugh, love", "objects in motion, stay in motion"];


// C. Accessing elements
// Given the following array 
const randomThings = [1, 10, "Hello", true]

// How do you access the 1st element in the array? 
randomThings[0]
// Change the value of "Hello"to "World" 
randomThings.splice(2, 1, "World")
// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings)

// D. Change values
// Given the following array const 
ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// What would you write to access the 3rd element of the array? ourClass[2]
// Change the value of "Github" to "Octocat"
ourClass.splice(4, 1, "Octocat")
// Add a new element, "Cloud City" to the array
ourClass.push("Cloud City")
console.log(ourClass)


// E. Mix It Up
// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

// Given the following array: 
const myArray = [5, 10, 500, 20]

// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Aegon","House of Stark")
// Remove the 5from the beginning of the array.
myArray.shift()
// Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley")
// Remove the string of your choice from the end of the array.
myArray.pop()
// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything? The array was mutated bc it changed the order of the array.
const reversed = myArray.reverse()

console.log(reversed)

// F. Biggie Smalls
// Create a variable that contains an integer.
let num = 100

// Write an if ... elsestatement that:
// console.log()s "little number" if the number is entered is less than 100
// console.log()s big numberif the number is greater than or equal to 100.
if (num >= 100) {
    console.log("Big Number!")
} else {
    console.log("little number")
}


// G. Monkey in the Middle
// Write an if ... else if ... elsestatement:
// console.log()little numberif the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".
let num2 = 7
if (num2 < 5){
    console.log("little number")
} else if (num2 > 10){
    console.log("big number")
} else { 
    console.log("monkey")
}


// H. What's in Your Closet?
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

// 1.  What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log("Kristyn is rocking that" + kristynsCloset[2] + "today")
// 2. Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
kristynsCloset.splice(6,0, "raybans") 
console.log(kristynsCloset)
// 3. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
kristynsCloset.splice(5, 1, "stained knit hat")
console.log(kristynsCloset)
// 4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
let thomsShirt = thomsCloset[0][0]

// 5. In the same way, access one item from Thom's pants array.
let thomsPants = thomsCloset[1][0]

// 6. Access one item from Thom's accessories array.
let thomsShades = thomsCloset[2][2]
// 7. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(`Thom is looking dapper in his ${thomsShirt}, ${thomsPants}, and awesome ${thomsShades}.`)
// 8. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1].splice(2,1,"Footie Pajamas")
console.log(thomsCloset)

// IV. Functions
// A.
printGreeting = (name) => {
    console.log(`Hello there ${name}`)
}
printGreeting("Slimer")

// B. printCool
printCool = (name) => {
    console.log(`${name} is cool!`)
}
printCool("Captain Reynolds")

// C. calculateCube
calculateCubeVolume = (Number) => {
 result = Number ** 3
 return result
}
 console.log(calculateCubeVolume(4))


 // D. isVowel

 isVowel = (letter) => {
    let vowels = 'a'|| 'e' || 'i'|| 'o'|| 'u'
if (letter == vowels){
    return true
} else{
    return false
}

 }
console.log(isVowel('z'))


// E. getTwoLengths
// Write a function getTwoLengthsthat accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

getTwoLengths = (string, string2) => {
    let arr = [string.length,string2.length]
    return arr
}
console.log(getTwoLengths("Hank","Hippopopalous"))

// F. getMultipleLengths
// Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

// getMultipleLengths = ([strings]) =>{
//     let arr = []
//     arr.forEach(el => {
//         console.log(el.length)  
//     });
// }
    

// console.log(getMultipleLengths(['mom', 'mommy', 'mum', 'hiii']))

// G. Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

// maxOfThree = (num1, num2, num3) =>{

// }

// H. Write a function printLongestWordthat accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
const printLongestWord = ([arrayOfStrings]) => {
    let longestStringLength = 0;
    arrayOfStrings.forEach(
      (el) => {
        if (longestStringLength < el.length) {
          longestStringLength = el.length;
        }
      }
    )
    return (longestStringLength);
  }
  console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]))



// // Objects
// // A. Make a user object
// // 1. Create an object called user.
// // 2. Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.
//  const user = {
//     name: "Jojo",
//     email: "jojo2022@aol.com",
//     age: 23,
//     purchased: []
// }

// // B. Update the user
// // 1.Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
// // 2.Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++
// user.name = "msjojo.gmail.com"
// user.age = ++user.age
// console.log(user.age)

// // C. Adding keys and values
// // You have decided to add your user's location to the data that you want to collect.
// // 1. Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).
// user.location = "Bali"
// console.log(user)

// // D. Shopaholic!
// // 1. Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
// user.purchased.push("carbohydrates")
// // 2. Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
// user.purchased.push("peace of mind")
// // 3. Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
// user.purchased.push("merino jodhpurs")
// // 4. Console.log just the "Merino jodhpurs" from the purchasedarray.
// console.log(user.purchased[2])


// // E. Object-within-object
// // Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)
// user.friend = {name:"Jacoby", age: 22, location:"Maldives", purchased: []}
// // Console.log just the friend's name
// console.log(user.friend.name)
// // Console.log just the friend's location
// console.log(user.friend.location)
// // CHANGE the friend's age to 55
// user.friend.age = 55
// // The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
// user.friend.purchased.push("The One Ring")
// // The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
// user.friend.purchased.push("A latte")
// // Console.log just "A latte" from the friend's purchasedarray.
// console.log(user.friend.purchased[1])

// // F. Loops
// // Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.
// for (let i=0; i < user.purchased.length; i++){
//     console.log(user.purchased[i])
// } 
// // Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.
// for (let i=0; i < user.friend.purchased.length; i++){
//     console.log(user.friend.purchased[i])
// }

// // G. Functions can operate on objects
// // 1. Write a single function updateUserthat takes no parameters. When the function is run, it should:
// //  it should increment the user's age by 1
// //  make the user's name uppercase
// // The function does not need a returnstatement, it will merely modify the user object.
// updateUser = () => {
//     if (user.age == user.age){
//         ++user.age
//     } else if(user.name == user.name){
//         user.name.toUpperCase
//     }
//     console.log(updateUser())
// }
// updateUser()

// // // 2. Write a function oldAndLoudthat performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoudfunction with useras the argument.

// // oldAndLoud = (person) => {
// //     if (person == user.name || user.friend.name){
        
// //     }
// // }