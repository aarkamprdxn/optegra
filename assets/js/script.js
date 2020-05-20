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


// Accordion Function Starts -------------------------
toggleAccordion();

function toggleAccordion() {
    var accordions = document.getElementsByClassName('accordion-title');
    var accordionsData = document.getElementsByClassName('accordion-data');
    var accordionsLength = accordions.length;

    for (var i = 0; i < accordionsLength; i++) {
        accordions[i].onclick = function () {
            var content = this.nextElementSibling;
            // accordion is currently open, so close it
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                this.classList.remove('active');
                this.firstElementChild.classList.remove('active');
            } else { // accordion is currently closed, so open it
                content.style.maxHeight = content.scrollHeight + 'px';
                this.classList.add('active');
                this.firstElementChild.classList.add('active');
            }

            // Add/Remove codes below this line for single/multiple opened accordions
            for (var i = 0; i < accordionsLength; i++) {
                if (accordionsData[i].style.maxHeight) {
                    // This will remove all the properties
                    accordionsData[i].style.maxHeight = null;
                    accordions[i].classList.remove('active');
                    accordions[i].firstElementChild.classList.remove('active');
                    // This will add the properties on clicked accordion
                    content.style.maxHeight = content.scrollHeight + 'px';
                    this.classList.add('active');
                    this.firstElementChild.classList.add('active');
                }
            } // Remove till here if you want multiple accordion
        }
    }
}
// -------------------------------------------------------