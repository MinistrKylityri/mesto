

export default class Card {

    constructor(card, cardTemplate, showPopupImage) {
        this._title = card.title;
        this._link = card.link;
        this._cardTemplate = cardTemplate;
        this._showPopupImage = showPopupImage;
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector('.element__img');
        this._cardName = this._element.querySelector('.element__name');
        this._buttonLike = this._element.querySelector('.element__button');
        this._buttonDelete = this._element.querySelector('.element__delete');

    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardTemplate).content.querySelector('.element').cloneNode(true);
        return cardElement;
    }

    _handleDelete = () => {
        this._element.remove();

    };

    _handlelike = () => {
        this._buttonLike.classList.toggle('element__button_active')
    };

    _setEventListeners() {
        //слушатель клика для удаления карточки
        this._buttonDelete.addEventListener('click', () => { this._handleDelete() });
        //слушатель клика для смены состояния кнопки лайка
        this._buttonLike.addEventListener('click', this._handlelike);
        //слушатель клика для открытия попапа просмотра карточки
        this._cardImage.addEventListener('click', () => {
            this._showPopupImage({ title: this._title, link: this._link });
        });
    }

    createCard() {
        this._cardName.textContent = this._title;
        this._cardImage.src = this._link;
        this._cardImage.alt = this._title;
        this._setEventListeners();
        return this._element;
    }
}
