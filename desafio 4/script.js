let userTries = document.getElementById("triesSpan");
let messageSpan = document.getElementById("messageSpan");
let number = generateRandomNumber();
let tries = 3;

function verifyInput(event) {
    event.preventDefault();
    
    let userInput = parseInt(document.getElementById("num").value);

    if (userInput === number && tries > 0) {
        alert("Parabéns, você acertou!");
        resetGame();
    } else if (userInput < number && tries > 0) {
        tries--;
        messageSpan.textContent = "O número inserido é menor que o correto.";
        userTries.textContent = "Tentativas restantes: " + tries;
    } else if (userInput > number && tries > 0) {
        tries--;
        messageSpan.textContent = "O número inserido é maior que o correto.";
        userTries.textContent = "Tentativas restantes: " + tries;
    }
    
    if (tries === 0) {
        alert("Você perdeu! O número correto era " + number);
        resetGame();
    }
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 21);
}

function resetGame() {
    tries = 3;
    number = generateRandomNumber();
    messageSpan.textContent = "";
    userTries.textContent = "Tentativas restantes: " + tries;
}
