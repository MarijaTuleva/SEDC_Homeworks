let firstNames = ['Miranda', 'Caroline', 'Mark', 'Jason', 'Jack'];

let lastNames = ['White', 'Flynn', 'Edwards', 'Gibs', 'Mills'];

function createFullNames(first, last){
    let full = [];
    for(i = 0; i < first.length; i++){
        for(i = 0; i < last.length; i++){
            
            let num = i + ".";
            full.push(num + first[i] + " " + last[i]);
                
        }   
    }

    console.log(full);
    
   
    
}

let fullNames = createFullNames(firstNames, lastNames);