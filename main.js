const arenas = document.querySelector('.arenas');
const formFight = document.querySelector('.control');

const Hit = {
    head: 30,
    body: 25,
    foot: 20,
}

const Attack = ['head', 'body', 'foot'];

const Player1 = {
    player: 1,
    changeHP,
    elHP,
    renderHP,
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
    changeHP,
    elHP,
    renderHP,
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

const getRandom = (maxNumber) => {
    return Math.ceil(Math.random() * maxNumber);
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

function changeHP(number) {
    this.hp -= number;
    if (this.hp <= 0) {
        return this.hp = 0;
    } else {
        return this.hp;
    }
}

function elHP() {
    return document.querySelector(`.player${this.player} .life`);
}

function renderHP() {
    this.elHP().style.cssText = `width: ${this.hp}%;`;
}

const showResultsText = (name) => {
    const resultsText = createElement('div', 'loseTitle', arenas);
    if (name) {
        resultsText.innerText = `${name} Wins`;
    } else {
        resultsText.innerText = 'Draw';
    }
    return resultsText;
}

const enemyAttack = () => {
    const hit = Attack[getRandom(3) - 1];
    const defence = Attack[getRandom(3) - 1];

    return {
        value: getRandom(Hit[hit]),
        hit,
        defence
    }
}

const attack = () => {
    let value;
    let hit;
    let defence;

    for (const item of formFight) {
        if (item.checked === true && item.name === 'hit') {
            value = getRandom(Hit[item.value]);
            hit = item.value;
        }
        if (item.checked === true && item.name === 'defence') {
            defence = item.value;
        }

        item.checked = false;
    }

    return {
        value,
        hit,
        defence
    }
}

formFight.addEventListener('submit', function (e) {
    e.preventDefault();
    let attackObj = attack();
    let enemyAttackObj = enemyAttack();

    if (enemyAttackObj.hit != attackObj.defence) {
        Player1.changeHP(getRandom(enemyAttackObj.value));
        Player1.renderHP();
    }

    if (attackObj.hit != enemyAttackObj.defence) {
        Player2.changeHP(getRandom(attackObj.value));
        Player2.renderHP();
    }

    if (Player1.hp === 0 || Player2.hp === 0) {
        const inputs = document.querySelectorAll('.control input');
        const attackButton = document.querySelector('.button');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].disabled = 'disabled';
        }
        attackButton.disabled = 'disabled';
        createReloadButton();
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
