
function Carousel(config){
    
    const {container, itens, btnPrev, btnNext} = config;
    const _this = this;
    
    this.container = (typeof container === "string") ? document.querySelector(container) : container;
    
    this.itens = (typeof itens === "string") ? this.container.querySelectorAll(itens) : itens;
    
    this.btnPrev = (typeof btnPrev === "string") ? this.container.querySelector(btnPrev) : btnPrev;
    
    this.btnNext = (typeof btnNext === "string") ? this.container.querySelector(btnNext) : btnNext;
    
    let _currentSlide = 0;
    
    init();
    
    function init(){
        const _show = _this.container.querySelectorAll(".show");
        
        Array.prototype.forEach.call(_show, (sh) => {
            sh.classList.remove("show");
        });
        
        _this.itens[0].classList.add("show");
        _this.btnNext.removeAttribute("style");
        _this.btnPrev.removeAttribute("style");
        
        addListeners();
        
    }
    
    function addListeners(){
        _this.btnNext.addEventListener("click", showNextSlide);
        _this.btnPrev.addEventListener("click", showPrevSlide);
        
    }
    
    function showNextSlide(){
        _currentSlide++;
        showSlide();
    }
    
    function showPrevSlide(){
        _currentSlide--;
        showSlide();
    }
    
    function showSlide(){
        let qtd = _this.itens.length;
        let slide = _currentSlide % qtd;
        slide = Math.abs(slide);
        
        _this.container.querySelector(".show").classList.remove("show");
        _this.itens[slide].classList.add("show");
    }
}