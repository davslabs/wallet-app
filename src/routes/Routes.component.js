import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import routeConfig from "../modules/Modules.routes";

class Routes extends Component {
  render() {
    const { history } = this.props;

    const routes = Object.keys(routeConfig).map((key) => {
      const route = routeConfig[key];
      return <Route key={key} {...route} />;
    });

    return (
      <ConnectedRouter history={history}>
        <div>          
          <Switch>
            {routes}                        
            <Redirect to="/dashboard" />
          </Switch>        
        </div>
      </ConnectedRouter>
    );
  }
}

export default Routes;
