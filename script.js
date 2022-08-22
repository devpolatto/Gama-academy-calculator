const display = document.getElementById('operation-result');
//seleciona todas as teclas de numeros
const numbers = document.querySelectorAll('[id*=key-number]');
const btnClear = document.getElementById('key-c')
const btnClearOne = document.getElementById('key-ce')
const btnOperator = document.querySelectorAll('[id*=key-operator]')
const btnEqual = document.getElementById('key-equal')
const btnDecimal = document.querySelectorAll('[id*=key-signal-decimal]')

//atualiza o display com o valor capturado do click
const updateDisplay = (text) => {
     display.textContent += text;
}
//captura o valor do click
const getClick = (event) => updateDisplay(event.target.textContent);

//adiciona um evento de click para toda tecla de numero e operador
numbers.forEach (number => number.addEventListener('click', getClick));
btnOperator.forEach(operator => operator.addEventListener('click', getClick))
btnDecimal.forEach(decimal => decimal.addEventListener('click', getClick))

// limpa o display
btnClear.addEventListener('click', () => display.innerHTML = "")

// elimina um numero
btnClearOne.addEventListener('click', () => {
     let valueResult = display.innerHTML
     display.innerHTML = valueResult.substring(0, valueResult.length -1)
})

function cacl() {
     if(display.innerHTML) {
          display.innerHTML = eval(display.innerHTML)
     }
}

btnEqual.addEventListener('click', cacl)