/****************************
Name of Task: Activate Via Buttons - Task 9
****************************/

console.log("Running task 09")

//Variables
let usersName = "Christian"
var age = 15
var pocketMoney = 50
var year = 2026
var yearBorn = year - age
const output = document.getElementById("spaceForJavaScriptOutput")


/****************************
Main code
****************************/








/****************************
Functions
****************************/



function welcome(){
    output.innerHTML += "Welcome to the shop"
}

function displayProduct(_name, _price){
    output.innerHTML += "<p>" + _name + ":" + " $" + _price + "</p>"
}

function start(){
    output.innerHTML = "<h2>Hi " + usersName + "</h2>"
    output.innerHTML += "<p>As of " + year + " you are " + age + " years old.</p>"
    output.innerHTML += "<p>You have " + pocketMoney + " dollars</p>"
    output.innerHTML += "<p>You were born in " + yearBorn + "</p>"
    age = age + 10
    output.innerHTML += "<p>In ten years you will be " + age + "</p>"
    pocketMoney = pocketMoney / 2 
    output.innerHTML += "<p>You spend half your money, now you have $" + pocketMoney + "</p>"
    pocketMoney = pocketMoney + 3
    output.innerHTML += "<p>Then you get $3, now you have $" + pocketMoney + "</p>"
    welcome()
    displayProduct("Chocolate bar", 4)
    displayProduct("Chips", 3)
    displayProduct("Drink", 2.50)
}

