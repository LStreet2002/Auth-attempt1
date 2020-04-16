
(function () {
    const loginHolder = document.querySelector("#login-holder");
    loginHolder.addEventListener("submit", (e) => {
        e.preventDefault(); //enter button


        const email = loginHolder["login-email"].value;
        const password = loginHolder["login-password"].value;

        // firebase login
        auth.signInWithEmailAndPassword(email, password).then((cred) => {
            window.location.replace("main.html");
        });
    })
})();

function rese() {
    var logi = document.querySelector("#login-holder")
    logi.style.display = "none";
    var hol = document.querySelector(".hol")
    hol.style.display = "grid" // switch to change password
}
function main() {
    var logi = document.querySelector("#login-holder")
    logi.style.display = "grid";
    var hol = document.querySelector(".hol")
    hol.style.display = "none" // switch to main

}
(function () {// reset email
    const reset = document.querySelector(".hol");
    reset.addEventListener("submit", (e) => {
        e.preventDefault();//enter button

        const email = reset["reset-password"].value;

        //send 
        auth.sendPasswordResetEmail(email).then(function () {
            alert("E-mail sent");
        }).catch(error => alert(error.message));
    })
})();


