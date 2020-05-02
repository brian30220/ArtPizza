// 滾動回最上
let scrollUpBtn = document.getElementById("scrollUp");

scrollUpBtn.onclick = function() {
  // console.log("點擊");
  window.scrollTo({top:0,behavior:'smooth'})
}

window.onscroll = function(e){
  console.log(window.pageYOffset);
  let scrollUpBtn = document.getElementById("scrollUp")
  if (window.pageYOffset >=300){
    scrollUpBtn.classList.add("show");    
  } else{
    scrollUpBtn.classList.remove("show");
  }
}
// 滾動回最上



// navbar
let menuBtn = document.getElementById("menu-icon");
let mobileHeader = document.getElementById("mobile-header");

menuBtn.onclick = function() {
  if (mobileHeader.classList.contains('open')) {
    menuBtn.classList.remove('close-icon');
    mobileHeader.classList.remove('open');
  } else {
    menuBtn.classList.add('close-icon');
    mobileHeader.classList.add('open');
  }
}

// navbar



// wow
var wow = new WOW(
  {
    boxClass:'wow',   // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:0,       // distance to the element when triggering the animation (default is 0)
    mobile:true,    // trigger animations on mobile devices (default is true)
    live: true,     // act on asynchronously loaded content (default is true)
    callback:function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();



// wow