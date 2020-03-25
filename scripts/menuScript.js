function showMenu(){
    console.log("a");
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

function scrollTo(to){
    document.getElementById(to).scrollIntoView();
}

document.getElementById("btn_aboutMe").addEventListener("click", () => scrollTo("sectionAboutMe"));
document.getElementById("btn_expMe").addEventListener("click", () => scrollTo("div_experiencias"));
document.getElementById("btn_meusProjetos").addEventListener("click", () => scrollTo("sectionMeusProjetos"));


document.getElementById("menuIcon").onclick = showMenu;