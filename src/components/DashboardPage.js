import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startSetResults } from '../actions/results';
import DashboardResults from './DashboardResults';

class DashboardPage extends Component {

  componentDidMount() {
    this.props.dispatch(startSetResults(this.props.uid));
  };
  render() {

    const userResults = this.props.userResults.sort((a, b) => b.date - a.date);

    return(
      <div className="content-container">
        <div className="exam-container">
          {userResults.length > 0 ? <DashboardResults userResults={userResults} className="result-list__container"/> : <p>No results to display.</p>}
        </div>
      </div>
    )
  };
}

const mapStateToProps = (state) => ({
  userResults: state.dashboardResults || [],
  uid: state.auth.uid
});

export default connect(mapStateToProps)(DashboardPage);