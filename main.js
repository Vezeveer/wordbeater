window.addEventListener('load', init)

const levels = {
  easy: 5,
  medium: 3,
  hard: 2
}

const currentLevel = levels.easy

//globals
let time = currentLevel;
let score = 0;
let isPlaying;

//dom elements
const wordInput = document.querySelector('.word-input');
const currentWord = document.querySelector('.word');
const scoreDisplay = document.querySelector('.score');
const timeDisplay = document.querySelector('.time');
const messageDisplay = document.querySelector('.message');
const seconds = document.querySelector('.time-left');

const words = [
  'Clue',
  'Mace',
  'Clamp',
  'Bison',
  'Killbee',
  'Stuck',
  'Justice',
  'Believer',
  'Shoot'
]

//initialize
function init() {
  seconds.innerHTML = currentLevel
  showWord(words)
  wordInput.addEventListener('input', startMatch)
  setInterval(countdown, 1000)
  setInterval(checkStatus, 250)
}

function startMatch() {
  if (wordsMatch()) {
    isPlaying = true;
    score++;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = ''
  }
  score === -1 ? scoreDisplay.innerHTML = 0 :
    scoreDisplay.innerHTML = score;

}

function wordsMatch() {
  if (wordInput.value === currentWord.innerHTML) {
    messageDisplay.innerHTML = 'Correct!!!'
    return true;
  } else {
    messageDisplay.innerHTML = ''
    return false;
  }
}

function showWord(words) {
  const randomIndex = Math.floor(Math.random() * words.length)
  currentWord.innerHTML = words[randomIndex]
}

function countdown() {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }
  timeDisplay.innerHTML = time;
}

function checkStatus() {
  if (!isPlaying && time === 0) {
    messageDisplay.innerHTML = 'Game Over!!!'
    score = -1;
  }
}