const editLink = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup');
const popupEditClose = popupEdit.querySelector('.popup__close');
const nameInput = popupEdit.querySelector('.popup__input_type_name');
const popupEditForm = popupEdit.querySelector('.popup__form');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const jobInput = popupEdit.querySelector('.popup__input_type_job');

editLink.addEventListener('click', () => {
    popupEdit.classList.add('popup_open');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent
});

popupEditClose.addEventListener('click', () => {
    popupEdit.classList.remove('popup_open');
});

popupEditForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = nameInput.value;
    const job = jobInput.value;
    profileName.textContent = name;
    profileJob.textContent = job;
    popupEdit.classList.remove('popup_open');
}
)
