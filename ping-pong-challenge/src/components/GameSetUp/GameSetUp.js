import React from "react";
import './GameSetUp.css'

import { Paper, Typography, Button, TextField } from "@material-ui/core";

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
                <Paper className="gameSetUp">
                    <Typography variant="h4">
                        Game Set Up
                </Typography>
                    <div>
                        <TextField
                            variant="outlined"
                            label="Team One Name"
                            placeholder="Enter Team's One name"
                            value={isInit ? undefined : playerOneName}
                            margin="normal"
                            onChange={addPlayerOneName}
                        />
                    </div>

                    <div>
                        <TextField
                            variant="outlined"
                            label="Team Two Name"
                            placeholder="Enter Team Two's Name"
                            value={isInit ? undefined : playerTwoName}
                            margin="normal"
                            onChange={addPlayerTwoName} />

                    </div>

                    <div>
                        <TextField
                            variant="outlined"
                            label="Playing up to"
                            type="number"
                            value={score}
                            onChange={increasePlayingTo}
                            margin="normal" />
                    </div>
                    <div className="gameBtnDiv">
                        <Button color="primary" variant="contained" onClick={startGame}> Start Game</Button>
                    </div>

                </Paper>
            }

        </div>
    );
}
export default GameSetUp;