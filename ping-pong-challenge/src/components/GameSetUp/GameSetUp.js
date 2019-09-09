import React from "react";
import { Paper, Typography, Button} from "@material-ui/core";

const GameSetUp = (props) => {
    const { updatePlayerOneName, updatePlayerTwoName, updatePlayingTo, score, showGame, updateVisibility } = props;

    const increasePlayingTo = event => {
        const playingToVal = Number(event.target.value);
        updatePlayingTo(playingToVal);
    };

    const addPlayerOneName = (event) => {
        updatePlayerOneName(event.target.value);
    }
    const addPlayerTwoName = (event) => {
        updatePlayerTwoName(event.target.value);
    }
    const startGame = (event) => {
        updateVisibility(!showGame);
    }
 
    return (
        <div>
            {
                !showGame &&
                <Paper>
                <Typography variant="h3">
                    Game Set Up
                </Typography>
                <input placeholder="Enter player one's name" onChange={addPlayerOneName} />
                <input placeholder="Enter player two's name" onChange={addPlayerTwoName} />
                <input type="number" placeholder="playing up to ... " value={score} onChange={increasePlayingTo}></input>
                <Button color="primary" variant="contained" onClick={startGame}> Start Game</Button>
                </Paper>
            }
            
        </div>
    );
}
export default GameSetUp;