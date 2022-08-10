
const nav_mnue = document.querySelector(".menu_nav"),
      nav_but = document.querySelector(".icon_menu"),
      nav_close = document.querySelector(".close_menu"),
      body = document.querySelector(".body");

nav_but.addEventListener('click',()=>{
  nav_mnue.classList.add("active");
  nav_close.classList.add("active");
  body.classList.add("active");
})

nav_close.addEventListener('click',()=>{
  nav_mnue.classList.remove("active");
  nav_close.classList.remove("active");
  body.classList.remove("active");
})


var lastTop;

function stopScrolling() {
    lastTop = $(window).scrollTop();      
    $('body').addClass( 'noscroll' )          
         .css( { top: -lastTop } )        
         ;            
}

function continueScrolling() {                    

    $('body').removeClass( 'noscroll' );      
    $(window).scrollTop( lastTop );       
} 