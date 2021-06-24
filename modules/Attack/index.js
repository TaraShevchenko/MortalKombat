import {getRandom, arenas} from "../utils.js";
import {generateLogs} from "../createElements.js";
import Results from "../Results";

const fightServer = async () => {
    const body = await fetch('http://reactmarathon-api.herokuapp.com/api/mk/player/fight', {
        method: 'POST',
        body: JSON.stringify({})
    }).then(res => res.json());
    return body;
}

class Attack {
    constructor(props) {
        this.parentSelector = props.parentSelector;
        this.Player1 = props.Player1;
        this.Player2 = props.Player2;
        this.hits = {
            head: 30,
            body: 25,
            foot: 20,
        };
    }

    enemyAttack = async () => {
        const test = await fightServer();
         return {
            ...test.player2,
        }
    }

    playerAttack = () => {
        let value;
        let hit;
        let defence;

        for (const item of this.parentSelector) {
            if (item.checked === true && item.name === 'hit') {
                value = getRandom(this.hits[item.value]);
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

    attack = async () => {
        let attackObj = this.playerAttack();
        let enemyAttackObj = await this.enemyAttack();

        if (enemyAttackObj.hit !== attackObj.defence) {
            this.Player1.changeHP(enemyAttackObj.value);
            this.Player1.renderHP();
            generateLogs('hit', this.Player2, this.Player1, enemyAttackObj.value);
        } else {
            generateLogs('defence', this.Player2, this.Player1, 0);
        }

        if (attackObj.hit !== enemyAttackObj.defence) {
            this.Player2.changeHP(attackObj.value);
            this.Player2.renderHP();
            generateLogs('hit', this.Player1, this.Player2, attackObj.value);
        } else {
            generateLogs('defence', this.Player1, this.Player2, 0);
        }

        const results = new Results({
            parentSelector: arenas,
            Player1: this.Player1,
            Player2: this.Player2
        })
        results.result();
    }
}

export default Attack


