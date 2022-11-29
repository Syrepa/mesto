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

let profileName = profileTitle.textContent;
let profileJob = profileSubtitle.textContent;

popupInputName.setAttribute("placeholder", profileName);
popupInputJob.setAttribute("placeholder", profileJob);

// Находим форму в DOM
let formElement = document.querySelector(".popup__submit-btn");
// Находим поля формы в DOM

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  // Получите значение полей jobInput и nameInput из свойства value
  let popupName = popupInputName.value;
  let popupJob = popupInputJob.value;
  // Выберите элементы, куда должны быть вставлены значения полей
  profileTitle.textContent = popupName;
  profileSubtitle.textContent = popupJob;
  // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", handleFormSubmit);
