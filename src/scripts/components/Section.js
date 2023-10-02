export default class Section {

    constructor(renderer, container) {
        this._container = document.querySelector(container);//инпуты в форме
        this._renderer = renderer;
    }

    renderItems(dataCard) {
        dataCard.forEach((element) => {
            this._renderer(element);
        })
    }

    addItem(element) {
        this._container.prepend(element);
    }

    addItemAppend(element) {
        this._container.append(element);
    }
}