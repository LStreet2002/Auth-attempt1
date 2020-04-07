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