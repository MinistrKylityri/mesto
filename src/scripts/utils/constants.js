
const config = {
    formSelector: '.form__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup__input_invalid',
    errorClass: 'error-message_active',
};

const configInfo = {
    profileNameSelector: '.profile__name',
    profileJobSelector: '.profile__job',
    profileAvatar: '.profile__avatar',
}

const editLink = document.querySelector('.profile__edit-button');
const addLink = document.querySelector('.profile__add-button');
const editCardButton = document.querySelector('.popup__form_edit');
const addCardButton = document.querySelector('.popup__form_add-card');
const addAvatarButton = document.querySelector('.popup__avatar-form');

const PopupProfileSelector = '.popup_edit';
const popupImgSelector = '.popup_img';
const popupAddSelector = '.popup_add'
const cardGrid = '.elements';

const popupDeleteSelector = '.popup_delete-confirm';
const popupEditAvatarSelector = '.popup_edit-avatar';
const editAvatarButton = document.querySelector('.profile__avatar-button');

export { config, configInfo, editLink, addLink, editCardButton, addCardButton, addAvatarButton, PopupProfileSelector, popupImgSelector, popupAddSelector, cardGrid, popupDeleteSelector, popupEditAvatarSelector, editAvatarButton }