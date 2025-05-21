console.log("register");

let pet1 = {
    name:"Scooby",
    age:60,
    gender:"Male"
}
let pet2 = {
    name:"Scrappy",
    age:50,
    gender:"Male"
}
let pet3={
    name:"Tweety",
    age:70,
    gender:"Female"
}

let pets = []; 

pets.push(pet1,pet2,pet3);
console.log(pets);

function displayNames(){
    for(let i=0;i<pets.length;i++){
        console.log(pets[0].name);
        // display on the HTML
    }
   

    console.log("We have " + pets.length + " pets");

}

displayNames();