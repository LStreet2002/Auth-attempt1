(function () {// login
    const loginHolder = document.querySelector("#login-holder");
    loginHolder.addEventListener("submit", (e) => {
        e.preventDefault();

        // fields
        const email = loginHolder["login-email"].value;
        const password = loginHolder["login-password"].value;

        // login
        auth.signInWithEmailAndPassword(email, password).then((cred) => {
            window.location.replace("main.html");
        });
    })
})();

function rese() {
    var logi = document.querySelector("#login-holder")
    logi.style.display = "none";
    var hol = document.querySelector(".hol")
    hol.style.display = "grid"
}
function main() {
    var logi = document.querySelector("#login-holder")
    logi.style.display = "grid";
    var hol = document.querySelector(".hol")
    hol.style.display = "none"

}

