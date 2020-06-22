import React from "react";
import { Row, Col, Alert } from "react-bootstrap";

const AgeDisplay = () => {
  return (
    <Row>
      <Col>
        <Alert variant="danger">
          Wallet is old!
        </Alert>
      </Col>
    </Row>
  );
};

export default AgeDisplay;
