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
  return new Promise((resolve) => setTimeout(resolve, ms));
}

window.addEventListener('DOMContentLoaded', (event) => {
  userstuff()
  sleep(6000).then(() => {
    document.querySelector("#fillerpage").style.display = "none"
    document.querySelector("#picture").style.display = "block"
    document.querySelector(".navbar").style.display = "block"
  });
});

//------------------------------------------themes and colours----
function userstuff() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      var docRef = db
        .collection("users")
        .doc(user.email)
        .onSnapshot(function (doc) {
          var picnav = document.querySelector("#picnav");
          picnav.style.backgroundColor = doc.data().main;

          var upborder = document.querySelector("#upborder");
          upborder.style.backgroundColor = doc.data().main;

          var previewholder = document.querySelector("#previewholder");
          previewholder.style.backgroundColor = doc.data().main;

          var prinav = document.querySelector("#prinav");
          prinav.style.backgroundColor = doc.data().main;

          var actnav = document.querySelector("#actnav");
          actnav.style.backgroundColor = doc.data().main;

          var setnav = document.querySelector("#setnav");
          setnav.style.backgroundColor = doc.data().main;

          var upnav = document.querySelector("#reversered")
          upnav.style.backgroundColor = doc.data().main;

          var usersbio = document.querySelector(".info")
          usersbio.style.borderBottom = "0.6vh solid " + doc.data().main;



          const logomain = doc.data().logomain;

          const logoactivity = doc.data().logomain;

          const logoprize = doc.data().logomain;

          const logosetting = doc.data().logomain;

          switch (logomain) {
            case "logor":
              document.querySelector("#logomain").src = "pic/canonlo.png";
              break;
            case "logob":
              document.querySelector("#logomain").src = "pic/blackcanonlo.png";
              break;
            case "logow":
              document.querySelector("#logomain").src = "pic/whitecanonlo.png";
              break;
          }

          switch (logomain) {
            case "logor":
              document.querySelector("#preview").src = "pic/redfileselect.png";
              break;
            case "logob":
              document.querySelector("#preview").src = "pic/fileselect.png";
              break;
            case "logow":
              document.querySelector("#preview").src = "pic/whitefileselect.png";
              break;
          }

          switch (logomain) {
            case "logor":
              document.querySelector("#uploj").src = "pic/upload.png"
              document.querySelector("#reverse").src = "pic/redcross.png";
              break;
            case "logob":
              document.querySelector("#uploj").src = "pic/blackupload.png"
              document.querySelector("#reverse").src = "pic/blackcross.png";
              break;
            case "logow":
              document.querySelector("#uploj").src = "pic/whiteupload.png"
              document.querySelector("#reverse").src = "pic/whitecross.png";
              break;
          }

          switch (logoactivity) {
            case "logor":
              document.querySelector("#logoactivity").src = "pic/canonlo.png";
              break;
            case "logob":
              document.querySelector("#logoactivity").src =
                "pic/blackcanonlo.png";
              break;
            case "logow":
              document.querySelector("#logoactivity").src =
                "pic/whitecanonlo.png";
              break;
          }
          switch (logoprize) {
            case "logor":
              document.querySelector("#logoprize").src = "pic/canonlo.png";
              break;
            case "logob":
              document.querySelector("#logoprize").src = "pic/blackcanonlo.png";
              break;
            case "logow":
              document.querySelector("#logoprize").src = "pic/whitecanonlo.png";
              break;
          }
          switch (logosetting) {
            case "logor":
              document.querySelector("#logosetting").src = "pic/canonlo.png";
              break;
            case "logob":
              document.querySelector("#logosetting").src =
                "pic/blackcanonlo.png";
              break;
            case "logow":
              document.querySelector("#logosetting").src =
                "pic/whitecanonlo.png";
              break;
          }



          console.log("Document data:", doc.data().theme);
          const words = document.getElementsByClassName("themetext");

          const setbord = document.getElementsByClassName("setting-box");

          const sidenav = document.getElementsByClassName("sidenav");

          const display = doc.data().theme;
          switch (display) {
            case "dark":
              console.log("dark theme");
              for (var i = 0; i < words.length; i++) {
                words[i].style.color = "white";
              }
              for (var i = 0; i < setbord.length; i++) {
                setbord[i].style.borderBottom = "1px solid white";
                setbord[i].style.backgroundColor = "#1E1C1C";
              }
              for (var i = 0; i < sidenav.length; i++) {
                sidenav[i].style.backgroundColor = "#1E1C1C";
                sidenav[i].style.border = "1px solid white";
              }
              document.querySelector("#setting").style.backgroundColor =
                "#1E1C1C";
              document.querySelector("#cicon").src = "pic/whitecamera.png";
              document.querySelector("#picon").src = "pic/whitepfp.png";
              document.querySelector("#aicon").src = "pic/whitefeet.png";
              document.querySelector("#sicon").src = "pic/whitecog.png";
              document.querySelector(".navbar").style.backgroundColor = "#1B1818";
              document.querySelector("#picture").style.backgroundColor =
                "#1E1C1C";
              document.querySelector("#prize").style.backgroundColor = "#1E1C1C";
              document.querySelector("#activity").style.backgroundColor =
                "#1E1C1C";
              document.querySelector("#viewpage").style.backgroundColor =
                "#1E1C1C";
              document.querySelector("#setting").style.backgroundColor =
                "#1E1C1C";
              document.querySelector("#prinav").style.boxShadow =
                " 0px 6px 3px rgba(255, 255, 255, 0.25)";
              document.querySelector(".navbar").style.boxShadow =
                "0px 0 10px rgba(255, 255, 255, 0.4)";
              document.querySelector("#actnav").style.boxShadow =
                " 0px 6px 3px rgba(255, 255, 255, 0.25)";
              document.querySelector("#setnav").style.boxShadow =
                " 0px 6px 3px rgba(255, 255, 255, 0.25)";
              document.querySelector("#reversered").style.boxShadow =
                " 0px 6px 3px rgba(255, 255, 255, 0.25)";
              document.querySelector("#upload").style.backgroundColor = "#1E1C1C";

              document.querySelector("#pulltext").style.backgroundColor = "#1E1C1C"
              document.querySelector("#pulltext").style.borderBottom = "1px solid white";
              document.querySelector("#pulltext").style.borderTop = "1px solid white";

              break;
            case "light":
              console.log("light theme");
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
              document.querySelector("#setting").style.backgroundColor =
                "white";
              document.querySelector("#cicon").src = "pic/camera.png";
              document.querySelector("#picon").src = "pic/blackpfp.png";
              document.querySelector("#aicon").src = "pic/feet.png";
              document.querySelector("#sicon").src = "pic/cog.png";
              document.querySelector(".navbar").style.backgroundColor = "white";
              document.querySelector("#picture").style.backgroundColor =
                "white";
              document.querySelector("#prize").style.backgroundColor = "white";
              document.querySelector("#activity").style.backgroundColor =
                "white";
              document.querySelector("#viewpage").style.backgroundColor =
                "white";
              document.querySelector("#setting").style.backgroundColor =
                "white";
              document.querySelector("#prinav").style.boxShadow =
                " 0px 6px 3px rgba(0, 0, 0, 0.35)";
              document.querySelector(".navbar").style.boxShadow =
                "0px 0 10px rgba(0, 0, 0, 0.8)";
              document.querySelector("#actnav").style.boxShadow =
                " 0px 6px 3px rgba(0, 0, 0, 0.35)";
              document.querySelector("#setnav").style.boxShadow =
                " 0px 6px 3px rgba(0, 0, 0, 0.35)";
              document.querySelector("#reversered").style.boxShadow =
                " 0px 6px 3px rgba(0, 0, 0, 0.35)";
              document.querySelector("#upload").style.backgroundColor = "white";
              document.querySelector("#pulltext").style.backgroundColor = "white";
              document.querySelector("#pulltext").style.borderBottom = "1px solid black";
              document.querySelector("#pulltext").style.borderTop = "1px solid black";
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
pic = [];
sorces = []
document.addEventListener("DOMContentLoaded", function test() {

  db.collection("pic")
    .onSnapshot(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        pic.push(doc.data());
      });
      storageRef
        .child("pic/" + pic[0].src)
        .getDownloadURL()
        .then(function (url) {
          document.querySelector("#firstcaros").src = url
          document.querySelector("#firstcaros").setAttribute("onclick", "view(this)");

          document.querySelector("#firstlongscroll").src = url
          document.querySelector("#firstlongscroll").setAttribute("onclick", "view(this)");
        });
      for (i = 1; i < pic.length; i++) {
        //putting things into carousel
        var storage = firebase.storage();

        assix = i
        storageRef
          .child("pic/" + pic[assix].src)
          .getDownloadURL()
          .then(function (url) {
            carhol = document.createElement("div");
            carhol.classList.add("mySlides")
            uarl = String(url)
            sorces.push(uarl)

            var carimg = document.createElement("img");
            carimg.classList.add("carosimg");
            carimg.src = uarl;
            carimg.setAttribute("onclick", "view(this)")
            carhol.appendChild(carimg)


            document.querySelector("#fullslides").appendChild(carhol);

            var scrollimg = document.createElement("img");
            scrollimg.classList.add("longscrollimg");
            scrollimg.src = url;
            scrollimg.setAttribute("onclick", "view(this)");


            document.querySelector(".longscroll").appendChild(scrollimg)

            i++
          })

      }


    });
});
yourpics = []

