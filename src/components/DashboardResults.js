import React, { Fragment } from 'react';
import DashboardResult from './DashboardResult';

const DashboardResults = (props) => {
  let results = props.userResults.map(result => (
    <DashboardResult key={result.id} {...result} />
  ));
  return (
    <div className="">
      {results}
    </div>
  );
};

export default DashboardResults;