import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setExamString } from '../actions/exam';
import LspanWelcome from './LspanWelcome';
import LspanExam from './LspanExam';

const ExamPage = ({ currentRound }) => (
  <div className="content-container">
    <div className="exam-container">
      <div className="exam-container__box">
        {currentRound > 0 ? <LspanExam /> : <LspanWelcome />}
      </div>
    </div>
  </div>
);

const mapStateToProps = ({ exam }) => ({
    currentRound: exam.currentRound
});

export default connect(mapStateToProps)(ExamPage);