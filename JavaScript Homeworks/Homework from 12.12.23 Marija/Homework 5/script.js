function sumOfNumbers(array){
    
    let maxNumber = Math.max(...array);
    
    let minNumber = Math.min(...array);

    let sum = maxNumber + minNumber;
    
        
    
 console.log("Max:" + maxNumber + ", Min:" + minNumber + ", Sum:" + sum);
                 
}

let arrayNumber1 = [1, 2, 3, 4, 5, 6];
let arrayNumber2 = [324, 55, 456, 888, 1234];

let arrayTwo = sumOfNumbers(arrayNumber1);
let arrayThree = sumOfNumbers(arrayNumber2);