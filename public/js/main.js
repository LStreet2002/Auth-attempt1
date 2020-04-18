firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
  } else {
    window.location.replace("index.html");
  }
});
function logOut() {
  firebase.auth().signOut();
}
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

//switching tabs
function picture() {
  document.querySelector("#picture").style.display = "block"
  document.querySelector("#home").style.backgroundColor = "#F10F0F"
  document.querySelector("#activity").style.display = "none"
  document.querySelector("#activities").style.backgroundColor = "#5B5B5B"
  document.querySelector("#prize").style.display = "none"
  document.querySelector("#prizes").style.backgroundColor = "#5B5B5B"
  document.querySelector("#setting").style.display = "none"
  document.querySelector("#settings").style.backgroundColor = "#5B5B5B"
}
function activity() {
  document.querySelector("#picture").style.display = "none"
  document.querySelector("#home").style.backgroundColor = "#5B5B5B"
  document.querySelector("#activity").style.display = "block"
  document.querySelector("#activities").style.backgroundColor = "#F10F0F"
  document.querySelector("#prize").style.display = "none"
  document.querySelector("#prizes").style.backgroundColor = "#5B5B5B"
  document.querySelector("#setting").style.display = "none"
  document.querySelector("#settings").style.backgroundColor = "#5B5B5B"
}
function prizes() {
  document.querySelector("#picture").style.display = "none"
  document.querySelector("#home").style.backgroundColor = "#5B5B5B"
  document.querySelector("#activity").style.display = "none"
  document.querySelector("#activities").style.backgroundColor = "#5B5B5B"
  document.querySelector("#prize").style.display = "block"
  document.querySelector("#prizes").style.backgroundColor = "#F10F0F"
  document.querySelector("#setting").style.display = "none"
  document.querySelector("#settings").style.backgroundColor = "#5B5B5B"
}
function settings() {
  document.querySelector("#picture").style.display = "none"
  document.querySelector("#home").style.backgroundColor = "#5B5B5B"
  document.querySelector("#activity").style.display = "none"
  document.querySelector("#activities").style.backgroundColor = "#5B5B5B"
  document.querySelector("#prize").style.display = "none"
  document.querySelector("#prizes").style.backgroundColor = "#5B5B5B"
  document.querySelector("#setting").style.display = "block"
  document.querySelector("#settings").style.backgroundColor = "#F10F0F"
}
