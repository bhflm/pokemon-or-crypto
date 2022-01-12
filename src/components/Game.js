import './index.css';
import React, {Component} from "react";
import Answers from './Answers';
import Question from './Question';
import Modal from './Modal';
import End from './End';
import { data } from '../data';

const questionBank = data.sort(() => Math.random() - 0.5);

class Game extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      questionBank,
      current: questionBank[0],
      score: 0,
      responses: 0
    };
  }

  switchModal = () => {
    this.setState((prev) => {
      const show = !prev.show;
      return { show };
    });
  };

  clickHandler = (answer) => {
    const { current, questionBank } = this.state;
    if (answer === current.type) {
      console.log('Correct');
      this.setState((prev) => {
        const score = prev.score + 1;
        return { ...this.state, score, answer: true };
      });
    } else {
      console.log('Wrong');
      this.setState((prev) => {
        const score = prev.score + 1;
        return { ...this.state, score, answer: false };
      });
    }
    this.setState((prev) => {
      const current = questionBank[prev.responses + 1];   
      const responses = prev.responses + 1;
      const show = true;
      return { ...this.state, current, responses, show};
    });
  }

  render() {
    const { questionBank, responses } = this.state;
    console.log('Responses: ', responses);

    const currentQ = questionBank[responses-1];
    console.log('CurrentQ: ', currentQ);
    const end = questionBank.length === responses;

    const screen = end ? <End /> : (<> 
      <Modal show={this.state.show} handleClose={this.switchModal} current={questionBank[responses]} answer={this.state.answer} />
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
          {screen}          
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
