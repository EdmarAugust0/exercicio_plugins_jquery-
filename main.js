$(document).ready(function() {
    $('#tell').mask('(00) 00000-0000', {
        placeholder: '(__) _____-____'
    })

    $('#CPF').mask('000.000.000-00', {
        placeholder: '___.___.___-__'
    })

    $('#cep').mask('00000-000', {
        placeholder: '_____-__'
    })
})