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

    // Botão flutuante de contato (mantido igual)
    const btn = document.createElement('button');
    btn.textContent = 'Contato';
    btn.style.position = 'fixed';
    // ... (mantenha todo o resto do código do botão de contato)
    document.body.appendChild(btn);
});