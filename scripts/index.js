import { initialCards, config } from './constants.js';
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

const editLink = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_edit');
const nameInput = popupEdit.querySelector('.popup__input_type_name');
const popupEditForm = popupEdit.querySelector('.popup__form');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const jobInput = popupEdit.querySelector('.popup__input_type_job');
const addLink = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_add');
const cardGrid = document.querySelector('.elements');
const editCardButton = document.querySelector('.popup__form_edit');
const locationInput = popupAdd.querySelector('.popup__input_type_location');
const linkInput = popupAdd.querySelector('.popup__input_type_link');
const addCardButton = document.querySelector('.popup__form_add-card');
const popupImg = document.querySelector('.popup_img');      //Попап нажатия на карточку
const nameImg = popupImg.querySelector('.popup__title-img');
const srcImg = popupImg.querySelector('.popup__element-img');
const closeButtons = document.querySelectorAll('.popup__close');

function createNewCard(item) {
    const cardTemplate = new Card(item, 'card-template', cardElement);
    const cardNew = cardTemplate.createCard();
    return cardNew;
}

//Создание карточек
const renderCardElement = (cardElement) => {
    cardGrid.prepend(cardElement);
};

initialCards.forEach((item) => {
    renderCardElement(createNewCard(item));
});

// Функция добавления карточки
const handleCardSubmit = (event) => {
    event.preventDefault();
    const name = locationInput.value;
    const link = linkInput.value;
    const cardAdd = {
        name,
        link,
    };
    renderCardElement(createNewCard(cardAdd));
    closePopup(popupAdd);
    event.target.reset();
    event.submitter.classList.add('popup__submit_disabled');
    event.submitter.disabled = true;
};

//Функция открытия попапа
function openPopup(item) {
    item.classList.add('popup_open');
    document.addEventListener('keydown', keyCloseEsc);
    item.addEventListener('mousedown', CloseOverlay);
}

function cardElement(name, link) {
    srcImg.src = link;
    srcImg.alt = name;
    nameImg.textContent = name;
    openPopup(popupImg);

}

//Функция закрытия попапа
function closePopup(item) {
    item.classList.remove('popup_open');
    document.removeEventListener('keydown', keyCloseEsc);
    item.removeEventListener('mousedown', CloseOverlay);
};

//Закрытие на esc
function keyCloseEsc(evt) {
    if (evt.key === 'Escape') {
        const EscapeClose = document.querySelector('.popup_open');
        closePopup(EscapeClose);
    }
};
//Закрытие кликом
function CloseOverlay(evt) {
    const CloseOver = document.querySelector('.popup_open');
    if (evt.target === CloseOver) {
        closePopup(CloseOver);
    }
};

//Функция закрытия для кнопки крестика
closeButtons.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup));
});

//Открытие и заполнение карточки редактирования профиля
function openEditPopup() {
    openPopup(popupEdit);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
};

//вешаем событие на кнопку редактирования профиля
editLink.addEventListener('click', () => {
    popupEditFormValidator.hideError();
    openEditPopup();
});

//Обработчик события подтверждения редактирования профиля
popupEditForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = nameInput.value;
    const job = jobInput.value;
    profileName.textContent = name;
    profileJob.textContent = job;
    closePopup(popupEdit);
});

//Кнопка добавления
addCardButton.addEventListener('submit', handleCardSubmit);

addLink.addEventListener('click', () => {
    openPopup(popupAdd);
});

const popupEditFormValidator = new FormValidator(config, editCardButton);
const popupAddFormValidator = new FormValidator(config, addCardButton);
popupEditFormValidator.enableValidation();
popupAddFormValidator.enableValidation();
