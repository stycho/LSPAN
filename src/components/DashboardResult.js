import React from 'react';
import moment from 'moment';

const DashboardResult = (props) => (
  <div className="result-list__item">
    <div className="result-list__date">
      <span>{moment(props.date).format("dddd,")}</span>
      <span><span className="result-list__date--highlight">{moment(props.date).format("MMMM Do ")}</span>{moment(props.date).format("YYYY")}</span>
      <span>{moment(props.date).format("H:mm a")}</span>
    </div>
    <div className="result-list__score">
      <h1>{props.score}/{props.rounds}</h1>
    </div>
  </div>
);

export default DashboardResult;