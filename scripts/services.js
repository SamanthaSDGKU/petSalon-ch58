console.log("Services");

//constructor (description, price)
function Service(title,price){
    this.title=title;
    this.price=price;
}
//register()
function register(){
    let inputTitle = $("#txtTitle").val();
    let inputPrice = $("#txtPrice").val();

    // create a newService obj
    let newService = new Service(inputTitle,inputPrice);
    if(isValid(newService)){
        save(newService);
    }
}
//validation()

function isValid(service){
    let isValidTitle =true;
    let isValidPrice=true;

    if(service.title == ""){
        isValidTitle=false; 
        $("#titleRequirementText").css("color","red").show();
    }else{
        $("#titleRequirementText").hide();
    }

    if(service.price == ""){
        isValidPrice=false;
        $("#priceRequirementText").css("color","red").show();
    }else{
        $("#priceRequirementText").hide();
    }

    // && is the same as AND
    return isValidTitle && isValidPrice;
}

//init()
function init(){
    
    //hook events
    $("#btnRegister").on("click",register);

    // initial state of the system

    $("#titleRequirementText").hide();
    $("#priceRequirementText").hide();
}

window.onload=init;
