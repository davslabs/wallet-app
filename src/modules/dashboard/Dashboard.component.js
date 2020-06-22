import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap/";
import _ from "lodash";
import Loader from "../../components/spinner/Spinner.component";
import InputSelector from "../../components/selector/InputSelector.component";
import Wallet from "../../components/wallet/Wallet.component";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      selectedWallet: "",
      walletInfo: {},
      rate: 0,
      rateValue: 0,
      currencySelected: 0,
      editRateHandler: false,
    };

    this.handleWalletSelection = this.handleWalletSelection.bind(this);
    this.handleCurrencySelection = this.handleCurrencySelection.bind(this);
    this.handleEditRate = this.handleEditRate.bind(this);
    this.handleEditRateValue = this.handleEditRateValue.bind(this);
    this.handleSaveRateValue = this.handleSaveRateValue.bind(this);
  }

  componentWillMount() {}

  componentDidMount() {
    this.props.getAllWallets();
  }

  componentDidUpdate(prevProps, prevState) {
    const { selectedWallet, currencySelected } = this.state;

    if (this.props.loading !== prevProps.loading) {
      this.setState({
        loading: !this.state.loading,
      });
    }

    if (
      this.props.wallets !== prevProps.wallets &&
      !this.state.selectedWallet
    ) {
      this.setState({
        selectedWallet: this.props.wallets[0].address,
      });
    }

    if (
      this.state.selectedWallet !== prevState.selectedWallet ||
      this.state.currencySelected !== prevState.currencySelected
    ) {
      this.props
        .getWalletAge(selectedWallet)
        .then(() =>
          this.props.getWalletBalanceInCurrency(
            selectedWallet,
            currencySelected
          )
        )
        .then(() => this.props.getExchangeRate(currencySelected));
    }

    if (this.props.walletInfo !== prevProps.walletInfo) {
      this.setState({
        walletInfo: this.props.walletInfo,
      });
    }

    if (this.props.rate !== prevProps.rate) {
      this.setState({
        rate: this.props.rate,
        rateValue: this.props.rate.value,
      });
    }
  }

  handleWalletSelection(e) {
    const address = e.target.value;
    this.setState({
      selectedWallet: address,
    });
  }

  handleCurrencySelection(e) {
    this.setState({
      currencySelected: e.target.value,
    });
  }

  handleEditRate() {
    this.setState({
      editRateHandler: !this.state.editRateHandler,
      rateValue: this.props.rate.value,
    });
  }

  handleEditRateValue(e) {
    this.setState({
      rateValue: e.target.value,
    });
  }

  handleSaveRateValue() {
    const {
      selectedWallet,
      currencySelected,
      editRateHandler,
      rateValue,
    } = this.state;
    this.props
      .updateExchangeRate(currencySelected, rateValue)
      .then(() =>
        this.props.getWalletBalanceInCurrency(selectedWallet, currencySelected)
      )
      .then(() => this.setState({ editRateHandler: !editRateHandler }));
  }

  render() {
    return (
      <div
        style={{
          position: "absolute",
          left: "35vw",
          top: "35vh",
        }}
      >
        <InputSelector
          onWalletSelect={this.handleWalletSelection}
          wallets={this.props.wallets}
          selectedWallet={this.state.selectedWallet}
        />
        <Loader loading={this.state.loading}>
          <Wallet
            walletInfo={this.state.walletInfo}
            rate={this.state.rate.value}
            rateValue={this.state.rateValue}
            onCurrencySelect={this.handleCurrencySelection}
            currencySelected={this.state.currencySelected}
            editRateHandler={this.state.editRateHandler}
            onEditRate={this.handleEditRate}
            onEditRateValue={this.handleEditRateValue}
            onSaveRateValue={this.handleSaveRateValue}
          />
        </Loader>
      </div>
    );
  }
}

export default Dashboard;
