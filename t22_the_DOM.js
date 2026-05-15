/****************************
Name of Task: T22-The DOM
****************************/

console.log("Running task 21");

//Variables
    
var userInfo;
const year = 2026;
const likesChocolateArray = ["You loathe Chocolate", "Chocolate is meh", "Chocolate is pretty good", "Chocolate is the best thing ever"];
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
    console.log(userInfo)
}

function getFormInput(){
    const NAME_FIELD = document.getElementById("nameField");
    const AGE_FIELD = document.getElementById("ageField");
    const POCKET_MONEY_FIELD = document.getElementById("pocketMoneyField");
    const LIKES_CHOCOLATE_FIELD = document.getElementById("likesChocolateField")
    
    output.innerHTML += likesChocolateArray[likesChocolate];
    userInfo = {
        usersName: NAME_FIELD.value,
        age: Number(AGE_FIELD.value),
        pocketMoney: Number(POCKET_MONEY_FIELD.value),
        likesChocolate: Number(LIKES_CHOCOLATE_FIELD.value - 1)
    }

    if (typeof usersName != "string" || usersName == "" || usersName.length < 3){
        alert("Please enter a valid name")
        return
    }
    if (age > 0 && age < 117){
        console.log("Valid age")
    } else{
        alert("Please enter a valid age")
        return
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

function getVersesInput(){
    const VERSES_FIELD = document.getElementById("versesField")
    var verses = Number(VERSES_FIELD.value)
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
    alert("You added '" + item + "' to the list")
    shoppingListOutput.innerHTML += "<li>" + item + "</li>";
}

function displayUserInfo(){
    output.innerHTML += "<p><b>User Info:</b><br>" + userInfo.usersName + "<br>" + userInfo.age + "<br>" + userInfo.pocketMoney + "</p>";
}

