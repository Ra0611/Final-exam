// const count = document.querySelector('.counter')
// const click = document.querySelector('.more-data')

// let clicks = 0;
// function onClick() {
//     clicks += 1;
//     count.innerHTML = clicks;
// };

let $ = require('jquery')

window.jQuery = $
window.$ = window.jQuery

$(function () {
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        speed: 700,
        easing: 'easy',
    })
})

$(function () {
    $('.nav__burger').click(function (event) {
        $('.nav__burger,.nav__list').toggleClass('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    'use strict'

    let validate = false

    const area = document.getElementById('area')
    const form = document.getElementById('form')

    const submit = () => {
        alert('Сообщение отправлено!')
    }

    const validFunc = (elem) => {
        if (elem.name === 'name') {
            if (elem.value.length > 1 && elem.value.length < 12) {
                elem.style.boxShadow = ''
                elem.nextElementSibling.textContent = ''
                validate = true
            } else {
                elem.style.boxShadow = 'inset 0 0 2px 2px red'
                elem.nextElementSibling.textContent = 'Текст должен содержать от 2 до 12 символов'
                validate = false
            }
        }

        if (elem.name === 'surname') {
            if (elem.value.length > 1 && elem.value.length < 12) {
                elem.style.boxShadow = ''
                elem.nextElementSibling.textContent = ''
                validate = true
            } else {
                elem.style.boxShadow = 'inset 0 0 2px 2px red'
                elem.nextElementSibling.textContent = 'Текст должен содержать от 2 до 12 символов'
                validate = false
            }
        }

        if (elem.name === 'area') {
            if (elem.value.length >= 15) {
                elem.style.boxShadow = ''
                elem.nextElementSibling.textContent = ''
                validate = true
            } else {
                elem.style.boxShadow = 'inset 0 0 2px 2px red'
                elem.nextElementSibling.textContent = 'Текст должен содержать более 20 символов'
                validate = false
            }
        }

    }

    for (let elem of form.elements) {
        if (elem.tagName !== 'BUTTON') {
            elem.addEventListener('blur', () => { validFunc(elem) })

        }
    }

    form.addEventListener('submit', (even) => {
        even.preventDefault()

        for (let elem of form.elements) {
            if (elem.tagName !== 'BUTTON') {
                if (elem.value === '') {
                    elem.nextElementSibling.textContent = 'Поле не заполнено!'
                    elem.style.boxShadow = 'inset 0 0 2px 2px red'
                    validate = false
                } else if (area.value.length < 14) {
                    area.style.boxShadow = 'inset 0 0 2px 2px red'
                    area.nextElementSibling.textContent = 'Текст должен содержать более 20 символов'
                    validate = false
                } else {
                    elem.nextElementSibling.textContent = ''
                    elem.style.boxShadow = ''
                    validate = true
                }
            }
        }
        if (validate) {
            submit()
            form.reset()
        } else {
            alert('Заполните пустые поля!')
        }

    })



})

