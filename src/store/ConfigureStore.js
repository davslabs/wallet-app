import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";
import { createBrowserHistory } from "history";
import RootReducer from "./RootReducer";

export const history = createBrowserHistory();

const client = axios.create({
  baseURL: "https://test-wallet-rest-api.herokuapp.com/api/v1/",
  responseType: "json",
});

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    RootReducer(history),
    initialState,
    composeEnhancers(
      applyMiddleware(thunk, axiosMiddleware(client), routerMiddleware(history))
    )
  );

  if (module.hot) {
    module.hot.accept("./RootReducer", () =>
      store.replaceReducer(require("./RootReducer").default)
    );
  }

  return store;
}
