let pets=[];

let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");

//creating the obj constructor (name, age, gender, breed)
function Pet(name,age,gender,breed){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
}

function register(){
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value);
    if(isValid(newPet)){
        pets.push(newPet);
        displayInfo();
        clearForm();
        displayPets();
    }else{
        alert("Please fill out all the fields!");
    }
}

function isValid(aPet){
    let validation = true; // everything is good

    if(aPet.name === ""){
        validation=false;// Oops something was wrong
    }

    if(aPet.gender === ""){
        validation=false;
    }

    return validation;
}

function deletePet(petIndex){
    console.log("Delete pet " + petIndex);
    document.getElementById(petIndex).remove();
    pets.splice(petIndex, 1);
    displayPets();
}



function clearForm(){

}

function init(){
    //create objs
    let pet1 = new Pet("Scooby",99,"Male","Dane");
    let pet2 = new Pet("Scrappy",80,"Female","Mixed");
    let pet3 = new Pet("Tweety bird",99,"Male","Canarian");
    pets.push(pet1,pet2,pet3);
    console.log(pets);

    displayInfo();
    displayPets();
}

window.onload=init; //render the HTML
