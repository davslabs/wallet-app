import has from "lodash";
import * as constants from "./Dashboard.constants";

const defaultState = {
  loading: true,
  wallets: {},
  walletInfo: {},
};

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
        wallets: has(action, "payload.data.wallets")
          ? action.payload.data.wallets
          : {},
      };
    case constants.WALLETS_INFO_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case constants.WALLET_AGE:
      return {
        ...state,
        loading: true,
      };
    case constants.WALLET_AGE_SUCCESS:
      return {
        ...state,
        walletInfo: {
          ...state.walletInfo,
          ...action.payload.data,
        },
        loading: false,
      };
    case constants.WALLET_AGE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case constants.WALLET_BALANCE:
      return {
        ...state,
        loading: true,
      };
    case constants.WALLET_BALANCE_SUCCESS:
      return {
        ...state,
        walletInfo: {
          ...state.walletInfo,
          ethBalance: action.payload.data.value,
        },
        loading: false,
      };
    case constants.WALLET_BALANCE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case constants.WALLET_BALANCE_IN_CURRENCY:
      return {
        ...state,
        loading: true,
      };
    case constants.WALLET_BALANCE_IN_CURRENCY_SUCCESS:
      return {
        ...state,
        walletInfo: {
          ...state.walletInfo,
          exchange: action.payload.data,
        },
        loading: false,
      };
    case constants.WALLET_BALANCE_IN_CURRENCY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case constants.EXCHANGE_RATE:
      return {
        ...state,
        loading: true,
      };
    case constants.EXCHANGE_RATE_SUCCESS:
      return {
        ...state,
        rate: action.payload.data,
        loading: false,
      };
    case constants.EXCHANGE_RATE_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    case constants.EXCHANGE_RATE_UPDATE:
      return {
        ...state,
        loading: true,
      };
    case constants.EXCHANGE_RATE_UPDATE_SUCCESS:
      return {
        ...state,
        rate: action.payload.data,
        loading: false,
      };
    case constants.EXCHANGE_RATE_UPDATE_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
}
