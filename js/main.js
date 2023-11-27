
let validDiscountCode = ["YHDNU32","JANJC63","PWKCN25","SJDPO96","POCIE24"];


function serviceBook(event){
    event.preventDefault();
    let typeOfWork = document.getElementById("type-of-work").value;

    let hours = document.getElementById("hours").value;
    hours = parseInt(hours);

    let discountCode = document.getElementById("discount-code").value;

    
    let discount = 0.75;
    let finalPrice;
    
    switch(typeOfWork){
        case "backEnd":
            finalPrice = hours * 20.50;
            break;
        case "frontEnd":
            finalPrice = hours * 15.30;
            break;
        case "projectAnalysis":
            finalPrice = hours * 33.60;
            break;
            default:
                alert("CAMPO NON COMPILATO");
    }

    if (validDiscountCode.includes(discountCode)) {
        finalPrice = finalPrice * discount;
    }
      
    finalPrice = finalPrice.toFixed(2);

    console.log(finalPrice);
    
    // Inserisci il prezzo scontato nell'HTML
        document.getElementById("prezzo-finale-utente").innerHTML=finalPrice;
}