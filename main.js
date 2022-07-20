let clickButton = document.querySelector('.click')
let repeatButton = document.querySelector('.repeat')
let noButton = document.querySelector('.no')
let hereButton = document.querySelector('.here')

const wrongButton = () => {
    alert('You chose \n\n POORLY')
}

const reallyWrongButton = () => {
    alert('Sorry, this was definitely the wrong button \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
}

clickButton.addEventListener('click', wrongButton)
repeatButton.addEventListener('click', wrongButton)
noButton.addEventListener('click', wrongButton)
hereButton.addEventListener('hover', reallyWrongButton)