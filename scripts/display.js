function displayPets(){
    let div=document.getElementById("petList");
    let card="";
    
    for(let i=0;i<pets.length;i++){
        card+=`
        <div class="card col-3">
            <div class="card-body">
                <h5>${pets[i].name}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${pets[i].breed}</h6>
                <p class="card-text">${pets[i].gender == "Male" ? "Male ♂" : "Female ♀"} , ${pets[i].age}</p>
                <button class="btn btn-danger" >Delete</button>
            </div>
        </div>
        `;
        
    }
    div.innerHTML= card;
}

function displayRow(){
    // do not forget to create the table on the HTML
    // here you will create a row
}

function findOldestPet(){
    
}

function displayInfo(){
    // display the total registered pets
    document.getElementById("info").innerHTML=`<p>Total of pets: ${pets.length}</p>`
}