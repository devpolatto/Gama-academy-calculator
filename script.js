const display = document.getElementById('operation-result');
//seleciona todas as teclas de numeros
const numbers = document.querySelectorAll('[id*=key-number]');

//atualiza o display com o valor capturado do click
const updateDisplay = (text) => {
    display.textContent += text;
}
//captura o valor do click
const insertNumber = (event) => updateDisplay(event.target.textContent);

//adiciona um evento de click para toda tecla de numero
numbers.forEach (number => number.addEventListener('click', insertNumber));