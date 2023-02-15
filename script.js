/*LOAD NAVBAR*/
$(function(){
    $("header").load("https://marques.cf/xyz/yxt/header.html");
});

/*VARIABLE*/
const body = document.querySelector("body");


/*navbar*/
const navTitles = document.querySelectorAll('.nav_title');

function nav_dropdown(){
    document.querySelector("#screen_big").style.backgroundColor="black";
    document.querySelector("#nav_title").style.color="white";
    document.querySelector("#produits_nav").style.color="white";
    document.querySelector("#about_nav").style.color="white";
}
function nav_dropdown_none(){
    document.querySelector("#screen_big").style.backgroundColor="transparent";
    document.querySelector("#nav_title").style.color="black";
    document.querySelector("#produits_nav").style.color="black";
    document.querySelector("#about_nav").style.color="black";
}


function home(){
    window.location.href="https://marques.cf/index"
}
function produits(){
    window.location.href="https://marques.cf/produits"
}
function about(){
    window.location.href="https://marques.cf/pages/about"
}

function phone_1(){
    window.location.href="https://marques.cf/produits/phone-1"
}
function audio(){
    window.location.href="https://marques.cf/pages/audio"
}
function ear_stick(){
    window.location.href="https://marques.cf/produits/ear-stick"
}
function ear_1(){
    window.location.href="https://marques.cf/produits/ear-1"
}
function accessoires(){
    window.location.href="https://marques.cf/pages/accessoires"
}
function power_45(){
    window.location.href="https://marques.cf/produits/power-45"
}

function nav_screen(){
    const nav_dropdown_display = document.getElementById("nav_dropdown_tin").style.display;
    const nav_dropdown = document.getElementById("nav_dropdown_tin");
    const fleche_nav_screen = document.querySelector("#fleche_nav_screen");

    if (nav_dropdown_display === 'contents'){
        nav_dropdown.style.display="none";
        fleche_nav_screen.style.transform="rotate(0deg)";
    } else{
        nav_dropdown.style.display="contents";
        fleche_nav_screen.style.transform="rotate(180deg)";
    }
}

//CLIC DROIT
document.addEventListener("contextmenu", function(event){
    event.preventDefault();
    let menu = document.querySelector("#menu");
    menu.classList.toggle("active");
    let posX = event.clientX;
    let posY = event.clientY;
    let maxX = window.innerWidth - menu.clientWidth - 25;
    let maxY = window.innerHeight - menu.clientHeight - 25;
    if(posX > maxX){
        posX = maxX;
    }
    if(posY > maxY){
        posY = maxY;
    }
    document.querySelector("#menu").style.top = posY + "px";
    document.querySelector("#menu").style.left = posX + "px";
});
document.querySelector("article").addEventListener("click", function(){
    menu.classList.remove("active");
});

//MENU CLIC DROIT
document.getElementById("produits_menu").addEventListener("click", function(){
    const menu_P = document.getElementById("menu_P");
    menu_P.classList.toggle("active");
})