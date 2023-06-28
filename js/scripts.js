/*!
* Start Bootstrap - New Age v6.0.7 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


document.getElementById('sendTelegramButton').addEventListener('click', function() {
    // Obtenha os valores dos campos do formulário
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;
    
    // Crie a mensagem que será enviada para o Telegram
    var telegramMessage = 'Nome: ' + name + '\n'
        + 'Email: ' + email + '\n'
        + 'Telefone: ' + phone + '\n'
        + 'Mensagem: ' + message;
    
    // Realize a requisição para o Bot do Telegram usando a URL da API
    var apiUrl = 'https://api.telegram.org/bot5900417647:AAFwFskGVCH-hA7KywCZtlkKbHKjD8yPpAM/sendMessage';
    
    var xhr = new XMLHttpRequest();
    xhr.open('POST', apiUrl);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Exiba a mensagem de sucesso
                document.getElementById('submitSuccessMessage').classList.remove('d-none');
            } else {
                // Exiba a mensagem de erro
                document.getElementById('submitErrorMessage').classList.remove('d-none');
            }
        }
    };
    
    // Envie a mensagem como parâmetro 'text' na requisição
    xhr.send('chat_id=-1001922346842&text=' + encodeURIComponent(telegramMessage));
});
  


