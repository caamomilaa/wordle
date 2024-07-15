// El styles lo importamos aquí para que se encargue Vite de compilar todo
import "../scss/styles.scss";

const ALL_WORDS = ["casa", "coche", "ornitorrinco", "velero"];
const NUMBER_OF_TRIES = 5;

const gameBoardElement = document.getElementById("game-board");
const modalElement = document.getElementById("modal");
const popUpElement = document.getElementById("pop-up");

const chooseSecretWord = () => {
  const randomNumber = Math.floor(Math.random() * ALL_WORDS.length);
  secretWord = ALL_WORDS[randomNumber];
  console.log(secretWord);
};

const createGameBoard = () => {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < NUMBER_OF_TRIES; i++) {
    const newRow = document.createElement("div");
  }
};

chooseSecretWord();
