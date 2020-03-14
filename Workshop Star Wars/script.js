let logo = document.getElementById("logo");
let people = document.getElementById("peoplePic");
let cars = document.getElementById("vehiclesPic");
let table = document.getElementById("table");
let tHead = document.getElementById("tHead");
let tBody = document.getElementById("tBody");
let next1 = document.getElementById("nextBtn1");
let previous1 = document.getElementById("previousBtn1");
let next2 = document.getElementById("nextBtn2");
let previous2 = document.getElementById("previousBtn2");
let table2 = document.getElementById("table2");
let tHead2 = document.getElementById("tHead2");
let tBody2 = document.getElementById("tBody2");
let btnSort = document.getElementById("sort");
let btnSort2 = document.getElementById("sort2");



table.style.display = "none";
table2.style.display = "none";
previous1.style.display = "none";
next1.style.display = "none";
previous2.style.display = "none";
next2.style.display = "none";

let data = [];
let data2 = [];
let page = 1;


async function getPeople() {
    let url = `https://swapi.co/api/people/?page=${page}`;
    let response = await fetch(url);
    let paopleData = await response.json();
    data = paopleData.results;
    printPeople(tBody, data);
}

async function getVehicles() {
    let url2 = `https://swapi.co/api/vehicles/?page=${page}`;
    let response2 = await fetch(url2);
    let vehiclesData = await response2.json();
    data2 = vehiclesData.results;
    printVehicles(tBody2, data2);
}

people.addEventListener("click", function() {
    table2.style.display = "none";
    table.style.display = "inline-block";
    previous1.style.display = "inline-block";
    next1.style.display = "inline-block";
    previous2.style.display = "none";
    next2.style.display = "none";
    getPeople()
});
 cars.addEventListener("click", function() {
     table.style.display = "none";
     table2.style.display = "inline-block";
     previous2.style.display = "inline-block";
     next2.style.display = "inline-block";
     previous1.style.display = "none";
     next1.style.display = "none";
    getVehicles();
 });

function printPeople (element, person) {
    element.innerHTML = "";
    for (let i = 0; i < person.length; i++) {
    element.innerHTML += `
    <tr>
        <td>${person[i].name}</td>
        <td>${person[i].height}</td>
        <td>${person[i].mass}</td>
        <td>${person[i].gender}</td>
        <td>${person[i].birth_year}</td>
        <td>${person[i].films.length}</td>
        <td><input type="button" onclick="deleteRow(this)" id="btnDelete" value="Delete" </td>
    </tr>`    
}
};

function printVehicles (element2, vehicle) {
    element2.innerHTML = "";
    for (let i = 0; i < vehicle.length; i++) {
    element2.innerHTML += `
    <tr>
        <td>${vehicle[i].name}</td>
        <td>${vehicle[i].model}</td>
        <td>${vehicle[i].manufacturer}</td>
        <td>${vehicle[i].cost_in_credits}</td>
        <td>${vehicle[i].passengers}</td>
        <td>${vehicle[i].vehicle_class}</td>
        <td><input type="button" onclick="deleteRow2(this)" id="btnDelete2" value="Delete" </td>
    </tr>`    
}
};
//Next & Previous Buttons;
next1.addEventListener("click", function () {
    page++;
    getPeople();
    
});
previous1.addEventListener("click", function(){
    page--;
    getPeople();
});

next2.addEventListener("click", function () {
    page++;
    getVehicles();
    
});
previous2.addEventListener("click", function(){
    page--;
    getVehicles();
});


// Sort Buttons;
let toggleSort = false;
btnSort.addEventListener("click", function(){
    toggleSort = !toggleSort;
    toggleSort ? sortDes() : sortAsc();
});

btnSort2.addEventListener("click", function(){
        toggleSort = !toggleSort;
        toggleSort ? sortDes2() : sortAsc2();
    });

function sortDesc() {
    
    let sortDescending = data.sort((input1, input2) => input2.name.localeCompare(input1.name)); 
    printPeople(tBody, sortDescending);
};

function sortAsc() {
    let sortAscending = data.sort((input1, input2) => input1.name.localeCompare(input2.name)); 
    printPeople(tBody, sortAscending);
};

function sortDesc2() {
    
    let sortDescending2 = data2.sort((input1, input2) => input2.name.localeCompare(input1.name)); 
    printVehicles(tBody2, sortDescending2);
};

function sortAsc2() {
    let sortAscending2 = data2.sort((input1, input2) => input1.name.localeCompare(input2.name)); 
    printVehicles(tBody2, sortAscending2);
};

//delete buttons;
function deleteRow(row) {
    let i = row.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(i); 

    data.splice(i-1,1); //go brisi elementot od niza
};

function deleteRow2(row2) {
    let i = row2.parentNode.parentNode.rowIndex;
    document.getElementById("table2").deleteRow2(i); 
    data2.splice(i-1,1); 
};




