let menuIconMobileView = document.getElementById('menu-icon-mobile-view');
let MenuBar = document.getElementById('menu-Bar');

menuIconMobileView.addEventListener("click", () => {
MenuBar.classList.toggle('sideBar');
 // Get the current page scroll position
 scrollTop = 
 window.pageYOffset || document.documentElement.scrollTop;
scrollLeft = 
 window.pageXOffset || document.documentElement.scrollLeft,

   // if any scroll is attempted,
   // set this to the previous value
   window.onscroll = function() {
       window.scrollTo(scrollLeft, scrollTop);
    };
    window.onscroll = function() {};
   if(MenuBar.classList.contains('sideBar')){
    // Get the current page scroll position
 scrollTop = 
 window.pageYOffset || document.documentElement.scrollTop;
scrollLeft = 
 window.pageXOffset || document.documentElement.scrollLeft,

   // if any scroll is attempted,
   // set this to the previous value
   window.onscroll = function() {
       window.scrollTo(scrollLeft, scrollTop);
    };
   }
});


let bookTop=document.getElementById('book-top');
let bookCover=document.getElementById('book-cover');

let slideBook=bookTop.offsetTop;

// console.log(slideBook);

window.onscroll = () => {
// console.log(window.scrollY >=160);
// console.log(window.scrollY >=slideBook);
if(window.scrollY >=50){
    bookCover.classList.add("MoveVertical");
}
else{
    
    
    bookCover.classList.remove("MoveVertical");
}

// if(w)
}
// if(window.scrollTop)

