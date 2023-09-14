import Popup from './Popup.js';

export default class PopupWithForm extends Popup {

    constructor(popupSelector, submitHandler) {
        super(popupSelector);
        this._submitHandler = submitHandler;
        this._formElement = this._popupElement.querySelector('.popup__form');
        this._inputList = this._formElement.querySelectorAll('.popup__input')
    }
    getInputsValues() {
        this._values = {};
        this._inputList.forEach(input => {
            this._values[input.name] = input.value
        })
        return this._values
    }

    setInputsValues(dataUser) {
        this._inputList.forEach(input => {
            input.value = dataUser[input.name];
        })
    }

    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener('submit', this._submitHandler);
    }

    close() {
        super.close();
        this._formElement.reset();
    }
}