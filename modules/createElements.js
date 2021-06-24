import {createDate, getRandom, chat} from "./utils.js";
import store from "./store.js";

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