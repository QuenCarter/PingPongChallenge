import React, { useState } from 'react';
import './App.css';
import Leaderboard from './components/Leaderboard/Leaderboard';
import PlayingTo from './components/PlayingTo/PlayingTo';
import PlayerArea from './components/PlayerArea/PlayerArea';
import Header from './components/Header/Header';

function App() {

  const [playerOneName, setPlayerOneName] = useState('Jonny');
  const [playerTwoName, setPlayerTwoName] = useState('Quen');

  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);

  const [playingToScore, setPlayingToScore] = useState(5);

  return (
    <div className="App">

      <Header></Header>

      <Leaderboard></Leaderboard>

      <PlayingTo updatePlayingTo={setPlayingToScore} score={playingToScore}></PlayingTo>

      <PlayerArea name={playerOneName} updateScore={setPlayerOneScore} score={playerOneScore}></PlayerArea>
      <PlayerArea name={playerTwoName} updateScore={setPlayerTwoScore} score={playerTwoScore}></PlayerArea>
     
    </div>
  );
}

export default App;
