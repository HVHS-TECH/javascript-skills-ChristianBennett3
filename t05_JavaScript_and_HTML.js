/****************************
Name of Task: JavaScript and HTML - Task 5
****************************/

console.log("Running task 05")

//Variables
let usersName = "Christian"
var age = 15
var pocketMoney = 50
var year = 2026
var yearBorn = year - age
const output = document.getElementById("JavaScriptOutput")


/****************************
Main code
****************************/



output.innerHTML = `Hi ${usersName}, you are ${age} years old.`;
console.log("As of " + year + " you are " + age + " years old.")
console.log("You have " + pocketMoney + " dollars")
console.log("You were born in " + yearBorn)
age = age + 10
console.log("In ten years you will be " + age)
pocketMoney = pocketMoney / 2 
console.log("You spend half your money, now you have $" + pocketMoney)
pocketMoney = pocketMoney + 3
console.log("Then you get $3, now you have $" + pocketMoney)


/****************************
Functions
****************************/