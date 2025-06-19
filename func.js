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

    // Função para detectar o tema atual
    function getTemaAtual() {
        const themeLink = document.getElementById('theme-link');
        if (!themeLink) return 'tema_novo.css'; // padrão
        return themeLink.getAttribute('href');
    }

    // Objeto com informações das skills
    const skillsInfo = {
        javascript: {
            nome: "JavaScript",
            imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            descricao: "Uso JavaScript para criar interatividade em páginas web, aplicações front-end e back-end (Node.js)."
        },
        python: {
            nome: "Python",
            imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
            descricao: "Utilizo Python para automação, análise de dados, scripts e desenvolvimento de APIs."
        },
        html5: {
            nome: "HTML5",
            imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            descricao: "HTML5 é a base das minhas páginas web, estruturando todo o conteúdo."
        },
        css3: {
            nome: "CSS3",
            imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            descricao: "Com CSS3, estilizo e deixo responsivo todo o visual dos meus projetos."
        },
        react: {
            nome: "React",
            imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            descricao: "Uso React para criar interfaces dinâmicas e modernas em aplicações web."
        },
        "node.js": {
            nome: "Node.js",
            imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            descricao: "Node.js me permite criar servidores e APIs rápidas usando JavaScript no back-end."
        },
        "git & github": {
            nome: "Git & GitHub",
            imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
            descricao: "Versiono meus projetos com Git e colaboro em código aberto usando o GitHub."
        }
    };

    // Função para mostrar o modal da skill com as cores do tema atual
    function mostrarSkillModal(lang) {
        const info = skillsInfo[lang];
        if (!info) return;

        // Detecta o tema
        const tema = getTemaAtual();
        let bgModal, corTitulo, corTexto, corFechar;
        if (tema.includes('antigo')) {
            bgModal = '#f8f3ff'; // lilás claro
            corTitulo = '#a259f7';
            corTexto = '#3d246c';
            corFechar = '#a259f7';
        } else {
            bgModal = '#18122b';
            corTitulo = '#fff176';
            corTexto = '#fff';
            corFechar = '#fff176';
        }

        // Remove modal anterior se existir
        const modalAntigo = document.getElementById('modal-skill');
        if (modalAntigo) modalAntigo.remove();

        // Cria modal
        const modal = document.createElement('div');
        modal.id = 'modal-skill';
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100vw';
        modal.style.height = '100vh';
        modal.style.background = 'rgba(0,0,0,0.7)';
        modal.style.display = 'flex';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.style.zIndex = '3000';

        modal.innerHTML = `
            <div style="
                background: ${bgModal};
                border-radius: 18px;
                padding: 32px 24px 24px 24px;
                max-width: 340px;
                width: 90vw;
                box-shadow: 0 8px 32px #0003;
                text-align: center;
                position: relative;
                cursor: auto;
            ">
                <button id="fechar-modal" style="
                    position: absolute;
                    top: 10px;
                    right: 14px;
                    background: none;
                    border: none;
                    font-size: 1.5em;
                    color: ${corFechar};
                    cursor: pointer;
                " title="Fechar">&times;</button>
                <img src="${info.imagem}" alt="${info.nome}" style="width:64px;height:64px;margin-bottom:16px;">
                <h3 style="margin:0 0 10px 0; color:${corTitulo};">${info.nome}</h3>
                <p style="margin:0;font-size:1.05em;color:${corTexto};">${info.descricao}</p>
            </div>
        `;

        document.body.appendChild(modal);

        document.getElementById('fechar-modal').onclick = () => modal.remove();
        modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
    }

    // Evento para skills
    document.querySelectorAll('.skill').forEach(function(skill) {
        skill.style.cursor = 'pointer'; // Garante o cursor de clique
        skill.tabIndex = 0; // Acessibilidade: permite foco via teclado
        skill.addEventListener('click', function() {
            const lang = skill.getAttribute('data-lang');
            mostrarSkillModal(lang);
        });
        skill.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                const lang = skill.getAttribute('data-lang');
                mostrarSkillModal(lang);
            }
        });
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