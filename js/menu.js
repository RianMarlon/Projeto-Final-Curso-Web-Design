
function Menu(config){
    
    const {container, toggleBtn, widthEnabled = false} = config;
    const _this = this;
    
    this.nav = (typeof container === "string") ? document.querySelector(container): container;
    
    this.btn = (typeof toggleBtn === "string") ? document.querySelector(toggleBtn): toggleBtn;
    
    this.maxWidth = widthEnabled;
    
    let _opened = false;
    
    this.btn.removeAttribute("style");
    
    if (this.maxWidth){
    
        window.addEventListener("resize", () => {
            if(window.innerWidth > _this.maxWidth){
                _this.nav.removeAttribute("style");
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
        
        const _top = _this.nav.getBoundingClientRect().top + "px";
        
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