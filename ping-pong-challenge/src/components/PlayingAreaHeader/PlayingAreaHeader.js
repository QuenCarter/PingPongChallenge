import React from "react";
import { Typography } from "@material-ui/core";

const PlayingAreaHeader = props => {
    const {score, isWinner, winner} = props;
    return (
        <div>
            {
                !isWinner &&
                <Typography variant="h3">
                    First Team to {score} points wins!
                </Typography>
            }
            {
                isWinner &&
                <Typography variant="h3">
                    {winner} won the game!
                </Typography>
            }
            
        </div>
    );
}
export default PlayingAreaHeader;