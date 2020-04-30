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

function userstuff() {


  var user = firebase.auth().currentUser;

  var docRef = db.collection("users").doc(user.email);

  docRef.get().then(function (doc) {
    if (doc.exists) {
      console.log("Document data:", doc.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }).catch(function (error) {
    console.log("Error getting document:", error);
  });


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
        //putting things into carousel 
        var storage = firebase.storage();
        var pathReference = storage.ref('pic/' + pic[i]);

        storageRef.child('pic/' + pic[i]).getDownloadURL().then(function (url) {


          var carhol = document.createElement("div")
          carhol.classList.add("mySlides")


          var carimg = document.createElement("img")
          carimg.classList.add("carosimg", i)
          carimg.src = url
          carhol.appendChild(carimg)

          document.querySelector("#fullslides").appendChild(carhol);
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
  document.querySelector("#activity").style.display = "none"
  document.querySelector("#prize").style.display = "none"
  document.querySelector("#setting").style.display = "none"
  document.querySelector(".nav-wrapper").style.backgroundColor = "white"
  document.querySelector("#upscreen").style.display = "block"
  document.querySelector("#home").style.borderBottom = "2px solid #FF0000"
  document.querySelector("#prizes").style.borderBottom = ""
  document.querySelector("#activities").style.borderBottom = ""
  document.querySelector("#settings").style.borderBottom = ""
}
function activity() {
  document.querySelector("#picture").style.display = "none"
  document.querySelector("#activity").style.display = "block"
  document.querySelector("#prize").style.display = "none"
  document.querySelector("#setting").style.display = "none"
  document.querySelector(".nav-wrapper").style.backgroundColor = "rgba(0, 191, 0, 0.7)"
  document.querySelector("#upscreen").style.display = "none"
  document.querySelector("#home").style.borderBottom = ""
  document.querySelector("#prizes").style.borderBottom = ""
  document.querySelector("#activities").style.borderBottom = "2px solid #FF0000"
  document.querySelector("#settings").style.borderBottom = ""
}
function prizes() {
  document.querySelector("#picture").style.display = "none"
  document.querySelector("#activity").style.display = "none"
  document.querySelector("#prize").style.display = "block"
  document.querySelector("#setting").style.display = "none"
  document.querySelector(".nav-wrapper").style.backgroundColor = "#B82525"
  document.querySelector("#upscreen").style.display = "none"
  document.querySelector("#home").style.borderBottom = ""
  document.querySelector("#prizes").style.borderBottom = "2px solid #FF0000"
  document.querySelector("#activities").style.borderBottom = ""
  document.querySelector("#settings").style.borderBottom = ""
}
function settings() {
  document.querySelector("#picture").style.display = "none"
  document.querySelector("#activity").style.display = "none"
  document.querySelector("#prize").style.display = "none"
  document.querySelector("#setting").style.display = "block"
  document.querySelector(".nav-wrapper").style.backgroundColor = "#4588A9"
  document.querySelector("#upscreen").style.display = "none"
  document.querySelector("#home").style.borderBottom = ""
  document.querySelector("#prizes").style.borderBottom = ""
  document.querySelector("#activities").style.borderBottom = ""
  document.querySelector("#settings").style.borderBottom = "2px solid #FF0000"
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


document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});







