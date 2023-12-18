

let question1 = prompt("What is the name of your recipe?");
if(question1 != null){
    h2.innerHTML += titleOfRecipe(question1);
}
else{
    alert('Please enter your recipe.');
    
}



let question2 = parseInt(prompt("How many ingredients do we need for the recipe?"));
if(question1 == null){
    
    alert('Please enter your recipe first');
}

else if(question2 != null){

    let unorderedList = document.createElement('ul');
    
    for (let i = 1; i <= question2; i++) {
    let ingredientNames = prompt(`What is the name of the ${i} ingredient?`);
        
    let element = document.createElement('li');
    element.innerHTML = ingredientNames;
    unorderedList.appendChild(element);
        
    }
        
    document.getElementById('listOfIngredients').appendChild(unorderedList);
        
}



function titleOfRecipe(toBeAdded) {
    return `
    <h2>${toBeAdded}</h2>`  
    
}



























