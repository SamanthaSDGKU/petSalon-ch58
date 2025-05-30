function save(service){
    console.log(service);// obj

    let val = JSON.stringify(service);//JSON

    console.log(val);

    localStorage.setItem("services",val);
    
}

function readServices(){

}