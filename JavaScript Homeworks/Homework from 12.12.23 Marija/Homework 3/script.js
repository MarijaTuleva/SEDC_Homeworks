function createSentence(array){
    
    for(i=0; i<array.length; i++){
       
        document.write(array[i] + " ");
        
    }
    
    
}

let arraySentence = ["There", "is", "no", "place", "like", "home", "."];

let arrayOne = createSentence(arraySentence);
