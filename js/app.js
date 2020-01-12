
let cash = 1000;
let count = 0;

const totalSumm = document.querySelector('.total');
const message = document.querySelector('.message');
const playerInput = document.querySelector('.inp_1');
const playerRate = document.querySelector('.inp_2');
const btn = document.querySelector('button');
const reset = document.querySelector('button[type=reset]');

reset.onclick = () => {
    btn.disabled = false;
    message.innerHTML = 'Бросайте кости';
    totalSumm.innerHTML = 'Ваш баланс = 1000$';
    cash = 1000;
    count = 0;
}

const getDiceRoll = () => 1 + Math.round(Math.random() * 5);

function getDiceRes() {
    const diceRollRes = [...new Array(2)].map((el) => getDiceRoll());
    const diceRollSumm = diceRollRes.reduce((a, b) => a + b);
    diceRollSumm !== playerInputValue
        ? (cash -= playerRateValue, message.innerHTML = `Результат броска ${diceRollRes[0]} и ${diceRollRes[1]}.
         Вы загадали ${playerInputValue}. Ваш проиграш ${playerRateValue}$`)
        : diceRollRes[0] == diceRollRes[1]
            ? (cash += playerRateValue * 3, message.innerHTML = `Результат броска ${diceRollRes[0]} и ${diceRollRes[1]}. 
            Вы загадали ${playerInputValue}. Ваш выиграш ${playerRateValue * 3}$`)
            : (cash += playerRateValue * 2, message.innerHTML = `Результат броска ${diceRollRes[0]} и ${diceRollRes[1]}. 
            Вы загадали ${playerInputValue}. Ваш выиграш ${playerRateValue * 2}$`);
}

btn.onclick = () => {
    reset.disabled = true;
    playerInputValue = +playerInput.value;
    playerRateValue = +playerRate.value;

    if (playerInputValue < 2 || playerInputValue > 12) {
        message.innerHTML = `Введите число от 2 до 12`;
    } else if (playerRateValue < 1 || playerRateValue > cash) {
        message.innerHTML = `Cтавка не может быть меньше 1$ или больше ${cash}$`;
    } else {
        count++;
        getDiceRes();
        switch (true) {
            case cash >= 10000:
                message.innerHTML = `Победа! Вы выиграли ${cash}$ Количество бросков =  ${count}`;
                btn.disabled = true;
                reset.disabled = false;
                break;
            case cash == 0:
                message.innerHTML = `Вы проиграли всё...  Количество бросков = ${count}`;
                btn.disabled = true;
                reset.disabled = false;
                break;
        }
    }
    totalSumm.innerHTML = `Ваш баланс = ${cash}$`;
}

