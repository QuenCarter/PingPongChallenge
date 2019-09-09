import React from "react";

const PlayingTo = props => {
    const {score, showGame} = props;
    return(
        <div>
            {
                showGame &&
                <h1>First player to {score} wins!</h1>
            }
            
        </div>
    );
}
export default PlayingTo;