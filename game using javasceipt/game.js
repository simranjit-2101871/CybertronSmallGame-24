document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        opti = document.querySelector('.optimus');
        opti.classList.add('animateOpti');
        setTimeout(() => {
            opti.classList.remove('animateOpti')
        }, 700);
    }
    if (e.keyCode == 39) {
        opti = document.querySelector('.optimus');
        optiX = parseInt(window.getComputedStyle(opti, null).getPropertyValue('left'));
        opti.style.left = optiX + 112 + "px";
    }
    if (e.keyCode == 37) {
        opti = document.querySelector('.optimus');
        optiX = parseInt(window.getComputedStyle(opti, null).getPropertyValue('left'));
        opti.style.left = (optiX - 112) + "px";
    }
}




let score=0;
let cross=true;

setInterval(() => {
    opti = document.querySelector('.optimus');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(opti, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(opti, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    console.log(offsetX, offsetY)

    if (offsetX < 73 && offsetY < 52) {
        gameOver.innerHTML = "Game Over - Reload to Play Again"
        obstacle.classList.remove('obstacleAni')

    }

    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);

        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
            console.log('New animation duration: ', newDur)
        }, 500);
    }

}, 10);
function updateScore(score) {
    document.getElementById('scoreCount').innerHTML = "Your score: " + score;
}


