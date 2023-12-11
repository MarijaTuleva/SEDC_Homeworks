console.log('Homework 3');

let money = 10000;
let withdrawMoney = parseInt(prompt("Welcome to the ATM.\n You have " + String(money) + " denars in your account.\n How much money would you like to withdraw?"));
let moneyLeft = money - withdrawMoney;

if (withdrawMoney <= money) {   
   alert ("You have withdrawn " + String(withdrawMoney) + " denars. You now have " + String(moneyLeft) + " denars left in your account.");   
    
}

else if (withdrawMoney > money) {
    alert("You don't have enough money in your account.");
}


