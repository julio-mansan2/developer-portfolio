const inputSubmit = document.querySelector('.submit')
const inputEmail = document.querySelector('#input-email')
const inputName = document.querySelector('#input-name')
const error = document.querySelectorAll('.error')

inputSubmit.addEventListener('click', function () {
    event.preventDefault()
    if (inputEmail.validity.valid === false || inputEmail.value == '') {
        error[1].innerHTML = 'Sorry, check your email'
    } else {
        error[1].innerHTML = ''
    }

    if (inputName.value == '') {
        error[0].innerHTML = 'Cant be blank'
    } else {
        error[0].innerHTML = ''
    }
})