let menuIconMobileView = document.getElementById('menu-icon-mobile-view');
let MenuBar = document.getElementById('menu-Bar');

menuIconMobileView.addEventListener("click", () => {
MenuBar.classList.toggle('sideBar');
 // Get the current page scroll position
//  scrollTop = 
//  window.pageYOffset || document.documentElement.scrollTop;
// scrollLeft = 
//  window.pageXOffset || document.documentElement.scrollLeft,

   // if any scroll is attempted,
   // set this to the previous value
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
    else{
        /* window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
            window.onscroll = function() {};
         }; */
         window.onscroll = function(){};
        
     }
});


let bookTop=document.getElementById('book-top');
let bookCover=document.getElementById('book-cover');

let slideBook=bookTop.offsetTop;

// console.log(slideBook);
window.onscroll = function() { function2() };

function function2(){
    
    if(!MenuBar.classList.contains('sideBar')){
    // console.log(window.pageYOffset);
// console.log(window.scrollY >=160);
// console.log(window.scrollY >=slideBook);
if(window.scrollY >=200){
    bookCover.classList.add("MoveVertical");
}
else{

    bookCover.classList.remove("MoveVertical");
}

// if(w)
}
}
// if(window.scrollTop)

