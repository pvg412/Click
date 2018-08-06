'use strict';

            /*СЧЕТЧИК КОЛ-ВА НАЖАТИЙ НА КНОПКУ*/
let counter = 0;
let btn = document.querySelector('button');
btn.addEventListener('click', foo, false);
function foo() {
            /*СЕКУНДОМЕР НА 5 СЕК. И ОТРАБОТКА GAME OVER*/
    let number = 5;
    let seconds = number;
    let timer = setInterval(function () {
    let sec = document.getElementById('display').innerHTML = seconds + ' sec left';
        if (seconds !== 0) {
            seconds = seconds - 1;
        }
        else {
            clearInterval(timer);
            let gameOver = document.createElement('div');
            gameOver.innerHTML = 'Game Over';
            let element = gameover.appendChild(gameOver);
        }
        }, 1000);
}
function buttonClickCounter() {
    counter++;
    document.getElementById('counter').innerHTML = counter;
}