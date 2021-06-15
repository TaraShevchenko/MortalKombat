import {createElement, arenas} from "./utils.js";
import {generateLogs} from "./createElements.js";

const showResultsText = (name) => {
    const resultsText = createElement('div', 'loseTitle', arenas);
    if (name) {
        resultsText.innerText = `${name} Wins`;
    } else {
        resultsText.innerText = 'Draw';
    }
    return resultsText;
}

const createReloadButton = () => {
    const reloadWrap = createElement('div', 'reloadWrap', arenas);
    const reloadButton = createElement('button', 'button', reloadWrap);

    reloadButton.innerText = 'Restart';
    return reloadButton.addEventListener('click', function () {
        window.location.reload();
    });
}

const disableButtons = () => {
    const inputs = document.querySelectorAll('.control input');
    const attackButton = document.querySelector('.button');

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].disabled = true;
        inputs[i].checked = false;
    }
    attackButton.disabled = true;
}

const result = (Player1, Player2) => {
    if (Player1.hp === 0 && Player1.hp < Player2.hp) {
        showResultsText(Player2.name);
        generateLogs('end', Player2, Player1);
        disableButtons();
        createReloadButton();
    } else if (Player2.hp === 0 && Player2.hp < Player1.hp) {
        showResultsText(Player1.name);
        generateLogs('end', Player1, Player2);
        disableButtons();
        createReloadButton();
    } else if (Player1.hp === 0 && Player2.hp === 0) {
        showResultsText();
        generateLogs('draw', Player1, Player2);
        disableButtons();
        createReloadButton();
    }
}

export default result;
