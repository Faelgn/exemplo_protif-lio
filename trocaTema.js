const themeLink = document.getElementById('theme-link');
const btn = document.getElementById('toggle-theme');
const overlay = document.getElementById('theme-transition-overlay');

// Função para atualizar a cor do botão conforme o tema
function updateBtnTheme(theme) {
    if (theme === 'tema_novo.css') {
        btn.classList.remove('theme-animado');
        btn.classList.add('theme-escuro');
        btn.textContent = 'Tema Animado';
    } else {
        btn.classList.remove('theme-escuro');
        btn.classList.add('theme-animado');
        btn.textContent = 'Tema Escuro';
    }
}

function setTheme(theme) {
    themeLink.href = theme;
    localStorage.setItem('theme', theme);
    updateBtnTheme(theme);
}

btn.addEventListener('click', () => {
    // Animação de preenchimento
    btn.classList.add('animating');
    setTimeout(() => {
        btn.classList.remove('animating');
    }, 500);

    // Overlay de transição
    overlay.style.opacity = '1';
    setTimeout(() => {
        const current = themeLink.getAttribute('href');
        if (current === 'tema_novo.css') {
            setTheme('tema_antigo.css');
        } else {
            setTheme('tema_novo.css');
        }
        setTimeout(() => {
            overlay.style.opacity = '0';
        }, 400);
    }, 250);
});

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'tema_novo.css';
    setTheme(savedTheme);
});