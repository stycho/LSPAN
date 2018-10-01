import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">LSPAN Test</h1>
      <p>The Letter Span test is designed to test one's short term memory. A sequence of random letters will be shown and you will be required to reproduce the sequence by typing it in. The sequence will increase in length each round until the end where you will be given your score. Login to get started!</p>
      <button className="button" onClick={startLogin}>Login with Google</button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage);