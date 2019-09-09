import React, { useState } from 'react';
import './App.css';
import Leaderboard from './components/Leaderboard/Leaderboard';
import PlayingTo from './components/PlayingTo/PlayingTo';
import PlayerArea from './components/PlayerArea/PlayerArea';
import Header from './components/Header/Header';
import GameSetUp from './components/GameSetUp/GameSetUp';

function App() {

  const [playerOneName, setPlayerOneName] = useState('Player One');
  const [playerTwoName, setPlayerTwoName] = useState('Player Two');

  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);

  const [playingToScore, setPlayingToScore] = useState(5);

  const [gameVisible, setShowGame] = useState(false);

  const [isWinnerVar, setIsWinner] = useState(false);

  const [scores, setScores] = useState({
    playOne:0,
    playTwo: 0
  });
  
  return (
    <div className="App">

      <Header></Header>

      <GameSetUp  
                  updatePlayerOneName={setPlayerOneName}
                  updatePlayerTwoName={setPlayerTwoName}
                  updatePlayingTo={setPlayingToScore}
                  score={playingToScore}
                  updateVisibility={setShowGame}
                  showGame={gameVisible}>
      </GameSetUp>

      {/* <Leaderboard></Leaderboard> */}
      <PlayingTo
              updatePlayingTo={setPlayingToScore}
              score={playingToScore}
              showGame={gameVisible}>
      </PlayingTo>

      <PlayerArea
              name={playerOneName}
              updateScore={setPlayerOneScore}
              score={playerOneScore}
              showGame={gameVisible}
              isWinner={setIsWinner}>
      </PlayerArea>

      <PlayerArea
            name={playerTwoName}
            updateScore={setPlayerTwoScore} 
            score={playerTwoScore}
            showGame={gameVisible}
            isWinner={setIsWinner}>
      </PlayerArea>
     
    </div>
  );
}

export default App;
