export default class Card {
  constructor(message) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.innerHTML = ' <button class="removeCard"><i class="fa-solid fa-xmark"></i></button>'
       + '<div class="card-text">'
       + `${message}`
       + '</div>'
       + '<div class="card-actions-container">'
       + '<div class="action-like">'
       + '<i class="fa-regular fa-thumbs-up"></i>'
       + '<div class="like-count">1</div>'
       + '</div>'
       + '<div class="action-comments">'
       + '<i class="fa-regular fa-comments"></i>'
       + '<div class="comments-count">1</div>'
       + '</div>'
       + '<div class="action-attachment">'
       + '<i class="fa-solid fa-paperclip"></i>'
       + '<div class="attachment-count">1</div>'
       + '</div>'
       + '<div class="action-more">'
       + '<i class="fa-solid fa-bars"></i>'
       + '</div>';

    return cardElement;
  }
}
