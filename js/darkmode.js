// Botão de alternância do modo escuro

const toggledark = document.getElementById('toggledark');
const body = document.body;

// Recuperar preferência do modo escuro do armazenamento local
const darkMode = localStorage.getItem('darkMode');
if (darkMode === 'true') {
    body.classList.add('dark');
    toggledark.checked = true;
}

// Adicionar listener ao checkbox
toggledark.addEventListener('change', () => {
    if (toggledark.checked) {
        body.classList.add('dark');
        // Armazenar preferência de modo escuro em armazenamento local
        localStorage.setItem('darkMode', 'true');
    } else {
        body.classList.remove('dark');
        // Remoção da preferência do modo escuro do armazenamento local
        localStorage.setItem('darkMode', 'false');
    }
});