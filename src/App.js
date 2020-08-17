import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';

import Trivia from './images/Logo/WobbleBoard-Trivia.png';
import Game from './images/Logo/WobbleBoard-Game.png';

import store from './redux/store';
import StartScreen from './pages/StartScreen';
import SettingsScreen from './pages/SettingsScreen';
import TriviaScreen from './pages/TriviaScreen';
import FeedbackScreen from './pages/FeedbackScreen';
import RankingScreen from './pages/RankingScreen';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <div className="App-header">
              <img src={Trivia} className="Logo-Trivia" alt="logo" />
              <img src={Game} className="Logo-Game" alt="logo" />
            </div>
            <Switch>
              <Route exact path="/" component={StartScreen} />
              <Route exact path="/settings" component={SettingsScreen} />
              <Route exact path="/trivia" component={TriviaScreen} />
              <Route exact path="/feedback" component={FeedbackScreen} />
              <Route exact path="/ranking" component={RankingScreen} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
