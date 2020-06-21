import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import RootReducer from "./RootReducer";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    RootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(thunk, routerMiddleware(history)))
  );

  if (module.hot) {
    module.hot.accept("./RootReducer", () =>
      store.replaceReducer(require("./RootReducer").default)
    );
  }

  return store;
}
