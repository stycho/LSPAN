import React, { Component } from 'react';
import { connect } from 'react-redux';
import { endUserPhase, startUserPhase } from '../actions/exam';

export class ExamDisplayScreen extends Component {
  componentDidMount() {
    const roundDuration = this.props.exam.settings.msPerRound;

    setTimeout(() => {
      this.props.dispatch(startUserPhase());
    }, roundDuration);
  };

  formattedString = this.props.exam.generatedString[this.props.exam.currentRound - 1]
    .split('')
    .map((letter, index) => (
      <span key={index}>{letter}</span>
    ));

  render(){
    return(
        <h1 className="exam-container__display-string">{this.formattedString}</h1>
    );
  }
};

const mapStateToProps = ({ exam }) => ({
  exam
});

export default connect(mapStateToProps)(ExamDisplayScreen);