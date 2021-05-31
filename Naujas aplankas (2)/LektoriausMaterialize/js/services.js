function placeServicesToPage(){
    let services = getServiceData();

    for (let index = 0; index < services.length; index++) {
        const element = services[index];
        
        // <div class="col l3 m4 s12">
        let divCol = document.createElement("div");
        divCol.classList.add("col", "l3", "m4", "s12");

        // <div class="card">
        let divCard = document.createElement("div");
        divCard.classList.add("card");

        divCol.appendChild(divCard);

        // <div class="card-image">
        let divCardImage = createDivCardImage(element.imageUrl);
        divCard.appendChild(divCardImage);

        // <div class="card-content">
        let divCardContent = createDivCardContent(element);
        divCard.appendChild(divCardContent);

        // <div class="card-reveal">
        let divCardReveal = createDivCardReveal(element.title, element.description);
        divCard.appendChild(divCardReveal);

        document.querySelector("#items").appendChild(divCol);

    }
}

function createDivCardImage(image){
    let divCardImage = document.createElement("div");
    divCardImage.innerHTML = '<img class="materialboxed" src="'+image+'">'
    return divCardImage;
}

function createDivCardContent(object){
    let divCardContent = document.createElement("div");
    divCardContent.innerHTML = '<span class="card-title activator grey-text text-darken-4">'+object.title+'<i class="material-icons right">more_vert</i></span><p><a href="">Plačiau...</a></p><table><tr><td>Kaina:</td><td><del>'+ object.price + ' '+ object.currency+'</del></td></tr><tr><td></td><td>'+ object.priceWithDiscount + ' '+ object.currency+'</td></tr></table>';

    return divCardContent;
}

function createDivCardReveal(){
    let divCardReveal = document.createElement("div");

    // code goes here

    return divCardReveal;
}


function getServiceData(){
    return [
        {
            "id": 1,
            "title": "Žygis po kalnus",
            "price": 199,
            "priceWithDiscount": 159,
            "currency": "EUR",
            "description": "Here is some more information about this product that is only revealed once clicked on.",
            "imageUrl": "https://picsum.photos/600/600?random=1"
        },
        {
            "id": 2,
            "title": "Žygis po kalnus",
            "price": 199,
            "priceWithDiscount": 159,
            "currency": "EUR",
            "description": "Here is some more information about this product that is only revealed once clicked on.",
            "imageUrl": "https://picsum.photos/600/600?random=2"
        },
        {
            "id": 3,
            "title": "Žygis po kalnus",
            "price": 199,
            "priceWithDiscount": 159,
            "currency": "EUR",
            "description": "Here is some more information about this product that is only revealed once clicked on.",
            "imageUrl": "https://picsum.photos/600/600?random=3"
        },
    ];
}