const arenas = document.querySelector('.arenas');
const formFight = document.querySelector('.control');
const chat = document.querySelector('.chat');

const createDate = () => {
    const date = new Date();
    return `${date.getHours()} : ${date.getMinutes()}`;
}

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

const logs = {
    start: `Часы показывали [time], когда <p class="nameColor">[playerKick]</p> и <p class="nameColor">[playerDefence]</p> бросили вызов друг другу.`,
    end: [
        `Результат удара <p class="nameColor">[playerKick]</p>: <p class="nameColor">[playerDefence]</p> - труп`,
        `<p class="nameColor">[playerDefence]</p> погиб от удара бойца <p class="nameColor">[playerKick]</p>`,
        `Результат боя: <p class="nameColor">[playerDefence]</p> - жертва, <p class="nameColor">[playerKick]</p> - убийца`,
    ],
    hit: [
        `<p class="nameColor">[playerDefence]</p> пытался сконцентрироваться, но <p class="nameColor">[playerKick]</p> разбежавшись раздробил копчиком левое ухо врага.`,
        `<p class="nameColor">[playerDefence]</p> расстроился, как вдруг, неожиданно <p class="nameColor">[playerKick]</p> случайно раздробил грудью грудину противника.`,
        `<p class="nameColor">[playerDefence]</p> зажмурился, а в это время <p class="nameColor">[playerKick]</p>, прослезившись, раздробил кулаком пах оппонента.`,
        `<p class="nameColor">[playerDefence]</p> чесал <вырезано цензурой>, и внезапно неустрашимый <p class="nameColor">[playerKick]</p> отчаянно размозжил грудью левый бицепс оппонента.`,
        `<p class="nameColor">[playerDefence]</p> задумался, но внезапно <p class="nameColor">[playerKick]</p> случайно влепил грубый удар копчиком в пояс оппонента.`,
        `<p class="nameColor">[playerDefence]</p> ковырялся в зубах, но <p class="nameColor">[playerKick]</p> проснувшись влепил тяжелый удар пальцем в кадык врага.`,
        `<p class="nameColor">[playerDefence]</p> вспомнил что-то важное, но внезапно <p class="nameColor">[playerKick]</p> зевнув, размозжил открытой ладонью челюсть противника.`,
        `<p class="nameColor">[playerDefence]</p> осмотрелся, и в это время <p class="nameColor">[playerKick]</p> мимоходом раздробил стопой аппендикс соперника.`,
        `<p class="nameColor">[playerDefence]</p> кашлянул, но внезапно <p class="nameColor">[playerKick]</p> показав палец, размозжил пальцем грудь соперника.`,
        `<p class="nameColor">[playerDefence]</p> пытался что-то сказать, а жестокий <p class="nameColor">[playerKick]</p> проснувшись размозжил копчиком левую ногу противника.`,
        `<p class="nameColor">[playerDefence]</p> забылся, как внезапно безумный <p class="nameColor">[playerKick]</p> со скуки, влепил удар коленом в левый бок соперника.`,
        `<p class="nameColor">[playerDefence]</p> поперхнулся, а за это <p class="nameColor">[playerKick]</p> мимоходом раздробил коленом висок врага.`,
        `<p class="nameColor">[playerDefence]</p> расстроился, а в это время наглый <p class="nameColor">[playerKick]</p> пошатнувшись размозжил копчиком губы оппонента.`,
        `<p class="nameColor">[playerDefence]</p> осмотрелся, но внезапно <p class="nameColor">[playerKick]</p> робко размозжил коленом левый глаз противника.`,
        `<p class="nameColor">[playerDefence]</p> осмотрелся, а <p class="nameColor">[playerKick]</p> вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.`,
        `<p class="nameColor">[playerDefence]</p> ковырялся в зубах, как вдруг, неожиданно <p class="nameColor">[playerKick]</p> отчаянно размозжил плечом мышцы пресса оппонента.`,
        `<p class="nameColor">[playerDefence]</p> пришел в себя, и в это время <p class="nameColor">[playerKick]</p> провел разбивающий удар кистью руки, пробив блок, в голень противника.`,
        `<p class="nameColor">[playerDefence]</p> пошатнулся, а в это время <p class="nameColor">[playerKick]</p> хихикая влепил грубый удар открытой ладонью по бедрам врага.`,
    ],
    defence: [
        `<p class="nameColor">[playerKick]</p> потерял момент и храбрый <p class="nameColor">[playerDefence]</p> отпрыгнул от удара открытой ладонью в ключицу.`,
        `<p class="nameColor">[playerKick]</p> не контролировал ситуацию, и потому <p class="nameColor">[playerDefence]</p> поставил блок на удар пяткой в правую грудь.`,
        `<p class="nameColor">[playerKick]</p> потерял момент и <p class="nameColor">[playerDefence]</p> поставил блок на удар коленом по селезенке.`,
        `<p class="nameColor">[playerKick]</p> поскользнулся и задумчивый <p class="nameColor">[playerDefence]</p> поставил блок на тычок головой в бровь.`,
        `<p class="nameColor">[playerKick]</p> старался провести удар, но непобедимый <p class="nameColor">[playerDefence]</p> ушел в сторону от удара копчиком прямо в пятку.`,
        `<p class="nameColor">[playerKick]</p> обманулся и жестокий <p class="nameColor">[playerDefence]</p> блокировал удар стопой в солнечное сплетение.`,
        `<p class="nameColor">[playerKick]</p> не думал о бое, потому расстроенный <p class="nameColor">[playerDefence]</p> отпрыгнул от удара кулаком куда обычно не бьют.`,
        `<p class="nameColor">[playerKick]</p> обманулся и жестокий <p class="nameColor">[playerDefence]</p> блокировал удар стопой в солнечное сплетение.`
    ],
    draw: 'Ничья - это тоже победа!'
};


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

