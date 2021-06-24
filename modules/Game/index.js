import {form, arenas, getRandom} from "../utils.js";
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

        const player1 = new Player({
            ...JSON.parse(localStorage.player1),
            player: 1
        });

        const player2 = new Player({
            ...JSON.parse(localStorage.player2),
            player: 2
        });

        const initialize = new Initialize({
            Player1: player1,
            Player2: player2
        });
        initialize.initialize()

        this.gameFormGenerate(player1, player2)
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
        });
    }
}


export default Game;