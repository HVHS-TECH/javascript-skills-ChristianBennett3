/****************************
Name of Task: T22-The DOM
****************************/

console.log("Running task 22");

//Variables
    
var userInfo;
var newAge;
const year = 2026;
const likesChocolateArray = ["You loathe Chocolate", "Chocolate is meh", "Chocolate is pretty good", "Chocolate is the best thing ever"];
const outputMilk = document.getElementById("milkVerses");
const output = document.getElementById("spaceForJavaScriptOutput");
const shoppingListOutput = document.getElementById("shoppingListOutput");


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
    output.innerHTML = "<h2>Hi " + userInfo.usersName + "</h2>";
    output.innerHTML += "<p>As of " + year + " you are " + userInfo.age + " years old.</p>";
    output.innerHTML += "<p>You have " + userInfo.pocketMoney + " dollars</p>";
    var yearBorn = year - userInfo.age;
    output.innerHTML += "<p>You were born in " + yearBorn + "</p>";
    newAge = userInfo.age + 10;
    output.innerHTML += "<p>In ten years you will be " + newAge + "</p>";
    userInfo.pocketMoney = userInfo.pocketMoney / 2 ;
    output.innerHTML += "<p>You spend half your money, now you have $" + userInfo.pocketMoney + "</p>";
    userInfo.pocketMoney = userInfo.pocketMoney + 3;
    output.innerHTML += "<p>Then you get $3, now you have $" + userInfo.pocketMoney + "</p>";
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
    const LIKES_CHOCOLATE_FIELD = document.getElementById("likesChocolateField");
    
    userInfo = {
        usersName: NAME_FIELD.value,
        age: Number(AGE_FIELD.value),
        pocketMoney: Number(POCKET_MONEY_FIELD.value),
        likesChocolate: Number(LIKES_CHOCOLATE_FIELD.value) - 1
    }
    
    output.innerHTML += likesChocolateArray[userInfo.likesChocolate];

    if (typeof userInfo.usersName != "string" || userInfo.usersName == "" || userInfo.usersName.length < 3){
        alert("Please enter a valid name")
        return
    }
    if (userInfo.age > 0 && userInfo.age < 117){
    } else{
        alert("Please enter a valid age")
        return
    }

    if (userInfo.likesChocolate < 0 || userInfo.likesChocolate > 3){
        alert("Please enter a valid chocolate preference (1-4)")
        return
    }

    if (isNaN(userInfo.pocketMoney) || userInfo.pocketMoney < 0){
        alert("Please enter a valid pocket money input")
        return
    }

    start();
}

function canAffordChocolate(){
    if (userInfo.pocketMoney >= 4){
        output.innerHTML += "<p>You can afford the chocolate bar!</p>"
        calculateChange(userInfo.pocketMoney, 4)
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

    if (isNaN(verses) || verses < 1 || VERSES_FIELD.value == "" || verses > 1000){
        alert("Please enter a valid verses input")
        return
    }

    outputMilk.innerHTML = "";

    if (verses != 0){
        outputMilk.innerHTML += "1 bottle of milk on the wall<br>"
    }
    verses ++;
    for (var i = 2; i < verses; i ++){
        outputMilk.innerHTML += i + " bottles of milk on the wall<br>";
    }

    document.getElementById("versesField").value = "";
}

function getShoppingListInput(){
    const SHOPPING_LIST_FIELD = document.getElementById("shoppingListField")
    var item = SHOPPING_LIST_FIELD.value;
    if (typeof item != "string" || item == ""){
        alert("Please enter a valid item")
        return
    }
    alert("You added '" + item + "' to the list")
    shoppingListOutput.innerHTML += "<li>" + item + "</li>";
}

function likesChocolateF(){
    output.innerHTML += "<p>" + likesChocolateArray[userInfo.likesChocolate] + "</p>";
}

function displayUserInfo(){
    output.innerHTML += "<p><b>User Info:</b><br>" + userInfo.usersName + "<br>" + userInfo.age + "<br>" + userInfo.pocketMoney + "</p>";
}

function clearFields(){
    document.getElementById("nameField").value = "";
    document.getElementById("ageField").value = "";
    document.getElementById("pocketMoneyField").value = "";
    document.getElementById("likesChocolateField").value = "";
    document.getElementById("shoppingListField").value = "";
    document.getElementById("versesField").value = "";
    
    userInfo = {
        usersName: "",
        age: 0,
        pocketMoney: 0,
        likesChocolate: 0
    }
    
    output.innerHTML = "";
    shoppingListOutput.innerHTML = "";
    outputMilk.innerHTML = "";
}

