const NUMBER_MIN = 1;
const NUMBER_MAX = 100;
const buttonActive = document.querySelector(".button-active");

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function guessNumber() {
  const NUMBER_RANDOM = randomInteger(NUMBER_MIN, NUMBER_MAX);
  alert("Привет, я загадал число от 1 до 100. Попробуй его угадать. Я буду подсказывать тебе и гворить много или мало. Когда ты угадаешь число я поздравлю тебя! Количество попыток не ограничено. Вводить можно только положительные целые числа.");
  let guess = Number(prompt('Введите число!'));
  let counter = 1;

  while (guess != NUMBER_RANDOM && guess !== 0) {
    if (isNaN(guess)) {
      return alert('Вводить можно только числа! Начните игру заново');
    }
    if (guess < NUMBER_RANDOM) {
      guess = prompt('Мало!');
      counter++;
    }
    if (guess > NUMBER_RANDOM) {
      guess = prompt('Много!');
      counter++;
    }
  }
  if (guess == NUMBER_RANDOM) {
    let isNewGame = confirm(`Правильно! Вы угадали число - это ${NUMBER_RANDOM}! Количество попыток - ${counter}. Хотите начать заново?`);
    if (isNewGame) {
      guessNumber();
    }
  }

};

buttonActive.addEventListener('click', guessNumber);
