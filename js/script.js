$(document).ready(function () {
    $('#register').click(function (e) {
        e.preventDefault()
        Swal.fire({
            input:'text',
            inputPlaceholder: 'Nombre',
            input:'text'
        })
    })

})