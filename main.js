const Player1 = {
    player: 'player1',
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
    player: 'player2',
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
    const player = createElement('div', $player.player, arenas);
    const progressbar = createElement('div', 'progressbar', player);
    const life = createElement('div', 'life', progressbar);
    life.style.cssText = `width: ${$player.hp}%;`;
    const name = createElement('div', 'name', progressbar);
    name.innerText = $player.name;
    const character = createElement('div', 'character', player);
    const characterImage = createElement('img', '', character);
    characterImage.setAttribute("src", $player.img)
}

const winner = ($player) => {
    for (let i = 0; i < $player.length; i++) {
        if ($player[i].hp > 0) {
            return $player[i].name;
        }
    }
}

const fightResult = () => {
    const fightResultPanel = createElement('div', 'loseTitle', arenas);
    fightResultPanel.innerText = winner([Player1, Player2]) + ' Wins';

    randomButton.setAttribute('disabled', 'disabled');
}

const onRandomClick = ($player) => {
    for (let i = 0; i < $player.length; i++) {
        const playerHp = document.querySelector(`.${$player[i].player} .life`);

        $player[i].hp = $player[i].hp - Math.ceil(Math.random() * 20);
        if ($player[i].hp > 0) {
            playerHp.style.cssText = `width: ${$player[i].hp}%;`;
        } else {
            playerHp.style.cssText = 'width: 0%;';
            fightResult();
        }
    }
}

randomButton.addEventListener('click', function () {
    onRandomClick([Player1, Player2]);
});

createPlayer(Player1);
createPlayer(Player2);
