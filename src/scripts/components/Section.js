export default class Section {

    constructor({ items, renderer }, container) {
        this._container = document.querySelector(container);//инпуты в форме
        this._renderer = renderer;
        this._initialCards = items;
    }

    renderItems() {
        this._initialCards.forEach((element) => {
            this.addItem(this._renderer(element));
        })
    }

    addItem(element) {
        this._container.prepend(element);
    }
}