
var $body = document.querySelector("body");

$body.classList.remove("no-js");
$body.classList.add("js");

var menu = new Menu({
    container: ".header__nav",
    toggleBtn: ".header__btnMenu",
    widthEnabled: 979.99
});

var carouselImgs = new Carousel({
    container: ".laptop-slides .slideshow",
    itens: "figure",
    btnPrev: ".prev",
    btnNext: ".next"
});









