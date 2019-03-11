let form = document.querySelector("form");
let fullname = document.getElementById("fullname");
let email = document.getElementById("email");
let message = document.getElementById("message");

let button = document.getElementById("submit-button");

function validateForm() {
    console.clear();

    let collectFormData = {};
    let errors = [];
    let regex = /[\w-]+@([\w-]+\.)+[\w-]+/;

    if (fullname.value !== "") {
        collectFormData.fullname = fullname.value;
    } else {
        errors.push("Please enter your full name.");
    }

    if (email.value !== "") {

        if (regex.test(email.value)) {
            collectFormData.email = email.value;
        } else {
            errors.push("Your email address is invalid!");
        }
    } else {
        errors.push("Please enter your email!");
    }

    if (message.value !== "") {
        collectFormData.message = message.value;
    } else {
        errors.push("Please leave a message!");
    }

    if (errors.length === 0) {
        console.log(collectFormData);
        form.reset();
    } else {
        console.log(errors);
    }

}

button.addEventListener("click", validateForm);