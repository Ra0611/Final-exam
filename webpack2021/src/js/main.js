
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form')
    const submit = document.getElementById('btnSendData')
    form.addEventListener('submit', formSend)

    async function formSend(e) {
        e.preventDefault()

        let error = formValidate(form)
        if (error === 0) {

        } else {
            alert('Заполните обязательные поля')
        }
    }

    function formValidate(form) {
        let error = 0
        let formReq = document.querySelectorAll('.req')


        for (let i = 0; i < formReq.length; i++) {
            const input = formReq[i]
            formRemoveError(input)

            if (input.value === '') {
                formAddError(input)
                error++
                console.log(input)
            }
        }
        return error
    }

    function formAddError(input) {
        input.classList.add('error')
    }
    function formRemoveError(input) {
        input.classList.remove('error')
    }
})