'use strict';
//блок объявления переменных 

//блок описания функций
const gameGuessNumber = () => {

    //блок объявления переменных 
    const findNumber = Math.floor(Math.random() * 100) + 1;

    //блок описания функций
    const sendMessage = (message) => {
        alert(message);
    };

    const isNumber = function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    };

    const getUserAnswer = () => {
        return prompt('Введите число от 1 до 100:');
    };

    const gamePlay = () => {
        let userAnswer = getUserAnswer();
        if (userAnswer === null) {
            sendMessage('Игра окончена!');
            return;
        }
        if (isNumber(userAnswer)) {
            const userNumber = +userAnswer;
            if (userNumber > findNumber) {
                sendMessage('Загаданное число меньше!');
                gamePlay();
            } else if (userNumber < findNumber) {
                sendMessage('Загаданное число больше!');
                gamePlay();
            } else {
                sendMessage('Поздравляю, Вы угадали!!!');
            }
        } else {
            sendMessage('Введи число!');
            gamePlay();
        }

    };

    //блок функционала
    sendMessage('Игра начинается!');
    gamePlay();
};


//блок функционала
gameGuessNumber();

// блок вывода в консоль
