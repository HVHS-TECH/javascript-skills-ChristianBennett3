/****************************
Name of Task: T18-Validation
****************************/

console.log("Running task 18");

//Variables
var usersName;
var pocketMoney;
var year = 2026;
var likesChocolateArray = ["You loathe Chocolate", "Chocolate is meh", "Chocolate is pretty good", "Chocolate is the best thing ever"];
const outputMilk = document.getElementById("milkVerses");
const output = document.getElementById("spaceForJavaScriptOutput");
const shoppingListOutput = document.getElementById("shoppingListOutput")


/****************************
Main code
****************************/

/****************************
Functions
****************************/



function welcome(){
    output.innerHTML += "Welcome to the shop";
}

function displayProduct(_name, _price){
    output.innerHTML += "<p>" + _name + ":" + " $" + _price + "</p>";
}

function start(){
    output.innerHTML = "<h2>Hi " + usersName + "</h2>";
    output.innerHTML += "<p>As of " + year + " you are " + age + " years old.</p>";
    output.innerHTML += "<p>You have " + pocketMoney + " dollars</p>";
    var yearBorn = year - age;
    output.innerHTML += "<p>You were born in " + yearBorn + "</p>";
    age = age + 10;
    output.innerHTML += "<p>In ten years you will be " + age + "</p>";
    pocketMoney = pocketMoney / 2 ;
    output.innerHTML += "<p>You spend half your money, now you have $" + pocketMoney + "</p>";
    pocketMoney = pocketMoney + 3;
    output.innerHTML += "<p>Then you get $3, now you have $" + pocketMoney + "</p>";
    welcome();
    displayProduct("Chocolate bar", 4);
    displayProduct("Chips", 3);
    displayProduct("Drink", 2.50);
    canAffordChocolate();
    likesChocolateF();
}

function getFormInput(){
    const NAME_FIELD = document.getElementById("nameField");
    const AGE_FIELD = document.getElementById("ageField");
    const POCKET_MONEY_FIELD = document.getElementById("pocketMoneyField");
    const LIKES_CHOCOLATE_FIELD = document.getElementById("likesChocolateField")
    
    // Validate name - must be a string and not empty
    usersName = NAME_FIELD.value;
    if (typeof usersName != "string" || usersName == "" || usersName.trim() == ""){
        alert("Please enter a valid name");
        return;
    }
    
    // Validate age - must be between 1 and 116
    age = Number(AGE_FIELD.value);
    if (!(age > 0 && age < 117) || AGE_FIELD.value == ""){
        alert("Please enter a valid age");
        return;
    }
    
    // Validate pocket money - must be a positive number
    pocketMoney = Number(POCKET_MONEY_FIELD.value);
    if (isNaN(pocketMoney) || pocketMoney < 0 || POCKET_MONEY_FIELD.value == ""){
        alert("Please enter a valid pocket money");
        return;
    }
    
    // Validate likes chocolate - must be a number between 1 and 4
    var likesChocolateValue = Number(LIKES_CHOCOLATE_FIELD.value);
    if (isNaN(likesChocolateValue) || likesChocolateValue < 1 || likesChocolateValue > 4 || LIKES_CHOCOLATE_FIELD.value == ""){
        alert("Please enter a valid chocolate preference (1-4)");
        return;
    }
    
    start();
}

function canAffordChocolate(){
    if (pocketMoney >= 4){
        output.innerHTML += "<p>You can afford the chocolate bar!</p>"
        calculateChange(pocketMoney, 4)
     }else{
        output.innerHTML += "<p>Sorry, you can not afford the chocolate bar</p>"
    }
}

function calculateChange(_money, _price){
    let change = _money - _price;
    output.innerHTML += "<p>Your change is $" + change + "</p>"
}

function likesChocolateF(){
   const LIKES_CHOCOLATE_FIELD = document.getElementById("likesChocolateField");
   var likesChocolate = Number(LIKES_CHOCOLATE_FIELD.value);
   likesChocolate = likesChocolate - 1;
    output.innerHTML += likesChocolateArray[likesChocolate];
}

function getVersesInput(){
    const VERSES_FIELD = document.getElementById("versesField")
    var verses = Number(VERSES_FIELD.value)
    
    // Validate verses - must be a positive number and not empty
    if (isNaN(verses) || verses < 1 || VERSES_FIELD.value == ""){
        alert("Please enter a valid verses");
        return;
    }
    
    if (verses != 0){
        outputMilk.innerHTML += "1 bottle of milk on the wall<br>"
    }
    verses ++;
    for (i = 2; i < verses; i ++){
        outputMilk.innerHTML += i + " bottles of milk on the wall<br>";
    }
}

function getShoppingListInput(){
    const SHOPPING_LIST_FIELD = document.getElementById("shoppingListField")
    var item = SHOPPING_LIST_FIELD.value;
    
    // Validate shopping list item - must not be empty and must be a string
    if (typeof item != "string" || item == "" || item.trim() == ""){
        alert("Please enter a valid item");
        return;
    }
    
    alert("You added '" + item + "' to the list")
    shoppingListOutput.innerHTML += "<li>" + item + "</li>";
}