firebase.auth().onAuthStateChanged(function (user) {
  db.collection("pic").where("userna", "==", user.displayName)
    .onSnapshot(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        yourpics.push(doc.data());
      });
      for (i = 0; i < yourpics.length; i++) {
        //putting things into carousel
        var storage = firebase.storage();

        storageRef
          .child("pic/" + yourpics[i].src)
          .getDownloadURL()
          .then(function (url) {
            var yourscrollimg = document.createElement("img");
            yourscrollimg.classList.add("yourscrollimg");
            yourscrollimg.src = url;
            yourscrollimg.setAttribute("onclick", "view(this)");


            document.querySelector("#userscroll").appendChild(yourscrollimg)
          })
      }
      prof()
    });
});





function view(e) {
  document.querySelector("#picture").style.display = "none"
  document.querySelector("#viewpage").style.display = "grid"
  document.querySelector("#viewimage").src = e.src
  document.querySelector(".navbar").style.display = "none";
}






//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
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
  document.querySelector("#viewpage").style.display = "none"
  document.querySelector("#home").style.borderBottom = "0.4vh solid #FF0000"
  document.querySelector("#prizes").style.borderBottom = ""
  document.querySelector("#activities").style.borderBottom = ""
  document.querySelector("#settings").style.borderBottom = ""
  document.querySelector(".navbar").style.display = "block";
}
function activity() {
  document.querySelector("#picture").style.display = "none"
  document.querySelector("#activity").style.display = "block"
  document.querySelector("#prize").style.display = "none"
  document.querySelector("#setting").style.display = "none"
  document.querySelector("#upscreen").style.display = "none"
  document.querySelector("#viewpage").style.display = "none"
  document.querySelector("#home").style.borderBottom = ""
  document.querySelector("#prizes").style.borderBottom = ""
  document.querySelector("#activities").style.borderBottom = "0.4vh solid #FF0000"
  document.querySelector("#settings").style.borderBottom = ""
  document.querySelector(".navbar").style.display = "block";
}
function prizes() {
  document.querySelector("#picture").style.display = "none"
  document.querySelector("#activity").style.display = "none"
  document.querySelector("#prize").style.display = "block"
  document.querySelector("#setting").style.display = "none"
  document.querySelector("#upscreen").style.display = "none"
  document.querySelector("#viewpage").style.display = "none"
  document.querySelector("#home").style.borderBottom = ""
  document.querySelector("#prizes").style.borderBottom = "0.4vh solid #FF0000"
  document.querySelector("#activities").style.borderBottom = ""
  document.querySelector("#settings").style.borderBottom = ""
  document.querySelector(".navbar").style.display = "block";
}
function settings() {
  document.querySelector("#picture").style.display = "none"
  document.querySelector("#activity").style.display = "none"
  document.querySelector("#prize").style.display = "none"
  document.querySelector("#setting").style.display = "block"
  document.querySelector("#upscreen").style.display = "none"
  document.querySelector("#viewpage").style.display = "none"
  document.querySelector("#home").style.borderBottom = ""
  document.querySelector("#prizes").style.borderBottom = ""
  document.querySelector("#activities").style.borderBottom = ""
  document.querySelector("#settings").style.borderBottom = "0.4vh solid #FF0000"
  document.querySelector(".navbar").style.display = "block";
}
function upscreen() {
  document.querySelector(".navbar").style.display = "none";
  document.querySelector("#picture").style.display = "none";
  document.querySelector("#upload").style.display = "block";
  document.querySelector("#upscreen").style.display = "none";
  document.querySelector("#viewpage").style.display = "none"
  document.querySelector(".logoa").style.display = "none";
  document.querySelector(".reversea").style.display = "inline";
}
function downscreen() {
  document.querySelector(".navbar").style.display = "block";
  document.querySelector("#picture").style.display = "block";
  document.querySelector("#upload").style.display = "none";
  document.querySelector("#upscreen").style.display = "";
  document.querySelector("#viewpage").style.display = "none"
  document.querySelector(".logoa").style.display = "grid";
  document.querySelector(".reversea").style.display = "none";
  document.querySelector("#uploader").style.background = " rgba(255, 255, 255, 0.28)";
  document.querySelector("#uploaderbar").value = "0"

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      var docRef = db
        .collection("users")
        .doc(user.email)
        .onSnapshot(function (doc) {
          logomain = doc.data().logomain
          switch (logomain) {
            case "logor":
              document.querySelector("#preview").src = "pic/redfileselect.png";
              break;
            case "logob":
              document.querySelector("#preview").src = "pic/fileselect.png";
              break;
            case "logow":
              document.querySelector("#preview").src = "pic/whitefileselect.png";
              break;
          }

        })
    }
  });

  document.querySelector("#uploader").removeAttribute("onclick")
  document.querySelector("#uploader").style.color = "rgba(0, 0, 0, 0.2)"
  document.querySelector("#preview").style.width = "17vh"
  document.querySelector("#preview").style.height = "17vh"
  document.querySelector("#preview").style.margin = "5.8vh"
}
//upload
var uploader = document.getElementById("uploader");
var chooser = document.getElementById("chooser");