const showResult = () => {
    if (Player1.hp === 0 && Player1.hp < Player2.hp) {
        showResultsText(Player2.name);

        generateLogs('end', Player2, Player1);
    } else if (Player2.hp === 0 && Player2.hp < Player1.hp) {
        showResultsText(Player1.name);

        generateLogs('end', Player1, Player2);
    } else if (Player1.hp === 0 && Player2.hp === 0) {

        const inputs = document.querySelectorAll('.control input');
        const attackButton = document.querySelector('.button');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].disabled = 'disabled';
        }
        attackButton.disabled = 'disabled';

        createReloadButton();
        showResultsText();

        generateLogs('draw', Player1, Player2);
    }
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

const playerAttack = () => {
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
    let attackObj = playerAttack();
    let enemyAttackObj = enemyAttack();

    if (enemyAttackObj.hit !== attackObj.defence) {
        Player1.changeHP(enemyAttackObj.value);
        Player1.renderHP();
        generateLogs('hit', Player2, Player1, enemyAttackObj.value);
    } else {
        generateLogs('defence', Player2, Player1, 0);
    }

    if (attackObj.hit !== enemyAttackObj.defence) {
        Player2.changeHP(attackObj.value);
        Player2.renderHP();
        generateLogs('hit', Player1, Player2, attackObj.value);
    } else {
        generateLogs('defence', Player1, Player2, 0);
    }
    showResult();
});

const createReloadButton = () => {
    const reloadWrap = createElement('div', 'reloadWrap', arenas);
    const reloadButton = createElement('button', 'button', reloadWrap);
    reloadButton.innerText = 'Restart';
    return reloadButton.addEventListener('click', function () {
        window.location.reload();
    });
}

const generateLogs = (type, playerKick, playerDefence, playerDamage) => {
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
    }


    if (playerDamage || playerDamage === 0) {
        const damage = `<p class="damageColor">${playerDamage}</p><p class="totalColor"> [${playerDefence.hp}]</p>`;
        html = `<div class="log">${text} ${damage}</div>`;
    }else {
        html = `<div class="log">${text}</div>`;
    }
    console.log(html);
    chat.insertAdjacentHTML('afterbegin', html);
}

createPlayer(Player1);
createPlayer(Player2);

