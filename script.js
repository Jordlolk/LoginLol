const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.button_login')

const handleFocus = ({target}) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active');
}

const handleFocusOut = ({target}) => {
    if(target.value === ""){
        const span = target.previousElementSibling;
        span.classList.remove('span-active')
    }
}

inputs.forEach((input) => input.addEventListener('focus' , handleFocus))
inputs.forEach((input) => input.addEventListener('focusout' , handleFocusOut))
/* Icons */

const icons = document.querySelectorAll('.icons')
icons[0].setAttribute('style' , 'background-color: grey;')
icons[1].setAttribute('style' , 'background-color: rgba(128, 128, 128, 0.28)')
icons[2].setAttribute('style' , 'background-color: blue;')

/*Button-login*/
const handleFocusChange = () => {
    const [userName, password] = inputs ;
    if(userName.value && password.value.length >= 8){
        button.removeAttribute('disabled')
    } else {
        button.setAttribute('disable','')
    }
} 

inputs.forEach((input) => input.addEventListener('input' , handleFocusChange))