// Listen for file selection
chooser.addEventListener("change", function (e) {
  // Get file
  file = e.target.files[0];

  console.log(file.name);

  document.querySelector("#preview").style.width = " 28.8vh"
  document.querySelector("#preview").style.height = "28.8vh"
  document.querySelector("#preview").style.margin = "0vh"
  output = document.getElementById("preview");
  preview.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function () {
    URL.revokeObjectURL(output.src); // free memory
  };
  document.querySelector("#uploader").setAttribute("onclick", "upload()")

  document.querySelector("#uploader").style.background = "rgba(95, 191, 95, 0.8)"
  document.querySelector("#uploader").style.color = "rgba(0, 0, 0, 0.8)";
});

function upload() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      var docRef = db
        .collection("users")
        .doc(user.email)
        .onSnapshot(function (doc) {
          // Create a storage refd
          var storageRef = firebase.storage().ref("pic/" + file.name);
          // Upload file
          var task = storageRef.put(file);

          task.on('state_changed',
            function progress(snapshot) {
              var prog = document.querySelector("#uploaderbar")
              var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              prog.value = percentage

              if (prog.value == "100") {
                document.querySelector("#uploader").removeAttribute("onclick");
                document.querySelector("#uploader").style.background = " rgba(255, 255, 255, 0.28)"
                document.querySelector("#uploader").style.color = "rgba(0, 0, 0, 0.2)";

                firebase.auth().onAuthStateChanged(function (user) {
                  if (user) {
                    var docRef = db
                      .collection("users")
                      .doc(user.email)
                      .onSnapshot(function (doc) {
                        logomain = doc.data().main
                        switch (logomain) {
                          case "logor":
                            document.querySelector("#preview").src = "pic/redfileselect.png";
                            break;
                          case "logob":
                            document.querySelector("#preview").src = "pic/fileselect.png";
                            break;
                          case "logow":
                            document.querySelector("#preview").src = "pic/whitefileselect.png";
                            break;
                        }


                        document.querySelector("#preview").style.width = "17vh"
                        document.querySelector("#preview").style.height = "17vh"
                        document.querySelector("#preview").style.margin = "5.8vh"


                        db.collection("pic")
                          .add({
                            src: file.name,
                            type: "picture",
                            userna: doc.data().Username
                          })
                          .then(function (docRef) {
                            console.log("Document written with ID: ", docRef.id);

                          })
                          .catch(function (error) {
                            console.error("Error adding document: ", error);
                          });

                        downscreen();
                      })
                  }
                  else {

                  }
                })
              }
            })
        })
    }
  })
}




