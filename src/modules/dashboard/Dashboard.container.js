import Dashboard from "./Dashboard.component";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as DashboardActions from "./Dashboard.action";

const mapDispatchToProps = (dispatch) => {
  const actions = { ...DashboardActions };
  return bindActionCreators(actions, dispatch);
};

const mapStateToProps = (state) => {
  return {
    wallets: 123,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
