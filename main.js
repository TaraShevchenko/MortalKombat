const Player1 = {
    player: 1,
    hpChanges: hpChanges,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: [
        'Sword', 'Katana'
    ],
    attack: function () {
        console.log(this.name + ' Fight');
    }
}

const Player2 = {
    player: 2,
    hpChanges: hpChanges,
    name: 'Subzero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: [
        'Sword', 'Katana'
    ],
    attack: function () {
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

const arenas = document.querySelector('.arenas');
const randomButton = document.querySelector('.button');

const createPlayer = ($player) => {
    const player = createElement('div', 'player' + $player.player, arenas);
    const progressbar = createElement('div', 'progressbar', player);
    const life = createElement('div', 'life', progressbar);
    life.style.cssText = `width: ${$player.hp}%;`;
    const name = createElement('div', 'name', progressbar);
    name.innerText = $player.name;
    const character = createElement('div', 'character', player);
    const characterImage = createElement('img', '', character);
    characterImage.setAttribute("src", $player.img)
}

function hpChanges() {

    function changeHP() {
        this.hp = this.hp - Math.ceil(Math.random() * 20);
        if (this.hp <= 0) {
            return this.hp = 0;
        } else {
            return this.hp;
        }
    }

    function elHP() {
        let life = document.querySelector(`.player${this.player} .life`);
        this.hpChanges = life;
        return this.hpChanges;
    }

    function renderHP() {
        this.hpChanges.style.cssText = `width: ${this.hp}%;`;
    }

    changeHP.call(this)
    elHP.call(this)
    renderHP.call(this)
}

const showResultsText = (name) => {
    const resultsText = createElement('div', 'loseTitle', arenas);
    if (name) {
        resultsText.innerText = `${name} Wins`;
    } else {
        resultsText.innerText = 'Draw';
    }
    createReloadButton();
    return resultsText;
}

randomButton.addEventListener('click', function () {
    hpChanges.call(Player1);
    hpChanges.call(Player2);

    if (Player1.hp === 0 || Player2.hp === 0) {
        randomButton.disabled = true;
    }

    if (Player1.hp === 0 && Player1.hp < Player2.hp) {
        showResultsText(Player2.name);
    } else if (Player2.hp === 0 && Player2.hp < Player1.hp) {
        showResultsText(Player1.name);
    } else if (Player1.hp === 0 && Player2.hp === 0) {
        showResultsText();
    }
});

const createReloadButton = () => {
    const reloadWrap = createElement('div', 'reloadWrap', arenas);
    const reloadButton = createElement('button', 'button', reloadWrap);
    reloadButton.innerText = 'Restart';
    return reloadButton.addEventListener('click', function () {
        window.location.reload();
    });
}


createPlayer(Player1);
createPlayer(Player2);
