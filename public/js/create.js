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
            window.location.replace("login.html")
        });
    });
})();
