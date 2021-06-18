import {form, arenas} from "../utils.js";
import Player from "../Player";
import Attack from "../Attack";
import Results from "../Results";
import Initialize from "../Initialize";

class Game {

    constructor() {
        const arenas = document.querySelector('.arenas');
        const form = document.querySelector('.control');
        const chat = document.querySelector('.chat');
    }

    start = () => {
        const Player1 = new Player({
            player: 1,
            name: 'Scorpion',
            img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
            hp: 100
        });

        const Player2 = new Player({
            player: 2,
            name: 'Subzero',
            img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
            hp: 100
        });

        const initialize = new Initialize({
            Player1: Player1,
            Player2: Player2
        });
        initialize.initialize()

        this.gameFormGenerate(Player1, Player2)
    }

    gameFormGenerate = (Player1, Player2) => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const attack = new Attack({
                parentSelector: form,
                Player1: Player1,
                Player2: Player2
            });
            attack.attack()

            const results = new Results({
                parentSelector: arenas,
                Player1: Player1,
                Player2: Player2
            })

            results.result(Player1, Player2);
        });
    }
}

export default Game;