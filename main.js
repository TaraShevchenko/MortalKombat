import store from './modules/store.js'
import {form} from './modules/utils.js';
import result from './modules/results.js';
import attack from './modules/attack.js';
import {createPlayer, generateLogs} from './modules/createElements.js';

const Player1 = Object.create(store.initialPlayer);

Player1.player = 1;
Player1.name = 'Scorpion';
Player1.img = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';

const Player2 = Object.create(store.initialPlayer);

Player2.player = 2;
Player2.name = 'Subzero';
Player2.img = 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif';

generateLogs('start', Player1, Player2)
createPlayer(Player1);
createPlayer(Player2);

form.addEventListener('submit', function (e) {
    e.preventDefault();
    attack(Player1, Player2)
    result(Player1, Player2);
});