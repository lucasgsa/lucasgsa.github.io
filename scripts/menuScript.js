function showMenu(){
    var leftMenu = document.getElementById("menuSection");
    var iconMenu = document.getElementById("menuIcon");
    if (leftMenu.style.marginLeft === "0px"){
        leftMenu.style.marginLeft = "-"+leftMenu.offsetWidth+"px";
        iconMenu.src = "images/iconMenu.png";
    }
    else{
        leftMenu.style.marginLeft = "0px";
        iconMenu.src = "images/iconMenuOpened.png";

    }
}

function alertNao() {
    alert("Não implementado ainda.");
}

function scrollingTo(to){
    window.scrollTo(0, document.getElementById(to).offsetTop);
}

document.getElementById("btn_aboutMe").addEventListener("click", () => scrollingTo("sectionAboutMe"));

//document.getElementById("btn_expMe").addEventListener("click", () => scrollingTo("div_experiencias"));
document.getElementById("btn_expMe").addEventListener("click", () => alertNao());

document.getElementById("btn_meusProjetos").addEventListener("click", () => scrollingTo("sectionMeusProjetos"));


document.getElementById("menuIcon").onclick = showMenu;