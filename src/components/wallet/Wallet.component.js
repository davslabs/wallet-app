import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
    <Container fluid>
      <Row>
        <Col>{isOld && <AgeDisplay />}</Col>
      </Row>
      <Row>
        <Col>
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
        </Col>
      
        <Col>
          {exchange && (
            <BalanceDisplay
              onCurrencySelect={onCurrencySelect}
              currencySelected={currencySelected}
              balance={exchange.balance}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Wallet;
