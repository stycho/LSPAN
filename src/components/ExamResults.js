import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetExam } from '../actions/exam';

const ExamResult = (props) => {
  const handleResetExam = () => {
    props.dispatch(resetExam());
  };

  const formattedResults = props.exam.responseString.map((answer, index) => (
    <div className="exam-container__result-round-format" style={{textAlign: "left"}}>
      <p>Round: {index + 1}</p>
      <li key={answer} style={answer == props.exam.generatedString[index] ? {color: "green"} : {color: "red"}}>{answer.toUpperCase()}</li>
      <li key={index}>{props.exam.generatedString[index]}</li>
      <br />
    </div>
  ));

  const userAnswers = props.exam.responseString.map((answer) => (
    <li key={answer}>{answer.toUpperCase()}</li>
  ));

  const generatedAnswers = props.exam.generatedString.map((answer) => (
    <li key={answer}>{answer}</li>
  ));

  let score = 0;

  props.exam.responseString.forEach((answer, index) => {
    if (answer == props.exam.generatedString[index]) {
      score++
    }
  });

  return(
    <div className="content-container">
      <h1>Result Page</h1>
      <ul>{formattedResults}</ul>

      <h2>{score}/{props.exam.settings.rounds}</h2>
      <button className="button" onClick={handleResetExam}>Reset</button>
    </div>
  );
};

const mapStateToProps = ({ exam }) => ({
    exam
});

export default connect(mapStateToProps)(ExamResult);