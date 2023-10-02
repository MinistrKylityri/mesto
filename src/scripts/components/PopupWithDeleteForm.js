import Popup from "./Popup";
export default class PopupWithDeleteForm extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._form = this._popupElement.querySelector('.popup__form');
        this._submitButton = this._form.querySelector('.popup__submit');
        this._defaultButtonText = this._submitButton.textContent;
    }

    setSubmit(submitForm) {
        this._submitForm = submitForm
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._submitButton.textContent = 'Удаление...';
            this._submitForm();

        });
    }

    setupDefaultText() {
        this._submitButton.textContent = this._defaultButtonText;
    }

}