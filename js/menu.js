
function Menu(config){
    
    this.nav = (typeof config.container === "string") ? document.querySelector(config.container): config.container;
    
    this.btn = (typeof config.toggleBtn === "string") ? document.querySelector(config.toggleBtn): config.toggleBtn;
    
    this.maxWidth = config.widthEnabled || false;
    
    var _opened = false;
    var _this = this;
    
    this.btn.removeAttribute("style");
    
    if (this.maxWidth){
    
        window.addEventListener("resize", () => {
            if(window.innerWidth > this.maxWidth){
                this.nav.removeAttribute("style");
                _opened = false;
            }
            
            /* Verificando se há algum atributo 'style' inline no HTML */
            else if(!this.nav.getAttribute("style")){
                closeMenu();
            }
        });

        if (window.innerWidth <= this.maxWidth){
            closeMenu();
        }
    
    }
    
    this.btn.addEventListener("click", openOrClose);
    
    function openOrClose(){
        
        if (!_opened){
            openMenu();
        }
        
        else {
            closeMenu();
        }
    }
    
    function openMenu(){
        
        var _top = _this.nav.getBoundingClientRect().top + "px";
        
        /* Os atributos styles do javascript, serão transformados em atributos inline no HTML */
        _this.nav.style.maxHeight = "calc(100vh - " + _top + ")";
        _this.nav.style.overflow = "hidden";
        
        _opened = true;
        
    }

    function closeMenu(){
        
        /* Os atributos styles do javascript, serão transformados em atributos inline no HTML */
        _this.nav.style.maxHeight = "0";
        _this.nav.style.overflow = "hidden";    
        
        _opened = false;
        
    }
}