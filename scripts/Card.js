

export default class Card {

    constructor(card, cardTemplate, cardElement) {
        this._name = card.name;
        this._link = card.link;
        this._cardTemplate = cardTemplate;
        this._cardElement = cardElement;
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector('.element__img');
        this._cardName = this._element.querySelector('.element__name');
        this._buttonLike = this._element.querySelector('.element__button');
        this._buttonDelete = this._element.querySelector('.element__delete');

    }

    _getTemplate() {
        return document.getElementById(this._cardTemplate).content.querySelector('.element').cloneNode(true);

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
        this._cardImage.addEventListener('click', () => { this._cardElement(this._name, this._link) });
    };

    createCard() {
        this._cardName.textContent = this._name;
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._setEventListeners();
        return this._element;
    }

};


// class TodoListItem {
//     _template = document.querySelector('#card-template').content;
//     _data;
//     _card;
//     constructor(data) {
//         this._data = data;
//     }

//     _createCard() {
//         this._card = this._template.cloneNode(true).children[0];
//         this._card.querySelector('.popup__input').textContent = this._data.text;
//         this._setEventListener();
//     }

//     generateCard() {
//         if (!this._card) {
//             this._createCard();

//         }

//         return this._card;
//     }

//     _onDelete = () => {
//         this._card.remove();
//     }

//     _setEventListener() {
//         this._card.querySelector('.element__delete').addEventListener('click', this._onDelete);
//     }
// }


// class TodoForm {
//     _onAddItem
//     constructor(formSelector, onAddItem) {
//         document.querySelector(formSelector).addEventListener('submit', this._submitHandler)
//         this._onAddItem = onAddItem;
//     }
//     _submitHandler = (event) => {
//         event.preventDefault();
//         const data = Object.fromEntries(new FormData(event.target));
//         this._onAddItem(data);
//         event.target.reset();
//     }
// }

// const todoForm = new TodoForm('#form', (data) => {
//     const todoList = new Card('#card-template');
//     const todoListItem = new TodoListItem(data);
//     const card = todoListItem.generateCard();
//     todoList.addCard(card)

// });

