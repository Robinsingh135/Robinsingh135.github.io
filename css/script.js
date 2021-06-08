window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
  {
   document.getElementById("navbar").className = " navbar sticky";
  }
   else {
    document.getElementById("navbar").className = "navbar";
  }

// scroll btn script

if (document.body.scrollTop >500 || document.documentElement.scrollTop >500)
document.getElementById("scroll-btn").style.display="block";
else 
document.getElementById("scroll-btn").style.display="none";




}
function myFunctio() {
  var element = document.getElementById("myDIV");
  element.classList.toggle("active");
  var element1 = document.getElementsByClassName("fa fa-bars");
  element1[0].classList.toggle("active");
}
 
  var typed = new Typed(".typing", {
    strings: [" Web Development ","Software Development"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
  var typed = new Typed(".typing-1", {
    strings: [" Web Development ","Software Development"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
   
