import React from "react";
import { Card } from "react-bootstrap";
import RateSelector from "../selector/RateSelector.component";

const BalanceDisplay = ({ balance, onCurrencySelect, currencySelected }) => {
  return (
    <Card style={{ width: "18rem", height: "10rem" }}>
      <Card.Body>
        <Card.Title>Wallet Balance</Card.Title>
        <RateSelector onCurrencySelect={onCurrencySelect} currencySelected={currencySelected} />
        <Card.Text>{balance}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BalanceDisplay;
