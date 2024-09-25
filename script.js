const firstName = document.getElementsByClassName("box-content__form__fn")[0];
const imageFN = document.getElementsByClassName("box-content__form__image__erro__fn")[0];
const errorFN = document.getElementsByClassName("box-content__form__error__fn")[0];
const lastName = document.getElementsByClassName("box-content__form__ln")[0];
const imageLN = document.getElementsByClassName("box-content__form__image__erro__ln")[0];
const errorLN = document.getElementsByClassName("box-content__form__error__ln")[0];
const email = document.getElementsByClassName("box-content__form__em")[0];
const imageEM = document.getElementsByClassName("box-content__form__image__erro__em")[0];
const errorEM = document.getElementsByClassName("box-content__form__error__em")[0];
const password = document.getElementsByClassName("box-content__form__pw")[0];
const imagePW = document.getElementsByClassName("box-content__form__image__erro__pw")[0];
const errorPW = document.getElementsByClassName("box-content__form__error__pw")[0];
const button = document.getElementsByClassName("box-content__form__button")[0];
const inputs= document.querySelectorAll("input.box-content__form__input");
console.log(inputs)

button.addEventListener("click", function(e) {

    e.preventDefault();

    for (i = 0; i < inputs.length; i++) {
        inputs[i].placeholder = "";
    }

    if(firstName.checkValidity()) {
        imageFN.style.display = "none";
        errorFN.style.display = "none";
        firstName.style.margin = "0 0 14px 0";
        firstName.style.border = "2px solid hsla(246, 25%, 77%, 0.205)";
    }else {
        imageFN.style.visibility = "visible";
        errorFN.style.visibility = "visible";
        errorFN.style.display = "block";
        errorFN.innerHTML = "First name cannot be empty";
        firstName.style.margin = "0";
        firstName.style.border = "1px solid red";
    }
    if(lastName.checkValidity()) {
        imageLN.style.display = "none";
        errorLN.style.display = "none";
        lastName.style.margin = "0 0 14px 0";
        lastName.style.border = "2px solid hsla(246, 25%, 77%, 0.205)";
    }else {
        imageLN.style.visibility = "visible";
        errorLN.style.visibility = "visible";
        errorLN.style.display = "block";
        errorLN.innerHTML = "Last name cannot be empty";
        lastName.style.margin = "0";
        lastName.style.border = "1px solid red";
    }
    if(email.checkValidity()) {
        imageEM.style.display = "none";
        errorEM.style.display = "none";
        email.style.margin = "0 0 14px 0";
        email.style.border = "2px solid hsla(246, 25%, 77%, 0.205)";
        email.style.color = "hsla(249, 10%, 26%, 0.644)";
    }else {
        imageEM.style.visibility = "visible";
        errorEM.style.visibility = "visible";
        errorEM.style.display = "block";
        errorEM.innerHTML = "Looks like this is not on email";
        email.style.margin = "0";
        email.style.border = "1px solid red";
        email.style.color ="red";
    }
    if(password.checkValidity()) {
        imagePW.style.display = "none";
        errorPW.style.display = "none";
        password.style.margin = "0 0 14px 0"
        password.style.border = "2px solid hsla(246, 25%, 77%, 0.205)"
    }else {
        imagePW.style.visibility = "visible";
        errorPW.style.visibility = "visible";
        errorPW.style.display = "block";
        errorPW.innerHTML = "Password name cannot be empty";
        password.style.margin = "0";
        password.style.border = "1px solid red";
    }
    if (firstName.checkValidity() && lastName.checkValidity() && email.checkValidity() && password.checkValidity()) {
        location.reload();
    }
})