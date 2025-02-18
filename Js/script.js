// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close");

// When the user clicks the button, open the modal 
//document.addEventListener("DOMContentLoaded", () => {
//  if (modal) {
//    modal.style.display = "block";
//  } 
//});

document.addEventListener("DOMContentLoaded", (event) => {
  modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}