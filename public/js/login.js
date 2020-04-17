
(function () {
    const loginHolder = document.querySelector("#login-holder");
    loginHolder.addEventListener("submit", (e) => {
        e.preventDefault(); //enter button


        const email = loginHolder["login-email"].value;
        const password = loginHolder["login-password"].value;

        // firebase login
        auth.signInWithEmailAndPassword(email, password).then((cred) => {
            window.location.replace("main.html");
        }).catch(error => document.querySelector("#login-password").style.border = "solid 1px red"
            , document.querySelector("#login-email").style.border = "solid 1px red");

    })
})();

function rese() {
    var logi = document.querySelector("#login-holder")
    logi.style.display = "none";
    var hol = document.querySelector(".hol")
    hol.style.display = "grid" // switch to change password
    var res = document.querySelector("#signup-holder")
    res.style.display = "none"
}
function main() {
    var logi = document.querySelector("#login-holder")
    logi.style.display = "grid";
    var hol = document.querySelector(".hol")
    hol.style.display = "none" // switch to main
    var res = document.querySelector("#signup-holder")
    res.style.display = "none"
    document.querySelector("#send").style.backgroundColor = "#F10F0F"
    document.querySelector("#send").innerText = "SEND";
    document.getElementById("reset-password").value = ""

}
function account() {
    var logi = document.querySelector("#login-holder")
    logi.style.display = "none";
    var hol = document.querySelector(".hol")
    hol.style.display = "none" // switch to main
    var res = document.querySelector("#signup-holder")
    res.style.display = "grid"
}
(function () {// reset email
    const reset = document.querySelector(".hol");
    reset.addEventListener("submit", (e) => {
        e.preventDefault();//enter button

        const email = reset["reset-password"].value;

        //send 
        auth.sendPasswordResetEmail(email).then(function () {
            document.querySelector("#send").style.backgroundColor = "#77FF00"
            document.querySelector("#send").innerText = "SENT";
        }).catch(error => alert(error.message));
    })
})();

(function () {// signup
    const signForm = document.querySelector('#signup-holder');
    signForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // get user info
        const userName = signForm['signup-username'].value;
        const email = signForm['signup-email'].value;
        const password = signForm['signup-password'].value;

        // sign up the user
        auth.createUserWithEmailAndPassword(email, password).then(function (result) {
            return result.user.updateProfile({
                displayName: userName
            })
        }).then(cred => {
            main()
        });
    });
})();

