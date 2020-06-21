import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import dashboard from "../modules/dashboard/Dashboard.reducer";

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    dashboard,
  });
