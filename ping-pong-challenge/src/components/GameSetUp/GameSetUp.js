import React from "react";
import { Paper, Typography, Button } from "@material-ui/core";

const GameSetUp = (props) => {
    const { updatePlayerOneName, updatePlayerTwoName,
        updatePlayingTo, score, showGame,
        updateVisibility, isInit,
        setIsInit, playerOneName,
        playerTwoName } = props;

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
        setIsInit(false);
    }

    return (
        <div>
            {
                !showGame &&
                <Paper>
                    <Typography variant="h3">
                        Game Set Up
                </Typography>
                    <input placeholder="Enter Team One's Name" onChange={addPlayerOneName} value={isInit ? undefined : playerOneName} />
                    <input placeholder="Enter Team Two's Name" onChange={addPlayerTwoName} value={isInit ? undefined : playerTwoName} />
                    <input type="number" placeholder="playing up to ... " value={score} onChange={increasePlayingTo}></input>
                    <Button color="primary" variant="contained" onClick={startGame}> Start Game</Button>
                </Paper>
            }

        </div>
    );
}
export default GameSetUp;