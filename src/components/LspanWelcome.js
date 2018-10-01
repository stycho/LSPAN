import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startExam, setExamString } from '../actions/exam';

export const LspanWelcome = (props) => {
  const handleStartExam = () => {
    const generatedLetters = generateTestLetters(props.exam.settings);

    props.dispatch(setExamString(generatedLetters));
    props.dispatch(startExam());
  };

  const generateTestLetters = (settings) => {
    let { lettersPerRound, rounds, allowedChars } = settings;
    let newLetters = [];
  
    for (let i = 0; i < rounds; i++) {
      let letterGroup = '';
      for (let j = 0; j < (lettersPerRound * (i+1)); j++) {
        letterGroup += allowedChars[Math.floor(Math.random() * allowedChars.length)];
      }
      newLetters.push(letterGroup);
    }
    return newLetters;
  }

  return (
    <div className="">
      
      <h3>Press start to begin exam</h3>
      <button className="button" onClick={handleStartExam}>Start</button>
    </div>
  );
};

const mapStateToProps = ({ exam }) => ({
  exam
});

export default connect(mapStateToProps)(LspanWelcome);