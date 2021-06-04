const Scorpion = {
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: [
        'Sword', 'Katana'
    ],
    attack() {
        console.log(this.name + ' Fight');
    }
}

const Subzero = {
    name: 'Subzero',
    hp: 50,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: [
        'Sword', 'Katana'
    ],
    attack() {
        console.log(this.name + ' Fight');
    }
}
const createElement = (elem, className, parent) => {
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
const createPlayer = (playerId, playerInfo) => {
    const arenas = document.querySelector('.root .arenas');
    const player = createElement('div', playerId, arenas);
    const progressbar = createElement('div', 'progressbar', player);
    const life = createElement('div', 'life', progressbar);
    life.style.cssText = `width: ${playerInfo.hp}%;`;
    const name = createElement('div', 'name', progressbar);
    name.innerText = playerInfo.name;
    const character = createElement('div', 'character', player);
    const characterImage = createElement('img', '', character);
    characterImage.setAttribute("src", playerInfo.img)
}

createPlayer('player1', Scorpion);
createPlayer('player2', Subzero);
