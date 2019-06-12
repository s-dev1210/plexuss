import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Header from './components/Header';
import Front_Dashboard from './components/Front_Dashboard'

class App extends Component {
  componentDidUpdate(prevProps) {
    if(this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <div>
        <Route component={ Header }/>
					<Switch>
						<Route path="/" exact component={ Front_Dashboard } />
					</Switch>
      </div>
    )
  }
}

export default withRouter(App);
