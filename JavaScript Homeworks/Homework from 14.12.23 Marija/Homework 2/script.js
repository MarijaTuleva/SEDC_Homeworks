
arrayOne = [24, 556, 745, 3, 45, 988, 234];

let orderedList = document.createElement('ol');


for(i = 0; i < arrayOne.length; i++){
    let element = document.createElement('li');
    element.innerHTML = arrayOne[i];
    orderedList.appendChild(element);
    
} 
    
document.getElementById('list').appendChild(orderedList);



document.getElementById('sum');

function sumOfArray(array){
    let sumOfNumbers = 0;
    
    for(i = 0; i < array.length; i++){
        sumOfNumbers += array[i];
        
    }
    
    return`
    <p> The sum of the numbers in the array is ${sumOfNumbers}.</p>`
    
   
     
}

sum.innerHTML += sumOfArray(arrayOne);


