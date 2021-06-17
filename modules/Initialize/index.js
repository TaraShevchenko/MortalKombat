import {generateLogs} from "../createElements.js";

class Initialize {
    constructor(props) {
        this.Player1 = props.Player1;
        this.Player2 = props.Player2;
    }

    initialize = () => {
        generateLogs('start', this.Player1, this.Player2)
        this.Player1.createPlayer();
        this.Player2.createPlayer();
    }
}

export default Initialize