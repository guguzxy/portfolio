let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}


// --- EFEITO MATRIX ---
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Define o tamanho do canvas como a tela inteira
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Letras que vão cair (Kataganas + alfabeto + números)
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%';
const fontSize = 16;
const columns = canvas.width / fontSize; // Número de colunas

// Array para guardar a posição Y de cada coluna
const drops = [];
for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

// Função que desenha a chuva
function draw() {
    // Pinta o fundo de preto com 5% de opacidade a cada frame
    // Isso cria o efeito de "rastro" das letras sumindo
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Cor e fonte das letras
    ctx.fillStyle = '#00ff73ce'; // Verde Matrix (#00FF00)
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        // Escolhe uma letra aleatória
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        
        // Desenha a letra na posição (x, y)
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Manda a gota voltar pro topo aleatoriamente depois que sai da tela
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        // Move a gota para baixo
        drops[i]++;
    }
}

// Roda a animação a cada 33 milissegundos
setInterval(draw, 33);

// Ajusta o tamanho se a pessoa redimensionar a janela
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});