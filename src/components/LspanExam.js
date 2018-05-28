import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetExam, startUserPhase, endUserPhase } from '../actions/exam';
import ExamInputScreen from './ExamInputScreen';
import ExamDisplayScreen from './ExamDisplayScreen';
import ExamResults from './ExamResults';

export class LspanExam extends Component {

  render() {
    if (this.props.exam.isFinished) {
      return (
        <ExamResults />
      );
    } else if (this.props.exam.isUserPhase) {
      return (
        <ExamInputScreen />
      );
    } else {
      return(
        <ExamDisplayScreen />
      );
    }
  }
}

const mapStateToProps = ({ exam }) => ({
  exam
});

export default connect(mapStateToProps)(LspanExam);