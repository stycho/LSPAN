import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container header__content">
      <div className="header__title">
        <h2>LSPAN</h2>
      </div>
      <div className="header__buttons">
        <NavLink to="/dashboard" className="button-small" activeClassName="button-small--active">Dash</NavLink>
        <NavLink to="/exam" className="button-small" activeClassName="button-small--active">Exam</NavLink>
        <button className="button-small" onClick={startLogout}>Logout</button>
      </div>
    </div>

  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);