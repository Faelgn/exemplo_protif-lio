// Animação de digitação no título principal
document.addEventListener('DOMContentLoaded', function () {
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
});

// Modal de contato reutilizável
function criarModal(mensagem) {
    const modalBg = document.createElement('div');
    modalBg.style.position = 'fixed';
    modalBg.style.top = 0;
    modalBg.style.left = 0;
    modalBg.style.width = '100vw';
    modalBg.style.height = '100vh';
    modalBg.style.background = 'rgba(42,0,60,0.85)';
    modalBg.style.display = 'flex';
    modalBg.style.alignItems = 'center';
    modalBg.style.justifyContent = 'center';
    modalBg.style.zIndex = 9999;

    const modal = document.createElement('div');
    modal.style.background = '#2d0036';
    modal.style.border = '2px solid #a259f7';
    modal.style.borderRadius = '16px';
    modal.style.padding = '18px 24px';
    modal.style.boxShadow = '0 0 32px #a259f7, 0 0 64px #fff17655';
    modal.style.color = '#fff';
    modal.style.textAlign = 'center';
    modal.style.fontSize = '1em';
    modal.style.maxWidth = '320px'
    modal.innerHTML = `
        ${mensagem}
        <br>
        <button id="fechar-modal" style="
            margin-top:24px;
            padding:10px 28px;
            background:#a259f7;
            color:#fff176;
            border:none;
            border-radius:8px;
            font-size:1em;
            cursor:pointer;
            box-shadow:0 0 12px #fff176;
            transition:background 0.2s;
        ">Fechar</button>
    `;

    modalBg.appendChild(modal);
    document.body.appendChild(modalBg);

    document.getElementById('fechar-modal').onclick = function () {
        document.body.removeChild(modalBg);
    };
}

// Dados das linguagens para skills
const skillsInfo = {
    javascript: {
        icon: `<svg width="48" height="48" viewBox="0 0 48 48"><rect width="48" height="48" rx="8" fill="#F7DF1E"/><text x="24" y="32" text-anchor="middle" font-size="22" font-family="Arial" fill="#222">JS</text></svg>`,
        resumo: "Uso JavaScript para criar interfaces dinâmicas, consumir APIs, manipular DOM e desenvolver aplicações fullstack com Node.js."
    },
    python: {
        icon: `<svg width="48" height="48" viewBox="0 0 48 48"><rect width="48" height="48" rx="8" fill="#306998"/><text x="24" y="32" text-anchor="middle" font-size="22" font-family="Arial" fill="#fff">Py</text></svg>`,
        resumo: "Utilizo Python para automação, análise de dados, scripts e desenvolvimento de APIs com frameworks como Flask e Django."
    },
    html5: {
        icon: `<svg width="48" height="48" viewBox="0 0 48 48"><rect width="48" height="48" rx="8" fill="#E44D26"/><text x="24" y="32" text-anchor="middle" font-size="22" font-family="Arial" fill="#fff">HTML</text></svg>`,
        resumo: "HTML5 é a base das minhas páginas web, estruturando o conteúdo e integrando com CSS e JavaScript para criar sites modernos."
    },
    css3: {
        icon: `<svg width="48" height="48" viewBox="0 0 48 48"><rect width="48" height="48" rx="8" fill="#2965f1"/><text x="24" y="32" text-anchor="middle" font-size="22" font-family="Arial" fill="#fff">CSS</text></svg>`,
        resumo: "CSS3 é responsável pelo visual dos meus projetos, criando layouts responsivos, animações e efeitos modernos."
    },
    react: {
        icon: `<svg width="48" height="48" viewBox="0 0 48 48"><rect width="48" height="48" rx="8" fill="#222"/><text x="24" y="32" text-anchor="middle" font-size="22" font-family="Arial" fill="#61dafb">⚛</text></svg>`,
        resumo: "Com React, desenvolvo interfaces modernas, componetizadas e reativas, facilitando a manutenção e escalabilidade dos projetos."
    },
    "node.js": {
        icon: `<svg width="48" height="48" viewBox="0 0 48 48"><rect width="48" height="48" rx="8" fill="#3c873a"/><text x="24" y="32" text-anchor="middle" font-size="22" font-family="Arial" fill="#fff">Node</text></svg>`,
        resumo: "Node.js me permite criar servidores, APIs e aplicações back-end eficientes usando JavaScript no lado do servidor."
    },
    "git & github": {
        icon: `<svg width="48" height="48" viewBox="0 0 48 48"><rect width="48" height="48" rx="8" fill="#24292e"/><text x="24" y="32" text-anchor="middle" font-size="22" font-family="Arial" fill="#fff">Git</text></svg>`,
        resumo: "Utilizo Git e GitHub para versionamento, colaboração em equipe e deploy contínuo dos meus projetos."
    }
};

// Função para mostrar modal da skill
function mostrarSkillModal(lang) {
    const key = lang.toLowerCase();
    if (skillsInfo[key]) {
        criarModal(`
            <div style="margin-bottom:18px;">${skillsInfo[key].icon}</div>
            <strong style="font-size:1.2em;">${lang.toUpperCase()}</strong>
            <p style="margin-top:12px;">${skillsInfo[key].resumo}</p>
        `);
    }
}

// Evento para skills
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.skill').forEach(function(skill) {
        // Pega o texto da skill ou o data-lang
        let lang = skill.getAttribute('data-lang') || skill.textContent.trim();
        skill.addEventListener('click', function() {
            mostrarSkillModal(lang);
        });
        skill.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                mostrarSkillModal(lang);
            }
        });
        skill.setAttribute('tabindex', '0'); // Acessibilidade
        skill.style.cursor = 'pointer';
    });
});

// Botão flutuante para contato
document.addEventListener('DOMContentLoaded', function () {
    const btn = document.createElement('button');
    btn.textContent = 'Contato';
    btn.style.position = 'fixed';
    btn.style.bottom = '32px';
    btn.style.right = '32px';
    btn.style.background = 'linear-gradient(90deg, #a259f7 60%, #fff176 100%)';
    btn.style.color = '#2d0036';
    btn.style.border = 'none';
    btn.style.borderRadius = '50px';
    btn.style.padding = '16px 32px';
    btn.style.fontSize = '1.1em';
    btn.style.fontWeight = 'bold';
    btn.style.boxShadow = '0 0 24px #a259f7, 0 0 32px #fff17655';
    btn.style.cursor = 'pointer';
    btn.style.zIndex = 999;
    btn.style.transition = 'transform 0.2s, box-shadow 0.2s';

    btn.onmouseenter = function () {
        btn.style.transform = 'scale(1.08)';
        btn.style.boxShadow = '0 0 48px #fff176, 0 0 32px #a259f7';
    };
    btn.onmouseleave = function () {
        btn.style.transform = '';
        btn.style.boxShadow = '0 0 24px #a259f7, 0 0 32px #fff17655';
    };

    btn.onclick = function () {
        criarModal('Entre em contato pelo e-mail: <b>rafalgnpedev@gmail.com</b><br>Ou envie uma mensagem pelo LinkedIn!');
    };

    document.body.appendChild(btn);
});