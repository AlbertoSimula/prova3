let n_img = 5;
let corrente = 1;

function succ(){
    corrente++;
    if(corrente > n_img){
        corrente = 1;
    }

    for(var i = n_img; i > 0; i--){
        document.getElementById(`#img_slider img:nth-child(${i})`).style.display = "none";
    }
    document.getElementById(`#img_slider img:nth-child(${corrente})`).style.display = "block";
}

function prec(){
    corrente--;
    if(corrente == 0){
        corrente = n_img;
    }

    for(var i = n_img; i > 0; i--){
        document.querySelector("#img_slider img:nth-child(" + i + ")").style.display = "none";
    }
    document.querySelector("#img_slider img:nth-child(" + corrente + ")").style.display = "block";
}



let Scroll = document.getElementById("button-container");
Scroll.addEventListener("click", function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth"
    })
})
