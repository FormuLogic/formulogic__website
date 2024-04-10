// Scroll to Top Button Scripts
let scrollTop = document.querySelector(".scroll-top");

scrollTop.addEventListener("click", scrollToTop);
window.addEventListener("scroll", trackScroll);

function scrollToTop () {
    window.scrollTo(0, 0);
};

function trackScroll () {
    let initialPosition = document.documentElement.clientHeight;
    let offset = window.scrollY;

    if(offset > initialPosition) {
        scrollTop.classList.add("scroll-top_shown");
    }
    else if(offset < initialPosition) {
        scrollTop.classList.remove("scroll-top_shown");
    } 
};

// Burger Menu Scripts
let burgerBtn = document.getElementById("burger-btn");

burgerBtn.addEventListener("click", burgerMenu);

function burgerMenu () {
    document.querySelector(".header").classList.toggle("open")
};
