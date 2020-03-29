
function Menu(config){
    
    this.nav = (typeof config.container === 'string') ? document.querySelector(config.container): config.container;
    
    this.btn = (typeof config.toggleBtn === 'string') ? document.querySelector(config.toggleBtn): config.toggleBtn;
    
    this.maxWidth = config.widthEnabled || false;
    
    var _opened = false;
    var _this = this;
    
    this.btn.removeAttribute("style");
    //closeMenu();
    
    if (this.maxWidth){
    
        window.addEventListener("resize", () => {
            if(window.innerWidth > this.maxWidth){
                this.nav.removeAttribute("style");
                _opened = false;
            }

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
        
        var _style = {
            maxHeight: 'calc(100vh - ' + _top + ')',
            overflow: 'hidden'
        };
        
        _this.nav.style.maxHeight = _style.maxHeight;
        _this.nav.style.overflow = _style.overflow;
        
        _opened = true;
        
    }

    function closeMenu(){
        
        var _style = {
            maxHeight: '0',
            overflow: 'hidden'
        };
        
        _this.nav.style.maxHeight = _style.maxHeight;
        _this.nav.style.overflow = _style.overflow;
        
        
        _opened = false;
        
    }
}