document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems);
});



function settingreset() {
  var user = firebase.auth().currentUser;

  var emailAddress = user.email;

  auth
    .sendPasswordResetEmail(emailAddress)
    .then(function () {
      document.querySelector("#setconfirm").style.backgroundColor = "rgb(5, 150, 5)"
      sleep(4000).then(() => {
        document.querySelector("#setconfirm").style.backgroundColor = "#F10F0F"
      })

    })
    .catch(function (error) {
      // An error happened.
    });
}
//----------------color select--------------------
function colorswap(e) {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log(e.id);
      const colur = window.getComputedStyle(e).backgroundColor;
      console.log(colur);

      var docRef = db.collection("users").doc(user.email);

      docRef.update({
        main: colur,
      });

    }
  }); //------------------------------------------------------------------------
} //-------------------------------------------------------------------
//---------------------------------------------------------------------

//-------------------light and dark---------------------------------------
function ligdar(e) {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log(user);
      var docRef = db.collection("users").doc(user.email);

      const choice = e.id;

      return docRef.update({
        theme: choice,
      });
    }
  });
}

function logoswap(e) {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      var docRef = db.collection("users").doc(user.email);


      docRef.update({
        logomain: e.id,
      });

    }
  });
}

//----------------dailyreset
var d = new Date();
var n = d.getHours();
console.log(n)
if (n == "18") {
  console.log("reset!")
  //select new activities and change innertext
}
else {
  console.log("nothing")
  //do nothing
}
activs = []
//-------------------------------text in activity boxes
window.addEventListener("DOMContentLoaded", function boxxes() {
  for (assil = 1; assil < 6; assil++) {
    console.log("#box" + (assil))
    var docRef = db
      .collection("activitites")
      .doc("box" + assil)
      .onSnapshot(function (doc) {
        for (asst = 1; asst < 6; asst++) {
          var randum = Math.floor(Math.random() * 3) + 1
          doc.data()[randum]
          document.querySelector("#box" + (asst)).innerText = doc.data()[randum]
        }
      })
  }
});



function choosecl() {
  document.getElementById("chooser").click(); // Click on the checkbox
}

function prof() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      document.querySelector(".nameprof").innerText = user.displayName
      document.querySelector(".emailprof").innerText = user.email
      document.querySelector("#imagecount").innerText = "Images: " + yourpics.length
    }
  })
}