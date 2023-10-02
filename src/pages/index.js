import '/src/pages/index.css';
import { config } from '../scripts/utils/constants.js';
import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import Section from '../scripts/components/Section.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import UserInfo from '../scripts/components/UserInfo.js';
import Api from '../scripts/components/Api.js';
import PopupWithDeleteForm from '../scripts/components/PopupWithDeleteForm.js';

const editLink = document.querySelector('.profile__edit-button');
const addLink = document.querySelector('.profile__add-button');
const editCardButton = document.querySelector('.popup__form_edit');
const addCardButton = document.querySelector('.popup__form_add-card');
const addAvatarButton = document.querySelector('.popup__avatar-form');
const PopupProfileSelector = '.popup_edit';
const popupImgSelector = '.popup_img';
const popupAddSelector = '.popup_add'
const cardGrid = '.elements';
const configInfo = {
    profileNameSelector: '.profile__name',
    profileJobSelector: '.profile__job',
    profileAvatar: '.profile__avatar',
}

//9 proect
const popupDeleteSelector = '.popup_delete-confirm';
const popupEditAvatarSelector = '.popup_edit-avatar';
const editAvatarButton = document.querySelector('.profile__avatar-button');

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-76',
    headers: {
        authorization: '0763629c-3490-40e1-9aae-c13c00296c11',
        'Content-Type': 'application/json'
    }
});





// Попап увеличенного изображения
const popupImage = new PopupWithImage(popupImgSelector);
popupImage.setEventListeners();

// Получение имени и профессии у профиля
const userInfo = new UserInfo(configInfo);

// Создание новой карточки
function createNewCard(item) {
    const cardTemplate = new Card(item, '#card-template', popupImage.open, (cardId) => {
        popupDelete.open();
        popupDelete.setSubmit(() => {

            api.deleteCard(cardId)
                .then(() => {
                    cardTemplate.removeCardElement();
                    popupDelete.close()
                })
                .catch((error => console.error(`Не получилось удалить карточку ${error}`)))
                .finally(() => {
                    popupDelete.setupDefaultText()
                });
        })
    }, (likeElement, cardId) => {
        if (likeElement.classList.contains('element__button_active')) {
            api.deleteLike(cardId)
                .then(res => {
                    cardTemplate.toggleLike(res.likes)
                })
                .catch((error => console.log(`Ошибка при добавлении лайка ${error}`)))
        } else {
            api.addLike(cardId)
                .then(res => {
                    cardTemplate.toggleLike(res.likes)
                })
                .catch((error => console.log(`Ошибка при добавлении лайка ${error}`)))
        }
    });
    return cardTemplate.createCard();

}

// Отрисовка карточек
const section = new Section((element) => {
    section.addItem(createNewCard(element))
}, cardGrid)


// Попап удаления карточки

const popupDelete = new PopupWithDeleteForm(popupDeleteSelector);

// Установка обработки кликов на попап удаления карточки
popupDelete.setEventListeners();

// Попап аватара
const popupAvatar = new PopupWithForm(popupEditAvatarSelector, (data) => {
    api.setNewAvatar(data)
        .then(res => {
            userInfo.setUserInfo({ username: res.name, job: res.about, avatar: res.avatar })
        })
        .catch((error => console.log(`Ошибка при редактирование аватара ${error}`)))
        .finally(() => popupAvatar.setupDefaultText())
});

popupAvatar.setEventListeners();

// Попап Профиля
const popupProfile = new PopupWithForm(PopupProfileSelector, (data) => {
    api.setUserInfo(data)
        .then(res => {
            console.log(res)
            userInfo.setUserInfo({ username: res.name, job: res.about, avatar: res.avatar })
        })
        .catch((error => console.log(`Ошибка при редактирование профиля ${error}`)))
        .finally(() => popupProfile.setupDefaultText())

    // popupProfile.close();
});
popupProfile.setEventListeners();

// Попап добавления карточки
const popupAddCard = new PopupWithForm(popupAddSelector, (item) => {
    Promise.all([api.getInfo(), api.addCard(item)])
        .then(([dataUser, dataCard]) => {
            dataCard.myid = dataUser._id;
            section.addItem(createNewCard(dataCard))
            popupAddCard.close();
        })
        .catch((error) => console.log(`Ошибка при создании новой карточки ${error}`))
        .finally(() => popupAddCard.setupDefaultText())
});

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

editAvatarButton.addEventListener('click', () => {
    // popupAddFormValidator.resetValidation();
    popupAvatar.setInputsValues(userInfo.getUserInfo())
    popupAvatar.open();
});

// Валидация
const popupEditFormValidator = new FormValidator(config, editCardButton);
const popupAddFormValidator = new FormValidator(config, addCardButton);
const popupAvatarFormValidator = new FormValidator(config, addAvatarButton);
popupAvatarFormValidator.enableValidation();
popupEditFormValidator.enableValidation();
popupAddFormValidator.enableValidation();

Promise.all([api.getInfo(), api.getCards()])
    .then(([dataUser, dataCard]) => {
        console.log(dataCard);
        // console.log(dataUser);
        dataCard.forEach(element => element.myid = dataUser._id);
        userInfo.setUserInfo({ username: dataUser.name, job: dataUser.about, avatar: dataUser.avatar });
        section.renderItems(dataCard);
    })
    .catch((error) => console.log(`Ошибка при создании начальных данных страницы ${error}`))