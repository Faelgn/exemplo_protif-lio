// Animação de digitação no título principal
document.addEventListener('DOMContentLoaded', function () {
    // Seu código original de animação do título (mantido igual)
    const titulo = document.querySelector('header h1');
    if (titulo) {
        const textoOriginal = titulo.textContent;
        titulo.textContent = '';
        let i = 0;
        function digitar() {
            if (i < textoOriginal.length) {
                titulo.textContent += textoOriginal.charAt(i);
                i++;
                setTimeout(digitar, 80);
            }
        }
        digitar();
    }

    // ===== [NOVO CÓDIGO PARA ESCONDER/MOSTRAR AO ROLAR] ===== //
    const socialFixed = document.querySelector('.social-fixed');
    const themeBtn = document.getElementById('toggle-theme');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        const scrollDown = currentScroll > lastScroll && currentScroll > 100;
        
        if (scrollDown) {
            // Rolando para baixo - esconde
            socialFixed.classList.add('hidden');
            themeBtn.classList.add('hidden');
        } else {
            // Rolando para cima - mostra
            socialFixed.classList.remove('hidden');
            themeBtn.classList.remove('hidden');
        }
        
        lastScroll = currentScroll;
    });
    // ===== [FIM DO NOVO CÓDIGO] ===== //

    // Seu código original de modal e skills (mantido igual abaixo)
    function criarModal(mensagem) {
        // ... (mantenha todo o conteúdo existente desta função)
    }

    const skillsInfo = {
        // ... (mantenha todo o objeto skillsInfo)
    };

    function mostrarSkillModal(lang) {
        // ... (mantenha esta função)
    }

    // Evento para skills (mantido igual)
    document.querySelectorAll('.skill').forEach(function(skill) {
        // ... (mantenha este código)
    });

    // Botão flutuante de contato (agora com classe e lógica de exibição)
    const btn = document.createElement('button');
    btn.textContent = '✉️ rafalgnpedev@gmail.com'; // Altere para seu e-mail real
    btn.className = 'contato-btn oculto'; // já começa oculto
    btn.addEventListener('click', () => {
        window.location.href = 'mailto:rafalgnpedev@gmail.com'; // Altere para seu e-mail real
    });
    document.body.appendChild(btn);

    // Mostrar o botão só no fim da página
    function toggleContatoBtnOnScroll() {
        const scrollY = window.scrollY || window.pageYOffset;
        const windowHeight = window.innerHeight;
        const bodyHeight = document.body.offsetHeight;

        if (scrollY + windowHeight >= bodyHeight - 10) {
            btn.classList.remove('oculto');
        } else {
            btn.classList.add('oculto');
        }
    }

    window.addEventListener('scroll', toggleContatoBtnOnScroll);
    window.addEventListener('resize', toggleContatoBtnOnScroll);
    toggleContatoBtnOnScroll(); // Executa ao carregar
});