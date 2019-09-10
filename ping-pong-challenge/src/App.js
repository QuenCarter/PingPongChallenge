import React, { useState, useEffect } from 'react';
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import './App.css';
import Leaderboard from './components/Leaderboard/Leaderboard';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Header></Header>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/leaderboard' component={Leaderboard}></Route>
      </Switch>
    </div>
  );
}

export default App;
