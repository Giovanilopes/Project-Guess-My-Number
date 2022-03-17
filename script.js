'use strict';

// //Selecting and Manipulating Elements
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉Correct Number🎉';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);





//Para adicionar emojis, o comando é "Windows .""
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// document.querySelector('.number').textContent = secretNumber;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

//Handling Click Events and Game Logic
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);


    //Jogador não coloca número
    if (!guess) {
        // document.querySelector('.message').textContent = '🚫 No number!';
        displayMessage('🚫 No number!');


        //Jogador ganha
    } else if (guess === secretNumber) {
        displayMessage('Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }


        //Palpite errado
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? 'Too high!' : 'Too low!';
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You lost the game!');
        }
    }
});


document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'
})


//Coding Challenge 1

//Insira uma funcionalidade no jogo para que o jogador consiga jogar novamente. Aqui esta como fazer:

//1. Selecione o elemento com a classe 'again' e adicione um 'click event'
//2. volte os valores do 'score' e do numero variavel
//3. restaure a condicao inicial da mensagem, numero, score, e a janela de input
//4. restaure o fundo original (#222) e o 'number width' (15 rem)





// //Jogador coloca um número maior
// } else if (guess > secretNumber) {
//     if (score > 1) {
//         document.querySelector('.message').textContent = 'Too high!';
//         score--;
//         document.querySelector('.score').textContent = score;
//     } else {
//         document.querySelector('.message').textContent = 'You lost the game!';
//     }


//     //Jogador coloca um número menor
// } else if (guess < secretNumber) {
//     if (score > 1) {
//         document.querySelector('.message').textContent = 'Too low!';
//         score--;
//         document.querySelector('.score').textContent = score;
//     } else {
//         document.querySelector('.message').textContent = 'You lost the game!';
//         document.querySelector('.score').textContent = 0;
//     }
// }