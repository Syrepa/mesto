let popupСlose = document.querySelector(".popup__close");
let popupOpened = document.querySelector(".popup");
let profileEditBtn = document.querySelector(".profile__edit-btn");
let profileTitle = document.querySelector(".profile__title");
let profileSubtitle = document.querySelector(".profile__subtitle");
let popupInputName = document.querySelector(".popup__input_text_name");
let popupInputJob = document.querySelector(".popup__input_text_job");
let formElement = document.querySelector(".popup__form");

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

popupСlose.addEventListener("click", closePopup);
profileEditBtn.addEventListener("click", openPopup);
formElement.addEventListener("submit", handleFormSubmit);

console.log("formElement(string)");
