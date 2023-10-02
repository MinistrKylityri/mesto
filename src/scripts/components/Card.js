

export default class Card {
    constructor(card, cardTemplate, showPopupImage, openDelete, changeLike) {
        this._title = card.name;
        this._link = card.link;
        this._myId = card.myid;
        this._ownerId = card.owner._id;
        this._cardTemplate = cardTemplate;
        this._showPopupImage = showPopupImage;
        this._changeLike = changeLike;
        this._cardId = card._id;
        this._likes = card.likes;
        this._likesLength = card.likes.length;
        this._openDelete = openDelete;
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector('.element__img');
        this._cardName = this._element.querySelector('.element__name');
        this._buttonLike = this._element.querySelector('.element__button');
        this._buttonDelete = this._element.querySelector('.element__delete');
        this._counter = this._element.querySelector('.element__counter');
    }

    _changeVisibleForTrashButton() {
        this._myId === this._ownerId ? this._buttonDelete.style.display = 'block' : this._buttonDelete.style.display = 'none';
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardTemplate).content.querySelector('.element').cloneNode(true);
        return cardElement;
    }

    _handleDelete = () => {
        this._openDelete(this._cardId);

    };

    removeCardElement() {
        this._element.remove();
        this._element = null;
    }

    _handlelike = () => {
        this._changeLike(this._buttonLike, this._cardId)

    };

    toggleLike(likes) {
        this._buttonLike.classList.toggle('element__button_active');
        this._counter.textContent = likes.length;
    }

    _setEventListeners() {
        //слушатель клика для удаления карточки
        this._buttonDelete.addEventListener('click', this._handleDelete);
        //слушатель клика для смены состояния кнопки лайка
        this._buttonLike.addEventListener('click', this._handlelike);
        //слушатель клика для открытия попапа просмотра карточки
        this._cardImage.addEventListener('click', () => {
            this._showPopupImage({ title: this._title, link: this._link });
        });
    }

    _checkLikeStatus() {
        this._likes.forEach(item => {
            if (item._id === this._myId) {
                this._buttonLike.classList.add('element__button_active')
                return
            }
        })
        this._counter.textContent = this._likesLength;
    }

    createCard() {
        this._setEventListeners();
        this._cardName.textContent = this._title;
        this._cardImage.src = this._link;
        this._cardImage.alt = this._title;
        this._checkLikeStatus();
        this._changeVisibleForTrashButton();
        return this._element;
    }


}

