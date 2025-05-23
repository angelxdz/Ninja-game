let ninja = document.getElementById('ninja');
let obstacle = document.getElementById('obstacle');
let scoreDisplay = document.getElementById('score');
let score = 0;
let isJumping = false;

document.addEventListener('keydown', (e) => {
    if (e.key === 'w' && !isJumping) {
        jump();
    }
});

function jump() {
    isJumping = true;
    ninja.style.animation = 'jump 0.5s ease';
    setTimeout(() => {
        ninja.style.animation = '';
        isJumping = false;
    }, 500); // Duración del salto (500ms)
}

function checkCollision() {
    let ninjaRect = ninja.getBoundingClientRect();
    let obstacleRect = obstacle.getBoundingClientRect();

    if (
        ninjaRect.right > obstacleRect.left &&
        ninjaRect.left < obstacleRect.right &&
        ninjaRect.bottom > obstacleRect.top &&
        ninjaRect.top < obstacleRect.bottom
    ) {
        alert('¡Game Over!');
        score = 0;
        obstacle.style.animation = 'none';
        setTimeout(() => {
            obstacle.style.animation = 'moveObstacle 2s infinite linear';
        }, 100);
    }
}

function updateScore() {
    score++;
    scoreDisplay.textContent = 'Puntos: ' + score;
}

setInterval(() => {
    checkCollision();
    updateScore();
}, 100);
