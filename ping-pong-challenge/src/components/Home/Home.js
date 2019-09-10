import React, { useState, useEffect } from 'react';
import './Home.css';
import PlayingAreaHeader from '../PlayingAreaHeader/PlayingAreaHeader';
import PlayerArea from '../PlayerArea/PlayerArea';
import Header from '../Header/Header';
import GameSetUp from '../GameSetUp/GameSetUp';
import ResetButton from '../ResetButton/ResetButton';
import { updateGameRecord } from "../../services/game-service";

function Home() {

  const [playerOneName, setPlayerOneName] = useState('Team One');
  const [playerTwoName, setPlayerTwoName] = useState('Team Two');

  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);

  const [playingToScore, setPlayingToScore] = useState(5);

  const [gameVisible, setShowGame] = useState(false);

  const [isWinner, setIsWinner] = useState(false);

  const [winner, setWinner] = useState("");

  const [isInit, setIsInit] = useState(true);

  const cleanUp = () => {

    setPlayerOneScore(0);
    setPlayerTwoScore(0);
    setPlayingToScore(5);
    setShowGame(false);
    setIsWinner(false);
    setWinner("");
  }

  useEffect(
    () => {
      if (playerOneScore === playingToScore || playerTwoScore === playingToScore) {
        setIsWinner(true);
      }
    }, [playerOneScore, playingToScore, playerTwoScore, isWinner]
  );

  useEffect(
    () => {
      if (isWinner) {
        if (playerOneScore === playingToScore) {
          setWinner(playerOneName);
          updateGameRecord({ player: playerOneName, wins: 1, losses: 0 },
            () => updateGameRecord({ player: playerTwoName, wins: 0, losses: 1 }
            ));
        }
        if (playerTwoScore === playingToScore) {
          setWinner(playerTwoName);
          updateGameRecord({ player: playerTwoName, wins: 1, losses: 0 },
            () => updateGameRecord({ player: playerOneName, wins: 0, losses: 1 }
            ));

        }

      }
    }, [playerOneScore, playingToScore, playerTwoScore, isWinner, playerOneName, playerTwoName]
  );
  return (
    <div className="App">

      {
        !gameVisible &&
        <GameSetUp
          updatePlayerOneName={setPlayerOneName}
          updatePlayerTwoName={setPlayerTwoName}
          updatePlayingTo={setPlayingToScore}
          score={playingToScore}
          updateVisibility={setShowGame}
          playerOneName={playerOneName}
          playerTwoName={playerTwoName}
          isInit={isInit}
          setIsInit={setIsInit}>
        </GameSetUp>
      }

      {/* <Leaderboard></Leaderboard> */}

      {
        gameVisible &&
        <>
          <PlayingAreaHeader
            updatePlayingTo={setPlayingToScore}
            score={playingToScore}
            isWinner={isWinner}
            winner={winner}>
          </PlayingAreaHeader>

          <div className="scoreboardDiv">
            <PlayerArea
              name={playerOneName}
              updateScore={setPlayerOneScore}
              score={playerOneScore}
              isWinner={isWinner}>
            </PlayerArea>

            <PlayerArea
              name={playerTwoName}
              updateScore={setPlayerTwoScore}
              score={playerTwoScore}
              isWinner={isWinner}>
            </PlayerArea>
          </div>
        </>
      }
      <ResetButton isWinner={isWinner} setShowGame={setShowGame} gameVisible={gameVisible} cleanUp={cleanUp}></ResetButton>

    </div>
  );
}

export default Home;
