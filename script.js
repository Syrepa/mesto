let popupСlose = document.querySelector(".popup__close");
let popupOpened = document.querySelector(".popup");
let profileEditBtn = document.querySelector(".profile__edit-btn");
let profileTitle = document.querySelector(".profile__title");
let profileSubtitle = document.querySelector(".profile__subtitle");

function openPopup() {
  popupOpened.classList.add("popup_opened");
}

profileEditBtn.addEventListener("click", openPopup);

function closePopup() {
  popupOpened.classList.remove("popup_opened");
}

popupСlose.addEventListener("click", closePopup);

let profileName = profileTitle.textContent;

console.log(2 + 1);
