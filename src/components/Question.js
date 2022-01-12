import React from 'react';

import './index.css';
const Question = (props) => {
    return (
        <div className="question">
            <p className="question-text">{props.text}</p>
        </div> 
    );
};

export default Question;