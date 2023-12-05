// When the user scrolls the page, execute parlax. taken from w3 tutorial.
window.onscroll = function() {parlax()};

var navbar = document.getElementById("navbar"); // find the navbar in index

var sticky = navbar.offsetTop; //finds pos

//the function.
function parlax() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}