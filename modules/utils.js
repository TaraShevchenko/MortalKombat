export const arenas = document.querySelector('.arenas');
export const form = document.querySelector('.control');
export const chat = document.querySelector('.chat');

export const createDate = () => `${new Date().getHours()} : ${new Date().getMinutes()}`;

export const getRandom = (maxNumber) => Math.ceil(Math.random() * maxNumber);

export const createElement = (elem, className, parent) => {
    if (elem) {
        let element = document.createElement(elem);
        if (className) {
            element.classList.add(className);
        }
        if (parent) {
            parent.appendChild(element);
        }
        return element;
    }
}

