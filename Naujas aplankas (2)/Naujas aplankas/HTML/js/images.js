function placeHotelImagesFromObject(){
    let images = getHotelImageObjects();

    for (let index = 0; index < images.length; index++) {
        const element = images[index];

        let img = document.createElement("img");
        img.setAttribute("src", element.ThumbnailURI);

        img.addEventListener("click", function(){
            alert(index);
        });

        let bigImg = document.createElement("img");
        bigImg.setAttribute("src", element.URI)

        document.querySelector("#Thumbnail").appendChild(img);  
    }
}


function placeHotelImages(){
    let images = getHotelImages();

    for (let index = 0; index < images.length; index++) {
        const element = images[index];

        let img = document.createElement("img");
        img.setAttribute("src", element);

        document.body.appendChild(img);

    }
}


function getHotelImages(){
    return [
        "https://i.travelapi.com/hotels/14000000/13380000/13375900/13375898/1eeae7f4_b.jpg", 
        "https://i.travelapi.com/hotels/14000000/13380000/13375900/13375898/0fe87272_b.jpg",
        "https://i.travelapi.com/hotels/14000000/13380000/13375900/13375898/07722315_b.jpg",
        "https://i.travelapi.com/hotels/14000000/13380000/13375900/13375898/0546dadc_b.jpg"
    ];
}

function getHotelImageObjects(){
    return [
        {
            "Source":30,
            "URI":"https://i.travelapi.com/hotels/14000000/13380000/13375900/13375898/624392cc_b.jpg",
            "ThumbnailURI":"https://i.travelapi.com/hotels/14000000/13380000/13375900/13375898/624392cc_t.jpg"},
            
            {"Source":30,
            "URI":"https://i.travelapi.com/hotels/14000000/13380000/13375900/13375898/04ebc083_b.jpg",
            "ThumbnailURI":"https://i.travelapi.com/hotels/14000000/13380000/13375900/13375898/04ebc083_t.jpg"},
            
            {"Source":30,"URI":"https://i.travelapi.com/hotels/14000000/13380000/13375900/13375898/0546dadc_b.jpg",
            "ThumbnailURI":"https://i.travelapi.com/hotels/14000000/13380000/13375900/13375898/0546dadc_t.jpg"},
            
            {"Source":30,"URI":"https://i.travelapi.com/hotels/14000000/13380000/13375900/13375898/05a152d8_b.jpg",
            "ThumbnailURI":"https://i.travelapi.com/hotels/14000000/13380000/13375900/13375898/05a152d8_t.jpg"},
            
            {"Source":30,"URI":"https://i.travelapi.com/hotels/14000000/13380000/13375900/13375898/07722315_b.jpg",
            "ThumbnailURI":"https://i.travelapi.com/hotels/14000000/13380000/13375900/13375898/07722315_t.jpg"},
            
            {"Source":30,"URI":"https://i.travelapi.com/hotels/14000000/13380000/13375900/13375898/09deda7c_b.jpg",
            "ThumbnailURI":"https://i.travelapi.com/hotels/14000000/13380000/13375900/13375898/09deda7c_t.jpg"},
            
            {"Source":30,"URI":"https://i.travelapi.com/hotels/14000000/13380000/13375900/13375898/0c272279_b.jpg",
            "ThumbnailURI":"https://i.travelapi.com/hotels/14000000/13380000/13375900/13375898/0c272279_t.jpg"},
            
            {"Source":30,"URI":"https://i.travelapi.com/hotels/14000000/13380000/13375900/13375898/0fe87272_b.jpg","ThumbnailURI":"https://i.travelapi.com/hotels/14000000/13380000/13375900/13375898/0fe87272_t.jpg"},{"Source":30,"URI":"https://i.travelapi.com/hotels/14000000/13380000/13375900/13375898/1a11b524_b.jpg","ThumbnailURI":"https://i.travelapi.com/hotels/14000000/13380000/13375900/13375898/1a11b524_t.jpg"},{"Source":30,"URI":"https://i.travelapi.com/hotels/14000000/13380000/13375900/13375898/1eeae7f4_b.jpg","ThumbnailURI":"https://i.travelapi.com/hotels/14000000/13380000/13375900/13375898/1eeae7f4_t.jpg"}]


}

function getShopItemsForMainPage(){
    return [
        {
            "id": 1,
            "title": "Kelione numeris 1",
            "imageUrl": "https://i.travelapi.com/hotels/14000000/13380000/13375900/13375898/0fe87272_b.jpg",
            "price": "99 EUR"
        },
        {
            "id": 2,
            "title": "Kelione numeris 1",
            "imageUrl": "https://i.travelapi.com/hotels/14000000/13380000/13375900/13375898/0fe87272_b.jpg",
            "price": "99 EUR"
        },
        {
            "id": 3,
            "title": "Kelione numeris 1",
            "imageUrl": "https://i.travelapi.com/hotels/14000000/13380000/13375900/13375898/0fe87272_b.jpg",
            "price": "99 EUR"
        },
        {
            "id": 4,
            "title": "Kelione numeris 1",
            "imageUrl": "https://i.travelapi.com/hotels/14000000/13380000/13375900/13375898/0fe87272_b.jpg",
            "price": "99 EUR"
        }
    ];

}

function placeShopItemsForMainPage(){
    let shopItems = getShopItemsForMainPage();

    for (let index = 0; index < shopItems.length; index++) {
        const element = shopItems[index];

        // sukuriame isorini elementa div
        let div1 = document.createElement("div");
        div1.classList.add("item");

        //<div class="shopitem">
        let div2 = document.createElement("div");
        div2.classList.add("shopitem");

        div2.innerHTML = element.title;

        let img = document.createElement("img");
        img.setAttribute("src", element.imageUrl);
        div2.appendChild(img);

        let priceLabel = document.createElement("label");
        priceLabel.innerText = element.price;
        div2.appendChild(priceLabel);

        div1.appendChild(div2);

        document.querySelector("#items").appendChild(div1);
        
        
    }

}