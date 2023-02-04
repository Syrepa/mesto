const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const popupClose = document.querySelector(".popup__close");
const popupOpened = document.querySelector(".popup");
const profileEditBtn = document.querySelector(".profile__edit-btn");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const popupInputName = document.querySelector(".popup__input_text_name");
const popupInputJob = document.querySelector(".popup__input_text_job");
const formElement = document.querySelector(".popup__form");
// Выборка для карт
const cardContainer = document.querySelector(".elements");
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".element");

// Создаем карты и выводим на страницу
function createCard(name, link) {
  const cloneCardTemlate = cardTemplate.cloneNode(true);
  const cardText = cloneCardTemlate.querySelector(".element__title");
  const cardImage = cloneCardTemlate.querySelector(".element__pic");
  cardText.append(name);
  cardImage.setAttribute("src", link);
  return cloneCardTemlate;
}
// Перебираем и добавляем массив с картами
initialCards.forEach((card) => {
  const cardElements = createCard(card.name, card.link);
  cardContainer.append(cardElements);
});
console.log();

function openPopup() {
  popupOpened.classList.add("popup_opened");
  popupInputName.value = profileTitle.textContent;
  popupInputJob.value = profileSubtitle.textContent;
}

function closePopup() {
  popupOpened.classList.remove("popup_opened");
}

function handleFormSubmit(evt) {
  evt.preventDefault();

  profileTitle.textContent = popupInputName.value;
  profileSubtitle.textContent = popupInputJob.value;

  closePopup();
}

popupClose.addEventListener("click", closePopup);
profileEditBtn.addEventListener("click", openPopup);
formElement.addEventListener("submit", handleFormSubmit);
