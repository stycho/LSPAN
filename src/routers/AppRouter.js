import React from 'react';
import {
  Router,
  Route,
  Switch,
  Link,
  NavLink
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';
import DashboardPage from '../components/DashboardPage';
import ExamPage from '../components/ExamPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <Route render={({ location }) => (
      <div>
      <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={0}>
          <Switch location={location}>
            <PublicRoute exact path="/" component={LoginPage} />
            <PrivateRoute path="/exam" component={ExamPage} />
            <PrivateRoute path="/dashboard" component={DashboardPage} />
            <Route exact component={NotFoundPage} />
          </Switch>
          </CSSTransition>
          </TransitionGroup>
      </div>
    )} />
  </Router>
);

export default AppRouter;

// <TransitionGroup>
// <CSSTransition key={location.key} classNames="fade" timeout={250}>
// </CSSTransition>
// </TransitionGroup>