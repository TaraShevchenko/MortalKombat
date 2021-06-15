import {createDate, createElement, getRandom, arenas, chat} from "./utils.js";
import store from "./store.js";

export const createPlayer = (Player) => {
    const player = createElement('div', 'player' + Player.player, arenas);
    const progressbar = createElement('div', 'progressbar', player);
    const life = createElement('div', 'life', progressbar);
    life.style.cssText = `width: ${Player.hp}%;`;
    const name = createElement('div', 'name', progressbar);
    name.innerText = Player.name;
    const character = createElement('div', 'character', player);
    const characterImage = createElement('img', '', character);
    characterImage.setAttribute("src", Player.img)
}

export const generateLogs = (type, playerKick, playerDefence, playerDamage) => {
    const {logs} = store;
    let html;
    let text;

    switch (type) {
        case 'draw':
            text = logs[type].replace('[playerKick]', playerKick.name).replace('[playerDefence]', playerDefence.name);
            break;
        case 'start':
            text = logs[type].replace('[playerKick]', playerKick.name).replace('[playerDefence]', playerDefence.name).replace('[time]', createDate());
            break;
        case 'hit':
            text = logs[type][getRandom(type.length) - 1].replace('[playerKick]', playerKick.name).replace('[playerDefence]', playerDefence.name);
            break;
        case 'defence':
            text = logs[type][getRandom(type.length) - 1].replace('[playerKick]', playerKick.name).replace('[playerDefence]', playerDefence.name);
            break;
        case 'end':
            text = logs[type][getRandom(type.length) - 1].replace('[playerKick]', playerKick.name).replace('[playerDefence]', playerDefence.name);
            break;
        default:
            text = '';
            break;
    }


    if (playerDamage || playerDamage === 0) {
        const damage = `<p class="damageColor">${playerDamage}</p><p class="totalColor"> [${playerDefence.hp}]</p>`;
        html = `<div class="log">${text} ${damage}</div>`;
    }else {
        html = `<div class="log">${text}</div>`;
    }

    chat.insertAdjacentHTML('afterbegin', html);
}