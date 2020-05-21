/* Author: Arkam Ansari */

// Hamburger function ========================================
var hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', function () {
  var navigationUl = document.querySelector('nav ul');
  if (navigationUl.classList.contains('navScale')) {
    navigationUl.classList.remove('navScale');
    hamburger.classList.remove('hamburger-active');
  } else {
    navigationUl.classList.add('navScale');
    hamburger.classList.add('hamburger-active');
  }
});

// Accordion Function Starts  ================================
switchAccordion();
// added switch function to accordions
function switchAccordion() {
  var accordions = document.getElementsByClassName('accordion-head');
  var accordionsContent = document.getElementsByClassName('accordion-content');
  var accordionsHeight = accordions.length;
  // added on click to accordions
  for (var i = 0; i < accordionsHeight; i++) {
    accordions[i].onclick = function () {
      var content = this.nextElementSibling;
      // current accordion is open and rest is close or vice vase
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        this.classList.remove('active');
        this.firstElementChild.classList.remove('active');
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        this.classList.add('active');
        this.firstElementChild.classList.add('active');
      }
      // adding or removing accordions contents
      for (var i = 0; i < accordionsHeight; i++) {
        if (accordionsContent[i].style.maxHeight) {
          accordionsContent[i].style.maxHeight = null;
          accordions[i].classList.remove('active');
          accordions[i].firstElementChild.classList.remove('active');
          content.style.maxHeight = content.scrollHeight + 'px';
          this.classList.add('active');
          this.firstElementChild.classList.add('active');
        }
      }
    }
  }
}

// Form Validation  =============================================
var submit_f = document.getElementById("submit_form");
if (submit_f) {
  submit_f.addEventListener("click", formSubmit);
}
// message for displaying errors to user
var messageLength = document.getElementsByClassName('message').length;
var messageArray = [];
for (var i = 0; i < messageLength; i++) {
  messageArray.push(document.getElementsByClassName('message')[i]);
}
// pattern to match valid input
var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var phoneNo = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
// form submit function
function formSubmit() {
  // to store user input
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var terms = document.getElementById('terms');
  // for user name
  if (!name) {
    displayMessage(0);
  } else {
    hiddenMessage(0);
  }
  // for user email
  if (email.match(emailPattern)) {
    hiddenMessage(1);
  } else {
    displayMessage(1);
  }
  // for user phone number atleast 10 number required
  if (!phone.match(phoneNo)) {
    displayMessage(2);
  } else {
    hiddenMessage(2);
  }
  // for user checkbox
  if (terms.checked == false) {
    displayMessage(3);
  } else {
    hiddenMessage(3);
  }
  // display message to user
  function displayMessage(index) {
    for (var i = 0; i < messageLength; i++) {
      messageArray[index].style.opacity = '1';
      messageArray[index].style.paddingLeft = '16px';
      messageArray[index].style.transition = '.2s';
    }
  }
  // hidden message to user
  function hiddenMessage(index) {
    for (var i = 0; i < messageLength; i++) {
      messageArray[index].style.opacity = '0';
      messageArray[index].style.paddingLeft = '6px';
      messageArray[index].style.transition = '.2s';
    }
  }
  // check if all data filled
  if (!name || !email.match(emailPattern) || !phone.match(phoneNo) || terms.checked == false) {
    return;
  } else {
    document.querySelector('#form-id').reset();
    // form reset
  }
}

// Carousel Function  ===========================================
var left = document.getElementById("left-move");
var right = document.getElementById("right-move");
if (left && right) {
  left.style.display = "none";
}
var n = 1;
// adding on click to buttons left and right
if (left) {
  left.addEventListener("click", function () {
    displayCarousel(carouselIndex -= n);
    displayArrow(carouselIndex);
  });
}
if (right) {
  right.addEventListener("click", function () {
    displayCarousel(carouselIndex += n);
    displayArrow(carouselIndex);
  });
}
// adding index to carousel class
var carouselIndex = 1;
var carousel = document.getElementsByClassName('carousel');
if (carousel.length > 1) {
  displayCarousel(carouselIndex);
}
// displaying left and right arrow both
function displayArrow(carouselIndex) {
  if (carouselIndex == 1) {
    left.style.display = "none";
  }
  if (carouselIndex == 2) {
    left.style.display = "block";
    right.style.display = "block";
  }
  if (carouselIndex == 3) {
    right.style.display = "none";
  }
}
// displaying current carousel
function displayCarousel(n) {
  if (n > carousel.length) {
    carouselIndex = 1;
  }
  if (n < 1) {
    carouselIndex = carousel.length;
  }
  for (var i = 0; i < carousel.length; i++) {
    carousel[i].style.display = 'none';
  }
  carousel[carouselIndex - 1].style.display = 'block';
}

// Load More Function Start ============================
var loadBtn = document.getElementById('control');
var block = document.getElementsByClassName("load-more");
var blockLength = block.length;
var loadClick = document.getElementById("load-more-btn");
var count = 0;
// added on click to load more
loadClick.addEventListener("click",loadMore);
// added function for displaying blocks or hiding blocks
function loadMore() {
  for (var i = count; i < count + 2 && i < blockLength; i++) {
    block[i].style.display = "inline-block";
  }
  count = count + 2;
  if (count >= blockLength) {
    loadBtn.style.display = 'none';
  }
}