function getImages(){

    $.get({
        url: "http://localhost:5000/data",
        success: function(result){
            console.log(result);

            for (let index = 0; index < result.length; index++) {
                const element = result[index];

                let img = document.createElement("img");
                img.setAttribute("src", element.url);
                img.setAttribute("title", element.description);
                img.classList.add("thumb");
                img.addEventListener("click", function(){
                    
                    let biggerImage = document.createElement("img");
                    biggerImage.setAttribute("src", element.url);

                    document.querySelector(".modal-content").innerHTML = "";
                    document.querySelector(".modal-content").appendChild(biggerImage);
                    document.querySelector(".modal").setAttribute("style", "display:flex")

                })

                document.querySelector(".container").appendChild(img);
            }

           

            // darom kazka su rezultatu
        },
        error: function(error){
            console.log(error);
            alert("Nežinoma klaida! Kreipkitės į administratorių.")
            // darom kazka su klaida
        }
    });

}