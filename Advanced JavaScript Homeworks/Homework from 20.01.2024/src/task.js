let button = document.getElementById('button');
let mainTable = document.getElementById('table-container');
let changeButtonCon = document.getElementById('changeButton');




function printPlanets(table, planet){
    let name = planet.name;
    let population = planet.population;
    let climate = planet.climate;
    let gravity = planet.gravity;

    table.innerHTML +=`
   
    <tr>
    <td>${name}</td>
    <td>${population}</td>
    <td>${climate}</td>
    <td>${gravity}</td>
    </tr>`
   
}

button.addEventListener('click', function(){
    fetch('https://swapi.dev/api/planets/?page=1')
    .then(data => data.json())
    .then(res => {
       changeButtonCon.innerHTML += `
       <button onclick="callNextButton()">Next</button>`;
       button.style.display = 'none';
        for(planet of res.results){
            printPlanets(mainTable, planet)
        }
        

    })
    
})

function callNextButton(){
    fetch('https://swapi.dev/api/planets/?page=2')
    .then(data => data.json())
    .then(res => {
        console.log(res.results);
        mainTable.innerHTML = ``;
        mainTable.innerHTML += `
        <table border="1" id="table-container">
        <tr>
            <th>Planet Name</th>
            <th>Population</th>
            <th>Climate</th>
            <th>Gravity</th>
        </tr>

        </table>`;
        changeButtonCon.innerHTML = '';
        changeButtonCon.innerHTML += `
       <button onclick="callPrevButton()">Previous</button>`;
        for(planet of res.results){
            printPlanets(mainTable, planet)
        }
    })
}

function callPrevButton(){
    fetch('https://swapi.dev/api/planets/?page=1')
    .then(data => data.json())
    .then(res => {
        console.log(res.results);
        mainTable.innerHTML = ``;
        mainTable.innerHTML += `
        <table border="1" id="table-container">
        <tr>
            <th>Planet Name</th>
            <th>Population</th>
            <th>Climate</th>
            <th>Gravity</th>
        </tr>

        </table>`;
        changeButtonCon.innerHTML = '';
        changeButtonCon.innerHTML += `
       <button onclick="callNextButton()">Next</button>`
        for(planet of res.results){
            printPlanets(mainTable, planet)
        }
        

    })
}

