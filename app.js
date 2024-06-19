const userNumber = document.getElementById('numberUser');
const submitButton = document.getElementById('submit');
const errorInput = document.getElementById('error');
const correct = document.getElementById('correct');
const textCorrect = document.getElementById('textCorrect');
const message = document.getElementById('message');

let intent = 1;
let numberSecret = Math.floor(Math.random() * 11);

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    let isTrue = false;

    if (userNumber.value.length <= 0) {
        isTrue = false;
        errorInput.textContent = 'El campo está vacío';
    } else {
        isTrue = true;
        errorInput.textContent = '';
    }

    if (isTrue) {
        const userGuess = parseInt(userNumber.value);
        if (userGuess === numberSecret) {
            correct.textContent = 'Felicidades Adivinaste el numero';
            textCorrect.textContent = 'Correcto!';
            message.textContent = `Numero de intentos ${intent}`
        } else {
            if (userGuess < numberSecret) {
                message.textContent = 'El número secreto es mayor';
            } else {
                message.textContent = 'El número secreto es menor';
            }
        }
        intent++;
    }

    if (intent === 15) {
        alert(`Has alcanzado maximo de intentos el numero era ${numberSecret}`);
    }
});
