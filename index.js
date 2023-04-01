const EditLink = document.querySelector(".profile__add-button-link");
const PopupEdit = document.querySelector(".popup__Edit");
const PopupEditClose = PopupEdit.querySelector(".popup__close");
const nameInput = PopupEdit.querySelector(".popup__input_type_name");
const PopupSubmit = PopupEdit.querySelector(".popup__submit");
const PopupEditForm = PopupEdit.querySelector(".popup_form");
const ProfileName = document.querySelector(".profile__name");
const ProfileJob = document.querySelector(".profile__job");
const JobInput = PopupEdit.querySelector(".popup__input_type_job");

EditLink.addEventListener("click", () => {
    console.log("click");
    PopupEdit.classList.add("popup_open");
    nameInput.value = ProfileName.innerHTML;
    JobInput.value = ProfileJob.innerHTML;

});

PopupEditClose.addEventListener("click", () => {
    PopupEdit.classList.remove("popup_open");
});

PopupEditForm.addEventListener("submit", (event) => {
event.preventDefault();
const name = nameInput.value;
const job = JobInput.value;
 ProfileName.innerHTML = name;
 ProfileJob.innerHTML = job;

PopupEdit.classList.remove("popup_open");
}
)
