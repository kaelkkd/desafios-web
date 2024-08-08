document.getElementById('start-game').addEventListener("click", startGame);
let ballBox = document.querySelector('.ball-box');
let colours = ["red", "deeppink", "blue"];
let userScore = 0;
let timerInterval;
let timeLeft = 30;
let gameStarted = false;
let ballCreationInterval;
let ballCreationRate = 1200; //NAOE SQUECER DE DIMINUIR A VELOCDICADE

function createBall() {
    let ball = document.createElement('div');
    ball.className = 'ball';
    let ballColor = colours[Math.floor(Math.random() * colours.length)];
    ball.style.backgroundColor = ballColor;
    ball.style.left = Math.floor(Math.random() * (ballBox.offsetWidth - 40)) + 'px';
    ball.style.top = Math.floor(Math.random() * (ballBox.offsetHeight - 40)) + 'px'; 

    if (ballColor === "blue") {
        ball.addEventListener("click", ballClick);
    } else if (ballColor === "deeppink") {
        ball.addEventListener("mouseover", ballHover);
    }

    ballBox.appendChild(ball);
    setTimeout(() => {
        if (ball.parentNode) {
            ball.style.transition = "opacity 0.1s";
            ball.style.opacity = 0;
            setTimeout(() => ball.remove(), 500);
        }
    }, 1000);

    return ball;
}

function updateBalls() {
    if (ballCreationInterval) {
        clearInterval(ballCreationInterval);
    }

    ballCreationInterval = setInterval(() => {
        if (timeLeft > 0) {
            for (let i = 0; i < 3; i++) { //talvez colocar mais???
                createBall();
            }
        } else {
            clearInterval(ballCreationInterval);
        }
    }, ballCreationRate);
}

function ballClick(event) {
    event.target.remove();
    userScore++;
    document.getElementById('score').innerText = "Pontuação: " + userScore;
}

function ballHover(event) {
    event.target.remove();
    userScore++;
    document.getElementById('score').innerText = "Pontuação: " + userScore;
}

function ballKey(event) {
    if (event.key === "d") {
        let balls = document.querySelectorAll('.ball');
        balls.forEach(ball => {
            if (ball.style.backgroundColor === "red") {
                ball.remove();
                userScore++;
                document.getElementById('score').innerText = "Pontuação: " + userScore;
            }
        });
    }
}

function startTimer() {
    timerInterval = setInterval(function() {
        timeLeft--;
        document.getElementById('timer').innerText = "Tempo: " + timeLeft + "s";
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}

function endGame() {
    alert("Tempo esgotado! Sua pontuação é: " + userScore);
    userScore = 0;
    timeLeft = 30;
    document.getElementById('score').innerText = "Pontuação: " + userScore;
    document.getElementById('timer').innerText = "Tempo: " + timeLeft + "s";
    document.removeEventListener("keydown", ballKey);
    clearInterval(ballCreationInterval);
    let balls = document.querySelectorAll('.ball');
    balls.forEach(ball => ball.remove());
    gameStarted = false;
}

function startGame() {
    if (!gameStarted) {
        updateBalls();
        startTimer();
        document.addEventListener("keydown", ballKey);
        gameStarted = true;
    }
}
