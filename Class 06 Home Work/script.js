mainButton = document.getElementById("mainButton");
button01 = document.getElementById("studentsOver3");
button02 = document.getElementById("femaleGrade5");
button03 = document.getElementById("male18Yo");
button04 = document.getElementById("femaleOver24"); 
button05 = document.getElementById("maleWithB");
table = document.getElementById("table");


button01.style.display = "none";
button02.style.display = "none";
button03.style.display = "none";
button04.style.display = "none";
button05.style.display = "none";


mainButton.addEventListener("click", () => {
    mainButton.style.display = "none";
    button01.style.display = "block";
    button02.style.display = "block";
    button03.style.display = "block";
    button04.style.display = "block";
    button05.style.display = "block";

    fetch("https://raw.githubusercontent.com/sedc-codecademy/sedc7-04-ajs/master/g2/Class4/students.json")
    .then(function(response) {  
        console.log("completed!"); 
        return response.json(); 
    })
     .then(function(response) {
         button01.addEventListener('click', () => {
             over3Grade(table, response); 
         })
         button02.addEventListener('click', () => {
           cleverFemale5(table, response); 
         })
        button03.addEventListener('click', () => {
            maleInSkopje18(table, response); 
         })
         button04.addEventListener('click', () => {
             femaleOver24(table, response); 
         })
         button05.addEventListener('click', () => {
             maleBover2(table, response); 
         })

    })

})




function  over3Grade (table, case01)  {
    table.innerHTML = "";
    let cleverStudents = case01.filter(student => student.avergeGrade > 3)
    cleverStudents.forEach(student => { 
        table.innerHTML += `
        <tr> 
            <td>
                ${student.firstName} ${student.lastName} has an avarge grade of ${student.avergeGrade}!
            </td>
        </tr>
        `
    });
    
};



  function cleverFemale5 (table, case02)  {
    table.innerHTML = "";
    let female5 = case02
        .filter(student => student.averageGrade === 5)
        .filter(student => student.gender === "Female")
    
    female5.forEach(student => { 
        table.innerHTML += `
        <tr> 
            <td>
             ${student.firstName} is ${student.gender} with an average grade of ${student.averageGrade}!
            </td>
        </tr>
        `     
    });
    
}



function maleInSkopje18(table, case03) {
    table.innerHTML = "";
    let maleOver18 = case03
        .filter(student => student.city === "Skopje")
        .filter(student => student.age > 18)
        .filter(student => student.gender = "Male");

    maleOver18.forEach(student => {
        table.innerHTML += `
            <tr>
                <td> ${student.firstName} ${student.lastName} is ${student.gender},who lives in ${student.city} and is ${student.age} years old!
            </tr> `
        });
};


function femaleOver24(table, case04) {
    table.innerHTML = "";
    let femaleGrade24 = case04
        .filter(student => student.gender === "Female")
        .filter(student => student.age > 24);

    femaleGrade24.forEach(student => {
        table.innerHTML += `
            <tr>
                <td> ${student.firstName} ${student.lastName} is a ${student.age} year old ${student.gender}.
            </tr> `
        });
};


function maleBover2(table, case05) {
    table.innerHTML = "";
    let maleOver2 = case05
        .filter(student => student.gender === "Male")
        .filter(student => student.averageGrade > 2)
        .filter(student => student.firstName.startsWith("B"))

    maleOver2.forEach(student => {
        table.innerHTML += `
            <tr>
                <td> ${student.firstName} ${student.lastName} is a ${student.age} year old ${student.gender} with an average grade of ${student.averageGrade}!
            </tr> `
        });
};

