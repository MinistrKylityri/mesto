export default class Popup {

    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
        this._popupCloseButton = this._popupElement.querySelector('.popup__close')
    }

    //Закрытие на esc
    _keyCloseEsc = (evt) => {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    //Закрытие кликом
    _closePopupButton = () => {
        this.close()
    }

    _handleClickByOverlay = (evt) => {
        if (evt.target.classList.contains('popup_open') || evt.target.classList.contains("popup__close")) {
            this.close()
        }
    }



    setEventListeners() {
        this._popupCloseButton.addEventListener('click', this._closePopupButton);
        this._popupElement.addEventListener('click', this._handleClickByOverlay);
    }

    open() {
        this._popupElement.classList.add('popup_open');
        document.addEventListener('keydown', this._keyCloseEsc);

    }

    close() {
        this._popupElement.classList.remove('popup_open');
        document.removeEventListener('keydown', this._keyCloseEsc);

    }

}
