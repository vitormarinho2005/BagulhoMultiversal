//====== Mostrar senha oculta ======//

const mostraSenhaOculta = (inputPass, inputIcon) => {
    const input = document.getElementById(inputPass);
    iconEye = document.getElementById(inputIcon)

    iconEye.addEventListener('click', () => {
        // Alterar senha para texto
        if (input.type === 'password') {
            // Mudar para texto
            input.type = 'text'

            // Adiconar icone
            iconEye.classList.add('fa-eye');

            // Remover icone
            iconEye.classList.remove('fa-eye-slash');
        } else {
            // Mudar para senha
            input.type = 'password'

            // Remover icone
            iconEye.classList.remove('fa-eye');
            // Adiconar icone
            iconEye.classList.add('fa-eye-slash');
        }
    })
}

mostraSenhaOculta('input-pass','input-icon')