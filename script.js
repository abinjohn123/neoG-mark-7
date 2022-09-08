'use strict';

const btnClick = document.getElementById('btn-translate');
const inputText = document.getElementById('input-text');
const outputText = document.getElementById('text-output');
const pigAPIURL = 'https://api.funtranslations.com/translate/pig-latin.json';

const URLGenerator = (text) => pigAPIURL + '?text=' + text;
const errorHandler = (error) => console.log('Error: ', error);

const makeFetch = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((json) => (outputText.value = json.contents.translated))
    .catch(errorHandler);
};

const clickHandler = () => {
  const input = inputText.value;
  makeFetch(URLGenerator(input));
};

btnClick.addEventListener('click', clickHandler);
