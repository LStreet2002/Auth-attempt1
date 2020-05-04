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

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

window.addEventListener('DOMContentLoaded', (event) => {
  userstuff()
  sleep(4000).then(() => {
    document.querySelector("#fillerpage").style.display = "none"
    document.querySelector("#picture").style.display = "block"
    document.querySelector(".navbar").style.display = "block"
  });
});

//------------------------------------------themes and colours----
function userstuff() {

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
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


        const logomain = doc.data().logomain

        const logoactivity = doc.data().logoactivity

        const logoprize = doc.data().logoprize

        const logosetting = doc.data().logosetting



        switch (logomain) {
          case "logor":
            document.querySelector("#logomain").src = "pic/canonlo.png";
            break;
          case "logob":
            document.querySelector("#logomain").src = "pic/blackcanonlo.png"
            break;
          case "logow":
            document.querySelector("#logomain").src = "pic/whitecanonlo.png"
            break;
        }

        switch (logoactivity) {
          case "logor":
            document.querySelector("#logoactivity").src = "pic/canonlo.png";
            break;
          case "logob":
            document.querySelector("#logoactivity").src = "pic/blackcanonlo.png"
            break;
          case "logow":
            document.querySelector("#logoactivity").src = "pic/whitecanonlo.png"
            break;
        }
        switch (logoprize) {
          case "logor":
            document.querySelector("#logoprize").src = "pic/canonlo.png";
            break;
          case "logob":
            document.querySelector("#logoprize").src = "pic/blackcanonlo.png"
            break;
          case "logow":
            document.querySelector("#logoprize").src = "pic/whitecanonlo.png"
            break;
        }
        switch (logosetting) {
          case "logor":
            document.querySelector("#logosetting").src = "pic/canonlo.png";
            break;
          case "logob":
            document.querySelector("#logosetting").src = "pic/blackcanonlo.png"
            break;
          case "logow":
            document.querySelector("#logosetting").src = "pic/whitecanonlo.png"
            break;
        }

        console.log("Document data:", doc.data().setting);
        var setnav = document.querySelector("#setnav")
        setnav.style.backgroundColor = doc.data().setting;

        console.log("Document data:", doc.data().theme)
        const words = document.getElementsByClassName("themetext")

        const setbord = document.getElementsByClassName("setting-box")

        const sidenav = document.getElementsByClassName("sidenav")

        const display = doc.data().theme
        switch (display) {
          case "dark":
            console.log("dark theme")
            for (var i = 0; i < words.length; i++) {
              words[i].style.color = "white";
            }
            for (var i = 0; i < setbord.length; i++) {
              setbord[i].style.borderBottom = "1px solid white";
              setbord[i].style.backgroundColor = "black";
            }
            for (var i = 0; i < sidenav.length; i++) {
              sidenav[i].style.backgroundColor = "black";
              sidenav[i].style.border = "1px solid white";
            }
            document.querySelector("#setting").style.backgroundColor = "black"
            document.querySelector("#cicon").src = "pic/whitecamera.png"
            document.querySelector("#picon").src = "pic/whitetrophy.png"
            document.querySelector("#aicon").src = "pic/whitefeet.png"
            document.querySelector("#sicon").src = "pic/whitecog.png"
            document.querySelector(".navbar").style.backgroundColor = "black"
            document.querySelector("#picture").style.backgroundColor = "black"
            document.querySelector("#prize").style.backgroundColor = "black"
            document.querySelector("#activity").style.backgroundColor = "black"
            document.querySelector("#setting").style.backgroundColor = "black"
            document.querySelector("#prinav").style.boxShadow = " 0px 6px 3px rgba(255, 255, 255, 0.25)"
            document.querySelector(".navbar").style.boxShadow = "0px 0 10px rgba(255, 255, 255, 0.4)"
            document.querySelector("#actnav").style.boxShadow = " 0px 6px 3px rgba(255, 255, 255, 0.25)"
            document.querySelector("#setnav").style.boxShadow = " 0px 6px 3px rgba(255, 255, 255, 0.25)"
            document.querySelector("#upload").style.backgroundColor = "black"
            document.querySelector("#upborder").style.border = "1px solid white"
            break;
          case "light":
            console.log("light theme")
            for (var i = 0; i < words.length; i++) {
              words[i].style.color = "black";
            }
            for (var i = 0; i < setbord.length; i++) {
              setbord[i].style.borderBottom = "1px solid black";
              setbord[i].style.backgroundColor = "white";
            }
            for (var i = 0; i < sidenav.length; i++) {
              sidenav[i].style.backgroundColor = "white";
              sidenav[i].style.border = "1px solid black";
            }
            document.querySelector("#setting").style.backgroundColor = "white"
            document.querySelector("#cicon").src = "pic/camera.png"
            document.querySelector("#picon").src = "pic/Trophy.png"
            document.querySelector("#aicon").src = "pic/feet.png"
            document.querySelector("#sicon").src = "pic/cog.png"
            document.querySelector(".navbar").style.backgroundColor = "white"
            document.querySelector("#picture").style.backgroundColor = "white"
            document.querySelector("#prize").style.backgroundColor = "white"
            document.querySelector("#activity").style.backgroundColor = "white"
            document.querySelector("#setting").style.backgroundColor = "white"
            document.querySelector("#prinav").style.boxShadow = " 0px 6px 3px rgba(0, 0, 0, 0.35)"
            document.querySelector(".navbar").style.boxShadow = "0px 0 10px rgba(0, 0, 0, 0.8)"
            document.querySelector("#actnav").style.boxShadow = " 0px 6px 3px rgba(0, 0, 0, 0.35)"
            document.querySelector("#setnav").style.boxShadow = " 0px 6px 3px rgba(0, 0, 0, 0.35)"
            document.querySelector("#upload").style.backgroundColor = "white"
            document.querySelector("#upborder").style.border = "1px solid black"
            break;
        }
      });

    } else {
      window.location.replace("index.html");
    }
  });
  //-----------------------------------------------------


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
      storageRef.child('pic/' + pic[pic.length - 1]).getDownloadURL().then(function (url) {

        document.querySelector("#firstcaros").src = url
      });
      for (i = pic.length - 2; i > 0; i--) {
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
  document.querySelector("#home").style.borderBottom = "0.4vh solid #FF0000"
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
  document.querySelector("#activities").style.borderBottom = "0.4vh solid #FF0000"
  document.querySelector("#settings").style.borderBottom = ""
}
function prizes() {
  document.querySelector("#picture").style.display = "none"
  document.querySelector("#activity").style.display = "none"
  document.querySelector("#prize").style.display = "block"
  document.querySelector("#setting").style.display = "none"
  document.querySelector("#upscreen").style.display = "none"
  document.querySelector("#home").style.borderBottom = ""
  document.querySelector("#prizes").style.borderBottom = "0.4vh solid #FF0000"
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
  document.querySelector("#settings").style.borderBottom = "0.4vh solid #FF0000"
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

function logoswap(e) {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      var docRef = db.collection("users").doc(user.email)
      const dropvalue = document.querySelector("#colorpage").value;
      switch (dropvalue) {
        case 'main':
          return docRef.update({
            logomain: e.id
          })
          break;
        case "prize":
          return docRef.update({
            logoprize: e.id
          })
          break;
        case "activity":
          return docRef.update({
            logoactivity: e.id
          })
        case "setting":
          return docRef.update({
            logosetting: e.id
          })

      }
    }
  }
  )
}
