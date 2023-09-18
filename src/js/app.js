// TODO: write code here

import Card from './components/card';

let currentElement;
let cards;
let cardGrabbed;
let emptyElement;

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
const hideCloseBtn = (e) => {
  currentElement = e.target.closest('div.card');
  const btn = currentElement.querySelector('button.removeCard');
  btn.classList.remove('active');
};
function showDeleteButtons() {
  cards = document.querySelectorAll('div.card');
  cards.forEach((element) => {
    element.addEventListener('mouseover', showDeleteButton);
    element.addEventListener('mouseout', hideCloseButton);
  });
}
const onMouseUp = (e) => {
  const mouseUpItem = e.target;
  const cardsContainer = e.target.closest('div.cards-container');
  cardsContainer.insertBefore(currentElement, mouseUpItem);
  currentElement.classList.remove('dragged');
  currentElement.style.width = 'inherit';
  currentElement = undefined;
  cardGrabbed = false;
  document.documentElement.removeEventListener('mouseup', onMouseUp);
  document.documentElement.removeEventListener('mousemove', onMouseOver);
  showDeleteButtons();
};
function removeDelBtnListeners() {
  cards = document.querySelectorAll('div.card');
  cards.forEach((element) => {
    element.removeEventListener('mouseover', showDeleteButton);
    element.removeEventListener('mouseout', hideCloseButton);
  });
}
function showEmptySpace(e) {
  if (emptyElement) {
    emptyElement.remove();
  }
  if (cardGrabbed) {
    const mouseUpItem = e.target.closest('div.card');
    emptyElement = document.createElement('div');
    emptyElement.innerHTML = '<div></div>';
    const cardsContainer = e.target.closest('div.cards-container');
    const cardHeight = `${mouseUpItem.getBoundingClientRect().height}px`;
    emptyElement.style.height = cardHeight;
    if (cardsContainer) {
      cardsContainer.insertBefore(emptyElement, mouseUpItem);
    }
  }
}
function insertEmptySpaceListeners() {
  cards = document.querySelectorAll('div.card');
  cards.forEach((element) => {
    element.addEventListener('mouseenter', showEmptySpace);
  });
}

const downOnCard = (e) => {
  e.preventDefault();
  cardGrabbed = true;
  hideCloseBtn(e);
  removeDelBtnListeners();

  if (e.target.closest('button.removeCard')) {
    currentElement = e.target.closest('div.card');
    currentElement.remove();
    showDeleteButtons();
    return;
  }
  currentElement = e.target.closest('div.card');
  const cardWidth = `${currentElement.getBoundingClientRect().width}px`;
  if (currentElement.classList.contains('card')) {
    currentElement.classList.add('dragged');
    currentElement.style.width = cardWidth;
    document.documentElement.addEventListener('mouseup', onMouseUp);
    document.documentElement.addEventListener('mousemove', onMouseOver);
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
    insertEmptySpaceListeners();
  }
});

refreshCardsListener();
addCardListener();
addFormListener();
showDeleteButtons();
insertEmptySpaceListeners();
