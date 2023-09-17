export default class FormValidator {
    constructor(config, formElement) {
        this._config = config;
        this.form = formElement;
        this.inputs = Array.from(this.form.querySelectorAll(config.inputSelector));//инпуты в форме
        this.popupSubmitButton = this.form.querySelector(config.submitButtonSelector);//кнопка
    };

    //показываем сообщение об ошибки
    _showInputError(input) {
        const errorElement = this.form.querySelector(`#error-${input.id}`)
        input.classList.add(this._config.inputErrorClass);
        errorElement.textContent = input.validationMessage;
    };

    //убираем сообщение об ошибки
    _hideInputError(input) {
        const errorElement = this.form.querySelector(`#error-${input.id}`)
        input.classList.remove(this._config.inputErrorClass)
        errorElement.textContent = '';
    };

    //Проверяем на валидность
    _checkInputValidity(input) {
        if (input.validity.valid) {
            this._hideInputError(input);
        } else {
            this._showInputError(input);
        }
    };

    //Отключаем кнопку сабмита
    _setButtonDisable() {
        this.popupSubmitButton.setAttribute('disabled', '');
        this.popupSubmitButton.classList.add(this._config.inactiveButtonClass);
    };

    //активируем кнопку сабмита
    _setButtonEnable() {
        this.popupSubmitButton.removeAttribute('disabled');
        this.popupSubmitButton.classList.remove(this._config.inactiveButtonClass);
    };

    resetValidation() {
        this.inputs.forEach((inputElement) => {
            this._hideInputError(inputElement);
        });
        this._setButtonDisable();
    };

    //Переключение кнопки сабмита
    _toggleButtonValidity() {
        if (this.form.checkValidity()) {
            this._setButtonEnable()
        } else {
            this._setButtonDisable();
        }
    };

    //Слушатиели событий
    _setEventListeners = () => {
        this.inputs.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input);
                this._toggleButtonValidity();
            });
        });
        this.form.addEventListener('submit', (event) => {
            event.target.reset();
        })
    };

    //Подключение валидации
    enableValidation = () => {
        this._setEventListeners();
    };
};