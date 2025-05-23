* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #1e1e1e;
    overflow: hidden;
}

#gameArea {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #333;
    overflow: hidden;
}

#ninja {
    position: absolute;
    bottom: 0;
    left: 50px;
    width: 50px;
    height: 100px;
    background-color: #f00; /* Ninja color */
}

#obstacle {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 30px;
    height: 50px;
    background-color: #00f; /* Obstacle color */
    animation: moveObstacle 2s infinite linear;
}

#score {
    position: absolute;
    top: 10px;
    left: 10px;
    color: white;
    font-size: 20px;
}

@keyframes moveObstacle {
    0% {
        right: -30px;
    }
    100% {
        right: 100vw;
    }
}

@keyframes jump {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-150px);
    }
    100% {
        transform: translateY(0);
    }
}
