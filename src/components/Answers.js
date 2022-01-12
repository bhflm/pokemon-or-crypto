import React from 'react';
import './index.css';

const Answers = () => {
    return (
        <div className="options">
            <button className="answer">
                <p className="answer-text">Crypto</p>
            </button>
            <button className="answer">
                <p className="answer-text">Pokemon</p>
            </button>
        </div>
    );
};

export default Answers;