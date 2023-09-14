import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImage = this._popupElement.querySelector('.popup__element-img');
        this._imagePopupCaption = this._popupElement.querySelector('.popup__title-img');
    }

    open = (cardData) => {
        this._popupImage.src = cardData.link;
        this._popupImage.alt = cardData.title;
        this._imagePopupCaption.textContent = cardData.title;
        super.open()
    }
}