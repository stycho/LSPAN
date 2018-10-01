import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetExam } from '../actions/exam';
import { startAddResult } from '../actions/results';


const ExamResult = (props) => {
  const handleResetExam = () => {
    props.dispatch(resetExam());
  };

  const submitResultData = () => {
    props.dispatch(startAddResult(resultData));
    handleResetExam();
  };

  const formattedResults = props.exam.responseString.map((answer, index) => (
    <div className="exam-container__result-round-format" style={{textAlign: "left"}}>
      <p>Round: {index + 1}</p>
      <li key={answer + 1} style={answer == props.exam.generatedString[index] ? {color: "green"} : {color: "red"}}>{answer.toUpperCase()}</li>
      <li key={index}>{props.exam.generatedString[index]}</li>
      <br />
    </div>
  ));

  const userAnswers = props.exam.responseString.map((answer, index) => (
    <li key={answer + index}>{answer.toUpperCase()}</li>
  ));

  const generatedAnswers = props.exam.generatedString.map((answer, index) => (
    <li key={answer + index}>{answer}</li>
  ));

  let score = 0;

  props.exam.responseString.forEach((answer, index) => {
    if (answer == props.exam.generatedString[index]) {
      score++
    }
  });

  let resultData = {
    date: Date.now(),
    score,
    rounds: props.exam.settings.rounds,
    responses: props.exam.responseString,
    generated: props.exam.generatedString,
    uid: props.uid
  }

  return(
    <div className="content-container">
      <h1>Result Page</h1>
      <ul>{formattedResults}</ul>

      <h2>{score}/{props.exam.settings.rounds}</h2>
      <button className="button" onClick={handleResetExam}>Reset</button>
      
      <button className="button" onClick={submitResultData}>Save Results</button>
    </div>
  );
};

const mapStateToProps = ({ exam, auth }) => ({
  exam,
  uid: auth.uid
});

export default connect(mapStateToProps)(ExamResult);