let animalKind = document.getElementById('animalKind');
let animalName = document.getElementById('animalName');
let animalSentence = document.getElementById('animalSentence');
let goButton = document.getElementById('goButton');

function animalInput() {
    let typeName = animalName.value;
    let typeKind = animalKind.value;
    let typeSentnce = animalSentence.value;
    class Animal {
        constructor(name, kind){
            this.name = name;
            this.kind = kind;
        }
    
        speak(sentence){
            if(typeName && typeKind && typeSentnce != null) {
                console.log(`The ${this.kind} by the name of ${this.name} says: "${sentence}"`);
            }

            else{
                alert('Please fill out all of the inputs.');
            }
           
        }
    }
    
    let input = new Animal(typeName, typeKind);
    
    input.speak(typeSentnce); 
    
}

goButton.addEventListener('click', animalInput);