
const bootstrap = require('bootstrap')

const serviceItem = [
    document.querySelector('.service__item-1'),
    document.querySelector('.service__item-2'),
    document.querySelector('.service__item-3'),
    document.querySelector('.service__item-4'),
    document.querySelector('.service__item-5'),
    document.querySelector('.service__item-6')
]

window.onload = async function () {
    const response = await fetch("http://127.0.0.1:3005/exam")
    if (response.status === 200) {
        const result = await response.json()
        for (let i = 0; i < result.length; i++) {
            serviceItem[i].style.backgroundImage = 'url(' + result[i].image + ')'
            serviceItem[i].style.backgroundSize = result[i].size
            serviceItem[i].style.backgroundPosition = result[i].position
        }


    }

}
























































// export let resData = []
// export const fetchData = async () => {
//     const response = await fetch('http://127.0.0.1:3003/testing')
//     resData = await response.json()
//     return response

// }