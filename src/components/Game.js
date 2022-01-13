import './index.css';
import React, {Component} from "react";
import Answers from './Answers';
import Question from './Question';
import Modal from './Modal';
import End from './End';
import { data } from '../data';

const sortedData = data.sort(() => Math.random() - 0.5);
const questionBank = sortedData.slice(0,12);
class Game extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      questionBank,
      current: questionBank[0],
      score: 0,
      responses: 0,
      answer: 0,
    };
  }

  switchModal = () => {
    this.setState((prev) => {
      const show = !prev.show;
      return { show };
    });
  };

  clickHandler = (answer) => {
    const { questionBank } = this.state;
    this.setState((prev) => {
      const index = prev.responses + 1;
      const current = questionBank[index]; 
      let score;
      if (answer === 0) {
        score = 0;
      } else {
        const isCorrect = answer === questionBank[prev.responses].type;
        score = isCorrect ? prev.score + 1: prev.score;
      }
      const responses = prev.responses + 1;
      return { ...this.state, score, current, responses, show: true, answer};
    });
  }

  render() {
    const { questionBank, responses, score, show } = this.state;
    const currentScreen = questionBank.length === responses ?       
    (<>
      <Modal show={show} handleClose={this.switchModal} current={questionBank[questionBank.length-1]} answer={this.state.answer} />
      <End score={score} total={questionBank.length} />
    </>) : 
    (<> 
      <Modal show={show} handleClose={this.switchModal} current={questionBank[responses-1] ? questionBank[responses-1] : questionBank[0]} answer={this.state.answer} />
      <Question text={this.state.current.name} />
      <Answers clickHandler={this.clickHandler} />
    </>);

    return (
      <div className="App">
        <div className="App-main">
          <div className="title">
            <h1 className="title-text">Crypto or Pokemon?</h1>
          </div>
          <div className="home">
          {currentScreen}          
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
