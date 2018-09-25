import React, { Component } from 'react';
import {connect} from 'react-redux';
import database from '../firebase/firebase';
import { startSetResults } from '../actions/results';

class DashboardPage extends Component {

  componentDidMount() {
    const ref = database.ref('results');
    this.props.dispatch(startSetResults());
  };
  render() {
    console.log(this.props);
    let dashboardResultList = this.props.userResults && this.props.userResults.map(result => {
      return (
        <div key={result.id}>
          <p>{result.date}</p>
          <p>{result.score}/{result.rounds}</p>
        </div>
      )
    });
    console.log(dashboardResultList);

    return(
      <div className="content-container">
        <div className="exam-container">
        {dashboardResultList}
        </div>
      </div>
    )
  };
}

const mapStateToProps = (state) => ({
  userResults: state.dashboardResults || []
});

export default connect(mapStateToProps)(DashboardPage);