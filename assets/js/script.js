/* Author: Mohd Arkam Ansari*/

// Hamburger function start here------------------------------------------

var hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click',function(){
  var navigationUl = document.querySelector('nav ul');
  if(navigationUl.classList.contains('navScale')) {
    navigationUl.classList.remove('navScale');
    hamburger.classList.remove('hamburger-active');
  } else {
    navigationUl.classList.add('navScale');
    hamburger.classList.add('hamburger-active');
  }
})

// Hamburger function ends here---------------------------------------------
