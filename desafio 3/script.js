var ball = document.getElementById('ball');
var colours = ["red", "deeppink", "blue"];

ball.addEventListener("click", updateBall);
ball.addEventListener("keydown", updateBall);
ball.addEventListener("mouseover", updateBall);



function updateBall() {
    let ballBox = document.querySelector(".ball-box");
    let maxWidth = ballBox.offsetWidth - ball.offsetWidth;
    let maxHeight = ballBox.offsetHeight - ball.offsetHeight;

    let i = Math.floor(Math.random() * maxWidth);
    let j = Math.floor(Math.random() * maxHeight);
    let newColour = colours[Math.floor(Math.random() * colours.length)];

    ball.style.left = i + 'px';
    ball.style.top = j + 'px';
    ball.style.backgroundColor = newColour;
}
