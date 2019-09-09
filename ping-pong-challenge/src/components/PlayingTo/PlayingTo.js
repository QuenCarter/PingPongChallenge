import React from "react";

const PlayingTo = props => {
    const {updatePlayingTo, score} = props;
    const increasePlayingTo = event =>  {
        const playingToVal = Number(event.target.value);
        updatePlayingTo(playingToVal);
    };
    return(
        <div>
            <h1>First player to {score} wins!</h1>
            <input type="number" placeholder="playing up to ... " value={score}onChange={increasePlayingTo}></input>
        </div>
    );
}
export default PlayingTo;