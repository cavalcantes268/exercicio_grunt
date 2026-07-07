document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('button-generator');
    const colorBox = document.getElementById('color-box');
    const colorCode = document.getElementById('color-code');

    button.addEventListener('click', function() {
        // Gera uma cor hexadecimal aleatória
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
        
        // Aplica a cor ao elemento e ao texto
        colorBox.style.backgroundColor = randomColor;
        colorCode.textContent = randomColor.toUpperCase();
    });
});