function placeServicesToPage(){
    let services = getServiceData();

    for (let index = 0; index < services.length; index++) {
        const element = services[index];

        //<div class="col l3 m4 s12"> is service.html
        let divCol = document.createElement("div");
        divCol.classList.add("col", "l3", "m4", "s12");

        // <div class="card"> is service.html
        let divCard = document.createElement("div");
        divCard.classList("card");

        divCol.appendChild(divCard);

        // <div class="card-image"> is service.html
        let divCardImage = createDivCardImage(element.imageUrl);
        divCard.appendChild(divCardImage);

        // <div class="card-content"> is services.html
        let divCardContent = createDivCardContent(element);
        divCard.appendChild(divCardContent);

        // <divclass="card-reveal"> is services.html
        let divCardReveal = createDivCardReaveal(element.title, element.description);
        divCard.appendChild(divCardReveal);

        document.querySelector("#items").appendChild(divCol);
    }
}

function createDivCardImage(image){
    let divCardImage = document.createElement("div");

    //code goes here

    return divCardImage;
}

function createDivCardContent(object){
    let divCardContent = document.createElement("div");

    //code goes here

    return divCardContent;
}

function createDivCardReaveal(){
    let divCardReaveal = document.createElement("div");

    //code goes here

    return divCardReaveal;
}


function getServicesData(){
    return [
    {
        "id": 1,
        "title": "Zygis po kalnus",
        "price": 199,
        "priceWithDiscount": 159,
        "currency": "EUR",
        "description": "Here is some more information about this product that is only revealed once clicked on.",
        "imageUrl": "https://picsum.photos/200"
        
    },
    {
        "id": 1,
        "title": "Zygis po kalnus",
        "price": 199,
        "priceWithDiscount": 159,
        "currency": "EUR",
        "description": "Here is some more information about this product that is only revealed once clicked on.",
        "imageUrl": "https://picsum.photos/200"
        
    },

    ];
}