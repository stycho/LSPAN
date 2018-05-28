import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitUserResponse, endUserPhase, incrementRound, endExam } from '../actions/exam';

export class ExamInputScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      errorMessage: ''
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.userInput) {
      this.setState(() => ({errorMessage: 'Please enter your answer'}));
    } else {
      this.setState(() => ({errorMessage: ''}));
      this.props.dispatch(submitUserResponse(this.state.userInput));
      this.props.dispatch(incrementRound());
      this.props.dispatch(endUserPhase());
      if (this.props.exam.currentRound >= this.props.exam.settings.rounds) {
        this.props.dispatch(endExam());
      }
    }
  }

  handleInputChange = e => {
    const userInput = e.target.value.toUpperCase();
    this.setState(() => ({
      userInput
    }));
  };

  render() {
    return (
      <div className="">
        <form onSubmit={this.handleSubmit}>
          <input className="text-input" autoFocus onChange={this.handleInputChange} type="text" value={this.state.userInput}/>
          {this.state.errorMessage ? <button className="button">{this.state.errorMessage}</button> : <button className="button">Submit</button> }
          
        </form>
      </div>
    );
  };
}

const mapStateToProps = ({ exam }) => ({
  exam
});

export default connect(mapStateToProps)(ExamInputScreen);