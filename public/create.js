var signForm = document.querySelector(".accountbox")

function createUser() {
    var username = signForm.querySelector(".usernamei").value
    var password = signForm.querySelector(".passwordi").value
    var password2 = signForm.querySelector(".password2i").value
    var email = signForm.querySelector(".emaili").value

    if (password = password2) {

    }
    else {
        console.log("wrong");
    }
    console.log(username)
    console.log(password)
    console.log(email)
}
