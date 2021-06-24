import {createElement} from "../utils.js";
import {generateLogs} from "../createElements.js";

class Results {

    constructor(props) {
        this.parentSelector = props.parentSelector;
        this.Player1 = props.Player1;
        this.Player2 = props.Player2;
    }


    showResultsText = (name) => {
        const resultsText = createElement('div', 'loseTitle', this.parentSelector);
        if (name) {
            resultsText.innerText = `${name} Wins`;
        } else {
            resultsText.innerText = 'Draw';
        }
        return resultsText;
    }

    createReloadButton = () => {
        const reloadWrap = createElement('div', 'reloadWrap', this.parentSelector);
        const reloadButton = createElement('button', 'button', reloadWrap);

        reloadButton.innerText = 'Restart';
        return reloadButton.addEventListener('click', function () {
            window.location.reload();
        });
    }

    disableButtons = () => {
        const inputs = document.querySelectorAll('.control input');
        const attackButton = document.querySelector('.button');

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].disabled = true;
            inputs[i].checked = false;
        }
        attackButton.disabled = true;
    }

    result = () => {

        if (this.Player1.hp === 0 && this.Player1.hp < this.Player2.hp) {

            this.showResultsText(this.Player2.name);

            this.disableButtons();
            this.createReloadButton();

            generateLogs('end', this.Player2, this.Player1);
        } else if (this.Player2.hp === 0 && this.Player2.hp < this.Player1.hp) {

            this.showResultsText(this.Player1.name);

            this.disableButtons();
            this.createReloadButton();

            generateLogs('end', this.Player1, this.Player2);
        } else if (this.Player1.hp === 0 && this.Player2.hp === 0) {
            this.showResultsText();

            this.disableButtons();
            this.createReloadButton();

            generateLogs('draw', this.Player1, this.Player2);
        }
    }
}


export default Results;