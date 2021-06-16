import {generateLogs} from "./createElements.js";
import {getRandom, form} from "./utils.js";

const balance = {
    hits: {
        head: 30,
        body: 25,
        foot: 20,
    },
    attacks: ['head', 'body', 'foot']
}

const {hits, attacks} = balance;

function elHP() {
    return document.querySelector(`.player${this.player} .life`);
}

function changeHP(number) {
    this.hp -= number;
    if (this.hp <= 0) {
        return this.hp = 0;
    } else {
        return this.hp;
    }
}

function renderHP() {
    this.elHP().style.cssText = `width: ${this.hp}%;`;
}

const enemyAttack = () => {
    const hit = attacks[getRandom(3) - 1];
    const defence = attacks[getRandom(3) - 1];

    return {
        value: getRandom(hits[hit]),
        hit,
        defence
    }
}

const playerAttack = () => {
    let value;
    let hit;
    let defence;

    for (const item of form) {
        if (item.checked === true && item.name === 'hit') {
            value = getRandom(hits[item.value]);
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

const attack = (Player1, Player2) => {

    Player1.elHP = elHP;
    Player1.changeHP = changeHP;
    Player1.renderHP = renderHP;

    Player2.elHP = elHP;
    Player2.changeHP = changeHP;
    Player2.renderHP = renderHP;

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
}

export default attack;