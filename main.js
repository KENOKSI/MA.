const body = document.querySelector('.body')
const acrtionBth = document.querySelector('.action__bth')
const modal = document.querySelector('.modal')
const aaa = document.querySelector('.modal__hidden')

acrtionBth.addEventListener('click', function(){
    body.classList.add('body__active')
    aaa.classList.add('modal__hidden')
})