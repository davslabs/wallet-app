import { WALLETS_INFO } from "./Dashboard.constants";

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
