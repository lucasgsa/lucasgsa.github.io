var lastScrollPosition = 0;
var header = document.querySelector("header");

function calculaDeltaScroll(){
    var deltaX = document.documentElement.scrollTop - lastScrollPosition;
    lastScrollPosition = document.documentElement.scrollTop;
    return deltaX;
}

function atualizarHeader(){
    if (calculaDeltaScroll() >= 0){
        header.style.top = "-8vh";
        if (menuIsOpen()){
            showMenu();
            console.log("abacaxi");
        }
    }
    else {
        header.style.top = "0";
    }
}

window.onscroll = atualizarHeader;