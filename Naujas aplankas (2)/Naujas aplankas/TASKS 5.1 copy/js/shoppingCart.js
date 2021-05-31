function printFirstShoppingCartItem(){

    let items = getShoppingCart();

    document.querySelector("h1").innerHTML = items[1];
}

function getShoppingCart(){
    return [
      "Duona",
      "Pienas",
      "Desra"  
    ];
}