// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

// window.scrollTo({top: 0, behavior: 'smooth'});

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }
function topFunction() {
  document.body.scrollTop = ({top: 0, behavior: 'smooth'}); // For Safari
  document.documentElement.scrollTop = ({top: 0, behavior: 'smooth'}); // For Chrome, Firefox, IE and Opera
}