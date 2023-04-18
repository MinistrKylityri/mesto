const editLink = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_edit');
const nameInput = popupEdit.querySelector('.popup__input_type_name');
const popupEditForm = popupEdit.querySelector('.popup__form');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const jobInput = popupEdit.querySelector('.popup__input_type_job');

const addLink = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_add');

const profileLocation = document.querySelector('.element__name');
const profileLink = document.querySelector('.element__img');
const cardTemplate = document.getElementById('card-template');
const cardGrid = document.querySelector('.elements');
const editCardPopup = document.querySelector('.popup_add');
const editCardButton = document.querySelector('.popup__form_add-card');

const editCardForm = document.querySelector('.popup__form_add-Card');
const locationInput = popupAdd.querySelector('.popup__input_type_location');
const linkInput = popupAdd.querySelector('.popup__input_type_link');

// Создание функции для карточек

const popupImg = document.querySelector('.popup_img');      //Попап нажатия на карточку
const elementImg = document.querySelector('.element__img');

const nameImg = popupImg.querySelector('.popup__title-img');
const srcImg = popupImg.querySelector('.popup__element-img');

//Функция закрытия для кнопки крестика
const closeButtons = document.querySelectorAll('.popup__close');
closeButtons.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup));
});

const createCardElement = (cardData) => {
    const cardElement = cardTemplate.content.querySelector('.element').cloneNode(true);
    const cardName = cardElement.querySelector('.element__name');
    const cardImage = cardElement.querySelector('.element__img');

    cardName.textContent = cardData.name;
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;

    const deleteButton = cardElement.querySelector('.element__delete');
    const likeButton = cardElement.querySelector('.element__button');

    // Функция удаления
    const handleDelete = () => {
        cardElement.remove();
    };

    // Функция лайка  
    const handlelike = () => {
        likeButton.classList.toggle('element__button_active')
    };

    deleteButton.addEventListener('click', handleDelete);
    likeButton.addEventListener('click', handlelike);


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


const handleCardSubmit = (event) => {             //Функция добавления карточки
    event.preventDefault();

    const name = locationInput.value;
    const link = linkInput.value;

    const cardAdd = {
        name,
        link,
    };
    renderCardElement(createCardElement(cardAdd));
    closePopup(popupAdd);
    locationInput.value = '';
    linkInput.value = '';
}

editCardButton.addEventListener('submit', handleCardSubmit);       //Кнопка добавления

editLink.addEventListener('click', () => {
    openPopup(popupEdit);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
});

popupEditForm.addEventListener('submit', (event) => {           //Редактирование профиля
    event.preventDefault();
    const name = nameInput.value;
    const job = jobInput.value;
    profileName.textContent = name;
    profileJob.textContent = job;
    closePopup(popupEdit);
});


