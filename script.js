let popupСlose = document.querySelector(".popup__close");
let popupOpened = document.querySelector(".popup");
let profileEditBtn = document.querySelector(".profile__edit-btn");
let profileTitle = document.querySelector(".profile__title");
let profileSubtitle = document.querySelector(".profile__subtitle");
let popupInputName = document.querySelector(".popup__name");
let popupInputJob = document.querySelector(".popup__job");

function openPopup() {
  popupOpened.classList.add("popup_opened");
}

profileEditBtn.addEventListener("click", openPopup);

function closePopup() {
  popupOpened.classList.remove("popup_opened");
}

popupСlose.addEventListener("click", closePopup);

popupInputName.value = profileTitle.textContent;
popupInputJob.value = profileSubtitle.textContent;

let formElement = document.querySelector(".popup__form");

function handleFormSubmit(evt) {
  evt.preventDefault();

  profileTitle.textContent = popupInputName.value;
  profileSubtitle.textContent = popupInputJob.value;

  closePopup();
}
formElement.addEventListener("submit", handleFormSubmit);
