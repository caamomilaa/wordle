// El styles lo importamos aquí para que se encargue Vite de compilar todo
import "../scss/styles.scss";

const ALL_WORDS = ["casa", "coche", "ornitorrinco", "velero"];
const NUMBER_OF_TRIES = 5;

const gameBoardElement = document.getElementById("game-board");
const userWordFormElement = document.getElementById("user-word-form");
const modalElement = document.getElementById("modal");
const popUpElement = document.getElementById("pop-up");

let secretWord;
let currentRow = 0;

const chooseSecretWord = () => {
  const randomNumber = Math.floor(Math.random() * ALL_WORDS.length);
  secretWord = ALL_WORDS[randomNumber];
  console.log(secretWord);
};

const createGameBoard = () => {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < NUMBER_OF_TRIES; i++) {
    const newRow = document.createElement("div");
    newRow.classList.add("game-board__row");
    for (let j = 0; j < secretWord.length; j++) {
      const newLetterContainer = document.getElementById("span");
      newLetterContainer.classList.add("letter");
      newRow.append(newLetterContainer);
    }
    fragment.append(newRow);
  }
  gameBoardElement.append(fragment);
};

const printWord = (userWord) => {
  let wordToCheck = secretWord;

  for (let i = 0; i < userWord.length; i++) {
    const letter = userWord[i];
    const letterContainer = gameBoardElement.children[currentRow].children[i];
    letterContainer.textContent = letter;

    if (letter == secretWord[i]) {
      letterContainer.classList.add("letter--correct");
      wordToCheck = wordToCheck.replace(letter, "-");
    }
  }

  for (let i = 0; i < userWord.length; i++) {
    const letter = userWord[i];
    const letterContainer = gameBoardElement.children[currentRow].children[i];
    if (wordToCheck.includes(letter)) {
      letterContainer.classList.add("letter-present");
      wordToCheck = wordToCheck.replace(letter, "-");
    } else {
      if (!letterContainer.classList.contains("letter--correct"))
        letterContainer.classList.add("letter--incorrect");
    }
  }

  currentRow++;
};

userWordFormElement.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!event.target.word.value) return;
  printWord(event.target.word.value);
});

chooseSecretWord();
createGameBoard();
