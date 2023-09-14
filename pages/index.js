import { initialCards, config } from '../scripts/constants.js';
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';



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

section.renderCardElement();

// Попап Профиля
const popupProfile = new PopupWithForm(PopupProfileSelector, (evt) => {
    evt.preventDefault();
    userInfo.setUserInfo(popupProfile.getInputsValues())
    popupProfile.close();
})
popupProfile.setEventListeners();

// Попап добавления карточки
const popupAddCard = new PopupWithForm(popupAddSelector, (evt) => {
    evt.preventDefault();
    section.addItem(createNewCard(popupAddCard.getInputsValues()));
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