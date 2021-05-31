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
                img.addEventListener("Click", function(){
                    
                    let biggerImage = document.createElement("img");
                    document.setAttribute("src", element.url);

                    document.querySelector(".modal-content").appendChild(biggerImage);
                    document.querySelector(".modal").setAttribute("style", "display:flex");
                })   
                
                document.querySelector(".container").appendChild(img);
            }
            // darom kazka su resultatu
        },
        error: function(error){
            console.log(error);
            alert("nezinoma klaida kreipkites i admina");
            // darom kazka su klaida
        }

    });

}