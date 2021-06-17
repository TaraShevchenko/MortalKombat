import {arenas, createElement} from "../utils.js";

class Player {
    constructor(props) {
        this.player = props.player
        this.name = props.name
        this.img = props.img
        this.hp = props.hp
    }

    elHP = () => document.querySelector(`.player${this.player} .life`);

    changeHP = (number) => {
        this.hp -= number;
        if (this.hp <= 0) {
            return this.hp = 0;
        } else {
            return this.hp;
        }
    }

    renderHP = () => this.elHP().style.cssText = `width: ${this.hp}%;`;

    createPlayer = () => {
        const player = createElement('div', 'player' + this.player, arenas);
        const progressbar = createElement('div', 'progressbar', player);
        const life = createElement('div', 'life', progressbar);
        life.style.cssText = `width: ${this.hp}%;`;
        const name = createElement('div', 'name', progressbar);
        name.innerText = this.name;
        const character = createElement('div', 'character', player);
        const characterImage = createElement('img', '', character);
        characterImage.setAttribute("src", this.img)
    }
}

export default Player;