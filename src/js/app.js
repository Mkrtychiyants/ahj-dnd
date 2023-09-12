// TODO: write code here

import Card from './components/card';

let currentElement;
let cards;

const onMouseOver = (e) => {
  currentElement.style.top = `${e.clientY}px`;
  currentElement.style.left = `${e.clientX}px`;
};
const showDeleteButton = (e) => {
  currentElement = e.target.closest('div.card');
  if (currentElement) {
    const currentButton = currentElement.querySelector('button.removeCard');
    currentButton.classList.add('active');
  }
};
const hideCloseButton = (e) => {
  currentElement = e.target.closest('div.card');
  if (currentElement) {
    const currentButton = currentElement.querySelector('button.removeCard');
    currentButton.classList.remove('active');
  }
};
function showDeleteButtons() {
  cards = document.querySelectorAll('div.card');
  cards.forEach((element) => {
    element.addEventListener('mouseover', showDeleteButton);
    element.addEventListener('mouseout', hideCloseButton);
  });
}
const onMouseUp = (e) => {
  const mouseUpItem = e.target.closest('div.card');
  const cardsContainer = e.target.closest('div.cards-container');
  cardsContainer.insertBefore(currentElement, mouseUpItem);
  currentElement.classList.remove('dragged');
  currentElement = undefined;

  document.documentElement.removeEventListener('mouseup', onMouseUp);
  document.documentElement.removeEventListener('mouseover', onMouseOver);
  showDeleteButtons();
};
function hideDeleteButtons() {
  cards = document.querySelectorAll('div.card');
  cards.forEach((element) => {
    element.removeEventListener('mouseover', showDeleteButton);
    element.removeEventListener('mouseout', hideCloseButton);
  });
}
const downOnCard = (e) => {
  e.preventDefault();
  hideDeleteButtons();
  if (e.target.closest('button.removeCard')) {
    currentElement = e.target.closest('div.card');
    currentElement.remove();
    showDeleteButtons();
    return;
  }
  currentElement = e.target.closest('div.card');
  const cardWidth = `${currentElement.getBoundingClientRect().right - currentElement.getBoundingClientRect().left}px`;
  if (currentElement.classList.contains('card')) {
    currentElement.style.width = cardWidth;
    currentElement.classList.add('dragged');

    document.documentElement.addEventListener('mouseup', onMouseUp);
    document.documentElement.addEventListener('mouseover', onMouseOver);
  }

  document.documentElement.removeEventListener('mouseover', showDeleteButton);
};

function refreshCardsListener() {
  cards = document.querySelectorAll('div.card');
  cards.forEach((element) => {
    element.addEventListener('mousedown', downOnCard);
  });
}
function addCardListener() {
  const addCardButton = document.querySelectorAll('button.addCard');
  addCardButton.forEach((addButtonElement) => {
    addButtonElement.addEventListener('click', (e) => {
      e.target.closest('button.addCard').classList.toggle('disactivated');
      e.target.closest('div.trello-column').querySelector('form.cardForm').classList.toggle('vis');
    });
  });
}
function addFormListener() {
  const addCardForm = document.querySelectorAll('form.cardForm');
  addCardForm.forEach((formElement) => {
    formElement.addEventListener('submit', (e) => {
      e.preventDefault();

      const inputText = e.target.querySelector('textarea#cardMessage');
      let newCard;
      if (inputText.value) {
        newCard = new Card(inputText.value);
      } else {
        newCard = new Card('default card');
      }
      const container = e.target.closest('div.trello-column').querySelector('div.cards-container');
      container.appendChild(newCard);
      formElement.classList.toggle('vis');
      e.target.closest('div.trello-column').querySelector('button.addCard').classList.toggle('disactivated');
      showDeleteButtons();
      refreshCardsListener();
    });
  });
}

window.addEventListener('beforeunload', () => {
  cards = document.querySelector('div.trello-container').innerHTML;

  localStorage.setItem('pageData', JSON.stringify(cards));
});
document.addEventListener('DOMContentLoaded', () => {
  const json = localStorage.getItem('pageData');
  let pageData = {};
  try {
    pageData = JSON.parse(json);
    if (pageData) {
      document.querySelector('div.trello-container').innerHTML = pageData;
    }
  } catch (error) {
    console.log(error);
  } finally {
    refreshCardsListener();
    addCardListener();
    addFormListener();
    showDeleteButtons();
  }
});

refreshCardsListener();
addCardListener();
addFormListener();
showDeleteButtons();
