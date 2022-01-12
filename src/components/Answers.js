import React, { Component } from 'react';
import './index.css';

class Answers extends Component {
    render() {
        return (
            <div className="options">
                <button onClick={() => this.props.clickHandler('Crypto')} className="answer">
                    <p className="answer-text">Crypto</p>
                </button>
                <button onClick={() => this.props.clickHandler('Pokemon')} className="answer">
                    <p className="answer-text">Pokemon</p>
                </button>
            </div>
        );
    }
};

export default Answers;