import React, { Component } from "react";
import AgeDisplay from "./AgeDisplay.component";
import BalanceDisplay from "./BalanceDisplay.component";
import Exchange from "./Exchange.component";

const Wallet = ({
  walletInfo,
  rate,
  onCurrencySelect,
  onEditRate,
  currencySelected,
  editRateHandler,
  onEditRateValue,
  rateValue,
  onSaveRateValue,
}) => {
  const { exchange, isOld } = walletInfo;

  return (
    <div>
      {isOld && <AgeDisplay />}
      {rate && (
        <Exchange
          rate={rate}
          rateValue={rateValue}
          editRateHandler={editRateHandler}
          onEditRate={onEditRate}
          onEditRateValue={onEditRateValue}
          onSaveRateValue={onSaveRateValue}
        />
      )}
      {exchange && (
        <BalanceDisplay
          onCurrencySelect={onCurrencySelect}
          currencySelected={currencySelected}
          balance={exchange.balance}
        />
      )}
    </div>
  );
};

export default Wallet;
