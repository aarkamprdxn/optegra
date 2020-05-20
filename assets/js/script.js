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

// Curousal Starts -------------------------------------
var slideIndex = 1;
var slides = document.getElementsByClassName('slides');
if (slides.length > 1) {
  showSlides(slideIndex);
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    slides[slideIndex - 1].style.display = 'block';
  }
  
//-----------------------------------------------------

// Form Validation Starts ----------------------------
var messageLength = document.getElementsByClassName('message').length;
var messageArray = [];
for (var i = 0; i < messageLength; i++) {
	messageArray.push(document.getElementsByClassName('message')[i]);
}
var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var phoneNo = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
// On Submit Function
function onFormSubmit() {
	// Store value from the input given by the user
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var phone = document.getElementById('phone').value;
	var terms = document.getElementById('terms');

	// For name
	if (!name) {
		showMessage(0);
	} else {
		hideMessage(0);
	}

	// For email
	if (email.match(emailPattern)) {
		hideMessage(1);
	} else {
		showMessage(1);
	}

	// For Pone
	if (!phone.match(phoneNo)) {
		showMessage(2);
	} else {
		hideMessage(2);
	}

	// For Terms
	if (terms.checked == false) {
		showMessage(3);
	} else {
		hideMessage(3);
	}

	function showMessage(index) {
		for (var i = 0; i < messageLength; i++) {
			messageArray[index].style.opacity = '1';
			messageArray[index].style.paddingLeft = '16px';
			messageArray[index].style.transition = '.2s';
		}
	}

	function hideMessage(index) {
		for (var i = 0; i < messageLength; i++) {
			messageArray[index].style.opacity = '0';
			messageArray[index].style.paddingLeft = '6px';
			messageArray[index].style.transition = '.2s';
		}
	}

	// Validate if all the data is filled
	if (!name || !email.match(emailPattern) || !phone.match(phoneNo) || terms.checked == false) {
		return;
	} else { 
		document.querySelector('form').reset();
		// Reset the current form data
	}
}
// ---------------------------------------------------

