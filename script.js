const form = document.getElementById("form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener('sumbit', e => {
    e.preventDefault()

    validateInputs()
})

const setError = (elemnt, message) => {
    const inputControl = elemnt.parentElement;
    const errorDispaly = inputControl.querySelector('.error')

    errorDispaly.innerText = message;
    inputControl.classList.add('error')
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase())
}

const validateInputs = () => {
    const userNameValue = userName.value.trim()
    const emailValue = email.value.trim()
    const passowrdValue = password.value.trim()
    const passowrd2Value = password2.value.trim()

    if (userNameValue === '') {
        setError(userName, 'Username is required')
    } else {
        setSuccess(userName)
    }

    if (emailValue === '') {
        setError(email, 'Email is required')
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provitde a valid email address')
    } else {
        setSuccess(email)
    }
}