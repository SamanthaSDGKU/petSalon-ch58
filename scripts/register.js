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
    pets.push(newPet);
    console.log(newPet);
    alert("The registration was successful!!!");
    displayInfo();
    clearForm();
}

function displayInfo(){
    // display the total registered pets
    document.getElementById("info").innerHTML=`<p>Total of pets: ${pets.length}</p>`
}

function clearForm(){

}

function init(){
    //create objs
    let pet1 = new Pet("Scooby",99,"Male","Dane");
    let pet2 = new Pet("Scrappy",80,"Male","Mixed");
    let pet3 = new Pet("Tweety bird",99,"Male","Canarian");
    pets.push(pet1,pet2,pet3);
    console.log(pets);

    displayInfo();
}

window.onload=init; //render the HTML
