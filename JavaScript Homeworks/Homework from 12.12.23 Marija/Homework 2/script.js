
arrayOne = [3, 45, 22, 156, 678];
arrayTwo = [566, 345, 'hello', 75, 444];

function returnSum(array){
    let sum = 0;

    for(i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}

function validateNumber(array){

    for(let i = 0; i < array.length; i++){
        if(typeof array[i] === 'number'){
            console.log(`${array[i]} is a valid number.`);
        }
        else{
            console.log("Error! One of the numbers in the array is invalid.");
        }
    }
    
    
}


let sum1 = returnSum(arrayOne);
console.log(sum1);


let valid1 = validateNumber(arrayOne);
console.log("--------------------------");
let valid2 = validateNumber(arrayTwo);






