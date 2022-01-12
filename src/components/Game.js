import './index.css';
import React, {Component} from "react";
import Answers from './Answers';
import Question from './Question';
import { data } from '../data';

const shuffledData = data.sort(() => Math.random() - 0.5);

console.log(shuffledData);
class Game extends Component {
  constructor() {
    super();
    this.state = {
      questionBank: [],
      score: 0,
      responses: 0
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-main">
          <div className="title">
            <h1 className="title-text">Crypto or Pokemon?</h1>
          </div>
          <div className="home">
            <Question />
            <Answers />
          </div>
          <div className="bottom-bar">
          <p className="bottom-bar-text">
          Made by <a className="bottom-bar-link" href="https://twitter.com/germibh/">grmi.eth</a>, 
          inspired by <a className="bottom-bar-link" href="https://pixelastic.github.io/pokemonorbigdata/">this idea</a>.
          </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
