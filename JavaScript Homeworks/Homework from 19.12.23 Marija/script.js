let rowInput = document.getElementById('rowInput');
let columnInput = document.getElementById('columnInput');
let createButton = document.getElementById('createButton');
let container = document.getElementById('container');


function createTable() {
    let rows = rowInput.value;
    let columns = columnInput.value;
    let table = `<table border = 1>`
    for (let i = 0; i< rows; i++) {  
        table += '<tr>';  
        for (let j = 0; j < columns; j++) {  
        table += `<td>Row ${i + 1}, Column ${j + 1}</td>`;  
        }  
        table += '</tr>';  
    }  
    table += '</table>';  
    container.innerHTML = table; 
    
          

}

createButton.addEventListener('click', createTable);
