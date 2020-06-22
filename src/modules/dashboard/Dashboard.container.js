import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { has } from "lodash";
import * as DashboardActions from "./Dashboard.action";
import Dashboard from "./Dashboard.component";

const mapDispatchToProps = (dispatch) => {
  const actions = { ...DashboardActions };
  return bindActionCreators(actions, dispatch);
};

const mapStateToProps = (state) => {
  return {
    wallets: has(state, "dashboard.wallets") ? state.dashboard.wallets : {},
    walletInfo: has(state, "dashboard.walletInfo")
      ? state.dashboard.walletInfo
      : {},
    rate: has(state, "dashboard.rate") ? state.dashboard.rate : {},
    loading: state.dashboard.loading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
