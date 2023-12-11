console.log('Homework 2');

function convertDogYearsToHumanYears(dogYears){
    let result = dogYears * 7;
    return result;
}

let firstDog = convertDogYearsToHumanYears(10);
let secondDog = convertDogYearsToHumanYears(5);
let thirdDog = convertDogYearsToHumanYears(8);

console.log(firstDog);
console.log(secondDog);
console.log(thirdDog);

function convertHumanYearsToDogYears(humanYears){
    let result = humanYears / 7;
    return result;
}

let firstHuman = convertHumanYearsToDogYears(65);
let secondHuman = convertHumanYearsToDogYears(20);
let thirdHuman = convertHumanYearsToDogYears(12);

console.log(firstHuman);
console.log(secondHuman);
console.log(thirdHuman);