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

    const getUserNumber = () => {
        let userAnswer = getUserAnswer();
        let userNumber;
        if (userAnswer === null) {
            sendMessage('Игра окончена!');
            rePlay();
        } else if (!isNumber(userAnswer)) {
            sendMessage('Введи число!');
            userNumber = getUserNumber();
        } else if (+userAnswer < 0 || +userAnswer > 100) {
            sendMessage('Число должно быть от 1 до 100');
            userNumber = getUserNumber();
        } else {
            userNumber = +userAnswer;
        }
        if (userNumber) {
            return (userNumber);
        }
    };

    const getMatchCheck = (number) => {
        if (number === findNumber) {
            sendMessage('Поздравляю, Вы угадали!!!');
            rePlay();
        } else if (number < findNumber) {
            sendMessage('Загаданное число больше!');
            getMatchCheck(getUserNumber());
        } else if (number > findNumber) {
            sendMessage('Загаданное число меньше!');
            getMatchCheck(getUserNumber());
        }
    };

    const gamePlay = () => {
        getMatchCheck(getUserNumber());
    };

    const rePlay = () => {
        const answer = confirm('Желаете сыграть еще раз?');
        if (answer === false) {
            sendMessage('До свидания!');
        } else {
            gameGuessNumber();
        }
    };


    //блок функционала
    sendMessage('Игра начинается!');
    gamePlay();
};


//блок функционала
gameGuessNumber();

// блок вывода в консоль
