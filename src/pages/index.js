import '/src/pages/index.css';
import { initialCards, config } from '../scripts/utils/constants.js';
import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import Section from '../scripts/components/Section.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import UserInfo from '../scripts/components/UserInfo.js';

const editLink = document.querySelector('.profile__edit-button');
const addLink = document.querySelector('.profile__add-button');
const editCardButton = document.querySelector('.popup__form_edit');
const addCardButton = document.querySelector('.popup__form_add-card');
const PopupProfileSelector = '.popup_edit';
const popupImgSelector = '.popup_img';
const popupAddSelector = '.popup_add'
const cardGrid = '.elements';
const configInfo = {
    profileNameSelector: '.profile__name',
    profileJobSelector: '.profile__job'
}

const popupImage = new PopupWithImage(popupImgSelector);
popupImage.setEventListeners();

// Получение имени и профессии у профиля
const userInfo = new UserInfo(configInfo);

function createNewCard(item) {
    const cardTemplate = new Card(item, '#card-template', popupImage.open);
    return cardTemplate.createCard();
}

// Отрисовка карточек
const section = new Section({
    items: initialCards,
    renderer: createNewCard
}, cardGrid);
section.renderItems();

// Попап Профиля
const popupProfile = new PopupWithForm(PopupProfileSelector, (item) => {
    userInfo.setUserInfo(item)
    popupProfile.close();
})
popupProfile.setEventListeners();

// Попап добавления карточки
const popupAddCard = new PopupWithForm(popupAddSelector, (item) => {
    section.addItem(createNewCard(item));
    popupAddCard.close();
})
popupAddCard.setEventListeners();

//вешаем событие на кнопку редактирования профиля
editLink.addEventListener('click', () => {
    popupEditFormValidator.resetValidation();
    popupProfile.setInputsValues(userInfo.getUserInfo())
    popupProfile.open();
});

addLink.addEventListener('click', () => {
    popupAddFormValidator.resetValidation();
    popupAddCard.open();
});

// Валидация
const popupEditFormValidator = new FormValidator(config, editCardButton);
const popupAddFormValidator = new FormValidator(config, addCardButton);
popupEditFormValidator.enableValidation();
popupAddFormValidator.enableValidation();