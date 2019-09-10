import React from "react";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import "./PlayerArea.css";
import { Button } from "@material-ui/core";

const PlayerArea = props => {

    const { score, updateScore, name, isWinner} = props;

    const increaseScore = () => {

        updateScore(score + 1);
    };


    return (
        <div>
            <Paper className="paper">
                <Typography variant="h2">
                    {name}
                </Typography>
                <Typography variant="h1">
                    <div className="score-board">
                        {score}
                    </div>
                </Typography>
                {
                    !isWinner &&
                    <Button color="primary" variant="contained" onClick={increaseScore}>Score</Button>
                }
            </Paper>
        </div >
    );

}
export default PlayerArea;