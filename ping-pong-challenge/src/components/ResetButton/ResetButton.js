import React from "react";
import { Button } from "@material-ui/core";
import "./ResetButton.css";

const ResetButton = props => {
    const { setShowGame, gameVisible, isWinner, cleanUp } = props;
    const resetGame = () => {
        setShowGame(false);
        cleanUp();
    };

    return (
        <div>
            {
                isWinner &&
                <Button className="resetButton" color="primary" variant="contained" onClick={resetGame}>Reset</Button>
            }
        </div>
    )
}
export default ResetButton;