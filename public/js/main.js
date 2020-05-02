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
window.addEventListener('DOMContentLoaded', (event) => {
  userstuff()
});


function userstuff() {

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log(user)
      var docRef = db.collection("users").doc(user.email).onSnapshot(function (doc) {
        console.log("Document data:", doc.data().main);
        var picnav = document.querySelector("#picnav")
        picnav.style.backgroundColor = doc.data().main;

        console.log("Document data:", doc.data().prize);
        var prinav = document.querySelector("#prinav")
        prinav.style.backgroundColor = doc.data().prize;

        console.log("Document data:", doc.data().activity);
        var actnav = document.querySelector("#actnav")
        actnav.style.backgroundColor = doc.data().activity;

        console.log("Document data:", doc.data().setting);
        var setnav = document.querySelector("#setnav")
        setnav.style.backgroundColor = doc.data().setting;

        console.log("Document data:", doc.data().theme)
        const words = document.getElementsByClassName("themetext")

        const setbord = document.getElementsByClassName("setting-box")

        const sidenav = document.getElementsByClassName("sidenav")

        console.log(words)
        const display = doc.data().theme
        switch (display) {
          case "dark":
            console.log("dark theme")
            for (var i = 0; i < words.length; i++) {
              words[i].style.color = "white";
            }
            for (var i = 0; i < setbord.length; i++) {
              setbord[i].style.border = "1px solid white";
              setbord[i].style.backgroundColor = "black";
            }
            for (var i = 0; i < sidenav.length; i++) {
              sidenav[i].style.backgroundColor = "black";
              sidenav[i].style.border = "1px solid white";
            }
            document.querySelector("#setting").style.backgroundColor = "black"
            break;
          case "light":
            console.log("light theme")
            for (var i = 0; i < words.length; i++) {
              words[i].style.color = "black";
            }
            for (var i = 0; i < setbord.length; i++) {
              setbord[i].style.border = "1px solid black";
              setbord[i].style.backgroundColor = "white";
            }
            for (var i = 0; i < sidenav.length; i++) {
              sidenav[i].style.backgroundColor = "white";
              sidenav[i].style.border = "1px solid black";
            }
            document.querySelector("#setting").style.backgroundColor = "white"
            break;
        }
      });

    } else {
      window.location.replace("index.html");
    }
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
  document.querySelector(".logoa").style.display = "none"
  document.querySelector(".reversea").style.display = "inline"

}
function downscreen() {
  document.querySelector(".navbar").style.display = "block"
  document.querySelector("#picture").style.display = "block"
  document.querySelector("#upload").style.display = "none"
  document.querySelector("#upscreen").style.display = ""
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

function settingreset() {
  var user = firebase.auth().currentUser;

  var emailAddress = user.email;

  auth.sendPasswordResetEmail(emailAddress).then(function () {
    // Email sent.
  }).catch(function (error) {
    // An error happened.
  });

}
//----------------color select--------------------
function colorswap(e) {

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log(e.id);
      const colur = window.getComputedStyle(e).backgroundColor
      console.log(colur)
      const dropvalue = document.querySelector("#colorpage").value;
      console.log(dropvalue)
      var docRef = db.collection("users").doc(user.email)

      switch (dropvalue) {
        case 'main':
          return docRef.update({
            main: colur
          })
          break;
        case 'activity':
          return docRef.update({
            activity: colur
          })
          break;
        case 'prize':
          return docRef.update({
            prize: colur
          });
          break;
        case 'setting':
          return docRef.update({
            setting: colur
          });
          break;
        default:
          console.log("fail");
      }
    }
  }
  )//------------------------------------------------------------------------
}//-------------------------------------------------------------------
//---------------------------------------------------------------------

//-------------------light and dark---------------------------------------
function ligdar(e) {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log(user)
      var docRef = db.collection("users").doc(user.email)

      const choice = e.id

      return docRef.update({
        theme: choice
      })
    }
  })
};








