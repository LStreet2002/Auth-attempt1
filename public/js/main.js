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
//--------------------------------------------------------------------------------
//This is the carousel------------------------------------------------------------
//--------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function test() {
  pic = [];
  db.collection("pic").where("type", "==", "picture")
    .onSnapshot(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        pic.push(doc.data().src);
      });



      for (i = 0; i < pic.length; i++) {
        console.log(pic[i])

        //putting things into carousel 
        var storage = firebase.storage();
        var pathReference = storage.ref('pic/' + pic[i]);

        storageRef.child('pic/' + pic[i]).getDownloadURL().then(function (url) {
          console.log(url)
          console.log("url gained")


          var carhol = document.createElement("div")
          carhol.classList.add("mySlides")

          console.log("slides made")

          var carimg = document.createElement("img")
          carimg.classList.add("carosimg", i)
          carimg.src = url
          console.log("url added")
          carhol.appendChild(carimg)

          document.querySelector("#fullslides").appendChild(carhol);
          console.log("carousel!")
        })
      };
    })

});
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------

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
  var slides = document.getElementsByClassName("mySlides")
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
function upscreen() {
  document.querySelector(".navbar").style.display = "none"
  document.querySelector("#picture").style.display = "none"
  document.querySelector("#upload").style.display = "grid"
  document.querySelector("#upscreen").style.display = "none"
  document.querySelector(".nav-wrapper").style.backgroundColor = "red"
  document.querySelector(".logoa").style.display = "none"
  document.querySelector(".reversea").style.display = "inline"

}
function downscreen() {
  document.querySelector(".navbar").style.display = "block"
  document.querySelector("#picture").style.display = "block"
  document.querySelector("#upload").style.display = "none"
  document.querySelector("#upscreen").style.display = ""
  document.querySelector(".nav-wrapper").style.backgroundColor = "white"
  document.querySelector(".logoa").style.display = "grid"
  document.querySelector(".reversea").style.display = "none"
  document.querySelector("#uploader").style.backgroundColor = "grey"
  document.querySelector("#preview").removeAttribute("src") // free memory


}
//upload 
var uploader = document.getElementById("uploader");
var chooser = document.getElementById("chooser");






// Listen for file selection
chooser.addEventListener("change", function (e) {
  // Get file
  file = e.target.files[0];

  console.log(file.name)

  output = document.getElementById('preview');
  preview.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function () {
    URL.revokeObjectURL(output.src) // free memory
  }

  document.querySelector("#uploader").style.backgroundColor = "#F10F0F"

});






function upload() {
  // Create a storage refd
  var storageRef = firebase
    .storage()
    .ref("pic/" + file.name);
  // Upload file
  var task = storageRef.put(file)


  document.querySelector("#uploader").style.backgroundColor = "grey"

  document.querySelector("#preview").removeAttribute("src") // free memory

  db.collection("pic").add({
    src: file.name,
    type: "picture"
  })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });

  downscreen()

};






