import {
  WALLETS_INFO,
  WALLET_AGE,
  WALLET_BALANCE,
  WALLET_BALANCE_IN_CURRENCY,
  EXCHANGE_RATE,
  EXCHANGE_RATE_UPDATE,
} from "./Dashboard.constants";

export function getAllWallets() {
  return {
    type: WALLETS_INFO,
    payload: {
      request: {
        url: "/wallets",
      },
    },
  };
}

export function getWalletAge(address) {
  return {
    type: WALLET_AGE,
    payload: {
      request: {
        url: `/wallet/${address}/age`,
      },
    },
  };
}

export function getWalletBalance(address) {
  return {
    type: WALLET_BALANCE,
    payload: {
      request: {
        url: `/wallet/${address}/balance`,
      },
    },
  };
}

export function getWalletBalanceInCurrency(address, currency) {
  return {
    type: WALLET_BALANCE_IN_CURRENCY,
    payload: {
      request: {
        url: `/wallet/${address}/balance/${currency}`,
      },
    },
  };
}

export function getExchangeRate(currency) {
  return {
    type: EXCHANGE_RATE,
    payload: {
      request: {
        url: `/rate/${currency}`,
      },
    },
  };
}

export function updateExchangeRate(currency, value) {
  return {
    type: EXCHANGE_RATE_UPDATE,
    payload: {
      request: {
        method: "put",
        url: `/rate/${currency}`,
        data: {
          value
        },
      },
    },
  };
}
