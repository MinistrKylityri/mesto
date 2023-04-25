
function setInputValidState(config, input, errorElement) {
    input.classList.remove(config.inputErrorClass); //Удаление замечания у формы
    errorElement.textContent = '';
}

function setInputInvalidState(config, input, errorElement) {
    input.classList.add(config.inputErrorClass);   //Добавление замечания к форме
    errorElement.textContent = input.validationMessage;
}


//Проверка валидности ввода
function checkInputValidity(config, input, form) {
    const errorElement = form.querySelector(`#error-${input.id}`);

    if (input.checkValidity()) {

        setInputValidState(config, input, errorElement);

    }
    else {

        setInputInvalidState(config, input, errorElement);

    }
}

//активность кнопки отправки
function toggleButtonValidity(config, form) {
    const submitButton = form.querySelector(config.submitButtonSelector);

    if (form.checkValidity()) {
        enableButton(config, submitButton);
    } else {
        disableButton(config, submitButton);

    }

}
//неактивная кнопка
function disableButton(config, button) {
    button.classList.add(config.inactiveButtonClass)
    button.setAttribute('disabled', true);
}
//активная кнопка
function enableButton(config, button) {
    button.classList.remove(config.inactiveButtonClass);
    button.removeAttribute('disabled')
}

function enableValidation(config) {

    const forms = Array.from(document.querySelectorAll(config.formSelector));
    forms.forEach((form) => {

        toggleButtonValidity(config, form);
        const inputs = form.querySelectorAll(config.inputSelector);
        const inputsArray = Array.from(inputs);

        inputsArray.forEach(function (input) {
            input.addEventListener('input', () => {
                checkInputValidity(config, input, form);
                toggleButtonValidity(config, form);
            })
        })

    });
}

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup__input_invalid',
    errorClass: 'error-message_active',
});

