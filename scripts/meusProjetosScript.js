function switchArrow(textId){
    var texto = document.getElementById("text_"+textId);
    var arrow = document.getElementById("arrow_"+textId);
    console.log(texto.style.height);
    if (texto.style.height == "0px" | texto.style.height == ""){
        if (window.matchMedia("only screen and (min-height:1080px) and (min-width:720px)").matches){
            texto.style.fontSize = "40px";
        }
        else{
            texto.style.fontSize = "30px";
        }
        texto.style.height = "initial";
        arrow.style.transform = "rotateZ(90deg)";
    } else {
        texto.style.height = "0px";
        texto.style.fontSize = "0px";
        arrow.style.transform = "rotateZ(0deg)";
    }
    AOS.init();
}

document.getElementById("button_musicPlayer").addEventListener("click", () => switchArrow("musicPlayer"));

document.getElementById("button_geradorFrisos").addEventListener("click", () => switchArrow("geradorFrisos"));

document.getElementById("button_2048").addEventListener("click", () => switchArrow("2048"));

document.getElementById("button_classicPotatoBoss").addEventListener("click", () => switchArrow("classicPotatoBoss"));

document.getElementById("button_pooPotatoBoss").addEventListener("click", () => switchArrow("pooPotatoBoss"));