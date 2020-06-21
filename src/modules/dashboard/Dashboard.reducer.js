import * as constants from "./Dashboard.constants";

const defaultState = {};

export default function DashboardReducer(state = defaultState, action) {
  switch (action.type) {
    case constants.WALLETS_INFO:
      return {
        ...state,
        loading: true,
      };
    case constants.WALLETS_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data !== undefined ? action.payload.data : null,
      };
    case constants.WALLETS_INFO_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
