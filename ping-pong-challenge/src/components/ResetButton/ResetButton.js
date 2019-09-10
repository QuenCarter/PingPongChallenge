import React from "react";
import { Button } from "@material-ui/core";

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
                <Button color="primary" variant="contained" onClick={resetGame}>Reset</Button>
            }
        </div>
    )
}
export default ResetButton;