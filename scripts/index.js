const editLink = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_edit');
const popupEditClose = popupEdit.querySelector('.popup__close');
const nameInput = popupEdit.querySelector('.popup__input_type_name');
const popupEditForm = popupEdit.querySelector('.popup__form');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const jobInput = popupEdit.querySelector('.popup__input_type_job');

const addLink = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_add');
const popupAddClose = popupAdd.querySelector('.popup__close');

const profileLocation = document.querySelector('.element__name');
const profileLink = document.querySelector('.element__img');

const cardTemplate = document.getElementById('card-template');
const cardGrid = document.querySelector('.elements');
const editCardPopup = document.querySelector('.popup_add');
const editCardButton = document.querySelector('.popup__form_add-card');

// Создание функции для карточек

const popupImg = document.querySelector('.popup_img');      //Попап нажатия на карточку
const elementImg = document.querySelector('.element__img');
const popupImgClose = popupImg.querySelector('.popup__close');
const nameImg = popupImg.querySelector('.popup__title-img');
const srcImg = popupImg.querySelector('.popup__element-img');


const createCardElement = (cardDate) => {
    const cardElement = cardTemplate.content.querySelector('.element').cloneNode(true);
    const cardName = cardElement.querySelector('.element__name');
    const cardImage = cardElement.querySelector('.element__img');

    cardName.innerHTML = cardDate.name;
    cardImage.src = cardDate.link;
    cardImage.alt = cardDate.name;

    const deleteButton = cardElement.querySelector('.element__delete');
    const likeButton = cardElement.querySelector('.element__button');

    // Функция удаления
    const handlerDelete = () => {
        cardElement.remove();
    };

    // Функция лайка  
    const handlerlike = () => {
        likeButton.classList.toggle('element__button_active')
    };

    deleteButton.addEventListener('click', handlerDelete);
    likeButton.addEventListener('click', handlerlike);


    const openImgPopup = () => {
        openPopup(popupImg);
        srcImg.src = cardImage.src;
        srcImg.alt = cardImage.alt;
        nameImg.textContent = srcImg.alt;
    };
    //Обработчик открытия попапа просмотра изображения
    cardImage.addEventListener('click', openImgPopup);
    return cardElement;
};

const renderCardElement = (cardElement) => {         //Создание карточек
    cardGrid.prepend(cardElement);
}

initialCards.forEach((card) => {
    renderCardElement(createCardElement(card));
})


//Функция открытия попапа
function closePopup(item) {
    item.classList.remove('popup_open')
}

//Функция закрытия попапа
function openPopup(item) {
    item.classList.add('popup_open')
}

addLink.addEventListener('click', () => {
    openPopup(popupAdd);

});

popupAddClose.addEventListener('click', () => {
    closePopup(popupAdd);
});

const editCardForm = document.querySelector('.popup__form_add-Card');

const handleCardSubmit = (event) => {             //Функция добавления карточки
    event.preventDefault();

    const locationInput = popupAdd.querySelector('.popup__input_type_location');
    const linkInput = popupAdd.querySelector('.popup__input_type_link');

    const name = locationInput.value;
    const link = linkInput.value;

    const cardAdd = {
        name,
        link,
    };
    renderCardElement(createCardElement(cardAdd));
    closePopup(popupAdd);
}

editCardButton.addEventListener('submit', handleCardSubmit);       //Кнопка добавления

editLink.addEventListener('click', () => {
    popupEdit.classList.add('popup_open');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
});

popupEditClose.addEventListener('click', () => {
    closePopup(popupEdit);
});

popupEditForm.addEventListener('submit', (event) => {           //Редактирование профиля
    event.preventDefault();
    const name = nameInput.value;
    const job = jobInput.value;
    profileName.textContent = name;
    profileJob.textContent = job;
    closePopup(popupEdit);
});

popupImgClose.addEventListener('click', () => {
    closePopup(popupImg);
});

