const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    const form = document.getElementById('login_form');

    if(mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        form.classList.add('dark');
        return ;
    }
    
    mode.classList.remove('fa-sun');
    mode.classList.add('fa-moon');

    form.classList.remove('dark');
});
function validaCampos() {
    const login = document.getElementById('login').value;
    const pass = document.getElementById('pass').value;
    
    if (!login) {
        document.getElementById('errorLogin').style.display = 'block';
        document.getElementById('errorSenha').style.display = 'none';
    } else if (!pass) {
        document.getElementById('errorLogin').style.display = 'none';
        document.getElementById('errorSenha').style.display = 'block';
    } else {
        if (login === 'carlos' && pass === '123') {
            document.getElementById('errorLogin').style.display = 'none';
            document.getElementById('errorSenha').style.display = 'none';
            window.location.href = '../principal/home.html';
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Senha Inválida',
                text: 'A senha inserida é inválida. Por favor, tente novamente.',
                confirmButtonText: 'OK',
                allowOutsideClick: false
            });
        }
    }
}

