import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { AppContainer } from "react-hot-loader";
import Routes from "./routes/Routes.container";
import configureStore, { history } from "./store/ConfigureStore";
import "bootstrap/dist/css/bootstrap.min.css";

const store = configureStore();
const rootEl = document.getElementById("root");

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <Routes history={history} />
    </Provider>
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept("./routes/Routes.component", () => {
    const NextApp = require("./routes/Routes.component").default;
    ReactDOM.render(
      <AppContainer>
        <NextApp store={store} />
      </AppContainer>,
      rootEl
    );
  });
}
