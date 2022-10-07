'use strict';
//блок объявления переменных 

//блок описания функций
const gameGuessNumber = () => {

    //блок объявления переменных 
    const findNumber = Math.floor(Math.random() * 100) + 1;
    let attemps = 10;

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

    const rePlay = (message) => {
        const answer = confirm(message);
        if (answer === false) {
            sendMessage('До свидания!');
            return;
        } else {
            gameGuessNumber();
        }
    };

    const gamePlay = () => {
        attemps--;
        if (attemps < 0) {
            rePlay('Попытки закончились, хотите сыграть еще?');
        } else {
            let userAnswer = getUserAnswer();
            if (userAnswer === null) {
                sendMessage('Игра окончена!');
                return;
            }
            if (isNumber(userAnswer)) {
                const userNumber = +userAnswer;
                if (userNumber > findNumber) {
                    sendMessage(`Загаданное число меньше, осталось попыток: ${attemps}`);

                    gamePlay();
                } else if (userNumber < findNumber) {
                    sendMessage(`Загаданное число больше, осталось попыток: ${attemps}`);
                    gamePlay();
                } else {
                    rePlay('Поздравляю, Вы угадали!!!Хотели бы сыграть еще?');
                }
            } else {
                sendMessage('Введи число!');
                gamePlay();
            }
        }
    };

    //блок функционала
    sendMessage('Игра начинается!');
    gamePlay();
};


//блок функционала
gameGuessNumber();

// блок вывода в консоль