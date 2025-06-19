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

// Modal de contato
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
    modal.style.padding = '32px 40px';
    modal.style.boxShadow = '0 0 32px #a259f7, 0 0 64px #fff17655';
    modal.style.color = '#fff';
    modal.style.textAlign = 'center';
    modal.style.fontSize = '1.2em';
    modal.innerHTML = `
        <p>${mensagem}</p>
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
        criarModal('Entre em contato pelo e-mail: <b>seuemail@exemplo.com</b><br>Ou envie uma mensagem pelo LinkedIn!');
    };

    document.body.appendChild(btn);
});