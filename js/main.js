function serviceBook(event){
    event.preventDefault();
    let typeOfWork = document.getElementById("type-of-work").value;

    let hours = document.getElementById("hours").value;
    hours = parseInt(hours);

    let discount =["YHDNU32","JANJC63","PWKCN25","SJDPO96","POCIE24",]
    let price;
    
    
    switch(typeOfWork){
        case "backEnd":
            price = hours * 20.50;
            break;
        case "frontEnd":
            price = hours * 15,30;
            break;
        case "projectAnalysis":
            price = hours * 33,60;
            break;
            default:
                price = alert("CAMPO NON COMPILATO");



    }
    let totalCost = price;
    
}